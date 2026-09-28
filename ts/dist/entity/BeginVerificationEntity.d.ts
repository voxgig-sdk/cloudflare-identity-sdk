import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { BeginVerification, BeginVerificationCreateData } from '../CloudflareIdentityTypes';
declare class BeginVerificationEntity extends CloudflareIdentityEntityBase<BeginVerification> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: BeginVerificationEntity): BeginVerificationEntity;
    create(this: any, reqdata?: BeginVerificationCreateData, ctrl?: Control): Promise<BeginVerificationEntity>;
}
export { BeginVerificationEntity };
