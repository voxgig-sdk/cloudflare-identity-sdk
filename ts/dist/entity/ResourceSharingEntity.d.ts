import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { ResourceSharing, ResourceSharingUpdateData } from '../CloudflareIdentityTypes';
declare class ResourceSharingEntity extends CloudflareIdentityEntityBase<ResourceSharing> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: ResourceSharingEntity): ResourceSharingEntity;
    update(this: any, reqdata?: ResourceSharingUpdateData, ctrl?: Control): Promise<ResourceSharingEntity>;
}
export { ResourceSharingEntity };
