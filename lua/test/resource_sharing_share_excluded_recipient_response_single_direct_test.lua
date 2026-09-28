-- ResourceSharingShareExcludedRecipientResponseSingle direct test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-identity_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

describe("ResourceSharingShareExcludedRecipientResponseSingleDirect", function()
  it("should direct-load-resource_sharing_share_excluded_recipient_response_single", function()
    local setup = resource_sharing_share_excluded_recipient_response_single_direct_setup({ id = "direct01" })
    local _should_skip, _reason = runner.is_control_skipped("direct", "direct-load-resource_sharing_share_excluded_recipient_response_single", setup.live and "live" or "unit")
    if _should_skip then
      pending(_reason or "skipped via sdk-test-control.json")
      return
    end
    local client = setup.client

    local params = {}
    local query = {}
    if setup.live then
      params["account_id"] = "023e105f4ecef8ad9ca31a8372d0c353"
      params["excluded_recipient_id"] = "4ae96b85c43850f2c0a7b9101a0eeb18"
      params["share_id"] = "3fd85f74b32742f1bff64a85009dda07"
    else
      params["account_id"] = "direct01"
      params["excluded_recipient_id"] = "direct02"
      params["share_id"] = "direct03"
    end

    local result, err = client:direct({
      path = "accounts/{account_id}/shares/{share_id}/excluded-recipients/{excluded_recipient_id}",
      method = "GET",
      params = params,
      query = query,
    })
    if setup.live then
      -- Live mode is lenient: synthetic IDs frequently 4xx. Skip rather
      -- than fail when the load endpoint isn't reachable with the IDs we
      -- can construct from setup.idmap.
      if err ~= nil then
        pending("load call failed (likely synthetic IDs against live API): " .. tostring(err))
        return
      end
      if not result["ok"] then
        pending("load call not ok (likely synthetic IDs against live API)")
        return
      end
      local status = helpers.to_int(result["status"])
      if status < 200 or status >= 300 then
        pending("expected 2xx status, got " .. tostring(status))
        return
      end
    else
      assert.is_nil(err)
      assert.is_true(result["ok"])
      assert.are.equal(200, helpers.to_int(result["status"]))
      assert.is_not_nil(result["data"])
      if type(result["data"]) == "table" then
        assert.are.equal("direct01", result["data"]["id"])
      end
      assert.are.equal(1, #setup.calls)
    end
  end)

end)


function resource_sharing_share_excluded_recipient_response_single_direct_setup(mockres)
  runner.load_env_local()

  local calls = {}

  local env = runner.env_override({
    ["CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_EXCLUDED_RECIPIENT_RESPONSE_SINGLE_ENTID"] = {},
    ["CLOUDFLARE_IDENTITY_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_IDENTITY_APIKEY"] = "",
  })

  local live = env["CLOUDFLARE_IDENTITY_TEST_LIVE"] == "TRUE"

  if live then
    local merged_opts = {
      apikey = env["CLOUDFLARE_IDENTITY_APIKEY"],
    }
    -- sdk-test-control.json's test.client.options goes UNDER the generated
    -- fields: it adds to the live client, it does not redirect it.
    for _k, _v in pairs(runner.live_client_options()) do
      if merged_opts[_k] == nil then
        merged_opts[_k] = _v
      end
    end
    local client = sdk.new(merged_opts)
    return {
      client = client,
      calls = calls,
      live = true,
      idmap = {},
    }
  end

  local function mock_fetch(url, init)
    table.insert(calls, { url = url, init = init })
    return {
      status = 200,
      statusText = "OK",
      headers = {},
      json = function()
        if mockres ~= nil then
          return mockres
        end
        return { id = "direct01" }
      end,
      body = "mock",
    }, nil
  end

  local client = sdk.new({
    base = "http://localhost:8080",
    system = {
      fetch = mock_fetch,
    },
  })

  return {
    client = client,
    calls = calls,
    live = false,
    idmap = {},
  }
end
