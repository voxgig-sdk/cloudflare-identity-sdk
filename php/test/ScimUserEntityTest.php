<?php
declare(strict_types=1);

// ScimUser entity test

require_once __DIR__ . '/../cloudflareidentity_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ScimUserEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudflareIdentitySDK::test(null, null);
        $ent = $testsdk->ScimUser(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = scim_user_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "scim_user." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_IDENTITY_TEST_SCIM_USER_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $scim_user_ref01_ent = $client->ScimUser(null);
        $scim_user_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.scim_user"), "scim_user_ref01"));
        $scim_user_ref01_data["account_id"] = $setup["idmap"]["account01"];

        $scim_user_ref01_data_result = $scim_user_ref01_ent->create($scim_user_ref01_data, null);
        $scim_user_ref01_data = Helpers::to_map(is_object($scim_user_ref01_data_result) && method_exists($scim_user_ref01_data_result, 'data_get') ? $scim_user_ref01_data_result->data_get() : $scim_user_ref01_data_result);
        $this->assertNotNull($scim_user_ref01_data);
        $this->assertNotNull($scim_user_ref01_data["id"]);

        // UPDATE
        $scim_user_ref01_data_up0_up = [
            "id" => $scim_user_ref01_data["id"],
            "account_id" => $setup["idmap"]["account_id"],
        ];

        $scim_user_ref01_resdata_up0_result = $scim_user_ref01_ent->update($scim_user_ref01_data_up0_up, null);
        $scim_user_ref01_resdata_up0 = Helpers::to_map(is_object($scim_user_ref01_resdata_up0_result) && method_exists($scim_user_ref01_resdata_up0_result, 'data_get') ? $scim_user_ref01_resdata_up0_result->data_get() : $scim_user_ref01_resdata_up0_result);
        $this->assertNotNull($scim_user_ref01_resdata_up0);
        $this->assertEquals($scim_user_ref01_resdata_up0["id"], $scim_user_ref01_data_up0_up["id"]);

        // LOAD
        $scim_user_ref01_match_dt0 = [
            "id" => $scim_user_ref01_data["id"],
        ];
        $scim_user_ref01_data_dt0_loaded = $scim_user_ref01_ent->load($scim_user_ref01_match_dt0, null);
        $scim_user_ref01_data_dt0_load_result = Helpers::to_map(is_object($scim_user_ref01_data_dt0_loaded) && method_exists($scim_user_ref01_data_dt0_loaded, 'data_get') ? $scim_user_ref01_data_dt0_loaded->data_get() : $scim_user_ref01_data_dt0_loaded);
        $this->assertNotNull($scim_user_ref01_data_dt0_load_result);
        $this->assertEquals($scim_user_ref01_data_dt0_load_result["id"], $scim_user_ref01_data["id"]);

        // REMOVE
        $scim_user_ref01_match_rm0 = [
            "id" => $scim_user_ref01_data["id"],
        ];
        $scim_user_ref01_ent->remove($scim_user_ref01_match_rm0, null);

    }
}

function scim_user_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/scim_user/ScimUserTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudflareIdentitySDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["scim_user01", "scim_user02", "scim_user03", "account01", "account02", "account03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDFLARE_IDENTITY_TEST_SCIM_USER_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDFLARE_IDENTITY_TEST_SCIM_USER_ENTID" => $idmap,
        "CLOUDFLARE_IDENTITY_TEST_LIVE" => "FALSE",
        "CLOUDFLARE_IDENTITY_TEST_EXPLAIN" => "FALSE",
        "CLOUDFLARE_IDENTITY_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDFLARE_IDENTITY_TEST_SCIM_USER_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["account_id"])) {
        $idmap_resolved["account_id"] = $idmap_resolved["account01"];
    }

    if ($env["CLOUDFLARE_IDENTITY_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["CLOUDFLARE_IDENTITY_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new CloudflareIdentitySDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["CLOUDFLARE_IDENTITY_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["CLOUDFLARE_IDENTITY_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
