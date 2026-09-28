package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/cloudflare-identity-sdk/go"
	"github.com/voxgig-sdk/cloudflare-identity-sdk/go/core"

	vs "github.com/voxgig-sdk/cloudflare-identity-sdk/go/utility/struct"
)

func TestAccountUserGroupEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AccountUserGroup(nil)
		if ent == nil {
			t.Fatal("expected non-nil AccountUserGroupEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"account_user_group": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.AccountUserGroup(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.AccountUserGroup(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := account_user_groupBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "account_user_group." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_IDENTITY_TEST_ACCOUNT_USER_GROUP_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		accountUserGroupRef01Ent := client.AccountUserGroup(nil)
		accountUserGroupRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "account_user_group"}), "account_user_group_ref01"))
		accountUserGroupRef01Data["account_id"] = setup.idmap["account01"]

		accountUserGroupRef01DataResult, err := accountUserGroupRef01Ent.Create(accountUserGroupRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		accountUserGroupRef01Data = core.ToMapAny(entityData(accountUserGroupRef01DataResult))
		if accountUserGroupRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if accountUserGroupRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		accountUserGroupRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		accountUserGroupRef01ListResult, err := accountUserGroupRef01Ent.List(accountUserGroupRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		accountUserGroupRef01List, accountUserGroupRef01ListOk := accountUserGroupRef01ListResult.([]any)
		if !accountUserGroupRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", accountUserGroupRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(accountUserGroupRef01List), map[string]any{"id": accountUserGroupRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		accountUserGroupRef01DataUp0Up := map[string]any{
			"id": accountUserGroupRef01Data["id"],
			"account_id": setup.idmap["account_id"],
		}

		accountUserGroupRef01MarkdefUp0Name := "name"
		accountUserGroupRef01MarkdefUp0Value := fmt.Sprintf("Mark01-account_user_group_ref01_%d", setup.now)
		accountUserGroupRef01DataUp0Up[accountUserGroupRef01MarkdefUp0Name] = accountUserGroupRef01MarkdefUp0Value

		accountUserGroupRef01ResdataUp0Result, err := accountUserGroupRef01Ent.Update(accountUserGroupRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		accountUserGroupRef01ResdataUp0 := core.ToMapAny(entityData(accountUserGroupRef01ResdataUp0Result))
		if accountUserGroupRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if accountUserGroupRef01ResdataUp0["id"] != accountUserGroupRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if accountUserGroupRef01ResdataUp0[accountUserGroupRef01MarkdefUp0Name] != accountUserGroupRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", accountUserGroupRef01MarkdefUp0Name, accountUserGroupRef01ResdataUp0[accountUserGroupRef01MarkdefUp0Name])
		}

		// LOAD
		accountUserGroupRef01MatchDt0 := map[string]any{
			"id": accountUserGroupRef01Data["id"],
		}
		accountUserGroupRef01DataDt0Loaded, err := accountUserGroupRef01Ent.Load(accountUserGroupRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		accountUserGroupRef01DataDt0LoadResult := core.ToMapAny(entityData(accountUserGroupRef01DataDt0Loaded))
		if accountUserGroupRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if accountUserGroupRef01DataDt0LoadResult["id"] != accountUserGroupRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func account_user_groupBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "account_user_group", "AccountUserGroupTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read account_user_group test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse account_user_group test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"account_user_group01", "account_user_group02", "account_user_group03", "account01", "account02", "account03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CLOUDFLARE_IDENTITY_TEST_ACCOUNT_USER_GROUP_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_IDENTITY_TEST_ACCOUNT_USER_GROUP_ENTID": idmap,
		"CLOUDFLARE_IDENTITY_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_IDENTITY_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_IDENTITY_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_IDENTITY_TEST_ACCOUNT_USER_GROUP_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add account_id alias for update test.
	if idmapResolved["account_id"] == nil {
		idmapResolved["account_id"] = idmapResolved["account01"]
	}

	if env["CLOUDFLARE_IDENTITY_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["CLOUDFLARE_IDENTITY_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewCloudflareIdentitySDK(core.ToMapAny(mergedOpts))
	}

	live := env["CLOUDFLARE_IDENTITY_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CLOUDFLARE_IDENTITY_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
