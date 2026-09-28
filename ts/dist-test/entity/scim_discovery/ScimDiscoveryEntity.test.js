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
(0, node_test_1.describe)('ScimDiscoveryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_IDENTITY_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareIdentitySDK.test();
        const ent = testsdk.ScimDiscovery();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'scim_discovery.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "scim_discovery", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/scim/v2/ResourceTypes/{resource_type_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "User", "k": "param", "n": "resource_type_id", "or": "resource_type_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/scim/v2/ResourceTypes/{resource_type_id}", "q": { "exist": ["account_id", "resource_type_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "scim" }, { "lit": "v2" }, { "lit": "ResourceTypes" }, { "var": "resource_type_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/scim/v2/Schemas/{schema_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "urn:ietf:params:scim:schemas:core:2.0:User", "k": "param", "n": "schema_id", "or": "schema_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/scim/v2/Schemas/{schema_id}", "q": { "exist": ["account_id", "schema_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "scim" }, { "lit": "v2" }, { "lit": "Schemas" }, { "var": "schema_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/scim/v2/ResourceTypes", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/scim/v2/ResourceTypes", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "scim" }, { "lit": "v2" }, { "lit": "ResourceTypes" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/scim/v2/Schemas", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/scim/v2/Schemas", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "scim" }, { "lit": "v2" }, { "lit": "Schemas" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "co": { "id": "GET /accounts/{account_id}/scim/v2/ServiceProviderConfig", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/scim/v2/ServiceProviderConfig", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "scim" }, { "lit": "v2" }, { "lit": "ServiceProviderConfig" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.account"], ["$.main.kit.entity.account"], ["$.main.kit.entity.account"]] }, "key$": "scim_discovery", "name__orig": "scim_discovery", "Name": "ScimDiscovery", "name_": "scim_discovery", "name-": "scim-discovery", "NAME": "SCIM_DISCOVERY", "index$": 51 }, { "active": true, "entity": "scim_discovery", "key$": "BasicScimDiscoveryFlow", "kind": "basic", "name": "BasicScimDiscoveryFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "scim_discovery_ref01", "srcdatavar": "scim_discovery_ref01_data", "suffix": "_dt0" }, "m": { "id": "scim_discovery01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-scim_discovery_ref01" } }], "index$": 0 }] }, 'ScimDiscovery', { "GET /accounts/{account_id}/scim/v2/ResourceTypes/{resource_type_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "Account Identifier", "x-ref": "#/components/schemas/iam_account_identifier" }, "index$": 0 }, { "name": "resource_type_id", "in": "path", "required": true, "schema": { "description": "The resource type identifier.", "type": "string", "example": "User", "enum": ["User", "Group"] }, "index$": 1 }] }, "GET /accounts/{account_id}/scim/v2/Schemas/{schema_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "Account Identifier", "x-ref": "#/components/schemas/iam_account_identifier" }, "index$": 0 }, { "name": "schema_id", "in": "path", "required": true, "schema": { "description": "The schema URI identifier.", "type": "string", "example": "urn:ietf:params:scim:schemas:core:2.0:User" }, "index$": 1 }] }, "GET /accounts/{account_id}/scim/v2/ResourceTypes": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "Account Identifier", "x-ref": "#/components/schemas/iam_account_identifier" }, "index$": 0 }] }, "GET /accounts/{account_id}/scim/v2/Schemas": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "Account Identifier", "x-ref": "#/components/schemas/iam_account_identifier" }, "index$": 0 }] }, "GET /accounts/{account_id}/scim/v2/ServiceProviderConfig": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "Account Identifier", "x-ref": "#/components/schemas/iam_account_identifier" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let scim_discovery_ref01_data = Object.values(setup.data.existing.scim_discovery)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const scim_discovery_ref01_ent = client.ScimDiscovery();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/scim_discovery/ScimDiscoveryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareIdentitySDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['scim_discovery01', 'scim_discovery02', 'scim_discovery03', 'account01', 'account02', 'account03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_IDENTITY_TEST_SCIM_DISCOVERY_ENTID': idmap,
        'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_IDENTITY_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_IDENTITY_TEST_SCIM_DISCOVERY_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_SCIM_DISCOVERY_ENTID'];
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
//# sourceMappingURL=ScimDiscoveryEntity.test.js.map