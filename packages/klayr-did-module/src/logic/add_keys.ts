import {
  cryptography as didCryptography,
  VerificationMethod,
  AddKeysParam,
  utils,
} from '@klayr-did/klayr-decentralized-identifier';
import { MethodContext } from 'klayr-sdk';
import { DocumentStore, documentStoreKey } from '../stores/document';
import { NonceStore, nonceStoreKey } from '../stores/nonce';

export async function executeAddKeysCommand(
  _context: MethodContext,
  documentSubstore: DocumentStore,
  nonceSubstore: NonceStore,
  params: AddKeysParam,
): Promise<boolean> {
  const targetDIDDocument = await documentSubstore.get(_context, documentStoreKey(params.target));
  for (const key of params.keys) {
    const keyPair = {
      controller: targetDIDDocument.id,
      publicKeyMultibase: didCryptography.codec.encodePublicKey(key.publicKey),
    };

    const { id, controller, type, publicKeyMultibase } = (await didCryptography.key.createEd25519KeyPair(
      keyPair,
    )) as VerificationMethod;

    const verificationIndex = targetDIDDocument.verificationMethod.findIndex(t => t.id === id);
    if (verificationIndex === -1) {
      targetDIDDocument.verificationMethod.push({ id, controller, type, publicKeyMultibase });
      const contextIndex = targetDIDDocument['@context'].findIndex(
        t => t === utils.constant.ED25519_VERIFICATION_KEY_2020_CONTEXT,
      );
      if (contextIndex === -1) targetDIDDocument['@context'].push(utils.contextsBySuite.get(type));
    }

    for (const relationship of key.relationship) {
      if (relationship === 'keyAgreement') {
        const keyAgreement = await didCryptography.key.createX25519KeyPair(keyPair);
        const keyIndex = targetDIDDocument.keyAgreement.findIndex(t => t.id === keyAgreement.id);
        if (keyIndex === -1) {
          targetDIDDocument.keyAgreement.push({
            id: keyAgreement.id!,
            controller: keyAgreement.controller!,
            type: keyAgreement.type!,
            publicKeyMultibase: keyAgreement.publicKeyMultibase,
          });
        }
        const contextKeyIndex = targetDIDDocument['@context'].findIndex(
          t => t === utils.constant.X25519_KEY_AGREEMENT_KEY_2020_CONTEXT,
        );
        if (contextKeyIndex === -1) targetDIDDocument['@context'].push(utils.contextsBySuite.get(keyAgreement.type!));
      } else if (!targetDIDDocument[relationship].includes(id)) {
        targetDIDDocument[relationship].push(id);
      }
    }
  }

  await documentSubstore.set(_context, documentStoreKey(params.target), targetDIDDocument);

  if (params.signature.length > 0) {
    const nonce = await nonceSubstore.get(_context, nonceStoreKey(params.signer));
    nonce.nonce += BigInt(1);
    await nonceSubstore.set(_context, nonceStoreKey(params.signer), nonce);
  }

  return true;
}
