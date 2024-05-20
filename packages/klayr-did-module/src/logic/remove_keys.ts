import { cryptography as didCryptography, RemoveKeysParam, utils } from '@klayr-did/klayr-decentralized-identifier';
import { MethodContext } from 'klayr-sdk';
import { DocumentStore, documentStoreKey } from '../stores/document';
import { NonceStore, nonceStoreKey } from '../stores/nonce';

export async function executeRemoveKeysCommand(
  _context: MethodContext,
  documentSubstore: DocumentStore,
  nonceSubstore: NonceStore,
  params: RemoveKeysParam,
): Promise<boolean> {
  const targetDIDDocument = await documentSubstore.get(_context, documentStoreKey(params.target));
  for (const key of params.publicKeys) {
    const index = targetDIDDocument.verificationMethod.findIndex(
      t => t.publicKeyMultibase === didCryptography.codec.encodePublicKey(key),
    );
    if (index !== -1) {
      const keyId = targetDIDDocument.verificationMethod[index].id;
      const publicKeyMultibase = targetDIDDocument.verificationMethod[index].publicKeyMultibase;
      const x25519Key = (await didCryptography.key.createX25519KeyPair({ publicKeyMultibase })).publicKeyMultibase;
      targetDIDDocument.verificationMethod.splice(index, 1);
      targetDIDDocument.authentication = targetDIDDocument.authentication.filter(t => t !== keyId);
      targetDIDDocument.assertionMethod = targetDIDDocument.assertionMethod.filter(t => t !== keyId);
      targetDIDDocument.capabilityInvocation = targetDIDDocument.capabilityInvocation.filter(t => t !== keyId);
      targetDIDDocument.keyAgreement = targetDIDDocument.keyAgreement.filter(t => t.publicKeyMultibase !== x25519Key);
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
