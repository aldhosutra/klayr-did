import { cryptography as didCryptography, DidDocument } from '@lisk-did/lisk-decentralized-identifier';

export async function isSenderHaveCapabilityInvocation(targetDIDDocument: DidDocument, senderPublicKey: Buffer) {
  const senderRelationshipWithTarget = await didCryptography.method.getVerificationRelationship(targetDIDDocument, {
    publicKey: senderPublicKey,
    relationship: ['capabilityInvocation'],
  });
  if (senderRelationshipWithTarget.length > 0) {
    return true;
  }
  return false;
}
