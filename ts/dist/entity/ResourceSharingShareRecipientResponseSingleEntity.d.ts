import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { ResourceSharingShareRecipientResponseSingle, ResourceSharingShareRecipientResponseSingleLoadMatch, ResourceSharingShareRecipientResponseSingleCreateData, ResourceSharingShareRecipientResponseSingleRemoveMatch } from '../CloudflareIdentityTypes';
declare class ResourceSharingShareRecipientResponseSingleEntity extends CloudflareIdentityEntityBase<ResourceSharingShareRecipientResponseSingle> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: ResourceSharingShareRecipientResponseSingleEntity): ResourceSharingShareRecipientResponseSingleEntity;
    load(this: any, reqmatch?: ResourceSharingShareRecipientResponseSingleLoadMatch, ctrl?: Control): Promise<ResourceSharingShareRecipientResponseSingleEntity>;
    create(this: any, reqdata?: ResourceSharingShareRecipientResponseSingleCreateData, ctrl?: Control): Promise<ResourceSharingShareRecipientResponseSingleEntity>;
    remove(this: any, reqmatch?: ResourceSharingShareRecipientResponseSingleRemoveMatch, ctrl?: Control): Promise<ResourceSharingShareRecipientResponseSingleEntity>;
}
export { ResourceSharingShareRecipientResponseSingleEntity };
