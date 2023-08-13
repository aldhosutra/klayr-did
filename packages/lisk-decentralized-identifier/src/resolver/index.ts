import { MethodContext } from 'lisk-sdk';
import { DidMethod } from '../types';

import * as resolver from './resolver';
import * as driverImplementation from './driver';

export function createLocalDriver(chainspace: string) {
  return new driverImplementation.LiskLocalDidDriver({ chainspace });
}
export function createOnChainDriver(context: MethodContext, method: DidMethod) {
  return new driverImplementation.LiskOnChainDidDriver({ context, method });
}
export function createOffChainDriver(param: { ws?: string; ipc?: string }) {
  return new driverImplementation.LiskOffChainDidDriver({ ws: param.ws, ipc: param.ipc });
}

export * from './resolver';

export const driver = { createLocalDriver, createOnChainDriver, createOffChainDriver };
export default { ...resolver, driver };
