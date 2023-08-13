import { Ed25519VerificationKey2020 } from '@digitalcredentials/ed25519-verification-key-2020';
import { BaseDriver } from './baseDriver';

export class LiskLocalDidDriver extends BaseDriver {
  constructor(param?: { chainspace?: string }) {
    super(Ed25519VerificationKey2020);
    this.chainspace = param?.chainspace;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async initChainspace() {
    if (this.chainspace === undefined) {
      throw new Error('local driver needs to be configured with chainspace');
    }
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async get(_params: { did: string; url: string }) {
    throw new Error('get() method is not available in local driver');
  }
}
