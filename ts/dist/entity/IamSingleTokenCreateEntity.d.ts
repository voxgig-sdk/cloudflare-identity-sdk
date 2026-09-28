import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamSingleTokenCreate, IamSingleTokenCreateCreateData } from '../CloudflareIdentityTypes';
declare class IamSingleTokenCreateEntity extends CloudflareIdentityEntityBase<IamSingleTokenCreate> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamSingleTokenCreateEntity): IamSingleTokenCreateEntity;
    create(this: any, reqdata?: IamSingleTokenCreateCreateData, ctrl?: Control): Promise<IamSingleTokenCreateEntity>;
}
export { IamSingleTokenCreateEntity };
