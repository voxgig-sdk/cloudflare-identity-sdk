-- ScimGroup entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-identity_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("ScimGroupEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:ScimGroup(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = scim_group_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "scim_group." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_IDENTITY_TEST_SCIM_GROUP_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local scim_group_ref01_ent = client:ScimGroup(nil)
    local scim_group_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.scim_group"), "scim_group_ref01"))
    scim_group_ref01_data["account_id"] = setup.idmap["account01"]

    local scim_group_ref01_data_result, err = scim_group_ref01_ent:create(scim_group_ref01_data, nil)
    assert.is_nil(err)
    scim_group_ref01_data = helpers.to_map(type(scim_group_ref01_data_result) == 'table' and scim_group_ref01_data_result.data_get and scim_group_ref01_data_result:data_get() or scim_group_ref01_data_result)
    assert.is_not_nil(scim_group_ref01_data)
    assert.is_not_nil(scim_group_ref01_data["id"])

    -- UPDATE
    local scim_group_ref01_data_up0_up = {
      id = scim_group_ref01_data["id"],
      ["account_id"] = setup.idmap["account_id"],
    }

    local scim_group_ref01_resdata_up0_result, err = scim_group_ref01_ent:update(scim_group_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local scim_group_ref01_resdata_up0 = helpers.to_map(type(scim_group_ref01_resdata_up0_result) == 'table' and scim_group_ref01_resdata_up0_result.data_get and scim_group_ref01_resdata_up0_result:data_get() or scim_group_ref01_resdata_up0_result)
    assert.is_not_nil(scim_group_ref01_resdata_up0)
    assert.are.equal(scim_group_ref01_resdata_up0["id"], scim_group_ref01_data_up0_up["id"])

    -- LOAD
    local scim_group_ref01_match_dt0 = {
      id = scim_group_ref01_data["id"],
    }
    local scim_group_ref01_data_dt0_loaded, err = scim_group_ref01_ent:load(scim_group_ref01_match_dt0, nil)
    assert.is_nil(err)
    local scim_group_ref01_data_dt0_load_result = helpers.to_map(type(scim_group_ref01_data_dt0_loaded) == 'table' and scim_group_ref01_data_dt0_loaded.data_get and scim_group_ref01_data_dt0_loaded:data_get() or scim_group_ref01_data_dt0_loaded)
    assert.is_not_nil(scim_group_ref01_data_dt0_load_result)
    assert.are.equal(scim_group_ref01_data_dt0_load_result["id"], scim_group_ref01_data["id"])

    -- REMOVE
    local scim_group_ref01_match_rm0 = {
      id = scim_group_ref01_data["id"],
    }
    local _, err = scim_group_ref01_ent:remove(scim_group_ref01_match_rm0, nil)
    assert.is_nil(err)

  end)
end)

function scim_group_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/scim_group/ScimGroupTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read scim_group test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "scim_group01", "scim_group02", "scim_group03", "account01", "account02", "account03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("CLOUDFLARE_IDENTITY_TEST_SCIM_GROUP_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDFLARE_IDENTITY_TEST_SCIM_GROUP_ENTID"] = idmap,
    ["CLOUDFLARE_IDENTITY_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_IDENTITY_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDFLARE_IDENTITY_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDFLARE_IDENTITY_TEST_SCIM_GROUP_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["account_id"] == nil then
    idmap_resolved["account_id"] = idmap_resolved["account01"]
  end

  if env["CLOUDFLARE_IDENTITY_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["CLOUDFLARE_IDENTITY_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["CLOUDFLARE_IDENTITY_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["CLOUDFLARE_IDENTITY_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
