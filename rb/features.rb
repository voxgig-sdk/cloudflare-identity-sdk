# CloudflareIdentity SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CloudflareIdentityFeatures
  def self.make_feature(name)
    case name
    when "base"
      CloudflareIdentityBaseFeature.new
    when "test"
      CloudflareIdentityTestFeature.new
    else
      CloudflareIdentityBaseFeature.new
    end
  end
end
