import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamSingleToken, IamSingleTokenLoadMatch, IamSingleTokenUpdateData } from '../CloudflareIdentityTypes';
declare class IamSingleTokenEntity extends CloudflareIdentityEntityBase<IamSingleToken> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamSingleTokenEntity): IamSingleTokenEntity;
    load(this: any, reqmatch?: IamSingleTokenLoadMatch, ctrl?: Control): Promise<IamSingleTokenEntity>;
    update(this: any, reqdata?: IamSingleTokenUpdateData, ctrl?: Control): Promise<IamSingleTokenEntity>;
}
export { IamSingleTokenEntity };
