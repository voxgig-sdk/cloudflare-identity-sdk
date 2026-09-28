import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { AccountUserGroup, AccountUserGroupLoadMatch, AccountUserGroupListMatch, AccountUserGroupCreateData, AccountUserGroupUpdateData } from '../CloudflareIdentityTypes';
declare class AccountUserGroupEntity extends CloudflareIdentityEntityBase<AccountUserGroup> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: AccountUserGroupEntity): AccountUserGroupEntity;
    load(this: any, reqmatch?: AccountUserGroupLoadMatch, ctrl?: Control): Promise<AccountUserGroupEntity>;
    list(this: any, reqmatch?: AccountUserGroupListMatch, ctrl?: Control): Promise<AccountUserGroupEntity[]>;
    create(this: any, reqdata?: AccountUserGroupCreateData, ctrl?: Control): Promise<AccountUserGroupEntity>;
    update(this: any, reqdata?: AccountUserGroupUpdateData, ctrl?: Control): Promise<AccountUserGroupEntity>;
}
export { AccountUserGroupEntity };
