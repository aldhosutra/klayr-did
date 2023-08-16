/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { encodeCredential, decodeCredential } from '@dist/codec/credentials';
import { credential, credentialBytes } from '../../setup/constant';

describe('encodeCredential', () => {
  it('should encode credential to byte successfully', () => {
    const encoded = encodeCredential(credential);
    expect(encoded).toStrictEqual(credentialBytes);
  });

  it('should throw an error if invalid credential is submitted', async () => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const func = async () => {
      encodeCredential({ invalid: 'credential' } as any);
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('decodeCredential', () => {
  it('should decode credential to vc successfully', () => {
    const decoded = decodeCredential(credentialBytes);
    expect(decoded).toStrictEqual(credential);
  });

  it('should throw an error if invalid credential is submitted', async () => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const func = async () => {
      decodeCredential(Buffer.alloc(32));
    };
    await expect(func()).rejects.toThrow();
  });
});
