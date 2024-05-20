/* eslint-disable import/no-extraneous-dependencies */
import { DidModule } from '@dist/module';
import { NonceStore, nonceStoreKey } from '@dist/stores/nonce';
import { StoreGetter, testing } from 'klayr-sdk';
import { PrefixedStateReadWriter } from 'klayr-framework/dist-node/state_machine/prefixed_state_read_writer';
import { createStoreGetter } from '../../utils/store';
import { nonce, senderDID } from '../../setup/constant';

describe('NonceStore', () => {
  let stateStore: PrefixedStateReadWriter;
  let module: DidModule;
  let store: StoreGetter;
  let nonceSubstore: NonceStore;

  beforeEach(() => {
    module = new DidModule();
    stateStore = new PrefixedStateReadWriter(new testing.InMemoryPrefixedStateDB());
    nonceSubstore = module.stores.get(NonceStore);
    store = createStoreGetter(stateStore);
  });

  describe('get', () => {
    it('should throw an error if schema is not set', async () => {
      const func = async () => {
        nonceSubstore.schema = undefined as any;
        await nonceSubstore.get(store, nonceStoreKey(senderDID));
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('set', () => {
    it('should throw an error if schema is not set', async () => {
      const func = async () => {
        nonceSubstore.schema = undefined as any;
        await nonceSubstore.set(store, nonceStoreKey(senderDID), nonce);
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('getOrUndefined', () => {
    it('should throw an error if error thrown is not NotFoundError', async () => {
      jest.spyOn(nonceSubstore, 'get').mockImplementation(() => {
        throw new Error('not a NotFoundError');
      });
      const func = async () => {
        nonceSubstore.schema = undefined as any;
        await nonceSubstore.getOrDefault(store, nonceStoreKey(senderDID));
      };
      await expect(func()).rejects.toThrow();
    });
  });
});
