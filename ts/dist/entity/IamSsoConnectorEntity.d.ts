import { CloudflareIdentityEntityBase } from '../CloudflareIdentityEntityBase';
import type { CloudflareIdentitySDK } from '../CloudflareIdentitySDK';
import type { Control } from '../types';
import type { IamSsoConnector, IamSsoConnectorLoadMatch, IamSsoConnectorCreateData, IamSsoConnectorUpdateData } from '../CloudflareIdentityTypes';
declare class IamSsoConnectorEntity extends CloudflareIdentityEntityBase<IamSsoConnector> {
    constructor(client: CloudflareIdentitySDK, entopts: any);
    make(this: IamSsoConnectorEntity): IamSsoConnectorEntity;
    load(this: any, reqmatch?: IamSsoConnectorLoadMatch, ctrl?: Control): Promise<IamSsoConnectorEntity>;
    create(this: any, reqdata?: IamSsoConnectorCreateData, ctrl?: Control): Promise<IamSsoConnectorEntity>;
    update(this: any, reqdata?: IamSsoConnectorUpdateData, ctrl?: Control): Promise<IamSsoConnectorEntity>;
}
export { IamSsoConnectorEntity };
