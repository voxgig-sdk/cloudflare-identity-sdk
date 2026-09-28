# CloudflareIdentity SDK

from cloudflareidentity_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflareidentity_sdk.core.utility_type import CloudflareIdentityUtility
from cloudflareidentity_sdk.core.spec import CloudflareIdentitySpec
from cloudflareidentity_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from cloudflareidentity_sdk.utility import register

# Load features
from cloudflareidentity_sdk.feature.base_feature import CloudflareIdentityBaseFeature
from cloudflareidentity_sdk.features import _has_feature, _make_feature


class CloudflareIdentitySDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = CloudflareIdentityUtility()
        self._utility = utility

        from cloudflareidentity_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return CloudflareIdentityUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = CloudflareIdentitySpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "CloudflareIdentitySDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("CloudflareIdentitySDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def AaaAuditLogsV2OrgHistoryResponseCollection(self, data=None) -> "AaaAuditLogsV2OrgHistoryResponseCollectionEntity":
        """Entity factory: client.AaaAuditLogsV2OrgHistoryResponseCollection().list() / client.AaaAuditLogsV2OrgHistoryResponseCollection().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.aaa_audit_logs_v2_org_history_response_collection_entity import AaaAuditLogsV2OrgHistoryResponseCollectionEntity
        return AaaAuditLogsV2OrgHistoryResponseCollectionEntity(self, data)


    def AaaAuditLogsV2OrgResponseCollection(self, data=None) -> "AaaAuditLogsV2OrgResponseCollectionEntity":
        """Entity factory: client.AaaAuditLogsV2OrgResponseCollection().list() / client.AaaAuditLogsV2OrgResponseCollection().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.aaa_audit_logs_v2_org_response_collection_entity import AaaAuditLogsV2OrgResponseCollectionEntity
        return AaaAuditLogsV2OrgResponseCollectionEntity(self, data)


    def Account(self, data=None) -> "AccountEntity":
        """Entity factory: client.Account().list() / client.Account().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.account_entity import AccountEntity
        return AccountEntity(self, data)


    def AccountResourceGroup(self, data=None) -> "AccountResourceGroupEntity":
        """Entity factory: client.AccountResourceGroup().list() / client.AccountResourceGroup().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.account_resource_group_entity import AccountResourceGroupEntity
        return AccountResourceGroupEntity(self, data)


    def AccountUserGroup(self, data=None) -> "AccountUserGroupEntity":
        """Entity factory: client.AccountUserGroup().list() / client.AccountUserGroup().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.account_user_group_entity import AccountUserGroupEntity
        return AccountUserGroupEntity(self, data)


    def AccountUserGroupMember(self, data=None) -> "AccountUserGroupMemberEntity":
        """Entity factory: client.AccountUserGroupMember().list() / client.AccountUserGroupMember().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.account_user_group_member_entity import AccountUserGroupMemberEntity
        return AccountUserGroupMemberEntity(self, data)


    def BeginVerification(self, data=None) -> "BeginVerificationEntity":
        """Entity factory: client.BeginVerification().list() / client.BeginVerification().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.begin_verification_entity import BeginVerificationEntity
        return BeginVerificationEntity(self, data)


    def BillSubsApiClientSecretResponseSingle(self, data=None) -> "BillSubsApiClientSecretResponseSingleEntity":
        """Entity factory: client.BillSubsApiClientSecretResponseSingle().list() / client.BillSubsApiClientSecretResponseSingle().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.bill_subs_api_client_secret_response_single_entity import BillSubsApiClientSecretResponseSingleEntity
        return BillSubsApiClientSecretResponseSingleEntity(self, data)


    def BillableUsageApiV2Usage(self, data=None) -> "BillableUsageApiV2UsageEntity":
        """Entity factory: client.BillableUsageApiV2Usage().list() / client.BillableUsageApiV2Usage().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.billable_usage_api_v2_usage_entity import BillableUsageApiV2UsageEntity
        return BillableUsageApiV2UsageEntity(self, data)


    def DnsCustomNameserversEmptyResponse3(self, data=None) -> "DnsCustomNameserversEmptyResponse3Entity":
        """Entity factory: client.DnsCustomNameserversEmptyResponse3().list() / client.DnsCustomNameserversEmptyResponse3().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.dns_custom_nameservers_empty_response_3_entity import DnsCustomNameserversEmptyResponse3Entity
        return DnsCustomNameserversEmptyResponse3Entity(self, data)


    def DnsCustomNameserversTcnsResponseCollection(self, data=None) -> "DnsCustomNameserversTcnsResponseCollectionEntity":
        """Entity factory: client.DnsCustomNameserversTcnsResponseCollection().list() / client.DnsCustomNameserversTcnsResponseCollection().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.dns_custom_nameservers_tcns_response_collection_entity import DnsCustomNameserversTcnsResponseCollectionEntity
        return DnsCustomNameserversTcnsResponseCollectionEntity(self, data)


    def DnsCustomNameserversTcnsResponseSingle(self, data=None) -> "DnsCustomNameserversTcnsResponseSingleEntity":
        """Entity factory: client.DnsCustomNameserversTcnsResponseSingle().list() / client.DnsCustomNameserversTcnsResponseSingle().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.dns_custom_nameservers_tcns_response_single_entity import DnsCustomNameserversTcnsResponseSingleEntity
        return DnsCustomNameserversTcnsResponseSingleEntity(self, data)


    def IamApiResponseSingleId(self, data=None) -> "IamApiResponseSingleIdEntity":
        """Entity factory: client.IamApiResponseSingleId().list() / client.IamApiResponseSingleId().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_api_response_single_id_entity import IamApiResponseSingleIdEntity
        return IamApiResponseSingleIdEntity(self, data)


    def IamCollectionMemberResponseWithPolicy(self, data=None) -> "IamCollectionMemberResponseWithPolicyEntity":
        """Entity factory: client.IamCollectionMemberResponseWithPolicy().list() / client.IamCollectionMemberResponseWithPolicy().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_collection_member_response_with_policy_entity import IamCollectionMemberResponseWithPolicyEntity
        return IamCollectionMemberResponseWithPolicyEntity(self, data)


    def IamCollectionOauthClient(self, data=None) -> "IamCollectionOauthClientEntity":
        """Entity factory: client.IamCollectionOauthClient().list() / client.IamCollectionOauthClient().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_collection_oauth_client_entity import IamCollectionOauthClientEntity
        return IamCollectionOauthClientEntity(self, data)


    def IamCollectionOauthScope(self, data=None) -> "IamCollectionOauthScopeEntity":
        """Entity factory: client.IamCollectionOauthScope().list() / client.IamCollectionOauthScope().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_collection_oauth_scope_entity import IamCollectionOauthScopeEntity
        return IamCollectionOauthScopeEntity(self, data)


    def IamCollectionOrganization(self, data=None) -> "IamCollectionOrganizationEntity":
        """Entity factory: client.IamCollectionOrganization().list() / client.IamCollectionOrganization().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_collection_organization_entity import IamCollectionOrganizationEntity
        return IamCollectionOrganizationEntity(self, data)


    def IamCollectionPermissionGroup(self, data=None) -> "IamCollectionPermissionGroupEntity":
        """Entity factory: client.IamCollectionPermissionGroup().list() / client.IamCollectionPermissionGroup().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_collection_permission_group_entity import IamCollectionPermissionGroupEntity
        return IamCollectionPermissionGroupEntity(self, data)


    def IamCollectionRole(self, data=None) -> "IamCollectionRoleEntity":
        """Entity factory: client.IamCollectionRole().list() / client.IamCollectionRole().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_collection_role_entity import IamCollectionRoleEntity
        return IamCollectionRoleEntity(self, data)


    def IamCollectionToken(self, data=None) -> "IamCollectionTokenEntity":
        """Entity factory: client.IamCollectionToken().list() / client.IamCollectionToken().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_collection_token_entity import IamCollectionTokenEntity
        return IamCollectionTokenEntity(self, data)


    def IamOauthClientRotateSecret(self, data=None) -> "IamOauthClientRotateSecretEntity":
        """Entity factory: client.IamOauthClientRotateSecret().list() / client.IamOauthClientRotateSecret().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_oauth_client_rotate_secret_entity import IamOauthClientRotateSecretEntity
        return IamOauthClientRotateSecretEntity(self, data)


    def IamPermissionsGroupResponseCollection(self, data=None) -> "IamPermissionsGroupResponseCollectionEntity":
        """Entity factory: client.IamPermissionsGroupResponseCollection().list() / client.IamPermissionsGroupResponseCollection().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_permissions_group_response_collection_entity import IamPermissionsGroupResponseCollectionEntity
        return IamPermissionsGroupResponseCollectionEntity(self, data)


    def IamResponseSingleValue(self, data=None) -> "IamResponseSingleValueEntity":
        """Entity factory: client.IamResponseSingleValue().list() / client.IamResponseSingleValue().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_response_single_value_entity import IamResponseSingleValueEntity
        return IamResponseSingleValueEntity(self, data)


    def IamSchemasCollectionInvite(self, data=None) -> "IamSchemasCollectionInviteEntity":
        """Entity factory: client.IamSchemasCollectionInvite().list() / client.IamSchemasCollectionInvite().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_schemas_collection_invite_entity import IamSchemasCollectionInviteEntity
        return IamSchemasCollectionInviteEntity(self, data)


    def IamSingleInvite(self, data=None) -> "IamSingleInviteEntity":
        """Entity factory: client.IamSingleInvite().list() / client.IamSingleInvite().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_single_invite_entity import IamSingleInviteEntity
        return IamSingleInviteEntity(self, data)


    def IamSingleMemberResponseWithPolicy(self, data=None) -> "IamSingleMemberResponseWithPolicyEntity":
        """Entity factory: client.IamSingleMemberResponseWithPolicy().list() / client.IamSingleMemberResponseWithPolicy().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_single_member_response_with_policy_entity import IamSingleMemberResponseWithPolicyEntity
        return IamSingleMemberResponseWithPolicyEntity(self, data)


    def IamSingleMembershipResponseWithPolicy(self, data=None) -> "IamSingleMembershipResponseWithPolicyEntity":
        """Entity factory: client.IamSingleMembershipResponseWithPolicy().list() / client.IamSingleMembershipResponseWithPolicy().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_single_membership_response_with_policy_entity import IamSingleMembershipResponseWithPolicyEntity
        return IamSingleMembershipResponseWithPolicyEntity(self, data)


    def IamSingleOauthClient(self, data=None) -> "IamSingleOauthClientEntity":
        """Entity factory: client.IamSingleOauthClient().list() / client.IamSingleOauthClient().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_single_oauth_client_entity import IamSingleOauthClientEntity
        return IamSingleOauthClientEntity(self, data)


    def IamSingleOauthClientCreate(self, data=None) -> "IamSingleOauthClientCreateEntity":
        """Entity factory: client.IamSingleOauthClientCreate().list() / client.IamSingleOauthClientCreate().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_single_oauth_client_create_entity import IamSingleOauthClientCreateEntity
        return IamSingleOauthClientCreateEntity(self, data)


    def IamSingleOrganization(self, data=None) -> "IamSingleOrganizationEntity":
        """Entity factory: client.IamSingleOrganization().list() / client.IamSingleOrganization().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_single_organization_entity import IamSingleOrganizationEntity
        return IamSingleOrganizationEntity(self, data)


    def IamSinglePermissionGroup(self, data=None) -> "IamSinglePermissionGroupEntity":
        """Entity factory: client.IamSinglePermissionGroup().list() / client.IamSinglePermissionGroup().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_single_permission_group_entity import IamSinglePermissionGroupEntity
        return IamSinglePermissionGroupEntity(self, data)


    def IamSingleRole(self, data=None) -> "IamSingleRoleEntity":
        """Entity factory: client.IamSingleRole().list() / client.IamSingleRole().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_single_role_entity import IamSingleRoleEntity
        return IamSingleRoleEntity(self, data)


    def IamSingleToken(self, data=None) -> "IamSingleTokenEntity":
        """Entity factory: client.IamSingleToken().list() / client.IamSingleToken().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_single_token_entity import IamSingleTokenEntity
        return IamSingleTokenEntity(self, data)


    def IamSingleTokenCreate(self, data=None) -> "IamSingleTokenCreateEntity":
        """Entity factory: client.IamSingleTokenCreate().list() / client.IamSingleTokenCreate().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_single_token_create_entity import IamSingleTokenCreateEntity
        return IamSingleTokenCreateEntity(self, data)


    def IamSsoConnector(self, data=None) -> "IamSsoConnectorEntity":
        """Entity factory: client.IamSsoConnector().list() / client.IamSsoConnector().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_sso_connector_entity import IamSsoConnectorEntity
        return IamSsoConnectorEntity(self, data)


    def IamSsoConnectorCollection(self, data=None) -> "IamSsoConnectorCollectionEntity":
        """Entity factory: client.IamSsoConnectorCollection().list() / client.IamSsoConnectorCollection().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_sso_connector_collection_entity import IamSsoConnectorCollectionEntity
        return IamSsoConnectorCollectionEntity(self, data)


    def IamTokenVerifyResponseSingleSegment(self, data=None) -> "IamTokenVerifyResponseSingleSegmentEntity":
        """Entity factory: client.IamTokenVerifyResponseSingleSegment().list() / client.IamTokenVerifyResponseSingleSegment().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.iam_token_verify_response_single_segment_entity import IamTokenVerifyResponseSingleSegmentEntity
        return IamTokenVerifyResponseSingleSegmentEntity(self, data)


    def Member(self, data=None) -> "MemberEntity":
        """Entity factory: client.Member().list() / client.Member().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.member_entity import MemberEntity
        return MemberEntity(self, data)


    def OauthClient(self, data=None) -> "OauthClientEntity":
        """Entity factory: client.OauthClient().list() / client.OauthClient().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.oauth_client_entity import OauthClientEntity
        return OauthClientEntity(self, data)


    def Organization(self, data=None) -> "OrganizationEntity":
        """Entity factory: client.Organization().list() / client.Organization().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.organization_entity import OrganizationEntity
        return OrganizationEntity(self, data)


    def OrganizationMember(self, data=None) -> "OrganizationMemberEntity":
        """Entity factory: client.OrganizationMember().list() / client.OrganizationMember().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.organization_member_entity import OrganizationMemberEntity
        return OrganizationMemberEntity(self, data)


    def OrganizationsApiProfile(self, data=None) -> "OrganizationsApiProfileEntity":
        """Entity factory: client.OrganizationsApiProfile().list() / client.OrganizationsApiProfile().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.organizations_api_profile_entity import OrganizationsApiProfileEntity
        return OrganizationsApiProfileEntity(self, data)


    def Resource(self, data=None) -> "ResourceEntity":
        """Entity factory: client.Resource().list() / client.Resource().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.resource_entity import ResourceEntity
        return ResourceEntity(self, data)


    def ResourceGroup(self, data=None) -> "ResourceGroupEntity":
        """Entity factory: client.ResourceGroup().list() / client.ResourceGroup().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.resource_group_entity import ResourceGroupEntity
        return ResourceGroupEntity(self, data)


    def ResourceSharing(self, data=None) -> "ResourceSharingEntity":
        """Entity factory: client.ResourceSharing().list() / client.ResourceSharing().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.resource_sharing_entity import ResourceSharingEntity
        return ResourceSharingEntity(self, data)


    def ResourceSharingShareExcludedRecipientResponseCollection(self, data=None) -> "ResourceSharingShareExcludedRecipientResponseCollectionEntity":
        """Entity factory: client.ResourceSharingShareExcludedRecipientResponseCollection().list() / client.ResourceSharingShareExcludedRecipientResponseCollection().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.resource_sharing_share_excluded_recipient_response_collection_entity import ResourceSharingShareExcludedRecipientResponseCollectionEntity
        return ResourceSharingShareExcludedRecipientResponseCollectionEntity(self, data)


    def ResourceSharingShareExcludedRecipientResponseSingle(self, data=None) -> "ResourceSharingShareExcludedRecipientResponseSingleEntity":
        """Entity factory: client.ResourceSharingShareExcludedRecipientResponseSingle().list() / client.ResourceSharingShareExcludedRecipientResponseSingle().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.resource_sharing_share_excluded_recipient_response_single_entity import ResourceSharingShareExcludedRecipientResponseSingleEntity
        return ResourceSharingShareExcludedRecipientResponseSingleEntity(self, data)


    def ResourceSharingShareRecipientResponseCollection(self, data=None) -> "ResourceSharingShareRecipientResponseCollectionEntity":
        """Entity factory: client.ResourceSharingShareRecipientResponseCollection().list() / client.ResourceSharingShareRecipientResponseCollection().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.resource_sharing_share_recipient_response_collection_entity import ResourceSharingShareRecipientResponseCollectionEntity
        return ResourceSharingShareRecipientResponseCollectionEntity(self, data)


    def ResourceSharingShareRecipientResponseSingle(self, data=None) -> "ResourceSharingShareRecipientResponseSingleEntity":
        """Entity factory: client.ResourceSharingShareRecipientResponseSingle().list() / client.ResourceSharingShareRecipientResponseSingle().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.resource_sharing_share_recipient_response_single_entity import ResourceSharingShareRecipientResponseSingleEntity
        return ResourceSharingShareRecipientResponseSingleEntity(self, data)


    def ResourceSharingShareResponseCollection(self, data=None) -> "ResourceSharingShareResponseCollectionEntity":
        """Entity factory: client.ResourceSharingShareResponseCollection().list() / client.ResourceSharingShareResponseCollection().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.resource_sharing_share_response_collection_entity import ResourceSharingShareResponseCollectionEntity
        return ResourceSharingShareResponseCollectionEntity(self, data)


    def ResourceSharingShareResponseSingle(self, data=None) -> "ResourceSharingShareResponseSingleEntity":
        """Entity factory: client.ResourceSharingShareResponseSingle().list() / client.ResourceSharingShareResponseSingle().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.resource_sharing_share_response_single_entity import ResourceSharingShareResponseSingleEntity
        return ResourceSharingShareResponseSingleEntity(self, data)


    def ScimDiscovery(self, data=None) -> "ScimDiscoveryEntity":
        """Entity factory: client.ScimDiscovery().list() / client.ScimDiscovery().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.scim_discovery_entity import ScimDiscoveryEntity
        return ScimDiscoveryEntity(self, data)


    def ScimGroup(self, data=None) -> "ScimGroupEntity":
        """Entity factory: client.ScimGroup().list() / client.ScimGroup().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.scim_group_entity import ScimGroupEntity
        return ScimGroupEntity(self, data)


    def ScimUser(self, data=None) -> "ScimUserEntity":
        """Entity factory: client.ScimUser().list() / client.ScimUser().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.scim_user_entity import ScimUserEntity
        return ScimUserEntity(self, data)


    def SsoConnector(self, data=None) -> "SsoConnectorEntity":
        """Entity factory: client.SsoConnector().list() / client.SsoConnector().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.sso_connector_entity import SsoConnectorEntity
        return SsoConnectorEntity(self, data)


    def Tenant(self, data=None) -> "TenantEntity":
        """Entity factory: client.Tenant().list() / client.Tenant().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.tenant_entity import TenantEntity
        return TenantEntity(self, data)


    def Token(self, data=None) -> "TokenEntity":
        """Entity factory: client.Token().list() / client.Token().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.token_entity import TokenEntity
        return TokenEntity(self, data)


    def User(self, data=None) -> "UserEntity":
        """Entity factory: client.User().list() / client.User().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.user_entity import UserEntity
        return UserEntity(self, data)


    def UserGroup(self, data=None) -> "UserGroupEntity":
        """Entity factory: client.UserGroup().list() / client.UserGroup().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.user_group_entity import UserGroupEntity
        return UserGroupEntity(self, data)


    def UsersAccountMembership(self, data=None) -> "UsersAccountMembershipEntity":
        """Entity factory: client.UsersAccountMembership().list() / client.UsersAccountMembership().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.users_account_membership_entity import UsersAccountMembershipEntity
        return UsersAccountMembershipEntity(self, data)


    def UsersOrganization(self, data=None) -> "UsersOrganizationEntity":
        """Entity factory: client.UsersOrganization().list() / client.UsersOrganization().load({"id": ...})."""
        from cloudflareidentity_sdk.entity.users_organization_entity import UsersOrganizationEntity
        return UsersOrganizationEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "CloudflareIdentitySDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from cloudflareidentity_sdk.entity.aaa_audit_logs_v2_org_history_response_collection_entity import AaaAuditLogsV2OrgHistoryResponseCollectionEntity
    from cloudflareidentity_sdk.entity.aaa_audit_logs_v2_org_response_collection_entity import AaaAuditLogsV2OrgResponseCollectionEntity
    from cloudflareidentity_sdk.entity.account_entity import AccountEntity
    from cloudflareidentity_sdk.entity.account_resource_group_entity import AccountResourceGroupEntity
    from cloudflareidentity_sdk.entity.account_user_group_entity import AccountUserGroupEntity
    from cloudflareidentity_sdk.entity.account_user_group_member_entity import AccountUserGroupMemberEntity
    from cloudflareidentity_sdk.entity.begin_verification_entity import BeginVerificationEntity
    from cloudflareidentity_sdk.entity.bill_subs_api_client_secret_response_single_entity import BillSubsApiClientSecretResponseSingleEntity
    from cloudflareidentity_sdk.entity.billable_usage_api_v2_usage_entity import BillableUsageApiV2UsageEntity
    from cloudflareidentity_sdk.entity.dns_custom_nameservers_empty_response_3_entity import DnsCustomNameserversEmptyResponse3Entity
    from cloudflareidentity_sdk.entity.dns_custom_nameservers_tcns_response_collection_entity import DnsCustomNameserversTcnsResponseCollectionEntity
    from cloudflareidentity_sdk.entity.dns_custom_nameservers_tcns_response_single_entity import DnsCustomNameserversTcnsResponseSingleEntity
    from cloudflareidentity_sdk.entity.iam_api_response_single_id_entity import IamApiResponseSingleIdEntity
    from cloudflareidentity_sdk.entity.iam_collection_member_response_with_policy_entity import IamCollectionMemberResponseWithPolicyEntity
    from cloudflareidentity_sdk.entity.iam_collection_oauth_client_entity import IamCollectionOauthClientEntity
    from cloudflareidentity_sdk.entity.iam_collection_oauth_scope_entity import IamCollectionOauthScopeEntity
    from cloudflareidentity_sdk.entity.iam_collection_organization_entity import IamCollectionOrganizationEntity
    from cloudflareidentity_sdk.entity.iam_collection_permission_group_entity import IamCollectionPermissionGroupEntity
    from cloudflareidentity_sdk.entity.iam_collection_role_entity import IamCollectionRoleEntity
    from cloudflareidentity_sdk.entity.iam_collection_token_entity import IamCollectionTokenEntity
    from cloudflareidentity_sdk.entity.iam_oauth_client_rotate_secret_entity import IamOauthClientRotateSecretEntity
    from cloudflareidentity_sdk.entity.iam_permissions_group_response_collection_entity import IamPermissionsGroupResponseCollectionEntity
    from cloudflareidentity_sdk.entity.iam_response_single_value_entity import IamResponseSingleValueEntity
    from cloudflareidentity_sdk.entity.iam_schemas_collection_invite_entity import IamSchemasCollectionInviteEntity
    from cloudflareidentity_sdk.entity.iam_single_invite_entity import IamSingleInviteEntity
    from cloudflareidentity_sdk.entity.iam_single_member_response_with_policy_entity import IamSingleMemberResponseWithPolicyEntity
    from cloudflareidentity_sdk.entity.iam_single_membership_response_with_policy_entity import IamSingleMembershipResponseWithPolicyEntity
    from cloudflareidentity_sdk.entity.iam_single_oauth_client_entity import IamSingleOauthClientEntity
    from cloudflareidentity_sdk.entity.iam_single_oauth_client_create_entity import IamSingleOauthClientCreateEntity
    from cloudflareidentity_sdk.entity.iam_single_organization_entity import IamSingleOrganizationEntity
    from cloudflareidentity_sdk.entity.iam_single_permission_group_entity import IamSinglePermissionGroupEntity
    from cloudflareidentity_sdk.entity.iam_single_role_entity import IamSingleRoleEntity
    from cloudflareidentity_sdk.entity.iam_single_token_entity import IamSingleTokenEntity
    from cloudflareidentity_sdk.entity.iam_single_token_create_entity import IamSingleTokenCreateEntity
    from cloudflareidentity_sdk.entity.iam_sso_connector_entity import IamSsoConnectorEntity
    from cloudflareidentity_sdk.entity.iam_sso_connector_collection_entity import IamSsoConnectorCollectionEntity
    from cloudflareidentity_sdk.entity.iam_token_verify_response_single_segment_entity import IamTokenVerifyResponseSingleSegmentEntity
    from cloudflareidentity_sdk.entity.member_entity import MemberEntity
    from cloudflareidentity_sdk.entity.oauth_client_entity import OauthClientEntity
    from cloudflareidentity_sdk.entity.organization_entity import OrganizationEntity
    from cloudflareidentity_sdk.entity.organization_member_entity import OrganizationMemberEntity
    from cloudflareidentity_sdk.entity.organizations_api_profile_entity import OrganizationsApiProfileEntity
    from cloudflareidentity_sdk.entity.resource_entity import ResourceEntity
    from cloudflareidentity_sdk.entity.resource_group_entity import ResourceGroupEntity
    from cloudflareidentity_sdk.entity.resource_sharing_entity import ResourceSharingEntity
    from cloudflareidentity_sdk.entity.resource_sharing_share_excluded_recipient_response_collection_entity import ResourceSharingShareExcludedRecipientResponseCollectionEntity
    from cloudflareidentity_sdk.entity.resource_sharing_share_excluded_recipient_response_single_entity import ResourceSharingShareExcludedRecipientResponseSingleEntity
    from cloudflareidentity_sdk.entity.resource_sharing_share_recipient_response_collection_entity import ResourceSharingShareRecipientResponseCollectionEntity
    from cloudflareidentity_sdk.entity.resource_sharing_share_recipient_response_single_entity import ResourceSharingShareRecipientResponseSingleEntity
    from cloudflareidentity_sdk.entity.resource_sharing_share_response_collection_entity import ResourceSharingShareResponseCollectionEntity
    from cloudflareidentity_sdk.entity.resource_sharing_share_response_single_entity import ResourceSharingShareResponseSingleEntity
    from cloudflareidentity_sdk.entity.scim_discovery_entity import ScimDiscoveryEntity
    from cloudflareidentity_sdk.entity.scim_group_entity import ScimGroupEntity
    from cloudflareidentity_sdk.entity.scim_user_entity import ScimUserEntity
    from cloudflareidentity_sdk.entity.sso_connector_entity import SsoConnectorEntity
    from cloudflareidentity_sdk.entity.tenant_entity import TenantEntity
    from cloudflareidentity_sdk.entity.token_entity import TokenEntity
    from cloudflareidentity_sdk.entity.user_entity import UserEntity
    from cloudflareidentity_sdk.entity.user_group_entity import UserGroupEntity
    from cloudflareidentity_sdk.entity.users_account_membership_entity import UsersAccountMembershipEntity
    from cloudflareidentity_sdk.entity.users_organization_entity import UsersOrganizationEntity
