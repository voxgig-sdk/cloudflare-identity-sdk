-- Typed models for the CloudflareIdentity SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class AaaAuditLogsV2OrgHistoryResponseCollection
---@field errors table
---@field result table
---@field result_info table
---@field success boolean

---@class AaaAuditLogsV2OrgHistoryResponseCollectionListMatch
---@field audit_id string
---@field organization_id string
---@field action_time string
---@field before string
---@field cursor? string
---@field direction? string
---@field limit? number
---@field since string

---@class AaaAuditLogsV2OrgResponseCollection
---@field errors? table
---@field result? table
---@field result_info? table
---@field success? boolean

---@class AaaAuditLogsV2OrgResponseCollectionListMatch
---@field organization_id string
---@field action_result? table
---@field action_result_not? table
---@field action_type? table
---@field action_type_not? table
---@field actor_context? table
---@field actor_context_not? table
---@field actor_email? table
---@field actor_email_not? table
---@field actor_id? table
---@field actor_id_not? table
---@field actor_ip_address? table
---@field actor_ip_address_not? table
---@field actor_token_id? table
---@field actor_token_id_not? table
---@field actor_token_name? table
---@field actor_token_name_not? table
---@field actor_type? table
---@field actor_type_not? table
---@field before string
---@field cursor? string
---@field direction? string
---@field id? table
---@field id_not? table
---@field limit? number
---@field raw_cf_ray_id? table
---@field raw_cf_ray_id_not? table
---@field raw_method? table
---@field raw_method_not? table
---@field raw_status_code? table
---@field raw_status_code_not? table
---@field raw_uri? table
---@field raw_uri_not? table
---@field resource_id? table
---@field resource_id_not? table
---@field resource_product? table
---@field resource_product_not? table
---@field resource_scope? table
---@field resource_scope_not? table
---@field resource_type? table
---@field resource_type_not? table
---@field since string

---@class Account
---@field id? string

---@class AccountListMatch
---@field id string

---@class AccountResourceGroup
---@field errors table
---@field id? string
---@field messages table
---@field name string
---@field result table
---@field scope table
---@field success boolean

---@class AccountResourceGroupLoadMatch
---@field account_id string
---@field id string

---@class AccountResourceGroupListMatch
---@field account_id string
---@field id? string
---@field name? string

---@class AccountResourceGroupCreateData
---@field account_id string
---@field errors table
---@field id? string
---@field messages table
---@field name string
---@field result table
---@field scope table
---@field success boolean

---@class AccountResourceGroupUpdateData
---@field account_id string
---@field id string
---@field errors? table
---@field messages? table
---@field name? string
---@field result? table
---@field scope? table
---@field success? boolean

---@class AccountUserGroup
---@field id? string
---@field name string
---@field policies? table
---@field result table

---@class AccountUserGroupLoadMatch
---@field account_id string
---@field id string

---@class AccountUserGroupListMatch
---@field account_id string
---@field direction? string
---@field fuzzy_name? string
---@field id? string
---@field name? string
---@field page? number
---@field per_page? number

---@class AccountUserGroupCreateData
---@field account_id string
---@field id? string
---@field name string
---@field policies? table
---@field result table

---@class AccountUserGroupUpdateData
---@field account_id string
---@field id string
---@field name? string
---@field policies? table
---@field result? table

---@class AccountUserGroupMember
---@field id? string
---@field result table

---@class AccountUserGroupMemberLoadMatch
---@field account_id string
---@field id string
---@field user_group_id string

---@class AccountUserGroupMemberListMatch
---@field account_id string
---@field user_group_id string
---@field direction? string
---@field fuzzy_email? string
---@field page? number
---@field per_page? number

---@class AccountUserGroupMemberCreateData
---@field account_id string
---@field user_group_id string
---@field id? string
---@field result table

---@class AccountUserGroupMemberUpdateData
---@field account_id string
---@field user_group_id string
---@field id? string
---@field result? table

---@class AccountUserGroupMemberRemoveMatch
---@field account_id string
---@field id string
---@field user_group_id string

---@class BeginVerification
---@field errors table
---@field messages table
---@field success boolean

---@class BeginVerificationCreateData
---@field account_id string
---@field sso_connector_id string
---@field errors table
---@field messages table
---@field success boolean

---@class BillSubsApiClientSecretResponseSingle
---@field result? table

---@class BillSubsApiClientSecretResponseSingleCreateData
---@field account_id string
---@field result? table

---@class BillableUsageApiV2Usage
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class BillableUsageApiV2UsageListMatch
---@field organization_id string
---@field from? string
---@field to? string

---@class DnsCustomNameserversEmptyResponse3

---@class DnsCustomNameserversEmptyResponse3RemoveMatch
---@field custom_ns_id string
---@field tenant_tag string

---@class DnsCustomNameserversTcnsResponseCollection
---@field result? table

---@class DnsCustomNameserversTcnsResponseCollectionListMatch
---@field tenant_tag string

---@class DnsCustomNameserversTcnsResponseSingle
---@field ns_name string
---@field ns_set? number

---@class DnsCustomNameserversTcnsResponseSingleCreateData
---@field tenant_tag string
---@field ns_name string
---@field ns_set? number

---@class IamApiResponseSingleId

---@class IamApiResponseSingleIdRemoveMatch
---@field account_id string
---@field oauth_client_id string

---@class IamCollectionMemberResponseWithPolicy
---@field result? table

---@class IamCollectionMemberResponseWithPolicyListMatch
---@field account_id string
---@field direction? string
---@field order? any
---@field page? number
---@field per_page? number
---@field status? string

---@class IamCollectionOauthClient
---@field result? table

---@class IamCollectionOauthClientListMatch
---@field account_id string

---@class IamCollectionOauthScope
---@field result? table

---@class IamCollectionOauthScopeListMatch
---@field result? table

---@class IamCollectionOrganization
---@field result? table

---@class IamCollectionOrganizationListMatch
---@field direction? string
---@field match? string
---@field name? string
---@field order? string
---@field page? number
---@field per_page? number
---@field status? string

---@class IamCollectionPermissionGroup
---@field result? table

---@class IamCollectionPermissionGroupListMatch
---@field account_id string
---@field id? string
---@field label? string
---@field name? string
---@field page? number
---@field per_page? number

---@class IamCollectionRole
---@field result? table

---@class IamCollectionRoleListMatch
---@field account_id string
---@field page? number
---@field per_page? number

---@class IamCollectionToken
---@field result? table

---@class IamCollectionTokenListMatch
---@field direction? string
---@field include_expired? boolean
---@field page? number
---@field per_page? number

---@class IamOauthClientRotateSecret
---@field result? table

---@class IamOauthClientRotateSecretCreateData
---@field account_id string
---@field oauth_client_id string
---@field result? table

---@class IamPermissionsGroupResponseCollection
---@field result? table

---@class IamPermissionsGroupResponseCollectionListMatch
---@field name? string
---@field scope? string

---@class IamResponseSingleValue
---@field result? string

---@class IamResponseSingleValueUpdateData
---@field account_id? string
---@field token_id string
---@field result? string

---@class IamSchemasCollectionInvite
---@field result? table

---@class IamSchemasCollectionInviteListMatch
---@field result? table

---@class IamSingleInvite
---@field id? string
---@field result table
---@field status any

---@class IamSingleInviteLoadMatch
---@field id string

---@class IamSingleInviteUpdateData
---@field id string
---@field result? table
---@field status? any

---@class IamSingleMemberResponseWithPolicy
---@field result? table

---@class IamSingleMemberResponseWithPolicyLoadMatch
---@field account_id string
---@field member_id string

---@class IamSingleMemberResponseWithPolicyCreateData
---@field account_id string
---@field result? table

---@class IamSingleMemberResponseWithPolicyUpdateData
---@field account_id string
---@field member_id string
---@field result? table

---@class IamSingleMembershipResponseWithPolicy
---@field result? table
---@field status any

---@class IamSingleMembershipResponseWithPolicyLoadMatch
---@field membership_id string

---@class IamSingleMembershipResponseWithPolicyUpdateData
---@field membership_id string
---@field result? table
---@field status? any

---@class IamSingleOauthClient
---@field id? string
---@field result? any

---@class IamSingleOauthClientLoadMatch
---@field account_id string
---@field id string

---@class IamSingleOauthClientUpdateData
---@field account_id string
---@field id string
---@field result? any

---@class IamSingleOauthClientCreate

---@class IamSingleOauthClientCreateCreateData
---@field account_id string

---@class IamSingleOrganization
---@field id? string
---@field result? table

---@class IamSingleOrganizationLoadMatch
---@field id string

---@class IamSinglePermissionGroup
---@field id? string
---@field result table

---@class IamSinglePermissionGroupLoadMatch
---@field account_id string
---@field id string

---@class IamSingleRole
---@field id? string
---@field result table

---@class IamSingleRoleLoadMatch
---@field account_id string
---@field id string

---@class IamSingleToken
---@field id? string
---@field result? table

---@class IamSingleTokenLoadMatch
---@field account_id? string
---@field id string

---@class IamSingleTokenUpdateData
---@field account_id? string
---@field id string
---@field result? table

---@class IamSingleTokenCreate
---@field condition? table
---@field expires_on? string
---@field name string
---@field not_before? string
---@field policies table

---@class IamSingleTokenCreateCreateData
---@field condition? table
---@field expires_on? string
---@field name string
---@field not_before? string
---@field policies table

---@class IamSsoConnector
---@field begin_verification? boolean
---@field email_domain string
---@field enabled? boolean
---@field id? string
---@field result? table
---@field use_fedramp_language? boolean

---@class IamSsoConnectorLoadMatch
---@field account_id string
---@field id string

---@class IamSsoConnectorCreateData
---@field account_id string
---@field begin_verification? boolean
---@field email_domain string
---@field enabled? boolean
---@field id? string
---@field result? table
---@field use_fedramp_language? boolean

---@class IamSsoConnectorUpdateData
---@field account_id string
---@field id string
---@field begin_verification? boolean
---@field email_domain? string
---@field enabled? boolean
---@field result? table
---@field use_fedramp_language? boolean

---@class IamSsoConnectorCollection
---@field result? table

---@class IamSsoConnectorCollectionListMatch
---@field account_id string

---@class IamTokenVerifyResponseSingleSegment
---@field result any

---@class IamTokenVerifyResponseSingleSegmentLoadMatch
---@field result? any

---@class Member
---@field id? string

---@class MemberRemoveMatch
---@field account_id string
---@field id string

---@class OauthClient
---@field id? string

---@class OauthClientRemoveMatch
---@field account_id string
---@field id string

---@class Organization
---@field create_time string
---@field errors table
---@field id string
---@field messages table
---@field meta table
---@field name string
---@field parent table
---@field profile table
---@field result table
---@field result_info table
---@field status string
---@field success boolean

---@class OrganizationLoadMatch
---@field id string

---@class OrganizationListMatch
---@field containing_account? string
---@field containing_organization? string
---@field containing_user? string
---@field id? table
---@field name? string
---@field name_contain? string
---@field name_ends_with? string
---@field name_starts_with? string
---@field page_size? number
---@field page_token? string
---@field parent_id? string

---@class OrganizationCreateData
---@field create_time string
---@field errors table
---@field id string
---@field messages table
---@field meta table
---@field name string
---@field parent table
---@field profile table
---@field result table
---@field result_info table
---@field status string
---@field success boolean

---@class OrganizationUpdateData
---@field id string
---@field member_code? string
---@field create_time? string
---@field errors? table
---@field messages? table
---@field meta? table
---@field name? string
---@field parent? table
---@field profile? table
---@field result? table
---@field result_info? table
---@field status? string
---@field success? boolean

---@class OrganizationRemoveMatch
---@field id string

---@class OrganizationMember
---@field errors table
---@field id? string
---@field member table
---@field messages table
---@field result table
---@field result_info table
---@field success boolean

---@class OrganizationMemberLoadMatch
---@field id string
---@field organization_id string

---@class OrganizationMemberListMatch
---@field id string
---@field page_size? number
---@field page_token? string
---@field status? table
---@field user_email? string
---@field user_email_contain? string
---@field user_email_ends_with? string
---@field user_email_starts_with? string

---@class OrganizationMemberCreateData
---@field id string
---@field errors table
---@field member table
---@field messages table
---@field result table
---@field result_info table
---@field success boolean

---@class OrganizationMemberRemoveMatch
---@field id string
---@field organization_id string

---@class OrganizationsApiProfile
---@field code number
---@field message string

---@class OrganizationsApiProfileListMatch
---@field organization_id string

---@class Resource
---@field errors table
---@field id? string
---@field meta table
---@field resource_account_id string
---@field resource_id string
---@field resource_type string
---@field result? any
---@field success boolean

---@class ResourceLoadMatch
---@field account_id string
---@field id string
---@field share_id string

---@class ResourceListMatch
---@field account_id string
---@field share_id string
---@field page? number
---@field per_page? number
---@field resource_type? string
---@field status? string

---@class ResourceCreateData
---@field account_id string
---@field share_id string
---@field errors table
---@field id? string
---@field meta table
---@field resource_account_id string
---@field resource_id string
---@field resource_type string
---@field result? any
---@field success boolean

---@class ResourceUpdateData
---@field account_id string
---@field id string
---@field share_id string
---@field errors? table
---@field meta? table
---@field resource_account_id? string
---@field resource_id? string
---@field resource_type? string
---@field result? any
---@field success? boolean

---@class ResourceRemoveMatch
---@field account_id string
---@field id string
---@field share_id string

---@class ResourceGroup
---@field id? string

---@class ResourceGroupRemoveMatch
---@field account_id string
---@field id string

---@class ResourceSharing

---@class ResourceSharingUpdateData
---@field account_id string
---@field share_id string

---@class ResourceSharingShareExcludedRecipientResponseCollection
---@field result? table

---@class ResourceSharingShareExcludedRecipientResponseCollectionListMatch
---@field account_id string
---@field share_id string
---@field page? number
---@field per_page? number

---@class ResourceSharingShareExcludedRecipientResponseSingle
---@field account_id string
---@field errors table
---@field result? any
---@field success boolean

---@class ResourceSharingShareExcludedRecipientResponseSingleLoadMatch
---@field account_id string
---@field excluded_recipient_id string
---@field share_id string

---@class ResourceSharingShareExcludedRecipientResponseSingleCreateData
---@field account_id string
---@field share_id string
---@field errors table
---@field result? any
---@field success boolean

---@class ResourceSharingShareExcludedRecipientResponseSingleRemoveMatch
---@field account_id string
---@field excluded_recipient_id string
---@field share_id string

---@class ResourceSharingShareRecipientResponseCollection
---@field result? table

---@class ResourceSharingShareRecipientResponseCollectionListMatch
---@field account_id string
---@field share_id string
---@field include_resource? boolean
---@field page? number
---@field per_page? number

---@class ResourceSharingShareRecipientResponseSingle
---@field account_id? string
---@field errors table
---@field organization_id? string
---@field recipient_account_id? string
---@field result? any
---@field success boolean

---@class ResourceSharingShareRecipientResponseSingleLoadMatch
---@field account_id string
---@field recipient_id string
---@field share_id string
---@field include_resource? boolean

---@class ResourceSharingShareRecipientResponseSingleCreateData
---@field account_id string
---@field share_id string
---@field errors table
---@field organization_id? string
---@field recipient_account_id? string
---@field result? any
---@field success boolean

---@class ResourceSharingShareRecipientResponseSingleRemoveMatch
---@field account_id string
---@field recipient_id string
---@field share_id string

---@class ResourceSharingShareResponseCollection
---@field result? table

---@class ResourceSharingShareResponseCollectionListMatch
---@field account_id string
---@field direction? string
---@field include_recipient_count? boolean
---@field include_resource? boolean
---@field kind? string
---@field order? string
---@field page? number
---@field per_page? number
---@field resource_type? table
---@field status? string
---@field tag? table
---@field target_type? string

---@class ResourceSharingShareResponseSingle
---@field errors table
---@field name string
---@field recipients table
---@field resources table
---@field result? any
---@field success boolean

---@class ResourceSharingShareResponseSingleLoadMatch
---@field account_id string
---@field share_id string
---@field include_recipient_count? boolean
---@field include_resource? boolean

---@class ResourceSharingShareResponseSingleCreateData
---@field account_id string
---@field errors table
---@field name string
---@field recipients table
---@field resources table
---@field result? any
---@field success boolean

---@class ResourceSharingShareResponseSingleUpdateData
---@field account_id string
---@field share_id string
---@field errors? table
---@field name? string
---@field recipients? table
---@field resources? table
---@field result? any
---@field success? boolean

---@class ResourceSharingShareResponseSingleRemoveMatch
---@field account_id string
---@field share_id string

---@class ScimDiscovery

---@class ScimDiscoveryLoadMatch
---@field account_id string
---@field resource_type_id? string
---@field schema_id? string

---@class ScimGroup
---@field id? string

---@class ScimGroupLoadMatch
---@field account_id string
---@field count? number
---@field filter? string
---@field start_index? number
---@field id? string

---@class ScimGroupCreateData
---@field account_id string
---@field id? string

---@class ScimGroupUpdateData
---@field account_id string
---@field id string

---@class ScimGroupRemoveMatch
---@field account_id string
---@field id string

---@class ScimUser
---@field id? string

---@class ScimUserLoadMatch
---@field account_id string
---@field count? number
---@field filter? string
---@field start_index? number
---@field id? string

---@class ScimUserCreateData
---@field account_id string
---@field id? string

---@class ScimUserUpdateData
---@field account_id string
---@field id string

---@class ScimUserRemoveMatch
---@field account_id string
---@field id string

---@class SsoConnector
---@field id? string

---@class SsoConnectorRemoveMatch
---@field account_id string
---@field id string

---@class Tenant
---@field errors table
---@field id? string
---@field messages table
---@field result table
---@field success boolean

---@class TenantLoadMatch
---@field id string

---@class TenantListMatch
---@field id string

---@class Token
---@field id? string

---@class TokenRemoveMatch
---@field account_id? string
---@field id string

---@class User

---@class UserListMatch

---@class UserGroup
---@field id? string

---@class UserGroupRemoveMatch
---@field account_id string
---@field id string

---@class UsersAccountMembership
---@field id? string

---@class UsersAccountMembershipRemoveMatch
---@field id string

---@class UsersOrganization
---@field id? string

---@class UsersOrganizationRemoveMatch
---@field id string

local M = {}

return M
