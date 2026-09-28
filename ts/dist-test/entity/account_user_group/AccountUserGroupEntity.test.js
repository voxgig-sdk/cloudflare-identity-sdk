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
(0, node_test_1.describe)('AccountUserGroupEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_IDENTITY_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareIdentitySDK.test();
        const ent = testsdk.AccountUserGroup();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'account_user_group.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Name of the User group.", "t": "`$STRING`", "key$": "name", "index$": 1 }, "policies": { "a": true, "h": "Policies", "n": "policies", "r": false, "sh": "Policies attached to the User group", "t": "`$ARRAY`", "key$": "policies", "index$": 2 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "list": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "A group of policies resources.", "t": "`$OBJECT`", "key$": "result", "index$": 3 } }, "id": { "field": "id", "name": "id" }, "name": "account_user_group", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/iam/user_groups", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/iam/user_groups", "q": { "exist": ["account_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "iam" }, { "lit": "user_groups" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/iam/user_groups", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "desc", "k": "query", "n": "direction", "or": "direction", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "Foo", "k": "query", "n": "fuzzy_name", "or": "fuzzy_name", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "id", "or": "id", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "NameOfTheUserGroup", "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$NUMBER`", "index$": 4 }, { "a": true, "ex": 100, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$NUMBER`", "index$": 5 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/iam/user_groups", "q": { "exist": ["account_id", "direction", "fuzzy_name", "id", "name", "page", "per_page"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "iam" }, { "lit": "user_groups" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/iam/user_groups/{user_group_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "user_group_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/iam/user_groups/{user_group_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "user_group_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "iam" }, { "lit": "user_groups" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/iam/user_groups/{user_group_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "user_group_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/iam/user_groups/{user_group_id}", "q": { "exist": ["account_id", "id"] }, "r": { "param": { "user_group_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "iam" }, { "lit": "user_groups" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.account"]] }, "key$": "account_user_group", "name__orig": "account_user_group", "Name": "AccountUserGroup", "name_": "account_user_group", "name-": "account-user-group", "NAME": "ACCOUNT_USER_GROUP", "index$": 4 }, { "active": true, "entity": "account_user_group", "key$": "BasicAccountUserGroupFlow", "kind": "basic", "name": "BasicAccountUserGroupFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "account_user_group_ref01" }, "m": { "account_id": "account01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "account_user_group_ref01" } }], "index$": 1 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "account_user_group_ref01", "srcdatavar": "account_user_group_ref01_data", "suffix": "_up0", "textfield": "name" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-account_user_group_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "account_user_group_ref01", "srcdatavar": "account_user_group_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "account_user_group01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-account_user_group_ref01" } }], "index$": 3 }] }, 'AccountUserGroup', { "POST /accounts/{account_id}/iam/user_groups": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "description": "Name of the User group.", "type": "string", "example": "My New User Group", "x-auditable": true, "key$": "name" }, "policies": { "description": "Policies attached to the User group", "type": "array", "items": { "properties": { "access": { "description": "Allow or deny operations against the resources.", "type": "string", "example": "allow", "enum": [], "x-auditable": true, "x-ref": "#/components/schemas/iam_access" }, "permission_groups": { "description": "A set of permission groups that are specified to the policy.", "type": "array", "items": {}, "example": [], "title": "Permission Group IDs", "x-ref": "#/components/schemas/iam_permission_group_ids" }, "resource_groups": { "description": "A set of resource groups that are specified to the policy.", "type": "array", "items": {}, "example": [], "title": "Resource Group IDs", "x-ref": "#/components/schemas/iam_resource_group_ids" } }, "required": ["access", "permission_groups", "resource_groups"], "x-ref": "#/components/schemas/iam_user_group_policy_write_body" }, "title": "User Group Policies", "key$": "policies" } }, "required": ["name"], "title": "Create User group with a set of policies", "x-ref": "#/components/schemas/iam_create_user_group_body", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "Account Identifier", "x-ref": "#/components/schemas/iam_account_identifier" }, "index$": 0 }] }, "GET /accounts/{account_id}/iam/user_groups": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "Account Identifier", "x-ref": "#/components/schemas/iam_account_identifier" }, "index$": 0 }, { "name": "id", "in": "query", "description": "ID of the user group to be fetched.", "schema": { "description": "User Group identifier tag.", "allOf": [{ "description": "Identifier", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "User Group Identifier", "x-ref": "#/components/schemas/iam_user_group_identifier" }, "index$": 1 }, { "name": "name", "in": "query", "schema": { "description": "Name of the user group to be fetched.", "type": "string", "example": "NameOfTheUserGroup" }, "index$": 2 }, { "name": "fuzzyName", "in": "query", "schema": { "description": "A string used for searching for user groups containing that substring.", "type": "string", "example": "Foo" }, "index$": 3 }, { "name": "page", "in": "query", "schema": { "description": "Page number of paginated results.", "type": "number", "default": 1, "minimum": 1 }, "index$": 4 }, { "name": "per_page", "in": "query", "schema": { "description": "Maximum number of results per page.", "type": "number", "default": 100, "maximum": 500, "minimum": 1 }, "index$": 5 }, { "name": "direction", "in": "query", "schema": { "description": "The sort order of returned user groups by name (ascending or descending).", "type": "string", "example": "desc", "default": "asc", "enum": ["asc", "desc"] }, "index$": 6 }] }, "GET /accounts/{account_id}/iam/user_groups/{user_group_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "Account Identifier", "x-ref": "#/components/schemas/iam_account_identifier" }, "index$": 0 }, { "name": "user_group_id", "in": "path", "required": true, "schema": { "description": "User Group identifier tag.", "allOf": [{ "description": "Identifier", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "User Group Identifier", "x-ref": "#/components/schemas/iam_user_group_identifier" }, "index$": 1 }] }, "PUT /accounts/{account_id}/iam/user_groups/{user_group_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "name": { "description": "Name of the User group.", "type": "string", "example": "My New User Group", "key$": "name" }, "policies": { "description": "Policies attached to the User group", "type": "array", "items": { "allOf": [{ "properties": {}, "required": [], "type": "object" }, { "properties": {}, "required": [], "x-ref": "#/components/schemas/iam_user_group_policy_write_body" }] }, "title": "User Group Policies", "key$": "policies" } }, "title": "Create User group with a set of policies", "x-ref": "#/components/schemas/iam_update_user_group_body", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "Account Identifier", "x-ref": "#/components/schemas/iam_account_identifier" }, "index$": 0 }, { "name": "user_group_id", "in": "path", "required": true, "schema": { "description": "User Group identifier tag.", "allOf": [{ "description": "Identifier", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "User Group Identifier", "x-ref": "#/components/schemas/iam_user_group_identifier" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const account_user_group_ref01_ent = client.AccountUserGroup();
        let account_user_group_ref01_data = setup.data.new.account_user_group['account_user_group_ref01'];
        account_user_group_ref01_data['account_id'] = setup.idmap['account01'];
        account_user_group_ref01_data = (await account_user_group_ref01_ent.create(account_user_group_ref01_data)).data();
        (0, node_assert_1.default)(null != account_user_group_ref01_data.id);
        // LIST
        const account_user_group_ref01_match = {};
        account_user_group_ref01_match['account_id'] = setup.idmap['account01'];
        const account_user_group_ref01_list = (await account_user_group_ref01_ent.list(account_user_group_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(account_user_group_ref01_list, { id: account_user_group_ref01_data.id })));
        // UPDATE
        const account_user_group_ref01_data_up0 = {};
        account_user_group_ref01_data_up0.id = account_user_group_ref01_data.id;
        account_user_group_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const account_user_group_ref01_markdef_up0 = { name: 'name', value: 'Mark01-account_user_group_ref01_' + setup.now };
        account_user_group_ref01_data_up0[account_user_group_ref01_markdef_up0.name] = account_user_group_ref01_markdef_up0.value;
        const account_user_group_ref01_resdata_up0 = (await account_user_group_ref01_ent.update(account_user_group_ref01_data_up0)).data();
        (0, node_assert_1.default)(account_user_group_ref01_resdata_up0.id === account_user_group_ref01_data_up0.id);
        (0, node_assert_1.default)(account_user_group_ref01_resdata_up0[account_user_group_ref01_markdef_up0.name] === account_user_group_ref01_markdef_up0.value);
        // LOAD
        const account_user_group_ref01_match_dt0 = {};
        account_user_group_ref01_match_dt0.id = account_user_group_ref01_data.id;
        const account_user_group_ref01_data_dt0 = (await account_user_group_ref01_ent.load(account_user_group_ref01_match_dt0)).data();
        (0, node_assert_1.default)(account_user_group_ref01_data_dt0.id === account_user_group_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/account_user_group/AccountUserGroupTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareIdentitySDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['account_user_group01', 'account_user_group02', 'account_user_group03', 'account01', 'account02', 'account03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_IDENTITY_TEST_ACCOUNT_USER_GROUP_ENTID': idmap,
        'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_IDENTITY_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_IDENTITY_TEST_ACCOUNT_USER_GROUP_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_ACCOUNT_USER_GROUP_ENTID'];
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
//# sourceMappingURL=AccountUserGroupEntity.test.js.map