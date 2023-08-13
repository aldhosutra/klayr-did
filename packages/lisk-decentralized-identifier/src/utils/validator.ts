import { validator } from 'lisk-sdk';
import { documentStoreSchema } from './schema';
import { DidDocument } from '../types';

export function validateDIDDocument(did: DidDocument) {
  validator.validator.validate(documentStoreSchema, did);
  return true;
}
