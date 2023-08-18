import { cryptography as didCryptography, DidDocument } from '@lisk-did/lisk-decentralized-identifier';

export async function isSenderTheSignerThatControlsDID(
  targetDIDDocument: DidDocument,
  signerDIDDocument: DidDocument,
  senderPublicKey: Buffer,
) {
  if (targetDIDDocument.controller.includes(signerDIDDocument.id)) {
    const senderRelationshipWithSigner = await didCryptography.method.getVerificationRelationship(signerDIDDocument, {
      publicKey: senderPublicKey,
      relationship: ['authentication'],
    });
    if (senderRelationshipWithSigner.length > 0) {
      return true;
    }
  }
  return false;
}
