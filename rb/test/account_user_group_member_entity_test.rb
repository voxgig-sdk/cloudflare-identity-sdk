# AccountUserGroupMember entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareIdentity_sdk"
require_relative "runner"

class AccountUserGroupMemberEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareIdentitySDK.test(nil, nil)
    ent = testsdk.AccountUserGroupMember(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "account_user_group_member" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CloudflareIdentitySDK.test(seed, nil)
    seen = base.AccountUserGroupMember(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CloudflareIdentityConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CloudflareIdentitySDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.AccountUserGroupMember(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = account_user_group_member_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "account_user_group_member." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_IDENTITY_TEST_ACCOUNT_USER_GROUP_MEMBER_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    account_user_group_member_ref01_ent = client.AccountUserGroupMember(nil)
    account_user_group_member_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.account_user_group_member"), "account_user_group_member_ref01"))
    account_user_group_member_ref01_data["account_id"] = setup[:idmap]["account01"]
    account_user_group_member_ref01_data["user_group_id"] = setup[:idmap]["user_group01"]

    account_user_group_member_ref01_data_result = account_user_group_member_ref01_ent.create(account_user_group_member_ref01_data, nil)
    account_user_group_member_ref01_data = Helpers.to_map(account_user_group_member_ref01_data_result.respond_to?(:data_get) ? account_user_group_member_ref01_data_result.data_get : account_user_group_member_ref01_data_result)
    assert !account_user_group_member_ref01_data.nil?
    assert !account_user_group_member_ref01_data["id"].nil?

    # LIST
    account_user_group_member_ref01_match = {
      "account_id" => setup[:idmap]["account01"],
      "user_group_id" => setup[:idmap]["user_group01"],
    }

    account_user_group_member_ref01_list_result = account_user_group_member_ref01_ent.list(account_user_group_member_ref01_match, nil)
    assert account_user_group_member_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(account_user_group_member_ref01_list_result),
      { "id" => account_user_group_member_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    account_user_group_member_ref01_data_up0_up = {
      "id" => account_user_group_member_ref01_data["id"],
      "account_id" => setup[:idmap]["account_id"],
    }

    account_user_group_member_ref01_resdata_up0_result = account_user_group_member_ref01_ent.update(account_user_group_member_ref01_data_up0_up, nil)
    account_user_group_member_ref01_resdata_up0 = Helpers.to_map(account_user_group_member_ref01_resdata_up0_result.respond_to?(:data_get) ? account_user_group_member_ref01_resdata_up0_result.data_get : account_user_group_member_ref01_resdata_up0_result)
    assert !account_user_group_member_ref01_resdata_up0.nil?
    assert_equal account_user_group_member_ref01_resdata_up0["id"], account_user_group_member_ref01_data_up0_up["id"]

    # LOAD
    account_user_group_member_ref01_match_dt0 = {
      "id" => account_user_group_member_ref01_data["id"],
    }
    account_user_group_member_ref01_data_dt0_loaded = account_user_group_member_ref01_ent.load(account_user_group_member_ref01_match_dt0, nil)
    account_user_group_member_ref01_data_dt0_load_result = Helpers.to_map(account_user_group_member_ref01_data_dt0_loaded.respond_to?(:data_get) ? account_user_group_member_ref01_data_dt0_loaded.data_get : account_user_group_member_ref01_data_dt0_loaded)
    assert !account_user_group_member_ref01_data_dt0_load_result.nil?
    assert_equal account_user_group_member_ref01_data_dt0_load_result["id"], account_user_group_member_ref01_data["id"]

    # REMOVE
    account_user_group_member_ref01_match_rm0 = {
      "id" => account_user_group_member_ref01_data["id"],
    }
    account_user_group_member_ref01_ent.remove(account_user_group_member_ref01_match_rm0, nil)

    # LIST
    account_user_group_member_ref01_match_rt0 = {
      "account_id" => setup[:idmap]["account01"],
      "user_group_id" => setup[:idmap]["user_group01"],
    }

    account_user_group_member_ref01_list_rt0_result = account_user_group_member_ref01_ent.list(account_user_group_member_ref01_match_rt0, nil)
    assert account_user_group_member_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(account_user_group_member_ref01_list_rt0_result),
      { "id" => account_user_group_member_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def account_user_group_member_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "account_user_group_member", "AccountUserGroupMemberTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareIdentitySDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["account_user_group_member01", "account_user_group_member02", "account_user_group_member03", "account01", "account02", "account03", "user_group01", "user_group02", "user_group03"],
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
  entid_env_raw = ENV["CLOUDFLARE_IDENTITY_TEST_ACCOUNT_USER_GROUP_MEMBER_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_IDENTITY_TEST_ACCOUNT_USER_GROUP_MEMBER_ENTID" => idmap,
    "CLOUDFLARE_IDENTITY_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_IDENTITY_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_IDENTITY_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_IDENTITY_TEST_ACCOUNT_USER_GROUP_MEMBER_ENTID"])
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
