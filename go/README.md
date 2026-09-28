# CloudflareIdentity Golang SDK



The Golang SDK for the CloudflareIdentity API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.AaaAuditLogsV2OrgHistoryResponseCollection(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`, `Patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/cloudflare-identity-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/cloudflare-identity-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/cloudflare-identity-sdk/go=../cloudflare-identity-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/cloudflare-identity-sdk/go"
)

func main() {
    client := sdk.NewCloudflareIdentitySDK(map[string]any{
        "apikey": os.Getenv("CLOUDFLARE_IDENTITY_APIKEY"),
    })

    // List aaaAuditLogsV2OrgHistoryResponseCollection records — the value is the array of records itself.
    aaaAuditLogsV2OrgHistoryResponseCollections, err := client.AaaAuditLogsV2OrgHistoryResponseCollection(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range aaaAuditLogsV2OrgHistoryResponseCollections.([]any) {
        fmt.Println(item)
    }
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
accountusergroupmembers, err := client.AccountUserGroupMember(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = accountusergroupmembers
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

accountUserGroupMember, err := client.AccountUserGroupMember(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(accountUserGroupMember) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewCloudflareIdentitySDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewCloudflareIdentitySDK

```go
func NewCloudflareIdentitySDK(options map[string]any) *CloudflareIdentitySDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareIdentitySDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareIdentitySDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `AaaAuditLogsV2OrgHistoryResponseCollection` | `(data map[string]any) CloudflareIdentityEntity` | Create an AaaAuditLogsV2OrgHistoryResponseCollection entity instance. |
| `AaaAuditLogsV2OrgResponseCollection` | `(data map[string]any) CloudflareIdentityEntity` | Create an AaaAuditLogsV2OrgResponseCollection entity instance. |
| `Account` | `(data map[string]any) CloudflareIdentityEntity` | Create an Account entity instance. |
| `AccountResourceGroup` | `(data map[string]any) CloudflareIdentityEntity` | Create an AccountResourceGroup entity instance. |
| `AccountUserGroup` | `(data map[string]any) CloudflareIdentityEntity` | Create an AccountUserGroup entity instance. |
| `AccountUserGroupMember` | `(data map[string]any) CloudflareIdentityEntity` | Create an AccountUserGroupMember entity instance. |
| `BeginVerification` | `(data map[string]any) CloudflareIdentityEntity` | Create a BeginVerification entity instance. |
| `BillSubsApiClientSecretResponseSingle` | `(data map[string]any) CloudflareIdentityEntity` | Create a BillSubsApiClientSecretResponseSingle entity instance. |
| `BillableUsageApiV2Usage` | `(data map[string]any) CloudflareIdentityEntity` | Create a BillableUsageApiV2Usage entity instance. |
| `DnsCustomNameserversEmptyResponse3` | `(data map[string]any) CloudflareIdentityEntity` | Create a DnsCustomNameserversEmptyResponse3 entity instance. |
| `DnsCustomNameserversTcnsResponseCollection` | `(data map[string]any) CloudflareIdentityEntity` | Create a DnsCustomNameserversTcnsResponseCollection entity instance. |
| `DnsCustomNameserversTcnsResponseSingle` | `(data map[string]any) CloudflareIdentityEntity` | Create a DnsCustomNameserversTcnsResponseSingle entity instance. |
| `IamApiResponseSingleId` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamApiResponseSingleId entity instance. |
| `IamCollectionMemberResponseWithPolicy` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamCollectionMemberResponseWithPolicy entity instance. |
| `IamCollectionOauthClient` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamCollectionOauthClient entity instance. |
| `IamCollectionOauthScope` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamCollectionOauthScope entity instance. |
| `IamCollectionOrganization` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamCollectionOrganization entity instance. |
| `IamCollectionPermissionGroup` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamCollectionPermissionGroup entity instance. |
| `IamCollectionRole` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamCollectionRole entity instance. |
| `IamCollectionToken` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamCollectionToken entity instance. |
| `IamOauthClientRotateSecret` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamOauthClientRotateSecret entity instance. |
| `IamPermissionsGroupResponseCollection` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamPermissionsGroupResponseCollection entity instance. |
| `IamResponseSingleValue` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamResponseSingleValue entity instance. |
| `IamSchemasCollectionInvite` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamSchemasCollectionInvite entity instance. |
| `IamSingleInvite` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamSingleInvite entity instance. |
| `IamSingleMemberResponseWithPolicy` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamSingleMemberResponseWithPolicy entity instance. |
| `IamSingleMembershipResponseWithPolicy` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamSingleMembershipResponseWithPolicy entity instance. |
| `IamSingleOauthClient` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamSingleOauthClient entity instance. |
| `IamSingleOauthClientCreate` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamSingleOauthClientCreate entity instance. |
| `IamSingleOrganization` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamSingleOrganization entity instance. |
| `IamSinglePermissionGroup` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamSinglePermissionGroup entity instance. |
| `IamSingleRole` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamSingleRole entity instance. |
| `IamSingleToken` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamSingleToken entity instance. |
| `IamSingleTokenCreate` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamSingleTokenCreate entity instance. |
| `IamSsoConnector` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamSsoConnector entity instance. |
| `IamSsoConnectorCollection` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamSsoConnectorCollection entity instance. |
| `IamTokenVerifyResponseSingleSegment` | `(data map[string]any) CloudflareIdentityEntity` | Create an IamTokenVerifyResponseSingleSegment entity instance. |
| `Member` | `(data map[string]any) CloudflareIdentityEntity` | Create a Member entity instance. |
| `OauthClient` | `(data map[string]any) CloudflareIdentityEntity` | Create an OauthClient entity instance. |
| `Organization` | `(data map[string]any) CloudflareIdentityEntity` | Create an Organization entity instance. |
| `OrganizationMember` | `(data map[string]any) CloudflareIdentityEntity` | Create an OrganizationMember entity instance. |
| `OrganizationsApiProfile` | `(data map[string]any) CloudflareIdentityEntity` | Create an OrganizationsApiProfile entity instance. |
| `Resource` | `(data map[string]any) CloudflareIdentityEntity` | Create a Resource entity instance. |
| `ResourceGroup` | `(data map[string]any) CloudflareIdentityEntity` | Create a ResourceGroup entity instance. |
| `ResourceSharing` | `(data map[string]any) CloudflareIdentityEntity` | Create a ResourceSharing entity instance. |
| `ResourceSharingShareExcludedRecipientResponseCollection` | `(data map[string]any) CloudflareIdentityEntity` | Create a ResourceSharingShareExcludedRecipientResponseCollection entity instance. |
| `ResourceSharingShareExcludedRecipientResponseSingle` | `(data map[string]any) CloudflareIdentityEntity` | Create a ResourceSharingShareExcludedRecipientResponseSingle entity instance. |
| `ResourceSharingShareRecipientResponseCollection` | `(data map[string]any) CloudflareIdentityEntity` | Create a ResourceSharingShareRecipientResponseCollection entity instance. |
| `ResourceSharingShareRecipientResponseSingle` | `(data map[string]any) CloudflareIdentityEntity` | Create a ResourceSharingShareRecipientResponseSingle entity instance. |
| `ResourceSharingShareResponseCollection` | `(data map[string]any) CloudflareIdentityEntity` | Create a ResourceSharingShareResponseCollection entity instance. |
| `ResourceSharingShareResponseSingle` | `(data map[string]any) CloudflareIdentityEntity` | Create a ResourceSharingShareResponseSingle entity instance. |
| `ScimDiscovery` | `(data map[string]any) CloudflareIdentityEntity` | Create a ScimDiscovery entity instance. |
| `ScimGroup` | `(data map[string]any) CloudflareIdentityEntity` | Create a ScimGroup entity instance. |
| `ScimUser` | `(data map[string]any) CloudflareIdentityEntity` | Create a ScimUser entity instance. |
| `SsoConnector` | `(data map[string]any) CloudflareIdentityEntity` | Create a SsoConnector entity instance. |
| `Tenant` | `(data map[string]any) CloudflareIdentityEntity` | Create a Tenant entity instance. |
| `Token` | `(data map[string]any) CloudflareIdentityEntity` | Create a Token entity instance. |
| `User` | `(data map[string]any) CloudflareIdentityEntity` | Create an User entity instance. |
| `UserGroup` | `(data map[string]any) CloudflareIdentityEntity` | Create an UserGroup entity instance. |
| `UsersAccountMembership` | `(data map[string]any) CloudflareIdentityEntity` | Create an UsersAccountMembership entity instance. |
| `UsersOrganization` | `(data map[string]any) CloudflareIdentityEntity` | Create an UsersOrganization entity instance. |

### Entity interface (CloudflareIdentityEntity)

All entities implement the `CloudflareIdentityEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    aaaAuditLogsV2OrgHistoryResponseCollection, err := client.AaaAuditLogsV2OrgHistoryResponseCollection(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // aaaAuditLogsV2OrgHistoryResponseCollection is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### AaaAuditLogsV2OrgHistoryResponseCollection

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"result"` |  |
| `"result_info"` | Provides information about the result of the request, including count, cursor, and identification quality. |
| `"success"` | Indicates whether the API call was successful |

Operations: List.

API path: `/organizations/{organization_id}/logs/audit/{id}/history`

#### AaaAuditLogsV2OrgResponseCollection

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"result"` |  |
| `"result_info"` | Provides information about the result of the request, including count and cursor. |
| `"success"` | Indicates whether the API call was successful |

Operations: List.

API path: `/organizations/{organization_id}/logs/audit`

#### Account

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: List.

API path: `/accounts/{account_id}/organizations`

#### AccountResourceGroup

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"name"` | Name of the resource group |
| `"result"` | A group of scoped resources. |
| `"scope"` | A scope is a combination of scope objects which provides additional context. |
| `"success"` | Whether the API call was successful. |

Operations: Create, List, Load, Update.

API path: `/accounts/{account_id}/iam/resource_groups`

#### AccountUserGroup

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"name"` | Name of the User group. |
| `"policies"` | Policies attached to the User group |
| `"result"` | A group of policies resources. |

Operations: Create, List, Load, Update.

API path: `/accounts/{account_id}/iam/user_groups`

#### AccountUserGroupMember

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"result"` | Detailed member information for a User Group member. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/iam/user_groups/{user_group_id}/members`

#### BeginVerification

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"success"` | Whether the API call was successful. |

Operations: Create.

API path: `/accounts/{account_id}/sso_connectors/{sso_connector_id}/begin_verification`

#### BillSubsApiClientSecretResponseSingle

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Create.

API path: `/accounts/{account_id}/client-secret`

#### BillableUsageApiV2Usage

| Field | Description |
| --- | --- |
| `"errors"` | Contains error details if the request failed. |
| `"messages"` | Contains informational notices about the response. |
| `"result"` | Contains the array of cost and usage records. |
| `"success"` | Indicates whether the API call was successful. |

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
| `"result"` |  |

Operations: List.

API path: `/tenants/{tenant_tag}/custom_ns`

#### DnsCustomNameserversTcnsResponseSingle

| Field | Description |
| --- | --- |
| `"ns_name"` | The FQDN of the name server. |
| `"ns_set"` | The number of the set that this name server belongs to. |

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
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/members`

#### IamCollectionOauthClient

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/oauth_clients`

#### IamCollectionOauthScope

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/oauth/scopes`

#### IamCollectionOrganization

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/user/organizations`

#### IamCollectionPermissionGroup

| Field | Description |
| --- | --- |
| `"result"` | A set of permission groups that are specified to the policy. |

Operations: List.

API path: `/accounts/{account_id}/iam/permission_groups`

#### IamCollectionRole

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/roles`

#### IamCollectionToken

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/tokens`

#### IamOauthClientRotateSecret

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Create.

API path: `/accounts/{account_id}/oauth_clients/{oauth_client_id}/rotate_secret`

#### IamPermissionsGroupResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/tokens/permission_groups`

#### IamResponseSingleValue

| Field | Description |
| --- | --- |
| `"result"` | The token value. |

Operations: Update.

API path: `/accounts/{account_id}/tokens/{token_id}/value`

#### IamSchemasCollectionInvite

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/user/invites`

#### IamSingleInvite

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"result"` |  |
| `"status"` | Status of your response to the invitation (rejected or accepted). |

Operations: Load, Update.

API path: `/user/invites/{invite_id}`

#### IamSingleMemberResponseWithPolicy

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/members`

#### IamSingleMembershipResponseWithPolicy

| Field | Description |
| --- | --- |
| `"result"` |  |
| `"status"` | Whether to accept or reject this account invitation. |

Operations: Load, Update.

API path: `/memberships`

#### IamSingleOauthClient

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"result"` | An OAuth 2.0 client registration. |

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
| `"id"` |  |
| `"result"` |  |

Operations: Load.

API path: `/user/organizations/{organization_id}`

#### IamSinglePermissionGroup

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"result"` | A named group of permissions that map to a group of operations against resources. |

Operations: Load.

API path: `/accounts/{account_id}/iam/permission_groups/{permission_group_id}`

#### IamSingleRole

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"result"` |  |

Operations: Load.

API path: `/accounts/{account_id}/roles/{role_id}`

#### IamSingleToken

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"result"` |  |

Operations: Load, Update.

API path: `/accounts/{account_id}/tokens/{token_id}`

#### IamSingleTokenCreate

| Field | Description |
| --- | --- |
| `"condition"` |  |
| `"expires_on"` | The expiration time on or after which the JWT MUST NOT be accepted for processing. |
| `"name"` | Token name. |
| `"not_before"` | The time before which the token MUST NOT be accepted for processing. |
| `"policies"` | List of access policies assigned to the token. |

Operations: Create.

API path: `/accounts/{account_id}/tokens`

#### IamSsoConnector

| Field | Description |
| --- | --- |
| `"begin_verification"` | Begin the verification process after creation |
| `"email_domain"` | Email domain of the new SSO connector |
| `"enabled"` | SSO Connector enabled state |
| `"id"` |  |
| `"result"` |  |
| `"use_fedramp_language"` | Controls the display of FedRAMP language to the user during SSO login |

Operations: Create, Load, Update.

API path: `/accounts/{account_id}/sso_connectors`

#### IamSsoConnectorCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/sso_connectors`

#### IamTokenVerifyResponseSingleSegment

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load.

API path: `/accounts/{account_id}/tokens/verify`

#### Member

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/members/{member_id}`

#### OauthClient

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/oauth_clients/{oauth_client_id}`

#### Organization

| Field | Description |
| --- | --- |
| `"create_time"` |  |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"meta"` |  |
| `"name"` |  |
| `"parent"` |  |
| `"profile"` |  |
| `"result"` | References an Organization in the Cloudflare data model. |
| `"result_info"` |  |
| `"status"` |  |
| `"success"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/organizations/{organization_id}/members:batchCreate`

#### OrganizationMember

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"member"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` |  |

Operations: Create, List, Load, Remove.

API path: `/organizations/{organization_id}/members`

#### OrganizationsApiProfile

| Field | Description |
| --- | --- |
| `"code"` |  |
| `"message"` |  |

Operations: List.

API path: `/organizations/{organization_id}/profile`

#### Resource

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"meta"` | Resource Metadata. |
| `"resource_account_id"` | Account identifier. |
| `"resource_id"` | Share Resource identifier. |
| `"resource_type"` | Resource Type. |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: Create, List, Load, Remove, Update.

API path: `/accounts/{account_id}/shares/{share_id}/resources`

#### ResourceGroup

| Field | Description |
| --- | --- |
| `"id"` |  |

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
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/shares/{share_id}/excluded-recipients`

#### ResourceSharingShareExcludedRecipientResponseSingle

| Field | Description |
| --- | --- |
| `"account_id"` | The account to exclude from the organization-targeted share. |
| `"errors"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: Create, Load, Remove.

API path: `/accounts/{account_id}/shares/{share_id}/excluded-recipients`

#### ResourceSharingShareRecipientResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/shares/{share_id}/recipients`

#### ResourceSharingShareRecipientResponseSingle

| Field | Description |
| --- | --- |
| `"account_id"` | Deprecated alias for `recipient_account_id`. |
| `"errors"` |  |
| `"organization_id"` | Organization identifier. |
| `"recipient_account_id"` | The account that will receive the share. |
| `"result"` | A recipient of a share. |
| `"success"` | Whether the API call was successful. |

Operations: Create, Load, Remove.

API path: `/accounts/{account_id}/shares/{share_id}/recipients`

#### ResourceSharingShareResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/shares`

#### ResourceSharingShareResponseSingle

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"name"` | The name of the share. |
| `"recipients"` |  |
| `"resources"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

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
| `"id"` |  |

Operations: Create, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/scim/v2/Groups`

#### ScimUser

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create, Load, Patch, Remove, Update.

API path: `/accounts/{account_id}/scim/v2/Users`

#### SsoConnector

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/sso_connectors/{sso_connector_id}`

#### Tenant

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` |  |

Operations: List, Load.

API path: `/tenants/{tenant_id}/accounts`

#### Token

| Field | Description |
| --- | --- |
| `"id"` |  |

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
| `"id"` |  |

Operations: Remove.

API path: `/accounts/{account_id}/iam/user_groups/{user_group_id}`

#### UsersAccountMembership

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/memberships/{membership_id}`

#### UsersOrganization

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/user/organizations/{organization_id}`



## Entities


### AaaAuditLogsV2OrgHistoryResponseCollection

Create an instance: `aaaAuditLogsV2OrgHistoryResponseCollection := client.AaaAuditLogsV2OrgHistoryResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `result` | `[]any` |  |
| `result_info` | `map[string]any` | Provides information about the result of the request, including count, cursor, and identification quality. |
| `success` | `bool` | Indicates whether the API call was successful |

#### Example: List

```go
aaaAuditLogsV2OrgHistoryResponseCollections, err := client.AaaAuditLogsV2OrgHistoryResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aaaAuditLogsV2OrgHistoryResponseCollections) // the array of records
```


### AaaAuditLogsV2OrgResponseCollection

Create an instance: `aaaAuditLogsV2OrgResponseCollection := client.AaaAuditLogsV2OrgResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `result` | `[]any` |  |
| `result_info` | `map[string]any` | Provides information about the result of the request, including count and cursor. |
| `success` | `bool` | Indicates whether the API call was successful |

#### Example: List

```go
aaaAuditLogsV2OrgResponseCollections, err := client.AaaAuditLogsV2OrgResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(aaaAuditLogsV2OrgResponseCollections) // the array of records
```


### Account

Create an instance: `account := client.Account(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```go
accounts, err := client.Account(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(accounts) // the array of records
```


### AccountResourceGroup

Create an instance: `accountResourceGroup := client.AccountResourceGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `name` | `string` | Name of the resource group |
| `result` | `map[string]any` | A group of scoped resources. |
| `scope` | `map[string]any` | A scope is a combination of scope objects which provides additional context. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
accountResourceGroup, err := client.AccountResourceGroup(nil).Load(map[string]any{"id": "account_resource_group_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(accountResourceGroup) // the loaded record
```

#### Example: List

```go
accountResourceGroups, err := client.AccountResourceGroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(accountResourceGroups) // the array of records
```

#### Example: Create

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


### AccountUserGroup

Create an instance: `accountUserGroup := client.AccountUserGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` | Name of the User group. |
| `policies` | `[]any` | Policies attached to the User group |
| `result` | `map[string]any` | A group of policies resources. |

#### Example: Load

```go
accountUserGroup, err := client.AccountUserGroup(nil).Load(map[string]any{"id": "account_user_group_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(accountUserGroup) // the loaded record
```

#### Example: List

```go
accountUserGroups, err := client.AccountUserGroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(accountUserGroups) // the array of records
```

#### Example: Create

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


### AccountUserGroupMember

Create an instance: `accountUserGroupMember := client.AccountUserGroupMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `map[string]any` | Detailed member information for a User Group member. |

#### Example: Load

```go
accountUserGroupMember, err := client.AccountUserGroupMember(nil).Load(map[string]any{"id": "account_user_group_member_id", "account_id": "account_id", "user_group_id": "user_group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(accountUserGroupMember) // the loaded record
```

#### Example: List

```go
accountUserGroupMembers, err := client.AccountUserGroupMember(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(accountUserGroupMembers) // the array of records
```

#### Example: Create

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


### BeginVerification

Create an instance: `beginVerification := client.BeginVerification(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Create

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


### BillSubsApiClientSecretResponseSingle

Create an instance: `billSubsApiClientSecretResponseSingle := client.BillSubsApiClientSecretResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Create

```go
result, err := client.BillSubsApiClientSecretResponseSingle(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BillableUsageApiV2Usage

Create an instance: `billableUsageApiV2Usage := client.BillableUsageApiV2Usage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` | Contains error details if the request failed. |
| `messages` | `[]any` | Contains informational notices about the response. |
| `result` | `[]any` | Contains the array of cost and usage records. |
| `success` | `bool` | Indicates whether the API call was successful. |

#### Example: List

```go
billableUsageApiV2Usages, err := client.BillableUsageApiV2Usage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(billableUsageApiV2Usages) // the array of records
```


### DnsCustomNameserversEmptyResponse3

Create an instance: `dnsCustomNameserversEmptyResponse3 := client.DnsCustomNameserversEmptyResponse3(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### DnsCustomNameserversTcnsResponseCollection

Create an instance: `dnsCustomNameserversTcnsResponseCollection := client.DnsCustomNameserversTcnsResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
dnsCustomNameserversTcnsResponseCollections, err := client.DnsCustomNameserversTcnsResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(dnsCustomNameserversTcnsResponseCollections) // the array of records
```


### DnsCustomNameserversTcnsResponseSingle

Create an instance: `dnsCustomNameserversTcnsResponseSingle := client.DnsCustomNameserversTcnsResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ns_name` | `string` | The FQDN of the name server. |
| `ns_set` | `float64` | The number of the set that this name server belongs to. |

#### Example: Create

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


### IamApiResponseSingleId

Create an instance: `iamApiResponseSingleId := client.IamApiResponseSingleId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### IamCollectionMemberResponseWithPolicy

Create an instance: `iamCollectionMemberResponseWithPolicy := client.IamCollectionMemberResponseWithPolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
iamCollectionMemberResponseWithPolicys, err := client.IamCollectionMemberResponseWithPolicy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamCollectionMemberResponseWithPolicys) // the array of records
```


### IamCollectionOauthClient

Create an instance: `iamCollectionOauthClient := client.IamCollectionOauthClient(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
iamCollectionOauthClients, err := client.IamCollectionOauthClient(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamCollectionOauthClients) // the array of records
```


### IamCollectionOauthScope

Create an instance: `iamCollectionOauthScope := client.IamCollectionOauthScope(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
iamCollectionOauthScopes, err := client.IamCollectionOauthScope(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamCollectionOauthScopes) // the array of records
```


### IamCollectionOrganization

Create an instance: `iamCollectionOrganization := client.IamCollectionOrganization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
iamCollectionOrganizations, err := client.IamCollectionOrganization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamCollectionOrganizations) // the array of records
```


### IamCollectionPermissionGroup

Create an instance: `iamCollectionPermissionGroup := client.IamCollectionPermissionGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` | A set of permission groups that are specified to the policy. |

#### Example: List

```go
iamCollectionPermissionGroups, err := client.IamCollectionPermissionGroup(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamCollectionPermissionGroups) // the array of records
```


### IamCollectionRole

Create an instance: `iamCollectionRole := client.IamCollectionRole(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
iamCollectionRoles, err := client.IamCollectionRole(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamCollectionRoles) // the array of records
```


### IamCollectionToken

Create an instance: `iamCollectionToken := client.IamCollectionToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
iamCollectionTokens, err := client.IamCollectionToken(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamCollectionTokens) // the array of records
```


### IamOauthClientRotateSecret

Create an instance: `iamOauthClientRotateSecret := client.IamOauthClientRotateSecret(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Create

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


### IamPermissionsGroupResponseCollection

Create an instance: `iamPermissionsGroupResponseCollection := client.IamPermissionsGroupResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
iamPermissionsGroupResponseCollections, err := client.IamPermissionsGroupResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamPermissionsGroupResponseCollections) // the array of records
```


### IamResponseSingleValue

Create an instance: `iamResponseSingleValue := client.IamResponseSingleValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `string` | The token value. |


### IamSchemasCollectionInvite

Create an instance: `iamSchemasCollectionInvite := client.IamSchemasCollectionInvite(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
iamSchemasCollectionInvites, err := client.IamSchemasCollectionInvite(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamSchemasCollectionInvites) // the array of records
```


### IamSingleInvite

Create an instance: `iamSingleInvite := client.IamSingleInvite(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `map[string]any` |  |
| `status` | `any` | Status of your response to the invitation (rejected or accepted). |

#### Example: Load

```go
iamSingleInvite, err := client.IamSingleInvite(nil).Load(map[string]any{"id": "iam_single_invite_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamSingleInvite) // the loaded record
```


### IamSingleMemberResponseWithPolicy

Create an instance: `iamSingleMemberResponseWithPolicy := client.IamSingleMemberResponseWithPolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
iamSingleMemberResponseWithPolicy, err := client.IamSingleMemberResponseWithPolicy(nil).Load(map[string]any{"account_id": "account_id", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamSingleMemberResponseWithPolicy) // the loaded record
```

#### Example: Create

```go
result, err := client.IamSingleMemberResponseWithPolicy(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### IamSingleMembershipResponseWithPolicy

Create an instance: `iamSingleMembershipResponseWithPolicy := client.IamSingleMembershipResponseWithPolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |
| `status` | `any` | Whether to accept or reject this account invitation. |

#### Example: Load

```go
iamSingleMembershipResponseWithPolicy, err := client.IamSingleMembershipResponseWithPolicy(nil).Load(map[string]any{"membership_id": "membership_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamSingleMembershipResponseWithPolicy) // the loaded record
```


### IamSingleOauthClient

Create an instance: `iamSingleOauthClient := client.IamSingleOauthClient(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `any` | An OAuth 2.0 client registration. |

#### Example: Load

```go
iamSingleOauthClient, err := client.IamSingleOauthClient(nil).Load(map[string]any{"id": "iam_single_oauth_client_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamSingleOauthClient) // the loaded record
```


### IamSingleOauthClientCreate

Create an instance: `iamSingleOauthClientCreate := client.IamSingleOauthClientCreate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.IamSingleOauthClientCreate(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### IamSingleOrganization

Create an instance: `iamSingleOrganization := client.IamSingleOrganization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `map[string]any` |  |

#### Example: Load

```go
iamSingleOrganization, err := client.IamSingleOrganization(nil).Load(map[string]any{"id": "iam_single_organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamSingleOrganization) // the loaded record
```


### IamSinglePermissionGroup

Create an instance: `iamSinglePermissionGroup := client.IamSinglePermissionGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `map[string]any` | A named group of permissions that map to a group of operations against resources. |

#### Example: Load

```go
iamSinglePermissionGroup, err := client.IamSinglePermissionGroup(nil).Load(map[string]any{"id": "iam_single_permission_group_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamSinglePermissionGroup) // the loaded record
```


### IamSingleRole

Create an instance: `iamSingleRole := client.IamSingleRole(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `map[string]any` |  |

#### Example: Load

```go
iamSingleRole, err := client.IamSingleRole(nil).Load(map[string]any{"id": "iam_single_role_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamSingleRole) // the loaded record
```


### IamSingleToken

Create an instance: `iamSingleToken := client.IamSingleToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `map[string]any` |  |

#### Example: Load

```go
iamSingleToken, err := client.IamSingleToken(nil).Load(map[string]any{"id": "iam_single_token_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamSingleToken) // the loaded record
```


### IamSingleTokenCreate

Create an instance: `iamSingleTokenCreate := client.IamSingleTokenCreate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condition` | `map[string]any` |  |
| `expires_on` | `string` | The expiration time on or after which the JWT MUST NOT be accepted for processing. |
| `name` | `string` | Token name. |
| `not_before` | `string` | The time before which the token MUST NOT be accepted for processing. |
| `policies` | `[]any` | List of access policies assigned to the token. |

#### Example: Create

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


### IamSsoConnector

Create an instance: `iamSsoConnector := client.IamSsoConnector(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `begin_verification` | `bool` | Begin the verification process after creation |
| `email_domain` | `string` | Email domain of the new SSO connector |
| `enabled` | `bool` | SSO Connector enabled state |
| `id` | `string` |  |
| `result` | `map[string]any` |  |
| `use_fedramp_language` | `bool` | Controls the display of FedRAMP language to the user during SSO login |

#### Example: Load

```go
iamSsoConnector, err := client.IamSsoConnector(nil).Load(map[string]any{"id": "iam_sso_connector_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamSsoConnector) // the loaded record
```

#### Example: Create

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


### IamSsoConnectorCollection

Create an instance: `iamSsoConnectorCollection := client.IamSsoConnectorCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
iamSsoConnectorCollections, err := client.IamSsoConnectorCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamSsoConnectorCollections) // the array of records
```


### IamTokenVerifyResponseSingleSegment

Create an instance: `iamTokenVerifyResponseSingleSegment := client.IamTokenVerifyResponseSingleSegment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any` |  |

#### Example: Load

```go
iamTokenVerifyResponseSingleSegment, err := client.IamTokenVerifyResponseSingleSegment(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(iamTokenVerifyResponseSingleSegment) // the loaded record
```


### Member

Create an instance: `member := client.Member(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### OauthClient

Create an instance: `oauthClient := client.OauthClient(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Organization

Create an instance: `organization := client.Organization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `create_time` | `string` |  |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `meta` | `map[string]any` |  |
| `name` | `string` |  |
| `parent` | `map[string]any` |  |
| `profile` | `map[string]any` |  |
| `result` | `map[string]any` | References an Organization in the Cloudflare data model. |
| `result_info` | `map[string]any` |  |
| `status` | `string` |  |
| `success` | `bool` |  |

#### Example: Load

```go
organization, err := client.Organization(nil).Load(map[string]any{"id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(organization) // the loaded record
```

#### Example: List

```go
organizations, err := client.Organization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizations) // the array of records
```

#### Example: Create

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


### OrganizationMember

Create an instance: `organizationMember := client.OrganizationMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `member` | `map[string]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: Load

```go
organizationMember, err := client.OrganizationMember(nil).Load(map[string]any{"id": "organization_member_id", "organization_id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationMember) // the loaded record
```

#### Example: List

```go
organizationMembers, err := client.OrganizationMember(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationMembers) // the array of records
```

#### Example: Create

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


### OrganizationsApiProfile

Create an instance: `organizationsApiProfile := client.OrganizationsApiProfile(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `code` | `int` |  |
| `message` | `string` |  |

#### Example: List

```go
organizationsApiProfiles, err := client.OrganizationsApiProfile(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizationsApiProfiles) // the array of records
```


### Resource

Create an instance: `resource := client.Resource(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `meta` | `map[string]any` | Resource Metadata. |
| `resource_account_id` | `string` | Account identifier. |
| `resource_id` | `string` | Share Resource identifier. |
| `resource_type` | `string` | Resource Type. |
| `result` | `any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
resource, err := client.Resource(nil).Load(map[string]any{"id": "resource_id", "account_id": "account_id", "share_id": "share_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(resource) // the loaded record
```

#### Example: List

```go
resources, err := client.Resource(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(resources) // the array of records
```

#### Example: Create

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


### ResourceGroup

Create an instance: `resourceGroup := client.ResourceGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### ResourceSharing

Create an instance: `resourceSharing := client.ResourceSharing(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |


### ResourceSharingShareExcludedRecipientResponseCollection

Create an instance: `resourceSharingShareExcludedRecipientResponseCollection := client.ResourceSharingShareExcludedRecipientResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
resourceSharingShareExcludedRecipientResponseCollections, err := client.ResourceSharingShareExcludedRecipientResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(resourceSharingShareExcludedRecipientResponseCollections) // the array of records
```


### ResourceSharingShareExcludedRecipientResponseSingle

Create an instance: `resourceSharingShareExcludedRecipientResponseSingle := client.ResourceSharingShareExcludedRecipientResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` | The account to exclude from the organization-targeted share. |
| `errors` | `[]any` |  |
| `result` | `any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
resourceSharingShareExcludedRecipientResponseSingle, err := client.ResourceSharingShareExcludedRecipientResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "excluded_recipient_id": "excluded_recipient_id", "share_id": "share_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(resourceSharingShareExcludedRecipientResponseSingle) // the loaded record
```

#### Example: Create

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


### ResourceSharingShareRecipientResponseCollection

Create an instance: `resourceSharingShareRecipientResponseCollection := client.ResourceSharingShareRecipientResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
resourceSharingShareRecipientResponseCollections, err := client.ResourceSharingShareRecipientResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(resourceSharingShareRecipientResponseCollections) // the array of records
```


### ResourceSharingShareRecipientResponseSingle

Create an instance: `resourceSharingShareRecipientResponseSingle := client.ResourceSharingShareRecipientResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `account_id` | `string` | Deprecated alias for `recipient_account_id`. |
| `errors` | `[]any` |  |
| `organization_id` | `string` | Organization identifier. |
| `recipient_account_id` | `string` | The account that will receive the share. |
| `result` | `any` | A recipient of a share. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
resourceSharingShareRecipientResponseSingle, err := client.ResourceSharingShareRecipientResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "recipient_id": "recipient_id", "share_id": "share_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(resourceSharingShareRecipientResponseSingle) // the loaded record
```

#### Example: Create

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


### ResourceSharingShareResponseCollection

Create an instance: `resourceSharingShareResponseCollection := client.ResourceSharingShareResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
resourceSharingShareResponseCollections, err := client.ResourceSharingShareResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(resourceSharingShareResponseCollections) // the array of records
```


### ResourceSharingShareResponseSingle

Create an instance: `resourceSharingShareResponseSingle := client.ResourceSharingShareResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `name` | `string` | The name of the share. |
| `recipients` | `[]any` |  |
| `resources` | `[]any` |  |
| `result` | `any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
resourceSharingShareResponseSingle, err := client.ResourceSharingShareResponseSingle(nil).Load(map[string]any{"account_id": "account_id", "share_id": "share_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(resourceSharingShareResponseSingle) // the loaded record
```

#### Example: Create

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


### ScimDiscovery

Create an instance: `scimDiscovery := client.ScimDiscovery(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
scimDiscovery, err := client.ScimDiscovery(nil).Load(map[string]any{"account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(scimDiscovery) // the loaded record
```


### ScimGroup

Create an instance: `scimGroup := client.ScimGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
scimGroup, err := client.ScimGroup(nil).Load(map[string]any{"id": "scim_group_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(scimGroup) // the loaded record
```

#### Example: Create

```go
result, err := client.ScimGroup(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ScimUser

Create an instance: `scimUser := client.ScimUser(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
scimUser, err := client.ScimUser(nil).Load(map[string]any{"id": "scim_user_id", "account_id": "account_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(scimUser) // the loaded record
```

#### Example: Create

```go
result, err := client.ScimUser(nil).Create(map[string]any{
    "account_id": "example_account_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SsoConnector

Create an instance: `ssoConnector := client.SsoConnector(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Tenant

Create an instance: `tenant := client.Tenant(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` |  |

#### Example: Load

```go
tenant, err := client.Tenant(nil).Load(map[string]any{"id": "tenant_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tenant) // the loaded record
```

#### Example: List

```go
tenants, err := client.Tenant(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tenants) // the array of records
```


### Token

Create an instance: `token := client.Token(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### User

Create an instance: `user := client.User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Example: List

```go
users, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(users) // the array of records
```


### UserGroup

Create an instance: `userGroup := client.UserGroup(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### UsersAccountMembership

Create an instance: `usersAccountMembership := client.UsersAccountMembership(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### UsersOrganization

Create an instance: `usersOrganization := client.UsersOrganization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/cloudflare-identity-sdk/go/
├── cloudflare-identity.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/cloudflare-identity-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
accountusergroupmember := client.AccountUserGroupMember(nil)
accountusergroupmember.List(nil, nil)

// accountusergroupmember.Data() now returns the accountusergroupmember data from the last list
// accountusergroupmember.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
