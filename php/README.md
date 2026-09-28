# CloudflareIdentity PHP SDK



The PHP SDK for the CloudflareIdentity API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->AaaAuditLogsV2OrgHistoryResponseCollection()` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-identity-sdk/releases](https://github.com/voxgig-sdk/cloudflare-identity-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'cloudflareidentity_sdk.php';

$client = new CloudflareIdentitySDK([
    "apikey" => getenv("CLOUDFLARE_IDENTITY_APIKEY"),
]);
```

### 2. List aaaauditlogsv2orghistoryresponsecollection records

```php
try {
    // list() returns entity instances; data_get() reads each record.
    $aaaauditlogsv2orghistoryresponsecollections = $client->AaaAuditLogsV2OrgHistoryResponseCollection()->list();
    foreach ($aaaauditlogsv2orghistoryresponsecollections as $record) {
        $item = $record->data_get();
        echo $item["errors"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load an accountresourcegroup

AccountResourceGroup is nested under account, so provide the `account_id`.

```php
try {
    // load() returns the ENTITY — call data_get() for the AccountResourceGroup record (throws on error).
    $accountresourcegroup = $client->AccountResourceGroup()->load(["account_id" => "example_account_id", "id" => "example_id"]);
    print_r($accountresourcegroup->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $accountusergroupmembers = $client->AccountUserGroupMember()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = CloudflareIdentitySDK::test([
    "entity" => ["iamsingleinvite" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$iamsingleinvite = $client->IamSingleInvite()->load(["id" => "test01"]);
print_r($iamsingleinvite->data_get());
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new CloudflareIdentitySDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE
CLOUDFLARE_IDENTITY_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### CloudflareIdentitySDK

```php
require_once 'cloudflareidentity_sdk.php';
$client = new CloudflareIdentitySDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = CloudflareIdentitySDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### CloudflareIdentitySDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `AaaAuditLogsV2OrgHistoryResponseCollection` | `($data): AaaAuditLogsV2OrgHistoryResponseCollectionEntity` | Create an AaaAuditLogsV2OrgHistoryResponseCollection entity instance. |
| `AaaAuditLogsV2OrgResponseCollection` | `($data): AaaAuditLogsV2OrgResponseCollectionEntity` | Create an AaaAuditLogsV2OrgResponseCollection entity instance. |
| `Account` | `($data): AccountEntity` | Create an Account entity instance. |
| `AccountResourceGroup` | `($data): AccountResourceGroupEntity` | Create an AccountResourceGroup entity instance. |
| `AccountUserGroup` | `($data): AccountUserGroupEntity` | Create an AccountUserGroup entity instance. |
| `AccountUserGroupMember` | `($data): AccountUserGroupMemberEntity` | Create an AccountUserGroupMember entity instance. |
| `BeginVerification` | `($data): BeginVerificationEntity` | Create a BeginVerification entity instance. |
| `BillSubsApiClientSecretResponseSingle` | `($data): BillSubsApiClientSecretResponseSingleEntity` | Create a BillSubsApiClientSecretResponseSingle entity instance. |
| `BillableUsageApiV2Usage` | `($data): BillableUsageApiV2UsageEntity` | Create a BillableUsageApiV2Usage entity instance. |
| `DnsCustomNameserversEmptyResponse3` | `($data): DnsCustomNameserversEmptyResponse3Entity` | Create a DnsCustomNameserversEmptyResponse3 entity instance. |
| `DnsCustomNameserversTcnsResponseCollection` | `($data): DnsCustomNameserversTcnsResponseCollectionEntity` | Create a DnsCustomNameserversTcnsResponseCollection entity instance. |
| `DnsCustomNameserversTcnsResponseSingle` | `($data): DnsCustomNameserversTcnsResponseSingleEntity` | Create a DnsCustomNameserversTcnsResponseSingle entity instance. |
| `IamApiResponseSingleId` | `($data): IamApiResponseSingleIdEntity` | Create an IamApiResponseSingleId entity instance. |
| `IamCollectionMemberResponseWithPolicy` | `($data): IamCollectionMemberResponseWithPolicyEntity` | Create an IamCollectionMemberResponseWithPolicy entity instance. |
| `IamCollectionOauthClient` | `($data): IamCollectionOauthClientEntity` | Create an IamCollectionOauthClient entity instance. |
| `IamCollectionOauthScope` | `($data): IamCollectionOauthScopeEntity` | Create an IamCollectionOauthScope entity instance. |
| `IamCollectionOrganization` | `($data): IamCollectionOrganizationEntity` | Create an IamCollectionOrganization entity instance. |
| `IamCollectionPermissionGroup` | `($data): IamCollectionPermissionGroupEntity` | Create an IamCollectionPermissionGroup entity instance. |
| `IamCollectionRole` | `($data): IamCollectionRoleEntity` | Create an IamCollectionRole entity instance. |
| `IamCollectionToken` | `($data): IamCollectionTokenEntity` | Create an IamCollectionToken entity instance. |
| `IamOauthClientRotateSecret` | `($data): IamOauthClientRotateSecretEntity` | Create an IamOauthClientRotateSecret entity instance. |
| `IamPermissionsGroupResponseCollection` | `($data): IamPermissionsGroupResponseCollectionEntity` | Create an IamPermissionsGroupResponseCollection entity instance. |
| `IamResponseSingleValue` | `($data): IamResponseSingleValueEntity` | Create an IamResponseSingleValue entity instance. |
| `IamSchemasCollectionInvite` | `($data): IamSchemasCollectionInviteEntity` | Create an IamSchemasCollectionInvite entity instance. |
| `IamSingleInvite` | `($data): IamSingleInviteEntity` | Create an IamSingleInvite entity instance. |
| `IamSingleMemberResponseWithPolicy` | `($data): IamSingleMemberResponseWithPolicyEntity` | Create an IamSingleMemberResponseWithPolicy entity instance. |
| `IamSingleMembershipResponseWithPolicy` | `($data): IamSingleMembershipResponseWithPolicyEntity` | Create an IamSingleMembershipResponseWithPolicy entity instance. |
| `IamSingleOauthClient` | `($data): IamSingleOauthClientEntity` | Create an IamSingleOauthClient entity instance. |
| `IamSingleOauthClientCreate` | `($data): IamSingleOauthClientCreateEntity` | Create an IamSingleOauthClientCreate entity instance. |
| `IamSingleOrganization` | `($data): IamSingleOrganizationEntity` | Create an IamSingleOrganization entity instance. |
| `IamSinglePermissionGroup` | `($data): IamSinglePermissionGroupEntity` | Create an IamSinglePermissionGroup entity instance. |
| `IamSingleRole` | `($data): IamSingleRoleEntity` | Create an IamSingleRole entity instance. |
| `IamSingleToken` | `($data): IamSingleTokenEntity` | Create an IamSingleToken entity instance. |
| `IamSingleTokenCreate` | `($data): IamSingleTokenCreateEntity` | Create an IamSingleTokenCreate entity instance. |
| `IamSsoConnector` | `($data): IamSsoConnectorEntity` | Create an IamSsoConnector entity instance. |
| `IamSsoConnectorCollection` | `($data): IamSsoConnectorCollectionEntity` | Create an IamSsoConnectorCollection entity instance. |
| `IamTokenVerifyResponseSingleSegment` | `($data): IamTokenVerifyResponseSingleSegmentEntity` | Create an IamTokenVerifyResponseSingleSegment entity instance. |
| `Member` | `($data): MemberEntity` | Create a Member entity instance. |
| `OauthClient` | `($data): OauthClientEntity` | Create an OauthClient entity instance. |
| `Organization` | `($data): OrganizationEntity` | Create an Organization entity instance. |
| `OrganizationMember` | `($data): OrganizationMemberEntity` | Create an OrganizationMember entity instance. |
| `OrganizationsApiProfile` | `($data): OrganizationsApiProfileEntity` | Create an OrganizationsApiProfile entity instance. |
| `Resource` | `($data): ResourceEntity` | Create a Resource entity instance. |
| `ResourceGroup` | `($data): ResourceGroupEntity` | Create a ResourceGroup entity instance. |
| `ResourceSharing` | `($data): ResourceSharingEntity` | Create a ResourceSharing entity instance. |
| `ResourceSharingShareExcludedRecipientResponseCollection` | `($data): ResourceSharingShareExcludedRecipientResponseCollectionEntity` | Create a ResourceSharingShareExcludedRecipientResponseCollection entity instance. |
| `ResourceSharingShareExcludedRecipientResponseSingle` | `($data): ResourceSharingShareExcludedRecipientResponseSingleEntity` | Create a ResourceSharingShareExcludedRecipientResponseSingle entity instance. |
| `ResourceSharingShareRecipientResponseCollection` | `($data): ResourceSharingShareRecipientResponseCollectionEntity` | Create a ResourceSharingShareRecipientResponseCollection entity instance. |
| `ResourceSharingShareRecipientResponseSingle` | `($data): ResourceSharingShareRecipientResponseSingleEntity` | Create a ResourceSharingShareRecipientResponseSingle entity instance. |
| `ResourceSharingShareResponseCollection` | `($data): ResourceSharingShareResponseCollectionEntity` | Create a ResourceSharingShareResponseCollection entity instance. |
| `ResourceSharingShareResponseSingle` | `($data): ResourceSharingShareResponseSingleEntity` | Create a ResourceSharingShareResponseSingle entity instance. |
| `ScimDiscovery` | `($data): ScimDiscoveryEntity` | Create a ScimDiscovery entity instance. |
| `ScimGroup` | `($data): ScimGroupEntity` | Create a ScimGroup entity instance. |
| `ScimUser` | `($data): ScimUserEntity` | Create a ScimUser entity instance. |
| `SsoConnector` | `($data): SsoConnectorEntity` | Create a SsoConnector entity instance. |
| `Tenant` | `($data): TenantEntity` | Create a Tenant entity instance. |
| `Token` | `($data): TokenEntity` | Create a Token entity instance. |
| `User` | `($data): UserEntity` | Create an User entity instance. |
| `UserGroup` | `($data): UserGroupEntity` | Create an UserGroup entity instance. |
| `UsersAccountMembership` | `($data): UsersAccountMembershipEntity` | Create an UsersAccountMembership entity instance. |
| `UsersOrganization` | `($data): UsersOrganizationEntity` | Create an UsersOrganization entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$aaa_audit_logs_v2_org_history_response_collection = $client->AaaAuditLogsV2OrgHistoryResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `bool` | Indicates whether the API call was successful |

#### Example: List

```php
// list() returns an array of AaaAuditLogsV2OrgHistoryResponseCollection records (throws on error).
$aaa_audit_logs_v2_org_history_response_collections = $client->AaaAuditLogsV2OrgHistoryResponseCollection()->list();
```


### AaaAuditLogsV2OrgResponseCollection

Create an instance: `$aaa_audit_logs_v2_org_response_collection = $client->AaaAuditLogsV2OrgResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` | Provides information about the result of the request, including count and cursor. |
| `success` | `bool` | Indicates whether the API call was successful |

#### Example: List

```php
// list() returns an array of AaaAuditLogsV2OrgResponseCollection records (throws on error).
$aaa_audit_logs_v2_org_response_collections = $client->AaaAuditLogsV2OrgResponseCollection()->list();
```


### Account

Create an instance: `$account = $client->Account();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```php
// list() returns an array of Account records (throws on error).
$accounts = $client->Account()->list();
```


### AccountResourceGroup

Create an instance: `$account_resource_group = $client->AccountResourceGroup();`

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
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `name` | `string` | Name of the resource group |
| `result` | `array` | A group of scoped resources. |
| `scope` | `array` | A scope is a combination of scope objects which provides additional context. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AccountResourceGroup record (throws on error).
$account_resource_group = $client->AccountResourceGroup()->load(["id" => "account_resource_group_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of AccountResourceGroup records (throws on error).
$account_resource_groups = $client->AccountResourceGroup()->list();
```

#### Example: Create

```php
$account_resource_group = $client->AccountResourceGroup()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "name" => null, // string
    "result" => null, // array
    "scope" => null, // array
    "success" => null, // bool
]);
```


### AccountUserGroup

Create an instance: `$account_user_group = $client->AccountUserGroup();`

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
| `policies` | `array` | Policies attached to the User group |
| `result` | `array` | A group of policies resources. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AccountUserGroup record (throws on error).
$account_user_group = $client->AccountUserGroup()->load(["id" => "account_user_group_id", "account_id" => "account_id"]);
```

#### Example: List

```php
// list() returns an array of AccountUserGroup records (throws on error).
$account_user_groups = $client->AccountUserGroup()->list();
```

#### Example: Create

```php
$account_user_group = $client->AccountUserGroup()->create([
    "account_id" => null, // string
    "name" => null, // string
    "result" => null, // array
]);
```


### AccountUserGroupMember

Create an instance: `$account_user_group_member = $client->AccountUserGroupMember();`

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
| `result` | `array` | Detailed member information for a User Group member. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AccountUserGroupMember record (throws on error).
$account_user_group_member = $client->AccountUserGroupMember()->load(["id" => "account_user_group_member_id", "account_id" => "account_id", "user_group_id" => "user_group_id"]);
```

#### Example: List

```php
// list() returns an array of AccountUserGroupMember records (throws on error).
$account_user_group_members = $client->AccountUserGroupMember()->list();
```

#### Example: Create

```php
$account_user_group_member = $client->AccountUserGroupMember()->create([
    "account_id" => null, // string
    "user_group_id" => null, // string
    "result" => null, // array
]);
```


### BeginVerification

Create an instance: `$begin_verification = $client->BeginVerification();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Create

```php
$begin_verification = $client->BeginVerification()->create([
    "account_id" => null, // string
    "sso_connector_id" => null, // string
    "errors" => null, // array
    "messages" => null, // array
    "success" => null, // bool
]);
```


### BillSubsApiClientSecretResponseSingle

Create an instance: `$bill_subs_api_client_secret_response_single = $client->BillSubsApiClientSecretResponseSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: Create

```php
$bill_subs_api_client_secret_response_single = $client->BillSubsApiClientSecretResponseSingle()->create([
    "account_id" => null, // string
]);
```


### BillableUsageApiV2Usage

Create an instance: `$billable_usage_api_v2_usage = $client->BillableUsageApiV2Usage();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` | Contains error details if the request failed. |
| `messages` | `array` | Contains informational notices about the response. |
| `result` | `array` | Contains the array of cost and usage records. |
| `success` | `bool` | Indicates whether the API call was successful. |

#### Example: List

```php
// list() returns an array of BillableUsageApiV2Usage records (throws on error).
$billable_usage_api_v2_usages = $client->BillableUsageApiV2Usage()->list();
```


### DnsCustomNameserversEmptyResponse3

Create an instance: `$dns_custom_nameservers_empty_response_3 = $client->DnsCustomNameserversEmptyResponse3();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### DnsCustomNameserversTcnsResponseCollection

Create an instance: `$dns_custom_nameservers_tcns_response_collection = $client->DnsCustomNameserversTcnsResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of DnsCustomNameserversTcnsResponseCollection records (throws on error).
$dns_custom_nameservers_tcns_response_collections = $client->DnsCustomNameserversTcnsResponseCollection()->list();
```


### DnsCustomNameserversTcnsResponseSingle

Create an instance: `$dns_custom_nameservers_tcns_response_single = $client->DnsCustomNameserversTcnsResponseSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ns_name` | `string` | The FQDN of the name server. |
| `ns_set` | `float` | The number of the set that this name server belongs to. |

#### Example: Create

```php
$dns_custom_nameservers_tcns_response_single = $client->DnsCustomNameserversTcnsResponseSingle()->create([
    "tenant_tag" => null, // string
    "ns_name" => null, // string
]);
```


### IamApiResponseSingleId

Create an instance: `$iam_api_response_single_id = $client->IamApiResponseSingleId();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### IamCollectionMemberResponseWithPolicy

Create an instance: `$iam_collection_member_response_with_policy = $client->IamCollectionMemberResponseWithPolicy();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of IamCollectionMemberResponseWithPolicy records (throws on error).
$iam_collection_member_response_with_policys = $client->IamCollectionMemberResponseWithPolicy()->list();
```


### IamCollectionOauthClient

Create an instance: `$iam_collection_oauth_client = $client->IamCollectionOauthClient();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of IamCollectionOauthClient records (throws on error).
$iam_collection_oauth_clients = $client->IamCollectionOauthClient()->list();
```


### IamCollectionOauthScope

Create an instance: `$iam_collection_oauth_scope = $client->IamCollectionOauthScope();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of IamCollectionOauthScope records (throws on error).
$iam_collection_oauth_scopes = $client->IamCollectionOauthScope()->list();
```


### IamCollectionOrganization

Create an instance: `$iam_collection_organization = $client->IamCollectionOrganization();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of IamCollectionOrganization records (throws on error).
$iam_collection_organizations = $client->IamCollectionOrganization()->list();
```


### IamCollectionPermissionGroup

Create an instance: `$iam_collection_permission_group = $client->IamCollectionPermissionGroup();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` | A set of permission groups that are specified to the policy. |

#### Example: List

```php
// list() returns an array of IamCollectionPermissionGroup records (throws on error).
$iam_collection_permission_groups = $client->IamCollectionPermissionGroup()->list();
```


### IamCollectionRole

Create an instance: `$iam_collection_role = $client->IamCollectionRole();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of IamCollectionRole records (throws on error).
$iam_collection_roles = $client->IamCollectionRole()->list();
```


### IamCollectionToken

Create an instance: `$iam_collection_token = $client->IamCollectionToken();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of IamCollectionToken records (throws on error).
$iam_collection_tokens = $client->IamCollectionToken()->list();
```


### IamOauthClientRotateSecret

Create an instance: `$iam_oauth_client_rotate_secret = $client->IamOauthClientRotateSecret();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: Create

```php
$iam_oauth_client_rotate_secret = $client->IamOauthClientRotateSecret()->create([
    "account_id" => null, // string
    "oauth_client_id" => null, // string
]);
```


### IamPermissionsGroupResponseCollection

Create an instance: `$iam_permissions_group_response_collection = $client->IamPermissionsGroupResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of IamPermissionsGroupResponseCollection records (throws on error).
$iam_permissions_group_response_collections = $client->IamPermissionsGroupResponseCollection()->list();
```


### IamResponseSingleValue

Create an instance: `$iam_response_single_value = $client->IamResponseSingleValue();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `string` | The token value. |


### IamSchemasCollectionInvite

Create an instance: `$iam_schemas_collection_invite = $client->IamSchemasCollectionInvite();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of IamSchemasCollectionInvite records (throws on error).
$iam_schemas_collection_invites = $client->IamSchemasCollectionInvite()->list();
```


### IamSingleInvite

Create an instance: `$iam_single_invite = $client->IamSingleInvite();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `array` |  |
| `status` | `mixed` | Status of your response to the invitation (rejected or accepted). |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the IamSingleInvite record (throws on error).
$iam_single_invite = $client->IamSingleInvite()->load(["id" => "iam_single_invite_id"]);
```


### IamSingleMemberResponseWithPolicy

Create an instance: `$iam_single_member_response_with_policy = $client->IamSingleMemberResponseWithPolicy();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the IamSingleMemberResponseWithPolicy record (throws on error).
$iam_single_member_response_with_policy = $client->IamSingleMemberResponseWithPolicy()->load(["account_id" => "account_id", "member_id" => "member_id"]);
```

#### Example: Create

```php
$iam_single_member_response_with_policy = $client->IamSingleMemberResponseWithPolicy()->create([
    "account_id" => null, // string
]);
```


### IamSingleMembershipResponseWithPolicy

Create an instance: `$iam_single_membership_response_with_policy = $client->IamSingleMembershipResponseWithPolicy();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |
| `status` | `mixed` | Whether to accept or reject this account invitation. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the IamSingleMembershipResponseWithPolicy record (throws on error).
$iam_single_membership_response_with_policy = $client->IamSingleMembershipResponseWithPolicy()->load(["membership_id" => "membership_id"]);
```


### IamSingleOauthClient

Create an instance: `$iam_single_oauth_client = $client->IamSingleOauthClient();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `mixed` | An OAuth 2.0 client registration. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the IamSingleOauthClient record (throws on error).
$iam_single_oauth_client = $client->IamSingleOauthClient()->load(["id" => "iam_single_oauth_client_id", "account_id" => "account_id"]);
```


### IamSingleOauthClientCreate

Create an instance: `$iam_single_oauth_client_create = $client->IamSingleOauthClientCreate();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$iam_single_oauth_client_create = $client->IamSingleOauthClientCreate()->create([
    "account_id" => null, // string
]);
```


### IamSingleOrganization

Create an instance: `$iam_single_organization = $client->IamSingleOrganization();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the IamSingleOrganization record (throws on error).
$iam_single_organization = $client->IamSingleOrganization()->load(["id" => "iam_single_organization_id"]);
```


### IamSinglePermissionGroup

Create an instance: `$iam_single_permission_group = $client->IamSinglePermissionGroup();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `array` | A named group of permissions that map to a group of operations against resources. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the IamSinglePermissionGroup record (throws on error).
$iam_single_permission_group = $client->IamSinglePermissionGroup()->load(["id" => "iam_single_permission_group_id", "account_id" => "account_id"]);
```


### IamSingleRole

Create an instance: `$iam_single_role = $client->IamSingleRole();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the IamSingleRole record (throws on error).
$iam_single_role = $client->IamSingleRole()->load(["id" => "iam_single_role_id", "account_id" => "account_id"]);
```


### IamSingleToken

Create an instance: `$iam_single_token = $client->IamSingleToken();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the IamSingleToken record (throws on error).
$iam_single_token = $client->IamSingleToken()->load(["id" => "iam_single_token_id"]);
```


### IamSingleTokenCreate

Create an instance: `$iam_single_token_create = $client->IamSingleTokenCreate();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condition` | `array` |  |
| `expires_on` | `string` | The expiration time on or after which the JWT MUST NOT be accepted for processing. |
| `name` | `string` | Token name. |
| `not_before` | `string` | The time before which the token MUST NOT be accepted for processing. |
| `policies` | `array` | List of access policies assigned to the token. |

#### Example: Create

```php
$iam_single_token_create = $client->IamSingleTokenCreate()->create([
    "name" => null, // string
    "policies" => null, // array
]);
```


### IamSsoConnector

Create an instance: `$iam_sso_connector = $client->IamSsoConnector();`

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
| `email_domain` | `string` | Email domain of the new SSO connector |
| `enabled` | `bool` | SSO Connector enabled state |
| `id` | `string` |  |
| `result` | `array` |  |
| `use_fedramp_language` | `bool` | Controls the display of FedRAMP language to the user during SSO login |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the IamSsoConnector record (throws on error).
$iam_sso_connector = $client->IamSsoConnector()->load(["id" => "iam_sso_connector_id", "account_id" => "account_id"]);
```

#### Example: Create

```php
$iam_sso_connector = $client->IamSsoConnector()->create([
    "account_id" => null, // string
    "email_domain" => null, // string
]);
```


### IamSsoConnectorCollection

Create an instance: `$iam_sso_connector_collection = $client->IamSsoConnectorCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of IamSsoConnectorCollection records (throws on error).
$iam_sso_connector_collections = $client->IamSsoConnectorCollection()->list();
```


### IamTokenVerifyResponseSingleSegment

Create an instance: `$iam_token_verify_response_single_segment = $client->IamTokenVerifyResponseSingleSegment();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the IamTokenVerifyResponseSingleSegment record (throws on error).
$iam_token_verify_response_single_segment = $client->IamTokenVerifyResponseSingleSegment()->load();
```


### Member

Create an instance: `$member = $client->Member();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### OauthClient

Create an instance: `$oauth_client = $client->OauthClient();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Organization

Create an instance: `$organization = $client->Organization();`

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
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `meta` | `array` |  |
| `name` | `string` |  |
| `parent` | `array` |  |
| `profile` | `array` |  |
| `result` | `array` | References an Organization in the Cloudflare data model. |
| `result_info` | `array` |  |
| `status` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Organization record (throws on error).
$organization = $client->Organization()->load(["id" => "organization_id"]);
```

#### Example: List

```php
// list() returns an array of Organization records (throws on error).
$organizations = $client->Organization()->list();
```

#### Example: Create

```php
$organization = $client->Organization()->create([
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


### OrganizationMember

Create an instance: `$organization_member = $client->OrganizationMember();`

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
| `errors` | `array` |  |
| `id` | `string` |  |
| `member` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `result_info` | `array` |  |
| `success` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the OrganizationMember record (throws on error).
$organization_member = $client->OrganizationMember()->load(["id" => "organization_member_id", "organization_id" => "organization_id"]);
```

#### Example: List

```php
// list() returns an array of OrganizationMember records (throws on error).
$organization_members = $client->OrganizationMember()->list();
```

#### Example: Create

```php
$organization_member = $client->OrganizationMember()->create([
    "id" => null, // string
    "errors" => null, // array
    "member" => null, // array
    "messages" => null, // array
    "result" => null, // array
    "result_info" => null, // array
    "success" => null, // bool
]);
```


### OrganizationsApiProfile

Create an instance: `$organizations_api_profile = $client->OrganizationsApiProfile();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `int` |  |
| `message` | `string` |  |

#### Example: List

```php
// list() returns an array of OrganizationsApiProfile records (throws on error).
$organizations_api_profiles = $client->OrganizationsApiProfile()->list();
```


### Resource

Create an instance: `$resource = $client->Resource();`

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
| `errors` | `array` |  |
| `id` | `string` |  |
| `meta` | `array` | Resource Metadata. |
| `resource_account_id` | `string` | Account identifier. |
| `resource_id` | `string` | Share Resource identifier. |
| `resource_type` | `string` | Resource Type. |
| `result` | `mixed` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Resource record (throws on error).
$resource = $client->Resource()->load(["id" => "resource_id", "account_id" => "account_id", "share_id" => "share_id"]);
```

#### Example: List

```php
// list() returns an array of Resource records (throws on error).
$resources = $client->Resource()->list();
```

#### Example: Create

```php
$resource = $client->Resource()->create([
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


### ResourceGroup

Create an instance: `$resource_group = $client->ResourceGroup();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### ResourceSharing

Create an instance: `$resource_sharing = $client->ResourceSharing();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ResourceSharingShareExcludedRecipientResponseCollection

Create an instance: `$resource_sharing_share_excluded_recipient_response_collection = $client->ResourceSharingShareExcludedRecipientResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of ResourceSharingShareExcludedRecipientResponseCollection records (throws on error).
$resource_sharing_share_excluded_recipient_response_collections = $client->ResourceSharingShareExcludedRecipientResponseCollection()->list();
```


### ResourceSharingShareExcludedRecipientResponseSingle

Create an instance: `$resource_sharing_share_excluded_recipient_response_single = $client->ResourceSharingShareExcludedRecipientResponseSingle();`

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
| `errors` | `array` |  |
| `result` | `mixed` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ResourceSharingShareExcludedRecipientResponseSingle record (throws on error).
$resource_sharing_share_excluded_recipient_response_single = $client->ResourceSharingShareExcludedRecipientResponseSingle()->load(["account_id" => "account_id", "excluded_recipient_id" => "excluded_recipient_id", "share_id" => "share_id"]);
```

#### Example: Create

```php
$resource_sharing_share_excluded_recipient_response_single = $client->ResourceSharingShareExcludedRecipientResponseSingle()->create([
    "account_id" => null, // string
    "share_id" => null, // string
    "errors" => null, // array
    "success" => null, // bool
]);
```


### ResourceSharingShareRecipientResponseCollection

Create an instance: `$resource_sharing_share_recipient_response_collection = $client->ResourceSharingShareRecipientResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of ResourceSharingShareRecipientResponseCollection records (throws on error).
$resource_sharing_share_recipient_response_collections = $client->ResourceSharingShareRecipientResponseCollection()->list();
```


### ResourceSharingShareRecipientResponseSingle

Create an instance: `$resource_sharing_share_recipient_response_single = $client->ResourceSharingShareRecipientResponseSingle();`

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
| `errors` | `array` |  |
| `organization_id` | `string` | Organization identifier. |
| `recipient_account_id` | `string` | The account that will receive the share. |
| `result` | `mixed` | A recipient of a share. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ResourceSharingShareRecipientResponseSingle record (throws on error).
$resource_sharing_share_recipient_response_single = $client->ResourceSharingShareRecipientResponseSingle()->load(["account_id" => "account_id", "recipient_id" => "recipient_id", "share_id" => "share_id"]);
```

#### Example: Create

```php
$resource_sharing_share_recipient_response_single = $client->ResourceSharingShareRecipientResponseSingle()->create([
    "account_id" => null, // string
    "share_id" => null, // string
    "errors" => null, // array
    "success" => null, // bool
]);
```


### ResourceSharingShareResponseCollection

Create an instance: `$resource_sharing_share_response_collection = $client->ResourceSharingShareResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `array` |  |

#### Example: List

```php
// list() returns an array of ResourceSharingShareResponseCollection records (throws on error).
$resource_sharing_share_response_collections = $client->ResourceSharingShareResponseCollection()->list();
```


### ResourceSharingShareResponseSingle

Create an instance: `$resource_sharing_share_response_single = $client->ResourceSharingShareResponseSingle();`

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
| `errors` | `array` |  |
| `name` | `string` | The name of the share. |
| `recipients` | `array` |  |
| `resources` | `array` |  |
| `result` | `mixed` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ResourceSharingShareResponseSingle record (throws on error).
$resource_sharing_share_response_single = $client->ResourceSharingShareResponseSingle()->load(["account_id" => "account_id", "share_id" => "share_id"]);
```

#### Example: Create

```php
$resource_sharing_share_response_single = $client->ResourceSharingShareResponseSingle()->create([
    "account_id" => null, // string
    "errors" => null, // array
    "name" => null, // string
    "recipients" => null, // array
    "resources" => null, // array
    "success" => null, // bool
]);
```


### ScimDiscovery

Create an instance: `$scim_discovery = $client->ScimDiscovery();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ScimDiscovery record (throws on error).
$scim_discovery = $client->ScimDiscovery()->load(["account_id" => "account_id"]);
```


### ScimGroup

Create an instance: `$scim_group = $client->ScimGroup();`

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

```php
// load() returns the ENTITY — call data_get() for the ScimGroup record (throws on error).
$scim_group = $client->ScimGroup()->load(["id" => "scim_group_id", "account_id" => "account_id"]);
```

#### Example: Create

```php
$scim_group = $client->ScimGroup()->create([
    "account_id" => null, // string
]);
```


### ScimUser

Create an instance: `$scim_user = $client->ScimUser();`

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

```php
// load() returns the ENTITY — call data_get() for the ScimUser record (throws on error).
$scim_user = $client->ScimUser()->load(["id" => "scim_user_id", "account_id" => "account_id"]);
```

#### Example: Create

```php
$scim_user = $client->ScimUser()->create([
    "account_id" => null, // string
]);
```


### SsoConnector

Create an instance: `$sso_connector = $client->SsoConnector();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Tenant

Create an instance: `$tenant = $client->Tenant();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Tenant record (throws on error).
$tenant = $client->Tenant()->load(["id" => "tenant_id"]);
```

#### Example: List

```php
// list() returns an array of Tenant records (throws on error).
$tenants = $client->Tenant()->list();
```


### Token

Create an instance: `$token = $client->Token();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### User

Create an instance: `$user = $client->User();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```php
// list() returns an array of User records (throws on error).
$users = $client->User()->list();
```


### UserGroup

Create an instance: `$user_group = $client->UserGroup();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### UsersAccountMembership

Create an instance: `$users_account_membership = $client->UsersAccountMembership();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### UsersOrganization

Create an instance: `$users_organization = $client->UsersOrganization();`

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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── cloudflareidentity_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`cloudflareidentity_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$accountusergroupmember = $client->AccountUserGroupMember();
$accountusergroupmember->list();

// $accountusergroupmember->data_get() now returns the accountusergroupmember data from the last list
// $accountusergroupmember->match_get() returns the last match criteria
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
