import { DidModule } from '@dist/module';
import { BaseCommand, Transaction, VerifyStatus, codec, testing } from 'lisk-sdk';
import { DocumentStore, documentStoreKey } from '@dist/stores/document';
import { CreateCommand } from '@dist/commands/create_command';
import { utils, CreateParam } from '@lisk-did/lisk-decentralized-identifier';
import { CreateEvent } from '@dist/events/create_event';
import {
  chainID,
  config,
  customDID,
  publicKey,
  publicKeyMultiBase,
  senderDID,
  senderDIDDoc,
  x25519PublicKeyMultibase,
} from '../../setup/constant';
import { PrefixedStateReadWriter } from '../../../../../node_modules/lisk-framework/dist-node/state_machine/prefixed_state_read_writer';
import { eventResult } from '../../utils/events';

let stateStore: PrefixedStateReadWriter;
const MODULE_NAME = 'did';
const COMMAND_NAME = 'create';
const validParam: CreateParam = {
  did: senderDID,
  controllers: [senderDID],
  keys: [{ publicKey, relationship: ['assertionMethod', 'keyAgreement'] }],
};

function createCommandContext(param: CreateParam) {
  const encodedTransactionParams = codec.encode(utils.schema.createCommandSchema, param);
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

function createCommandVerifyContext(param: CreateParam) {
  const context = createCommandContext(param);
  return context.createCommandVerifyContext<CreateParam>(utils.schema.createCommandSchema);
}

function createCommandExecuteContext(param: CreateParam) {
  const context = createCommandContext(param);
  return context.createCommandExecuteContext<CreateParam>(utils.schema.createCommandSchema);
}

describe('CreateCommand', () => {
  let module: DidModule;
  let command: CreateCommand;
  let documentSubstore: DocumentStore;

  beforeEach(async () => {
    module = new DidModule();
    command = new CreateCommand(module.stores, module.events);
    stateStore = new PrefixedStateReadWriter(new testing.InMemoryPrefixedStateDB());
    documentSubstore = module.stores.get(DocumentStore);
    await command.init(config);
  });

  describe('constructor', () => {
    it('should inherit from BaseCommand', () => {
      expect(CreateCommand.prototype).toBeInstanceOf(BaseCommand);
    });

    it('should have valid name', () => {
      expect(command.name).toBe(COMMAND_NAME);
    });

    it('should have valid schema', () => {
      expect(command.schema).toEqual(utils.schema.createCommandSchema);
    });
  });

  describe('init', () => {
    it('should set the command config accordingly', async () => {
      await command.init(config);
      expect(command['config']).toStrictEqual(config);
    });
  });

  describe('verify', () => {
    beforeEach(async () => command.init(config));

    it('should return status OK when called with valid input', async () => {
      const context = createCommandVerifyContext(validParam);
      await expect(command.verify(context)).resolves.toHaveProperty('status', VerifyStatus.OK);
    });

    it('should throw error when user sends transaction with unmatched chainspace', async () => {
      const context = createCommandVerifyContext({
        ...validParam,
        did: `${utils.constant.LISK_DID_PREFIX}:other:namespace:id`,
      });
      await expect(command.verify(context)).resolves.toHaveProperty('status', VerifyStatus.FAIL);
    });

    it('should throw error when user sends transaction with invalid did', async () => {
      const context = createCommandVerifyContext({
        ...validParam,
        did: `invalid:did:other:namespace:id`,
      });
      await expect(command.verify(context)).resolves.toHaveProperty('status', VerifyStatus.FAIL);
    });

    it('should throw error when user sends transaction with zero controllers', async () => {
      const context = createCommandVerifyContext({
        ...validParam,
        controllers: [],
      });
      await expect(command.verify(context)).resolves.toHaveProperty('status', VerifyStatus.FAIL);
    });
  });

  describe('execute', () => {
    it('should set did document for specified address did', async () => {
      const context = createCommandExecuteContext(validParam);
      await command.execute(context);

      const didDocument = await documentSubstore.get(context, documentStoreKey(senderDID));
      expect(didDocument.id).toBe(senderDID);
    });

    it('should set did document for specified custom did', async () => {
      const context = createCommandExecuteContext({ ...validParam, did: customDID });
      await command.execute(context);

      const didDocument = await documentSubstore.get(context, documentStoreKey(customDID));
      expect(didDocument.id).toBe(customDID);
    });

    it('should set did document for specified custom did with sender as controller', async () => {
      const context = createCommandExecuteContext({ ...validParam, did: customDID });
      await command.execute(context);

      const didDocument = await documentSubstore.get(context, documentStoreKey(customDID));
      expect(didDocument.controller[0]).toBe(senderDID);
    });

    it('should set did document for specified custom did with correct verification method', async () => {
      const context = createCommandExecuteContext({ ...validParam, did: customDID });
      await command.execute(context);

      const didDocument = await documentSubstore.get(context, documentStoreKey(customDID));
      expect(didDocument.verificationMethod[0].publicKeyMultibase).toBe(publicKeyMultiBase);
    });

    it('should set did document for specified custom did with correct key relationship', async () => {
      const context = createCommandExecuteContext({ ...validParam, did: customDID });
      await command.execute(context);

      const didDocument = await documentSubstore.get(context, documentStoreKey(customDID));
      expect(didDocument.assertionMethod[0]).toBe(`${customDID}#${publicKeyMultiBase}`);
      expect(didDocument.authentication).toHaveLength(0);
      expect(didDocument.capabilityInvocation).toHaveLength(0);
      expect(didDocument.keyAgreement).toHaveLength(1);
      expect(didDocument.keyAgreement[0].publicKeyMultibase).toBe(x25519PublicKeyMultibase);
    });

    it('should throw an error if did already exist', async () => {
      const func = async () => {
        const context = createCommandExecuteContext({ ...validParam, did: customDID });
        await documentSubstore.set(context, documentStoreKey(customDID), senderDIDDoc);
        await command.execute(context);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should add command events', async () => {
      const context = createCommandExecuteContext(validParam);
      await command.execute(context);
      expect(eventResult(context.eventQueue, CreateEvent, MODULE_NAME, validParam)).toBe(true);
    });
  });
});
