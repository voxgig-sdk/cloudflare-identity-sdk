import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { Token, TokenRemoveMatch } from '../CloudflareIdentityTypes';
declare class TokenEntity extends CloudflareIdentityEntityBase<Token> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: TokenEntity): TokenEntity;
    remove(this: any, reqmatch?: TokenRemoveMatch, ctrl?: Control): Promise<TokenEntity>;
}
export { TokenEntity };
