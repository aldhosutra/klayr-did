import { MethodContext } from 'klayr-sdk';
import { Ed25519VerificationKey2020 } from '@digitalcredentials/ed25519-verification-key-2020';
import { BaseDriver } from './baseDriver';
import { DidMethod } from '../../types';

export class KlayrOnChainDidDriver extends BaseDriver {
  private context: MethodContext;
  private didMethod: DidMethod;

  constructor(param: { context: MethodContext; method: DidMethod }) {
    super(Ed25519VerificationKey2020);
    this.context = param.context;
    this.didMethod = param.method;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async initChainspace() {
    if (this.chainspace === undefined) {
      const config = this.didMethod.getConfig();
      this.chainspace = config.chainspace;
    }
  }

  async get(params: { did?: string; url?: string }) {
    let { did, url } = params;
    did = did || url;
    if (!did) throw new TypeError('"did" or "url" must be a string.');

    const [didAuthority, keyIdFragment] = did.split('#');
    const didDocument = await this.didMethod.read(this.context, didAuthority);

    if (didDocument == null || (didDocument as unknown as string) === '{}' || Object.keys(didDocument).length === 0) {
      return undefined;
    }

    if (keyIdFragment) return this._getKey(didDocument, did);
    return didDocument;
  }
}
