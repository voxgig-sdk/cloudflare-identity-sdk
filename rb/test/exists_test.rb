# CloudflareIdentity SDK exists test

require "minitest/autorun"
require_relative "../CloudflareIdentity_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CloudflareIdentitySDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
