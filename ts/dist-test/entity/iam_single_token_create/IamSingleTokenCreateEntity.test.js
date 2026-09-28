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
(0, node_test_1.describe)('IamSingleTokenCreateEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_IDENTITY_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareIdentitySDK.test();
        const ent = testsdk.IamSingleTokenCreate();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'iam_single_token_create.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "condition": { "a": true, "h": "Condition", "n": "condition", "r": false, "t": "`$OBJECT`", "key$": "condition", "index$": 0 }, "expires_on": { "a": true, "fo": "date-time", "h": "Expires On", "n": "expires_on", "r": false, "sh": "The expiration time on or after which the JWT MUST NOT be accepted for processing.", "t": "`$STRING`", "key$": "expires_on", "index$": 1 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Token name.", "t": "`$STRING`", "key$": "name", "index$": 2 }, "not_before": { "a": true, "fo": "date-time", "h": "Not Before", "n": "not_before", "r": false, "sh": "The time before which the token MUST NOT be accepted for processing.", "t": "`$STRING`", "key$": "not_before", "index$": 3 }, "policies": { "a": true, "h": "Policies", "n": "policies", "r": true, "sh": "List of access policies assigned to the token.", "t": "`$ARRAY`", "union": { "branches": 2, "count": 1, "depth": 3 }, "key$": "policies", "index$": 4 } }, "name": "iam_single_token_create", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/tokens", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/tokens", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "tokens" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /user/tokens", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/user/tokens", "q": {}, "r": {}, "s": [{ "lit": "user" }, { "lit": "tokens" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.account"]] }, "key$": "iam_single_token_create", "name__orig": "iam_single_token_create", "Name": "IamSingleTokenCreate", "name_": "iam_single_token_create", "name-": "iam-single-token-create", "NAME": "IAM_SINGLE_TOKEN_CREATE", "index$": 33 }, { "active": true, "entity": "iam_single_token_create", "key$": "BasicIamSingleTokenCreateFlow", "kind": "basic", "name": "BasicIamSingleTokenCreateFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "iam_single_token_create_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'IamSingleTokenCreate', { "POST /accounts/{account_id}/tokens": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "condition": { "type": "object", "properties": { "request_ip": { "description": "Client IP restrictions.", "example": { "in": [], "not_in": [] }, "properties": { "in": {}, "not_in": {} }, "type": "object", "x-ref": "#/components/schemas/iam_request_ip" } }, "x-ref": "#/components/schemas/iam_condition", "key$": "condition" }, "expires_on": { "description": "The expiration time on or after which the JWT MUST NOT be accepted for processing.", "type": "string", "format": "date-time", "example": "2020-01-01T00:00:00Z", "x-auditable": true, "x-ref": "#/components/schemas/iam_expires_on", "key$": "expires_on" }, "name": { "description": "Token name.", "type": "string", "example": "readonly token", "maxLength": 120, "x-auditable": true, "x-ref": "#/components/schemas/iam_name", "key$": "name" }, "not_before": { "description": "The time before which the token MUST NOT be accepted for processing.", "type": "string", "format": "date-time", "example": "2018-07-01T05:20:00Z", "x-auditable": true, "x-ref": "#/components/schemas/iam_not_before", "key$": "not_before" }, "policies": { "description": "List of access policies assigned to the token.", "type": "array", "items": { "type": "object", "properties": { "effect": { "description": "Allow or deny operations against the resources.", "enum": [], "example": "allow", "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/iam_effect" }, "id": { "description": "Policy identifier.", "example": "f267e341f3dd4697bd3b9f71dd96247f", "readOnly": true, "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/iam_policy_identifier", "x-stainless-terraform-always-send": true }, "permission_groups": { "description": "A set of permission groups that are specified to the policy.", "example": [], "items": {}, "type": "array", "x-ref": "#/components/schemas/iam_permission_groups" }, "resources": { "description": "A list of resource names that the policy applies to.", "example": {}, "oneOf": [], "x-auditable": true, "x-ref": "#/components/schemas/iam_resources" } }, "required": ["id", "effect", "permission_groups", "resources"], "title": "Policy with Permission Groups and Resources", "x-ref": "#/components/schemas/iam_policy_with_permission_groups_and_resources" }, "x-ref": "#/components/schemas/iam_token_policies", "key$": "policies" } }, "required": ["name", "policies"], "x-ref": "#/components/schemas/iam_create_payload", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "Account Identifier", "x-ref": "#/components/schemas/iam_account_identifier" }, "index$": 0 }] }, "POST /user/tokens": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "condition": { "type": "object", "properties": { "request_ip": { "description": "Client IP restrictions.", "example": { "in": [], "not_in": [] }, "properties": { "in": {}, "not_in": {} }, "type": "object", "x-ref": "#/components/schemas/iam_request_ip" } }, "x-ref": "#/components/schemas/iam_condition", "key$": "condition" }, "expires_on": { "description": "The expiration time on or after which the JWT MUST NOT be accepted for processing.", "type": "string", "format": "date-time", "example": "2020-01-01T00:00:00Z", "x-auditable": true, "x-ref": "#/components/schemas/iam_expires_on", "key$": "expires_on" }, "name": { "description": "Token name.", "type": "string", "example": "readonly token", "maxLength": 120, "x-auditable": true, "x-ref": "#/components/schemas/iam_name", "key$": "name" }, "not_before": { "description": "The time before which the token MUST NOT be accepted for processing.", "type": "string", "format": "date-time", "example": "2018-07-01T05:20:00Z", "x-auditable": true, "x-ref": "#/components/schemas/iam_not_before", "key$": "not_before" }, "policies": { "description": "List of access policies assigned to the token.", "type": "array", "items": { "type": "object", "properties": { "effect": { "description": "Allow or deny operations against the resources.", "enum": [], "example": "allow", "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/iam_effect" }, "id": { "description": "Policy identifier.", "example": "f267e341f3dd4697bd3b9f71dd96247f", "readOnly": true, "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/iam_policy_identifier", "x-stainless-terraform-always-send": true }, "permission_groups": { "description": "A set of permission groups that are specified to the policy.", "example": [], "items": {}, "type": "array", "x-ref": "#/components/schemas/iam_permission_groups" }, "resources": { "description": "A list of resource names that the policy applies to.", "example": {}, "oneOf": [], "x-auditable": true, "x-ref": "#/components/schemas/iam_resources" } }, "required": ["id", "effect", "permission_groups", "resources"], "title": "Policy with Permission Groups and Resources", "x-ref": "#/components/schemas/iam_policy_with_permission_groups_and_resources" }, "x-ref": "#/components/schemas/iam_token_policies", "key$": "policies" } }, "required": ["name", "policies"], "x-ref": "#/components/schemas/iam_create_payload", "index$": 1 } } } }, "parameters": [] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const iam_single_token_create_ref01_ent = client.IamSingleTokenCreate();
        let iam_single_token_create_ref01_data = setup.data.new.iam_single_token_create['iam_single_token_create_ref01'];
        iam_single_token_create_ref01_data = (await iam_single_token_create_ref01_ent.create(iam_single_token_create_ref01_data)).data();
        (0, node_assert_1.default)(null != iam_single_token_create_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/iam_single_token_create/IamSingleTokenCreateTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareIdentitySDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['iam_single_token_create01', 'iam_single_token_create02', 'iam_single_token_create03', 'account01', 'account02', 'account03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_TOKEN_CREATE_ENTID': idmap,
        'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_IDENTITY_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_TOKEN_CREATE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_TOKEN_CREATE_ENTID'];
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
//# sourceMappingURL=IamSingleTokenCreateEntity.test.js.map