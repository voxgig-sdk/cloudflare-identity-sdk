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
(0, node_test_1.describe)('AccountUserGroupMemberEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_IDENTITY_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareIdentitySDK.test();
        const ent = testsdk.AccountUserGroupMember();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'account_user_group_member.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "list": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "Detailed member information for a User Group member.", "t": "`$OBJECT`", "key$": "result", "index$": 1 } }, "id": { "field": "id", "name": "id" }, "name": "account_user_group_member", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/iam/user_groups/{user_group_id}/members", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "user_group_id", "or": "user_group_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/iam/user_groups/{user_group_id}/members", "q": { "exist": ["account_id", "user_group_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "iam" }, { "lit": "user_groups" }, { "var": "user_group_id" }, { "lit": "members" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/iam/user_groups/{user_group_id}/members", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "user_group_id", "or": "user_group_id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": "asc", "k": "query", "n": "direction", "or": "direction", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "user@", "k": "query", "n": "fuzzy_email", "or": "fuzzy_email", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$NUMBER`", "index$": 2 }, { "a": true, "ex": 100, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$NUMBER`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/iam/user_groups/{user_group_id}/members", "q": { "exist": ["account_id", "direction", "fuzzy_email", "page", "per_page", "user_group_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "iam" }, { "lit": "user_groups" }, { "var": "user_group_id" }, { "lit": "members" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/iam/user_groups/{user_group_id}/members/{member_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "member_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "user_group_id", "or": "user_group_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/iam/user_groups/{user_group_id}/members/{member_id}", "q": { "exist": ["account_id", "id", "user_group_id"] }, "r": { "param": { "member_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "iam" }, { "lit": "user_groups" }, { "var": "user_group_id" }, { "lit": "members" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/iam/user_groups/{user_group_id}/members/{member_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "member_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "user_group_id", "or": "user_group_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/iam/user_groups/{user_group_id}/members/{member_id}", "q": { "exist": ["account_id", "id", "user_group_id"] }, "r": { "param": { "member_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "iam" }, { "lit": "user_groups" }, { "var": "user_group_id" }, { "lit": "members" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/iam/user_groups/{user_group_id}/members", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "user_group_id", "or": "user_group_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/iam/user_groups/{user_group_id}/members", "q": { "exist": ["account_id", "user_group_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "iam" }, { "lit": "user_groups" }, { "var": "user_group_id" }, { "lit": "members" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.account", "$.main.kit.entity.user_group"]] }, "key$": "account_user_group_member", "name__orig": "account_user_group_member", "Name": "AccountUserGroupMember", "name_": "account_user_group_member", "name-": "account-user-group-member", "NAME": "ACCOUNT_USER_GROUP_MEMBER", "index$": 5 }, { "active": true, "entity": "account_user_group_member", "key$": "BasicAccountUserGroupMemberFlow", "kind": "basic", "name": "BasicAccountUserGroupMemberFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "account_user_group_member_ref01" }, "m": { "account_id": "account01", "user_group_id": "user_group01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01", "user_group_id": "user_group01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "account_user_group_member_ref01" } }], "index$": 1 }, { "a": true, "d": { "account_id": "account01" }, "i": { "ref": "account_user_group_member_ref01", "srcdatavar": "account_user_group_member_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-account_user_group_member_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "account_user_group_member_ref01", "srcdatavar": "account_user_group_member_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "account_user_group_member01", "user_group_id": "user_group01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-account_user_group_member_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "account_user_group_member_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "account_user_group_member01", "user_group_id": "user_group01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "account_id": "account01", "user_group_id": "user_group01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "account_user_group_member_ref01" } }], "index$": 5 }] }, 'AccountUserGroupMember', { "POST /accounts/{account_id}/iam/user_groups/{user_group_id}/members": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "array", "items": { "properties": { "id": { "description": "The identifier of an existing account Member.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "User Group Member Identifier", "x-ref": "#/components/schemas/iam_user_group_member_identifier" } }, "required": ["id"], "type": "object" }, "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "Account Identifier", "x-ref": "#/components/schemas/iam_account_identifier" }, "index$": 0 }, { "name": "user_group_id", "in": "path", "required": true, "schema": { "description": "User Group identifier tag.", "allOf": [{ "description": "Identifier", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "User Group Identifier", "x-ref": "#/components/schemas/iam_user_group_identifier" }, "index$": 1 }] }, "GET /accounts/{account_id}/iam/user_groups/{user_group_id}/members": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "Account Identifier", "x-ref": "#/components/schemas/iam_account_identifier" }, "index$": 0 }, { "name": "user_group_id", "in": "path", "required": true, "schema": { "description": "User Group identifier tag.", "allOf": [{ "description": "Identifier", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "User Group Identifier", "x-ref": "#/components/schemas/iam_user_group_identifier" }, "index$": 1 }, { "name": "page", "in": "query", "schema": { "description": "Page number of paginated results.", "type": "number", "default": 1, "minimum": 1 }, "index$": 2 }, { "name": "per_page", "in": "query", "schema": { "description": "Maximum number of results per page.", "type": "number", "default": 100, "maximum": 500, "minimum": 1 }, "index$": 3 }, { "name": "fuzzyEmail", "in": "query", "schema": { "description": "A string used for filtering members by partial email match.", "type": "string", "example": "user@" }, "index$": 4 }, { "name": "direction", "in": "query", "schema": { "description": "The sort order of returned user group members by email.", "type": "string", "default": "asc", "enum": ["asc", "desc"] }, "index$": 5 }] }, "GET /accounts/{account_id}/iam/user_groups/{user_group_id}/members/{member_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "Account Identifier", "x-ref": "#/components/schemas/iam_account_identifier" }, "index$": 0 }, { "name": "user_group_id", "in": "path", "required": true, "schema": { "description": "User Group identifier tag.", "allOf": [{ "description": "Identifier", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "User Group Identifier", "x-ref": "#/components/schemas/iam_user_group_identifier" }, "index$": 1 }, { "name": "member_id", "in": "path", "required": true, "schema": { "description": "The identifier of an existing account Member.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "User Group Member Identifier", "x-ref": "#/components/schemas/iam_user_group_member_identifier" }, "index$": 2 }] }, "DELETE /accounts/{account_id}/iam/user_groups/{user_group_id}/members/{member_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "Account Identifier", "x-ref": "#/components/schemas/iam_account_identifier" }, "index$": 0 }, { "name": "user_group_id", "in": "path", "required": true, "schema": { "description": "User Group identifier tag.", "allOf": [{ "description": "Identifier", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "User Group Identifier", "x-ref": "#/components/schemas/iam_user_group_identifier" }, "index$": 1 }, { "name": "member_id", "in": "path", "required": true, "schema": { "description": "The identifier of an existing account Member.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "User Group Member Identifier", "x-ref": "#/components/schemas/iam_user_group_member_identifier" }, "index$": 2 }] }, "PUT /accounts/{account_id}/iam/user_groups/{user_group_id}/members": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "Set/Replace members to a user group.", "type": "array", "items": { "properties": { "id": { "description": "The identifier of an existing account Member.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "User Group Member Identifier", "x-ref": "#/components/schemas/iam_user_group_member_identifier" } }, "required": ["id"], "type": "object" }, "title": "Update User Group Members", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier tag.", "allOf": [{ "description": "Identifier", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "Account Identifier", "x-ref": "#/components/schemas/iam_account_identifier" }, "index$": 0 }, { "name": "user_group_id", "in": "path", "required": true, "schema": { "description": "User Group identifier tag.", "allOf": [{ "description": "Identifier", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 32, "type": "string", "x-auditable": true, "x-ref": "#/components/schemas/iam_common_components-schemas-identifier" }], "title": "User Group Identifier", "x-ref": "#/components/schemas/iam_user_group_identifier" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const account_user_group_member_ref01_ent = client.AccountUserGroupMember();
        let account_user_group_member_ref01_data = setup.data.new.account_user_group_member['account_user_group_member_ref01'];
        account_user_group_member_ref01_data['account_id'] = setup.idmap['account01'];
        account_user_group_member_ref01_data['user_group_id'] = setup.idmap['user_group01'];
        account_user_group_member_ref01_data = (await account_user_group_member_ref01_ent.create(account_user_group_member_ref01_data)).data();
        (0, node_assert_1.default)(null != account_user_group_member_ref01_data.id);
        // LIST
        const account_user_group_member_ref01_match = {};
        account_user_group_member_ref01_match['account_id'] = setup.idmap['account01'];
        account_user_group_member_ref01_match['user_group_id'] = setup.idmap['user_group01'];
        const account_user_group_member_ref01_list = (await account_user_group_member_ref01_ent.list(account_user_group_member_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(account_user_group_member_ref01_list, { id: account_user_group_member_ref01_data.id })));
        // UPDATE
        const account_user_group_member_ref01_data_up0 = {};
        account_user_group_member_ref01_data_up0.id = account_user_group_member_ref01_data.id;
        account_user_group_member_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        const account_user_group_member_ref01_resdata_up0 = (await account_user_group_member_ref01_ent.update(account_user_group_member_ref01_data_up0)).data();
        (0, node_assert_1.default)(account_user_group_member_ref01_resdata_up0.id === account_user_group_member_ref01_data_up0.id);
        // LOAD
        const account_user_group_member_ref01_match_dt0 = {};
        account_user_group_member_ref01_match_dt0.id = account_user_group_member_ref01_data.id;
        const account_user_group_member_ref01_data_dt0 = (await account_user_group_member_ref01_ent.load(account_user_group_member_ref01_match_dt0)).data();
        (0, node_assert_1.default)(account_user_group_member_ref01_data_dt0.id === account_user_group_member_ref01_data.id);
        // REMOVE
        const account_user_group_member_ref01_match_rm0 = { id: account_user_group_member_ref01_data.id };
        await account_user_group_member_ref01_ent.remove(account_user_group_member_ref01_match_rm0);
        // LIST
        const account_user_group_member_ref01_match_rt0 = {};
        account_user_group_member_ref01_match_rt0['account_id'] = setup.idmap['account01'];
        account_user_group_member_ref01_match_rt0['user_group_id'] = setup.idmap['user_group01'];
        const account_user_group_member_ref01_list_rt0 = (await account_user_group_member_ref01_ent.list(account_user_group_member_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(account_user_group_member_ref01_list_rt0, { id: account_user_group_member_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/account_user_group_member/AccountUserGroupMemberTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareIdentitySDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['account_user_group_member01', 'account_user_group_member02', 'account_user_group_member03', 'account01', 'account02', 'account03', 'user_group01', 'user_group02', 'user_group03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_IDENTITY_TEST_ACCOUNT_USER_GROUP_MEMBER_ENTID': idmap,
        'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_IDENTITY_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_IDENTITY_TEST_ACCOUNT_USER_GROUP_MEMBER_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_ACCOUNT_USER_GROUP_MEMBER_ENTID'];
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
//# sourceMappingURL=AccountUserGroupMemberEntity.test.js.map