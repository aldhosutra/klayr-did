import {
  MULTICODEC_ED25519_PUB_HEADER,
  LISK_PUBLIC_KEY_LENGTH,
  MULTIBASE_PUBLIC_KEY_LENGTH,
  LISK_PRIVATE_KEY_LENGTH,
  MULTIBASE_PRIVATE_KEY_LENGTH,
  MULTICODEC_ED25519_PRIV_HEADER,
  MULTIBASE_BASE58BTC_HEADER,
} from '../utils/constant';
import { X25519KeyAgreementKey2020 } from '@digitalcredentials/x25519-key-agreement-key-2020';
import * as base58btc from '@digitalcredentials/base58-universal';
import { codec, cryptography } from 'lisk-sdk';
import { JWEDocument } from '../types';
import { jweDocumentSchema } from '../utils/schema';

function encodeMbKey(header: Uint8Array, key: Buffer): string {
  const mbKey = new Uint8Array(header.length + key.length);
  mbKey.set(header);
  mbKey.set(key, header.length);
  return MULTIBASE_BASE58BTC_HEADER + base58btc.encode(mbKey);
}

function decodeMbKey(header: Uint8Array, key: string): Buffer {
  const k = key.slice(MULTIBASE_BASE58BTC_HEADER.length, key.length);
  return Buffer.from(base58btc.decode(k)).subarray(header.length);
}

export function encodePublicKey(liskPublicKey: Buffer): string {
  if (liskPublicKey.length !== LISK_PUBLIC_KEY_LENGTH) {
    throw Error('unexpected public key length');
  }
  return encodeMbKey(MULTICODEC_ED25519_PUB_HEADER, liskPublicKey);
}

export function decodePublicKey(multibasePublicKey: string): Buffer {
  if (multibasePublicKey.length !== MULTIBASE_PUBLIC_KEY_LENGTH) {
    throw Error('unexpected public key length');
  }
  return decodeMbKey(MULTICODEC_ED25519_PUB_HEADER, multibasePublicKey);
}

export function encodePrivateKey(liskPrivateKey: Buffer): string {
  if (liskPrivateKey.length !== LISK_PRIVATE_KEY_LENGTH) {
    throw Error('unexpected private key length');
  }
  return encodeMbKey(MULTICODEC_ED25519_PRIV_HEADER, liskPrivateKey);
}

export function decodePrivateKey(multibasePrivateKey: string): Buffer {
  if (multibasePrivateKey.length !== MULTIBASE_PRIVATE_KEY_LENGTH) {
    throw Error('unexpected private key length');
  }
  return decodeMbKey(MULTICODEC_ED25519_PRIV_HEADER, multibasePrivateKey);
}

export function convertEd25519ToX25519PublicKey(publicKey: Buffer): Buffer {
  const publicKeyMultibase = encodePublicKey(publicKey);
  const x25519PublicKey = X25519KeyAgreementKey2020.fromEd25519VerificationKey2020({
    keyPair: { publicKeyMultibase },
  }).publicKeyMultibase;
  return decodePublicKey(x25519PublicKey);
}

export function convertEd25519ToX25519PrivateKey(privateKey: Buffer): Buffer {
  const publicKey = cryptography.ed.getPublicKeyFromPrivateKey(privateKey);
  const publicKeyMultibase = encodePublicKey(publicKey);
  const privateKeyMultibase = encodePrivateKey(privateKey);
  const x25519PrivateKey = X25519KeyAgreementKey2020.fromEd25519VerificationKey2020({
    keyPair: { publicKeyMultibase, privateKeyMultibase },
  }).privateKeyMultibase;
  return decodePrivateKey(x25519PrivateKey);
}

export function encodeEncryptionResult(jwe: JWEDocument): Buffer {
  return codec.encode(jweDocumentSchema, jwe);
}

export function decodeEncryptionResult(buf: Buffer): JWEDocument {
  return codec.decode(jweDocumentSchema, buf);
}
