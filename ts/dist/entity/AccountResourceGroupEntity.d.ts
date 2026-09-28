import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { AccountResourceGroup, AccountResourceGroupLoadMatch, AccountResourceGroupListMatch, AccountResourceGroupCreateData, AccountResourceGroupUpdateData } from '../CloudflareIdentityTypes';
declare class AccountResourceGroupEntity extends CloudflareIdentityEntityBase<AccountResourceGroup> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: AccountResourceGroupEntity): AccountResourceGroupEntity;
    load(this: any, reqmatch?: AccountResourceGroupLoadMatch, ctrl?: Control): Promise<AccountResourceGroupEntity>;
    list(this: any, reqmatch?: AccountResourceGroupListMatch, ctrl?: Control): Promise<AccountResourceGroupEntity[]>;
    create(this: any, reqdata?: AccountResourceGroupCreateData, ctrl?: Control): Promise<AccountResourceGroupEntity>;
    update(this: any, reqdata?: AccountResourceGroupUpdateData, ctrl?: Control): Promise<AccountResourceGroupEntity>;
}
export { AccountResourceGroupEntity };
