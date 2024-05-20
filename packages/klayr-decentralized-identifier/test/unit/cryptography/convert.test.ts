import { ed25519ToX25519PrivateKeyMultibase, ed25519ToX25519PublicKeyMultibase } from '@dist/cryptography/convert';
import { privateKey, publicKey, x25519PrivateKeyMultibase, x25519PublicKeyMultibase } from '../../setup/constant';

describe('ed25519ToX25519PublicKeyMultibase', () => {
  it('should convert correct ed25519 key to x25519 publicKeyMultibase', () => {
    const converted = ed25519ToX25519PublicKeyMultibase(publicKey);
    expect(converted).toBe(x25519PublicKeyMultibase);
  });

  it('should throw an error if public key is not valid', async () => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const func = async () => {
      ed25519ToX25519PublicKeyMultibase(Buffer.alloc(0));
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('ed25519ToX25519PrivateKeyMultibase', () => {
  it('should convert correct ed25519 key to x25519 publicKeyMultibase', () => {
    const converted = ed25519ToX25519PrivateKeyMultibase(privateKey);
    expect(converted).toBe(x25519PrivateKeyMultibase);
  });

  it('should throw an error if private key is not valid', async () => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const func = async () => {
      ed25519ToX25519PublicKeyMultibase(Buffer.alloc(0));
    };
    await expect(func()).rejects.toThrow();
  });
});
