# CloudflareIdentity Python SDK



The Python SDK for the CloudflareIdentity API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.AaaAuditLogsV2OrgHistoryResponseCollection()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-identity-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from cloudflareidentity_sdk import CloudflareIdentitySDK

client = CloudflareIdentitySDK({
    "apikey": os.environ.get("CLOUDFLARE_IDENTITY_APIKEY"),
})
```

### 2. List aaaauditlogsv2orghistoryresponsecollection records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    aaaauditlogsv2orghistoryresponsecollections = client.AaaAuditLogsV2OrgHistoryResponseCollection().list({"audit_id": "example", "organization_id": "example", "action_time": "example", "before": "example", "since": "example"})
    for aaaauditlogsv2orghistoryresponsecollection in aaaauditlogsv2orghistoryresponsecollections:
        print(aaaauditlogsv2orghistoryresponsecollection)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load an accountresourcegroup

AccountResourceGroup is nested under account, so provide the `account_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    accountresourcegroup = client.AccountResourceGroup().load({"account_id": "example_account_id", "id": "example_id"})
    print(accountresourcegroup)
except Exception as err:
    print(f"load failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    accountusergroupmembers = client.AccountUserGroupMember().list()
    print(accountusergroupmembers)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = CloudflareIdentitySDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
accountusergroupmember = client.AccountUserGroupMember().list()
# accountusergroupmember contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = CloudflareIdentitySDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### CloudflareIdentitySDK

```python
from cloudflareidentity_sdk import CloudflareIdentitySDK

client = CloudflareIdentitySDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = CloudflareIdentitySDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### CloudflareIdentitySDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `aaa_audit_logs_v2_org_history_response_collection = client.AaaAuditLogsV2OrgHistoryResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `result` | `list` |  |
| `result_info` | `dict` | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `bool` | Indicates whether the API call was successful |

#### Example: List

```python
aaa_audit_logs_v2_org_history_response_collections = client.AaaAuditLogsV2OrgHistoryResponseCollection().list({"audit_id": "example", "organization_id": "example", "action_time": "example", "before": "example", "since": "example"})
```


### AaaAuditLogsV2OrgResponseCollection

Create an instance: `aaa_audit_logs_v2_org_response_collection = client.AaaAuditLogsV2OrgResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `result` | `list` |  |
| `result_info` | `dict` | Provides information about the result of the request, including count and cursor. |
| `success` | `bool` | Indicates whether the API call was successful |

#### Example: List

```python
aaa_audit_logs_v2_org_response_collections = client.AaaAuditLogsV2OrgResponseCollection().list({"organization_id": "example", "before": "example", "since": "example"})
```


### Account

Create an instance: `account = client.Account()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: List

```python
accounts = client.Account().list({"id": "example"})
```


### AccountResourceGroup

Create an instance: `account_resource_group = client.AccountResourceGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `name` | `str` | Name of the resource group |
| `result` | `dict` | A group of scoped resources. |
| `scope` | `dict` | A scope is a combination of scope objects which provides additional context. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
account_resource_group = client.AccountResourceGroup().load({"id": "account_resource_group_id", "account_id": "account_id"})
```

#### Example: List

```python
account_resource_groups = client.AccountResourceGroup().list({"account_id": "example"})
```

#### Example: Create

```python
account_resource_group = client.AccountResourceGroup().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "name": "example_name",  # str
    "result": {},  # dict
    "scope": {},  # dict
    "success": True,  # bool
})
```


### AccountUserGroup

Create an instance: `account_user_group = client.AccountUserGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `name` | `str` | Name of the User group. |
| `policies` | `list` | Policies attached to the User group |
| `result` | `dict` | A group of policies resources. |

#### Example: Load

```python
account_user_group = client.AccountUserGroup().load({"id": "account_user_group_id", "account_id": "account_id"})
```

#### Example: List

```python
account_user_groups = client.AccountUserGroup().list({"account_id": "example"})
```

#### Example: Create

```python
account_user_group = client.AccountUserGroup().create({
    "account_id": "example_account_id",  # str
    "name": "example_name",  # str
    "result": {},  # dict
})
```


### AccountUserGroupMember

Create an instance: `account_user_group_member = client.AccountUserGroupMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `result` | `dict` | Detailed member information for a User Group member. |

#### Example: Load

```python
account_user_group_member = client.AccountUserGroupMember().load({"id": "account_user_group_member_id", "account_id": "account_id", "user_group_id": "user_group_id"})
```

#### Example: List

```python
account_user_group_members = client.AccountUserGroupMember().list({"account_id": "example", "user_group_id": "example"})
```

#### Example: Create

```python
account_user_group_member = client.AccountUserGroupMember().create({
    "account_id": "example_account_id",  # str
    "user_group_id": "example_user_group_id",  # str
    "result": {},  # dict
})
```


### BeginVerification

Create an instance: `begin_verification = client.BeginVerification()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Create

```python
begin_verification = client.BeginVerification().create({
    "account_id": "example_account_id",  # str
    "sso_connector_id": "example_sso_connector_id",  # str
    "errors": [],  # list
    "messages": [],  # list
    "success": True,  # bool
})
```


### BillSubsApiClientSecretResponseSingle

Create an instance: `bill_subs_api_client_secret_response_single = client.BillSubsApiClientSecretResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |

#### Example: Create

```python
bill_subs_api_client_secret_response_single = client.BillSubsApiClientSecretResponseSingle().create({
    "account_id": "example_account_id",  # str
})
```


### BillableUsageApiV2Usage

Create an instance: `billable_usage_api_v2_usage = client.BillableUsageApiV2Usage()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` | Contains error details if the request failed. |
| `messages` | `list` | Contains informational notices about the response. |
| `result` | `list` | Contains the array of cost and usage records. |
| `success` | `bool` | Indicates whether the API call was successful. |

#### Example: List

```python
billable_usage_api_v2_usages = client.BillableUsageApiV2Usage().list({"organization_id": "example"})
```


### DnsCustomNameserversEmptyResponse3

Create an instance: `dns_custom_nameservers_empty_response_3 = client.DnsCustomNameserversEmptyResponse3()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DnsCustomNameserversTcnsResponseCollection

Create an instance: `dns_custom_nameservers_tcns_response_collection = client.DnsCustomNameserversTcnsResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
dns_custom_nameservers_tcns_response_collections = client.DnsCustomNameserversTcnsResponseCollection().list({"tenant_tag": "example"})
```


### DnsCustomNameserversTcnsResponseSingle

Create an instance: `dns_custom_nameservers_tcns_response_single = client.DnsCustomNameserversTcnsResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ns_name` | `str` | The FQDN of the name server. |
| `ns_set` | `float` | The number of the set that this name server belongs to. |

#### Example: Create

```python
dns_custom_nameservers_tcns_response_single = client.DnsCustomNameserversTcnsResponseSingle().create({
    "tenant_tag": "example_tenant_tag",  # str
    "ns_name": "example_ns_name",  # str
})
```


### IamApiResponseSingleId

Create an instance: `iam_api_response_single_id = client.IamApiResponseSingleId()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### IamCollectionMemberResponseWithPolicy

Create an instance: `iam_collection_member_response_with_policy = client.IamCollectionMemberResponseWithPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
iam_collection_member_response_with_policys = client.IamCollectionMemberResponseWithPolicy().list({"account_id": "example"})
```


### IamCollectionOauthClient

Create an instance: `iam_collection_oauth_client = client.IamCollectionOauthClient()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
iam_collection_oauth_clients = client.IamCollectionOauthClient().list({"account_id": "example"})
```


### IamCollectionOauthScope

Create an instance: `iam_collection_oauth_scope = client.IamCollectionOauthScope()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
iam_collection_oauth_scopes = client.IamCollectionOauthScope().list()
```


### IamCollectionOrganization

Create an instance: `iam_collection_organization = client.IamCollectionOrganization()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
iam_collection_organizations = client.IamCollectionOrganization().list()
```


### IamCollectionPermissionGroup

Create an instance: `iam_collection_permission_group = client.IamCollectionPermissionGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` | A set of permission groups that are specified to the policy. |

#### Example: List

```python
iam_collection_permission_groups = client.IamCollectionPermissionGroup().list({"account_id": "example"})
```


### IamCollectionRole

Create an instance: `iam_collection_role = client.IamCollectionRole()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
iam_collection_roles = client.IamCollectionRole().list({"account_id": "example"})
```


### IamCollectionToken

Create an instance: `iam_collection_token = client.IamCollectionToken()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
iam_collection_tokens = client.IamCollectionToken().list()
```


### IamOauthClientRotateSecret

Create an instance: `iam_oauth_client_rotate_secret = client.IamOauthClientRotateSecret()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |

#### Example: Create

```python
iam_oauth_client_rotate_secret = client.IamOauthClientRotateSecret().create({
    "account_id": "example_account_id",  # str
    "oauth_client_id": "example_oauth_client_id",  # str
})
```


### IamPermissionsGroupResponseCollection

Create an instance: `iam_permissions_group_response_collection = client.IamPermissionsGroupResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
iam_permissions_group_response_collections = client.IamPermissionsGroupResponseCollection().list()
```


### IamResponseSingleValue

Create an instance: `iam_response_single_value = client.IamResponseSingleValue()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `str` | The token value. |


### IamSchemasCollectionInvite

Create an instance: `iam_schemas_collection_invite = client.IamSchemasCollectionInvite()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
iam_schemas_collection_invites = client.IamSchemasCollectionInvite().list()
```


### IamSingleInvite

Create an instance: `iam_single_invite = client.IamSingleInvite()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `result` | `dict` |  |
| `status` | `Any` | Status of your response to the invitation (rejected or accepted). |

#### Example: Load

```python
iam_single_invite = client.IamSingleInvite().load({"id": "iam_single_invite_id"})
```


### IamSingleMemberResponseWithPolicy

Create an instance: `iam_single_member_response_with_policy = client.IamSingleMemberResponseWithPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |

#### Example: Load

```python
iam_single_member_response_with_policy = client.IamSingleMemberResponseWithPolicy().load({"account_id": "account_id", "member_id": "member_id"})
```

#### Example: Create

```python
iam_single_member_response_with_policy = client.IamSingleMemberResponseWithPolicy().create({
    "account_id": "example_account_id",  # str
})
```


### IamSingleMembershipResponseWithPolicy

Create an instance: `iam_single_membership_response_with_policy = client.IamSingleMembershipResponseWithPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |
| `status` | `Any` | Whether to accept or reject this account invitation. |

#### Example: Load

```python
iam_single_membership_response_with_policy = client.IamSingleMembershipResponseWithPolicy().load({"membership_id": "membership_id"})
```


### IamSingleOauthClient

Create an instance: `iam_single_oauth_client = client.IamSingleOauthClient()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `result` | `Any` | An OAuth 2.0 client registration. |

#### Example: Load

```python
iam_single_oauth_client = client.IamSingleOauthClient().load({"id": "iam_single_oauth_client_id", "account_id": "account_id"})
```


### IamSingleOauthClientCreate

Create an instance: `iam_single_oauth_client_create = client.IamSingleOauthClientCreate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
iam_single_oauth_client_create = client.IamSingleOauthClientCreate().create({
    "account_id": "example_account_id",  # str
})
```


### IamSingleOrganization

Create an instance: `iam_single_organization = client.IamSingleOrganization()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `result` | `dict` |  |

#### Example: Load

```python
iam_single_organization = client.IamSingleOrganization().load({"id": "iam_single_organization_id"})
```


### IamSinglePermissionGroup

Create an instance: `iam_single_permission_group = client.IamSinglePermissionGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `result` | `dict` | A named group of permissions that map to a group of operations against resources. |

#### Example: Load

```python
iam_single_permission_group = client.IamSinglePermissionGroup().load({"id": "iam_single_permission_group_id", "account_id": "account_id"})
```


### IamSingleRole

Create an instance: `iam_single_role = client.IamSingleRole()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `result` | `dict` |  |

#### Example: Load

```python
iam_single_role = client.IamSingleRole().load({"id": "iam_single_role_id", "account_id": "account_id"})
```


### IamSingleToken

Create an instance: `iam_single_token = client.IamSingleToken()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `result` | `dict` |  |

#### Example: Load

```python
iam_single_token = client.IamSingleToken().load({"id": "iam_single_token_id"})
```


### IamSingleTokenCreate

Create an instance: `iam_single_token_create = client.IamSingleTokenCreate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condition` | `dict` |  |
| `expires_on` | `str` | The expiration time on or after which the JWT MUST NOT be accepted for processing. |
| `name` | `str` | Token name. |
| `not_before` | `str` | The time before which the token MUST NOT be accepted for processing. |
| `policies` | `list` | List of access policies assigned to the token. |

#### Example: Create

```python
iam_single_token_create = client.IamSingleTokenCreate().create({
    "name": "example_name",  # str
    "policies": [],  # list
})
```


### IamSsoConnector

Create an instance: `iam_sso_connector = client.IamSsoConnector()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `begin_verification` | `bool` | Begin the verification process after creation |
| `email_domain` | `str` | Email domain of the new SSO connector |
| `enabled` | `bool` | SSO Connector enabled state |
| `id` | `str` |  |
| `result` | `dict` |  |
| `use_fedramp_language` | `bool` | Controls the display of FedRAMP language to the user during SSO login |

#### Example: Load

```python
iam_sso_connector = client.IamSsoConnector().load({"id": "iam_sso_connector_id", "account_id": "account_id"})
```

#### Example: Create

```python
iam_sso_connector = client.IamSsoConnector().create({
    "account_id": "example_account_id",  # str
    "email_domain": "example_email_domain",  # str
})
```


### IamSsoConnectorCollection

Create an instance: `iam_sso_connector_collection = client.IamSsoConnectorCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
iam_sso_connector_collections = client.IamSsoConnectorCollection().list({"account_id": "example"})
```


### IamTokenVerifyResponseSingleSegment

Create an instance: `iam_token_verify_response_single_segment = client.IamTokenVerifyResponseSingleSegment()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Any` |  |

#### Example: Load

```python
iam_token_verify_response_single_segment = client.IamTokenVerifyResponseSingleSegment().load()
```


### Member

Create an instance: `member = client.Member()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### OauthClient

Create an instance: `oauth_client = client.OauthClient()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Organization

Create an instance: `organization = client.Organization()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `create_time` | `str` |  |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `meta` | `dict` |  |
| `name` | `str` |  |
| `parent` | `dict` |  |
| `profile` | `dict` |  |
| `result` | `dict` | References an Organization in the Cloudflare data model. |
| `result_info` | `dict` |  |
| `status` | `str` |  |
| `success` | `bool` |  |

#### Example: Load

```python
organization = client.Organization().load({"id": "organization_id"})
```

#### Example: List

```python
organizations = client.Organization().list()
```

#### Example: Create

```python
organization = client.Organization().create({
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


### OrganizationMember

Create an instance: `organization_member = client.OrganizationMember()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` |  |
| `member` | `dict` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `result_info` | `dict` |  |
| `success` | `bool` |  |

#### Example: Load

```python
organization_member = client.OrganizationMember().load({"id": "organization_member_id", "organization_id": "organization_id"})
```

#### Example: List

```python
organization_members = client.OrganizationMember().list({"id": "example_id"})
```

#### Example: Create

```python
organization_member = client.OrganizationMember().create({
    "id": "example_id",  # str
    "errors": [],  # list
    "member": {},  # dict
    "messages": [],  # list
    "result": {},  # dict
    "result_info": {},  # dict
    "success": True,  # bool
})
```


### OrganizationsApiProfile

Create an instance: `organizations_api_profile = client.OrganizationsApiProfile()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `int` |  |
| `message` | `str` |  |

#### Example: List

```python
organizations_api_profiles = client.OrganizationsApiProfile().list({"organization_id": "example"})
```


### Resource

Create an instance: `resource = client.Resource()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` |  |
| `meta` | `dict` | Resource Metadata. |
| `resource_account_id` | `str` | Account identifier. |
| `resource_id` | `str` | Share Resource identifier. |
| `resource_type` | `str` | Resource Type. |
| `result` | `Any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
resource = client.Resource().load({"id": "resource_id", "account_id": "account_id", "share_id": "share_id"})
```

#### Example: List

```python
resources = client.Resource().list({"account_id": "example", "share_id": "example"})
```

#### Example: Create

```python
resource = client.Resource().create({
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


### ResourceGroup

Create an instance: `resource_group = client.ResourceGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### ResourceSharing

Create an instance: `resource_sharing = client.ResourceSharing()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ResourceSharingShareExcludedRecipientResponseCollection

Create an instance: `resource_sharing_share_excluded_recipient_response_collection = client.ResourceSharingShareExcludedRecipientResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
resource_sharing_share_excluded_recipient_response_collections = client.ResourceSharingShareExcludedRecipientResponseCollection().list({"account_id": "example", "share_id": "example"})
```


### ResourceSharingShareExcludedRecipientResponseSingle

Create an instance: `resource_sharing_share_excluded_recipient_response_single = client.ResourceSharingShareExcludedRecipientResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `str` | The account to exclude from the organization-targeted share. |
| `errors` | `list` |  |
| `result` | `Any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
resource_sharing_share_excluded_recipient_response_single = client.ResourceSharingShareExcludedRecipientResponseSingle().load({"account_id": "account_id", "excluded_recipient_id": "excluded_recipient_id", "share_id": "share_id"})
```

#### Example: Create

```python
resource_sharing_share_excluded_recipient_response_single = client.ResourceSharingShareExcludedRecipientResponseSingle().create({
    "account_id": "example_account_id",  # str
    "share_id": "example_share_id",  # str
    "errors": [],  # list
    "success": True,  # bool
})
```


### ResourceSharingShareRecipientResponseCollection

Create an instance: `resource_sharing_share_recipient_response_collection = client.ResourceSharingShareRecipientResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
resource_sharing_share_recipient_response_collections = client.ResourceSharingShareRecipientResponseCollection().list({"account_id": "example", "share_id": "example"})
```


### ResourceSharingShareRecipientResponseSingle

Create an instance: `resource_sharing_share_recipient_response_single = client.ResourceSharingShareRecipientResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `str` | Deprecated alias for `recipient_account_id`. |
| `errors` | `list` |  |
| `organization_id` | `str` | Organization identifier. |
| `recipient_account_id` | `str` | The account that will receive the share. |
| `result` | `Any` | A recipient of a share. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
resource_sharing_share_recipient_response_single = client.ResourceSharingShareRecipientResponseSingle().load({"account_id": "account_id", "recipient_id": "recipient_id", "share_id": "share_id"})
```

#### Example: Create

```python
resource_sharing_share_recipient_response_single = client.ResourceSharingShareRecipientResponseSingle().create({
    "account_id": "example_account_id",  # str
    "share_id": "example_share_id",  # str
    "errors": [],  # list
    "success": True,  # bool
})
```


### ResourceSharingShareResponseCollection

Create an instance: `resource_sharing_share_response_collection = client.ResourceSharingShareResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
resource_sharing_share_response_collections = client.ResourceSharingShareResponseCollection().list({"account_id": "example"})
```


### ResourceSharingShareResponseSingle

Create an instance: `resource_sharing_share_response_single = client.ResourceSharingShareResponseSingle()`

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
| `errors` | `list` |  |
| `name` | `str` | The name of the share. |
| `recipients` | `list` |  |
| `resources` | `list` |  |
| `result` | `Any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
resource_sharing_share_response_single = client.ResourceSharingShareResponseSingle().load({"account_id": "account_id", "share_id": "share_id"})
```

#### Example: Create

```python
resource_sharing_share_response_single = client.ResourceSharingShareResponseSingle().create({
    "account_id": "example_account_id",  # str
    "errors": [],  # list
    "name": "example_name",  # str
    "recipients": [],  # list
    "resources": [],  # list
    "success": True,  # bool
})
```


### ScimDiscovery

Create an instance: `scim_discovery = client.ScimDiscovery()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
scim_discovery = client.ScimDiscovery().load({"account_id": "account_id"})
```


### ScimGroup

Create an instance: `scim_group = client.ScimGroup()`

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
| `id` | `str` |  |

#### Example: Load

```python
scim_group = client.ScimGroup().load({"id": "scim_group_id", "account_id": "account_id"})
```

#### Example: Create

```python
scim_group = client.ScimGroup().create({
    "account_id": "example_account_id",  # str
})
```


### ScimUser

Create an instance: `scim_user = client.ScimUser()`

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
| `id` | `str` |  |

#### Example: Load

```python
scim_user = client.ScimUser().load({"id": "scim_user_id", "account_id": "account_id"})
```

#### Example: Create

```python
scim_user = client.ScimUser().create({
    "account_id": "example_account_id",  # str
})
```


### SsoConnector

Create an instance: `sso_connector = client.SsoConnector()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Tenant

Create an instance: `tenant = client.Tenant()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` |  |

#### Example: Load

```python
tenant = client.Tenant().load({"id": "tenant_id"})
```

#### Example: List

```python
tenants = client.Tenant().list({"id": "example_id"})
```


### Token

Create an instance: `token = client.Token()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### User

Create an instance: `user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Example: List

```python
users = client.User().list()
```


### UserGroup

Create an instance: `user_group = client.UserGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### UsersAccountMembership

Create an instance: `users_account_membership = client.UsersAccountMembership()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### UsersOrganization

Create an instance: `users_organization = client.UsersOrganization()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── cloudflareidentity_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`cloudflareidentity_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
accountusergroupmember = client.AccountUserGroupMember()
accountusergroupmember.list()

# accountusergroupmember.data_get() now returns the accountusergroupmember data from the last list
# accountusergroupmember.match_get() returns the last match criteria
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
