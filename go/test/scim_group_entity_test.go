package sdktest

import (
	"encoding/json"
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

func TestScimGroupEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ScimGroup(nil)
		if ent == nil {
			t.Fatal("expected non-nil ScimGroupEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := scim_groupBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "scim_group." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_IDENTITY_TEST_SCIM_GROUP_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		scimGroupRef01Ent := client.ScimGroup(nil)
		scimGroupRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "scim_group"}), "scim_group_ref01"))
		scimGroupRef01Data["account_id"] = setup.idmap["account01"]

		scimGroupRef01DataResult, err := scimGroupRef01Ent.Create(scimGroupRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		scimGroupRef01Data = core.ToMapAny(entityData(scimGroupRef01DataResult))
		if scimGroupRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if scimGroupRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		scimGroupRef01DataUp0Up := map[string]any{
			"id": scimGroupRef01Data["id"],
			"account_id": setup.idmap["account_id"],
		}

		scimGroupRef01ResdataUp0Result, err := scimGroupRef01Ent.Update(scimGroupRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		scimGroupRef01ResdataUp0 := core.ToMapAny(entityData(scimGroupRef01ResdataUp0Result))
		if scimGroupRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if scimGroupRef01ResdataUp0["id"] != scimGroupRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}

		// LOAD
		scimGroupRef01MatchDt0 := map[string]any{
			"id": scimGroupRef01Data["id"],
		}
		scimGroupRef01DataDt0Loaded, err := scimGroupRef01Ent.Load(scimGroupRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		scimGroupRef01DataDt0LoadResult := core.ToMapAny(entityData(scimGroupRef01DataDt0Loaded))
		if scimGroupRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if scimGroupRef01DataDt0LoadResult["id"] != scimGroupRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		scimGroupRef01MatchRm0 := map[string]any{
			"id": scimGroupRef01Data["id"],
		}
		_, err = scimGroupRef01Ent.Remove(scimGroupRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func scim_groupBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "scim_group", "ScimGroupTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read scim_group test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse scim_group test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"scim_group01", "scim_group02", "scim_group03", "account01", "account02", "account03"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_IDENTITY_TEST_SCIM_GROUP_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_IDENTITY_TEST_SCIM_GROUP_ENTID": idmap,
		"CLOUDFLARE_IDENTITY_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_IDENTITY_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_IDENTITY_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_IDENTITY_TEST_SCIM_GROUP_ENTID"])
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
