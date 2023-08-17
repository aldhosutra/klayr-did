/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-var-requires */
import { createBaseLoader } from '@dist/documentLoader/builders';
import {
  mockedContext,
  mockedCreateIPCClient,
  mockedFetch,
  mockedLoader,
  mockedMethod,
  mockedMethodRead,
  mockedResolver,
} from '../../../setup/mocks';
import { ipc, issuerDID } from '../../../setup/constant';

const httpClientHandler = require('../../../../dist/documentLoader/builders/base.js').__get__('httpClientHandler');

describe('createBaseLoader', () => {
  afterEach(jest.clearAllMocks);

  it('should throw an error if loader is adding an invalid string', async () => {
    const func = async () => {
      const loader = createBaseLoader({ resolver: mockedResolver, enableFetch: false });
      loader.addStatic(1 as any, { valid: 'document' });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if loader is adding an invalid static document', async () => {
    const func = async () => {
      const loader = createBaseLoader({ resolver: mockedResolver, enableFetch: false });
      loader.addStatic('validKey', 'invalidDocument' as any);
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if documentLoader is called using other than string', async () => {
    const func = async () => {
      const loader = createBaseLoader({ resolver: mockedResolver, enableFetch: false }).build();
      await loader(1 as any);
    };
    await expect(func()).rejects.toThrow();
  });

  it('should call the provided resolver, and since its offline, an error should be throws', async () => {
    const func = async () => {
      const loader = createBaseLoader({ resolver: mockedResolver, enableFetch: false }).build();
      await loader('https://example.com');
    };
    await expect(func()).rejects.toThrow();
    expect(mockedResolver.get).toHaveBeenCalled();
  });

  it('should call the provided loader, and since its offline, an error should be throws', async () => {
    const func = async () => {
      const loader = createBaseLoader({ loader: mockedLoader, enableFetch: false }).build();
      await loader('https://example.com');
    };
    await expect(func()).rejects.toThrow();
    expect(mockedLoader).toHaveBeenCalled();
  });

  it('should call the provided ipc', async () => {
    const loader = createBaseLoader({ ipc }).build();
    await loader(issuerDID);
    expect(mockedCreateIPCClient).toHaveBeenCalled();
  });

  it('should call fetch method for default config', async () => {
    const loader = createBaseLoader({ ipc }).build();
    await loader('https://example.com');
    expect(mockedFetch).toHaveBeenCalled();
  });

  it('should call the provided chain method', async () => {
    const loader = createBaseLoader({ context: mockedContext as any, method: mockedMethod as any }).build();
    await loader(issuerDID);
    expect(mockedMethodRead).toHaveBeenCalled();
  });
});

describe('httpClientHandler', () => {
  it('should throw an error if http client is supplied with invalid url protocol', async () => {
    const func = async () => {
      await httpClientHandler.get({ url: 'invalid://url' });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error in case fetch is failed', async () => {
    const func = async () => {
      await httpClientHandler.get({ url: 'https://throw.error' });
    };
    await expect(func()).rejects.toThrow();
    expect(mockedFetch).toHaveBeenCalled();
  });
});
