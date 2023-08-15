import { codec, cryptography } from 'lisk-sdk';
import { PayloadWithSignature } from './types';
import { signatureMessageBuilder, signatureSchemaBuilder } from './helper';

export function createSignatureChallenge(payload: PayloadWithSignature) {
  const payloadBuffer = codec.encode(signatureSchemaBuilder(payload), signatureMessageBuilder(payload));
  return cryptography.ed.digestMessage(payloadBuffer.toString('hex')).toString('hex');
}

export function createTransactionSignature(payload: PayloadWithSignature, privateKey: Buffer) {
  const result = cryptography.ed.signMessageWithPrivateKey(createSignatureChallenge(payload), privateKey);
  return result.signature;
}

export function verifyTransactionSignature(payload: PayloadWithSignature, signature: Buffer, publicKey: Buffer) {
  const verificationResult = cryptography.ed.verifyMessageWithPublicKey({
    message: createSignatureChallenge(payload),
    signature,
    publicKey,
  });
  return verificationResult;
}
