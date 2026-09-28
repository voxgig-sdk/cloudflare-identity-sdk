import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamSingleOauthClientCreate, IamSingleOauthClientCreateCreateData } from '../CloudflareIdentityTypes';
declare class IamSingleOauthClientCreateEntity extends CloudflareIdentityEntityBase<IamSingleOauthClientCreate> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamSingleOauthClientCreateEntity): IamSingleOauthClientCreateEntity;
    create(this: any, reqdata?: IamSingleOauthClientCreateCreateData, ctrl?: Control): Promise<IamSingleOauthClientCreateEntity>;
}
export { IamSingleOauthClientCreateEntity };
