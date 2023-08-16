import { X25519KeyAgreementKey2020 } from '@digitalcredentials/x25519-key-agreement-key-2020';
import { cryptography } from 'lisk-sdk';
import { encodePrivateKey, encodePublicKey } from './codec';

export function ed25519ToX25519PublicKeyMultibase(publicKey: Buffer): string {
  const publicKeyMultibase = encodePublicKey(publicKey);
  const x25519PublicKey = X25519KeyAgreementKey2020.fromEd25519VerificationKey2020({
    keyPair: { publicKeyMultibase },
  }).publicKeyMultibase;
  return x25519PublicKey;
}

export function ed25519ToX25519PrivateKeyMultibase(privateKey: Buffer): string {
  const publicKey = cryptography.ed.getPublicKeyFromPrivateKey(privateKey);
  const publicKeyMultibase = encodePublicKey(publicKey);
  const privateKeyMultibase = encodePrivateKey(privateKey);
  const x25519PrivateKey = X25519KeyAgreementKey2020.fromEd25519VerificationKey2020({
    keyPair: { publicKeyMultibase, privateKeyMultibase },
  }).privateKeyMultibase;
  return x25519PrivateKey;
}
