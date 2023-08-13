import { BaseStore, ImmutableStoreGetter, StoreGetter } from 'lisk-sdk';
import { NotFoundError } from '@liskhq/lisk-db';
import { NonceStoreData, parseDIDComponent, utils } from '@lisk-did/lisk-decentralized-identifier';

export class NonceStore extends BaseStore<NonceStoreData> {
  public schema = utils.schema.nonceStoreSchema;

  public async get(ctx: ImmutableStoreGetter, key: Buffer): Promise<NonceStoreData> {
    if (!this.schema) {
      throw new Error('Schema is not set');
    }
    const did = preprocessNonceStoreKey(key);
    const subStore = ctx.getStore(this.storePrefix, this.subStorePrefix);
    return await subStore.getWithSchema<NonceStoreData>(did, this.schema);
  }

  public async set(ctx: StoreGetter, key: Buffer, value: NonceStoreData): Promise<void> {
    if (!this.schema) {
      throw new Error('Schema is not set');
    }
    const did = preprocessNonceStoreKey(key);
    const subStore = ctx.getStore(this.storePrefix, this.subStorePrefix);
    await subStore.setWithSchema(did, value, this.schema);
  }

  public async getOrDefault(context: ImmutableStoreGetter, key: Buffer): Promise<NonceStoreData> {
    try {
      const nonce = await this.get(context, key);
      return nonce;
    } catch (error) {
      if (!(error instanceof NotFoundError)) {
        throw error;
      }
      return { nonce: BigInt(0) };
    }
  }
}

export const nonceStoreKey = (did: string) => {
  const path = 'nonce';
  return Buffer.from(`${did}/${path}`, 'utf-8');
};

export const preprocessNonceStoreKey = (key: Buffer) => {
  return Buffer.from(parseDIDComponent(key.toString('utf-8')).uri, 'utf-8');
};
