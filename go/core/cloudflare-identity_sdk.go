package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/cloudflare-identity-sdk/go/utility/struct"
)

type CloudflareIdentitySDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewCloudflareIdentitySDK(options map[string]any) *CloudflareIdentitySDK {
	sdk := &CloudflareIdentitySDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *CloudflareIdentitySDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *CloudflareIdentitySDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *CloudflareIdentitySDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *CloudflareIdentitySDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *CloudflareIdentitySDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *CloudflareIdentitySDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *CloudflareIdentitySDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("CloudflareIdentitySDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *CloudflareIdentitySDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *CloudflareIdentitySDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("CloudflareIdentitySDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// AaaAuditLogsV2OrgHistoryResponseCollection returns a AaaAuditLogsV2OrgHistoryResponseCollection entity bound to this client.
// Idiomatic usage: client.AaaAuditLogsV2OrgHistoryResponseCollection(nil).List(nil, nil) or
// client.AaaAuditLogsV2OrgHistoryResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) AaaAuditLogsV2OrgHistoryResponseCollection(data map[string]any) CloudflareIdentityEntity {
	return NewAaaAuditLogsV2OrgHistoryResponseCollectionEntityFunc(sdk, data)
}


// AaaAuditLogsV2OrgResponseCollection returns a AaaAuditLogsV2OrgResponseCollection entity bound to this client.
// Idiomatic usage: client.AaaAuditLogsV2OrgResponseCollection(nil).List(nil, nil) or
// client.AaaAuditLogsV2OrgResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) AaaAuditLogsV2OrgResponseCollection(data map[string]any) CloudflareIdentityEntity {
	return NewAaaAuditLogsV2OrgResponseCollectionEntityFunc(sdk, data)
}


// Account returns a Account entity bound to this client.
// Idiomatic usage: client.Account(nil).List(nil, nil) or
// client.Account(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) Account(data map[string]any) CloudflareIdentityEntity {
	return NewAccountEntityFunc(sdk, data)
}


// AccountResourceGroup returns a AccountResourceGroup entity bound to this client.
// Idiomatic usage: client.AccountResourceGroup(nil).List(nil, nil) or
// client.AccountResourceGroup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) AccountResourceGroup(data map[string]any) CloudflareIdentityEntity {
	return NewAccountResourceGroupEntityFunc(sdk, data)
}


// AccountUserGroup returns a AccountUserGroup entity bound to this client.
// Idiomatic usage: client.AccountUserGroup(nil).List(nil, nil) or
// client.AccountUserGroup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) AccountUserGroup(data map[string]any) CloudflareIdentityEntity {
	return NewAccountUserGroupEntityFunc(sdk, data)
}


// AccountUserGroupMember returns a AccountUserGroupMember entity bound to this client.
// Idiomatic usage: client.AccountUserGroupMember(nil).List(nil, nil) or
// client.AccountUserGroupMember(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) AccountUserGroupMember(data map[string]any) CloudflareIdentityEntity {
	return NewAccountUserGroupMemberEntityFunc(sdk, data)
}


// BeginVerification returns a BeginVerification entity bound to this client.
// Idiomatic usage: client.BeginVerification(nil).List(nil, nil) or
// client.BeginVerification(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) BeginVerification(data map[string]any) CloudflareIdentityEntity {
	return NewBeginVerificationEntityFunc(sdk, data)
}


// BillSubsApiClientSecretResponseSingle returns a BillSubsApiClientSecretResponseSingle entity bound to this client.
// Idiomatic usage: client.BillSubsApiClientSecretResponseSingle(nil).List(nil, nil) or
// client.BillSubsApiClientSecretResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) BillSubsApiClientSecretResponseSingle(data map[string]any) CloudflareIdentityEntity {
	return NewBillSubsApiClientSecretResponseSingleEntityFunc(sdk, data)
}


// BillableUsageApiV2Usage returns a BillableUsageApiV2Usage entity bound to this client.
// Idiomatic usage: client.BillableUsageApiV2Usage(nil).List(nil, nil) or
// client.BillableUsageApiV2Usage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) BillableUsageApiV2Usage(data map[string]any) CloudflareIdentityEntity {
	return NewBillableUsageApiV2UsageEntityFunc(sdk, data)
}


// DnsCustomNameserversEmptyResponse3 returns a DnsCustomNameserversEmptyResponse3 entity bound to this client.
// Idiomatic usage: client.DnsCustomNameserversEmptyResponse3(nil).List(nil, nil) or
// client.DnsCustomNameserversEmptyResponse3(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) DnsCustomNameserversEmptyResponse3(data map[string]any) CloudflareIdentityEntity {
	return NewDnsCustomNameserversEmptyResponse3EntityFunc(sdk, data)
}


// DnsCustomNameserversTcnsResponseCollection returns a DnsCustomNameserversTcnsResponseCollection entity bound to this client.
// Idiomatic usage: client.DnsCustomNameserversTcnsResponseCollection(nil).List(nil, nil) or
// client.DnsCustomNameserversTcnsResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) DnsCustomNameserversTcnsResponseCollection(data map[string]any) CloudflareIdentityEntity {
	return NewDnsCustomNameserversTcnsResponseCollectionEntityFunc(sdk, data)
}


// DnsCustomNameserversTcnsResponseSingle returns a DnsCustomNameserversTcnsResponseSingle entity bound to this client.
// Idiomatic usage: client.DnsCustomNameserversTcnsResponseSingle(nil).List(nil, nil) or
// client.DnsCustomNameserversTcnsResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) DnsCustomNameserversTcnsResponseSingle(data map[string]any) CloudflareIdentityEntity {
	return NewDnsCustomNameserversTcnsResponseSingleEntityFunc(sdk, data)
}


// IamApiResponseSingleId returns a IamApiResponseSingleId entity bound to this client.
// Idiomatic usage: client.IamApiResponseSingleId(nil).List(nil, nil) or
// client.IamApiResponseSingleId(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamApiResponseSingleId(data map[string]any) CloudflareIdentityEntity {
	return NewIamApiResponseSingleIdEntityFunc(sdk, data)
}


// IamCollectionMemberResponseWithPolicy returns a IamCollectionMemberResponseWithPolicy entity bound to this client.
// Idiomatic usage: client.IamCollectionMemberResponseWithPolicy(nil).List(nil, nil) or
// client.IamCollectionMemberResponseWithPolicy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamCollectionMemberResponseWithPolicy(data map[string]any) CloudflareIdentityEntity {
	return NewIamCollectionMemberResponseWithPolicyEntityFunc(sdk, data)
}


// IamCollectionOauthClient returns a IamCollectionOauthClient entity bound to this client.
// Idiomatic usage: client.IamCollectionOauthClient(nil).List(nil, nil) or
// client.IamCollectionOauthClient(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamCollectionOauthClient(data map[string]any) CloudflareIdentityEntity {
	return NewIamCollectionOauthClientEntityFunc(sdk, data)
}


// IamCollectionOauthScope returns a IamCollectionOauthScope entity bound to this client.
// Idiomatic usage: client.IamCollectionOauthScope(nil).List(nil, nil) or
// client.IamCollectionOauthScope(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamCollectionOauthScope(data map[string]any) CloudflareIdentityEntity {
	return NewIamCollectionOauthScopeEntityFunc(sdk, data)
}


// IamCollectionOrganization returns a IamCollectionOrganization entity bound to this client.
// Idiomatic usage: client.IamCollectionOrganization(nil).List(nil, nil) or
// client.IamCollectionOrganization(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamCollectionOrganization(data map[string]any) CloudflareIdentityEntity {
	return NewIamCollectionOrganizationEntityFunc(sdk, data)
}


// IamCollectionPermissionGroup returns a IamCollectionPermissionGroup entity bound to this client.
// Idiomatic usage: client.IamCollectionPermissionGroup(nil).List(nil, nil) or
// client.IamCollectionPermissionGroup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamCollectionPermissionGroup(data map[string]any) CloudflareIdentityEntity {
	return NewIamCollectionPermissionGroupEntityFunc(sdk, data)
}


// IamCollectionRole returns a IamCollectionRole entity bound to this client.
// Idiomatic usage: client.IamCollectionRole(nil).List(nil, nil) or
// client.IamCollectionRole(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamCollectionRole(data map[string]any) CloudflareIdentityEntity {
	return NewIamCollectionRoleEntityFunc(sdk, data)
}


// IamCollectionToken returns a IamCollectionToken entity bound to this client.
// Idiomatic usage: client.IamCollectionToken(nil).List(nil, nil) or
// client.IamCollectionToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamCollectionToken(data map[string]any) CloudflareIdentityEntity {
	return NewIamCollectionTokenEntityFunc(sdk, data)
}


// IamOauthClientRotateSecret returns a IamOauthClientRotateSecret entity bound to this client.
// Idiomatic usage: client.IamOauthClientRotateSecret(nil).List(nil, nil) or
// client.IamOauthClientRotateSecret(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamOauthClientRotateSecret(data map[string]any) CloudflareIdentityEntity {
	return NewIamOauthClientRotateSecretEntityFunc(sdk, data)
}


// IamPermissionsGroupResponseCollection returns a IamPermissionsGroupResponseCollection entity bound to this client.
// Idiomatic usage: client.IamPermissionsGroupResponseCollection(nil).List(nil, nil) or
// client.IamPermissionsGroupResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamPermissionsGroupResponseCollection(data map[string]any) CloudflareIdentityEntity {
	return NewIamPermissionsGroupResponseCollectionEntityFunc(sdk, data)
}


// IamResponseSingleValue returns a IamResponseSingleValue entity bound to this client.
// Idiomatic usage: client.IamResponseSingleValue(nil).List(nil, nil) or
// client.IamResponseSingleValue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamResponseSingleValue(data map[string]any) CloudflareIdentityEntity {
	return NewIamResponseSingleValueEntityFunc(sdk, data)
}


// IamSchemasCollectionInvite returns a IamSchemasCollectionInvite entity bound to this client.
// Idiomatic usage: client.IamSchemasCollectionInvite(nil).List(nil, nil) or
// client.IamSchemasCollectionInvite(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamSchemasCollectionInvite(data map[string]any) CloudflareIdentityEntity {
	return NewIamSchemasCollectionInviteEntityFunc(sdk, data)
}


// IamSingleInvite returns a IamSingleInvite entity bound to this client.
// Idiomatic usage: client.IamSingleInvite(nil).List(nil, nil) or
// client.IamSingleInvite(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamSingleInvite(data map[string]any) CloudflareIdentityEntity {
	return NewIamSingleInviteEntityFunc(sdk, data)
}


// IamSingleMemberResponseWithPolicy returns a IamSingleMemberResponseWithPolicy entity bound to this client.
// Idiomatic usage: client.IamSingleMemberResponseWithPolicy(nil).List(nil, nil) or
// client.IamSingleMemberResponseWithPolicy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamSingleMemberResponseWithPolicy(data map[string]any) CloudflareIdentityEntity {
	return NewIamSingleMemberResponseWithPolicyEntityFunc(sdk, data)
}


// IamSingleMembershipResponseWithPolicy returns a IamSingleMembershipResponseWithPolicy entity bound to this client.
// Idiomatic usage: client.IamSingleMembershipResponseWithPolicy(nil).List(nil, nil) or
// client.IamSingleMembershipResponseWithPolicy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamSingleMembershipResponseWithPolicy(data map[string]any) CloudflareIdentityEntity {
	return NewIamSingleMembershipResponseWithPolicyEntityFunc(sdk, data)
}


// IamSingleOauthClient returns a IamSingleOauthClient entity bound to this client.
// Idiomatic usage: client.IamSingleOauthClient(nil).List(nil, nil) or
// client.IamSingleOauthClient(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamSingleOauthClient(data map[string]any) CloudflareIdentityEntity {
	return NewIamSingleOauthClientEntityFunc(sdk, data)
}


// IamSingleOauthClientCreate returns a IamSingleOauthClientCreate entity bound to this client.
// Idiomatic usage: client.IamSingleOauthClientCreate(nil).List(nil, nil) or
// client.IamSingleOauthClientCreate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamSingleOauthClientCreate(data map[string]any) CloudflareIdentityEntity {
	return NewIamSingleOauthClientCreateEntityFunc(sdk, data)
}


// IamSingleOrganization returns a IamSingleOrganization entity bound to this client.
// Idiomatic usage: client.IamSingleOrganization(nil).List(nil, nil) or
// client.IamSingleOrganization(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamSingleOrganization(data map[string]any) CloudflareIdentityEntity {
	return NewIamSingleOrganizationEntityFunc(sdk, data)
}


// IamSinglePermissionGroup returns a IamSinglePermissionGroup entity bound to this client.
// Idiomatic usage: client.IamSinglePermissionGroup(nil).List(nil, nil) or
// client.IamSinglePermissionGroup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamSinglePermissionGroup(data map[string]any) CloudflareIdentityEntity {
	return NewIamSinglePermissionGroupEntityFunc(sdk, data)
}


// IamSingleRole returns a IamSingleRole entity bound to this client.
// Idiomatic usage: client.IamSingleRole(nil).List(nil, nil) or
// client.IamSingleRole(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamSingleRole(data map[string]any) CloudflareIdentityEntity {
	return NewIamSingleRoleEntityFunc(sdk, data)
}


// IamSingleToken returns a IamSingleToken entity bound to this client.
// Idiomatic usage: client.IamSingleToken(nil).List(nil, nil) or
// client.IamSingleToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamSingleToken(data map[string]any) CloudflareIdentityEntity {
	return NewIamSingleTokenEntityFunc(sdk, data)
}


// IamSingleTokenCreate returns a IamSingleTokenCreate entity bound to this client.
// Idiomatic usage: client.IamSingleTokenCreate(nil).List(nil, nil) or
// client.IamSingleTokenCreate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamSingleTokenCreate(data map[string]any) CloudflareIdentityEntity {
	return NewIamSingleTokenCreateEntityFunc(sdk, data)
}


// IamSsoConnector returns a IamSsoConnector entity bound to this client.
// Idiomatic usage: client.IamSsoConnector(nil).List(nil, nil) or
// client.IamSsoConnector(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamSsoConnector(data map[string]any) CloudflareIdentityEntity {
	return NewIamSsoConnectorEntityFunc(sdk, data)
}


// IamSsoConnectorCollection returns a IamSsoConnectorCollection entity bound to this client.
// Idiomatic usage: client.IamSsoConnectorCollection(nil).List(nil, nil) or
// client.IamSsoConnectorCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamSsoConnectorCollection(data map[string]any) CloudflareIdentityEntity {
	return NewIamSsoConnectorCollectionEntityFunc(sdk, data)
}


// IamTokenVerifyResponseSingleSegment returns a IamTokenVerifyResponseSingleSegment entity bound to this client.
// Idiomatic usage: client.IamTokenVerifyResponseSingleSegment(nil).List(nil, nil) or
// client.IamTokenVerifyResponseSingleSegment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) IamTokenVerifyResponseSingleSegment(data map[string]any) CloudflareIdentityEntity {
	return NewIamTokenVerifyResponseSingleSegmentEntityFunc(sdk, data)
}


// Member returns a Member entity bound to this client.
// Idiomatic usage: client.Member(nil).List(nil, nil) or
// client.Member(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) Member(data map[string]any) CloudflareIdentityEntity {
	return NewMemberEntityFunc(sdk, data)
}


// OauthClient returns a OauthClient entity bound to this client.
// Idiomatic usage: client.OauthClient(nil).List(nil, nil) or
// client.OauthClient(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) OauthClient(data map[string]any) CloudflareIdentityEntity {
	return NewOauthClientEntityFunc(sdk, data)
}


// Organization returns a Organization entity bound to this client.
// Idiomatic usage: client.Organization(nil).List(nil, nil) or
// client.Organization(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) Organization(data map[string]any) CloudflareIdentityEntity {
	return NewOrganizationEntityFunc(sdk, data)
}


// OrganizationMember returns a OrganizationMember entity bound to this client.
// Idiomatic usage: client.OrganizationMember(nil).List(nil, nil) or
// client.OrganizationMember(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) OrganizationMember(data map[string]any) CloudflareIdentityEntity {
	return NewOrganizationMemberEntityFunc(sdk, data)
}


// OrganizationsApiProfile returns a OrganizationsApiProfile entity bound to this client.
// Idiomatic usage: client.OrganizationsApiProfile(nil).List(nil, nil) or
// client.OrganizationsApiProfile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) OrganizationsApiProfile(data map[string]any) CloudflareIdentityEntity {
	return NewOrganizationsApiProfileEntityFunc(sdk, data)
}


// Resource returns a Resource entity bound to this client.
// Idiomatic usage: client.Resource(nil).List(nil, nil) or
// client.Resource(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) Resource(data map[string]any) CloudflareIdentityEntity {
	return NewResourceEntityFunc(sdk, data)
}


// ResourceGroup returns a ResourceGroup entity bound to this client.
// Idiomatic usage: client.ResourceGroup(nil).List(nil, nil) or
// client.ResourceGroup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) ResourceGroup(data map[string]any) CloudflareIdentityEntity {
	return NewResourceGroupEntityFunc(sdk, data)
}


// ResourceSharing returns a ResourceSharing entity bound to this client.
// Idiomatic usage: client.ResourceSharing(nil).List(nil, nil) or
// client.ResourceSharing(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) ResourceSharing(data map[string]any) CloudflareIdentityEntity {
	return NewResourceSharingEntityFunc(sdk, data)
}


// ResourceSharingShareExcludedRecipientResponseCollection returns a ResourceSharingShareExcludedRecipientResponseCollection entity bound to this client.
// Idiomatic usage: client.ResourceSharingShareExcludedRecipientResponseCollection(nil).List(nil, nil) or
// client.ResourceSharingShareExcludedRecipientResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) ResourceSharingShareExcludedRecipientResponseCollection(data map[string]any) CloudflareIdentityEntity {
	return NewResourceSharingShareExcludedRecipientResponseCollectionEntityFunc(sdk, data)
}


// ResourceSharingShareExcludedRecipientResponseSingle returns a ResourceSharingShareExcludedRecipientResponseSingle entity bound to this client.
// Idiomatic usage: client.ResourceSharingShareExcludedRecipientResponseSingle(nil).List(nil, nil) or
// client.ResourceSharingShareExcludedRecipientResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) ResourceSharingShareExcludedRecipientResponseSingle(data map[string]any) CloudflareIdentityEntity {
	return NewResourceSharingShareExcludedRecipientResponseSingleEntityFunc(sdk, data)
}


// ResourceSharingShareRecipientResponseCollection returns a ResourceSharingShareRecipientResponseCollection entity bound to this client.
// Idiomatic usage: client.ResourceSharingShareRecipientResponseCollection(nil).List(nil, nil) or
// client.ResourceSharingShareRecipientResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) ResourceSharingShareRecipientResponseCollection(data map[string]any) CloudflareIdentityEntity {
	return NewResourceSharingShareRecipientResponseCollectionEntityFunc(sdk, data)
}


// ResourceSharingShareRecipientResponseSingle returns a ResourceSharingShareRecipientResponseSingle entity bound to this client.
// Idiomatic usage: client.ResourceSharingShareRecipientResponseSingle(nil).List(nil, nil) or
// client.ResourceSharingShareRecipientResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) ResourceSharingShareRecipientResponseSingle(data map[string]any) CloudflareIdentityEntity {
	return NewResourceSharingShareRecipientResponseSingleEntityFunc(sdk, data)
}


// ResourceSharingShareResponseCollection returns a ResourceSharingShareResponseCollection entity bound to this client.
// Idiomatic usage: client.ResourceSharingShareResponseCollection(nil).List(nil, nil) or
// client.ResourceSharingShareResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) ResourceSharingShareResponseCollection(data map[string]any) CloudflareIdentityEntity {
	return NewResourceSharingShareResponseCollectionEntityFunc(sdk, data)
}


// ResourceSharingShareResponseSingle returns a ResourceSharingShareResponseSingle entity bound to this client.
// Idiomatic usage: client.ResourceSharingShareResponseSingle(nil).List(nil, nil) or
// client.ResourceSharingShareResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) ResourceSharingShareResponseSingle(data map[string]any) CloudflareIdentityEntity {
	return NewResourceSharingShareResponseSingleEntityFunc(sdk, data)
}


// ScimDiscovery returns a ScimDiscovery entity bound to this client.
// Idiomatic usage: client.ScimDiscovery(nil).List(nil, nil) or
// client.ScimDiscovery(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) ScimDiscovery(data map[string]any) CloudflareIdentityEntity {
	return NewScimDiscoveryEntityFunc(sdk, data)
}


// ScimGroup returns a ScimGroup entity bound to this client.
// Idiomatic usage: client.ScimGroup(nil).List(nil, nil) or
// client.ScimGroup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) ScimGroup(data map[string]any) CloudflareIdentityEntity {
	return NewScimGroupEntityFunc(sdk, data)
}


// ScimUser returns a ScimUser entity bound to this client.
// Idiomatic usage: client.ScimUser(nil).List(nil, nil) or
// client.ScimUser(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) ScimUser(data map[string]any) CloudflareIdentityEntity {
	return NewScimUserEntityFunc(sdk, data)
}


// SsoConnector returns a SsoConnector entity bound to this client.
// Idiomatic usage: client.SsoConnector(nil).List(nil, nil) or
// client.SsoConnector(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) SsoConnector(data map[string]any) CloudflareIdentityEntity {
	return NewSsoConnectorEntityFunc(sdk, data)
}


// Tenant returns a Tenant entity bound to this client.
// Idiomatic usage: client.Tenant(nil).List(nil, nil) or
// client.Tenant(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) Tenant(data map[string]any) CloudflareIdentityEntity {
	return NewTenantEntityFunc(sdk, data)
}


// Token returns a Token entity bound to this client.
// Idiomatic usage: client.Token(nil).List(nil, nil) or
// client.Token(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) Token(data map[string]any) CloudflareIdentityEntity {
	return NewTokenEntityFunc(sdk, data)
}


// User returns a User entity bound to this client.
// Idiomatic usage: client.User(nil).List(nil, nil) or
// client.User(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) User(data map[string]any) CloudflareIdentityEntity {
	return NewUserEntityFunc(sdk, data)
}


// UserGroup returns a UserGroup entity bound to this client.
// Idiomatic usage: client.UserGroup(nil).List(nil, nil) or
// client.UserGroup(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) UserGroup(data map[string]any) CloudflareIdentityEntity {
	return NewUserGroupEntityFunc(sdk, data)
}


// UsersAccountMembership returns a UsersAccountMembership entity bound to this client.
// Idiomatic usage: client.UsersAccountMembership(nil).List(nil, nil) or
// client.UsersAccountMembership(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) UsersAccountMembership(data map[string]any) CloudflareIdentityEntity {
	return NewUsersAccountMembershipEntityFunc(sdk, data)
}


// UsersOrganization returns a UsersOrganization entity bound to this client.
// Idiomatic usage: client.UsersOrganization(nil).List(nil, nil) or
// client.UsersOrganization(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareIdentitySDK) UsersOrganization(data map[string]any) CloudflareIdentityEntity {
	return NewUsersOrganizationEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareIdentitySDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewCloudflareIdentitySDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
