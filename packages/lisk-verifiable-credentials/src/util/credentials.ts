import { VerifiableCredential } from '../types';
import * as cryptography from '@liskhq/lisk-cryptography';
import { CREDENTIALS_CONTEXT_V1_URL as vcUrl } from 'credentials-context';
import { preprocessRequired } from './util';
import { encodeCredential } from '../codec';

export function preprocessCredentials(credential: VerifiableCredential): void {
  credential['@context'] = preprocessRequired(credential['@context'], vcUrl);
  credential.type = preprocessRequired(credential.type, 'VerifiableCredential');
  if (credential.issuanceDate === undefined) {
    credential.issuanceDate = new Date().toISOString();
  }
  if (credential.id === undefined) {
    credential.id = `urn:sha256:${getCredentialsHash(credential).toString('hex')}`;
  }
}

export function getCredentialsHash(credential: VerifiableCredential): Buffer {
  return cryptography.utils.hash(encodeCredential(credential));
}
