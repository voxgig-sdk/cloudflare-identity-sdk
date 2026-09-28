import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { UserGroup, UserGroupRemoveMatch } from '../CloudflareIdentityTypes';
declare class UserGroupEntity extends CloudflareIdentityEntityBase<UserGroup> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: UserGroupEntity): UserGroupEntity;
    remove(this: any, reqmatch?: UserGroupRemoveMatch, ctrl?: Control): Promise<UserGroupEntity>;
}
export { UserGroupEntity };
