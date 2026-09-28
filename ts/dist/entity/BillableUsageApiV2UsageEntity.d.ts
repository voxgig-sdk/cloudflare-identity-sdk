import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { BillableUsageApiV2Usage, BillableUsageApiV2UsageListMatch } from '../CloudflareIdentityTypes';
declare class BillableUsageApiV2UsageEntity extends CloudflareIdentityEntityBase<BillableUsageApiV2Usage> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: BillableUsageApiV2UsageEntity): BillableUsageApiV2UsageEntity;
    list(this: any, reqmatch?: BillableUsageApiV2UsageListMatch, ctrl?: Control): Promise<BillableUsageApiV2UsageEntity[]>;
}
export { BillableUsageApiV2UsageEntity };
