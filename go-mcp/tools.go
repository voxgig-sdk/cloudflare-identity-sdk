package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/cloudflare-identity-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"aaa_audit_logs_v2_org_history_response_collection | aaa_audit_logs_v2_org_response_collection | account | account_resource_group | account_user_group | account_user_group_member | begin_verification | bill_subs_api_client_secret_response_single | billable_usage_api_v2_usage | dns_custom_nameservers_empty_response_3 | dns_custom_nameservers_tcns_response_collection | dns_custom_nameservers_tcns_response_single | iam_api_response_single_id | iam_collection_member_response_with_policy | iam_collection_oauth_client | iam_collection_oauth_scope | iam_collection_organization | iam_collection_permission_group | iam_collection_role | iam_collection_token | iam_oauth_client_rotate_secret | iam_permissions_group_response_collection | iam_response_single_value | iam_schemas_collection_invite | iam_single_invite | iam_single_member_response_with_policy | iam_single_membership_response_with_policy | iam_single_oauth_client | iam_single_oauth_client_create | iam_single_organization | iam_single_permission_group | iam_single_role | iam_single_token | iam_single_token_create | iam_sso_connector | iam_sso_connector_collection | iam_token_verify_response_single_segment | member | oauth_client | organization | organization_member | organizations_api_profile | resource | resource_group | resource_sharing | resource_sharing_share_excluded_recipient_response_collection | resource_sharing_share_excluded_recipient_response_single | resource_sharing_share_recipient_response_collection | resource_sharing_share_recipient_response_single | resource_sharing_share_response_collection | resource_sharing_share_response_single | scim_discovery | scim_group | scim_user | sso_connector | tenant | token | user | user_group | users_account_membership | users_organization"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.CloudflareIdentitySDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-identity_list",
		Description: "List records from CloudflareIdentity. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-identity_load",
		Description: "Load a single record from CloudflareIdentity. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.CloudflareIdentitySDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.CloudflareIdentitySDK, name string) (sdk.CloudflareIdentityEntity, error) {
	switch strings.ToLower(name) {
	case "aaa_audit_logs_v2_org_history_response_collection":
		return client.AaaAuditLogsV2OrgHistoryResponseCollection(nil), nil
	case "aaa_audit_logs_v2_org_response_collection":
		return client.AaaAuditLogsV2OrgResponseCollection(nil), nil
	case "account":
		return client.Account(nil), nil
	case "account_resource_group":
		return client.AccountResourceGroup(nil), nil
	case "account_user_group":
		return client.AccountUserGroup(nil), nil
	case "account_user_group_member":
		return client.AccountUserGroupMember(nil), nil
	case "begin_verification":
		return client.BeginVerification(nil), nil
	case "bill_subs_api_client_secret_response_single":
		return client.BillSubsApiClientSecretResponseSingle(nil), nil
	case "billable_usage_api_v2_usage":
		return client.BillableUsageApiV2Usage(nil), nil
	case "dns_custom_nameservers_empty_response_3":
		return client.DnsCustomNameserversEmptyResponse3(nil), nil
	case "dns_custom_nameservers_tcns_response_collection":
		return client.DnsCustomNameserversTcnsResponseCollection(nil), nil
	case "dns_custom_nameservers_tcns_response_single":
		return client.DnsCustomNameserversTcnsResponseSingle(nil), nil
	case "iam_api_response_single_id":
		return client.IamApiResponseSingleId(nil), nil
	case "iam_collection_member_response_with_policy":
		return client.IamCollectionMemberResponseWithPolicy(nil), nil
	case "iam_collection_oauth_client":
		return client.IamCollectionOauthClient(nil), nil
	case "iam_collection_oauth_scope":
		return client.IamCollectionOauthScope(nil), nil
	case "iam_collection_organization":
		return client.IamCollectionOrganization(nil), nil
	case "iam_collection_permission_group":
		return client.IamCollectionPermissionGroup(nil), nil
	case "iam_collection_role":
		return client.IamCollectionRole(nil), nil
	case "iam_collection_token":
		return client.IamCollectionToken(nil), nil
	case "iam_oauth_client_rotate_secret":
		return client.IamOauthClientRotateSecret(nil), nil
	case "iam_permissions_group_response_collection":
		return client.IamPermissionsGroupResponseCollection(nil), nil
	case "iam_response_single_value":
		return client.IamResponseSingleValue(nil), nil
	case "iam_schemas_collection_invite":
		return client.IamSchemasCollectionInvite(nil), nil
	case "iam_single_invite":
		return client.IamSingleInvite(nil), nil
	case "iam_single_member_response_with_policy":
		return client.IamSingleMemberResponseWithPolicy(nil), nil
	case "iam_single_membership_response_with_policy":
		return client.IamSingleMembershipResponseWithPolicy(nil), nil
	case "iam_single_oauth_client":
		return client.IamSingleOauthClient(nil), nil
	case "iam_single_oauth_client_create":
		return client.IamSingleOauthClientCreate(nil), nil
	case "iam_single_organization":
		return client.IamSingleOrganization(nil), nil
	case "iam_single_permission_group":
		return client.IamSinglePermissionGroup(nil), nil
	case "iam_single_role":
		return client.IamSingleRole(nil), nil
	case "iam_single_token":
		return client.IamSingleToken(nil), nil
	case "iam_single_token_create":
		return client.IamSingleTokenCreate(nil), nil
	case "iam_sso_connector":
		return client.IamSsoConnector(nil), nil
	case "iam_sso_connector_collection":
		return client.IamSsoConnectorCollection(nil), nil
	case "iam_token_verify_response_single_segment":
		return client.IamTokenVerifyResponseSingleSegment(nil), nil
	case "member":
		return client.Member(nil), nil
	case "oauth_client":
		return client.OauthClient(nil), nil
	case "organization":
		return client.Organization(nil), nil
	case "organization_member":
		return client.OrganizationMember(nil), nil
	case "organizations_api_profile":
		return client.OrganizationsApiProfile(nil), nil
	case "resource":
		return client.Resource(nil), nil
	case "resource_group":
		return client.ResourceGroup(nil), nil
	case "resource_sharing":
		return client.ResourceSharing(nil), nil
	case "resource_sharing_share_excluded_recipient_response_collection":
		return client.ResourceSharingShareExcludedRecipientResponseCollection(nil), nil
	case "resource_sharing_share_excluded_recipient_response_single":
		return client.ResourceSharingShareExcludedRecipientResponseSingle(nil), nil
	case "resource_sharing_share_recipient_response_collection":
		return client.ResourceSharingShareRecipientResponseCollection(nil), nil
	case "resource_sharing_share_recipient_response_single":
		return client.ResourceSharingShareRecipientResponseSingle(nil), nil
	case "resource_sharing_share_response_collection":
		return client.ResourceSharingShareResponseCollection(nil), nil
	case "resource_sharing_share_response_single":
		return client.ResourceSharingShareResponseSingle(nil), nil
	case "scim_discovery":
		return client.ScimDiscovery(nil), nil
	case "scim_group":
		return client.ScimGroup(nil), nil
	case "scim_user":
		return client.ScimUser(nil), nil
	case "sso_connector":
		return client.SsoConnector(nil), nil
	case "tenant":
		return client.Tenant(nil), nil
	case "token":
		return client.Token(nil), nil
	case "user":
		return client.User(nil), nil
	case "user_group":
		return client.UserGroup(nil), nil
	case "users_account_membership":
		return client.UsersAccountMembership(nil), nil
	case "users_organization":
		return client.UsersOrganization(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
