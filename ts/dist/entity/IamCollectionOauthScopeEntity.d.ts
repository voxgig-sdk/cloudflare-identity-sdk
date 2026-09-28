import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamCollectionOauthScope, IamCollectionOauthScopeListMatch } from '../CloudflareIdentityTypes';
declare class IamCollectionOauthScopeEntity extends CloudflareIdentityEntityBase<IamCollectionOauthScope> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamCollectionOauthScopeEntity): IamCollectionOauthScopeEntity;
    list(this: any, reqmatch?: IamCollectionOauthScopeListMatch, ctrl?: Control): Promise<IamCollectionOauthScopeEntity[]>;
}
export { IamCollectionOauthScopeEntity };
