-- CloudflareIdentity SDK exists test

local sdk = require("cloudflare-identity_sdk")

describe("CloudflareIdentitySDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
