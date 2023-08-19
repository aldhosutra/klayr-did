/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { BaseModule, testing } from 'lisk-sdk';
import { DidModule, DidMethod, DidEndpoint } from '@dist/index';
import { DocumentStore, documentStoreKey } from '@dist/stores/document';
import { chainID, chainspace, publicKey, senderDID, senderDIDDoc } from '../setup/constant';
import { PrefixedStateReadWriter } from '../../../../node_modules/lisk-framework/dist-node/state_machine/prefixed_state_read_writer';

describe('DidModule', () => {
  let didModule: DidModule;
  let stateStore: PrefixedStateReadWriter;
  let documentSubstore: DocumentStore;

  beforeEach(() => {
    didModule = new DidModule();
    stateStore = new PrefixedStateReadWriter(new testing.InMemoryPrefixedStateDB());
    documentSubstore = didModule.stores.get(DocumentStore);
  });

  it('should inherit from BaseModule', () => {
    expect(DidModule.prototype).toBeInstanceOf(BaseModule);
  });

  describe('constructor', () => {
    it('should have valid name', () => {
      expect(didModule.name).toBe('did');
    });

    it('should expose endpoint', () => {
      expect(didModule).toHaveProperty('endpoint');
      expect(didModule.endpoint).toBeInstanceOf(DidEndpoint);
    });

    it('should expose Method', () => {
      expect(didModule).toHaveProperty('method');
      expect(didModule.method).toBeInstanceOf(DidMethod);
    });
  });

  describe('metadata', () => {
    it('should return module metadata', () => {
      const moduleMetadata = didModule.metadata();
      expect(typeof moduleMetadata).toBe('object');
      expect(Object.keys(moduleMetadata)).toEqual(['commands', 'events', 'stores', 'endpoints', 'assets']);
      expect(moduleMetadata.commands).toHaveLength(8);
      expect(moduleMetadata.events).toHaveLength(8);
      expect(moduleMetadata.assets).toHaveLength(0);
      expect(moduleMetadata.stores).toHaveLength(2);
    });
  });

  describe('init', () => {
    it('should throw an error if config.chainspace is undefined', async () => {
      const func = async () => {
        await didModule.init({
          moduleConfig: { chainspace: undefined, autoCreateAddressDID: true },
          genesisConfig: undefined as any,
        });
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if config.chainspace is not a string', async () => {
      const func = async () => {
        await didModule.init({
          moduleConfig: { chainspace: 1, autoCreateAddressDID: true },
          genesisConfig: undefined as any,
        });
      };
      await expect(func()).rejects.toThrow();
    });

    it('should set the config.autoCreateAddressDID to true if not set', async () => {
      await didModule.init({
        moduleConfig: { chainspace },
        genesisConfig: undefined as any,
      });
      expect(didModule['autoCreateAddressDID']).toBe(true);
    });
  });

  describe('beforeCommandExecute', () => {
    let context;
    const transaction = { senderPublicKey: publicKey } as any;

    beforeEach(async () => {
      await didModule.init({
        moduleConfig: { chainspace, autoCreateAddressDID: true },
        genesisConfig: undefined as any,
      });
      context = testing
        .createTransactionContext({ chainID, transaction, stateStore })
        .createTransactionExecuteContext();
    });

    it('should initialize a new address DID for sender if config.autoCreateAddressDID is true', async () => {
      await didModule.beforeCommandExecute(context);
      expect(await documentSubstore.has(context, documentStoreKey(senderDID))).toBe(true);
    });

    it('should not initialize a new address DID for sender if config.autoCreateAddressDID is false', async () => {
      didModule['autoCreateAddressDID'] = false;
      await didModule.beforeCommandExecute(context);
      expect(await documentSubstore.has(context, documentStoreKey(senderDID))).toBe(false);
    });

    it('should not initialize a new address DID for sender if already exist', async () => {
      await documentSubstore.set(context, documentStoreKey(senderDID), senderDIDDoc);
      const spy = jest.spyOn(documentSubstore, 'set');
      await didModule.beforeCommandExecute(context);
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
