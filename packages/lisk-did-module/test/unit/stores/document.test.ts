/* eslint-disable import/no-extraneous-dependencies */
import { DidModule } from '@dist/module';
import { DocumentStore, documentStoreKey } from '@dist/stores/document';
import { StoreGetter, testing } from 'lisk-sdk';
import { PrefixedStateReadWriter } from 'lisk-framework/dist-node/state_machine/prefixed_state_read_writer';
import { createStoreGetter } from '../../utils/store';
import { senderDID, senderDIDDoc } from '../../setup/constant';

describe('DocumentStore', () => {
  let stateStore: PrefixedStateReadWriter;
  let module: DidModule;
  let store: StoreGetter;
  let documentSubstore: DocumentStore;

  beforeEach(() => {
    module = new DidModule();
    stateStore = new PrefixedStateReadWriter(new testing.InMemoryPrefixedStateDB());
    documentSubstore = module.stores.get(DocumentStore);
    store = createStoreGetter(stateStore);
  });

  describe('get', () => {
    it('should throw an error if schema is not set', async () => {
      const func = async () => {
        documentSubstore.schema = undefined as any;
        await documentSubstore.get(store, documentStoreKey(senderDID));
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('set', () => {
    it('should throw an error if schema is not set', async () => {
      const func = async () => {
        documentSubstore.schema = undefined as any;
        await documentSubstore.set(store, documentStoreKey(senderDID), senderDIDDoc);
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('getOrUndefined', () => {
    it('should throw an error if error thrown is not NotFoundError', async () => {
      jest.spyOn(documentSubstore, 'get').mockImplementation(() => {
        throw new Error('not a NotFoundError');
      });
      const func = async () => {
        documentSubstore.schema = undefined as any;
        await documentSubstore.getOrUndefined(store, documentStoreKey(senderDID));
      };
      await expect(func()).rejects.toThrow();
    });
  });
});
