import { signatureMessageBuilder } from '@dist/client/utils/helper';

describe('signatureMessageBuilder', () => {
  it('throw an error if nonce is not provided', async () => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const func = async () => {
      signatureMessageBuilder({ params: { nonce: undefined } });
    };
    await expect(func()).rejects.toThrow();
  });
});
