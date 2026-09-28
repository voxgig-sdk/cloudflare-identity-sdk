import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { OrganizationMember, OrganizationMemberLoadMatch, OrganizationMemberListMatch, OrganizationMemberCreateData, OrganizationMemberRemoveMatch } from '../CloudflareIdentityTypes';
declare class OrganizationMemberEntity extends CloudflareIdentityEntityBase<OrganizationMember> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: OrganizationMemberEntity): OrganizationMemberEntity;
    load(this: any, reqmatch?: OrganizationMemberLoadMatch, ctrl?: Control): Promise<OrganizationMemberEntity>;
    list(this: any, reqmatch?: OrganizationMemberListMatch, ctrl?: Control): Promise<OrganizationMemberEntity[]>;
    create(this: any, reqdata?: OrganizationMemberCreateData, ctrl?: Control): Promise<OrganizationMemberEntity>;
    remove(this: any, reqmatch?: OrganizationMemberRemoveMatch, ctrl?: Control): Promise<OrganizationMemberEntity>;
}
export { OrganizationMemberEntity };
