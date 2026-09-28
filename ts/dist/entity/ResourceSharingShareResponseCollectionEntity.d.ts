import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { ResourceSharingShareResponseCollection, ResourceSharingShareResponseCollectionListMatch } from '../CloudflareIdentityTypes';
declare class ResourceSharingShareResponseCollectionEntity extends CloudflareIdentityEntityBase<ResourceSharingShareResponseCollection> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: ResourceSharingShareResponseCollectionEntity): ResourceSharingShareResponseCollectionEntity;
    list(this: any, reqmatch?: ResourceSharingShareResponseCollectionListMatch, ctrl?: Control): Promise<ResourceSharingShareResponseCollectionEntity[]>;
}
export { ResourceSharingShareResponseCollectionEntity };
