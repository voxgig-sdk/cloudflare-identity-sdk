import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { ResourceSharingShareRecipientResponseCollection, ResourceSharingShareRecipientResponseCollectionListMatch } from '../CloudflareIdentityTypes';
declare class ResourceSharingShareRecipientResponseCollectionEntity extends CloudflareIdentityEntityBase<ResourceSharingShareRecipientResponseCollection> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: ResourceSharingShareRecipientResponseCollectionEntity): ResourceSharingShareRecipientResponseCollectionEntity;
    list(this: any, reqmatch?: ResourceSharingShareRecipientResponseCollectionListMatch, ctrl?: Control): Promise<ResourceSharingShareRecipientResponseCollectionEntity[]>;
}
export { ResourceSharingShareRecipientResponseCollectionEntity };
