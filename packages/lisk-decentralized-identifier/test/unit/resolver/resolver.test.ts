/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { createChainResolver, createIPCResolver, createResolver, createWSResolver } from '@dist/resolver';
import {
  documentLoader,
  mockedContext,
  mockedCreateIPCClient,
  mockedCreateWSClient,
  mockedDocumentLoader,
  mockedLoader,
  mockedMethod,
  mockedMethodRead,
} from '../../setup/mocks';
import { ipc, senderDID, ws } from '../../setup/constant';

describe('createIPCResolver', () => {
  afterEach(jest.clearAllMocks);

  it('should return correct IPC resolver', async () => {
    const resolver = createIPCResolver(ipc);
    await resolver.get({ did: senderDID });
    expect(mockedCreateIPCClient).toHaveBeenCalled();
  });
});

describe('createWSResolver', () => {
  afterEach(jest.clearAllMocks);

  it('should return correct WS resolver', async () => {
    const resolver = createWSResolver(ws);
    await resolver.get({ did: senderDID });
    expect(mockedCreateWSClient).toHaveBeenCalled();
  });
});

describe('createChainResolver', () => {
  afterEach(jest.clearAllMocks);

  it('should return correct chain resolver', async () => {
    const resolver = createChainResolver(mockedContext as any, mockedMethod as any);
    await resolver.get({ did: senderDID });
    expect(mockedMethodRead).toHaveBeenCalled();
  });
});

describe('createResolver', () => {
  afterEach(jest.clearAllMocks);

  it('should return ipc resolver if supplied with ipc argument', async () => {
    const resolver = createResolver({ ipc });
    await resolver.get({ did: senderDID });
    expect(mockedCreateIPCClient).toHaveBeenCalled();
  });

  it('should return ws resolver if supplied with ws argument', async () => {
    const resolver = createResolver({ ws });
    await resolver.get({ did: senderDID });
    expect(mockedCreateWSClient).toHaveBeenCalled();
  });

  it('should return chain resolver if supplied with context and method argument', async () => {
    const resolver = createResolver({ context: mockedContext as any, method: mockedMethod as any });
    await resolver.get({ did: senderDID });
    expect(mockedMethodRead).toHaveBeenCalled();
  });

  it('should return loader resolver if supplied with loader', async () => {
    const resolver = createResolver({ loader: mockedLoader });
    await resolver.get({ did: senderDID });
    expect(mockedLoader).toHaveBeenCalled();
  });

  it('should return loader resolver if supplied with a VC document loader', async () => {
    const resolver = createResolver({ loader: documentLoader });
    await resolver.get({ did: senderDID });
    expect(mockedDocumentLoader).toHaveBeenCalled();
  });

  it('should throw an error if not specified with any options', async () => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const func = async () => {
      createResolver({});
    };
    await expect(func()).rejects.toThrow();
  });
});
