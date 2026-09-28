-- CloudflareIdentity SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("cloudflare-identity_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local CloudflareIdentitySDK = {}
CloudflareIdentitySDK.__index = CloudflareIdentitySDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

CloudflareIdentitySDK._make_feature = _make_feature


function CloudflareIdentitySDK.new(options)
  local self = setmetatable({}, CloudflareIdentitySDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: test


  return self
end


function CloudflareIdentitySDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function CloudflareIdentitySDK:get_utility()
  return Utility.copy(self._utility)
end


function CloudflareIdentitySDK:get_root_ctx()
  return self._rootctx
end


function CloudflareIdentitySDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function CloudflareIdentitySDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function CloudflareIdentitySDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function CloudflareIdentitySDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "CloudflareIdentitySDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function CloudflareIdentitySDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function CloudflareIdentitySDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "CloudflareIdentitySDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:AaaAuditLogsV2OrgHistoryResponseCollection():list() / client:AaaAuditLogsV2OrgHistoryResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:AaaAuditLogsV2OrgHistoryResponseCollection(data)
  local EntityMod = require("entity.aaa_audit_logs_v2_org_history_response_collection_entity")
  if data == nil then
    if self._aaa_audit_logs_v2_org_history_response_collection == nil then
      self._aaa_audit_logs_v2_org_history_response_collection = EntityMod.new(self, nil)
    end
    return self._aaa_audit_logs_v2_org_history_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AaaAuditLogsV2OrgResponseCollection():list() / client:AaaAuditLogsV2OrgResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:AaaAuditLogsV2OrgResponseCollection(data)
  local EntityMod = require("entity.aaa_audit_logs_v2_org_response_collection_entity")
  if data == nil then
    if self._aaa_audit_logs_v2_org_response_collection == nil then
      self._aaa_audit_logs_v2_org_response_collection = EntityMod.new(self, nil)
    end
    return self._aaa_audit_logs_v2_org_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Account():list() / client:Account():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:Account(data)
  local EntityMod = require("entity.account_entity")
  if data == nil then
    if self._account == nil then
      self._account = EntityMod.new(self, nil)
    end
    return self._account
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AccountResourceGroup():list() / client:AccountResourceGroup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:AccountResourceGroup(data)
  local EntityMod = require("entity.account_resource_group_entity")
  if data == nil then
    if self._account_resource_group == nil then
      self._account_resource_group = EntityMod.new(self, nil)
    end
    return self._account_resource_group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AccountUserGroup():list() / client:AccountUserGroup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:AccountUserGroup(data)
  local EntityMod = require("entity.account_user_group_entity")
  if data == nil then
    if self._account_user_group == nil then
      self._account_user_group = EntityMod.new(self, nil)
    end
    return self._account_user_group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AccountUserGroupMember():list() / client:AccountUserGroupMember():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:AccountUserGroupMember(data)
  local EntityMod = require("entity.account_user_group_member_entity")
  if data == nil then
    if self._account_user_group_member == nil then
      self._account_user_group_member = EntityMod.new(self, nil)
    end
    return self._account_user_group_member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BeginVerification():list() / client:BeginVerification():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:BeginVerification(data)
  local EntityMod = require("entity.begin_verification_entity")
  if data == nil then
    if self._begin_verification == nil then
      self._begin_verification = EntityMod.new(self, nil)
    end
    return self._begin_verification
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillSubsApiClientSecretResponseSingle():list() / client:BillSubsApiClientSecretResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:BillSubsApiClientSecretResponseSingle(data)
  local EntityMod = require("entity.bill_subs_api_client_secret_response_single_entity")
  if data == nil then
    if self._bill_subs_api_client_secret_response_single == nil then
      self._bill_subs_api_client_secret_response_single = EntityMod.new(self, nil)
    end
    return self._bill_subs_api_client_secret_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BillableUsageApiV2Usage():list() / client:BillableUsageApiV2Usage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:BillableUsageApiV2Usage(data)
  local EntityMod = require("entity.billable_usage_api_v2_usage_entity")
  if data == nil then
    if self._billable_usage_api_v2_usage == nil then
      self._billable_usage_api_v2_usage = EntityMod.new(self, nil)
    end
    return self._billable_usage_api_v2_usage
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DnsCustomNameserversEmptyResponse3():list() / client:DnsCustomNameserversEmptyResponse3():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:DnsCustomNameserversEmptyResponse3(data)
  local EntityMod = require("entity.dns_custom_nameservers_empty_response_3_entity")
  if data == nil then
    if self._dns_custom_nameservers_empty_response_3 == nil then
      self._dns_custom_nameservers_empty_response_3 = EntityMod.new(self, nil)
    end
    return self._dns_custom_nameservers_empty_response_3
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DnsCustomNameserversTcnsResponseCollection():list() / client:DnsCustomNameserversTcnsResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:DnsCustomNameserversTcnsResponseCollection(data)
  local EntityMod = require("entity.dns_custom_nameservers_tcns_response_collection_entity")
  if data == nil then
    if self._dns_custom_nameservers_tcns_response_collection == nil then
      self._dns_custom_nameservers_tcns_response_collection = EntityMod.new(self, nil)
    end
    return self._dns_custom_nameservers_tcns_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DnsCustomNameserversTcnsResponseSingle():list() / client:DnsCustomNameserversTcnsResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:DnsCustomNameserversTcnsResponseSingle(data)
  local EntityMod = require("entity.dns_custom_nameservers_tcns_response_single_entity")
  if data == nil then
    if self._dns_custom_nameservers_tcns_response_single == nil then
      self._dns_custom_nameservers_tcns_response_single = EntityMod.new(self, nil)
    end
    return self._dns_custom_nameservers_tcns_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamApiResponseSingleId():list() / client:IamApiResponseSingleId():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamApiResponseSingleId(data)
  local EntityMod = require("entity.iam_api_response_single_id_entity")
  if data == nil then
    if self._iam_api_response_single_id == nil then
      self._iam_api_response_single_id = EntityMod.new(self, nil)
    end
    return self._iam_api_response_single_id
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamCollectionMemberResponseWithPolicy():list() / client:IamCollectionMemberResponseWithPolicy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamCollectionMemberResponseWithPolicy(data)
  local EntityMod = require("entity.iam_collection_member_response_with_policy_entity")
  if data == nil then
    if self._iam_collection_member_response_with_policy == nil then
      self._iam_collection_member_response_with_policy = EntityMod.new(self, nil)
    end
    return self._iam_collection_member_response_with_policy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamCollectionOauthClient():list() / client:IamCollectionOauthClient():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamCollectionOauthClient(data)
  local EntityMod = require("entity.iam_collection_oauth_client_entity")
  if data == nil then
    if self._iam_collection_oauth_client == nil then
      self._iam_collection_oauth_client = EntityMod.new(self, nil)
    end
    return self._iam_collection_oauth_client
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamCollectionOauthScope():list() / client:IamCollectionOauthScope():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamCollectionOauthScope(data)
  local EntityMod = require("entity.iam_collection_oauth_scope_entity")
  if data == nil then
    if self._iam_collection_oauth_scope == nil then
      self._iam_collection_oauth_scope = EntityMod.new(self, nil)
    end
    return self._iam_collection_oauth_scope
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamCollectionOrganization():list() / client:IamCollectionOrganization():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamCollectionOrganization(data)
  local EntityMod = require("entity.iam_collection_organization_entity")
  if data == nil then
    if self._iam_collection_organization == nil then
      self._iam_collection_organization = EntityMod.new(self, nil)
    end
    return self._iam_collection_organization
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamCollectionPermissionGroup():list() / client:IamCollectionPermissionGroup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamCollectionPermissionGroup(data)
  local EntityMod = require("entity.iam_collection_permission_group_entity")
  if data == nil then
    if self._iam_collection_permission_group == nil then
      self._iam_collection_permission_group = EntityMod.new(self, nil)
    end
    return self._iam_collection_permission_group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamCollectionRole():list() / client:IamCollectionRole():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamCollectionRole(data)
  local EntityMod = require("entity.iam_collection_role_entity")
  if data == nil then
    if self._iam_collection_role == nil then
      self._iam_collection_role = EntityMod.new(self, nil)
    end
    return self._iam_collection_role
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamCollectionToken():list() / client:IamCollectionToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamCollectionToken(data)
  local EntityMod = require("entity.iam_collection_token_entity")
  if data == nil then
    if self._iam_collection_token == nil then
      self._iam_collection_token = EntityMod.new(self, nil)
    end
    return self._iam_collection_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamOauthClientRotateSecret():list() / client:IamOauthClientRotateSecret():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamOauthClientRotateSecret(data)
  local EntityMod = require("entity.iam_oauth_client_rotate_secret_entity")
  if data == nil then
    if self._iam_oauth_client_rotate_secret == nil then
      self._iam_oauth_client_rotate_secret = EntityMod.new(self, nil)
    end
    return self._iam_oauth_client_rotate_secret
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamPermissionsGroupResponseCollection():list() / client:IamPermissionsGroupResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamPermissionsGroupResponseCollection(data)
  local EntityMod = require("entity.iam_permissions_group_response_collection_entity")
  if data == nil then
    if self._iam_permissions_group_response_collection == nil then
      self._iam_permissions_group_response_collection = EntityMod.new(self, nil)
    end
    return self._iam_permissions_group_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamResponseSingleValue():list() / client:IamResponseSingleValue():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamResponseSingleValue(data)
  local EntityMod = require("entity.iam_response_single_value_entity")
  if data == nil then
    if self._iam_response_single_value == nil then
      self._iam_response_single_value = EntityMod.new(self, nil)
    end
    return self._iam_response_single_value
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamSchemasCollectionInvite():list() / client:IamSchemasCollectionInvite():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamSchemasCollectionInvite(data)
  local EntityMod = require("entity.iam_schemas_collection_invite_entity")
  if data == nil then
    if self._iam_schemas_collection_invite == nil then
      self._iam_schemas_collection_invite = EntityMod.new(self, nil)
    end
    return self._iam_schemas_collection_invite
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamSingleInvite():list() / client:IamSingleInvite():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamSingleInvite(data)
  local EntityMod = require("entity.iam_single_invite_entity")
  if data == nil then
    if self._iam_single_invite == nil then
      self._iam_single_invite = EntityMod.new(self, nil)
    end
    return self._iam_single_invite
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamSingleMemberResponseWithPolicy():list() / client:IamSingleMemberResponseWithPolicy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamSingleMemberResponseWithPolicy(data)
  local EntityMod = require("entity.iam_single_member_response_with_policy_entity")
  if data == nil then
    if self._iam_single_member_response_with_policy == nil then
      self._iam_single_member_response_with_policy = EntityMod.new(self, nil)
    end
    return self._iam_single_member_response_with_policy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamSingleMembershipResponseWithPolicy():list() / client:IamSingleMembershipResponseWithPolicy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamSingleMembershipResponseWithPolicy(data)
  local EntityMod = require("entity.iam_single_membership_response_with_policy_entity")
  if data == nil then
    if self._iam_single_membership_response_with_policy == nil then
      self._iam_single_membership_response_with_policy = EntityMod.new(self, nil)
    end
    return self._iam_single_membership_response_with_policy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamSingleOauthClient():list() / client:IamSingleOauthClient():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamSingleOauthClient(data)
  local EntityMod = require("entity.iam_single_oauth_client_entity")
  if data == nil then
    if self._iam_single_oauth_client == nil then
      self._iam_single_oauth_client = EntityMod.new(self, nil)
    end
    return self._iam_single_oauth_client
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamSingleOauthClientCreate():list() / client:IamSingleOauthClientCreate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamSingleOauthClientCreate(data)
  local EntityMod = require("entity.iam_single_oauth_client_create_entity")
  if data == nil then
    if self._iam_single_oauth_client_create == nil then
      self._iam_single_oauth_client_create = EntityMod.new(self, nil)
    end
    return self._iam_single_oauth_client_create
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamSingleOrganization():list() / client:IamSingleOrganization():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamSingleOrganization(data)
  local EntityMod = require("entity.iam_single_organization_entity")
  if data == nil then
    if self._iam_single_organization == nil then
      self._iam_single_organization = EntityMod.new(self, nil)
    end
    return self._iam_single_organization
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamSinglePermissionGroup():list() / client:IamSinglePermissionGroup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamSinglePermissionGroup(data)
  local EntityMod = require("entity.iam_single_permission_group_entity")
  if data == nil then
    if self._iam_single_permission_group == nil then
      self._iam_single_permission_group = EntityMod.new(self, nil)
    end
    return self._iam_single_permission_group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamSingleRole():list() / client:IamSingleRole():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamSingleRole(data)
  local EntityMod = require("entity.iam_single_role_entity")
  if data == nil then
    if self._iam_single_role == nil then
      self._iam_single_role = EntityMod.new(self, nil)
    end
    return self._iam_single_role
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamSingleToken():list() / client:IamSingleToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamSingleToken(data)
  local EntityMod = require("entity.iam_single_token_entity")
  if data == nil then
    if self._iam_single_token == nil then
      self._iam_single_token = EntityMod.new(self, nil)
    end
    return self._iam_single_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamSingleTokenCreate():list() / client:IamSingleTokenCreate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamSingleTokenCreate(data)
  local EntityMod = require("entity.iam_single_token_create_entity")
  if data == nil then
    if self._iam_single_token_create == nil then
      self._iam_single_token_create = EntityMod.new(self, nil)
    end
    return self._iam_single_token_create
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamSsoConnector():list() / client:IamSsoConnector():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamSsoConnector(data)
  local EntityMod = require("entity.iam_sso_connector_entity")
  if data == nil then
    if self._iam_sso_connector == nil then
      self._iam_sso_connector = EntityMod.new(self, nil)
    end
    return self._iam_sso_connector
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamSsoConnectorCollection():list() / client:IamSsoConnectorCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamSsoConnectorCollection(data)
  local EntityMod = require("entity.iam_sso_connector_collection_entity")
  if data == nil then
    if self._iam_sso_connector_collection == nil then
      self._iam_sso_connector_collection = EntityMod.new(self, nil)
    end
    return self._iam_sso_connector_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IamTokenVerifyResponseSingleSegment():list() / client:IamTokenVerifyResponseSingleSegment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:IamTokenVerifyResponseSingleSegment(data)
  local EntityMod = require("entity.iam_token_verify_response_single_segment_entity")
  if data == nil then
    if self._iam_token_verify_response_single_segment == nil then
      self._iam_token_verify_response_single_segment = EntityMod.new(self, nil)
    end
    return self._iam_token_verify_response_single_segment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Member():list() / client:Member():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:Member(data)
  local EntityMod = require("entity.member_entity")
  if data == nil then
    if self._member == nil then
      self._member = EntityMod.new(self, nil)
    end
    return self._member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OauthClient():list() / client:OauthClient():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:OauthClient(data)
  local EntityMod = require("entity.oauth_client_entity")
  if data == nil then
    if self._oauth_client == nil then
      self._oauth_client = EntityMod.new(self, nil)
    end
    return self._oauth_client
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Organization():list() / client:Organization():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:Organization(data)
  local EntityMod = require("entity.organization_entity")
  if data == nil then
    if self._organization == nil then
      self._organization = EntityMod.new(self, nil)
    end
    return self._organization
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationMember():list() / client:OrganizationMember():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:OrganizationMember(data)
  local EntityMod = require("entity.organization_member_entity")
  if data == nil then
    if self._organization_member == nil then
      self._organization_member = EntityMod.new(self, nil)
    end
    return self._organization_member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrganizationsApiProfile():list() / client:OrganizationsApiProfile():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:OrganizationsApiProfile(data)
  local EntityMod = require("entity.organizations_api_profile_entity")
  if data == nil then
    if self._organizations_api_profile == nil then
      self._organizations_api_profile = EntityMod.new(self, nil)
    end
    return self._organizations_api_profile
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Resource():list() / client:Resource():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:Resource(data)
  local EntityMod = require("entity.resource_entity")
  if data == nil then
    if self._resource == nil then
      self._resource = EntityMod.new(self, nil)
    end
    return self._resource
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ResourceGroup():list() / client:ResourceGroup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:ResourceGroup(data)
  local EntityMod = require("entity.resource_group_entity")
  if data == nil then
    if self._resource_group == nil then
      self._resource_group = EntityMod.new(self, nil)
    end
    return self._resource_group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ResourceSharing():list() / client:ResourceSharing():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:ResourceSharing(data)
  local EntityMod = require("entity.resource_sharing_entity")
  if data == nil then
    if self._resource_sharing == nil then
      self._resource_sharing = EntityMod.new(self, nil)
    end
    return self._resource_sharing
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ResourceSharingShareExcludedRecipientResponseCollection():list() / client:ResourceSharingShareExcludedRecipientResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:ResourceSharingShareExcludedRecipientResponseCollection(data)
  local EntityMod = require("entity.resource_sharing_share_excluded_recipient_response_collection_entity")
  if data == nil then
    if self._resource_sharing_share_excluded_recipient_response_collection == nil then
      self._resource_sharing_share_excluded_recipient_response_collection = EntityMod.new(self, nil)
    end
    return self._resource_sharing_share_excluded_recipient_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ResourceSharingShareExcludedRecipientResponseSingle():list() / client:ResourceSharingShareExcludedRecipientResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:ResourceSharingShareExcludedRecipientResponseSingle(data)
  local EntityMod = require("entity.resource_sharing_share_excluded_recipient_response_single_entity")
  if data == nil then
    if self._resource_sharing_share_excluded_recipient_response_single == nil then
      self._resource_sharing_share_excluded_recipient_response_single = EntityMod.new(self, nil)
    end
    return self._resource_sharing_share_excluded_recipient_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ResourceSharingShareRecipientResponseCollection():list() / client:ResourceSharingShareRecipientResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:ResourceSharingShareRecipientResponseCollection(data)
  local EntityMod = require("entity.resource_sharing_share_recipient_response_collection_entity")
  if data == nil then
    if self._resource_sharing_share_recipient_response_collection == nil then
      self._resource_sharing_share_recipient_response_collection = EntityMod.new(self, nil)
    end
    return self._resource_sharing_share_recipient_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ResourceSharingShareRecipientResponseSingle():list() / client:ResourceSharingShareRecipientResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:ResourceSharingShareRecipientResponseSingle(data)
  local EntityMod = require("entity.resource_sharing_share_recipient_response_single_entity")
  if data == nil then
    if self._resource_sharing_share_recipient_response_single == nil then
      self._resource_sharing_share_recipient_response_single = EntityMod.new(self, nil)
    end
    return self._resource_sharing_share_recipient_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ResourceSharingShareResponseCollection():list() / client:ResourceSharingShareResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:ResourceSharingShareResponseCollection(data)
  local EntityMod = require("entity.resource_sharing_share_response_collection_entity")
  if data == nil then
    if self._resource_sharing_share_response_collection == nil then
      self._resource_sharing_share_response_collection = EntityMod.new(self, nil)
    end
    return self._resource_sharing_share_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ResourceSharingShareResponseSingle():list() / client:ResourceSharingShareResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:ResourceSharingShareResponseSingle(data)
  local EntityMod = require("entity.resource_sharing_share_response_single_entity")
  if data == nil then
    if self._resource_sharing_share_response_single == nil then
      self._resource_sharing_share_response_single = EntityMod.new(self, nil)
    end
    return self._resource_sharing_share_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ScimDiscovery():list() / client:ScimDiscovery():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:ScimDiscovery(data)
  local EntityMod = require("entity.scim_discovery_entity")
  if data == nil then
    if self._scim_discovery == nil then
      self._scim_discovery = EntityMod.new(self, nil)
    end
    return self._scim_discovery
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ScimGroup():list() / client:ScimGroup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:ScimGroup(data)
  local EntityMod = require("entity.scim_group_entity")
  if data == nil then
    if self._scim_group == nil then
      self._scim_group = EntityMod.new(self, nil)
    end
    return self._scim_group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ScimUser():list() / client:ScimUser():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:ScimUser(data)
  local EntityMod = require("entity.scim_user_entity")
  if data == nil then
    if self._scim_user == nil then
      self._scim_user = EntityMod.new(self, nil)
    end
    return self._scim_user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SsoConnector():list() / client:SsoConnector():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:SsoConnector(data)
  local EntityMod = require("entity.sso_connector_entity")
  if data == nil then
    if self._sso_connector == nil then
      self._sso_connector = EntityMod.new(self, nil)
    end
    return self._sso_connector
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Tenant():list() / client:Tenant():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:Tenant(data)
  local EntityMod = require("entity.tenant_entity")
  if data == nil then
    if self._tenant == nil then
      self._tenant = EntityMod.new(self, nil)
    end
    return self._tenant
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Token():list() / client:Token():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:Token(data)
  local EntityMod = require("entity.token_entity")
  if data == nil then
    if self._token == nil then
      self._token = EntityMod.new(self, nil)
    end
    return self._token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:User():list() / client:User():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:User(data)
  local EntityMod = require("entity.user_entity")
  if data == nil then
    if self._user == nil then
      self._user = EntityMod.new(self, nil)
    end
    return self._user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UserGroup():list() / client:UserGroup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:UserGroup(data)
  local EntityMod = require("entity.user_group_entity")
  if data == nil then
    if self._user_group == nil then
      self._user_group = EntityMod.new(self, nil)
    end
    return self._user_group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UsersAccountMembership():list() / client:UsersAccountMembership():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:UsersAccountMembership(data)
  local EntityMod = require("entity.users_account_membership_entity")
  if data == nil then
    if self._users_account_membership == nil then
      self._users_account_membership = EntityMod.new(self, nil)
    end
    return self._users_account_membership
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UsersOrganization():list() / client:UsersOrganization():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareIdentitySDK:UsersOrganization(data)
  local EntityMod = require("entity.users_organization_entity")
  if data == nil then
    if self._users_organization == nil then
      self._users_organization = EntityMod.new(self, nil)
    end
    return self._users_organization
  end
  return EntityMod.new(self, data)
end




function CloudflareIdentitySDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = CloudflareIdentitySDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return CloudflareIdentitySDK
