import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamCollectionPermissionGroup, IamCollectionPermissionGroupListMatch } from '../CloudflareIdentityTypes';
declare class IamCollectionPermissionGroupEntity extends CloudflareIdentityEntityBase<IamCollectionPermissionGroup> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamCollectionPermissionGroupEntity): IamCollectionPermissionGroupEntity;
    list(this: any, reqmatch?: IamCollectionPermissionGroupListMatch, ctrl?: Control): Promise<IamCollectionPermissionGroupEntity[]>;
}
export { IamCollectionPermissionGroupEntity };
