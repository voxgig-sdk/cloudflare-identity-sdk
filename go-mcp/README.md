# cloudflare-identity-mcp

[MCP](https://modelcontextprotocol.io) server exposing the CloudflareIdentity SDK as
two agent tools — `cloudflare-identity_list` and `cloudflare-identity_load` — built on the
[official Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk) and the
sibling Go SDK at `../go`. Runs over **stdio** (default, for spawnable installs)
or **streamable HTTP** (one shared server for several agents).

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/cloudflare-identity-mcp)
make build

# 2. Provide credentials via the environment
export CLOUDFLARE_IDENTITY_APIKEY=sk_live_xxx

# 3a. Install into Claude Code over stdio (most common)
claude mcp add --scope user cloudflare-identity \
  -- /absolute/path/to/cloudflare-identity-mcp -transport stdio

# 3b. …or run a shared HTTP server instead
./cloudflare-identity-mcp -transport http -addr :8080
```

Tool-call arguments (what an agent sends):

```jsonc
// cloudflare-identity_list: first page of records
{ "entity": "aaa_audit_logs_v2_org_history_response_collection" }
{ "entity": "aaa_audit_logs_v2_org_history_response_collection", "query": { } }

// cloudflare-identity_load: one record by id
{ "entity": "account_resource_group", "query": { "id": 1 } }
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: install and call a tool

1. **Build** the server from this `go-mcp/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/cloudflare-identity-mcp
   ```

2. **Set your API key:**

   ```sh
   export CLOUDFLARE_IDENTITY_APIKEY=sk_live_xxx
   ```

3. **Install it into Claude Code** (stdio transport):

   ```sh
   claude mcp add --scope user cloudflare-identity \
     -- "$PWD"/dist/*/cloudflare-identity-mcp -transport stdio
   ```

4. **Restart Claude Code.** The `cloudflare-identity_list` and `cloudflare-identity_load` tools now appear
   in new sessions. Ask the agent to *"list aaa_audit_logs_v2_org_history_response_collection using cloudflare-identity"*
   and it calls `cloudflare-identity_list` with `{"entity":"aaa_audit_logs_v2_org_history_response_collection"}`.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export CLOUDFLARE_IDENTITY_APIKEY=sk_live_xxx            # API key
export CLOUDFLARE_IDENTITY_BASE=https://api.example.com  # optional: override the API base URL
```

Set these in the shell that launches the server (or in the `claude mcp add`
environment) so every tool call is authenticated.

### Run as a shared HTTP server

```sh
./cloudflare-identity-mcp -transport http -addr :8080
```

Streamable HTTP lets several agents share one running process; stdio (the
default) spawns a fresh process per client.

### Call the `cloudflare-identity_list` tool

Args: `entity` (required), `query` (optional filter map). Returns the first
page of records as JSON:

```jsonc
{ "entity": "aaa_audit_logs_v2_org_history_response_collection" }
```

### Call the `cloudflare-identity_load` tool

Args: `entity` (required), `query` = `{"id":N}` (required). Returns the single
record as JSON:

```jsonc
{ "entity": "account_resource_group", "query": { "id": 1 } }
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

## Reference

### Tools

| Tool | Args | Returns |
|------|------|---------|
| `cloudflare-identity_list` | `entity` (required), `query` (optional map) | First page of records as JSON |
| `cloudflare-identity_load` | `entity` (required), `query` = `{id:N}` | Single record as JSON |

On error, a tool returns an MCP error result (`isError: true`) whose text is the
failure message (e.g. unknown entity, or an API error).

### `Args` schema

Both tools take the same argument object:

| Field | Type | Notes |
|-------|------|-------|
| `entity` | string | One of the 61 supported entities (see below). |
| `query` | object | Optional match map. `{"id":N}` for load; omit or `{}` for list. |

JSON schemas are emitted by the SDK from the `Args` struct's `json` /
`jsonschema` tags — no schema is hand-written.

### Transports & flags

| Flag | Default | Purpose |
|------|---------|---------|
| `-transport` | `stdio` | `stdio` (spawnable) or `http` (streamable HTTP). |
| `-addr` | `:8080` | Listen address for the `http` transport. |

### Environment variables

| Variable | Purpose |
|----------|---------|
| `CLOUDFLARE_IDENTITY_APIKEY` | API key sent with every request. |
| `CLOUDFLARE_IDENTITY_BASE` | Optional override of the API base URL. |

### Entities

The 61 entities valid as the `entity` argument:

aaa_audit_logs_v2_org_history_response_collection | aaa_audit_logs_v2_org_response_collection | account | account_resource_group | account_user_group | account_user_group_member | begin_verification | bill_subs_api_client_secret_response_single | billable_usage_api_v2_usage | dns_custom_nameservers_empty_response_3 | dns_custom_nameservers_tcns_response_collection | dns_custom_nameservers_tcns_response_single | iam_api_response_single_id | iam_collection_member_response_with_policy | iam_collection_oauth_client | iam_collection_oauth_scope | iam_collection_organization | iam_collection_permission_group | iam_collection_role | iam_collection_token | iam_oauth_client_rotate_secret | iam_permissions_group_response_collection | iam_response_single_value | iam_schemas_collection_invite | iam_single_invite | iam_single_member_response_with_policy | iam_single_membership_response_with_policy | iam_single_oauth_client | iam_single_oauth_client_create | iam_single_organization | iam_single_permission_group | iam_single_role | iam_single_token | iam_single_token_create | iam_sso_connector | iam_sso_connector_collection | iam_token_verify_response_single_segment | member | oauth_client | organization | organization_member | organizations_api_profile | resource | resource_group | resource_sharing | resource_sharing_share_excluded_recipient_response_collection | resource_sharing_share_excluded_recipient_response_single | resource_sharing_share_recipient_response_collection | resource_sharing_share_recipient_response_single | resource_sharing_share_response_collection | resource_sharing_share_response_single | scim_discovery | scim_group | scim_user | sso_connector | tenant | token | user | user_group | users_account_membership | users_organization

### Smoke test via HTTP (raw JSON-RPC)

```sh
./cloudflare-identity-mcp -transport http -addr :18080 &

# initialize, grab the session id
curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -D headers \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}'

SESSION=$(awk '/Mcp-Session-Id/ {print $2}' headers | tr -d '\r')

curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H "Mcp-Session-Id: $SESSION" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"cloudflare-identity_load","arguments":{"entity":"account_resource_group","query":{"id":1}}}}'
```

## Explanation

### How tools map to the SDK

`main.go` builds the SDK client (configured from the environment) and registers
two tools. Each dispatches on the `entity` argument to the matching entity in
the sibling Go SDK at `../go`, calls `List` or `Load`, unwraps the `Entity`
wrappers to plain data, and returns it as pretty-printed JSON.

### Why two transports

**stdio** is the standard for agent hosts that spawn a server per client
(Claude Code's `claude mcp add`). **streamable HTTP** keeps one process running
that many agents can share — handy for a long-lived deployment.

### Schema generation

The input schema is derived from the `Args` Go struct's `json` / `jsonschema`
tags at registration time, so the advertised tool schema can never drift from
the code that consumes it.

## Generated by

sdkgen `go-mcp` target. See the target source under `.sdk/src/cmp/go-mcp/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-mcp/`.
