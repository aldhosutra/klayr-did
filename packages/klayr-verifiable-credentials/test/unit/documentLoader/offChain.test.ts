/* eslint-disable @typescript-eslint/await-thenable */
import { issueCredential } from '@dist/credentials';
import { buildOffChainDocumentLoader } from '@dist/documentLoader/offChain';
import { credential, ipc, privateKey } from '../../setup/constant';
import { mockedCreateIPCClient, mockedFetch } from '../../setup/mocks';

describe('buildOffChainDocumentLoader', () => {
  afterEach(jest.clearAllMocks);

  it('should call a fetch method', async () => {
    const loader = buildOffChainDocumentLoader();
    await issueCredential(credential, privateKey, { loader, ipc });
    await loader('https://example.com');
    expect(mockedFetch).toHaveBeenCalledTimes(1);
    expect(mockedCreateIPCClient).toHaveBeenCalled();
  });
});
