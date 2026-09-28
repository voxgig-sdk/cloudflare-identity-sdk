import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamSingleMembershipResponseWithPolicy, IamSingleMembershipResponseWithPolicyLoadMatch, IamSingleMembershipResponseWithPolicyUpdateData } from '../CloudflareIdentityTypes';
declare class IamSingleMembershipResponseWithPolicyEntity extends CloudflareIdentityEntityBase<IamSingleMembershipResponseWithPolicy> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamSingleMembershipResponseWithPolicyEntity): IamSingleMembershipResponseWithPolicyEntity;
    load(this: any, reqmatch?: IamSingleMembershipResponseWithPolicyLoadMatch, ctrl?: Control): Promise<IamSingleMembershipResponseWithPolicyEntity>;
    update(this: any, reqdata?: IamSingleMembershipResponseWithPolicyUpdateData, ctrl?: Control): Promise<IamSingleMembershipResponseWithPolicyEntity>;
}
export { IamSingleMembershipResponseWithPolicyEntity };
