// Typed models for the CloudflareIdentity SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/cloudflare-identity-sdk/go/core"
)

// AaaAuditLogsV2OrgHistoryResponseCollection is the typed data model for the aaa_audit_logs_v2_org_history_response_collection entity.
type AaaAuditLogsV2OrgHistoryResponseCollection struct {
}

// AaaAuditLogsV2OrgHistoryResponseCollectionListMatch is the typed request payload for AaaAuditLogsV2OrgHistoryResponseCollection.ListTyped.
type AaaAuditLogsV2OrgHistoryResponseCollectionListMatch struct {
	AuditId string `json:"audit_id"`
	OrganizationId string `json:"organization_id"`
	ActionTime string `json:"action_time"`
	Before string `json:"before"`
	Cursor *string `json:"cursor,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Since string `json:"since"`
}

// AaaAuditLogsV2OrgResponseCollection is the typed data model for the aaa_audit_logs_v2_org_response_collection entity.
type AaaAuditLogsV2OrgResponseCollection struct {
}

// AaaAuditLogsV2OrgResponseCollectionListMatch is the typed request payload for AaaAuditLogsV2OrgResponseCollection.ListTyped.
type AaaAuditLogsV2OrgResponseCollectionListMatch struct {
	OrganizationId string `json:"organization_id"`
	ActionResult *[]any `json:"action_result,omitempty"`
	ActionResultNot *[]any `json:"action_result_not,omitempty"`
	ActionType *[]any `json:"action_type,omitempty"`
	ActionTypeNot *[]any `json:"action_type_not,omitempty"`
	ActorContext *[]any `json:"actor_context,omitempty"`
	ActorContextNot *[]any `json:"actor_context_not,omitempty"`
	ActorEmail *[]any `json:"actor_email,omitempty"`
	ActorEmailNot *[]any `json:"actor_email_not,omitempty"`
	ActorId *[]any `json:"actor_id,omitempty"`
	ActorIdNot *[]any `json:"actor_id_not,omitempty"`
	ActorIpAddress *[]any `json:"actor_ip_address,omitempty"`
	ActorIpAddressNot *[]any `json:"actor_ip_address_not,omitempty"`
	ActorTokenId *[]any `json:"actor_token_id,omitempty"`
	ActorTokenIdNot *[]any `json:"actor_token_id_not,omitempty"`
	ActorTokenName *[]any `json:"actor_token_name,omitempty"`
	ActorTokenNameNot *[]any `json:"actor_token_name_not,omitempty"`
	ActorType *[]any `json:"actor_type,omitempty"`
	ActorTypeNot *[]any `json:"actor_type_not,omitempty"`
	Before string `json:"before"`
	Cursor *string `json:"cursor,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Id *[]any `json:"id,omitempty"`
	IdNot *[]any `json:"id_not,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	RawCfRayId *[]any `json:"raw_cf_ray_id,omitempty"`
	RawCfRayIdNot *[]any `json:"raw_cf_ray_id_not,omitempty"`
	RawMethod *[]any `json:"raw_method,omitempty"`
	RawMethodNot *[]any `json:"raw_method_not,omitempty"`
	RawStatusCode *[]any `json:"raw_status_code,omitempty"`
	RawStatusCodeNot *[]any `json:"raw_status_code_not,omitempty"`
	RawUri *[]any `json:"raw_uri,omitempty"`
	RawUriNot *[]any `json:"raw_uri_not,omitempty"`
	ResourceId *[]any `json:"resource_id,omitempty"`
	ResourceIdNot *[]any `json:"resource_id_not,omitempty"`
	ResourceProduct *[]any `json:"resource_product,omitempty"`
	ResourceProductNot *[]any `json:"resource_product_not,omitempty"`
	ResourceScope *[]any `json:"resource_scope,omitempty"`
	ResourceScopeNot *[]any `json:"resource_scope_not,omitempty"`
	ResourceType *[]any `json:"resource_type,omitempty"`
	ResourceTypeNot *[]any `json:"resource_type_not,omitempty"`
	Since string `json:"since"`
}

// Account is the typed data model for the account entity.
type Account struct {
}

// AccountListMatch is the typed request payload for Account.ListTyped.
type AccountListMatch struct {
	Id string `json:"id"`
}

// AccountResourceGroup is the typed data model for the account_resource_group entity.
type AccountResourceGroup struct {
}

// AccountResourceGroupLoadMatch is the typed request payload for AccountResourceGroup.LoadTyped.
type AccountResourceGroupLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// AccountResourceGroupListMatch is the typed request payload for AccountResourceGroup.ListTyped.
type AccountResourceGroupListMatch struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

// AccountResourceGroupCreateData is the typed request payload for AccountResourceGroup.CreateTyped.
type AccountResourceGroupCreateData struct {
	AccountId string `json:"account_id"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Messages []any `json:"messages"`
	Name string `json:"name"`
	Result map[string]any `json:"result"`
	Scope map[string]any `json:"scope"`
	Success bool `json:"success"`
}

// AccountResourceGroupUpdateData is the typed request payload for AccountResourceGroup.UpdateTyped.
type AccountResourceGroupUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Name *string `json:"name,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Scope *map[string]any `json:"scope,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// AccountUserGroup is the typed data model for the account_user_group entity.
type AccountUserGroup struct {
}

// AccountUserGroupLoadMatch is the typed request payload for AccountUserGroup.LoadTyped.
type AccountUserGroupLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// AccountUserGroupListMatch is the typed request payload for AccountUserGroup.ListTyped.
type AccountUserGroupListMatch struct {
	AccountId string `json:"account_id"`
	Direction *string `json:"direction,omitempty"`
	FuzzyName *string `json:"fuzzy_name,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
}

// AccountUserGroupCreateData is the typed request payload for AccountUserGroup.CreateTyped.
type AccountUserGroupCreateData struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	Policies *[]any `json:"policies,omitempty"`
	Result map[string]any `json:"result"`
}

// AccountUserGroupUpdateData is the typed request payload for AccountUserGroup.UpdateTyped.
type AccountUserGroupUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Name *string `json:"name,omitempty"`
	Policies *[]any `json:"policies,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// AccountUserGroupMember is the typed data model for the account_user_group_member entity.
type AccountUserGroupMember struct {
}

// AccountUserGroupMemberLoadMatch is the typed request payload for AccountUserGroupMember.LoadTyped.
type AccountUserGroupMemberLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	UserGroupId string `json:"user_group_id"`
}

// AccountUserGroupMemberListMatch is the typed request payload for AccountUserGroupMember.ListTyped.
type AccountUserGroupMemberListMatch struct {
	AccountId string `json:"account_id"`
	UserGroupId string `json:"user_group_id"`
	Direction *string `json:"direction,omitempty"`
	FuzzyEmail *string `json:"fuzzy_email,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
}

// AccountUserGroupMemberCreateData is the typed request payload for AccountUserGroupMember.CreateTyped.
type AccountUserGroupMemberCreateData struct {
	AccountId string `json:"account_id"`
	UserGroupId string `json:"user_group_id"`
	Id *string `json:"id,omitempty"`
	Result map[string]any `json:"result"`
}

// AccountUserGroupMemberUpdateData is the typed request payload for AccountUserGroupMember.UpdateTyped.
type AccountUserGroupMemberUpdateData struct {
	AccountId string `json:"account_id"`
	UserGroupId string `json:"user_group_id"`
	Id *string `json:"id,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// AccountUserGroupMemberRemoveMatch is the typed request payload for AccountUserGroupMember.RemoveTyped.
type AccountUserGroupMemberRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	UserGroupId string `json:"user_group_id"`
}

// BeginVerification is the typed data model for the begin_verification entity.
type BeginVerification struct {
}

// BeginVerificationCreateData is the typed request payload for BeginVerification.CreateTyped.
type BeginVerificationCreateData struct {
	AccountId string `json:"account_id"`
	SsoConnectorId string `json:"sso_connector_id"`
	Errors []any `json:"errors"`
	Messages []any `json:"messages"`
	Success bool `json:"success"`
}

// BillSubsApiClientSecretResponseSingle is the typed data model for the bill_subs_api_client_secret_response_single entity.
type BillSubsApiClientSecretResponseSingle struct {
}

// BillSubsApiClientSecretResponseSingleCreateData is the typed request payload for BillSubsApiClientSecretResponseSingle.CreateTyped.
type BillSubsApiClientSecretResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	Result *map[string]any `json:"result,omitempty"`
}

// BillableUsageApiV2Usage is the typed data model for the billable_usage_api_v2_usage entity.
type BillableUsageApiV2Usage struct {
}

// BillableUsageApiV2UsageListMatch is the typed request payload for BillableUsageApiV2Usage.ListTyped.
type BillableUsageApiV2UsageListMatch struct {
	OrganizationId string `json:"organization_id"`
	From *string `json:"from,omitempty"`
	To *string `json:"to,omitempty"`
}

// DnsCustomNameserversEmptyResponse3 is the typed data model for the dns_custom_nameservers_empty_response_3 entity.
type DnsCustomNameserversEmptyResponse3 struct {
}

// DnsCustomNameserversEmptyResponse3RemoveMatch is the typed request payload for DnsCustomNameserversEmptyResponse3.RemoveTyped.
type DnsCustomNameserversEmptyResponse3RemoveMatch struct {
	CustomNsId string `json:"custom_ns_id"`
	TenantTag string `json:"tenant_tag"`
}

// DnsCustomNameserversTcnsResponseCollection is the typed data model for the dns_custom_nameservers_tcns_response_collection entity.
type DnsCustomNameserversTcnsResponseCollection struct {
}

// DnsCustomNameserversTcnsResponseCollectionListMatch is the typed request payload for DnsCustomNameserversTcnsResponseCollection.ListTyped.
type DnsCustomNameserversTcnsResponseCollectionListMatch struct {
	TenantTag string `json:"tenant_tag"`
}

// DnsCustomNameserversTcnsResponseSingle is the typed data model for the dns_custom_nameservers_tcns_response_single entity.
type DnsCustomNameserversTcnsResponseSingle struct {
}

// DnsCustomNameserversTcnsResponseSingleCreateData is the typed request payload for DnsCustomNameserversTcnsResponseSingle.CreateTyped.
type DnsCustomNameserversTcnsResponseSingleCreateData struct {
	TenantTag string `json:"tenant_tag"`
	NsName string `json:"ns_name"`
	NsSet *float64 `json:"ns_set,omitempty"`
}

// IamApiResponseSingleId is the typed data model for the iam_api_response_single_id entity.
type IamApiResponseSingleId struct {
}

// IamApiResponseSingleIdRemoveMatch is the typed request payload for IamApiResponseSingleId.RemoveTyped.
type IamApiResponseSingleIdRemoveMatch struct {
	AccountId string `json:"account_id"`
	OauthClientId string `json:"oauth_client_id"`
}

// IamCollectionMemberResponseWithPolicy is the typed data model for the iam_collection_member_response_with_policy entity.
type IamCollectionMemberResponseWithPolicy struct {
}

// IamCollectionMemberResponseWithPolicyListMatch is the typed request payload for IamCollectionMemberResponseWithPolicy.ListTyped.
type IamCollectionMemberResponseWithPolicyListMatch struct {
	AccountId string `json:"account_id"`
	Direction *string `json:"direction,omitempty"`
	Order *any `json:"order,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	Status *string `json:"status,omitempty"`
}

// IamCollectionOauthClient is the typed data model for the iam_collection_oauth_client entity.
type IamCollectionOauthClient struct {
}

// IamCollectionOauthClientListMatch is the typed request payload for IamCollectionOauthClient.ListTyped.
type IamCollectionOauthClientListMatch struct {
	AccountId string `json:"account_id"`
}

// IamCollectionOauthScope is the typed data model for the iam_collection_oauth_scope entity.
type IamCollectionOauthScope struct {
}

// IamCollectionOauthScopeListMatch is the typed request payload for IamCollectionOauthScope.ListTyped.
type IamCollectionOauthScopeListMatch struct {
	Result *[]any `json:"result,omitempty"`
}

// IamCollectionOrganization is the typed data model for the iam_collection_organization entity.
type IamCollectionOrganization struct {
}

// IamCollectionOrganizationListMatch is the typed request payload for IamCollectionOrganization.ListTyped.
type IamCollectionOrganizationListMatch struct {
	Direction *string `json:"direction,omitempty"`
	Match *string `json:"match,omitempty"`
	Name *string `json:"name,omitempty"`
	Order *string `json:"order,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	Status *string `json:"status,omitempty"`
}

// IamCollectionPermissionGroup is the typed data model for the iam_collection_permission_group entity.
type IamCollectionPermissionGroup struct {
}

// IamCollectionPermissionGroupListMatch is the typed request payload for IamCollectionPermissionGroup.ListTyped.
type IamCollectionPermissionGroupListMatch struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
	Label *string `json:"label,omitempty"`
	Name *string `json:"name,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
}

// IamCollectionRole is the typed data model for the iam_collection_role entity.
type IamCollectionRole struct {
}

// IamCollectionRoleListMatch is the typed request payload for IamCollectionRole.ListTyped.
type IamCollectionRoleListMatch struct {
	AccountId string `json:"account_id"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
}

// IamCollectionToken is the typed data model for the iam_collection_token entity.
type IamCollectionToken struct {
}

// IamCollectionTokenListMatch is the typed request payload for IamCollectionToken.ListTyped.
type IamCollectionTokenListMatch struct {
	Direction *string `json:"direction,omitempty"`
	IncludeExpired *bool `json:"include_expired,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
}

// IamOauthClientRotateSecret is the typed data model for the iam_oauth_client_rotate_secret entity.
type IamOauthClientRotateSecret struct {
}

// IamOauthClientRotateSecretCreateData is the typed request payload for IamOauthClientRotateSecret.CreateTyped.
type IamOauthClientRotateSecretCreateData struct {
	AccountId string `json:"account_id"`
	OauthClientId string `json:"oauth_client_id"`
	Result *map[string]any `json:"result,omitempty"`
}

// IamPermissionsGroupResponseCollection is the typed data model for the iam_permissions_group_response_collection entity.
type IamPermissionsGroupResponseCollection struct {
}

// IamPermissionsGroupResponseCollectionListMatch is the typed request payload for IamPermissionsGroupResponseCollection.ListTyped.
type IamPermissionsGroupResponseCollectionListMatch struct {
	Name *string `json:"name,omitempty"`
	Scope *string `json:"scope,omitempty"`
}

// IamResponseSingleValue is the typed data model for the iam_response_single_value entity.
type IamResponseSingleValue struct {
}

// IamResponseSingleValueUpdateData is the typed request payload for IamResponseSingleValue.UpdateTyped.
type IamResponseSingleValueUpdateData struct {
	AccountId *string `json:"account_id,omitempty"`
	TokenId string `json:"token_id"`
	Result *string `json:"result,omitempty"`
}

// IamSchemasCollectionInvite is the typed data model for the iam_schemas_collection_invite entity.
type IamSchemasCollectionInvite struct {
}

// IamSchemasCollectionInviteListMatch is the typed request payload for IamSchemasCollectionInvite.ListTyped.
type IamSchemasCollectionInviteListMatch struct {
	Result *[]any `json:"result,omitempty"`
}

// IamSingleInvite is the typed data model for the iam_single_invite entity.
type IamSingleInvite struct {
}

// IamSingleInviteLoadMatch is the typed request payload for IamSingleInvite.LoadTyped.
type IamSingleInviteLoadMatch struct {
	Id string `json:"id"`
}

// IamSingleInviteUpdateData is the typed request payload for IamSingleInvite.UpdateTyped.
type IamSingleInviteUpdateData struct {
	Id string `json:"id"`
	Result *map[string]any `json:"result,omitempty"`
	Status *any `json:"status,omitempty"`
}

// IamSingleMemberResponseWithPolicy is the typed data model for the iam_single_member_response_with_policy entity.
type IamSingleMemberResponseWithPolicy struct {
}

// IamSingleMemberResponseWithPolicyLoadMatch is the typed request payload for IamSingleMemberResponseWithPolicy.LoadTyped.
type IamSingleMemberResponseWithPolicyLoadMatch struct {
	AccountId string `json:"account_id"`
	MemberId string `json:"member_id"`
}

// IamSingleMemberResponseWithPolicyCreateData is the typed request payload for IamSingleMemberResponseWithPolicy.CreateTyped.
type IamSingleMemberResponseWithPolicyCreateData struct {
	AccountId string `json:"account_id"`
	Result *map[string]any `json:"result,omitempty"`
}

// IamSingleMemberResponseWithPolicyUpdateData is the typed request payload for IamSingleMemberResponseWithPolicy.UpdateTyped.
type IamSingleMemberResponseWithPolicyUpdateData struct {
	AccountId string `json:"account_id"`
	MemberId string `json:"member_id"`
	Result *map[string]any `json:"result,omitempty"`
}

// IamSingleMembershipResponseWithPolicy is the typed data model for the iam_single_membership_response_with_policy entity.
type IamSingleMembershipResponseWithPolicy struct {
}

// IamSingleMembershipResponseWithPolicyLoadMatch is the typed request payload for IamSingleMembershipResponseWithPolicy.LoadTyped.
type IamSingleMembershipResponseWithPolicyLoadMatch struct {
	MembershipId string `json:"membership_id"`
}

// IamSingleMembershipResponseWithPolicyUpdateData is the typed request payload for IamSingleMembershipResponseWithPolicy.UpdateTyped.
type IamSingleMembershipResponseWithPolicyUpdateData struct {
	MembershipId string `json:"membership_id"`
	Result *map[string]any `json:"result,omitempty"`
	Status *any `json:"status,omitempty"`
}

// IamSingleOauthClient is the typed data model for the iam_single_oauth_client entity.
type IamSingleOauthClient struct {
}

// IamSingleOauthClientLoadMatch is the typed request payload for IamSingleOauthClient.LoadTyped.
type IamSingleOauthClientLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// IamSingleOauthClientUpdateData is the typed request payload for IamSingleOauthClient.UpdateTyped.
type IamSingleOauthClientUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	Result *any `json:"result,omitempty"`
}

// IamSingleOauthClientCreate is the typed data model for the iam_single_oauth_client_create entity.
type IamSingleOauthClientCreate struct {
}

// IamSingleOauthClientCreateCreateData is the typed request payload for IamSingleOauthClientCreate.CreateTyped.
type IamSingleOauthClientCreateCreateData struct {
	AccountId string `json:"account_id"`
}

// IamSingleOrganization is the typed data model for the iam_single_organization entity.
type IamSingleOrganization struct {
}

// IamSingleOrganizationLoadMatch is the typed request payload for IamSingleOrganization.LoadTyped.
type IamSingleOrganizationLoadMatch struct {
	Id string `json:"id"`
}

// IamSinglePermissionGroup is the typed data model for the iam_single_permission_group entity.
type IamSinglePermissionGroup struct {
}

// IamSinglePermissionGroupLoadMatch is the typed request payload for IamSinglePermissionGroup.LoadTyped.
type IamSinglePermissionGroupLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// IamSingleRole is the typed data model for the iam_single_role entity.
type IamSingleRole struct {
}

// IamSingleRoleLoadMatch is the typed request payload for IamSingleRole.LoadTyped.
type IamSingleRoleLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// IamSingleToken is the typed data model for the iam_single_token entity.
type IamSingleToken struct {
}

// IamSingleTokenLoadMatch is the typed request payload for IamSingleToken.LoadTyped.
type IamSingleTokenLoadMatch struct {
	AccountId *string `json:"account_id,omitempty"`
	Id string `json:"id"`
}

// IamSingleTokenUpdateData is the typed request payload for IamSingleToken.UpdateTyped.
type IamSingleTokenUpdateData struct {
	AccountId *string `json:"account_id,omitempty"`
	Id string `json:"id"`
	Result *map[string]any `json:"result,omitempty"`
}

// IamSingleTokenCreate is the typed data model for the iam_single_token_create entity.
type IamSingleTokenCreate struct {
}

// IamSingleTokenCreateCreateData is the typed request payload for IamSingleTokenCreate.CreateTyped.
type IamSingleTokenCreateCreateData struct {
	Condition *map[string]any `json:"condition,omitempty"`
	ExpiresOn *string `json:"expires_on,omitempty"`
	Name string `json:"name"`
	NotBefore *string `json:"not_before,omitempty"`
	Policies []any `json:"policies"`
}

// IamSsoConnector is the typed data model for the iam_sso_connector entity.
type IamSsoConnector struct {
}

// IamSsoConnectorLoadMatch is the typed request payload for IamSsoConnector.LoadTyped.
type IamSsoConnectorLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// IamSsoConnectorCreateData is the typed request payload for IamSsoConnector.CreateTyped.
type IamSsoConnectorCreateData struct {
	AccountId string `json:"account_id"`
	BeginVerification *bool `json:"begin_verification,omitempty"`
	EmailDomain string `json:"email_domain"`
	Enabled *bool `json:"enabled,omitempty"`
	Id *string `json:"id,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	UseFedrampLanguage *bool `json:"use_fedramp_language,omitempty"`
}

// IamSsoConnectorUpdateData is the typed request payload for IamSsoConnector.UpdateTyped.
type IamSsoConnectorUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	BeginVerification *bool `json:"begin_verification,omitempty"`
	EmailDomain *string `json:"email_domain,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	UseFedrampLanguage *bool `json:"use_fedramp_language,omitempty"`
}

// IamSsoConnectorCollection is the typed data model for the iam_sso_connector_collection entity.
type IamSsoConnectorCollection struct {
}

// IamSsoConnectorCollectionListMatch is the typed request payload for IamSsoConnectorCollection.ListTyped.
type IamSsoConnectorCollectionListMatch struct {
	AccountId string `json:"account_id"`
}

// IamTokenVerifyResponseSingleSegment is the typed data model for the iam_token_verify_response_single_segment entity.
type IamTokenVerifyResponseSingleSegment struct {
}

// IamTokenVerifyResponseSingleSegmentLoadMatch is the typed request payload for IamTokenVerifyResponseSingleSegment.LoadTyped.
type IamTokenVerifyResponseSingleSegmentLoadMatch struct {
	Result *any `json:"result,omitempty"`
}

// Member is the typed data model for the member entity.
type Member struct {
}

// MemberRemoveMatch is the typed request payload for Member.RemoveTyped.
type MemberRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// OauthClient is the typed data model for the oauth_client entity.
type OauthClient struct {
}

// OauthClientRemoveMatch is the typed request payload for OauthClient.RemoveTyped.
type OauthClientRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// Organization is the typed data model for the organization entity.
type Organization struct {
}

// OrganizationLoadMatch is the typed request payload for Organization.LoadTyped.
type OrganizationLoadMatch struct {
	Id string `json:"id"`
}

// OrganizationListMatch is the typed request payload for Organization.ListTyped.
type OrganizationListMatch struct {
	ContainingAccount *string `json:"containing_account,omitempty"`
	ContainingOrganization *string `json:"containing_organization,omitempty"`
	ContainingUser *string `json:"containing_user,omitempty"`
	Id *[]any `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	NameContain *string `json:"name_contain,omitempty"`
	NameEndsWith *string `json:"name_ends_with,omitempty"`
	NameStartsWith *string `json:"name_starts_with,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	PageToken *string `json:"page_token,omitempty"`
	ParentId *string `json:"parent_id,omitempty"`
}

// OrganizationCreateData is the typed request payload for Organization.CreateTyped.
type OrganizationCreateData struct {
	CreateTime string `json:"create_time"`
	Errors []any `json:"errors"`
	Id string `json:"id"`
	Messages []any `json:"messages"`
	Meta map[string]any `json:"meta"`
	Name string `json:"name"`
	Parent map[string]any `json:"parent"`
	Profile map[string]any `json:"profile"`
	Result map[string]any `json:"result"`
	ResultInfo map[string]any `json:"result_info"`
	Status string `json:"status"`
	Success bool `json:"success"`
}

// OrganizationUpdateData is the typed request payload for Organization.UpdateTyped.
type OrganizationUpdateData struct {
	Id string `json:"id"`
	MemberCode *string `json:"member_code,omitempty"`
	CreateTime *string `json:"create_time,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	Name *string `json:"name,omitempty"`
	Parent *map[string]any `json:"parent,omitempty"`
	Profile *map[string]any `json:"profile,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	ResultInfo *map[string]any `json:"result_info,omitempty"`
	Status *string `json:"status,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// OrganizationRemoveMatch is the typed request payload for Organization.RemoveTyped.
type OrganizationRemoveMatch struct {
	Id string `json:"id"`
}

// OrganizationMember is the typed data model for the organization_member entity.
type OrganizationMember struct {
}

// OrganizationMemberLoadMatch is the typed request payload for OrganizationMember.LoadTyped.
type OrganizationMemberLoadMatch struct {
	Id string `json:"id"`
	OrganizationId string `json:"organization_id"`
}

// OrganizationMemberListMatch is the typed request payload for OrganizationMember.ListTyped.
type OrganizationMemberListMatch struct {
	Id string `json:"id"`
	PageSize *int `json:"page_size,omitempty"`
	PageToken *string `json:"page_token,omitempty"`
	Status *[]any `json:"status,omitempty"`
	UserEmail *string `json:"user_email,omitempty"`
	UserEmailContain *string `json:"user_email_contain,omitempty"`
	UserEmailEndsWith *string `json:"user_email_ends_with,omitempty"`
	UserEmailStartsWith *string `json:"user_email_starts_with,omitempty"`
}

// OrganizationMemberCreateData is the typed request payload for OrganizationMember.CreateTyped.
type OrganizationMemberCreateData struct {
	Id string `json:"id"`
	Errors []any `json:"errors"`
	Member map[string]any `json:"member"`
	Messages []any `json:"messages"`
	Result map[string]any `json:"result"`
	ResultInfo map[string]any `json:"result_info"`
	Success bool `json:"success"`
}

// OrganizationMemberRemoveMatch is the typed request payload for OrganizationMember.RemoveTyped.
type OrganizationMemberRemoveMatch struct {
	Id string `json:"id"`
	OrganizationId string `json:"organization_id"`
}

// OrganizationsApiProfile is the typed data model for the organizations_api_profile entity.
type OrganizationsApiProfile struct {
}

// OrganizationsApiProfileListMatch is the typed request payload for OrganizationsApiProfile.ListTyped.
type OrganizationsApiProfileListMatch struct {
	OrganizationId string `json:"organization_id"`
}

// Resource is the typed data model for the resource entity.
type Resource struct {
}

// ResourceLoadMatch is the typed request payload for Resource.LoadTyped.
type ResourceLoadMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	ShareId string `json:"share_id"`
}

// ResourceListMatch is the typed request payload for Resource.ListTyped.
type ResourceListMatch struct {
	AccountId string `json:"account_id"`
	ShareId string `json:"share_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
	Status *string `json:"status,omitempty"`
}

// ResourceCreateData is the typed request payload for Resource.CreateTyped.
type ResourceCreateData struct {
	AccountId string `json:"account_id"`
	ShareId string `json:"share_id"`
	Errors []any `json:"errors"`
	Id *string `json:"id,omitempty"`
	Meta map[string]any `json:"meta"`
	ResourceAccountId string `json:"resource_account_id"`
	ResourceId string `json:"resource_id"`
	ResourceType string `json:"resource_type"`
	Result *any `json:"result,omitempty"`
	Success bool `json:"success"`
}

// ResourceUpdateData is the typed request payload for Resource.UpdateTyped.
type ResourceUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	ShareId string `json:"share_id"`
	Errors *[]any `json:"errors,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	ResourceAccountId *string `json:"resource_account_id,omitempty"`
	ResourceId *string `json:"resource_id,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
	Result *any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ResourceRemoveMatch is the typed request payload for Resource.RemoveTyped.
type ResourceRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
	ShareId string `json:"share_id"`
}

// ResourceGroup is the typed data model for the resource_group entity.
type ResourceGroup struct {
}

// ResourceGroupRemoveMatch is the typed request payload for ResourceGroup.RemoveTyped.
type ResourceGroupRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// ResourceSharing is the typed data model for the resource_sharing entity.
type ResourceSharing struct {
}

// ResourceSharingUpdateData is the typed request payload for ResourceSharing.UpdateTyped.
type ResourceSharingUpdateData struct {
	AccountId string `json:"account_id"`
	ShareId string `json:"share_id"`
}

// ResourceSharingShareExcludedRecipientResponseCollection is the typed data model for the resource_sharing_share_excluded_recipient_response_collection entity.
type ResourceSharingShareExcludedRecipientResponseCollection struct {
}

// ResourceSharingShareExcludedRecipientResponseCollectionListMatch is the typed request payload for ResourceSharingShareExcludedRecipientResponseCollection.ListTyped.
type ResourceSharingShareExcludedRecipientResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	ShareId string `json:"share_id"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// ResourceSharingShareExcludedRecipientResponseSingle is the typed data model for the resource_sharing_share_excluded_recipient_response_single entity.
type ResourceSharingShareExcludedRecipientResponseSingle struct {
}

// ResourceSharingShareExcludedRecipientResponseSingleLoadMatch is the typed request payload for ResourceSharingShareExcludedRecipientResponseSingle.LoadTyped.
type ResourceSharingShareExcludedRecipientResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	ExcludedRecipientId string `json:"excluded_recipient_id"`
	ShareId string `json:"share_id"`
}

// ResourceSharingShareExcludedRecipientResponseSingleCreateData is the typed request payload for ResourceSharingShareExcludedRecipientResponseSingle.CreateTyped.
type ResourceSharingShareExcludedRecipientResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	ShareId string `json:"share_id"`
	Errors []any `json:"errors"`
	Result *any `json:"result,omitempty"`
	Success bool `json:"success"`
}

// ResourceSharingShareExcludedRecipientResponseSingleRemoveMatch is the typed request payload for ResourceSharingShareExcludedRecipientResponseSingle.RemoveTyped.
type ResourceSharingShareExcludedRecipientResponseSingleRemoveMatch struct {
	AccountId string `json:"account_id"`
	ExcludedRecipientId string `json:"excluded_recipient_id"`
	ShareId string `json:"share_id"`
}

// ResourceSharingShareRecipientResponseCollection is the typed data model for the resource_sharing_share_recipient_response_collection entity.
type ResourceSharingShareRecipientResponseCollection struct {
}

// ResourceSharingShareRecipientResponseCollectionListMatch is the typed request payload for ResourceSharingShareRecipientResponseCollection.ListTyped.
type ResourceSharingShareRecipientResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	ShareId string `json:"share_id"`
	IncludeResource *bool `json:"include_resource,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
}

// ResourceSharingShareRecipientResponseSingle is the typed data model for the resource_sharing_share_recipient_response_single entity.
type ResourceSharingShareRecipientResponseSingle struct {
}

// ResourceSharingShareRecipientResponseSingleLoadMatch is the typed request payload for ResourceSharingShareRecipientResponseSingle.LoadTyped.
type ResourceSharingShareRecipientResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	RecipientId string `json:"recipient_id"`
	ShareId string `json:"share_id"`
	IncludeResource *bool `json:"include_resource,omitempty"`
}

// ResourceSharingShareRecipientResponseSingleCreateData is the typed request payload for ResourceSharingShareRecipientResponseSingle.CreateTyped.
type ResourceSharingShareRecipientResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	ShareId string `json:"share_id"`
	Errors []any `json:"errors"`
	OrganizationId *string `json:"organization_id,omitempty"`
	RecipientAccountId *string `json:"recipient_account_id,omitempty"`
	Result *any `json:"result,omitempty"`
	Success bool `json:"success"`
}

// ResourceSharingShareRecipientResponseSingleRemoveMatch is the typed request payload for ResourceSharingShareRecipientResponseSingle.RemoveTyped.
type ResourceSharingShareRecipientResponseSingleRemoveMatch struct {
	AccountId string `json:"account_id"`
	RecipientId string `json:"recipient_id"`
	ShareId string `json:"share_id"`
}

// ResourceSharingShareResponseCollection is the typed data model for the resource_sharing_share_response_collection entity.
type ResourceSharingShareResponseCollection struct {
}

// ResourceSharingShareResponseCollectionListMatch is the typed request payload for ResourceSharingShareResponseCollection.ListTyped.
type ResourceSharingShareResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	Direction *string `json:"direction,omitempty"`
	IncludeRecipientCount *bool `json:"include_recipient_count,omitempty"`
	IncludeResource *bool `json:"include_resource,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Order *string `json:"order,omitempty"`
	Page *int `json:"page,omitempty"`
	PerPage *int `json:"per_page,omitempty"`
	ResourceType *[]any `json:"resource_type,omitempty"`
	Status *string `json:"status,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	TargetType *string `json:"target_type,omitempty"`
}

// ResourceSharingShareResponseSingle is the typed data model for the resource_sharing_share_response_single entity.
type ResourceSharingShareResponseSingle struct {
}

// ResourceSharingShareResponseSingleLoadMatch is the typed request payload for ResourceSharingShareResponseSingle.LoadTyped.
type ResourceSharingShareResponseSingleLoadMatch struct {
	AccountId string `json:"account_id"`
	ShareId string `json:"share_id"`
	IncludeRecipientCount *bool `json:"include_recipient_count,omitempty"`
	IncludeResource *bool `json:"include_resource,omitempty"`
}

// ResourceSharingShareResponseSingleCreateData is the typed request payload for ResourceSharingShareResponseSingle.CreateTyped.
type ResourceSharingShareResponseSingleCreateData struct {
	AccountId string `json:"account_id"`
	Errors []any `json:"errors"`
	Name string `json:"name"`
	Recipients []any `json:"recipients"`
	Resources []any `json:"resources"`
	Result *any `json:"result,omitempty"`
	Success bool `json:"success"`
}

// ResourceSharingShareResponseSingleUpdateData is the typed request payload for ResourceSharingShareResponseSingle.UpdateTyped.
type ResourceSharingShareResponseSingleUpdateData struct {
	AccountId string `json:"account_id"`
	ShareId string `json:"share_id"`
	Errors *[]any `json:"errors,omitempty"`
	Name *string `json:"name,omitempty"`
	Recipients *[]any `json:"recipients,omitempty"`
	Resources *[]any `json:"resources,omitempty"`
	Result *any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ResourceSharingShareResponseSingleRemoveMatch is the typed request payload for ResourceSharingShareResponseSingle.RemoveTyped.
type ResourceSharingShareResponseSingleRemoveMatch struct {
	AccountId string `json:"account_id"`
	ShareId string `json:"share_id"`
}

// ScimDiscovery is the typed data model for the scim_discovery entity.
type ScimDiscovery struct {
}

// ScimDiscoveryLoadMatch is the typed request payload for ScimDiscovery.LoadTyped.
type ScimDiscoveryLoadMatch struct {
	AccountId string `json:"account_id"`
	ResourceTypeId *string `json:"resource_type_id,omitempty"`
	SchemaId *string `json:"schema_id,omitempty"`
}

// ScimGroup is the typed data model for the scim_group entity.
type ScimGroup struct {
}

// ScimGroupLoadMatch is the typed request payload for ScimGroup.LoadTyped.
type ScimGroupLoadMatch struct {
	AccountId string `json:"account_id"`
	Count *int `json:"count,omitempty"`
	Filter *string `json:"filter,omitempty"`
	StartIndex *int `json:"start_index,omitempty"`
	Id *string `json:"id,omitempty"`
}

// ScimGroupCreateData is the typed request payload for ScimGroup.CreateTyped.
type ScimGroupCreateData struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
}

// ScimGroupUpdateData is the typed request payload for ScimGroup.UpdateTyped.
type ScimGroupUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// ScimGroupRemoveMatch is the typed request payload for ScimGroup.RemoveTyped.
type ScimGroupRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// ScimUser is the typed data model for the scim_user entity.
type ScimUser struct {
}

// ScimUserLoadMatch is the typed request payload for ScimUser.LoadTyped.
type ScimUserLoadMatch struct {
	AccountId string `json:"account_id"`
	Count *int `json:"count,omitempty"`
	Filter *string `json:"filter,omitempty"`
	StartIndex *int `json:"start_index,omitempty"`
	Id *string `json:"id,omitempty"`
}

// ScimUserCreateData is the typed request payload for ScimUser.CreateTyped.
type ScimUserCreateData struct {
	AccountId string `json:"account_id"`
	Id *string `json:"id,omitempty"`
}

// ScimUserUpdateData is the typed request payload for ScimUser.UpdateTyped.
type ScimUserUpdateData struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// ScimUserRemoveMatch is the typed request payload for ScimUser.RemoveTyped.
type ScimUserRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// SsoConnector is the typed data model for the sso_connector entity.
type SsoConnector struct {
}

// SsoConnectorRemoveMatch is the typed request payload for SsoConnector.RemoveTyped.
type SsoConnectorRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// Tenant is the typed data model for the tenant entity.
type Tenant struct {
}

// TenantLoadMatch is the typed request payload for Tenant.LoadTyped.
type TenantLoadMatch struct {
	Id string `json:"id"`
}

// TenantListMatch is the typed request payload for Tenant.ListTyped.
type TenantListMatch struct {
	Id string `json:"id"`
}

// Token is the typed data model for the token entity.
type Token struct {
}

// TokenRemoveMatch is the typed request payload for Token.RemoveTyped.
type TokenRemoveMatch struct {
	AccountId *string `json:"account_id,omitempty"`
	Id string `json:"id"`
}

// User is the typed data model for the user entity.
type User struct {
}

// UserListMatch is the typed request payload for User.ListTyped.
type UserListMatch struct {
}

// UserGroup is the typed data model for the user_group entity.
type UserGroup struct {
}

// UserGroupRemoveMatch is the typed request payload for UserGroup.RemoveTyped.
type UserGroupRemoveMatch struct {
	AccountId string `json:"account_id"`
	Id string `json:"id"`
}

// UsersAccountMembership is the typed data model for the users_account_membership entity.
type UsersAccountMembership struct {
}

// UsersAccountMembershipRemoveMatch is the typed request payload for UsersAccountMembership.RemoveTyped.
type UsersAccountMembershipRemoveMatch struct {
	Id string `json:"id"`
}

// UsersOrganization is the typed data model for the users_organization entity.
type UsersOrganization struct {
}

// UsersOrganizationRemoveMatch is the typed request payload for UsersOrganization.RemoveTyped.
type UsersOrganizationRemoveMatch struct {
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
