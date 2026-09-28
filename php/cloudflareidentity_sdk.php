<?php
declare(strict_types=1);

// CloudflareIdentity SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class CloudflareIdentitySDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new CloudflareIdentityUtility();
        $this->_utility = $utility;

        $config = CloudflareIdentityConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = CloudflareIdentityHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = CloudflareIdentityHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!CloudflareIdentityFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, CloudflareIdentityFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return CloudflareIdentityUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = CloudflareIdentityHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = CloudflareIdentityHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = CloudflareIdentityHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new CloudflareIdentitySpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new CloudflareIdentityError($op . "_allow",
                "CloudflareIdentitySDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = CloudflareIdentityHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = CloudflareIdentityHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new CloudflareIdentityError("graphql_error",
                "CloudflareIdentitySDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_aaa_audit_logs_v2_org_history_response_collection = null;

    // Canonical facade: $client->AaaAuditLogsV2OrgHistoryResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->aaa_audit_logs_v2_org_history_response_collection()
    // resolves here too.
    public function AaaAuditLogsV2OrgHistoryResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/aaa_audit_logs_v2_org_history_response_collection_entity.php';
        if ($data === null) {
            if ($this->_aaa_audit_logs_v2_org_history_response_collection === null) {
                $this->_aaa_audit_logs_v2_org_history_response_collection = new AaaAuditLogsV2OrgHistoryResponseCollectionEntity($this, null);
            }
            return $this->_aaa_audit_logs_v2_org_history_response_collection;
        }
        return new AaaAuditLogsV2OrgHistoryResponseCollectionEntity($this, $data);
    }


    private $_aaa_audit_logs_v2_org_response_collection = null;

    // Canonical facade: $client->AaaAuditLogsV2OrgResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->aaa_audit_logs_v2_org_response_collection()
    // resolves here too.
    public function AaaAuditLogsV2OrgResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/aaa_audit_logs_v2_org_response_collection_entity.php';
        if ($data === null) {
            if ($this->_aaa_audit_logs_v2_org_response_collection === null) {
                $this->_aaa_audit_logs_v2_org_response_collection = new AaaAuditLogsV2OrgResponseCollectionEntity($this, null);
            }
            return $this->_aaa_audit_logs_v2_org_response_collection;
        }
        return new AaaAuditLogsV2OrgResponseCollectionEntity($this, $data);
    }


    private $_account = null;

    // Canonical facade: $client->Account()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->account()
    // resolves here too.
    public function Account($data = null)
    {
        require_once __DIR__ . '/entity/account_entity.php';
        if ($data === null) {
            if ($this->_account === null) {
                $this->_account = new AccountEntity($this, null);
            }
            return $this->_account;
        }
        return new AccountEntity($this, $data);
    }


    private $_account_resource_group = null;

    // Canonical facade: $client->AccountResourceGroup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->account_resource_group()
    // resolves here too.
    public function AccountResourceGroup($data = null)
    {
        require_once __DIR__ . '/entity/account_resource_group_entity.php';
        if ($data === null) {
            if ($this->_account_resource_group === null) {
                $this->_account_resource_group = new AccountResourceGroupEntity($this, null);
            }
            return $this->_account_resource_group;
        }
        return new AccountResourceGroupEntity($this, $data);
    }


    private $_account_user_group = null;

    // Canonical facade: $client->AccountUserGroup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->account_user_group()
    // resolves here too.
    public function AccountUserGroup($data = null)
    {
        require_once __DIR__ . '/entity/account_user_group_entity.php';
        if ($data === null) {
            if ($this->_account_user_group === null) {
                $this->_account_user_group = new AccountUserGroupEntity($this, null);
            }
            return $this->_account_user_group;
        }
        return new AccountUserGroupEntity($this, $data);
    }


    private $_account_user_group_member = null;

    // Canonical facade: $client->AccountUserGroupMember()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->account_user_group_member()
    // resolves here too.
    public function AccountUserGroupMember($data = null)
    {
        require_once __DIR__ . '/entity/account_user_group_member_entity.php';
        if ($data === null) {
            if ($this->_account_user_group_member === null) {
                $this->_account_user_group_member = new AccountUserGroupMemberEntity($this, null);
            }
            return $this->_account_user_group_member;
        }
        return new AccountUserGroupMemberEntity($this, $data);
    }


    private $_begin_verification = null;

    // Canonical facade: $client->BeginVerification()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->begin_verification()
    // resolves here too.
    public function BeginVerification($data = null)
    {
        require_once __DIR__ . '/entity/begin_verification_entity.php';
        if ($data === null) {
            if ($this->_begin_verification === null) {
                $this->_begin_verification = new BeginVerificationEntity($this, null);
            }
            return $this->_begin_verification;
        }
        return new BeginVerificationEntity($this, $data);
    }


    private $_bill_subs_api_client_secret_response_single = null;

    // Canonical facade: $client->BillSubsApiClientSecretResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bill_subs_api_client_secret_response_single()
    // resolves here too.
    public function BillSubsApiClientSecretResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/bill_subs_api_client_secret_response_single_entity.php';
        if ($data === null) {
            if ($this->_bill_subs_api_client_secret_response_single === null) {
                $this->_bill_subs_api_client_secret_response_single = new BillSubsApiClientSecretResponseSingleEntity($this, null);
            }
            return $this->_bill_subs_api_client_secret_response_single;
        }
        return new BillSubsApiClientSecretResponseSingleEntity($this, $data);
    }


    private $_billable_usage_api_v2_usage = null;

    // Canonical facade: $client->BillableUsageApiV2Usage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->billable_usage_api_v2_usage()
    // resolves here too.
    public function BillableUsageApiV2Usage($data = null)
    {
        require_once __DIR__ . '/entity/billable_usage_api_v2_usage_entity.php';
        if ($data === null) {
            if ($this->_billable_usage_api_v2_usage === null) {
                $this->_billable_usage_api_v2_usage = new BillableUsageApiV2UsageEntity($this, null);
            }
            return $this->_billable_usage_api_v2_usage;
        }
        return new BillableUsageApiV2UsageEntity($this, $data);
    }


    private $_dns_custom_nameservers_empty_response_3 = null;

    // Canonical facade: $client->DnsCustomNameserversEmptyResponse3()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dns_custom_nameservers_empty_response_3()
    // resolves here too.
    public function DnsCustomNameserversEmptyResponse3($data = null)
    {
        require_once __DIR__ . '/entity/dns_custom_nameservers_empty_response_3_entity.php';
        if ($data === null) {
            if ($this->_dns_custom_nameservers_empty_response_3 === null) {
                $this->_dns_custom_nameservers_empty_response_3 = new DnsCustomNameserversEmptyResponse3Entity($this, null);
            }
            return $this->_dns_custom_nameservers_empty_response_3;
        }
        return new DnsCustomNameserversEmptyResponse3Entity($this, $data);
    }


    private $_dns_custom_nameservers_tcns_response_collection = null;

    // Canonical facade: $client->DnsCustomNameserversTcnsResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dns_custom_nameservers_tcns_response_collection()
    // resolves here too.
    public function DnsCustomNameserversTcnsResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/dns_custom_nameservers_tcns_response_collection_entity.php';
        if ($data === null) {
            if ($this->_dns_custom_nameservers_tcns_response_collection === null) {
                $this->_dns_custom_nameservers_tcns_response_collection = new DnsCustomNameserversTcnsResponseCollectionEntity($this, null);
            }
            return $this->_dns_custom_nameservers_tcns_response_collection;
        }
        return new DnsCustomNameserversTcnsResponseCollectionEntity($this, $data);
    }


    private $_dns_custom_nameservers_tcns_response_single = null;

    // Canonical facade: $client->DnsCustomNameserversTcnsResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dns_custom_nameservers_tcns_response_single()
    // resolves here too.
    public function DnsCustomNameserversTcnsResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/dns_custom_nameservers_tcns_response_single_entity.php';
        if ($data === null) {
            if ($this->_dns_custom_nameservers_tcns_response_single === null) {
                $this->_dns_custom_nameservers_tcns_response_single = new DnsCustomNameserversTcnsResponseSingleEntity($this, null);
            }
            return $this->_dns_custom_nameservers_tcns_response_single;
        }
        return new DnsCustomNameserversTcnsResponseSingleEntity($this, $data);
    }


    private $_iam_api_response_single_id = null;

    // Canonical facade: $client->IamApiResponseSingleId()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_api_response_single_id()
    // resolves here too.
    public function IamApiResponseSingleId($data = null)
    {
        require_once __DIR__ . '/entity/iam_api_response_single_id_entity.php';
        if ($data === null) {
            if ($this->_iam_api_response_single_id === null) {
                $this->_iam_api_response_single_id = new IamApiResponseSingleIdEntity($this, null);
            }
            return $this->_iam_api_response_single_id;
        }
        return new IamApiResponseSingleIdEntity($this, $data);
    }


    private $_iam_collection_member_response_with_policy = null;

    // Canonical facade: $client->IamCollectionMemberResponseWithPolicy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_collection_member_response_with_policy()
    // resolves here too.
    public function IamCollectionMemberResponseWithPolicy($data = null)
    {
        require_once __DIR__ . '/entity/iam_collection_member_response_with_policy_entity.php';
        if ($data === null) {
            if ($this->_iam_collection_member_response_with_policy === null) {
                $this->_iam_collection_member_response_with_policy = new IamCollectionMemberResponseWithPolicyEntity($this, null);
            }
            return $this->_iam_collection_member_response_with_policy;
        }
        return new IamCollectionMemberResponseWithPolicyEntity($this, $data);
    }


    private $_iam_collection_oauth_client = null;

    // Canonical facade: $client->IamCollectionOauthClient()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_collection_oauth_client()
    // resolves here too.
    public function IamCollectionOauthClient($data = null)
    {
        require_once __DIR__ . '/entity/iam_collection_oauth_client_entity.php';
        if ($data === null) {
            if ($this->_iam_collection_oauth_client === null) {
                $this->_iam_collection_oauth_client = new IamCollectionOauthClientEntity($this, null);
            }
            return $this->_iam_collection_oauth_client;
        }
        return new IamCollectionOauthClientEntity($this, $data);
    }


    private $_iam_collection_oauth_scope = null;

    // Canonical facade: $client->IamCollectionOauthScope()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_collection_oauth_scope()
    // resolves here too.
    public function IamCollectionOauthScope($data = null)
    {
        require_once __DIR__ . '/entity/iam_collection_oauth_scope_entity.php';
        if ($data === null) {
            if ($this->_iam_collection_oauth_scope === null) {
                $this->_iam_collection_oauth_scope = new IamCollectionOauthScopeEntity($this, null);
            }
            return $this->_iam_collection_oauth_scope;
        }
        return new IamCollectionOauthScopeEntity($this, $data);
    }


    private $_iam_collection_organization = null;

    // Canonical facade: $client->IamCollectionOrganization()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_collection_organization()
    // resolves here too.
    public function IamCollectionOrganization($data = null)
    {
        require_once __DIR__ . '/entity/iam_collection_organization_entity.php';
        if ($data === null) {
            if ($this->_iam_collection_organization === null) {
                $this->_iam_collection_organization = new IamCollectionOrganizationEntity($this, null);
            }
            return $this->_iam_collection_organization;
        }
        return new IamCollectionOrganizationEntity($this, $data);
    }


    private $_iam_collection_permission_group = null;

    // Canonical facade: $client->IamCollectionPermissionGroup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_collection_permission_group()
    // resolves here too.
    public function IamCollectionPermissionGroup($data = null)
    {
        require_once __DIR__ . '/entity/iam_collection_permission_group_entity.php';
        if ($data === null) {
            if ($this->_iam_collection_permission_group === null) {
                $this->_iam_collection_permission_group = new IamCollectionPermissionGroupEntity($this, null);
            }
            return $this->_iam_collection_permission_group;
        }
        return new IamCollectionPermissionGroupEntity($this, $data);
    }


    private $_iam_collection_role = null;

    // Canonical facade: $client->IamCollectionRole()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_collection_role()
    // resolves here too.
    public function IamCollectionRole($data = null)
    {
        require_once __DIR__ . '/entity/iam_collection_role_entity.php';
        if ($data === null) {
            if ($this->_iam_collection_role === null) {
                $this->_iam_collection_role = new IamCollectionRoleEntity($this, null);
            }
            return $this->_iam_collection_role;
        }
        return new IamCollectionRoleEntity($this, $data);
    }


    private $_iam_collection_token = null;

    // Canonical facade: $client->IamCollectionToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_collection_token()
    // resolves here too.
    public function IamCollectionToken($data = null)
    {
        require_once __DIR__ . '/entity/iam_collection_token_entity.php';
        if ($data === null) {
            if ($this->_iam_collection_token === null) {
                $this->_iam_collection_token = new IamCollectionTokenEntity($this, null);
            }
            return $this->_iam_collection_token;
        }
        return new IamCollectionTokenEntity($this, $data);
    }


    private $_iam_oauth_client_rotate_secret = null;

    // Canonical facade: $client->IamOauthClientRotateSecret()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_oauth_client_rotate_secret()
    // resolves here too.
    public function IamOauthClientRotateSecret($data = null)
    {
        require_once __DIR__ . '/entity/iam_oauth_client_rotate_secret_entity.php';
        if ($data === null) {
            if ($this->_iam_oauth_client_rotate_secret === null) {
                $this->_iam_oauth_client_rotate_secret = new IamOauthClientRotateSecretEntity($this, null);
            }
            return $this->_iam_oauth_client_rotate_secret;
        }
        return new IamOauthClientRotateSecretEntity($this, $data);
    }


    private $_iam_permissions_group_response_collection = null;

    // Canonical facade: $client->IamPermissionsGroupResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_permissions_group_response_collection()
    // resolves here too.
    public function IamPermissionsGroupResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/iam_permissions_group_response_collection_entity.php';
        if ($data === null) {
            if ($this->_iam_permissions_group_response_collection === null) {
                $this->_iam_permissions_group_response_collection = new IamPermissionsGroupResponseCollectionEntity($this, null);
            }
            return $this->_iam_permissions_group_response_collection;
        }
        return new IamPermissionsGroupResponseCollectionEntity($this, $data);
    }


    private $_iam_response_single_value = null;

    // Canonical facade: $client->IamResponseSingleValue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_response_single_value()
    // resolves here too.
    public function IamResponseSingleValue($data = null)
    {
        require_once __DIR__ . '/entity/iam_response_single_value_entity.php';
        if ($data === null) {
            if ($this->_iam_response_single_value === null) {
                $this->_iam_response_single_value = new IamResponseSingleValueEntity($this, null);
            }
            return $this->_iam_response_single_value;
        }
        return new IamResponseSingleValueEntity($this, $data);
    }


    private $_iam_schemas_collection_invite = null;

    // Canonical facade: $client->IamSchemasCollectionInvite()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_schemas_collection_invite()
    // resolves here too.
    public function IamSchemasCollectionInvite($data = null)
    {
        require_once __DIR__ . '/entity/iam_schemas_collection_invite_entity.php';
        if ($data === null) {
            if ($this->_iam_schemas_collection_invite === null) {
                $this->_iam_schemas_collection_invite = new IamSchemasCollectionInviteEntity($this, null);
            }
            return $this->_iam_schemas_collection_invite;
        }
        return new IamSchemasCollectionInviteEntity($this, $data);
    }


    private $_iam_single_invite = null;

    // Canonical facade: $client->IamSingleInvite()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_single_invite()
    // resolves here too.
    public function IamSingleInvite($data = null)
    {
        require_once __DIR__ . '/entity/iam_single_invite_entity.php';
        if ($data === null) {
            if ($this->_iam_single_invite === null) {
                $this->_iam_single_invite = new IamSingleInviteEntity($this, null);
            }
            return $this->_iam_single_invite;
        }
        return new IamSingleInviteEntity($this, $data);
    }


    private $_iam_single_member_response_with_policy = null;

    // Canonical facade: $client->IamSingleMemberResponseWithPolicy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_single_member_response_with_policy()
    // resolves here too.
    public function IamSingleMemberResponseWithPolicy($data = null)
    {
        require_once __DIR__ . '/entity/iam_single_member_response_with_policy_entity.php';
        if ($data === null) {
            if ($this->_iam_single_member_response_with_policy === null) {
                $this->_iam_single_member_response_with_policy = new IamSingleMemberResponseWithPolicyEntity($this, null);
            }
            return $this->_iam_single_member_response_with_policy;
        }
        return new IamSingleMemberResponseWithPolicyEntity($this, $data);
    }


    private $_iam_single_membership_response_with_policy = null;

    // Canonical facade: $client->IamSingleMembershipResponseWithPolicy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_single_membership_response_with_policy()
    // resolves here too.
    public function IamSingleMembershipResponseWithPolicy($data = null)
    {
        require_once __DIR__ . '/entity/iam_single_membership_response_with_policy_entity.php';
        if ($data === null) {
            if ($this->_iam_single_membership_response_with_policy === null) {
                $this->_iam_single_membership_response_with_policy = new IamSingleMembershipResponseWithPolicyEntity($this, null);
            }
            return $this->_iam_single_membership_response_with_policy;
        }
        return new IamSingleMembershipResponseWithPolicyEntity($this, $data);
    }


    private $_iam_single_oauth_client = null;

    // Canonical facade: $client->IamSingleOauthClient()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_single_oauth_client()
    // resolves here too.
    public function IamSingleOauthClient($data = null)
    {
        require_once __DIR__ . '/entity/iam_single_oauth_client_entity.php';
        if ($data === null) {
            if ($this->_iam_single_oauth_client === null) {
                $this->_iam_single_oauth_client = new IamSingleOauthClientEntity($this, null);
            }
            return $this->_iam_single_oauth_client;
        }
        return new IamSingleOauthClientEntity($this, $data);
    }


    private $_iam_single_oauth_client_create = null;

    // Canonical facade: $client->IamSingleOauthClientCreate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_single_oauth_client_create()
    // resolves here too.
    public function IamSingleOauthClientCreate($data = null)
    {
        require_once __DIR__ . '/entity/iam_single_oauth_client_create_entity.php';
        if ($data === null) {
            if ($this->_iam_single_oauth_client_create === null) {
                $this->_iam_single_oauth_client_create = new IamSingleOauthClientCreateEntity($this, null);
            }
            return $this->_iam_single_oauth_client_create;
        }
        return new IamSingleOauthClientCreateEntity($this, $data);
    }


    private $_iam_single_organization = null;

    // Canonical facade: $client->IamSingleOrganization()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_single_organization()
    // resolves here too.
    public function IamSingleOrganization($data = null)
    {
        require_once __DIR__ . '/entity/iam_single_organization_entity.php';
        if ($data === null) {
            if ($this->_iam_single_organization === null) {
                $this->_iam_single_organization = new IamSingleOrganizationEntity($this, null);
            }
            return $this->_iam_single_organization;
        }
        return new IamSingleOrganizationEntity($this, $data);
    }


    private $_iam_single_permission_group = null;

    // Canonical facade: $client->IamSinglePermissionGroup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_single_permission_group()
    // resolves here too.
    public function IamSinglePermissionGroup($data = null)
    {
        require_once __DIR__ . '/entity/iam_single_permission_group_entity.php';
        if ($data === null) {
            if ($this->_iam_single_permission_group === null) {
                $this->_iam_single_permission_group = new IamSinglePermissionGroupEntity($this, null);
            }
            return $this->_iam_single_permission_group;
        }
        return new IamSinglePermissionGroupEntity($this, $data);
    }


    private $_iam_single_role = null;

    // Canonical facade: $client->IamSingleRole()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_single_role()
    // resolves here too.
    public function IamSingleRole($data = null)
    {
        require_once __DIR__ . '/entity/iam_single_role_entity.php';
        if ($data === null) {
            if ($this->_iam_single_role === null) {
                $this->_iam_single_role = new IamSingleRoleEntity($this, null);
            }
            return $this->_iam_single_role;
        }
        return new IamSingleRoleEntity($this, $data);
    }


    private $_iam_single_token = null;

    // Canonical facade: $client->IamSingleToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_single_token()
    // resolves here too.
    public function IamSingleToken($data = null)
    {
        require_once __DIR__ . '/entity/iam_single_token_entity.php';
        if ($data === null) {
            if ($this->_iam_single_token === null) {
                $this->_iam_single_token = new IamSingleTokenEntity($this, null);
            }
            return $this->_iam_single_token;
        }
        return new IamSingleTokenEntity($this, $data);
    }


    private $_iam_single_token_create = null;

    // Canonical facade: $client->IamSingleTokenCreate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_single_token_create()
    // resolves here too.
    public function IamSingleTokenCreate($data = null)
    {
        require_once __DIR__ . '/entity/iam_single_token_create_entity.php';
        if ($data === null) {
            if ($this->_iam_single_token_create === null) {
                $this->_iam_single_token_create = new IamSingleTokenCreateEntity($this, null);
            }
            return $this->_iam_single_token_create;
        }
        return new IamSingleTokenCreateEntity($this, $data);
    }


    private $_iam_sso_connector = null;

    // Canonical facade: $client->IamSsoConnector()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_sso_connector()
    // resolves here too.
    public function IamSsoConnector($data = null)
    {
        require_once __DIR__ . '/entity/iam_sso_connector_entity.php';
        if ($data === null) {
            if ($this->_iam_sso_connector === null) {
                $this->_iam_sso_connector = new IamSsoConnectorEntity($this, null);
            }
            return $this->_iam_sso_connector;
        }
        return new IamSsoConnectorEntity($this, $data);
    }


    private $_iam_sso_connector_collection = null;

    // Canonical facade: $client->IamSsoConnectorCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_sso_connector_collection()
    // resolves here too.
    public function IamSsoConnectorCollection($data = null)
    {
        require_once __DIR__ . '/entity/iam_sso_connector_collection_entity.php';
        if ($data === null) {
            if ($this->_iam_sso_connector_collection === null) {
                $this->_iam_sso_connector_collection = new IamSsoConnectorCollectionEntity($this, null);
            }
            return $this->_iam_sso_connector_collection;
        }
        return new IamSsoConnectorCollectionEntity($this, $data);
    }


    private $_iam_token_verify_response_single_segment = null;

    // Canonical facade: $client->IamTokenVerifyResponseSingleSegment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->iam_token_verify_response_single_segment()
    // resolves here too.
    public function IamTokenVerifyResponseSingleSegment($data = null)
    {
        require_once __DIR__ . '/entity/iam_token_verify_response_single_segment_entity.php';
        if ($data === null) {
            if ($this->_iam_token_verify_response_single_segment === null) {
                $this->_iam_token_verify_response_single_segment = new IamTokenVerifyResponseSingleSegmentEntity($this, null);
            }
            return $this->_iam_token_verify_response_single_segment;
        }
        return new IamTokenVerifyResponseSingleSegmentEntity($this, $data);
    }


    private $_member = null;

    // Canonical facade: $client->Member()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->member()
    // resolves here too.
    public function Member($data = null)
    {
        require_once __DIR__ . '/entity/member_entity.php';
        if ($data === null) {
            if ($this->_member === null) {
                $this->_member = new MemberEntity($this, null);
            }
            return $this->_member;
        }
        return new MemberEntity($this, $data);
    }


    private $_oauth_client = null;

    // Canonical facade: $client->OauthClient()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->oauth_client()
    // resolves here too.
    public function OauthClient($data = null)
    {
        require_once __DIR__ . '/entity/oauth_client_entity.php';
        if ($data === null) {
            if ($this->_oauth_client === null) {
                $this->_oauth_client = new OauthClientEntity($this, null);
            }
            return $this->_oauth_client;
        }
        return new OauthClientEntity($this, $data);
    }


    private $_organization = null;

    // Canonical facade: $client->Organization()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization()
    // resolves here too.
    public function Organization($data = null)
    {
        require_once __DIR__ . '/entity/organization_entity.php';
        if ($data === null) {
            if ($this->_organization === null) {
                $this->_organization = new OrganizationEntity($this, null);
            }
            return $this->_organization;
        }
        return new OrganizationEntity($this, $data);
    }


    private $_organization_member = null;

    // Canonical facade: $client->OrganizationMember()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization_member()
    // resolves here too.
    public function OrganizationMember($data = null)
    {
        require_once __DIR__ . '/entity/organization_member_entity.php';
        if ($data === null) {
            if ($this->_organization_member === null) {
                $this->_organization_member = new OrganizationMemberEntity($this, null);
            }
            return $this->_organization_member;
        }
        return new OrganizationMemberEntity($this, $data);
    }


    private $_organizations_api_profile = null;

    // Canonical facade: $client->OrganizationsApiProfile()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organizations_api_profile()
    // resolves here too.
    public function OrganizationsApiProfile($data = null)
    {
        require_once __DIR__ . '/entity/organizations_api_profile_entity.php';
        if ($data === null) {
            if ($this->_organizations_api_profile === null) {
                $this->_organizations_api_profile = new OrganizationsApiProfileEntity($this, null);
            }
            return $this->_organizations_api_profile;
        }
        return new OrganizationsApiProfileEntity($this, $data);
    }


    private $_resource = null;

    // Canonical facade: $client->Resource()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->resource()
    // resolves here too.
    public function Resource($data = null)
    {
        require_once __DIR__ . '/entity/resource_entity.php';
        if ($data === null) {
            if ($this->_resource === null) {
                $this->_resource = new ResourceEntity($this, null);
            }
            return $this->_resource;
        }
        return new ResourceEntity($this, $data);
    }


    private $_resource_group = null;

    // Canonical facade: $client->ResourceGroup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->resource_group()
    // resolves here too.
    public function ResourceGroup($data = null)
    {
        require_once __DIR__ . '/entity/resource_group_entity.php';
        if ($data === null) {
            if ($this->_resource_group === null) {
                $this->_resource_group = new ResourceGroupEntity($this, null);
            }
            return $this->_resource_group;
        }
        return new ResourceGroupEntity($this, $data);
    }


    private $_resource_sharing = null;

    // Canonical facade: $client->ResourceSharing()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->resource_sharing()
    // resolves here too.
    public function ResourceSharing($data = null)
    {
        require_once __DIR__ . '/entity/resource_sharing_entity.php';
        if ($data === null) {
            if ($this->_resource_sharing === null) {
                $this->_resource_sharing = new ResourceSharingEntity($this, null);
            }
            return $this->_resource_sharing;
        }
        return new ResourceSharingEntity($this, $data);
    }


    private $_resource_sharing_share_excluded_recipient_response_collection = null;

    // Canonical facade: $client->ResourceSharingShareExcludedRecipientResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->resource_sharing_share_excluded_recipient_response_collection()
    // resolves here too.
    public function ResourceSharingShareExcludedRecipientResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/resource_sharing_share_excluded_recipient_response_collection_entity.php';
        if ($data === null) {
            if ($this->_resource_sharing_share_excluded_recipient_response_collection === null) {
                $this->_resource_sharing_share_excluded_recipient_response_collection = new ResourceSharingShareExcludedRecipientResponseCollectionEntity($this, null);
            }
            return $this->_resource_sharing_share_excluded_recipient_response_collection;
        }
        return new ResourceSharingShareExcludedRecipientResponseCollectionEntity($this, $data);
    }


    private $_resource_sharing_share_excluded_recipient_response_single = null;

    // Canonical facade: $client->ResourceSharingShareExcludedRecipientResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->resource_sharing_share_excluded_recipient_response_single()
    // resolves here too.
    public function ResourceSharingShareExcludedRecipientResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/resource_sharing_share_excluded_recipient_response_single_entity.php';
        if ($data === null) {
            if ($this->_resource_sharing_share_excluded_recipient_response_single === null) {
                $this->_resource_sharing_share_excluded_recipient_response_single = new ResourceSharingShareExcludedRecipientResponseSingleEntity($this, null);
            }
            return $this->_resource_sharing_share_excluded_recipient_response_single;
        }
        return new ResourceSharingShareExcludedRecipientResponseSingleEntity($this, $data);
    }


    private $_resource_sharing_share_recipient_response_collection = null;

    // Canonical facade: $client->ResourceSharingShareRecipientResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->resource_sharing_share_recipient_response_collection()
    // resolves here too.
    public function ResourceSharingShareRecipientResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/resource_sharing_share_recipient_response_collection_entity.php';
        if ($data === null) {
            if ($this->_resource_sharing_share_recipient_response_collection === null) {
                $this->_resource_sharing_share_recipient_response_collection = new ResourceSharingShareRecipientResponseCollectionEntity($this, null);
            }
            return $this->_resource_sharing_share_recipient_response_collection;
        }
        return new ResourceSharingShareRecipientResponseCollectionEntity($this, $data);
    }


    private $_resource_sharing_share_recipient_response_single = null;

    // Canonical facade: $client->ResourceSharingShareRecipientResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->resource_sharing_share_recipient_response_single()
    // resolves here too.
    public function ResourceSharingShareRecipientResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/resource_sharing_share_recipient_response_single_entity.php';
        if ($data === null) {
            if ($this->_resource_sharing_share_recipient_response_single === null) {
                $this->_resource_sharing_share_recipient_response_single = new ResourceSharingShareRecipientResponseSingleEntity($this, null);
            }
            return $this->_resource_sharing_share_recipient_response_single;
        }
        return new ResourceSharingShareRecipientResponseSingleEntity($this, $data);
    }


    private $_resource_sharing_share_response_collection = null;

    // Canonical facade: $client->ResourceSharingShareResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->resource_sharing_share_response_collection()
    // resolves here too.
    public function ResourceSharingShareResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/resource_sharing_share_response_collection_entity.php';
        if ($data === null) {
            if ($this->_resource_sharing_share_response_collection === null) {
                $this->_resource_sharing_share_response_collection = new ResourceSharingShareResponseCollectionEntity($this, null);
            }
            return $this->_resource_sharing_share_response_collection;
        }
        return new ResourceSharingShareResponseCollectionEntity($this, $data);
    }


    private $_resource_sharing_share_response_single = null;

    // Canonical facade: $client->ResourceSharingShareResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->resource_sharing_share_response_single()
    // resolves here too.
    public function ResourceSharingShareResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/resource_sharing_share_response_single_entity.php';
        if ($data === null) {
            if ($this->_resource_sharing_share_response_single === null) {
                $this->_resource_sharing_share_response_single = new ResourceSharingShareResponseSingleEntity($this, null);
            }
            return $this->_resource_sharing_share_response_single;
        }
        return new ResourceSharingShareResponseSingleEntity($this, $data);
    }


    private $_scim_discovery = null;

    // Canonical facade: $client->ScimDiscovery()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->scim_discovery()
    // resolves here too.
    public function ScimDiscovery($data = null)
    {
        require_once __DIR__ . '/entity/scim_discovery_entity.php';
        if ($data === null) {
            if ($this->_scim_discovery === null) {
                $this->_scim_discovery = new ScimDiscoveryEntity($this, null);
            }
            return $this->_scim_discovery;
        }
        return new ScimDiscoveryEntity($this, $data);
    }


    private $_scim_group = null;

    // Canonical facade: $client->ScimGroup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->scim_group()
    // resolves here too.
    public function ScimGroup($data = null)
    {
        require_once __DIR__ . '/entity/scim_group_entity.php';
        if ($data === null) {
            if ($this->_scim_group === null) {
                $this->_scim_group = new ScimGroupEntity($this, null);
            }
            return $this->_scim_group;
        }
        return new ScimGroupEntity($this, $data);
    }


    private $_scim_user = null;

    // Canonical facade: $client->ScimUser()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->scim_user()
    // resolves here too.
    public function ScimUser($data = null)
    {
        require_once __DIR__ . '/entity/scim_user_entity.php';
        if ($data === null) {
            if ($this->_scim_user === null) {
                $this->_scim_user = new ScimUserEntity($this, null);
            }
            return $this->_scim_user;
        }
        return new ScimUserEntity($this, $data);
    }


    private $_sso_connector = null;

    // Canonical facade: $client->SsoConnector()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sso_connector()
    // resolves here too.
    public function SsoConnector($data = null)
    {
        require_once __DIR__ . '/entity/sso_connector_entity.php';
        if ($data === null) {
            if ($this->_sso_connector === null) {
                $this->_sso_connector = new SsoConnectorEntity($this, null);
            }
            return $this->_sso_connector;
        }
        return new SsoConnectorEntity($this, $data);
    }


    private $_tenant = null;

    // Canonical facade: $client->Tenant()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tenant()
    // resolves here too.
    public function Tenant($data = null)
    {
        require_once __DIR__ . '/entity/tenant_entity.php';
        if ($data === null) {
            if ($this->_tenant === null) {
                $this->_tenant = new TenantEntity($this, null);
            }
            return $this->_tenant;
        }
        return new TenantEntity($this, $data);
    }


    private $_token = null;

    // Canonical facade: $client->Token()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->token()
    // resolves here too.
    public function Token($data = null)
    {
        require_once __DIR__ . '/entity/token_entity.php';
        if ($data === null) {
            if ($this->_token === null) {
                $this->_token = new TokenEntity($this, null);
            }
            return $this->_token;
        }
        return new TokenEntity($this, $data);
    }


    private $_user = null;

    // Canonical facade: $client->User()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user()
    // resolves here too.
    public function User($data = null)
    {
        require_once __DIR__ . '/entity/user_entity.php';
        if ($data === null) {
            if ($this->_user === null) {
                $this->_user = new UserEntity($this, null);
            }
            return $this->_user;
        }
        return new UserEntity($this, $data);
    }


    private $_user_group = null;

    // Canonical facade: $client->UserGroup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user_group()
    // resolves here too.
    public function UserGroup($data = null)
    {
        require_once __DIR__ . '/entity/user_group_entity.php';
        if ($data === null) {
            if ($this->_user_group === null) {
                $this->_user_group = new UserGroupEntity($this, null);
            }
            return $this->_user_group;
        }
        return new UserGroupEntity($this, $data);
    }


    private $_users_account_membership = null;

    // Canonical facade: $client->UsersAccountMembership()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->users_account_membership()
    // resolves here too.
    public function UsersAccountMembership($data = null)
    {
        require_once __DIR__ . '/entity/users_account_membership_entity.php';
        if ($data === null) {
            if ($this->_users_account_membership === null) {
                $this->_users_account_membership = new UsersAccountMembershipEntity($this, null);
            }
            return $this->_users_account_membership;
        }
        return new UsersAccountMembershipEntity($this, $data);
    }


    private $_users_organization = null;

    // Canonical facade: $client->UsersOrganization()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->users_organization()
    // resolves here too.
    public function UsersOrganization($data = null)
    {
        require_once __DIR__ . '/entity/users_organization_entity.php';
        if ($data === null) {
            if ($this->_users_organization === null) {
                $this->_users_organization = new UsersOrganizationEntity($this, null);
            }
            return $this->_users_organization;
        }
        return new UsersOrganizationEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new CloudflareIdentitySDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
