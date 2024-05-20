/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/require-await */
import {
  decodeJWEDocument,
  decodePrivateKey,
  decodePublicKey,
  encodeJWEDocument,
  encodePrivateKey,
  encodePublicKey,
} from '@dist/cryptography/codec';
import {
  encryptedJwe,
  encryptedJweBytes,
  privateKey,
  privateKeyMultiBase,
  publicKey,
  publicKeyMultiBase,
} from '../../setup/constant';

describe('encodePublicKey', () => {
  it('should encode valid public key', () => {
    const encodedPublicKey = encodePublicKey(publicKey);
    expect(encodedPublicKey).toBe(publicKeyMultiBase);
  });

  it('should throw an error for invalid publicKey', async () => {
    const func = async () => {
      encodePublicKey(Buffer.alloc(0));
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('encodePrivateKey', () => {
  it('should encode valid private key', () => {
    const encodedPrivateKey = encodePrivateKey(privateKey);
    expect(encodedPrivateKey).toBe(privateKeyMultiBase);
  });

  it('should throw an error for invalid privateKey', async () => {
    const func = async () => {
      encodePrivateKey(Buffer.alloc(0));
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('decodePublicKey', () => {
  it('should decode valid public key', () => {
    const decodedPublicKey = decodePublicKey(publicKeyMultiBase);
    expect(decodedPublicKey).toStrictEqual(publicKey);
  });

  it('should throw an error for invalid publicKey', async () => {
    const func = async () => {
      decodePublicKey('invalid');
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('decodePrivateKey', () => {
  it('should decode valid public key', () => {
    const decodedPrivateKey = decodePrivateKey(privateKeyMultiBase);
    expect(decodedPrivateKey).toStrictEqual(privateKey);
  });

  it('should throw an error for invalid privateKey', async () => {
    const func = async () => {
      decodePrivateKey('invalid');
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('encodeJWEDocument', () => {
  it('should encode encryption result successfully', async () => {
    const encoded = encodeJWEDocument(encryptedJwe);
    expect(encoded).toStrictEqual(encryptedJweBytes);
  });

  it('should throw an error if encoding fails', async () => {
    const func = async () => {
      encodeJWEDocument('invalid' as any);
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('decodeJWEDocument', () => {
  it('should decode encryption result successfully', async () => {
    const decoded = decodeJWEDocument(encryptedJweBytes);
    expect(decoded).toStrictEqual(encryptedJwe);
  });

  it('should throw an error if decoding fails', async () => {
    const func = async () => {
      decodeJWEDocument('invalid' as any);
    };
    await expect(func()).rejects.toThrow();
  });
});
