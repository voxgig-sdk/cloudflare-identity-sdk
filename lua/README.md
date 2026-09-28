# CloudflareIdentity Lua SDK



The Lua SDK for the CloudflareIdentity API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:AaaAuditLogsV2OrgHistoryResponseCollection()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-identity-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("cloudflare-identity_sdk")

local client = sdk.new({
  apikey = os.getenv("CLOUDFLARE_IDENTITY_APIKEY"),
})
```

### 2. List aaaauditlogsv2orghistoryresponsecollection records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local aaaauditlogsv2orghistoryresponsecollections, err = client:AaaAuditLogsV2OrgHistoryResponseCollection():list()
if err then error(err) end

for _, item in ipairs(aaaauditlogsv2orghistoryresponsecollections) do
  print(item)
end
```

### 3. Load an accountresourcegroup

AccountResourceGroup is nested under account, so provide the `account_id`.

```lua
local accountresourcegroup, err = client:AccountResourceGroup():load({ account_id = "example_account_id", id = "example_id" })
if err then error(err) end
print(accountresourcegroup)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local accountusergroupmembers, err = client:AccountUserGroupMember():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:AccountUserGroupMember():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
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
cd lua && busted test/
```


## Reference

### CloudflareIdentitySDK

```lua
local sdk = require("cloudflare-identity_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareIdentitySDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `AaaAuditLogsV2OrgHistoryResponseCollection` | `(data) -> AaaAuditLogsV2OrgHistoryResponseCollectionEntity` | Create an AaaAuditLogsV2OrgHistoryResponseCollection entity instance. |
| `AaaAuditLogsV2OrgResponseCollection` | `(data) -> AaaAuditLogsV2OrgResponseCollectionEntity` | Create an AaaAuditLogsV2OrgResponseCollection entity instance. |
| `Account` | `(data) -> AccountEntity` | Create an Account entity instance. |
| `AccountResourceGroup` | `(data) -> AccountResourceGroupEntity` | Create an AccountResourceGroup entity instance. |
| `AccountUserGroup` | `(data) -> AccountUserGroupEntity` | Create an AccountUserGroup entity instance. |
| `AccountUserGroupMember` | `(data) -> AccountUserGroupMemberEntity` | Create an AccountUserGroupMember entity instance. |
| `BeginVerification` | `(data) -> BeginVerificationEntity` | Create a BeginVerification entity instance. |
| `BillSubsApiClientSecretResponseSingle` | `(data) -> BillSubsApiClientSecretResponseSingleEntity` | Create a BillSubsApiClientSecretResponseSingle entity instance. |
| `BillableUsageApiV2Usage` | `(data) -> BillableUsageApiV2UsageEntity` | Create a BillableUsageApiV2Usage entity instance. |
| `DnsCustomNameserversEmptyResponse3` | `(data) -> DnsCustomNameserversEmptyResponse3Entity` | Create a DnsCustomNameserversEmptyResponse3 entity instance. |
| `DnsCustomNameserversTcnsResponseCollection` | `(data) -> DnsCustomNameserversTcnsResponseCollectionEntity` | Create a DnsCustomNameserversTcnsResponseCollection entity instance. |
| `DnsCustomNameserversTcnsResponseSingle` | `(data) -> DnsCustomNameserversTcnsResponseSingleEntity` | Create a DnsCustomNameserversTcnsResponseSingle entity instance. |
| `IamApiResponseSingleId` | `(data) -> IamApiResponseSingleIdEntity` | Create an IamApiResponseSingleId entity instance. |
| `IamCollectionMemberResponseWithPolicy` | `(data) -> IamCollectionMemberResponseWithPolicyEntity` | Create an IamCollectionMemberResponseWithPolicy entity instance. |
| `IamCollectionOauthClient` | `(data) -> IamCollectionOauthClientEntity` | Create an IamCollectionOauthClient entity instance. |
| `IamCollectionOauthScope` | `(data) -> IamCollectionOauthScopeEntity` | Create an IamCollectionOauthScope entity instance. |
| `IamCollectionOrganization` | `(data) -> IamCollectionOrganizationEntity` | Create an IamCollectionOrganization entity instance. |
| `IamCollectionPermissionGroup` | `(data) -> IamCollectionPermissionGroupEntity` | Create an IamCollectionPermissionGroup entity instance. |
| `IamCollectionRole` | `(data) -> IamCollectionRoleEntity` | Create an IamCollectionRole entity instance. |
| `IamCollectionToken` | `(data) -> IamCollectionTokenEntity` | Create an IamCollectionToken entity instance. |
| `IamOauthClientRotateSecret` | `(data) -> IamOauthClientRotateSecretEntity` | Create an IamOauthClientRotateSecret entity instance. |
| `IamPermissionsGroupResponseCollection` | `(data) -> IamPermissionsGroupResponseCollectionEntity` | Create an IamPermissionsGroupResponseCollection entity instance. |
| `IamResponseSingleValue` | `(data) -> IamResponseSingleValueEntity` | Create an IamResponseSingleValue entity instance. |
| `IamSchemasCollectionInvite` | `(data) -> IamSchemasCollectionInviteEntity` | Create an IamSchemasCollectionInvite entity instance. |
| `IamSingleInvite` | `(data) -> IamSingleInviteEntity` | Create an IamSingleInvite entity instance. |
| `IamSingleMemberResponseWithPolicy` | `(data) -> IamSingleMemberResponseWithPolicyEntity` | Create an IamSingleMemberResponseWithPolicy entity instance. |
| `IamSingleMembershipResponseWithPolicy` | `(data) -> IamSingleMembershipResponseWithPolicyEntity` | Create an IamSingleMembershipResponseWithPolicy entity instance. |
| `IamSingleOauthClient` | `(data) -> IamSingleOauthClientEntity` | Create an IamSingleOauthClient entity instance. |
| `IamSingleOauthClientCreate` | `(data) -> IamSingleOauthClientCreateEntity` | Create an IamSingleOauthClientCreate entity instance. |
| `IamSingleOrganization` | `(data) -> IamSingleOrganizationEntity` | Create an IamSingleOrganization entity instance. |
| `IamSinglePermissionGroup` | `(data) -> IamSinglePermissionGroupEntity` | Create an IamSinglePermissionGroup entity instance. |
| `IamSingleRole` | `(data) -> IamSingleRoleEntity` | Create an IamSingleRole entity instance. |
| `IamSingleToken` | `(data) -> IamSingleTokenEntity` | Create an IamSingleToken entity instance. |
| `IamSingleTokenCreate` | `(data) -> IamSingleTokenCreateEntity` | Create an IamSingleTokenCreate entity instance. |
| `IamSsoConnector` | `(data) -> IamSsoConnectorEntity` | Create an IamSsoConnector entity instance. |
| `IamSsoConnectorCollection` | `(data) -> IamSsoConnectorCollectionEntity` | Create an IamSsoConnectorCollection entity instance. |
| `IamTokenVerifyResponseSingleSegment` | `(data) -> IamTokenVerifyResponseSingleSegmentEntity` | Create an IamTokenVerifyResponseSingleSegment entity instance. |
| `Member` | `(data) -> MemberEntity` | Create a Member entity instance. |
| `OauthClient` | `(data) -> OauthClientEntity` | Create an OauthClient entity instance. |
| `Organization` | `(data) -> OrganizationEntity` | Create an Organization entity instance. |
| `OrganizationMember` | `(data) -> OrganizationMemberEntity` | Create an OrganizationMember entity instance. |
| `OrganizationsApiProfile` | `(data) -> OrganizationsApiProfileEntity` | Create an OrganizationsApiProfile entity instance. |
| `Resource` | `(data) -> ResourceEntity` | Create a Resource entity instance. |
| `ResourceGroup` | `(data) -> ResourceGroupEntity` | Create a ResourceGroup entity instance. |
| `ResourceSharing` | `(data) -> ResourceSharingEntity` | Create a ResourceSharing entity instance. |
| `ResourceSharingShareExcludedRecipientResponseCollection` | `(data) -> ResourceSharingShareExcludedRecipientResponseCollectionEntity` | Create a ResourceSharingShareExcludedRecipientResponseCollection entity instance. |
| `ResourceSharingShareExcludedRecipientResponseSingle` | `(data) -> ResourceSharingShareExcludedRecipientResponseSingleEntity` | Create a ResourceSharingShareExcludedRecipientResponseSingle entity instance. |
| `ResourceSharingShareRecipientResponseCollection` | `(data) -> ResourceSharingShareRecipientResponseCollectionEntity` | Create a ResourceSharingShareRecipientResponseCollection entity instance. |
| `ResourceSharingShareRecipientResponseSingle` | `(data) -> ResourceSharingShareRecipientResponseSingleEntity` | Create a ResourceSharingShareRecipientResponseSingle entity instance. |
| `ResourceSharingShareResponseCollection` | `(data) -> ResourceSharingShareResponseCollectionEntity` | Create a ResourceSharingShareResponseCollection entity instance. |
| `ResourceSharingShareResponseSingle` | `(data) -> ResourceSharingShareResponseSingleEntity` | Create a ResourceSharingShareResponseSingle entity instance. |
| `ScimDiscovery` | `(data) -> ScimDiscoveryEntity` | Create a ScimDiscovery entity instance. |
| `ScimGroup` | `(data) -> ScimGroupEntity` | Create a ScimGroup entity instance. |
| `ScimUser` | `(data) -> ScimUserEntity` | Create a ScimUser entity instance. |
| `SsoConnector` | `(data) -> SsoConnectorEntity` | Create a SsoConnector entity instance. |
| `Tenant` | `(data) -> TenantEntity` | Create a Tenant entity instance. |
| `Token` | `(data) -> TokenEntity` | Create a Token entity instance. |
| `User` | `(data) -> UserEntity` | Create an User entity instance. |
| `UserGroup` | `(data) -> UserGroupEntity` | Create an UserGroup entity instance. |
| `UsersAccountMembership` | `(data) -> UsersAccountMembershipEntity` | Create an UsersAccountMembership entity instance. |
| `UsersOrganization` | `(data) -> UsersOrganizationEntity` | Create an UsersOrganization entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local account_resource_group, err = client:AccountResourceGroup():load({ id = "example_id" })
    if err then error(err) end
    -- account_resource_group is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### AaaAuditLogsV2OrgHistoryResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `result` |  |
| `result_info` | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | Indicates whether the API call was successful |

Operations: List.

API path: `/organizations/{organization_id}/logs/audit/{id}/history`

#### AaaAuditLogsV2OrgResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `result` |  |
| `result_info` | Provides information about the result of the request, including count and cursor. |
| `success` | Indicates whether the API call was successful |

Operations: List.

API path: `/organizations/{organization_id}/logs/audit`

#### Account

| Field | Description |
| --- | --- |
| `id` |  |

Operations: List.

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

Operations: Create, List, Load, Update.

API path: `/accounts/{account_id}/iam/resource_groups`

#### AccountUserGroup

| Field | Description |
| --- | --- |
| `id` |  |
| `name` | Name of the User group. |
| `policies` | Policies attached to the User group |
| `result` | A group of policies resources. |

Operations: Create, List, Load, Update.

API path: `/accounts/{account_id}/iam/user_groups`

#### AccountUserGroupMember

| Field | Description |
| --- | --- |
| `id` |  |
| `result` | Detailed member information for a User Group member. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/iam/user_groups/{user_group_id}/members`

#### BeginVerification

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `success` | Whether the API call was successful. |

Operations: Create.

API path: `/accounts/{account_id}/sso_connectors/{sso_connector_id}/begin_verification`

#### BillSubsApiClientSecretResponseSingle

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Create.

API path: `/accounts/{account_id}/client-secret`

#### BillableUsageApiV2Usage

| Field | Description |
| --- | --- |
| `errors` | Contains error details if the request failed. |
| `messages` | Contains informational notices about the response. |
| `result` | Contains the array of cost and usage records. |
| `success` | Indicates whether the API call was successful. |

Operations: List.

API path: `/organizations/{organization_id}/billable/usage`

#### DnsCustomNameserversEmptyResponse3

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/tenants/{tenant_tag}/custom_ns/{custom_ns_id}`

#### DnsCustomNameserversTcnsResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/tenants/{tenant_tag}/custom_ns`

#### DnsCustomNameserversTcnsResponseSingle

| Field | Description |
| --- | --- |
| `ns_name` | The FQDN of the name server. |
| `ns_set` | The number of the set that this name server belongs to. |

Operations: Create.

API path: `/tenants/{tenant_tag}/custom_ns`

#### IamApiResponseSingleId

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/oauth_clients/{oauth_client_id}/rotate_secret`

#### IamCollectionMemberResponseWithPolicy

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/members`

#### IamCollectionOauthClient

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/oauth_clients`

#### IamCollectionOauthScope

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/oauth/scopes`

#### IamCollectionOrganization

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/user/organizations`

#### IamCollectionPermissionGroup

| Field | Description |
| --- | --- |
| `result` | A set of permission groups that are specified to the policy. |

Operations: List.

API path: `/accounts/{account_id}/iam/permission_groups`

#### IamCollectionRole

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/roles`

#### IamCollectionToken

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/tokens`

#### IamOauthClientRotateSecret

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Create.

API path: `/accounts/{account_id}/oauth_clients/{oauth_client_id}/rotate_secret`

#### IamPermissionsGroupResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/tokens/permission_groups`

#### IamResponseSingleValue

| Field | Description |
| --- | --- |
| `result` | The token value. |

Operations: Update.

API path: `/accounts/{account_id}/tokens/{token_id}/value`

#### IamSchemasCollectionInvite

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/user/invites`

#### IamSingleInvite

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |
| `status` | Status of your response to the invitation (rejected or accepted). |

Operations: Load, Update.

API path: `/user/invites/{invite_id}`

#### IamSingleMemberResponseWithPolicy

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/members`

#### IamSingleMembershipResponseWithPolicy

| Field | Description |
| --- | --- |
| `result` |  |
| `status` | Whether to accept or reject this account invitation. |

Operations: Load, Update.

API path: `/memberships`

#### IamSingleOauthClient

| Field | Description |
| --- | --- |
| `id` |  |
| `result` | An OAuth 2.0 client registration. |

Operations: Load, Update.

API path: `/accounts/{account_id}/oauth_clients/{oauth_client_id}`

#### IamSingleOauthClientCreate

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/accounts/{account_id}/oauth_clients`

#### IamSingleOrganization

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |

Operations: Load.

API path: `/user/organizations/{organization_id}`

#### IamSinglePermissionGroup

| Field | Description |
| --- | --- |
| `id` |  |
| `result` | A named group of permissions that map to a group of operations against resources. |

Operations: Load.

API path: `/accounts/{account_id}/iam/permission_groups/{permission_group_id}`

#### IamSingleRole

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |

Operations: Load.

API path: `/accounts/{account_id}/roles/{role_id}`

#### IamSingleToken

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |

Operations: Load, Update.

API path: `/accounts/{account_id}/tokens/{token_id}`

#### IamSingleTokenCreate

| Field | Description |
| --- | --- |
| `condition` |  |
| `expires_on` | The expiration time on or after which the JWT MUST NOT be accepted for processing. |
| `name` | Token name. |
| `not_before` | The time before which the token MUST NOT be accepted for processing. |
| `policies` | List of access policies assigned to the token. |

Operations: Create.

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

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/sso_connectors`

#### IamSsoConnectorCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/sso_connectors`

#### IamTokenVerifyResponseSingleSegment

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load.

API path: `/accounts/{account_id}/tokens/verify`

#### Member

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/members/{member_id}`

#### OauthClient

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

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

Operations: Create, List, Load, Remove, Update.

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

Operations: Create, List, Load, Remove.

API path: `/organizations/{organization_id}/members`

#### OrganizationsApiProfile

| Field | Description |
| --- | --- |
| `code` |  |
| `message` |  |

Operations: List.

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

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/shares/{share_id}/resources`

#### ResourceGroup

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/iam/resource_groups/{resource_group_id}`

#### ResourceSharing

| Field | Description |
| --- | --- |

Operations: Update.

API path: `/accounts/{account_id}/shares/{share_id}/excluded-recipients`

#### ResourceSharingShareExcludedRecipientResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/shares/{share_id}/excluded-recipients`

#### ResourceSharingShareExcludedRecipientResponseSingle

| Field | Description |
| --- | --- |
| `account_id` | The account to exclude from the organization-targeted share. |
| `errors` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: Create, Load, Remove.

API path: `/accounts/{account_id}/shares/{share_id}/excluded-recipients`

#### ResourceSharingShareRecipientResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

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

Operations: Create, Load, Remove.

API path: `/accounts/{account_id}/shares/{share_id}/recipients`

#### ResourceSharingShareResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

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

Operations: Create, Load, Remove, Update.

API path: `/accounts/{account_id}/shares`

#### ScimDiscovery

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/accounts/{account_id}/scim/v2/ResourceTypes/{resource_type_id}`

#### ScimGroup

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/scim/v2/Groups`

#### ScimUser

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/scim/v2/Users`

#### SsoConnector

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/sso_connectors/{sso_connector_id}`

#### Tenant

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` |  |
| `success` |  |

Operations: List, Load.

API path: `/tenants/{tenant_id}/accounts`

#### Token

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/tokens/{token_id}`

#### User

| Field | Description |
| --- | --- |

Operations: List.

API path: `/user/tenants`

#### UserGroup

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/accounts/{account_id}/iam/user_groups/{user_group_id}`

#### UsersAccountMembership

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/memberships/{membership_id}`

#### UsersOrganization

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/user/organizations/{organization_id}`



## Entities


### AaaAuditLogsV2OrgHistoryResponseCollection

Create an instance: `local aaa_audit_logs_v2_org_history_response_collection = client:AaaAuditLogsV2OrgHistoryResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `boolean` | Indicates whether the API call was successful |

#### Example: List

```lua
local aaa_audit_logs_v2_org_history_response_collections, err = client:AaaAuditLogsV2OrgHistoryResponseCollection():list()
```


### AaaAuditLogsV2OrgResponseCollection

Create an instance: `local aaa_audit_logs_v2_org_response_collection = client:AaaAuditLogsV2OrgResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` | Provides information about the result of the request, including count and cursor. |
| `success` | `boolean` | Indicates whether the API call was successful |

#### Example: List

```lua
local aaa_audit_logs_v2_org_response_collections, err = client:AaaAuditLogsV2OrgResponseCollection():list()
```


### Account

Create an instance: `local account = client:Account(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```lua
local accounts, err = client:Account():list()
```


### AccountResourceGroup

Create an instance: `local account_resource_group = client:AccountResourceGroup(nil)`

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
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `name` | `string` | Name of the resource group |
| `result` | `table` | A group of scoped resources. |
| `scope` | `table` | A scope is a combination of scope objects which provides additional context. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local account_resource_group, err = client:AccountResourceGroup():load({ id = "account_resource_group_id", account_id = "account_id" })
```

#### Example: List

```lua
local account_resource_groups, err = client:AccountResourceGroup():list()
```

#### Example: Create

```lua
local account_resource_group, err = client:AccountResourceGroup():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  name = "example_name", -- string
  result = {}, -- table
  scope = {}, -- table
  success = true, -- boolean
})
```


### AccountUserGroup

Create an instance: `local account_user_group = client:AccountUserGroup(nil)`

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
| `policies` | `table` | Policies attached to the User group |
| `result` | `table` | A group of policies resources. |

#### Example: Load

```lua
local account_user_group, err = client:AccountUserGroup():load({ id = "account_user_group_id", account_id = "account_id" })
```

#### Example: List

```lua
local account_user_groups, err = client:AccountUserGroup():list()
```

#### Example: Create

```lua
local account_user_group, err = client:AccountUserGroup():create({
  account_id = "example_account_id", -- string
  name = "example_name", -- string
  result = {}, -- table
})
```


### AccountUserGroupMember

Create an instance: `local account_user_group_member = client:AccountUserGroupMember(nil)`

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
| `result` | `table` | Detailed member information for a User Group member. |

#### Example: Load

```lua
local account_user_group_member, err = client:AccountUserGroupMember():load({ id = "account_user_group_member_id", account_id = "account_id", user_group_id = "user_group_id" })
```

#### Example: List

```lua
local account_user_group_members, err = client:AccountUserGroupMember():list()
```

#### Example: Create

```lua
local account_user_group_member, err = client:AccountUserGroupMember():create({
  account_id = "example_account_id", -- string
  user_group_id = "example_user_group_id", -- string
  result = {}, -- table
})
```


### BeginVerification

Create an instance: `local begin_verification = client:BeginVerification(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Create

```lua
local begin_verification, err = client:BeginVerification():create({
  account_id = "example_account_id", -- string
  sso_connector_id = "example_sso_connector_id", -- string
  errors = {}, -- table
  messages = {}, -- table
  success = true, -- boolean
})
```


### BillSubsApiClientSecretResponseSingle

Create an instance: `local bill_subs_api_client_secret_response_single = client:BillSubsApiClientSecretResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Create

```lua
local bill_subs_api_client_secret_response_single, err = client:BillSubsApiClientSecretResponseSingle():create({
  account_id = "example_account_id", -- string
})
```


### BillableUsageApiV2Usage

Create an instance: `local billable_usage_api_v2_usage = client:BillableUsageApiV2Usage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` | Contains error details if the request failed. |
| `messages` | `table` | Contains informational notices about the response. |
| `result` | `table` | Contains the array of cost and usage records. |
| `success` | `boolean` | Indicates whether the API call was successful. |

#### Example: List

```lua
local billable_usage_api_v2_usages, err = client:BillableUsageApiV2Usage():list()
```


### DnsCustomNameserversEmptyResponse3

Create an instance: `local dns_custom_nameservers_empty_response_3 = client:DnsCustomNameserversEmptyResponse3(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DnsCustomNameserversTcnsResponseCollection

Create an instance: `local dns_custom_nameservers_tcns_response_collection = client:DnsCustomNameserversTcnsResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local dns_custom_nameservers_tcns_response_collections, err = client:DnsCustomNameserversTcnsResponseCollection():list()
```


### DnsCustomNameserversTcnsResponseSingle

Create an instance: `local dns_custom_nameservers_tcns_response_single = client:DnsCustomNameserversTcnsResponseSingle(nil)`

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

```lua
local dns_custom_nameservers_tcns_response_single, err = client:DnsCustomNameserversTcnsResponseSingle():create({
  tenant_tag = "example_tenant_tag", -- string
  ns_name = "example_ns_name", -- string
})
```


### IamApiResponseSingleId

Create an instance: `local iam_api_response_single_id = client:IamApiResponseSingleId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### IamCollectionMemberResponseWithPolicy

Create an instance: `local iam_collection_member_response_with_policy = client:IamCollectionMemberResponseWithPolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local iam_collection_member_response_with_policys, err = client:IamCollectionMemberResponseWithPolicy():list()
```


### IamCollectionOauthClient

Create an instance: `local iam_collection_oauth_client = client:IamCollectionOauthClient(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local iam_collection_oauth_clients, err = client:IamCollectionOauthClient():list()
```


### IamCollectionOauthScope

Create an instance: `local iam_collection_oauth_scope = client:IamCollectionOauthScope(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local iam_collection_oauth_scopes, err = client:IamCollectionOauthScope():list()
```


### IamCollectionOrganization

Create an instance: `local iam_collection_organization = client:IamCollectionOrganization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local iam_collection_organizations, err = client:IamCollectionOrganization():list()
```


### IamCollectionPermissionGroup

Create an instance: `local iam_collection_permission_group = client:IamCollectionPermissionGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` | A set of permission groups that are specified to the policy. |

#### Example: List

```lua
local iam_collection_permission_groups, err = client:IamCollectionPermissionGroup():list()
```


### IamCollectionRole

Create an instance: `local iam_collection_role = client:IamCollectionRole(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local iam_collection_roles, err = client:IamCollectionRole():list()
```


### IamCollectionToken

Create an instance: `local iam_collection_token = client:IamCollectionToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local iam_collection_tokens, err = client:IamCollectionToken():list()
```


### IamOauthClientRotateSecret

Create an instance: `local iam_oauth_client_rotate_secret = client:IamOauthClientRotateSecret(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Create

```lua
local iam_oauth_client_rotate_secret, err = client:IamOauthClientRotateSecret():create({
  account_id = "example_account_id", -- string
  oauth_client_id = "example_oauth_client_id", -- string
})
```


### IamPermissionsGroupResponseCollection

Create an instance: `local iam_permissions_group_response_collection = client:IamPermissionsGroupResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local iam_permissions_group_response_collections, err = client:IamPermissionsGroupResponseCollection():list()
```


### IamResponseSingleValue

Create an instance: `local iam_response_single_value = client:IamResponseSingleValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `string` | The token value. |


### IamSchemasCollectionInvite

Create an instance: `local iam_schemas_collection_invite = client:IamSchemasCollectionInvite(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local iam_schemas_collection_invites, err = client:IamSchemasCollectionInvite():list()
```


### IamSingleInvite

Create an instance: `local iam_single_invite = client:IamSingleInvite(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `table` |  |
| `status` | `any` | Status of your response to the invitation (rejected or accepted). |

#### Example: Load

```lua
local iam_single_invite, err = client:IamSingleInvite():load({ id = "iam_single_invite_id" })
```


### IamSingleMemberResponseWithPolicy

Create an instance: `local iam_single_member_response_with_policy = client:IamSingleMemberResponseWithPolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local iam_single_member_response_with_policy, err = client:IamSingleMemberResponseWithPolicy():load({ account_id = "account_id", member_id = "member_id" })
```

#### Example: Create

```lua
local iam_single_member_response_with_policy, err = client:IamSingleMemberResponseWithPolicy():create({
  account_id = "example_account_id", -- string
})
```


### IamSingleMembershipResponseWithPolicy

Create an instance: `local iam_single_membership_response_with_policy = client:IamSingleMembershipResponseWithPolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |
| `status` | `any` | Whether to accept or reject this account invitation. |

#### Example: Load

```lua
local iam_single_membership_response_with_policy, err = client:IamSingleMembershipResponseWithPolicy():load({ membership_id = "membership_id" })
```


### IamSingleOauthClient

Create an instance: `local iam_single_oauth_client = client:IamSingleOauthClient(nil)`

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

```lua
local iam_single_oauth_client, err = client:IamSingleOauthClient():load({ id = "iam_single_oauth_client_id", account_id = "account_id" })
```


### IamSingleOauthClientCreate

Create an instance: `local iam_single_oauth_client_create = client:IamSingleOauthClientCreate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local iam_single_oauth_client_create, err = client:IamSingleOauthClientCreate():create({
  account_id = "example_account_id", -- string
})
```


### IamSingleOrganization

Create an instance: `local iam_single_organization = client:IamSingleOrganization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `table` |  |

#### Example: Load

```lua
local iam_single_organization, err = client:IamSingleOrganization():load({ id = "iam_single_organization_id" })
```


### IamSinglePermissionGroup

Create an instance: `local iam_single_permission_group = client:IamSinglePermissionGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `table` | A named group of permissions that map to a group of operations against resources. |

#### Example: Load

```lua
local iam_single_permission_group, err = client:IamSinglePermissionGroup():load({ id = "iam_single_permission_group_id", account_id = "account_id" })
```


### IamSingleRole

Create an instance: `local iam_single_role = client:IamSingleRole(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `table` |  |

#### Example: Load

```lua
local iam_single_role, err = client:IamSingleRole():load({ id = "iam_single_role_id", account_id = "account_id" })
```


### IamSingleToken

Create an instance: `local iam_single_token = client:IamSingleToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `table` |  |

#### Example: Load

```lua
local iam_single_token, err = client:IamSingleToken():load({ id = "iam_single_token_id" })
```


### IamSingleTokenCreate

Create an instance: `local iam_single_token_create = client:IamSingleTokenCreate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condition` | `table` |  |
| `expires_on` | `string` | The expiration time on or after which the JWT MUST NOT be accepted for processing. |
| `name` | `string` | Token name. |
| `not_before` | `string` | The time before which the token MUST NOT be accepted for processing. |
| `policies` | `table` | List of access policies assigned to the token. |

#### Example: Create

```lua
local iam_single_token_create, err = client:IamSingleTokenCreate():create({
  name = "example_name", -- string
  policies = {}, -- table
})
```


### IamSsoConnector

Create an instance: `local iam_sso_connector = client:IamSsoConnector(nil)`

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
| `result` | `table` |  |
| `use_fedramp_language` | `boolean` | Controls the display of FedRAMP language to the user during SSO login |

#### Example: Load

```lua
local iam_sso_connector, err = client:IamSsoConnector():load({ id = "iam_sso_connector_id", account_id = "account_id" })
```

#### Example: Create

```lua
local iam_sso_connector, err = client:IamSsoConnector():create({
  account_id = "example_account_id", -- string
  email_domain = "example_email_domain", -- string
})
```


### IamSsoConnectorCollection

Create an instance: `local iam_sso_connector_collection = client:IamSsoConnectorCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local iam_sso_connector_collections, err = client:IamSsoConnectorCollection():list()
```


### IamTokenVerifyResponseSingleSegment

Create an instance: `local iam_token_verify_response_single_segment = client:IamTokenVerifyResponseSingleSegment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any` |  |

#### Example: Load

```lua
local iam_token_verify_response_single_segment, err = client:IamTokenVerifyResponseSingleSegment():load()
```


### Member

Create an instance: `local member = client:Member(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### OauthClient

Create an instance: `local oauth_client = client:OauthClient(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Organization

Create an instance: `local organization = client:Organization(nil)`

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
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `meta` | `table` |  |
| `name` | `string` |  |
| `parent` | `table` |  |
| `profile` | `table` |  |
| `result` | `table` | References an Organization in the Cloudflare data model. |
| `result_info` | `table` |  |
| `status` | `string` |  |
| `success` | `boolean` |  |

#### Example: Load

```lua
local organization, err = client:Organization():load({ id = "organization_id" })
```

#### Example: List

```lua
local organizations, err = client:Organization():list()
```

#### Example: Create

```lua
local organization, err = client:Organization():create({
  create_time = "example_create_time", -- string
  errors = {}, -- table
  id = "example_id", -- string
  messages = {}, -- table
  meta = {}, -- table
  name = "example_name", -- string
  parent = {}, -- table
  profile = {}, -- table
  result = {}, -- table
  result_info = {}, -- table
  status = "example_status", -- string
  success = true, -- boolean
})
```


### OrganizationMember

Create an instance: `local organization_member = client:OrganizationMember(nil)`

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
| `errors` | `table` |  |
| `id` | `string` |  |
| `member` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` |  |

#### Example: Load

```lua
local organization_member, err = client:OrganizationMember():load({ id = "organization_member_id", organization_id = "organization_id" })
```

#### Example: List

```lua
local organization_members, err = client:OrganizationMember():list()
```

#### Example: Create

```lua
local organization_member, err = client:OrganizationMember():create({
  id = "example_id", -- string
  errors = {}, -- table
  member = {}, -- table
  messages = {}, -- table
  result = {}, -- table
  result_info = {}, -- table
  success = true, -- boolean
})
```


### OrganizationsApiProfile

Create an instance: `local organizations_api_profile = client:OrganizationsApiProfile(nil)`

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

```lua
local organizations_api_profiles, err = client:OrganizationsApiProfile():list()
```


### Resource

Create an instance: `local resource = client:Resource(nil)`

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
| `errors` | `table` |  |
| `id` | `string` |  |
| `meta` | `table` | Resource Metadata. |
| `resource_account_id` | `string` | Account identifier. |
| `resource_id` | `string` | Share Resource identifier. |
| `resource_type` | `string` | Resource Type. |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local resource, err = client:Resource():load({ id = "resource_id", account_id = "account_id", share_id = "share_id" })
```

#### Example: List

```lua
local resources, err = client:Resource():list()
```

#### Example: Create

```lua
local resource, err = client:Resource():create({
  account_id = "example_account_id", -- string
  share_id = "example_share_id", -- string
  errors = {}, -- table
  meta = {}, -- table
  resource_account_id = "example_resource_account_id", -- string
  resource_id = "example_resource_id", -- string
  resource_type = "example_resource_type", -- string
  success = true, -- boolean
})
```


### ResourceGroup

Create an instance: `local resource_group = client:ResourceGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### ResourceSharing

Create an instance: `local resource_sharing = client:ResourceSharing(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ResourceSharingShareExcludedRecipientResponseCollection

Create an instance: `local resource_sharing_share_excluded_recipient_response_collection = client:ResourceSharingShareExcludedRecipientResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local resource_sharing_share_excluded_recipient_response_collections, err = client:ResourceSharingShareExcludedRecipientResponseCollection():list()
```


### ResourceSharingShareExcludedRecipientResponseSingle

Create an instance: `local resource_sharing_share_excluded_recipient_response_single = client:ResourceSharingShareExcludedRecipientResponseSingle(nil)`

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
| `errors` | `table` |  |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local resource_sharing_share_excluded_recipient_response_single, err = client:ResourceSharingShareExcludedRecipientResponseSingle():load({ account_id = "account_id", excluded_recipient_id = "excluded_recipient_id", share_id = "share_id" })
```

#### Example: Create

```lua
local resource_sharing_share_excluded_recipient_response_single, err = client:ResourceSharingShareExcludedRecipientResponseSingle():create({
  account_id = "example_account_id", -- string
  share_id = "example_share_id", -- string
  errors = {}, -- table
  success = true, -- boolean
})
```


### ResourceSharingShareRecipientResponseCollection

Create an instance: `local resource_sharing_share_recipient_response_collection = client:ResourceSharingShareRecipientResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local resource_sharing_share_recipient_response_collections, err = client:ResourceSharingShareRecipientResponseCollection():list()
```


### ResourceSharingShareRecipientResponseSingle

Create an instance: `local resource_sharing_share_recipient_response_single = client:ResourceSharingShareRecipientResponseSingle(nil)`

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
| `errors` | `table` |  |
| `organization_id` | `string` | Organization identifier. |
| `recipient_account_id` | `string` | The account that will receive the share. |
| `result` | `any` | A recipient of a share. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local resource_sharing_share_recipient_response_single, err = client:ResourceSharingShareRecipientResponseSingle():load({ account_id = "account_id", recipient_id = "recipient_id", share_id = "share_id" })
```

#### Example: Create

```lua
local resource_sharing_share_recipient_response_single, err = client:ResourceSharingShareRecipientResponseSingle():create({
  account_id = "example_account_id", -- string
  share_id = "example_share_id", -- string
  errors = {}, -- table
  success = true, -- boolean
})
```


### ResourceSharingShareResponseCollection

Create an instance: `local resource_sharing_share_response_collection = client:ResourceSharingShareResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local resource_sharing_share_response_collections, err = client:ResourceSharingShareResponseCollection():list()
```


### ResourceSharingShareResponseSingle

Create an instance: `local resource_sharing_share_response_single = client:ResourceSharingShareResponseSingle(nil)`

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
| `errors` | `table` |  |
| `name` | `string` | The name of the share. |
| `recipients` | `table` |  |
| `resources` | `table` |  |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local resource_sharing_share_response_single, err = client:ResourceSharingShareResponseSingle():load({ account_id = "account_id", share_id = "share_id" })
```

#### Example: Create

```lua
local resource_sharing_share_response_single, err = client:ResourceSharingShareResponseSingle():create({
  account_id = "example_account_id", -- string
  errors = {}, -- table
  name = "example_name", -- string
  recipients = {}, -- table
  resources = {}, -- table
  success = true, -- boolean
})
```


### ScimDiscovery

Create an instance: `local scim_discovery = client:ScimDiscovery(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local scim_discovery, err = client:ScimDiscovery():load({ account_id = "account_id" })
```


### ScimGroup

Create an instance: `local scim_group = client:ScimGroup(nil)`

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

```lua
local scim_group, err = client:ScimGroup():load({ id = "scim_group_id", account_id = "account_id" })
```

#### Example: Create

```lua
local scim_group, err = client:ScimGroup():create({
  account_id = "example_account_id", -- string
})
```


### ScimUser

Create an instance: `local scim_user = client:ScimUser(nil)`

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

```lua
local scim_user, err = client:ScimUser():load({ id = "scim_user_id", account_id = "account_id" })
```

#### Example: Create

```lua
local scim_user, err = client:ScimUser():create({
  account_id = "example_account_id", -- string
})
```


### SsoConnector

Create an instance: `local sso_connector = client:SsoConnector(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Tenant

Create an instance: `local tenant = client:Tenant(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` |  |

#### Example: Load

```lua
local tenant, err = client:Tenant():load({ id = "tenant_id" })
```

#### Example: List

```lua
local tenants, err = client:Tenant():list()
```


### Token

Create an instance: `local token = client:Token(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### User

Create an instance: `local user = client:User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```lua
local users, err = client:User():list()
```


### UserGroup

Create an instance: `local user_group = client:UserGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### UsersAccountMembership

Create an instance: `local users_account_membership = client:UsersAccountMembership(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### UsersOrganization

Create an instance: `local users_organization = client:UsersOrganization(nil)`

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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── cloudflare-identity_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`cloudflare-identity_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local accountusergroupmember = client:AccountUserGroupMember()
accountusergroupmember:list()

-- accountusergroupmember:data_get() now returns the accountusergroupmember data from the last list
-- accountusergroupmember:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
