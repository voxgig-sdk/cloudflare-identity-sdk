# cloudflare-identity-cli

boru-driven command-line client **and** interactive REPL for the CloudflareIdentity
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/cloudflare-identity-cli)
make build

# 2. See usage (words, entities, env vars)
./cloudflare-identity-cli --help

# 3. Provide credentials once, via the environment
export CLOUDFLARE_IDENTITY_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:
./cloudflare-identity-cli list aaa_audit_logs_v2_org_history_response_collection
./cloudflare-identity-cli list aaa_audit_logs_v2_org_response_collection

# 5. Override the API base URL for a single call
CLOUDFLARE_IDENTITY_BASE=https://api.example.com ./cloudflare-identity-cli list aaa_audit_logs_v2_org_history_response_collection

# 6. No arguments -> interactive REPL
./cloudflare-identity-cli
cloudflare-identity> list aaa_audit_logs_v2_org_history_response_collection
cloudflare-identity> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/cloudflare-identity-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export CLOUDFLARE_IDENTITY_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/cloudflare-identity-cli list aaa_audit_logs_v2_org_history_response_collection
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### List the records of an entity

```sh
./cloudflare-identity-cli list aaa_audit_logs_v2_org_history_response_collection
```

`list <entity>` returns the first page of records. `<entity>` is a bareword —
it is auto-quoted as an boru atom, so no quotes are needed.

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export CLOUDFLARE_IDENTITY_APIKEY=sk_live_xxx            # API key
export CLOUDFLARE_IDENTITY_BASE=https://api.example.com  # optional: override the API base URL
./cloudflare-identity-cli list aaa_audit_logs_v2_org_history_response_collection
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `cloudflare-identity>`). Each line is
evaluated as its own boru expression:

```text
$ ./cloudflare-identity-cli
cloudflare-identity> list aaa_audit_logs_v2_org_history_response_collection
cloudflare-identity> /help
cloudflare-identity> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 61 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `aaa_audit_logs_v2_org_history_response_collection`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `CLOUDFLARE_IDENTITY_APIKEY` | API key sent with every request. |
| `CLOUDFLARE_IDENTITY_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/cloudflare-identity-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 61 entities this SDK exposes (any is valid as `<entity>`):

aaa_audit_logs_v2_org_history_response_collection aaa_audit_logs_v2_org_response_collection account account_resource_group account_user_group account_user_group_member begin_verification bill_subs_api_client_secret_response_single billable_usage_api_v2_usage dns_custom_nameservers_empty_response_3 dns_custom_nameservers_tcns_response_collection dns_custom_nameservers_tcns_response_single iam_api_response_single_id iam_collection_member_response_with_policy iam_collection_oauth_client iam_collection_oauth_scope iam_collection_organization iam_collection_permission_group iam_collection_role iam_collection_token iam_oauth_client_rotate_secret iam_permissions_group_response_collection iam_response_single_value iam_schemas_collection_invite iam_single_invite iam_single_member_response_with_policy iam_single_membership_response_with_policy iam_single_oauth_client iam_single_oauth_client_create iam_single_organization iam_single_permission_group iam_single_role iam_single_token iam_single_token_create iam_sso_connector iam_sso_connector_collection iam_token_verify_response_single_segment member oauth_client organization organization_member organizations_api_profile resource resource_group resource_sharing resource_sharing_share_excluded_recipient_response_collection resource_sharing_share_excluded_recipient_response_single resource_sharing_share_recipient_response_collection resource_sharing_share_recipient_response_single resource_sharing_share_response_collection resource_sharing_share_response_single scim_discovery scim_group scim_user sso_connector tenant token user user_group users_account_membership users_organization

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./cloudflare-identity-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.
