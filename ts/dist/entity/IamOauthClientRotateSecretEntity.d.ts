import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamOauthClientRotateSecret, IamOauthClientRotateSecretCreateData } from '../CloudflareIdentityTypes';
declare class IamOauthClientRotateSecretEntity extends CloudflareIdentityEntityBase<IamOauthClientRotateSecret> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamOauthClientRotateSecretEntity): IamOauthClientRotateSecretEntity;
    create(this: any, reqdata?: IamOauthClientRotateSecretCreateData, ctrl?: Control): Promise<IamOauthClientRotateSecretEntity>;
}
export { IamOauthClientRotateSecretEntity };
