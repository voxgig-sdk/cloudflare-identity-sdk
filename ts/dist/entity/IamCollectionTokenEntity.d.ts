import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamCollectionToken, IamCollectionTokenListMatch } from '../CloudflareIdentityTypes';
declare class IamCollectionTokenEntity extends CloudflareIdentityEntityBase<IamCollectionToken> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamCollectionTokenEntity): IamCollectionTokenEntity;
    list(this: any, reqmatch?: IamCollectionTokenListMatch, ctrl?: Control): Promise<IamCollectionTokenEntity[]>;
}
export { IamCollectionTokenEntity };
