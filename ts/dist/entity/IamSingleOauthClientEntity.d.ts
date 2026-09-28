import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamSingleOauthClient, IamSingleOauthClientLoadMatch, IamSingleOauthClientUpdateData } from '../CloudflareIdentityTypes';
declare class IamSingleOauthClientEntity extends CloudflareIdentityEntityBase<IamSingleOauthClient> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamSingleOauthClientEntity): IamSingleOauthClientEntity;
    load(this: any, reqmatch?: IamSingleOauthClientLoadMatch, ctrl?: Control): Promise<IamSingleOauthClientEntity>;
    update(this: any, reqdata?: IamSingleOauthClientUpdateData, ctrl?: Control): Promise<IamSingleOauthClientEntity>;
}
export { IamSingleOauthClientEntity };
