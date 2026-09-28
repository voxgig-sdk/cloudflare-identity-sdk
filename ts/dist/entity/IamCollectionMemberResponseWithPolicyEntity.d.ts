import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamCollectionMemberResponseWithPolicy, IamCollectionMemberResponseWithPolicyListMatch } from '../CloudflareIdentityTypes';
declare class IamCollectionMemberResponseWithPolicyEntity extends CloudflareIdentityEntityBase<IamCollectionMemberResponseWithPolicy> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamCollectionMemberResponseWithPolicyEntity): IamCollectionMemberResponseWithPolicyEntity;
    list(this: any, reqmatch?: IamCollectionMemberResponseWithPolicyListMatch, ctrl?: Control): Promise<IamCollectionMemberResponseWithPolicyEntity[]>;
}
export { IamCollectionMemberResponseWithPolicyEntity };
