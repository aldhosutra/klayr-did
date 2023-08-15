/* eslint-disable import/no-extraneous-dependencies */
import { DIDClient } from '@dist/client/rpc/didClient';
import { TransactionPayload } from '@dist/client/utils/types';
import {
  AddControllersParam,
  AddKeysParam,
  AddServiceEndpointParam,
  CreateParam,
  DeactivateParam,
  RemoveControllersParam,
  RemoveKeysParam,
  RemoveServiceEndpointParam,
} from '@dist/types';
import { utils } from 'lisk-sdk';
import { bootstrapEmptyDidDocument } from '@dist/utils';
import {
  mockedCreateWSClient,
  mockedDisconnect,
  mockedGetAuthAccount,
  mockedGetConfig,
  mockedGetDIDNonce,
  mockedInvoke,
  mockedReadDID,
  mockedTransactionComputeMinFee,
  mockedTransactionCreate,
  mockedTransactionSend,
} from '../../../setup/@liskhq/lisk-api-client';
import { ipc, ws, privateKey, publicKey, senderDID, signature, chainspace } from '../../../setup/constant';

describe('DIDClient', () => {
  let didClient: DIDClient;

  afterEach(jest.clearAllMocks);

  describe('constructor', () => {
    it('should assign correct ipc', () => {
      didClient = new DIDClient({ ipc });
      expect(didClient['ipc']).toBe(ipc);
    });

    it('should assign correct ws', () => {
      didClient = new DIDClient({ ws });
      expect(didClient['ws']).toBe(ws);
    });
  });

  describe('_initChainspace', () => {
    beforeEach(() => {
      didClient = new DIDClient({ ipc });
    });

    it('should invoke getConfig endpoint', async () => {
      didClient = new DIDClient({ ipc, ws });
      await didClient['_initChainspace']();
      expect(mockedGetConfig).toHaveBeenCalled();
    });

    it('should throw an error if didCleint is not initialized by an ipc or ws', async () => {
      const func = async () => {
        didClient = new DIDClient({});
        await didClient['_initChainspace']();
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('_initClient', () => {
    it('should initialize client with correct ws', async () => {
      didClient = new DIDClient({ ws });
      await didClient['_initClient']();
      expect(mockedCreateWSClient).toHaveBeenCalled();
    });

    it('should throw an error if didCleint is not initialized by an ipc or ws', async () => {
      const func = async () => {
        didClient = new DIDClient({});
        await didClient['_initClient']();
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('read', () => {
    beforeEach(() => {
      didClient = new DIDClient({ ipc });
    });

    it('should initialize apiClient if undefined', async () => {
      didClient['apiClient'] = undefined;
      await didClient.read(senderDID);
      expect(mockedInvoke).toHaveBeenCalled();
      expect(mockedReadDID).toHaveBeenCalled();
    });
  });

  describe('_calculateMinimumFee', () => {
    beforeEach(() => {
      didClient = new DIDClient({ ipc });
    });

    const validAddKeysParam = {
      module: 'any',
      command: 'any',
      senderPublicKey: '',
      signatures: [],
      nonce: '1',
      fee: '',
      params: {
        target: senderDID,
        signer: senderDID,
        signature,
        keys: [{ publicKey, relationship: ['assertionMethod'] }],
      },
    };

    it('should throw an error if apiClient is not initialized', async () => {
      const func = async () => {
        await didClient['_calculateMinimumFee'](validAddKeysParam);
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('_getSenderNonce', () => {
    beforeEach(() => {
      didClient = new DIDClient({ ipc });
    });

    it('should throw an error if apiClient is not initialized', async () => {
      const func = async () => {
        await didClient['_getSenderNonce'](publicKey);
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('_postTransaction', () => {
    beforeEach(() => {
      didClient = new DIDClient({ ipc });
    });

    const validAddKeysParam: TransactionPayload<AddKeysParam> = {
      nonce: BigInt(1),
      fee: BigInt(1),
      params: {
        target: senderDID,
        signer: senderDID,
        signature,
        keys: [{ publicKey, relationship: ['assertionMethod'] }],
      },
    };

    it('should post a transaction', async () => {
      await didClient['_initClient']();
      await didClient['_postTransaction']('addKeys', validAddKeysParam, privateKey);
      expect(mockedTransactionSend).toHaveBeenCalled();
    });

    it('should get transaction nonce from auth module if not provided', async () => {
      validAddKeysParam.nonce = undefined;
      await didClient['_initClient']();
      await didClient['_postTransaction']('addKeys', validAddKeysParam, privateKey);
      expect(mockedGetAuthAccount).toHaveBeenCalled();
    });

    it('should get transaction fee from if not provided', async () => {
      validAddKeysParam.fee = undefined;
      await didClient['_initClient']();
      await didClient['_postTransaction']('addKeys', validAddKeysParam, privateKey);
      expect(mockedTransactionComputeMinFee).toHaveBeenCalled();
    });

    it('should throw an error if apiClient is not initialized', async () => {
      const func = async () => {
        await didClient['_postTransaction']('addKeys', validAddKeysParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('getConfig', () => {
    beforeEach(() => {
      didClient = new DIDClient({ ipc });
    });

    afterEach(jest.clearAllMocks);

    it('should invoke some endpoint', async () => {
      await didClient.getConfig();
      expect(mockedInvoke).toHaveBeenCalled();
    });

    it('should invoke the did_getConfig endpoint', async () => {
      await didClient.getConfig();
      expect(mockedGetConfig).toHaveBeenCalled();
    });
  });

  describe('createSignature', () => {
    beforeEach(() => {
      didClient = new DIDClient({ ipc });
      invalidAddKeysParam = utils.objects.cloneDeep(validAddKeysParam);
    });

    afterEach(jest.clearAllMocks);

    let validAddKeysParam: TransactionPayload<AddKeysParam> = {
      params: {
        target: senderDID,
        signer: senderDID,
        signature,
        keys: [{ publicKey, relationship: ['assertionMethod'] }],
      },
    };
    let invalidAddKeysParam: TransactionPayload<AddKeysParam> = utils.objects.cloneDeep(validAddKeysParam);

    it('should invoke some endpoint', async () => {
      await didClient.createSignature({ command: 'addKeys', params: invalidAddKeysParam.params }, privateKey);
      expect(mockedInvoke).toHaveBeenCalled();
    });

    it('should invoke the did_getNonce endpoint', async () => {
      await didClient.createSignature({ command: 'addKeys', params: invalidAddKeysParam.params }, privateKey);
      expect(mockedGetDIDNonce).toHaveBeenCalled();
    });

    it('should throw an error if signer is not provided', async () => {
      const func = async () => {
        invalidAddKeysParam.params.signer = undefined as any;
        await didClient.createSignature({ command: 'addKeys', params: invalidAddKeysParam.params }, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('_signatureParamsBuilder', () => {
    beforeEach(() => {
      didClient = new DIDClient({ ipc });
      param = utils.objects.cloneDeep(validAddKeysParam);
    });

    afterEach(jest.clearAllMocks);

    const validAddKeysParam: TransactionPayload<AddKeysParam> = {
      params: {
        target: senderDID,
        signer: senderDID,
        nonce: BigInt(1),
        signature: Buffer.from(
          '3f196ef773bbf56e655020cb27338bfd4aa5341acb14609459fee7f65b8139685a8ead92a747749c9a31c71f76a447ca7f4a7e61374db0b5e5680a7140847d0f',
          'hex',
        ),
        keys: [{ publicKey, relationship: ['assertionMethod'] }],
      },
    };
    let param: TransactionPayload<AddKeysParam> = utils.objects.cloneDeep(validAddKeysParam);

    it('should verify for case where signer is the DID subject', async () => {
      await didClient.addKeys(param, privateKey);
      expect(mockedTransactionSend).toHaveBeenCalled();
    });

    it('should verify for case where signer is the DID controller', async () => {
      param.params.target = `did:lisk:${chainspace}:test:signeriscontroller`;
      param.params.signature = Buffer.from(
        '9034d41e5f8bc835d97420bd6194223822234784b694352b3e89d8371c95671e8e38fa8ab9aa8805bff31c916cfcd3626bb5bf3401e9075fa8f76748f759b601',
        'hex',
      );
      await didClient.addKeys(param, privateKey);
      expect(mockedTransactionSend).toHaveBeenCalled();
    });

    it('should verify for case where sender is the DID subject', async () => {
      param.params.signature = undefined;
      await didClient.addKeys(param, privateKey);
      expect(mockedTransactionSend).toHaveBeenCalled();
    });

    it('should verify for case where sender is the signer that controls DID', async () => {
      param.params.signature = undefined;
      param.params.target = `did:lisk:${chainspace}:test:signeriscontroller`;
      await didClient.addKeys(param, privateKey);
      expect(mockedTransactionSend).toHaveBeenCalled();
    });

    it('should verify for case where sender private key match with the DID controller with address namespace', async () => {
      param.params.signature = undefined;
      param.params.signer = '';
      param.params.target = `did:lisk:${chainspace}:test:signeriscontroller`;
      await didClient.addKeys(param, privateKey);
      expect(mockedTransactionSend).toHaveBeenCalled();
    });

    it('should throw an error if none of above scenario matched', async () => {
      const func = async () => {
        param.params.signature = undefined;
        param.params.signer = '';
        param.params.target = `did:lisk:${chainspace}:test:empty`;
        await didClient.addKeys(param, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if targetDID doesnt exist', async () => {
      const func = async () => {
        param.params.signature = undefined;
        param.params.signer = '';
        param.params.target = `did:lisk:${chainspace}:test:notexist`;
        await didClient.addKeys(param, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error for second case if signerDID doesnt exist', async () => {
      const func = async () => {
        param.params.target = `did:lisk:${chainspace}:test:signeriscontroller2`;
        param.params.signature = Buffer.from(
          '9034d41e5f8bc835d97420bd6194223822234784b694352b3e89d8371c95671e8e38fa8ab9aa8805bff31c916cfcd3626bb5bf3401e9075fa8f76748f759b601',
          'hex',
        );
        param.params.signer = `did:lisk:${chainspace}:test:notexist`;
        await didClient.addKeys(param, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error for fourth case where signer DID doesnt exist', async () => {
      const func = async () => {
        param.params.signature = undefined;
        param.params.target = `did:lisk:${chainspace}:test:signeriscontroller2`;
        param.params.signer = `did:lisk:${chainspace}:test:notexist`;
        await didClient.addKeys(param, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error for fifth case where sender DID doesnt exist', async () => {
      didClient.read = jest.fn().mockImplementation(did => {
        if (did === `did:lisk:${chainspace}:test:signeriscontroller`) {
          const emptyDID = bootstrapEmptyDidDocument();
          emptyDID.controller = [senderDID];
          return emptyDID;
        }
        return undefined;
      });
      const func = async () => {
        param.params.signature = undefined;
        param.params.signer = '';
        param.params.target = `did:lisk:${chainspace}:test:signeriscontroller`;
        await didClient.addKeys(param, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('createDID', () => {
    beforeEach(() => {
      didClient = new DIDClient({ ipc });
      invalidCreateDIDParam = utils.objects.cloneDeep(validCreateDIDParam);
    });

    afterEach(jest.clearAllMocks);

    let validCreateDIDParam: TransactionPayload<CreateParam> = {
      params: {
        did: senderDID,
        controllers: [senderDID],
        keys: [{ publicKey, relationship: ['assertionMethod'] }],
      },
    };
    let invalidCreateDIDParam: TransactionPayload<CreateParam> = utils.objects.cloneDeep(validCreateDIDParam);

    it('should post "create" transaction', async () => {
      await didClient.createDID(validCreateDIDParam, privateKey);
      expect(mockedTransactionSend).toHaveBeenCalledTimes(1);
    });

    it('should calculate minimum fee', async () => {
      await didClient.createDID(validCreateDIDParam, privateKey);
      expect(mockedTransactionComputeMinFee).toHaveBeenCalledTimes(1);
    });

    it('should call create transaction', async () => {
      await didClient.createDID(validCreateDIDParam, privateKey);
      expect(mockedTransactionCreate).toHaveBeenCalled();
    });

    it('should disconnect the client after transaction sent', async () => {
      await didClient.createDID(validCreateDIDParam, privateKey);
      expect(mockedDisconnect).toHaveBeenCalledTimes(1);
    });

    it('should invoke some endpoint', async () => {
      await didClient.createDID(validCreateDIDParam, privateKey);
      expect(mockedInvoke).toHaveBeenCalled();
    });

    it('should invoke the did_getConfig endpoint', async () => {
      await didClient.createDID(validCreateDIDParam, privateKey);
      expect(mockedGetConfig).toHaveBeenCalled();
    });

    it('should invoke the auth_getAuthAccount endpoint', async () => {
      await didClient.createDID(validCreateDIDParam, privateKey);
      expect(mockedGetAuthAccount).toHaveBeenCalled();
    });

    it('should throw an error if param.did is not valid', async () => {
      const func = async () => {
        invalidCreateDIDParam.params.did = 'invalidDID';
        await didClient.createDID(invalidCreateDIDParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.did is not available in retrieved chainspace', async () => {
      const func = async () => {
        invalidCreateDIDParam.params.did = senderDID.replace(chainspace, 'invalid');
        await didClient.createDID(invalidCreateDIDParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.controllers is empty', async () => {
      const func = async () => {
        invalidCreateDIDParam.params.controllers = [];
        await didClient.createDID(invalidCreateDIDParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.controllers is not valid', async () => {
      const func = async () => {
        invalidCreateDIDParam.params.controllers = ['invalidDID'];
        await didClient.createDID(invalidCreateDIDParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.keys publicKeys is not valid', async () => {
      const func = async () => {
        invalidCreateDIDParam.params.keys = [{ publicKey: Buffer.alloc(0), relationship: ['assertionMethod'] }];
        await didClient.createDID(invalidCreateDIDParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.keys relationship is not valid', async () => {
      const func = async () => {
        invalidCreateDIDParam.params.keys = [{ publicKey, relationship: [] }];
        await didClient.createDID(invalidCreateDIDParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('addKeys', () => {
    beforeEach(() => {
      didClient = new DIDClient({ ipc });
      invalidAddKeysParam = utils.objects.cloneDeep(validAddKeysParam);
    });

    afterEach(jest.clearAllMocks);

    let validAddKeysParam: TransactionPayload<AddKeysParam> = {
      params: {
        target: senderDID,
        signer: senderDID,
        signature,
        keys: [{ publicKey, relationship: ['assertionMethod'] }],
      },
    };
    let invalidAddKeysParam: TransactionPayload<AddKeysParam> = utils.objects.cloneDeep(validAddKeysParam);

    it('should post "create" transaction', async () => {
      await didClient.addKeys(validAddKeysParam, privateKey);
      expect(mockedTransactionSend).toHaveBeenCalledTimes(1);
    });

    it('should calculate minimum fee', async () => {
      await didClient.addKeys(validAddKeysParam, privateKey);
      expect(mockedTransactionComputeMinFee).toHaveBeenCalledTimes(1);
    });

    it('should call create transaction', async () => {
      await didClient.addKeys(validAddKeysParam, privateKey);
      expect(mockedTransactionCreate).toHaveBeenCalled();
    });

    it('should disconnect the client after transaction sent', async () => {
      await didClient.addKeys(validAddKeysParam, privateKey);
      expect(mockedDisconnect).toHaveBeenCalledTimes(1);
    });

    it('should invoke some endpoint', async () => {
      await didClient.addKeys(validAddKeysParam, privateKey);
      expect(mockedInvoke).toHaveBeenCalled();
    });

    it('should invoke the did_getConfig endpoint', async () => {
      await didClient.addKeys(validAddKeysParam, privateKey);
      expect(mockedGetConfig).toHaveBeenCalled();
    });

    it('should invoke the auth_getAuthAccount endpoint', async () => {
      await didClient.addKeys(validAddKeysParam, privateKey);
      expect(mockedGetAuthAccount).toHaveBeenCalled();
    });

    it('should invoke the did_read endpoint', async () => {
      await didClient.addKeys(validAddKeysParam, privateKey);
      expect(mockedReadDID).toHaveBeenCalled();
    });

    it('should invoke the did_getNonce endpoint', async () => {
      await didClient.addKeys(validAddKeysParam, privateKey);
      expect(mockedGetDIDNonce).toHaveBeenCalled();
    });

    it('should throw an error if param.target is not valid', async () => {
      const func = async () => {
        invalidAddKeysParam.params.target = 'invalidDID';
        await didClient.addKeys(invalidAddKeysParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.signer is not valid', async () => {
      const func = async () => {
        invalidAddKeysParam.params.signer = 'invalidDID';
        await didClient.addKeys(invalidAddKeysParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.keys is not valid', async () => {
      const func = async () => {
        invalidAddKeysParam.params.keys = [{ publicKey: Buffer.alloc(0), relationship: [] }];
        await didClient.addKeys(invalidAddKeysParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.signature is not valid', async () => {
      const func = async () => {
        invalidAddKeysParam.params.signature = Buffer.alloc(0);
        await didClient.addKeys(invalidAddKeysParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('removeKeys', () => {
    beforeEach(() => {
      didClient = new DIDClient({ ipc });
      invalidRemoveKeysParam = utils.objects.cloneDeep(validRemoveKeysParam);
    });

    afterEach(jest.clearAllMocks);

    let validRemoveKeysParam: TransactionPayload<RemoveKeysParam> = {
      params: {
        target: senderDID,
        signer: senderDID,
        signature,
        publicKeys: [publicKey],
      },
    };
    let invalidRemoveKeysParam: TransactionPayload<RemoveKeysParam> = utils.objects.cloneDeep(validRemoveKeysParam);

    it('should post "create" transaction', async () => {
      await didClient.removeKeys(validRemoveKeysParam, privateKey);
      expect(mockedTransactionSend).toHaveBeenCalledTimes(1);
    });

    it('should calculate minimum fee', async () => {
      await didClient.removeKeys(validRemoveKeysParam, privateKey);
      expect(mockedTransactionComputeMinFee).toHaveBeenCalledTimes(1);
    });

    it('should call create transaction', async () => {
      await didClient.removeKeys(validRemoveKeysParam, privateKey);
      expect(mockedTransactionCreate).toHaveBeenCalled();
    });

    it('should disconnect the client after transaction sent', async () => {
      await didClient.removeKeys(validRemoveKeysParam, privateKey);
      expect(mockedDisconnect).toHaveBeenCalledTimes(1);
    });

    it('should invoke some endpoint', async () => {
      await didClient.removeKeys(validRemoveKeysParam, privateKey);
      expect(mockedInvoke).toHaveBeenCalled();
    });

    it('should invoke the did_getConfig endpoint', async () => {
      await didClient.removeKeys(validRemoveKeysParam, privateKey);
      expect(mockedGetConfig).toHaveBeenCalled();
    });

    it('should invoke the auth_getAuthAccount endpoint', async () => {
      await didClient.removeKeys(validRemoveKeysParam, privateKey);
      expect(mockedGetAuthAccount).toHaveBeenCalled();
    });

    it('should invoke the did_read endpoint', async () => {
      await didClient.removeKeys(validRemoveKeysParam, privateKey);
      expect(mockedReadDID).toHaveBeenCalled();
    });

    it('should invoke the did_getNonce endpoint', async () => {
      await didClient.removeKeys(validRemoveKeysParam, privateKey);
      expect(mockedGetDIDNonce).toHaveBeenCalled();
    });

    it('should throw an error if param.target is not valid', async () => {
      const func = async () => {
        invalidRemoveKeysParam.params.target = 'invalidDID';
        await didClient.removeKeys(invalidRemoveKeysParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.signer is not valid', async () => {
      const func = async () => {
        invalidRemoveKeysParam.params.signer = 'invalidDID';
        await didClient.removeKeys(invalidRemoveKeysParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.publicKeys is not valid', async () => {
      const func = async () => {
        invalidRemoveKeysParam.params.publicKeys = [Buffer.alloc(0)];
        await didClient.removeKeys(invalidRemoveKeysParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.signature is not valid', async () => {
      const func = async () => {
        invalidRemoveKeysParam.params.signature = Buffer.alloc(0);
        await didClient.removeKeys(invalidRemoveKeysParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('addControllers', () => {
    beforeEach(() => {
      didClient = new DIDClient({ ipc });
      invalidAddControllersParam = utils.objects.cloneDeep(validAddControllersParam);
    });

    afterEach(jest.clearAllMocks);

    let validAddControllersParam: TransactionPayload<AddControllersParam> = {
      params: {
        target: senderDID,
        signer: senderDID,
        signature,
        controllers: [senderDID],
      },
    };
    let invalidAddControllersParam: TransactionPayload<AddControllersParam> =
      utils.objects.cloneDeep(validAddControllersParam);

    it('should post "create" transaction', async () => {
      await didClient.addControllers(validAddControllersParam, privateKey);
      expect(mockedTransactionSend).toHaveBeenCalledTimes(1);
    });

    it('should calculate minimum fee', async () => {
      await didClient.addControllers(validAddControllersParam, privateKey);
      expect(mockedTransactionComputeMinFee).toHaveBeenCalledTimes(1);
    });

    it('should call create transaction', async () => {
      await didClient.addControllers(validAddControllersParam, privateKey);
      expect(mockedTransactionCreate).toHaveBeenCalled();
    });

    it('should disconnect the client after transaction sent', async () => {
      await didClient.addControllers(validAddControllersParam, privateKey);
      expect(mockedDisconnect).toHaveBeenCalledTimes(1);
    });

    it('should invoke some endpoint', async () => {
      await didClient.addControllers(validAddControllersParam, privateKey);
      expect(mockedInvoke).toHaveBeenCalled();
    });

    it('should invoke the did_getConfig endpoint', async () => {
      await didClient.addControllers(validAddControllersParam, privateKey);
      expect(mockedGetConfig).toHaveBeenCalled();
    });

    it('should invoke the auth_getAuthAccount endpoint', async () => {
      await didClient.addControllers(validAddControllersParam, privateKey);
      expect(mockedGetAuthAccount).toHaveBeenCalled();
    });

    it('should invoke the did_read endpoint', async () => {
      await didClient.addControllers(validAddControllersParam, privateKey);
      expect(mockedReadDID).toHaveBeenCalled();
    });

    it('should invoke the did_getNonce endpoint', async () => {
      await didClient.addControllers(validAddControllersParam, privateKey);
      expect(mockedGetDIDNonce).toHaveBeenCalled();
    });

    it('should throw an error if param.target is not valid', async () => {
      const func = async () => {
        invalidAddControllersParam.params.target = 'invalidDID';
        await didClient.addControllers(invalidAddControllersParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.signer is not valid', async () => {
      const func = async () => {
        invalidAddControllersParam.params.signer = 'invalidDID';
        await didClient.addControllers(invalidAddControllersParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.controllers is not valid', async () => {
      const func = async () => {
        invalidAddControllersParam.params.controllers = ['invalidId'];
        await didClient.addControllers(invalidAddControllersParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.signature is not valid', async () => {
      const func = async () => {
        invalidAddControllersParam.params.signature = Buffer.alloc(0);
        await didClient.addControllers(invalidAddControllersParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('removeControllers', () => {
    beforeEach(() => {
      didClient = new DIDClient({ ipc });
      invalidRemoveControllersParam = utils.objects.cloneDeep(validRemoveControllersParam);
    });

    afterEach(jest.clearAllMocks);

    let validRemoveControllersParam: TransactionPayload<RemoveControllersParam> = {
      params: {
        target: senderDID,
        signer: senderDID,
        signature,
        controllers: [senderDID],
      },
    };
    let invalidRemoveControllersParam: TransactionPayload<RemoveControllersParam> =
      utils.objects.cloneDeep(validRemoveControllersParam);

    it('should post "create" transaction', async () => {
      await didClient.removeControllers(validRemoveControllersParam, privateKey);
      expect(mockedTransactionSend).toHaveBeenCalledTimes(1);
    });

    it('should calculate minimum fee', async () => {
      await didClient.removeControllers(validRemoveControllersParam, privateKey);
      expect(mockedTransactionComputeMinFee).toHaveBeenCalledTimes(1);
    });

    it('should call create transaction', async () => {
      await didClient.removeControllers(validRemoveControllersParam, privateKey);
      expect(mockedTransactionCreate).toHaveBeenCalled();
    });

    it('should disconnect the client after transaction sent', async () => {
      await didClient.removeControllers(validRemoveControllersParam, privateKey);
      expect(mockedDisconnect).toHaveBeenCalledTimes(1);
    });

    it('should invoke some endpoint', async () => {
      await didClient.removeControllers(validRemoveControllersParam, privateKey);
      expect(mockedInvoke).toHaveBeenCalled();
    });

    it('should invoke the did_getConfig endpoint', async () => {
      await didClient.removeControllers(validRemoveControllersParam, privateKey);
      expect(mockedGetConfig).toHaveBeenCalled();
    });

    it('should invoke the auth_getAuthAccount endpoint', async () => {
      await didClient.removeControllers(validRemoveControllersParam, privateKey);
      expect(mockedGetAuthAccount).toHaveBeenCalled();
    });

    it('should invoke the did_read endpoint', async () => {
      await didClient.removeControllers(validRemoveControllersParam, privateKey);
      expect(mockedReadDID).toHaveBeenCalled();
    });

    it('should invoke the did_getNonce endpoint', async () => {
      await didClient.removeControllers(validRemoveControllersParam, privateKey);
      expect(mockedGetDIDNonce).toHaveBeenCalled();
    });

    it('should throw an error if param.target is not valid', async () => {
      const func = async () => {
        invalidRemoveControllersParam.params.target = 'invalidDID';
        await didClient.removeControllers(invalidRemoveControllersParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.signer is not valid', async () => {
      const func = async () => {
        invalidRemoveControllersParam.params.signer = 'invalidDID';
        await didClient.removeControllers(invalidRemoveControllersParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.controllers is not valid', async () => {
      const func = async () => {
        invalidRemoveControllersParam.params.controllers = ['invalidDID'];
        await didClient.removeControllers(invalidRemoveControllersParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.signature is not valid', async () => {
      const func = async () => {
        invalidRemoveControllersParam.params.signature = Buffer.alloc(0);
        await didClient.removeControllers(invalidRemoveControllersParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('addServiceEndpoint', () => {
    beforeEach(() => {
      didClient = new DIDClient({ ipc });
      invalidAddServiceEndpointParam = utils.objects.cloneDeep(validAddServiceEndpointParam);
    });

    afterEach(jest.clearAllMocks);

    let validAddServiceEndpointParam: TransactionPayload<AddServiceEndpointParam> = {
      params: {
        target: senderDID,
        signer: senderDID,
        signature,
        endpoint: {
          id: 'urn:sha256:be5c8e26a60b911370b30dcef6a9f497de0805efc30827c51fb354f766be2261',
          serviceEndpoint: 'https://instagram.com/lisk_blockchain',
          type: 'Instagram',
        },
      },
    };
    let invalidAddServiceEndpointParam: TransactionPayload<AddServiceEndpointParam> =
      utils.objects.cloneDeep(validAddServiceEndpointParam);

    it('should post "create" transaction', async () => {
      await didClient.addServiceEndpoint(validAddServiceEndpointParam, privateKey);
      expect(mockedTransactionSend).toHaveBeenCalledTimes(1);
    });

    it('should calculate minimum fee', async () => {
      await didClient.addServiceEndpoint(validAddServiceEndpointParam, privateKey);
      expect(mockedTransactionComputeMinFee).toHaveBeenCalledTimes(1);
    });

    it('should call create transaction', async () => {
      await didClient.addServiceEndpoint(validAddServiceEndpointParam, privateKey);
      expect(mockedTransactionCreate).toHaveBeenCalled();
    });

    it('should disconnect the client after transaction sent', async () => {
      await didClient.addServiceEndpoint(validAddServiceEndpointParam, privateKey);
      expect(mockedDisconnect).toHaveBeenCalledTimes(1);
    });

    it('should invoke some endpoint', async () => {
      await didClient.addServiceEndpoint(validAddServiceEndpointParam, privateKey);
      expect(mockedInvoke).toHaveBeenCalled();
    });

    it('should invoke the did_getConfig endpoint', async () => {
      await didClient.addServiceEndpoint(validAddServiceEndpointParam, privateKey);
      expect(mockedGetConfig).toHaveBeenCalled();
    });

    it('should invoke the auth_getAuthAccount endpoint', async () => {
      await didClient.addServiceEndpoint(validAddServiceEndpointParam, privateKey);
      expect(mockedGetAuthAccount).toHaveBeenCalled();
    });

    it('should invoke the did_read endpoint', async () => {
      await didClient.addServiceEndpoint(validAddServiceEndpointParam, privateKey);
      expect(mockedReadDID).toHaveBeenCalled();
    });

    it('should invoke the did_getNonce endpoint', async () => {
      await didClient.addServiceEndpoint(validAddServiceEndpointParam, privateKey);
      expect(mockedGetDIDNonce).toHaveBeenCalled();
    });

    it('should throw an error if param.target is not valid', async () => {
      const func = async () => {
        invalidAddServiceEndpointParam.params.target = 'invalidDID';
        await didClient.addServiceEndpoint(invalidAddServiceEndpointParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.signer is not valid', async () => {
      const func = async () => {
        invalidAddServiceEndpointParam.params.signer = 'invalidDID';
        await didClient.addServiceEndpoint(invalidAddServiceEndpointParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if params.endpoint.id is not valid', async () => {
      const func = async () => {
        invalidAddServiceEndpointParam.params.endpoint.id = 'invalidId';
        await didClient.addServiceEndpoint(invalidAddServiceEndpointParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.signature is not valid', async () => {
      const func = async () => {
        invalidAddServiceEndpointParam.params.signature = Buffer.alloc(0);
        await didClient.addServiceEndpoint(invalidAddServiceEndpointParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('removeServiceEndpoint', () => {
    beforeEach(() => {
      didClient = new DIDClient({ ipc });
      invalidRemoveServiceEndpointParam = utils.objects.cloneDeep(validRemoveServiceEndpointParam);
    });

    afterEach(jest.clearAllMocks);

    let validRemoveServiceEndpointParam: TransactionPayload<RemoveServiceEndpointParam> = {
      params: {
        target: senderDID,
        signer: senderDID,
        signature,
        endpointId: 'urn:sha256:be5c8e26a60b911370b30dcef6a9f497de0805efc30827c51fb354f766be2261',
      },
    };
    let invalidRemoveServiceEndpointParam: TransactionPayload<RemoveServiceEndpointParam> = utils.objects.cloneDeep(
      validRemoveServiceEndpointParam,
    );

    it('should post "create" transaction', async () => {
      await didClient.removeServiceEndpoint(validRemoveServiceEndpointParam, privateKey);
      expect(mockedTransactionSend).toHaveBeenCalledTimes(1);
    });

    it('should calculate minimum fee', async () => {
      await didClient.removeServiceEndpoint(validRemoveServiceEndpointParam, privateKey);
      expect(mockedTransactionComputeMinFee).toHaveBeenCalledTimes(1);
    });

    it('should call create transaction', async () => {
      await didClient.removeServiceEndpoint(validRemoveServiceEndpointParam, privateKey);
      expect(mockedTransactionCreate).toHaveBeenCalled();
    });

    it('should disconnect the client after transaction sent', async () => {
      await didClient.removeServiceEndpoint(validRemoveServiceEndpointParam, privateKey);
      expect(mockedDisconnect).toHaveBeenCalledTimes(1);
    });

    it('should invoke some endpoint', async () => {
      await didClient.removeServiceEndpoint(validRemoveServiceEndpointParam, privateKey);
      expect(mockedInvoke).toHaveBeenCalled();
    });

    it('should invoke the did_getConfig endpoint', async () => {
      await didClient.removeServiceEndpoint(validRemoveServiceEndpointParam, privateKey);
      expect(mockedGetConfig).toHaveBeenCalled();
    });

    it('should invoke the auth_getAuthAccount endpoint', async () => {
      await didClient.removeServiceEndpoint(validRemoveServiceEndpointParam, privateKey);
      expect(mockedGetAuthAccount).toHaveBeenCalled();
    });

    it('should invoke the did_read endpoint', async () => {
      await didClient.removeServiceEndpoint(validRemoveServiceEndpointParam, privateKey);
      expect(mockedReadDID).toHaveBeenCalled();
    });

    it('should invoke the did_getNonce endpoint', async () => {
      await didClient.removeServiceEndpoint(validRemoveServiceEndpointParam, privateKey);
      expect(mockedGetDIDNonce).toHaveBeenCalled();
    });

    it('should throw an error if param.target is not valid', async () => {
      const func = async () => {
        invalidRemoveServiceEndpointParam.params.target = 'invalidDID';
        await didClient.removeServiceEndpoint(invalidRemoveServiceEndpointParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.signer is not valid', async () => {
      const func = async () => {
        invalidRemoveServiceEndpointParam.params.signer = 'invalidDID';
        await didClient.removeServiceEndpoint(invalidRemoveServiceEndpointParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if params.endpointId is not valid', async () => {
      const func = async () => {
        invalidRemoveServiceEndpointParam.params.endpointId = 'invalidId';
        await didClient.removeServiceEndpoint(invalidRemoveServiceEndpointParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.signature is not valid', async () => {
      const func = async () => {
        invalidRemoveServiceEndpointParam.params.signature = Buffer.alloc(0);
        await didClient.removeServiceEndpoint(invalidRemoveServiceEndpointParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });
  });

  describe('deactivate', () => {
    beforeEach(() => {
      didClient = new DIDClient({ ipc });
      invalidDeactivateParam = utils.objects.cloneDeep(validDeactivateParam);
    });

    afterEach(jest.clearAllMocks);

    let validDeactivateParam: TransactionPayload<DeactivateParam> = {
      params: {
        target: senderDID,
        signer: senderDID,
        signature,
      },
    };
    let invalidDeactivateParam: TransactionPayload<DeactivateParam> = utils.objects.cloneDeep(validDeactivateParam);

    it('should post "create" transaction', async () => {
      await didClient.deactivateDID(validDeactivateParam, privateKey);
      expect(mockedTransactionSend).toHaveBeenCalledTimes(1);
    });

    it('should calculate minimum fee', async () => {
      await didClient.deactivateDID(validDeactivateParam, privateKey);
      expect(mockedTransactionComputeMinFee).toHaveBeenCalledTimes(1);
    });

    it('should call create transaction', async () => {
      await didClient.deactivateDID(validDeactivateParam, privateKey);
      expect(mockedTransactionCreate).toHaveBeenCalled();
    });

    it('should disconnect the client after transaction sent', async () => {
      await didClient.deactivateDID(validDeactivateParam, privateKey);
      expect(mockedDisconnect).toHaveBeenCalledTimes(1);
    });

    it('should invoke some endpoint', async () => {
      await didClient.deactivateDID(validDeactivateParam, privateKey);
      expect(mockedInvoke).toHaveBeenCalled();
    });

    it('should invoke the did_getConfig endpoint', async () => {
      await didClient.deactivateDID(validDeactivateParam, privateKey);
      expect(mockedGetConfig).toHaveBeenCalled();
    });

    it('should invoke the auth_getAuthAccount endpoint', async () => {
      await didClient.deactivateDID(validDeactivateParam, privateKey);
      expect(mockedGetAuthAccount).toHaveBeenCalled();
    });

    it('should invoke the did_read endpoint', async () => {
      await didClient.deactivateDID(validDeactivateParam, privateKey);
      expect(mockedReadDID).toHaveBeenCalled();
    });

    it('should invoke the did_getNonce endpoint', async () => {
      await didClient.deactivateDID(validDeactivateParam, privateKey);
      expect(mockedGetDIDNonce).toHaveBeenCalled();
    });

    it('should throw an error if param.target is not valid', async () => {
      const func = async () => {
        invalidDeactivateParam.params.target = 'invalidDID';
        await didClient.deactivateDID(invalidDeactivateParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.signer is not valid', async () => {
      const func = async () => {
        invalidDeactivateParam.params.signer = 'invalidDID';
        await didClient.deactivateDID(invalidDeactivateParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });

    it('should throw an error if param.signature is not valid', async () => {
      const func = async () => {
        invalidDeactivateParam.params.signature = Buffer.alloc(0);
        await didClient.deactivateDID(invalidDeactivateParam, privateKey);
      };
      await expect(func()).rejects.toThrow();
    });
  });
});
