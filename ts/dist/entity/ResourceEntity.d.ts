import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { Resource, ResourceLoadMatch, ResourceListMatch, ResourceCreateData, ResourceUpdateData, ResourceRemoveMatch } from '../CloudflareIdentityTypes';
declare class ResourceEntity extends CloudflareIdentityEntityBase<Resource> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: ResourceEntity): ResourceEntity;
    load(this: any, reqmatch?: ResourceLoadMatch, ctrl?: Control): Promise<ResourceEntity>;
    list(this: any, reqmatch?: ResourceListMatch, ctrl?: Control): Promise<ResourceEntity[]>;
    create(this: any, reqdata?: ResourceCreateData, ctrl?: Control): Promise<ResourceEntity>;
    update(this: any, reqdata?: ResourceUpdateData, ctrl?: Control): Promise<ResourceEntity>;
    remove(this: any, reqmatch?: ResourceRemoveMatch, ctrl?: Control): Promise<ResourceEntity>;
}
export { ResourceEntity };
