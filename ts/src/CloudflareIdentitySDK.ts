// CloudflareIdentity Ts SDK

import { AaaAuditLogsV2OrgHistoryResponseCollectionEntity } from './entity/AaaAuditLogsV2OrgHistoryResponseCollectionEntity'
import { AaaAuditLogsV2OrgResponseCollectionEntity } from './entity/AaaAuditLogsV2OrgResponseCollectionEntity'
import { AccountEntity } from './entity/AccountEntity'
import { AccountResourceGroupEntity } from './entity/AccountResourceGroupEntity'
import { AccountUserGroupEntity } from './entity/AccountUserGroupEntity'
import { AccountUserGroupMemberEntity } from './entity/AccountUserGroupMemberEntity'
import { BeginVerificationEntity } from './entity/BeginVerificationEntity'
import { BillSubsApiClientSecretResponseSingleEntity } from './entity/BillSubsApiClientSecretResponseSingleEntity'
import { BillableUsageApiV2UsageEntity } from './entity/BillableUsageApiV2UsageEntity'
import { DnsCustomNameserversEmptyResponse3Entity } from './entity/DnsCustomNameserversEmptyResponse3Entity'
import { DnsCustomNameserversTcnsResponseCollectionEntity } from './entity/DnsCustomNameserversTcnsResponseCollectionEntity'
import { DnsCustomNameserversTcnsResponseSingleEntity } from './entity/DnsCustomNameserversTcnsResponseSingleEntity'
import { IamApiResponseSingleIdEntity } from './entity/IamApiResponseSingleIdEntity'
import { IamCollectionMemberResponseWithPolicyEntity } from './entity/IamCollectionMemberResponseWithPolicyEntity'
import { IamCollectionOauthClientEntity } from './entity/IamCollectionOauthClientEntity'
import { IamCollectionOauthScopeEntity } from './entity/IamCollectionOauthScopeEntity'
import { IamCollectionOrganizationEntity } from './entity/IamCollectionOrganizationEntity'
import { IamCollectionPermissionGroupEntity } from './entity/IamCollectionPermissionGroupEntity'
import { IamCollectionRoleEntity } from './entity/IamCollectionRoleEntity'
import { IamCollectionTokenEntity } from './entity/IamCollectionTokenEntity'
import { IamOauthClientRotateSecretEntity } from './entity/IamOauthClientRotateSecretEntity'
import { IamPermissionsGroupResponseCollectionEntity } from './entity/IamPermissionsGroupResponseCollectionEntity'
import { IamResponseSingleValueEntity } from './entity/IamResponseSingleValueEntity'
import { IamSchemasCollectionInviteEntity } from './entity/IamSchemasCollectionInviteEntity'
import { IamSingleInviteEntity } from './entity/IamSingleInviteEntity'
import { IamSingleMemberResponseWithPolicyEntity } from './entity/IamSingleMemberResponseWithPolicyEntity'
import { IamSingleMembershipResponseWithPolicyEntity } from './entity/IamSingleMembershipResponseWithPolicyEntity'
import { IamSingleOauthClientEntity } from './entity/IamSingleOauthClientEntity'
import { IamSingleOauthClientCreateEntity } from './entity/IamSingleOauthClientCreateEntity'
import { IamSingleOrganizationEntity } from './entity/IamSingleOrganizationEntity'
import { IamSinglePermissionGroupEntity } from './entity/IamSinglePermissionGroupEntity'
import { IamSingleRoleEntity } from './entity/IamSingleRoleEntity'
import { IamSingleTokenEntity } from './entity/IamSingleTokenEntity'
import { IamSingleTokenCreateEntity } from './entity/IamSingleTokenCreateEntity'
import { IamSsoConnectorEntity } from './entity/IamSsoConnectorEntity'
import { IamSsoConnectorCollectionEntity } from './entity/IamSsoConnectorCollectionEntity'
import { IamTokenVerifyResponseSingleSegmentEntity } from './entity/IamTokenVerifyResponseSingleSegmentEntity'
import { MemberEntity } from './entity/MemberEntity'
import { OauthClientEntity } from './entity/OauthClientEntity'
import { OrganizationEntity } from './entity/OrganizationEntity'
import { OrganizationMemberEntity } from './entity/OrganizationMemberEntity'
import { OrganizationsApiProfileEntity } from './entity/OrganizationsApiProfileEntity'
import { ResourceEntity } from './entity/ResourceEntity'
import { ResourceGroupEntity } from './entity/ResourceGroupEntity'
import { ResourceSharingEntity } from './entity/ResourceSharingEntity'
import { ResourceSharingShareExcludedRecipientResponseCollectionEntity } from './entity/ResourceSharingShareExcludedRecipientResponseCollectionEntity'
import { ResourceSharingShareExcludedRecipientResponseSingleEntity } from './entity/ResourceSharingShareExcludedRecipientResponseSingleEntity'
import { ResourceSharingShareRecipientResponseCollectionEntity } from './entity/ResourceSharingShareRecipientResponseCollectionEntity'
import { ResourceSharingShareRecipientResponseSingleEntity } from './entity/ResourceSharingShareRecipientResponseSingleEntity'
import { ResourceSharingShareResponseCollectionEntity } from './entity/ResourceSharingShareResponseCollectionEntity'
import { ResourceSharingShareResponseSingleEntity } from './entity/ResourceSharingShareResponseSingleEntity'
import { ScimDiscoveryEntity } from './entity/ScimDiscoveryEntity'
import { ScimGroupEntity } from './entity/ScimGroupEntity'
import { ScimUserEntity } from './entity/ScimUserEntity'
import { SsoConnectorEntity } from './entity/SsoConnectorEntity'
import { TenantEntity } from './entity/TenantEntity'
import { TokenEntity } from './entity/TokenEntity'
import { UserEntity } from './entity/UserEntity'
import { UserGroupEntity } from './entity/UserGroupEntity'
import { UsersAccountMembershipEntity } from './entity/UsersAccountMembershipEntity'
import { UsersOrganizationEntity } from './entity/UsersOrganizationEntity'

export type * from './CloudflareIdentityTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { CloudflareIdentityEntityBase } from './CloudflareIdentityEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class CloudflareIdentitySDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
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
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('CloudflareIdentitySDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('CloudflareIdentitySDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('CloudflareIdentitySDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.AaaAuditLogsV2OrgHistoryResponseCollection().list()` / `client.AaaAuditLogsV2OrgHistoryResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AaaAuditLogsV2OrgHistoryResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new AaaAuditLogsV2OrgHistoryResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.AaaAuditLogsV2OrgResponseCollection().list()` / `client.AaaAuditLogsV2OrgResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AaaAuditLogsV2OrgResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new AaaAuditLogsV2OrgResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.Account().list()` / `client.Account().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Account(entopts?: Record<string, any>) {
    const self = this
    return new AccountEntity(self, entopts)
  }


  // Entity access: `client.AccountResourceGroup().list()` / `client.AccountResourceGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountResourceGroup(entopts?: Record<string, any>) {
    const self = this
    return new AccountResourceGroupEntity(self, entopts)
  }


  // Entity access: `client.AccountUserGroup().list()` / `client.AccountUserGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountUserGroup(entopts?: Record<string, any>) {
    const self = this
    return new AccountUserGroupEntity(self, entopts)
  }


  // Entity access: `client.AccountUserGroupMember().list()` / `client.AccountUserGroupMember().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AccountUserGroupMember(entopts?: Record<string, any>) {
    const self = this
    return new AccountUserGroupMemberEntity(self, entopts)
  }


  // Entity access: `client.BeginVerification().list()` / `client.BeginVerification().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BeginVerification(entopts?: Record<string, any>) {
    const self = this
    return new BeginVerificationEntity(self, entopts)
  }


  // Entity access: `client.BillSubsApiClientSecretResponseSingle().list()` / `client.BillSubsApiClientSecretResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillSubsApiClientSecretResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new BillSubsApiClientSecretResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.BillableUsageApiV2Usage().list()` / `client.BillableUsageApiV2Usage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BillableUsageApiV2Usage(entopts?: Record<string, any>) {
    const self = this
    return new BillableUsageApiV2UsageEntity(self, entopts)
  }


  // Entity access: `client.DnsCustomNameserversEmptyResponse3().list()` / `client.DnsCustomNameserversEmptyResponse3().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DnsCustomNameserversEmptyResponse3(entopts?: Record<string, any>) {
    const self = this
    return new DnsCustomNameserversEmptyResponse3Entity(self, entopts)
  }


  // Entity access: `client.DnsCustomNameserversTcnsResponseCollection().list()` / `client.DnsCustomNameserversTcnsResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DnsCustomNameserversTcnsResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new DnsCustomNameserversTcnsResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.DnsCustomNameserversTcnsResponseSingle().list()` / `client.DnsCustomNameserversTcnsResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DnsCustomNameserversTcnsResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new DnsCustomNameserversTcnsResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.IamApiResponseSingleId().list()` / `client.IamApiResponseSingleId().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamApiResponseSingleId(entopts?: Record<string, any>) {
    const self = this
    return new IamApiResponseSingleIdEntity(self, entopts)
  }


  // Entity access: `client.IamCollectionMemberResponseWithPolicy().list()` / `client.IamCollectionMemberResponseWithPolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamCollectionMemberResponseWithPolicy(entopts?: Record<string, any>) {
    const self = this
    return new IamCollectionMemberResponseWithPolicyEntity(self, entopts)
  }


  // Entity access: `client.IamCollectionOauthClient().list()` / `client.IamCollectionOauthClient().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamCollectionOauthClient(entopts?: Record<string, any>) {
    const self = this
    return new IamCollectionOauthClientEntity(self, entopts)
  }


  // Entity access: `client.IamCollectionOauthScope().list()` / `client.IamCollectionOauthScope().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamCollectionOauthScope(entopts?: Record<string, any>) {
    const self = this
    return new IamCollectionOauthScopeEntity(self, entopts)
  }


  // Entity access: `client.IamCollectionOrganization().list()` / `client.IamCollectionOrganization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamCollectionOrganization(entopts?: Record<string, any>) {
    const self = this
    return new IamCollectionOrganizationEntity(self, entopts)
  }


  // Entity access: `client.IamCollectionPermissionGroup().list()` / `client.IamCollectionPermissionGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamCollectionPermissionGroup(entopts?: Record<string, any>) {
    const self = this
    return new IamCollectionPermissionGroupEntity(self, entopts)
  }


  // Entity access: `client.IamCollectionRole().list()` / `client.IamCollectionRole().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamCollectionRole(entopts?: Record<string, any>) {
    const self = this
    return new IamCollectionRoleEntity(self, entopts)
  }


  // Entity access: `client.IamCollectionToken().list()` / `client.IamCollectionToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamCollectionToken(entopts?: Record<string, any>) {
    const self = this
    return new IamCollectionTokenEntity(self, entopts)
  }


  // Entity access: `client.IamOauthClientRotateSecret().list()` / `client.IamOauthClientRotateSecret().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamOauthClientRotateSecret(entopts?: Record<string, any>) {
    const self = this
    return new IamOauthClientRotateSecretEntity(self, entopts)
  }


  // Entity access: `client.IamPermissionsGroupResponseCollection().list()` / `client.IamPermissionsGroupResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamPermissionsGroupResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new IamPermissionsGroupResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.IamResponseSingleValue().list()` / `client.IamResponseSingleValue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamResponseSingleValue(entopts?: Record<string, any>) {
    const self = this
    return new IamResponseSingleValueEntity(self, entopts)
  }


  // Entity access: `client.IamSchemasCollectionInvite().list()` / `client.IamSchemasCollectionInvite().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamSchemasCollectionInvite(entopts?: Record<string, any>) {
    const self = this
    return new IamSchemasCollectionInviteEntity(self, entopts)
  }


  // Entity access: `client.IamSingleInvite().list()` / `client.IamSingleInvite().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamSingleInvite(entopts?: Record<string, any>) {
    const self = this
    return new IamSingleInviteEntity(self, entopts)
  }


  // Entity access: `client.IamSingleMemberResponseWithPolicy().list()` / `client.IamSingleMemberResponseWithPolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamSingleMemberResponseWithPolicy(entopts?: Record<string, any>) {
    const self = this
    return new IamSingleMemberResponseWithPolicyEntity(self, entopts)
  }


  // Entity access: `client.IamSingleMembershipResponseWithPolicy().list()` / `client.IamSingleMembershipResponseWithPolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamSingleMembershipResponseWithPolicy(entopts?: Record<string, any>) {
    const self = this
    return new IamSingleMembershipResponseWithPolicyEntity(self, entopts)
  }


  // Entity access: `client.IamSingleOauthClient().list()` / `client.IamSingleOauthClient().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamSingleOauthClient(entopts?: Record<string, any>) {
    const self = this
    return new IamSingleOauthClientEntity(self, entopts)
  }


  // Entity access: `client.IamSingleOauthClientCreate().list()` / `client.IamSingleOauthClientCreate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamSingleOauthClientCreate(entopts?: Record<string, any>) {
    const self = this
    return new IamSingleOauthClientCreateEntity(self, entopts)
  }


  // Entity access: `client.IamSingleOrganization().list()` / `client.IamSingleOrganization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamSingleOrganization(entopts?: Record<string, any>) {
    const self = this
    return new IamSingleOrganizationEntity(self, entopts)
  }


  // Entity access: `client.IamSinglePermissionGroup().list()` / `client.IamSinglePermissionGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamSinglePermissionGroup(entopts?: Record<string, any>) {
    const self = this
    return new IamSinglePermissionGroupEntity(self, entopts)
  }


  // Entity access: `client.IamSingleRole().list()` / `client.IamSingleRole().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamSingleRole(entopts?: Record<string, any>) {
    const self = this
    return new IamSingleRoleEntity(self, entopts)
  }


  // Entity access: `client.IamSingleToken().list()` / `client.IamSingleToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamSingleToken(entopts?: Record<string, any>) {
    const self = this
    return new IamSingleTokenEntity(self, entopts)
  }


  // Entity access: `client.IamSingleTokenCreate().list()` / `client.IamSingleTokenCreate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamSingleTokenCreate(entopts?: Record<string, any>) {
    const self = this
    return new IamSingleTokenCreateEntity(self, entopts)
  }


  // Entity access: `client.IamSsoConnector().list()` / `client.IamSsoConnector().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamSsoConnector(entopts?: Record<string, any>) {
    const self = this
    return new IamSsoConnectorEntity(self, entopts)
  }


  // Entity access: `client.IamSsoConnectorCollection().list()` / `client.IamSsoConnectorCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamSsoConnectorCollection(entopts?: Record<string, any>) {
    const self = this
    return new IamSsoConnectorCollectionEntity(self, entopts)
  }


  // Entity access: `client.IamTokenVerifyResponseSingleSegment().list()` / `client.IamTokenVerifyResponseSingleSegment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IamTokenVerifyResponseSingleSegment(entopts?: Record<string, any>) {
    const self = this
    return new IamTokenVerifyResponseSingleSegmentEntity(self, entopts)
  }


  // Entity access: `client.Member().list()` / `client.Member().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Member(entopts?: Record<string, any>) {
    const self = this
    return new MemberEntity(self, entopts)
  }


  // Entity access: `client.OauthClient().list()` / `client.OauthClient().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OauthClient(entopts?: Record<string, any>) {
    const self = this
    return new OauthClientEntity(self, entopts)
  }


  // Entity access: `client.Organization().list()` / `client.Organization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Organization(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationEntity(self, entopts)
  }


  // Entity access: `client.OrganizationMember().list()` / `client.OrganizationMember().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationMember(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationMemberEntity(self, entopts)
  }


  // Entity access: `client.OrganizationsApiProfile().list()` / `client.OrganizationsApiProfile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationsApiProfile(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationsApiProfileEntity(self, entopts)
  }


  // Entity access: `client.Resource().list()` / `client.Resource().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Resource(entopts?: Record<string, any>) {
    const self = this
    return new ResourceEntity(self, entopts)
  }


  // Entity access: `client.ResourceGroup().list()` / `client.ResourceGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ResourceGroup(entopts?: Record<string, any>) {
    const self = this
    return new ResourceGroupEntity(self, entopts)
  }


  // Entity access: `client.ResourceSharing().list()` / `client.ResourceSharing().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ResourceSharing(entopts?: Record<string, any>) {
    const self = this
    return new ResourceSharingEntity(self, entopts)
  }


  // Entity access: `client.ResourceSharingShareExcludedRecipientResponseCollection().list()` / `client.ResourceSharingShareExcludedRecipientResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ResourceSharingShareExcludedRecipientResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new ResourceSharingShareExcludedRecipientResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.ResourceSharingShareExcludedRecipientResponseSingle().list()` / `client.ResourceSharingShareExcludedRecipientResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ResourceSharingShareExcludedRecipientResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new ResourceSharingShareExcludedRecipientResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.ResourceSharingShareRecipientResponseCollection().list()` / `client.ResourceSharingShareRecipientResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ResourceSharingShareRecipientResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new ResourceSharingShareRecipientResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.ResourceSharingShareRecipientResponseSingle().list()` / `client.ResourceSharingShareRecipientResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ResourceSharingShareRecipientResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new ResourceSharingShareRecipientResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.ResourceSharingShareResponseCollection().list()` / `client.ResourceSharingShareResponseCollection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ResourceSharingShareResponseCollection(entopts?: Record<string, any>) {
    const self = this
    return new ResourceSharingShareResponseCollectionEntity(self, entopts)
  }


  // Entity access: `client.ResourceSharingShareResponseSingle().list()` / `client.ResourceSharingShareResponseSingle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ResourceSharingShareResponseSingle(entopts?: Record<string, any>) {
    const self = this
    return new ResourceSharingShareResponseSingleEntity(self, entopts)
  }


  // Entity access: `client.ScimDiscovery().list()` / `client.ScimDiscovery().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ScimDiscovery(entopts?: Record<string, any>) {
    const self = this
    return new ScimDiscoveryEntity(self, entopts)
  }


  // Entity access: `client.ScimGroup().list()` / `client.ScimGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ScimGroup(entopts?: Record<string, any>) {
    const self = this
    return new ScimGroupEntity(self, entopts)
  }


  // Entity access: `client.ScimUser().list()` / `client.ScimUser().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ScimUser(entopts?: Record<string, any>) {
    const self = this
    return new ScimUserEntity(self, entopts)
  }


  // Entity access: `client.SsoConnector().list()` / `client.SsoConnector().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SsoConnector(entopts?: Record<string, any>) {
    const self = this
    return new SsoConnectorEntity(self, entopts)
  }


  // Entity access: `client.Tenant().list()` / `client.Tenant().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Tenant(entopts?: Record<string, any>) {
    const self = this
    return new TenantEntity(self, entopts)
  }


  // Entity access: `client.Token().list()` / `client.Token().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Token(entopts?: Record<string, any>) {
    const self = this
    return new TokenEntity(self, entopts)
  }


  // Entity access: `client.User().list()` / `client.User().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  User(entopts?: Record<string, any>) {
    const self = this
    return new UserEntity(self, entopts)
  }


  // Entity access: `client.UserGroup().list()` / `client.UserGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserGroup(entopts?: Record<string, any>) {
    const self = this
    return new UserGroupEntity(self, entopts)
  }


  // Entity access: `client.UsersAccountMembership().list()` / `client.UsersAccountMembership().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UsersAccountMembership(entopts?: Record<string, any>) {
    const self = this
    return new UsersAccountMembershipEntity(self, entopts)
  }


  // Entity access: `client.UsersOrganization().list()` / `client.UsersOrganization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UsersOrganization(entopts?: Record<string, any>) {
    const self = this
    return new UsersOrganizationEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new CloudflareIdentitySDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return CloudflareIdentitySDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'CloudflareIdentity' }
  }

  toString() {
    return 'CloudflareIdentity ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = CloudflareIdentitySDK


export {
  stdutil,
  config,
  

  BaseFeature,
  CloudflareIdentityEntityBase,

  CloudflareIdentitySDK,
  SDK,
}


