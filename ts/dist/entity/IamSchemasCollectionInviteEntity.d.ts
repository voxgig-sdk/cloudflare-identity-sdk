import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamSchemasCollectionInvite, IamSchemasCollectionInviteListMatch } from '../CloudflareIdentityTypes';
declare class IamSchemasCollectionInviteEntity extends CloudflareIdentityEntityBase<IamSchemasCollectionInvite> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamSchemasCollectionInviteEntity): IamSchemasCollectionInviteEntity;
    list(this: any, reqmatch?: IamSchemasCollectionInviteListMatch, ctrl?: Control): Promise<IamSchemasCollectionInviteEntity[]>;
}
export { IamSchemasCollectionInviteEntity };
