package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CloudflareIdentity",
			"slug": "cloudflare-identity",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.cloudflare.com/client/v4",
			"auth": map[string]any{
				"prefix": "",
				"name": "X-Auth-Email",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"aaa_audit_logs_v2_org_history_response_collection": map[string]any{},
				"aaa_audit_logs_v2_org_response_collection": map[string]any{},
				"account": map[string]any{},
				"account_resource_group": map[string]any{},
				"account_user_group": map[string]any{},
				"account_user_group_member": map[string]any{},
				"begin_verification": map[string]any{},
				"bill_subs_api_client_secret_response_single": map[string]any{},
				"billable_usage_api_v2_usage": map[string]any{},
				"dns_custom_nameservers_empty_response_3": map[string]any{},
				"dns_custom_nameservers_tcns_response_collection": map[string]any{},
				"dns_custom_nameservers_tcns_response_single": map[string]any{},
				"iam_api_response_single_id": map[string]any{},
				"iam_collection_member_response_with_policy": map[string]any{},
				"iam_collection_oauth_client": map[string]any{},
				"iam_collection_oauth_scope": map[string]any{},
				"iam_collection_organization": map[string]any{},
				"iam_collection_permission_group": map[string]any{},
				"iam_collection_role": map[string]any{},
				"iam_collection_token": map[string]any{},
				"iam_oauth_client_rotate_secret": map[string]any{},
				"iam_permissions_group_response_collection": map[string]any{},
				"iam_response_single_value": map[string]any{},
				"iam_schemas_collection_invite": map[string]any{},
				"iam_single_invite": map[string]any{},
				"iam_single_member_response_with_policy": map[string]any{},
				"iam_single_membership_response_with_policy": map[string]any{},
				"iam_single_oauth_client": map[string]any{},
				"iam_single_oauth_client_create": map[string]any{},
				"iam_single_organization": map[string]any{},
				"iam_single_permission_group": map[string]any{},
				"iam_single_role": map[string]any{},
				"iam_single_token": map[string]any{},
				"iam_single_token_create": map[string]any{},
				"iam_sso_connector": map[string]any{},
				"iam_sso_connector_collection": map[string]any{},
				"iam_token_verify_response_single_segment": map[string]any{},
				"member": map[string]any{},
				"oauth_client": map[string]any{},
				"organization": map[string]any{},
				"organization_member": map[string]any{},
				"organizations_api_profile": map[string]any{},
				"resource": map[string]any{},
				"resource_group": map[string]any{},
				"resource_sharing": map[string]any{},
				"resource_sharing_share_excluded_recipient_response_collection": map[string]any{},
				"resource_sharing_share_excluded_recipient_response_single": map[string]any{},
				"resource_sharing_share_recipient_response_collection": map[string]any{},
				"resource_sharing_share_recipient_response_single": map[string]any{},
				"resource_sharing_share_response_collection": map[string]any{},
				"resource_sharing_share_response_single": map[string]any{},
				"scim_discovery": map[string]any{},
				"scim_group": map[string]any{},
				"scim_user": map[string]any{},
				"sso_connector": map[string]any{},
				"tenant": map[string]any{},
				"token": map[string]any{},
				"user": map[string]any{},
				"user_group": map[string]any{},
				"users_account_membership": map[string]any{},
				"users_organization": map[string]any{},
			},
		},
		"entity": map[string]any{
			"aaa_audit_logs_v2_org_history_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Provides information about the result of the request, including count, cursor, and identification quality.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the API call was successful",
					},
				},
				"name": "aaa_audit_logs_v2_org_history_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{organization_id}/logs/audit/{id}/history",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "audit",
									},
									map[string]any{
										"var": "audit_id",
									},
									map[string]any{
										"lit": "history",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"logs",
									"audit",
									"{audit_id}",
									"history",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "audit_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "audit_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "f174be97-19b1-40d6-954d-70cd5fbd52db",
										},
										map[string]any{
											"name": "organization_id",
											"orig": "organization_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a67e14daa5f8dceeb91fe5449ba496ef",
										},
									},
									"query": []any{
										map[string]any{
											"name": "action_time",
											"orig": "action_time",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2024-10-30T15:00:00Z",
										},
										map[string]any{
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2024-10-31",
										},
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Q1buH-__DQqqig7SVYXT-SsMOTGY2Z3Y80W-fGgva7yaDdmPKveucH5ddOcHsJRhNb-xUK8agZQqkJSMAENGO8NU6g==",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "since",
											"orig": "since",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2024-10-30",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_time",
										"audit_id",
										"before",
										"cursor",
										"direction",
										"limit",
										"organization_id",
										"since",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.organization",
						},
					},
				},
			},
			"aaa_audit_logs_v2_org_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"short": "Provides information about the result of the request, including count and cursor.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"short": "Indicates whether the API call was successful",
					},
				},
				"name": "aaa_audit_logs_v2_org_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{organization_id}/logs/audit",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "logs",
									},
									map[string]any{
										"lit": "audit",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"logs",
									"audit",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "organization_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a67e14daa5f8dceeb91fe5449ba496ef",
										},
									},
									"query": []any{
										map[string]any{
											"name": "action_result",
											"orig": "action_result",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": "success",
										},
										map[string]any{
											"name": "action_result_not",
											"orig": "action_result_not",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": "success",
										},
										map[string]any{
											"name": "action_type",
											"orig": "action_type",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "action_type_not",
											"orig": "action_type_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_context",
											"orig": "actor_context",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_context_not",
											"orig": "actor_context_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_email",
											"orig": "actor_email",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_email_not",
											"orig": "actor_email_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_id",
											"orig": "actor_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_id_not",
											"orig": "actor_id_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_ip_address",
											"orig": "actor_ip_address",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_ip_address_not",
											"orig": "actor_ip_address_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_token_id",
											"orig": "actor_token_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_token_id_not",
											"orig": "actor_token_id_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_token_name",
											"orig": "actor_token_name",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_token_name_not",
											"orig": "actor_token_name_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_type",
											"orig": "actor_type",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "actor_type_not",
											"orig": "actor_type_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2024-10-31",
										},
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Q1buH-__DQqqig7SVYXT-SsMOTGY2Z3Y80W-fGgva7yaDdmPKveucH5ddOcHsJRhNb-xUK8agZQqkJSMAENGO8NU6g==",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_not",
											"orig": "id_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "raw_cf_ray_id",
											"orig": "raw_cf_ray_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "raw_cf_ray_id_not",
											"orig": "raw_cf_ray_id_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "raw_method",
											"orig": "raw_method",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "raw_method_not",
											"orig": "raw_method_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "raw_status_code",
											"orig": "raw_status_code",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "raw_status_code_not",
											"orig": "raw_status_code_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "raw_uri",
											"orig": "raw_uri",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "raw_uri_not",
											"orig": "raw_uri_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "resource_id",
											"orig": "resource_id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "resource_id_not",
											"orig": "resource_id_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "resource_product",
											"orig": "resource_product",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "resource_product_not",
											"orig": "resource_product_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "resource_scope",
											"orig": "resource_scope",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "resource_scope_not",
											"orig": "resource_scope_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "resource_type",
											"orig": "resource_type",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "resource_type_not",
											"orig": "resource_type_not",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "since",
											"orig": "since",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "2024-10-30",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"since",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.organization",
						},
					},
				},
			},
			"account": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "account",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/organizations",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "organizations",
									},
								},
								"parts": []any{
									"accounts",
									"{id}",
									"organizations",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"account_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "organization",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"account_resource_group": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Name of the resource group",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "A group of scoped resources.",
					},
					map[string]any{
						"name": "scope",
						"title": "Scope",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A scope is a combination of scope objects which provides additional context.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "account_resource_group",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/iam/resource_groups",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "iam",
									},
									map[string]any{
										"lit": "resource_groups",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"iam",
									"resource_groups",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/iam/resource_groups",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "iam",
									},
									map[string]any{
										"lit": "resource_groups",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"iam",
									"resource_groups",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "NameOfTheResourceGroup",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"name",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/iam/resource_groups/{resource_group_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "iam",
									},
									map[string]any{
										"lit": "resource_groups",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"iam",
									"resource_groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"resource_group_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "resource_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/iam/resource_groups/{resource_group_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "iam",
									},
									map[string]any{
										"lit": "resource_groups",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"iam",
									"resource_groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"resource_group_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "resource_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"account_user_group": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Name of the User group.",
					},
					map[string]any{
						"name": "policies",
						"title": "Policies",
						"type": "`$ARRAY`",
						"short": "Policies attached to the User group",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "A group of policies resources.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "account_user_group",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/iam/user_groups",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "iam",
									},
									map[string]any{
										"lit": "user_groups",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"iam",
									"user_groups",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/iam/user_groups",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "iam",
									},
									map[string]any{
										"lit": "user_groups",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"iam",
									"user_groups",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
										map[string]any{
											"name": "fuzzy_name",
											"orig": "fuzzy_name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Foo",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "NameOfTheUserGroup",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 100,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"direction",
										"fuzzy_name",
										"id",
										"name",
										"page",
										"per_page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/iam/user_groups/{user_group_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "iam",
									},
									map[string]any{
										"lit": "user_groups",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"iam",
									"user_groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"user_group_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "user_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/iam/user_groups/{user_group_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "iam",
									},
									map[string]any{
										"lit": "user_groups",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"iam",
									"user_groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"user_group_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "user_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"account_user_group_member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"short": "Detailed member information for a User Group member.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "account_user_group_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/iam/user_groups/{user_group_id}/members",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "iam",
									},
									map[string]any{
										"lit": "user_groups",
									},
									map[string]any{
										"var": "user_group_id",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"iam",
									"user_groups",
									"{user_group_id}",
									"members",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "user_group_id",
											"orig": "user_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"user_group_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/iam/user_groups/{user_group_id}/members",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "iam",
									},
									map[string]any{
										"lit": "user_groups",
									},
									map[string]any{
										"var": "user_group_id",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"iam",
									"user_groups",
									"{user_group_id}",
									"members",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "user_group_id",
											"orig": "user_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "asc",
										},
										map[string]any{
											"name": "fuzzy_email",
											"orig": "fuzzy_email",
											"type": "`$STRING`",
											"kind": "query",
											"example": "user@",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 100,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"direction",
										"fuzzy_email",
										"page",
										"per_page",
										"user_group_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/iam/user_groups/{user_group_id}/members/{member_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "iam",
									},
									map[string]any{
										"lit": "user_groups",
									},
									map[string]any{
										"var": "user_group_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"iam",
									"user_groups",
									"{user_group_id}",
									"members",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"member_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "member_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "user_group_id",
											"orig": "user_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"user_group_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/iam/user_groups/{user_group_id}/members/{member_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "iam",
									},
									map[string]any{
										"lit": "user_groups",
									},
									map[string]any{
										"var": "user_group_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"iam",
									"user_groups",
									"{user_group_id}",
									"members",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"member_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "member_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "user_group_id",
											"orig": "user_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"user_group_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/iam/user_groups/{user_group_id}/members",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "iam",
									},
									map[string]any{
										"lit": "user_groups",
									},
									map[string]any{
										"var": "user_group_id",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"iam",
									"user_groups",
									"{user_group_id}",
									"members",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "user_group_id",
											"orig": "user_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"user_group_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
							"$.main.kit.entity.user_group",
						},
					},
				},
			},
			"begin_verification": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "begin_verification",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/sso_connectors/{sso_connector_id}/begin_verification",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "sso_connectors",
									},
									map[string]any{
										"var": "sso_connector_id",
									},
									map[string]any{
										"lit": "begin_verification",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"sso_connectors",
									"{sso_connector_id}",
									"begin_verification",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "sso_connector_id",
											"orig": "sso_connector_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"sso_connector_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
							"$.main.kit.entity.sso_connector",
						},
					},
				},
			},
			"bill_subs_api_client_secret_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "bill_subs_api_client_secret_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/client-secret",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "client-secret",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"client-secret",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"billable_usage_api_v2_usage": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Contains error details if the request failed.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Contains informational notices about the response.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Contains the array of cost and usage records.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the API call was successful.",
					},
				},
				"name": "billable_usage_api_v2_usage",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{organization_id}/billable/usage",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "billable",
									},
									map[string]any{
										"lit": "usage",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"billable",
									"usage",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "organization_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2025-05-01",
										},
										map[string]any{
											"name": "to",
											"orig": "to",
											"type": "`$STRING`",
											"kind": "query",
											"example": "2025-05-31",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"from",
										"organization_id",
										"to",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.organization",
						},
					},
				},
			},
			"dns_custom_nameservers_empty_response_3": map[string]any{
				"fields": []any{},
				"name": "dns_custom_nameservers_empty_response_3",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/tenants/{tenant_tag}/custom_ns/{custom_ns_id}",
								"segments": []any{
									map[string]any{
										"lit": "tenants",
									},
									map[string]any{
										"var": "tenant_tag",
									},
									map[string]any{
										"lit": "custom_ns",
									},
									map[string]any{
										"var": "custom_ns_id",
									},
								},
								"parts": []any{
									"tenants",
									"{tenant_tag}",
									"custom_ns",
									"{custom_ns_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "custom_ns_id",
											"orig": "custom_ns_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ns1.example.com",
										},
										map[string]any{
											"name": "tenant_tag",
											"orig": "tenant_tag",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"custom_ns_id",
										"tenant_tag",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.tenant",
						},
					},
				},
			},
			"dns_custom_nameservers_tcns_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "dns_custom_nameservers_tcns_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/tenants/{tenant_tag}/custom_ns",
								"segments": []any{
									map[string]any{
										"lit": "tenants",
									},
									map[string]any{
										"var": "tenant_tag",
									},
									map[string]any{
										"lit": "custom_ns",
									},
								},
								"parts": []any{
									"tenants",
									"{tenant_tag}",
									"custom_ns",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "tenant_tag",
											"orig": "tenant_tag",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"tenant_tag",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.tenant",
						},
					},
				},
			},
			"dns_custom_nameservers_tcns_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ns_name",
						"title": "Ns Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The FQDN of the name server.",
						"format": "hostname",
					},
					map[string]any{
						"name": "ns_set",
						"title": "Ns Set",
						"type": "`$NUMBER`",
						"short": "The number of the set that this name server belongs to.",
					},
				},
				"name": "dns_custom_nameservers_tcns_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/tenants/{tenant_tag}/custom_ns",
								"segments": []any{
									map[string]any{
										"lit": "tenants",
									},
									map[string]any{
										"var": "tenant_tag",
									},
									map[string]any{
										"lit": "custom_ns",
									},
								},
								"parts": []any{
									"tenants",
									"{tenant_tag}",
									"custom_ns",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "tenant_tag",
											"orig": "tenant_tag",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "699d98642c564d2e855e9661899b7252",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"tenant_tag",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.tenant",
						},
					},
				},
			},
			"iam_api_response_single_id": map[string]any{
				"fields": []any{},
				"name": "iam_api_response_single_id",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/oauth_clients/{oauth_client_id}/rotate_secret",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "oauth_clients",
									},
									map[string]any{
										"var": "oauth_client_id",
									},
									map[string]any{
										"lit": "rotate_secret",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"oauth_clients",
									"{oauth_client_id}",
									"rotate_secret",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "oauth_client_id",
											"orig": "oauth_client_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"oauth_client_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
							"$.main.kit.entity.oauth_client",
						},
					},
				},
			},
			"iam_collection_member_response_with_policy": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "iam_collection_member_response_with_policy",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/members",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"members",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
										map[string]any{
											"name": "order",
											"orig": "order",
											"type": "`$ANY`",
											"kind": "query",
											"example": "status",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"example": "accepted",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"direction",
										"order",
										"page",
										"per_page",
										"status",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"iam_collection_oauth_client": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "iam_collection_oauth_client",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/oauth_clients",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "oauth_clients",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"oauth_clients",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"iam_collection_oauth_scope": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "iam_collection_oauth_scope",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/oauth/scopes",
								"segments": []any{
									map[string]any{
										"lit": "oauth",
									},
									map[string]any{
										"lit": "scopes",
									},
								},
								"parts": []any{
									"oauth",
									"scopes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"iam_collection_organization": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "iam_collection_organization",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/user/organizations",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "organizations",
									},
								},
								"parts": []any{
									"user",
									"organizations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
										map[string]any{
											"name": "match",
											"orig": "match",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Cloudflare, Inc.",
										},
										map[string]any{
											"name": "order",
											"orig": "order",
											"type": "`$STRING`",
											"kind": "query",
											"example": "status",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"example": "member",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"direction",
										"match",
										"name",
										"order",
										"page",
										"per_page",
										"status",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"iam_collection_permission_group": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
						"short": "A set of permission groups that are specified to the policy.",
					},
				},
				"name": "iam_collection_permission_group",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/iam/permission_groups",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "iam",
									},
									map[string]any{
										"lit": "permission_groups",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"iam",
									"permission_groups",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "6d7f2f5f5b1d4a0e9081fdc98d432fd1",
										},
										map[string]any{
											"name": "label",
											"orig": "label",
											"type": "`$STRING`",
											"kind": "query",
											"example": "labelOfThePermissionGroup",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "NameOfThePermissionGroup",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"label",
										"name",
										"page",
										"per_page",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"iam_collection_role": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "iam_collection_role",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/roles",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "roles",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"roles",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"page",
										"per_page",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"iam_collection_token": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "iam_collection_token",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/tokens",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "tokens",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"tokens",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
										map[string]any{
											"name": "include_expired",
											"orig": "include_expired",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"direction",
										"include_expired",
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/user/tokens",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "tokens",
									},
								},
								"parts": []any{
									"user",
									"tokens",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
										map[string]any{
											"name": "include_expired",
											"orig": "include_expired",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"direction",
										"include_expired",
										"page",
										"per_page",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"iam_oauth_client_rotate_secret": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "iam_oauth_client_rotate_secret",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/oauth_clients/{oauth_client_id}/rotate_secret",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "oauth_clients",
									},
									map[string]any{
										"var": "oauth_client_id",
									},
									map[string]any{
										"lit": "rotate_secret",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"oauth_clients",
									"{oauth_client_id}",
									"rotate_secret",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "oauth_client_id",
											"orig": "oauth_client_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"oauth_client_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
							"$.main.kit.entity.oauth_client",
						},
					},
				},
			},
			"iam_permissions_group_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "iam_permissions_group_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/tokens/permission_groups",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"lit": "permission_groups",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"tokens",
									"permission_groups",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Account%20Settings%20Write",
										},
										map[string]any{
											"name": "scope",
											"orig": "scope",
											"type": "`$STRING`",
											"kind": "query",
											"example": "com.cloudflare.api.account.zone",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"name",
										"scope",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/user/tokens/permission_groups",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"lit": "permission_groups",
									},
								},
								"parts": []any{
									"user",
									"tokens",
									"permission_groups",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Account%20Settings%20Write",
										},
										map[string]any{
											"name": "scope",
											"orig": "scope",
											"type": "`$STRING`",
											"kind": "query",
											"example": "com.cloudflare.api.account.zone",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"name",
										"scope",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"iam_response_single_value": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$STRING`",
						"short": "The token value.",
						"readOnly": true,
					},
				},
				"name": "iam_response_single_value",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/tokens/{token_id}/value",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "token_id",
									},
									map[string]any{
										"lit": "value",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"tokens",
									"{token_id}",
									"value",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "token_id",
											"orig": "token_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ed17574386854bf78a67040be0a770b0",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"token_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/user/tokens/{token_id}/value",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "token_id",
									},
									map[string]any{
										"lit": "value",
									},
								},
								"parts": []any{
									"user",
									"tokens",
									"{token_id}",
									"value",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "token_id",
											"orig": "token_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ed17574386854bf78a67040be0a770b0",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
							"$.main.kit.entity.token",
						},
					},
				},
			},
			"iam_schemas_collection_invite": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "iam_schemas_collection_invite",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/user/invites",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "invites",
									},
								},
								"parts": []any{
									"user",
									"invites",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"iam_single_invite": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
						"short": "Status of your response to the invitation (rejected or accepted).",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "iam_single_invite",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/user/invites/{invite_id}",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "invites",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"user",
									"invites",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"invite_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "invite_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "4f5f0c14a2a41d5063dd301b2f829f04",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/user/invites/{invite_id}",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "invites",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"user",
									"invites",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"invite_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "invite_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "4f5f0c14a2a41d5063dd301b2f829f04",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"iam_single_member_response_with_policy": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "iam_single_member_response_with_policy",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/members",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"members",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/members/{member_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"members",
									"{member_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "member_id",
											"orig": "member_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "4536bcfad5faccb111b47003c79917fa",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"member_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/members/{member_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"members",
									"{member_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "member_id",
											"orig": "member_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "4536bcfad5faccb111b47003c79917fa",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"member_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
							"$.main.kit.entity.member",
						},
					},
				},
			},
			"iam_single_membership_response_with_policy": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$ANY`",
						"req": true,
						"short": "Whether to accept or reject this account invitation.",
					},
				},
				"name": "iam_single_membership_response_with_policy",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/memberships",
								"segments": []any{
									map[string]any{
										"lit": "memberships",
									},
								},
								"parts": []any{
									"memberships",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "account_name",
											"orig": "account_name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Demo Account",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Demo Account",
										},
										map[string]any{
											"name": "order",
											"orig": "order",
											"type": "`$STRING`",
											"kind": "query",
											"example": "status",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"example": "accepted",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_name",
										"direction",
										"name",
										"order",
										"page",
										"per_page",
										"status",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/memberships/{membership_id}",
								"segments": []any{
									map[string]any{
										"lit": "memberships",
									},
									map[string]any{
										"var": "membership_id",
									},
								},
								"parts": []any{
									"memberships",
									"{membership_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "membership_id",
											"orig": "membership_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "4536bcfad5faccb111b47003c79917fa",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"membership_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/user/memberships/{membership_id}",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "memberships",
									},
									map[string]any{
										"var": "membership_id",
									},
								},
								"parts": []any{
									"user",
									"memberships",
									"{membership_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "membership_id",
											"orig": "membership_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "4536bcfad5faccb111b47003c79917fa",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"membership_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/memberships/{membership_id}",
								"segments": []any{
									map[string]any{
										"lit": "memberships",
									},
									map[string]any{
										"var": "membership_id",
									},
								},
								"parts": []any{
									"memberships",
									"{membership_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "membership_id",
											"orig": "membership_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "4536bcfad5faccb111b47003c79917fa",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"membership_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"iam_single_oauth_client": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ANY`",
						"short": "An OAuth 2.0 client registration.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "iam_single_oauth_client",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/oauth_clients/{oauth_client_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "oauth_clients",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"oauth_clients",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"oauth_client_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "oauth_client_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/oauth_clients/{oauth_client_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "oauth_clients",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"oauth_clients",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"oauth_client_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "oauth_client_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"iam_single_oauth_client_create": map[string]any{
				"fields": []any{},
				"name": "iam_single_oauth_client_create",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/oauth_clients",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "oauth_clients",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"oauth_clients",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"iam_single_organization": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "iam_single_organization",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/user/organizations/{organization_id}",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"user",
									"organizations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"organization_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "organization_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"iam_single_permission_group": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A named group of permissions that map to a group of operations against resources.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "iam_single_permission_group",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/iam/permission_groups/{permission_group_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "iam",
									},
									map[string]any{
										"lit": "permission_groups",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"iam",
									"permission_groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"permission_group_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "permission_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"iam_single_role": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "iam_single_role",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/roles/{role_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "roles",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"roles",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"role_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "role_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3536bcfad5faccb999b47003c79917fb",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"iam_single_token": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "iam_single_token",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/tokens/{token_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"tokens",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"token_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "token_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ed17574386854bf78a67040be0a770b0",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/user/tokens/{token_id}",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"user",
									"tokens",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"token_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "token_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ed17574386854bf78a67040be0a770b0",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/tokens/{token_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"tokens",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"token_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "token_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ed17574386854bf78a67040be0a770b0",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/user/tokens/{token_id}",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"user",
									"tokens",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"token_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "token_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ed17574386854bf78a67040be0a770b0",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"iam_single_token_create": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "condition",
						"title": "Condition",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "expires_on",
						"title": "Expires On",
						"type": "`$STRING`",
						"short": "The expiration time on or after which the JWT MUST NOT be accepted for processing.",
						"format": "date-time",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Token name.",
					},
					map[string]any{
						"name": "not_before",
						"title": "Not Before",
						"type": "`$STRING`",
						"short": "The time before which the token MUST NOT be accepted for processing.",
						"format": "date-time",
					},
					map[string]any{
						"name": "policies",
						"title": "Policies",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of access policies assigned to the token.",
					},
				},
				"name": "iam_single_token_create",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/tokens",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "tokens",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"tokens",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/user/tokens",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "tokens",
									},
								},
								"parts": []any{
									"user",
									"tokens",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"iam_sso_connector": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "begin_verification",
						"title": "Begin Verification",
						"type": "`$BOOLEAN`",
						"short": "Begin the verification process after creation",
					},
					map[string]any{
						"name": "email_domain",
						"title": "Email Domain",
						"type": "`$STRING`",
						"req": true,
						"short": "Email domain of the new SSO connector",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"short": "SSO Connector enabled state",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "use_fedramp_language",
						"title": "Use Fedramp Language",
						"type": "`$BOOLEAN`",
						"short": "Controls the display of FedRAMP language to the user during SSO login",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "iam_sso_connector",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/sso_connectors",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "sso_connectors",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"sso_connectors",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/sso_connectors/{sso_connector_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "sso_connectors",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"sso_connectors",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"sso_connector_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "sso_connector_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/sso_connectors/{sso_connector_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "sso_connectors",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"sso_connectors",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"sso_connector_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "sso_connector_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"iam_sso_connector_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "iam_sso_connector_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/sso_connectors",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "sso_connectors",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"sso_connectors",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"iam_token_verify_response_single_segment": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ANY`",
						"req": true,
					},
				},
				"name": "iam_token_verify_response_single_segment",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/tokens/verify",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"lit": "verify",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"tokens",
									"verify",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/user/tokens/verify",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"lit": "verify",
									},
								},
								"parts": []any{
									"user",
									"tokens",
									"verify",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "member",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/members/{member_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"members",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"member_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "member_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "4536bcfad5faccb111b47003c79917fa",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"oauth_client": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "oauth_client",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/oauth_clients/{oauth_client_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "oauth_clients",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"oauth_clients",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"oauth_client_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "oauth_client_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"organization": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "create_time",
						"title": "Create Time",
						"type": "`$STRING`",
						"req": true,
						"readOnly": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"readOnly": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
						"readOnly": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "parent",
						"title": "Parent",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "profile",
						"title": "Profile",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"short": "References an Organization in the Cloudflare data model.",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "organization",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/organizations/{organization_id}/members:batchCreate",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "members:batchCreate",
									},
								},
								"parts": []any{
									"organizations",
									"{id}",
									"members:batchCreate",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"organization_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "organization_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8",
										},
									},
								},
								"select": map[string]any{
									"$action": "membersbatch_create",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/organizations",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
								},
								"parts": []any{
									"organizations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{organization_id}/accounts",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "accounts",
									},
								},
								"parts": []any{
									"organizations",
									"{id}",
									"accounts",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"organization_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "organization_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8",
										},
									},
									"query": []any{
										map[string]any{
											"name": "account_pubname",
											"orig": "account_pubname",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "account_pubname_contain",
											"orig": "account_pubname_contain",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "account_pubname_ends_with",
											"orig": "account_pubname_ends_with",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "account_pubname_starts_with",
											"orig": "account_pubname_starts_with",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "include_tag",
											"orig": "include_tag",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "include_total",
											"orig": "include_total",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name_contain",
											"orig": "name_contain",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name_ends_with",
											"orig": "name_ends_with",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name_starts_with",
											"orig": "name_starts_with",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_by",
											"orig": "order_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_token",
											"orig": "page_token",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "account",
									"exist": []any{
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
										"page_token",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
								},
								"parts": []any{
									"organizations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "containing_account",
											"orig": "containing_account",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "containing_organization",
											"orig": "containing_organization",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "containing_user",
											"orig": "containing_user",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name_contain",
											"orig": "name_contain",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name_ends_with",
											"orig": "name_ends_with",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name_starts_with",
											"orig": "name_starts_with",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_token",
											"orig": "page_token",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "parent_id",
											"orig": "parent_id",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"parent_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{organization_id}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"organizations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"organization_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "organization_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizations/{organization_id}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"organizations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"organization_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "organization_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/organizations/{organization_id}/invites/{member_code}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "invites",
									},
									map[string]any{
										"var": "member_code",
									},
								},
								"parts": []any{
									"organizations",
									"{id}",
									"invites",
									"{member_code}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"organization_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "organization_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8",
										},
										map[string]any{
											"name": "member_code",
											"orig": "member_code",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_code",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/organizations/{organization_id}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"organizations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"organization_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "organization_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/organizations/{organization_id}/profile",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "profile",
									},
								},
								"parts": []any{
									"organizations",
									"{id}",
									"profile",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"organization_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "organization_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8",
										},
									},
								},
								"select": map[string]any{
									"$action": "profile",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"organization_member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "member",
						"title": "Member",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "organization_member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/organizations/{organization_id}/members",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"parts": []any{
									"organizations",
									"{id}",
									"members",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"organization_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "organization_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{organization_id}/members",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"parts": []any{
									"organizations",
									"{id}",
									"members",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"organization_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "organization_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_token",
											"orig": "page_token",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "user_email",
											"orig": "user_email",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "user_email_contain",
											"orig": "user_email_contain",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "user_email_ends_with",
											"orig": "user_email_ends_with",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "user_email_starts_with",
											"orig": "user_email_starts_with",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"page_size",
										"page_token",
										"status",
										"user_email",
										"user_email_contain",
										"user_email_ends_with",
										"user_email_starts_with",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{organization_id}/members/{member_id}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"members",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"member_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "member_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8",
										},
										map[string]any{
											"name": "organization_id",
											"orig": "organization_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"organization_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizations/{organization_id}/members/{member_id}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"members",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"member_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "member_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8",
										},
										map[string]any{
											"name": "organization_id",
											"orig": "organization_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"organization_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.organization",
						},
					},
				},
			},
			"organizations_api_profile": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "code",
						"title": "Code",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "organizations_api_profile",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{organization_id}/profile",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "profile",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"profile",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "organization_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a7b9c3d2e8f4a1b5c6d0e9f2a3b7c4d8",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.organization",
						},
					},
				},
			},
			"resource": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Resource Metadata.",
					},
					map[string]any{
						"name": "resource_account_id",
						"title": "Resource Account Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Account identifier.",
					},
					map[string]any{
						"name": "resource_id",
						"title": "Resource Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Share Resource identifier.",
					},
					map[string]any{
						"name": "resource_type",
						"title": "Resource Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Resource Type.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ANY`",
						"op": map[string]any{
							"load": map[string]any{
								"req": true,
								"type": "`$ANY`",
							},
						},
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "resource",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/shares/{share_id}/resources",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
									map[string]any{
										"var": "share_id",
									},
									map[string]any{
										"lit": "resources",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
									"{share_id}",
									"resources",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "share_id",
											"orig": "share_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"share_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/shares/{share_id}/resources",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
									map[string]any{
										"var": "share_id",
									},
									map[string]any{
										"lit": "resources",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
									"{share_id}",
									"resources",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "share_id",
											"orig": "share_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 2,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "resource_type",
											"orig": "resource_type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"page",
										"per_page",
										"resource_type",
										"share_id",
										"status",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
									map[string]any{
										"var": "share_id",
									},
									map[string]any{
										"lit": "resources",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
									"{share_id}",
									"resources",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"share_resource_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "id",
											"orig": "share_resource_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "share_id",
											"orig": "share_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"share_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
									map[string]any{
										"var": "share_id",
									},
									map[string]any{
										"lit": "resources",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
									"{share_id}",
									"resources",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"share_resource_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "id",
											"orig": "share_resource_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "share_id",
											"orig": "share_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"share_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/shares/{share_id}/resources/{share_resource_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
									map[string]any{
										"var": "share_id",
									},
									map[string]any{
										"lit": "resources",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
									"{share_id}",
									"resources",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"share_resource_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "id",
											"orig": "share_resource_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "share_id",
											"orig": "share_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
										"share_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"resource_group": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "resource_group",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/iam/resource_groups/{resource_group_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "iam",
									},
									map[string]any{
										"lit": "resource_groups",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"iam",
									"resource_groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"resource_group_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "resource_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"resource_sharing": map[string]any{
				"fields": []any{},
				"name": "resource_sharing",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/shares/{share_id}/excluded-recipients",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
									map[string]any{
										"var": "share_id",
									},
									map[string]any{
										"lit": "excluded-recipients",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
									"{share_id}",
									"excluded-recipients",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "share_id",
											"orig": "share_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"share_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/shares/{share_id}/recipients",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
									map[string]any{
										"var": "share_id",
									},
									map[string]any{
										"lit": "recipients",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
									"{share_id}",
									"recipients",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "share_id",
											"orig": "share_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"share_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"resource_sharing_share_excluded_recipient_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "resource_sharing_share_excluded_recipient_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/shares/{share_id}/excluded-recipients",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
									map[string]any{
										"var": "share_id",
									},
									map[string]any{
										"lit": "excluded-recipients",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
									"{share_id}",
									"excluded-recipients",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "share_id",
											"orig": "share_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 2,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"page",
										"per_page",
										"share_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"resource_sharing_share_excluded_recipient_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account_id",
						"title": "Account Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The account to exclude from the organization-targeted share.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ANY`",
						"op": map[string]any{
							"load": map[string]any{
								"req": true,
								"type": "`$ANY`",
							},
						},
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "resource_sharing_share_excluded_recipient_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/shares/{share_id}/excluded-recipients",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
									map[string]any{
										"var": "share_id",
									},
									map[string]any{
										"lit": "excluded-recipients",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
									"{share_id}",
									"excluded-recipients",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "share_id",
											"orig": "share_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"share_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/shares/{share_id}/excluded-recipients/{excluded_recipient_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
									map[string]any{
										"var": "share_id",
									},
									map[string]any{
										"lit": "excluded-recipients",
									},
									map[string]any{
										"var": "excluded_recipient_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
									"{share_id}",
									"excluded-recipients",
									"{excluded_recipient_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "excluded_recipient_id",
											"orig": "excluded_recipient_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "4ae96b85c43850f2c0a7b9101a0eeb18",
										},
										map[string]any{
											"name": "share_id",
											"orig": "share_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"excluded_recipient_id",
										"share_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/shares/{share_id}/excluded-recipients/{excluded_recipient_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
									map[string]any{
										"var": "share_id",
									},
									map[string]any{
										"lit": "excluded-recipients",
									},
									map[string]any{
										"var": "excluded_recipient_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
									"{share_id}",
									"excluded-recipients",
									"{excluded_recipient_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "excluded_recipient_id",
											"orig": "excluded_recipient_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "4ae96b85c43850f2c0a7b9101a0eeb18",
										},
										map[string]any{
											"name": "share_id",
											"orig": "share_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"excluded_recipient_id",
										"share_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"resource_sharing_share_recipient_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "resource_sharing_share_recipient_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/shares/{share_id}/recipients",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
									map[string]any{
										"var": "share_id",
									},
									map[string]any{
										"lit": "recipients",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
									"{share_id}",
									"recipients",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "share_id",
											"orig": "share_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
									},
									"query": []any{
										map[string]any{
											"name": "include_resource",
											"orig": "include_resource",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 2,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"include_resource",
										"page",
										"per_page",
										"share_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"resource_sharing_share_recipient_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account_id",
						"title": "Account Id",
						"type": "`$STRING`",
						"short": "Deprecated alias for `recipient_account_id`.",
						"deprecated": true,
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "organization_id",
						"title": "Organization Id",
						"type": "`$STRING`",
						"short": "Organization identifier.",
					},
					map[string]any{
						"name": "recipient_account_id",
						"title": "Recipient Account Id",
						"type": "`$STRING`",
						"short": "The account that will receive the share.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ANY`",
						"op": map[string]any{
							"load": map[string]any{
								"req": true,
								"type": "`$ANY`",
							},
						},
						"short": "A recipient of a share.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "resource_sharing_share_recipient_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/shares/{share_id}/recipients",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
									map[string]any{
										"var": "share_id",
									},
									map[string]any{
										"lit": "recipients",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
									"{share_id}",
									"recipients",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "share_id",
											"orig": "share_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"share_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
									map[string]any{
										"var": "share_id",
									},
									map[string]any{
										"lit": "recipients",
									},
									map[string]any{
										"var": "recipient_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
									"{share_id}",
									"recipients",
									"{recipient_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "recipient_id",
											"orig": "recipient_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
										map[string]any{
											"name": "share_id",
											"orig": "share_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
									},
									"query": []any{
										map[string]any{
											"name": "include_resource",
											"orig": "include_resource",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"include_resource",
										"recipient_id",
										"share_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
									map[string]any{
										"var": "share_id",
									},
									map[string]any{
										"lit": "recipients",
									},
									map[string]any{
										"var": "recipient_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
									"{share_id}",
									"recipients",
									"{recipient_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "recipient_id",
											"orig": "recipient_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
										map[string]any{
											"name": "share_id",
											"orig": "share_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"recipient_id",
										"share_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"resource_sharing_share_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "resource_sharing_share_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/shares",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "asc",
										},
										map[string]any{
											"name": "include_recipient_count",
											"orig": "include_recipient_count",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "include_resource",
											"orig": "include_resource",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "kind",
											"orig": "kind",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order",
											"orig": "order",
											"type": "`$STRING`",
											"kind": "query",
											"example": "created",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 2,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "resource_type",
											"orig": "resource_type",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "tag",
											"orig": "tag",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "target_type",
											"orig": "target_type",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"target_type",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{organization_id}/shares",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "shares",
									},
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"shares",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "organization_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "asc",
										},
										map[string]any{
											"name": "kind",
											"orig": "kind",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order",
											"orig": "order",
											"type": "`$STRING`",
											"kind": "query",
											"example": "created",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 2,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "resource_type",
											"orig": "resource_type",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "target_type",
											"orig": "target_type",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"direction",
										"kind",
										"order",
										"organization_id",
										"page",
										"per_page",
										"resource_type",
										"status",
										"target_type",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.organization",
						},
					},
				},
			},
			"resource_sharing_share_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the share.",
					},
					map[string]any{
						"name": "recipients",
						"title": "Recipients",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "resources",
						"title": "Resources",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ANY`",
						"op": map[string]any{
							"load": map[string]any{
								"req": true,
								"type": "`$ANY`",
							},
						},
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "resource_sharing_share_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/shares",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/shares/{share_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
									map[string]any{
										"var": "share_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
									"{share_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "share_id",
											"orig": "share_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
									},
									"query": []any{
										map[string]any{
											"name": "include_recipient_count",
											"orig": "include_recipient_count",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "include_resource",
											"orig": "include_resource",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"include_recipient_count",
										"include_resource",
										"share_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/shares/{share_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
									map[string]any{
										"var": "share_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
									"{share_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "share_id",
											"orig": "share_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"share_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/shares/{share_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "shares",
									},
									map[string]any{
										"var": "share_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"shares",
									"{share_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "share_id",
											"orig": "share_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3fd85f74b32742f1bff64a85009dda07",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"share_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"scim_discovery": map[string]any{
				"fields": []any{},
				"name": "scim_discovery",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/scim/v2/ResourceTypes/{resource_type_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "scim",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "ResourceTypes",
									},
									map[string]any{
										"var": "resource_type_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"scim",
									"v2",
									"ResourceTypes",
									"{resource_type_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "resource_type_id",
											"orig": "resource_type_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "User",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"resource_type_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/scim/v2/Schemas/{schema_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "scim",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "Schemas",
									},
									map[string]any{
										"var": "schema_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"scim",
									"v2",
									"Schemas",
									"{schema_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "schema_id",
											"orig": "schema_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "urn:ietf:params:scim:schemas:core:2.0:User",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"schema_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/scim/v2/ResourceTypes",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "scim",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "ResourceTypes",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"scim",
									"v2",
									"ResourceTypes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/scim/v2/Schemas",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "scim",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "Schemas",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"scim",
									"v2",
									"Schemas",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/scim/v2/ServiceProviderConfig",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "scim",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "ServiceProviderConfig",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"scim",
									"v2",
									"ServiceProviderConfig",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
						},
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"scim_group": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "scim_group",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/scim/v2/Groups",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "scim",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "Groups",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"scim",
									"v2",
									"Groups",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/scim/v2/Groups",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "scim",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "Groups",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"scim",
									"v2",
									"Groups",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "count",
											"orig": "count",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "displayName eq \"My Group\"",
										},
										map[string]any{
											"name": "start_index",
											"orig": "start_index",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"count",
										"filter",
										"start_index",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/scim/v2/Groups/{group_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "scim",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "Groups",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"scim",
									"v2",
									"Groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "cloudflare-v1-023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/scim/v2/Groups/{group_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "scim",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "Groups",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"scim",
									"v2",
									"Groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "cloudflare-v1-023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/scim/v2/Groups/{group_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "scim",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "Groups",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"scim",
									"v2",
									"Groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "cloudflare-v1-023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/scim/v2/Groups/{group_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "scim",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "Groups",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"scim",
									"v2",
									"Groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "cloudflare-v1-023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"scim_user": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "scim_user",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/scim/v2/Users",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "scim",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "Users",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"scim",
									"v2",
									"Users",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/scim/v2/Users",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "scim",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "Users",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"scim",
									"v2",
									"Users",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "count",
											"orig": "count",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "userName eq \"user@example.com\"",
										},
										map[string]any{
											"name": "start_index",
											"orig": "start_index",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"count",
										"filter",
										"start_index",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/scim/v2/Users/{user_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "scim",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "Users",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"scim",
									"v2",
									"Users",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"user_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "user_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/scim/v2/Users/{user_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "scim",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "Users",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"scim",
									"v2",
									"Users",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"user_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "user_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/scim/v2/Users/{user_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "scim",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "Users",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"scim",
									"v2",
									"Users",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"user_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "user_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/scim/v2/Users/{user_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "scim",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "Users",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"scim",
									"v2",
									"Users",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"user_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "user_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"sso_connector": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "sso_connector",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/sso_connectors/{sso_connector_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "sso_connectors",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"sso_connectors",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"sso_connector_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "sso_connector_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"tenant": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "tenant",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/tenants/{tenant_id}/accounts",
								"segments": []any{
									map[string]any{
										"lit": "tenants",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "accounts",
									},
								},
								"parts": []any{
									"tenants",
									"{id}",
									"accounts",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tenant_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "tenant_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "account",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/tenants/{tenant_id}/account_types",
								"segments": []any{
									map[string]any{
										"lit": "tenants",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "account_types",
									},
								},
								"parts": []any{
									"tenants",
									"{id}",
									"account_types",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tenant_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "tenant_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "account_type",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/tenants/{tenant_id}/entitlements",
								"segments": []any{
									map[string]any{
										"lit": "tenants",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "entitlements",
									},
								},
								"parts": []any{
									"tenants",
									"{id}",
									"entitlements",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tenant_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "tenant_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "entitlement",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/tenants/{tenant_id}/memberships",
								"segments": []any{
									map[string]any{
										"lit": "tenants",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "memberships",
									},
								},
								"parts": []any{
									"tenants",
									"{id}",
									"memberships",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tenant_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "tenant_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "membership",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/tenants/{tenant_id}",
								"segments": []any{
									map[string]any{
										"lit": "tenants",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"tenants",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"tenant_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "tenant_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"token": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "token",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/tokens/{token_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"tokens",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"token_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "token_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ed17574386854bf78a67040be0a770b0",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/user/tokens/{token_id}",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"user",
									"tokens",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"token_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "token_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ed17574386854bf78a67040be0a770b0",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"user": map[string]any{
				"fields": []any{},
				"name": "user",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/user/tenants",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "tenants",
									},
								},
								"parts": []any{
									"user",
									"tenants",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "tenant",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user_group": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "user_group",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/iam/user_groups/{user_group_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "iam",
									},
									map[string]any{
										"lit": "user_groups",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"iam",
									"user_groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"user_group_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "user_group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.account",
						},
					},
				},
			},
			"users_account_membership": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "users_account_membership",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/memberships/{membership_id}",
								"segments": []any{
									map[string]any{
										"lit": "memberships",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"memberships",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"membership_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "membership_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "4536bcfad5faccb111b47003c79917fa",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"users_organization": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "users_organization",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/user/organizations/{organization_id}",
								"segments": []any{
									map[string]any{
										"lit": "user",
									},
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"user",
									"organizations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"organization_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "organization_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
