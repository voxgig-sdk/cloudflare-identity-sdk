"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('IamSingleOauthClientCreateEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_IDENTITY_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareIdentitySDK.test();
        const ent = testsdk.IamSingleOauthClientCreate();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'iam_single_oauth_client_create.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "iam_single_oauth_client_create", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/oauth_clients", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/oauth_clients", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "oauth_clients" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.account"]] }, "key$": "iam_single_oauth_client_create", "name__orig": "iam_single_oauth_client_create", "Name": "IamSingleOauthClientCreate", "name_": "iam_single_oauth_client_create", "name-": "iam-single-oauth-client-create", "NAME": "IAM_SINGLE_OAUTH_CLIENT_CREATE", "index$": 28 }, { "active": true, "entity": "iam_single_oauth_client_create", "key$": "BasicIamSingleOauthClientCreateFlow", "kind": "basic", "name": "BasicIamSingleOauthClientCreateFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "iam_single_oauth_client_create_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'IamSingleOauthClientCreate', { "POST /accounts/{account_id}/oauth_clients": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "allOf": [{ "description": "Fields shared by OAuth client responses and create/update requests.", "type": "object", "properties": { "allowed_cors_origins": { "description": "Array of allowed CORS origins.", "example": ["https://example.com"], "items": { "type": "string" }, "type": "array", "x-auditable": true }, "client_name": { "description": "Human-readable name of the OAuth client.", "example": "My OAuth App", "type": "string", "x-auditable": true }, "client_uri": { "description": "URL of the home page of the client.", "example": "https://example.com", "type": "string", "x-auditable": true }, "grant_types": { "description": "Array of OAuth grant types the client is allowed to use. `authorization_code` is required; `refresh_token` may be included optionally.", "example": ["authorization_code", "refresh_token"], "items": { "enum": [], "type": "string" }, "type": "array", "x-auditable": true, "x-ref": "#/components/schemas/iam_oauth_client_grant_types" }, "logo_uri": { "description": "URL of the client's logo.", "example": "https://example.com/logo.png", "type": "string", "x-auditable": true }, "optional_scopes": { "description": "Scopes that the authorizing user may decline during consent. Each value must also appear in `scopes`. The scopes `openid`, `offline`, and `offline_access` cannot be optional.", "example": ["account.write"], "items": { "type": "string" }, "type": "array", "x-auditable": true }, "policy_uri": { "description": "URL that points to a privacy policy document.", "example": "https://example.com/privacy", "type": "string", "x-auditable": true }, "post_logout_redirect_uris": { "description": "Array of allowed post-logout redirect URIs.", "example": ["https://example.com/logout"], "items": { "type": "string" }, "type": "array", "x-auditable": true }, "redirect_uris": { "description": "Array of allowed redirect URIs for the client.", "example": ["https://example.com/callback"], "items": { "type": "string" }, "type": "array", "x-auditable": true }, "response_types": { "description": "Array of OAuth response types the client is allowed to use.", "example": ["code"], "items": { "enum": [], "type": "string" }, "type": "array", "x-auditable": true, "x-ref": "#/components/schemas/iam_oauth_client_response_types" }, "scopes": { "description": "Array of OAuth scopes the client is allowed to request. Colon-delimited scopes are not accepted. Dot-delimited scopes are validated against available OAuth API scopes; simple identity scopes are allowed. Protocol scopes `offline_access` and `openid` are added or removed automatically based on `grant_types` and `response_types`.", "example": ["account.read"], "items": { "type": "string" }, "type": "array", "x-auditable": true }, "token_endpoint_auth_method": { "description": "The authentication method the client uses at the token endpoint.", "enum": ["none", "client_secret_basic", "client_secret_post"], "example": "client_secret_post", "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/iam_oauth_client_token_endpoint_auth_method" }, "tos_uri": { "description": "URL that points to a terms of service document.", "example": "https://example.com/tos", "type": "string", "x-auditable": true } }, "title": "OAuth Client Common Fields", "x-ref": "#/components/schemas/iam_oauth_client_common" }, { "required": ["client_name", "grant_types", "redirect_uris", "response_types", "scopes", "token_endpoint_auth_method"], "type": "object" }], "title": "Create OAuth Client Request", "x-ref": "#/components/schemas/iam_oauth_client_create_request", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "Account Identifier", "x-ref": "#/components/schemas/iam_account_identifier" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const iam_single_oauth_client_create_ref01_ent = client.IamSingleOauthClientCreate();
        let iam_single_oauth_client_create_ref01_data = setup.data.new.iam_single_oauth_client_create['iam_single_oauth_client_create_ref01'];
        iam_single_oauth_client_create_ref01_data['account_id'] = setup.idmap['account01'];
        iam_single_oauth_client_create_ref01_data = (await iam_single_oauth_client_create_ref01_ent.create(iam_single_oauth_client_create_ref01_data)).data();
        (0, node_assert_1.default)(null != iam_single_oauth_client_create_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/iam_single_oauth_client_create/IamSingleOauthClientCreateTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareIdentitySDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['iam_single_oauth_client_create01', 'iam_single_oauth_client_create02', 'iam_single_oauth_client_create03', 'account01', 'account02', 'account03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_OAUTH_CLIENT_CREATE_ENTID': idmap,
        'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_IDENTITY_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_OAUTH_CLIENT_CREATE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_OAUTH_CLIENT_CREATE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CloudflareIdentitySDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.CLOUDFLARE_IDENTITY_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=IamSingleOauthClientCreateEntity.test.js.map