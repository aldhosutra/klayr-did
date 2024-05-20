import { RemoveServiceEndpointParam } from '@klayr-did/klayr-decentralized-identifier';
import { MethodContext } from 'klayr-sdk';
import { DocumentStore, documentStoreKey } from '../stores/document';
import { NonceStore, nonceStoreKey } from '../stores/nonce';

export async function executeRemoveServiceEndpointCommand(
  _context: MethodContext,
  documentSubstore: DocumentStore,
  nonceSubstore: NonceStore,
  params: RemoveServiceEndpointParam,
): Promise<boolean> {
  const targetDIDDocument = await documentSubstore.get(_context, documentStoreKey(params.target));

  const index = targetDIDDocument.service.findIndex(t => t.id === params.endpointId);
  if (index > -1) {
    targetDIDDocument.service.splice(index, 1);
  }

  await documentSubstore.set(_context, documentStoreKey(params.target), targetDIDDocument);

  if (params.signature.length > 0) {
    const nonce = await nonceSubstore.get(_context, nonceStoreKey(params.signer));
    nonce.nonce += BigInt(1);
    await nonceSubstore.set(_context, nonceStoreKey(params.signer), nonce);
  }

  return true;
}
