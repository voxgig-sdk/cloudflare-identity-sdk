import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { DnsCustomNameserversTcnsResponseSingle, DnsCustomNameserversTcnsResponseSingleCreateData } from '../CloudflareIdentityTypes';
declare class DnsCustomNameserversTcnsResponseSingleEntity extends CloudflareIdentityEntityBase<DnsCustomNameserversTcnsResponseSingle> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: DnsCustomNameserversTcnsResponseSingleEntity): DnsCustomNameserversTcnsResponseSingleEntity;
    create(this: any, reqdata?: DnsCustomNameserversTcnsResponseSingleCreateData, ctrl?: Control): Promise<DnsCustomNameserversTcnsResponseSingleEntity>;
}
export { DnsCustomNameserversTcnsResponseSingleEntity };
