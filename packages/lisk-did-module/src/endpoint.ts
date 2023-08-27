import { BaseEndpoint, ModuleEndpointContext, JSONObject } from 'lisk-sdk';
import { DocumentStore, documentStoreKey } from './stores/document';
import { NonceStore, nonceStoreKey } from './stores/nonce';
import {
  DidModuleConfig,
  DocumentStoreData,
  NonceStoreData,
  utils,
  DidEndpoint as DidEndpointInterface,
  AuthorizationResult,
  AuthorizationFactors,
} from '@lisk-did/lisk-decentralized-identifier';
import { authorizeFactors } from './logic/authorization';

export class DidEndpoint extends BaseEndpoint implements DidEndpointInterface {
  private chainspace: string = '';
  private autoCreateAddressDID: boolean = false;

  public init(config: DidModuleConfig) {
    this.chainspace = config.chainspace;
    this.autoCreateAddressDID = config.autoCreateAddressDID;
  }

  public async authorize(ctx: ModuleEndpointContext): Promise<AuthorizationResult[]> {
    const { did } = ctx.params;
    if (typeof did !== 'string') throw new Error('Parameter did must be a string.');

    const factors: AuthorizationFactors = {};
    if (ctx.params.publicKey !== undefined) {
      if (typeof ctx.params.publicKey !== 'string') throw new Error('Parameter publicKey must be a string.');
      factors.publicKey = Buffer.from(ctx.params.publicKey, 'hex');
    }
    if (ctx.params.privateKey !== undefined) {
      if (typeof ctx.params.privateKey !== 'string') throw new Error('Parameter privateKey must be a string.');
      factors.privateKey = Buffer.from(ctx.params.privateKey, 'hex');
    }
    if (ctx.params.publicKeyMultibase !== undefined) {
      if (typeof ctx.params.publicKeyMultibase !== 'string')
        throw new Error('Parameter publicKeyMultibase must be a string.');
      factors.publicKeyMultibase = ctx.params.publicKeyMultibase;
    }
    if (ctx.params.privateKeyMultibase !== undefined) {
      if (typeof ctx.params.privateKeyMultibase !== 'string')
        throw new Error('Parameter privateKeyMultibase must be a string.');
      factors.privateKeyMultibase = ctx.params.privateKeyMultibase;
    }
    if (ctx.params.challenge !== undefined) {
      if (typeof ctx.params.challenge !== 'string') throw new Error('Parameter challenge must be a string.');
      factors.challenge = ctx.params.challenge;
    }
    if (ctx.params.signature !== undefined) {
      if (typeof ctx.params.signature !== 'string') throw new Error('Parameter signature must be a string.');
      factors.signature = Buffer.from(ctx.params.signature, 'hex');
    }
    if (ctx.params.controller !== undefined) {
      if (typeof ctx.params.controller !== 'string') throw new Error('Parameter controller must be a string.');
      factors.controller = ctx.params.controller;
    }
    if (ctx.params.relationship !== undefined) {
      if (typeof ctx.params.relationship !== 'string') throw new Error('Parameter relationship must be a string.');
      factors.relationship = JSON.parse(ctx.params.relationship);
    }
    if (factors === undefined || !Object.values(factors).some(v => v !== undefined)) {
      throw new Error('one of valid authentication factors is needed');
    }

    const documentSubstore = this.stores.get(DocumentStore);
    return await authorizeFactors(ctx, documentSubstore, did, factors);
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
