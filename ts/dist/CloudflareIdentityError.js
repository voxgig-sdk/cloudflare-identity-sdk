"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareIdentityError = void 0;
class CloudflareIdentityError extends Error {
    isCloudflareIdentityError = true;
    sdk = 'CloudflareIdentity';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CloudflareIdentityError = CloudflareIdentityError;
//# sourceMappingURL=CloudflareIdentityError.js.map