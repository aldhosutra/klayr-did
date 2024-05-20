import { CipherInterface, utils } from '@dist/index';
import { chainspace, encryptedJwe, jwePlain, publicKey, senderDID, senderDIDDoc, senderKAKey } from './constant';

export const mockedDisconnect = jest.fn();
export const mockedTransactionCreate = jest.fn();
export const mockedTransactionSend = jest.fn();
export const mockedTransactionComputeMinFee = jest.fn();
export const mockedInvoke = jest.fn();
export const mockedGetAuthAccount = jest.fn();
export const mockedGetDIDNonce = jest.fn();
export const mockedGetConfig = jest.fn();
export const mockedAuthorize = jest.fn();
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
    if (arg1 === 'did_authorize') {
      mockedAuthorize();
      return [];
    }
    if (arg1 === 'did_read') {
      mockedReadDID();
      if (arg2.did === senderDID) return utils.bootstrapAddressDidDocument(chainspace, publicKey);
      if (arg2.did === `did:klayr:${chainspace}:test:signeriscontroller`) {
        const emptyDID = utils.bootstrapEmptyDidDocument();
        emptyDID.controller = [senderDID];
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

const plainText = JSON.stringify(jwePlain);
export const mockedEncrypt = jest.fn();
export const mockedDecrypt = jest.fn();
export const mockedKeyResolver = { get: jest.fn() };

jest.mock('@dist/cryptography/cipher', () => {
  return {
    createCipher: async () =>
      Promise.resolve<CipherInterface>({
        encrypt: async ({ data, recipients, keyResolver }) => {
          mockedEncrypt(data, recipients, keyResolver);
          await keyResolver(recipients[0].header.kid);
          if (data === plainText && recipients[0].header.kid === senderKAKey) {
            return encryptedJwe;
          }
          throw new Error('encrypt failed');
        },
        // eslint-disable-next-line @typescript-eslint/require-await
        decrypt: async ({ jwe, keyAgreementKey }) => {
          mockedDecrypt(jwe, keyAgreementKey);
          if (jwe === encryptedJwe) {
            return plainText;
          }
          throw new Error('decrypt failed');
        },
      }),
  };
});

export const mockedContext = jest.fn();
export const mockedMethodGetConfig = jest.fn();
export const mockedMethodRead = jest.fn();
export const mockedMethod = {
  read: (_context: any, did: string) => {
    mockedMethodRead();
    if (did === senderDID) return senderDIDDoc;
    if (did === senderDIDDoc.verificationMethod[0].id) return senderDIDDoc.verificationMethod[0];
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
  return Promise.resolve({ document: 'document' });
};
