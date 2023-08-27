/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { encodePresentation, decodePresentation } from '@dist/codec/presentation';
import { presentation, presentationBytes } from '../../setup/constant';

describe('encodePresentation', () => {
  it('should encode presentation to byte successfully', () => {
    const encoded = encodePresentation(presentation);
    expect(Buffer.isBuffer(encoded)).toBe(true);
  });

  it('should encode presentation to byte applied with some sort of compression / encoding', () => {
    const encoded = encodePresentation(presentation);
    expect(encoded.length).toBeLessThan(JSON.stringify(presentation).length);
  });

  it('should throw an error if invalid presentation is submitted', async () => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const func = async () => {
      encodePresentation({ invalid: 'presentation' } as any);
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('decodePresentation', () => {
  it('should decode presentation to vc successfully', () => {
    const decoded = decodePresentation(presentationBytes);
    expect(decoded).toStrictEqual(presentation);
  });

  it('should throw an error if invalid presentation is submitted', async () => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const func = async () => {
      decodePresentation(Buffer.alloc(32));
    };
    await expect(func()).rejects.toThrow();
  });
});
