/* eslint-disable import/no-extraneous-dependencies */
import { DidModule } from '@dist/module';
import { BaseCommand, Transaction, VerifyStatus, codec, testing, utils as liskUtils, StoreGetter } from 'klayr-sdk';
import { DocumentStore, documentStoreKey } from '@dist/stores/document';
import {
  utils,
  client,
  PayloadWithSignature,
  DidDocument,
  RemoveControllersParam,
} from '@klayr-did/klayr-decentralized-identifier';
import { RemoveControllersCommand } from '@dist/commands/remove_controllers_command';
import { NonceStore, nonceStoreKey } from '@dist/stores/nonce';
import { PrefixedStateReadWriter } from 'klayr-framework/dist-node/state_machine/prefixed_state_read_writer';
import { RemoveControllersEvent } from '@dist/events/remove_controllers_event';
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
  senderDID,
  senderDIDDoc,
  signature,
} from '../../setup/constant';
import { createStoreGetter } from '../../utils/store';
import { eventResult } from '../../utils/events';

type CommandParam = RemoveControllersParam;
const MODULE_NAME = 'did';
const COMMAND_NAME = 'removeControllers';
const commandSchema = utils.schema.removeControllersCommandSchema;

let stateStore: PrefixedStateReadWriter;
const validParam: CommandParam = {
  target: senderDID,
  controllers: [senderDID],
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

describe('RemoveControllersCommand', () => {
  let module: DidModule;
  let store: StoreGetter;
  let command: RemoveControllersCommand;
  let documentSubstore: DocumentStore;
  let nonceSubstore: NonceStore;

  beforeEach(async () => {
    module = new DidModule();
    command = new RemoveControllersCommand(module.stores, module.events);
    stateStore = new PrefixedStateReadWriter(new testing.InMemoryPrefixedStateDB());
    documentSubstore = module.stores.get(DocumentStore);
    nonceSubstore = module.stores.get(NonceStore);
    await command.init(config);

    store = createStoreGetter(stateStore);
    await documentSubstore.set(store, documentStoreKey(senderDID), {
      ...senderDIDDoc,
      controller: [senderDID, customDID],
    });
    await documentSubstore.set(store, documentStoreKey(customDID), customDIDDoc);
    await documentSubstore.set(store, documentStoreKey(emptyDID), emptyDIDDoc);

    await nonceSubstore.set(store, nonceStoreKey(senderDID), nonce);
    await nonceSubstore.set(store, nonceStoreKey(customDID), nonce);
    await nonceSubstore.set(store, nonceStoreKey(emptyDID), nonce);
  });

  describe('constructor', () => {
    it('should inherit from BaseCommand', () => {
      expect(RemoveControllersCommand.prototype).toBeInstanceOf(BaseCommand);
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

    it('should return status FAIL when user sends transaction with empty controller', async () => {
      const context = createCommandVerifyContext({
        ...validParam,
        controllers: [],
      });
      await expect(command.verify(context)).resolves.toHaveProperty('status', VerifyStatus.FAIL);
    });
  });

  describe('execute', () => {
    it('should keep controller for specified did document if this command is not executed', async () => {
      const didDocument = await documentSubstore.get(store, documentStoreKey(senderDID));
      expect(didDocument.controller).toHaveLength(2);
    });

    it('should remove controllers for specified did document', async () => {
      const context = createCommandExecuteContext(validParam);
      await command.execute(context);

      const didDocument = await documentSubstore.get(context, documentStoreKey(senderDID));
      expect(didDocument.controller).toHaveLength(1);
      expect(didDocument.verificationMethod).toHaveLength(0);
      expect(didDocument.assertionMethod).toHaveLength(0);
      expect(didDocument.authentication).toHaveLength(0);
      expect(didDocument.capabilityInvocation).toHaveLength(0);
      expect(didDocument.keyAgreement).toHaveLength(0);
      expect(didDocument.controller).not.toContain(senderDID);
    });

    it('should throw an error if executing this command resulting in all controller removed', async () => {
      const func = async () => {
        const context = createCommandExecuteContext({ ...validParam, controllers: [senderDID, customDID] });
        await command.execute(context);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should increase signer nonce if provided', async () => {
      const param = liskUtils.objects.cloneDeep(validParam) as CommandParam;
      await documentSubstore.set(store, documentStoreKey(customDID), {
        ...customDIDDoc,
        controller: [senderDID],
      });
      param.controllers = [emptyDID];
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
      expect(eventResult(context.eventQueue, RemoveControllersEvent, MODULE_NAME, validParam)).toBe(true);
    });
  });
});
