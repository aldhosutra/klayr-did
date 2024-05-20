import * as vc from '@digitalcredentials/vc';
import { VerifiablePresentation } from '../types';
import { utils as didUtils } from '@klayr-did/klayr-decentralized-identifier';
import { utils } from 'klayr-sdk';

export function encodePresentation(unserializedVP: VerifiablePresentation): Buffer {
  const presentation = utils.objects.cloneDeep(unserializedVP);
  vc._checkPresentation(presentation);
  return didUtils.object.encodeJSON(presentation);
}

export function decodePresentation(serializedVP: Buffer): VerifiablePresentation {
  const presentation = didUtils.object.decodeJSON<VerifiablePresentation>(serializedVP);
  vc._checkPresentation(presentation);
  return presentation;
}
