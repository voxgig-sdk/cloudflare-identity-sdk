import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { ResourceSharingShareExcludedRecipientResponseSingle, ResourceSharingShareExcludedRecipientResponseSingleLoadMatch, ResourceSharingShareExcludedRecipientResponseSingleCreateData, ResourceSharingShareExcludedRecipientResponseSingleRemoveMatch } from '../CloudflareIdentityTypes';
declare class ResourceSharingShareExcludedRecipientResponseSingleEntity extends CloudflareIdentityEntityBase<ResourceSharingShareExcludedRecipientResponseSingle> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: ResourceSharingShareExcludedRecipientResponseSingleEntity): ResourceSharingShareExcludedRecipientResponseSingleEntity;
    load(this: any, reqmatch?: ResourceSharingShareExcludedRecipientResponseSingleLoadMatch, ctrl?: Control): Promise<ResourceSharingShareExcludedRecipientResponseSingleEntity>;
    create(this: any, reqdata?: ResourceSharingShareExcludedRecipientResponseSingleCreateData, ctrl?: Control): Promise<ResourceSharingShareExcludedRecipientResponseSingleEntity>;
    remove(this: any, reqmatch?: ResourceSharingShareExcludedRecipientResponseSingleRemoveMatch, ctrl?: Control): Promise<ResourceSharingShareExcludedRecipientResponseSingleEntity>;
}
export { ResourceSharingShareExcludedRecipientResponseSingleEntity };
