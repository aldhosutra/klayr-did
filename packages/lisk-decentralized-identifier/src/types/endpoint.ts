import { JSONObject, ModuleEndpointContext } from 'lisk-sdk';
import { DidModuleConfig } from './config';
import { DocumentStoreData, NonceStoreData } from './stores';

export interface DidEndpoint {
  init(config: DidModuleConfig): void;
  getConfig(context: ModuleEndpointContext): Promise<DidModuleConfig>;
  read(context: ModuleEndpointContext): Promise<DocumentStoreData | undefined>;
  getNonce(context: ModuleEndpointContext): Promise<JSONObject<NonceStoreData>>;
}
