import { AddServiceEndpointParam } from '@lisk-did/lisk-decentralized-identifier';
import { MethodContext } from 'lisk-sdk';
import { DocumentStore, documentStoreKey } from '../stores/document';
import { NonceStore, nonceStoreKey } from '../stores/nonce';

export async function executeAddServiceEndpointCommand(
  _context: MethodContext,
  documentSubstore: DocumentStore,
  nonceSubstore: NonceStore,
  params: AddServiceEndpointParam,
): Promise<boolean> {
  const targetDIDDocument = await documentSubstore.get(_context, documentStoreKey(params.target));
  const index = targetDIDDocument.service.findIndex(t => t.id === params.endpoint.id);
  if (index === -1) targetDIDDocument.service.push({ ...params.endpoint });

  await documentSubstore.set(_context, documentStoreKey(params.target), targetDIDDocument);

  if (params.signature.length > 0) {
    const nonce = await nonceSubstore.get(_context, nonceStoreKey(params.signer));
    nonce.nonce += BigInt(1);
    await nonceSubstore.set(_context, nonceStoreKey(params.signer), nonce);
  }

  return true;
}
