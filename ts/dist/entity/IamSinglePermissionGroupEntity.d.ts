import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamSinglePermissionGroup, IamSinglePermissionGroupLoadMatch } from '../CloudflareIdentityTypes';
declare class IamSinglePermissionGroupEntity extends CloudflareIdentityEntityBase<IamSinglePermissionGroup> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamSinglePermissionGroupEntity): IamSinglePermissionGroupEntity;
    load(this: any, reqmatch?: IamSinglePermissionGroupLoadMatch, ctrl?: Control): Promise<IamSinglePermissionGroupEntity>;
}
export { IamSinglePermissionGroupEntity };
