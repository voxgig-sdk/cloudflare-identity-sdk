import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamCollectionOrganization, IamCollectionOrganizationListMatch } from '../CloudflareIdentityTypes';
declare class IamCollectionOrganizationEntity extends CloudflareIdentityEntityBase<IamCollectionOrganization> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamCollectionOrganizationEntity): IamCollectionOrganizationEntity;
    list(this: any, reqmatch?: IamCollectionOrganizationListMatch, ctrl?: Control): Promise<IamCollectionOrganizationEntity[]>;
}
export { IamCollectionOrganizationEntity };
