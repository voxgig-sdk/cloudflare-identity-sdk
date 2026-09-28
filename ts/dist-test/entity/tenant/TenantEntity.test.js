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
(0, node_test_1.describe)('TenantEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_IDENTITY_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareIdentitySDK.test();
        const ent = testsdk.Tenant();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'tenant.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 1 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 2 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$OBJECT`", "key$": "result", "index$": 3 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "t": "`$BOOLEAN`", "key$": "success", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "tenant", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /tenants/{tenant_id}/accounts", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "tenant_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/tenants/{tenant_id}/accounts", "q": { "$action": "account", "exist": ["id"] }, "r": { "param": { "tenant_id": "id" } }, "s": [{ "lit": "tenants" }, { "var": "id" }, { "lit": "accounts" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /tenants/{tenant_id}/account_types", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "tenant_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/tenants/{tenant_id}/account_types", "q": { "$action": "account_type", "exist": ["id"] }, "r": { "param": { "tenant_id": "id" } }, "s": [{ "lit": "tenants" }, { "var": "id" }, { "lit": "account_types" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /tenants/{tenant_id}/entitlements", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "tenant_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/tenants/{tenant_id}/entitlements", "q": { "$action": "entitlement", "exist": ["id"] }, "r": { "param": { "tenant_id": "id" } }, "s": [{ "lit": "tenants" }, { "var": "id" }, { "lit": "entitlements" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "GET /tenants/{tenant_id}/memberships", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "tenant_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/tenants/{tenant_id}/memberships", "q": { "$action": "membership", "exist": ["id"] }, "r": { "param": { "tenant_id": "id" } }, "s": [{ "lit": "tenants" }, { "var": "id" }, { "lit": "memberships" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /tenants/{tenant_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "tenant_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/tenants/{tenant_id}", "q": { "exist": ["id"] }, "r": { "param": { "tenant_id": "id" } }, "s": [{ "lit": "tenants" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "tenant", "name__orig": "tenant", "Name": "Tenant", "name_": "tenant", "name-": "tenant", "NAME": "TENANT", "index$": 55 }, { "active": true, "entity": "tenant", "key$": "BasicTenantFlow", "kind": "basic", "name": "BasicTenantFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "tenant_id": "tenant01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "tenant_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "tenant_ref01", "srcdatavar": "tenant_ref01_data", "suffix": "_dt0" }, "m": { "id": "tenant01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-tenant_ref01" } }], "index$": 1 }] }, 'Tenant', { "GET /tenants/{tenant_id}/accounts": { "protocol": "http", "parameters": [{ "name": "tenant_id", "in": "path", "description": "The ID of the tenant whose accounts to list.", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /tenants/{tenant_id}/account_types": { "protocol": "http", "parameters": [{ "name": "tenant_id", "in": "path", "description": "The ID of the tenant whose available account types to list.", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /tenants/{tenant_id}/entitlements": { "protocol": "http", "parameters": [{ "name": "tenant_id", "in": "path", "description": "The ID of the tenant whose entitlement allocations to retrieve.", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /tenants/{tenant_id}/memberships": { "protocol": "http", "parameters": [{ "name": "tenant_id", "in": "path", "description": "The ID of the tenant whose active memberships to list.", "required": true, "schema": { "type": "string" }, "index$": 0 }] }, "GET /tenants/{tenant_id}": { "protocol": "http", "parameters": [{ "name": "tenant_id", "in": "path", "description": "The ID of the tenant to retrieve.", "required": true, "schema": { "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let tenant_ref01_data = Object.values(setup.data.existing.tenant)[0];
        // LIST
        const tenant_ref01_ent = client.Tenant();
        const tenant_ref01_match = {};
        tenant_ref01_match['tenant_id'] = setup.idmap['tenant01'];
        const tenant_ref01_list = (await tenant_ref01_ent.list(tenant_ref01_match)).map((e) => e.data());
        // LOAD
        const tenant_ref01_match_dt0 = {};
        tenant_ref01_match_dt0.id = tenant_ref01_data.id;
        const tenant_ref01_data_dt0 = (await tenant_ref01_ent.load(tenant_ref01_match_dt0)).data();
        (0, node_assert_1.default)(tenant_ref01_data_dt0.id === tenant_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/tenant/TenantTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareIdentitySDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['tenant01', 'tenant02', 'tenant03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_IDENTITY_TEST_TENANT_ENTID': idmap,
        'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_IDENTITY_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_IDENTITY_TEST_TENANT_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_TENANT_ENTID'];
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
//# sourceMappingURL=TenantEntity.test.js.map