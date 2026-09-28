import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { UsersAccountMembership, UsersAccountMembershipRemoveMatch } from '../CloudflareIdentityTypes';
declare class UsersAccountMembershipEntity extends CloudflareIdentityEntityBase<UsersAccountMembership> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: UsersAccountMembershipEntity): UsersAccountMembershipEntity;
    remove(this: any, reqmatch?: UsersAccountMembershipRemoveMatch, ctrl?: Control): Promise<UsersAccountMembershipEntity>;
}
export { UsersAccountMembershipEntity };
