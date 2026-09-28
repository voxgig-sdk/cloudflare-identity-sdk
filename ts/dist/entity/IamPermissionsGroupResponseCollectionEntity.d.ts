import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamPermissionsGroupResponseCollection, IamPermissionsGroupResponseCollectionListMatch } from '../CloudflareIdentityTypes';
declare class IamPermissionsGroupResponseCollectionEntity extends CloudflareIdentityEntityBase<IamPermissionsGroupResponseCollection> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamPermissionsGroupResponseCollectionEntity): IamPermissionsGroupResponseCollectionEntity;
    list(this: any, reqmatch?: IamPermissionsGroupResponseCollectionListMatch, ctrl?: Control): Promise<IamPermissionsGroupResponseCollectionEntity[]>;
}
export { IamPermissionsGroupResponseCollectionEntity };
