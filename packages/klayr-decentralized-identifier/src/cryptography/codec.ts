import {
  MULTICODEC_ED25519_PUB_HEADER,
  KLAYR_PUBLIC_KEY_LENGTH,
  MULTIBASE_PUBLIC_KEY_LENGTH,
  KLAYR_PRIVATE_KEY_LENGTH,
  MULTIBASE_PRIVATE_KEY_LENGTH,
  MULTICODEC_ED25519_PRIV_HEADER,
  MULTIBASE_BASE58BTC_HEADER,
} from '../utils/constant';
import * as base58btc from '@digitalcredentials/base58-universal';
import { codec } from 'klayr-sdk';
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

export function encodePublicKey(klayrPublicKey: Buffer): string {
  if (klayrPublicKey.length !== KLAYR_PUBLIC_KEY_LENGTH) {
    throw Error('unexpected public key length');
  }
  return encodeMbKey(MULTICODEC_ED25519_PUB_HEADER, klayrPublicKey);
}

export function decodePublicKey(multibasePublicKey: string): Buffer {
  if (multibasePublicKey.length !== MULTIBASE_PUBLIC_KEY_LENGTH) {
    throw Error('unexpected public key length');
  }
  return decodeMbKey(MULTICODEC_ED25519_PUB_HEADER, multibasePublicKey);
}

export function encodePrivateKey(klayrPrivateKey: Buffer): string {
  if (klayrPrivateKey.length !== KLAYR_PRIVATE_KEY_LENGTH) {
    throw Error('unexpected private key length');
  }
  return encodeMbKey(MULTICODEC_ED25519_PRIV_HEADER, klayrPrivateKey);
}

export function decodePrivateKey(multibasePrivateKey: string): Buffer {
  if (multibasePrivateKey.length !== MULTIBASE_PRIVATE_KEY_LENGTH) {
    throw Error('unexpected private key length');
  }
  return decodeMbKey(MULTICODEC_ED25519_PRIV_HEADER, multibasePrivateKey);
}

export function encodeJWEDocument(jwe: JWEDocument): Buffer {
  return codec.encode(jweDocumentSchema, jwe);
}

export function decodeJWEDocument(buf: Buffer): JWEDocument {
  return codec.decode(jweDocumentSchema, buf);
}
