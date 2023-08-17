import { JSONObject, apiClient, cryptography, utils } from 'lisk-sdk';
import * as isUri from 'is-uri';
import {
  AddControllersParam,
  AddKeysParam,
  AddServiceEndpointParam,
  CreateParam,
  DeactivateParam,
  DidDocument,
  DidModuleConfig,
  NonceStoreData,
  RemoveControllersParam,
  RemoveKeysParam,
  RemoveServiceEndpointParam,
} from '../../types';
import {
  DIDCommands,
  DecodedTransactionJSON,
  CommandPayload,
  PayloadWithSignature,
  TransactionPayload,
  TransactionPayloadWithoutSignature,
  DIDTransactionParam,
} from '../../types';
import { getVerificationRelationship } from '../../cryptography/verification';
import { createSignatureChallenge, createTransactionSignature } from '../utils';
import { getAddressDIDFromPublicKey, parseDIDComponent } from '../../did';
import { LISK_PUBLIC_KEY_LENGTH, SIGNATURE_BYTES_LENGTH } from '../../utils/constant';

export class DIDClient {
  private apiClient: apiClient.APIClient | undefined;
  private ipc: string | undefined;
  private ws: string | undefined;
  private chainspace: string | undefined;

  constructor(param: { ipc?: string; ws?: string }) {
    this.ipc = param.ipc;
    this.ws = param.ws;
  }

  async createDID(param: TransactionPayloadWithoutSignature<CreateParam>, senderPrivateKey: Buffer) {
    await this._initClient();
    await this._postTransaction('create', param, senderPrivateKey);
    await this._closeClient();
  }

  async addKeys(param: TransactionPayload<AddKeysParam>, senderPrivateKey: Buffer) {
    await this._initClient();
    await this._postTransaction('addKeys', param, senderPrivateKey);
    await this._closeClient();
  }

  async removeKeys(param: TransactionPayload<RemoveKeysParam>, senderPrivateKey: Buffer) {
    await this._initClient();
    await this._postTransaction('removeKeys', param, senderPrivateKey);
    await this._closeClient();
  }

  async addControllers(param: TransactionPayload<AddControllersParam>, senderPrivateKey: Buffer) {
    await this._initClient();
    await this._postTransaction('addControllers', param, senderPrivateKey);
    await this._closeClient();
  }

  async removeControllers(param: TransactionPayload<RemoveControllersParam>, senderPrivateKey: Buffer) {
    await this._initClient();
    await this._postTransaction('removeControllers', param, senderPrivateKey);
    await this._closeClient();
  }

  async addServiceEndpoint(param: TransactionPayload<AddServiceEndpointParam>, senderPrivateKey: Buffer) {
    await this._initClient();
    await this._postTransaction('addServiceEndpoint', param, senderPrivateKey);
    await this._closeClient();
  }

  async removeServiceEndpoint(param: TransactionPayload<RemoveServiceEndpointParam>, senderPrivateKey: Buffer) {
    await this._initClient();
    await this._postTransaction('removeServiceEndpoint', param, senderPrivateKey);
    await this._closeClient();
  }

  async deactivateDID(param: TransactionPayload<DeactivateParam>, senderPrivateKey: Buffer) {
    await this._initClient();
    await this._postTransaction('deactivate', param, senderPrivateKey);
    await this._closeClient();
  }

  async read(did: string): Promise<DidDocument | undefined> {
    if (this.apiClient === undefined) await this._initClient();
    const didDocument = await this.apiClient!.invoke<DidDocument | undefined>('did_read', { did });
    return didDocument;
  }

  async getNonce(did: string): Promise<JSONObject<NonceStoreData>> {
    if (this.apiClient === undefined) await this._initClient();
    const nonce = await this.apiClient!.invoke<JSONObject<NonceStoreData>>('did_getNonce', { did });
    return nonce;
  }

  async getConfig(): Promise<DidModuleConfig> {
    if (this.apiClient === undefined) await this._initClient();
    const nonce = await this.apiClient!.invoke<DidModuleConfig>('did_getConfig');
    return nonce;
  }

  async createSignature(payload: PayloadWithSignature, privateKey: Buffer) {
    if (payload.params.signer === undefined) throw new Error('signer is required to create a signature');
    const { nonce } = await this.getNonce(payload.params.signer);
    const signature = createTransactionSignature(
      { ...payload, params: { ...payload.params, nonce: BigInt(nonce) } } as any,
      privateKey,
    );
    return signature;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  private async _validateParams(command: DIDCommands, param: TransactionPayload<any>): Promise<void> {
    let params: DIDTransactionParam;
    let didComponent;
    if (command === 'create') {
      params = param.params as CreateParam;
      didComponent = parseDIDComponent(params.did);
      if (params.controllers.length < 1) throw new Error('at least one controller needed');
      params.controllers.forEach(did => parseDIDComponent(did));
      if (didComponent.chainspace !== this.chainspace)
        throw new Error(
          `this chainspace ${this.chainspace} can't create did document for namespace "${didComponent.chainspace}`,
        );
    }
    if (['create', 'addKeys'].includes(command)) {
      params = param.params as AddKeysParam | CreateParam;
      for (const key of (params as AddKeysParam).keys) {
        if (key.publicKey.length !== LISK_PUBLIC_KEY_LENGTH) throw new Error('invalid public key length');
        if (key.relationship.length === 0) throw new Error('at least one relationship needed');
      }
    }
    if (['addControllers', 'removeControllers'].includes(command)) {
      params = param.params as AddControllersParam | RemoveControllersParam;
      (params as AddControllersParam | RemoveControllersParam).controllers.forEach(did => parseDIDComponent(did));
    }
    if (command === 'addServiceEndpoint') {
      params = param.params as AddServiceEndpointParam;
      if (!isUri((params as AddServiceEndpointParam).endpoint.id)) throw new Error('endpoint.id is not a valid URI');
    }
    if (command === 'removeKeys') {
      params = param.params as RemoveKeysParam;
      for (const key of (params as RemoveKeysParam).publicKeys) {
        if (key.length !== LISK_PUBLIC_KEY_LENGTH) throw new Error('invalid public key length');
      }
    }
    if (command === 'removeServiceEndpoint') {
      params = param.params as RemoveServiceEndpointParam;
      if (!isUri((params as RemoveServiceEndpointParam).endpointId)) throw new Error('endpointId is not a valid URI');
    }
    if (command !== 'create') {
      params = param.params as Exclude<DIDTransactionParam, CreateParam>;
      if (params.target) parseDIDComponent(params.target);
      if (params.signer) parseDIDComponent(params.signer);
      if (params.signature && params.signature.length !== SIGNATURE_BYTES_LENGTH)
        throw new Error('invalid signature length');
    }
  }

  private async _postTransaction(command: DIDCommands, param: TransactionPayload<any>, senderPrivateKey: Buffer) {
    if (this.apiClient === undefined) throw new Error('apiClient is not initialized');

    await this._initChainspace();
    await this._validateParams(command, param);

    const params = await this._signatureParamsBuilder(
      { command: command, params: param.params as any },
      senderPrivateKey,
    );

    const nonce =
      param.nonce ?? (await this._getSenderNonce(cryptography.ed.getPublicKeyFromPrivateKey(senderPrivateKey)));

    const payload = { module: 'did', command: command, params, nonce };

    let transaction = await this.apiClient.transaction.create(
      { ...payload, fee: BigInt(0) },
      senderPrivateKey.toString('hex'),
    );

    const fee = param.fee && param.fee > BigInt(0) ? param.fee : await this._calculateMinimumFee(transaction);
    transaction = await this.apiClient.transaction.create({ ...payload, fee }, senderPrivateKey.toString('hex'));

    await this.apiClient.transaction.send(transaction);
  }

  private async _signatureParamsBuilder(payload: CommandPayload, privateKey: Buffer): Promise<Record<string, unknown>> {
    if (!Object.keys(payload.params).includes('signer')) return { ...payload.params };
    const data = utils.objects.cloneDeep(payload) as PayloadWithSignature;

    const targetDIDDocument = await this.read(data.params.target);
    if (targetDIDDocument === undefined) throw new Error("target DID doesn't exist");

    if (data.params.signature) {
      const didNonce = await this.getNonce(data.params.signer);
      data.params.nonce = BigInt(didNonce.nonce);
      const challenge = createSignatureChallenge(data);

      /**
       * (#case-1)
       * signature are provided, therefore we need to check its authority with the signer
       * challenge here is authenticated with one of targetDID verificationMethod keys
       * Succession indicate that signer is the subject of the DID
       */
      const signerRelationshipWithTarget = await getVerificationRelationship(targetDIDDocument, {
        signature: data.params.signature,
        challenge,
        relationship: ['capabilityInvocation'],
      });
      if (signerRelationshipWithTarget.length > 0) {
        const { nonce, ...rest } = data.params;
        return rest;
      }

      /**
       * (#case-2)
       * signature are provided, and signer is one of targetDID's controller
       * challenge here is authenticated with one of signerDID verificationMethod keys
       * Succession indicate that signer is authenticated within signerDID that can act as the controller of the targetDID
       */
      if (targetDIDDocument.controller.includes(data.params.signer)) {
        const signerDIDDocument = await this.read(data.params.signer);
        if (signerDIDDocument === undefined) throw new Error("signer DID doesn't exist");
        const signerRelationshipWithSigner = await getVerificationRelationship(signerDIDDocument, {
          signature: data.params.signature,
          challenge,
          relationship: ['authentication'],
        });
        if (signerRelationshipWithSigner.length > 0) {
          const { nonce, ...rest } = data.params;
          return rest;
        }
      }
    }

    /**
     * (#case-3)
     * Provided privateKey have capabilityInvocation relationship with target DID
     * indicating sender is the subject of the DID
     * therefore, signature not required, and since sender is the subject, signer also not required
     */
    const senderRelationshipWithTarget = await getVerificationRelationship(targetDIDDocument, {
      privateKey,
      relationship: ['capabilityInvocation'],
    });
    if (senderRelationshipWithTarget.length > 0) {
      data.params.signer = '';
      data.params.signature = Buffer.alloc(0);
      const { nonce, ...rest } = data.params;
      return rest;
    }

    /**
     * (#case-4)
     * Provided privateKey used by signer authenticated as controller within targetDID
     * indicating sender is the signer that controls the DID
     * therefore, signature is not required, however, signer stil needed
     */
    if (targetDIDDocument.controller.includes(data.params.signer)) {
      const signerDIDDocument = await this.read(data.params.signer);
      if (signerDIDDocument === undefined) throw new Error("signer DID doesn't exist");
      const senderRelationshipWithSigner = await getVerificationRelationship(signerDIDDocument, {
        privateKey,
        relationship: ['authentication'],
      });
      if (senderRelationshipWithSigner.length > 0) {
        data.params.signature = Buffer.alloc(0);
        const { nonce, ...rest } = data.params;
        return rest;
      }
    }

    /**
     * (#case-5)
     * we try to obtain address DID from senderPrivateKey
     * if its match with one of the targetDID controller, and have authenticate capability,
     * we don't need any signer or signature data
     * because its indicate that privateKey have valid addressDID that controles the targetDID
     */
    const privateKeyAddressDID = getAddressDIDFromPublicKey(
      this.chainspace!,
      cryptography.ed.getPublicKeyFromPrivateKey(privateKey),
    );
    if (targetDIDDocument.controller.includes(privateKeyAddressDID)) {
      const senderDIDDocument = await this.read(privateKeyAddressDID);
      if (senderDIDDocument === undefined) throw new Error("sender DID doesn't exist");
      const senderRelationshipWithTargetController = await getVerificationRelationship(senderDIDDocument, {
        privateKey,
        relationship: ['authentication'],
      });
      if (senderRelationshipWithTargetController.length > 0) {
        data.params.signer = '';
        data.params.signature = Buffer.alloc(0);
        const { nonce, ...rest } = data.params;
        return rest;
      }
    }

    /**
     * All signature cheks are failed
     * indicating that sender/signer is not the subject or the controller of the targetDID
     * Sender may be someone else, that may have sufficient transaction fee, or for any other reason
     * therefore, signature is required.
     *
     * In this case, signer can create custom signature that are decoupled with sender keys
     * See (#case-1) and (#case-2)
     * this client instance has convinient method, this.createSignature(payload, key)
     * Here execution will throw an error, since signature is required
     */
    throw new Error(
      "sender privateKey doesn't have sufficient capability to do DID operations, " +
        'please add custom signature instead to the payload, ' +
        'using client.utils.createTransactionSignature',
    );
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  private async _calculateMinimumFee(tx: Omit<DecodedTransactionJSON, 'id'>): Promise<bigint> {
    if (this.apiClient === undefined) throw new Error('apiClient is not initialized');
    const minFee = this.apiClient.transaction.computeMinFee(tx);
    return minFee;
  }

  private async _getSenderNonce(publicKey: Buffer): Promise<bigint> {
    if (this.apiClient === undefined) throw new Error('apiClient is not initialized');
    const address = cryptography.address.getLisk32AddressFromPublicKey(publicKey);
    const auth = await this.apiClient.invoke<{ nonce: bigint }>('auth_getAuthAccount', {
      address,
    });
    return auth.nonce;
  }

  private async _initChainspace() {
    if (this.chainspace === undefined) {
      if (this.ipc !== undefined || this.ws !== undefined) {
        if (this.apiClient === undefined) await this._initClient();
        const didConfig = await this.apiClient!.invoke('did_getConfig');
        this.chainspace = didConfig.chainspace as string;
      } else {
        throw new Error('client need to be configured with either ipc/ws for automatic chainspace resolvance');
      }
    }
  }

  private async _initClient() {
    if (!(this.ipc || this.ws)) {
      throw new Error('client needs to be configured with correct ipc or ws lisk sidechain node url');
    }
    if (this.ipc !== undefined) {
      this.apiClient = await apiClient.createIPCClient(this.ipc);
    } else if (this.ws !== undefined) {
      this.apiClient = await apiClient.createWSClient(this.ws);
    }
  }

  private async _closeClient() {
    if (this.apiClient !== undefined) {
      await this.apiClient.disconnect();
    }
  }
}
