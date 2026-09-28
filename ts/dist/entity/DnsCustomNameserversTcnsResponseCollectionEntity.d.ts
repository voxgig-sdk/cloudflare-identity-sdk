import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { DnsCustomNameserversTcnsResponseCollection, DnsCustomNameserversTcnsResponseCollectionListMatch } from '../CloudflareIdentityTypes';
declare class DnsCustomNameserversTcnsResponseCollectionEntity extends CloudflareIdentityEntityBase<DnsCustomNameserversTcnsResponseCollection> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: DnsCustomNameserversTcnsResponseCollectionEntity): DnsCustomNameserversTcnsResponseCollectionEntity;
    list(this: any, reqmatch?: DnsCustomNameserversTcnsResponseCollectionListMatch, ctrl?: Control): Promise<DnsCustomNameserversTcnsResponseCollectionEntity[]>;
}
export { DnsCustomNameserversTcnsResponseCollectionEntity };
