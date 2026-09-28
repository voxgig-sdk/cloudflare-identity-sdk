import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamCollectionRole, IamCollectionRoleListMatch } from '../CloudflareIdentityTypes';
declare class IamCollectionRoleEntity extends CloudflareIdentityEntityBase<IamCollectionRole> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamCollectionRoleEntity): IamCollectionRoleEntity;
    list(this: any, reqmatch?: IamCollectionRoleListMatch, ctrl?: Control): Promise<IamCollectionRoleEntity[]>;
}
export { IamCollectionRoleEntity };
