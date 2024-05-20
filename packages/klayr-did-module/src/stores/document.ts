import { BaseStore, ImmutableStoreGetter, StoreGetter } from 'klayr-sdk';
import { NotFoundError } from '@liskhq/lisk-db';
import { DocumentStoreData, parseDIDComponent, utils } from '@klayr-did/klayr-decentralized-identifier';

type ModifiedDocumentStoreData = Omit<DocumentStoreData, '@context'> & { context: string[] };

export class DocumentStore extends BaseStore<DocumentStoreData> {
  public schema = utils.schema.documentStoreSchema;

  public async get(ctx: ImmutableStoreGetter, key: Buffer): Promise<DocumentStoreData> {
    if (!this.schema) {
      throw new Error('Schema is not set');
    }
    const did = preprocessDocumentStoreKey(key);
    const subStore = ctx.getStore(this.storePrefix, this.subStorePrefix);
    return contextToAtContext(await subStore.getWithSchema<ModifiedDocumentStoreData>(did, this.schema));
  }

  public async set(ctx: StoreGetter, key: Buffer, value: DocumentStoreData): Promise<void> {
    if (!this.schema) {
      throw new Error('Schema is not set');
    }
    const did = preprocessDocumentStoreKey(key);
    const subStore = ctx.getStore(this.storePrefix, this.subStorePrefix);
    await subStore.setWithSchema(did, atContextToContext(value), this.schema);
  }

  public async getOrUndefined(context: ImmutableStoreGetter, did: Buffer): Promise<DocumentStoreData | undefined> {
    try {
      const document = await this.get(context, did);
      return document;
    } catch (error) {
      if (!(error instanceof NotFoundError)) {
        throw error;
      }
      return undefined;
    }
  }
}

export const documentStoreKey = (did: string) => {
  return Buffer.from(`${did}`, 'utf-8');
};

export const preprocessDocumentStoreKey = (key: Buffer) => {
  return documentStoreKey(parseDIDComponent(key.toString('utf-8')).did);
};

const contextToAtContext = (doc: ModifiedDocumentStoreData): DocumentStoreData => {
  let restDoc = {};
  restDoc['@context'] = doc.context;
  const { context, ...oldDoc } = doc;
  restDoc = {
    ...restDoc,
    ...oldDoc,
  };
  return restDoc as DocumentStoreData;
};

const atContextToContext = (doc: DocumentStoreData) => {
  const restDoc: Omit<DocumentStoreData, '@context'> & { context: string[]; '@context'?: string[] } = {
    ...doc,
    context: doc['@context'],
  };
  delete restDoc['@context'];
  return restDoc;
};
