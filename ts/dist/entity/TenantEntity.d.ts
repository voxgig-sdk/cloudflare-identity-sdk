import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { Tenant, TenantLoadMatch, TenantListMatch } from '../CloudflareIdentityTypes';
declare class TenantEntity extends CloudflareIdentityEntityBase<Tenant> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: TenantEntity): TenantEntity;
    load(this: any, reqmatch?: TenantLoadMatch, ctrl?: Control): Promise<TenantEntity>;
    list(this: any, reqmatch?: TenantListMatch, ctrl?: Control): Promise<TenantEntity[]>;
}
export { TenantEntity };
