"use strict";
// CloudflareIdentity Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.CloudflareIdentitySDK = exports.CloudflareIdentityEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AaaAuditLogsV2OrgHistoryResponseCollectionEntity_1 = require("./entity/AaaAuditLogsV2OrgHistoryResponseCollectionEntity");
const AaaAuditLogsV2OrgResponseCollectionEntity_1 = require("./entity/AaaAuditLogsV2OrgResponseCollectionEntity");
const AccountEntity_1 = require("./entity/AccountEntity");
const AccountResourceGroupEntity_1 = require("./entity/AccountResourceGroupEntity");
const AccountUserGroupEntity_1 = require("./entity/AccountUserGroupEntity");
const AccountUserGroupMemberEntity_1 = require("./entity/AccountUserGroupMemberEntity");
const BeginVerificationEntity_1 = require("./entity/BeginVerificationEntity");
const BillSubsApiClientSecretResponseSingleEntity_1 = require("./entity/BillSubsApiClientSecretResponseSingleEntity");
const BillableUsageApiV2UsageEntity_1 = require("./entity/BillableUsageApiV2UsageEntity");
const DnsCustomNameserversEmptyResponse3Entity_1 = require("./entity/DnsCustomNameserversEmptyResponse3Entity");
const DnsCustomNameserversTcnsResponseCollectionEntity_1 = require("./entity/DnsCustomNameserversTcnsResponseCollectionEntity");
const DnsCustomNameserversTcnsResponseSingleEntity_1 = require("./entity/DnsCustomNameserversTcnsResponseSingleEntity");
const IamApiResponseSingleIdEntity_1 = require("./entity/IamApiResponseSingleIdEntity");
const IamCollectionMemberResponseWithPolicyEntity_1 = require("./entity/IamCollectionMemberResponseWithPolicyEntity");
const IamCollectionOauthClientEntity_1 = require("./entity/IamCollectionOauthClientEntity");
const IamCollectionOauthScopeEntity_1 = require("./entity/IamCollectionOauthScopeEntity");
const IamCollectionOrganizationEntity_1 = require("./entity/IamCollectionOrganizationEntity");
const IamCollectionPermissionGroupEntity_1 = require("./entity/IamCollectionPermissionGroupEntity");
const IamCollectionRoleEntity_1 = require("./entity/IamCollectionRoleEntity");
const IamCollectionTokenEntity_1 = require("./entity/IamCollectionTokenEntity");
const IamOauthClientRotateSecretEntity_1 = require("./entity/IamOauthClientRotateSecretEntity");
const IamPermissionsGroupResponseCollectionEntity_1 = require("./entity/IamPermissionsGroupResponseCollectionEntity");
const IamResponseSingleValueEntity_1 = require("./entity/IamResponseSingleValueEntity");
const IamSchemasCollectionInviteEntity_1 = require("./entity/IamSchemasCollectionInviteEntity");
const IamSingleInviteEntity_1 = require("./entity/IamSingleInviteEntity");
const IamSingleMemberResponseWithPolicyEntity_1 = require("./entity/IamSingleMemberResponseWithPolicyEntity");
const IamSingleMembershipResponseWithPolicyEntity_1 = require("./entity/IamSingleMembershipResponseWithPolicyEntity");
const IamSingleOauthClientEntity_1 = require("./entity/IamSingleOauthClientEntity");
const IamSingleOauthClientCreateEntity_1 = require("./entity/IamSingleOauthClientCreateEntity");
const IamSingleOrganizationEntity_1 = require("./entity/IamSingleOrganizationEntity");
const IamSinglePermissionGroupEntity_1 = require("./entity/IamSinglePermissionGroupEntity");
const IamSingleRoleEntity_1 = require("./entity/IamSingleRoleEntity");
const IamSingleTokenEntity_1 = require("./entity/IamSingleTokenEntity");
const IamSingleTokenCreateEntity_1 = require("./entity/IamSingleTokenCreateEntity");
const IamSsoConnectorEntity_1 = require("./entity/IamSsoConnectorEntity");
const IamSsoConnectorCollectionEntity_1 = require("./entity/IamSsoConnectorCollectionEntity");
const IamTokenVerifyResponseSingleSegmentEntity_1 = require("./entity/IamTokenVerifyResponseSingleSegmentEntity");
const MemberEntity_1 = require("./entity/MemberEntity");
const OauthClientEntity_1 = require("./entity/OauthClientEntity");
const OrganizationEntity_1 = require("./entity/OrganizationEntity");
const OrganizationMemberEntity_1 = require("./entity/OrganizationMemberEntity");
const OrganizationsApiProfileEntity_1 = require("./entity/OrganizationsApiProfileEntity");
const ResourceEntity_1 = require("./entity/ResourceEntity");
const ResourceGroupEntity_1 = require("./entity/ResourceGroupEntity");
const ResourceSharingEntity_1 = require("./entity/ResourceSharingEntity");
const ResourceSharingShareExcludedRecipientResponseCollectionEntity_1 = require("./entity/ResourceSharingShareExcludedRecipientResponseCollectionEntity");
const ResourceSharingShareExcludedRecipientResponseSingleEntity_1 = require("./entity/ResourceSharingShareExcludedRecipientResponseSingleEntity");
const ResourceSharingShareRecipientResponseCollectionEntity_1 = require("./entity/ResourceSharingShareRecipientResponseCollectionEntity");
const ResourceSharingShareRecipientResponseSingleEntity_1 = require("./entity/ResourceSharingShareRecipientResponseSingleEntity");
const ResourceSharingShareResponseCollectionEntity_1 = require("./entity/ResourceSharingShareResponseCollectionEntity");
const ResourceSharingShareResponseSingleEntity_1 = require("./entity/ResourceSharingShareResponseSingleEntity");
const ScimDiscoveryEntity_1 = require("./entity/ScimDiscoveryEntity");
const ScimGroupEntity_1 = require("./entity/ScimGroupEntity");
const ScimUserEntity_1 = require("./entity/ScimUserEntity");
const SsoConnectorEntity_1 = require("./entity/SsoConnectorEntity");
const TenantEntity_1 = require("./entity/TenantEntity");
const TokenEntity_1 = require("./entity/TokenEntity");
const UserEntity_1 = require("./entity/UserEntity");
const UserGroupEntity_1 = require("./entity/UserGroupEntity");
const UsersAccountMembershipEntity_1 = require("./entity/UsersAccountMembershipEntity");
const UsersOrganizationEntity_1 = require("./entity/UsersOrganizationEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const CloudflareIdentityEntityBase_1 = require("./CloudflareIdentityEntityBase");
Object.defineProperty(exports, "CloudflareIdentityEntityBase", { enumerable: true, get: function () { return CloudflareIdentityEntityBase_1.CloudflareIdentityEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class CloudflareIdentitySDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('CloudflareIdentitySDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('CloudflareIdentitySDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('CloudflareIdentitySDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.AaaAuditLogsV2OrgHistoryResponseCollection().list()` / `client.AaaAuditLogsV2OrgHistoryResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AaaAuditLogsV2OrgHistoryResponseCollection(entopts) {
        const self = this;
        return new AaaAuditLogsV2OrgHistoryResponseCollectionEntity_1.AaaAuditLogsV2OrgHistoryResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.AaaAuditLogsV2OrgResponseCollection().list()` / `client.AaaAuditLogsV2OrgResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AaaAuditLogsV2OrgResponseCollection(entopts) {
        const self = this;
        return new AaaAuditLogsV2OrgResponseCollectionEntity_1.AaaAuditLogsV2OrgResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.Account().list()` / `client.Account().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Account(entopts) {
        const self = this;
        return new AccountEntity_1.AccountEntity(self, entopts);
    }
    // Entity access: `client.AccountResourceGroup().list()` / `client.AccountResourceGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccountResourceGroup(entopts) {
        const self = this;
        return new AccountResourceGroupEntity_1.AccountResourceGroupEntity(self, entopts);
    }
    // Entity access: `client.AccountUserGroup().list()` / `client.AccountUserGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccountUserGroup(entopts) {
        const self = this;
        return new AccountUserGroupEntity_1.AccountUserGroupEntity(self, entopts);
    }
    // Entity access: `client.AccountUserGroupMember().list()` / `client.AccountUserGroupMember().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AccountUserGroupMember(entopts) {
        const self = this;
        return new AccountUserGroupMemberEntity_1.AccountUserGroupMemberEntity(self, entopts);
    }
    // Entity access: `client.BeginVerification().list()` / `client.BeginVerification().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BeginVerification(entopts) {
        const self = this;
        return new BeginVerificationEntity_1.BeginVerificationEntity(self, entopts);
    }
    // Entity access: `client.BillSubsApiClientSecretResponseSingle().list()` / `client.BillSubsApiClientSecretResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillSubsApiClientSecretResponseSingle(entopts) {
        const self = this;
        return new BillSubsApiClientSecretResponseSingleEntity_1.BillSubsApiClientSecretResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.BillableUsageApiV2Usage().list()` / `client.BillableUsageApiV2Usage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BillableUsageApiV2Usage(entopts) {
        const self = this;
        return new BillableUsageApiV2UsageEntity_1.BillableUsageApiV2UsageEntity(self, entopts);
    }
    // Entity access: `client.DnsCustomNameserversEmptyResponse3().list()` / `client.DnsCustomNameserversEmptyResponse3().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DnsCustomNameserversEmptyResponse3(entopts) {
        const self = this;
        return new DnsCustomNameserversEmptyResponse3Entity_1.DnsCustomNameserversEmptyResponse3Entity(self, entopts);
    }
    // Entity access: `client.DnsCustomNameserversTcnsResponseCollection().list()` / `client.DnsCustomNameserversTcnsResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DnsCustomNameserversTcnsResponseCollection(entopts) {
        const self = this;
        return new DnsCustomNameserversTcnsResponseCollectionEntity_1.DnsCustomNameserversTcnsResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.DnsCustomNameserversTcnsResponseSingle().list()` / `client.DnsCustomNameserversTcnsResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DnsCustomNameserversTcnsResponseSingle(entopts) {
        const self = this;
        return new DnsCustomNameserversTcnsResponseSingleEntity_1.DnsCustomNameserversTcnsResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.IamApiResponseSingleId().list()` / `client.IamApiResponseSingleId().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamApiResponseSingleId(entopts) {
        const self = this;
        return new IamApiResponseSingleIdEntity_1.IamApiResponseSingleIdEntity(self, entopts);
    }
    // Entity access: `client.IamCollectionMemberResponseWithPolicy().list()` / `client.IamCollectionMemberResponseWithPolicy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamCollectionMemberResponseWithPolicy(entopts) {
        const self = this;
        return new IamCollectionMemberResponseWithPolicyEntity_1.IamCollectionMemberResponseWithPolicyEntity(self, entopts);
    }
    // Entity access: `client.IamCollectionOauthClient().list()` / `client.IamCollectionOauthClient().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamCollectionOauthClient(entopts) {
        const self = this;
        return new IamCollectionOauthClientEntity_1.IamCollectionOauthClientEntity(self, entopts);
    }
    // Entity access: `client.IamCollectionOauthScope().list()` / `client.IamCollectionOauthScope().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamCollectionOauthScope(entopts) {
        const self = this;
        return new IamCollectionOauthScopeEntity_1.IamCollectionOauthScopeEntity(self, entopts);
    }
    // Entity access: `client.IamCollectionOrganization().list()` / `client.IamCollectionOrganization().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamCollectionOrganization(entopts) {
        const self = this;
        return new IamCollectionOrganizationEntity_1.IamCollectionOrganizationEntity(self, entopts);
    }
    // Entity access: `client.IamCollectionPermissionGroup().list()` / `client.IamCollectionPermissionGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamCollectionPermissionGroup(entopts) {
        const self = this;
        return new IamCollectionPermissionGroupEntity_1.IamCollectionPermissionGroupEntity(self, entopts);
    }
    // Entity access: `client.IamCollectionRole().list()` / `client.IamCollectionRole().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamCollectionRole(entopts) {
        const self = this;
        return new IamCollectionRoleEntity_1.IamCollectionRoleEntity(self, entopts);
    }
    // Entity access: `client.IamCollectionToken().list()` / `client.IamCollectionToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamCollectionToken(entopts) {
        const self = this;
        return new IamCollectionTokenEntity_1.IamCollectionTokenEntity(self, entopts);
    }
    // Entity access: `client.IamOauthClientRotateSecret().list()` / `client.IamOauthClientRotateSecret().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamOauthClientRotateSecret(entopts) {
        const self = this;
        return new IamOauthClientRotateSecretEntity_1.IamOauthClientRotateSecretEntity(self, entopts);
    }
    // Entity access: `client.IamPermissionsGroupResponseCollection().list()` / `client.IamPermissionsGroupResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamPermissionsGroupResponseCollection(entopts) {
        const self = this;
        return new IamPermissionsGroupResponseCollectionEntity_1.IamPermissionsGroupResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.IamResponseSingleValue().list()` / `client.IamResponseSingleValue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamResponseSingleValue(entopts) {
        const self = this;
        return new IamResponseSingleValueEntity_1.IamResponseSingleValueEntity(self, entopts);
    }
    // Entity access: `client.IamSchemasCollectionInvite().list()` / `client.IamSchemasCollectionInvite().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamSchemasCollectionInvite(entopts) {
        const self = this;
        return new IamSchemasCollectionInviteEntity_1.IamSchemasCollectionInviteEntity(self, entopts);
    }
    // Entity access: `client.IamSingleInvite().list()` / `client.IamSingleInvite().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamSingleInvite(entopts) {
        const self = this;
        return new IamSingleInviteEntity_1.IamSingleInviteEntity(self, entopts);
    }
    // Entity access: `client.IamSingleMemberResponseWithPolicy().list()` / `client.IamSingleMemberResponseWithPolicy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamSingleMemberResponseWithPolicy(entopts) {
        const self = this;
        return new IamSingleMemberResponseWithPolicyEntity_1.IamSingleMemberResponseWithPolicyEntity(self, entopts);
    }
    // Entity access: `client.IamSingleMembershipResponseWithPolicy().list()` / `client.IamSingleMembershipResponseWithPolicy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamSingleMembershipResponseWithPolicy(entopts) {
        const self = this;
        return new IamSingleMembershipResponseWithPolicyEntity_1.IamSingleMembershipResponseWithPolicyEntity(self, entopts);
    }
    // Entity access: `client.IamSingleOauthClient().list()` / `client.IamSingleOauthClient().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamSingleOauthClient(entopts) {
        const self = this;
        return new IamSingleOauthClientEntity_1.IamSingleOauthClientEntity(self, entopts);
    }
    // Entity access: `client.IamSingleOauthClientCreate().list()` / `client.IamSingleOauthClientCreate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamSingleOauthClientCreate(entopts) {
        const self = this;
        return new IamSingleOauthClientCreateEntity_1.IamSingleOauthClientCreateEntity(self, entopts);
    }
    // Entity access: `client.IamSingleOrganization().list()` / `client.IamSingleOrganization().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamSingleOrganization(entopts) {
        const self = this;
        return new IamSingleOrganizationEntity_1.IamSingleOrganizationEntity(self, entopts);
    }
    // Entity access: `client.IamSinglePermissionGroup().list()` / `client.IamSinglePermissionGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamSinglePermissionGroup(entopts) {
        const self = this;
        return new IamSinglePermissionGroupEntity_1.IamSinglePermissionGroupEntity(self, entopts);
    }
    // Entity access: `client.IamSingleRole().list()` / `client.IamSingleRole().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamSingleRole(entopts) {
        const self = this;
        return new IamSingleRoleEntity_1.IamSingleRoleEntity(self, entopts);
    }
    // Entity access: `client.IamSingleToken().list()` / `client.IamSingleToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamSingleToken(entopts) {
        const self = this;
        return new IamSingleTokenEntity_1.IamSingleTokenEntity(self, entopts);
    }
    // Entity access: `client.IamSingleTokenCreate().list()` / `client.IamSingleTokenCreate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamSingleTokenCreate(entopts) {
        const self = this;
        return new IamSingleTokenCreateEntity_1.IamSingleTokenCreateEntity(self, entopts);
    }
    // Entity access: `client.IamSsoConnector().list()` / `client.IamSsoConnector().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamSsoConnector(entopts) {
        const self = this;
        return new IamSsoConnectorEntity_1.IamSsoConnectorEntity(self, entopts);
    }
    // Entity access: `client.IamSsoConnectorCollection().list()` / `client.IamSsoConnectorCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamSsoConnectorCollection(entopts) {
        const self = this;
        return new IamSsoConnectorCollectionEntity_1.IamSsoConnectorCollectionEntity(self, entopts);
    }
    // Entity access: `client.IamTokenVerifyResponseSingleSegment().list()` / `client.IamTokenVerifyResponseSingleSegment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IamTokenVerifyResponseSingleSegment(entopts) {
        const self = this;
        return new IamTokenVerifyResponseSingleSegmentEntity_1.IamTokenVerifyResponseSingleSegmentEntity(self, entopts);
    }
    // Entity access: `client.Member().list()` / `client.Member().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Member(entopts) {
        const self = this;
        return new MemberEntity_1.MemberEntity(self, entopts);
    }
    // Entity access: `client.OauthClient().list()` / `client.OauthClient().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OauthClient(entopts) {
        const self = this;
        return new OauthClientEntity_1.OauthClientEntity(self, entopts);
    }
    // Entity access: `client.Organization().list()` / `client.Organization().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Organization(entopts) {
        const self = this;
        return new OrganizationEntity_1.OrganizationEntity(self, entopts);
    }
    // Entity access: `client.OrganizationMember().list()` / `client.OrganizationMember().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationMember(entopts) {
        const self = this;
        return new OrganizationMemberEntity_1.OrganizationMemberEntity(self, entopts);
    }
    // Entity access: `client.OrganizationsApiProfile().list()` / `client.OrganizationsApiProfile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationsApiProfile(entopts) {
        const self = this;
        return new OrganizationsApiProfileEntity_1.OrganizationsApiProfileEntity(self, entopts);
    }
    // Entity access: `client.Resource().list()` / `client.Resource().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Resource(entopts) {
        const self = this;
        return new ResourceEntity_1.ResourceEntity(self, entopts);
    }
    // Entity access: `client.ResourceGroup().list()` / `client.ResourceGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ResourceGroup(entopts) {
        const self = this;
        return new ResourceGroupEntity_1.ResourceGroupEntity(self, entopts);
    }
    // Entity access: `client.ResourceSharing().list()` / `client.ResourceSharing().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ResourceSharing(entopts) {
        const self = this;
        return new ResourceSharingEntity_1.ResourceSharingEntity(self, entopts);
    }
    // Entity access: `client.ResourceSharingShareExcludedRecipientResponseCollection().list()` / `client.ResourceSharingShareExcludedRecipientResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ResourceSharingShareExcludedRecipientResponseCollection(entopts) {
        const self = this;
        return new ResourceSharingShareExcludedRecipientResponseCollectionEntity_1.ResourceSharingShareExcludedRecipientResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.ResourceSharingShareExcludedRecipientResponseSingle().list()` / `client.ResourceSharingShareExcludedRecipientResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ResourceSharingShareExcludedRecipientResponseSingle(entopts) {
        const self = this;
        return new ResourceSharingShareExcludedRecipientResponseSingleEntity_1.ResourceSharingShareExcludedRecipientResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.ResourceSharingShareRecipientResponseCollection().list()` / `client.ResourceSharingShareRecipientResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ResourceSharingShareRecipientResponseCollection(entopts) {
        const self = this;
        return new ResourceSharingShareRecipientResponseCollectionEntity_1.ResourceSharingShareRecipientResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.ResourceSharingShareRecipientResponseSingle().list()` / `client.ResourceSharingShareRecipientResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ResourceSharingShareRecipientResponseSingle(entopts) {
        const self = this;
        return new ResourceSharingShareRecipientResponseSingleEntity_1.ResourceSharingShareRecipientResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.ResourceSharingShareResponseCollection().list()` / `client.ResourceSharingShareResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ResourceSharingShareResponseCollection(entopts) {
        const self = this;
        return new ResourceSharingShareResponseCollectionEntity_1.ResourceSharingShareResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.ResourceSharingShareResponseSingle().list()` / `client.ResourceSharingShareResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ResourceSharingShareResponseSingle(entopts) {
        const self = this;
        return new ResourceSharingShareResponseSingleEntity_1.ResourceSharingShareResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.ScimDiscovery().list()` / `client.ScimDiscovery().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ScimDiscovery(entopts) {
        const self = this;
        return new ScimDiscoveryEntity_1.ScimDiscoveryEntity(self, entopts);
    }
    // Entity access: `client.ScimGroup().list()` / `client.ScimGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ScimGroup(entopts) {
        const self = this;
        return new ScimGroupEntity_1.ScimGroupEntity(self, entopts);
    }
    // Entity access: `client.ScimUser().list()` / `client.ScimUser().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ScimUser(entopts) {
        const self = this;
        return new ScimUserEntity_1.ScimUserEntity(self, entopts);
    }
    // Entity access: `client.SsoConnector().list()` / `client.SsoConnector().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SsoConnector(entopts) {
        const self = this;
        return new SsoConnectorEntity_1.SsoConnectorEntity(self, entopts);
    }
    // Entity access: `client.Tenant().list()` / `client.Tenant().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Tenant(entopts) {
        const self = this;
        return new TenantEntity_1.TenantEntity(self, entopts);
    }
    // Entity access: `client.Token().list()` / `client.Token().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Token(entopts) {
        const self = this;
        return new TokenEntity_1.TokenEntity(self, entopts);
    }
    // Entity access: `client.User().list()` / `client.User().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    User(entopts) {
        const self = this;
        return new UserEntity_1.UserEntity(self, entopts);
    }
    // Entity access: `client.UserGroup().list()` / `client.UserGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UserGroup(entopts) {
        const self = this;
        return new UserGroupEntity_1.UserGroupEntity(self, entopts);
    }
    // Entity access: `client.UsersAccountMembership().list()` / `client.UsersAccountMembership().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UsersAccountMembership(entopts) {
        const self = this;
        return new UsersAccountMembershipEntity_1.UsersAccountMembershipEntity(self, entopts);
    }
    // Entity access: `client.UsersOrganization().list()` / `client.UsersOrganization().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UsersOrganization(entopts) {
        const self = this;
        return new UsersOrganizationEntity_1.UsersOrganizationEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new CloudflareIdentitySDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return CloudflareIdentitySDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'CloudflareIdentity' };
    }
    toString() {
        return 'CloudflareIdentity ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.CloudflareIdentitySDK = CloudflareIdentitySDK;
const SDK = CloudflareIdentitySDK;
exports.SDK = SDK;
//# sourceMappingURL=CloudflareIdentitySDK.js.map