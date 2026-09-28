# CloudflareIdentity Golang SDK Reference

Complete API reference for the CloudflareIdentity Golang SDK.


## CloudflareIdentitySDK

### Constructor

```go
func NewCloudflareIdentitySDK(options map[string]any) *CloudflareIdentitySDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *CloudflareIdentitySDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *CloudflareIdentitySDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `AaaAuditLogsV2OrgHistoryResponseCollection(data map[string]any) CloudflareIdentityEntity`

Create a new `AaaAuditLogsV2OrgHistoryResponseCollection` entity instance. Pass `nil` for no initial data.

#### `AaaAuditLogsV2OrgResponseCollection(data map[string]any) CloudflareIdentityEntity`

Create a new `AaaAuditLogsV2OrgResponseCollection` entity instance. Pass `nil` for no initial data.

#### `Account(data map[string]any) CloudflareIdentityEntity`

Create a new `Account` entity instance. Pass `nil` for no initial data.

#### `AccountResourceGroup(data map[string]any) CloudflareIdentityEntity`

Create a new `AccountResourceGroup` entity instance. Pass `nil` for no initial data.

#### `AccountUserGroup(data map[string]any) CloudflareIdentityEntity`

Create a new `AccountUserGroup` entity instance. Pass `nil` for no initial data.

#### `AccountUserGroupMember(data map[string]any) CloudflareIdentityEntity`

Create a new `AccountUserGroupMember` entity instance. Pass `nil` for no initial data.

#### `BeginVerification(data map[string]any) CloudflareIdentityEntity`

Create a new `BeginVerification` entity instance. Pass `nil` for no initial data.

#### `BillSubsApiClientSecretResponseSingle(data map[string]any) CloudflareIdentityEntity`

Create a new `BillSubsApiClientSecretResponseSingle` entity instance. Pass `nil` for no initial data.

#### `BillableUsageApiV2Usage(data map[string]any) CloudflareIdentityEntity`

Create a new `BillableUsageApiV2Usage` entity instance. Pass `nil` for no initial data.

#### `DnsCustomNameserversEmptyResponse3(data map[string]any) CloudflareIdentityEntity`

Create a new `DnsCustomNameserversEmptyResponse3` entity instance. Pass `nil` for no initial data.

#### `DnsCustomNameserversTcnsResponseCollection(data map[string]any) CloudflareIdentityEntity`

Create a new `DnsCustomNameserversTcnsResponseCollection` entity instance. Pass `nil` for no initial data.

#### `DnsCustomNameserversTcnsResponseSingle(data map[string]any) CloudflareIdentityEntity`

Create a new `DnsCustomNameserversTcnsResponseSingle` entity instance. Pass `nil` for no initial data.

#### `IamApiResponseSingleId(data map[string]any) CloudflareIdentityEntity`

Create a new `IamApiResponseSingleId` entity instance. Pass `nil` for no initial data.

#### `IamCollectionMemberResponseWithPolicy(data map[string]any) CloudflareIdentityEntity`

Create a new `IamCollectionMemberResponseWithPolicy` entity instance. Pass `nil` for no initial data.

#### `IamCollectionOauthClient(data map[string]any) CloudflareIdentityEntity`

Create a new `IamCollectionOauthClient` entity instance. Pass `nil` for no initial data.

#### `IamCollectionOauthScope(data map[string]any) CloudflareIdentityEntity`

Create a new `IamCollectionOauthScope` entity instance. Pass `nil` for no initial data.

#### `IamCollectionOrganization(data map[string]any) CloudflareIdentityEntity`

Create a new `IamCollectionOrganization` entity instance. Pass `nil` for no initial data.

#### `IamCollectionPermissionGroup(data map[string]any) CloudflareIdentityEntity`

Create a new `IamCollectionPermissionGroup` entity instance. Pass `nil` for no initial data.

#### `IamCollectionRole(data map[string]any) CloudflareIdentityEntity`

Create a new `IamCollectionRole` entity instance. Pass `nil` for no initial data.

#### `IamCollectionToken(data map[string]any) CloudflareIdentityEntity`

Create a new `IamCollectionToken` entity instance. Pass `nil` for no initial data.

#### `IamOauthClientRotateSecret(data map[string]any) CloudflareIdentityEntity`

Create a new `IamOauthClientRotateSecret` entity instance. Pass `nil` for no initial data.

#### `IamPermissionsGroupResponseCollection(data map[string]any) CloudflareIdentityEntity`

Create a new `IamPermissionsGroupResponseCollection` entity instance. Pass `nil` for no initial data.

#### `IamResponseSingleValue(data map[string]any) CloudflareIdentityEntity`

Create a new `IamResponseSingleValue` entity instance. Pass `nil` for no initial data.

#### `IamSchemasCollectionInvite(data map[string]any) CloudflareIdentityEntity`

Create a new `IamSchemasCollectionInvite` entity instance. Pass `nil` for no initial data.

#### `IamSingleInvite(data map[string]any) CloudflareIdentityEntity`

Create a new `IamSingleInvite` entity instance. Pass `nil` for no initial data.

#### `IamSingleMemberResponseWithPolicy(data map[string]any) CloudflareIdentityEntity`

Create a new `IamSingleMemberResponseWithPolicy` entity instance. Pass `nil` for no initial data.

#### `IamSingleMembershipResponseWithPolicy(data map[string]any) CloudflareIdentityEntity`

Create a new `IamSingleMembershipResponseWithPolicy` entity instance. Pass `nil` for no initial data.

#### `IamSingleOauthClient(data map[string]any) CloudflareIdentityEntity`

Create a new `IamSingleOauthClient` entity instance. Pass `nil` for no initial data.

#### `IamSingleOauthClientCreate(data map[string]any) CloudflareIdentityEntity`

Create a new `IamSingleOauthClientCreate` entity instance. Pass `nil` for no initial data.

#### `IamSingleOrganization(data map[string]any) CloudflareIdentityEntity`

Create a new `IamSingleOrganization` entity instance. Pass `nil` for no initial data.

#### `IamSinglePermissionGroup(data map[string]any) CloudflareIdentityEntity`

Create a new `IamSinglePermissionGroup` entity instance. Pass `nil` for no initial data.

#### `IamSingleRole(data map[string]any) CloudflareIdentityEntity`

Create a new `IamSingleRole` entity instance. Pass `nil` for no initial data.

#### `IamSingleToken(data map[string]any) CloudflareIdentityEntity`

Create a new `IamSingleToken` entity instance. Pass `nil` for no initial data.

#### `IamSingleTokenCreate(data map[string]any) CloudflareIdentityEntity`

Create a new `IamSingleTokenCreate` entity instance. Pass `nil` for no initial data.

#### `IamSsoConnector(data map[string]any) CloudflareIdentityEntity`

Create a new `IamSsoConnector` entity instance. Pass `nil` for no initial data.

#### `IamSsoConnectorCollection(data map[string]any) CloudflareIdentityEntity`

Create a new `IamSsoConnectorCollection` entity instance. Pass `nil` for no initial data.

#### `IamTokenVerifyResponseSingleSegment(data map[string]any) CloudflareIdentityEntity`

Create a new `IamTokenVerifyResponseSingleSegment` entity instance. Pass `nil` for no initial data.

#### `Member(data map[string]any) CloudflareIdentityEntity`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `OauthClient(data map[string]any) CloudflareIdentityEntity`

Create a new `OauthClient` entity instance. Pass `nil` for no initial data.

#### `Organization(data map[string]any) CloudflareIdentityEntity`

Create a new `Organization` entity instance. Pass `nil` for no initial data.

#### `OrganizationMember(data map[string]any) CloudflareIdentityEntity`

Create a new `OrganizationMember` entity instance. Pass `nil` for no initial data.

#### `OrganizationsApiProfile(data map[string]any) CloudflareIdentityEntity`

Create a new `OrganizationsApiProfile` entity instance. Pass `nil` for no initial data.

#### `Resource(data map[string]any) CloudflareIdentityEntity`

Create a new `Resource` entity instance. Pass `nil` for no initial data.

#### `ResourceGroup(data map[string]any) CloudflareIdentityEntity`

Create a new `ResourceGroup` entity instance. Pass `nil` for no initial data.

#### `ResourceSharing(data map[string]any) CloudflareIdentityEntity`

Create a new `ResourceSharing` entity instance. Pass `nil` for no initial data.

#### `ResourceSharingShareExcludedRecipientResponseCollection(data map[string]any) CloudflareIdentityEntity`

Create a new `ResourceSharingShareExcludedRecipientResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ResourceSharingShareExcludedRecipientResponseSingle(data map[string]any) CloudflareIdentityEntity`

Create a new `ResourceSharingShareExcludedRecipientResponseSingle` entity instance. Pass `nil` for no initial data.

#### `ResourceSharingShareRecipientResponseCollection(data map[string]any) CloudflareIdentityEntity`

Create a new `ResourceSharingShareRecipientResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ResourceSharingShareRecipientResponseSingle(data map[string]any) CloudflareIdentityEntity`

Create a new `ResourceSharingShareRecipientResponseSingle` entity instance. Pass `nil` for no initial data.

#### `ResourceSharingShareResponseCollection(data map[string]any) CloudflareIdentityEntity`

Create a new `ResourceSharingShareResponseCollection` entity instance. Pass `nil` for no initial data.

#### `ResourceSharingShareResponseSingle(data map[string]any) CloudflareIdentityEntity`

Create a new `ResourceSharingShareResponseSingle` entity instance. Pass `nil` for no initial data.

#### `ScimDiscovery(data map[string]any) CloudflareIdentityEntity`

Create a new `ScimDiscovery` entity instance. Pass `nil` for no initial data.

#### `ScimGroup(data map[string]any) CloudflareIdentityEntity`

Create a new `ScimGroup` entity instance. Pass `nil` for no initial data.

#### `ScimUser(data map[string]any) CloudflareIdentityEntity`

Create a new `ScimUser` entity instance. Pass `nil` for no initial data.

#### `SsoConnector(data map[string]any) CloudflareIdentityEntity`

Create a new `SsoConnector` entity instance. Pass `nil` for no initial data.

#### `Tenant(data map[string]any) CloudflareIdentityEntity`

Create a new `Tenant` entity instance. Pass `nil` for no initial data.

#### `Token(data map[string]any) CloudflareIdentityEntity`

Create a new `Token` entity instance. Pass `nil` for no initial data.

#### `User(data map[string]any) CloudflareIdentityEntity`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserGroup(data map[string]any) CloudflareIdentityEntity`

Create a new `UserGroup` entity instance. Pass `nil` for no initial data.

#### `UsersAccountMembership(data map[string]any) CloudflareIdentityEntity`

Create a new `UsersAccountMembership` entity instance. Pass `nil` for no initial data.

#### `UsersOrganization(data map[string]any) CloudflareIdentityEntity`

Create a new `UsersOrganization` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AaaAuditLogsV2OrgHistoryResponseCollectionEntity

```go
aaaAuditLogsV2OrgHistoryResponseCollection := client.AaaAuditLogsV2OrgHistoryResponseCollection(nil)
fmt.Println(aaaAuditLogsV2OrgHistoryResponseCollection.GetName()) // "aaa_audit_logs_v2_org_history_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `result` | `[]any` | Yes |  |
| `result_info` | `map[string]any` | Yes | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `bool` | Yes | Indicates whether the API call was successful |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AaaAuditLogsV2OrgHistoryResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AaaAuditLogsV2OrgHistoryResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AaaAuditLogsV2OrgResponseCollectionEntity

```go
aaaAuditLogsV2OrgResponseCollection := client.AaaAuditLogsV2OrgResponseCollection(nil)
fmt.Println(aaaAuditLogsV2OrgResponseCollection.GetName()) // "aaa_audit_logs_v2_org_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | No |  |
| `result` | `[]any` | No |  |
| `result_info` | `map[string]any` | No | Provides information about the result of the request, including count and cursor. |
| `success` | `bool` | No | Indicates whether the API call was successful |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AaaAuditLogsV2OrgResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AaaAuditLogsV2OrgResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AccountEntity

```go
account := client.Account(nil)
fmt.Println(account.GetName()) // "account"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Account(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AccountResourceGroupEntity

```go
accountResourceGroup := client.AccountResourceGroup(nil)
fmt.Println(accountResourceGroup.GetName()) // "account_resource_group"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `name` | `string` | Yes | Name of the resource group |
| `result` | `map[string]any` | Yes | A group of scoped resources. |
| `scope` | `map[string]any` | Yes | A scope is a combination of scope objects which provides additional context. |
| `success` | `bool` | Yes | Whether the API call was successful. |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AccountResourceGroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AccountResourceGroup(nil).Load(map[string]any{"id": "account_resource_group_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AccountResourceGroup(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "messages": []any{},
    "name": "example_name",
    "result": map[string]any{},
    "scope": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AccountResourceGroup(nil).Update(map[string]any{
    "id": "account_resource_group_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountResourceGroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AccountUserGroupEntity

```go
accountUserGroup := client.AccountUserGroup(nil)
fmt.Println(accountUserGroup.GetName()) // "account_user_group"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | Yes | Name of the User group. |
| `policies` | `[]any` | No | Policies attached to the User group |
| `result` | `map[string]any` | Yes | A group of policies resources. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `id` | - | - | - | - |
| `name` | - | - | - | Yes |
| `policies` | - | - | - | - |
| `result` | - | Yes | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AccountUserGroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AccountUserGroup(nil).Load(map[string]any{"id": "account_user_group_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AccountUserGroup(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "name": "example_name",
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AccountUserGroup(nil).Update(map[string]any{
    "id": "account_user_group_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountUserGroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AccountUserGroupMemberEntity

```go
accountUserGroupMember := client.AccountUserGroupMember(nil)
fmt.Println(accountUserGroupMember.GetName()) // "account_user_group_member"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `map[string]any` | Yes | Detailed member information for a User Group member. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `id` | - | - | - | - | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AccountUserGroupMember(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AccountUserGroupMember(nil).Load(map[string]any{"id": "account_user_group_member_id", "account_id": "account_id", "user_group_id": "user_group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AccountUserGroupMember(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "user_group_id": "example_user_group_id",
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AccountUserGroupMember(nil).Update(map[string]any{
    "id": "account_user_group_member_id",
    "account_id": "account_id",
    "user_group_id": "user_group_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AccountUserGroupMember(nil).Remove(map[string]any{"id": "account_user_group_member_id", "account_id": "account_id", "user_group_id": "user_group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AccountUserGroupMemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BeginVerificationEntity

```go
beginVerification := client.BeginVerification(nil)
fmt.Println(beginVerification.GetName()) // "begin_verification"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BeginVerification(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "sso_connector_id": "example_sso_connector_id",
    "errors": []any{},
    "messages": []any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BeginVerificationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillSubsApiClientSecretResponseSingleEntity

```go
billSubsApiClientSecretResponseSingle := client.BillSubsApiClientSecretResponseSingle(nil)
fmt.Println(billSubsApiClientSecretResponseSingle.GetName()) // "bill_subs_api_client_secret_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BillSubsApiClientSecretResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillSubsApiClientSecretResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BillableUsageApiV2UsageEntity

```go
billableUsageApiV2Usage := client.BillableUsageApiV2Usage(nil)
fmt.Println(billableUsageApiV2Usage.GetName()) // "billable_usage_api_v2_usage"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes | Contains error details if the request failed. |
| `messages` | `[]any` | Yes | Contains informational notices about the response. |
| `result` | `[]any` | Yes | Contains the array of cost and usage records. |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BillableUsageApiV2Usage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BillableUsageApiV2UsageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DnsCustomNameserversEmptyResponse3Entity

```go
dnsCustomNameserversEmptyResponse3 := client.DnsCustomNameserversEmptyResponse3(nil)
fmt.Println(dnsCustomNameserversEmptyResponse3.GetName()) // "dns_custom_nameservers_empty_response_3"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DnsCustomNameserversEmptyResponse3(nil).Remove(map[string]any{"custom_ns_id": "custom_ns_id", "tenant_tag": "tenant_tag"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DnsCustomNameserversEmptyResponse3Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DnsCustomNameserversTcnsResponseCollectionEntity

```go
dnsCustomNameserversTcnsResponseCollection := client.DnsCustomNameserversTcnsResponseCollection(nil)
fmt.Println(dnsCustomNameserversTcnsResponseCollection.GetName()) // "dns_custom_nameservers_tcns_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DnsCustomNameserversTcnsResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DnsCustomNameserversTcnsResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DnsCustomNameserversTcnsResponseSingleEntity

```go
dnsCustomNameserversTcnsResponseSingle := client.DnsCustomNameserversTcnsResponseSingle(nil)
fmt.Println(dnsCustomNameserversTcnsResponseSingle.GetName()) // "dns_custom_nameservers_tcns_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ns_name` | `string` | Yes | The FQDN of the name server. |
| `ns_set` | `float64` | No | The number of the set that this name server belongs to. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DnsCustomNameserversTcnsResponseSingle(nil).Create(map[string]any{
    "tenant_tag": "example_tenant_tag",
    "ns_name": "example_ns_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DnsCustomNameserversTcnsResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamApiResponseSingleIdEntity

```go
iamApiResponseSingleId := client.IamApiResponseSingleId(nil)
fmt.Println(iamApiResponseSingleId.GetName()) // "iam_api_response_single_id"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.IamApiResponseSingleId(nil).Remove(map[string]any{"account_id": "account_id", "oauth_client_id": "oauth_client_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamApiResponseSingleIdEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamCollectionMemberResponseWithPolicyEntity

```go
iamCollectionMemberResponseWithPolicy := client.IamCollectionMemberResponseWithPolicy(nil)
fmt.Println(iamCollectionMemberResponseWithPolicy.GetName()) // "iam_collection_member_response_with_policy"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IamCollectionMemberResponseWithPolicy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamCollectionMemberResponseWithPolicyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamCollectionOauthClientEntity

```go
iamCollectionOauthClient := client.IamCollectionOauthClient(nil)
fmt.Println(iamCollectionOauthClient.GetName()) // "iam_collection_oauth_client"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IamCollectionOauthClient(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamCollectionOauthClientEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamCollectionOauthScopeEntity

```go
iamCollectionOauthScope := client.IamCollectionOauthScope(nil)
fmt.Println(iamCollectionOauthScope.GetName()) // "iam_collection_oauth_scope"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IamCollectionOauthScope(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamCollectionOauthScopeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamCollectionOrganizationEntity

```go
iamCollectionOrganization := client.IamCollectionOrganization(nil)
fmt.Println(iamCollectionOrganization.GetName()) // "iam_collection_organization"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IamCollectionOrganization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamCollectionOrganizationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamCollectionPermissionGroupEntity

```go
iamCollectionPermissionGroup := client.IamCollectionPermissionGroup(nil)
fmt.Println(iamCollectionPermissionGroup.GetName()) // "iam_collection_permission_group"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No | A set of permission groups that are specified to the policy. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IamCollectionPermissionGroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamCollectionPermissionGroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamCollectionRoleEntity

```go
iamCollectionRole := client.IamCollectionRole(nil)
fmt.Println(iamCollectionRole.GetName()) // "iam_collection_role"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IamCollectionRole(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamCollectionRoleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamCollectionTokenEntity

```go
iamCollectionToken := client.IamCollectionToken(nil)
fmt.Println(iamCollectionToken.GetName()) // "iam_collection_token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IamCollectionToken(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamCollectionTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamOauthClientRotateSecretEntity

```go
iamOauthClientRotateSecret := client.IamOauthClientRotateSecret(nil)
fmt.Println(iamOauthClientRotateSecret.GetName()) // "iam_oauth_client_rotate_secret"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.IamOauthClientRotateSecret(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "oauth_client_id": "example_oauth_client_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamOauthClientRotateSecretEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamPermissionsGroupResponseCollectionEntity

```go
iamPermissionsGroupResponseCollection := client.IamPermissionsGroupResponseCollection(nil)
fmt.Println(iamPermissionsGroupResponseCollection.GetName()) // "iam_permissions_group_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IamPermissionsGroupResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamPermissionsGroupResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamResponseSingleValueEntity

```go
iamResponseSingleValue := client.IamResponseSingleValue(nil)
fmt.Println(iamResponseSingleValue.GetName()) // "iam_response_single_value"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `string` | No | The token value. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.IamResponseSingleValue(nil).Update(map[string]any{
    "token_id": "token_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamResponseSingleValueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamSchemasCollectionInviteEntity

```go
iamSchemasCollectionInvite := client.IamSchemasCollectionInvite(nil)
fmt.Println(iamSchemasCollectionInvite.GetName()) // "iam_schemas_collection_invite"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IamSchemasCollectionInvite(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamSchemasCollectionInviteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamSingleInviteEntity

```go
iamSingleInvite := client.IamSingleInvite(nil)
fmt.Println(iamSingleInvite.GetName()) // "iam_single_invite"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `map[string]any` | Yes |  |
| `status` | `any` | Yes | Status of your response to the invitation (rejected or accepted). |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IamSingleInvite(nil).Load(map[string]any{"id": "iam_single_invite_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.IamSingleInvite(nil).Update(map[string]any{
    "id": "iam_single_invite_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamSingleInviteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamSingleMemberResponseWithPolicyEntity

```go
iamSingleMemberResponseWithPolicy := client.IamSingleMemberResponseWithPolicy(nil)
fmt.Println(iamSingleMemberResponseWithPolicy.GetName()) // "iam_single_member_response_with_policy"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IamSingleMemberResponseWithPolicy(nil).Load(map[string]any{"account_id": "account_id", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.IamSingleMemberResponseWithPolicy(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.IamSingleMemberResponseWithPolicy(nil).Update(map[string]any{
    "account_id": "account_id",
    "member_id": "member_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamSingleMemberResponseWithPolicyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamSingleMembershipResponseWithPolicyEntity

```go
iamSingleMembershipResponseWithPolicy := client.IamSingleMembershipResponseWithPolicy(nil)
fmt.Println(iamSingleMembershipResponseWithPolicy.GetName()) // "iam_single_membership_response_with_policy"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |
| `status` | `any` | Yes | Whether to accept or reject this account invitation. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IamSingleMembershipResponseWithPolicy(nil).Load(map[string]any{"membership_id": "membership_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.IamSingleMembershipResponseWithPolicy(nil).Update(map[string]any{
    "membership_id": "membership_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamSingleMembershipResponseWithPolicyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamSingleOauthClientEntity

```go
iamSingleOauthClient := client.IamSingleOauthClient(nil)
fmt.Println(iamSingleOauthClient.GetName()) // "iam_single_oauth_client"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `any` | No | An OAuth 2.0 client registration. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IamSingleOauthClient(nil).Load(map[string]any{"id": "iam_single_oauth_client_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.IamSingleOauthClient(nil).Update(map[string]any{
    "id": "iam_single_oauth_client_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamSingleOauthClientEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamSingleOauthClientCreateEntity

```go
iamSingleOauthClientCreate := client.IamSingleOauthClientCreate(nil)
fmt.Println(iamSingleOauthClientCreate.GetName()) // "iam_single_oauth_client_create"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.IamSingleOauthClientCreate(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamSingleOauthClientCreateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamSingleOrganizationEntity

```go
iamSingleOrganization := client.IamSingleOrganization(nil)
fmt.Println(iamSingleOrganization.GetName()) // "iam_single_organization"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IamSingleOrganization(nil).Load(map[string]any{"id": "iam_single_organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamSingleOrganizationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamSinglePermissionGroupEntity

```go
iamSinglePermissionGroup := client.IamSinglePermissionGroup(nil)
fmt.Println(iamSinglePermissionGroup.GetName()) // "iam_single_permission_group"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `map[string]any` | Yes | A named group of permissions that map to a group of operations against resources. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IamSinglePermissionGroup(nil).Load(map[string]any{"id": "iam_single_permission_group_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamSinglePermissionGroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamSingleRoleEntity

```go
iamSingleRole := client.IamSingleRole(nil)
fmt.Println(iamSingleRole.GetName()) // "iam_single_role"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IamSingleRole(nil).Load(map[string]any{"id": "iam_single_role_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamSingleRoleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamSingleTokenEntity

```go
iamSingleToken := client.IamSingleToken(nil)
fmt.Println(iamSingleToken.GetName()) // "iam_single_token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IamSingleToken(nil).Load(map[string]any{"id": "iam_single_token_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.IamSingleToken(nil).Update(map[string]any{
    "id": "iam_single_token_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamSingleTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamSingleTokenCreateEntity

```go
iamSingleTokenCreate := client.IamSingleTokenCreate(nil)
fmt.Println(iamSingleTokenCreate.GetName()) // "iam_single_token_create"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition` | `map[string]any` | No |  |
| `expires_on` | `string` | No | The expiration time on or after which the JWT MUST NOT be accepted for processing. |
| `name` | `string` | Yes | Token name. |
| `not_before` | `string` | No | The time before which the token MUST NOT be accepted for processing. |
| `policies` | `[]any` | Yes | List of access policies assigned to the token. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.IamSingleTokenCreate(nil).Create(map[string]any{
    "name": "example_name",
    "policies": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamSingleTokenCreateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamSsoConnectorEntity

```go
iamSsoConnector := client.IamSsoConnector(nil)
fmt.Println(iamSsoConnector.GetName()) // "iam_sso_connector"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `begin_verification` | `bool` | No | Begin the verification process after creation |
| `email_domain` | `string` | Yes | Email domain of the new SSO connector |
| `enabled` | `bool` | No | SSO Connector enabled state |
| `id` | `string` | No |  |
| `result` | `map[string]any` | No |  |
| `use_fedramp_language` | `bool` | No | Controls the display of FedRAMP language to the user during SSO login |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IamSsoConnector(nil).Load(map[string]any{"id": "iam_sso_connector_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.IamSsoConnector(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "email_domain": "example_email_domain",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.IamSsoConnector(nil).Update(map[string]any{
    "id": "iam_sso_connector_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamSsoConnectorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamSsoConnectorCollectionEntity

```go
iamSsoConnectorCollection := client.IamSsoConnectorCollection(nil)
fmt.Println(iamSsoConnectorCollection.GetName()) // "iam_sso_connector_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IamSsoConnectorCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamSsoConnectorCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IamTokenVerifyResponseSingleSegmentEntity

```go
iamTokenVerifyResponseSingleSegment := client.IamTokenVerifyResponseSingleSegment(nil)
fmt.Println(iamTokenVerifyResponseSingleSegment.GetName()) // "iam_token_verify_response_single_segment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IamTokenVerifyResponseSingleSegment(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IamTokenVerifyResponseSingleSegmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MemberEntity

```go
member := client.Member(nil)
fmt.Println(member.GetName()) // "member"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Member(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OauthClientEntity

```go
oauthClient := client.OauthClient(nil)
fmt.Println(oauthClient.GetName()) // "oauth_client"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.OauthClient(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OauthClientEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationEntity

```go
organization := client.Organization(nil)
fmt.Println(organization.GetName()) // "organization"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_time` | `string` | Yes |  |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `meta` | `map[string]any` | Yes |  |
| `name` | `string` | Yes |  |
| `parent` | `map[string]any` | Yes |  |
| `profile` | `map[string]any` | Yes |  |
| `result` | `map[string]any` | Yes | References an Organization in the Cloudflare data model. |
| `result_info` | `map[string]any` | Yes |  |
| `status` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Organization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Organization(nil).Load(map[string]any{"id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Organization(nil).Create(map[string]any{
    "create_time": "example_create_time",
    "errors": []any{},
    "id": "example_id",
    "messages": []any{},
    "meta": map[string]any{},
    "name": "example_name",
    "parent": map[string]any{},
    "profile": map[string]any{},
    "result": map[string]any{},
    "result_info": map[string]any{},
    "status": "example_status",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Organization(nil).Update(map[string]any{
    "id": "organization_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Organization(nil).Remove(map[string]any{"id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationMemberEntity

```go
organizationMember := client.OrganizationMember(nil)
fmt.Println(organizationMember.GetName()) // "organization_member"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `member` | `map[string]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `result_info` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OrganizationMember(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OrganizationMember(nil).Load(map[string]any{"id": "organization_member_id", "organization_id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.OrganizationMember(nil).Create(map[string]any{
    "id": "example_id",
    "errors": []any{},
    "member": map[string]any{},
    "messages": []any{},
    "result": map[string]any{},
    "result_info": map[string]any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.OrganizationMember(nil).Remove(map[string]any{"id": "organization_member_id", "organization_id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationMemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationsApiProfileEntity

```go
organizationsApiProfile := client.OrganizationsApiProfile(nil)
fmt.Println(organizationsApiProfile.GetName()) // "organizations_api_profile"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `int` | Yes |  |
| `message` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OrganizationsApiProfile(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationsApiProfileEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ResourceEntity

```go
resource := client.Resource(nil)
fmt.Println(resource.GetName()) // "resource"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `meta` | `map[string]any` | Yes | Resource Metadata. |
| `resource_account_id` | `string` | Yes | Account identifier. |
| `resource_id` | `string` | Yes | Share Resource identifier. |
| `resource_type` | `string` | Yes | Resource Type. |
| `result` | `any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Resource(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Resource(nil).Load(map[string]any{"id": "resource_id", "account_id": "account_id", "share_id": "share_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Resource(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "share_id": "example_share_id",
    "errors": []any{},
    "meta": map[string]any{},
    "resource_account_id": "example_resource_account_id",
    "resource_id": "example_resource_id",
    "resource_type": "example_resource_type",
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Resource(nil).Update(map[string]any{
    "id": "resource_id",
    "account_id": "account_id",
    "share_id": "share_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Resource(nil).Remove(map[string]any{"id": "resource_id", "account_id": "account_id", "share_id": "share_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ResourceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ResourceGroupEntity

```go
resourceGroup := client.ResourceGroup(nil)
fmt.Println(resourceGroup.GetName()) // "resource_group"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ResourceGroup(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ResourceGroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ResourceSharingEntity

```go
resourceSharing := client.ResourceSharing(nil)
fmt.Println(resourceSharing.GetName()) // "resource_sharing"
```

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ResourceSharing(nil).Update(map[string]any{
    "account_id": "account_id",
    "share_id": "share_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ResourceSharingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ResourceSharingShareExcludedRecipientResponseCollectionEntity

```go
resourceSharingShareExcludedRecipientResponseCollection := client.ResourceSharingShareExcludedRecipientResponseCollection(nil)
fmt.Println(resourceSharingShareExcludedRecipientResponseCollection.GetName()) // "resource_sharing_share_excluded_recipient_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ResourceSharingShareExcludedRecipientResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ResourceSharingShareExcludedRecipientResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ResourceSharingShareExcludedRecipientResponseSingleEntity

```go
resourceSharingShareExcludedRecipientResponseSingle := client.ResourceSharingShareExcludedRecipientResponseSingle(nil)
fmt.Println(resourceSharingShareExcludedRecipientResponseSingle.GetName()) // "resource_sharing_share_excluded_recipient_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes | The account to exclude from the organization-targeted share. |
| `errors` | `[]any` | Yes |  |
| `result` | `any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | create | remove |
| --- | --- | --- | --- |
| `account_id` | - | - | - |
| `errors` | - | - | - |
| `result` | Yes | - | - |
| `success` | - | - | - |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ResourceSharingShareExcludedRecipientResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "excluded_recipient_id": "excluded_recipient_id", "share_id": "share_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ResourceSharingShareExcludedRecipientResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "share_id": "example_share_id",
    "errors": []any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ResourceSharingShareExcludedRecipientResponseSingle(nil).Remove(map[string]any{"account_id": "account_id", "excluded_recipient_id": "excluded_recipient_id", "share_id": "share_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ResourceSharingShareExcludedRecipientResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ResourceSharingShareRecipientResponseCollectionEntity

```go
resourceSharingShareRecipientResponseCollection := client.ResourceSharingShareRecipientResponseCollection(nil)
fmt.Println(resourceSharingShareRecipientResponseCollection.GetName()) // "resource_sharing_share_recipient_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ResourceSharingShareRecipientResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ResourceSharingShareRecipientResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ResourceSharingShareRecipientResponseSingleEntity

```go
resourceSharingShareRecipientResponseSingle := client.ResourceSharingShareRecipientResponseSingle(nil)
fmt.Println(resourceSharingShareRecipientResponseSingle.GetName()) // "resource_sharing_share_recipient_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | No | Deprecated alias for `recipient_account_id`. |
| `errors` | `[]any` | Yes |  |
| `organization_id` | `string` | No | Organization identifier. |
| `recipient_account_id` | `string` | No | The account that will receive the share. |
| `result` | `any` | No | A recipient of a share. |
| `success` | `bool` | Yes | Whether the API call was successful. |

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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ResourceSharingShareRecipientResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "recipient_id": "recipient_id", "share_id": "share_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ResourceSharingShareRecipientResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "share_id": "example_share_id",
    "errors": []any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ResourceSharingShareRecipientResponseSingle(nil).Remove(map[string]any{"account_id": "account_id", "recipient_id": "recipient_id", "share_id": "share_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ResourceSharingShareRecipientResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ResourceSharingShareResponseCollectionEntity

```go
resourceSharingShareResponseCollection := client.ResourceSharingShareResponseCollection(nil)
fmt.Println(resourceSharingShareResponseCollection.GetName()) // "resource_sharing_share_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ResourceSharingShareResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ResourceSharingShareResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ResourceSharingShareResponseSingleEntity

```go
resourceSharingShareResponseSingle := client.ResourceSharingShareResponseSingle(nil)
fmt.Println(resourceSharingShareResponseSingle.GetName()) // "resource_sharing_share_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `name` | `string` | Yes | The name of the share. |
| `recipients` | `[]any` | Yes |  |
| `resources` | `[]any` | Yes |  |
| `result` | `any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ResourceSharingShareResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "share_id": "share_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ResourceSharingShareResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "errors": []any{},
    "name": "example_name",
    "recipients": []any{},
    "resources": []any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ResourceSharingShareResponseSingle(nil).Update(map[string]any{
    "account_id": "account_id",
    "share_id": "share_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ResourceSharingShareResponseSingle(nil).Remove(map[string]any{"account_id": "account_id", "share_id": "share_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ResourceSharingShareResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ScimDiscoveryEntity

```go
scimDiscovery := client.ScimDiscovery(nil)
fmt.Println(scimDiscovery.GetName()) // "scim_discovery"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ScimDiscovery(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScimDiscoveryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ScimGroupEntity

```go
scimGroup := client.ScimGroup(nil)
fmt.Println(scimGroup.GetName()) // "scim_group"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ScimGroup(nil).Load(map[string]any{"id": "scim_group_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ScimGroup(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ScimGroup(nil).Update(map[string]any{
    "id": "scim_group_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ScimGroup(nil).Remove(map[string]any{"id": "scim_group_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScimGroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ScimUserEntity

```go
scimUser := client.ScimUser(nil)
fmt.Println(scimUser.GetName()) // "scim_user"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ScimUser(nil).Load(map[string]any{"id": "scim_user_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ScimUser(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ScimUser(nil).Update(map[string]any{
    "id": "scim_user_id",
    "account_id": "account_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ScimUser(nil).Remove(map[string]any{"id": "scim_user_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScimUserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SsoConnectorEntity

```go
ssoConnector := client.SsoConnector(nil)
fmt.Println(ssoConnector.GetName()) // "sso_connector"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.SsoConnector(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SsoConnectorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TenantEntity

```go
tenant := client.Tenant(nil)
fmt.Println(tenant.GetName()) // "tenant"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Tenant(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Tenant(nil).Load(map[string]any{"id": "tenant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TenantEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TokenEntity

```go
token := client.Token(nil)
fmt.Println(token.GetName()) // "token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Token(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserEntity

```go
user := client.User(nil)
fmt.Println(user.GetName()) // "user"
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UserGroupEntity

```go
userGroup := client.UserGroup(nil)
fmt.Println(userGroup.GetName()) // "user_group"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.UserGroup(nil).Remove(map[string]any{"account_id": "account_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserGroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UsersAccountMembershipEntity

```go
usersAccountMembership := client.UsersAccountMembership(nil)
fmt.Println(usersAccountMembership.GetName()) // "users_account_membership"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.UsersAccountMembership(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UsersAccountMembershipEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UsersOrganizationEntity

```go
usersOrganization := client.UsersOrganization(nil)
fmt.Println(usersOrganization.GetName()) // "users_organization"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.UsersOrganization(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UsersOrganizationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```go
client := sdk.NewCloudflareIdentitySDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
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

