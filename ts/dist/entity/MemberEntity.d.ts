import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { Member, MemberRemoveMatch } from '../CloudflareIdentityTypes';
declare class MemberEntity extends CloudflareIdentityEntityBase<Member> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: MemberEntity): MemberEntity;
    remove(this: any, reqmatch?: MemberRemoveMatch, ctrl?: Control): Promise<MemberEntity>;
}
export { MemberEntity };
