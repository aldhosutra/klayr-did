import * as vc from '@digitalcredentials/vc';
import { VerifiableCredential } from '../types';
import * as jsonpack from 'jsonpack';
import * as lzma from 'lzma';
import { utils } from 'lisk-sdk';

export function encodeCredential(unserializedVC: VerifiableCredential): Buffer {
  const credential = utils.objects.cloneDeep(unserializedVC);
  vc._checkCredential({ credential });
  return Buffer.from(lzma.compress(jsonpack.pack(credential), 9));
}

export function decodeCredential(serializedVC: Buffer): VerifiableCredential {
  const credential = jsonpack.unpack<VerifiableCredential>(lzma.decompress(serializedVC));
  vc._checkCredential({ credential });
  return credential;
}
