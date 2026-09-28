import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { DnsCustomNameserversEmptyResponse3, DnsCustomNameserversEmptyResponse3RemoveMatch } from '../CloudflareIdentityTypes';
declare class DnsCustomNameserversEmptyResponse3Entity extends CloudflareIdentityEntityBase<DnsCustomNameserversEmptyResponse3> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: DnsCustomNameserversEmptyResponse3Entity): DnsCustomNameserversEmptyResponse3Entity;
    remove(this: any, reqmatch?: DnsCustomNameserversEmptyResponse3RemoveMatch, ctrl?: Control): Promise<DnsCustomNameserversEmptyResponse3Entity>;
}
export { DnsCustomNameserversEmptyResponse3Entity };
