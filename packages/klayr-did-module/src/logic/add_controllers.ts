import { AddControllersParam } from '@klayr-did/klayr-decentralized-identifier';
import { MethodContext } from 'klayr-sdk';
import { DocumentStore, documentStoreKey } from '../stores/document';
import { NonceStore, nonceStoreKey } from '../stores/nonce';

export async function executeAddControllersCommand(
  _context: MethodContext,
  documentSubstore: DocumentStore,
  nonceSubstore: NonceStore,
  params: AddControllersParam,
): Promise<boolean> {
  const targetDIDDocument = await documentSubstore.get(_context, documentStoreKey(params.target));

  for (const controller of params.controllers) {
    const controllerDIDExist = await documentSubstore.has(_context, documentStoreKey(controller));
    if (!controllerDIDExist) throw new Error(`${controller} don't have any DID document record`);
    const index = targetDIDDocument.controller.findIndex(t => t === controller);
    if (index === -1) targetDIDDocument.controller.push(controller);
  }

  await documentSubstore.set(_context, documentStoreKey(params.target), targetDIDDocument);

  if (params.signature.length > 0) {
    const nonce = await nonceSubstore.get(_context, nonceStoreKey(params.signer));
    nonce.nonce += BigInt(1);
    await nonceSubstore.set(_context, nonceStoreKey(params.signer), nonce);
  }

  return true;
}
