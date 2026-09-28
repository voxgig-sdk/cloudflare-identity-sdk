import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { AccountUserGroupMember, AccountUserGroupMemberLoadMatch, AccountUserGroupMemberListMatch, AccountUserGroupMemberCreateData, AccountUserGroupMemberUpdateData, AccountUserGroupMemberRemoveMatch } from '../CloudflareIdentityTypes';
declare class AccountUserGroupMemberEntity extends CloudflareIdentityEntityBase<AccountUserGroupMember> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: AccountUserGroupMemberEntity): AccountUserGroupMemberEntity;
    load(this: any, reqmatch?: AccountUserGroupMemberLoadMatch, ctrl?: Control): Promise<AccountUserGroupMemberEntity>;
    list(this: any, reqmatch?: AccountUserGroupMemberListMatch, ctrl?: Control): Promise<AccountUserGroupMemberEntity[]>;
    create(this: any, reqdata?: AccountUserGroupMemberCreateData, ctrl?: Control): Promise<AccountUserGroupMemberEntity>;
    update(this: any, reqdata?: AccountUserGroupMemberUpdateData, ctrl?: Control): Promise<AccountUserGroupMemberEntity>;
    remove(this: any, reqmatch?: AccountUserGroupMemberRemoveMatch, ctrl?: Control): Promise<AccountUserGroupMemberEntity>;
}
export { AccountUserGroupMemberEntity };
