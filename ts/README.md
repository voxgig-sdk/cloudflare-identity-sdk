# CloudflareIdentity TypeScript SDK



The TypeScript SDK for the CloudflareIdentity API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.AaaAuditLogsV2OrgHistoryResponseCollection()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-identity-sdk/releases](https://github.com/voxgig-sdk/cloudflare-identity-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { CloudflareIdentitySDK } from '@voxgig-sdk/cloudflare-identity-sdk'

const client = new CloudflareIdentitySDK({
  apikey: process.env.CLOUDFLARE_IDENTITY_APIKEY,
})
```

### 2. List aaaauditlogsv2orghistoryresponsecollection records

`list()` resolves to an array of AaaAuditLogsV2OrgHistoryResponseCollection ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const aaaauditlogsv2orghistoryresponsecollections = await client.AaaAuditLogsV2OrgHistoryResponseCollection().list({ audit_id: "example", organization_id: "example", action_time: "example", before: "example", since: "example" })

for (const aaaauditlogsv2orghistoryresponsecollection of aaaauditlogsv2orghistoryresponsecollections) {
  console.log(aaaauditlogsv2orghistoryresponsecollection)
}
```

### 3. Load an accountresourcegroup

AccountResourceGroup is nested under account, so provide the `account_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const accountresourcegroup = await client.AccountResourceGroup().load({
    account_id: 'example_account_id',
    id: 'example_id',
  })
  console.log(accountresourcegroup)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const accountusergroupmembers = await client.AccountUserGroupMember().list()
  console.log(accountusergroupmembers)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = CloudflareIdentitySDK.test()

const accountusergroupmember = await client.AccountUserGroupMember().list()
// accountusergroupmember is the entity, populated with mock response data
// — call accountusergroupmember.data() for the record itself
console.log(accountusergroupmember)
```

You can also use the instance method:

```ts
const client = new CloudflareIdentitySDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.AccountUserGroupMember()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new CloudflareIdentitySDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE
CLOUDFLARE_IDENTITY_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### CloudflareIdentitySDK

#### Constructor

```ts
new CloudflareIdentitySDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `AaaAuditLogsV2OrgHistoryResponseCollection(data?)` | `AaaAuditLogsV2OrgHistoryResponseCollectionEntity` | Create an AaaAuditLogsV2OrgHistoryResponseCollection entity instance. |
| `AaaAuditLogsV2OrgResponseCollection(data?)` | `AaaAuditLogsV2OrgResponseCollectionEntity` | Create an AaaAuditLogsV2OrgResponseCollection entity instance. |
| `Account(data?)` | `AccountEntity` | Create an Account entity instance. |
| `AccountResourceGroup(data?)` | `AccountResourceGroupEntity` | Create an AccountResourceGroup entity instance. |
| `AccountUserGroup(data?)` | `AccountUserGroupEntity` | Create an AccountUserGroup entity instance. |
| `AccountUserGroupMember(data?)` | `AccountUserGroupMemberEntity` | Create an AccountUserGroupMember entity instance. |
| `BeginVerification(data?)` | `BeginVerificationEntity` | Create a BeginVerification entity instance. |
| `BillSubsApiClientSecretResponseSingle(data?)` | `BillSubsApiClientSecretResponseSingleEntity` | Create a BillSubsApiClientSecretResponseSingle entity instance. |
| `BillableUsageApiV2Usage(data?)` | `BillableUsageApiV2UsageEntity` | Create a BillableUsageApiV2Usage entity instance. |
| `DnsCustomNameserversEmptyResponse3(data?)` | `DnsCustomNameserversEmptyResponse3Entity` | Create a DnsCustomNameserversEmptyResponse3 entity instance. |
| `DnsCustomNameserversTcnsResponseCollection(data?)` | `DnsCustomNameserversTcnsResponseCollectionEntity` | Create a DnsCustomNameserversTcnsResponseCollection entity instance. |
| `DnsCustomNameserversTcnsResponseSingle(data?)` | `DnsCustomNameserversTcnsResponseSingleEntity` | Create a DnsCustomNameserversTcnsResponseSingle entity instance. |
| `IamApiResponseSingleId(data?)` | `IamApiResponseSingleIdEntity` | Create an IamApiResponseSingleId entity instance. |
| `IamCollectionMemberResponseWithPolicy(data?)` | `IamCollectionMemberResponseWithPolicyEntity` | Create an IamCollectionMemberResponseWithPolicy entity instance. |
| `IamCollectionOauthClient(data?)` | `IamCollectionOauthClientEntity` | Create an IamCollectionOauthClient entity instance. |
| `IamCollectionOauthScope(data?)` | `IamCollectionOauthScopeEntity` | Create an IamCollectionOauthScope entity instance. |
| `IamCollectionOrganization(data?)` | `IamCollectionOrganizationEntity` | Create an IamCollectionOrganization entity instance. |
| `IamCollectionPermissionGroup(data?)` | `IamCollectionPermissionGroupEntity` | Create an IamCollectionPermissionGroup entity instance. |
| `IamCollectionRole(data?)` | `IamCollectionRoleEntity` | Create an IamCollectionRole entity instance. |
| `IamCollectionToken(data?)` | `IamCollectionTokenEntity` | Create an IamCollectionToken entity instance. |
| `IamOauthClientRotateSecret(data?)` | `IamOauthClientRotateSecretEntity` | Create an IamOauthClientRotateSecret entity instance. |
| `IamPermissionsGroupResponseCollection(data?)` | `IamPermissionsGroupResponseCollectionEntity` | Create an IamPermissionsGroupResponseCollection entity instance. |
| `IamResponseSingleValue(data?)` | `IamResponseSingleValueEntity` | Create an IamResponseSingleValue entity instance. |
| `IamSchemasCollectionInvite(data?)` | `IamSchemasCollectionInviteEntity` | Create an IamSchemasCollectionInvite entity instance. |
| `IamSingleInvite(data?)` | `IamSingleInviteEntity` | Create an IamSingleInvite entity instance. |
| `IamSingleMemberResponseWithPolicy(data?)` | `IamSingleMemberResponseWithPolicyEntity` | Create an IamSingleMemberResponseWithPolicy entity instance. |
| `IamSingleMembershipResponseWithPolicy(data?)` | `IamSingleMembershipResponseWithPolicyEntity` | Create an IamSingleMembershipResponseWithPolicy entity instance. |
| `IamSingleOauthClient(data?)` | `IamSingleOauthClientEntity` | Create an IamSingleOauthClient entity instance. |
| `IamSingleOauthClientCreate(data?)` | `IamSingleOauthClientCreateEntity` | Create an IamSingleOauthClientCreate entity instance. |
| `IamSingleOrganization(data?)` | `IamSingleOrganizationEntity` | Create an IamSingleOrganization entity instance. |
| `IamSinglePermissionGroup(data?)` | `IamSinglePermissionGroupEntity` | Create an IamSinglePermissionGroup entity instance. |
| `IamSingleRole(data?)` | `IamSingleRoleEntity` | Create an IamSingleRole entity instance. |
| `IamSingleToken(data?)` | `IamSingleTokenEntity` | Create an IamSingleToken entity instance. |
| `IamSingleTokenCreate(data?)` | `IamSingleTokenCreateEntity` | Create an IamSingleTokenCreate entity instance. |
| `IamSsoConnector(data?)` | `IamSsoConnectorEntity` | Create an IamSsoConnector entity instance. |
| `IamSsoConnectorCollection(data?)` | `IamSsoConnectorCollectionEntity` | Create an IamSsoConnectorCollection entity instance. |
| `IamTokenVerifyResponseSingleSegment(data?)` | `IamTokenVerifyResponseSingleSegmentEntity` | Create an IamTokenVerifyResponseSingleSegment entity instance. |
| `Member(data?)` | `MemberEntity` | Create a Member entity instance. |
| `OauthClient(data?)` | `OauthClientEntity` | Create an OauthClient entity instance. |
| `Organization(data?)` | `OrganizationEntity` | Create an Organization entity instance. |
| `OrganizationMember(data?)` | `OrganizationMemberEntity` | Create an OrganizationMember entity instance. |
| `OrganizationsApiProfile(data?)` | `OrganizationsApiProfileEntity` | Create an OrganizationsApiProfile entity instance. |
| `Resource(data?)` | `ResourceEntity` | Create a Resource entity instance. |
| `ResourceGroup(data?)` | `ResourceGroupEntity` | Create a ResourceGroup entity instance. |
| `ResourceSharing(data?)` | `ResourceSharingEntity` | Create a ResourceSharing entity instance. |
| `ResourceSharingShareExcludedRecipientResponseCollection(data?)` | `ResourceSharingShareExcludedRecipientResponseCollectionEntity` | Create a ResourceSharingShareExcludedRecipientResponseCollection entity instance. |
| `ResourceSharingShareExcludedRecipientResponseSingle(data?)` | `ResourceSharingShareExcludedRecipientResponseSingleEntity` | Create a ResourceSharingShareExcludedRecipientResponseSingle entity instance. |
| `ResourceSharingShareRecipientResponseCollection(data?)` | `ResourceSharingShareRecipientResponseCollectionEntity` | Create a ResourceSharingShareRecipientResponseCollection entity instance. |
| `ResourceSharingShareRecipientResponseSingle(data?)` | `ResourceSharingShareRecipientResponseSingleEntity` | Create a ResourceSharingShareRecipientResponseSingle entity instance. |
| `ResourceSharingShareResponseCollection(data?)` | `ResourceSharingShareResponseCollectionEntity` | Create a ResourceSharingShareResponseCollection entity instance. |
| `ResourceSharingShareResponseSingle(data?)` | `ResourceSharingShareResponseSingleEntity` | Create a ResourceSharingShareResponseSingle entity instance. |
| `ScimDiscovery(data?)` | `ScimDiscoveryEntity` | Create a ScimDiscovery entity instance. |
| `ScimGroup(data?)` | `ScimGroupEntity` | Create a ScimGroup entity instance. |
| `ScimUser(data?)` | `ScimUserEntity` | Create a ScimUser entity instance. |
| `SsoConnector(data?)` | `SsoConnectorEntity` | Create a SsoConnector entity instance. |
| `Tenant(data?)` | `TenantEntity` | Create a Tenant entity instance. |
| `Token(data?)` | `TokenEntity` | Create a Token entity instance. |
| `User(data?)` | `UserEntity` | Create an User entity instance. |
| `UserGroup(data?)` | `UserGroupEntity` | Create an UserGroup entity instance. |
| `UsersAccountMembership(data?)` | `UsersAccountMembershipEntity` | Create an UsersAccountMembership entity instance. |
| `UsersOrganization(data?)` | `UsersOrganizationEntity` | Create an UsersOrganization entity instance. |
| `tester(testopts?, sdkopts?)` | `CloudflareIdentitySDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `CloudflareIdentitySDK.test(testopts?, sdkopts?)` | `CloudflareIdentitySDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): CloudflareIdentitySDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### AaaAuditLogsV2OrgHistoryResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `result` |  |
| `result_info` | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | Indicates whether the API call was successful |

Operations: list.

API path: `/organizations/{organization_id}/logs/audit/{id}/history`

#### AaaAuditLogsV2OrgResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `result` |  |
| `result_info` | Provides information about the result of the request, including count and cursor. |
| `success` | Indicates whether the API call was successful |

Operations: list.

API path: `/organizations/{organization_id}/logs/audit`

#### Account

| Field | Description |
| --- | --- |
| `id` |  |

Operations: list.

API path: `/accounts/{account_id}/organizations`

#### AccountResourceGroup

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `name` | Name of the resource group |
| `result` | A group of scoped resources. |
| `scope` | A scope is a combination of scope objects which provides additional context. |
| `success` | Whether the API call was successful. |

Operations: create, list, load, update.

API path: `/accounts/{account_id}/iam/resource_groups`

#### AccountUserGroup

| Field | Description |
| --- | --- |
| `id` |  |
| `name` | Name of the User group. |
| `policies` | Policies attached to the User group |
| `result` | A group of policies resources. |

Operations: create, list, load, update.

API path: `/accounts/{account_id}/iam/user_groups`

#### AccountUserGroupMember

| Field | Description |
| --- | --- |
| `id` |  |
| `result` | Detailed member information for a User Group member. |

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/iam/user_groups/{user_group_id}/members`

#### BeginVerification

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `success` | Whether the API call was successful. |

Operations: create.

API path: `/accounts/{account_id}/sso_connectors/{sso_connector_id}/begin_verification`

#### BillSubsApiClientSecretResponseSingle

| Field | Description |
| --- | --- |
| `result` |  |

Operations: create.

API path: `/accounts/{account_id}/client-secret`

#### BillableUsageApiV2Usage

| Field | Description |
| --- | --- |
| `errors` | Contains error details if the request failed. |
| `messages` | Contains informational notices about the response. |
| `result` | Contains the array of cost and usage records. |
| `success` | Indicates whether the API call was successful. |

Operations: list.

API path: `/organizations/{organization_id}/billable/usage`

#### DnsCustomNameserversEmptyResponse3

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/tenants/{tenant_tag}/custom_ns/{custom_ns_id}`

#### DnsCustomNameserversTcnsResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/tenants/{tenant_tag}/custom_ns`

#### DnsCustomNameserversTcnsResponseSingle

| Field | Description |
| --- | --- |
| `ns_name` | The FQDN of the name server. |
| `ns_set` | The number of the set that this name server belongs to. |

Operations: create.

API path: `/tenants/{tenant_tag}/custom_ns`

#### IamApiResponseSingleId

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/accounts/{account_id}/oauth_clients/{oauth_client_id}/rotate_secret`

#### IamCollectionMemberResponseWithPolicy

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/members`

#### IamCollectionOauthClient

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/oauth_clients`

#### IamCollectionOauthScope

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/oauth/scopes`

#### IamCollectionOrganization

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/user/organizations`

#### IamCollectionPermissionGroup

| Field | Description |
| --- | --- |
| `result` | A set of permission groups that are specified to the policy. |

Operations: list.

API path: `/accounts/{account_id}/iam/permission_groups`

#### IamCollectionRole

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/roles`

#### IamCollectionToken

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/tokens`

#### IamOauthClientRotateSecret

| Field | Description |
| --- | --- |
| `result` |  |

Operations: create.

API path: `/accounts/{account_id}/oauth_clients/{oauth_client_id}/rotate_secret`

#### IamPermissionsGroupResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/tokens/permission_groups`

#### IamResponseSingleValue

| Field | Description |
| --- | --- |
| `result` | The token value. |

Operations: update.

API path: `/accounts/{account_id}/tokens/{token_id}/value`

#### IamSchemasCollectionInvite

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/user/invites`

#### IamSingleInvite

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |
| `status` | Status of your response to the invitation (rejected or accepted). |

Operations: load, update.

API path: `/user/invites/{invite_id}`

#### IamSingleMemberResponseWithPolicy

| Field | Description |
| --- | --- |
| `result` |  |

Operations: create, load, update.

API path: `/accounts/{account_id}/members`

#### IamSingleMembershipResponseWithPolicy

| Field | Description |
| --- | --- |
| `result` |  |
| `status` | Whether to accept or reject this account invitation. |

Operations: load, update.

API path: `/memberships`

#### IamSingleOauthClient

| Field | Description |
| --- | --- |
| `id` |  |
| `result` | An OAuth 2.0 client registration. |

Operations: load, update.

API path: `/accounts/{account_id}/oauth_clients/{oauth_client_id}`

#### IamSingleOauthClientCreate

| Field | Description |
| --- | --- |

Operations: create.

API path: `/accounts/{account_id}/oauth_clients`

#### IamSingleOrganization

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |

Operations: load.

API path: `/user/organizations/{organization_id}`

#### IamSinglePermissionGroup

| Field | Description |
| --- | --- |
| `id` |  |
| `result` | A named group of permissions that map to a group of operations against resources. |

Operations: load.

API path: `/accounts/{account_id}/iam/permission_groups/{permission_group_id}`

#### IamSingleRole

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |

Operations: load.

API path: `/accounts/{account_id}/roles/{role_id}`

#### IamSingleToken

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |

Operations: load, update.

API path: `/accounts/{account_id}/tokens/{token_id}`

#### IamSingleTokenCreate

| Field | Description |
| --- | --- |
| `condition` |  |
| `expires_on` | The expiration time on or after which the JWT MUST NOT be accepted for processing. |
| `name` | Token name. |
| `not_before` | The time before which the token MUST NOT be accepted for processing. |
| `policies` | List of access policies assigned to the token. |

Operations: create.

API path: `/accounts/{account_id}/tokens`

#### IamSsoConnector

| Field | Description |
| --- | --- |
| `begin_verification` | Begin the verification process after creation |
| `email_domain` | Email domain of the new SSO connector |
| `enabled` | SSO Connector enabled state |
| `id` |  |
| `result` |  |
| `use_fedramp_language` | Controls the display of FedRAMP language to the user during SSO login |

Operations: create, load, update.

API path: `/accounts/{account_id}/sso_connectors`

#### IamSsoConnectorCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/sso_connectors`

#### IamTokenVerifyResponseSingleSegment

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load.

API path: `/accounts/{account_id}/tokens/verify`

#### Member

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/members/{member_id}`

#### OauthClient

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/oauth_clients/{oauth_client_id}`

#### Organization

| Field | Description |
| --- | --- |
| `create_time` |  |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `meta` |  |
| `name` |  |
| `parent` |  |
| `profile` |  |
| `result` | References an Organization in the Cloudflare data model. |
| `result_info` |  |
| `status` |  |
| `success` |  |

Operations: create, list, load, remove, update.

API path: `/organizations/{organization_id}/members:batchCreate`

#### OrganizationMember

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `member` |  |
| `messages` |  |
| `result` |  |
| `result_info` |  |
| `success` |  |

Operations: create, list, load, remove.

API path: `/organizations/{organization_id}/members`

#### OrganizationsApiProfile

| Field | Description |
| --- | --- |
| `code` |  |
| `message` |  |

Operations: list.

API path: `/organizations/{organization_id}/profile`

#### Resource

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `meta` | Resource Metadata. |
| `resource_account_id` | Account identifier. |
| `resource_id` | Share Resource identifier. |
| `resource_type` | Resource Type. |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: create, list, load, remove, update.

API path: `/accounts/{account_id}/shares/{share_id}/resources`

#### ResourceGroup

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/iam/resource_groups/{resource_group_id}`

#### ResourceSharing

| Field | Description |
| --- | --- |

Operations: update.

API path: `/accounts/{account_id}/shares/{share_id}/excluded-recipients`

#### ResourceSharingShareExcludedRecipientResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/shares/{share_id}/excluded-recipients`

#### ResourceSharingShareExcludedRecipientResponseSingle

| Field | Description |
| --- | --- |
| `account_id` | The account to exclude from the organization-targeted share. |
| `errors` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: create, load, remove.

API path: `/accounts/{account_id}/shares/{share_id}/excluded-recipients`

#### ResourceSharingShareRecipientResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/shares/{share_id}/recipients`

#### ResourceSharingShareRecipientResponseSingle

| Field | Description |
| --- | --- |
| `account_id` | Deprecated alias for `recipient_account_id`. |
| `errors` |  |
| `organization_id` | Organization identifier. |
| `recipient_account_id` | The account that will receive the share. |
| `result` | A recipient of a share. |
| `success` | Whether the API call was successful. |

Operations: create, load, remove.

API path: `/accounts/{account_id}/shares/{share_id}/recipients`

#### ResourceSharingShareResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/shares`

#### ResourceSharingShareResponseSingle

| Field | Description |
| --- | --- |
| `errors` |  |
| `name` | The name of the share. |
| `recipients` |  |
| `resources` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: create, load, remove, update.

API path: `/accounts/{account_id}/shares`

#### ScimDiscovery

| Field | Description |
| --- | --- |

Operations: load.

API path: `/accounts/{account_id}/scim/v2/ResourceTypes/{resource_type_id}`

#### ScimGroup

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, load, patch, remove, update.

API path: `/accounts/{account_id}/scim/v2/Groups`

#### ScimUser

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, load, patch, remove, update.

API path: `/accounts/{account_id}/scim/v2/Users`

#### SsoConnector

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/sso_connectors/{sso_connector_id}`

#### Tenant

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` |  |
| `success` |  |

Operations: list, load.

API path: `/tenants/{tenant_id}/accounts`

#### Token

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/tokens/{token_id}`

#### User

| Field | Description |
| --- | --- |

Operations: list.

API path: `/user/tenants`

#### UserGroup

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/accounts/{account_id}/iam/user_groups/{user_group_id}`

#### UsersAccountMembership

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/memberships/{membership_id}`

#### UsersOrganization

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/user/organizations/{organization_id}`



## Entities


### AaaAuditLogsV2OrgHistoryResponseCollection

Create an instance: `const aaa_audit_logs_v2_org_history_response_collection = client.AaaAuditLogsV2OrgHistoryResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `result` | `any[]` |  |
| `result_info` | `Record<string, any>` | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `boolean` | Indicates whether the API call was successful |

#### Example: List

```ts
const aaa_audit_logs_v2_org_history_response_collections = await client.AaaAuditLogsV2OrgHistoryResponseCollection().list({ audit_id: "example", organization_id: "example", action_time: "example", before: "example", since: "example" })
```


### AaaAuditLogsV2OrgResponseCollection

Create an instance: `const aaa_audit_logs_v2_org_response_collection = client.AaaAuditLogsV2OrgResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `result` | `any[]` |  |
| `result_info` | `Record<string, any>` | Provides information about the result of the request, including count and cursor. |
| `success` | `boolean` | Indicates whether the API call was successful |

#### Example: List

```ts
const aaa_audit_logs_v2_org_response_collections = await client.AaaAuditLogsV2OrgResponseCollection().list({ organization_id: "example", before: "example", since: "example" })
```


### Account

Create an instance: `const account = client.Account()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```ts
const accounts = await client.Account().list({ id: "example" })
```


### AccountResourceGroup

Create an instance: `const account_resource_group = client.AccountResourceGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `name` | `string` | Name of the resource group |
| `result` | `Record<string, any>` | A group of scoped resources. |
| `scope` | `Record<string, any>` | A scope is a combination of scope objects which provides additional context. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const account_resource_group = await client.AccountResourceGroup().load({ id: 'account_resource_group_id', account_id: 'account_id' })
```

#### Example: List

```ts
const account_resource_groups = await client.AccountResourceGroup().list({ account_id: "example" })
```

#### Example: Create

```ts
const account_resource_group = await client.AccountResourceGroup().create({
  account_id: 'example_account_id',
  errors: [],
  messages: [],
  name: 'example_name',
  result: {},
  scope: {},
  success: true,
})
```


### AccountUserGroup

Create an instance: `const account_user_group = client.AccountUserGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` | Name of the User group. |
| `policies` | `any[]` | Policies attached to the User group |
| `result` | `Record<string, any>` | A group of policies resources. |

#### Example: Load

```ts
const account_user_group = await client.AccountUserGroup().load({ id: 'account_user_group_id', account_id: 'account_id' })
```

#### Example: List

```ts
const account_user_groups = await client.AccountUserGroup().list({ account_id: "example" })
```

#### Example: Create

```ts
const account_user_group = await client.AccountUserGroup().create({
  account_id: 'example_account_id',
  name: 'example_name',
  result: {},
})
```


### AccountUserGroupMember

Create an instance: `const account_user_group_member = client.AccountUserGroupMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `Record<string, any>` | Detailed member information for a User Group member. |

#### Example: Load

```ts
const account_user_group_member = await client.AccountUserGroupMember().load({ id: 'account_user_group_member_id', account_id: 'account_id', user_group_id: 'user_group_id' })
```

#### Example: List

```ts
const account_user_group_members = await client.AccountUserGroupMember().list({ account_id: "example", user_group_id: "example" })
```

#### Example: Create

```ts
const account_user_group_member = await client.AccountUserGroupMember().create({
  account_id: 'example_account_id',
  user_group_id: 'example_user_group_id',
  result: {},
})
```


### BeginVerification

Create an instance: `const begin_verification = client.BeginVerification()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Create

```ts
const begin_verification = await client.BeginVerification().create({
  account_id: 'example_account_id',
  sso_connector_id: 'example_sso_connector_id',
  errors: [],
  messages: [],
  success: true,
})
```


### BillSubsApiClientSecretResponseSingle

Create an instance: `const bill_subs_api_client_secret_response_single = client.BillSubsApiClientSecretResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Create

```ts
const bill_subs_api_client_secret_response_single = await client.BillSubsApiClientSecretResponseSingle().create({
  account_id: 'example_account_id',
})
```


### BillableUsageApiV2Usage

Create an instance: `const billable_usage_api_v2_usage = client.BillableUsageApiV2Usage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` | Contains error details if the request failed. |
| `messages` | `any[]` | Contains informational notices about the response. |
| `result` | `any[]` | Contains the array of cost and usage records. |
| `success` | `boolean` | Indicates whether the API call was successful. |

#### Example: List

```ts
const billable_usage_api_v2_usages = await client.BillableUsageApiV2Usage().list({ organization_id: "example" })
```


### DnsCustomNameserversEmptyResponse3

Create an instance: `const dns_custom_nameservers_empty_response_3 = client.DnsCustomNameserversEmptyResponse3()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DnsCustomNameserversTcnsResponseCollection

Create an instance: `const dns_custom_nameservers_tcns_response_collection = client.DnsCustomNameserversTcnsResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const dns_custom_nameservers_tcns_response_collections = await client.DnsCustomNameserversTcnsResponseCollection().list({ tenant_tag: "example" })
```


### DnsCustomNameserversTcnsResponseSingle

Create an instance: `const dns_custom_nameservers_tcns_response_single = client.DnsCustomNameserversTcnsResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ns_name` | `string` | The FQDN of the name server. |
| `ns_set` | `number` | The number of the set that this name server belongs to. |

#### Example: Create

```ts
const dns_custom_nameservers_tcns_response_single = await client.DnsCustomNameserversTcnsResponseSingle().create({
  tenant_tag: 'example_tenant_tag',
  ns_name: 'example_ns_name',
})
```


### IamApiResponseSingleId

Create an instance: `const iam_api_response_single_id = client.IamApiResponseSingleId()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### IamCollectionMemberResponseWithPolicy

Create an instance: `const iam_collection_member_response_with_policy = client.IamCollectionMemberResponseWithPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const iam_collection_member_response_with_policys = await client.IamCollectionMemberResponseWithPolicy().list({ account_id: "example" })
```


### IamCollectionOauthClient

Create an instance: `const iam_collection_oauth_client = client.IamCollectionOauthClient()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const iam_collection_oauth_clients = await client.IamCollectionOauthClient().list({ account_id: "example" })
```


### IamCollectionOauthScope

Create an instance: `const iam_collection_oauth_scope = client.IamCollectionOauthScope()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const iam_collection_oauth_scopes = await client.IamCollectionOauthScope().list()
```


### IamCollectionOrganization

Create an instance: `const iam_collection_organization = client.IamCollectionOrganization()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const iam_collection_organizations = await client.IamCollectionOrganization().list()
```


### IamCollectionPermissionGroup

Create an instance: `const iam_collection_permission_group = client.IamCollectionPermissionGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` | A set of permission groups that are specified to the policy. |

#### Example: List

```ts
const iam_collection_permission_groups = await client.IamCollectionPermissionGroup().list({ account_id: "example" })
```


### IamCollectionRole

Create an instance: `const iam_collection_role = client.IamCollectionRole()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const iam_collection_roles = await client.IamCollectionRole().list({ account_id: "example" })
```


### IamCollectionToken

Create an instance: `const iam_collection_token = client.IamCollectionToken()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const iam_collection_tokens = await client.IamCollectionToken().list()
```


### IamOauthClientRotateSecret

Create an instance: `const iam_oauth_client_rotate_secret = client.IamOauthClientRotateSecret()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Create

```ts
const iam_oauth_client_rotate_secret = await client.IamOauthClientRotateSecret().create({
  account_id: 'example_account_id',
  oauth_client_id: 'example_oauth_client_id',
})
```


### IamPermissionsGroupResponseCollection

Create an instance: `const iam_permissions_group_response_collection = client.IamPermissionsGroupResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const iam_permissions_group_response_collections = await client.IamPermissionsGroupResponseCollection().list()
```


### IamResponseSingleValue

Create an instance: `const iam_response_single_value = client.IamResponseSingleValue()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `string` | The token value. |


### IamSchemasCollectionInvite

Create an instance: `const iam_schemas_collection_invite = client.IamSchemasCollectionInvite()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const iam_schemas_collection_invites = await client.IamSchemasCollectionInvite().list()
```


### IamSingleInvite

Create an instance: `const iam_single_invite = client.IamSingleInvite()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `Record<string, any>` |  |
| `status` | `any` | Status of your response to the invitation (rejected or accepted). |

#### Example: Load

```ts
const iam_single_invite = await client.IamSingleInvite().load({ id: 'iam_single_invite_id' })
```


### IamSingleMemberResponseWithPolicy

Create an instance: `const iam_single_member_response_with_policy = client.IamSingleMemberResponseWithPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const iam_single_member_response_with_policy = await client.IamSingleMemberResponseWithPolicy().load({ account_id: 'account_id', member_id: 'member_id' })
```

#### Example: Create

```ts
const iam_single_member_response_with_policy = await client.IamSingleMemberResponseWithPolicy().create({
  account_id: 'example_account_id',
})
```


### IamSingleMembershipResponseWithPolicy

Create an instance: `const iam_single_membership_response_with_policy = client.IamSingleMembershipResponseWithPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |
| `status` | `any` | Whether to accept or reject this account invitation. |

#### Example: Load

```ts
const iam_single_membership_response_with_policy = await client.IamSingleMembershipResponseWithPolicy().load({ membership_id: 'membership_id' })
```


### IamSingleOauthClient

Create an instance: `const iam_single_oauth_client = client.IamSingleOauthClient()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `any` | An OAuth 2.0 client registration. |

#### Example: Load

```ts
const iam_single_oauth_client = await client.IamSingleOauthClient().load({ id: 'iam_single_oauth_client_id', account_id: 'account_id' })
```


### IamSingleOauthClientCreate

Create an instance: `const iam_single_oauth_client_create = client.IamSingleOauthClientCreate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const iam_single_oauth_client_create = await client.IamSingleOauthClientCreate().create({
  account_id: 'example_account_id',
})
```


### IamSingleOrganization

Create an instance: `const iam_single_organization = client.IamSingleOrganization()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const iam_single_organization = await client.IamSingleOrganization().load({ id: 'iam_single_organization_id' })
```


### IamSinglePermissionGroup

Create an instance: `const iam_single_permission_group = client.IamSinglePermissionGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `Record<string, any>` | A named group of permissions that map to a group of operations against resources. |

#### Example: Load

```ts
const iam_single_permission_group = await client.IamSinglePermissionGroup().load({ id: 'iam_single_permission_group_id', account_id: 'account_id' })
```


### IamSingleRole

Create an instance: `const iam_single_role = client.IamSingleRole()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const iam_single_role = await client.IamSingleRole().load({ id: 'iam_single_role_id', account_id: 'account_id' })
```


### IamSingleToken

Create an instance: `const iam_single_token = client.IamSingleToken()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const iam_single_token = await client.IamSingleToken().load({ id: 'iam_single_token_id' })
```


### IamSingleTokenCreate

Create an instance: `const iam_single_token_create = client.IamSingleTokenCreate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condition` | `Record<string, any>` |  |
| `expires_on` | `string` | The expiration time on or after which the JWT MUST NOT be accepted for processing. |
| `name` | `string` | Token name. |
| `not_before` | `string` | The time before which the token MUST NOT be accepted for processing. |
| `policies` | `any[]` | List of access policies assigned to the token. |

#### Example: Create

```ts
const iam_single_token_create = await client.IamSingleTokenCreate().create({
  name: 'example_name',
  policies: [],
})
```


### IamSsoConnector

Create an instance: `const iam_sso_connector = client.IamSsoConnector()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `begin_verification` | `boolean` | Begin the verification process after creation |
| `email_domain` | `string` | Email domain of the new SSO connector |
| `enabled` | `boolean` | SSO Connector enabled state |
| `id` | `string` |  |
| `result` | `Record<string, any>` |  |
| `use_fedramp_language` | `boolean` | Controls the display of FedRAMP language to the user during SSO login |

#### Example: Load

```ts
const iam_sso_connector = await client.IamSsoConnector().load({ id: 'iam_sso_connector_id', account_id: 'account_id' })
```

#### Example: Create

```ts
const iam_sso_connector = await client.IamSsoConnector().create({
  account_id: 'example_account_id',
  email_domain: 'example_email_domain',
})
```


### IamSsoConnectorCollection

Create an instance: `const iam_sso_connector_collection = client.IamSsoConnectorCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const iam_sso_connector_collections = await client.IamSsoConnectorCollection().list({ account_id: "example" })
```


### IamTokenVerifyResponseSingleSegment

Create an instance: `const iam_token_verify_response_single_segment = client.IamTokenVerifyResponseSingleSegment()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any` |  |

#### Example: Load

```ts
const iam_token_verify_response_single_segment = await client.IamTokenVerifyResponseSingleSegment().load()
```


### Member

Create an instance: `const member = client.Member()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### OauthClient

Create an instance: `const oauth_client = client.OauthClient()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Organization

Create an instance: `const organization = client.Organization()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `create_time` | `string` |  |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `meta` | `Record<string, any>` |  |
| `name` | `string` |  |
| `parent` | `Record<string, any>` |  |
| `profile` | `Record<string, any>` |  |
| `result` | `Record<string, any>` | References an Organization in the Cloudflare data model. |
| `result_info` | `Record<string, any>` |  |
| `status` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const organization = await client.Organization().load({ id: 'organization_id' })
```

#### Example: List

```ts
const organizations = await client.Organization().list()
```

#### Example: Create

```ts
const organization = await client.Organization().create({
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


### OrganizationMember

Create an instance: `const organization_member = client.OrganizationMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `member` | `Record<string, any>` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const organization_member = await client.OrganizationMember().load({ id: 'organization_member_id', organization_id: 'organization_id' })
```

#### Example: List

```ts
const organization_members = await client.OrganizationMember().list({ id: "example_id" })
```

#### Example: Create

```ts
const organization_member = await client.OrganizationMember().create({
  id: 'example_id',
  errors: [],
  member: {},
  messages: [],
  result: {},
  result_info: {},
  success: true,
})
```


### OrganizationsApiProfile

Create an instance: `const organizations_api_profile = client.OrganizationsApiProfile()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `number` |  |
| `message` | `string` |  |

#### Example: List

```ts
const organizations_api_profiles = await client.OrganizationsApiProfile().list({ organization_id: "example" })
```


### Resource

Create an instance: `const resource = client.Resource()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `meta` | `Record<string, any>` | Resource Metadata. |
| `resource_account_id` | `string` | Account identifier. |
| `resource_id` | `string` | Share Resource identifier. |
| `resource_type` | `string` | Resource Type. |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const resource = await client.Resource().load({ id: 'resource_id', account_id: 'account_id', share_id: 'share_id' })
```

#### Example: List

```ts
const resources = await client.Resource().list({ account_id: "example", share_id: "example" })
```

#### Example: Create

```ts
const resource = await client.Resource().create({
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


### ResourceGroup

Create an instance: `const resource_group = client.ResourceGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### ResourceSharing

Create an instance: `const resource_sharing = client.ResourceSharing()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ResourceSharingShareExcludedRecipientResponseCollection

Create an instance: `const resource_sharing_share_excluded_recipient_response_collection = client.ResourceSharingShareExcludedRecipientResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const resource_sharing_share_excluded_recipient_response_collections = await client.ResourceSharingShareExcludedRecipientResponseCollection().list({ account_id: "example", share_id: "example" })
```


### ResourceSharingShareExcludedRecipientResponseSingle

Create an instance: `const resource_sharing_share_excluded_recipient_response_single = client.ResourceSharingShareExcludedRecipientResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` | The account to exclude from the organization-targeted share. |
| `errors` | `any[]` |  |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const resource_sharing_share_excluded_recipient_response_single = await client.ResourceSharingShareExcludedRecipientResponseSingle().load({ account_id: 'account_id', excluded_recipient_id: 'excluded_recipient_id', share_id: 'share_id' })
```

#### Example: Create

```ts
const resource_sharing_share_excluded_recipient_response_single = await client.ResourceSharingShareExcludedRecipientResponseSingle().create({
  account_id: 'example_account_id',
  share_id: 'example_share_id',
  errors: [],
  success: true,
})
```


### ResourceSharingShareRecipientResponseCollection

Create an instance: `const resource_sharing_share_recipient_response_collection = client.ResourceSharingShareRecipientResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const resource_sharing_share_recipient_response_collections = await client.ResourceSharingShareRecipientResponseCollection().list({ account_id: "example", share_id: "example" })
```


### ResourceSharingShareRecipientResponseSingle

Create an instance: `const resource_sharing_share_recipient_response_single = client.ResourceSharingShareRecipientResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` | Deprecated alias for `recipient_account_id`. |
| `errors` | `any[]` |  |
| `organization_id` | `string` | Organization identifier. |
| `recipient_account_id` | `string` | The account that will receive the share. |
| `result` | `any` | A recipient of a share. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const resource_sharing_share_recipient_response_single = await client.ResourceSharingShareRecipientResponseSingle().load({ account_id: 'account_id', recipient_id: 'recipient_id', share_id: 'share_id' })
```

#### Example: Create

```ts
const resource_sharing_share_recipient_response_single = await client.ResourceSharingShareRecipientResponseSingle().create({
  account_id: 'example_account_id',
  share_id: 'example_share_id',
  errors: [],
  success: true,
})
```


### ResourceSharingShareResponseCollection

Create an instance: `const resource_sharing_share_response_collection = client.ResourceSharingShareResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const resource_sharing_share_response_collections = await client.ResourceSharingShareResponseCollection().list({ account_id: "example" })
```


### ResourceSharingShareResponseSingle

Create an instance: `const resource_sharing_share_response_single = client.ResourceSharingShareResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `name` | `string` | The name of the share. |
| `recipients` | `any[]` |  |
| `resources` | `any[]` |  |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const resource_sharing_share_response_single = await client.ResourceSharingShareResponseSingle().load({ account_id: 'account_id', share_id: 'share_id' })
```

#### Example: Create

```ts
const resource_sharing_share_response_single = await client.ResourceSharingShareResponseSingle().create({
  account_id: 'example_account_id',
  errors: [],
  name: 'example_name',
  recipients: [],
  resources: [],
  success: true,
})
```


### ScimDiscovery

Create an instance: `const scim_discovery = client.ScimDiscovery()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const scim_discovery = await client.ScimDiscovery().load({ account_id: 'account_id' })
```


### ScimGroup

Create an instance: `const scim_group = client.ScimGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const scim_group = await client.ScimGroup().load({ id: 'scim_group_id', account_id: 'account_id' })
```

#### Example: Create

```ts
const scim_group = await client.ScimGroup().create({
  account_id: 'example_account_id',
})
```


### ScimUser

Create an instance: `const scim_user = client.ScimUser()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const scim_user = await client.ScimUser().load({ id: 'scim_user_id', account_id: 'account_id' })
```

#### Example: Create

```ts
const scim_user = await client.ScimUser().create({
  account_id: 'example_account_id',
})
```


### SsoConnector

Create an instance: `const sso_connector = client.SsoConnector()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Tenant

Create an instance: `const tenant = client.Tenant()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` |  |

#### Example: Load

```ts
const tenant = await client.Tenant().load({ id: 'tenant_id' })
```

#### Example: List

```ts
const tenants = await client.Tenant().list({ id: "example_id" })
```


### Token

Create an instance: `const token = client.Token()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### User

Create an instance: `const user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ts
const users = await client.User().list()
```


### UserGroup

Create an instance: `const user_group = client.UserGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### UsersAccountMembership

Create an instance: `const users_account_membership = client.UsersAccountMembership()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### UsersOrganization

Create an instance: `const users_organization = client.UsersOrganization()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Open types

4 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `resource` | `result` | 3 | 0 levels |
| `resource_sharing_share_excluded_recipient_response_single` | `result` | 3 | 0 levels |
| `resource_sharing_share_recipient_response_single` | `result` | 3 | 0 levels |
| `resource_sharing_share_response_single` | `result` | 3 | 0 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
cloudflare-identity/
├── src/
│   ├── CloudflareIdentitySDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { CloudflareIdentitySDK } from '@voxgig-sdk/cloudflare-identity-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const accountusergroupmember = client.AccountUserGroupMember()
await accountusergroupmember.list()

// accountusergroupmember.data() now returns the accountusergroupmember data from the last `list`
// accountusergroupmember.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
