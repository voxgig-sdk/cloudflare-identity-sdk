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
(0, node_test_1.describe)('ResourceSharingShareResponseSingleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_IDENTITY_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareIdentitySDK.test();
        const ent = testsdk.ResourceSharingShareResponseSingle();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE;
        for (const op of ['create', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'resource_sharing_share_response_single.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "The name of the share.", "t": "`$STRING`", "key$": "name", "index$": 1 }, "recipients": { "a": true, "h": "Recipients", "n": "recipients", "r": true, "t": "`$ARRAY`", "key$": "recipients", "index$": 2 }, "resources": { "a": true, "h": "Resources", "n": "resources", "r": true, "t": "`$ARRAY`", "key$": "resources", "index$": 3 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "load": { "req": true, "type": "`$ANY`" } }, "r": false, "t": "`$ANY`", "union": { "branches": 3, "count": 1, "depth": 0 }, "key$": "result", "index$": 4 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 5 } }, "name": "resource_sharing_share_response_single", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/shares", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/shares", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "shares" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/shares/{share_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "3fd85f74b32742f1bff64a85009dda07", "k": "param", "n": "share_id", "or": "share_id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": true, "k": "query", "n": "include_recipient_count", "or": "include_recipient_count", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "ex": true, "k": "query", "n": "include_resource", "or": "include_resource", "r": false, "t": "`$BOOLEAN`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/shares/{share_id}", "q": { "exist": ["account_id", "include_recipient_count", "include_resource", "share_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "shares" }, { "var": "share_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/shares/{share_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "3fd85f74b32742f1bff64a85009dda07", "k": "param", "n": "share_id", "or": "share_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/shares/{share_id}", "q": { "exist": ["account_id", "share_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "shares" }, { "var": "share_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/shares/{share_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "3fd85f74b32742f1bff64a85009dda07", "k": "param", "n": "share_id", "or": "share_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/shares/{share_id}", "q": { "exist": ["account_id", "share_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "shares" }, { "var": "share_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.account"], ["$.main.kit.entity.account"]] }, "key$": "resource_sharing_share_response_single", "name__orig": "resource_sharing_share_response_single", "Name": "ResourceSharingShareResponseSingle", "name_": "resource_sharing_share_response_single", "name-": "resource-sharing-share-response-single", "NAME": "RESOURCE_SHARING_SHARE_RESPONSE_SINGLE", "index$": 50 }, { "active": true, "entity": "resource_sharing_share_response_single", "key$": "BasicResourceSharingShareResponseSingleFlow", "kind": "basic", "name": "BasicResourceSharingShareResponseSingleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "resource_sharing_share_response_single_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "resource_sharing_share_response_single_ref01", "srcdatavar": "resource_sharing_share_response_single_ref01_data", "suffix": "_up0", "textfield": "name" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-resource_sharing_share_response_single_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "resource_sharing_share_response_single_ref01", "srcdatavar": "resource_sharing_share_response_single_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "resource_sharing_share_response_single01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-resource_sharing_share_response_single_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "resource_sharing_share_response_single_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "resource_sharing_share_response_single01" }, "o": "remove", "s": [], "v": [], "index$": 3 }] }, 'ResourceSharingShareResponseSingle', { "POST /accounts/{account_id}/shares": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "description": "The name of the share.", "type": "string", "example": "My Shared WAF Managed Rule", "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_share_name", "key$": "name" }, "recipients": { "type": "array", "items": { "description": "Optionally specify `recipient_account_id` to target a specific account, or `organization_id` to target the caller's whole organization. If neither is provided, the caller's organization is used.\nThe legacy field `account_id` is accepted as a synonym for `recipient_account_id` during the deprecation period (see `x-sunset` on that field).\n", "type": "object", "properties": { "account_id": { "description": "Deprecated alias for `recipient_account_id`. Use `recipient_account_id` instead.\nThe body field collided with the URL path parameter of the same name, which prevented SDK generators from distinguishing the source account (in the URL) from the recipient account (in the body). Both names will continue to be accepted until 2027-05-26 (see `x-sunset`).\n", "allOf": [], "deprecated": true, "x-stainless-deprecation-message": "This field has been renamed to `recipient_account_id`. Both names are accepted during the deprecation period.", "x-stainless-skip": [], "key$": "account_id" }, "organization_id": { "description": "Organization identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_organization_id", "key$": "organization_id" }, "recipient_account_id": { "description": "The account that will receive the share.", "allOf": [], "key$": "recipient_account_id" } }, "x-ref": "#/components/schemas/resource-sharing_create_share_recipient_request" }, "key$": "recipients" }, "resources": { "type": "array", "items": { "type": "object", "properties": { "meta": { "description": "Resource Metadata.", "type": "object", "x-ref": "#/components/schemas/resource-sharing_resource_meta", "key$": "meta" }, "resource_account_id": { "description": "Account identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_account_id", "key$": "resource_account_id" }, "resource_id": { "description": "Share Resource identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_resource_resource_id", "key$": "resource_id" }, "resource_type": { "description": "Resource Type.", "type": "string", "enum": [], "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_resource_type", "key$": "resource_type" } }, "required": ["resource_id", "resource_type", "resource_account_id", "meta"], "x-ref": "#/components/schemas/resource-sharing_create_share_resource_request" }, "key$": "resources" } }, "required": ["name", "resources", "recipients"], "x-ref": "#/components/schemas/resource-sharing_create_share_request", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_account_id" }, "index$": 0 }] }, "GET /accounts/{account_id}/shares/{share_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_account_id" }, "index$": 0 }, { "name": "share_id", "in": "path", "required": true, "schema": { "description": "Share identifier tag.", "type": "string", "example": "3fd85f74b32742f1bff64a85009dda07", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_share_id" }, "index$": 1 }, { "description": "Include resources in the response.", "in": "query", "name": "include_resources", "schema": { "type": "boolean", "example": true }, "x-ref": "#/components/parameters/resource-sharing_include_resources", "index$": 2 }, { "description": "Include recipient counts in the response.", "in": "query", "name": "include_recipient_counts", "schema": { "type": "boolean", "example": true }, "x-ref": "#/components/parameters/resource-sharing_include_recipient_counts", "index$": 3 }] }, "DELETE /accounts/{account_id}/shares/{share_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_account_id" }, "index$": 0 }, { "name": "share_id", "in": "path", "required": true, "schema": { "description": "Share identifier tag.", "type": "string", "example": "3fd85f74b32742f1bff64a85009dda07", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_share_id" }, "index$": 1 }] }, "PUT /accounts/{account_id}/shares/{share_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "Request body for `PUT /accounts/{account_id}/shares/{share_id}`. The\nshare's display `name` and `tags` can be updated via this endpoint. To\nmodify recipients, use the\n`/accounts/{account_id}/shares/{share_id}/recipients` subresource\nendpoints (POST, PUT, DELETE).\n", "type": "object", "properties": { "name": { "description": "The name of the share.", "type": "string", "example": "My Shared WAF Managed Rule", "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_share_name", "key$": "name" } }, "required": ["name"], "x-ref": "#/components/schemas/resource-sharing_update_share_request", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_account_id" }, "index$": 0 }, { "name": "share_id", "in": "path", "required": true, "schema": { "description": "Share identifier tag.", "type": "string", "example": "3fd85f74b32742f1bff64a85009dda07", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_share_id" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const resource_sharing_share_response_single_ref01_ent = client.ResourceSharingShareResponseSingle();
        let resource_sharing_share_response_single_ref01_data = setup.data.new.resource_sharing_share_response_single['resource_sharing_share_response_single_ref01'];
        resource_sharing_share_response_single_ref01_data['account_id'] = setup.idmap['account01'];
        resource_sharing_share_response_single_ref01_data = (await resource_sharing_share_response_single_ref01_ent.create(resource_sharing_share_response_single_ref01_data)).data();
        (0, node_assert_1.default)(null != resource_sharing_share_response_single_ref01_data);
        // UPDATE
        const resource_sharing_share_response_single_ref01_data_up0 = {};
        resource_sharing_share_response_single_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const resource_sharing_share_response_single_ref01_markdef_up0 = { name: 'name', value: 'Mark01-resource_sharing_share_response_single_ref01_' + setup.now };
        resource_sharing_share_response_single_ref01_data_up0[resource_sharing_share_response_single_ref01_markdef_up0.name] = resource_sharing_share_response_single_ref01_markdef_up0.value;
        const resource_sharing_share_response_single_ref01_resdata_up0 = (await resource_sharing_share_response_single_ref01_ent.update(resource_sharing_share_response_single_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != resource_sharing_share_response_single_ref01_resdata_up0);
        (0, node_assert_1.default)(resource_sharing_share_response_single_ref01_resdata_up0[resource_sharing_share_response_single_ref01_markdef_up0.name] === resource_sharing_share_response_single_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/resource_sharing_share_response_single/ResourceSharingShareResponseSingleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareIdentitySDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['resource_sharing_share_response_single01', 'resource_sharing_share_response_single02', 'resource_sharing_share_response_single03', 'account01', 'account02', 'account03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_RESPONSE_SINGLE_ENTID': idmap,
        'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_IDENTITY_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_RESPONSE_SINGLE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_RESPONSE_SINGLE_ENTID'];
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
//# sourceMappingURL=ResourceSharingShareResponseSingleEntity.test.js.map