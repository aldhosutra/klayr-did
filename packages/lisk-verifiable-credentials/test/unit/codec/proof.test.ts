/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { decodeProof, encodeProof } from '@dist/codec/proof';
import { credentialProof, credentialProofBytes } from '../../setup/constant';

describe('encodeProof', () => {
  // eslint-disable-next-line @typescript-eslint/require-await
  it('should encode proof to valid bytes', async () => {
    const encoded = encodeProof(credentialProof);
    expect(encoded).toStrictEqual(credentialProofBytes);
  });

  it('should throw an error if invalid proof is submitted', async () => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const func = async () => {
      encodeProof({ invalid: 'proof' } as any);
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('decodeProof', () => {
  // eslint-disable-next-line @typescript-eslint/require-await
  it('should decode proof to valid bytes', async () => {
    const decoded = decodeProof(credentialProofBytes);
    expect(decoded).toStrictEqual(credentialProof);
  });

  it('should throw an error if invalid proof is submitted', async () => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const func = async () => {
      decodeProof({ invalid: 'proof' } as any);
    };
    await expect(func()).rejects.toThrow();
  });
});
