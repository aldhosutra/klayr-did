import * as vc from '@digitalcredentials/vc';
import { VerifiablePresentation } from '../types';

export function encodePresentation(unserializedVP: VerifiablePresentation): Buffer {
  const presentation = { ...unserializedVP };
  vc._checkPresentation(presentation);
  return Buffer.from(JSON.stringify(presentation, null, 0), 'utf8');
}

export function decodePresentation(serializedVP: Buffer): VerifiablePresentation {
  const presentation = JSON.parse(serializedVP.toString('utf8'));
  vc._checkPresentation(presentation);
  return presentation;
}
