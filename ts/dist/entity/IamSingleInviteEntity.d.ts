import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamSingleInvite, IamSingleInviteLoadMatch, IamSingleInviteUpdateData } from '../CloudflareIdentityTypes';
declare class IamSingleInviteEntity extends CloudflareIdentityEntityBase<IamSingleInvite> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamSingleInviteEntity): IamSingleInviteEntity;
    load(this: any, reqmatch?: IamSingleInviteLoadMatch, ctrl?: Control): Promise<IamSingleInviteEntity>;
    update(this: any, reqdata?: IamSingleInviteUpdateData, ctrl?: Control): Promise<IamSingleInviteEntity>;
}
export { IamSingleInviteEntity };
