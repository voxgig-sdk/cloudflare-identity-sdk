import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { OrganizationsApiProfile, OrganizationsApiProfileListMatch } from '../CloudflareIdentityTypes';
declare class OrganizationsApiProfileEntity extends CloudflareIdentityEntityBase<OrganizationsApiProfile> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: OrganizationsApiProfileEntity): OrganizationsApiProfileEntity;
    list(this: any, reqmatch?: OrganizationsApiProfileListMatch, ctrl?: Control): Promise<OrganizationsApiProfileEntity[]>;
}
export { OrganizationsApiProfileEntity };
