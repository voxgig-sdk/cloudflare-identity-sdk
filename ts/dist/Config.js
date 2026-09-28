"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'CloudflareIdentity',
        slug: "cloudflare-identity",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
    };
    options = {
        base: "https://api.cloudflare.com/client/v4",
        auth: {
            prefix: '',
            name: 'X-Auth-Email',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            aaa_audit_logs_v2_org_history_response_collection: {},
            aaa_audit_logs_v2_org_response_collection: {},
            account: {},
            account_resource_group: {},
            account_user_group: {},
            account_user_group_member: {},
            begin_verification: {},
            bill_subs_api_client_secret_response_single: {},
            billable_usage_api_v2_usage: {},
            dns_custom_nameservers_empty_response_3: {},
            dns_custom_nameservers_tcns_response_collection: {},
            dns_custom_nameservers_tcns_response_single: {},
            iam_api_response_single_id: {},
            iam_collection_member_response_with_policy: {},
            iam_collection_oauth_client: {},
            iam_collection_oauth_scope: {},
            iam_collection_organization: {},
            iam_collection_permission_group: {},
            iam_collection_role: {},
            iam_collection_token: {},
            iam_oauth_client_rotate_secret: {},
            iam_permissions_group_response_collection: {},
            iam_response_single_value: {},
            iam_schemas_collection_invite: {},
            iam_single_invite: {},
            iam_single_member_response_with_policy: {},
            iam_single_membership_response_with_policy: {},
            iam_single_oauth_client: {},
            iam_single_oauth_client_create: {},
            iam_single_organization: {},
            iam_single_permission_group: {},
            iam_single_role: {},
            iam_single_token: {},
            iam_single_token_create: {},
            iam_sso_connector: {},
            iam_sso_connector_collection: {},
            iam_token_verify_response_single_segment: {},
            member: {},
            oauth_client: {},
            organization: {},
            organization_member: {},
            organizations_api_profile: {},
            resource: {},
            resource_group: {},
            resource_sharing: {},
            resource_sharing_share_excluded_recipient_response_collection: {},
            resource_sharing_share_excluded_recipient_response_single: {},
            resource_sharing_share_recipient_response_collection: {},
            resource_sharing_share_recipient_response_single: {},
            resource_sharing_share_response_collection: {},
            resource_sharing_share_response_single: {},
            scim_discovery: {},
            scim_group: {},
            scim_user: {},
            sso_connector: {},
            tenant: {},
            token: {},
            user: {},
            user_group: {},
            users_account_membership: {},
            users_organization: {},
        }
    };
    entity = {
        "aaa_audit_logs_v2_org_history_response_collection": {
            "fields": [
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "result_info",
                    "title": "Result Info",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Provides information about the result of the request, including count, cursor, and identification quality."
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Indicates whether the API call was successful"
                }
            ],
            "name": "aaa_audit_logs_v2_org_history_response_collection",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{organization_id}/logs/audit/{id}/history",
                            "segments": [
                                {
                                    "lit": "organizations"
                                },
                                {
                                    "var": "organization_id"
                                },
                                {
                                    "lit": "logs"
                                },
                                {
                                    "lit": "audit"
                                },
                                {
                                    "var": "audit_id"
                                },
                                {
                                    "lit": "history"
                                }
                            ],
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "logs",
                                "audit",
                                "{audit_id}",
                                "history"
                            ],
                            "rename": {
                                "param": {
                                    "id": "audit_id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "audit_id",
                                        "orig": "id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "f174be97-19b1-40d6-954d-70cd5fbd52db"
                                    },
                                    {
                                        "name": "organization_id",
                                        "orig": "organization_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a67e14daa5f8dceeb91fe5449ba496ef"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "action_time",
                                        "orig": "action_time",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "2024-10-30T15:00:00Z"
                                    },
                                    {
                                        "name": "before",
                                        "orig": "before",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "2024-10-31"
                                    },
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "Q1buH-__DQqqig7SVYXT-SsMOTGY2Z3Y80W-fGgva7yaDdmPKveucH5ddOcHsJRhNb-xUK8agZQqkJSMAENGO8NU6g=="
                                    },
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "desc"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 25
                                    },
                                    {
                                        "name": "since",
                                        "orig": "since",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "2024-10-30"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "action_time",
                                    "audit_id",
                                    "before",
                                    "cursor",
                                    "direction",
                                    "limit",
                                    "organization_id",
                                    "since"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.organization"
                    ]
                ]
            }
        },
        "aaa_audit_logs_v2_org_response_collection": {
            "fields": [
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "result_info",
                    "title": "Result Info",
                    "type": "`$OBJECT`",
                    "short": "Provides information about the result of the request, including count and cursor."
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "short": "Indicates whether the API call was successful"
                }
            ],
            "name": "aaa_audit_logs_v2_org_response_collection",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{organization_id}/logs/audit",
                            "segments": [
                                {
                                    "lit": "organizations"
                                },
                                {
                                    "var": "organization_id"
                                },
                                {
                                    "lit": "logs"
                                },
                                {
                                    "lit": "audit"
                                }
                            ],
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "logs",
                                "audit"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "organization_id",
                                        "orig": "organization_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a67e14daa5f8dceeb91fe5449ba496ef"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "action_result",
                                        "orig": "action_result",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": "success"
                                    },
                                    {
                                        "name": "action_result_not",
                                        "orig": "action_result_not",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": "success"
                                    },
                                    {
                                        "name": "action_type",
                                        "orig": "action_type",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "action_type_not",
                                        "orig": "action_type_not",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "actor_context",
                                        "orig": "actor_context",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "actor_context_not",
                                        "orig": "actor_context_not",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "actor_email",
                                        "orig": "actor_email",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "actor_email_not",
                                        "orig": "actor_email_not",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "actor_id",
                                        "orig": "actor_id",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "actor_id_not",
                                        "orig": "actor_id_not",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "actor_ip_address",
                                        "orig": "actor_ip_address",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "actor_ip_address_not",
                                        "orig": "actor_ip_address_not",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "actor_token_id",
                                        "orig": "actor_token_id",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "actor_token_id_not",
                                        "orig": "actor_token_id_not",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "actor_token_name",
                                        "orig": "actor_token_name",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "actor_token_name_not",
                                        "orig": "actor_token_name_not",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "actor_type",
                                        "orig": "actor_type",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "actor_type_not",
                                        "orig": "actor_type_not",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "before",
                                        "orig": "before",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "2024-10-31"
                                    },
                                    {
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "Q1buH-__DQqqig7SVYXT-SsMOTGY2Z3Y80W-fGgva7yaDdmPKveucH5ddOcHsJRhNb-xUK8agZQqkJSMAENGO8NU6g=="
                                    },
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "desc"
                                    },
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "id_not",
                                        "orig": "id_not",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 25
                                    },
                                    {
                                        "name": "raw_cf_ray_id",
                                        "orig": "raw_cf_ray_id",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "raw_cf_ray_id_not",
                                        "orig": "raw_cf_ray_id_not",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "raw_method",
                                        "orig": "raw_method",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "raw_method_not",
                                        "orig": "raw_method_not",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "raw_status_code",
                                        "orig": "raw_status_code",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "raw_status_code_not",
                                        "orig": "raw_status_code_not",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "raw_uri",
                                        "orig": "raw_uri",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "raw_uri_not",
                                        "orig": "raw_uri_not",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "resource_id",
                                        "orig": "resource_id",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "resource_id_not",
                                        "orig": "resource_id_not",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "resource_product",
                                        "orig": "resource_product",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "resource_product_not",
                                        "orig": "resource_product_not",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "resource_scope",
                                        "orig": "resource_scope",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "resource_scope_not",
                                        "orig": "resource_scope_not",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "resource_type",
                                        "orig": "resource_type",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "resource_type_not",
                                        "orig": "resource_type_not",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "since",
                                        "orig": "since",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "2024-10-30"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "action_result",
                                    "action_result_not",
                                    "action_type",
                                    "action_type_not",
                                    "actor_context",
                                    "actor_context_not",
                                    "actor_email",
                                    "actor_email_not",
                                    "actor_id",
                                    "actor_id_not",
                                    "actor_ip_address",
                                    "actor_ip_address_not",
                                    "actor_token_id",
                                    "actor_token_id_not",
                                    "actor_token_name",
                                    "actor_token_name_not",
                                    "actor_type",
                                    "actor_type_not",
                                    "before",
                                    "cursor",
                                    "direction",
                                    "id",
                                    "id_not",
                                    "limit",
                                    "organization_id",
                                    "raw_cf_ray_id",
                                    "raw_cf_ray_id_not",
                                    "raw_method",
                                    "raw_method_not",
                                    "raw_status_code",
                                    "raw_status_code_not",
                                    "raw_uri",
                                    "raw_uri_not",
                                    "resource_id",
                                    "resource_id_not",
                                    "resource_product",
                                    "resource_product_not",
                                    "resource_scope",
                                    "resource_scope_not",
                                    "resource_type",
                                    "resource_type_not",
                                    "since"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.organization"
                    ]
                ]
            }
        },
        "account": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "account",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/organizations",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "organizations"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{id}",
                                "organizations"
                            ],
                            "rename": {
                                "param": {
                                    "account_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "organization",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "account_resource_group": {
            "fields": [
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "messages",
                    "title": "Messages",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "req": true,
                    "op": {
                        "update": {
                            "type": "`$STRING`"
                        }
                    },
                    "short": "Name of the resource group"
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true,
                    "op": {
                        "list": {
                            "type": "`$ARRAY`"
                        }
                    },
                    "short": "A group of scoped resources."
                },
                {
                    "name": "scope",
                    "title": "Scope",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "A scope is a combination of scope objects which provides additional context."
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Whether the API call was successful."
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "account_resource_group",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/accounts/{account_id}/iam/resource_groups",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "iam"
                                },
                                {
                                    "lit": "resource_groups"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "iam",
                                "resource_groups"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/iam/resource_groups",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "iam"
                                },
                                {
                                    "lit": "resource_groups"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "iam",
                                "resource_groups"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "NameOfTheResourceGroup"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id",
                                    "name"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/iam/resource_groups/{resource_group_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "iam"
                                },
                                {
                                    "lit": "resource_groups"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "iam",
                                "resource_groups",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "resource_group_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "resource_group_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/accounts/{account_id}/iam/resource_groups/{resource_group_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "iam"
                                },
                                {
                                    "lit": "resource_groups"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "iam",
                                "resource_groups",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "resource_group_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "resource_group_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "account_user_group": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "req": true,
                    "op": {
                        "update": {
                            "type": "`$STRING`"
                        }
                    },
                    "short": "Name of the User group."
                },
                {
                    "name": "policies",
                    "title": "Policies",
                    "type": "`$ARRAY`",
                    "short": "Policies attached to the User group"
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true,
                    "op": {
                        "list": {
                            "type": "`$ARRAY`"
                        }
                    },
                    "short": "A group of policies resources."
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "account_user_group",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/accounts/{account_id}/iam/user_groups",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "iam"
                                },
                                {
                                    "lit": "user_groups"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "iam",
                                "user_groups"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/iam/user_groups",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "iam"
                                },
                                {
                                    "lit": "user_groups"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "iam",
                                "user_groups"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "desc"
                                    },
                                    {
                                        "name": "fuzzy_name",
                                        "orig": "fuzzy_name",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "Foo"
                                    },
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "NameOfTheUserGroup"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 100
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "direction",
                                    "fuzzy_name",
                                    "id",
                                    "name",
                                    "page",
                                    "per_page"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/iam/user_groups/{user_group_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "iam"
                                },
                                {
                                    "lit": "user_groups"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "iam",
                                "user_groups",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "user_group_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "user_group_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/accounts/{account_id}/iam/user_groups/{user_group_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "iam"
                                },
                                {
                                    "lit": "user_groups"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "iam",
                                "user_groups",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "user_group_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "user_group_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "account_user_group_member": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true,
                    "op": {
                        "list": {
                            "type": "`$ARRAY`"
                        }
                    },
                    "short": "Detailed member information for a User Group member."
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "account_user_group_member",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/accounts/{account_id}/iam/user_groups/{user_group_id}/members",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "iam"
                                },
                                {
                                    "lit": "user_groups"
                                },
                                {
                                    "var": "user_group_id"
                                },
                                {
                                    "lit": "members"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "iam",
                                "user_groups",
                                "{user_group_id}",
                                "members"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "user_group_id",
                                        "orig": "user_group_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "user_group_id"
                                ]
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/iam/user_groups/{user_group_id}/members",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "iam"
                                },
                                {
                                    "lit": "user_groups"
                                },
                                {
                                    "var": "user_group_id"
                                },
                                {
                                    "lit": "members"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "iam",
                                "user_groups",
                                "{user_group_id}",
                                "members"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "user_group_id",
                                        "orig": "user_group_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "asc"
                                    },
                                    {
                                        "name": "fuzzy_email",
                                        "orig": "fuzzy_email",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "user@"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 100
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "direction",
                                    "fuzzy_email",
                                    "page",
                                    "per_page",
                                    "user_group_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/iam/user_groups/{user_group_id}/members/{member_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "iam"
                                },
                                {
                                    "lit": "user_groups"
                                },
                                {
                                    "var": "user_group_id"
                                },
                                {
                                    "lit": "members"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "iam",
                                "user_groups",
                                "{user_group_id}",
                                "members",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "member_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "member_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "user_group_id",
                                        "orig": "user_group_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id",
                                    "user_group_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/accounts/{account_id}/iam/user_groups/{user_group_id}/members/{member_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "iam"
                                },
                                {
                                    "lit": "user_groups"
                                },
                                {
                                    "var": "user_group_id"
                                },
                                {
                                    "lit": "members"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "iam",
                                "user_groups",
                                "{user_group_id}",
                                "members",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "member_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "member_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "user_group_id",
                                        "orig": "user_group_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id",
                                    "user_group_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/accounts/{account_id}/iam/user_groups/{user_group_id}/members",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "iam"
                                },
                                {
                                    "lit": "user_groups"
                                },
                                {
                                    "var": "user_group_id"
                                },
                                {
                                    "lit": "members"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "iam",
                                "user_groups",
                                "{user_group_id}",
                                "members"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "user_group_id",
                                        "orig": "user_group_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "user_group_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account",
                        "$.main.kit.entity.user_group"
                    ]
                ]
            }
        },
        "begin_verification": {
            "fields": [
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "messages",
                    "title": "Messages",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Whether the API call was successful."
                }
            ],
            "name": "begin_verification",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/accounts/{account_id}/sso_connectors/{sso_connector_id}/begin_verification",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "sso_connectors"
                                },
                                {
                                    "var": "sso_connector_id"
                                },
                                {
                                    "lit": "begin_verification"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "sso_connectors",
                                "{sso_connector_id}",
                                "begin_verification"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "sso_connector_id",
                                        "orig": "sso_connector_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "sso_connector_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account",
                        "$.main.kit.entity.sso_connector"
                    ]
                ]
            }
        },
        "bill_subs_api_client_secret_response_single": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "bill_subs_api_client_secret_response_single",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/accounts/{account_id}/client-secret",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "client-secret"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "client-secret"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "billable_usage_api_v2_usage": {
            "fields": [
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`",
                    "req": true,
                    "short": "Contains error details if the request failed."
                },
                {
                    "name": "messages",
                    "title": "Messages",
                    "type": "`$ARRAY`",
                    "req": true,
                    "short": "Contains informational notices about the response."
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`",
                    "req": true,
                    "short": "Contains the array of cost and usage records."
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Indicates whether the API call was successful."
                }
            ],
            "name": "billable_usage_api_v2_usage",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{organization_id}/billable/usage",
                            "segments": [
                                {
                                    "lit": "organizations"
                                },
                                {
                                    "var": "organization_id"
                                },
                                {
                                    "lit": "billable"
                                },
                                {
                                    "lit": "usage"
                                }
                            ],
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "billable",
                                "usage"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "organization_id",
                                        "orig": "organization_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "from",
                                        "orig": "from",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2025-05-01"
                                    },
                                    {
                                        "name": "to",
                                        "orig": "to",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "2025-05-31"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "from",
                                    "organization_id",
                                    "to"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.organization"
                    ]
                ]
            }
        },
        "dns_custom_nameservers_empty_response_3": {
            "fields": [],
            "name": "dns_custom_nameservers_empty_response_3",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/tenants/{tenant_tag}/custom_ns/{custom_ns_id}",
                            "segments": [
                                {
                                    "lit": "tenants"
                                },
                                {
                                    "var": "tenant_tag"
                                },
                                {
                                    "lit": "custom_ns"
                                },
                                {
                                    "var": "custom_ns_id"
                                }
                            ],
                            "parts": [
                                "tenants",
                                "{tenant_tag}",
                                "custom_ns",
                                "{custom_ns_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "custom_ns_id",
                                        "orig": "custom_ns_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "ns1.example.com"
                                    },
                                    {
                                        "name": "tenant_tag",
                                        "orig": "tenant_tag",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "699d98642c564d2e855e9661899b7252"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "custom_ns_id",
                                    "tenant_tag"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.tenant"
                    ]
                ]
            }
        },
        "dns_custom_nameservers_tcns_response_collection": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "dns_custom_nameservers_tcns_response_collection",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/tenants/{tenant_tag}/custom_ns",
                            "segments": [
                                {
                                    "lit": "tenants"
                                },
                                {
                                    "var": "tenant_tag"
                                },
                                {
                                    "lit": "custom_ns"
                                }
                            ],
                            "parts": [
                                "tenants",
                                "{tenant_tag}",
                                "custom_ns"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "tenant_tag",
                                        "orig": "tenant_tag",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "699d98642c564d2e855e9661899b7252"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "tenant_tag"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.tenant"
                    ]
                ]
            }
        },
        "dns_custom_nameservers_tcns_response_single": {
            "fields": [
                {
                    "name": "ns_name",
                    "title": "Ns Name",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The FQDN of the name server.",
                    "format": "hostname"
                },
                {
                    "name": "ns_set",
                    "title": "Ns Set",
                    "type": "`$NUMBER`",
                    "short": "The number of the set that this name server belongs to."
                }
            ],
            "name": "dns_custom_nameservers_tcns_response_single",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/tenants/{tenant_tag}/custom_ns",
                            "segments": [
                                {
                                    "lit": "tenants"
                                },
                                {
                                    "var": "tenant_tag"
                                },
                                {
                                    "lit": "custom_ns"
                                }
                            ],
                            "parts": [
                                "tenants",
                                "{tenant_tag}",
                                "custom_ns"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "tenant_tag",
                                        "orig": "tenant_tag",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "699d98642c564d2e855e9661899b7252"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "tenant_tag"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.tenant"
                    ]
                ]
            }
        },
        "iam_api_response_single_id": {
            "fields": [],
            "name": "iam_api_response_single_id",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/accounts/{account_id}/oauth_clients/{oauth_client_id}/rotate_secret",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "oauth_clients"
                                },
                                {
                                    "var": "oauth_client_id"
                                },
                                {
                                    "lit": "rotate_secret"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "oauth_clients",
                                "{oauth_client_id}",
                                "rotate_secret"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "oauth_client_id",
                                        "orig": "oauth_client_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "oauth_client_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account",
                        "$.main.kit.entity.oauth_client"
                    ]
                ]
            }
        },
        "iam_collection_member_response_with_policy": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "iam_collection_member_response_with_policy",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/members",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "members"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "members"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "desc"
                                    },
                                    {
                                        "name": "order",
                                        "orig": "order",
                                        "type": "`$ANY`",
                                        "kind": "query",
                                        "example": "status"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 20
                                    },
                                    {
                                        "name": "status",
                                        "orig": "status",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "accepted"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "direction",
                                    "order",
                                    "page",
                                    "per_page",
                                    "status"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "iam_collection_oauth_client": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "iam_collection_oauth_client",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/oauth_clients",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "oauth_clients"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "oauth_clients"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "iam_collection_oauth_scope": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "iam_collection_oauth_scope",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/oauth/scopes",
                            "segments": [
                                {
                                    "lit": "oauth"
                                },
                                {
                                    "lit": "scopes"
                                }
                            ],
                            "parts": [
                                "oauth",
                                "scopes"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "iam_collection_organization": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "iam_collection_organization",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/user/organizations",
                            "segments": [
                                {
                                    "lit": "user"
                                },
                                {
                                    "lit": "organizations"
                                }
                            ],
                            "parts": [
                                "user",
                                "organizations"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "desc"
                                    },
                                    {
                                        "name": "match",
                                        "orig": "match",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "all"
                                    },
                                    {
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "Cloudflare, Inc."
                                    },
                                    {
                                        "name": "order",
                                        "orig": "order",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "status"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 20
                                    },
                                    {
                                        "name": "status",
                                        "orig": "status",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "member"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "direction",
                                    "match",
                                    "name",
                                    "order",
                                    "page",
                                    "per_page",
                                    "status"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "iam_collection_permission_group": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`",
                    "short": "A set of permission groups that are specified to the policy."
                }
            ],
            "name": "iam_collection_permission_group",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/iam/permission_groups",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "iam"
                                },
                                {
                                    "lit": "permission_groups"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "iam",
                                "permission_groups"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "6d7f2f5f5b1d4a0e9081fdc98d432fd1"
                                    },
                                    {
                                        "name": "label",
                                        "orig": "label",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "labelOfThePermissionGroup"
                                    },
                                    {
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "NameOfThePermissionGroup"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 20
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id",
                                    "label",
                                    "name",
                                    "page",
                                    "per_page"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "iam_collection_role": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "iam_collection_role",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/roles",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "roles"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "roles"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 20
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "page",
                                    "per_page"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "iam_collection_token": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "iam_collection_token",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/tokens",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "tokens"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "tokens"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "desc"
                                    },
                                    {
                                        "name": "include_expired",
                                        "orig": "include_expired",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 20
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "direction",
                                    "include_expired",
                                    "page",
                                    "per_page"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/user/tokens",
                            "segments": [
                                {
                                    "lit": "user"
                                },
                                {
                                    "lit": "tokens"
                                }
                            ],
                            "parts": [
                                "user",
                                "tokens"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "desc"
                                    },
                                    {
                                        "name": "include_expired",
                                        "orig": "include_expired",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 20
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "direction",
                                    "include_expired",
                                    "page",
                                    "per_page"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "iam_oauth_client_rotate_secret": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "iam_oauth_client_rotate_secret",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/accounts/{account_id}/oauth_clients/{oauth_client_id}/rotate_secret",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "oauth_clients"
                                },
                                {
                                    "var": "oauth_client_id"
                                },
                                {
                                    "lit": "rotate_secret"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "oauth_clients",
                                "{oauth_client_id}",
                                "rotate_secret"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "oauth_client_id",
                                        "orig": "oauth_client_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "oauth_client_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account",
                        "$.main.kit.entity.oauth_client"
                    ]
                ]
            }
        },
        "iam_permissions_group_response_collection": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "iam_permissions_group_response_collection",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/tokens/permission_groups",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "tokens"
                                },
                                {
                                    "lit": "permission_groups"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "tokens",
                                "permission_groups"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "Account%20Settings%20Write"
                                    },
                                    {
                                        "name": "scope",
                                        "orig": "scope",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "com.cloudflare.api.account.zone"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "name",
                                    "scope"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/user/tokens/permission_groups",
                            "segments": [
                                {
                                    "lit": "user"
                                },
                                {
                                    "lit": "tokens"
                                },
                                {
                                    "lit": "permission_groups"
                                }
                            ],
                            "parts": [
                                "user",
                                "tokens",
                                "permission_groups"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "Account%20Settings%20Write"
                                    },
                                    {
                                        "name": "scope",
                                        "orig": "scope",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "com.cloudflare.api.account.zone"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "name",
                                    "scope"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "iam_response_single_value": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$STRING`",
                    "short": "The token value.",
                    "readOnly": true
                }
            ],
            "name": "iam_response_single_value",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/accounts/{account_id}/tokens/{token_id}/value",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "tokens"
                                },
                                {
                                    "var": "token_id"
                                },
                                {
                                    "lit": "value"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "tokens",
                                "{token_id}",
                                "value"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "token_id",
                                        "orig": "token_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "ed17574386854bf78a67040be0a770b0"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "token_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/user/tokens/{token_id}/value",
                            "segments": [
                                {
                                    "lit": "user"
                                },
                                {
                                    "lit": "tokens"
                                },
                                {
                                    "var": "token_id"
                                },
                                {
                                    "lit": "value"
                                }
                            ],
                            "parts": [
                                "user",
                                "tokens",
                                "{token_id}",
                                "value"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "token_id",
                                        "orig": "token_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "ed17574386854bf78a67040be0a770b0"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "token_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account",
                        "$.main.kit.entity.token"
                    ]
                ]
            }
        },
        "iam_schemas_collection_invite": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "iam_schemas_collection_invite",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/user/invites",
                            "segments": [
                                {
                                    "lit": "user"
                                },
                                {
                                    "lit": "invites"
                                }
                            ],
                            "parts": [
                                "user",
                                "invites"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "iam_single_invite": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$ANY`",
                    "req": true,
                    "short": "Status of your response to the invitation (rejected or accepted)."
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "iam_single_invite",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/user/invites/{invite_id}",
                            "segments": [
                                {
                                    "lit": "user"
                                },
                                {
                                    "lit": "invites"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "user",
                                "invites",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "invite_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "invite_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "4f5f0c14a2a41d5063dd301b2f829f04"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/user/invites/{invite_id}",
                            "segments": [
                                {
                                    "lit": "user"
                                },
                                {
                                    "lit": "invites"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "user",
                                "invites",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "invite_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "invite_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "4f5f0c14a2a41d5063dd301b2f829f04"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "iam_single_member_response_with_policy": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "iam_single_member_response_with_policy",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/accounts/{account_id}/members",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "members"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "members"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/members/{member_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "members"
                                },
                                {
                                    "var": "member_id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "members",
                                "{member_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "member_id",
                                        "orig": "member_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "4536bcfad5faccb111b47003c79917fa"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "member_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/accounts/{account_id}/members/{member_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "members"
                                },
                                {
                                    "var": "member_id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "members",
                                "{member_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "member_id",
                                        "orig": "member_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "4536bcfad5faccb111b47003c79917fa"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "member_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ],
                    [
                        "$.main.kit.entity.account",
                        "$.main.kit.entity.member"
                    ]
                ]
            }
        },
        "iam_single_membership_response_with_policy": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$ANY`",
                    "req": true,
                    "short": "Whether to accept or reject this account invitation."
                }
            ],
            "name": "iam_single_membership_response_with_policy",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/memberships",
                            "segments": [
                                {
                                    "lit": "memberships"
                                }
                            ],
                            "parts": [
                                "memberships"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "account_name",
                                        "orig": "account_name",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "Demo Account"
                                    },
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "desc"
                                    },
                                    {
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "Demo Account"
                                    },
                                    {
                                        "name": "order",
                                        "orig": "order",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "status"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 20
                                    },
                                    {
                                        "name": "status",
                                        "orig": "status",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "accepted"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_name",
                                    "direction",
                                    "name",
                                    "order",
                                    "page",
                                    "per_page",
                                    "status"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/memberships/{membership_id}",
                            "segments": [
                                {
                                    "lit": "memberships"
                                },
                                {
                                    "var": "membership_id"
                                }
                            ],
                            "parts": [
                                "memberships",
                                "{membership_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "membership_id",
                                        "orig": "membership_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "4536bcfad5faccb111b47003c79917fa"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "membership_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/user/memberships/{membership_id}",
                            "segments": [
                                {
                                    "lit": "user"
                                },
                                {
                                    "lit": "memberships"
                                },
                                {
                                    "var": "membership_id"
                                }
                            ],
                            "parts": [
                                "user",
                                "memberships",
                                "{membership_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "membership_id",
                                        "orig": "membership_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "4536bcfad5faccb111b47003c79917fa"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "membership_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/memberships/{membership_id}",
                            "segments": [
                                {
                                    "lit": "memberships"
                                },
                                {
                                    "var": "membership_id"
                                }
                            ],
                            "parts": [
                                "memberships",
                                "{membership_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "membership_id",
                                        "orig": "membership_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "4536bcfad5faccb111b47003c79917fa"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "membership_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "iam_single_oauth_client": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ANY`",
                    "short": "An OAuth 2.0 client registration."
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "iam_single_oauth_client",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/oauth_clients/{oauth_client_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "oauth_clients"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "oauth_clients",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "oauth_client_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "oauth_client_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/accounts/{account_id}/oauth_clients/{oauth_client_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "oauth_clients"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "oauth_clients",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "oauth_client_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "oauth_client_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "iam_single_oauth_client_create": {
            "fields": [],
            "name": "iam_single_oauth_client_create",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/accounts/{account_id}/oauth_clients",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "oauth_clients"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "oauth_clients"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "iam_single_organization": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "iam_single_organization",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/user/organizations/{organization_id}",
                            "segments": [
                                {
                                    "lit": "user"
                                },
                                {
                                    "lit": "organizations"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "user",
                                "organizations",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "organization_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "organization_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "iam_single_permission_group": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "A named group of permissions that map to a group of operations against resources."
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "iam_single_permission_group",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/iam/permission_groups/{permission_group_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "iam"
                                },
                                {
                                    "lit": "permission_groups"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "iam",
                                "permission_groups",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "permission_group_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "permission_group_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "iam_single_role": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "iam_single_role",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/roles/{role_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "roles"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "roles",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "role_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "role_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3536bcfad5faccb999b47003c79917fb"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "iam_single_token": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "iam_single_token",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/tokens/{token_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "tokens"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "tokens",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "token_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "token_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "ed17574386854bf78a67040be0a770b0"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/user/tokens/{token_id}",
                            "segments": [
                                {
                                    "lit": "user"
                                },
                                {
                                    "lit": "tokens"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "user",
                                "tokens",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "token_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "token_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "ed17574386854bf78a67040be0a770b0"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/accounts/{account_id}/tokens/{token_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "tokens"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "tokens",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "token_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "token_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "ed17574386854bf78a67040be0a770b0"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/user/tokens/{token_id}",
                            "segments": [
                                {
                                    "lit": "user"
                                },
                                {
                                    "lit": "tokens"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "user",
                                "tokens",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "token_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "token_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "ed17574386854bf78a67040be0a770b0"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "iam_single_token_create": {
            "fields": [
                {
                    "name": "condition",
                    "title": "Condition",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "expires_on",
                    "title": "Expires On",
                    "type": "`$STRING`",
                    "short": "The expiration time on or after which the JWT MUST NOT be accepted for processing.",
                    "format": "date-time"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Token name."
                },
                {
                    "name": "not_before",
                    "title": "Not Before",
                    "type": "`$STRING`",
                    "short": "The time before which the token MUST NOT be accepted for processing.",
                    "format": "date-time"
                },
                {
                    "name": "policies",
                    "title": "Policies",
                    "type": "`$ARRAY`",
                    "req": true,
                    "short": "List of access policies assigned to the token."
                }
            ],
            "name": "iam_single_token_create",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/accounts/{account_id}/tokens",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "tokens"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "tokens"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/user/tokens",
                            "segments": [
                                {
                                    "lit": "user"
                                },
                                {
                                    "lit": "tokens"
                                }
                            ],
                            "parts": [
                                "user",
                                "tokens"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "iam_sso_connector": {
            "fields": [
                {
                    "name": "begin_verification",
                    "title": "Begin Verification",
                    "type": "`$BOOLEAN`",
                    "short": "Begin the verification process after creation"
                },
                {
                    "name": "email_domain",
                    "title": "Email Domain",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Email domain of the new SSO connector"
                },
                {
                    "name": "enabled",
                    "title": "Enabled",
                    "type": "`$BOOLEAN`",
                    "short": "SSO Connector enabled state"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "use_fedramp_language",
                    "title": "Use Fedramp Language",
                    "type": "`$BOOLEAN`",
                    "short": "Controls the display of FedRAMP language to the user during SSO login"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "iam_sso_connector",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/accounts/{account_id}/sso_connectors",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "sso_connectors"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "sso_connectors"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/sso_connectors/{sso_connector_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "sso_connectors"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "sso_connectors",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "sso_connector_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "sso_connector_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/accounts/{account_id}/sso_connectors/{sso_connector_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "sso_connectors"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "sso_connectors",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "sso_connector_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "sso_connector_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "iam_sso_connector_collection": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "iam_sso_connector_collection",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/sso_connectors",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "sso_connectors"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "sso_connectors"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "iam_token_verify_response_single_segment": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ANY`",
                    "req": true
                }
            ],
            "name": "iam_token_verify_response_single_segment",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/tokens/verify",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "tokens"
                                },
                                {
                                    "lit": "verify"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "tokens",
                                "verify"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/user/tokens/verify",
                            "segments": [
                                {
                                    "lit": "user"
                                },
                                {
                                    "lit": "tokens"
                                },
                                {
                                    "lit": "verify"
                                }
                            ],
                            "parts": [
                                "user",
                                "tokens",
                                "verify"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "member": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "member",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/accounts/{account_id}/members/{member_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "members"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "members",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "member_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "member_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "4536bcfad5faccb111b47003c79917fa"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "oauth_client": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "oauth_client",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/accounts/{account_id}/oauth_clients/{oauth_client_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "oauth_clients"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "oauth_clients",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "oauth_client_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "oauth_client_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "organization": {
            "fields": [
                {
                    "name": "create_time",
                    "title": "Create Time",
                    "type": "`$STRING`",
                    "req": true,
                    "readOnly": true,
                    "format": "date-time"
                },
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`",
                    "req": true,
                    "readOnly": true
                },
                {
                    "name": "messages",
                    "title": "Messages",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true,
                    "readOnly": true
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "parent",
                    "title": "Parent",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "profile",
                    "title": "Profile",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "References an Organization in the Cloudflare data model."
                },
                {
                    "name": "result_info",
                    "title": "Result Info",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "organization",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/organizations/{organization_id}/members:batchCreate",
                            "segments": [
                                {
                                    "lit": "organizations"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "members:batchCreate"
                                }
                            ],
                            "parts": [
                                "organizations",
                                "{id}",
                                "members:batchCreate"
                            ],
                            "rename": {
                                "param": {
                                    "organization_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "organization_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "membersbatch_create",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/organizations",
                            "segments": [
                                {
                                    "lit": "organizations"
                                }
                            ],
                            "parts": [
                                "organizations"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{organization_id}/accounts",
                            "segments": [
                                {
                                    "lit": "organizations"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "accounts"
                                }
                            ],
                            "parts": [
                                "organizations",
                                "{id}",
                                "accounts"
                            ],
                            "rename": {
                                "param": {
                                    "organization_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "organization_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "account_pubname",
                                        "orig": "account_pubname",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "account_pubname_contain",
                                        "orig": "account_pubname_contain",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "account_pubname_ends_with",
                                        "orig": "account_pubname_ends_with",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "account_pubname_starts_with",
                                        "orig": "account_pubname_starts_with",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "include_tag",
                                        "orig": "include_tag",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "include_total",
                                        "orig": "include_total",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": true
                                    },
                                    {
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "name_contain",
                                        "orig": "name_contain",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "name_ends_with",
                                        "orig": "name_ends_with",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "name_starts_with",
                                        "orig": "name_starts_with",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "order_by",
                                        "orig": "order_by",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page_size",
                                        "orig": "page_size",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page_token",
                                        "orig": "page_token",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "account",
                                "exist": [
                                    "account_pubname",
                                    "account_pubname_contain",
                                    "account_pubname_ends_with",
                                    "account_pubname_starts_with",
                                    "direction",
                                    "id",
                                    "include_tag",
                                    "include_total",
                                    "name",
                                    "name_contain",
                                    "name_ends_with",
                                    "name_starts_with",
                                    "order_by",
                                    "page_size",
                                    "page_token"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations",
                            "segments": [
                                {
                                    "lit": "organizations"
                                }
                            ],
                            "parts": [
                                "organizations"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "containing_account",
                                        "orig": "containing_account",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "containing_organization",
                                        "orig": "containing_organization",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "containing_user",
                                        "orig": "containing_user",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "name_contain",
                                        "orig": "name_contain",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "name_ends_with",
                                        "orig": "name_ends_with",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "name_starts_with",
                                        "orig": "name_starts_with",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page_size",
                                        "orig": "page_size",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page_token",
                                        "orig": "page_token",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "parent_id",
                                        "orig": "parent_id",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "containing_account",
                                    "containing_organization",
                                    "containing_user",
                                    "id",
                                    "name",
                                    "name_contain",
                                    "name_ends_with",
                                    "name_starts_with",
                                    "page_size",
                                    "page_token",
                                    "parent_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{organization_id}",
                            "segments": [
                                {
                                    "lit": "organizations"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "organizations",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "organization_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "organization_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/organizations/{organization_id}",
                            "segments": [
                                {
                                    "lit": "organizations"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "organizations",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "organization_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "organization_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/organizations/{organization_id}/invites/{member_code}",
                            "segments": [
                                {
                                    "lit": "organizations"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "invites"
                                },
                                {
                                    "var": "member_code"
                                }
                            ],
                            "parts": [
                                "organizations",
                                "{id}",
                                "invites",
                                "{member_code}"
                            ],
                            "rename": {
                                "param": {
                                    "organization_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "organization_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8"
                                    },
                                    {
                                        "name": "member_code",
                                        "orig": "member_code",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "member_code"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/organizations/{organization_id}",
                            "segments": [
                                {
                                    "lit": "organizations"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "organizations",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "organization_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "organization_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/organizations/{organization_id}/profile",
                            "segments": [
                                {
                                    "lit": "organizations"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "profile"
                                }
                            ],
                            "parts": [
                                "organizations",
                                "{id}",
                                "profile"
                            ],
                            "rename": {
                                "param": {
                                    "organization_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "organization_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8"
                                    }
                                ]
                            },
                            "select": {
                                "$action": "profile",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "organization_member": {
            "fields": [
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "member",
                    "title": "Member",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "messages",
                    "title": "Messages",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "result_info",
                    "title": "Result Info",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "organization_member",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/organizations/{organization_id}/members",
                            "segments": [
                                {
                                    "lit": "organizations"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "members"
                                }
                            ],
                            "parts": [
                                "organizations",
                                "{id}",
                                "members"
                            ],
                            "rename": {
                                "param": {
                                    "organization_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "organization_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{organization_id}/members",
                            "segments": [
                                {
                                    "lit": "organizations"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "members"
                                }
                            ],
                            "parts": [
                                "organizations",
                                "{id}",
                                "members"
                            ],
                            "rename": {
                                "param": {
                                    "organization_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "organization_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "page_size",
                                        "orig": "page_size",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page_token",
                                        "orig": "page_token",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "status",
                                        "orig": "status",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "user_email",
                                        "orig": "user_email",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "user_email_contain",
                                        "orig": "user_email_contain",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "user_email_ends_with",
                                        "orig": "user_email_ends_with",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "user_email_starts_with",
                                        "orig": "user_email_starts_with",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "page_size",
                                    "page_token",
                                    "status",
                                    "user_email",
                                    "user_email_contain",
                                    "user_email_ends_with",
                                    "user_email_starts_with"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{organization_id}/members/{member_id}",
                            "segments": [
                                {
                                    "lit": "organizations"
                                },
                                {
                                    "var": "organization_id"
                                },
                                {
                                    "lit": "members"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "members",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "member_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "member_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8"
                                    },
                                    {
                                        "name": "organization_id",
                                        "orig": "organization_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "organization_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/organizations/{organization_id}/members/{member_id}",
                            "segments": [
                                {
                                    "lit": "organizations"
                                },
                                {
                                    "var": "organization_id"
                                },
                                {
                                    "lit": "members"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "members",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "member_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "member_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8"
                                    },
                                    {
                                        "name": "organization_id",
                                        "orig": "organization_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "organization_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.organization"
                    ]
                ]
            }
        },
        "organizations_api_profile": {
            "fields": [
                {
                    "name": "code",
                    "title": "Code",
                    "type": "`$INTEGER`",
                    "req": true
                },
                {
                    "name": "message",
                    "title": "Message",
                    "type": "`$STRING`",
                    "req": true
                }
            ],
            "name": "organizations_api_profile",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{organization_id}/profile",
                            "segments": [
                                {
                                    "lit": "organizations"
                                },
                                {
                                    "var": "organization_id"
                                },
                                {
                                    "lit": "profile"
                                }
                            ],
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "profile"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "organization_id",
                                        "orig": "organization_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "organization_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.organization"
                    ]
                ]
            }
        },
        "resource": {
            "fields": [
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "meta",
                    "title": "Meta",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Resource Metadata."
                },
                {
                    "name": "resource_account_id",
                    "title": "Resource Account Id",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Account identifier."
                },
                {
                    "name": "resource_id",
                    "title": "Resource Id",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Share Resource identifier."
                },
                {
                    "name": "resource_type",
                    "title": "Resource Type",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Resource Type."
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ANY`",
                    "op": {
                        "load": {
                            "req": true,
                            "type": "`$ANY`"
                        }
                    }
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Whether the API call was successful."
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "resource",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/accounts/{account_id}/shares/{share_id}/resources",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                },
                                {
                                    "var": "share_id"
                                },
                                {
                                    "lit": "resources"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares",
                                "{share_id}",
                                "resources"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "share_id",
                                        "orig": "share_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "share_id"
                                ]
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/shares/{share_id}/resources",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                },
                                {
                                    "var": "share_id"
                                },
                                {
                                    "lit": "resources"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares",
                                "{share_id}",
                                "resources"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "share_id",
                                        "orig": "share_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 2
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 20
                                    },
                                    {
                                        "name": "resource_type",
                                        "orig": "resource_type",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "status",
                                        "orig": "status",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "page",
                                    "per_page",
                                    "resource_type",
                                    "share_id",
                                    "status"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                },
                                {
                                    "var": "share_id"
                                },
                                {
                                    "lit": "resources"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares",
                                "{share_id}",
                                "resources",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "share_resource_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "id",
                                        "orig": "share_resource_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "share_id",
                                        "orig": "share_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id",
                                    "share_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                },
                                {
                                    "var": "share_id"
                                },
                                {
                                    "lit": "resources"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares",
                                "{share_id}",
                                "resources",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "share_resource_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "id",
                                        "orig": "share_resource_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "share_id",
                                        "orig": "share_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id",
                                    "share_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                },
                                {
                                    "var": "share_id"
                                },
                                {
                                    "lit": "resources"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares",
                                "{share_id}",
                                "resources",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "share_resource_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "id",
                                        "orig": "share_resource_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "share_id",
                                        "orig": "share_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id",
                                    "share_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "resource_group": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "resource_group",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/accounts/{account_id}/iam/resource_groups/{resource_group_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "iam"
                                },
                                {
                                    "lit": "resource_groups"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "iam",
                                "resource_groups",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "resource_group_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "resource_group_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "resource_sharing": {
            "fields": [],
            "name": "resource_sharing",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/accounts/{account_id}/shares/{share_id}/excluded-recipients",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                },
                                {
                                    "var": "share_id"
                                },
                                {
                                    "lit": "excluded-recipients"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares",
                                "{share_id}",
                                "excluded-recipients"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "share_id",
                                        "orig": "share_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "share_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/accounts/{account_id}/shares/{share_id}/recipients",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                },
                                {
                                    "var": "share_id"
                                },
                                {
                                    "lit": "recipients"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares",
                                "{share_id}",
                                "recipients"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "share_id",
                                        "orig": "share_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "share_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "resource_sharing_share_excluded_recipient_response_collection": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "resource_sharing_share_excluded_recipient_response_collection",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/shares/{share_id}/excluded-recipients",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                },
                                {
                                    "var": "share_id"
                                },
                                {
                                    "lit": "excluded-recipients"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares",
                                "{share_id}",
                                "excluded-recipients"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "share_id",
                                        "orig": "share_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 2
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 20
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "page",
                                    "per_page",
                                    "share_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "resource_sharing_share_excluded_recipient_response_single": {
            "fields": [
                {
                    "name": "account_id",
                    "title": "Account Id",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The account to exclude from the organization-targeted share."
                },
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ANY`",
                    "op": {
                        "load": {
                            "req": true,
                            "type": "`$ANY`"
                        }
                    }
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Whether the API call was successful."
                }
            ],
            "name": "resource_sharing_share_excluded_recipient_response_single",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/accounts/{account_id}/shares/{share_id}/excluded-recipients",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                },
                                {
                                    "var": "share_id"
                                },
                                {
                                    "lit": "excluded-recipients"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares",
                                "{share_id}",
                                "excluded-recipients"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "share_id",
                                        "orig": "share_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "share_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/shares/{share_id}/excluded-recipients/{excluded_recipient_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                },
                                {
                                    "var": "share_id"
                                },
                                {
                                    "lit": "excluded-recipients"
                                },
                                {
                                    "var": "excluded_recipient_id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares",
                                "{share_id}",
                                "excluded-recipients",
                                "{excluded_recipient_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "excluded_recipient_id",
                                        "orig": "excluded_recipient_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "4ae96b85c43850f2c0a7b9101a0eeb18"
                                    },
                                    {
                                        "name": "share_id",
                                        "orig": "share_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "excluded_recipient_id",
                                    "share_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/accounts/{account_id}/shares/{share_id}/excluded-recipients/{excluded_recipient_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                },
                                {
                                    "var": "share_id"
                                },
                                {
                                    "lit": "excluded-recipients"
                                },
                                {
                                    "var": "excluded_recipient_id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares",
                                "{share_id}",
                                "excluded-recipients",
                                "{excluded_recipient_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "excluded_recipient_id",
                                        "orig": "excluded_recipient_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "4ae96b85c43850f2c0a7b9101a0eeb18"
                                    },
                                    {
                                        "name": "share_id",
                                        "orig": "share_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "excluded_recipient_id",
                                    "share_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ],
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "resource_sharing_share_recipient_response_collection": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "resource_sharing_share_recipient_response_collection",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/shares/{share_id}/recipients",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                },
                                {
                                    "var": "share_id"
                                },
                                {
                                    "lit": "recipients"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares",
                                "{share_id}",
                                "recipients"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "share_id",
                                        "orig": "share_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "include_resource",
                                        "orig": "include_resource",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": true
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 2
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 20
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "include_resource",
                                    "page",
                                    "per_page",
                                    "share_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "resource_sharing_share_recipient_response_single": {
            "fields": [
                {
                    "name": "account_id",
                    "title": "Account Id",
                    "type": "`$STRING`",
                    "short": "Deprecated alias for `recipient_account_id`.",
                    "deprecated": true
                },
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "organization_id",
                    "title": "Organization Id",
                    "type": "`$STRING`",
                    "short": "Organization identifier."
                },
                {
                    "name": "recipient_account_id",
                    "title": "Recipient Account Id",
                    "type": "`$STRING`",
                    "short": "The account that will receive the share."
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ANY`",
                    "op": {
                        "load": {
                            "req": true,
                            "type": "`$ANY`"
                        }
                    },
                    "short": "A recipient of a share."
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Whether the API call was successful."
                }
            ],
            "name": "resource_sharing_share_recipient_response_single",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/accounts/{account_id}/shares/{share_id}/recipients",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                },
                                {
                                    "var": "share_id"
                                },
                                {
                                    "lit": "recipients"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares",
                                "{share_id}",
                                "recipients"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "share_id",
                                        "orig": "share_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "share_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                },
                                {
                                    "var": "share_id"
                                },
                                {
                                    "lit": "recipients"
                                },
                                {
                                    "var": "recipient_id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares",
                                "{share_id}",
                                "recipients",
                                "{recipient_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "recipient_id",
                                        "orig": "recipient_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    },
                                    {
                                        "name": "share_id",
                                        "orig": "share_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "include_resource",
                                        "orig": "include_resource",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "include_resource",
                                    "recipient_id",
                                    "share_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                },
                                {
                                    "var": "share_id"
                                },
                                {
                                    "lit": "recipients"
                                },
                                {
                                    "var": "recipient_id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares",
                                "{share_id}",
                                "recipients",
                                "{recipient_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "recipient_id",
                                        "orig": "recipient_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    },
                                    {
                                        "name": "share_id",
                                        "orig": "share_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "recipient_id",
                                    "share_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ],
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "resource_sharing_share_response_collection": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "resource_sharing_share_response_collection",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/shares",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "asc"
                                    },
                                    {
                                        "name": "include_recipient_count",
                                        "orig": "include_recipient_count",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": true
                                    },
                                    {
                                        "name": "include_resource",
                                        "orig": "include_resource",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": true
                                    },
                                    {
                                        "name": "kind",
                                        "orig": "kind",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "order",
                                        "orig": "order",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "created"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 2
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 20
                                    },
                                    {
                                        "name": "resource_type",
                                        "orig": "resource_type",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "status",
                                        "orig": "status",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "tag",
                                        "orig": "tag",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "target_type",
                                        "orig": "target_type",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "direction",
                                    "include_recipient_count",
                                    "include_resource",
                                    "kind",
                                    "order",
                                    "page",
                                    "per_page",
                                    "resource_type",
                                    "status",
                                    "tag",
                                    "target_type"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{organization_id}/shares",
                            "segments": [
                                {
                                    "lit": "organizations"
                                },
                                {
                                    "var": "organization_id"
                                },
                                {
                                    "lit": "shares"
                                }
                            ],
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "shares"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "organization_id",
                                        "orig": "organization_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "asc"
                                    },
                                    {
                                        "name": "kind",
                                        "orig": "kind",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "order",
                                        "orig": "order",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "created"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 2
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 20
                                    },
                                    {
                                        "name": "resource_type",
                                        "orig": "resource_type",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "status",
                                        "orig": "status",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "target_type",
                                        "orig": "target_type",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "direction",
                                    "kind",
                                    "order",
                                    "organization_id",
                                    "page",
                                    "per_page",
                                    "resource_type",
                                    "status",
                                    "target_type"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ],
                    [
                        "$.main.kit.entity.organization"
                    ]
                ]
            }
        },
        "resource_sharing_share_response_single": {
            "fields": [
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The name of the share."
                },
                {
                    "name": "recipients",
                    "title": "Recipients",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "resources",
                    "title": "Resources",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ANY`",
                    "op": {
                        "load": {
                            "req": true,
                            "type": "`$ANY`"
                        }
                    }
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Whether the API call was successful."
                }
            ],
            "name": "resource_sharing_share_response_single",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/accounts/{account_id}/shares",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/shares/{share_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                },
                                {
                                    "var": "share_id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares",
                                "{share_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "share_id",
                                        "orig": "share_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "include_recipient_count",
                                        "orig": "include_recipient_count",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": true
                                    },
                                    {
                                        "name": "include_resource",
                                        "orig": "include_resource",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "include_recipient_count",
                                    "include_resource",
                                    "share_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/accounts/{account_id}/shares/{share_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                },
                                {
                                    "var": "share_id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares",
                                "{share_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "share_id",
                                        "orig": "share_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "share_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/accounts/{account_id}/shares/{share_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "shares"
                                },
                                {
                                    "var": "share_id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "shares",
                                "{share_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "share_id",
                                        "orig": "share_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3fd85f74b32742f1bff64a85009dda07"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "share_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ],
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "scim_discovery": {
            "fields": [],
            "name": "scim_discovery",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/scim/v2/ResourceTypes/{resource_type_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "scim"
                                },
                                {
                                    "lit": "v2"
                                },
                                {
                                    "lit": "ResourceTypes"
                                },
                                {
                                    "var": "resource_type_id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "scim",
                                "v2",
                                "ResourceTypes",
                                "{resource_type_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "resource_type_id",
                                        "orig": "resource_type_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "User"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "resource_type_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/scim/v2/Schemas/{schema_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "scim"
                                },
                                {
                                    "lit": "v2"
                                },
                                {
                                    "lit": "Schemas"
                                },
                                {
                                    "var": "schema_id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "scim",
                                "v2",
                                "Schemas",
                                "{schema_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "schema_id",
                                        "orig": "schema_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "urn:ietf:params:scim:schemas:core:2.0:User"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "schema_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/scim/v2/ResourceTypes",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "scim"
                                },
                                {
                                    "lit": "v2"
                                },
                                {
                                    "lit": "ResourceTypes"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "scim",
                                "v2",
                                "ResourceTypes"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/scim/v2/Schemas",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "scim"
                                },
                                {
                                    "lit": "v2"
                                },
                                {
                                    "lit": "Schemas"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "scim",
                                "v2",
                                "Schemas"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/scim/v2/ServiceProviderConfig",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "scim"
                                },
                                {
                                    "lit": "v2"
                                },
                                {
                                    "lit": "ServiceProviderConfig"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "scim",
                                "v2",
                                "ServiceProviderConfig"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ],
                    [
                        "$.main.kit.entity.account"
                    ],
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "scim_group": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "scim_group",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/accounts/{account_id}/scim/v2/Groups",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "scim"
                                },
                                {
                                    "lit": "v2"
                                },
                                {
                                    "lit": "Groups"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "scim",
                                "v2",
                                "Groups"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/scim/v2/Groups",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "scim"
                                },
                                {
                                    "lit": "v2"
                                },
                                {
                                    "lit": "Groups"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "scim",
                                "v2",
                                "Groups"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "count",
                                        "orig": "count",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "displayName eq \"My Group\""
                                    },
                                    {
                                        "name": "start_index",
                                        "orig": "start_index",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "count",
                                    "filter",
                                    "start_index"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/scim/v2/Groups/{group_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "scim"
                                },
                                {
                                    "lit": "v2"
                                },
                                {
                                    "lit": "Groups"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "scim",
                                "v2",
                                "Groups",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "group_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "group_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "cloudflare-v1-023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "patch": {
                    "input": "data",
                    "name": "patch",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/accounts/{account_id}/scim/v2/Groups/{group_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "scim"
                                },
                                {
                                    "lit": "v2"
                                },
                                {
                                    "lit": "Groups"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "scim",
                                "v2",
                                "Groups",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "group_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "group_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "cloudflare-v1-023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/accounts/{account_id}/scim/v2/Groups/{group_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "scim"
                                },
                                {
                                    "lit": "v2"
                                },
                                {
                                    "lit": "Groups"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "scim",
                                "v2",
                                "Groups",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "group_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "group_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "cloudflare-v1-023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/accounts/{account_id}/scim/v2/Groups/{group_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "scim"
                                },
                                {
                                    "lit": "v2"
                                },
                                {
                                    "lit": "Groups"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "scim",
                                "v2",
                                "Groups",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "group_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "group_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "cloudflare-v1-023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "scim_user": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "scim_user",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/accounts/{account_id}/scim/v2/Users",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "scim"
                                },
                                {
                                    "lit": "v2"
                                },
                                {
                                    "lit": "Users"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "scim",
                                "v2",
                                "Users"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/scim/v2/Users",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "scim"
                                },
                                {
                                    "lit": "v2"
                                },
                                {
                                    "lit": "Users"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "scim",
                                "v2",
                                "Users"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "count",
                                        "orig": "count",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "userName eq \"user@example.com\""
                                    },
                                    {
                                        "name": "start_index",
                                        "orig": "start_index",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "count",
                                    "filter",
                                    "start_index"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/scim/v2/Users/{user_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "scim"
                                },
                                {
                                    "lit": "v2"
                                },
                                {
                                    "lit": "Users"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "scim",
                                "v2",
                                "Users",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "user_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "user_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "patch": {
                    "input": "data",
                    "name": "patch",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/accounts/{account_id}/scim/v2/Users/{user_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "scim"
                                },
                                {
                                    "lit": "v2"
                                },
                                {
                                    "lit": "Users"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "scim",
                                "v2",
                                "Users",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "user_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "user_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/accounts/{account_id}/scim/v2/Users/{user_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "scim"
                                },
                                {
                                    "lit": "v2"
                                },
                                {
                                    "lit": "Users"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "scim",
                                "v2",
                                "Users",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "user_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "user_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/accounts/{account_id}/scim/v2/Users/{user_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "scim"
                                },
                                {
                                    "lit": "v2"
                                },
                                {
                                    "lit": "Users"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "scim",
                                "v2",
                                "Users",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "user_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "user_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "sso_connector": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "sso_connector",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/accounts/{account_id}/sso_connectors/{sso_connector_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "sso_connectors"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "sso_connectors",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "sso_connector_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "sso_connector_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "tenant": {
            "fields": [
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "messages",
                    "title": "Messages",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tenant",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/tenants/{tenant_id}/accounts",
                            "segments": [
                                {
                                    "lit": "tenants"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "accounts"
                                }
                            ],
                            "parts": [
                                "tenants",
                                "{id}",
                                "accounts"
                            ],
                            "rename": {
                                "param": {
                                    "tenant_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "tenant_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "account",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/tenants/{tenant_id}/account_types",
                            "segments": [
                                {
                                    "lit": "tenants"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "account_types"
                                }
                            ],
                            "parts": [
                                "tenants",
                                "{id}",
                                "account_types"
                            ],
                            "rename": {
                                "param": {
                                    "tenant_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "tenant_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "account_type",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/tenants/{tenant_id}/entitlements",
                            "segments": [
                                {
                                    "lit": "tenants"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "entitlements"
                                }
                            ],
                            "parts": [
                                "tenants",
                                "{id}",
                                "entitlements"
                            ],
                            "rename": {
                                "param": {
                                    "tenant_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "tenant_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "entitlement",
                                "exist": [
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/tenants/{tenant_id}/memberships",
                            "segments": [
                                {
                                    "lit": "tenants"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "memberships"
                                }
                            ],
                            "parts": [
                                "tenants",
                                "{id}",
                                "memberships"
                            ],
                            "rename": {
                                "param": {
                                    "tenant_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "tenant_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "$action": "membership",
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/tenants/{tenant_id}",
                            "segments": [
                                {
                                    "lit": "tenants"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "tenants",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "tenant_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "tenant_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "token": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "token",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/accounts/{account_id}/tokens/{token_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "tokens"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "tokens",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "token_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "token_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "ed17574386854bf78a67040be0a770b0"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/user/tokens/{token_id}",
                            "segments": [
                                {
                                    "lit": "user"
                                },
                                {
                                    "lit": "tokens"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "user",
                                "tokens",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "token_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "token_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "ed17574386854bf78a67040be0a770b0"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "user": {
            "fields": [],
            "name": "user",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/user/tenants",
                            "segments": [
                                {
                                    "lit": "user"
                                },
                                {
                                    "lit": "tenants"
                                }
                            ],
                            "parts": [
                                "user",
                                "tenants"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {
                                "$action": "tenant"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "user_group": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "user_group",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/accounts/{account_id}/iam/user_groups/{user_group_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "iam"
                                },
                                {
                                    "lit": "user_groups"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "iam",
                                "user_groups",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "user_group_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "id",
                                        "orig": "user_group_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.account"
                    ]
                ]
            }
        },
        "users_account_membership": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "users_account_membership",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/memberships/{membership_id}",
                            "segments": [
                                {
                                    "lit": "memberships"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "memberships",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "membership_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "membership_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "4536bcfad5faccb111b47003c79917fa"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "users_organization": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "users_organization",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/user/organizations/{organization_id}",
                            "segments": [
                                {
                                    "lit": "user"
                                },
                                {
                                    "lit": "organizations"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "user",
                                "organizations",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "organization_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "organization_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map