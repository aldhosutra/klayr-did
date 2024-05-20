/* eslint-disable @typescript-eslint/await-thenable */
import { buildOnChainDocumentLoader } from '@dist/documentLoader/onChain';
import { issueCredential } from '@dist/credentials';
import { credential, privateKey } from '../../setup/constant';
import { mockedContext, mockedFetch, mockedMethod } from '../../setup/mocks';

describe('buildOnChainDocumentLoader', () => {
  afterEach(jest.clearAllMocks);

  it('should not call a fetch method, and since its offline, an error should be throws', async () => {
    const func = async () => {
      const loader = buildOnChainDocumentLoader();
      await issueCredential(credential, privateKey, {
        loader,
        context: mockedContext as any,
        method: mockedMethod as any,
      });
      await loader('https://example.com');
    };
    await expect(func()).rejects.toThrow();
    expect(mockedFetch).toHaveBeenCalledTimes(0);
  });
});
