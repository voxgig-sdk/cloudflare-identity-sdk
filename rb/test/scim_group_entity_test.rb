# ScimGroup entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareIdentity_sdk"
require_relative "runner"

class ScimGroupEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareIdentitySDK.test(nil, nil)
    ent = testsdk.ScimGroup(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = scim_group_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "scim_group." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_IDENTITY_TEST_SCIM_GROUP_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    scim_group_ref01_ent = client.ScimGroup(nil)
    scim_group_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.scim_group"), "scim_group_ref01"))
    scim_group_ref01_data["account_id"] = setup[:idmap]["account01"]

    scim_group_ref01_data_result = scim_group_ref01_ent.create(scim_group_ref01_data, nil)
    scim_group_ref01_data = Helpers.to_map(scim_group_ref01_data_result.respond_to?(:data_get) ? scim_group_ref01_data_result.data_get : scim_group_ref01_data_result)
    assert !scim_group_ref01_data.nil?
    assert !scim_group_ref01_data["id"].nil?

    # UPDATE
    scim_group_ref01_data_up0_up = {
      "id" => scim_group_ref01_data["id"],
      "account_id" => setup[:idmap]["account_id"],
    }

    scim_group_ref01_resdata_up0_result = scim_group_ref01_ent.update(scim_group_ref01_data_up0_up, nil)
    scim_group_ref01_resdata_up0 = Helpers.to_map(scim_group_ref01_resdata_up0_result.respond_to?(:data_get) ? scim_group_ref01_resdata_up0_result.data_get : scim_group_ref01_resdata_up0_result)
    assert !scim_group_ref01_resdata_up0.nil?
    assert_equal scim_group_ref01_resdata_up0["id"], scim_group_ref01_data_up0_up["id"]

    # LOAD
    scim_group_ref01_match_dt0 = {
      "id" => scim_group_ref01_data["id"],
    }
    scim_group_ref01_data_dt0_loaded = scim_group_ref01_ent.load(scim_group_ref01_match_dt0, nil)
    scim_group_ref01_data_dt0_load_result = Helpers.to_map(scim_group_ref01_data_dt0_loaded.respond_to?(:data_get) ? scim_group_ref01_data_dt0_loaded.data_get : scim_group_ref01_data_dt0_loaded)
    assert !scim_group_ref01_data_dt0_load_result.nil?
    assert_equal scim_group_ref01_data_dt0_load_result["id"], scim_group_ref01_data["id"]

    # REMOVE
    scim_group_ref01_match_rm0 = {
      "id" => scim_group_ref01_data["id"],
    }
    scim_group_ref01_ent.remove(scim_group_ref01_match_rm0, nil)

  end
end

def scim_group_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "scim_group", "ScimGroupTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareIdentitySDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["scim_group01", "scim_group02", "scim_group03", "account01", "account02", "account03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["CLOUDFLARE_IDENTITY_TEST_SCIM_GROUP_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_IDENTITY_TEST_SCIM_GROUP_ENTID" => idmap,
    "CLOUDFLARE_IDENTITY_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_IDENTITY_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_IDENTITY_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_IDENTITY_TEST_SCIM_GROUP_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["account_id"].nil?
    idmap_resolved["account_id"] = idmap_resolved["account01"]
  end

  if env["CLOUDFLARE_IDENTITY_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["CLOUDFLARE_IDENTITY_APIKEY"],
      },
      extra || {},
    ])
    client = CloudflareIdentitySDK.new(Helpers.to_map(merged_opts))
  end

  live = env["CLOUDFLARE_IDENTITY_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["CLOUDFLARE_IDENTITY_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
