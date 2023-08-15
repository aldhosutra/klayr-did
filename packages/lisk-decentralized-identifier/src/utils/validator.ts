import { validator } from 'lisk-sdk';
import { documentStoreSchema } from './schema';
import { DidDocument } from '../types';

export function validateDIDDocument(did: DidDocument) {
  try {
    validator.validator.validate(documentStoreSchema, atContextToContext(did));
    return true;
  } catch {
    return false;
  }
}

const atContextToContext = (doc: DidDocument) => {
  const restDoc: Omit<DidDocument, '@context'> & { context: string[]; '@context'?: string[] } = {
    ...doc,
    context: doc['@context'],
  };
  delete restDoc['@context'];
  return restDoc;
};
