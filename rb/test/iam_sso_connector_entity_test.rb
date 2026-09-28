# IamSsoConnector entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareIdentity_sdk"
require_relative "runner"

class IamSsoConnectorEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareIdentitySDK.test(nil, nil)
    ent = testsdk.IamSsoConnector(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = iam_sso_connector_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "iam_sso_connector." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_IDENTITY_TEST_IAM_SSO_CONNECTOR_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    iam_sso_connector_ref01_ent = client.IamSsoConnector(nil)
    iam_sso_connector_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.iam_sso_connector"), "iam_sso_connector_ref01"))
    iam_sso_connector_ref01_data["account_id"] = setup[:idmap]["account01"]

    iam_sso_connector_ref01_data_result = iam_sso_connector_ref01_ent.create(iam_sso_connector_ref01_data, nil)
    iam_sso_connector_ref01_data = Helpers.to_map(iam_sso_connector_ref01_data_result.respond_to?(:data_get) ? iam_sso_connector_ref01_data_result.data_get : iam_sso_connector_ref01_data_result)
    assert !iam_sso_connector_ref01_data.nil?
    assert !iam_sso_connector_ref01_data["id"].nil?

    # UPDATE
    iam_sso_connector_ref01_data_up0_up = {
      "id" => iam_sso_connector_ref01_data["id"],
      "account_id" => setup[:idmap]["account_id"],
    }

    iam_sso_connector_ref01_markdef_up0_name = "email_domain"
    iam_sso_connector_ref01_markdef_up0_value = "Mark01-iam_sso_connector_ref01_#{setup[:now]}"
    iam_sso_connector_ref01_data_up0_up[iam_sso_connector_ref01_markdef_up0_name] = iam_sso_connector_ref01_markdef_up0_value

    iam_sso_connector_ref01_resdata_up0_result = iam_sso_connector_ref01_ent.update(iam_sso_connector_ref01_data_up0_up, nil)
    iam_sso_connector_ref01_resdata_up0 = Helpers.to_map(iam_sso_connector_ref01_resdata_up0_result.respond_to?(:data_get) ? iam_sso_connector_ref01_resdata_up0_result.data_get : iam_sso_connector_ref01_resdata_up0_result)
    assert !iam_sso_connector_ref01_resdata_up0.nil?
    assert_equal iam_sso_connector_ref01_resdata_up0["id"], iam_sso_connector_ref01_data_up0_up["id"]
    assert_equal iam_sso_connector_ref01_resdata_up0[iam_sso_connector_ref01_markdef_up0_name], iam_sso_connector_ref01_markdef_up0_value

    # LOAD
    iam_sso_connector_ref01_match_dt0 = {
      "id" => iam_sso_connector_ref01_data["id"],
    }
    iam_sso_connector_ref01_data_dt0_loaded = iam_sso_connector_ref01_ent.load(iam_sso_connector_ref01_match_dt0, nil)
    iam_sso_connector_ref01_data_dt0_load_result = Helpers.to_map(iam_sso_connector_ref01_data_dt0_loaded.respond_to?(:data_get) ? iam_sso_connector_ref01_data_dt0_loaded.data_get : iam_sso_connector_ref01_data_dt0_loaded)
    assert !iam_sso_connector_ref01_data_dt0_load_result.nil?
    assert_equal iam_sso_connector_ref01_data_dt0_load_result["id"], iam_sso_connector_ref01_data["id"]

  end
end

def iam_sso_connector_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "iam_sso_connector", "IamSsoConnectorTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareIdentitySDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["iam_sso_connector01", "iam_sso_connector02", "iam_sso_connector03", "account01", "account02", "account03"],
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
  entid_env_raw = ENV["CLOUDFLARE_IDENTITY_TEST_IAM_SSO_CONNECTOR_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_IDENTITY_TEST_IAM_SSO_CONNECTOR_ENTID" => idmap,
    "CLOUDFLARE_IDENTITY_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_IDENTITY_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_IDENTITY_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_IDENTITY_TEST_IAM_SSO_CONNECTOR_ENTID"])
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
