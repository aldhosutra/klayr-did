import { DeactivateParam, utils } from '@klayr-did/klayr-decentralized-identifier';
import { MethodContext } from 'klayr-sdk';
import { DocumentStore, documentStoreKey } from '../stores/document';
import { NonceStore, nonceStoreKey } from '../stores/nonce';

export async function executeDeactivateCommand(
  _context: MethodContext,
  documentSubstore: DocumentStore,
  nonceSubstore: NonceStore,
  params: DeactivateParam,
): Promise<boolean> {
  const targetDIDDocument = await documentSubstore.get(_context, documentStoreKey(params.target));

  targetDIDDocument['@context'] = [utils.constant.DID_CONTEXT_URL];
  targetDIDDocument.controller = [];
  targetDIDDocument.verificationMethod = [];
  targetDIDDocument.authentication = [];
  targetDIDDocument.assertionMethod = [];
  targetDIDDocument.capabilityInvocation = [];
  targetDIDDocument.keyAgreement = [];

  await documentSubstore.set(_context, documentStoreKey(params.target), targetDIDDocument);

  if (params.signature.length > 0) {
    const nonce = await nonceSubstore.get(_context, nonceStoreKey(params.signer));
    nonce.nonce += BigInt(1);
    await nonceSubstore.set(_context, nonceStoreKey(params.signer), nonce);
  }

  return true;
}
