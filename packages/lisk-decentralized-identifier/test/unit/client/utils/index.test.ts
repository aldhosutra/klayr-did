import { createSignatureChallenge, createTransactionSignature, verifyTransactionSignature } from '@dist/client/utils';
import { PayloadWithSignature } from '@dist/client/utils/types';
import { privateKey, publicKey, senderDID } from '../../../setup/constant';

const createPayload = {
  command: 'create',
  param: {},
};

const addKeysParam: PayloadWithSignature = {
  command: 'addKeys',
  params: {
    target: senderDID,
    signer: senderDID,
    keys: [{ publicKey, relationship: ['assertionMethod'] }],
    nonce: BigInt(1),
  },
};

describe('createSignatureChallenge', () => {
  it('should return valid challenge for a payload', () => {
    const challenge = createSignatureChallenge(addKeysParam);
    expect(challenge).toBe('c64c0b771a273a31409ba5312a7f857e68cc5ce8ec18e77ce7eb2d5b0e5a375e');
  });

  it('should throw an error if command type is create, since no signature can be applied for it', async () => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const func = async () => {
      createSignatureChallenge(createPayload as unknown as PayloadWithSignature);
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('verifyTransactionSignature', () => {
  it('should return true for valid transaction signature', () => {
    const signature = createTransactionSignature(addKeysParam, privateKey);
    const verifyResult = verifyTransactionSignature(addKeysParam, signature, publicKey);
    expect(verifyResult).toBe(true);
  });

  it('should return false for invalid transaction signature', () => {
    const verifyResult = verifyTransactionSignature(addKeysParam, Buffer.alloc(64), publicKey);
    expect(verifyResult).toBe(false);
  });
});
