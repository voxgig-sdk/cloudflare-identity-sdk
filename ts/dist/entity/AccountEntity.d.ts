import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { Account, AccountListMatch } from '../CloudflareIdentityTypes';
declare class AccountEntity extends CloudflareIdentityEntityBase<Account> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: AccountEntity): AccountEntity;
    list(this: any, reqmatch?: AccountListMatch, ctrl?: Control): Promise<AccountEntity[]>;
}
export { AccountEntity };
