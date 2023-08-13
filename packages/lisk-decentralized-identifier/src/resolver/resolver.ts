/* eslint-disable no-nested-ternary */
import { CachedResolver as CachedResolverBuilder } from '@digitalcredentials/did-io';
import { createOffChainDriver, createOnChainDriver } from '.';
import { CreateResolverParam } from '../types';
import { BaseResolver, DidMethod, DocumentLoader } from '../types';
import { MethodContext } from 'lisk-sdk';

export interface ResolverAbstraction {
  get: (url: string) => Promise<any>;
}

export interface CachedResolver {
  use: (driver: any) => void;
  get: ({ did, url }: { did?: string; url?: string }) => Promise<any>;
}

class CachedResolverSingleton {
  private static ipcResolver: CachedResolver;
  private static prevIpc;

  private static wsResolver: CachedResolver;
  private static prevWs;

  public static getIPCInstance(ipc: string) {
    if (this.ipcResolver === undefined || this.prevIpc !== ipc) {
      const didLiskDriver = createOffChainDriver({ ipc });
      this.ipcResolver = new CachedResolverBuilder();
      this.ipcResolver.use(didLiskDriver);
    }
    return this.ipcResolver;
  }

  public static getWSInstance(ws: string) {
    if (this.wsResolver === undefined || this.prevWs !== ws) {
      const didLiskDriver = createOffChainDriver({ ws });
      this.wsResolver = new CachedResolverBuilder();
      this.wsResolver.use(didLiskDriver);
    }
    return this.wsResolver;
  }
}

export function createIPCResolver(ipc: string) {
  return CachedResolverSingleton.getIPCInstance(ipc);
}

export function createWSResolver(ws: string) {
  return CachedResolverSingleton.getWSInstance(ws);
}

export function createChainResolver(context: MethodContext, method: DidMethod): CachedResolver {
  const driver = createOnChainDriver(context, method);
  const resolver: CachedResolver = {
    get: driver.get as CachedResolver['get'],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    use: () => {},
  };
  return resolver;
}

export function createResolver(options: CreateResolverParam): ResolverAbstraction {
  let resolver: BaseResolver | DocumentLoader | undefined;

  if (options.resolver) resolver = options.resolver;
  if (options.ipc) resolver = createIPCResolver(options.ipc);
  if (options.ws) resolver = createWSResolver(options.ws);
  if (options.context && options.method) resolver = createChainResolver(options.context, options.method);

  if (resolver === undefined) {
    throw new Error('Unexpected Error: resolver is undefined');
  }

  const ret: ResolverAbstraction = {
    get: () => {
      throw new Error('resolver not implemented correctly');
    },
  };

  if ('get' in resolver) {
    ret.get = async (url: string) => await (resolver as BaseResolver).get({ url });
  } else {
    ret.get = async (url: string) => await (resolver as DocumentLoader)(url);
  }

  return ret;
}
