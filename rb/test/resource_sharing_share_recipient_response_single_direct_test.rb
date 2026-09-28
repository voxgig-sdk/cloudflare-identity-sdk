# ResourceSharingShareRecipientResponseSingle direct test

require "minitest/autorun"
require "json"
require_relative "../CloudflareIdentity_sdk"
require_relative "runner"

class ResourceSharingShareRecipientResponseSingleDirectTest < Minitest::Test
  def test_direct_load_resource_sharing_share_recipient_response_single
    setup = resource_sharing_share_recipient_response_single_direct_setup({ "id" => "direct01" })
    _should_skip, _reason = Runner.is_control_skipped("direct", "direct-load-resource_sharing_share_recipient_response_single", setup[:live] ? "live" : "unit")
    if _should_skip
      skip(_reason || "skipped via sdk-test-control.json")
      return
    end
    client = setup[:client]

    params = {}
    query = {}
    if setup[:live]
      params["account_id"] = "023e105f4ecef8ad9ca31a8372d0c353"
      params["recipient_id"] = "3fd85f74b32742f1bff64a85009dda07"
      params["share_id"] = "3fd85f74b32742f1bff64a85009dda07"
    else
      params["account_id"] = "direct01"
      params["recipient_id"] = "direct02"
      params["share_id"] = "direct03"
    end

    result = client.direct({
      "path" => "accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}",
      "method" => "GET",
      "params" => params,
      "query" => query,
    })
    if setup[:live]
      # Live mode is lenient: synthetic IDs frequently 4xx. Skip rather
      # than fail when the load endpoint isn't reachable with the IDs
      # we can construct from setup.idmap.
      if !result["err"].nil?
        skip("load call failed (likely synthetic IDs against live API): #{result["err"]}")
        return
      end
      unless result["ok"]
        skip("load call not ok (likely synthetic IDs against live API)")
        return
      end
      status = Helpers.to_int(result["status"])
      if status < 200 || status >= 300
        skip("expected 2xx status, got #{status}")
        return
      end
    else
      assert_nil result["err"]
      assert result["ok"]
      assert_equal 200, Helpers.to_int(result["status"])
      assert !result["data"].nil?
      if result["data"].is_a?(Hash)
        assert_equal "direct01", result["data"]["id"]
      end
      assert_equal 1, setup[:calls].length
    end
  end

end


def resource_sharing_share_recipient_response_single_direct_setup(mockres)
  Runner.load_env_local

  calls = []

  env = Runner.env_override({
    "CLOUDFLARE_IDENTITY_TEST_RESOURCE_SHARING_SHARE_RECIPIENT_RESPONSE_SINGLE_ENTID" => {},
    "CLOUDFLARE_IDENTITY_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_IDENTITY_APIKEY" => "",
  })

  live = env["CLOUDFLARE_IDENTITY_TEST_LIVE"] == "TRUE"

  if live
    # Merged so the generated fields win: sdk-test-control.json's
    # test.client.options adds to the live client, it does not redirect it.
    merged_opts = Runner.live_client_options.merge({
      "apikey" => env["CLOUDFLARE_IDENTITY_APIKEY"],
    })
    client = CloudflareIdentitySDK.new(merged_opts)
    return {
      client: client,
      calls: calls,
      live: true,
      idmap: {},
    }
  end

  mock_fetch = ->(url, init) {
    calls.push({ "url" => url, "init" => init })
    return {
      "status" => 200,
      "statusText" => "OK",
      "headers" => {},
      "json" => ->() {
        if !mockres.nil?
          return mockres
        end
        return { "id" => "direct01" }
      },
      "body" => "mock",
    }, nil
  }

  client = CloudflareIdentitySDK.new({
    "base" => "http://localhost:8080",
    "system" => {
      "fetch" => mock_fetch,
    },
  })

  {
    client: client,
    calls: calls,
    live: false,
    idmap: {},
  }
end
