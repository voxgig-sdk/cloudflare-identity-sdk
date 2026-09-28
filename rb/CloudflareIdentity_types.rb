# frozen_string_literal: true

# Typed models for the CloudflareIdentity SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# AaaAuditLogsV2OrgHistoryResponseCollection entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
AaaAuditLogsV2OrgHistoryResponseCollection = Struct.new(
  :errors,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for AaaAuditLogsV2OrgHistoryResponseCollection#list.
#
# @!attribute [rw] audit_id
#   @return [String]
#
# @!attribute [rw] organization_id
#   @return [String]
#
# @!attribute [rw] action_time
#   @return [String]
#
# @!attribute [rw] before
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] since
#   @return [String]
AaaAuditLogsV2OrgHistoryResponseCollectionListMatch = Struct.new(
  :audit_id,
  :organization_id,
  :action_time,
  :before,
  :cursor,
  :direction,
  :limit,
  :since,
  keyword_init: true
)

# AaaAuditLogsV2OrgResponseCollection entity data model.
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
AaaAuditLogsV2OrgResponseCollection = Struct.new(
  :errors,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for AaaAuditLogsV2OrgResponseCollection#list.
#
# @!attribute [rw] organization_id
#   @return [String]
#
# @!attribute [rw] action_result
#   @return [Array, nil]
#
# @!attribute [rw] action_result_not
#   @return [Array, nil]
#
# @!attribute [rw] action_type
#   @return [Array, nil]
#
# @!attribute [rw] action_type_not
#   @return [Array, nil]
#
# @!attribute [rw] actor_context
#   @return [Array, nil]
#
# @!attribute [rw] actor_context_not
#   @return [Array, nil]
#
# @!attribute [rw] actor_email
#   @return [Array, nil]
#
# @!attribute [rw] actor_email_not
#   @return [Array, nil]
#
# @!attribute [rw] actor_id
#   @return [Array, nil]
#
# @!attribute [rw] actor_id_not
#   @return [Array, nil]
#
# @!attribute [rw] actor_ip_address
#   @return [Array, nil]
#
# @!attribute [rw] actor_ip_address_not
#   @return [Array, nil]
#
# @!attribute [rw] actor_token_id
#   @return [Array, nil]
#
# @!attribute [rw] actor_token_id_not
#   @return [Array, nil]
#
# @!attribute [rw] actor_token_name
#   @return [Array, nil]
#
# @!attribute [rw] actor_token_name_not
#   @return [Array, nil]
#
# @!attribute [rw] actor_type
#   @return [Array, nil]
#
# @!attribute [rw] actor_type_not
#   @return [Array, nil]
#
# @!attribute [rw] before
#   @return [String]
#
# @!attribute [rw] cursor
#   @return [String, nil]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Array, nil]
#
# @!attribute [rw] id_not
#   @return [Array, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] raw_cf_ray_id
#   @return [Array, nil]
#
# @!attribute [rw] raw_cf_ray_id_not
#   @return [Array, nil]
#
# @!attribute [rw] raw_method
#   @return [Array, nil]
#
# @!attribute [rw] raw_method_not
#   @return [Array, nil]
#
# @!attribute [rw] raw_status_code
#   @return [Array, nil]
#
# @!attribute [rw] raw_status_code_not
#   @return [Array, nil]
#
# @!attribute [rw] raw_uri
#   @return [Array, nil]
#
# @!attribute [rw] raw_uri_not
#   @return [Array, nil]
#
# @!attribute [rw] resource_id
#   @return [Array, nil]
#
# @!attribute [rw] resource_id_not
#   @return [Array, nil]
#
# @!attribute [rw] resource_product
#   @return [Array, nil]
#
# @!attribute [rw] resource_product_not
#   @return [Array, nil]
#
# @!attribute [rw] resource_scope
#   @return [Array, nil]
#
# @!attribute [rw] resource_scope_not
#   @return [Array, nil]
#
# @!attribute [rw] resource_type
#   @return [Array, nil]
#
# @!attribute [rw] resource_type_not
#   @return [Array, nil]
#
# @!attribute [rw] since
#   @return [String]
AaaAuditLogsV2OrgResponseCollectionListMatch = Struct.new(
  :organization_id,
  :action_result,
  :action_result_not,
  :action_type,
  :action_type_not,
  :actor_context,
  :actor_context_not,
  :actor_email,
  :actor_email_not,
  :actor_id,
  :actor_id_not,
  :actor_ip_address,
  :actor_ip_address_not,
  :actor_token_id,
  :actor_token_id_not,
  :actor_token_name,
  :actor_token_name_not,
  :actor_type,
  :actor_type_not,
  :before,
  :cursor,
  :direction,
  :id,
  :id_not,
  :limit,
  :raw_cf_ray_id,
  :raw_cf_ray_id_not,
  :raw_method,
  :raw_method_not,
  :raw_status_code,
  :raw_status_code_not,
  :raw_uri,
  :raw_uri_not,
  :resource_id,
  :resource_id_not,
  :resource_product,
  :resource_product_not,
  :resource_scope,
  :resource_scope_not,
  :resource_type,
  :resource_type_not,
  :since,
  keyword_init: true
)

# Account entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Account = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Account#list.
#
# @!attribute [rw] id
#   @return [String]
AccountListMatch = Struct.new(
  :id,
  keyword_init: true
)

# AccountResourceGroup entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] scope
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
AccountResourceGroup = Struct.new(
  :errors,
  :id,
  :messages,
  :name,
  :result,
  :scope,
  :success,
  keyword_init: true
)

# Request payload for AccountResourceGroup#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AccountResourceGroupLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for AccountResourceGroup#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
AccountResourceGroupListMatch = Struct.new(
  :account_id,
  :id,
  :name,
  keyword_init: true
)

# Request payload for AccountResourceGroup#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] scope
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
AccountResourceGroupCreateData = Struct.new(
  :account_id,
  :errors,
  :id,
  :messages,
  :name,
  :result,
  :scope,
  :success,
  keyword_init: true
)

# Request payload for AccountResourceGroup#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] scope
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
AccountResourceGroupUpdateData = Struct.new(
  :account_id,
  :id,
  :errors,
  :messages,
  :name,
  :result,
  :scope,
  :success,
  keyword_init: true
)

# AccountUserGroup entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] policies
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash]
AccountUserGroup = Struct.new(
  :id,
  :name,
  :policies,
  :result,
  keyword_init: true
)

# Request payload for AccountUserGroup#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
AccountUserGroupLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for AccountUserGroup#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] fuzzy_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
AccountUserGroupListMatch = Struct.new(
  :account_id,
  :direction,
  :fuzzy_name,
  :id,
  :name,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for AccountUserGroup#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] policies
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash]
AccountUserGroupCreateData = Struct.new(
  :account_id,
  :id,
  :name,
  :policies,
  :result,
  keyword_init: true
)

# Request payload for AccountUserGroup#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] policies
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
AccountUserGroupUpdateData = Struct.new(
  :account_id,
  :id,
  :name,
  :policies,
  :result,
  keyword_init: true
)

# AccountUserGroupMember entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
AccountUserGroupMember = Struct.new(
  :id,
  :result,
  keyword_init: true
)

# Request payload for AccountUserGroupMember#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] user_group_id
#   @return [String]
AccountUserGroupMemberLoadMatch = Struct.new(
  :account_id,
  :id,
  :user_group_id,
  keyword_init: true
)

# Request payload for AccountUserGroupMember#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] user_group_id
#   @return [String]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] fuzzy_email
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
AccountUserGroupMemberListMatch = Struct.new(
  :account_id,
  :user_group_id,
  :direction,
  :fuzzy_email,
  :page,
  :per_page,
  keyword_init: true
)

# Request payload for AccountUserGroupMember#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] user_group_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
AccountUserGroupMemberCreateData = Struct.new(
  :account_id,
  :user_group_id,
  :id,
  :result,
  keyword_init: true
)

# Request payload for AccountUserGroupMember#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] user_group_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
AccountUserGroupMemberUpdateData = Struct.new(
  :account_id,
  :user_group_id,
  :id,
  :result,
  keyword_init: true
)

# Request payload for AccountUserGroupMember#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] user_group_id
#   @return [String]
AccountUserGroupMemberRemoveMatch = Struct.new(
  :account_id,
  :id,
  :user_group_id,
  keyword_init: true
)

# BeginVerification entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
BeginVerification = Struct.new(
  :errors,
  :messages,
  :success,
  keyword_init: true
)

# Request payload for BeginVerification#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] sso_connector_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
BeginVerificationCreateData = Struct.new(
  :account_id,
  :sso_connector_id,
  :errors,
  :messages,
  :success,
  keyword_init: true
)

# BillSubsApiClientSecretResponseSingle entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
BillSubsApiClientSecretResponseSingle = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for BillSubsApiClientSecretResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
BillSubsApiClientSecretResponseSingleCreateData = Struct.new(
  :account_id,
  :result,
  keyword_init: true
)

# BillableUsageApiV2Usage entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array]
#
# @!attribute [rw] success
#   @return [Boolean]
BillableUsageApiV2Usage = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for BillableUsageApiV2Usage#list.
#
# @!attribute [rw] organization_id
#   @return [String]
#
# @!attribute [rw] from
#   @return [String, nil]
#
# @!attribute [rw] to
#   @return [String, nil]
BillableUsageApiV2UsageListMatch = Struct.new(
  :organization_id,
  :from,
  :to,
  keyword_init: true
)

# DnsCustomNameserversEmptyResponse3 entity data model.
class DnsCustomNameserversEmptyResponse3
end

# Request payload for DnsCustomNameserversEmptyResponse3#remove.
#
# @!attribute [rw] custom_ns_id
#   @return [String]
#
# @!attribute [rw] tenant_tag
#   @return [String]
DnsCustomNameserversEmptyResponse3RemoveMatch = Struct.new(
  :custom_ns_id,
  :tenant_tag,
  keyword_init: true
)

# DnsCustomNameserversTcnsResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
DnsCustomNameserversTcnsResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for DnsCustomNameserversTcnsResponseCollection#list.
#
# @!attribute [rw] tenant_tag
#   @return [String]
DnsCustomNameserversTcnsResponseCollectionListMatch = Struct.new(
  :tenant_tag,
  keyword_init: true
)

# DnsCustomNameserversTcnsResponseSingle entity data model.
#
# @!attribute [rw] ns_name
#   @return [String]
#
# @!attribute [rw] ns_set
#   @return [Float, nil]
DnsCustomNameserversTcnsResponseSingle = Struct.new(
  :ns_name,
  :ns_set,
  keyword_init: true
)

# Request payload for DnsCustomNameserversTcnsResponseSingle#create.
#
# @!attribute [rw] tenant_tag
#   @return [String]
#
# @!attribute [rw] ns_name
#   @return [String]
#
# @!attribute [rw] ns_set
#   @return [Float, nil]
DnsCustomNameserversTcnsResponseSingleCreateData = Struct.new(
  :tenant_tag,
  :ns_name,
  :ns_set,
  keyword_init: true
)

# IamApiResponseSingleId entity data model.
class IamApiResponseSingleId
end

# Request payload for IamApiResponseSingleId#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] oauth_client_id
#   @return [String]
IamApiResponseSingleIdRemoveMatch = Struct.new(
  :account_id,
  :oauth_client_id,
  keyword_init: true
)

# IamCollectionMemberResponseWithPolicy entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
IamCollectionMemberResponseWithPolicy = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for IamCollectionMemberResponseWithPolicy#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
IamCollectionMemberResponseWithPolicyListMatch = Struct.new(
  :account_id,
  :direction,
  :order,
  :page,
  :per_page,
  :status,
  keyword_init: true
)

# IamCollectionOauthClient entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
IamCollectionOauthClient = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for IamCollectionOauthClient#list.
#
# @!attribute [rw] account_id
#   @return [String]
IamCollectionOauthClientListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# IamCollectionOauthScope entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
IamCollectionOauthScope = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for IamCollectionOauthScope#list.
#
# @!attribute [rw] result
#   @return [Array, nil]
IamCollectionOauthScopeListMatch = Struct.new(
  :result,
  keyword_init: true
)

# IamCollectionOrganization entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
IamCollectionOrganization = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for IamCollectionOrganization#list.
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] match
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
IamCollectionOrganizationListMatch = Struct.new(
  :direction,
  :match,
  :name,
  :order,
  :page,
  :per_page,
  :status,
  keyword_init: true
)

# IamCollectionPermissionGroup entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
IamCollectionPermissionGroup = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for IamCollectionPermissionGroup#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
IamCollectionPermissionGroupListMatch = Struct.new(
  :account_id,
  :id,
  :label,
  :name,
  :page,
  :per_page,
  keyword_init: true
)

# IamCollectionRole entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
IamCollectionRole = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for IamCollectionRole#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
IamCollectionRoleListMatch = Struct.new(
  :account_id,
  :page,
  :per_page,
  keyword_init: true
)

# IamCollectionToken entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
IamCollectionToken = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for IamCollectionToken#list.
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] include_expired
#   @return [Boolean, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
IamCollectionTokenListMatch = Struct.new(
  :direction,
  :include_expired,
  :page,
  :per_page,
  keyword_init: true
)

# IamOauthClientRotateSecret entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
IamOauthClientRotateSecret = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for IamOauthClientRotateSecret#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] oauth_client_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
IamOauthClientRotateSecretCreateData = Struct.new(
  :account_id,
  :oauth_client_id,
  :result,
  keyword_init: true
)

# IamPermissionsGroupResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
IamPermissionsGroupResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for IamPermissionsGroupResponseCollection#list.
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] scope
#   @return [String, nil]
IamPermissionsGroupResponseCollectionListMatch = Struct.new(
  :name,
  :scope,
  keyword_init: true
)

# IamResponseSingleValue entity data model.
#
# @!attribute [rw] result
#   @return [String, nil]
IamResponseSingleValue = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for IamResponseSingleValue#update.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] token_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [String, nil]
IamResponseSingleValueUpdateData = Struct.new(
  :account_id,
  :token_id,
  :result,
  keyword_init: true
)

# IamSchemasCollectionInvite entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
IamSchemasCollectionInvite = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for IamSchemasCollectionInvite#list.
#
# @!attribute [rw] result
#   @return [Array, nil]
IamSchemasCollectionInviteListMatch = Struct.new(
  :result,
  keyword_init: true
)

# IamSingleInvite entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [Object]
IamSingleInvite = Struct.new(
  :id,
  :result,
  :status,
  keyword_init: true
)

# Request payload for IamSingleInvite#load.
#
# @!attribute [rw] id
#   @return [String]
IamSingleInviteLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for IamSingleInvite#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [Object, nil]
IamSingleInviteUpdateData = Struct.new(
  :id,
  :result,
  :status,
  keyword_init: true
)

# IamSingleMemberResponseWithPolicy entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
IamSingleMemberResponseWithPolicy = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for IamSingleMemberResponseWithPolicy#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] member_id
#   @return [String]
IamSingleMemberResponseWithPolicyLoadMatch = Struct.new(
  :account_id,
  :member_id,
  keyword_init: true
)

# Request payload for IamSingleMemberResponseWithPolicy#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
IamSingleMemberResponseWithPolicyCreateData = Struct.new(
  :account_id,
  :result,
  keyword_init: true
)

# Request payload for IamSingleMemberResponseWithPolicy#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] member_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
IamSingleMemberResponseWithPolicyUpdateData = Struct.new(
  :account_id,
  :member_id,
  :result,
  keyword_init: true
)

# IamSingleMembershipResponseWithPolicy entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [Object]
IamSingleMembershipResponseWithPolicy = Struct.new(
  :result,
  :status,
  keyword_init: true
)

# Request payload for IamSingleMembershipResponseWithPolicy#load.
#
# @!attribute [rw] membership_id
#   @return [String]
IamSingleMembershipResponseWithPolicyLoadMatch = Struct.new(
  :membership_id,
  keyword_init: true
)

# Request payload for IamSingleMembershipResponseWithPolicy#update.
#
# @!attribute [rw] membership_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [Object, nil]
IamSingleMembershipResponseWithPolicyUpdateData = Struct.new(
  :membership_id,
  :result,
  :status,
  keyword_init: true
)

# IamSingleOauthClient entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
IamSingleOauthClient = Struct.new(
  :id,
  :result,
  keyword_init: true
)

# Request payload for IamSingleOauthClient#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
IamSingleOauthClientLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for IamSingleOauthClient#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Object, nil]
IamSingleOauthClientUpdateData = Struct.new(
  :account_id,
  :id,
  :result,
  keyword_init: true
)

# IamSingleOauthClientCreate entity data model.
class IamSingleOauthClientCreate
end

# Request payload for IamSingleOauthClientCreate#create.
#
# @!attribute [rw] account_id
#   @return [String]
IamSingleOauthClientCreateCreateData = Struct.new(
  :account_id,
  keyword_init: true
)

# IamSingleOrganization entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
IamSingleOrganization = Struct.new(
  :id,
  :result,
  keyword_init: true
)

# Request payload for IamSingleOrganization#load.
#
# @!attribute [rw] id
#   @return [String]
IamSingleOrganizationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# IamSinglePermissionGroup entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
IamSinglePermissionGroup = Struct.new(
  :id,
  :result,
  keyword_init: true
)

# Request payload for IamSinglePermissionGroup#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
IamSinglePermissionGroupLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# IamSingleRole entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
IamSingleRole = Struct.new(
  :id,
  :result,
  keyword_init: true
)

# Request payload for IamSingleRole#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
IamSingleRoleLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# IamSingleToken entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
IamSingleToken = Struct.new(
  :id,
  :result,
  keyword_init: true
)

# Request payload for IamSingleToken#load.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
IamSingleTokenLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for IamSingleToken#update.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
IamSingleTokenUpdateData = Struct.new(
  :account_id,
  :id,
  :result,
  keyword_init: true
)

# IamSingleTokenCreate entity data model.
#
# @!attribute [rw] condition
#   @return [Hash, nil]
#
# @!attribute [rw] expires_on
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] not_before
#   @return [String, nil]
#
# @!attribute [rw] policies
#   @return [Array]
IamSingleTokenCreate = Struct.new(
  :condition,
  :expires_on,
  :name,
  :not_before,
  :policies,
  keyword_init: true
)

# Request payload for IamSingleTokenCreate#create.
#
# @!attribute [rw] condition
#   @return [Hash, nil]
#
# @!attribute [rw] expires_on
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] not_before
#   @return [String, nil]
#
# @!attribute [rw] policies
#   @return [Array]
IamSingleTokenCreateCreateData = Struct.new(
  :condition,
  :expires_on,
  :name,
  :not_before,
  :policies,
  keyword_init: true
)

# IamSsoConnector entity data model.
#
# @!attribute [rw] begin_verification
#   @return [Boolean, nil]
#
# @!attribute [rw] email_domain
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] use_fedramp_language
#   @return [Boolean, nil]
IamSsoConnector = Struct.new(
  :begin_verification,
  :email_domain,
  :enabled,
  :id,
  :result,
  :use_fedramp_language,
  keyword_init: true
)

# Request payload for IamSsoConnector#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
IamSsoConnectorLoadMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for IamSsoConnector#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] begin_verification
#   @return [Boolean, nil]
#
# @!attribute [rw] email_domain
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] use_fedramp_language
#   @return [Boolean, nil]
IamSsoConnectorCreateData = Struct.new(
  :account_id,
  :begin_verification,
  :email_domain,
  :enabled,
  :id,
  :result,
  :use_fedramp_language,
  keyword_init: true
)

# Request payload for IamSsoConnector#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] begin_verification
#   @return [Boolean, nil]
#
# @!attribute [rw] email_domain
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] use_fedramp_language
#   @return [Boolean, nil]
IamSsoConnectorUpdateData = Struct.new(
  :account_id,
  :id,
  :begin_verification,
  :email_domain,
  :enabled,
  :result,
  :use_fedramp_language,
  keyword_init: true
)

# IamSsoConnectorCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
IamSsoConnectorCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for IamSsoConnectorCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
IamSsoConnectorCollectionListMatch = Struct.new(
  :account_id,
  keyword_init: true
)

# IamTokenVerifyResponseSingleSegment entity data model.
#
# @!attribute [rw] result
#   @return [Object]
IamTokenVerifyResponseSingleSegment = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for IamTokenVerifyResponseSingleSegment#load.
#
# @!attribute [rw] result
#   @return [Object, nil]
IamTokenVerifyResponseSingleSegmentLoadMatch = Struct.new(
  :result,
  keyword_init: true
)

# Member entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Member = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Member#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
MemberRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# OauthClient entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
OauthClient = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for OauthClient#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
OauthClientRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Organization entity data model.
#
# @!attribute [rw] create_time
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] meta
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] parent
#   @return [Hash]
#
# @!attribute [rw] profile
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
Organization = Struct.new(
  :create_time,
  :errors,
  :id,
  :messages,
  :meta,
  :name,
  :parent,
  :profile,
  :result,
  :result_info,
  :status,
  :success,
  keyword_init: true
)

# Request payload for Organization#load.
#
# @!attribute [rw] id
#   @return [String]
OrganizationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Organization#list.
#
# @!attribute [rw] containing_account
#   @return [String, nil]
#
# @!attribute [rw] containing_organization
#   @return [String, nil]
#
# @!attribute [rw] containing_user
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] name_contain
#   @return [String, nil]
#
# @!attribute [rw] name_ends_with
#   @return [String, nil]
#
# @!attribute [rw] name_starts_with
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] page_token
#   @return [String, nil]
#
# @!attribute [rw] parent_id
#   @return [String, nil]
OrganizationListMatch = Struct.new(
  :containing_account,
  :containing_organization,
  :containing_user,
  :id,
  :name,
  :name_contain,
  :name_ends_with,
  :name_starts_with,
  :page_size,
  :page_token,
  :parent_id,
  keyword_init: true
)

# Request payload for Organization#create.
#
# @!attribute [rw] create_time
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] meta
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] parent
#   @return [Hash]
#
# @!attribute [rw] profile
#   @return [Hash]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] success
#   @return [Boolean]
OrganizationCreateData = Struct.new(
  :create_time,
  :errors,
  :id,
  :messages,
  :meta,
  :name,
  :parent,
  :profile,
  :result,
  :result_info,
  :status,
  :success,
  keyword_init: true
)

# Request payload for Organization#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] member_code
#   @return [String, nil]
#
# @!attribute [rw] create_time
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] meta
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] parent
#   @return [Hash, nil]
#
# @!attribute [rw] profile
#   @return [Hash, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
OrganizationUpdateData = Struct.new(
  :id,
  :member_code,
  :create_time,
  :errors,
  :messages,
  :meta,
  :name,
  :parent,
  :profile,
  :result,
  :result_info,
  :status,
  :success,
  keyword_init: true
)

# Request payload for Organization#remove.
#
# @!attribute [rw] id
#   @return [String]
OrganizationRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# OrganizationMember entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] member
#   @return [Hash]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
OrganizationMember = Struct.new(
  :errors,
  :id,
  :member,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for OrganizationMember#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] organization_id
#   @return [String]
OrganizationMemberLoadMatch = Struct.new(
  :id,
  :organization_id,
  keyword_init: true
)

# Request payload for OrganizationMember#list.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] page_token
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Array, nil]
#
# @!attribute [rw] user_email
#   @return [String, nil]
#
# @!attribute [rw] user_email_contain
#   @return [String, nil]
#
# @!attribute [rw] user_email_ends_with
#   @return [String, nil]
#
# @!attribute [rw] user_email_starts_with
#   @return [String, nil]
OrganizationMemberListMatch = Struct.new(
  :id,
  :page_size,
  :page_token,
  :status,
  :user_email,
  :user_email_contain,
  :user_email_ends_with,
  :user_email_starts_with,
  keyword_init: true
)

# Request payload for OrganizationMember#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] member
#   @return [Hash]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] result_info
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
OrganizationMemberCreateData = Struct.new(
  :id,
  :errors,
  :member,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for OrganizationMember#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] organization_id
#   @return [String]
OrganizationMemberRemoveMatch = Struct.new(
  :id,
  :organization_id,
  keyword_init: true
)

# OrganizationsApiProfile entity data model.
#
# @!attribute [rw] code
#   @return [Integer]
#
# @!attribute [rw] message
#   @return [String]
OrganizationsApiProfile = Struct.new(
  :code,
  :message,
  keyword_init: true
)

# Request payload for OrganizationsApiProfile#list.
#
# @!attribute [rw] organization_id
#   @return [String]
OrganizationsApiProfileListMatch = Struct.new(
  :organization_id,
  keyword_init: true
)

# Resource entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] meta
#   @return [Hash]
#
# @!attribute [rw] resource_account_id
#   @return [String]
#
# @!attribute [rw] resource_id
#   @return [String]
#
# @!attribute [rw] resource_type
#   @return [String]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
Resource = Struct.new(
  :errors,
  :id,
  :meta,
  :resource_account_id,
  :resource_id,
  :resource_type,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Resource#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] share_id
#   @return [String]
ResourceLoadMatch = Struct.new(
  :account_id,
  :id,
  :share_id,
  keyword_init: true
)

# Request payload for Resource#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] share_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] resource_type
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
ResourceListMatch = Struct.new(
  :account_id,
  :share_id,
  :page,
  :per_page,
  :resource_type,
  :status,
  keyword_init: true
)

# Request payload for Resource#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] share_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] meta
#   @return [Hash]
#
# @!attribute [rw] resource_account_id
#   @return [String]
#
# @!attribute [rw] resource_id
#   @return [String]
#
# @!attribute [rw] resource_type
#   @return [String]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
ResourceCreateData = Struct.new(
  :account_id,
  :share_id,
  :errors,
  :id,
  :meta,
  :resource_account_id,
  :resource_id,
  :resource_type,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Resource#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] share_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] meta
#   @return [Hash, nil]
#
# @!attribute [rw] resource_account_id
#   @return [String, nil]
#
# @!attribute [rw] resource_id
#   @return [String, nil]
#
# @!attribute [rw] resource_type
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
ResourceUpdateData = Struct.new(
  :account_id,
  :id,
  :share_id,
  :errors,
  :meta,
  :resource_account_id,
  :resource_id,
  :resource_type,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Resource#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] share_id
#   @return [String]
ResourceRemoveMatch = Struct.new(
  :account_id,
  :id,
  :share_id,
  keyword_init: true
)

# ResourceGroup entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
ResourceGroup = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ResourceGroup#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
ResourceGroupRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# ResourceSharing entity data model.
class ResourceSharing
end

# Request payload for ResourceSharing#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] share_id
#   @return [String]
ResourceSharingUpdateData = Struct.new(
  :account_id,
  :share_id,
  keyword_init: true
)

# ResourceSharingShareExcludedRecipientResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
ResourceSharingShareExcludedRecipientResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ResourceSharingShareExcludedRecipientResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] share_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
ResourceSharingShareExcludedRecipientResponseCollectionListMatch = Struct.new(
  :account_id,
  :share_id,
  :page,
  :per_page,
  keyword_init: true
)

# ResourceSharingShareExcludedRecipientResponseSingle entity data model.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
ResourceSharingShareExcludedRecipientResponseSingle = Struct.new(
  :account_id,
  :errors,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ResourceSharingShareExcludedRecipientResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] excluded_recipient_id
#   @return [String]
#
# @!attribute [rw] share_id
#   @return [String]
ResourceSharingShareExcludedRecipientResponseSingleLoadMatch = Struct.new(
  :account_id,
  :excluded_recipient_id,
  :share_id,
  keyword_init: true
)

# Request payload for ResourceSharingShareExcludedRecipientResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] share_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
ResourceSharingShareExcludedRecipientResponseSingleCreateData = Struct.new(
  :account_id,
  :share_id,
  :errors,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ResourceSharingShareExcludedRecipientResponseSingle#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] excluded_recipient_id
#   @return [String]
#
# @!attribute [rw] share_id
#   @return [String]
ResourceSharingShareExcludedRecipientResponseSingleRemoveMatch = Struct.new(
  :account_id,
  :excluded_recipient_id,
  :share_id,
  keyword_init: true
)

# ResourceSharingShareRecipientResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
ResourceSharingShareRecipientResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ResourceSharingShareRecipientResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] share_id
#   @return [String]
#
# @!attribute [rw] include_resource
#   @return [Boolean, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
ResourceSharingShareRecipientResponseCollectionListMatch = Struct.new(
  :account_id,
  :share_id,
  :include_resource,
  :page,
  :per_page,
  keyword_init: true
)

# ResourceSharingShareRecipientResponseSingle entity data model.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] organization_id
#   @return [String, nil]
#
# @!attribute [rw] recipient_account_id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
ResourceSharingShareRecipientResponseSingle = Struct.new(
  :account_id,
  :errors,
  :organization_id,
  :recipient_account_id,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ResourceSharingShareRecipientResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] recipient_id
#   @return [String]
#
# @!attribute [rw] share_id
#   @return [String]
#
# @!attribute [rw] include_resource
#   @return [Boolean, nil]
ResourceSharingShareRecipientResponseSingleLoadMatch = Struct.new(
  :account_id,
  :recipient_id,
  :share_id,
  :include_resource,
  keyword_init: true
)

# Request payload for ResourceSharingShareRecipientResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] share_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] organization_id
#   @return [String, nil]
#
# @!attribute [rw] recipient_account_id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
ResourceSharingShareRecipientResponseSingleCreateData = Struct.new(
  :account_id,
  :share_id,
  :errors,
  :organization_id,
  :recipient_account_id,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ResourceSharingShareRecipientResponseSingle#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] recipient_id
#   @return [String]
#
# @!attribute [rw] share_id
#   @return [String]
ResourceSharingShareRecipientResponseSingleRemoveMatch = Struct.new(
  :account_id,
  :recipient_id,
  :share_id,
  keyword_init: true
)

# ResourceSharingShareResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
ResourceSharingShareResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for ResourceSharingShareResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] include_recipient_count
#   @return [Boolean, nil]
#
# @!attribute [rw] include_resource
#   @return [Boolean, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] resource_type
#   @return [Array, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
#
# @!attribute [rw] target_type
#   @return [String, nil]
ResourceSharingShareResponseCollectionListMatch = Struct.new(
  :account_id,
  :direction,
  :include_recipient_count,
  :include_resource,
  :kind,
  :order,
  :page,
  :per_page,
  :resource_type,
  :status,
  :tag,
  :target_type,
  keyword_init: true
)

# ResourceSharingShareResponseSingle entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] recipients
#   @return [Array]
#
# @!attribute [rw] resources
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
ResourceSharingShareResponseSingle = Struct.new(
  :errors,
  :name,
  :recipients,
  :resources,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ResourceSharingShareResponseSingle#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] share_id
#   @return [String]
#
# @!attribute [rw] include_recipient_count
#   @return [Boolean, nil]
#
# @!attribute [rw] include_resource
#   @return [Boolean, nil]
ResourceSharingShareResponseSingleLoadMatch = Struct.new(
  :account_id,
  :share_id,
  :include_recipient_count,
  :include_resource,
  keyword_init: true
)

# Request payload for ResourceSharingShareResponseSingle#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] recipients
#   @return [Array]
#
# @!attribute [rw] resources
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
ResourceSharingShareResponseSingleCreateData = Struct.new(
  :account_id,
  :errors,
  :name,
  :recipients,
  :resources,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ResourceSharingShareResponseSingle#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] share_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] recipients
#   @return [Array, nil]
#
# @!attribute [rw] resources
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
ResourceSharingShareResponseSingleUpdateData = Struct.new(
  :account_id,
  :share_id,
  :errors,
  :name,
  :recipients,
  :resources,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ResourceSharingShareResponseSingle#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] share_id
#   @return [String]
ResourceSharingShareResponseSingleRemoveMatch = Struct.new(
  :account_id,
  :share_id,
  keyword_init: true
)

# ScimDiscovery entity data model.
class ScimDiscovery
end

# Request payload for ScimDiscovery#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] resource_type_id
#   @return [String, nil]
#
# @!attribute [rw] schema_id
#   @return [String, nil]
ScimDiscoveryLoadMatch = Struct.new(
  :account_id,
  :resource_type_id,
  :schema_id,
  keyword_init: true
)

# ScimGroup entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
ScimGroup = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ScimGroup#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] filter
#   @return [String, nil]
#
# @!attribute [rw] start_index
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
ScimGroupLoadMatch = Struct.new(
  :account_id,
  :count,
  :filter,
  :start_index,
  :id,
  keyword_init: true
)

# Request payload for ScimGroup#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
ScimGroupCreateData = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for ScimGroup#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
ScimGroupUpdateData = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for ScimGroup#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
ScimGroupRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# ScimUser entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
ScimUser = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ScimUser#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] count
#   @return [Integer, nil]
#
# @!attribute [rw] filter
#   @return [String, nil]
#
# @!attribute [rw] start_index
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
ScimUserLoadMatch = Struct.new(
  :account_id,
  :count,
  :filter,
  :start_index,
  :id,
  keyword_init: true
)

# Request payload for ScimUser#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
ScimUserCreateData = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for ScimUser#update.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
ScimUserUpdateData = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Request payload for ScimUser#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
ScimUserRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# SsoConnector entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
SsoConnector = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for SsoConnector#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
SsoConnectorRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# Tenant entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
Tenant = Struct.new(
  :errors,
  :id,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Tenant#load.
#
# @!attribute [rw] id
#   @return [String]
TenantLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Tenant#list.
#
# @!attribute [rw] id
#   @return [String]
TenantListMatch = Struct.new(
  :id,
  keyword_init: true
)

# Token entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Token = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Token#remove.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
TokenRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# User entity data model.
class User
end

# Request payload for User#list.
class UserListMatch
end

# UserGroup entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
UserGroup = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for UserGroup#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
UserGroupRemoveMatch = Struct.new(
  :account_id,
  :id,
  keyword_init: true
)

# UsersAccountMembership entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
UsersAccountMembership = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for UsersAccountMembership#remove.
#
# @!attribute [rw] id
#   @return [String]
UsersAccountMembershipRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# UsersOrganization entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
UsersOrganization = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for UsersOrganization#remove.
#
# @!attribute [rw] id
#   @return [String]
UsersOrganizationRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

