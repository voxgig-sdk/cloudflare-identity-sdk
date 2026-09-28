# Typed models for the CloudflareIdentity SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AaaAuditLogsV2OrgHistoryResponseCollection(TypedDict):
    errors: list
    result: list
    result_info: dict
    success: bool


class AaaAuditLogsV2OrgHistoryResponseCollectionListMatchRequired(TypedDict):
    audit_id: str
    organization_id: str
    action_time: str
    before: str
    since: str


class AaaAuditLogsV2OrgHistoryResponseCollectionListMatch(AaaAuditLogsV2OrgHistoryResponseCollectionListMatchRequired, total=False):
    cursor: str
    direction: str
    limit: float


class AaaAuditLogsV2OrgResponseCollection(TypedDict, total=False):
    errors: list
    result: list
    result_info: dict
    success: bool


class AaaAuditLogsV2OrgResponseCollectionListMatchRequired(TypedDict):
    organization_id: str
    before: str
    since: str


class AaaAuditLogsV2OrgResponseCollectionListMatch(AaaAuditLogsV2OrgResponseCollectionListMatchRequired, total=False):
    action_result: list
    action_result_not: list
    action_type: list
    action_type_not: list
    actor_context: list
    actor_context_not: list
    actor_email: list
    actor_email_not: list
    actor_id: list
    actor_id_not: list
    actor_ip_address: list
    actor_ip_address_not: list
    actor_token_id: list
    actor_token_id_not: list
    actor_token_name: list
    actor_token_name_not: list
    actor_type: list
    actor_type_not: list
    cursor: str
    direction: str
    id: list
    id_not: list
    limit: float
    raw_cf_ray_id: list
    raw_cf_ray_id_not: list
    raw_method: list
    raw_method_not: list
    raw_status_code: list
    raw_status_code_not: list
    raw_uri: list
    raw_uri_not: list
    resource_id: list
    resource_id_not: list
    resource_product: list
    resource_product_not: list
    resource_scope: list
    resource_scope_not: list
    resource_type: list
    resource_type_not: list


class Account(TypedDict, total=False):
    id: str


class AccountListMatch(TypedDict):
    id: str


class AccountResourceGroupRequired(TypedDict):
    errors: list
    messages: list
    name: str
    result: dict
    scope: dict
    success: bool


class AccountResourceGroup(AccountResourceGroupRequired, total=False):
    id: str


class AccountResourceGroupLoadMatch(TypedDict):
    account_id: str
    id: str


class AccountResourceGroupListMatchRequired(TypedDict):
    account_id: str


class AccountResourceGroupListMatch(AccountResourceGroupListMatchRequired, total=False):
    id: str
    name: str


class AccountResourceGroupCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    messages: list
    name: str
    result: dict
    scope: dict
    success: bool


class AccountResourceGroupCreateData(AccountResourceGroupCreateDataRequired, total=False):
    id: str


class AccountResourceGroupUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class AccountResourceGroupUpdateData(AccountResourceGroupUpdateDataRequired, total=False):
    errors: list
    messages: list
    name: str
    result: dict
    scope: dict
    success: bool


class AccountUserGroupRequired(TypedDict):
    name: str
    result: dict


class AccountUserGroup(AccountUserGroupRequired, total=False):
    id: str
    policies: list


class AccountUserGroupLoadMatch(TypedDict):
    account_id: str
    id: str


class AccountUserGroupListMatchRequired(TypedDict):
    account_id: str


class AccountUserGroupListMatch(AccountUserGroupListMatchRequired, total=False):
    direction: str
    fuzzy_name: str
    id: str
    name: str
    page: float
    per_page: float


class AccountUserGroupCreateDataRequired(TypedDict):
    account_id: str
    name: str
    result: dict


class AccountUserGroupCreateData(AccountUserGroupCreateDataRequired, total=False):
    id: str
    policies: list


class AccountUserGroupUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class AccountUserGroupUpdateData(AccountUserGroupUpdateDataRequired, total=False):
    name: str
    policies: list
    result: dict


class AccountUserGroupMemberRequired(TypedDict):
    result: dict


class AccountUserGroupMember(AccountUserGroupMemberRequired, total=False):
    id: str


class AccountUserGroupMemberLoadMatch(TypedDict):
    account_id: str
    id: str
    user_group_id: str


class AccountUserGroupMemberListMatchRequired(TypedDict):
    account_id: str
    user_group_id: str


class AccountUserGroupMemberListMatch(AccountUserGroupMemberListMatchRequired, total=False):
    direction: str
    fuzzy_email: str
    page: float
    per_page: float


class AccountUserGroupMemberCreateDataRequired(TypedDict):
    account_id: str
    user_group_id: str
    result: dict


class AccountUserGroupMemberCreateData(AccountUserGroupMemberCreateDataRequired, total=False):
    id: str


class AccountUserGroupMemberUpdateDataRequired(TypedDict):
    account_id: str
    user_group_id: str


class AccountUserGroupMemberUpdateData(AccountUserGroupMemberUpdateDataRequired, total=False):
    id: str
    result: dict


class AccountUserGroupMemberRemoveMatch(TypedDict):
    account_id: str
    id: str
    user_group_id: str


class BeginVerification(TypedDict):
    errors: list
    messages: list
    success: bool


class BeginVerificationCreateData(TypedDict):
    account_id: str
    sso_connector_id: str
    errors: list
    messages: list
    success: bool


class BillSubsApiClientSecretResponseSingle(TypedDict, total=False):
    result: dict


class BillSubsApiClientSecretResponseSingleCreateDataRequired(TypedDict):
    account_id: str


class BillSubsApiClientSecretResponseSingleCreateData(BillSubsApiClientSecretResponseSingleCreateDataRequired, total=False):
    result: dict


class BillableUsageApiV2Usage(TypedDict):
    errors: list
    messages: list
    result: list
    success: bool


class BillableUsageApiV2UsageListMatchRequired(TypedDict):
    organization_id: str


class BillableUsageApiV2UsageListMatch(BillableUsageApiV2UsageListMatchRequired, total=False):
    to: str


class DnsCustomNameserversEmptyResponse3(TypedDict):
    pass


class DnsCustomNameserversEmptyResponse3RemoveMatch(TypedDict):
    custom_ns_id: str
    tenant_tag: str


class DnsCustomNameserversTcnsResponseCollection(TypedDict, total=False):
    result: list


class DnsCustomNameserversTcnsResponseCollectionListMatch(TypedDict):
    tenant_tag: str


class DnsCustomNameserversTcnsResponseSingleRequired(TypedDict):
    ns_name: str


class DnsCustomNameserversTcnsResponseSingle(DnsCustomNameserversTcnsResponseSingleRequired, total=False):
    ns_set: float


class DnsCustomNameserversTcnsResponseSingleCreateDataRequired(TypedDict):
    tenant_tag: str
    ns_name: str


class DnsCustomNameserversTcnsResponseSingleCreateData(DnsCustomNameserversTcnsResponseSingleCreateDataRequired, total=False):
    ns_set: float


class IamApiResponseSingleId(TypedDict):
    pass


class IamApiResponseSingleIdRemoveMatch(TypedDict):
    account_id: str
    oauth_client_id: str


class IamCollectionMemberResponseWithPolicy(TypedDict, total=False):
    result: list


class IamCollectionMemberResponseWithPolicyListMatchRequired(TypedDict):
    account_id: str


class IamCollectionMemberResponseWithPolicyListMatch(IamCollectionMemberResponseWithPolicyListMatchRequired, total=False):
    direction: str
    order: Any
    page: float
    per_page: float
    status: str


class IamCollectionOauthClient(TypedDict, total=False):
    result: list


class IamCollectionOauthClientListMatch(TypedDict):
    account_id: str


class IamCollectionOauthScope(TypedDict, total=False):
    result: list


class IamCollectionOauthScopeListMatch(TypedDict, total=False):
    result: list


class IamCollectionOrganization(TypedDict, total=False):
    result: list


class IamCollectionOrganizationListMatch(TypedDict, total=False):
    direction: str
    match: str
    name: str
    order: str
    page: float
    per_page: float
    status: str


class IamCollectionPermissionGroup(TypedDict, total=False):
    result: list


class IamCollectionPermissionGroupListMatchRequired(TypedDict):
    account_id: str


class IamCollectionPermissionGroupListMatch(IamCollectionPermissionGroupListMatchRequired, total=False):
    id: str
    label: str
    name: str
    page: float
    per_page: float


class IamCollectionRole(TypedDict, total=False):
    result: list


class IamCollectionRoleListMatchRequired(TypedDict):
    account_id: str


class IamCollectionRoleListMatch(IamCollectionRoleListMatchRequired, total=False):
    page: float
    per_page: float


class IamCollectionToken(TypedDict, total=False):
    result: list


class IamCollectionTokenListMatch(TypedDict, total=False):
    direction: str
    include_expired: bool
    page: float
    per_page: float


class IamOauthClientRotateSecret(TypedDict, total=False):
    result: dict


class IamOauthClientRotateSecretCreateDataRequired(TypedDict):
    account_id: str
    oauth_client_id: str


class IamOauthClientRotateSecretCreateData(IamOauthClientRotateSecretCreateDataRequired, total=False):
    result: dict


class IamPermissionsGroupResponseCollection(TypedDict, total=False):
    result: list


class IamPermissionsGroupResponseCollectionListMatch(TypedDict, total=False):
    name: str
    scope: str


class IamResponseSingleValue(TypedDict, total=False):
    result: str


class IamResponseSingleValueUpdateDataRequired(TypedDict):
    token_id: str


class IamResponseSingleValueUpdateData(IamResponseSingleValueUpdateDataRequired, total=False):
    account_id: str
    result: str


class IamSchemasCollectionInvite(TypedDict, total=False):
    result: list


class IamSchemasCollectionInviteListMatch(TypedDict, total=False):
    result: list


class IamSingleInviteRequired(TypedDict):
    result: dict
    status: Any


class IamSingleInvite(IamSingleInviteRequired, total=False):
    id: str


class IamSingleInviteLoadMatch(TypedDict):
    id: str


class IamSingleInviteUpdateDataRequired(TypedDict):
    id: str


class IamSingleInviteUpdateData(IamSingleInviteUpdateDataRequired, total=False):
    result: dict
    status: Any


class IamSingleMemberResponseWithPolicy(TypedDict, total=False):
    result: dict


class IamSingleMemberResponseWithPolicyLoadMatch(TypedDict):
    account_id: str
    member_id: str


class IamSingleMemberResponseWithPolicyCreateDataRequired(TypedDict):
    account_id: str


class IamSingleMemberResponseWithPolicyCreateData(IamSingleMemberResponseWithPolicyCreateDataRequired, total=False):
    result: dict


class IamSingleMemberResponseWithPolicyUpdateDataRequired(TypedDict):
    account_id: str
    member_id: str


class IamSingleMemberResponseWithPolicyUpdateData(IamSingleMemberResponseWithPolicyUpdateDataRequired, total=False):
    result: dict


class IamSingleMembershipResponseWithPolicyRequired(TypedDict):
    status: Any


class IamSingleMembershipResponseWithPolicy(IamSingleMembershipResponseWithPolicyRequired, total=False):
    result: dict


class IamSingleMembershipResponseWithPolicyLoadMatch(TypedDict):
    membership_id: str


class IamSingleMembershipResponseWithPolicyUpdateDataRequired(TypedDict):
    membership_id: str


class IamSingleMembershipResponseWithPolicyUpdateData(IamSingleMembershipResponseWithPolicyUpdateDataRequired, total=False):
    result: dict
    status: Any


class IamSingleOauthClient(TypedDict, total=False):
    id: str
    result: Any


class IamSingleOauthClientLoadMatch(TypedDict):
    account_id: str
    id: str


class IamSingleOauthClientUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class IamSingleOauthClientUpdateData(IamSingleOauthClientUpdateDataRequired, total=False):
    result: Any


class IamSingleOauthClientCreate(TypedDict):
    pass


class IamSingleOauthClientCreateCreateData(TypedDict):
    account_id: str


class IamSingleOrganization(TypedDict, total=False):
    id: str
    result: dict


class IamSingleOrganizationLoadMatch(TypedDict):
    id: str


class IamSinglePermissionGroupRequired(TypedDict):
    result: dict


class IamSinglePermissionGroup(IamSinglePermissionGroupRequired, total=False):
    id: str


class IamSinglePermissionGroupLoadMatch(TypedDict):
    account_id: str
    id: str


class IamSingleRoleRequired(TypedDict):
    result: dict


class IamSingleRole(IamSingleRoleRequired, total=False):
    id: str


class IamSingleRoleLoadMatch(TypedDict):
    account_id: str
    id: str


class IamSingleToken(TypedDict, total=False):
    id: str
    result: dict


class IamSingleTokenLoadMatchRequired(TypedDict):
    id: str


class IamSingleTokenLoadMatch(IamSingleTokenLoadMatchRequired, total=False):
    account_id: str


class IamSingleTokenUpdateDataRequired(TypedDict):
    id: str


class IamSingleTokenUpdateData(IamSingleTokenUpdateDataRequired, total=False):
    account_id: str
    result: dict


class IamSingleTokenCreateRequired(TypedDict):
    name: str
    policies: list


class IamSingleTokenCreate(IamSingleTokenCreateRequired, total=False):
    condition: dict
    expires_on: str
    not_before: str


class IamSingleTokenCreateCreateDataRequired(TypedDict):
    name: str
    policies: list


class IamSingleTokenCreateCreateData(IamSingleTokenCreateCreateDataRequired, total=False):
    condition: dict
    expires_on: str
    not_before: str


class IamSsoConnectorRequired(TypedDict):
    email_domain: str


class IamSsoConnector(IamSsoConnectorRequired, total=False):
    begin_verification: bool
    enabled: bool
    id: str
    result: dict
    use_fedramp_language: bool


class IamSsoConnectorLoadMatch(TypedDict):
    account_id: str
    id: str


class IamSsoConnectorCreateDataRequired(TypedDict):
    account_id: str
    email_domain: str


class IamSsoConnectorCreateData(IamSsoConnectorCreateDataRequired, total=False):
    begin_verification: bool
    enabled: bool
    id: str
    result: dict
    use_fedramp_language: bool


class IamSsoConnectorUpdateDataRequired(TypedDict):
    account_id: str
    id: str


class IamSsoConnectorUpdateData(IamSsoConnectorUpdateDataRequired, total=False):
    begin_verification: bool
    email_domain: str
    enabled: bool
    result: dict
    use_fedramp_language: bool


class IamSsoConnectorCollection(TypedDict, total=False):
    result: list


class IamSsoConnectorCollectionListMatch(TypedDict):
    account_id: str


class IamTokenVerifyResponseSingleSegment(TypedDict):
    result: Any


class IamTokenVerifyResponseSingleSegmentLoadMatch(TypedDict, total=False):
    result: Any


class Member(TypedDict, total=False):
    id: str


class MemberRemoveMatch(TypedDict):
    account_id: str
    id: str


class OauthClient(TypedDict, total=False):
    id: str


class OauthClientRemoveMatch(TypedDict):
    account_id: str
    id: str


class Organization(TypedDict):
    create_time: str
    errors: list
    id: str
    messages: list
    meta: dict
    name: str
    parent: dict
    profile: dict
    result: dict
    result_info: dict
    status: str
    success: bool


class OrganizationLoadMatch(TypedDict):
    id: str


class OrganizationListMatch(TypedDict, total=False):
    containing_account: str
    containing_organization: str
    containing_user: str
    id: list
    name: str
    name_contain: str
    name_ends_with: str
    name_starts_with: str
    page_size: int
    page_token: str
    parent_id: str


class OrganizationCreateData(TypedDict):
    create_time: str
    errors: list
    id: str
    messages: list
    meta: dict
    name: str
    parent: dict
    profile: dict
    result: dict
    result_info: dict
    status: str
    success: bool


class OrganizationUpdateDataRequired(TypedDict):
    id: str


class OrganizationUpdateData(OrganizationUpdateDataRequired, total=False):
    member_code: str
    create_time: str
    errors: list
    messages: list
    meta: dict
    name: str
    parent: dict
    profile: dict
    result: dict
    result_info: dict
    status: str
    success: bool


class OrganizationRemoveMatch(TypedDict):
    id: str


class OrganizationMemberRequired(TypedDict):
    errors: list
    member: dict
    messages: list
    result: dict
    result_info: dict
    success: bool


class OrganizationMember(OrganizationMemberRequired, total=False):
    id: str


class OrganizationMemberLoadMatch(TypedDict):
    id: str
    organization_id: str


class OrganizationMemberListMatchRequired(TypedDict):
    id: str


class OrganizationMemberListMatch(OrganizationMemberListMatchRequired, total=False):
    page_size: int
    page_token: str
    status: list
    user_email: str
    user_email_contain: str
    user_email_ends_with: str
    user_email_starts_with: str


class OrganizationMemberCreateData(TypedDict):
    id: str
    errors: list
    member: dict
    messages: list
    result: dict
    result_info: dict
    success: bool


class OrganizationMemberRemoveMatch(TypedDict):
    id: str
    organization_id: str


class OrganizationsApiProfile(TypedDict):
    code: int
    message: str


class OrganizationsApiProfileListMatch(TypedDict):
    organization_id: str


class ResourceRequired(TypedDict):
    errors: list
    meta: dict
    resource_account_id: str
    resource_id: str
    resource_type: str
    success: bool


class Resource(ResourceRequired, total=False):
    id: str
    result: Any


class ResourceLoadMatch(TypedDict):
    account_id: str
    id: str
    share_id: str


class ResourceListMatchRequired(TypedDict):
    account_id: str
    share_id: str


class ResourceListMatch(ResourceListMatchRequired, total=False):
    page: int
    per_page: int
    resource_type: str
    status: str


class ResourceCreateDataRequired(TypedDict):
    account_id: str
    share_id: str
    errors: list
    meta: dict
    resource_account_id: str
    resource_id: str
    resource_type: str
    success: bool


class ResourceCreateData(ResourceCreateDataRequired, total=False):
    id: str
    result: Any


class ResourceUpdateDataRequired(TypedDict):
    account_id: str
    id: str
    share_id: str


class ResourceUpdateData(ResourceUpdateDataRequired, total=False):
    errors: list
    meta: dict
    resource_account_id: str
    resource_id: str
    resource_type: str
    result: Any
    success: bool


class ResourceRemoveMatch(TypedDict):
    account_id: str
    id: str
    share_id: str


class ResourceGroup(TypedDict, total=False):
    id: str


class ResourceGroupRemoveMatch(TypedDict):
    account_id: str
    id: str


class ResourceSharing(TypedDict):
    pass


class ResourceSharingUpdateData(TypedDict):
    account_id: str
    share_id: str


class ResourceSharingShareExcludedRecipientResponseCollection(TypedDict, total=False):
    result: list


class ResourceSharingShareExcludedRecipientResponseCollectionListMatchRequired(TypedDict):
    account_id: str
    share_id: str


class ResourceSharingShareExcludedRecipientResponseCollectionListMatch(ResourceSharingShareExcludedRecipientResponseCollectionListMatchRequired, total=False):
    page: int
    per_page: int


class ResourceSharingShareExcludedRecipientResponseSingleRequired(TypedDict):
    account_id: str
    errors: list
    success: bool


class ResourceSharingShareExcludedRecipientResponseSingle(ResourceSharingShareExcludedRecipientResponseSingleRequired, total=False):
    result: Any


class ResourceSharingShareExcludedRecipientResponseSingleLoadMatch(TypedDict):
    account_id: str
    excluded_recipient_id: str
    share_id: str


class ResourceSharingShareExcludedRecipientResponseSingleCreateDataRequired(TypedDict):
    account_id: str
    share_id: str
    errors: list
    success: bool


class ResourceSharingShareExcludedRecipientResponseSingleCreateData(ResourceSharingShareExcludedRecipientResponseSingleCreateDataRequired, total=False):
    result: Any


class ResourceSharingShareExcludedRecipientResponseSingleRemoveMatch(TypedDict):
    account_id: str
    excluded_recipient_id: str
    share_id: str


class ResourceSharingShareRecipientResponseCollection(TypedDict, total=False):
    result: list


class ResourceSharingShareRecipientResponseCollectionListMatchRequired(TypedDict):
    account_id: str
    share_id: str


class ResourceSharingShareRecipientResponseCollectionListMatch(ResourceSharingShareRecipientResponseCollectionListMatchRequired, total=False):
    include_resource: bool
    page: int
    per_page: int


class ResourceSharingShareRecipientResponseSingleRequired(TypedDict):
    errors: list
    success: bool


class ResourceSharingShareRecipientResponseSingle(ResourceSharingShareRecipientResponseSingleRequired, total=False):
    account_id: str
    organization_id: str
    recipient_account_id: str
    result: Any


class ResourceSharingShareRecipientResponseSingleLoadMatchRequired(TypedDict):
    account_id: str
    recipient_id: str
    share_id: str


class ResourceSharingShareRecipientResponseSingleLoadMatch(ResourceSharingShareRecipientResponseSingleLoadMatchRequired, total=False):
    include_resource: bool


class ResourceSharingShareRecipientResponseSingleCreateDataRequired(TypedDict):
    account_id: str
    share_id: str
    errors: list
    success: bool


class ResourceSharingShareRecipientResponseSingleCreateData(ResourceSharingShareRecipientResponseSingleCreateDataRequired, total=False):
    organization_id: str
    recipient_account_id: str
    result: Any


class ResourceSharingShareRecipientResponseSingleRemoveMatch(TypedDict):
    account_id: str
    recipient_id: str
    share_id: str


class ResourceSharingShareResponseCollection(TypedDict, total=False):
    result: list


class ResourceSharingShareResponseCollectionListMatchRequired(TypedDict):
    account_id: str


class ResourceSharingShareResponseCollectionListMatch(ResourceSharingShareResponseCollectionListMatchRequired, total=False):
    direction: str
    include_recipient_count: bool
    include_resource: bool
    kind: str
    order: str
    page: int
    per_page: int
    resource_type: list
    status: str
    tag: list
    target_type: str


class ResourceSharingShareResponseSingleRequired(TypedDict):
    errors: list
    name: str
    recipients: list
    resources: list
    success: bool


class ResourceSharingShareResponseSingle(ResourceSharingShareResponseSingleRequired, total=False):
    result: Any


class ResourceSharingShareResponseSingleLoadMatchRequired(TypedDict):
    account_id: str
    share_id: str


class ResourceSharingShareResponseSingleLoadMatch(ResourceSharingShareResponseSingleLoadMatchRequired, total=False):
    include_recipient_count: bool
    include_resource: bool


class ResourceSharingShareResponseSingleCreateDataRequired(TypedDict):
    account_id: str
    errors: list
    name: str
    recipients: list
    resources: list
    success: bool


class ResourceSharingShareResponseSingleCreateData(ResourceSharingShareResponseSingleCreateDataRequired, total=False):
    result: Any


class ResourceSharingShareResponseSingleUpdateDataRequired(TypedDict):
    account_id: str
    share_id: str


class ResourceSharingShareResponseSingleUpdateData(ResourceSharingShareResponseSingleUpdateDataRequired, total=False):
    errors: list
    name: str
    recipients: list
    resources: list
    result: Any
    success: bool


class ResourceSharingShareResponseSingleRemoveMatch(TypedDict):
    account_id: str
    share_id: str


class ScimDiscovery(TypedDict):
    pass


class ScimDiscoveryLoadMatchRequired(TypedDict):
    account_id: str


class ScimDiscoveryLoadMatch(ScimDiscoveryLoadMatchRequired, total=False):
    resource_type_id: str
    schema_id: str


class ScimGroup(TypedDict, total=False):
    id: str


class ScimGroupLoadMatchRequired(TypedDict):
    account_id: str


class ScimGroupLoadMatch(ScimGroupLoadMatchRequired, total=False):
    count: int
    filter: str
    start_index: int
    id: str


class ScimGroupCreateDataRequired(TypedDict):
    account_id: str


class ScimGroupCreateData(ScimGroupCreateDataRequired, total=False):
    id: str


class ScimGroupUpdateData(TypedDict):
    account_id: str
    id: str


class ScimGroupRemoveMatch(TypedDict):
    account_id: str
    id: str


class ScimUser(TypedDict, total=False):
    id: str


class ScimUserLoadMatchRequired(TypedDict):
    account_id: str


class ScimUserLoadMatch(ScimUserLoadMatchRequired, total=False):
    count: int
    filter: str
    start_index: int
    id: str


class ScimUserCreateDataRequired(TypedDict):
    account_id: str


class ScimUserCreateData(ScimUserCreateDataRequired, total=False):
    id: str


class ScimUserUpdateData(TypedDict):
    account_id: str
    id: str


class ScimUserRemoveMatch(TypedDict):
    account_id: str
    id: str


class SsoConnector(TypedDict, total=False):
    id: str


class SsoConnectorRemoveMatch(TypedDict):
    account_id: str
    id: str


class TenantRequired(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class Tenant(TenantRequired, total=False):
    id: str


class TenantLoadMatch(TypedDict):
    id: str


class TenantListMatch(TypedDict):
    id: str


class Token(TypedDict, total=False):
    id: str


class TokenRemoveMatchRequired(TypedDict):
    id: str


class TokenRemoveMatch(TokenRemoveMatchRequired, total=False):
    account_id: str


class User(TypedDict):
    pass


class UserListMatch(TypedDict):
    pass


class UserGroup(TypedDict, total=False):
    id: str


class UserGroupRemoveMatch(TypedDict):
    account_id: str
    id: str


class UsersAccountMembership(TypedDict, total=False):
    id: str


class UsersAccountMembershipRemoveMatch(TypedDict):
    id: str


class UsersOrganization(TypedDict, total=False):
    id: str


class UsersOrganizationRemoveMatch(TypedDict):
    id: str
