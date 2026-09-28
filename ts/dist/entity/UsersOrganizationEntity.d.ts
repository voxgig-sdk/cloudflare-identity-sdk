import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { UsersOrganization, UsersOrganizationRemoveMatch } from '../CloudflareIdentityTypes';
declare class UsersOrganizationEntity extends CloudflareIdentityEntityBase<UsersOrganization> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: UsersOrganizationEntity): UsersOrganizationEntity;
    remove(this: any, reqmatch?: UsersOrganizationRemoveMatch, ctrl?: Control): Promise<UsersOrganizationEntity>;
}
export { UsersOrganizationEntity };
