import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamSingleOrganization, IamSingleOrganizationLoadMatch } from '../CloudflareIdentityTypes';
declare class IamSingleOrganizationEntity extends CloudflareIdentityEntityBase<IamSingleOrganization> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamSingleOrganizationEntity): IamSingleOrganizationEntity;
    load(this: any, reqmatch?: IamSingleOrganizationLoadMatch, ctrl?: Control): Promise<IamSingleOrganizationEntity>;
}
export { IamSingleOrganizationEntity };
