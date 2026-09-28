import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { ResourceSharingShareExcludedRecipientResponseCollection, ResourceSharingShareExcludedRecipientResponseCollectionListMatch } from '../CloudflareIdentityTypes';
declare class ResourceSharingShareExcludedRecipientResponseCollectionEntity extends CloudflareIdentityEntityBase<ResourceSharingShareExcludedRecipientResponseCollection> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: ResourceSharingShareExcludedRecipientResponseCollectionEntity): ResourceSharingShareExcludedRecipientResponseCollectionEntity;
    list(this: any, reqmatch?: ResourceSharingShareExcludedRecipientResponseCollectionListMatch, ctrl?: Control): Promise<ResourceSharingShareExcludedRecipientResponseCollectionEntity[]>;
}
export { ResourceSharingShareExcludedRecipientResponseCollectionEntity };
