import { MethodContext } from 'klayr-sdk';
import { DidMethod } from '../types';
import * as driverImplementation from './driver';

function createLocalDriver(chainspace: string) {
  return new driverImplementation.KlayrLocalDidDriver({ chainspace });
}
function createOnChainDriver(context: MethodContext, method: DidMethod) {
  return new driverImplementation.KlayrOnChainDidDriver({ context, method });
}
function createOffChainDriver(param: { ws?: string; ipc?: string }) {
  return new driverImplementation.KlayrOffChainDidDriver({ ws: param.ws, ipc: param.ipc });
}

export * from './resolver';
export const driver = { createLocalDriver, createOnChainDriver, createOffChainDriver };
