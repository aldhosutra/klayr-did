import * as vc from '@digitalcredentials/vc';
import { VerifiableCredential } from '../types';
import { utils } from 'klayr-sdk';
import { utils as didUtils } from '@klayr-did/klayr-decentralized-identifier';

export function encodeCredential(unserializedVC: VerifiableCredential): Buffer {
  const credential = utils.objects.cloneDeep(unserializedVC);
  vc._checkCredential({ credential });
  return didUtils.object.encodeJSON(credential);
}

export function decodeCredential(serializedVC: Buffer): VerifiableCredential {
  const credential = didUtils.object.decodeJSON<VerifiableCredential>(serializedVC);
  vc._checkCredential({ credential });
  return credential;
}
