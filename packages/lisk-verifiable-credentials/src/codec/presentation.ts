import * as vc from '@digitalcredentials/vc';
import { VerifiablePresentation } from '../types';
import * as jsonpack from 'jsonpack';
import * as lzma from 'lzma';
import { utils } from 'lisk-sdk';

export function encodePresentation(unserializedVP: VerifiablePresentation): Buffer {
  const presentation = utils.objects.cloneDeep(unserializedVP);
  vc._checkPresentation(presentation);
  return Buffer.from(lzma.compress(jsonpack.pack(presentation), 9));
}

export function decodePresentation(serializedVP: Buffer): VerifiablePresentation {
  const presentation = jsonpack.unpack<VerifiablePresentation>(lzma.decompress(serializedVP));
  vc._checkPresentation(presentation);
  return presentation;
}
