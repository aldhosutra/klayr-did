import { ed25519ToX25519PrivateKeyMultibase, ed25519ToX25519PublicKeyMultibase } from '@dist/cryptography/convert';
import { privateKey, publicKey, x25519PrivateKeyMultibase, x25519PublicKeyMultibase } from '../../setup/constant';

describe('ed25519ToX25519PublicKeyMultibase', () => {
  it('should convert correct ed25519 key to x25519 publicKeyMultibase', () => {
    const converted = ed25519ToX25519PublicKeyMultibase(publicKey);
    expect(converted).toBe(x25519PublicKeyMultibase);
  });
});

describe('ed25519ToX25519PrivateKeyMultibase', () => {
  it('should convert correct ed25519 key to x25519 publicKeyMultibase', () => {
    const converted = ed25519ToX25519PrivateKeyMultibase(privateKey);
    expect(converted).toBe(x25519PrivateKeyMultibase);
  });
});
