import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { ScimUser, ScimUserLoadMatch, ScimUserCreateData, ScimUserUpdateData, ScimUserRemoveMatch } from '../CloudflareIdentityTypes';
declare class ScimUserEntity extends CloudflareIdentityEntityBase<ScimUser> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: ScimUserEntity): ScimUserEntity;
    load(this: any, reqmatch?: ScimUserLoadMatch, ctrl?: Control): Promise<ScimUserEntity>;
    create(this: any, reqdata?: ScimUserCreateData, ctrl?: Control): Promise<ScimUserEntity>;
    update(this: any, reqdata?: ScimUserUpdateData, ctrl?: Control): Promise<ScimUserEntity>;
    remove(this: any, reqmatch?: ScimUserRemoveMatch, ctrl?: Control): Promise<ScimUserEntity>;
}
export { ScimUserEntity };
