# CloudflareIdentity PHP SDK Reference

Complete API reference for the CloudflareIdentity PHP SDK.


## CloudflareIdentitySDK

### Constructor

```php
require_once __DIR__ . '/cloudflareidentity_sdk.php';

$client = new CloudflareIdentitySDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareIdentitySDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CloudflareIdentitySDK::test();
```


### Instance Methods

#### `AaaAuditLogsV2OrgHistoryResponseCollection($data = null)`

Create a new `AaaAuditLogsV2OrgHistoryResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `AaaAuditLogsV2OrgResponseCollection($data = null)`

Create a new `AaaAuditLogsV2OrgResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `Account($data = null)`

Create a new `AccountEntity` instance. Pass `null` for no initial data.

#### `AccountResourceGroup($data = null)`

Create a new `AccountResourceGroupEntity` instance. Pass `null` for no initial data.

#### `AccountUserGroup($data = null)`

Create a new `AccountUserGroupEntity` instance. Pass `null` for no initial data.

#### `AccountUserGroupMember($data = null)`

Create a new `AccountUserGroupMemberEntity` instance. Pass `null` for no initial data.

#### `BeginVerification($data = null)`

Create a new `BeginVerificationEntity` instance. Pass `null` for no initial data.

#### `BillSubsApiClientSecretResponseSingle($data = null)`

Create a new `BillSubsApiClientSecretResponseSingleEntity` instance. Pass `null` for no initial data.

#### `BillableUsageApiV2Usage($data = null)`

Create a new `BillableUsageApiV2UsageEntity` instance. Pass `null` for no initial data.

#### `DnsCustomNameserversEmptyResponse3($data = null)`

Create a new `DnsCustomNameserversEmptyResponse3Entity` instance. Pass `null` for no initial data.

#### `DnsCustomNameserversTcnsResponseCollection($data = null)`

Create a new `DnsCustomNameserversTcnsResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `DnsCustomNameserversTcnsResponseSingle($data = null)`

Create a new `DnsCustomNameserversTcnsResponseSingleEntity` instance. Pass `null` for no initial data.

#### `IamApiResponseSingleId($data = null)`

Create a new `IamApiResponseSingleIdEntity` instance. Pass `null` for no initial data.

#### `IamCollectionMemberResponseWithPolicy($data = null)`

Create a new `IamCollectionMemberResponseWithPolicyEntity` instance. Pass `null` for no initial data.

#### `IamCollectionOauthClient($data = null)`

Create a new `IamCollectionOauthClientEntity` instance. Pass `null` for no initial data.

#### `IamCollectionOauthScope($data = null)`

Create a new `IamCollectionOauthScopeEntity` instance. Pass `null` for no initial data.

#### `IamCollectionOrganization($data = null)`

Create a new `IamCollectionOrganizationEntity` instance. Pass `null` for no initial data.

#### `IamCollectionPermissionGroup($data = null)`

Create a new `IamCollectionPermissionGroupEntity` instance. Pass `null` for no initial data.

#### `IamCollectionRole($data = null)`

Create a new `IamCollectionRoleEntity` instance. Pass `null` for no initial data.

#### `IamCollectionToken($data = null)`

Create a new `IamCollectionTokenEntity` instance. Pass `null` for no initial data.

#### `IamOauthClientRotateSecret($data = null)`

Create a new `IamOauthClientRotateSecretEntity` instance. Pass `null` for no initial data.

#### `IamPermissionsGroupResponseCollection($data = null)`

Create a new `IamPermissionsGroupResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `IamResponseSingleValue($data = null)`

Create a new `IamResponseSingleValueEntity` instance. Pass `null` for no initial data.

#### `IamSchemasCollectionInvite($data = null)`

Create a new `IamSchemasCollectionInviteEntity` instance. Pass `null` for no initial data.

#### `IamSingleInvite($data = null)`

Create a new `IamSingleInviteEntity` instance. Pass `null` for no initial data.

#### `IamSingleMemberResponseWithPolicy($data = null)`

Create a new `IamSingleMemberResponseWithPolicyEntity` instance. Pass `null` for no initial data.

#### `IamSingleMembershipResponseWithPolicy($data = null)`

Create a new `IamSingleMembershipResponseWithPolicyEntity` instance. Pass `null` for no initial data.

#### `IamSingleOauthClient($data = null)`

Create a new `IamSingleOauthClientEntity` instance. Pass `null` for no initial data.

#### `IamSingleOauthClientCreate($data = null)`

Create a new `IamSingleOauthClientCreateEntity` instance. Pass `null` for no initial data.

#### `IamSingleOrganization($data = null)`

Create a new `IamSingleOrganizationEntity` instance. Pass `null` for no initial data.

#### `IamSinglePermissionGroup($data = null)`

Create a new `IamSinglePermissionGroupEntity` instance. Pass `null` for no initial data.

#### `IamSingleRole($data = null)`

Create a new `IamSingleRoleEntity` instance. Pass `null` for no initial data.

#### `IamSingleToken($data = null)`

Create a new `IamSingleTokenEntity` instance. Pass `null` for no initial data.

#### `IamSingleTokenCreate($data = null)`

Create a new `IamSingleTokenCreateEntity` instance. Pass `null` for no initial data.

#### `IamSsoConnector($data = null)`

Create a new `IamSsoConnectorEntity` instance. Pass `null` for no initial data.

#### `IamSsoConnectorCollection($data = null)`

Create a new `IamSsoConnectorCollectionEntity` instance. Pass `null` for no initial data.

#### `IamTokenVerifyResponseSingleSegment($data = null)`

Create a new `IamTokenVerifyResponseSingleSegmentEntity` instance. Pass `null` for no initial data.

#### `Member($data = null)`

Create a new `MemberEntity` instance. Pass `null` for no initial data.

#### `OauthClient($data = null)`

Create a new `OauthClientEntity` instance. Pass `null` for no initial data.

#### `Organization($data = null)`

Create a new `OrganizationEntity` instance. Pass `null` for no initial data.

#### `OrganizationMember($data = null)`

Create a new `OrganizationMemberEntity` instance. Pass `null` for no initial data.

#### `OrganizationsApiProfile($data = null)`

Create a new `OrganizationsApiProfileEntity` instance. Pass `null` for no initial data.

#### `Resource($data = null)`

Create a new `ResourceEntity` instance. Pass `null` for no initial data.

#### `ResourceGroup($data = null)`

Create a new `ResourceGroupEntity` instance. Pass `null` for no initial data.

#### `ResourceSharing($data = null)`

Create a new `ResourceSharingEntity` instance. Pass `null` for no initial data.

#### `ResourceSharingShareExcludedRecipientResponseCollection($data = null)`

Create a new `ResourceSharingShareExcludedRecipientResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `ResourceSharingShareExcludedRecipientResponseSingle($data = null)`

Create a new `ResourceSharingShareExcludedRecipientResponseSingleEntity` instance. Pass `null` for no initial data.

#### `ResourceSharingShareRecipientResponseCollection($data = null)`

Create a new `ResourceSharingShareRecipientResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `ResourceSharingShareRecipientResponseSingle($data = null)`

Create a new `ResourceSharingShareRecipientResponseSingleEntity` instance. Pass `null` for no initial data.

#### `ResourceSharingShareResponseCollection($data = null)`

Create a new `ResourceSharingShareResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `ResourceSharingShareResponseSingle($data = null)`

Create a new `ResourceSharingShareResponseSingleEntity` instance. Pass `null` for no initial data.

#### `ScimDiscovery($data = null)`

Create a new `ScimDiscoveryEntity` instance. Pass `null` for no initial data.

#### `ScimGroup($data = null)`

Create a new `ScimGroupEntity` instance. Pass `null` for no initial data.

#### `ScimUser($data = null)`

Create a new `ScimUserEntity` instance. Pass `null` for no initial data.

#### `SsoConnector($data = null)`

Create a new `SsoConnectorEntity` instance. Pass `null` for no initial data.

#### `Tenant($data = null)`

Create a new `TenantEntity` instance. Pass `null` for no initial data.

#### `Token($data = null)`

Create a new `TokenEntity` instance. Pass `null` for no initial data.

#### `User($data = null)`

Create a new `UserEntity` instance. Pass `null` for no initial data.

#### `UserGroup($data = null)`

Create a new `UserGroupEntity` instance. Pass `null` for no initial data.

#### `UsersAccountMembership($data = null)`

Create a new `UsersAccountMembershipEntity` instance. Pass `null` for no initial data.

#### `UsersOrganization($data = null)`

Create a new `UsersOrganizationEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): CloudflareIdentityUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AaaAuditLogsV2OrgHistoryResponseCollectionEntity

```php
$aaa_audit_logs_v2_org_history_response_collection = $client->AaaAuditLogsV2OrgHistoryResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `bool` | Yes | Indicates whether the API call was successful |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AaaAuditLogsV2OrgHistoryResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AaaAuditLogsV2OrgHistoryResponseCollectionEntity`

Create a new `AaaAuditLogsV2OrgHistoryResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AaaAuditLogsV2OrgResponseCollectionEntity

```php
$aaa_audit_logs_v2_org_response_collection = $client->AaaAuditLogsV2OrgResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | No |  |
| `result` | `array` | No |  |
| `result_info` | `array` | No | Provides information about the result of the request, including count and cursor. |
| `success` | `bool` | No | Indicates whether the API call was successful |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AaaAuditLogsV2OrgResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AaaAuditLogsV2OrgResponseCollectionEntity`

Create a new `AaaAuditLogsV2OrgResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AccountEntity

```php
$account = $client->Account();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Account()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccountEntity`

Create a new `AccountEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AccountResourceGroupEntity

```php
$account_resource_group = $client->AccountResourceGroup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `name` | `string` | Yes | Name of the resource group |
| `result` | `array` | Yes | A group of scoped resources. |
| `scope` | `array` | Yes | A scope is a combination of scope objects which provides additional context. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AccountResourceGroup()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "name" => null, // string
  "result" => null, // array
  "scope" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AccountResourceGroup()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AccountResourceGroup()->load(["id" => "account_resource_group_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AccountResourceGroup()->update([
  "id" => "account_resource_group_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccountResourceGroupEntity`

Create a new `AccountResourceGroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AccountUserGroupEntity

```php
$account_user_group = $client->AccountUserGroup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | Yes | Name of the User group. |
| `policies` | `array` | No | Policies attached to the User group |
| `result` | `array` | Yes | A group of policies resources. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `id` | - | - | - | - |
| `name` | - | - | - | Yes |
| `policies` | - | - | - | - |
| `result` | - | Yes | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AccountUserGroup()->create([
  "account_id" => null, // string
  "name" => null, // string
  "result" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AccountUserGroup()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AccountUserGroup()->load(["id" => "account_user_group_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AccountUserGroup()->update([
  "id" => "account_user_group_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccountUserGroupEntity`

Create a new `AccountUserGroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AccountUserGroupMemberEntity

```php
$account_user_group_member = $client->AccountUserGroupMember();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `array` | Yes | Detailed member information for a User Group member. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `id` | - | - | - | - | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AccountUserGroupMember()->create([
  "account_id" => null, // string
  "user_group_id" => null, // string
  "result" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AccountUserGroupMember()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AccountUserGroupMember()->load(["id" => "account_user_group_member_id", "account_id" => "account_id", "user_group_id" => "user_group_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AccountUserGroupMember()->remove(["id" => "account_user_group_member_id", "account_id" => "account_id", "user_group_id" => "user_group_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AccountUserGroupMember()->update([
  "id" => "account_user_group_member_id",
  "account_id" => "account_id",
  "user_group_id" => "user_group_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AccountUserGroupMemberEntity`

Create a new `AccountUserGroupMemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BeginVerificationEntity

```php
$begin_verification = $client->BeginVerification();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BeginVerification()->create([
  "account_id" => null, // string
  "sso_connector_id" => null, // string
  "errors" => null, // array
  "messages" => null, // array
  "success" => null, // bool
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BeginVerificationEntity`

Create a new `BeginVerificationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillSubsApiClientSecretResponseSingleEntity

```php
$bill_subs_api_client_secret_response_single = $client->BillSubsApiClientSecretResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BillSubsApiClientSecretResponseSingle()->create([
  "account_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillSubsApiClientSecretResponseSingleEntity`

Create a new `BillSubsApiClientSecretResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BillableUsageApiV2UsageEntity

```php
$billable_usage_api_v2_usage = $client->BillableUsageApiV2Usage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes | Contains error details if the request failed. |
| `messages` | `array` | Yes | Contains informational notices about the response. |
| `result` | `array` | Yes | Contains the array of cost and usage records. |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BillableUsageApiV2Usage()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BillableUsageApiV2UsageEntity`

Create a new `BillableUsageApiV2UsageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DnsCustomNameserversEmptyResponse3Entity

```php
$dns_custom_nameservers_empty_response_3 = $client->DnsCustomNameserversEmptyResponse3();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->DnsCustomNameserversEmptyResponse3()->remove(["custom_ns_id" => "custom_ns_id", "tenant_tag" => "tenant_tag"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DnsCustomNameserversEmptyResponse3Entity`

Create a new `DnsCustomNameserversEmptyResponse3Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DnsCustomNameserversTcnsResponseCollectionEntity

```php
$dns_custom_nameservers_tcns_response_collection = $client->DnsCustomNameserversTcnsResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DnsCustomNameserversTcnsResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DnsCustomNameserversTcnsResponseCollectionEntity`

Create a new `DnsCustomNameserversTcnsResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DnsCustomNameserversTcnsResponseSingleEntity

```php
$dns_custom_nameservers_tcns_response_single = $client->DnsCustomNameserversTcnsResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ns_name` | `string` | Yes | The FQDN of the name server. |
| `ns_set` | `float` | No | The number of the set that this name server belongs to. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DnsCustomNameserversTcnsResponseSingle()->create([
  "tenant_tag" => null, // string
  "ns_name" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DnsCustomNameserversTcnsResponseSingleEntity`

Create a new `DnsCustomNameserversTcnsResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamApiResponseSingleIdEntity

```php
$iam_api_response_single_id = $client->IamApiResponseSingleId();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->IamApiResponseSingleId()->remove(["account_id" => "account_id", "oauth_client_id" => "oauth_client_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamApiResponseSingleIdEntity`

Create a new `IamApiResponseSingleIdEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamCollectionMemberResponseWithPolicyEntity

```php
$iam_collection_member_response_with_policy = $client->IamCollectionMemberResponseWithPolicy();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IamCollectionMemberResponseWithPolicy()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamCollectionMemberResponseWithPolicyEntity`

Create a new `IamCollectionMemberResponseWithPolicyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamCollectionOauthClientEntity

```php
$iam_collection_oauth_client = $client->IamCollectionOauthClient();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IamCollectionOauthClient()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamCollectionOauthClientEntity`

Create a new `IamCollectionOauthClientEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamCollectionOauthScopeEntity

```php
$iam_collection_oauth_scope = $client->IamCollectionOauthScope();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IamCollectionOauthScope()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamCollectionOauthScopeEntity`

Create a new `IamCollectionOauthScopeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamCollectionOrganizationEntity

```php
$iam_collection_organization = $client->IamCollectionOrganization();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IamCollectionOrganization()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamCollectionOrganizationEntity`

Create a new `IamCollectionOrganizationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamCollectionPermissionGroupEntity

```php
$iam_collection_permission_group = $client->IamCollectionPermissionGroup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No | A set of permission groups that are specified to the policy. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IamCollectionPermissionGroup()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamCollectionPermissionGroupEntity`

Create a new `IamCollectionPermissionGroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamCollectionRoleEntity

```php
$iam_collection_role = $client->IamCollectionRole();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IamCollectionRole()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamCollectionRoleEntity`

Create a new `IamCollectionRoleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamCollectionTokenEntity

```php
$iam_collection_token = $client->IamCollectionToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IamCollectionToken()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamCollectionTokenEntity`

Create a new `IamCollectionTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamOauthClientRotateSecretEntity

```php
$iam_oauth_client_rotate_secret = $client->IamOauthClientRotateSecret();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->IamOauthClientRotateSecret()->create([
  "account_id" => null, // string
  "oauth_client_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamOauthClientRotateSecretEntity`

Create a new `IamOauthClientRotateSecretEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamPermissionsGroupResponseCollectionEntity

```php
$iam_permissions_group_response_collection = $client->IamPermissionsGroupResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IamPermissionsGroupResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamPermissionsGroupResponseCollectionEntity`

Create a new `IamPermissionsGroupResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamResponseSingleValueEntity

```php
$iam_response_single_value = $client->IamResponseSingleValue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `string` | No | The token value. |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->IamResponseSingleValue()->update([
  "token_id" => "token_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamResponseSingleValueEntity`

Create a new `IamResponseSingleValueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamSchemasCollectionInviteEntity

```php
$iam_schemas_collection_invite = $client->IamSchemasCollectionInvite();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IamSchemasCollectionInvite()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamSchemasCollectionInviteEntity`

Create a new `IamSchemasCollectionInviteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamSingleInviteEntity

```php
$iam_single_invite = $client->IamSingleInvite();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `array` | Yes |  |
| `status` | `mixed` | Yes | Status of your response to the invitation (rejected or accepted). |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IamSingleInvite()->load(["id" => "iam_single_invite_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->IamSingleInvite()->update([
  "id" => "iam_single_invite_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamSingleInviteEntity`

Create a new `IamSingleInviteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamSingleMemberResponseWithPolicyEntity

```php
$iam_single_member_response_with_policy = $client->IamSingleMemberResponseWithPolicy();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->IamSingleMemberResponseWithPolicy()->create([
  "account_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IamSingleMemberResponseWithPolicy()->load(["account_id" => "account_id", "member_id" => "member_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->IamSingleMemberResponseWithPolicy()->update([
  "account_id" => "account_id",
  "member_id" => "member_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamSingleMemberResponseWithPolicyEntity`

Create a new `IamSingleMemberResponseWithPolicyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamSingleMembershipResponseWithPolicyEntity

```php
$iam_single_membership_response_with_policy = $client->IamSingleMembershipResponseWithPolicy();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |
| `status` | `mixed` | Yes | Whether to accept or reject this account invitation. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IamSingleMembershipResponseWithPolicy()->load(["membership_id" => "membership_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->IamSingleMembershipResponseWithPolicy()->update([
  "membership_id" => "membership_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamSingleMembershipResponseWithPolicyEntity`

Create a new `IamSingleMembershipResponseWithPolicyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamSingleOauthClientEntity

```php
$iam_single_oauth_client = $client->IamSingleOauthClient();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `mixed` | No | An OAuth 2.0 client registration. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IamSingleOauthClient()->load(["id" => "iam_single_oauth_client_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->IamSingleOauthClient()->update([
  "id" => "iam_single_oauth_client_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamSingleOauthClientEntity`

Create a new `IamSingleOauthClientEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamSingleOauthClientCreateEntity

```php
$iam_single_oauth_client_create = $client->IamSingleOauthClientCreate();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->IamSingleOauthClientCreate()->create([
  "account_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamSingleOauthClientCreateEntity`

Create a new `IamSingleOauthClientCreateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamSingleOrganizationEntity

```php
$iam_single_organization = $client->IamSingleOrganization();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IamSingleOrganization()->load(["id" => "iam_single_organization_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamSingleOrganizationEntity`

Create a new `IamSingleOrganizationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamSinglePermissionGroupEntity

```php
$iam_single_permission_group = $client->IamSinglePermissionGroup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `array` | Yes | A named group of permissions that map to a group of operations against resources. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IamSinglePermissionGroup()->load(["id" => "iam_single_permission_group_id", "account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamSinglePermissionGroupEntity`

Create a new `IamSinglePermissionGroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamSingleRoleEntity

```php
$iam_single_role = $client->IamSingleRole();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IamSingleRole()->load(["id" => "iam_single_role_id", "account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamSingleRoleEntity`

Create a new `IamSingleRoleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamSingleTokenEntity

```php
$iam_single_token = $client->IamSingleToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IamSingleToken()->load(["id" => "iam_single_token_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->IamSingleToken()->update([
  "id" => "iam_single_token_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamSingleTokenEntity`

Create a new `IamSingleTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamSingleTokenCreateEntity

```php
$iam_single_token_create = $client->IamSingleTokenCreate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition` | `array` | No |  |
| `expires_on` | `string` | No | The expiration time on or after which the JWT MUST NOT be accepted for processing. |
| `name` | `string` | Yes | Token name. |
| `not_before` | `string` | No | The time before which the token MUST NOT be accepted for processing. |
| `policies` | `array` | Yes | List of access policies assigned to the token. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->IamSingleTokenCreate()->create([
  "name" => null, // string
  "policies" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamSingleTokenCreateEntity`

Create a new `IamSingleTokenCreateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamSsoConnectorEntity

```php
$iam_sso_connector = $client->IamSsoConnector();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `begin_verification` | `bool` | No | Begin the verification process after creation |
| `email_domain` | `string` | Yes | Email domain of the new SSO connector |
| `enabled` | `bool` | No | SSO Connector enabled state |
| `id` | `string` | No |  |
| `result` | `array` | No |  |
| `use_fedramp_language` | `bool` | No | Controls the display of FedRAMP language to the user during SSO login |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->IamSsoConnector()->create([
  "account_id" => null, // string
  "email_domain" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IamSsoConnector()->load(["id" => "iam_sso_connector_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->IamSsoConnector()->update([
  "id" => "iam_sso_connector_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamSsoConnectorEntity`

Create a new `IamSsoConnectorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamSsoConnectorCollectionEntity

```php
$iam_sso_connector_collection = $client->IamSsoConnectorCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IamSsoConnectorCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamSsoConnectorCollectionEntity`

Create a new `IamSsoConnectorCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IamTokenVerifyResponseSingleSegmentEntity

```php
$iam_token_verify_response_single_segment = $client->IamTokenVerifyResponseSingleSegment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `mixed` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IamTokenVerifyResponseSingleSegment()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IamTokenVerifyResponseSingleSegmentEntity`

Create a new `IamTokenVerifyResponseSingleSegmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MemberEntity

```php
$member = $client->Member();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Member()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MemberEntity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OauthClientEntity

```php
$oauth_client = $client->OauthClient();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->OauthClient()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OauthClientEntity`

Create a new `OauthClientEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationEntity

```php
$organization = $client->Organization();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_time` | `string` | Yes |  |
| `errors` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `messages` | `array` | Yes |  |
| `meta` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `parent` | `array` | Yes |  |
| `profile` | `array` | Yes |  |
| `result` | `array` | Yes | References an Organization in the Cloudflare data model. |
| `result_info` | `array` | Yes |  |
| `status` | `string` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Organization()->create([
  "create_time" => null, // string
  "errors" => null, // array
  "id" => null, // string
  "messages" => null, // array
  "meta" => null, // array
  "name" => null, // string
  "parent" => null, // array
  "profile" => null, // array
  "result" => null, // array
  "result_info" => null, // array
  "status" => null, // string
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Organization()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Organization()->load(["id" => "organization_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Organization()->remove(["id" => "organization_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Organization()->update([
  "id" => "organization_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationEntity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationMemberEntity

```php
$organization_member = $client->OrganizationMember();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `member` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `result_info` | `array` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OrganizationMember()->create([
  "id" => null, // string
  "errors" => null, // array
  "member" => null, // array
  "messages" => null, // array
  "result" => null, // array
  "result_info" => null, // array
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OrganizationMember()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationMember()->load(["id" => "organization_member_id", "organization_id" => "organization_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationMember()->remove(["id" => "organization_member_id", "organization_id" => "organization_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationMemberEntity`

Create a new `OrganizationMemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationsApiProfileEntity

```php
$organizations_api_profile = $client->OrganizationsApiProfile();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `int` | Yes |  |
| `message` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OrganizationsApiProfile()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationsApiProfileEntity`

Create a new `OrganizationsApiProfileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ResourceEntity

```php
$resource = $client->Resource();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `meta` | `array` | Yes | Resource Metadata. |
| `resource_account_id` | `string` | Yes | Account identifier. |
| `resource_id` | `string` | Yes | Share Resource identifier. |
| `resource_type` | `string` | Yes | Resource Type. |
| `result` | `mixed` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Resource()->create([
  "account_id" => null, // string
  "share_id" => null, // string
  "errors" => null, // array
  "meta" => null, // array
  "resource_account_id" => null, // string
  "resource_id" => null, // string
  "resource_type" => null, // string
  "success" => null, // bool
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Resource()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Resource()->load(["id" => "resource_id", "account_id" => "account_id", "share_id" => "share_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Resource()->remove(["id" => "resource_id", "account_id" => "account_id", "share_id" => "share_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Resource()->update([
  "id" => "resource_id",
  "account_id" => "account_id",
  "share_id" => "share_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ResourceEntity`

Create a new `ResourceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ResourceGroupEntity

```php
$resource_group = $client->ResourceGroup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ResourceGroup()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ResourceGroupEntity`

Create a new `ResourceGroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ResourceSharingEntity

```php
$resource_sharing = $client->ResourceSharing();
```

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ResourceSharing()->update([
  "account_id" => "account_id",
  "share_id" => "share_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ResourceSharingEntity`

Create a new `ResourceSharingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ResourceSharingShareExcludedRecipientResponseCollectionEntity

```php
$resource_sharing_share_excluded_recipient_response_collection = $client->ResourceSharingShareExcludedRecipientResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ResourceSharingShareExcludedRecipientResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ResourceSharingShareExcludedRecipientResponseCollectionEntity`

Create a new `ResourceSharingShareExcludedRecipientResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ResourceSharingShareExcludedRecipientResponseSingleEntity

```php
$resource_sharing_share_excluded_recipient_response_single = $client->ResourceSharingShareExcludedRecipientResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | Yes | The account to exclude from the organization-targeted share. |
| `errors` | `array` | Yes |  |
| `result` | `mixed` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | create | remove |
| --- | --- | --- | --- |
| `account_id` | - | - | - |
| `errors` | - | - | - |
| `result` | Yes | - | - |
| `success` | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ResourceSharingShareExcludedRecipientResponseSingle()->create([
  "account_id" => null, // string
  "share_id" => null, // string
  "errors" => null, // array
  "success" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ResourceSharingShareExcludedRecipientResponseSingle()->load(["account_id" => "account_id", "excluded_recipient_id" => "excluded_recipient_id", "share_id" => "share_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ResourceSharingShareExcludedRecipientResponseSingle()->remove(["account_id" => "account_id", "excluded_recipient_id" => "excluded_recipient_id", "share_id" => "share_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ResourceSharingShareExcludedRecipientResponseSingleEntity`

Create a new `ResourceSharingShareExcludedRecipientResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ResourceSharingShareRecipientResponseCollectionEntity

```php
$resource_sharing_share_recipient_response_collection = $client->ResourceSharingShareRecipientResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ResourceSharingShareRecipientResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ResourceSharingShareRecipientResponseCollectionEntity`

Create a new `ResourceSharingShareRecipientResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ResourceSharingShareRecipientResponseSingleEntity

```php
$resource_sharing_share_recipient_response_single = $client->ResourceSharingShareRecipientResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `string` | No | Deprecated alias for `recipient_account_id`. |
| `errors` | `array` | Yes |  |
| `organization_id` | `string` | No | Organization identifier. |
| `recipient_account_id` | `string` | No | The account that will receive the share. |
| `result` | `mixed` | No | A recipient of a share. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ResourceSharingShareRecipientResponseSingle()->create([
  "account_id" => null, // string
  "share_id" => null, // string
  "errors" => null, // array
  "success" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ResourceSharingShareRecipientResponseSingle()->load(["account_id" => "account_id", "recipient_id" => "recipient_id", "share_id" => "share_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ResourceSharingShareRecipientResponseSingle()->remove(["account_id" => "account_id", "recipient_id" => "recipient_id", "share_id" => "share_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ResourceSharingShareRecipientResponseSingleEntity`

Create a new `ResourceSharingShareRecipientResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ResourceSharingShareResponseCollectionEntity

```php
$resource_sharing_share_response_collection = $client->ResourceSharingShareResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ResourceSharingShareResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ResourceSharingShareResponseCollectionEntity`

Create a new `ResourceSharingShareResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ResourceSharingShareResponseSingleEntity

```php
$resource_sharing_share_response_single = $client->ResourceSharingShareResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `name` | `string` | Yes | The name of the share. |
| `recipients` | `array` | Yes |  |
| `resources` | `array` | Yes |  |
| `result` | `mixed` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ResourceSharingShareResponseSingle()->create([
  "account_id" => null, // string
  "errors" => null, // array
  "name" => null, // string
  "recipients" => null, // array
  "resources" => null, // array
  "success" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ResourceSharingShareResponseSingle()->load(["account_id" => "account_id", "share_id" => "share_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ResourceSharingShareResponseSingle()->remove(["account_id" => "account_id", "share_id" => "share_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ResourceSharingShareResponseSingle()->update([
  "account_id" => "account_id",
  "share_id" => "share_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ResourceSharingShareResponseSingleEntity`

Create a new `ResourceSharingShareResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScimDiscoveryEntity

```php
$scim_discovery = $client->ScimDiscovery();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ScimDiscovery()->load(["account_id" => "account_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScimDiscoveryEntity`

Create a new `ScimDiscoveryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScimGroupEntity

```php
$scim_group = $client->ScimGroup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ScimGroup()->create([
  "account_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ScimGroup()->load(["id" => "scim_group_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ScimGroup()->remove(["id" => "scim_group_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ScimGroup()->update([
  "id" => "scim_group_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScimGroupEntity`

Create a new `ScimGroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScimUserEntity

```php
$scim_user = $client->ScimUser();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ScimUser()->create([
  "account_id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ScimUser()->load(["id" => "scim_user_id", "account_id" => "account_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ScimUser()->remove(["id" => "scim_user_id", "account_id" => "account_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ScimUser()->update([
  "id" => "scim_user_id",
  "account_id" => "account_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScimUserEntity`

Create a new `ScimUserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SsoConnectorEntity

```php
$sso_connector = $client->SsoConnector();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->SsoConnector()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SsoConnectorEntity`

Create a new `SsoConnectorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TenantEntity

```php
$tenant = $client->Tenant();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Tenant()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Tenant()->load(["id" => "tenant_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TenantEntity`

Create a new `TenantEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TokenEntity

```php
$token = $client->Token();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Token()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TokenEntity`

Create a new `TokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserEntity

```php
$user = $client->User();
```

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->User()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserEntity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserGroupEntity

```php
$user_group = $client->UserGroup();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->UserGroup()->remove(["account_id" => "account_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserGroupEntity`

Create a new `UserGroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UsersAccountMembershipEntity

```php
$users_account_membership = $client->UsersAccountMembership();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->UsersAccountMembership()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UsersAccountMembershipEntity`

Create a new `UsersAccountMembershipEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UsersOrganizationEntity

```php
$users_organization = $client->UsersOrganization();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->UsersOrganization()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UsersOrganizationEntity`

Create a new `UsersOrganizationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```php
$client = new CloudflareIdentitySDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
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

