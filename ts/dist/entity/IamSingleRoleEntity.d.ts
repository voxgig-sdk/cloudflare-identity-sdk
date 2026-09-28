import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamSingleRole, IamSingleRoleLoadMatch } from '../CloudflareIdentityTypes';
declare class IamSingleRoleEntity extends CloudflareIdentityEntityBase<IamSingleRole> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamSingleRoleEntity): IamSingleRoleEntity;
    load(this: any, reqmatch?: IamSingleRoleLoadMatch, ctrl?: Control): Promise<IamSingleRoleEntity>;
}
export { IamSingleRoleEntity };
