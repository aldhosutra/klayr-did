/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/require-await */
import { getAddressDIDFromPublicKey, getDIDDocument, parseDIDComponent } from '@dist/did';
import { cryptography } from 'klayr-sdk';
import { KLAYR_DID_PREFIX } from '@dist/utils/constant';
import { mockedReadDID } from '../setup/mocks';
import { chainspace, ipc, publicKey, senderDID, ws } from '../setup/constant';

describe('parseDIDComponent', () => {
  it('should parse valid did:klayr component', () => {
    const component = parseDIDComponent(senderDID);
    expect(component.did).toBe(senderDID);
    expect(component.method).toBe('klayr');
    expect(component.chainspace).toBe(chainspace);
    expect(component.namespace).toBe('address');
    expect(component.uniqueId).toBe(cryptography.address.getKlayr32AddressFromPublicKey(publicKey));
  });

  it('should parse valid did:klayr component for simplified version', () => {
    const component = parseDIDComponent(
      `${KLAYR_DID_PREFIX}:${chainspace}:${cryptography.address.getKlayr32AddressFromPublicKey(publicKey)}`,
    );
    expect(component.did).toBe(senderDID);
    expect(component.method).toBe('klayr');
    expect(component.chainspace).toBe(chainspace);
    expect(component.namespace).toBe('address');
    expect(component.uniqueId).toBe(cryptography.address.getKlayr32AddressFromPublicKey(publicKey));
  });

  it('should parse DID URI path, fragment and query', () => {
    const component = parseDIDComponent(`${senderDID}/path?query=1#keys-1`);
    expect(component.did).toBe(senderDID);
    expect(component.path).toBe('/path');
    expect(component.fragment).toBe('keys-1');
    expect(component.query).toBe('query=1');
    expect(component.method).toBe('klayr');
    expect(component.chainspace).toBe(chainspace);
    expect(component.namespace).toBe('address');
    expect(component.uniqueId).toBe(cryptography.address.getKlayr32AddressFromPublicKey(publicKey));
  });

  it('should throw an error if not start with did', async () => {
    const func = async () => {
      const invalidDID = 'notdid:klayr:';
      parseDIDComponent(invalidDID);
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if method is not lisk', async () => {
    const func = async () => {
      const invalidDID = 'did:notlisk:';
      parseDIDComponent(invalidDID);
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if namespace and uniqueId are absent', async () => {
    const func = async () => {
      const invalidDID = 'did:klayr:test';
      parseDIDComponent(invalidDID);
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if address is not valid if using address namespace format', async () => {
    const func = async () => {
      const invalidDID = 'did:klayr:test:notvalidaddress';
      parseDIDComponent(invalidDID);
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('getAddressDIDFromPublicKey', () => {
  it('should return valid address DID from public key', () => {
    const did = getAddressDIDFromPublicKey(chainspace, publicKey);
    const component = parseDIDComponent(did);
    expect(component.did).toBe(senderDID);
  });

  it('should throw an error if public key is not valid', async () => {
    const func = async () => {
      getAddressDIDFromPublicKey(chainspace, Buffer.alloc(0));
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('getDIDDocument', () => {
  afterEach(jest.clearAllMocks);

  it('should invoke did_read if supplied with ipc options', async () => {
    await getDIDDocument(senderDID, { ipc });
    expect(mockedReadDID).toHaveBeenCalledTimes(1);
  });

  it('should invoke did_read if supplied with ws options', async () => {
    await getDIDDocument(senderDID, { ws });
    expect(mockedReadDID).toHaveBeenCalledTimes(1);
  });

  it('should throw an error if not started with did:klayr', async () => {
    const func = async () => {
      await getDIDDocument('not:valid:did', { ws });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if options are empty', async () => {
    const func = async () => {
      await getDIDDocument(senderDID, undefined as any);
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if on-chain options are not sufficient', async () => {
    const func = async () => {
      await getDIDDocument(senderDID, { context: 'any' as any });
    };
    await expect(func()).rejects.toThrow();
  });
});
