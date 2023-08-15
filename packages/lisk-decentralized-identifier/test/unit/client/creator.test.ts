import { createIPCClient, createWSClient } from '@dist/client';
import { ipc, ws } from '../../setup/constant';

jest.mock('@dist/client/rpc');

describe('createIPCClient', () => {
  it('should create new DIDClient instance with ipc parameter', () => {
    const client = createIPCClient(ipc);
    expect(client['ipc']).toBe(ipc);
  });
});

describe('createWSClient', () => {
  it('should create new DIDClient instance with ws parameter', () => {
    const client = createWSClient(ws);
    expect(client['ws']).toBe(ws);
  });
});
