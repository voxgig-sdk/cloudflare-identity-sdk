import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { AaaAuditLogsV2OrgResponseCollection, AaaAuditLogsV2OrgResponseCollectionListMatch } from '../CloudflareIdentityTypes';
declare class AaaAuditLogsV2OrgResponseCollectionEntity extends CloudflareIdentityEntityBase<AaaAuditLogsV2OrgResponseCollection> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: AaaAuditLogsV2OrgResponseCollectionEntity): AaaAuditLogsV2OrgResponseCollectionEntity;
    list(this: any, reqmatch?: AaaAuditLogsV2OrgResponseCollectionListMatch, ctrl?: Control): Promise<AaaAuditLogsV2OrgResponseCollectionEntity[]>;
}
export { AaaAuditLogsV2OrgResponseCollectionEntity };
