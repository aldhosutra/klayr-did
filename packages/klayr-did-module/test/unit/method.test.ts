/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { DidModule } from '@dist/module';
import { DocumentStore, documentStoreKey } from '@dist/stores/document';
import { NonceStore, nonceStoreKey } from '@dist/stores/nonce';
import { BaseMethod, MethodContext, testing } from 'klayr-sdk';
import { DidMethod } from '@dist/method';
import { utils } from '@klayr-did/klayr-decentralized-identifier';
import {
  config,
  customDID,
  customDIDDoc,
  endpoint,
  noDocumentDID,
  nonce,
  publicKey,
  publicKey2,
  publicKeyMultiBase2,
  senderDID,
  senderDIDDoc,
} from '../setup/constant';
import { PrefixedStateReadWriter } from '../../../../node_modules/klayr-framework/dist-node/state_machine/prefixed_state_read_writer';

describe('DidMethod', () => {
  let context: MethodContext;
  let module: DidModule;
  let method: DidMethod;
  let stateStore: PrefixedStateReadWriter;
  let documentSubstore: DocumentStore;
  let nonceSubstore: NonceStore;
  const mockedAddEvent = jest.fn();

  afterEach(jest.clearAllMocks);

  beforeEach(async () => {
    module = new DidModule();
    method = module.method;
    stateStore = new PrefixedStateReadWriter(new testing.InMemoryPrefixedStateDB());
    documentSubstore = module.stores.get(DocumentStore);
    nonceSubstore = module.stores.get(NonceStore);
    context = testing.createTransientMethodContext({ stateStore, eventQueue: { add: mockedAddEvent } as any });
    await documentSubstore.set(context as any, documentStoreKey(senderDID), senderDIDDoc);
    await nonceSubstore.set(context as any, nonceStoreKey(senderDID), nonce);
    method.init(config);
  });

  it('should inherit from BaseMethod', () => {
    expect(DidMethod.prototype).toBeInstanceOf(BaseMethod);
  });

  describe('constructor', () => {
    it('should be of the correct type', () => {
      expect(method).toBeInstanceOf(DidMethod);
    });

    it("should expose 'init'", () => {
      expect(typeof method.init).toBe('function');
    });

    it("should expose 'authorize'", () => {
      expect(typeof method.authorize).toBe('function');
    });

    it("should expose 'read'", () => {
      expect(typeof method.read).toBe('function');
    });

    it("should expose 'getNonce'", () => {
      expect(typeof method.getNonce).toBe('function');
    });

    it("should expose 'create'", () => {
      expect(typeof method.create).toBe('function');
    });

    it("should expose 'addKeys'", () => {
      expect(typeof method.addKeys).toBe('function');
    });

    it("should expose 'removeKeys'", () => {
      expect(typeof method.removeKeys).toBe('function');
    });

    it("should expose 'addControllers'", () => {
      expect(typeof method.addControllers).toBe('function');
    });

    it("should expose 'removeControllers'", () => {
      expect(typeof method.removeControllers).toBe('function');
    });

    it("should expose 'addServiceEndpoint'", () => {
      expect(typeof method.addServiceEndpoint).toBe('function');
    });

    it("should expose 'removeServiceEndpoint'", () => {
      expect(typeof method.removeServiceEndpoint).toBe('function');
    });

    it("should expose 'deactivate'", () => {
      expect(typeof method.deactivate).toBe('function');
    });
  });

  describe('init', () => {
    it('should set the config accordingly', () => {
      method.init(config);
      expect(method.config.chainspace).toBe(config.chainspace);
      expect(method.config.autoCreateAddressDID).toBe(config.autoCreateAddressDID);
    });
  });

  describe('authorize', () => {
    it('should authorize valid public key', async () => {
      const authorization = await method.authorize(context, senderDID, { publicKey });
      expect(authorization).toHaveLength(2);

      expect(authorization[0].type).toBe('subject');
      expect(authorization[0].did).toBe(senderDID);
      expect(authorization[0].relationship).toContain('authentication');
      expect(authorization[0].relationship).toContain('assertionMethod');
      expect(authorization[0].relationship).toContain('capabilityInvocation');
      expect(authorization[0].relationship).toContain('keyAgreement');

      expect(authorization[1].type).toBe('controller');
      expect(authorization[1].did).toBe(senderDID);
      expect(authorization[1].relationship).toContain('authentication');
      expect(authorization[1].relationship).toContain('assertionMethod');
      expect(authorization[1].relationship).toContain('capabilityInvocation');
      expect(authorization[1].relationship).toContain('keyAgreement');
    });

    it('should not authorize invalid public key', async () => {
      const authorization = await method.authorize(context, senderDID, { publicKey: Buffer.alloc(32) });
      expect(authorization).toHaveLength(0);
    });

    it('should throw an error if did is not a string', async () => {
      const func = async () => {
        await method.authorize(context, 1 as any, { publicKey });
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if publicKey is not a string', async () => {
      const func = async () => {
        await method.authorize(context, senderDID, { publicKey: 1 } as any);
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('read', () => {
    it('should return did document from chain', async () => {
      const didDocument = await method.read(context, senderDID);
      expect(didDocument).toBeDefined();
    });

    it('should throw an error if document not exist', async () => {
      const func = async () => {
        await method.read(context, noDocumentDID);
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('getNonce', () => {
    it('should return nonce of an address in json format', async () => {
      const didNonce = await method.getNonce(context, senderDID);
      expect(didNonce).toStrictEqual(utils.object.serializer(nonce));
    });

    it('should not throw an error for a non existent nonce', async () => {
      const func = async () => {
        await method.getNonce(context, noDocumentDID);
      };
      await expect(func()).resolves.not.toThrow();
    });
  });

  describe('incrementNonce', () => {
    it('should increment nonce', async () => {
      await method.incrementNonce(context, senderDID);
      const senderNonce = await nonceSubstore.get(context, nonceStoreKey(senderDID));
      expect(senderNonce).toBeDefined();
      expect(Number(senderNonce.nonce)).toBe(2);
    });
  });

  describe('getConfig', () => {
    it('should return currently set config.chainspace', () => {
      method.init(config);
      const didConfig = method.getConfig();
      expect(didConfig.chainspace).toBe(config.chainspace);
    });

    it('should return currently set config.autoCreateAddressDID', () => {
      method.init(config);
      const didConfig = method.getConfig();
      expect(didConfig.autoCreateAddressDID).toBe(config.autoCreateAddressDID);
    });
  });

  describe('create', () => {
    it('should create a new did document', async () => {
      await method.create(
        context,
        publicKey,
        customDID,
        [senderDID],
        [{ publicKey: publicKey2, relationship: ['assertionMethod'] }],
      );
      const didDocument = await documentSubstore.get(context, documentStoreKey(customDID));
      expect(didDocument).toBeDefined();
      expect(didDocument.verificationMethod[0].publicKeyMultibase).toBe(publicKeyMultiBase2);
      expect(mockedAddEvent).toHaveBeenCalled();
    });
  });

  describe('addKeys', () => {
    it('should add a new keys to did document', async () => {
      await method.addKeys(
        context,
        publicKey,
        senderDID,
        [{ publicKey: publicKey2, relationship: ['assertionMethod'] }],
        senderDID,
      );
      const didDocument = await documentSubstore.get(context, documentStoreKey(senderDID));
      expect(didDocument.verificationMethod).toHaveLength(2);
      expect(mockedAddEvent).toHaveBeenCalled();
    });
  });

  describe('removeKeys', () => {
    it('should remove a keys from did document', async () => {
      await method.removeKeys(context, publicKey, senderDID, [publicKey], senderDID);
      const didDocument = await documentSubstore.get(context, documentStoreKey(senderDID));
      expect(didDocument.verificationMethod).toHaveLength(0);
      expect(mockedAddEvent).toHaveBeenCalled();
    });
  });

  describe('addControllers', () => {
    it('should add a new controller to did document', async () => {
      await documentSubstore.set(context, documentStoreKey(customDID), customDIDDoc);
      await method.addControllers(context, publicKey, senderDID, [customDID], senderDID);
      const didDocument = await documentSubstore.get(context, documentStoreKey(senderDID));
      expect(didDocument.controller).toHaveLength(2);
      expect(didDocument.controller).toContain(customDID);
      expect(mockedAddEvent).toHaveBeenCalled();
    });
  });

  describe('removeControllers', () => {
    it('should remove a controller from did document', async () => {
      await documentSubstore.set(context, documentStoreKey(senderDID), {
        ...customDIDDoc,
        controller: [senderDID, customDID],
      });
      await method.removeControllers(context, publicKey, senderDID, [customDID], senderDID);
      const didDocument = await documentSubstore.get(context, documentStoreKey(senderDID));
      expect(didDocument.controller).toHaveLength(1);
      expect(didDocument.controller).not.toContain(customDID);
      expect(mockedAddEvent).toHaveBeenCalled();
    });
  });

  describe('addServiceEndpoint', () => {
    it('should add a new service endpoint to did document', async () => {
      await method.addServiceEndpoint(context, publicKey, senderDID, endpoint, senderDID);
      const didDocument = await documentSubstore.get(context, documentStoreKey(senderDID));
      expect(didDocument.service).toHaveLength(1);
      expect(didDocument.service).toContainEqual(endpoint);
      expect(mockedAddEvent).toHaveBeenCalled();
    });
  });

  describe('removeServiceEndpoint', () => {
    it('should remove a service endpoint from did document', async () => {
      await documentSubstore.set(context, documentStoreKey(senderDID), {
        ...customDIDDoc,
        service: [endpoint],
      });
      await method.removeServiceEndpoint(context, publicKey, senderDID, endpoint.id, senderDID);
      const didDocument = await documentSubstore.get(context, documentStoreKey(senderDID));
      expect(didDocument.service).toHaveLength(0);
      expect(didDocument.service).not.toContain(endpoint);
      expect(mockedAddEvent).toHaveBeenCalled();
    });
  });

  describe('deactivate', () => {
    it('should deactivate a did document', async () => {
      await method.deactivate(context, publicKey, senderDID, senderDID);
      const didDocument = await documentSubstore.get(context, documentStoreKey(senderDID));
      expect(didDocument.controller).toHaveLength(0);
      expect(didDocument.verificationMethod).toHaveLength(0);
      expect(didDocument.assertionMethod).toHaveLength(0);
      expect(didDocument.authentication).toHaveLength(0);
      expect(didDocument.capabilityInvocation).toHaveLength(0);
      expect(didDocument.keyAgreement).toHaveLength(0);
      expect(mockedAddEvent).toHaveBeenCalled();
    });
  });
});
