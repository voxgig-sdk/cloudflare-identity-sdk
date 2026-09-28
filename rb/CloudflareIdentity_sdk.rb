# CloudflareIdentity SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'CloudflareIdentity_types'


class CloudflareIdentitySDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = CloudflareIdentityUtility.new
    @_utility = utility

    config = CloudflareIdentityConfig.shared_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = CloudflareIdentityHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = CloudflareIdentityHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, CloudflareIdentityFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    CloudflareIdentityUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = CloudflareIdentityHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = CloudflareIdentityHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = CloudflareIdentityHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = CloudflareIdentitySpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    allow_op.is_a?(String) && allow_op.include?(op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => CloudflareIdentityError.new(
        "#{op}_allow",
        "CloudflareIdentitySDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\""),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue CloudflareIdentityError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = CloudflareIdentityHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = CloudflareIdentityHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = CloudflareIdentityError.new(
        "graphql_error", "CloudflareIdentitySDK: graphql: #{msg}")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.AaaAuditLogsV2OrgHistoryResponseCollection.list / client.AaaAuditLogsV2OrgHistoryResponseCollection.load({ "id" => ... })
  def AaaAuditLogsV2OrgHistoryResponseCollection(data = nil)
    require_relative 'entity/aaa_audit_logs_v2_org_history_response_collection_entity'
    AaaAuditLogsV2OrgHistoryResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.AaaAuditLogsV2OrgResponseCollection.list / client.AaaAuditLogsV2OrgResponseCollection.load({ "id" => ... })
  def AaaAuditLogsV2OrgResponseCollection(data = nil)
    require_relative 'entity/aaa_audit_logs_v2_org_response_collection_entity'
    AaaAuditLogsV2OrgResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.Account.list / client.Account.load({ "id" => ... })
  def Account(data = nil)
    require_relative 'entity/account_entity'
    AccountEntity.new(self, data)
  end


  # Canonical facade: client.AccountResourceGroup.list / client.AccountResourceGroup.load({ "id" => ... })
  def AccountResourceGroup(data = nil)
    require_relative 'entity/account_resource_group_entity'
    AccountResourceGroupEntity.new(self, data)
  end


  # Canonical facade: client.AccountUserGroup.list / client.AccountUserGroup.load({ "id" => ... })
  def AccountUserGroup(data = nil)
    require_relative 'entity/account_user_group_entity'
    AccountUserGroupEntity.new(self, data)
  end


  # Canonical facade: client.AccountUserGroupMember.list / client.AccountUserGroupMember.load({ "id" => ... })
  def AccountUserGroupMember(data = nil)
    require_relative 'entity/account_user_group_member_entity'
    AccountUserGroupMemberEntity.new(self, data)
  end


  # Canonical facade: client.BeginVerification.list / client.BeginVerification.load({ "id" => ... })
  def BeginVerification(data = nil)
    require_relative 'entity/begin_verification_entity'
    BeginVerificationEntity.new(self, data)
  end


  # Canonical facade: client.BillSubsApiClientSecretResponseSingle.list / client.BillSubsApiClientSecretResponseSingle.load({ "id" => ... })
  def BillSubsApiClientSecretResponseSingle(data = nil)
    require_relative 'entity/bill_subs_api_client_secret_response_single_entity'
    BillSubsApiClientSecretResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.BillableUsageApiV2Usage.list / client.BillableUsageApiV2Usage.load({ "id" => ... })
  def BillableUsageApiV2Usage(data = nil)
    require_relative 'entity/billable_usage_api_v2_usage_entity'
    BillableUsageApiV2UsageEntity.new(self, data)
  end


  # Canonical facade: client.DnsCustomNameserversEmptyResponse3.list / client.DnsCustomNameserversEmptyResponse3.load({ "id" => ... })
  def DnsCustomNameserversEmptyResponse3(data = nil)
    require_relative 'entity/dns_custom_nameservers_empty_response_3_entity'
    DnsCustomNameserversEmptyResponse3Entity.new(self, data)
  end


  # Canonical facade: client.DnsCustomNameserversTcnsResponseCollection.list / client.DnsCustomNameserversTcnsResponseCollection.load({ "id" => ... })
  def DnsCustomNameserversTcnsResponseCollection(data = nil)
    require_relative 'entity/dns_custom_nameservers_tcns_response_collection_entity'
    DnsCustomNameserversTcnsResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.DnsCustomNameserversTcnsResponseSingle.list / client.DnsCustomNameserversTcnsResponseSingle.load({ "id" => ... })
  def DnsCustomNameserversTcnsResponseSingle(data = nil)
    require_relative 'entity/dns_custom_nameservers_tcns_response_single_entity'
    DnsCustomNameserversTcnsResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.IamApiResponseSingleId.list / client.IamApiResponseSingleId.load({ "id" => ... })
  def IamApiResponseSingleId(data = nil)
    require_relative 'entity/iam_api_response_single_id_entity'
    IamApiResponseSingleIdEntity.new(self, data)
  end


  # Canonical facade: client.IamCollectionMemberResponseWithPolicy.list / client.IamCollectionMemberResponseWithPolicy.load({ "id" => ... })
  def IamCollectionMemberResponseWithPolicy(data = nil)
    require_relative 'entity/iam_collection_member_response_with_policy_entity'
    IamCollectionMemberResponseWithPolicyEntity.new(self, data)
  end


  # Canonical facade: client.IamCollectionOauthClient.list / client.IamCollectionOauthClient.load({ "id" => ... })
  def IamCollectionOauthClient(data = nil)
    require_relative 'entity/iam_collection_oauth_client_entity'
    IamCollectionOauthClientEntity.new(self, data)
  end


  # Canonical facade: client.IamCollectionOauthScope.list / client.IamCollectionOauthScope.load({ "id" => ... })
  def IamCollectionOauthScope(data = nil)
    require_relative 'entity/iam_collection_oauth_scope_entity'
    IamCollectionOauthScopeEntity.new(self, data)
  end


  # Canonical facade: client.IamCollectionOrganization.list / client.IamCollectionOrganization.load({ "id" => ... })
  def IamCollectionOrganization(data = nil)
    require_relative 'entity/iam_collection_organization_entity'
    IamCollectionOrganizationEntity.new(self, data)
  end


  # Canonical facade: client.IamCollectionPermissionGroup.list / client.IamCollectionPermissionGroup.load({ "id" => ... })
  def IamCollectionPermissionGroup(data = nil)
    require_relative 'entity/iam_collection_permission_group_entity'
    IamCollectionPermissionGroupEntity.new(self, data)
  end


  # Canonical facade: client.IamCollectionRole.list / client.IamCollectionRole.load({ "id" => ... })
  def IamCollectionRole(data = nil)
    require_relative 'entity/iam_collection_role_entity'
    IamCollectionRoleEntity.new(self, data)
  end


  # Canonical facade: client.IamCollectionToken.list / client.IamCollectionToken.load({ "id" => ... })
  def IamCollectionToken(data = nil)
    require_relative 'entity/iam_collection_token_entity'
    IamCollectionTokenEntity.new(self, data)
  end


  # Canonical facade: client.IamOauthClientRotateSecret.list / client.IamOauthClientRotateSecret.load({ "id" => ... })
  def IamOauthClientRotateSecret(data = nil)
    require_relative 'entity/iam_oauth_client_rotate_secret_entity'
    IamOauthClientRotateSecretEntity.new(self, data)
  end


  # Canonical facade: client.IamPermissionsGroupResponseCollection.list / client.IamPermissionsGroupResponseCollection.load({ "id" => ... })
  def IamPermissionsGroupResponseCollection(data = nil)
    require_relative 'entity/iam_permissions_group_response_collection_entity'
    IamPermissionsGroupResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.IamResponseSingleValue.list / client.IamResponseSingleValue.load({ "id" => ... })
  def IamResponseSingleValue(data = nil)
    require_relative 'entity/iam_response_single_value_entity'
    IamResponseSingleValueEntity.new(self, data)
  end


  # Canonical facade: client.IamSchemasCollectionInvite.list / client.IamSchemasCollectionInvite.load({ "id" => ... })
  def IamSchemasCollectionInvite(data = nil)
    require_relative 'entity/iam_schemas_collection_invite_entity'
    IamSchemasCollectionInviteEntity.new(self, data)
  end


  # Canonical facade: client.IamSingleInvite.list / client.IamSingleInvite.load({ "id" => ... })
  def IamSingleInvite(data = nil)
    require_relative 'entity/iam_single_invite_entity'
    IamSingleInviteEntity.new(self, data)
  end


  # Canonical facade: client.IamSingleMemberResponseWithPolicy.list / client.IamSingleMemberResponseWithPolicy.load({ "id" => ... })
  def IamSingleMemberResponseWithPolicy(data = nil)
    require_relative 'entity/iam_single_member_response_with_policy_entity'
    IamSingleMemberResponseWithPolicyEntity.new(self, data)
  end


  # Canonical facade: client.IamSingleMembershipResponseWithPolicy.list / client.IamSingleMembershipResponseWithPolicy.load({ "id" => ... })
  def IamSingleMembershipResponseWithPolicy(data = nil)
    require_relative 'entity/iam_single_membership_response_with_policy_entity'
    IamSingleMembershipResponseWithPolicyEntity.new(self, data)
  end


  # Canonical facade: client.IamSingleOauthClient.list / client.IamSingleOauthClient.load({ "id" => ... })
  def IamSingleOauthClient(data = nil)
    require_relative 'entity/iam_single_oauth_client_entity'
    IamSingleOauthClientEntity.new(self, data)
  end


  # Canonical facade: client.IamSingleOauthClientCreate.list / client.IamSingleOauthClientCreate.load({ "id" => ... })
  def IamSingleOauthClientCreate(data = nil)
    require_relative 'entity/iam_single_oauth_client_create_entity'
    IamSingleOauthClientCreateEntity.new(self, data)
  end


  # Canonical facade: client.IamSingleOrganization.list / client.IamSingleOrganization.load({ "id" => ... })
  def IamSingleOrganization(data = nil)
    require_relative 'entity/iam_single_organization_entity'
    IamSingleOrganizationEntity.new(self, data)
  end


  # Canonical facade: client.IamSinglePermissionGroup.list / client.IamSinglePermissionGroup.load({ "id" => ... })
  def IamSinglePermissionGroup(data = nil)
    require_relative 'entity/iam_single_permission_group_entity'
    IamSinglePermissionGroupEntity.new(self, data)
  end


  # Canonical facade: client.IamSingleRole.list / client.IamSingleRole.load({ "id" => ... })
  def IamSingleRole(data = nil)
    require_relative 'entity/iam_single_role_entity'
    IamSingleRoleEntity.new(self, data)
  end


  # Canonical facade: client.IamSingleToken.list / client.IamSingleToken.load({ "id" => ... })
  def IamSingleToken(data = nil)
    require_relative 'entity/iam_single_token_entity'
    IamSingleTokenEntity.new(self, data)
  end


  # Canonical facade: client.IamSingleTokenCreate.list / client.IamSingleTokenCreate.load({ "id" => ... })
  def IamSingleTokenCreate(data = nil)
    require_relative 'entity/iam_single_token_create_entity'
    IamSingleTokenCreateEntity.new(self, data)
  end


  # Canonical facade: client.IamSsoConnector.list / client.IamSsoConnector.load({ "id" => ... })
  def IamSsoConnector(data = nil)
    require_relative 'entity/iam_sso_connector_entity'
    IamSsoConnectorEntity.new(self, data)
  end


  # Canonical facade: client.IamSsoConnectorCollection.list / client.IamSsoConnectorCollection.load({ "id" => ... })
  def IamSsoConnectorCollection(data = nil)
    require_relative 'entity/iam_sso_connector_collection_entity'
    IamSsoConnectorCollectionEntity.new(self, data)
  end


  # Canonical facade: client.IamTokenVerifyResponseSingleSegment.list / client.IamTokenVerifyResponseSingleSegment.load({ "id" => ... })
  def IamTokenVerifyResponseSingleSegment(data = nil)
    require_relative 'entity/iam_token_verify_response_single_segment_entity'
    IamTokenVerifyResponseSingleSegmentEntity.new(self, data)
  end


  # Canonical facade: client.Member.list / client.Member.load({ "id" => ... })
  def Member(data = nil)
    require_relative 'entity/member_entity'
    MemberEntity.new(self, data)
  end


  # Canonical facade: client.OauthClient.list / client.OauthClient.load({ "id" => ... })
  def OauthClient(data = nil)
    require_relative 'entity/oauth_client_entity'
    OauthClientEntity.new(self, data)
  end


  # Canonical facade: client.Organization.list / client.Organization.load({ "id" => ... })
  def Organization(data = nil)
    require_relative 'entity/organization_entity'
    OrganizationEntity.new(self, data)
  end


  # Canonical facade: client.OrganizationMember.list / client.OrganizationMember.load({ "id" => ... })
  def OrganizationMember(data = nil)
    require_relative 'entity/organization_member_entity'
    OrganizationMemberEntity.new(self, data)
  end


  # Canonical facade: client.OrganizationsApiProfile.list / client.OrganizationsApiProfile.load({ "id" => ... })
  def OrganizationsApiProfile(data = nil)
    require_relative 'entity/organizations_api_profile_entity'
    OrganizationsApiProfileEntity.new(self, data)
  end


  # Canonical facade: client.Resource.list / client.Resource.load({ "id" => ... })
  def Resource(data = nil)
    require_relative 'entity/resource_entity'
    ResourceEntity.new(self, data)
  end


  # Canonical facade: client.ResourceGroup.list / client.ResourceGroup.load({ "id" => ... })
  def ResourceGroup(data = nil)
    require_relative 'entity/resource_group_entity'
    ResourceGroupEntity.new(self, data)
  end


  # Canonical facade: client.ResourceSharing.list / client.ResourceSharing.load({ "id" => ... })
  def ResourceSharing(data = nil)
    require_relative 'entity/resource_sharing_entity'
    ResourceSharingEntity.new(self, data)
  end


  # Canonical facade: client.ResourceSharingShareExcludedRecipientResponseCollection.list / client.ResourceSharingShareExcludedRecipientResponseCollection.load({ "id" => ... })
  def ResourceSharingShareExcludedRecipientResponseCollection(data = nil)
    require_relative 'entity/resource_sharing_share_excluded_recipient_response_collection_entity'
    ResourceSharingShareExcludedRecipientResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.ResourceSharingShareExcludedRecipientResponseSingle.list / client.ResourceSharingShareExcludedRecipientResponseSingle.load({ "id" => ... })
  def ResourceSharingShareExcludedRecipientResponseSingle(data = nil)
    require_relative 'entity/resource_sharing_share_excluded_recipient_response_single_entity'
    ResourceSharingShareExcludedRecipientResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.ResourceSharingShareRecipientResponseCollection.list / client.ResourceSharingShareRecipientResponseCollection.load({ "id" => ... })
  def ResourceSharingShareRecipientResponseCollection(data = nil)
    require_relative 'entity/resource_sharing_share_recipient_response_collection_entity'
    ResourceSharingShareRecipientResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.ResourceSharingShareRecipientResponseSingle.list / client.ResourceSharingShareRecipientResponseSingle.load({ "id" => ... })
  def ResourceSharingShareRecipientResponseSingle(data = nil)
    require_relative 'entity/resource_sharing_share_recipient_response_single_entity'
    ResourceSharingShareRecipientResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.ResourceSharingShareResponseCollection.list / client.ResourceSharingShareResponseCollection.load({ "id" => ... })
  def ResourceSharingShareResponseCollection(data = nil)
    require_relative 'entity/resource_sharing_share_response_collection_entity'
    ResourceSharingShareResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.ResourceSharingShareResponseSingle.list / client.ResourceSharingShareResponseSingle.load({ "id" => ... })
  def ResourceSharingShareResponseSingle(data = nil)
    require_relative 'entity/resource_sharing_share_response_single_entity'
    ResourceSharingShareResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.ScimDiscovery.list / client.ScimDiscovery.load({ "id" => ... })
  def ScimDiscovery(data = nil)
    require_relative 'entity/scim_discovery_entity'
    ScimDiscoveryEntity.new(self, data)
  end


  # Canonical facade: client.ScimGroup.list / client.ScimGroup.load({ "id" => ... })
  def ScimGroup(data = nil)
    require_relative 'entity/scim_group_entity'
    ScimGroupEntity.new(self, data)
  end


  # Canonical facade: client.ScimUser.list / client.ScimUser.load({ "id" => ... })
  def ScimUser(data = nil)
    require_relative 'entity/scim_user_entity'
    ScimUserEntity.new(self, data)
  end


  # Canonical facade: client.SsoConnector.list / client.SsoConnector.load({ "id" => ... })
  def SsoConnector(data = nil)
    require_relative 'entity/sso_connector_entity'
    SsoConnectorEntity.new(self, data)
  end


  # Canonical facade: client.Tenant.list / client.Tenant.load({ "id" => ... })
  def Tenant(data = nil)
    require_relative 'entity/tenant_entity'
    TenantEntity.new(self, data)
  end


  # Canonical facade: client.Token.list / client.Token.load({ "id" => ... })
  def Token(data = nil)
    require_relative 'entity/token_entity'
    TokenEntity.new(self, data)
  end


  # Canonical facade: client.User.list / client.User.load({ "id" => ... })
  def User(data = nil)
    require_relative 'entity/user_entity'
    UserEntity.new(self, data)
  end


  # Canonical facade: client.UserGroup.list / client.UserGroup.load({ "id" => ... })
  def UserGroup(data = nil)
    require_relative 'entity/user_group_entity'
    UserGroupEntity.new(self, data)
  end


  # Canonical facade: client.UsersAccountMembership.list / client.UsersAccountMembership.load({ "id" => ... })
  def UsersAccountMembership(data = nil)
    require_relative 'entity/users_account_membership_entity'
    UsersAccountMembershipEntity.new(self, data)
  end


  # Canonical facade: client.UsersOrganization.list / client.UsersOrganization.load({ "id" => ... })
  def UsersOrganization(data = nil)
    require_relative 'entity/users_organization_entity'
    UsersOrganizationEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = CloudflareIdentitySDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
