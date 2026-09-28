import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { AaaAuditLogsV2OrgHistoryResponseCollection, AaaAuditLogsV2OrgHistoryResponseCollectionListMatch } from '../CloudflareIdentityTypes';
declare class AaaAuditLogsV2OrgHistoryResponseCollectionEntity extends CloudflareIdentityEntityBase<AaaAuditLogsV2OrgHistoryResponseCollection> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: AaaAuditLogsV2OrgHistoryResponseCollectionEntity): AaaAuditLogsV2OrgHistoryResponseCollectionEntity;
    list(this: any, reqmatch?: AaaAuditLogsV2OrgHistoryResponseCollectionListMatch, ctrl?: Control): Promise<AaaAuditLogsV2OrgHistoryResponseCollectionEntity[]>;
}
export { AaaAuditLogsV2OrgHistoryResponseCollectionEntity };
