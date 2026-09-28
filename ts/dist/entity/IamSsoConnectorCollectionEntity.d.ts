import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamSsoConnectorCollection, IamSsoConnectorCollectionListMatch } from '../CloudflareIdentityTypes';
declare class IamSsoConnectorCollectionEntity extends CloudflareIdentityEntityBase<IamSsoConnectorCollection> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamSsoConnectorCollectionEntity): IamSsoConnectorCollectionEntity;
    list(this: any, reqmatch?: IamSsoConnectorCollectionListMatch, ctrl?: Control): Promise<IamSsoConnectorCollectionEntity[]>;
}
export { IamSsoConnectorCollectionEntity };
