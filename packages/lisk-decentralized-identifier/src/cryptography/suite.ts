/* eslint-disable no-nested-ternary */
import { Ed25519VerificationKey2020 as Ed25519Key } from '@digitalcredentials/ed25519-verification-key-2020';
import { SerializedKeyPair } from '@digitalcredentials/keypair';
import { Ed25519Signature2020 } from '../types/cryptography';
import { Ed25519Signature2020 as Ed25519Signature } from '@digitalcredentials/ed25519-signature-2020';
import { encodePrivateKey, encodePublicKey } from './convert';
import { X25519KeyAgreementKey2020 } from '@digitalcredentials/x25519-key-agreement-key-2020';
import { ED25519_VERIFICATION_KEY_2020_TYPE } from '../utils/constant';

interface GetSuiteParam {
  publicKey?: Buffer;
  privateKey?: Buffer;
  id?: string;
  controller?: string;
  publicKeyMultibase?: string;
  privateKeyMultibase?: string;
}

export const createEd25519KeyPair = Ed25519Key.from;

export const createX25519KeyPair = async (keyPair: SerializedKeyPair): Promise<Ed25519Key> =>
  await X25519KeyAgreementKey2020.fromEd25519VerificationKey2020({ keyPair });

export async function getEd25519SignatureSuite(param: GetSuiteParam): Promise<Ed25519Signature2020> {
  const publicKeyMultibase =
    param.publicKeyMultibase ?? (param.publicKey ? encodePublicKey(param.publicKey) : undefined);
  const privateKeyMultibase =
    param.privateKeyMultibase ?? (param.privateKey ? encodePrivateKey(param.privateKey) : undefined);
  const keyPair = await createEd25519KeyPair({
    id: param.id ?? `did:key:${publicKeyMultibase}#${publicKeyMultibase}`,
    controller: param.controller ?? `did:key:${publicKeyMultibase}`,
    type: ED25519_VERIFICATION_KEY_2020_TYPE,
    publicKeyMultibase,
    privateKeyMultibase,
  });
  const suite = new Ed25519Signature({ key: keyPair });
  return suite;
}
