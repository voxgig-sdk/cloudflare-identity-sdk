# CloudflareIdentity SDK utility: make_context
require_relative '../core/context'
module CloudflareIdentityUtilities
  MakeContext = ->(ctxmap, basectx) {
    CloudflareIdentityContext.new(ctxmap, basectx)
  }
end
