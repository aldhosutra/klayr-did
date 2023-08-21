/* eslint-disable no-nested-ternary */
import { CachedResolver as CachedResolverBuilder } from '@digitalcredentials/did-io';
import * as didResolver from '.';
import { BaseLoader, CreateResolverParam } from '../types';
import { BaseResolver, DidMethod, DocumentLoader } from '../types';
import { MethodContext } from 'lisk-sdk';
import { LISK_DID_METHOD_NAME } from '../utils/constant';

export interface CachedResolver {
  method?: typeof LISK_DID_METHOD_NAME;
  use?: (driver: any) => void;
  get: ({ did, url }: { did?: string; url?: string }) => Promise<any>;
}

class CachedResolverSingleton {
  private static ipcResolver: CachedResolver;
  private static prevIpc;

  private static wsResolver: CachedResolver;
  private static prevWs;

  public static getIPCInstance(ipc: string) {
    if (this.ipcResolver === undefined || this.prevIpc !== ipc) {
      const didLiskDriver = didResolver.driver.createOffChainDriver({ ipc });
      this.ipcResolver = new CachedResolverBuilder();
      this.ipcResolver.use!(didLiskDriver);
      this.ipcResolver.method = LISK_DID_METHOD_NAME;
    }
    return this.ipcResolver;
  }

  public static getWSInstance(ws: string) {
    if (this.wsResolver === undefined || this.prevWs !== ws) {
      const didLiskDriver = didResolver.driver.createOffChainDriver({ ws });
      this.wsResolver = new CachedResolverBuilder();
      this.wsResolver.use!(didLiskDriver);
      this.wsResolver.method = LISK_DID_METHOD_NAME;
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
  const driver = didResolver.driver.createOnChainDriver(context, method) as unknown as CachedResolver;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  driver.use = () => {};
  return driver;
}

export function createResolver(options: CreateResolverParam): CachedResolver {
  let resolver: BaseResolver | undefined;
  let loader: DocumentLoader | BaseLoader | undefined;

  if (options.resolver) resolver = options.resolver;
  if (options.loader) loader = options.loader;
  if (options.ipc) resolver = createIPCResolver(options.ipc);
  if (options.ws) resolver = createWSResolver(options.ws);
  if (options.context && options.method) resolver = createChainResolver(options.context, options.method);

  if (resolver === undefined && loader === undefined) {
    throw new Error('Unexpected Error: insufficient options!');
  }

  const ret: CachedResolver | object = { method: LISK_DID_METHOD_NAME };

  if (loader) {
    (ret as CachedResolver).get = async ({ did, url }) => {
      const didOrUrl = did || url;
      const res = await (loader as DocumentLoader | BaseLoader)(didOrUrl!);
      if (res !== undefined && 'document' in res) return res.document;
      else return res;
    };
  }

  if (resolver) {
    (ret as CachedResolver).get = async ({ did, url }) => await (resolver as BaseResolver).get({ did, url });
  }

  return ret as CachedResolver;
}
