import { Context } from './Context';
declare class CloudflareIdentityError extends Error {
    isCloudflareIdentityError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { CloudflareIdentityError };
