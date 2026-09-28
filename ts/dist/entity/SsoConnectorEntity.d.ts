import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { SsoConnector, SsoConnectorRemoveMatch } from '../CloudflareIdentityTypes';
declare class SsoConnectorEntity extends CloudflareIdentityEntityBase<SsoConnector> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: SsoConnectorEntity): SsoConnectorEntity;
    remove(this: any, reqmatch?: SsoConnectorRemoveMatch, ctrl?: Control): Promise<SsoConnectorEntity>;
}
export { SsoConnectorEntity };
