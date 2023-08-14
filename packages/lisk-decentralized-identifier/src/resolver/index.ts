import { MethodContext } from 'lisk-sdk';
import { DidMethod } from '../types';
import * as driverImplementation from './driver';

function createLocalDriver(chainspace: string) {
  return new driverImplementation.LiskLocalDidDriver({ chainspace });
}
function createOnChainDriver(context: MethodContext, method: DidMethod) {
  return new driverImplementation.LiskOnChainDidDriver({ context, method });
}
function createOffChainDriver(param: { ws?: string; ipc?: string }) {
  return new driverImplementation.LiskOffChainDidDriver({ ws: param.ws, ipc: param.ipc });
}

export * from './resolver';
export const driver = { createLocalDriver, createOnChainDriver, createOffChainDriver };
