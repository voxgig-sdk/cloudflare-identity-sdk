import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { ResourceSharingShareResponseSingle, ResourceSharingShareResponseSingleLoadMatch, ResourceSharingShareResponseSingleCreateData, ResourceSharingShareResponseSingleUpdateData, ResourceSharingShareResponseSingleRemoveMatch } from '../CloudflareIdentityTypes';
declare class ResourceSharingShareResponseSingleEntity extends CloudflareIdentityEntityBase<ResourceSharingShareResponseSingle> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: ResourceSharingShareResponseSingleEntity): ResourceSharingShareResponseSingleEntity;
    load(this: any, reqmatch?: ResourceSharingShareResponseSingleLoadMatch, ctrl?: Control): Promise<ResourceSharingShareResponseSingleEntity>;
    create(this: any, reqdata?: ResourceSharingShareResponseSingleCreateData, ctrl?: Control): Promise<ResourceSharingShareResponseSingleEntity>;
    update(this: any, reqdata?: ResourceSharingShareResponseSingleUpdateData, ctrl?: Control): Promise<ResourceSharingShareResponseSingleEntity>;
    remove(this: any, reqmatch?: ResourceSharingShareResponseSingleRemoveMatch, ctrl?: Control): Promise<ResourceSharingShareResponseSingleEntity>;
}
export { ResourceSharingShareResponseSingleEntity };
