import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamTokenVerifyResponseSingleSegment, IamTokenVerifyResponseSingleSegmentLoadMatch } from '../CloudflareIdentityTypes';
declare class IamTokenVerifyResponseSingleSegmentEntity extends CloudflareIdentityEntityBase<IamTokenVerifyResponseSingleSegment> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamTokenVerifyResponseSingleSegmentEntity): IamTokenVerifyResponseSingleSegmentEntity;
    load(this: any, reqmatch?: IamTokenVerifyResponseSingleSegmentLoadMatch, ctrl?: Control): Promise<IamTokenVerifyResponseSingleSegmentEntity>;
}
export { IamTokenVerifyResponseSingleSegmentEntity };
