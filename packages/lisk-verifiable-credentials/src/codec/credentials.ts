import * as vc from '@digitalcredentials/vc';
import { VerifiableCredential } from '../types';

export function encodeCredential(unserializedVC: VerifiableCredential): Buffer {
  const credential = { ...unserializedVC };
  vc._checkCredential({ credential });
  return Buffer.from(JSON.stringify(credential, null, 0), 'utf8');
}

export function decodeCredential(serializedVC: Buffer): VerifiableCredential {
  const credential = JSON.parse(serializedVC.toString('utf8'));
  vc._checkCredential({ credential });
  return credential;
}
