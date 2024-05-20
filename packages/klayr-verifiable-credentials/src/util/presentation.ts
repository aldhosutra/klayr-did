import { VerifiablePresentation } from '../types';
import { CREDENTIALS_CONTEXT_V1_URL as vcUrl } from 'credentials-context';
import { preprocessRequired } from './util';
import * as cryptography from '@klayr/cryptography';
import { encodePresentation } from '../codec';

export function preprocessPresentation(presentation: VerifiablePresentation): void {
  presentation['@context'] = preprocessRequired(presentation['@context'], vcUrl);
  presentation.type = preprocessRequired(presentation.type, 'VerifiablePresentation');
  if (presentation.id === undefined) {
    presentation.id = `urn:sha256:${getPresentationsHash(presentation).toString('hex')}`;
  }
}

export function getPresentationsHash(presentation: VerifiablePresentation): Buffer {
  return cryptography.utils.hash(encodePresentation(presentation));
}
