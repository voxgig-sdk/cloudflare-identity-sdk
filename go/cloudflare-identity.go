package voxgigcloudflareidentitysdk

import (
	"github.com/voxgig-sdk/cloudflare-identity-sdk/go/core"
	"github.com/voxgig-sdk/cloudflare-identity-sdk/go/entity"
	"github.com/voxgig-sdk/cloudflare-identity-sdk/go/feature"
	_ "github.com/voxgig-sdk/cloudflare-identity-sdk/go/utility"
)

// Type aliases preserve external API.
type CloudflareIdentitySDK = core.CloudflareIdentitySDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CloudflareIdentityEntity = core.CloudflareIdentityEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CloudflareIdentityError = core.CloudflareIdentityError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAaaAuditLogsV2OrgHistoryResponseCollectionEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewAaaAuditLogsV2OrgHistoryResponseCollectionEntity(client, entopts)
	}
	core.NewAaaAuditLogsV2OrgResponseCollectionEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewAaaAuditLogsV2OrgResponseCollectionEntity(client, entopts)
	}
	core.NewAccountEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewAccountEntity(client, entopts)
	}
	core.NewAccountResourceGroupEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewAccountResourceGroupEntity(client, entopts)
	}
	core.NewAccountUserGroupEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewAccountUserGroupEntity(client, entopts)
	}
	core.NewAccountUserGroupMemberEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewAccountUserGroupMemberEntity(client, entopts)
	}
	core.NewBeginVerificationEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewBeginVerificationEntity(client, entopts)
	}
	core.NewBillSubsApiClientSecretResponseSingleEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewBillSubsApiClientSecretResponseSingleEntity(client, entopts)
	}
	core.NewBillableUsageApiV2UsageEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewBillableUsageApiV2UsageEntity(client, entopts)
	}
	core.NewDnsCustomNameserversEmptyResponse3EntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewDnsCustomNameserversEmptyResponse3Entity(client, entopts)
	}
	core.NewDnsCustomNameserversTcnsResponseCollectionEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewDnsCustomNameserversTcnsResponseCollectionEntity(client, entopts)
	}
	core.NewDnsCustomNameserversTcnsResponseSingleEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewDnsCustomNameserversTcnsResponseSingleEntity(client, entopts)
	}
	core.NewIamApiResponseSingleIdEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamApiResponseSingleIdEntity(client, entopts)
	}
	core.NewIamCollectionMemberResponseWithPolicyEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamCollectionMemberResponseWithPolicyEntity(client, entopts)
	}
	core.NewIamCollectionOauthClientEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamCollectionOauthClientEntity(client, entopts)
	}
	core.NewIamCollectionOauthScopeEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamCollectionOauthScopeEntity(client, entopts)
	}
	core.NewIamCollectionOrganizationEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamCollectionOrganizationEntity(client, entopts)
	}
	core.NewIamCollectionPermissionGroupEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamCollectionPermissionGroupEntity(client, entopts)
	}
	core.NewIamCollectionRoleEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamCollectionRoleEntity(client, entopts)
	}
	core.NewIamCollectionTokenEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamCollectionTokenEntity(client, entopts)
	}
	core.NewIamOauthClientRotateSecretEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamOauthClientRotateSecretEntity(client, entopts)
	}
	core.NewIamPermissionsGroupResponseCollectionEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamPermissionsGroupResponseCollectionEntity(client, entopts)
	}
	core.NewIamResponseSingleValueEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamResponseSingleValueEntity(client, entopts)
	}
	core.NewIamSchemasCollectionInviteEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamSchemasCollectionInviteEntity(client, entopts)
	}
	core.NewIamSingleInviteEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamSingleInviteEntity(client, entopts)
	}
	core.NewIamSingleMemberResponseWithPolicyEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamSingleMemberResponseWithPolicyEntity(client, entopts)
	}
	core.NewIamSingleMembershipResponseWithPolicyEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamSingleMembershipResponseWithPolicyEntity(client, entopts)
	}
	core.NewIamSingleOauthClientEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamSingleOauthClientEntity(client, entopts)
	}
	core.NewIamSingleOauthClientCreateEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamSingleOauthClientCreateEntity(client, entopts)
	}
	core.NewIamSingleOrganizationEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamSingleOrganizationEntity(client, entopts)
	}
	core.NewIamSinglePermissionGroupEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamSinglePermissionGroupEntity(client, entopts)
	}
	core.NewIamSingleRoleEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamSingleRoleEntity(client, entopts)
	}
	core.NewIamSingleTokenEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamSingleTokenEntity(client, entopts)
	}
	core.NewIamSingleTokenCreateEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamSingleTokenCreateEntity(client, entopts)
	}
	core.NewIamSsoConnectorEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamSsoConnectorEntity(client, entopts)
	}
	core.NewIamSsoConnectorCollectionEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamSsoConnectorCollectionEntity(client, entopts)
	}
	core.NewIamTokenVerifyResponseSingleSegmentEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewIamTokenVerifyResponseSingleSegmentEntity(client, entopts)
	}
	core.NewMemberEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewMemberEntity(client, entopts)
	}
	core.NewOauthClientEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewOauthClientEntity(client, entopts)
	}
	core.NewOrganizationEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewOrganizationEntity(client, entopts)
	}
	core.NewOrganizationMemberEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewOrganizationMemberEntity(client, entopts)
	}
	core.NewOrganizationsApiProfileEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewOrganizationsApiProfileEntity(client, entopts)
	}
	core.NewResourceEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewResourceEntity(client, entopts)
	}
	core.NewResourceGroupEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewResourceGroupEntity(client, entopts)
	}
	core.NewResourceSharingEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewResourceSharingEntity(client, entopts)
	}
	core.NewResourceSharingShareExcludedRecipientResponseCollectionEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewResourceSharingShareExcludedRecipientResponseCollectionEntity(client, entopts)
	}
	core.NewResourceSharingShareExcludedRecipientResponseSingleEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewResourceSharingShareExcludedRecipientResponseSingleEntity(client, entopts)
	}
	core.NewResourceSharingShareRecipientResponseCollectionEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewResourceSharingShareRecipientResponseCollectionEntity(client, entopts)
	}
	core.NewResourceSharingShareRecipientResponseSingleEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewResourceSharingShareRecipientResponseSingleEntity(client, entopts)
	}
	core.NewResourceSharingShareResponseCollectionEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewResourceSharingShareResponseCollectionEntity(client, entopts)
	}
	core.NewResourceSharingShareResponseSingleEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewResourceSharingShareResponseSingleEntity(client, entopts)
	}
	core.NewScimDiscoveryEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewScimDiscoveryEntity(client, entopts)
	}
	core.NewScimGroupEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewScimGroupEntity(client, entopts)
	}
	core.NewScimUserEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewScimUserEntity(client, entopts)
	}
	core.NewSsoConnectorEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewSsoConnectorEntity(client, entopts)
	}
	core.NewTenantEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewTenantEntity(client, entopts)
	}
	core.NewTokenEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewTokenEntity(client, entopts)
	}
	core.NewUserEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewUserEntity(client, entopts)
	}
	core.NewUserGroupEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewUserGroupEntity(client, entopts)
	}
	core.NewUsersAccountMembershipEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewUsersAccountMembershipEntity(client, entopts)
	}
	core.NewUsersOrganizationEntityFunc = func(client *core.CloudflareIdentitySDK, entopts map[string]any) core.CloudflareIdentityEntity {
		return entity.NewUsersOrganizationEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCloudflareIdentitySDK = core.NewCloudflareIdentitySDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCloudflareIdentitySDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CloudflareIdentitySDK  { return NewCloudflareIdentitySDK(nil) }
func Test() *CloudflareIdentitySDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
