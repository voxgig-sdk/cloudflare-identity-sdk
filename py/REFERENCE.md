# CloudflareIdentity Python SDK Reference

Complete API reference for the CloudflareIdentity Python SDK.


## CloudflareIdentitySDK

### Constructor

```python
from cloudflareidentity_sdk import CloudflareIdentitySDK

client = CloudflareIdentitySDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareIdentitySDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CloudflareIdentitySDK.test()
```


### Instance Methods

#### `AaaAuditLogsV2OrgHistoryResponseCollection(data=None)`

Create a new `AaaAuditLogsV2OrgHistoryResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `AaaAuditLogsV2OrgResponseCollection(data=None)`

Create a new `AaaAuditLogsV2OrgResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `Account(data=None)`

Create a new `AccountEntity` instance. Pass `None` for no initial data.

#### `AccountResourceGroup(data=None)`

Create a new `AccountResourceGroupEntity` instance. Pass `None` for no initial data.

#### `AccountUserGroup(data=None)`

Create a new `AccountUserGroupEntity` instance. Pass `None` for no initial data.

#### `AccountUserGroupMember(data=None)`

Create a new `AccountUserGroupMemberEntity` instance. Pass `None` for no initial data.

#### `BeginVerification(data=None)`

Create a new `BeginVerificationEntity` instance. Pass `None` for no initial data.

#### `BillSubsApiClientSecretResponseSingle(data=None)`

Create a new `BillSubsApiClientSecretResponseSingleEntity` instance. Pass `None` for no initial data.

#### `BillableUsageApiV2Usage(data=None)`

Create a new `BillableUsageApiV2UsageEntity` instance. Pass `None` for no initial data.

#### `DnsCustomNameserversEmptyResponse3(data=None)`

Create a new `DnsCustomNameserversEmptyResponse3Entity` instance. Pass `None` for no initial data.

#### `DnsCustomNameserversTcnsResponseCollection(data=None)`

Create a new `DnsCustomNameserversTcnsResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `DnsCustomNameserversTcnsResponseSingle(data=None)`

Create a new `DnsCustomNameserversTcnsResponseSingleEntity` instance. Pass `None` for no initial data.

#### `IamApiResponseSingleId(data=None)`

Create a new `IamApiResponseSingleIdEntity` instance. Pass `None` for no initial data.

#### `IamCollectionMemberResponseWithPolicy(data=None)`

Create a new `IamCollectionMemberResponseWithPolicyEntity` instance. Pass `None` for no initial data.

#### `IamCollectionOauthClient(data=None)`

Create a new `IamCollectionOauthClientEntity` instance. Pass `None` for no initial data.

#### `IamCollectionOauthScope(data=None)`

Create a new `IamCollectionOauthScopeEntity` instance. Pass `None` for no initial data.

#### `IamCollectionOrganization(data=None)`

Create a new `IamCollectionOrganizationEntity` instance. Pass `None` for no initial data.

#### `IamCollectionPermissionGroup(data=None)`

Create a new `IamCollectionPermissionGroupEntity` instance. Pass `None` for no initial data.

#### `IamCollectionRole(data=None)`

Create a new `IamCollectionRoleEntity` instance. Pass `None` for no initial data.

#### `IamCollectionToken(data=None)`

Create a new `IamCollectionTokenEntity` instance. Pass `None` for no initial data.

#### `IamOauthClientRotateSecret(data=None)`

Create a new `IamOauthClientRotateSecretEntity` instance. Pass `None` for no initial data.

#### `IamPermissionsGroupResponseCollection(data=None)`

Create a new `IamPermissionsGroupResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `IamResponseSingleValue(data=None)`

Create a new `IamResponseSingleValueEntity` instance. Pass `None` for no initial data.

#### `IamSchemasCollectionInvite(data=None)`

Create a new `IamSchemasCollectionInviteEntity` instance. Pass `None` for no initial data.

#### `IamSingleInvite(data=None)`

Create a new `IamSingleInviteEntity` instance. Pass `None` for no initial data.

#### `IamSingleMemberResponseWithPolicy(data=None)`

Create a new `IamSingleMemberResponseWithPolicyEntity` instance. Pass `None` for no initial data.

#### `IamSingleMembershipResponseWithPolicy(data=None)`

Create a new `IamSingleMembershipResponseWithPolicyEntity` instance. Pass `None` for no initial data.

#### `IamSingleOauthClient(data=None)`

Create a new `IamSingleOauthClientEntity` instance. Pass `None` for no initial data.

#### `IamSingleOauthClientCreate(data=None)`

Create a new `IamSingleOauthClientCreateEntity` instance. Pass `None` for no initial data.

#### `IamSingleOrganization(data=None)`

Create a new `IamSingleOrganizationEntity` instance. Pass `None` for no initial data.

#### `IamSinglePermissionGroup(data=None)`

Create a new `IamSinglePermissionGroupEntity` instance. Pass `None` for no initial data.

#### `IamSingleRole(data=None)`

Create a new `IamSingleRoleEntity` instance. Pass `None` for no initial data.

#### `IamSingleToken(data=None)`

Create a new `IamSingleTokenEntity` instance. Pass `None` for no initial data.

#### `IamSingleTokenCreate(data=None)`

Create a new `IamSingleTokenCreateEntity` instance. Pass `None` for no initial data.

#### `IamSsoConnector(data=None)`

Create a new `IamSsoConnectorEntity` instance. Pass `None` for no initial data.

#### `IamSsoConnectorCollection(data=None)`

Create a new `IamSsoConnectorCollectionEntity` instance. Pass `None` for no initial data.

#### `IamTokenVerifyResponseSingleSegment(data=None)`

Create a new `IamTokenVerifyResponseSingleSegmentEntity` instance. Pass `None` for no initial data.

#### `Member(data=None)`

Create a new `MemberEntity` instance. Pass `None` for no initial data.

#### `OauthClient(data=None)`

Create a new `OauthClientEntity` instance. Pass `None` for no initial data.

#### `Organization(data=None)`

Create a new `OrganizationEntity` instance. Pass `None` for no initial data.

#### `OrganizationMember(data=None)`

Create a new `OrganizationMemberEntity` instance. Pass `None` for no initial data.

#### `OrganizationsApiProfile(data=None)`

Create a new `OrganizationsApiProfileEntity` instance. Pass `None` for no initial data.

#### `Resource(data=None)`

Create a new `ResourceEntity` instance. Pass `None` for no initial data.

#### `ResourceGroup(data=None)`

Create a new `ResourceGroupEntity` instance. Pass `None` for no initial data.

#### `ResourceSharing(data=None)`

Create a new `ResourceSharingEntity` instance. Pass `None` for no initial data.

#### `ResourceSharingShareExcludedRecipientResponseCollection(data=None)`

Create a new `ResourceSharingShareExcludedRecipientResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `ResourceSharingShareExcludedRecipientResponseSingle(data=None)`

Create a new `ResourceSharingShareExcludedRecipientResponseSingleEntity` instance. Pass `None` for no initial data.

#### `ResourceSharingShareRecipientResponseCollection(data=None)`

Create a new `ResourceSharingShareRecipientResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `ResourceSharingShareRecipientResponseSingle(data=None)`

Create a new `ResourceSharingShareRecipientResponseSingleEntity` instance. Pass `None` for no initial data.

#### `ResourceSharingShareResponseCollection(data=None)`

Create a new `ResourceSharingShareResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `ResourceSharingShareResponseSingle(data=None)`

Create a new `ResourceSharingShareResponseSingleEntity` instance. Pass `None` for no initial data.

#### `ScimDiscovery(data=None)`

Create a new `ScimDiscoveryEntity` instance. Pass `None` for no initial data.

#### `ScimGroup(data=None)`

Create a new `ScimGroupEntity` instance. Pass `None` for no initial data.

#### `ScimUser(data=None)`

Create a new `ScimUserEntity` instance. Pass `None` for no initial data.

#### `SsoConnector(data=None)`

Create a new `SsoConnectorEntity` instance. Pass `None` for no initial data.

#### `Tenant(data=None)`

Create a new `TenantEntity` instance. Pass `None` for no initial data.

#### `Token(data=None)`

Create a new `TokenEntity` instance. Pass `None` for no initial data.

#### `User(data=None)`

Create a new `UserEntity` instance. Pass `None` for no initial data.

#### `UserGroup(data=None)`

Create a new `UserGroupEntity` instance. Pass `None` for no initial data.

#### `UsersAccountMembership(data=None)`

Create a new `UsersAccountMembershipEntity` instance. Pass `None` for no initial data.

#### `UsersOrganization(data=None)`

Create a new `UsersOrganizationEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AaaAuditLogsV2OrgHistoryResponseCollectionEntity

```python
aaa_audit_logs_v2_org_history_response_collection = client.AaaAuditLogsV2OrgHistoryResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `result` | `list` | Yes |  |
| `result_info` | `dict` | Yes | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `bool` | Yes | Indicates whether the API call was successful |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AaaAuditLogsV2OrgHistoryResponseCollection().list({"audit_id": "example", "organization_id": "example", "action_time": "example", "before": "example", "since": "example"})
for aaa_audit_logs_v2_org_history_response_collection in results:
    print(aaa_audit_logs_v2_org_history_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AaaAuditLogsV2OrgHistoryResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AaaAuditLogsV2OrgResponseCollectionEntity

```python
aaa_audit_logs_v2_org_response_collection = client.AaaAuditLogsV2OrgResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | No |  |
| `result` | `list` | No |  |
| `result_info` | `dict` | No | Provides information about the result of the request, including count and cursor. |
| `success` | `bool` | No | Indicates whether the API call was successful |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AaaAuditLogsV2OrgResponseCollection().list({"organization_id": "example", "before": "example", "since": "example"})
for aaa_audit_logs_v2_org_response_collection in results:
    print(aaa_audit_logs_v2_org_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AaaAuditLogsV2OrgResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AccountEntity

```python
account = client.Account()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Account().list({"id": "example"})
for account in results:
    print(account)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AccountResourceGroupEntity

```python
account_resource_group = client.AccountResourceGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `name` | `str` | Yes | Name of the resource group |
| `result` | `dict` | Yes | A group of scoped resources. |
| `scope` | `dict` | Yes | A scope is a combination of scope objects which provides additional context. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AccountResourceGroup().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "name": "example_name",  # str
    "result": {},  # dict
    "scope": {},  # dict
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AccountResourceGroup().list({"account_id": "example"})
for account_resource_group in results:
    print(account_resource_group)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AccountResourceGroup().load({"id": "account_resource_group_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AccountResourceGroup().update({
    "id": "account_resource_group_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountResourceGroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AccountUserGroupEntity

```python
account_user_group = client.AccountUserGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `name` | `str` | Yes | Name of the User group. |
| `policies` | `list` | No | Policies attached to the User group |
| `result` | `dict` | Yes | A group of policies resources. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `id` | - | - | - | - |
| `name` | - | - | - | Yes |
| `policies` | - | - | - | - |
| `result` | - | Yes | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AccountUserGroup().create({
    "account_id": "example_account_id",  # str
    "name": "example_name",  # str
    "result": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AccountUserGroup().list({"account_id": "example"})
for account_user_group in results:
    print(account_user_group)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AccountUserGroup().load({"id": "account_user_group_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AccountUserGroup().update({
    "id": "account_user_group_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountUserGroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AccountUserGroupMemberEntity

```python
account_user_group_member = client.AccountUserGroupMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `result` | `dict` | Yes | Detailed member information for a User Group member. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `id` | - | - | - | - | - |
| `result` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AccountUserGroupMember().create({
    "account_id": "example_account_id",  # str
    "user_group_id": "example_user_group_id",  # str
    "result": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AccountUserGroupMember().list({"account_id": "example", "user_group_id": "example"})
for account_user_group_member in results:
    print(account_user_group_member)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AccountUserGroupMember().load({"id": "account_user_group_member_id", "account_id": "account_id", "user_group_id": "user_group_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AccountUserGroupMember().remove({"id": "account_user_group_member_id", "account_id": "account_id", "user_group_id": "user_group_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AccountUserGroupMember().update({
    "id": "account_user_group_member_id",
    "account_id": "account_id",
    "user_group_id": "user_group_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AccountUserGroupMemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BeginVerificationEntity

```python
begin_verification = client.BeginVerification()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BeginVerification().create({
    "account_id": "example_account_id",  # str
    "sso_connector_id": "example_sso_connector_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "success": True,  # bool
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BeginVerificationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillSubsApiClientSecretResponseSingleEntity

```python
bill_subs_api_client_secret_response_single = client.BillSubsApiClientSecretResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BillSubsApiClientSecretResponseSingle().create({
    "account_id": "example_account_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillSubsApiClientSecretResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BillableUsageApiV2UsageEntity

```python
billable_usage_api_v2_usage = client.BillableUsageApiV2Usage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes | Contains error details if the request failed. |
| `messages` | `list` | Yes | Contains informational notices about the response. |
| `result` | `list` | Yes | Contains the array of cost and usage records. |
| `success` | `bool` | Yes | Indicates whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BillableUsageApiV2Usage().list({"organization_id": "example"})
for billable_usage_api_v2_usage in results:
    print(billable_usage_api_v2_usage)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BillableUsageApiV2UsageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DnsCustomNameserversEmptyResponse3Entity

```python
dns_custom_nameservers_empty_response_3 = client.DnsCustomNameserversEmptyResponse3()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DnsCustomNameserversEmptyResponse3().remove({"custom_ns_id": "custom_ns_id", "tenant_tag": "tenant_tag"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DnsCustomNameserversEmptyResponse3Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DnsCustomNameserversTcnsResponseCollectionEntity

```python
dns_custom_nameservers_tcns_response_collection = client.DnsCustomNameserversTcnsResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DnsCustomNameserversTcnsResponseCollection().list({"tenant_tag": "example"})
for dns_custom_nameservers_tcns_response_collection in results:
    print(dns_custom_nameservers_tcns_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DnsCustomNameserversTcnsResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DnsCustomNameserversTcnsResponseSingleEntity

```python
dns_custom_nameservers_tcns_response_single = client.DnsCustomNameserversTcnsResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ns_name` | `str` | Yes | The FQDN of the name server. |
| `ns_set` | `float` | No | The number of the set that this name server belongs to. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DnsCustomNameserversTcnsResponseSingle().create({
    "tenant_tag": "example_tenant_tag",  # str
    "ns_name": "example_ns_name",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DnsCustomNameserversTcnsResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamApiResponseSingleIdEntity

```python
iam_api_response_single_id = client.IamApiResponseSingleId()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.IamApiResponseSingleId().remove({"account_id": "account_id", "oauth_client_id": "oauth_client_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamApiResponseSingleIdEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamCollectionMemberResponseWithPolicyEntity

```python
iam_collection_member_response_with_policy = client.IamCollectionMemberResponseWithPolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IamCollectionMemberResponseWithPolicy().list({"account_id": "example"})
for iam_collection_member_response_with_policy in results:
    print(iam_collection_member_response_with_policy)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamCollectionMemberResponseWithPolicyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamCollectionOauthClientEntity

```python
iam_collection_oauth_client = client.IamCollectionOauthClient()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IamCollectionOauthClient().list({"account_id": "example"})
for iam_collection_oauth_client in results:
    print(iam_collection_oauth_client)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamCollectionOauthClientEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamCollectionOauthScopeEntity

```python
iam_collection_oauth_scope = client.IamCollectionOauthScope()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IamCollectionOauthScope().list()
for iam_collection_oauth_scope in results:
    print(iam_collection_oauth_scope)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamCollectionOauthScopeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamCollectionOrganizationEntity

```python
iam_collection_organization = client.IamCollectionOrganization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IamCollectionOrganization().list()
for iam_collection_organization in results:
    print(iam_collection_organization)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamCollectionOrganizationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamCollectionPermissionGroupEntity

```python
iam_collection_permission_group = client.IamCollectionPermissionGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No | A set of permission groups that are specified to the policy. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IamCollectionPermissionGroup().list({"account_id": "example"})
for iam_collection_permission_group in results:
    print(iam_collection_permission_group)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamCollectionPermissionGroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamCollectionRoleEntity

```python
iam_collection_role = client.IamCollectionRole()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IamCollectionRole().list({"account_id": "example"})
for iam_collection_role in results:
    print(iam_collection_role)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamCollectionRoleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamCollectionTokenEntity

```python
iam_collection_token = client.IamCollectionToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IamCollectionToken().list()
for iam_collection_token in results:
    print(iam_collection_token)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamCollectionTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamOauthClientRotateSecretEntity

```python
iam_oauth_client_rotate_secret = client.IamOauthClientRotateSecret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.IamOauthClientRotateSecret().create({
    "account_id": "example_account_id",  # str
    "oauth_client_id": "example_oauth_client_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamOauthClientRotateSecretEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamPermissionsGroupResponseCollectionEntity

```python
iam_permissions_group_response_collection = client.IamPermissionsGroupResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IamPermissionsGroupResponseCollection().list()
for iam_permissions_group_response_collection in results:
    print(iam_permissions_group_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamPermissionsGroupResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamResponseSingleValueEntity

```python
iam_response_single_value = client.IamResponseSingleValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `str` | No | The token value. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.IamResponseSingleValue().update({
    "token_id": "token_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamResponseSingleValueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamSchemasCollectionInviteEntity

```python
iam_schemas_collection_invite = client.IamSchemasCollectionInvite()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IamSchemasCollectionInvite().list()
for iam_schemas_collection_invite in results:
    print(iam_schemas_collection_invite)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSchemasCollectionInviteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamSingleInviteEntity

```python
iam_single_invite = client.IamSingleInvite()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `result` | `dict` | Yes |  |
| `status` | `Any` | Yes | Status of your response to the invitation (rejected or accepted). |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IamSingleInvite().load({"id": "iam_single_invite_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.IamSingleInvite().update({
    "id": "iam_single_invite_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSingleInviteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamSingleMemberResponseWithPolicyEntity

```python
iam_single_member_response_with_policy = client.IamSingleMemberResponseWithPolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.IamSingleMemberResponseWithPolicy().create({
    "account_id": "example_account_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IamSingleMemberResponseWithPolicy().load({"account_id": "account_id", "member_id": "member_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.IamSingleMemberResponseWithPolicy().update({
    "account_id": "account_id",
    "member_id": "member_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSingleMemberResponseWithPolicyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamSingleMembershipResponseWithPolicyEntity

```python
iam_single_membership_response_with_policy = client.IamSingleMembershipResponseWithPolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |
| `status` | `Any` | Yes | Whether to accept or reject this account invitation. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IamSingleMembershipResponseWithPolicy().load({"membership_id": "membership_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.IamSingleMembershipResponseWithPolicy().update({
    "membership_id": "membership_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSingleMembershipResponseWithPolicyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamSingleOauthClientEntity

```python
iam_single_oauth_client = client.IamSingleOauthClient()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `result` | `Any` | No | An OAuth 2.0 client registration. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IamSingleOauthClient().load({"id": "iam_single_oauth_client_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.IamSingleOauthClient().update({
    "id": "iam_single_oauth_client_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSingleOauthClientEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamSingleOauthClientCreateEntity

```python
iam_single_oauth_client_create = client.IamSingleOauthClientCreate()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.IamSingleOauthClientCreate().create({
    "account_id": "example_account_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSingleOauthClientCreateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamSingleOrganizationEntity

```python
iam_single_organization = client.IamSingleOrganization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IamSingleOrganization().load({"id": "iam_single_organization_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSingleOrganizationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamSinglePermissionGroupEntity

```python
iam_single_permission_group = client.IamSinglePermissionGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `result` | `dict` | Yes | A named group of permissions that map to a group of operations against resources. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IamSinglePermissionGroup().load({"id": "iam_single_permission_group_id", "account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSinglePermissionGroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamSingleRoleEntity

```python
iam_single_role = client.IamSingleRole()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `result` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IamSingleRole().load({"id": "iam_single_role_id", "account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSingleRoleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamSingleTokenEntity

```python
iam_single_token = client.IamSingleToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IamSingleToken().load({"id": "iam_single_token_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.IamSingleToken().update({
    "id": "iam_single_token_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSingleTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamSingleTokenCreateEntity

```python
iam_single_token_create = client.IamSingleTokenCreate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition` | `dict` | No |  |
| `expires_on` | `str` | No | The expiration time on or after which the JWT MUST NOT be accepted for processing. |
| `name` | `str` | Yes | Token name. |
| `not_before` | `str` | No | The time before which the token MUST NOT be accepted for processing. |
| `policies` | `list` | Yes | List of access policies assigned to the token. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.IamSingleTokenCreate().create({
    "name": "example_name",  # str
    "policies": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSingleTokenCreateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamSsoConnectorEntity

```python
iam_sso_connector = client.IamSsoConnector()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `begin_verification` | `bool` | No | Begin the verification process after creation |
| `email_domain` | `str` | Yes | Email domain of the new SSO connector |
| `enabled` | `bool` | No | SSO Connector enabled state |
| `id` | `str` | No |  |
| `result` | `dict` | No |  |
| `use_fedramp_language` | `bool` | No | Controls the display of FedRAMP language to the user during SSO login |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.IamSsoConnector().create({
    "account_id": "example_account_id",  # str
    "email_domain": "example_email_domain",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IamSsoConnector().load({"id": "iam_sso_connector_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.IamSsoConnector().update({
    "id": "iam_sso_connector_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSsoConnectorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamSsoConnectorCollectionEntity

```python
iam_sso_connector_collection = client.IamSsoConnectorCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IamSsoConnectorCollection().list({"account_id": "example"})
for iam_sso_connector_collection in results:
    print(iam_sso_connector_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamSsoConnectorCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IamTokenVerifyResponseSingleSegmentEntity

```python
iam_token_verify_response_single_segment = client.IamTokenVerifyResponseSingleSegment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IamTokenVerifyResponseSingleSegment().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IamTokenVerifyResponseSingleSegmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MemberEntity

```python
member = client.Member()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Member().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OauthClientEntity

```python
oauth_client = client.OauthClient()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.OauthClient().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OauthClientEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationEntity

```python
organization = client.Organization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_time` | `str` | Yes |  |
| `errors` | `list` | Yes |  |
| `id` | `str` | Yes |  |
| `messages` | `list` | Yes |  |
| `meta` | `dict` | Yes |  |
| `name` | `str` | Yes |  |
| `parent` | `dict` | Yes |  |
| `profile` | `dict` | Yes |  |
| `result` | `dict` | Yes | References an Organization in the Cloudflare data model. |
| `result_info` | `dict` | Yes |  |
| `status` | `str` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Organization().create({
    "create_time": "example_create_time",  # str
    "errors": [],  # list
    "id": "example_id",  # str
    "messages": [],  # list
    "meta": {},  # dict
    "name": "example_name",  # str
    "parent": {},  # dict
    "profile": {},  # dict
    "result": {},  # dict
    "result_info": {},  # dict
    "status": "example_status",  # str
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Organization().list()
for organization in results:
    print(organization)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Organization().load({"id": "organization_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Organization().remove({"id": "organization_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Organization().update({
    "id": "organization_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationMemberEntity

```python
organization_member = client.OrganizationMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `member` | `dict` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `result_info` | `dict` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.OrganizationMember().create({
    "id": "example_id",  # str
    "errors": [],  # list
    "member": {},  # dict
    "messages": [],  # list
    "result": {},  # dict
    "result_info": {},  # dict
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OrganizationMember().list({"id": "example_id"})
for organization_member in results:
    print(organization_member)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OrganizationMember().load({"id": "organization_member_id", "organization_id": "organization_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.OrganizationMember().remove({"id": "organization_member_id", "organization_id": "organization_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationMemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationsApiProfileEntity

```python
organizations_api_profile = client.OrganizationsApiProfile()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `int` | Yes |  |
| `message` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OrganizationsApiProfile().list({"organization_id": "example"})
for organizations_api_profile in results:
    print(organizations_api_profile)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationsApiProfileEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ResourceEntity

```python
resource = client.Resource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `meta` | `dict` | Yes | Resource Metadata. |
| `resource_account_id` | `str` | Yes | Account identifier. |
| `resource_id` | `str` | Yes | Share Resource identifier. |
| `resource_type` | `str` | Yes | Resource Type. |
| `result` | `Any` | No |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Resource().create({
    "account_id": "example_account_id",  # str
    "share_id": "example_share_id",  # str
    "errors": [],  # list
    "meta": {},  # dict
    "resource_account_id": "example_resource_account_id",  # str
    "resource_id": "example_resource_id",  # str
    "resource_type": "example_resource_type",  # str
    "success": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Resource().list({"account_id": "example", "share_id": "example"})
for resource in results:
    print(resource)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Resource().load({"id": "resource_id", "account_id": "account_id", "share_id": "share_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Resource().remove({"id": "resource_id", "account_id": "account_id", "share_id": "share_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Resource().update({
    "id": "resource_id",
    "account_id": "account_id",
    "share_id": "share_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ResourceGroupEntity

```python
resource_group = client.ResourceGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ResourceGroup().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourceGroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ResourceSharingEntity

```python
resource_sharing = client.ResourceSharing()
```

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ResourceSharing().update({
    "account_id": "account_id",
    "share_id": "share_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourceSharingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ResourceSharingShareExcludedRecipientResponseCollectionEntity

```python
resource_sharing_share_excluded_recipient_response_collection = client.ResourceSharingShareExcludedRecipientResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ResourceSharingShareExcludedRecipientResponseCollection().list({"account_id": "example", "share_id": "example"})
for resource_sharing_share_excluded_recipient_response_collection in results:
    print(resource_sharing_share_excluded_recipient_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourceSharingShareExcludedRecipientResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ResourceSharingShareExcludedRecipientResponseSingleEntity

```python
resource_sharing_share_excluded_recipient_response_single = client.ResourceSharingShareExcludedRecipientResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `str` | Yes | The account to exclude from the organization-targeted share. |
| `errors` | `list` | Yes |  |
| `result` | `Any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Field Usage by Operation

| Field | load | create | remove |
| --- | --- | --- | --- |
| `account_id` | - | - | - |
| `errors` | - | - | - |
| `result` | Yes | - | - |
| `success` | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ResourceSharingShareExcludedRecipientResponseSingle().create({
    "account_id": "example_account_id",  # str
    "share_id": "example_share_id",  # str
    "errors": [],  # list
    "success": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ResourceSharingShareExcludedRecipientResponseSingle().load({"account_id": "account_id", "excluded_recipient_id": "excluded_recipient_id", "share_id": "share_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ResourceSharingShareExcludedRecipientResponseSingle().remove({"account_id": "account_id", "excluded_recipient_id": "excluded_recipient_id", "share_id": "share_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourceSharingShareExcludedRecipientResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ResourceSharingShareRecipientResponseCollectionEntity

```python
resource_sharing_share_recipient_response_collection = client.ResourceSharingShareRecipientResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ResourceSharingShareRecipientResponseCollection().list({"account_id": "example", "share_id": "example"})
for resource_sharing_share_recipient_response_collection in results:
    print(resource_sharing_share_recipient_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourceSharingShareRecipientResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ResourceSharingShareRecipientResponseSingleEntity

```python
resource_sharing_share_recipient_response_single = client.ResourceSharingShareRecipientResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | `str` | No | Deprecated alias for `recipient_account_id`. |
| `errors` | `list` | Yes |  |
| `organization_id` | `str` | No | Organization identifier. |
| `recipient_account_id` | `str` | No | The account that will receive the share. |
| `result` | `Any` | No | A recipient of a share. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ResourceSharingShareRecipientResponseSingle().create({
    "account_id": "example_account_id",  # str
    "share_id": "example_share_id",  # str
    "errors": [],  # list
    "success": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ResourceSharingShareRecipientResponseSingle().load({"account_id": "account_id", "recipient_id": "recipient_id", "share_id": "share_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ResourceSharingShareRecipientResponseSingle().remove({"account_id": "account_id", "recipient_id": "recipient_id", "share_id": "share_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourceSharingShareRecipientResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ResourceSharingShareResponseCollectionEntity

```python
resource_sharing_share_response_collection = client.ResourceSharingShareResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ResourceSharingShareResponseCollection().list({"account_id": "example"})
for resource_sharing_share_response_collection in results:
    print(resource_sharing_share_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourceSharingShareResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ResourceSharingShareResponseSingleEntity

```python
resource_sharing_share_response_single = client.ResourceSharingShareResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `name` | `str` | Yes | The name of the share. |
| `recipients` | `list` | Yes |  |
| `resources` | `list` | Yes |  |
| `result` | `Any` | No |  |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ResourceSharingShareResponseSingle().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "name": "example_name",  # str
    "recipients": [],  # list
    "resources": [],  # list
    "success": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ResourceSharingShareResponseSingle().load({"account_id": "account_id", "share_id": "share_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ResourceSharingShareResponseSingle().remove({"account_id": "account_id", "share_id": "share_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ResourceSharingShareResponseSingle().update({
    "account_id": "account_id",
    "share_id": "share_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourceSharingShareResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScimDiscoveryEntity

```python
scim_discovery = client.ScimDiscovery()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ScimDiscovery().load({"account_id": "account_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScimDiscoveryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScimGroupEntity

```python
scim_group = client.ScimGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ScimGroup().create({
    "account_id": "example_account_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ScimGroup().load({"id": "scim_group_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ScimGroup().remove({"id": "scim_group_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ScimGroup().update({
    "id": "scim_group_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScimGroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScimUserEntity

```python
scim_user = client.ScimUser()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ScimUser().create({
    "account_id": "example_account_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ScimUser().load({"id": "scim_user_id", "account_id": "account_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ScimUser().remove({"id": "scim_user_id", "account_id": "account_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ScimUser().update({
    "id": "scim_user_id",
    "account_id": "account_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScimUserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SsoConnectorEntity

```python
sso_connector = client.SsoConnector()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.SsoConnector().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SsoConnectorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TenantEntity

```python
tenant = client.Tenant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Tenant().list({"id": "example_id"})
for tenant in results:
    print(tenant)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Tenant().load({"id": "tenant_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TenantEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TokenEntity

```python
token = client.Token()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Token().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserEntity

```python
user = client.User()
```

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.User().list()
for user in results:
    print(user)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserGroupEntity

```python
user_group = client.UserGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.UserGroup().remove({"account_id": "account_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserGroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UsersAccountMembershipEntity

```python
users_account_membership = client.UsersAccountMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.UsersAccountMembership().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsersAccountMembershipEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UsersOrganizationEntity

```python
users_organization = client.UsersOrganization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.UsersOrganization().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsersOrganizationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```python
client = CloudflareIdentitySDK({
    "feature": {
        "test": {"active": True},
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

