# IamSingleInvite entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareIdentity_sdk"
require_relative "runner"

class IamSingleInviteEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareIdentitySDK.test(nil, nil)
    ent = testsdk.IamSingleInvite(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = iam_single_invite_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "iam_single_invite." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_INVITE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    iam_single_invite_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.iam_single_invite")))
    iam_single_invite_ref01_data = nil
    if iam_single_invite_ref01_data_raw.length > 0
      iam_single_invite_ref01_data = Helpers.to_map(iam_single_invite_ref01_data_raw[0][1])
    end

    # UPDATE
    iam_single_invite_ref01_ent = client.IamSingleInvite(nil)
    iam_single_invite_ref01_data_up0_up = {
      "id" => iam_single_invite_ref01_data["id"],
    }

    iam_single_invite_ref01_resdata_up0_result = iam_single_invite_ref01_ent.update(iam_single_invite_ref01_data_up0_up, nil)
    iam_single_invite_ref01_resdata_up0 = Helpers.to_map(iam_single_invite_ref01_resdata_up0_result.respond_to?(:data_get) ? iam_single_invite_ref01_resdata_up0_result.data_get : iam_single_invite_ref01_resdata_up0_result)
    assert !iam_single_invite_ref01_resdata_up0.nil?
    assert_equal iam_single_invite_ref01_resdata_up0["id"], iam_single_invite_ref01_data_up0_up["id"]

    # LOAD
    iam_single_invite_ref01_match_dt0 = {
      "id" => iam_single_invite_ref01_data["id"],
    }
    iam_single_invite_ref01_data_dt0_loaded = iam_single_invite_ref01_ent.load(iam_single_invite_ref01_match_dt0, nil)
    iam_single_invite_ref01_data_dt0_load_result = Helpers.to_map(iam_single_invite_ref01_data_dt0_loaded.respond_to?(:data_get) ? iam_single_invite_ref01_data_dt0_loaded.data_get : iam_single_invite_ref01_data_dt0_loaded)
    assert !iam_single_invite_ref01_data_dt0_load_result.nil?
    assert_equal iam_single_invite_ref01_data_dt0_load_result["id"], iam_single_invite_ref01_data["id"]

  end
end

def iam_single_invite_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "iam_single_invite", "IamSingleInviteTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareIdentitySDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["iam_single_invite01", "iam_single_invite02", "iam_single_invite03"],
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
  entid_env_raw = ENV["CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_INVITE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_INVITE_ENTID" => idmap,
    "CLOUDFLARE_IDENTITY_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_IDENTITY_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_IDENTITY_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_IDENTITY_TEST_IAM_SINGLE_INVITE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
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
