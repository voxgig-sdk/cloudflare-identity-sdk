import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamApiResponseSingleId, IamApiResponseSingleIdRemoveMatch } from '../CloudflareIdentityTypes';
declare class IamApiResponseSingleIdEntity extends CloudflareIdentityEntityBase<IamApiResponseSingleId> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamApiResponseSingleIdEntity): IamApiResponseSingleIdEntity;
    remove(this: any, reqmatch?: IamApiResponseSingleIdRemoveMatch, ctrl?: Control): Promise<IamApiResponseSingleIdEntity>;
}
export { IamApiResponseSingleIdEntity };
