import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { ScimGroup, ScimGroupLoadMatch, ScimGroupCreateData, ScimGroupUpdateData, ScimGroupRemoveMatch } from '../CloudflareIdentityTypes';
declare class ScimGroupEntity extends CloudflareIdentityEntityBase<ScimGroup> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: ScimGroupEntity): ScimGroupEntity;
    load(this: any, reqmatch?: ScimGroupLoadMatch, ctrl?: Control): Promise<ScimGroupEntity>;
    create(this: any, reqdata?: ScimGroupCreateData, ctrl?: Control): Promise<ScimGroupEntity>;
    update(this: any, reqdata?: ScimGroupUpdateData, ctrl?: Control): Promise<ScimGroupEntity>;
    remove(this: any, reqmatch?: ScimGroupRemoveMatch, ctrl?: Control): Promise<ScimGroupEntity>;
}
export { ScimGroupEntity };
