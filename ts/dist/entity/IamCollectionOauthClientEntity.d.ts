import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamCollectionOauthClient, IamCollectionOauthClientListMatch } from '../CloudflareIdentityTypes';
declare class IamCollectionOauthClientEntity extends CloudflareIdentityEntityBase<IamCollectionOauthClient> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamCollectionOauthClientEntity): IamCollectionOauthClientEntity;
    list(this: any, reqmatch?: IamCollectionOauthClientListMatch, ctrl?: Control): Promise<IamCollectionOauthClientEntity[]>;
}
export { IamCollectionOauthClientEntity };
