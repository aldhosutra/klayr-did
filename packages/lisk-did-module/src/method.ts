import { BaseMethod, MethodContext, VerifyStatus } from 'lisk-sdk';
import {
  AuthorizationResult,
  DidDocument,
  DidMethod as DidMethodInterface,
  DidModuleConfig,
  KeysCommand,
  NonceStoreData,
} from '@lisk-did/lisk-decentralized-identifier';
import { DocumentStore, documentStoreKey } from './stores/document';
import { executeCreateCommand } from './logic/create_did';
import { CreateEvent } from './events/create_event';
import { NonceStore, nonceStoreKey } from './stores/nonce';
import { executeAddKeysCommand } from './logic/add_keys';
import { AddKeysEvent } from './events/add_keys_event';
import { RemoveKeysEvent } from './events/remove_keys_event';
import { executeRemoveKeysCommand } from './logic/remove_keys';
import { executeAddControllersCommand } from './logic/add_controllers';
import { AddControllersEvent } from './events/add_controllers_event';
import { executeAddServiceEndpointCommand } from './logic/add_service_endpoint';
import { AddServiceEndpointEvent } from './events/add_service_endpoint_event';
import { RemoveControllersEvent } from './events/remove_controllers_event';
import { executeRemoveControllersCommand } from './logic/remove_controllers';
import { executeRemoveServiceEndpointCommand } from './logic/remove_service_endpoint';
import { RemoveServiceEndpointEvent } from './events/remove_service_endpoint_event';
import { executeDeactivateCommand } from './logic/deactivate_did';
import { DeactivateEvent } from './events/deactivate_event';
import { authorizePublicKey, verifyOperation } from './logic/authorization';

export class DidMethod extends BaseMethod implements DidMethodInterface {
  public config: DidModuleConfig = { chainspace: '', autoCreateAddressDID: false };

  init(config: DidModuleConfig) {
    this.config.chainspace = config.chainspace;
    this.config.autoCreateAddressDID = config.autoCreateAddressDID;
  }

  getConfig(): DidModuleConfig {
    return this.config;
  }

  async read(methodContext: MethodContext, did: string): Promise<DidDocument> {
    const documentSubstore = this.stores.get(DocumentStore);
    return await documentSubstore.get(methodContext, documentStoreKey(did));
  }

  async getNonce(methodContext: MethodContext, did: string): Promise<NonceStoreData> {
    const nonceSubstore = this.stores.get(NonceStore);
    return await nonceSubstore.get(methodContext, nonceStoreKey(did));
  }

  async authorize(methodContext: MethodContext, did: string, publicKey: Buffer): Promise<AuthorizationResult[]> {
    const documentSubstore = this.stores.get(DocumentStore);
    return await authorizePublicKey(methodContext, documentSubstore, did, publicKey);
  }

  async create(
    methodContext: MethodContext,
    senderPublicKey: Buffer,
    did: string,
    controllers: string[],
    keys: KeysCommand[],
  ): Promise<void> {
    const documentSubstore = this.stores.get(DocumentStore);
    const param = { did, keys, controllers };
    if (await executeCreateCommand(methodContext, this.getConfig(), senderPublicKey, documentSubstore, param)) {
      const createEvent = this.events.get(CreateEvent);
      createEvent.add(methodContext, param);
    }
    return;
  }

  async addKeys(
    methodContext: MethodContext,
    senderPublicKey: Buffer,
    target: string,
    keys: KeysCommand[],
    signer: string,
    signature?: Buffer | undefined,
  ): Promise<void> {
    const documentSubstore = this.stores.get(DocumentStore);
    const nonceSubstore = this.stores.get(NonceStore);
    const param = { target, keys, signer, signature: signature ?? Buffer.alloc(0) };

    const verification = await verifyOperation(
      methodContext,
      documentSubstore,
      nonceSubstore,
      this.config,
      { command: 'addKeys', params: param },
      senderPublicKey,
      false,
    );

    if (verification.status === VerifyStatus.FAIL) throw verification.error;

    if (
      verification.status === VerifyStatus.OK &&
      (await executeAddKeysCommand(methodContext, documentSubstore, nonceSubstore, param))
    ) {
      const addKeysEvent = this.events.get(AddKeysEvent);
      addKeysEvent.add(methodContext, { ...param });
    }
  }

  async removeKeys(
    methodContext: MethodContext,
    senderPublicKey: Buffer,
    target: string,
    publicKeys: Buffer[],
    signer: string,
    signature?: Buffer | undefined,
  ): Promise<void> {
    const documentSubstore = this.stores.get(DocumentStore);
    const nonceSubstore = this.stores.get(NonceStore);
    const param = { target, publicKeys, signer, signature: signature ?? Buffer.alloc(0) };

    const verification = await verifyOperation(
      methodContext,
      documentSubstore,
      nonceSubstore,
      this.config,
      { command: 'removeKeys', params: param },
      senderPublicKey,
      false,
    );

    if (verification.status === VerifyStatus.FAIL) throw verification.error;

    if (
      verification.status === VerifyStatus.OK &&
      (await executeRemoveKeysCommand(methodContext, documentSubstore, nonceSubstore, param))
    ) {
      const removeKeysEvent = this.events.get(RemoveKeysEvent);
      removeKeysEvent.add(methodContext, { ...param });
    }
  }

  async addControllers(
    methodContext: MethodContext,
    senderPublicKey: Buffer,
    target: string,
    controllers: string[],
    signer: string,
    signature?: Buffer | undefined,
  ): Promise<void> {
    const documentSubstore = this.stores.get(DocumentStore);
    const nonceSubstore = this.stores.get(NonceStore);
    const param = { target, controllers, signer, signature: signature ?? Buffer.alloc(0) };

    const verification = await verifyOperation(
      methodContext,
      documentSubstore,
      nonceSubstore,
      this.config,
      { command: 'addControllers', params: param },
      senderPublicKey,
      false,
    );

    if (verification.status === VerifyStatus.FAIL) throw verification.error;

    if (
      verification.status === VerifyStatus.OK &&
      (await executeAddControllersCommand(methodContext, documentSubstore, nonceSubstore, param))
    ) {
      const addControllersEvent = this.events.get(AddControllersEvent);
      addControllersEvent.add(methodContext, { ...param });
    }
  }

  async removeControllers(
    methodContext: MethodContext,
    senderPublicKey: Buffer,
    target: string,
    controllers: string[],
    signer: string,
    signature?: Buffer | undefined,
  ): Promise<void> {
    const documentSubstore = this.stores.get(DocumentStore);
    const nonceSubstore = this.stores.get(NonceStore);
    const param = { target, controllers, signer, signature: signature ?? Buffer.alloc(0) };

    const verification = await verifyOperation(
      methodContext,
      documentSubstore,
      nonceSubstore,
      this.config,
      { command: 'removeControllers', params: param },
      senderPublicKey,
      false,
    );

    if (verification.status === VerifyStatus.FAIL) throw verification.error;

    if (
      verification.status === VerifyStatus.OK &&
      (await executeRemoveControllersCommand(methodContext, documentSubstore, nonceSubstore, param))
    ) {
      const removeControllersEvent = this.events.get(RemoveControllersEvent);
      removeControllersEvent.add(methodContext, { ...param });
    }
  }

  async addServiceEndpoint(
    methodContext: MethodContext,
    senderPublicKey: Buffer,
    target: string,
    endpoint: { id: string; type: string; serviceEndpoint: string },
    signer: string,
    signature?: Buffer | undefined,
  ): Promise<void> {
    const documentSubstore = this.stores.get(DocumentStore);
    const nonceSubstore = this.stores.get(NonceStore);
    const param = { target, endpoint, signer, signature: signature ?? Buffer.alloc(0) };

    const verification = await verifyOperation(
      methodContext,
      documentSubstore,
      nonceSubstore,
      this.config,
      { command: 'addServiceEndpoint', params: param },
      senderPublicKey,
      false,
    );

    if (verification.status === VerifyStatus.FAIL) throw verification.error;

    if (
      verification.status === VerifyStatus.OK &&
      (await executeAddServiceEndpointCommand(methodContext, documentSubstore, nonceSubstore, param))
    ) {
      const addServiceEndpointEvent = this.events.get(AddServiceEndpointEvent);
      addServiceEndpointEvent.add(methodContext, { ...param });
    }
  }

  async removeServiceEndpoint(
    methodContext: MethodContext,
    senderPublicKey: Buffer,
    target: string,
    endpointId: string,
    signer: string,
    signature?: Buffer | undefined,
  ): Promise<void> {
    const documentSubstore = this.stores.get(DocumentStore);
    const nonceSubstore = this.stores.get(NonceStore);
    const param = { target, endpointId, signer, signature: signature ?? Buffer.alloc(0) };

    const verification = await verifyOperation(
      methodContext,
      documentSubstore,
      nonceSubstore,
      this.config,
      { command: 'removeServiceEndpoint', params: param },
      senderPublicKey,
      false,
    );

    if (verification.status === VerifyStatus.FAIL) throw verification.error;

    if (
      verification.status === VerifyStatus.OK &&
      (await executeRemoveServiceEndpointCommand(methodContext, documentSubstore, nonceSubstore, param))
    ) {
      const removeServiceEndpointEvent = this.events.get(RemoveServiceEndpointEvent);
      removeServiceEndpointEvent.add(methodContext, { ...param });
    }
  }

  async deactivate(
    methodContext: MethodContext,
    senderPublicKey: Buffer,
    target: string,
    signer: string,
    signature?: Buffer | undefined,
  ): Promise<void> {
    const documentSubstore = this.stores.get(DocumentStore);
    const nonceSubstore = this.stores.get(NonceStore);
    const param = { target, signer, signature: signature ?? Buffer.alloc(0) };

    const verification = await verifyOperation(
      methodContext,
      documentSubstore,
      nonceSubstore,
      this.config,
      { command: 'deactivate', params: param },
      senderPublicKey,
      true,
    );

    if (verification.status === VerifyStatus.FAIL) throw verification.error;

    if (
      verification.status === VerifyStatus.OK &&
      (await executeDeactivateCommand(methodContext, documentSubstore, nonceSubstore, param))
    ) {
      const deactivateEvent = this.events.get(DeactivateEvent);
      deactivateEvent.add(methodContext, { ...param });
    }
  }
}
