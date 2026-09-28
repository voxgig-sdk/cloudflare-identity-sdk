import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamResponseSingleValue, IamResponseSingleValueUpdateData } from '../CloudflareIdentityTypes';
declare class IamResponseSingleValueEntity extends CloudflareIdentityEntityBase<IamResponseSingleValue> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamResponseSingleValueEntity): IamResponseSingleValueEntity;
    update(this: any, reqdata?: IamResponseSingleValueUpdateData, ctrl?: Control): Promise<IamResponseSingleValueEntity>;
}
export { IamResponseSingleValueEntity };
