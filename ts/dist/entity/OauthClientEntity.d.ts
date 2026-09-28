import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { OauthClient, OauthClientRemoveMatch } from '../CloudflareIdentityTypes';
declare class OauthClientEntity extends CloudflareIdentityEntityBase<OauthClient> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: OauthClientEntity): OauthClientEntity;
    remove(this: any, reqmatch?: OauthClientRemoveMatch, ctrl?: Control): Promise<OauthClientEntity>;
}
export { OauthClientEntity };
