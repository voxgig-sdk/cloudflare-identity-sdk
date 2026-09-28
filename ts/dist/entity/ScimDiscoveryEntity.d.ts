import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { ScimDiscovery, ScimDiscoveryLoadMatch } from '../CloudflareIdentityTypes';
declare class ScimDiscoveryEntity extends CloudflareIdentityEntityBase<ScimDiscovery> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: ScimDiscoveryEntity): ScimDiscoveryEntity;
    load(this: any, reqmatch?: ScimDiscoveryLoadMatch, ctrl?: Control): Promise<ScimDiscoveryEntity>;
}
export { ScimDiscoveryEntity };
