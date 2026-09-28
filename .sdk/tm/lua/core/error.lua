-- CloudflareIdentity SDK error

local CloudflareIdentityError = {}
CloudflareIdentityError.__index = CloudflareIdentityError


function CloudflareIdentityError.new(code, msg, ctx)
  local self = setmetatable({}, CloudflareIdentityError)
  self.is_sdk_error = true
  self.sdk = "CloudflareIdentity"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CloudflareIdentityError:error()
  return self.msg
end


function CloudflareIdentityError:__tostring()
  return self.msg
end


return CloudflareIdentityError
