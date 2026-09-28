export interface AaaAuditLogsV2OrgHistoryResponseCollection {
    errors: any[];
    result: any[];
    result_info: Record<string, any>;
    success: boolean;
}
export interface AaaAuditLogsV2OrgHistoryResponseCollectionListMatch {
    audit_id: string;
    organization_id: string;
    action_time: string;
    before: string;
    cursor?: string;
    direction?: string;
    limit?: number;
    since: string;
}
export interface AaaAuditLogsV2OrgResponseCollection {
    errors?: any[];
    result?: any[];
    result_info?: Record<string, any>;
    success?: boolean;
}
export interface AaaAuditLogsV2OrgResponseCollectionListMatch {
    organization_id: string;
    action_result?: any[];
    action_result_not?: any[];
    action_type?: any[];
    action_type_not?: any[];
    actor_context?: any[];
    actor_context_not?: any[];
    actor_email?: any[];
    actor_email_not?: any[];
    actor_id?: any[];
    actor_id_not?: any[];
    actor_ip_address?: any[];
    actor_ip_address_not?: any[];
    actor_token_id?: any[];
    actor_token_id_not?: any[];
    actor_token_name?: any[];
    actor_token_name_not?: any[];
    actor_type?: any[];
    actor_type_not?: any[];
    before: string;
    cursor?: string;
    direction?: string;
    id?: any[];
    id_not?: any[];
    limit?: number;
    raw_cf_ray_id?: any[];
    raw_cf_ray_id_not?: any[];
    raw_method?: any[];
    raw_method_not?: any[];
    raw_status_code?: any[];
    raw_status_code_not?: any[];
    raw_uri?: any[];
    raw_uri_not?: any[];
    resource_id?: any[];
    resource_id_not?: any[];
    resource_product?: any[];
    resource_product_not?: any[];
    resource_scope?: any[];
    resource_scope_not?: any[];
    resource_type?: any[];
    resource_type_not?: any[];
    since: string;
}
export interface Account {
    id?: string;
}
export interface AccountListMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface AccountResourceGroup {
    errors: any[];
    id?: string;
    messages: any[];
    name: string;
    result: Record<string, any>;
    scope: Record<string, any>;
    success: boolean;
}
export interface AccountResourceGroupLoadMatch {
    account_id: string;
    id: string;
}
export interface AccountResourceGroupListMatch {
    account_id: string;
    id?: string;
    name?: string;
}
export interface AccountResourceGroupCreateData {
    account_id: string;
    errors: any[];
    id?: string;
    messages: any[];
    name: string;
    result: Record<string, any>;
    scope: Record<string, any>;
    success: boolean;
}
export interface AccountResourceGroupUpdateData {
    account_id: string;
    id: string;
    errors?: any[];
    messages?: any[];
    name?: string;
    result?: Record<string, any>;
    scope?: Record<string, any>;
    success?: boolean;
}
export interface AccountUserGroup {
    id?: string;
    name: string;
    policies?: any[];
    result: Record<string, any>;
}
export interface AccountUserGroupLoadMatch {
    account_id: string;
    id: string;
}
export interface AccountUserGroupListMatch {
    account_id: string;
    direction?: string;
    fuzzy_name?: string;
    id?: string;
    name?: string;
    page?: number;
    per_page?: number;
}
export interface AccountUserGroupCreateData {
    account_id: string;
    id?: string;
    name: string;
    policies?: any[];
    result: Record<string, any>;
}
export interface AccountUserGroupUpdateData {
    account_id: string;
    id: string;
    name?: string;
    policies?: any[];
    result?: Record<string, any>;
}
export interface AccountUserGroupMember {
    id?: string;
    result: Record<string, any>;
}
export interface AccountUserGroupMemberLoadMatch {
    account_id: string;
    id: string;
    user_group_id: string;
}
export interface AccountUserGroupMemberListMatch {
    account_id: string;
    user_group_id: string;
    direction?: string;
    fuzzy_email?: string;
    page?: number;
    per_page?: number;
}
export interface AccountUserGroupMemberCreateData {
    account_id: string;
    user_group_id: string;
    id?: string;
    result: Record<string, any>;
}
export interface AccountUserGroupMemberUpdateData {
    account_id: string;
    user_group_id: string;
    id?: string;
    result?: Record<string, any>;
}
export interface AccountUserGroupMemberRemoveMatch {
    account_id: string;
    id: string;
    user_group_id: string;
}
export interface BeginVerification {
    errors: any[];
    messages: any[];
    success: boolean;
}
export interface BeginVerificationCreateData {
    account_id: string;
    sso_connector_id: string;
    errors: any[];
    messages: any[];
    success: boolean;
}
export interface BillSubsApiClientSecretResponseSingle {
    result?: Record<string, any>;
}
export interface BillSubsApiClientSecretResponseSingleCreateData {
    account_id: string;
    result?: Record<string, any>;
}
export interface BillableUsageApiV2Usage {
    errors: any[];
    messages: any[];
    result: any[];
    success: boolean;
}
export interface BillableUsageApiV2UsageListMatch {
    organization_id: string;
    from?: string;
    to?: string;
}
export interface DnsCustomNameserversEmptyResponse3 {
}
export interface DnsCustomNameserversEmptyResponse3RemoveMatch {
    custom_ns_id: string;
    tenant_tag: string;
}
export interface DnsCustomNameserversTcnsResponseCollection {
    result?: any[];
}
export interface DnsCustomNameserversTcnsResponseCollectionListMatch {
    tenant_tag: string;
}
export interface DnsCustomNameserversTcnsResponseSingle {
    ns_name: string;
    ns_set?: number;
}
export interface DnsCustomNameserversTcnsResponseSingleCreateData {
    tenant_tag: string;
    ns_name: string;
    ns_set?: number;
}
export interface IamApiResponseSingleId {
}
export interface IamApiResponseSingleIdRemoveMatch {
    account_id: string;
    oauth_client_id: string;
}
export interface IamCollectionMemberResponseWithPolicy {
    result?: any[];
}
export interface IamCollectionMemberResponseWithPolicyListMatch {
    account_id: string;
    direction?: string;
    order?: any;
    page?: number;
    per_page?: number;
    status?: string;
}
export interface IamCollectionOauthClient {
    result?: any[];
}
export interface IamCollectionOauthClientListMatch {
    account_id: string;
}
export interface IamCollectionOauthScope {
    result?: any[];
}
export interface IamCollectionOauthScopeListMatch {
    result?: any[];
}
export interface IamCollectionOrganization {
    result?: any[];
}
export interface IamCollectionOrganizationListMatch {
    direction?: string;
    match?: string;
    name?: string;
    order?: string;
    page?: number;
    per_page?: number;
    status?: string;
}
export interface IamCollectionPermissionGroup {
    result?: any[];
}
export interface IamCollectionPermissionGroupListMatch {
    account_id: string;
    id?: string;
    label?: string;
    name?: string;
    page?: number;
    per_page?: number;
}
export interface IamCollectionRole {
    result?: any[];
}
export interface IamCollectionRoleListMatch {
    account_id: string;
    page?: number;
    per_page?: number;
}
export interface IamCollectionToken {
    result?: any[];
}
export interface IamCollectionTokenListMatch {
    direction?: string;
    include_expired?: boolean;
    page?: number;
    per_page?: number;
}
export interface IamOauthClientRotateSecret {
    result?: Record<string, any>;
}
export interface IamOauthClientRotateSecretCreateData {
    account_id: string;
    oauth_client_id: string;
    result?: Record<string, any>;
}
export interface IamPermissionsGroupResponseCollection {
    result?: any[];
}
export interface IamPermissionsGroupResponseCollectionListMatch {
    name?: string;
    scope?: string;
}
export interface IamResponseSingleValue {
    result?: string;
}
export interface IamResponseSingleValueUpdateData {
    account_id?: string;
    token_id: string;
    result?: string;
}
export interface IamSchemasCollectionInvite {
    result?: any[];
}
export interface IamSchemasCollectionInviteListMatch {
    result?: any[];
}
export interface IamSingleInvite {
    id?: string;
    result: Record<string, any>;
    status: any;
}
export interface IamSingleInviteLoadMatch {
    id: string;
}
export interface IamSingleInviteUpdateData {
    id: string;
    result?: Record<string, any>;
    status?: any;
}
export interface IamSingleMemberResponseWithPolicy {
    result?: Record<string, any>;
}
export interface IamSingleMemberResponseWithPolicyLoadMatch {
    account_id: string;
    member_id: string;
}
export interface IamSingleMemberResponseWithPolicyCreateData {
    account_id: string;
    result?: Record<string, any>;
}
export interface IamSingleMemberResponseWithPolicyUpdateData {
    account_id: string;
    member_id: string;
    result?: Record<string, any>;
}
export interface IamSingleMembershipResponseWithPolicy {
    result?: Record<string, any>;
    status: any;
}
export interface IamSingleMembershipResponseWithPolicyLoadMatch {
    membership_id: string;
}
export interface IamSingleMembershipResponseWithPolicyUpdateData {
    membership_id: string;
    result?: Record<string, any>;
    status?: any;
}
export interface IamSingleOauthClient {
    id?: string;
    result?: any;
}
export interface IamSingleOauthClientLoadMatch {
    account_id: string;
    id: string;
}
export interface IamSingleOauthClientUpdateData {
    account_id: string;
    id: string;
    result?: any;
}
export interface IamSingleOauthClientCreate {
}
export interface IamSingleOauthClientCreateCreateData {
    account_id: string;
}
export interface IamSingleOrganization {
    id?: string;
    result?: Record<string, any>;
}
export interface IamSingleOrganizationLoadMatch {
    id: string;
}
export interface IamSinglePermissionGroup {
    id?: string;
    result: Record<string, any>;
}
export interface IamSinglePermissionGroupLoadMatch {
    account_id: string;
    id: string;
}
export interface IamSingleRole {
    id?: string;
    result: Record<string, any>;
}
export interface IamSingleRoleLoadMatch {
    account_id: string;
    id: string;
}
export interface IamSingleToken {
    id?: string;
    result?: Record<string, any>;
}
export interface IamSingleTokenLoadMatch {
    account_id?: string;
    id: string;
}
export interface IamSingleTokenUpdateData {
    account_id?: string;
    id: string;
    result?: Record<string, any>;
}
export interface IamSingleTokenCreate {
    condition?: Record<string, any>;
    expires_on?: string;
    name: string;
    not_before?: string;
    policies: any[];
}
export interface IamSingleTokenCreateCreateData {
    condition?: Record<string, any>;
    expires_on?: string;
    name: string;
    not_before?: string;
    policies: any[];
}
export interface IamSsoConnector {
    begin_verification?: boolean;
    email_domain: string;
    enabled?: boolean;
    id?: string;
    result?: Record<string, any>;
    use_fedramp_language?: boolean;
}
export interface IamSsoConnectorLoadMatch {
    account_id: string;
    id: string;
}
export interface IamSsoConnectorCreateData {
    account_id: string;
    begin_verification?: boolean;
    email_domain: string;
    enabled?: boolean;
    id?: string;
    result?: Record<string, any>;
    use_fedramp_language?: boolean;
}
export interface IamSsoConnectorUpdateData {
    account_id: string;
    id: string;
    begin_verification?: boolean;
    email_domain?: string;
    enabled?: boolean;
    result?: Record<string, any>;
    use_fedramp_language?: boolean;
}
export interface IamSsoConnectorCollection {
    result?: any[];
}
export interface IamSsoConnectorCollectionListMatch {
    account_id: string;
}
export interface IamTokenVerifyResponseSingleSegment {
    result: any;
}
export interface IamTokenVerifyResponseSingleSegmentLoadMatch {
    result?: any;
}
export interface Member {
    id?: string;
}
export interface MemberRemoveMatch {
    account_id: string;
    id: string;
}
export interface OauthClient {
    id?: string;
}
export interface OauthClientRemoveMatch {
    account_id: string;
    id: string;
}
export interface Organization {
    create_time: string;
    errors: any[];
    id: string;
    messages: any[];
    meta: Record<string, any>;
    name: string;
    parent: Record<string, any>;
    profile: Record<string, any>;
    result: Record<string, any>;
    result_info: Record<string, any>;
    status: string;
    success: boolean;
}
export interface OrganizationLoadMatch {
    id: string;
}
export interface OrganizationListMatch {
    containing_account?: string;
    containing_organization?: string;
    containing_user?: string;
    id?: any[];
    name?: string;
    name_contain?: string;
    name_ends_with?: string;
    name_starts_with?: string;
    page_size?: number;
    page_token?: string;
    parent_id?: string;
    $action?: string;
    [action: string]: any;
}
export interface OrganizationCreateData {
    create_time: string;
    errors: any[];
    id: string;
    messages: any[];
    meta: Record<string, any>;
    name: string;
    parent: Record<string, any>;
    profile: Record<string, any>;
    result: Record<string, any>;
    result_info: Record<string, any>;
    status: string;
    success: boolean;
    $action?: string;
    [action: string]: any;
}
export interface OrganizationUpdateData {
    id: string;
    member_code?: string;
    create_time?: string;
    errors?: any[];
    messages?: any[];
    meta?: Record<string, any>;
    name?: string;
    parent?: Record<string, any>;
    profile?: Record<string, any>;
    result?: Record<string, any>;
    result_info?: Record<string, any>;
    status?: string;
    success?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface OrganizationRemoveMatch {
    id: string;
}
export interface OrganizationMember {
    errors: any[];
    id?: string;
    member: Record<string, any>;
    messages: any[];
    result: Record<string, any>;
    result_info: Record<string, any>;
    success: boolean;
}
export interface OrganizationMemberLoadMatch {
    id: string;
    organization_id: string;
}
export interface OrganizationMemberListMatch {
    id: string;
    page_size?: number;
    page_token?: string;
    status?: any[];
    user_email?: string;
    user_email_contain?: string;
    user_email_ends_with?: string;
    user_email_starts_with?: string;
}
export interface OrganizationMemberCreateData {
    id: string;
    errors: any[];
    member: Record<string, any>;
    messages: any[];
    result: Record<string, any>;
    result_info: Record<string, any>;
    success: boolean;
}
export interface OrganizationMemberRemoveMatch {
    id: string;
    organization_id: string;
}
export interface OrganizationsApiProfile {
    code: number;
    message: string;
}
export interface OrganizationsApiProfileListMatch {
    organization_id: string;
}
export interface Resource {
    errors: any[];
    id?: string;
    meta: Record<string, any>;
    resource_account_id: string;
    resource_id: string;
    resource_type: string;
    result?: any;
    success: boolean;
}
export interface ResourceLoadMatch {
    account_id: string;
    id: string;
    share_id: string;
}
export interface ResourceListMatch {
    account_id: string;
    share_id: string;
    page?: number;
    per_page?: number;
    resource_type?: string;
    status?: string;
}
export interface ResourceCreateData {
    account_id: string;
    share_id: string;
    errors: any[];
    id?: string;
    meta: Record<string, any>;
    resource_account_id: string;
    resource_id: string;
    resource_type: string;
    result?: any;
    success: boolean;
}
export interface ResourceUpdateData {
    account_id: string;
    id: string;
    share_id: string;
    errors?: any[];
    meta?: Record<string, any>;
    resource_account_id?: string;
    resource_id?: string;
    resource_type?: string;
    result?: any;
    success?: boolean;
}
export interface ResourceRemoveMatch {
    account_id: string;
    id: string;
    share_id: string;
}
export interface ResourceGroup {
    id?: string;
}
export interface ResourceGroupRemoveMatch {
    account_id: string;
    id: string;
}
export interface ResourceSharing {
}
export interface ResourceSharingUpdateData {
    account_id: string;
    share_id: string;
}
export interface ResourceSharingShareExcludedRecipientResponseCollection {
    result?: any[];
}
export interface ResourceSharingShareExcludedRecipientResponseCollectionListMatch {
    account_id: string;
    share_id: string;
    page?: number;
    per_page?: number;
}
export interface ResourceSharingShareExcludedRecipientResponseSingle {
    account_id: string;
    errors: any[];
    result?: any;
    success: boolean;
}
export interface ResourceSharingShareExcludedRecipientResponseSingleLoadMatch {
    account_id: string;
    excluded_recipient_id: string;
    share_id: string;
}
export interface ResourceSharingShareExcludedRecipientResponseSingleCreateData {
    account_id: string;
    share_id: string;
    errors: any[];
    result?: any;
    success: boolean;
}
export interface ResourceSharingShareExcludedRecipientResponseSingleRemoveMatch {
    account_id: string;
    excluded_recipient_id: string;
    share_id: string;
}
export interface ResourceSharingShareRecipientResponseCollection {
    result?: any[];
}
export interface ResourceSharingShareRecipientResponseCollectionListMatch {
    account_id: string;
    share_id: string;
    include_resource?: boolean;
    page?: number;
    per_page?: number;
}
export interface ResourceSharingShareRecipientResponseSingle {
    account_id?: string;
    errors: any[];
    organization_id?: string;
    recipient_account_id?: string;
    result?: any;
    success: boolean;
}
export interface ResourceSharingShareRecipientResponseSingleLoadMatch {
    account_id: string;
    recipient_id: string;
    share_id: string;
    include_resource?: boolean;
}
export interface ResourceSharingShareRecipientResponseSingleCreateData {
    account_id: string;
    share_id: string;
    errors: any[];
    organization_id?: string;
    recipient_account_id?: string;
    result?: any;
    success: boolean;
}
export interface ResourceSharingShareRecipientResponseSingleRemoveMatch {
    account_id: string;
    recipient_id: string;
    share_id: string;
}
export interface ResourceSharingShareResponseCollection {
    result?: any[];
}
export interface ResourceSharingShareResponseCollectionListMatch {
    account_id: string;
    direction?: string;
    include_recipient_count?: boolean;
    include_resource?: boolean;
    kind?: string;
    order?: string;
    page?: number;
    per_page?: number;
    resource_type?: any[];
    status?: string;
    tag?: any[];
    target_type?: string;
}
export interface ResourceSharingShareResponseSingle {
    errors: any[];
    name: string;
    recipients: any[];
    resources: any[];
    result?: any;
    success: boolean;
}
export interface ResourceSharingShareResponseSingleLoadMatch {
    account_id: string;
    share_id: string;
    include_recipient_count?: boolean;
    include_resource?: boolean;
}
export interface ResourceSharingShareResponseSingleCreateData {
    account_id: string;
    errors: any[];
    name: string;
    recipients: any[];
    resources: any[];
    result?: any;
    success: boolean;
}
export interface ResourceSharingShareResponseSingleUpdateData {
    account_id: string;
    share_id: string;
    errors?: any[];
    name?: string;
    recipients?: any[];
    resources?: any[];
    result?: any;
    success?: boolean;
}
export interface ResourceSharingShareResponseSingleRemoveMatch {
    account_id: string;
    share_id: string;
}
export interface ScimDiscovery {
}
export interface ScimDiscoveryLoadMatch {
    account_id: string;
    resource_type_id?: string;
    schema_id?: string;
}
export interface ScimGroup {
    id?: string;
}
export interface ScimGroupLoadMatch {
    account_id: string;
    count?: number;
    filter?: string;
    start_index?: number;
    id?: string;
}
export interface ScimGroupCreateData {
    account_id: string;
    id?: string;
}
export interface ScimGroupUpdateData {
    account_id: string;
    id: string;
}
export interface ScimGroupRemoveMatch {
    account_id: string;
    id: string;
}
export interface ScimUser {
    id?: string;
}
export interface ScimUserLoadMatch {
    account_id: string;
    count?: number;
    filter?: string;
    start_index?: number;
    id?: string;
}
export interface ScimUserCreateData {
    account_id: string;
    id?: string;
}
export interface ScimUserUpdateData {
    account_id: string;
    id: string;
}
export interface ScimUserRemoveMatch {
    account_id: string;
    id: string;
}
export interface SsoConnector {
    id?: string;
}
export interface SsoConnectorRemoveMatch {
    account_id: string;
    id: string;
}
export interface Tenant {
    errors: any[];
    id?: string;
    messages: any[];
    result: Record<string, any>;
    success: boolean;
}
export interface TenantLoadMatch {
    id: string;
}
export interface TenantListMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface Token {
    id?: string;
}
export interface TokenRemoveMatch {
    account_id?: string;
    id: string;
}
export interface User {
}
export interface UserListMatch {
    $action?: string;
    [action: string]: any;
}
export interface UserGroup {
    id?: string;
}
export interface UserGroupRemoveMatch {
    account_id: string;
    id: string;
}
export interface UsersAccountMembership {
    id?: string;
}
export interface UsersAccountMembershipRemoveMatch {
    id: string;
}
export interface UsersOrganization {
    id?: string;
}
export interface UsersOrganizationRemoveMatch {
    id: string;
}
