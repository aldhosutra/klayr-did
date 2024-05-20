import {
  cryptography as didCryptography,
  RemoveControllersParam,
  utils,
} from '@klayr-did/klayr-decentralized-identifier';
import { MethodContext } from 'klayr-sdk';
import { DocumentStore, documentStoreKey } from '../stores/document';
import { NonceStore, nonceStoreKey } from '../stores/nonce';

export async function executeRemoveControllersCommand(
  _context: MethodContext,
  documentSubstore: DocumentStore,
  nonceSubstore: NonceStore,
  params: RemoveControllersParam,
): Promise<boolean> {
  const targetDIDDocument = await documentSubstore.get(_context, documentStoreKey(params.target));
  for (const controller of params.controllers) {
    const index = targetDIDDocument.controller.findIndex(t => t === controller);
    if (index > -1) {
      if (targetDIDDocument.controller.length === 1) {
        throw new Error("removing all controller will deactivate the DID, please use 'deactivate' command instead");
      }
      targetDIDDocument.controller.splice(index, 1);
      for (let i = targetDIDDocument.verificationMethod.length - 1; i >= 0; i--) {
        if (targetDIDDocument.verificationMethod[i].controller === controller) {
          const removedKeyId = targetDIDDocument.verificationMethod[i].id;
          const publicKeyMultibase = targetDIDDocument.verificationMethod[i].publicKeyMultibase;
          const x25519Key = (await didCryptography.key.createX25519KeyPair({ publicKeyMultibase })).publicKeyMultibase;

          targetDIDDocument.verificationMethod.splice(i, 1);
          targetDIDDocument.authentication = targetDIDDocument.authentication.filter(t => t !== removedKeyId);
          targetDIDDocument.assertionMethod = targetDIDDocument.assertionMethod.filter(t => t !== removedKeyId);
          targetDIDDocument.capabilityInvocation = targetDIDDocument.capabilityInvocation.filter(
            t => t !== removedKeyId,
          );
          targetDIDDocument.keyAgreement = targetDIDDocument.keyAgreement.filter(
            t => t.publicKeyMultibase !== x25519Key,
          );
        }
      }
    }
  }

  if (
    targetDIDDocument.verificationMethod.filter(t => t.type === utils.constant.ED25519_VERIFICATION_KEY_2020_TYPE)
      .length === 0
  ) {
    targetDIDDocument['@context'] = targetDIDDocument['@context'].filter(
      t => t !== utils.constant.ED25519_VERIFICATION_KEY_2020_CONTEXT,
    );
  }

  if (
    targetDIDDocument.keyAgreement.filter(t => t.type === utils.constant.X25519_KEY_AGREEMENT_KEY_2020_TYPE).length ===
    0
  ) {
    targetDIDDocument['@context'] = targetDIDDocument['@context'].filter(
      t => t !== utils.constant.X25519_KEY_AGREEMENT_KEY_2020_CONTEXT,
    );
  }

  await documentSubstore.set(_context, documentStoreKey(params.target), targetDIDDocument);

  if (params.signature.length > 0) {
    const nonce = await nonceSubstore.get(_context, nonceStoreKey(params.signer));
    nonce.nonce += BigInt(1);
    await nonceSubstore.set(_context, nonceStoreKey(params.signer), nonce);
  }

  return true;
}
