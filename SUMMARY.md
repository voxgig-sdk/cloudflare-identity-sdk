# Cloudflare Identity &amp; Administration

Cloudflare identity and administration: IAM, members, roles, organizations, tenants, tokens, OAuth clients, SCIM, SSO connectors, and resource shares.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 61 entities and 131 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [AaaAuditLogsV2OrgHistoryResponseCollection](docs/api/aaa_audit_logs_v2_org_history_response_collection.html)

Results: Get organization resource history successful response.

SDK operations: `list`.

Key fields to recognise:

- `errors`: A list of error messages.
- `result`: The result of the action, indicating success or failure.
- `result_info`: Provides information about the result of the request, including count, cursor, and identification quality.
- `success`: Indicates whether the API call was successful

### [AaaAuditLogsV2OrgResponseCollection](docs/api/aaa_audit_logs_v2_org_response_collection.html)

Results: Get organization audit logs successful response.

SDK operations: `list`.

Key fields to recognise:

- `errors`: A list of error messages.
- `result`: The result of the action, indicating success or failure.
- `result_info`: Provides information about the result of the request, including count and cursor.
- `success`: Indicates whether the API call was successful

### [Account](docs/api/account.html)

Results: The request has succeeded.

SDK operations: `list`.

### [AccountResourceGroup](docs/api/account_resource_group.html)

Results: Add Resource Group response; List Resource Groups response; Resource Group Details response; Update Resource Group response.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `id`: Identifier of the resource group.
- `name`: Name of the resource group.
- `result`: A group of scoped resources.
- `scope`: A scope is a combination of scope objects which provides additional context.
- `success`: Whether the API call was successful.

### [AccountUserGroup](docs/api/account_user_group.html)

Results: Add User Group response; List User Group response; User Group Details response; Update User Group response.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `id`: User Group identifier tag.
- `name`: Name of the user group.
- `policies`: Policies attached to the User group
- `result`: A group of policies resources.

### [AccountUserGroupMember](docs/api/account_user_group_member.html)

Results: Add User Group Members response; List User Group Members; Get User Group Member response; Delete User Group Member response; Update User Group Members response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `id`: Account member identifier.
- `result`: Detailed member information for a User Group member.

### [BeginVerification](docs/api/begin_verification.html)

Results: Begin SSO connector verification process response.

SDK operations: `create`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [BillSubsApiClientSecretResponseSingle](docs/api/bill_subs_api_client_secret_response_single.html)

Results: Create Setup Intent response.

SDK operations: `create`.

### [BillableUsageApiV2Usage](docs/api/billable_usage_api_v2_usage.html)

Results: Organization usage data was successfully retrieved.

SDK operations: `list`.

Key fields to recognise:

- `errors`: Contains error details if the request failed.
- `messages`: Contains informational notices about the response.
- `result`: Contains the array of cost and usage records.
- `success`: Indicates whether the API call was successful.

### [DnsCustomNameserversEmptyResponse3](docs/api/dns_custom_nameservers_empty_response_3.html)

Results: Delete Tenant Custom Nameserver response.

SDK operations: `remove`.

### [DnsCustomNameserversTcnsResponseCollection](docs/api/dns_custom_nameservers_tcns_response_collection.html)

Results: List Tenant Custom Nameservers response.

SDK operations: `list`.

### [DnsCustomNameserversTcnsResponseSingle](docs/api/dns_custom_nameservers_tcns_response_single.html)

Results: Add Tenant Custom Nameserver response.

SDK operations: `create`.

Key fields to recognise:

- `ns_name`: The FQDN of the name server.
- `ns_set`: The number of the set that this name server belongs to.

### [IamApiResponseSingleId](docs/api/iam_api_response_single_id.html)

Results: Delete Rotated OAuth Client Secret response.

SDK operations: `remove`.

### [IamCollectionMemberResponseWithPolicy](docs/api/iam_collection_member_response_with_policy.html)

Results: List Members response.

SDK operations: `list`.

### [IamCollectionOauthClient](docs/api/iam_collection_oauth_client.html)

Results: List OAuth Clients response.

SDK operations: `list`.

### [IamCollectionOauthScope](docs/api/iam_collection_oauth_scope.html)

Results: List OAuth Scopes response.

SDK operations: `list`.

### [IamCollectionOrganization](docs/api/iam_collection_organization.html)

Results: List Organizations response.

SDK operations: `list`.

### [IamCollectionPermissionGroup](docs/api/iam_collection_permission_group.html)

Results: List Permission Groups response.

SDK operations: `list`.

Key fields to recognise:

- `result`: A set of permission groups that are specified to the policy.

### [IamCollectionRole](docs/api/iam_collection_role.html)

Results: List Roles response.

SDK operations: `list`.

### [IamCollectionToken](docs/api/iam_collection_token.html)

Results: List Tokens response.

SDK operations: `list`.

### [IamOauthClientRotateSecret](docs/api/iam_oauth_client_rotate_secret.html)

Results: Rotate OAuth Client Secret response.

SDK operations: `create`.

### [IamPermissionsGroupResponseCollection](docs/api/iam_permissions_group_response_collection.html)

Results: List Account Owned API Token Permission Groups response; List Token Permission Groups response.

SDK operations: `list`.

### [IamResponseSingleValue](docs/api/iam_response_single_value.html)

Results: Roll Token response.

SDK operations: `update`.

Key fields to recognise:

- `result`: The token value.

### [IamSchemasCollectionInvite](docs/api/iam_schemas_collection_invite.html)

Results: List Invitations response.

SDK operations: `list`.

### [IamSingleInvite](docs/api/iam_single_invite.html)

Results: Invitation Details response; Respond to Invitation response.

SDK operations: `load`, `update`.

Key fields to recognise:

- `id`: Invite identifier tag.
- `status`: Current status of the invitation.

### [IamSingleMemberResponseWithPolicy](docs/api/iam_single_member_response_with_policy.html)

Results: Add Member response; Member Details response; Update Member response.

SDK operations: `create`, `load`, `update`.

### [IamSingleMembershipResponseWithPolicy](docs/api/iam_single_membership_response_with_policy.html)

Results: List Memberships response; Membership Details response; Get User Membership response; Update Membership response.

SDK operations: `load`, `update`.

Key fields to recognise:

- `status`: Status of this membership.

### [IamSingleOauthClient](docs/api/iam_single_oauth_client.html)

Results: OAuth Client Details response; Update OAuth Client response.

SDK operations: `load`, `update`.

Key fields to recognise:

- `result`: An OAuth 2.0 client registration.

### [IamSingleOauthClientCreate](docs/api/iam_single_oauth_client_create.html)

Results: Create OAuth Client response.

SDK operations: `create`.

### [IamSingleOrganization](docs/api/iam_single_organization.html)

Results: Organization Details response.

SDK operations: `load`.

### [IamSinglePermissionGroup](docs/api/iam_single_permission_group.html)

Results: Permission Group Details response.

SDK operations: `load`.

Key fields to recognise:

- `id`: Identifier of the permission group.
- `result`: A named group of permissions that map to a group of operations against resources.

### [IamSingleRole](docs/api/iam_single_role.html)

Results: Role Details response.

SDK operations: `load`.

Key fields to recognise:

- `id`: Role identifier tag.

### [IamSingleToken](docs/api/iam_single_token.html)

Results: Token Details response; Update Token response.

SDK operations: `load`, `update`.

Key fields to recognise:

- `id`: Token identifier tag.

### [IamSingleTokenCreate](docs/api/iam_single_token_create.html)

Results: Create Token response.

SDK operations: `create`.

Key fields to recognise:

- `expires_on`: The expiration time on or after which the JWT MUST NOT be accepted for processing.
- `name`: Token name.
- `not_before`: The time before which the token MUST NOT be accepted for processing.
- `policies`: List of access policies assigned to the token.

### [IamSsoConnector](docs/api/iam_sso_connector.html)

Results: Initialize new SSO connector response; Get SSO connector response; Update SSO connector state response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `begin_verification`: Begin the verification process after creation
- `email_domain`: Email domain of the new SSO connector
- `enabled`: SSO Connector enabled state
- `id`: SSO Connector identifier tag.
- `use_fedramp_language`: Controls the display of FedRAMP language to the user during SSO login

### [IamSsoConnectorCollection](docs/api/iam_sso_connector_collection.html)

Results: Get all SSO connectors response.

SDK operations: `list`.

### [IamTokenVerifyResponseSingleSegment](docs/api/iam_token_verify_response_single_segment.html)

Results: Verify Token response.

SDK operations: `load`.

### [Member](docs/api/member.html)

Results: Remove Member response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Identifier

### [OauthClient](docs/api/oauth_client.html)

Results: Delete OAuth Client response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Identifier

### [Organization](docs/api/organization.html)

Results: The request has succeeded.; There is no content to send for this request, but the headers may be useful.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `id`: Organization Member ID
- `result`: References an Organization in the Cloudflare data model.

### [OrganizationMember](docs/api/organization_member.html)

Results: The request has succeeded.; There is no content to send for this request, but the headers may be useful.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `id`: Organization Member ID

### [OrganizationsApiProfile](docs/api/organizations_api_profile.html)

Results: The request has succeeded.

SDK operations: `list`.

### [Resource](docs/api/resource.html)

Results: Share resource created.; List account share resources response.; Get account share resource response.; Share resource deleted.; Share resource updated.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `id`: Share Resource identifier.
- `meta`: Resource Metadata.
- `resource_account_id`: Account identifier.
- `resource_id`: Share Resource identifier.
- `resource_type`: Resource Type.

### [ResourceGroup](docs/api/resource_group.html)

Results: Remove Resource Group response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Identifier

### [ResourceSharing](docs/api/resource_sharing.html)

Results: Empty body.

SDK operations: `update`.

### [ResourceSharingShareExcludedRecipientResponseCollection](docs/api/resource_sharing_share_excluded_recipient_response_collection.html)

Results: List share excluded recipients response.

SDK operations: `list`.

### [ResourceSharingShareExcludedRecipientResponseSingle](docs/api/resource_sharing_share_excluded_recipient_response_single.html)

Results: Share excluded recipient created.; Get share excluded recipient response.; Share excluded recipient deleted.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `account_id`: Account identifier.
- `success`: Whether the API call was successful.

### [ResourceSharingShareRecipientResponseCollection](docs/api/resource_sharing_share_recipient_response_collection.html)

Results: List account share recipients response.

SDK operations: `list`.

### [ResourceSharingShareRecipientResponseSingle](docs/api/resource_sharing_share_recipient_response_single.html)

Results: Share recipient created.; Get account share recipient response.; Share recipient deleted.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `account_id`: Account identifier.
- `organization_id`: Organization identifier.
- `recipient_account_id`: The account that will receive the share.
- `result`: A recipient of a share. The `association_status` field tracks the lifecycle of the shared resources in the recipient account. All recipients are returned by the list endpoint regardless of status; filter client-side if only active recipients are needed.
- `success`: Whether the API call was successful.

### [ResourceSharingShareResponseCollection](docs/api/resource_sharing_share_response_collection.html)

Results: List account shares response.; List organization shares response.

SDK operations: `list`.

### [ResourceSharingShareResponseSingle](docs/api/resource_sharing_share_response_single.html)

Results: Share created.; Get account share response.; Share deleted.; Share updated.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `name`: The name of the share.
- `resources`: A list of resources that are part of the share. This field is only included when requested via the &#39;include_resources&#39; parameter.
- `success`: Whether the API call was successful.

### [ScimDiscovery](docs/api/scim_discovery.html)

Results: Get SCIM Resource Type response; Get SCIM Schema response; List SCIM Resource Types response; List SCIM Schemas response; Get SCIM Service Provider Config response.

SDK operations: `load`.

### [ScimGroup](docs/api/scim_group.html)

Results: Create SCIM Group response; List SCIM Groups response; Get SCIM Group response; Patch SCIM Group response; Delete SCIM Group response (no content); Replace SCIM Group response.

SDK operations: `create`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `id`: Unique identifier for the Group, assigned by Cloudflare. System groups are prefixed `cloudflare-v1-&lt;permissionGroupTag&gt;`; custom groups use a UUID-style tag.

### [ScimUser](docs/api/scim_user.html)

Results: Create SCIM User response; List SCIM Users response; Get SCIM User response; Patch SCIM User response; SCIM User deprovisioned; Replace SCIM User response.

SDK operations: `create`, `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `id`: Unique identifier for the user, assigned by Cloudflare (user tag).

### [SsoConnector](docs/api/sso_connector.html)

Results: Delete SSO connector response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Identifier

### [Tenant](docs/api/tenant.html)

Results: The request has succeeded.

SDK operations: `list`, `load`.

### [Token](docs/api/token.html)

Results: Delete Token response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Identifier

### [User](docs/api/user.html)

Results: The request has succeeded.

SDK operations: `list`.

### [UserGroup](docs/api/user_group.html)

Results: Remove User Group response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Identifier

### [UsersAccountMembership](docs/api/users_account_membership.html)

Results: Delete Membership response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Membership identifier tag.

### [UsersOrganization](docs/api/users_organization.html)

Results: Leave Organization response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Identifier

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [AaaAuditLogsV2OrgHistoryResponseCollection](docs/api/aaa_audit_logs_v2_org_history_response_collection.html) | `list` | `GET /organizations/{organization_id}/logs/audit/{id}/history` | Required |
| [AaaAuditLogsV2OrgResponseCollection](docs/api/aaa_audit_logs_v2_org_response_collection.html) | `list` | `GET /organizations/{organization_id}/logs/audit` | Required |
| [Account](docs/api/account.html) | `list` | `GET /accounts/{account_id}/organizations` | Required |
| [AccountResourceGroup](docs/api/account_resource_group.html) | `create` | `POST /accounts/{account_id}/iam/resource_groups` | Required |
| [AccountResourceGroup](docs/api/account_resource_group.html) | `list` | `GET /accounts/{account_id}/iam/resource_groups` | Required |
| [AccountResourceGroup](docs/api/account_resource_group.html) | `load` | `GET /accounts/{account_id}/iam/resource_groups/{resource_group_id}` | Required |
| [AccountResourceGroup](docs/api/account_resource_group.html) | `update` | `PUT /accounts/{account_id}/iam/resource_groups/{resource_group_id}` | Required |
| [AccountUserGroup](docs/api/account_user_group.html) | `create` | `POST /accounts/{account_id}/iam/user_groups` | Required |
| [AccountUserGroup](docs/api/account_user_group.html) | `list` | `GET /accounts/{account_id}/iam/user_groups` | Required |
| [AccountUserGroup](docs/api/account_user_group.html) | `load` | `GET /accounts/{account_id}/iam/user_groups/{user_group_id}` | Required |
| [AccountUserGroup](docs/api/account_user_group.html) | `update` | `PUT /accounts/{account_id}/iam/user_groups/{user_group_id}` | Required |
| [AccountUserGroupMember](docs/api/account_user_group_member.html) | `create` | `POST /accounts/{account_id}/iam/user_groups/{user_group_id}/members` | Required |
| [AccountUserGroupMember](docs/api/account_user_group_member.html) | `list` | `GET /accounts/{account_id}/iam/user_groups/{user_group_id}/members` | Required |
| [AccountUserGroupMember](docs/api/account_user_group_member.html) | `load` | `GET /accounts/{account_id}/iam/user_groups/{user_group_id}/members/{member_id}` | Required |
| [AccountUserGroupMember](docs/api/account_user_group_member.html) | `remove` | `DELETE /accounts/{account_id}/iam/user_groups/{user_group_id}/members/{member_id}` | Required |
| [AccountUserGroupMember](docs/api/account_user_group_member.html) | `update` | `PUT /accounts/{account_id}/iam/user_groups/{user_group_id}/members` | Required |
| [BeginVerification](docs/api/begin_verification.html) | `create` | `POST /accounts/{account_id}/sso_connectors/{sso_connector_id}/begin_verification` | Required |
| [BillSubsApiClientSecretResponseSingle](docs/api/bill_subs_api_client_secret_response_single.html) | `create` | `POST /accounts/{account_id}/client-secret` | Required |
| [BillableUsageApiV2Usage](docs/api/billable_usage_api_v2_usage.html) | `list` | `GET /organizations/{organization_id}/billable/usage` | Required |
| [DnsCustomNameserversEmptyResponse3](docs/api/dns_custom_nameservers_empty_response_3.html) | `remove` | `DELETE /tenants/{tenant_tag}/custom_ns/{custom_ns_id}` | Required |
| [DnsCustomNameserversTcnsResponseCollection](docs/api/dns_custom_nameservers_tcns_response_collection.html) | `list` | `GET /tenants/{tenant_tag}/custom_ns` | Required |
| [DnsCustomNameserversTcnsResponseSingle](docs/api/dns_custom_nameservers_tcns_response_single.html) | `create` | `POST /tenants/{tenant_tag}/custom_ns` | Required |
| [IamApiResponseSingleId](docs/api/iam_api_response_single_id.html) | `remove` | `DELETE /accounts/{account_id}/oauth_clients/{oauth_client_id}/rotate_secret` | Required |
| [IamCollectionMemberResponseWithPolicy](docs/api/iam_collection_member_response_with_policy.html) | `list` | `GET /accounts/{account_id}/members` | Required |
| [IamCollectionOauthClient](docs/api/iam_collection_oauth_client.html) | `list` | `GET /accounts/{account_id}/oauth_clients` | Required |
| [IamCollectionOauthScope](docs/api/iam_collection_oauth_scope.html) | `list` | `GET /oauth/scopes` | Required |
| [IamCollectionOrganization](docs/api/iam_collection_organization.html) | `list` | `GET /user/organizations` | Required |
| [IamCollectionPermissionGroup](docs/api/iam_collection_permission_group.html) | `list` | `GET /accounts/{account_id}/iam/permission_groups` | Required |
| [IamCollectionRole](docs/api/iam_collection_role.html) | `list` | `GET /accounts/{account_id}/roles` | Required |
| [IamCollectionToken](docs/api/iam_collection_token.html) | `list` | `GET /accounts/{account_id}/tokens` | Required |
| [IamCollectionToken](docs/api/iam_collection_token.html) | `list` | `GET /user/tokens` | Required |
| [IamOauthClientRotateSecret](docs/api/iam_oauth_client_rotate_secret.html) | `create` | `POST /accounts/{account_id}/oauth_clients/{oauth_client_id}/rotate_secret` | Required |
| [IamPermissionsGroupResponseCollection](docs/api/iam_permissions_group_response_collection.html) | `list` | `GET /accounts/{account_id}/tokens/permission_groups` | Required |
| [IamPermissionsGroupResponseCollection](docs/api/iam_permissions_group_response_collection.html) | `list` | `GET /user/tokens/permission_groups` | Required |
| [IamResponseSingleValue](docs/api/iam_response_single_value.html) | `update` | `PUT /accounts/{account_id}/tokens/{token_id}/value` | Required |
| [IamResponseSingleValue](docs/api/iam_response_single_value.html) | `update` | `PUT /user/tokens/{token_id}/value` | Required |
| [IamSchemasCollectionInvite](docs/api/iam_schemas_collection_invite.html) | `list` | `GET /user/invites` | Required |
| [IamSingleInvite](docs/api/iam_single_invite.html) | `load` | `GET /user/invites/{invite_id}` | Required |
| [IamSingleInvite](docs/api/iam_single_invite.html) | `update` | `PATCH /user/invites/{invite_id}` | Required |
| [IamSingleMemberResponseWithPolicy](docs/api/iam_single_member_response_with_policy.html) | `create` | `POST /accounts/{account_id}/members` | Required |
| [IamSingleMemberResponseWithPolicy](docs/api/iam_single_member_response_with_policy.html) | `load` | `GET /accounts/{account_id}/members/{member_id}` | Required |
| [IamSingleMemberResponseWithPolicy](docs/api/iam_single_member_response_with_policy.html) | `update` | `PUT /accounts/{account_id}/members/{member_id}` | Required |
| [IamSingleMembershipResponseWithPolicy](docs/api/iam_single_membership_response_with_policy.html) | `load` | `GET /memberships` | Required |
| [IamSingleMembershipResponseWithPolicy](docs/api/iam_single_membership_response_with_policy.html) | `load` | `GET /memberships/{membership_id}` | Required |
| [IamSingleMembershipResponseWithPolicy](docs/api/iam_single_membership_response_with_policy.html) | `load` | `GET /user/memberships/{membership_id}` | Required |
| [IamSingleMembershipResponseWithPolicy](docs/api/iam_single_membership_response_with_policy.html) | `update` | `PUT /memberships/{membership_id}` | Required |
| [IamSingleOauthClient](docs/api/iam_single_oauth_client.html) | `load` | `GET /accounts/{account_id}/oauth_clients/{oauth_client_id}` | Required |
| [IamSingleOauthClient](docs/api/iam_single_oauth_client.html) | `update` | `PATCH /accounts/{account_id}/oauth_clients/{oauth_client_id}` | Required |
| [IamSingleOauthClientCreate](docs/api/iam_single_oauth_client_create.html) | `create` | `POST /accounts/{account_id}/oauth_clients` | Required |
| [IamSingleOrganization](docs/api/iam_single_organization.html) | `load` | `GET /user/organizations/{organization_id}` | Required |
| [IamSinglePermissionGroup](docs/api/iam_single_permission_group.html) | `load` | `GET /accounts/{account_id}/iam/permission_groups/{permission_group_id}` | Required |
| [IamSingleRole](docs/api/iam_single_role.html) | `load` | `GET /accounts/{account_id}/roles/{role_id}` | Required |
| [IamSingleToken](docs/api/iam_single_token.html) | `load` | `GET /accounts/{account_id}/tokens/{token_id}` | Required |
| [IamSingleToken](docs/api/iam_single_token.html) | `load` | `GET /user/tokens/{token_id}` | Required |
| [IamSingleToken](docs/api/iam_single_token.html) | `update` | `PUT /accounts/{account_id}/tokens/{token_id}` | Required |
| [IamSingleToken](docs/api/iam_single_token.html) | `update` | `PUT /user/tokens/{token_id}` | Required |
| [IamSingleTokenCreate](docs/api/iam_single_token_create.html) | `create` | `POST /accounts/{account_id}/tokens` | Required |
| [IamSingleTokenCreate](docs/api/iam_single_token_create.html) | `create` | `POST /user/tokens` | Required |
| [IamSsoConnector](docs/api/iam_sso_connector.html) | `create` | `POST /accounts/{account_id}/sso_connectors` | Required |
| [IamSsoConnector](docs/api/iam_sso_connector.html) | `load` | `GET /accounts/{account_id}/sso_connectors/{sso_connector_id}` | Required |
| [IamSsoConnector](docs/api/iam_sso_connector.html) | `update` | `PATCH /accounts/{account_id}/sso_connectors/{sso_connector_id}` | Required |
| [IamSsoConnectorCollection](docs/api/iam_sso_connector_collection.html) | `list` | `GET /accounts/{account_id}/sso_connectors` | Required |
| [IamTokenVerifyResponseSingleSegment](docs/api/iam_token_verify_response_single_segment.html) | `load` | `GET /accounts/{account_id}/tokens/verify` | Required |
| [IamTokenVerifyResponseSingleSegment](docs/api/iam_token_verify_response_single_segment.html) | `load` | `GET /user/tokens/verify` | Required |
| [Member](docs/api/member.html) | `remove` | `DELETE /accounts/{account_id}/members/{member_id}` | Required |
| [OauthClient](docs/api/oauth_client.html) | `remove` | `DELETE /accounts/{account_id}/oauth_clients/{oauth_client_id}` | Required |
| [Organization](docs/api/organization.html) | `create` | `POST /organizations/{organization_id}/members:batchCreate` | Required |
| [Organization](docs/api/organization.html) | `create` | `POST /organizations` | Required |
| [Organization](docs/api/organization.html) | `list` | `GET /organizations/{organization_id}/accounts` | Required |
| [Organization](docs/api/organization.html) | `list` | `GET /organizations` | Required |
| [Organization](docs/api/organization.html) | `load` | `GET /organizations/{organization_id}` | Required |
| [Organization](docs/api/organization.html) | `remove` | `DELETE /organizations/{organization_id}` | Required |
| [Organization](docs/api/organization.html) | `update` | `PUT /organizations/{organization_id}/invites/{member_code}` | Required |
| [Organization](docs/api/organization.html) | `update` | `PUT /organizations/{organization_id}` | Required |
| [Organization](docs/api/organization.html) | `update` | `PUT /organizations/{organization_id}/profile` | Required |
| [OrganizationMember](docs/api/organization_member.html) | `create` | `POST /organizations/{organization_id}/members` | Required |
| [OrganizationMember](docs/api/organization_member.html) | `list` | `GET /organizations/{organization_id}/members` | Required |
| [OrganizationMember](docs/api/organization_member.html) | `load` | `GET /organizations/{organization_id}/members/{member_id}` | Required |
| [OrganizationMember](docs/api/organization_member.html) | `remove` | `DELETE /organizations/{organization_id}/members/{member_id}` | Required |
| [OrganizationsApiProfile](docs/api/organizations_api_profile.html) | `list` | `GET /organizations/{organization_id}/profile` | Required |
| [Resource](docs/api/resource.html) | `create` | `POST /accounts/{account_id}/shares/{share_id}/resources` | Required |
| [Resource](docs/api/resource.html) | `list` | `GET /accounts/{account_id}/shares/{share_id}/resources` | Required |
| [Resource](docs/api/resource.html) | `load` | `GET /accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}` | Required |
| [Resource](docs/api/resource.html) | `remove` | `DELETE /accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}` | Required |
| [Resource](docs/api/resource.html) | `update` | `PUT /accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}` | Required |
| [ResourceGroup](docs/api/resource_group.html) | `remove` | `DELETE /accounts/{account_id}/iam/resource_groups/{resource_group_id}` | Required |
| [ResourceSharing](docs/api/resource_sharing.html) | `update` | `PUT /accounts/{account_id}/shares/{share_id}/excluded-recipients` | Required |
| [ResourceSharing](docs/api/resource_sharing.html) | `update` | `PUT /accounts/{account_id}/shares/{share_id}/recipients` | Required |
| [ResourceSharingShareExcludedRecipientResponseCollection](docs/api/resource_sharing_share_excluded_recipient_response_collection.html) | `list` | `GET /accounts/{account_id}/shares/{share_id}/excluded-recipients` | Required |
| [ResourceSharingShareExcludedRecipientResponseSingle](docs/api/resource_sharing_share_excluded_recipient_response_single.html) | `create` | `POST /accounts/{account_id}/shares/{share_id}/excluded-recipients` | Required |
| [ResourceSharingShareExcludedRecipientResponseSingle](docs/api/resource_sharing_share_excluded_recipient_response_single.html) | `load` | `GET /accounts/{account_id}/shares/{share_id}/excluded-recipients/{excluded_recipient_id}` | Required |
| [ResourceSharingShareExcludedRecipientResponseSingle](docs/api/resource_sharing_share_excluded_recipient_response_single.html) | `remove` | `DELETE /accounts/{account_id}/shares/{share_id}/excluded-recipients/{excluded_recipient_id}` | Required |
| [ResourceSharingShareRecipientResponseCollection](docs/api/resource_sharing_share_recipient_response_collection.html) | `list` | `GET /accounts/{account_id}/shares/{share_id}/recipients` | Required |
| [ResourceSharingShareRecipientResponseSingle](docs/api/resource_sharing_share_recipient_response_single.html) | `create` | `POST /accounts/{account_id}/shares/{share_id}/recipients` | Required |
| [ResourceSharingShareRecipientResponseSingle](docs/api/resource_sharing_share_recipient_response_single.html) | `load` | `GET /accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}` | Required |
| [ResourceSharingShareRecipientResponseSingle](docs/api/resource_sharing_share_recipient_response_single.html) | `remove` | `DELETE /accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}` | Required |
| [ResourceSharingShareResponseCollection](docs/api/resource_sharing_share_response_collection.html) | `list` | `GET /accounts/{account_id}/shares` | Required |
| [ResourceSharingShareResponseCollection](docs/api/resource_sharing_share_response_collection.html) | `list` | `GET /organizations/{organization_id}/shares` | Required |
| [ResourceSharingShareResponseSingle](docs/api/resource_sharing_share_response_single.html) | `create` | `POST /accounts/{account_id}/shares` | Required |
| [ResourceSharingShareResponseSingle](docs/api/resource_sharing_share_response_single.html) | `load` | `GET /accounts/{account_id}/shares/{share_id}` | Required |
| [ResourceSharingShareResponseSingle](docs/api/resource_sharing_share_response_single.html) | `remove` | `DELETE /accounts/{account_id}/shares/{share_id}` | Required |
| [ResourceSharingShareResponseSingle](docs/api/resource_sharing_share_response_single.html) | `update` | `PUT /accounts/{account_id}/shares/{share_id}` | Required |
| [ScimDiscovery](docs/api/scim_discovery.html) | `load` | `GET /accounts/{account_id}/scim/v2/ResourceTypes/{resource_type_id}` | Required |
| [ScimDiscovery](docs/api/scim_discovery.html) | `load` | `GET /accounts/{account_id}/scim/v2/Schemas/{schema_id}` | Required |
| [ScimDiscovery](docs/api/scim_discovery.html) | `load` | `GET /accounts/{account_id}/scim/v2/ResourceTypes` | Required |
| [ScimDiscovery](docs/api/scim_discovery.html) | `load` | `GET /accounts/{account_id}/scim/v2/Schemas` | Required |
| [ScimDiscovery](docs/api/scim_discovery.html) | `load` | `GET /accounts/{account_id}/scim/v2/ServiceProviderConfig` | Required |
| [ScimGroup](docs/api/scim_group.html) | `create` | `POST /accounts/{account_id}/scim/v2/Groups` | Required |
| [ScimGroup](docs/api/scim_group.html) | `load` | `GET /accounts/{account_id}/scim/v2/Groups` | Required |
| [ScimGroup](docs/api/scim_group.html) | `load` | `GET /accounts/{account_id}/scim/v2/Groups/{group_id}` | Required |
| [ScimGroup](docs/api/scim_group.html) | `patch` | `PATCH /accounts/{account_id}/scim/v2/Groups/{group_id}` | Required |
| [ScimGroup](docs/api/scim_group.html) | `remove` | `DELETE /accounts/{account_id}/scim/v2/Groups/{group_id}` | Required |
| [ScimGroup](docs/api/scim_group.html) | `update` | `PUT /accounts/{account_id}/scim/v2/Groups/{group_id}` | Required |
| [ScimUser](docs/api/scim_user.html) | `create` | `POST /accounts/{account_id}/scim/v2/Users` | Required |
| [ScimUser](docs/api/scim_user.html) | `load` | `GET /accounts/{account_id}/scim/v2/Users` | Required |
| [ScimUser](docs/api/scim_user.html) | `load` | `GET /accounts/{account_id}/scim/v2/Users/{user_id}` | Required |
| [ScimUser](docs/api/scim_user.html) | `patch` | `PATCH /accounts/{account_id}/scim/v2/Users/{user_id}` | Required |
| [ScimUser](docs/api/scim_user.html) | `remove` | `DELETE /accounts/{account_id}/scim/v2/Users/{user_id}` | Required |
| [ScimUser](docs/api/scim_user.html) | `update` | `PUT /accounts/{account_id}/scim/v2/Users/{user_id}` | Required |
| [SsoConnector](docs/api/sso_connector.html) | `remove` | `DELETE /accounts/{account_id}/sso_connectors/{sso_connector_id}` | Required |
| [Tenant](docs/api/tenant.html) | `list` | `GET /tenants/{tenant_id}/accounts` | Required |
| [Tenant](docs/api/tenant.html) | `list` | `GET /tenants/{tenant_id}/account_types` | Required |
| [Tenant](docs/api/tenant.html) | `list` | `GET /tenants/{tenant_id}/entitlements` | Required |
| [Tenant](docs/api/tenant.html) | `list` | `GET /tenants/{tenant_id}/memberships` | Required |
| [Tenant](docs/api/tenant.html) | `load` | `GET /tenants/{tenant_id}` | Required |
| [Token](docs/api/token.html) | `remove` | `DELETE /accounts/{account_id}/tokens/{token_id}` | Required |
| [Token](docs/api/token.html) | `remove` | `DELETE /user/tokens/{token_id}` | Required |
| [User](docs/api/user.html) | `list` | `GET /user/tenants` | Required |
| [UserGroup](docs/api/user_group.html) | `remove` | `DELETE /accounts/{account_id}/iam/user_groups/{user_group_id}` | Required |
| [UsersAccountMembership](docs/api/users_account_membership.html) | `remove` | `DELETE /memberships/{membership_id}` | Required |
| [UsersOrganization](docs/api/users_organization.html) | `remove` | `DELETE /user/organizations/{organization_id}` | Required |

## Connect to the API

- Client API: `https://api.cloudflare.com/client/v4`

The default credential is sent in the `X-Auth-Email` header.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `cloudflare-identity_list`: List records for an entity. Supported entities: `aaa_audit_logs_v2_org_history_response_collection`, `aaa_audit_logs_v2_org_response_collection`, `account`, `account_resource_group`, `account_user_group`, `account_user_group_member`, `billable_usage_api_v2_usage`, `dns_custom_nameservers_tcns_response_collection`, `iam_collection_member_response_with_policy`, `iam_collection_oauth_client`, `iam_collection_oauth_scope`, `iam_collection_organization`, `iam_collection_permission_group`, `iam_collection_role`, `iam_collection_token`, `iam_permissions_group_response_collection`, `iam_schemas_collection_invite`, `iam_sso_connector_collection`, `organization`, `organization_member`, `organizations_api_profile`, `resource`, `resource_sharing_share_excluded_recipient_response_collection`, `resource_sharing_share_recipient_response_collection`, `resource_sharing_share_response_collection`, `tenant`, `user`.
- `cloudflare-identity_load`: Load one record for an entity. Supported entities: `account_resource_group`, `account_user_group`, `account_user_group_member`, `iam_single_invite`, `iam_single_member_response_with_policy`, `iam_single_membership_response_with_policy`, `iam_single_oauth_client`, `iam_single_organization`, `iam_single_permission_group`, `iam_single_role`, `iam_single_token`, `iam_sso_connector`, `iam_token_verify_response_single_segment`, `organization`, `organization_member`, `resource`, `resource_sharing_share_excluded_recipient_response_single`, `resource_sharing_share_recipient_response_single`, `resource_sharing_share_response_single`, `scim_discovery`, `scim_group`, `scim_user`, `tenant`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

