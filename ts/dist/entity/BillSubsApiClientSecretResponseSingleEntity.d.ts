import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { BillSubsApiClientSecretResponseSingle, BillSubsApiClientSecretResponseSingleCreateData } from '../CloudflareIdentityTypes';
declare class BillSubsApiClientSecretResponseSingleEntity extends CloudflareIdentityEntityBase<BillSubsApiClientSecretResponseSingle> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: BillSubsApiClientSecretResponseSingleEntity): BillSubsApiClientSecretResponseSingleEntity;
    create(this: any, reqdata?: BillSubsApiClientSecretResponseSingleCreateData, ctrl?: Control): Promise<BillSubsApiClientSecretResponseSingleEntity>;
}
export { BillSubsApiClientSecretResponseSingleEntity };
