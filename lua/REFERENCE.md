# CloudflareIdentity Lua SDK Reference

Complete API reference for the CloudflareIdentity Lua SDK.


## CloudflareIdentitySDK

### Constructor

```lua
local sdk = require("cloudflare-identity_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `AaaAuditLogsV2OrgHistoryResponseCollection(data)`

Create a new `AaaAuditLogsV2OrgHistoryResponseCollection` entity instance. Pass `nil` for no initial data.

#### `AaaAuditLogsV2OrgResponseCollection(data)`

Create a new `AaaAuditLogsV2OrgResponseCollection` entity instance. Pass `nil` for no initial data.

#### `Account(data)`

Create a new `Account` entity instance. Pass `nil` for no initial data.

#### `AccountResourceGroup(data)`

Create a new `AccountResourceGroup` entity instance. Pass `nil` for no initial data.

#### `AccountUserGroup(data)`

Create a new `AccountUserGroup` entity instance. Pass `nil` for no initial data.

#### `AccountUserGroupMember(data)`

Create a new `AccountUserGroupMember` entity instance. Pass `nil` for no initial data.

#### `BeginVerification(data)`

Create a new `BeginVerification` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiClientSecretResponseSingle(data)`

Create a new `BillSubsApiClientSecretResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillableUsageApiV2Usage(data)`

Create a new `BillableUsageApiV2Usage` entity instance. Pass `nil` for no initial data.

#### `DnsCustomNameserversEmptyResponse3(data)`

Create a new `DnsCustomNameserversEmptyResponse3` entity instance. Pass `nil` for no initial data.

#### `DnsCustomNameserversTcnsResponseCollection(data)`

Create a new `DnsCustomNameserversTcnsResponseCollection` entity instance. Pass `nil` for no initial data.

#### `DnsCustomNameserversTcnsResponseSingle(data)`

Create a new `DnsCustomNameserversTcnsResponseSingle` entity instance. Pass `nil` for no initial data.

#### `IamApiResponseSingleId(data)`

Create a new `IamApiResponseSingleId` entity instance. Pass `nil` for no initial data.

#### `IamCollectionMemberResponseWithPolicy(data)`

Create a new `IamCollectionMemberResponseWithPolicy` entity instance. Pass `nil` for no initial data.

#### `IamCollectionOauthClient(data)`

Create a new `IamCollectionOauthClient` entity instance. Pass `nil` for no initial data.

#### `IamCollectionOauthScope(data)`

Create a new `IamCollectionOauthScope` entity instance. Pass `nil` for no initial data.

#### `IamCollectionOrganization(data)`

Create a new `IamCollectionOrganization` entity instance. Pass `nil` for no initial data.

#### `IamCollectionPermissionGroup(data)`

Create a new `IamCollectionPermissionGroup` entity instance. Pass `nil` for no initial data.

#### `IamCollectionRole(data)`

Create a new `IamCollectionRole` entity instance. Pass `nil` for no initial data.

#### `IamCollectionToken(data)`

Create a new `IamCollectionToken` entity instance. Pass `nil` for no initial data.

#### `IamOauthClientRotateSecret(data)`

Create a new `IamOauthClientRotateSecret` entity instance. Pass `nil` for no initial data.

#### `IamPermissionsGroupResponseCollection(data)`

Create a new `IamPermissionsGroupResponseCollection` entity instance. Pass `nil` for no initial data.

#### `IamResponseSingleValue(data)`

Create a new `IamResponseSingleValue` entity instance. Pass `nil` for no initial data.

#### `IamSchemasCollectionInvite(data)`

Create a new `IamSchemasCollectionInvite` entity instance. Pass `nil` for no initial data.

#### `IamSingleInvite(data)`

Create a new `IamSingleInvite` entity instance. Pass `nil` for no initial data.

#### `IamSingleMemberResponseWithPolicy(data)`

Create a new `IamSingleMemberResponseWithPolicy` entity instance. Pass `nil` for no initial data.

#### `IamSingleMembershipResponseWithPolicy(data)`

Create a new `IamSingleMembershipResponseWithPolicy` entity instance. Pass `nil` for no initial data.

#### `IamSingleOauthClient(data)`

Create a new `IamSingleOauthClient` entity instance. Pass `nil` for no initial data.

#### `IamSingleOauthClientCreate(data)`

Create a new `IamSingleOauthClientCreate` entity instance. Pass `nil` for no initial data.

#### `IamSingleOrganization(data)`

Create a new `IamSingleOrganization` entity instance. Pass `nil` for no initial data.

#### `IamSinglePermissionGroup(data)`

Create a new `IamSinglePermissionGroup` entity instance. Pass `nil` for no initial data.

#### `IamSingleRole(data)`

Create a new `IamSingleRole` entity instance. Pass `nil` for no initial data.

#### `IamSingleToken(data)`

Create a new `IamSingleToken` entity instance. Pass `nil` for no initial data.

#### `IamSingleTokenCreate(data)`

Create a new `IamSingleTokenCreate` entity instance. Pass `nil` for no initial data.

#### `IamSsoConnector(data)`

Create a new `IamSsoConnector` entity instance. Pass `nil` for no initial data.

#### `IamSsoConnectorCollection(data)`

Create a new `IamSsoConnectorCollection` entity instance. Pass `nil` for no initial data.

#### `IamTokenVerifyResponseSingleSegment(data)`

Create a new `IamTokenVerifyResponseSingleSegment` entity instance. Pass `nil` for no initial data.

#### `Member(data)`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `OauthClient(data)`

Create a new `OauthClient` entity instance. Pass `nil` for no initial data.

#### `Organization(data)`

Create a new `Organization` entity instance. Pass `nil` for no initial data.

#### `OrganizationMember(data)`

Create a new `OrganizationMember` entity instance. Pass `nil` for no initial data.

#### `OrganizationsApiProfile(data)`

Create a new `OrganizationsApiProfile` entity instance. Pass `nil` for no initial data.

#### `Resource(data)`

Create a new `Resource` entity instance. Pass `nil` for no initial data.

#### `ResourceGroup(data)`

Create a new `ResourceGroup` entity instance. Pass `nil` for no initial data.

#### `ResourceSharing(data)`

Create a new `ResourceSharing` entity instance. Pass `nil` for no initial data.

#### `ResourceSharingShareExcludedRecipientResponseCollection(data)`

Create a new `ResourceSharingShareExcludedRecipientResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ResourceSharingShareExcludedRecipientResponseSingle(data)`

Create a new `ResourceSharingShareExcludedRecipientResponseSingle` entity instance. Pass `nil` for no initial data.

#### `ResourceSharingShareRecipientResponseCollection(data)`

Create a new `ResourceSharingShareRecipientResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ResourceSharingShareRecipientResponseSingle(data)`

Create a new `ResourceSharingShareRecipientResponseSingle` entity instance. Pass `nil` for no initial data.

#### `ResourceSharingShareResponseCollection(data)`

Create a new `ResourceSharingShareResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ResourceSharingShareResponseSingle(data)`

Create a new `ResourceSharingShareResponseSingle` entity instance. Pass `nil` for no initial data.

#### `ScimDiscovery(data)`

Create a new `ScimDiscovery` entity instance. Pass `nil` for no initial data.

#### `ScimGroup(data)`

Create a new `ScimGroup` entity instance. Pass `nil` for no initial data.

#### `ScimUser(data)`

Create a new `ScimUser` entity instance. Pass `nil` for no initial data.

#### `SsoConnector(data)`

Create a new `SsoConnector` entity instance. Pass `nil` for no initial data.

#### `Tenant(data)`

Create a new `Tenant` entity instance. Pass `nil` for no initial data.

#### `Token(data)`

Create a new `Token` entity instance. Pass `nil` for no initial data.

#### `User(data)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserGroup(data)`

Create a new `UserGroup` entity instance. Pass `nil` for no initial data.

#### `UsersAccountMembership(data)`

Create a new `UsersAccountMembership` entity instance. Pass `nil` for no initial data.

#### `UsersOrganization(data)`

Create a new `UsersOrganization` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AaaAuditLogsV2OrgHistoryResponseCollectionEntity

```lua
local aaa_audit_logs_v2_org_history_response_collection = client:AaaAuditLogsV2OrgHistoryResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `boolean` | Yes | Indicates whether the API call was successful |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AaaAuditLogsV2OrgHistoryResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AaaAuditLogsV2OrgHistoryResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AaaAuditLogsV2OrgResponseCollectionEntity

```lua
local aaa_audit_logs_v2_org_response_collection = client:AaaAuditLogsV2OrgResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | No |  |
| `result` | `table` | No |  |
| `result_info` | `table` | No | Provides information about the result of the request, including count and cursor. |
| `success` | `boolean` | No | Indicates whether the API call was successful |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AaaAuditLogsV2OrgResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AaaAuditLogsV2OrgResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AccountEntity

```lua
local account = client:Account(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Account():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AccountResourceGroupEntity

```lua
local account_resource_group = client:AccountResourceGroup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `name` | `string` | Yes | Name of the resource group |
| `result` | `table` | Yes | A group of scoped resources. |
| `scope` | `table` | Yes | A scope is a combination of scope objects which provides additional context. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AccountResourceGroup():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  name = --[[ string ]],
  result = --[[ table ]],
  scope = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AccountResourceGroup():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AccountResourceGroup():load({ id = "account_resource_group_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AccountResourceGroup():update({
  id = "account_resource_group_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountResourceGroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AccountUserGroupEntity

```lua
local account_user_group = client:AccountUserGroup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | Yes | Name of the User group. |
| `policies` | `table` | No | Policies attached to the User group |
| `result` | `table` | Yes | A group of policies resources. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `id` | - | - | - | - |
| `name` | - | - | - | Yes |
| `policies` | - | - | - | - |
| `result` | - | Yes | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AccountUserGroup():create({
  account_id = --[[ string ]],
  name = --[[ string ]],
  result = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AccountUserGroup():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AccountUserGroup():load({ id = "account_user_group_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AccountUserGroup():update({
  id = "account_user_group_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountUserGroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AccountUserGroupMemberEntity

```lua
local account_user_group_member = client:AccountUserGroupMember(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `table` | Yes | Detailed member information for a User Group member. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `id` | - | - | - | - | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AccountUserGroupMember():create({
  account_id = --[[ string ]],
  user_group_id = --[[ string ]],
  result = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AccountUserGroupMember():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AccountUserGroupMember():load({ id = "account_user_group_member_id", account_id = "account_id", user_group_id = "user_group_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AccountUserGroupMember():remove({ id = "account_user_group_member_id", account_id = "account_id", user_group_id = "user_group_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AccountUserGroupMember():update({
  id = "account_user_group_member_id",
  account_id = "account_id",
  user_group_id = "user_group_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountUserGroupMemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BeginVerificationEntity

```lua
local begin_verification = client:BeginVerification(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BeginVerification():create({
  account_id = --[[ string ]],
  sso_connector_id = --[[ string ]],
  errors = --[[ table ]],
  messages = --[[ table ]],
  success = --[[ boolean ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BeginVerificationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillSubsApiClientSecretResponseSingleEntity

```lua
local bill_subs_api_client_secret_response_single = client:BillSubsApiClientSecretResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BillSubsApiClientSecretResponseSingle():create({
  account_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiClientSecretResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BillableUsageApiV2UsageEntity

```lua
local billable_usage_api_v2_usage = client:BillableUsageApiV2Usage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes | Contains error details if the request failed. |
| `messages` | `table` | Yes | Contains informational notices about the response. |
| `result` | `table` | Yes | Contains the array of cost and usage records. |
| `success` | `boolean` | Yes | Indicates whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BillableUsageApiV2Usage():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillableUsageApiV2UsageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DnsCustomNameserversEmptyResponse3Entity

```lua
local dns_custom_nameservers_empty_response_3 = client:DnsCustomNameserversEmptyResponse3(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DnsCustomNameserversEmptyResponse3():remove({ custom_ns_id = "custom_ns_id", tenant_tag = "tenant_tag" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DnsCustomNameserversEmptyResponse3Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DnsCustomNameserversTcnsResponseCollectionEntity

```lua
local dns_custom_nameservers_tcns_response_collection = client:DnsCustomNameserversTcnsResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DnsCustomNameserversTcnsResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DnsCustomNameserversTcnsResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DnsCustomNameserversTcnsResponseSingleEntity

```lua
local dns_custom_nameservers_tcns_response_single = client:DnsCustomNameserversTcnsResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ns_name` | `string` | Yes | The FQDN of the name server. |
| `ns_set` | `number` | No | The number of the set that this name server belongs to. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DnsCustomNameserversTcnsResponseSingle():create({
  tenant_tag = --[[ string ]],
  ns_name = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DnsCustomNameserversTcnsResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamApiResponseSingleIdEntity

```lua
local iam_api_response_single_id = client:IamApiResponseSingleId(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:IamApiResponseSingleId():remove({ account_id = "account_id", oauth_client_id = "oauth_client_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamApiResponseSingleIdEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamCollectionMemberResponseWithPolicyEntity

```lua
local iam_collection_member_response_with_policy = client:IamCollectionMemberResponseWithPolicy(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IamCollectionMemberResponseWithPolicy():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamCollectionMemberResponseWithPolicyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamCollectionOauthClientEntity

```lua
local iam_collection_oauth_client = client:IamCollectionOauthClient(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IamCollectionOauthClient():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamCollectionOauthClientEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamCollectionOauthScopeEntity

```lua
local iam_collection_oauth_scope = client:IamCollectionOauthScope(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IamCollectionOauthScope():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamCollectionOauthScopeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamCollectionOrganizationEntity

```lua
local iam_collection_organization = client:IamCollectionOrganization(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IamCollectionOrganization():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamCollectionOrganizationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamCollectionPermissionGroupEntity

```lua
local iam_collection_permission_group = client:IamCollectionPermissionGroup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No | A set of permission groups that are specified to the policy. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IamCollectionPermissionGroup():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamCollectionPermissionGroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamCollectionRoleEntity

```lua
local iam_collection_role = client:IamCollectionRole(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IamCollectionRole():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamCollectionRoleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamCollectionTokenEntity

```lua
local iam_collection_token = client:IamCollectionToken(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IamCollectionToken():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamCollectionTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamOauthClientRotateSecretEntity

```lua
local iam_oauth_client_rotate_secret = client:IamOauthClientRotateSecret(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:IamOauthClientRotateSecret():create({
  account_id = --[[ string ]],
  oauth_client_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamOauthClientRotateSecretEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamPermissionsGroupResponseCollectionEntity

```lua
local iam_permissions_group_response_collection = client:IamPermissionsGroupResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IamPermissionsGroupResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamPermissionsGroupResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamResponseSingleValueEntity

```lua
local iam_response_single_value = client:IamResponseSingleValue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `string` | No | The token value. |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:IamResponseSingleValue():update({
  token_id = "token_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamResponseSingleValueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamSchemasCollectionInviteEntity

```lua
local iam_schemas_collection_invite = client:IamSchemasCollectionInvite(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IamSchemasCollectionInvite():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSchemasCollectionInviteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamSingleInviteEntity

```lua
local iam_single_invite = client:IamSingleInvite(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `table` | Yes |  |
| `status` | `any` | Yes | Status of your response to the invitation (rejected or accepted). |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IamSingleInvite():load({ id = "iam_single_invite_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:IamSingleInvite():update({
  id = "iam_single_invite_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSingleInviteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamSingleMemberResponseWithPolicyEntity

```lua
local iam_single_member_response_with_policy = client:IamSingleMemberResponseWithPolicy(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:IamSingleMemberResponseWithPolicy():create({
  account_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IamSingleMemberResponseWithPolicy():load({ account_id = "account_id", member_id = "member_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:IamSingleMemberResponseWithPolicy():update({
  account_id = "account_id",
  member_id = "member_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSingleMemberResponseWithPolicyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamSingleMembershipResponseWithPolicyEntity

```lua
local iam_single_membership_response_with_policy = client:IamSingleMembershipResponseWithPolicy(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |
| `status` | `any` | Yes | Whether to accept or reject this account invitation. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IamSingleMembershipResponseWithPolicy():load({ membership_id = "membership_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:IamSingleMembershipResponseWithPolicy():update({
  membership_id = "membership_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSingleMembershipResponseWithPolicyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamSingleOauthClientEntity

```lua
local iam_single_oauth_client = client:IamSingleOauthClient(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `any` | No | An OAuth 2.0 client registration. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IamSingleOauthClient():load({ id = "iam_single_oauth_client_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:IamSingleOauthClient():update({
  id = "iam_single_oauth_client_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSingleOauthClientEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamSingleOauthClientCreateEntity

```lua
local iam_single_oauth_client_create = client:IamSingleOauthClientCreate(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:IamSingleOauthClientCreate():create({
  account_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSingleOauthClientCreateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamSingleOrganizationEntity

```lua
local iam_single_organization = client:IamSingleOrganization(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IamSingleOrganization():load({ id = "iam_single_organization_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSingleOrganizationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamSinglePermissionGroupEntity

```lua
local iam_single_permission_group = client:IamSinglePermissionGroup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `table` | Yes | A named group of permissions that map to a group of operations against resources. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IamSinglePermissionGroup():load({ id = "iam_single_permission_group_id", account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSinglePermissionGroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamSingleRoleEntity

```lua
local iam_single_role = client:IamSingleRole(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IamSingleRole():load({ id = "iam_single_role_id", account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSingleRoleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamSingleTokenEntity

```lua
local iam_single_token = client:IamSingleToken(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IamSingleToken():load({ id = "iam_single_token_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:IamSingleToken():update({
  id = "iam_single_token_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSingleTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamSingleTokenCreateEntity

```lua
local iam_single_token_create = client:IamSingleTokenCreate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition` | `table` | No |  |
| `expires_on` | `string` | No | The expiration time on or after which the JWT MUST NOT be accepted for processing. |
| `name` | `string` | Yes | Token name. |
| `not_before` | `string` | No | The time before which the token MUST NOT be accepted for processing. |
| `policies` | `table` | Yes | List of access policies assigned to the token. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:IamSingleTokenCreate():create({
  name = --[[ string ]],
  policies = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSingleTokenCreateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamSsoConnectorEntity

```lua
local iam_sso_connector = client:IamSsoConnector(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `begin_verification` | `boolean` | No | Begin the verification process after creation |
| `email_domain` | `string` | Yes | Email domain of the new SSO connector |
| `enabled` | `boolean` | No | SSO Connector enabled state |
| `id` | `string` | No |  |
| `result` | `table` | No |  |
| `use_fedramp_language` | `boolean` | No | Controls the display of FedRAMP language to the user during SSO login |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:IamSsoConnector():create({
  account_id = --[[ string ]],
  email_domain = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IamSsoConnector():load({ id = "iam_sso_connector_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:IamSsoConnector():update({
  id = "iam_sso_connector_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSsoConnectorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamSsoConnectorCollectionEntity

```lua
local iam_sso_connector_collection = client:IamSsoConnectorCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IamSsoConnectorCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSsoConnectorCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IamTokenVerifyResponseSingleSegmentEntity

```lua
local iam_token_verify_response_single_segment = client:IamTokenVerifyResponseSingleSegment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IamTokenVerifyResponseSingleSegment():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamTokenVerifyResponseSingleSegmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MemberEntity

```lua
local member = client:Member(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Member():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OauthClientEntity

```lua
local oauth_client = client:OauthClient(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:OauthClient():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OauthClientEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationEntity

```lua
local organization = client:Organization(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_time` | `string` | Yes |  |
| `errors` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `messages` | `table` | Yes |  |
| `meta` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `parent` | `table` | Yes |  |
| `profile` | `table` | Yes |  |
| `result` | `table` | Yes | References an Organization in the Cloudflare data model. |
| `result_info` | `table` | Yes |  |
| `status` | `string` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Organization():create({
  create_time = --[[ string ]],
  errors = --[[ table ]],
  id = --[[ string ]],
  messages = --[[ table ]],
  meta = --[[ table ]],
  name = --[[ string ]],
  parent = --[[ table ]],
  profile = --[[ table ]],
  result = --[[ table ]],
  result_info = --[[ table ]],
  status = --[[ string ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Organization():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Organization():load({ id = "organization_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Organization():remove({ id = "organization_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Organization():update({
  id = "organization_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationMemberEntity

```lua
local organization_member = client:OrganizationMember(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `member` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `result_info` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OrganizationMember():create({
  id = --[[ string ]],
  errors = --[[ table ]],
  member = --[[ table ]],
  messages = --[[ table ]],
  result = --[[ table ]],
  result_info = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OrganizationMember():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OrganizationMember():load({ id = "organization_member_id", organization_id = "organization_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:OrganizationMember():remove({ id = "organization_member_id", organization_id = "organization_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationMemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationsApiProfileEntity

```lua
local organizations_api_profile = client:OrganizationsApiProfile(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `number` | Yes |  |
| `message` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OrganizationsApiProfile():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationsApiProfileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ResourceEntity

```lua
local resource = client:Resource(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `meta` | `table` | Yes | Resource Metadata. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Resource():create({
  account_id = --[[ string ]],
  share_id = --[[ string ]],
  errors = --[[ table ]],
  meta = --[[ table ]],
  resource_account_id = --[[ string ]],
  resource_id = --[[ string ]],
  resource_type = --[[ string ]],
  success = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Resource():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Resource():load({ id = "resource_id", account_id = "account_id", share_id = "share_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Resource():remove({ id = "resource_id", account_id = "account_id", share_id = "share_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Resource():update({
  id = "resource_id",
  account_id = "account_id",
  share_id = "share_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ResourceGroupEntity

```lua
local resource_group = client:ResourceGroup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ResourceGroup():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourceGroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ResourceSharingEntity

```lua
local resource_sharing = client:ResourceSharing(nil)
```

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ResourceSharing():update({
  account_id = "account_id",
  share_id = "share_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourceSharingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ResourceSharingShareExcludedRecipientResponseCollectionEntity

```lua
local resource_sharing_share_excluded_recipient_response_collection = client:ResourceSharingShareExcludedRecipientResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ResourceSharingShareExcludedRecipientResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourceSharingShareExcludedRecipientResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ResourceSharingShareExcludedRecipientResponseSingleEntity

```lua
local resource_sharing_share_excluded_recipient_response_single = client:ResourceSharingShareExcludedRecipientResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes | The account to exclude from the organization-targeted share. |
| `errors` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ResourceSharingShareExcludedRecipientResponseSingle():create({
  account_id = --[[ string ]],
  share_id = --[[ string ]],
  errors = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ResourceSharingShareExcludedRecipientResponseSingle():load({ account_id = "account_id", excluded_recipient_id = "excluded_recipient_id", share_id = "share_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ResourceSharingShareExcludedRecipientResponseSingle():remove({ account_id = "account_id", excluded_recipient_id = "excluded_recipient_id", share_id = "share_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourceSharingShareExcludedRecipientResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ResourceSharingShareRecipientResponseCollectionEntity

```lua
local resource_sharing_share_recipient_response_collection = client:ResourceSharingShareRecipientResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ResourceSharingShareRecipientResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourceSharingShareRecipientResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ResourceSharingShareRecipientResponseSingleEntity

```lua
local resource_sharing_share_recipient_response_single = client:ResourceSharingShareRecipientResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | No | Deprecated alias for `recipient_account_id`. |
| `errors` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ResourceSharingShareRecipientResponseSingle():create({
  account_id = --[[ string ]],
  share_id = --[[ string ]],
  errors = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ResourceSharingShareRecipientResponseSingle():load({ account_id = "account_id", recipient_id = "recipient_id", share_id = "share_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ResourceSharingShareRecipientResponseSingle():remove({ account_id = "account_id", recipient_id = "recipient_id", share_id = "share_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourceSharingShareRecipientResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ResourceSharingShareResponseCollectionEntity

```lua
local resource_sharing_share_response_collection = client:ResourceSharingShareResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ResourceSharingShareResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourceSharingShareResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ResourceSharingShareResponseSingleEntity

```lua
local resource_sharing_share_response_single = client:ResourceSharingShareResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `name` | `string` | Yes | The name of the share. |
| `recipients` | `table` | Yes |  |
| `resources` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ResourceSharingShareResponseSingle():create({
  account_id = --[[ string ]],
  errors = --[[ table ]],
  name = --[[ string ]],
  recipients = --[[ table ]],
  resources = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ResourceSharingShareResponseSingle():load({ account_id = "account_id", share_id = "share_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ResourceSharingShareResponseSingle():remove({ account_id = "account_id", share_id = "share_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ResourceSharingShareResponseSingle():update({
  account_id = "account_id",
  share_id = "share_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourceSharingShareResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScimDiscoveryEntity

```lua
local scim_discovery = client:ScimDiscovery(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ScimDiscovery():load({ account_id = "account_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScimDiscoveryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScimGroupEntity

```lua
local scim_group = client:ScimGroup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ScimGroup():create({
  account_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ScimGroup():load({ id = "scim_group_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ScimGroup():remove({ id = "scim_group_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ScimGroup():update({
  id = "scim_group_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScimGroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScimUserEntity

```lua
local scim_user = client:ScimUser(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ScimUser():create({
  account_id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ScimUser():load({ id = "scim_user_id", account_id = "account_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ScimUser():remove({ id = "scim_user_id", account_id = "account_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ScimUser():update({
  id = "scim_user_id",
  account_id = "account_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScimUserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SsoConnectorEntity

```lua
local sso_connector = client:SsoConnector(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:SsoConnector():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SsoConnectorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TenantEntity

```lua
local tenant = client:Tenant(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Tenant():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Tenant():load({ id = "tenant_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TenantEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TokenEntity

```lua
local token = client:Token(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Token():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserEntity

```lua
local user = client:User(nil)
```

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:User():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserGroupEntity

```lua
local user_group = client:UserGroup(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:UserGroup():remove({ account_id = "account_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserGroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UsersAccountMembershipEntity

```lua
local users_account_membership = client:UsersAccountMembership(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:UsersAccountMembership():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsersAccountMembershipEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UsersOrganizationEntity

```lua
local users_organization = client:UsersOrganization(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:UsersOrganization():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsersOrganizationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
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

