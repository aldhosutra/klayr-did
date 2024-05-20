import { utils } from '@klayr-did/klayr-decentralized-identifier';
import { chainspace, issuerDID, issuerDIDDoc, publicKey } from './constant';

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
      mockedReadDID(arg2);
      if (arg2.did === issuerDID) return utils.bootstrapAddressDidDocument(chainspace, publicKey);
      if (arg2.did === `did:klayr:${chainspace}:test:signeriscontroller`) {
        const emptyDID = utils.bootstrapEmptyDidDocument();
        emptyDID.controller = [issuerDID];
        return emptyDID;
      }
      if (arg2.did === `did:klayr:${chainspace}:test:signeriscontroller2`) {
        const emptyDID = utils.bootstrapEmptyDidDocument();
        emptyDID.controller = [`did:klayr:${chainspace}:test:notexist`];
        return emptyDID;
      }
      if (arg2.did === `did:klayr:${chainspace}:test:empty`) {
        const emptyDID = utils.bootstrapEmptyDidDocument();
        return emptyDID;
      }
    }
    return undefined;
  },
};

jest.mock('@klayr/api-client', () => {
  return {
    ...jest.requireActual('@klayr/api-client'),
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

const response = issuerDIDDoc;
export const mockedFetch = jest.fn();

globalThis.fetch = async (...arg) => {
  mockedFetch(...arg);
  if (arg[0] === 'https://throw.error') throw new Error('error thrown');
  return Promise.resolve({
    text: async () => Promise.resolve(JSON.stringify(response, null, 2)),
  } as any);
};

export const mockedContext = jest.fn();
export const mockedMethodGetConfig = jest.fn();
export const mockedMethodRead = jest.fn();
export const mockedMethod = {
  read: (_context: any, did: string) => {
    mockedMethodRead();
    if (did === issuerDID) return issuerDIDDoc;
    if (did === issuerDIDDoc.verificationMethod[0].id) return issuerDIDDoc.verificationMethod[0];
    return undefined;
  },
  getConfig: () => {
    mockedMethodGetConfig();
    return { chainspace };
  },
};
export const mockedLoader = jest.fn();
export const mockedDocumentLoader = jest.fn();
export const documentLoader = async () => {
  mockedDocumentLoader();
  return Promise.resolve({ contextUrl: 'test', documentUrl: 'test', document: { key: 'document' } });
};

export const mockedResolver = { get: jest.fn() };
