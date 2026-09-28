package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAaaAuditLogsV2OrgHistoryResponseCollectionEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewAaaAuditLogsV2OrgResponseCollectionEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewAccountEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewAccountResourceGroupEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewAccountUserGroupEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewAccountUserGroupMemberEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewBeginVerificationEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewBillSubsApiClientSecretResponseSingleEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewBillableUsageApiV2UsageEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewDnsCustomNameserversEmptyResponse3EntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewDnsCustomNameserversTcnsResponseCollectionEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewDnsCustomNameserversTcnsResponseSingleEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamApiResponseSingleIdEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamCollectionMemberResponseWithPolicyEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamCollectionOauthClientEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamCollectionOauthScopeEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamCollectionOrganizationEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamCollectionPermissionGroupEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamCollectionRoleEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamCollectionTokenEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamOauthClientRotateSecretEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamPermissionsGroupResponseCollectionEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamResponseSingleValueEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamSchemasCollectionInviteEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamSingleInviteEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamSingleMemberResponseWithPolicyEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamSingleMembershipResponseWithPolicyEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamSingleOauthClientEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamSingleOauthClientCreateEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamSingleOrganizationEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamSinglePermissionGroupEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamSingleRoleEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamSingleTokenEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamSingleTokenCreateEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamSsoConnectorEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamSsoConnectorCollectionEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewIamTokenVerifyResponseSingleSegmentEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewMemberEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewOauthClientEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewOrganizationEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewOrganizationMemberEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewOrganizationsApiProfileEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewResourceEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewResourceGroupEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewResourceSharingEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewResourceSharingShareExcludedRecipientResponseCollectionEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewResourceSharingShareExcludedRecipientResponseSingleEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewResourceSharingShareRecipientResponseCollectionEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewResourceSharingShareRecipientResponseSingleEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewResourceSharingShareResponseCollectionEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewResourceSharingShareResponseSingleEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewScimDiscoveryEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewScimGroupEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewScimUserEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewSsoConnectorEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewTenantEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewTokenEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewUserEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewUserGroupEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewUsersAccountMembershipEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

var NewUsersOrganizationEntityFunc func(client *CloudflareIdentitySDK, entopts map[string]any) CloudflareIdentityEntity

