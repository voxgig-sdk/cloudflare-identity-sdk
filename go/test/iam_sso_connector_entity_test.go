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

func TestIamSsoConnectorEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.IamSsoConnector(nil)
		if ent == nil {
			t.Fatal("expected non-nil IamSsoConnectorEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := iam_sso_connectorBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "iam_sso_connector." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_IDENTITY_TEST_IAM_SSO_CONNECTOR_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		iamSsoConnectorRef01Ent := client.IamSsoConnector(nil)
		iamSsoConnectorRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "iam_sso_connector"}), "iam_sso_connector_ref01"))
		iamSsoConnectorRef01Data["account_id"] = setup.idmap["account01"]

		iamSsoConnectorRef01DataResult, err := iamSsoConnectorRef01Ent.Create(iamSsoConnectorRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		iamSsoConnectorRef01Data = core.ToMapAny(entityData(iamSsoConnectorRef01DataResult))
		if iamSsoConnectorRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if iamSsoConnectorRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		iamSsoConnectorRef01DataUp0Up := map[string]any{
			"id": iamSsoConnectorRef01Data["id"],
			"account_id": setup.idmap["account_id"],
		}

		iamSsoConnectorRef01MarkdefUp0Name := "email_domain"
		iamSsoConnectorRef01MarkdefUp0Value := fmt.Sprintf("Mark01-iam_sso_connector_ref01_%d", setup.now)
		iamSsoConnectorRef01DataUp0Up[iamSsoConnectorRef01MarkdefUp0Name] = iamSsoConnectorRef01MarkdefUp0Value

		iamSsoConnectorRef01ResdataUp0Result, err := iamSsoConnectorRef01Ent.Update(iamSsoConnectorRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		iamSsoConnectorRef01ResdataUp0 := core.ToMapAny(entityData(iamSsoConnectorRef01ResdataUp0Result))
		if iamSsoConnectorRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if iamSsoConnectorRef01ResdataUp0["id"] != iamSsoConnectorRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if iamSsoConnectorRef01ResdataUp0[iamSsoConnectorRef01MarkdefUp0Name] != iamSsoConnectorRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", iamSsoConnectorRef01MarkdefUp0Name, iamSsoConnectorRef01ResdataUp0[iamSsoConnectorRef01MarkdefUp0Name])
		}

		// LOAD
		iamSsoConnectorRef01MatchDt0 := map[string]any{
			"id": iamSsoConnectorRef01Data["id"],
		}
		iamSsoConnectorRef01DataDt0Loaded, err := iamSsoConnectorRef01Ent.Load(iamSsoConnectorRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		iamSsoConnectorRef01DataDt0LoadResult := core.ToMapAny(entityData(iamSsoConnectorRef01DataDt0Loaded))
		if iamSsoConnectorRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if iamSsoConnectorRef01DataDt0LoadResult["id"] != iamSsoConnectorRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func iam_sso_connectorBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "iam_sso_connector", "IamSsoConnectorTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read iam_sso_connector test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse iam_sso_connector test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"iam_sso_connector01", "iam_sso_connector02", "iam_sso_connector03", "account01", "account02", "account03"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_IDENTITY_TEST_IAM_SSO_CONNECTOR_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_IDENTITY_TEST_IAM_SSO_CONNECTOR_ENTID": idmap,
		"CLOUDFLARE_IDENTITY_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_IDENTITY_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_IDENTITY_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_IDENTITY_TEST_IAM_SSO_CONNECTOR_ENTID"])
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
