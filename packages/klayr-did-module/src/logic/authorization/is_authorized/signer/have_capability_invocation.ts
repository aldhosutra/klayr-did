import {
  cryptography as didCryptography,
  DidDocument,
  PayloadWithSignature,
} from '@klayr-did/klayr-decentralized-identifier';

export async function isSignerHaveCapabilityInvocation(
  targetDIDDocument: DidDocument,
  data: PayloadWithSignature,
  challenge: string,
) {
  const signerRelationshipWithTarget = await didCryptography.method.getVerificationRelationship(targetDIDDocument, {
    signature: data.params.signature,
    challenge,
    relationship: ['capabilityInvocation'],
  });
  if (signerRelationshipWithTarget.length > 0) {
    return true;
  }
  return false;
}
