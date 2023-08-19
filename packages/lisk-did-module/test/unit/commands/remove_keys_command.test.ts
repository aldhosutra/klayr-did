/* eslint-disable import/no-extraneous-dependencies */
import { DidModule } from '@dist/module';
import { BaseCommand, Transaction, VerifyStatus, codec, testing, utils as liskUtils, StoreGetter } from 'lisk-sdk';
import { DocumentStore, documentStoreKey } from '@dist/stores/document';
import {
  utils,
  client,
  PayloadWithSignature,
  DidDocument,
  RemoveKeysParam,
} from '@lisk-did/lisk-decentralized-identifier';
import { RemoveKeysCommand } from '@dist/commands/remove_keys_command';
import { NonceStore, nonceStoreKey } from '@dist/stores/nonce';
import { RemoveKeysEvent } from '@dist/events/remove_keys_event';
import { PrefixedStateReadWriter } from '../../../../../node_modules/lisk-framework/dist-node/state_machine/prefixed_state_read_writer';
import {
  chainID,
  config,
  customDID,
  customDIDDoc,
  emptyDID,
  emptyDIDDoc,
  nonce,
  privateKey,
  publicKey,
  publicKeyMultiBase2,
  senderDID,
  senderDIDDoc,
  signature,
  x25519PublicKeyMultibase2,
} from '../../setup/constant';
import { createStoreGetter } from '../../utils/store';
import { eventResult } from '../../utils/events';

type CommandParam = RemoveKeysParam;
const MODULE_NAME = 'did';
const COMMAND_NAME = 'removeKeys';
const commandSchema = utils.schema.removeKeysCommandSchema;

let stateStore: PrefixedStateReadWriter;
const validParam: CommandParam = {
  target: senderDID,
  publicKeys: [publicKey],
  signature: Buffer.alloc(0),
  signer: '',
};

const emptyVerificationMethod: Partial<DidDocument> = {
  verificationMethod: [],
  authentication: [],
  assertionMethod: [],
  capabilityInvocation: [],
  keyAgreement: [],
};

function createCommandContext(param: CommandParam) {
  const encodedTransactionParams = codec.encode(commandSchema, param);
  const transaction = new Transaction({
    module: 'did',
    command: COMMAND_NAME,
    senderPublicKey: publicKey,
    nonce: BigInt(0),
    fee: BigInt(1000000000),
    params: encodedTransactionParams,
    signatures: [publicKey],
  });
  return testing.createTransactionContext({ chainID, stateStore, transaction });
}

function createCommandVerifyContext(param: CommandParam) {
  const context = createCommandContext(param);
  return context.createCommandVerifyContext<CommandParam>(commandSchema);
}

function createCommandExecuteContext(param: CommandParam) {
  const context = createCommandContext(param);
  return context.createCommandExecuteContext<CommandParam>(commandSchema);
}

function createSignaturePayload(param: CommandParam): PayloadWithSignature {
  return {
    command: COMMAND_NAME,
    params: { ...param, nonce: nonce.nonce },
  };
}

describe('RemoveKeysCommand', () => {
  let module: DidModule;
  let store: StoreGetter;
  let command: RemoveKeysCommand;
  let documentSubstore: DocumentStore;
  let nonceSubstore: NonceStore;

  beforeEach(async () => {
    module = new DidModule();
    command = new RemoveKeysCommand(module.stores, module.events);
    stateStore = new PrefixedStateReadWriter(new testing.InMemoryPrefixedStateDB());
    documentSubstore = module.stores.get(DocumentStore);
    nonceSubstore = module.stores.get(NonceStore);
    await command.init(config);

    store = createStoreGetter(stateStore);
    await documentSubstore.set(store, documentStoreKey(senderDID), senderDIDDoc);
    await documentSubstore.set(store, documentStoreKey(customDID), customDIDDoc);
    await documentSubstore.set(store, documentStoreKey(emptyDID), emptyDIDDoc);

    await nonceSubstore.set(store, nonceStoreKey(senderDID), nonce);
    await nonceSubstore.set(store, nonceStoreKey(customDID), nonce);
    await nonceSubstore.set(store, nonceStoreKey(emptyDID), nonce);
  });

  describe('constructor', () => {
    it('should inherit from BaseCommand', () => {
      expect(RemoveKeysCommand.prototype).toBeInstanceOf(BaseCommand);
    });

    it('should have valid name', () => {
      expect(command.name).toBe(COMMAND_NAME);
    });

    it('should have valid schema', () => {
      expect(command.schema).toEqual(commandSchema);
    });
  });

  describe('init', () => {
    it('should set the command config accordingly', async () => {
      await command.init(config);
      expect(command['config']).toStrictEqual(config);
    });
  });

  describe('verify', () => {
    let param: CommandParam = validParam;

    beforeEach(() => {
      param = liskUtils.objects.cloneDeep(validParam);
    });

    it('should return status OK when signer is the DID subject', async () => {
      await documentSubstore.set(store, documentStoreKey(customDID), {
        ...customDIDDoc,
        controller: [senderDID],
      });
      param.target = customDID;
      param.signer = customDID;
      param.signature = client.utils.createTransactionSignature(createSignaturePayload(param), privateKey);

      const context = createCommandVerifyContext(param);
      await expect(command.verify(context)).resolves.toHaveProperty('status', VerifyStatus.OK);
    });

    it('should return status OK when signer is the DID controller', async () => {
      await documentSubstore.set(store, documentStoreKey(customDID), {
        ...customDIDDoc,
        controller: [senderDID],
        verificationMethod: [],
      });
      param.target = customDID;
      param.signer = senderDID;
      param.signature = client.utils.createTransactionSignature(createSignaturePayload(param), privateKey);

      const context = createCommandVerifyContext(param);
      await expect(command.verify(context)).resolves.toHaveProperty('status', VerifyStatus.OK);
    });

    it('should return status OK when sender is the DID subject', async () => {
      const context = createCommandVerifyContext(param);
      await expect(command.verify(context)).resolves.toHaveProperty('status', VerifyStatus.OK);
    });

    it('should return status OK when sender is the signer that controls DID', async () => {
      await documentSubstore.set(store, documentStoreKey(customDID), {
        ...customDIDDoc,
        controller: [senderDID],
        ...emptyVerificationMethod,
      });
      param.target = customDID;
      param.signer = senderDID;
      const context = createCommandVerifyContext(param);
      await expect(command.verify(context)).resolves.toHaveProperty('status', VerifyStatus.OK);
    });

    it('should return status OK when sender private key match with the DID controller with address namespace', async () => {
      await documentSubstore.set(store, documentStoreKey(customDID), {
        ...customDIDDoc,
        controller: [senderDID],
        ...emptyVerificationMethod,
      });
      param.target = customDID;
      const context = createCommandVerifyContext(param);
      await expect(command.verify(context)).resolves.toHaveProperty('status', VerifyStatus.OK);
    });

    it('should return status FAIL if none of above scenario matched', async () => {
      param.target = emptyDID;
      param.signer = emptyDID;
      const context = createCommandVerifyContext(param);
      await expect(command.verify(context)).resolves.toHaveProperty('status', VerifyStatus.FAIL);
    });

    it('should return status FAIL when signature is supplied, but signer is falsy', async () => {
      param.signature = signature;
      const context = createCommandVerifyContext(param);
      await expect(command.verify(context)).resolves.toHaveProperty('status', VerifyStatus.FAIL);
    });

    it('should return status FAIL when signature is supplied, but not authorized', async () => {
      param.signature = signature;
      param.signer = senderDID;
      const context = createCommandVerifyContext(param);
      await expect(command.verify(context)).resolves.toHaveProperty('status', VerifyStatus.FAIL);
    });

    it('should return status FAIL when targetDID is not exist', async () => {
      param.target = senderDID;
      await documentSubstore.del(store, documentStoreKey(senderDID));
      const context = createCommandVerifyContext(param);
      await expect(command.verify(context)).resolves.toHaveProperty('status', VerifyStatus.FAIL);
    });

    it('should return status FAIL when signerDID is not exist', async () => {
      param.signer = customDID;
      await documentSubstore.del(store, documentStoreKey(customDID));
      const context = createCommandVerifyContext(param);
      await expect(command.verify(context)).resolves.toHaveProperty('status', VerifyStatus.FAIL);
    });

    // Below is command-specific verification logic

    it('should return status FAIL when user sends transaction with empty keys', async () => {
      const context = createCommandVerifyContext({
        ...validParam,
        publicKeys: [],
      });
      await expect(command.verify(context)).resolves.toHaveProperty('status', VerifyStatus.FAIL);
    });
  });

  describe('execute', () => {
    it('should keep keys for specified did document if this command is not executed', async () => {
      const didDocument = await documentSubstore.get(store, documentStoreKey(senderDID));
      expect(didDocument.verificationMethod).toHaveLength(1);
    });

    it('should remove keys for specified did document', async () => {
      const context = createCommandExecuteContext(validParam);
      await command.execute(context);

      const didDocument = await documentSubstore.get(context, documentStoreKey(senderDID));
      expect(didDocument.verificationMethod).toHaveLength(0);
      expect(didDocument.authentication).toHaveLength(0);
      expect(didDocument.assertionMethod).toHaveLength(0);
      expect(didDocument.capabilityInvocation).toHaveLength(0);
      expect(didDocument.keyAgreement).toHaveLength(0);
    });

    it('should keep the context if key type is still available', async () => {
      await documentSubstore.set(store, documentStoreKey(senderDID), {
        ...senderDIDDoc,
        verificationMethod: [
          ...senderDIDDoc.verificationMethod,
          { ...senderDIDDoc.verificationMethod[0], publicKeyMultibase: publicKeyMultiBase2 },
        ],
        keyAgreement: [
          ...senderDIDDoc.keyAgreement,
          { ...senderDIDDoc.keyAgreement[0], publicKeyMultibase: x25519PublicKeyMultibase2 },
        ],
      });

      const context = createCommandExecuteContext(validParam);
      await command.execute(context);

      const didDocument = await documentSubstore.get(context, documentStoreKey(senderDID));
      expect(didDocument['@context']).toHaveLength(3);
    });

    it('should increase signer nonce if provided', async () => {
      const param = liskUtils.objects.cloneDeep(validParam) as CommandParam;
      await documentSubstore.set(store, documentStoreKey(customDID), {
        ...customDIDDoc,
        controller: [senderDID],
      });
      param.target = customDID;
      param.signer = customDID;
      param.signature = client.utils.createTransactionSignature(createSignaturePayload(param), privateKey);

      const context = createCommandExecuteContext(param);
      await command.execute(context);

      const signerNonce = await nonceSubstore.get(context, nonceStoreKey(customDID));
      expect(Number(signerNonce.nonce)).toBe(2);
    });

    it('should add command events', async () => {
      const context = createCommandExecuteContext(validParam);
      await command.execute(context);
      expect(eventResult(context.eventQueue, RemoveKeysEvent, MODULE_NAME, validParam)).toBe(true);
    });
  });
});
