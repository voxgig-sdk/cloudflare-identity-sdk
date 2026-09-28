# ResourceSharing entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareIdentity_sdk"
require_relative "runner"

class ResourceSharingEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareIdentitySDK.test(nil, nil)
    ent = testsdk.ResourceSharing(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = resource_sharing_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "resource_sharing." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    resource_sharing_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.resource_sharing")))
    resource_sharing_ref01_data = nil
    if resource_sharing_ref01_data_raw.length > 0
      resource_sharing_ref01_data = Helpers.to_map(resource_sharing_ref01_data_raw[0][1])
    end

    # UPDATE
    resource_sharing_ref01_ent = client.ResourceSharing(nil)
    resource_sharing_ref01_data_up0_up = {
      "account_id" => setup[:idmap]["account_id"],
    }

    resource_sharing_ref01_resdata_up0_result = resource_sharing_ref01_ent.update(resource_sharing_ref01_data_up0_up, nil)
    resource_sharing_ref01_resdata_up0 = Helpers.to_map(resource_sharing_ref01_resdata_up0_result.respond_to?(:data_get) ? resource_sharing_ref01_resdata_up0_result.data_get : resource_sharing_ref01_resdata_up0_result)
    assert !resource_sharing_ref01_resdata_up0.nil?

  end
end

def resource_sharing_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "resource_sharing", "ResourceSharingTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareIdentitySDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["resource_sharing01", "resource_sharing02", "resource_sharing03", "account01", "account02", "account03"],
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
  entid_env_raw = ENV["CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_ENTID" => idmap,
    "CLOUDFLARE_IDENTITY_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_IDENTITY_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_IDENTITY_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_ENTID"])
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
