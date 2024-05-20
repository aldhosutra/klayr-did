import { apiClient } from 'klayr-sdk';
import { Ed25519VerificationKey2020 } from '@digitalcredentials/ed25519-verification-key-2020';
import { BaseDriver } from './baseDriver';
import { DidDocument } from '../../types';

export class KlayrOffChainDidDriver extends BaseDriver {
  private apiClient: apiClient.APIClient | undefined;
  private ipc: string | undefined;
  private ws: string | undefined;

  constructor(param?: { ipc?: string; ws?: string }) {
    super(Ed25519VerificationKey2020);
    if (param) {
      this.ipc = param.ipc;
      this.ws = param.ws;
    }
  }

  async initChainspace() {
    if (this.chainspace === undefined) {
      if (this.ipc !== undefined || this.ws !== undefined) {
        await this._initClient();
        const didConfig = await this.apiClient!.invoke('did_getConfig');
        this.chainspace = didConfig.chainspace as string;
        await this._closeClient();
      } else {
        throw new Error(
          'off chain driver needs to be configured with either ipc/ws for automatic chainspace resolvance',
        );
      }
    }
  }

  async get(params: { did?: string; url?: string }) {
    let { did, url } = params;
    did = did || url;
    if (!did) throw new TypeError('"did" or "url" must be a string.');

    await this._initClient();
    const [didAuthority, keyIdFragment] = did.split('#');
    const didDocument = await this.apiClient!.invoke<DidDocument>('did_read', { did: didAuthority });
    await this._closeClient();

    if (didDocument == null || (didDocument as unknown as string) === '{}' || Object.keys(didDocument).length === 0) {
      return undefined;
    }

    if (keyIdFragment) return this._getKey(didDocument, did);
    return didDocument;
  }

  private async _initClient() {
    if (!(this.ipc || this.ws)) {
      throw new Error('driver needs to be configured with correct ipc or ws klayr sidechain node url');
    }
    if (this.ipc !== undefined) {
      this.apiClient = await apiClient.createIPCClient(this.ipc);
    } else if (this.ws !== undefined) {
      this.apiClient = await apiClient.createWSClient(this.ws);
    }
  }

  private async _closeClient() {
    if (this.apiClient) {
      await this.apiClient.disconnect();
    }
  }
}
