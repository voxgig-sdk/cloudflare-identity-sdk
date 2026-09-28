# CloudflareIdentity TypeScript SDK Reference

Complete API reference for the CloudflareIdentity TypeScript SDK.


## CloudflareIdentitySDK

### Constructor

```ts
new CloudflareIdentitySDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareIdentitySDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CloudflareIdentitySDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CloudflareIdentitySDK` instance in test mode.


### Instance Methods

#### `AaaAuditLogsV2OrgHistoryResponseCollection(data?: object)`

Create a new `AaaAuditLogsV2OrgHistoryResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AaaAuditLogsV2OrgHistoryResponseCollectionEntity` instance.

#### `AaaAuditLogsV2OrgResponseCollection(data?: object)`

Create a new `AaaAuditLogsV2OrgResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AaaAuditLogsV2OrgResponseCollectionEntity` instance.

#### `Account(data?: object)`

Create a new `Account` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountEntity` instance.

#### `AccountResourceGroup(data?: object)`

Create a new `AccountResourceGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountResourceGroupEntity` instance.

#### `AccountUserGroup(data?: object)`

Create a new `AccountUserGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountUserGroupEntity` instance.

#### `AccountUserGroupMember(data?: object)`

Create a new `AccountUserGroupMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AccountUserGroupMemberEntity` instance.

#### `BeginVerification(data?: object)`

Create a new `BeginVerification` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BeginVerificationEntity` instance.

#### `BillSubsApiClientSecretResponseSingle(data?: object)`

Create a new `BillSubsApiClientSecretResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillSubsApiClientSecretResponseSingleEntity` instance.

#### `BillableUsageApiV2Usage(data?: object)`

Create a new `BillableUsageApiV2Usage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillableUsageApiV2UsageEntity` instance.

#### `DnsCustomNameserversEmptyResponse3(data?: object)`

Create a new `DnsCustomNameserversEmptyResponse3` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DnsCustomNameserversEmptyResponse3Entity` instance.

#### `DnsCustomNameserversTcnsResponseCollection(data?: object)`

Create a new `DnsCustomNameserversTcnsResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DnsCustomNameserversTcnsResponseCollectionEntity` instance.

#### `DnsCustomNameserversTcnsResponseSingle(data?: object)`

Create a new `DnsCustomNameserversTcnsResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DnsCustomNameserversTcnsResponseSingleEntity` instance.

#### `IamApiResponseSingleId(data?: object)`

Create a new `IamApiResponseSingleId` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamApiResponseSingleIdEntity` instance.

#### `IamCollectionMemberResponseWithPolicy(data?: object)`

Create a new `IamCollectionMemberResponseWithPolicy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamCollectionMemberResponseWithPolicyEntity` instance.

#### `IamCollectionOauthClient(data?: object)`

Create a new `IamCollectionOauthClient` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamCollectionOauthClientEntity` instance.

#### `IamCollectionOauthScope(data?: object)`

Create a new `IamCollectionOauthScope` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamCollectionOauthScopeEntity` instance.

#### `IamCollectionOrganization(data?: object)`

Create a new `IamCollectionOrganization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamCollectionOrganizationEntity` instance.

#### `IamCollectionPermissionGroup(data?: object)`

Create a new `IamCollectionPermissionGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamCollectionPermissionGroupEntity` instance.

#### `IamCollectionRole(data?: object)`

Create a new `IamCollectionRole` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamCollectionRoleEntity` instance.

#### `IamCollectionToken(data?: object)`

Create a new `IamCollectionToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamCollectionTokenEntity` instance.

#### `IamOauthClientRotateSecret(data?: object)`

Create a new `IamOauthClientRotateSecret` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamOauthClientRotateSecretEntity` instance.

#### `IamPermissionsGroupResponseCollection(data?: object)`

Create a new `IamPermissionsGroupResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamPermissionsGroupResponseCollectionEntity` instance.

#### `IamResponseSingleValue(data?: object)`

Create a new `IamResponseSingleValue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamResponseSingleValueEntity` instance.

#### `IamSchemasCollectionInvite(data?: object)`

Create a new `IamSchemasCollectionInvite` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamSchemasCollectionInviteEntity` instance.

#### `IamSingleInvite(data?: object)`

Create a new `IamSingleInvite` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamSingleInviteEntity` instance.

#### `IamSingleMemberResponseWithPolicy(data?: object)`

Create a new `IamSingleMemberResponseWithPolicy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamSingleMemberResponseWithPolicyEntity` instance.

#### `IamSingleMembershipResponseWithPolicy(data?: object)`

Create a new `IamSingleMembershipResponseWithPolicy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamSingleMembershipResponseWithPolicyEntity` instance.

#### `IamSingleOauthClient(data?: object)`

Create a new `IamSingleOauthClient` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamSingleOauthClientEntity` instance.

#### `IamSingleOauthClientCreate(data?: object)`

Create a new `IamSingleOauthClientCreate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamSingleOauthClientCreateEntity` instance.

#### `IamSingleOrganization(data?: object)`

Create a new `IamSingleOrganization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamSingleOrganizationEntity` instance.

#### `IamSinglePermissionGroup(data?: object)`

Create a new `IamSinglePermissionGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamSinglePermissionGroupEntity` instance.

#### `IamSingleRole(data?: object)`

Create a new `IamSingleRole` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamSingleRoleEntity` instance.

#### `IamSingleToken(data?: object)`

Create a new `IamSingleToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamSingleTokenEntity` instance.

#### `IamSingleTokenCreate(data?: object)`

Create a new `IamSingleTokenCreate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamSingleTokenCreateEntity` instance.

#### `IamSsoConnector(data?: object)`

Create a new `IamSsoConnector` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamSsoConnectorEntity` instance.

#### `IamSsoConnectorCollection(data?: object)`

Create a new `IamSsoConnectorCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamSsoConnectorCollectionEntity` instance.

#### `IamTokenVerifyResponseSingleSegment(data?: object)`

Create a new `IamTokenVerifyResponseSingleSegment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IamTokenVerifyResponseSingleSegmentEntity` instance.

#### `Member(data?: object)`

Create a new `Member` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MemberEntity` instance.

#### `OauthClient(data?: object)`

Create a new `OauthClient` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OauthClientEntity` instance.

#### `Organization(data?: object)`

Create a new `Organization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationEntity` instance.

#### `OrganizationMember(data?: object)`

Create a new `OrganizationMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationMemberEntity` instance.

#### `OrganizationsApiProfile(data?: object)`

Create a new `OrganizationsApiProfile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationsApiProfileEntity` instance.

#### `Resource(data?: object)`

Create a new `Resource` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ResourceEntity` instance.

#### `ResourceGroup(data?: object)`

Create a new `ResourceGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ResourceGroupEntity` instance.

#### `ResourceSharing(data?: object)`

Create a new `ResourceSharing` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ResourceSharingEntity` instance.

#### `ResourceSharingShareExcludedRecipientResponseCollection(data?: object)`

Create a new `ResourceSharingShareExcludedRecipientResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ResourceSharingShareExcludedRecipientResponseCollectionEntity` instance.

#### `ResourceSharingShareExcludedRecipientResponseSingle(data?: object)`

Create a new `ResourceSharingShareExcludedRecipientResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ResourceSharingShareExcludedRecipientResponseSingleEntity` instance.

#### `ResourceSharingShareRecipientResponseCollection(data?: object)`

Create a new `ResourceSharingShareRecipientResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ResourceSharingShareRecipientResponseCollectionEntity` instance.

#### `ResourceSharingShareRecipientResponseSingle(data?: object)`

Create a new `ResourceSharingShareRecipientResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ResourceSharingShareRecipientResponseSingleEntity` instance.

#### `ResourceSharingShareResponseCollection(data?: object)`

Create a new `ResourceSharingShareResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ResourceSharingShareResponseCollectionEntity` instance.

#### `ResourceSharingShareResponseSingle(data?: object)`

Create a new `ResourceSharingShareResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ResourceSharingShareResponseSingleEntity` instance.

#### `ScimDiscovery(data?: object)`

Create a new `ScimDiscovery` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScimDiscoveryEntity` instance.

#### `ScimGroup(data?: object)`

Create a new `ScimGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScimGroupEntity` instance.

#### `ScimUser(data?: object)`

Create a new `ScimUser` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScimUserEntity` instance.

#### `SsoConnector(data?: object)`

Create a new `SsoConnector` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SsoConnectorEntity` instance.

#### `Tenant(data?: object)`

Create a new `Tenant` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TenantEntity` instance.

#### `Token(data?: object)`

Create a new `Token` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TokenEntity` instance.

#### `User(data?: object)`

Create a new `User` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserEntity` instance.

#### `UserGroup(data?: object)`

Create a new `UserGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserGroupEntity` instance.

#### `UsersAccountMembership(data?: object)`

Create a new `UsersAccountMembership` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UsersAccountMembershipEntity` instance.

#### `UsersOrganization(data?: object)`

Create a new `UsersOrganization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UsersOrganizationEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CloudflareIdentitySDK.test()`.

**Returns:** `CloudflareIdentitySDK` instance in test mode.


---

## AaaAuditLogsV2OrgHistoryResponseCollectionEntity

```ts
const aaa_audit_logs_v2_org_history_response_collection = client.AaaAuditLogsV2OrgHistoryResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `result` | `any[]` | Yes |  |
| `result_info` | `Record<string, any>` | Yes | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `boolean` | Yes | Indicates whether the API call was successful |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AaaAuditLogsV2OrgHistoryResponseCollection().list({ audit_id: "example", organization_id: "example", action_time: "example", before: "example", since: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AaaAuditLogsV2OrgHistoryResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AaaAuditLogsV2OrgResponseCollectionEntity

```ts
const aaa_audit_logs_v2_org_response_collection = client.AaaAuditLogsV2OrgResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | No |  |
| `result` | `any[]` | No |  |
| `result_info` | `Record<string, any>` | No | Provides information about the result of the request, including count and cursor. |
| `success` | `boolean` | No | Indicates whether the API call was successful |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AaaAuditLogsV2OrgResponseCollection().list({ organization_id: "example", before: "example", since: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AaaAuditLogsV2OrgResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccountEntity

```ts
const account = client.Account()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `organization` | `/accounts/{account_id}/organizations` | `client.Account().list({ $action: 'organization', ... })` |

An action returns that action's OWN response, which is not necessarily a
Account record — check the API definition for its shape.

```ts
const result = await client.Account().list({
  $action: 'organization',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Account().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccountResourceGroupEntity

```ts
const account_resource_group = client.AccountResourceGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `name` | `string` | Yes | Name of the resource group |
| `result` | `Record<string, any>` | Yes | A group of scoped resources. |
| `scope` | `Record<string, any>` | Yes | A scope is a combination of scope objects which provides additional context. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `errors` | - | - | - | - |
| `id` | - | - | - | - |
| `messages` | - | - | - | - |
| `name` | - | - | - | Yes |
| `result` | - | Yes | - | - |
| `scope` | - | - | - | - |
| `success` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AccountResourceGroup().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  name: 'example_name',
  result: {},
  scope: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AccountResourceGroup().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AccountResourceGroup().load({ id: 'account_resource_group_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AccountResourceGroup().update({
  id: 'account_resource_group_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountResourceGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccountUserGroupEntity

```ts
const account_user_group = client.AccountUserGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | Yes | Name of the User group. |
| `policies` | `any[]` | No | Policies attached to the User group |
| `result` | `Record<string, any>` | Yes | A group of policies resources. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `id` | - | - | - | - |
| `name` | - | - | - | Yes |
| `policies` | - | - | - | - |
| `result` | - | Yes | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AccountUserGroup().create({
  account_id: 'example_account_id',
  name: 'example_name',
  result: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AccountUserGroup().list({ account_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AccountUserGroup().load({ id: 'account_user_group_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AccountUserGroup().update({
  id: 'account_user_group_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountUserGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AccountUserGroupMemberEntity

```ts
const account_user_group_member = client.AccountUserGroupMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `Record<string, any>` | Yes | Detailed member information for a User Group member. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `id` | - | - | - | - | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AccountUserGroupMember().create({
  account_id: 'example_account_id',
  user_group_id: 'example_user_group_id',
  result: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AccountUserGroupMember().list({ account_id: "example", user_group_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AccountUserGroupMember().load({ id: 'account_user_group_member_id', account_id: 'account_id', user_group_id: 'user_group_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AccountUserGroupMember().remove({ id: 'account_user_group_member_id', account_id: 'account_id', user_group_id: 'user_group_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AccountUserGroupMember().update({
  id: 'account_user_group_member_id',
  account_id: 'account_id',
  user_group_id: 'user_group_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AccountUserGroupMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BeginVerificationEntity

```ts
const begin_verification = client.BeginVerification()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BeginVerification().create({
  account_id: 'example_account_id',
  sso_connector_id: 'example_sso_connector_id',
  errors: [],
  messages: [],
  success: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BeginVerificationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillSubsApiClientSecretResponseSingleEntity

```ts
const bill_subs_api_client_secret_response_single = client.BillSubsApiClientSecretResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BillSubsApiClientSecretResponseSingle().create({
  account_id: 'example_account_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillSubsApiClientSecretResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillableUsageApiV2UsageEntity

```ts
const billable_usage_api_v2_usage = client.BillableUsageApiV2Usage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes | Contains error details if the request failed. |
| `messages` | `any[]` | Yes | Contains informational notices about the response. |
| `result` | `any[]` | Yes | Contains the array of cost and usage records. |
| `success` | `boolean` | Yes | Indicates whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BillableUsageApiV2Usage().list({ organization_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillableUsageApiV2UsageEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DnsCustomNameserversEmptyResponse3Entity

```ts
const dns_custom_nameservers_empty_response_3 = client.DnsCustomNameserversEmptyResponse3()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DnsCustomNameserversEmptyResponse3().remove({ custom_ns_id: 'custom_ns_id', tenant_tag: 'tenant_tag' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DnsCustomNameserversEmptyResponse3Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DnsCustomNameserversTcnsResponseCollectionEntity

```ts
const dns_custom_nameservers_tcns_response_collection = client.DnsCustomNameserversTcnsResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DnsCustomNameserversTcnsResponseCollection().list({ tenant_tag: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DnsCustomNameserversTcnsResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DnsCustomNameserversTcnsResponseSingleEntity

```ts
const dns_custom_nameservers_tcns_response_single = client.DnsCustomNameserversTcnsResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ns_name` | `string` | Yes | The FQDN of the name server. |
| `ns_set` | `number` | No | The number of the set that this name server belongs to. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DnsCustomNameserversTcnsResponseSingle().create({
  tenant_tag: 'example_tenant_tag',
  ns_name: 'example_ns_name',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DnsCustomNameserversTcnsResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamApiResponseSingleIdEntity

```ts
const iam_api_response_single_id = client.IamApiResponseSingleId()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.IamApiResponseSingleId().remove({ account_id: 'account_id', oauth_client_id: 'oauth_client_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamApiResponseSingleIdEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamCollectionMemberResponseWithPolicyEntity

```ts
const iam_collection_member_response_with_policy = client.IamCollectionMemberResponseWithPolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IamCollectionMemberResponseWithPolicy().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamCollectionMemberResponseWithPolicyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamCollectionOauthClientEntity

```ts
const iam_collection_oauth_client = client.IamCollectionOauthClient()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IamCollectionOauthClient().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamCollectionOauthClientEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamCollectionOauthScopeEntity

```ts
const iam_collection_oauth_scope = client.IamCollectionOauthScope()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IamCollectionOauthScope().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamCollectionOauthScopeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamCollectionOrganizationEntity

```ts
const iam_collection_organization = client.IamCollectionOrganization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IamCollectionOrganization().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamCollectionOrganizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamCollectionPermissionGroupEntity

```ts
const iam_collection_permission_group = client.IamCollectionPermissionGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No | A set of permission groups that are specified to the policy. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IamCollectionPermissionGroup().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamCollectionPermissionGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamCollectionRoleEntity

```ts
const iam_collection_role = client.IamCollectionRole()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IamCollectionRole().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamCollectionRoleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamCollectionTokenEntity

```ts
const iam_collection_token = client.IamCollectionToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IamCollectionToken().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamCollectionTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamOauthClientRotateSecretEntity

```ts
const iam_oauth_client_rotate_secret = client.IamOauthClientRotateSecret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.IamOauthClientRotateSecret().create({
  account_id: 'example_account_id',
  oauth_client_id: 'example_oauth_client_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamOauthClientRotateSecretEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamPermissionsGroupResponseCollectionEntity

```ts
const iam_permissions_group_response_collection = client.IamPermissionsGroupResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IamPermissionsGroupResponseCollection().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamPermissionsGroupResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamResponseSingleValueEntity

```ts
const iam_response_single_value = client.IamResponseSingleValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `string` | No | The token value. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.IamResponseSingleValue().update({
  token_id: 'token_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamResponseSingleValueEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamSchemasCollectionInviteEntity

```ts
const iam_schemas_collection_invite = client.IamSchemasCollectionInvite()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IamSchemasCollectionInvite().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamSchemasCollectionInviteEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamSingleInviteEntity

```ts
const iam_single_invite = client.IamSingleInvite()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `Record<string, any>` | Yes |  |
| `status` | `any` | Yes | Status of your response to the invitation (rejected or accepted). |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IamSingleInvite().load({ id: 'iam_single_invite_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.IamSingleInvite().update({
  id: 'iam_single_invite_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamSingleInviteEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamSingleMemberResponseWithPolicyEntity

```ts
const iam_single_member_response_with_policy = client.IamSingleMemberResponseWithPolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.IamSingleMemberResponseWithPolicy().create({
  account_id: 'example_account_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IamSingleMemberResponseWithPolicy().load({ account_id: 'account_id', member_id: 'member_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.IamSingleMemberResponseWithPolicy().update({
  account_id: 'account_id',
  member_id: 'member_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamSingleMemberResponseWithPolicyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamSingleMembershipResponseWithPolicyEntity

```ts
const iam_single_membership_response_with_policy = client.IamSingleMembershipResponseWithPolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |
| `status` | `any` | Yes | Whether to accept or reject this account invitation. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IamSingleMembershipResponseWithPolicy().load({ membership_id: 'membership_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.IamSingleMembershipResponseWithPolicy().update({
  membership_id: 'membership_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamSingleMembershipResponseWithPolicyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamSingleOauthClientEntity

```ts
const iam_single_oauth_client = client.IamSingleOauthClient()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `any` | No | An OAuth 2.0 client registration. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IamSingleOauthClient().load({ id: 'iam_single_oauth_client_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.IamSingleOauthClient().update({
  id: 'iam_single_oauth_client_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamSingleOauthClientEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamSingleOauthClientCreateEntity

```ts
const iam_single_oauth_client_create = client.IamSingleOauthClientCreate()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.IamSingleOauthClientCreate().create({
  account_id: 'example_account_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamSingleOauthClientCreateEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamSingleOrganizationEntity

```ts
const iam_single_organization = client.IamSingleOrganization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IamSingleOrganization().load({ id: 'iam_single_organization_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamSingleOrganizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamSinglePermissionGroupEntity

```ts
const iam_single_permission_group = client.IamSinglePermissionGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `Record<string, any>` | Yes | A named group of permissions that map to a group of operations against resources. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IamSinglePermissionGroup().load({ id: 'iam_single_permission_group_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamSinglePermissionGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamSingleRoleEntity

```ts
const iam_single_role = client.IamSingleRole()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IamSingleRole().load({ id: 'iam_single_role_id', account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamSingleRoleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamSingleTokenEntity

```ts
const iam_single_token = client.IamSingleToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IamSingleToken().load({ id: 'iam_single_token_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.IamSingleToken().update({
  id: 'iam_single_token_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamSingleTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamSingleTokenCreateEntity

```ts
const iam_single_token_create = client.IamSingleTokenCreate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition` | `Record<string, any>` | No |  |
| `expires_on` | `string` | No | The expiration time on or after which the JWT MUST NOT be accepted for processing. |
| `name` | `string` | Yes | Token name. |
| `not_before` | `string` | No | The time before which the token MUST NOT be accepted for processing. |
| `policies` | `any[]` | Yes | List of access policies assigned to the token. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.IamSingleTokenCreate().create({
  name: 'example_name',
  policies: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamSingleTokenCreateEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamSsoConnectorEntity

```ts
const iam_sso_connector = client.IamSsoConnector()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `begin_verification` | `boolean` | No | Begin the verification process after creation |
| `email_domain` | `string` | Yes | Email domain of the new SSO connector |
| `enabled` | `boolean` | No | SSO Connector enabled state |
| `id` | `string` | No |  |
| `result` | `Record<string, any>` | No |  |
| `use_fedramp_language` | `boolean` | No | Controls the display of FedRAMP language to the user during SSO login |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.IamSsoConnector().create({
  account_id: 'example_account_id',
  email_domain: 'example_email_domain',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IamSsoConnector().load({ id: 'iam_sso_connector_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.IamSsoConnector().update({
  id: 'iam_sso_connector_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamSsoConnectorEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamSsoConnectorCollectionEntity

```ts
const iam_sso_connector_collection = client.IamSsoConnectorCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IamSsoConnectorCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamSsoConnectorCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IamTokenVerifyResponseSingleSegmentEntity

```ts
const iam_token_verify_response_single_segment = client.IamTokenVerifyResponseSingleSegment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IamTokenVerifyResponseSingleSegment().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IamTokenVerifyResponseSingleSegmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MemberEntity

```ts
const member = client.Member()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Member().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OauthClientEntity

```ts
const oauth_client = client.OauthClient()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.OauthClient().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OauthClientEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationEntity

```ts
const organization = client.Organization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_time` | `string` | Yes |  |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `meta` | `Record<string, any>` | Yes |  |
| `name` | `string` | Yes |  |
| `parent` | `Record<string, any>` | Yes |  |
| `profile` | `Record<string, any>` | Yes |  |
| `result` | `Record<string, any>` | Yes | References an Organization in the Cloudflare data model. |
| `result_info` | `Record<string, any>` | Yes |  |
| `status` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `membersbatch_create` | `/organizations/{organization_id}/members:batchCreate` | `client.Organization().create({ $action: 'membersbatch_create', ... })` |
| `account` | `/organizations/{organization_id}/accounts` | `client.Organization().list({ $action: 'account', ... })` |
| `profile` | `/organizations/{organization_id}/profile` | `client.Organization().update({ $action: 'profile', ... })` |

An action returns that action's OWN response, which is not necessarily a
Organization record — check the API definition for its shape.

```ts
const result = await client.Organization().create({
  $action: 'membersbatch_create',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Organization().create({
  create_time: 'example_create_time',
  errors: [],
  id: 'example_id',
  messages: [],
  meta: {},
  name: 'example_name',
  parent: {},
  profile: {},
  result: {},
  result_info: {},
  status: 'example_status',
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Organization().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Organization().load({ id: 'organization_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Organization().remove({ id: 'organization_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Organization().update({
  id: 'organization_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationMemberEntity

```ts
const organization_member = client.OrganizationMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `member` | `Record<string, any>` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `result_info` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OrganizationMember().create({
  id: 'example_id',
  errors: [],
  member: {},
  messages: [],
  result: {},
  result_info: {},
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationMember().list({ id: "example_id" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OrganizationMember().load({ id: 'organization_member_id', organization_id: 'organization_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.OrganizationMember().remove({ id: 'organization_member_id', organization_id: 'organization_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationsApiProfileEntity

```ts
const organizations_api_profile = client.OrganizationsApiProfile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `number` | Yes |  |
| `message` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationsApiProfile().list({ organization_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationsApiProfileEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ResourceEntity

```ts
const resource = client.Resource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `meta` | `Record<string, any>` | Yes | Resource Metadata. |
| `resource_account_id` | `string` | Yes | Account identifier. |
| `resource_id` | `string` | Yes | Share Resource identifier. |
| `resource_type` | `string` | Yes | Resource Type. |
| `result` | `any` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `errors` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `meta` | - | - | - | - | - |
| `resource_account_id` | - | - | - | - | - |
| `resource_id` | - | - | - | - | - |
| `resource_type` | - | - | - | - | - |
| `result` | Yes | - | - | - | - |
| `success` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Resource().create({
  account_id: 'example_account_id',
  share_id: 'example_share_id',
  errors: [],
  meta: {},
  resource_account_id: 'example_resource_account_id',
  resource_id: 'example_resource_id',
  resource_type: 'example_resource_type',
  success: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Resource().list({ account_id: "example", share_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Resource().load({ id: 'resource_id', account_id: 'account_id', share_id: 'share_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Resource().remove({ id: 'resource_id', account_id: 'account_id', share_id: 'share_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Resource().update({
  id: 'resource_id',
  account_id: 'account_id',
  share_id: 'share_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ResourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ResourceGroupEntity

```ts
const resource_group = client.ResourceGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ResourceGroup().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ResourceGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ResourceSharingEntity

```ts
const resource_sharing = client.ResourceSharing()
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ResourceSharing().update({
  account_id: 'account_id',
  share_id: 'share_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ResourceSharingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ResourceSharingShareExcludedRecipientResponseCollectionEntity

```ts
const resource_sharing_share_excluded_recipient_response_collection = client.ResourceSharingShareExcludedRecipientResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ResourceSharingShareExcludedRecipientResponseCollection().list({ account_id: "example", share_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ResourceSharingShareExcludedRecipientResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ResourceSharingShareExcludedRecipientResponseSingleEntity

```ts
const resource_sharing_share_excluded_recipient_response_single = client.ResourceSharingShareExcludedRecipientResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes | The account to exclude from the organization-targeted share. |
| `errors` | `any[]` | Yes |  |
| `result` | `any` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | create | remove |
| --- | --- | --- | --- |
| `account_id` | - | - | - |
| `errors` | - | - | - |
| `result` | Yes | - | - |
| `success` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ResourceSharingShareExcludedRecipientResponseSingle().create({
  account_id: 'example_account_id',
  share_id: 'example_share_id',
  errors: [],
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ResourceSharingShareExcludedRecipientResponseSingle().load({ account_id: 'account_id', excluded_recipient_id: 'excluded_recipient_id', share_id: 'share_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ResourceSharingShareExcludedRecipientResponseSingle().remove({ account_id: 'account_id', excluded_recipient_id: 'excluded_recipient_id', share_id: 'share_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ResourceSharingShareExcludedRecipientResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ResourceSharingShareRecipientResponseCollectionEntity

```ts
const resource_sharing_share_recipient_response_collection = client.ResourceSharingShareRecipientResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ResourceSharingShareRecipientResponseCollection().list({ account_id: "example", share_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ResourceSharingShareRecipientResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ResourceSharingShareRecipientResponseSingleEntity

```ts
const resource_sharing_share_recipient_response_single = client.ResourceSharingShareRecipientResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | No | Deprecated alias for `recipient_account_id`. |
| `errors` | `any[]` | Yes |  |
| `organization_id` | `string` | No | Organization identifier. |
| `recipient_account_id` | `string` | No | The account that will receive the share. |
| `result` | `any` | No | A recipient of a share. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | create | remove |
| --- | --- | --- | --- |
| `account_id` | - | - | - |
| `errors` | - | - | - |
| `organization_id` | - | - | - |
| `recipient_account_id` | - | - | - |
| `result` | Yes | - | - |
| `success` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ResourceSharingShareRecipientResponseSingle().create({
  account_id: 'example_account_id',
  share_id: 'example_share_id',
  errors: [],
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ResourceSharingShareRecipientResponseSingle().load({ account_id: 'account_id', recipient_id: 'recipient_id', share_id: 'share_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ResourceSharingShareRecipientResponseSingle().remove({ account_id: 'account_id', recipient_id: 'recipient_id', share_id: 'share_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ResourceSharingShareRecipientResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ResourceSharingShareResponseCollectionEntity

```ts
const resource_sharing_share_response_collection = client.ResourceSharingShareResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ResourceSharingShareResponseCollection().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ResourceSharingShareResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ResourceSharingShareResponseSingleEntity

```ts
const resource_sharing_share_response_single = client.ResourceSharingShareResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `name` | `string` | Yes | The name of the share. |
| `recipients` | `any[]` | Yes |  |
| `resources` | `any[]` | Yes |  |
| `result` | `any` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | create | update | remove |
| --- | --- | --- | --- | --- |
| `errors` | - | - | - | - |
| `name` | - | - | - | - |
| `recipients` | - | - | - | - |
| `resources` | - | - | - | - |
| `result` | Yes | - | - | - |
| `success` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ResourceSharingShareResponseSingle().create({
  account_id: 'example_account_id',
  errors: [],
  name: 'example_name',
  recipients: [],
  resources: [],
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ResourceSharingShareResponseSingle().load({ account_id: 'account_id', share_id: 'share_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ResourceSharingShareResponseSingle().remove({ account_id: 'account_id', share_id: 'share_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ResourceSharingShareResponseSingle().update({
  account_id: 'account_id',
  share_id: 'share_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ResourceSharingShareResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScimDiscoveryEntity

```ts
const scim_discovery = client.ScimDiscovery()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ScimDiscovery().load({ account_id: 'account_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScimDiscoveryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScimGroupEntity

```ts
const scim_group = client.ScimGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ScimGroup().create({
  account_id: 'example_account_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ScimGroup().load({ id: 'scim_group_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ScimGroup().remove({ id: 'scim_group_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ScimGroup().update({
  id: 'scim_group_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScimGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScimUserEntity

```ts
const scim_user = client.ScimUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ScimUser().create({
  account_id: 'example_account_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ScimUser().load({ id: 'scim_user_id', account_id: 'account_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ScimUser().remove({ id: 'scim_user_id', account_id: 'account_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ScimUser().update({
  id: 'scim_user_id',
  account_id: 'account_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScimUserEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SsoConnectorEntity

```ts
const sso_connector = client.SsoConnector()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.SsoConnector().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SsoConnectorEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TenantEntity

```ts
const tenant = client.Tenant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `account` | `/tenants/{tenant_id}/accounts` | `client.Tenant().list({ $action: 'account', ... })` |
| `account_type` | `/tenants/{tenant_id}/account_types` | `client.Tenant().list({ $action: 'account_type', ... })` |
| `entitlement` | `/tenants/{tenant_id}/entitlements` | `client.Tenant().list({ $action: 'entitlement', ... })` |
| `membership` | `/tenants/{tenant_id}/memberships` | `client.Tenant().list({ $action: 'membership', ... })` |

An action returns that action's OWN response, which is not necessarily a
Tenant record — check the API definition for its shape.

```ts
const result = await client.Tenant().list({
  $action: 'account',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Tenant().list({ id: "example_id" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Tenant().load({ id: 'tenant_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TenantEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TokenEntity

```ts
const token = client.Token()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Token().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserEntity

```ts
const user = client.User()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `tenant` | `/user/tenants` | `client.User().list({ $action: 'tenant', ... })` |

An action returns that action's OWN response, which is not necessarily a
User record — check the API definition for its shape.

```ts
const result = await client.User().list({
  $action: 'tenant',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.User().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserGroupEntity

```ts
const user_group = client.UserGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.UserGroup().remove({ account_id: 'account_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UsersAccountMembershipEntity

```ts
const users_account_membership = client.UsersAccountMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.UsersAccountMembership().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UsersAccountMembershipEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UsersOrganizationEntity

```ts
const users_organization = client.UsersOrganization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.UsersOrganization().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UsersOrganizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareIdentitySDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new CloudflareIdentitySDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

