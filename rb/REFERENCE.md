# CloudflareIdentity Ruby SDK Reference

Complete API reference for the CloudflareIdentity Ruby SDK.


## CloudflareIdentitySDK

### Constructor

```ruby
require_relative 'CloudflareIdentity_sdk'

client = CloudflareIdentitySDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareIdentitySDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CloudflareIdentitySDK.test
```


### Instance Methods

#### `AaaAuditLogsV2OrgHistoryResponseCollection(data = nil)`

Create a new `AaaAuditLogsV2OrgHistoryResponseCollection` entity instance. Pass `nil` for no initial data.

#### `AaaAuditLogsV2OrgResponseCollection(data = nil)`

Create a new `AaaAuditLogsV2OrgResponseCollection` entity instance. Pass `nil` for no initial data.

#### `Account(data = nil)`

Create a new `Account` entity instance. Pass `nil` for no initial data.

#### `AccountResourceGroup(data = nil)`

Create a new `AccountResourceGroup` entity instance. Pass `nil` for no initial data.

#### `AccountUserGroup(data = nil)`

Create a new `AccountUserGroup` entity instance. Pass `nil` for no initial data.

#### `AccountUserGroupMember(data = nil)`

Create a new `AccountUserGroupMember` entity instance. Pass `nil` for no initial data.

#### `BeginVerification(data = nil)`

Create a new `BeginVerification` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiClientSecretResponseSingle(data = nil)`

Create a new `BillSubsApiClientSecretResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillableUsageApiV2Usage(data = nil)`

Create a new `BillableUsageApiV2Usage` entity instance. Pass `nil` for no initial data.

#### `DnsCustomNameserversEmptyResponse3(data = nil)`

Create a new `DnsCustomNameserversEmptyResponse3` entity instance. Pass `nil` for no initial data.

#### `DnsCustomNameserversTcnsResponseCollection(data = nil)`

Create a new `DnsCustomNameserversTcnsResponseCollection` entity instance. Pass `nil` for no initial data.

#### `DnsCustomNameserversTcnsResponseSingle(data = nil)`

Create a new `DnsCustomNameserversTcnsResponseSingle` entity instance. Pass `nil` for no initial data.

#### `IamApiResponseSingleId(data = nil)`

Create a new `IamApiResponseSingleId` entity instance. Pass `nil` for no initial data.

#### `IamCollectionMemberResponseWithPolicy(data = nil)`

Create a new `IamCollectionMemberResponseWithPolicy` entity instance. Pass `nil` for no initial data.

#### `IamCollectionOauthClient(data = nil)`

Create a new `IamCollectionOauthClient` entity instance. Pass `nil` for no initial data.

#### `IamCollectionOauthScope(data = nil)`

Create a new `IamCollectionOauthScope` entity instance. Pass `nil` for no initial data.

#### `IamCollectionOrganization(data = nil)`

Create a new `IamCollectionOrganization` entity instance. Pass `nil` for no initial data.

#### `IamCollectionPermissionGroup(data = nil)`

Create a new `IamCollectionPermissionGroup` entity instance. Pass `nil` for no initial data.

#### `IamCollectionRole(data = nil)`

Create a new `IamCollectionRole` entity instance. Pass `nil` for no initial data.

#### `IamCollectionToken(data = nil)`

Create a new `IamCollectionToken` entity instance. Pass `nil` for no initial data.

#### `IamOauthClientRotateSecret(data = nil)`

Create a new `IamOauthClientRotateSecret` entity instance. Pass `nil` for no initial data.

#### `IamPermissionsGroupResponseCollection(data = nil)`

Create a new `IamPermissionsGroupResponseCollection` entity instance. Pass `nil` for no initial data.

#### `IamResponseSingleValue(data = nil)`

Create a new `IamResponseSingleValue` entity instance. Pass `nil` for no initial data.

#### `IamSchemasCollectionInvite(data = nil)`

Create a new `IamSchemasCollectionInvite` entity instance. Pass `nil` for no initial data.

#### `IamSingleInvite(data = nil)`

Create a new `IamSingleInvite` entity instance. Pass `nil` for no initial data.

#### `IamSingleMemberResponseWithPolicy(data = nil)`

Create a new `IamSingleMemberResponseWithPolicy` entity instance. Pass `nil` for no initial data.

#### `IamSingleMembershipResponseWithPolicy(data = nil)`

Create a new `IamSingleMembershipResponseWithPolicy` entity instance. Pass `nil` for no initial data.

#### `IamSingleOauthClient(data = nil)`

Create a new `IamSingleOauthClient` entity instance. Pass `nil` for no initial data.

#### `IamSingleOauthClientCreate(data = nil)`

Create a new `IamSingleOauthClientCreate` entity instance. Pass `nil` for no initial data.

#### `IamSingleOrganization(data = nil)`

Create a new `IamSingleOrganization` entity instance. Pass `nil` for no initial data.

#### `IamSinglePermissionGroup(data = nil)`

Create a new `IamSinglePermissionGroup` entity instance. Pass `nil` for no initial data.

#### `IamSingleRole(data = nil)`

Create a new `IamSingleRole` entity instance. Pass `nil` for no initial data.

#### `IamSingleToken(data = nil)`

Create a new `IamSingleToken` entity instance. Pass `nil` for no initial data.

#### `IamSingleTokenCreate(data = nil)`

Create a new `IamSingleTokenCreate` entity instance. Pass `nil` for no initial data.

#### `IamSsoConnector(data = nil)`

Create a new `IamSsoConnector` entity instance. Pass `nil` for no initial data.

#### `IamSsoConnectorCollection(data = nil)`

Create a new `IamSsoConnectorCollection` entity instance. Pass `nil` for no initial data.

#### `IamTokenVerifyResponseSingleSegment(data = nil)`

Create a new `IamTokenVerifyResponseSingleSegment` entity instance. Pass `nil` for no initial data.

#### `Member(data = nil)`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `OauthClient(data = nil)`

Create a new `OauthClient` entity instance. Pass `nil` for no initial data.

#### `Organization(data = nil)`

Create a new `Organization` entity instance. Pass `nil` for no initial data.

#### `OrganizationMember(data = nil)`

Create a new `OrganizationMember` entity instance. Pass `nil` for no initial data.

#### `OrganizationsApiProfile(data = nil)`

Create a new `OrganizationsApiProfile` entity instance. Pass `nil` for no initial data.

#### `Resource(data = nil)`

Create a new `Resource` entity instance. Pass `nil` for no initial data.

#### `ResourceGroup(data = nil)`

Create a new `ResourceGroup` entity instance. Pass `nil` for no initial data.

#### `ResourceSharing(data = nil)`

Create a new `ResourceSharing` entity instance. Pass `nil` for no initial data.

#### `ResourceSharingShareExcludedRecipientResponseCollection(data = nil)`

Create a new `ResourceSharingShareExcludedRecipientResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ResourceSharingShareExcludedRecipientResponseSingle(data = nil)`

Create a new `ResourceSharingShareExcludedRecipientResponseSingle` entity instance. Pass `nil` for no initial data.

#### `ResourceSharingShareRecipientResponseCollection(data = nil)`

Create a new `ResourceSharingShareRecipientResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ResourceSharingShareRecipientResponseSingle(data = nil)`

Create a new `ResourceSharingShareRecipientResponseSingle` entity instance. Pass `nil` for no initial data.

#### `ResourceSharingShareResponseCollection(data = nil)`

Create a new `ResourceSharingShareResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ResourceSharingShareResponseSingle(data = nil)`

Create a new `ResourceSharingShareResponseSingle` entity instance. Pass `nil` for no initial data.

#### `ScimDiscovery(data = nil)`

Create a new `ScimDiscovery` entity instance. Pass `nil` for no initial data.

#### `ScimGroup(data = nil)`

Create a new `ScimGroup` entity instance. Pass `nil` for no initial data.

#### `ScimUser(data = nil)`

Create a new `ScimUser` entity instance. Pass `nil` for no initial data.

#### `SsoConnector(data = nil)`

Create a new `SsoConnector` entity instance. Pass `nil` for no initial data.

#### `Tenant(data = nil)`

Create a new `Tenant` entity instance. Pass `nil` for no initial data.

#### `Token(data = nil)`

Create a new `Token` entity instance. Pass `nil` for no initial data.

#### `User(data = nil)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserGroup(data = nil)`

Create a new `UserGroup` entity instance. Pass `nil` for no initial data.

#### `UsersAccountMembership(data = nil)`

Create a new `UsersAccountMembership` entity instance. Pass `nil` for no initial data.

#### `UsersOrganization(data = nil)`

Create a new `UsersOrganization` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AaaAuditLogsV2OrgHistoryResponseCollectionEntity

```ruby
aaa_audit_logs_v2_org_history_response_collection = client.AaaAuditLogsV2OrgHistoryResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `result` | `Array` | Yes |  |
| `result_info` | `Hash` | Yes | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `Boolean` | Yes | Indicates whether the API call was successful |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AaaAuditLogsV2OrgHistoryResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AaaAuditLogsV2OrgHistoryResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AaaAuditLogsV2OrgResponseCollectionEntity

```ruby
aaa_audit_logs_v2_org_response_collection = client.AaaAuditLogsV2OrgResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | No |  |
| `result` | `Array` | No |  |
| `result_info` | `Hash` | No | Provides information about the result of the request, including count and cursor. |
| `success` | `Boolean` | No | Indicates whether the API call was successful |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AaaAuditLogsV2OrgResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AaaAuditLogsV2OrgResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AccountEntity

```ruby
account = client.Account
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Account.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AccountEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AccountResourceGroupEntity

```ruby
account_resource_group = client.AccountResourceGroup
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `name` | `String` | Yes | Name of the resource group |
| `result` | `Hash` | Yes | A group of scoped resources. |
| `scope` | `Hash` | Yes | A scope is a combination of scope objects which provides additional context. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AccountResourceGroup.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "name" => "example_name", # String
  "result" => {}, # Hash
  "scope" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AccountResourceGroup.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AccountResourceGroup.load({ "id" => "account_resource_group_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AccountResourceGroup.update({
  "id" => "account_resource_group_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AccountResourceGroupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AccountUserGroupEntity

```ruby
account_user_group = client.AccountUserGroup
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `name` | `String` | Yes | Name of the User group. |
| `policies` | `Array` | No | Policies attached to the User group |
| `result` | `Hash` | Yes | A group of policies resources. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `id` | - | - | - | - |
| `name` | - | - | - | Yes |
| `policies` | - | - | - | - |
| `result` | - | Yes | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AccountUserGroup.create({
  "account_id" => "example_account_id", # String
  "name" => "example_name", # String
  "result" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AccountUserGroup.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AccountUserGroup.load({ "id" => "account_user_group_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AccountUserGroup.update({
  "id" => "account_user_group_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AccountUserGroupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AccountUserGroupMemberEntity

```ruby
account_user_group_member = client.AccountUserGroupMember
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `result` | `Hash` | Yes | Detailed member information for a User Group member. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `id` | - | - | - | - | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.AccountUserGroupMember.create({
  "account_id" => "example_account_id", # String
  "user_group_id" => "example_user_group_id", # String
  "result" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AccountUserGroupMember.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.AccountUserGroupMember.load({ "id" => "account_user_group_member_id", "account_id" => "account_id", "user_group_id" => "user_group_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.AccountUserGroupMember.remove({ "id" => "account_user_group_member_id", "account_id" => "account_id", "user_group_id" => "user_group_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.AccountUserGroupMember.update({
  "id" => "account_user_group_member_id",
  "account_id" => "account_id",
  "user_group_id" => "user_group_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AccountUserGroupMemberEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BeginVerificationEntity

```ruby
begin_verification = client.BeginVerification
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BeginVerification.create({
  "account_id" => "example_account_id", # String
  "sso_connector_id" => "example_sso_connector_id", # String
  "errors" => [], # Array
  "messages" => [], # Array
  "success" => true, # Boolean
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BeginVerificationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillSubsApiClientSecretResponseSingleEntity

```ruby
bill_subs_api_client_secret_response_single = client.BillSubsApiClientSecretResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.BillSubsApiClientSecretResponseSingle.create({
  "account_id" => "example_account_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillSubsApiClientSecretResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BillableUsageApiV2UsageEntity

```ruby
billable_usage_api_v2_usage = client.BillableUsageApiV2Usage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes | Contains error details if the request failed. |
| `messages` | `Array` | Yes | Contains informational notices about the response. |
| `result` | `Array` | Yes | Contains the array of cost and usage records. |
| `success` | `Boolean` | Yes | Indicates whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.BillableUsageApiV2Usage.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BillableUsageApiV2UsageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DnsCustomNameserversEmptyResponse3Entity

```ruby
dns_custom_nameservers_empty_response_3 = client.DnsCustomNameserversEmptyResponse3
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.DnsCustomNameserversEmptyResponse3.remove({ "custom_ns_id" => "custom_ns_id", "tenant_tag" => "tenant_tag" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DnsCustomNameserversEmptyResponse3Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DnsCustomNameserversTcnsResponseCollectionEntity

```ruby
dns_custom_nameservers_tcns_response_collection = client.DnsCustomNameserversTcnsResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DnsCustomNameserversTcnsResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DnsCustomNameserversTcnsResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DnsCustomNameserversTcnsResponseSingleEntity

```ruby
dns_custom_nameservers_tcns_response_single = client.DnsCustomNameserversTcnsResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ns_name` | `String` | Yes | The FQDN of the name server. |
| `ns_set` | `Float` | No | The number of the set that this name server belongs to. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.DnsCustomNameserversTcnsResponseSingle.create({
  "tenant_tag" => "example_tenant_tag", # String
  "ns_name" => "example_ns_name", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DnsCustomNameserversTcnsResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamApiResponseSingleIdEntity

```ruby
iam_api_response_single_id = client.IamApiResponseSingleId
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.IamApiResponseSingleId.remove({ "account_id" => "account_id", "oauth_client_id" => "oauth_client_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamApiResponseSingleIdEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamCollectionMemberResponseWithPolicyEntity

```ruby
iam_collection_member_response_with_policy = client.IamCollectionMemberResponseWithPolicy
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IamCollectionMemberResponseWithPolicy.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamCollectionMemberResponseWithPolicyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamCollectionOauthClientEntity

```ruby
iam_collection_oauth_client = client.IamCollectionOauthClient
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IamCollectionOauthClient.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamCollectionOauthClientEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamCollectionOauthScopeEntity

```ruby
iam_collection_oauth_scope = client.IamCollectionOauthScope
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IamCollectionOauthScope.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamCollectionOauthScopeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamCollectionOrganizationEntity

```ruby
iam_collection_organization = client.IamCollectionOrganization
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IamCollectionOrganization.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamCollectionOrganizationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamCollectionPermissionGroupEntity

```ruby
iam_collection_permission_group = client.IamCollectionPermissionGroup
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No | A set of permission groups that are specified to the policy. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IamCollectionPermissionGroup.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamCollectionPermissionGroupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamCollectionRoleEntity

```ruby
iam_collection_role = client.IamCollectionRole
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IamCollectionRole.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamCollectionRoleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamCollectionTokenEntity

```ruby
iam_collection_token = client.IamCollectionToken
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IamCollectionToken.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamCollectionTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamOauthClientRotateSecretEntity

```ruby
iam_oauth_client_rotate_secret = client.IamOauthClientRotateSecret
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.IamOauthClientRotateSecret.create({
  "account_id" => "example_account_id", # String
  "oauth_client_id" => "example_oauth_client_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamOauthClientRotateSecretEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamPermissionsGroupResponseCollectionEntity

```ruby
iam_permissions_group_response_collection = client.IamPermissionsGroupResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IamPermissionsGroupResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamPermissionsGroupResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamResponseSingleValueEntity

```ruby
iam_response_single_value = client.IamResponseSingleValue
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `String` | No | The token value. |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.IamResponseSingleValue.update({
  "token_id" => "token_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamResponseSingleValueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamSchemasCollectionInviteEntity

```ruby
iam_schemas_collection_invite = client.IamSchemasCollectionInvite
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IamSchemasCollectionInvite.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamSchemasCollectionInviteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamSingleInviteEntity

```ruby
iam_single_invite = client.IamSingleInvite
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `result` | `Hash` | Yes |  |
| `status` | `Object` | Yes | Status of your response to the invitation (rejected or accepted). |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IamSingleInvite.load({ "id" => "iam_single_invite_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.IamSingleInvite.update({
  "id" => "iam_single_invite_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamSingleInviteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamSingleMemberResponseWithPolicyEntity

```ruby
iam_single_member_response_with_policy = client.IamSingleMemberResponseWithPolicy
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.IamSingleMemberResponseWithPolicy.create({
  "account_id" => "example_account_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IamSingleMemberResponseWithPolicy.load({ "account_id" => "account_id", "member_id" => "member_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.IamSingleMemberResponseWithPolicy.update({
  "account_id" => "account_id",
  "member_id" => "member_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamSingleMemberResponseWithPolicyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamSingleMembershipResponseWithPolicyEntity

```ruby
iam_single_membership_response_with_policy = client.IamSingleMembershipResponseWithPolicy
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |
| `status` | `Object` | Yes | Whether to accept or reject this account invitation. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IamSingleMembershipResponseWithPolicy.load({ "membership_id" => "membership_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.IamSingleMembershipResponseWithPolicy.update({
  "membership_id" => "membership_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamSingleMembershipResponseWithPolicyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamSingleOauthClientEntity

```ruby
iam_single_oauth_client = client.IamSingleOauthClient
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `result` | `Object` | No | An OAuth 2.0 client registration. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IamSingleOauthClient.load({ "id" => "iam_single_oauth_client_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.IamSingleOauthClient.update({
  "id" => "iam_single_oauth_client_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamSingleOauthClientEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamSingleOauthClientCreateEntity

```ruby
iam_single_oauth_client_create = client.IamSingleOauthClientCreate
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.IamSingleOauthClientCreate.create({
  "account_id" => "example_account_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamSingleOauthClientCreateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamSingleOrganizationEntity

```ruby
iam_single_organization = client.IamSingleOrganization
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IamSingleOrganization.load({ "id" => "iam_single_organization_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamSingleOrganizationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamSinglePermissionGroupEntity

```ruby
iam_single_permission_group = client.IamSinglePermissionGroup
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `result` | `Hash` | Yes | A named group of permissions that map to a group of operations against resources. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IamSinglePermissionGroup.load({ "id" => "iam_single_permission_group_id", "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamSinglePermissionGroupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamSingleRoleEntity

```ruby
iam_single_role = client.IamSingleRole
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `result` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IamSingleRole.load({ "id" => "iam_single_role_id", "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamSingleRoleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamSingleTokenEntity

```ruby
iam_single_token = client.IamSingleToken
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IamSingleToken.load({ "id" => "iam_single_token_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.IamSingleToken.update({
  "id" => "iam_single_token_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamSingleTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamSingleTokenCreateEntity

```ruby
iam_single_token_create = client.IamSingleTokenCreate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition` | `Hash` | No |  |
| `expires_on` | `String` | No | The expiration time on or after which the JWT MUST NOT be accepted for processing. |
| `name` | `String` | Yes | Token name. |
| `not_before` | `String` | No | The time before which the token MUST NOT be accepted for processing. |
| `policies` | `Array` | Yes | List of access policies assigned to the token. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.IamSingleTokenCreate.create({
  "name" => "example_name", # String
  "policies" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamSingleTokenCreateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamSsoConnectorEntity

```ruby
iam_sso_connector = client.IamSsoConnector
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `begin_verification` | `Boolean` | No | Begin the verification process after creation |
| `email_domain` | `String` | Yes | Email domain of the new SSO connector |
| `enabled` | `Boolean` | No | SSO Connector enabled state |
| `id` | `String` | No |  |
| `result` | `Hash` | No |  |
| `use_fedramp_language` | `Boolean` | No | Controls the display of FedRAMP language to the user during SSO login |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.IamSsoConnector.create({
  "account_id" => "example_account_id", # String
  "email_domain" => "example_email_domain", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IamSsoConnector.load({ "id" => "iam_sso_connector_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.IamSsoConnector.update({
  "id" => "iam_sso_connector_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamSsoConnectorEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamSsoConnectorCollectionEntity

```ruby
iam_sso_connector_collection = client.IamSsoConnectorCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IamSsoConnectorCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamSsoConnectorCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IamTokenVerifyResponseSingleSegmentEntity

```ruby
iam_token_verify_response_single_segment = client.IamTokenVerifyResponseSingleSegment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Object` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.IamTokenVerifyResponseSingleSegment.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IamTokenVerifyResponseSingleSegmentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MemberEntity

```ruby
member = client.Member
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Member.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OauthClientEntity

```ruby
oauth_client = client.OauthClient
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.OauthClient.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OauthClientEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationEntity

```ruby
organization = client.Organization
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_time` | `String` | Yes |  |
| `errors` | `Array` | Yes |  |
| `id` | `String` | Yes |  |
| `messages` | `Array` | Yes |  |
| `meta` | `Hash` | Yes |  |
| `name` | `String` | Yes |  |
| `parent` | `Hash` | Yes |  |
| `profile` | `Hash` | Yes |  |
| `result` | `Hash` | Yes | References an Organization in the Cloudflare data model. |
| `result_info` | `Hash` | Yes |  |
| `status` | `String` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Organization.create({
  "create_time" => "example_create_time", # String
  "errors" => [], # Array
  "id" => "example_id", # String
  "messages" => [], # Array
  "meta" => {}, # Hash
  "name" => "example_name", # String
  "parent" => {}, # Hash
  "profile" => {}, # Hash
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "status" => "example_status", # String
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Organization.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Organization.load({ "id" => "organization_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Organization.remove({ "id" => "organization_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Organization.update({
  "id" => "organization_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationMemberEntity

```ruby
organization_member = client.OrganizationMember
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `member` | `Hash` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `result_info` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.OrganizationMember.create({
  "id" => "example_id", # String
  "errors" => [], # Array
  "member" => {}, # Hash
  "messages" => [], # Array
  "result" => {}, # Hash
  "result_info" => {}, # Hash
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.OrganizationMember.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.OrganizationMember.load({ "id" => "organization_member_id", "organization_id" => "organization_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.OrganizationMember.remove({ "id" => "organization_member_id", "organization_id" => "organization_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationMemberEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationsApiProfileEntity

```ruby
organizations_api_profile = client.OrganizationsApiProfile
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `Integer` | Yes |  |
| `message` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.OrganizationsApiProfile.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationsApiProfileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ResourceEntity

```ruby
resource = client.Resource
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `meta` | `Hash` | Yes | Resource Metadata. |
| `resource_account_id` | `String` | Yes | Account identifier. |
| `resource_id` | `String` | Yes | Share Resource identifier. |
| `resource_type` | `String` | Yes | Resource Type. |
| `result` | `Object` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Resource.create({
  "account_id" => "example_account_id", # String
  "share_id" => "example_share_id", # String
  "errors" => [], # Array
  "meta" => {}, # Hash
  "resource_account_id" => "example_resource_account_id", # String
  "resource_id" => "example_resource_id", # String
  "resource_type" => "example_resource_type", # String
  "success" => true, # Boolean
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Resource.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Resource.load({ "id" => "resource_id", "account_id" => "account_id", "share_id" => "share_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Resource.remove({ "id" => "resource_id", "account_id" => "account_id", "share_id" => "share_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Resource.update({
  "id" => "resource_id",
  "account_id" => "account_id",
  "share_id" => "share_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ResourceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ResourceGroupEntity

```ruby
resource_group = client.ResourceGroup
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ResourceGroup.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ResourceGroupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ResourceSharingEntity

```ruby
resource_sharing = client.ResourceSharing
```

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ResourceSharing.update({
  "account_id" => "account_id",
  "share_id" => "share_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ResourceSharingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ResourceSharingShareExcludedRecipientResponseCollectionEntity

```ruby
resource_sharing_share_excluded_recipient_response_collection = client.ResourceSharingShareExcludedRecipientResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ResourceSharingShareExcludedRecipientResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ResourceSharingShareExcludedRecipientResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ResourceSharingShareExcludedRecipientResponseSingleEntity

```ruby
resource_sharing_share_excluded_recipient_response_single = client.ResourceSharingShareExcludedRecipientResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `String` | Yes | The account to exclude from the organization-targeted share. |
| `errors` | `Array` | Yes |  |
| `result` | `Object` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | create | remove |
| --- | --- | --- | --- |
| `account_id` | - | - | - |
| `errors` | - | - | - |
| `result` | Yes | - | - |
| `success` | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ResourceSharingShareExcludedRecipientResponseSingle.create({
  "account_id" => "example_account_id", # String
  "share_id" => "example_share_id", # String
  "errors" => [], # Array
  "success" => true, # Boolean
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ResourceSharingShareExcludedRecipientResponseSingle.load({ "account_id" => "account_id", "excluded_recipient_id" => "excluded_recipient_id", "share_id" => "share_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ResourceSharingShareExcludedRecipientResponseSingle.remove({ "account_id" => "account_id", "excluded_recipient_id" => "excluded_recipient_id", "share_id" => "share_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ResourceSharingShareExcludedRecipientResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ResourceSharingShareRecipientResponseCollectionEntity

```ruby
resource_sharing_share_recipient_response_collection = client.ResourceSharingShareRecipientResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ResourceSharingShareRecipientResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ResourceSharingShareRecipientResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ResourceSharingShareRecipientResponseSingleEntity

```ruby
resource_sharing_share_recipient_response_single = client.ResourceSharingShareRecipientResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `String` | No | Deprecated alias for `recipient_account_id`. |
| `errors` | `Array` | Yes |  |
| `organization_id` | `String` | No | Organization identifier. |
| `recipient_account_id` | `String` | No | The account that will receive the share. |
| `result` | `Object` | No | A recipient of a share. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ResourceSharingShareRecipientResponseSingle.create({
  "account_id" => "example_account_id", # String
  "share_id" => "example_share_id", # String
  "errors" => [], # Array
  "success" => true, # Boolean
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ResourceSharingShareRecipientResponseSingle.load({ "account_id" => "account_id", "recipient_id" => "recipient_id", "share_id" => "share_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ResourceSharingShareRecipientResponseSingle.remove({ "account_id" => "account_id", "recipient_id" => "recipient_id", "share_id" => "share_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ResourceSharingShareRecipientResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ResourceSharingShareResponseCollectionEntity

```ruby
resource_sharing_share_response_collection = client.ResourceSharingShareResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ResourceSharingShareResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ResourceSharingShareResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ResourceSharingShareResponseSingleEntity

```ruby
resource_sharing_share_response_single = client.ResourceSharingShareResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `name` | `String` | Yes | The name of the share. |
| `recipients` | `Array` | Yes |  |
| `resources` | `Array` | Yes |  |
| `result` | `Object` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ResourceSharingShareResponseSingle.create({
  "account_id" => "example_account_id", # String
  "errors" => [], # Array
  "name" => "example_name", # String
  "recipients" => [], # Array
  "resources" => [], # Array
  "success" => true, # Boolean
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ResourceSharingShareResponseSingle.load({ "account_id" => "account_id", "share_id" => "share_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ResourceSharingShareResponseSingle.remove({ "account_id" => "account_id", "share_id" => "share_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ResourceSharingShareResponseSingle.update({
  "account_id" => "account_id",
  "share_id" => "share_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ResourceSharingShareResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScimDiscoveryEntity

```ruby
scim_discovery = client.ScimDiscovery
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ScimDiscovery.load({ "account_id" => "account_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScimDiscoveryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScimGroupEntity

```ruby
scim_group = client.ScimGroup
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ScimGroup.create({
  "account_id" => "example_account_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ScimGroup.load({ "id" => "scim_group_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ScimGroup.remove({ "id" => "scim_group_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ScimGroup.update({
  "id" => "scim_group_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScimGroupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScimUserEntity

```ruby
scim_user = client.ScimUser
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ScimUser.create({
  "account_id" => "example_account_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ScimUser.load({ "id" => "scim_user_id", "account_id" => "account_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.ScimUser.remove({ "id" => "scim_user_id", "account_id" => "account_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ScimUser.update({
  "id" => "scim_user_id",
  "account_id" => "account_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScimUserEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SsoConnectorEntity

```ruby
sso_connector = client.SsoConnector
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.SsoConnector.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SsoConnectorEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TenantEntity

```ruby
tenant = client.Tenant
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Tenant.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Tenant.load({ "id" => "tenant_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TenantEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TokenEntity

```ruby
token = client.Token
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Token.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserEntity

```ruby
user = client.User
```

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.User.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserGroupEntity

```ruby
user_group = client.UserGroup
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.UserGroup.remove({ "account_id" => "account_id", "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserGroupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UsersAccountMembershipEntity

```ruby
users_account_membership = client.UsersAccountMembership
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.UsersAccountMembership.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UsersAccountMembershipEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UsersOrganizationEntity

```ruby
users_organization = client.UsersOrganization
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.UsersOrganization.remove({ "id" => "id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UsersOrganizationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ruby
client = CloudflareIdentitySDK.new({
  "feature" => {
    "test" => { "active" => true },
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

