-- IamSsoConnector entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-identity_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("IamSsoConnectorEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:IamSsoConnector(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = iam_sso_connector_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "iam_sso_connector." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_IDENTITY_TEST_IAM_SSO_CONNECTOR_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local iam_sso_connector_ref01_ent = client:IamSsoConnector(nil)
    local iam_sso_connector_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.iam_sso_connector"), "iam_sso_connector_ref01"))
    iam_sso_connector_ref01_data["account_id"] = setup.idmap["account01"]

    local iam_sso_connector_ref01_data_result, err = iam_sso_connector_ref01_ent:create(iam_sso_connector_ref01_data, nil)
    assert.is_nil(err)
    iam_sso_connector_ref01_data = helpers.to_map(type(iam_sso_connector_ref01_data_result) == 'table' and iam_sso_connector_ref01_data_result.data_get and iam_sso_connector_ref01_data_result:data_get() or iam_sso_connector_ref01_data_result)
    assert.is_not_nil(iam_sso_connector_ref01_data)
    assert.is_not_nil(iam_sso_connector_ref01_data["id"])

    -- UPDATE
    local iam_sso_connector_ref01_data_up0_up = {
      id = iam_sso_connector_ref01_data["id"],
      ["account_id"] = setup.idmap["account_id"],
    }

    local iam_sso_connector_ref01_markdef_up0_name = "email_domain"
    local iam_sso_connector_ref01_markdef_up0_value = "Mark01-iam_sso_connector_ref01_" .. tostring(setup.now)
    iam_sso_connector_ref01_data_up0_up[iam_sso_connector_ref01_markdef_up0_name] = iam_sso_connector_ref01_markdef_up0_value

    local iam_sso_connector_ref01_resdata_up0_result, err = iam_sso_connector_ref01_ent:update(iam_sso_connector_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local iam_sso_connector_ref01_resdata_up0 = helpers.to_map(type(iam_sso_connector_ref01_resdata_up0_result) == 'table' and iam_sso_connector_ref01_resdata_up0_result.data_get and iam_sso_connector_ref01_resdata_up0_result:data_get() or iam_sso_connector_ref01_resdata_up0_result)
    assert.is_not_nil(iam_sso_connector_ref01_resdata_up0)
    assert.are.equal(iam_sso_connector_ref01_resdata_up0["id"], iam_sso_connector_ref01_data_up0_up["id"])
    assert.are.equal(iam_sso_connector_ref01_resdata_up0[iam_sso_connector_ref01_markdef_up0_name], iam_sso_connector_ref01_markdef_up0_value)

    -- LOAD
    local iam_sso_connector_ref01_match_dt0 = {
      id = iam_sso_connector_ref01_data["id"],
    }
    local iam_sso_connector_ref01_data_dt0_loaded, err = iam_sso_connector_ref01_ent:load(iam_sso_connector_ref01_match_dt0, nil)
    assert.is_nil(err)
    local iam_sso_connector_ref01_data_dt0_load_result = helpers.to_map(type(iam_sso_connector_ref01_data_dt0_loaded) == 'table' and iam_sso_connector_ref01_data_dt0_loaded.data_get and iam_sso_connector_ref01_data_dt0_loaded:data_get() or iam_sso_connector_ref01_data_dt0_loaded)
    assert.is_not_nil(iam_sso_connector_ref01_data_dt0_load_result)
    assert.are.equal(iam_sso_connector_ref01_data_dt0_load_result["id"], iam_sso_connector_ref01_data["id"])

  end)
end)

function iam_sso_connector_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/iam_sso_connector/IamSsoConnectorTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read iam_sso_connector test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "iam_sso_connector01", "iam_sso_connector02", "iam_sso_connector03", "account01", "account02", "account03" },
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
  local entid_env_raw = os.getenv("CLOUDFLARE_IDENTITY_TEST_IAM_SSO_CONNECTOR_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDFLARE_IDENTITY_TEST_IAM_SSO_CONNECTOR_ENTID"] = idmap,
    ["CLOUDFLARE_IDENTITY_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_IDENTITY_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDFLARE_IDENTITY_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDFLARE_IDENTITY_TEST_IAM_SSO_CONNECTOR_ENTID"])
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
