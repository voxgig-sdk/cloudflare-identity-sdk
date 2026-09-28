import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { ResourceGroup, ResourceGroupRemoveMatch } from '../CloudflareIdentityTypes';
declare class ResourceGroupEntity extends CloudflareIdentityEntityBase<ResourceGroup> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: ResourceGroupEntity): ResourceGroupEntity;
    remove(this: any, reqmatch?: ResourceGroupRemoveMatch, ctrl?: Control): Promise<ResourceGroupEntity>;
}
export { ResourceGroupEntity };
