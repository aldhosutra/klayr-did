import { utils } from '@dist/index';
import { chainspace, publicKey, senderDID } from '../constant';

export const mockedDisconnect = jest.fn();
export const mockedTransactionCreate = jest.fn();
export const mockedTransactionSend = jest.fn();
export const mockedTransactionComputeMinFee = jest.fn();
export const mockedInvoke = jest.fn();
export const mockedGetAuthAccount = jest.fn();
export const mockedGetDIDNonce = jest.fn();
export const mockedGetConfig = jest.fn();
export const mockedReadDID = jest.fn();
export const mockedCreateIPCClient = jest.fn();
export const mockedCreateWSClient = jest.fn();

export const clientMock = {
  disconnect: mockedDisconnect,
  transaction: {
    create: mockedTransactionCreate,
    send: mockedTransactionSend,
    computeMinFee: mockedTransactionComputeMinFee,
  },
  invoke: async (arg1, arg2) => {
    mockedInvoke(arg1, arg2);
    if (arg1 === 'auth_getAuthAccount') {
      mockedGetAuthAccount();
      return { nonce: BigInt(1) };
    }
    if (arg1 === 'did_getNonce') {
      mockedGetDIDNonce();
      return { nonce: BigInt(1) };
    }
    if (arg1 === 'did_getConfig') {
      mockedGetConfig();
      return { chainspace };
    }
    if (arg1 === 'did_read') {
      mockedReadDID();
      if (arg2.did === senderDID) return utils.bootstrapAddressDidDocument(chainspace, publicKey);
      if (arg2.did === `did:lisk:${chainspace}:test:signeriscontroller`) {
        const emptyDID = utils.bootstrapEmptyDidDocument();
        emptyDID.controller = [senderDID];
        return emptyDID;
      }
      if (arg2.did === `did:lisk:${chainspace}:test:signeriscontroller2`) {
        const emptyDID = utils.bootstrapEmptyDidDocument();
        emptyDID.controller = [`did:lisk:${chainspace}:test:notexist`];
        return emptyDID;
      }
      if (arg2.did === `did:lisk:${chainspace}:test:empty`) {
        const emptyDID = utils.bootstrapEmptyDidDocument();
        return emptyDID;
      }
    }
    return undefined;
  },
};

jest.mock('@liskhq/lisk-api-client', () => {
  return {
    ...jest.requireActual('@liskhq/lisk-api-client'),
    createIPCClient: async () => {
      mockedCreateIPCClient();
      return Promise.resolve(clientMock);
    },
    createWSClient: async () => {
      mockedCreateWSClient();
      return Promise.resolve(clientMock);
    },
  };
});
