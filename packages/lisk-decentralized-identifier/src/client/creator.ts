import { DIDClient } from './rpc';

export function createIPCClient(ipc: string) {
  return new DIDClient({ ipc });
}

export function createWSClient(ws: string) {
  return new DIDClient({ ws });
}
