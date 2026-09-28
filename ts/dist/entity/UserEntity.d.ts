import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { User, UserListMatch } from '../CloudflareIdentityTypes';
declare class UserEntity extends CloudflareIdentityEntityBase<User> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: UserEntity): UserEntity;
    list(this: any, reqmatch?: UserListMatch, ctrl?: Control): Promise<UserEntity[]>;
}
export { UserEntity };
