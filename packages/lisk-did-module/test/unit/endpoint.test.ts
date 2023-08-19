/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { DidEndpoint } from '@dist/endpoint';
import { DidModule } from '@dist/module';
import { DocumentStore, documentStoreKey } from '@dist/stores/document';
import { NonceStore, nonceStoreKey } from '@dist/stores/nonce';
import { BaseEndpoint, ModuleEndpointContext, testing } from 'lisk-sdk';
import { utils } from '@lisk-did/lisk-decentralized-identifier';
import { config, nonce, publicKey, senderDID, senderDIDDoc } from '../setup/constant';
import { PrefixedStateReadWriter } from '../../../../node_modules/lisk-framework/dist-node/state_machine/prefixed_state_read_writer';

describe('DidEndpoint', () => {
  let context: ModuleEndpointContext;
  let module: DidModule;
  let endpoint: DidEndpoint;
  let stateStore: PrefixedStateReadWriter;
  let documentSubstore: DocumentStore;
  let nonceSubstore: NonceStore;

  beforeEach(async () => {
    module = new DidModule();
    endpoint = module.endpoint;
    stateStore = new PrefixedStateReadWriter(new testing.InMemoryPrefixedStateDB());
    documentSubstore = module.stores.get(DocumentStore);
    nonceSubstore = module.stores.get(NonceStore);
    context = testing.createTransientMethodContext({ stateStore }) as any;
    await documentSubstore.set(context as any, documentStoreKey(senderDID), senderDIDDoc);
    await nonceSubstore.set(context as any, nonceStoreKey(senderDID), nonce);
  });

  it('should inherit from BaseEndpoint', () => {
    expect(DidEndpoint.prototype).toBeInstanceOf(BaseEndpoint);
  });

  describe('constructor', () => {
    it('should be of the correct type', () => {
      expect(endpoint).toBeInstanceOf(DidEndpoint);
    });

    it("should expose 'init'", () => {
      expect(typeof endpoint.init).toBe('function');
    });

    it("should expose 'authorize'", () => {
      expect(typeof endpoint.authorize).toBe('function');
    });

    it("should expose 'read'", () => {
      expect(typeof endpoint.read).toBe('function');
    });

    it("should expose 'getNonce'", () => {
      expect(typeof endpoint.getNonce).toBe('function');
    });

    it("should expose 'getConfig'", () => {
      expect(typeof endpoint.getConfig).toBe('function');
    });
  });

  describe('init', () => {
    it('should set the config accordingly', () => {
      endpoint.init(config);
      expect(endpoint['chainspace']).toBe(config.chainspace);
      expect(endpoint['autoCreateAddressDID']).toBe(config.autoCreateAddressDID);
    });
  });

  describe('authorize', () => {
    it('should authorize valid public key', async () => {
      const param = { did: senderDID, publicKey: publicKey.toString('hex') };
      context = testing.createTransientModuleEndpointContext({ stateStore, params: param });
      const authorization = await endpoint.authorize(context);
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
      const param = { did: senderDID, publicKey: Buffer.alloc(32).toString('hex') };
      context = testing.createTransientModuleEndpointContext({ stateStore, params: param });
      const authorization = await endpoint.authorize(context);
      expect(authorization).toHaveLength(0);
    });

    it('should throw an error if param.did is not a string', async () => {
      const func = async () => {
        const param = { did: 1, publicKey: publicKey.toString('hex') };
        context = testing.createTransientModuleEndpointContext({ stateStore, params: param });
        await endpoint.authorize(context);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.publicKey is not a string', async () => {
      const func = async () => {
        const param = { did: senderDID, publicKey: 1 };
        context = testing.createTransientModuleEndpointContext({ stateStore, params: param });
        await endpoint.authorize(context);
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('read', () => {
    it('should return did document from chain', async () => {
      const param = { did: senderDID };
      context = testing.createTransientModuleEndpointContext({ stateStore, params: param });
      const didDocument = await endpoint.read(context);
      expect(didDocument).toBeDefined();
    });

    it('should return undefined if document not exist', async () => {
      const param = { did: 'did:lisk:not:exist:id' };
      context = testing.createTransientModuleEndpointContext({ stateStore, params: param });
      const didDocument = await endpoint.read(context);
      expect(didDocument).toBeUndefined();
    });

    it('should throw an error if param.did is not a string', async () => {
      const func = async () => {
        const param = { did: 1 };
        context = testing.createTransientModuleEndpointContext({ stateStore, params: param });
        await endpoint.read(context);
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('getNonce', () => {
    it('should return nonce of an address', async () => {
      const param = { did: senderDID };
      context = testing.createTransientModuleEndpointContext({ stateStore, params: param });
      const didNonce = await endpoint.getNonce(context);
      expect(didNonce).toStrictEqual(utils.object.serializer(nonce));
    });

    it('should return nonce 0 for a non existent nonce', async () => {
      const param = { did: 'did:lisk:not:exist:nonce' };
      context = testing.createTransientModuleEndpointContext({ stateStore, params: param });
      const didNonce = await endpoint.getNonce(context);
      expect(didNonce).toStrictEqual({ nonce: '0' });
    });

    it('should throw an error if param.did is not a string', async () => {
      const func = async () => {
        const param = { did: 1 };
        context = testing.createTransientModuleEndpointContext({ stateStore, params: param });
        await endpoint.getNonce(context);
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('getConfig', () => {
    it('should return currently set config.chainspace', async () => {
      endpoint.init(config);
      const didConfig = await endpoint.getConfig(context);
      expect(didConfig.chainspace).toBe(config.chainspace);
    });

    it('should return currently set config.autoCreateAddressDID', async () => {
      endpoint.init(config);
      const didConfig = await endpoint.getConfig(context);
      expect(didConfig.autoCreateAddressDID).toBe(config.autoCreateAddressDID);
    });
  });
});
