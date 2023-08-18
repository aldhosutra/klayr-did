import {
  cryptography as didCryptography,
  DidDocument,
  PayloadWithSignature,
} from '@lisk-did/lisk-decentralized-identifier';

export async function isSignerTheTargetDIDController(
  targetDIDDocument: DidDocument,
  signerDIDDocument: DidDocument,
  data: PayloadWithSignature,
  challenge: string,
) {
  if (targetDIDDocument.controller.includes(data.params.signer)) {
    const signerRelationshipWithSigner = await didCryptography.method.getVerificationRelationship(signerDIDDocument, {
      signature: data.params.signature,
      challenge,
      relationship: ['authentication'],
    });
    if (signerRelationshipWithSigner.length > 0) {
      return true;
    }
  }
  return false;
}
