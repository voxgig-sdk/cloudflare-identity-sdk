<?php
declare(strict_types=1);

// Typed models for the CloudflareIdentity SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** AaaAuditLogsV2OrgHistoryResponseCollection entity data model. */
class AaaAuditLogsV2OrgHistoryResponseCollection
{
    public array $errors;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for AaaAuditLogsV2OrgHistoryResponseCollection#list. */
class AaaAuditLogsV2OrgHistoryResponseCollectionListMatch
{
    public string $audit_id;
    public string $organization_id;
    public string $action_time;
    public string $before;
    public ?string $cursor = null;
    public ?string $direction = null;
    public ?float $limit = null;
    public string $since;
}

/** AaaAuditLogsV2OrgResponseCollection entity data model. */
class AaaAuditLogsV2OrgResponseCollection
{
    public ?array $errors = null;
    public ?array $result = null;
    public ?array $result_info = null;
    public ?bool $success = null;
}

/** Request payload for AaaAuditLogsV2OrgResponseCollection#list. */
class AaaAuditLogsV2OrgResponseCollectionListMatch
{
    public string $organization_id;
    public ?array $action_result = null;
    public ?array $action_result_not = null;
    public ?array $action_type = null;
    public ?array $action_type_not = null;
    public ?array $actor_context = null;
    public ?array $actor_context_not = null;
    public ?array $actor_email = null;
    public ?array $actor_email_not = null;
    public ?array $actor_id = null;
    public ?array $actor_id_not = null;
    public ?array $actor_ip_address = null;
    public ?array $actor_ip_address_not = null;
    public ?array $actor_token_id = null;
    public ?array $actor_token_id_not = null;
    public ?array $actor_token_name = null;
    public ?array $actor_token_name_not = null;
    public ?array $actor_type = null;
    public ?array $actor_type_not = null;
    public string $before;
    public ?string $cursor = null;
    public ?string $direction = null;
    public ?array $id = null;
    public ?array $id_not = null;
    public ?float $limit = null;
    public ?array $raw_cf_ray_id = null;
    public ?array $raw_cf_ray_id_not = null;
    public ?array $raw_method = null;
    public ?array $raw_method_not = null;
    public ?array $raw_status_code = null;
    public ?array $raw_status_code_not = null;
    public ?array $raw_uri = null;
    public ?array $raw_uri_not = null;
    public ?array $resource_id = null;
    public ?array $resource_id_not = null;
    public ?array $resource_product = null;
    public ?array $resource_product_not = null;
    public ?array $resource_scope = null;
    public ?array $resource_scope_not = null;
    public ?array $resource_type = null;
    public ?array $resource_type_not = null;
    public string $since;
}

/** Account entity data model. */
class Account
{
    public ?string $id = null;
}

/** Request payload for Account#list. */
class AccountListMatch
{
    public string $id;
}

/** AccountResourceGroup entity data model. */
class AccountResourceGroup
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public string $name;
    public array $result;
    public array $scope;
    public bool $success;
}

/** Request payload for AccountResourceGroup#load. */
class AccountResourceGroupLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for AccountResourceGroup#list. */
class AccountResourceGroupListMatch
{
    public string $account_id;
    public ?string $id = null;
    public ?string $name = null;
}

/** Request payload for AccountResourceGroup#create. */
class AccountResourceGroupCreateData
{
    public string $account_id;
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public string $name;
    public array $result;
    public array $scope;
    public bool $success;
}

/** Request payload for AccountResourceGroup#update. */
class AccountResourceGroupUpdateData
{
    public string $account_id;
    public string $id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?string $name = null;
    public ?array $result = null;
    public ?array $scope = null;
    public ?bool $success = null;
}

/** AccountUserGroup entity data model. */
class AccountUserGroup
{
    public ?string $id = null;
    public string $name;
    public ?array $policies = null;
    public array $result;
}

/** Request payload for AccountUserGroup#load. */
class AccountUserGroupLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for AccountUserGroup#list. */
class AccountUserGroupListMatch
{
    public string $account_id;
    public ?string $direction = null;
    public ?string $fuzzy_name = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?float $page = null;
    public ?float $per_page = null;
}

/** Request payload for AccountUserGroup#create. */
class AccountUserGroupCreateData
{
    public string $account_id;
    public ?string $id = null;
    public string $name;
    public ?array $policies = null;
    public array $result;
}

/** Request payload for AccountUserGroup#update. */
class AccountUserGroupUpdateData
{
    public string $account_id;
    public string $id;
    public ?string $name = null;
    public ?array $policies = null;
    public ?array $result = null;
}

/** AccountUserGroupMember entity data model. */
class AccountUserGroupMember
{
    public ?string $id = null;
    public array $result;
}

/** Request payload for AccountUserGroupMember#load. */
class AccountUserGroupMemberLoadMatch
{
    public string $account_id;
    public string $id;
    public string $user_group_id;
}

/** Request payload for AccountUserGroupMember#list. */
class AccountUserGroupMemberListMatch
{
    public string $account_id;
    public string $user_group_id;
    public ?string $direction = null;
    public ?string $fuzzy_email = null;
    public ?float $page = null;
    public ?float $per_page = null;
}

/** Request payload for AccountUserGroupMember#create. */
class AccountUserGroupMemberCreateData
{
    public string $account_id;
    public string $user_group_id;
    public ?string $id = null;
    public array $result;
}

/** Request payload for AccountUserGroupMember#update. */
class AccountUserGroupMemberUpdateData
{
    public string $account_id;
    public string $user_group_id;
    public ?string $id = null;
    public ?array $result = null;
}

/** Request payload for AccountUserGroupMember#remove. */
class AccountUserGroupMemberRemoveMatch
{
    public string $account_id;
    public string $id;
    public string $user_group_id;
}

/** BeginVerification entity data model. */
class BeginVerification
{
    public array $errors;
    public array $messages;
    public bool $success;
}

/** Request payload for BeginVerification#create. */
class BeginVerificationCreateData
{
    public string $account_id;
    public string $sso_connector_id;
    public array $errors;
    public array $messages;
    public bool $success;
}

/** BillSubsApiClientSecretResponseSingle entity data model. */
class BillSubsApiClientSecretResponseSingle
{
    public ?array $result = null;
}

/** Request payload for BillSubsApiClientSecretResponseSingle#create. */
class BillSubsApiClientSecretResponseSingleCreateData
{
    public string $account_id;
    public ?array $result = null;
}

/** BillableUsageApiV2Usage entity data model. */
class BillableUsageApiV2Usage
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for BillableUsageApiV2Usage#list. */
class BillableUsageApiV2UsageListMatch
{
    public string $organization_id;
    public ?string $from = null;
    public ?string $to = null;
}

/** DnsCustomNameserversEmptyResponse3 entity data model. */
class DnsCustomNameserversEmptyResponse3
{
}

/** Request payload for DnsCustomNameserversEmptyResponse3#remove. */
class DnsCustomNameserversEmptyResponse3RemoveMatch
{
    public string $custom_ns_id;
    public string $tenant_tag;
}

/** DnsCustomNameserversTcnsResponseCollection entity data model. */
class DnsCustomNameserversTcnsResponseCollection
{
    public ?array $result = null;
}

/** Request payload for DnsCustomNameserversTcnsResponseCollection#list. */
class DnsCustomNameserversTcnsResponseCollectionListMatch
{
    public string $tenant_tag;
}

/** DnsCustomNameserversTcnsResponseSingle entity data model. */
class DnsCustomNameserversTcnsResponseSingle
{
    public string $ns_name;
    public ?float $ns_set = null;
}

/** Request payload for DnsCustomNameserversTcnsResponseSingle#create. */
class DnsCustomNameserversTcnsResponseSingleCreateData
{
    public string $tenant_tag;
    public string $ns_name;
    public ?float $ns_set = null;
}

/** IamApiResponseSingleId entity data model. */
class IamApiResponseSingleId
{
}

/** Request payload for IamApiResponseSingleId#remove. */
class IamApiResponseSingleIdRemoveMatch
{
    public string $account_id;
    public string $oauth_client_id;
}

/** IamCollectionMemberResponseWithPolicy entity data model. */
class IamCollectionMemberResponseWithPolicy
{
    public ?array $result = null;
}

/** Request payload for IamCollectionMemberResponseWithPolicy#list. */
class IamCollectionMemberResponseWithPolicyListMatch
{
    public string $account_id;
    public ?string $direction = null;
    public mixed $order = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?string $status = null;
}

/** IamCollectionOauthClient entity data model. */
class IamCollectionOauthClient
{
    public ?array $result = null;
}

/** Request payload for IamCollectionOauthClient#list. */
class IamCollectionOauthClientListMatch
{
    public string $account_id;
}

/** IamCollectionOauthScope entity data model. */
class IamCollectionOauthScope
{
    public ?array $result = null;
}

/** Request payload for IamCollectionOauthScope#list. */
class IamCollectionOauthScopeListMatch
{
    public ?array $result = null;
}

/** IamCollectionOrganization entity data model. */
class IamCollectionOrganization
{
    public ?array $result = null;
}

/** Request payload for IamCollectionOrganization#list. */
class IamCollectionOrganizationListMatch
{
    public ?string $direction = null;
    public ?string $match = null;
    public ?string $name = null;
    public ?string $order = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?string $status = null;
}

/** IamCollectionPermissionGroup entity data model. */
class IamCollectionPermissionGroup
{
    public ?array $result = null;
}

/** Request payload for IamCollectionPermissionGroup#list. */
class IamCollectionPermissionGroupListMatch
{
    public string $account_id;
    public ?string $id = null;
    public ?string $label = null;
    public ?string $name = null;
    public ?float $page = null;
    public ?float $per_page = null;
}

/** IamCollectionRole entity data model. */
class IamCollectionRole
{
    public ?array $result = null;
}

/** Request payload for IamCollectionRole#list. */
class IamCollectionRoleListMatch
{
    public string $account_id;
    public ?float $page = null;
    public ?float $per_page = null;
}

/** IamCollectionToken entity data model. */
class IamCollectionToken
{
    public ?array $result = null;
}

/** Request payload for IamCollectionToken#list. */
class IamCollectionTokenListMatch
{
    public ?string $direction = null;
    public ?bool $include_expired = null;
    public ?float $page = null;
    public ?float $per_page = null;
}

/** IamOauthClientRotateSecret entity data model. */
class IamOauthClientRotateSecret
{
    public ?array $result = null;
}

/** Request payload for IamOauthClientRotateSecret#create. */
class IamOauthClientRotateSecretCreateData
{
    public string $account_id;
    public string $oauth_client_id;
    public ?array $result = null;
}

/** IamPermissionsGroupResponseCollection entity data model. */
class IamPermissionsGroupResponseCollection
{
    public ?array $result = null;
}

/** Request payload for IamPermissionsGroupResponseCollection#list. */
class IamPermissionsGroupResponseCollectionListMatch
{
    public ?string $name = null;
    public ?string $scope = null;
}

/** IamResponseSingleValue entity data model. */
class IamResponseSingleValue
{
    public ?string $result = null;
}

/** Request payload for IamResponseSingleValue#update. */
class IamResponseSingleValueUpdateData
{
    public ?string $account_id = null;
    public string $token_id;
    public ?string $result = null;
}

/** IamSchemasCollectionInvite entity data model. */
class IamSchemasCollectionInvite
{
    public ?array $result = null;
}

/** Request payload for IamSchemasCollectionInvite#list. */
class IamSchemasCollectionInviteListMatch
{
    public ?array $result = null;
}

/** IamSingleInvite entity data model. */
class IamSingleInvite
{
    public ?string $id = null;
    public array $result;
    public mixed $status;
}

/** Request payload for IamSingleInvite#load. */
class IamSingleInviteLoadMatch
{
    public string $id;
}

/** Request payload for IamSingleInvite#update. */
class IamSingleInviteUpdateData
{
    public string $id;
    public ?array $result = null;
    public mixed $status = null;
}

/** IamSingleMemberResponseWithPolicy entity data model. */
class IamSingleMemberResponseWithPolicy
{
    public ?array $result = null;
}

/** Request payload for IamSingleMemberResponseWithPolicy#load. */
class IamSingleMemberResponseWithPolicyLoadMatch
{
    public string $account_id;
    public string $member_id;
}

/** Request payload for IamSingleMemberResponseWithPolicy#create. */
class IamSingleMemberResponseWithPolicyCreateData
{
    public string $account_id;
    public ?array $result = null;
}

/** Request payload for IamSingleMemberResponseWithPolicy#update. */
class IamSingleMemberResponseWithPolicyUpdateData
{
    public string $account_id;
    public string $member_id;
    public ?array $result = null;
}

/** IamSingleMembershipResponseWithPolicy entity data model. */
class IamSingleMembershipResponseWithPolicy
{
    public ?array $result = null;
    public mixed $status;
}

/** Request payload for IamSingleMembershipResponseWithPolicy#load. */
class IamSingleMembershipResponseWithPolicyLoadMatch
{
    public string $membership_id;
}

/** Request payload for IamSingleMembershipResponseWithPolicy#update. */
class IamSingleMembershipResponseWithPolicyUpdateData
{
    public string $membership_id;
    public ?array $result = null;
    public mixed $status = null;
}

/** IamSingleOauthClient entity data model. */
class IamSingleOauthClient
{
    public ?string $id = null;
    public mixed $result = null;
}

/** Request payload for IamSingleOauthClient#load. */
class IamSingleOauthClientLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for IamSingleOauthClient#update. */
class IamSingleOauthClientUpdateData
{
    public string $account_id;
    public string $id;
    public mixed $result = null;
}

/** IamSingleOauthClientCreate entity data model. */
class IamSingleOauthClientCreate
{
}

/** Request payload for IamSingleOauthClientCreate#create. */
class IamSingleOauthClientCreateCreateData
{
    public string $account_id;
}

/** IamSingleOrganization entity data model. */
class IamSingleOrganization
{
    public ?string $id = null;
    public ?array $result = null;
}

/** Request payload for IamSingleOrganization#load. */
class IamSingleOrganizationLoadMatch
{
    public string $id;
}

/** IamSinglePermissionGroup entity data model. */
class IamSinglePermissionGroup
{
    public ?string $id = null;
    public array $result;
}

/** Request payload for IamSinglePermissionGroup#load. */
class IamSinglePermissionGroupLoadMatch
{
    public string $account_id;
    public string $id;
}

/** IamSingleRole entity data model. */
class IamSingleRole
{
    public ?string $id = null;
    public array $result;
}

/** Request payload for IamSingleRole#load. */
class IamSingleRoleLoadMatch
{
    public string $account_id;
    public string $id;
}

/** IamSingleToken entity data model. */
class IamSingleToken
{
    public ?string $id = null;
    public ?array $result = null;
}

/** Request payload for IamSingleToken#load. */
class IamSingleTokenLoadMatch
{
    public ?string $account_id = null;
    public string $id;
}

/** Request payload for IamSingleToken#update. */
class IamSingleTokenUpdateData
{
    public ?string $account_id = null;
    public string $id;
    public ?array $result = null;
}

/** IamSingleTokenCreate entity data model. */
class IamSingleTokenCreate
{
    public ?array $condition = null;
    public ?string $expires_on = null;
    public string $name;
    public ?string $not_before = null;
    public array $policies;
}

/** Request payload for IamSingleTokenCreate#create. */
class IamSingleTokenCreateCreateData
{
    public ?array $condition = null;
    public ?string $expires_on = null;
    public string $name;
    public ?string $not_before = null;
    public array $policies;
}

/** IamSsoConnector entity data model. */
class IamSsoConnector
{
    public ?bool $begin_verification = null;
    public string $email_domain;
    public ?bool $enabled = null;
    public ?string $id = null;
    public ?array $result = null;
    public ?bool $use_fedramp_language = null;
}

/** Request payload for IamSsoConnector#load. */
class IamSsoConnectorLoadMatch
{
    public string $account_id;
    public string $id;
}

/** Request payload for IamSsoConnector#create. */
class IamSsoConnectorCreateData
{
    public string $account_id;
    public ?bool $begin_verification = null;
    public string $email_domain;
    public ?bool $enabled = null;
    public ?string $id = null;
    public ?array $result = null;
    public ?bool $use_fedramp_language = null;
}

/** Request payload for IamSsoConnector#update. */
class IamSsoConnectorUpdateData
{
    public string $account_id;
    public string $id;
    public ?bool $begin_verification = null;
    public ?string $email_domain = null;
    public ?bool $enabled = null;
    public ?array $result = null;
    public ?bool $use_fedramp_language = null;
}

/** IamSsoConnectorCollection entity data model. */
class IamSsoConnectorCollection
{
    public ?array $result = null;
}

/** Request payload for IamSsoConnectorCollection#list. */
class IamSsoConnectorCollectionListMatch
{
    public string $account_id;
}

/** IamTokenVerifyResponseSingleSegment entity data model. */
class IamTokenVerifyResponseSingleSegment
{
    public mixed $result;
}

/** Request payload for IamTokenVerifyResponseSingleSegment#load. */
class IamTokenVerifyResponseSingleSegmentLoadMatch
{
    public mixed $result = null;
}

/** Member entity data model. */
class Member
{
    public ?string $id = null;
}

/** Request payload for Member#remove. */
class MemberRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** OauthClient entity data model. */
class OauthClient
{
    public ?string $id = null;
}

/** Request payload for OauthClient#remove. */
class OauthClientRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** Organization entity data model. */
class Organization
{
    public string $create_time;
    public array $errors;
    public string $id;
    public array $messages;
    public array $meta;
    public string $name;
    public array $parent;
    public array $profile;
    public array $result;
    public array $result_info;
    public string $status;
    public bool $success;
}

/** Request payload for Organization#load. */
class OrganizationLoadMatch
{
    public string $id;
}

/** Request payload for Organization#list. */
class OrganizationListMatch
{
    public ?string $containing_account = null;
    public ?string $containing_organization = null;
    public ?string $containing_user = null;
    public ?array $id = null;
    public ?string $name = null;
    public ?string $name_contain = null;
    public ?string $name_ends_with = null;
    public ?string $name_starts_with = null;
    public ?int $page_size = null;
    public ?string $page_token = null;
    public ?string $parent_id = null;
}

/** Request payload for Organization#create. */
class OrganizationCreateData
{
    public string $create_time;
    public array $errors;
    public string $id;
    public array $messages;
    public array $meta;
    public string $name;
    public array $parent;
    public array $profile;
    public array $result;
    public array $result_info;
    public string $status;
    public bool $success;
}

/** Request payload for Organization#update. */
class OrganizationUpdateData
{
    public string $id;
    public ?string $member_code = null;
    public ?string $create_time = null;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $meta = null;
    public ?string $name = null;
    public ?array $parent = null;
    public ?array $profile = null;
    public ?array $result = null;
    public ?array $result_info = null;
    public ?string $status = null;
    public ?bool $success = null;
}

/** Request payload for Organization#remove. */
class OrganizationRemoveMatch
{
    public string $id;
}

/** OrganizationMember entity data model. */
class OrganizationMember
{
    public array $errors;
    public ?string $id = null;
    public array $member;
    public array $messages;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for OrganizationMember#load. */
class OrganizationMemberLoadMatch
{
    public string $id;
    public string $organization_id;
}

/** Request payload for OrganizationMember#list. */
class OrganizationMemberListMatch
{
    public string $id;
    public ?int $page_size = null;
    public ?string $page_token = null;
    public ?array $status = null;
    public ?string $user_email = null;
    public ?string $user_email_contain = null;
    public ?string $user_email_ends_with = null;
    public ?string $user_email_starts_with = null;
}

/** Request payload for OrganizationMember#create. */
class OrganizationMemberCreateData
{
    public string $id;
    public array $errors;
    public array $member;
    public array $messages;
    public array $result;
    public array $result_info;
    public bool $success;
}

/** Request payload for OrganizationMember#remove. */
class OrganizationMemberRemoveMatch
{
    public string $id;
    public string $organization_id;
}

/** OrganizationsApiProfile entity data model. */
class OrganizationsApiProfile
{
    public int $code;
    public string $message;
}

/** Request payload for OrganizationsApiProfile#list. */
class OrganizationsApiProfileListMatch
{
    public string $organization_id;
}

/** Resource entity data model. */
class ResourceType
{
    public array $errors;
    public ?string $id = null;
    public array $meta;
    public string $resource_account_id;
    public string $resource_id;
    public string $resource_type;
    public mixed $result = null;
    public bool $success;
}

/** Request payload for Resource#load. */
class ResourceLoadMatch
{
    public string $account_id;
    public string $id;
    public string $share_id;
}

/** Request payload for Resource#list. */
class ResourceListMatch
{
    public string $account_id;
    public string $share_id;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $resource_type = null;
    public ?string $status = null;
}

/** Request payload for Resource#create. */
class ResourceCreateData
{
    public string $account_id;
    public string $share_id;
    public array $errors;
    public ?string $id = null;
    public array $meta;
    public string $resource_account_id;
    public string $resource_id;
    public string $resource_type;
    public mixed $result = null;
    public bool $success;
}

/** Request payload for Resource#update. */
class ResourceUpdateData
{
    public string $account_id;
    public string $id;
    public string $share_id;
    public ?array $errors = null;
    public ?array $meta = null;
    public ?string $resource_account_id = null;
    public ?string $resource_id = null;
    public ?string $resource_type = null;
    public mixed $result = null;
    public ?bool $success = null;
}

/** Request payload for Resource#remove. */
class ResourceRemoveMatch
{
    public string $account_id;
    public string $id;
    public string $share_id;
}

/** ResourceGroup entity data model. */
class ResourceGroup
{
    public ?string $id = null;
}

/** Request payload for ResourceGroup#remove. */
class ResourceGroupRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** ResourceSharing entity data model. */
class ResourceSharing
{
}

/** Request payload for ResourceSharing#update. */
class ResourceSharingUpdateData
{
    public string $account_id;
    public string $share_id;
}

/** ResourceSharingShareExcludedRecipientResponseCollection entity data model. */
class ResourceSharingShareExcludedRecipientResponseCollection
{
    public ?array $result = null;
}

/** Request payload for ResourceSharingShareExcludedRecipientResponseCollection#list. */
class ResourceSharingShareExcludedRecipientResponseCollectionListMatch
{
    public string $account_id;
    public string $share_id;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** ResourceSharingShareExcludedRecipientResponseSingle entity data model. */
class ResourceSharingShareExcludedRecipientResponseSingle
{
    public string $account_id;
    public array $errors;
    public mixed $result = null;
    public bool $success;
}

/** Request payload for ResourceSharingShareExcludedRecipientResponseSingle#load. */
class ResourceSharingShareExcludedRecipientResponseSingleLoadMatch
{
    public string $account_id;
    public string $excluded_recipient_id;
    public string $share_id;
}

/** Request payload for ResourceSharingShareExcludedRecipientResponseSingle#create. */
class ResourceSharingShareExcludedRecipientResponseSingleCreateData
{
    public string $account_id;
    public string $share_id;
    public array $errors;
    public mixed $result = null;
    public bool $success;
}

/** Request payload for ResourceSharingShareExcludedRecipientResponseSingle#remove. */
class ResourceSharingShareExcludedRecipientResponseSingleRemoveMatch
{
    public string $account_id;
    public string $excluded_recipient_id;
    public string $share_id;
}

/** ResourceSharingShareRecipientResponseCollection entity data model. */
class ResourceSharingShareRecipientResponseCollection
{
    public ?array $result = null;
}

/** Request payload for ResourceSharingShareRecipientResponseCollection#list. */
class ResourceSharingShareRecipientResponseCollectionListMatch
{
    public string $account_id;
    public string $share_id;
    public ?bool $include_resource = null;
    public ?int $page = null;
    public ?int $per_page = null;
}

/** ResourceSharingShareRecipientResponseSingle entity data model. */
class ResourceSharingShareRecipientResponseSingle
{
    public ?string $account_id = null;
    public array $errors;
    public ?string $organization_id = null;
    public ?string $recipient_account_id = null;
    public mixed $result = null;
    public bool $success;
}

/** Request payload for ResourceSharingShareRecipientResponseSingle#load. */
class ResourceSharingShareRecipientResponseSingleLoadMatch
{
    public string $account_id;
    public string $recipient_id;
    public string $share_id;
    public ?bool $include_resource = null;
}

/** Request payload for ResourceSharingShareRecipientResponseSingle#create. */
class ResourceSharingShareRecipientResponseSingleCreateData
{
    public string $account_id;
    public string $share_id;
    public array $errors;
    public ?string $organization_id = null;
    public ?string $recipient_account_id = null;
    public mixed $result = null;
    public bool $success;
}

/** Request payload for ResourceSharingShareRecipientResponseSingle#remove. */
class ResourceSharingShareRecipientResponseSingleRemoveMatch
{
    public string $account_id;
    public string $recipient_id;
    public string $share_id;
}

/** ResourceSharingShareResponseCollection entity data model. */
class ResourceSharingShareResponseCollection
{
    public ?array $result = null;
}

/** Request payload for ResourceSharingShareResponseCollection#list. */
class ResourceSharingShareResponseCollectionListMatch
{
    public string $account_id;
    public ?string $direction = null;
    public ?bool $include_recipient_count = null;
    public ?bool $include_resource = null;
    public ?string $kind = null;
    public ?string $order = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?array $resource_type = null;
    public ?string $status = null;
    public ?array $tag = null;
    public ?string $target_type = null;
}

/** ResourceSharingShareResponseSingle entity data model. */
class ResourceSharingShareResponseSingle
{
    public array $errors;
    public string $name;
    public array $recipients;
    public array $resources;
    public mixed $result = null;
    public bool $success;
}

/** Request payload for ResourceSharingShareResponseSingle#load. */
class ResourceSharingShareResponseSingleLoadMatch
{
    public string $account_id;
    public string $share_id;
    public ?bool $include_recipient_count = null;
    public ?bool $include_resource = null;
}

/** Request payload for ResourceSharingShareResponseSingle#create. */
class ResourceSharingShareResponseSingleCreateData
{
    public string $account_id;
    public array $errors;
    public string $name;
    public array $recipients;
    public array $resources;
    public mixed $result = null;
    public bool $success;
}

/** Request payload for ResourceSharingShareResponseSingle#update. */
class ResourceSharingShareResponseSingleUpdateData
{
    public string $account_id;
    public string $share_id;
    public ?array $errors = null;
    public ?string $name = null;
    public ?array $recipients = null;
    public ?array $resources = null;
    public mixed $result = null;
    public ?bool $success = null;
}

/** Request payload for ResourceSharingShareResponseSingle#remove. */
class ResourceSharingShareResponseSingleRemoveMatch
{
    public string $account_id;
    public string $share_id;
}

/** ScimDiscovery entity data model. */
class ScimDiscovery
{
}

/** Request payload for ScimDiscovery#load. */
class ScimDiscoveryLoadMatch
{
    public string $account_id;
    public ?string $resource_type_id = null;
    public ?string $schema_id = null;
}

/** ScimGroup entity data model. */
class ScimGroup
{
    public ?string $id = null;
}

/** Request payload for ScimGroup#load. */
class ScimGroupLoadMatch
{
    public string $account_id;
    public ?int $count = null;
    public ?string $filter = null;
    public ?int $start_index = null;
    public ?string $id = null;
}

/** Request payload for ScimGroup#create. */
class ScimGroupCreateData
{
    public string $account_id;
    public ?string $id = null;
}

/** Request payload for ScimGroup#update. */
class ScimGroupUpdateData
{
    public string $account_id;
    public string $id;
}

/** Request payload for ScimGroup#remove. */
class ScimGroupRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** ScimUser entity data model. */
class ScimUser
{
    public ?string $id = null;
}

/** Request payload for ScimUser#load. */
class ScimUserLoadMatch
{
    public string $account_id;
    public ?int $count = null;
    public ?string $filter = null;
    public ?int $start_index = null;
    public ?string $id = null;
}

/** Request payload for ScimUser#create. */
class ScimUserCreateData
{
    public string $account_id;
    public ?string $id = null;
}

/** Request payload for ScimUser#update. */
class ScimUserUpdateData
{
    public string $account_id;
    public string $id;
}

/** Request payload for ScimUser#remove. */
class ScimUserRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** SsoConnector entity data model. */
class SsoConnector
{
    public ?string $id = null;
}

/** Request payload for SsoConnector#remove. */
class SsoConnectorRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** Tenant entity data model. */
class Tenant
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for Tenant#load. */
class TenantLoadMatch
{
    public string $id;
}

/** Request payload for Tenant#list. */
class TenantListMatch
{
    public string $id;
}

/** Token entity data model. */
class Token
{
    public ?string $id = null;
}

/** Request payload for Token#remove. */
class TokenRemoveMatch
{
    public ?string $account_id = null;
    public string $id;
}

/** User entity data model. */
class User
{
}

/** Request payload for User#list. */
class UserListMatch
{
}

/** UserGroup entity data model. */
class UserGroup
{
    public ?string $id = null;
}

/** Request payload for UserGroup#remove. */
class UserGroupRemoveMatch
{
    public string $account_id;
    public string $id;
}

/** UsersAccountMembership entity data model. */
class UsersAccountMembership
{
    public ?string $id = null;
}

/** Request payload for UsersAccountMembership#remove. */
class UsersAccountMembershipRemoveMatch
{
    public string $id;
}

/** UsersOrganization entity data model. */
class UsersOrganization
{
    public ?string $id = null;
}

/** Request payload for UsersOrganization#remove. */
class UsersOrganizationRemoveMatch
{
    public string $id;
}

