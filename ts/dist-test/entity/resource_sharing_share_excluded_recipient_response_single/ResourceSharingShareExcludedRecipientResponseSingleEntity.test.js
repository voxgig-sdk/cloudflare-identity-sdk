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
(0, node_test_1.describe)('ResourceSharingShareExcludedRecipientResponseSingleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_IDENTITY_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareIdentitySDK.test();
        const ent = testsdk.ResourceSharingShareExcludedRecipientResponseSingle();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE;
        for (const op of ['create', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'resource_sharing_share_excluded_recipient_response_single.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "account_id": { "a": true, "h": "Account Id", "n": "account_id", "r": true, "sh": "The account to exclude from the organization-targeted share.", "t": "`$STRING`", "key$": "account_id", "index$": 0 }, "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 1 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "load": { "req": true, "type": "`$ANY`" } }, "r": false, "t": "`$ANY`", "union": { "branches": 3, "count": 1, "depth": 0 }, "key$": "result", "index$": 2 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 3 } }, "name": "resource_sharing_share_excluded_recipient_response_single", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/shares/{share_id}/excluded-recipients", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "3fd85f74b32742f1bff64a85009dda07", "k": "param", "n": "share_id", "or": "share_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/shares/{share_id}/excluded-recipients", "q": { "exist": ["account_id", "share_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "shares" }, { "var": "share_id" }, { "lit": "excluded-recipients" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/shares/{share_id}/excluded-recipients/{excluded_recipient_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "4ae96b85c43850f2c0a7b9101a0eeb18", "k": "param", "n": "excluded_recipient_id", "or": "excluded_recipient_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "3fd85f74b32742f1bff64a85009dda07", "k": "param", "n": "share_id", "or": "share_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/shares/{share_id}/excluded-recipients/{excluded_recipient_id}", "q": { "exist": ["account_id", "excluded_recipient_id", "share_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "shares" }, { "var": "share_id" }, { "lit": "excluded-recipients" }, { "var": "excluded_recipient_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/shares/{share_id}/excluded-recipients/{excluded_recipient_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "4ae96b85c43850f2c0a7b9101a0eeb18", "k": "param", "n": "excluded_recipient_id", "or": "excluded_recipient_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "3fd85f74b32742f1bff64a85009dda07", "k": "param", "n": "share_id", "or": "share_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/shares/{share_id}/excluded-recipients/{excluded_recipient_id}", "q": { "exist": ["account_id", "excluded_recipient_id", "share_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "shares" }, { "var": "share_id" }, { "lit": "excluded-recipients" }, { "var": "excluded_recipient_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.account"], ["$.main.kit.entity.account"]] }, "key$": "resource_sharing_share_excluded_recipient_response_single", "name__orig": "resource_sharing_share_excluded_recipient_response_single", "Name": "ResourceSharingShareExcludedRecipientResponseSingle", "name_": "resource_sharing_share_excluded_recipient_response_single", "name-": "resource-sharing-share-excluded-recipient-response-single", "NAME": "RESOURCE_SHARING_SHARE_EXCLUDED_RECIPIENT_RESPONSE_SINGLE", "index$": 46 }, { "active": true, "entity": "resource_sharing_share_excluded_recipient_response_single", "key$": "BasicResourceSharingShareExcludedRecipientResponseSingleFlow", "kind": "basic", "name": "BasicResourceSharingShareExcludedRecipientResponseSingleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "resource_sharing_share_excluded_recipient_response_single_ref01" }, "m": { "account_id": "account01", "share_id": "share01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "resource_sharing_share_excluded_recipient_response_single_ref01", "srcdatavar": "resource_sharing_share_excluded_recipient_response_single_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "resource_sharing_share_excluded_recipient_response_single01", "share_id": "share01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-resource_sharing_share_excluded_recipient_response_single_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "resource_sharing_share_excluded_recipient_response_single_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "resource_sharing_share_excluded_recipient_response_single01", "share_id": "share01" }, "o": "remove", "s": [], "v": [], "index$": 2 }] }, 'ResourceSharingShareExcludedRecipientResponseSingle', { "POST /accounts/{account_id}/shares/{share_id}/excluded-recipients": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "account_id": { "description": "The account to exclude from the organization-targeted share.", "allOf": [{ "description": "Account identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_account_id" }], "key$": "account_id" } }, "required": ["account_id"], "x-ref": "#/components/schemas/resource-sharing_create_share_excluded_recipient_request", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_account_id" }, "index$": 0 }, { "name": "share_id", "in": "path", "required": true, "schema": { "description": "Share identifier tag.", "type": "string", "example": "3fd85f74b32742f1bff64a85009dda07", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_share_id" }, "index$": 1 }] }, "GET /accounts/{account_id}/shares/{share_id}/excluded-recipients/{excluded_recipient_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_account_id" }, "index$": 0 }, { "name": "share_id", "in": "path", "required": true, "schema": { "description": "Share identifier tag.", "type": "string", "example": "3fd85f74b32742f1bff64a85009dda07", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_share_id" }, "index$": 1 }, { "name": "excluded_recipient_id", "in": "path", "required": true, "schema": { "description": "Share Excluded Recipient identifier tag.", "type": "string", "example": "4ae96b85c43850f2c0a7b9101a0eeb18", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_excluded_recipient_id" }, "index$": 2 }] }, "DELETE /accounts/{account_id}/shares/{share_id}/excluded-recipients/{excluded_recipient_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_account_id" }, "index$": 0 }, { "name": "share_id", "in": "path", "required": true, "schema": { "description": "Share identifier tag.", "type": "string", "example": "3fd85f74b32742f1bff64a85009dda07", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_share_id" }, "index$": 1 }, { "name": "excluded_recipient_id", "in": "path", "required": true, "schema": { "description": "Share Excluded Recipient identifier tag.", "type": "string", "example": "4ae96b85c43850f2c0a7b9101a0eeb18", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_excluded_recipient_id" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const resource_sharing_share_excluded_recipient_response_single_ref01_ent = client.ResourceSharingShareExcludedRecipientResponseSingle();
        let resource_sharing_share_excluded_recipient_response_single_ref01_data = setup.data.new.resource_sharing_share_excluded_recipient_response_single['resource_sharing_share_excluded_recipient_response_single_ref01'];
        resource_sharing_share_excluded_recipient_response_single_ref01_data['account_id'] = setup.idmap['account01'];
        resource_sharing_share_excluded_recipient_response_single_ref01_data['share_id'] = setup.idmap['share01'];
        resource_sharing_share_excluded_recipient_response_single_ref01_data = (await resource_sharing_share_excluded_recipient_response_single_ref01_ent.create(resource_sharing_share_excluded_recipient_response_single_ref01_data)).data();
        (0, node_assert_1.default)(null != resource_sharing_share_excluded_recipient_response_single_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/resource_sharing_share_excluded_recipient_response_single/ResourceSharingShareExcludedRecipientResponseSingleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareIdentitySDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['resource_sharing_share_excluded_recipient_response_single01', 'resource_sharing_share_excluded_recipient_response_single02', 'resource_sharing_share_excluded_recipient_response_single03', 'account01', 'account02', 'account03', 'share01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_EXCLUDED_RECIPIENT_RESPONSE_SINGLE_ENTID': idmap,
        'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_IDENTITY_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_EXCLUDED_RECIPIENT_RESPONSE_SINGLE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_EXCLUDED_RECIPIENT_RESPONSE_SINGLE_ENTID'];
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
//# sourceMappingURL=ResourceSharingShareExcludedRecipientResponseSingleEntity.test.js.map