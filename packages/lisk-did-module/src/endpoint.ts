import { BaseEndpoint, ModuleEndpointContext, JSONObject } from 'lisk-sdk';
import { DocumentStore, documentStoreKey } from './stores/document';
import { NonceStore, nonceStoreKey } from './stores/nonce';
import {
  DidModuleConfig,
  DocumentStoreData,
  NonceStoreData,
  utils,
  DidEndpoint as DidEndpointInterface,
} from '@lisk-did/lisk-decentralized-identifier';

export class DidEndpoint extends BaseEndpoint implements DidEndpointInterface {
  private chainspace: string = '';
  private autoCreateAddressDID: boolean = false;

  // TODO: add authorize endpoint

  public init(config: DidModuleConfig) {
    this.chainspace = config.chainspace;
    this.autoCreateAddressDID = config.autoCreateAddressDID;
  }

  public async read(ctx: ModuleEndpointContext): Promise<DocumentStoreData | undefined> {
    const { did } = ctx.params;
    if (typeof did !== 'string') throw new Error('Parameter did must be a string.');
    const documentStore = this.stores.get(DocumentStore);
    const key = documentStoreKey(did);
    const document = await documentStore.getOrUndefined(ctx, key);
    return document;
  }

  public async getNonce(ctx: ModuleEndpointContext): Promise<JSONObject<NonceStoreData>> {
    const { did } = ctx.params;
    if (typeof did !== 'string') throw new Error('Parameter did must be a string.');
    const nonceStore = this.stores.get(NonceStore);
    const key = nonceStoreKey(did);
    const nonce = await nonceStore.getOrDefault(ctx, key);
    return utils.object.serializer<NonceStoreData>(nonce);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async getConfig(_ctx: ModuleEndpointContext): Promise<DidModuleConfig> {
    return {
      chainspace: this.chainspace,
      autoCreateAddressDID: this.autoCreateAddressDID,
    };
  }
}
