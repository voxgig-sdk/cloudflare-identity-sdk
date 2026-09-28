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
(0, node_test_1.describe)('ResourceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_IDENTITY_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_IDENTITY_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareIdentitySDK.test();
        const ent = testsdk.Resource();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_IDENTITY_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'resource.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 1 }, "meta": { "a": true, "h": "Meta", "n": "meta", "r": true, "sh": "Resource Metadata.", "t": "`$OBJECT`", "key$": "meta", "index$": 2 }, "resource_account_id": { "a": true, "h": "Resource Account Id", "n": "resource_account_id", "r": true, "sh": "Account identifier.", "t": "`$STRING`", "key$": "resource_account_id", "index$": 3 }, "resource_id": { "a": true, "h": "Resource Id", "n": "resource_id", "r": true, "sh": "Share Resource identifier.", "t": "`$STRING`", "key$": "resource_id", "index$": 4 }, "resource_type": { "a": true, "h": "Resource Type", "n": "resource_type", "r": true, "sh": "Resource Type.", "t": "`$STRING`", "key$": "resource_type", "index$": 5 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "load": { "req": true, "type": "`$ANY`" } }, "r": false, "t": "`$ANY`", "union": { "branches": 3, "count": 1, "depth": 0 }, "key$": "result", "index$": 6 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "resource", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /accounts/{account_id}/shares/{share_id}/resources", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "3fd85f74b32742f1bff64a85009dda07", "k": "param", "n": "share_id", "or": "share_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/accounts/{account_id}/shares/{share_id}/resources", "q": { "exist": ["account_id", "share_id"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "shares" }, { "var": "share_id" }, { "lit": "resources" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/shares/{share_id}/resources", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "3fd85f74b32742f1bff64a85009dda07", "k": "param", "n": "share_id", "or": "share_id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": 2, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "resource_type", "or": "resource_type", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/shares/{share_id}/resources", "q": { "exist": ["account_id", "page", "per_page", "resource_type", "share_id", "status"] }, "r": {}, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "shares" }, { "var": "share_id" }, { "lit": "resources" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "id", "or": "share_resource_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "3fd85f74b32742f1bff64a85009dda07", "k": "param", "n": "share_id", "or": "share_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}", "q": { "exist": ["account_id", "id", "share_id"] }, "r": { "param": { "share_resource_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "shares" }, { "var": "share_id" }, { "lit": "resources" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "id", "or": "share_resource_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "3fd85f74b32742f1bff64a85009dda07", "k": "param", "n": "share_id", "or": "share_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}", "q": { "exist": ["account_id", "id", "share_id"] }, "r": { "param": { "share_resource_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "shares" }, { "var": "share_id" }, { "lit": "resources" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "account_id", "or": "account_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "id", "or": "share_resource_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "3fd85f74b32742f1bff64a85009dda07", "k": "param", "n": "share_id", "or": "share_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "PUT", "o": "/accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}", "q": { "exist": ["account_id", "id", "share_id"] }, "r": { "param": { "share_resource_id": "id" } }, "s": [{ "lit": "accounts" }, { "var": "account_id" }, { "lit": "shares" }, { "var": "share_id" }, { "lit": "resources" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.account"]] }, "key$": "resource", "name__orig": "resource", "Name": "Resource", "name_": "resource", "name-": "resource", "NAME": "RESOURCE", "index$": 42 }, { "active": true, "entity": "resource", "key$": "BasicResourceFlow", "kind": "basic", "name": "BasicResourceFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "resource_ref01" }, "m": { "account_id": "account01", "share_id": "share01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "account_id": "account01", "share_id": "share01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "resource_ref01" } }], "index$": 1 }, { "a": true, "d": { "account_id": "account01", "share_id": "share01" }, "i": { "ref": "resource_ref01", "srcdatavar": "resource_ref01_data", "suffix": "_up0", "textfield": "resource_account_id" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-resource_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "resource_ref01", "srcdatavar": "resource_ref01_data", "suffix": "_dt0" }, "m": { "account_id": "account01", "id": "resource01", "share_id": "share01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-resource_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "resource_ref01", "suffix": "_rm0" }, "m": { "account_id": "account01", "id": "resource01", "share_id": "share01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "account_id": "account01", "share_id": "share01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "resource_ref01" } }], "index$": 5 }] }, 'Resource', { "POST /accounts/{account_id}/shares/{share_id}/resources": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "meta": { "description": "Resource Metadata.", "type": "object", "x-ref": "#/components/schemas/resource-sharing_resource_meta", "key$": "meta" }, "resource_account_id": { "description": "Account identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_account_id", "key$": "resource_account_id" }, "resource_id": { "description": "Share Resource identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_resource_resource_id", "key$": "resource_id" }, "resource_type": { "description": "Resource Type.", "type": "string", "enum": ["custom-ruleset", "gateway-policy", "gateway-destination-ip", "gateway-block-page-settings", "gateway-extended-email-matching", "idp-federation-grant", "trust-grant"], "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_resource_type", "key$": "resource_type" } }, "required": ["resource_id", "resource_type", "resource_account_id", "meta"], "x-ref": "#/components/schemas/resource-sharing_create_share_resource_request", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_account_id" }, "index$": 0 }, { "name": "share_id", "in": "path", "required": true, "schema": { "description": "Share identifier tag.", "type": "string", "example": "3fd85f74b32742f1bff64a85009dda07", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_share_id" }, "index$": 1 }] }, "GET /accounts/{account_id}/shares/{share_id}/resources": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_account_id" }, "index$": 0 }, { "name": "share_id", "in": "path", "required": true, "schema": { "description": "Share identifier tag.", "type": "string", "example": "3fd85f74b32742f1bff64a85009dda07", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_share_id" }, "index$": 1 }, { "description": "Filter share resources by status.", "in": "query", "name": "status", "schema": { "description": "Resource Status.", "type": "string", "enum": ["active", "deleting", "deleted"], "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_resource_status" }, "x-ref": "#/components/parameters/resource-sharing_resource_status", "index$": 2 }, { "description": "Filter share resources by resource_type.", "in": "query", "name": "resource_type", "schema": { "description": "Resource Type.", "type": "string", "enum": ["custom-ruleset", "gateway-policy", "gateway-destination-ip", "gateway-block-page-settings", "gateway-extended-email-matching", "idp-federation-grant", "trust-grant"], "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_resource_type" }, "x-ref": "#/components/parameters/resource-sharing_resource_type", "index$": 3 }, { "description": "Page number. Defaults to `1` when `per_page` is supplied without\n`page`. May be omitted entirely along with `per_page` to receive a\nnon-paginated response.", "in": "query", "name": "page", "schema": { "type": "integer", "example": 2, "default": 1, "minimum": 1, "multipleOf": 1 }, "x-ref": "#/components/parameters/resource-sharing_page", "index$": 4 }, { "description": "Number of objects to return per page. Defaults to `20` when `page`\nis supplied without `per_page`. May be omitted entirely along with\n`page` to receive a non-paginated response.", "in": "query", "name": "per_page", "schema": { "type": "integer", "example": 20, "default": 20, "maximum": 100, "minimum": 1, "multipleOf": 1 }, "x-ref": "#/components/parameters/resource-sharing_per_page", "index$": 5 }] }, "GET /accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_account_id" }, "index$": 0 }, { "name": "share_id", "in": "path", "required": true, "schema": { "description": "Share identifier tag.", "type": "string", "example": "3fd85f74b32742f1bff64a85009dda07", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_share_id" }, "index$": 1 }, { "name": "share_resource_id", "in": "path", "required": true, "schema": { "description": "Share Resource identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_resource_id" }, "index$": 2 }] }, "DELETE /accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}": { "protocol": "http", "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_account_id" }, "index$": 0 }, { "name": "share_id", "in": "path", "required": true, "schema": { "description": "Share identifier tag.", "type": "string", "example": "3fd85f74b32742f1bff64a85009dda07", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_share_id" }, "index$": 1 }, { "name": "share_resource_id", "in": "path", "required": true, "schema": { "description": "Share Resource identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_resource_id" }, "index$": 2 }] }, "PUT /accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "meta": { "description": "Resource Metadata.", "type": "object", "x-ref": "#/components/schemas/resource-sharing_resource_meta", "key$": "meta" } }, "required": ["meta"], "x-ref": "#/components/schemas/resource-sharing_update_share_resource_request", "index$": 1 } } } }, "parameters": [{ "name": "account_id", "in": "path", "required": true, "schema": { "description": "Account identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_account_id" }, "index$": 0 }, { "name": "share_id", "in": "path", "required": true, "schema": { "description": "Share identifier tag.", "type": "string", "example": "3fd85f74b32742f1bff64a85009dda07", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_share_id" }, "index$": 1 }, { "name": "share_resource_id", "in": "path", "required": true, "schema": { "description": "Share Resource identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/resource-sharing_resource_id" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const resource_ref01_ent = client.Resource();
        let resource_ref01_data = setup.data.new.resource['resource_ref01'];
        resource_ref01_data['account_id'] = setup.idmap['account01'];
        resource_ref01_data['share_id'] = setup.idmap['share01'];
        resource_ref01_data = (await resource_ref01_ent.create(resource_ref01_data)).data();
        (0, node_assert_1.default)(null != resource_ref01_data.id);
        // LIST
        const resource_ref01_match = {};
        resource_ref01_match['account_id'] = setup.idmap['account01'];
        resource_ref01_match['share_id'] = setup.idmap['share01'];
        const resource_ref01_list = (await resource_ref01_ent.list(resource_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(resource_ref01_list, { id: resource_ref01_data.id })));
        // UPDATE
        const resource_ref01_data_up0 = {};
        resource_ref01_data_up0.id = resource_ref01_data.id;
        resource_ref01_data_up0['account_id'] = setup.idmap['account_id'];
        resource_ref01_data_up0['share_id'] = setup.idmap['share_id'];
        const resource_ref01_markdef_up0 = { name: 'resource_account_id', value: 'Mark01-resource_ref01_' + setup.now };
        resource_ref01_data_up0[resource_ref01_markdef_up0.name] = resource_ref01_markdef_up0.value;
        const resource_ref01_resdata_up0 = (await resource_ref01_ent.update(resource_ref01_data_up0)).data();
        (0, node_assert_1.default)(resource_ref01_resdata_up0.id === resource_ref01_data_up0.id);
        (0, node_assert_1.default)(resource_ref01_resdata_up0[resource_ref01_markdef_up0.name] === resource_ref01_markdef_up0.value);
        // LOAD
        const resource_ref01_match_dt0 = {};
        resource_ref01_match_dt0.id = resource_ref01_data.id;
        const resource_ref01_data_dt0 = (await resource_ref01_ent.load(resource_ref01_match_dt0)).data();
        (0, node_assert_1.default)(resource_ref01_data_dt0.id === resource_ref01_data.id);
        // REMOVE
        const resource_ref01_match_rm0 = { id: resource_ref01_data.id };
        await resource_ref01_ent.remove(resource_ref01_match_rm0);
        // LIST
        const resource_ref01_match_rt0 = {};
        resource_ref01_match_rt0['account_id'] = setup.idmap['account01'];
        resource_ref01_match_rt0['share_id'] = setup.idmap['share01'];
        const resource_ref01_list_rt0 = (await resource_ref01_ent.list(resource_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(resource_ref01_list_rt0, { id: resource_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/resource/ResourceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareIdentitySDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['resource01', 'resource02', 'resource03', 'account01', 'account02', 'account03', 'share01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_IDENTITY_TEST_RESOURCE_ENTID': idmap,
        'CLOUDFLARE_IDENTITY_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_IDENTITY_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_IDENTITY_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_IDENTITY_TEST_RESOURCE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_IDENTITY_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_IDENTITY_TEST_RESOURCE_ENTID'];
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
//# sourceMappingURL=ResourceEntity.test.js.map