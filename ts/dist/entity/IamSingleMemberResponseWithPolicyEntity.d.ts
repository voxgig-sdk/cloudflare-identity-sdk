import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamSingleMemberResponseWithPolicy, IamSingleMemberResponseWithPolicyLoadMatch, IamSingleMemberResponseWithPolicyCreateData, IamSingleMemberResponseWithPolicyUpdateData } from '../CloudflareIdentityTypes';
declare class IamSingleMemberResponseWithPolicyEntity extends CloudflareIdentityEntityBase<IamSingleMemberResponseWithPolicy> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamSingleMemberResponseWithPolicyEntity): IamSingleMemberResponseWithPolicyEntity;
    load(this: any, reqmatch?: IamSingleMemberResponseWithPolicyLoadMatch, ctrl?: Control): Promise<IamSingleMemberResponseWithPolicyEntity>;
    create(this: any, reqdata?: IamSingleMemberResponseWithPolicyCreateData, ctrl?: Control): Promise<IamSingleMemberResponseWithPolicyEntity>;
    update(this: any, reqdata?: IamSingleMemberResponseWithPolicyUpdateData, ctrl?: Control): Promise<IamSingleMemberResponseWithPolicyEntity>;
}
export { IamSingleMemberResponseWithPolicyEntity };
