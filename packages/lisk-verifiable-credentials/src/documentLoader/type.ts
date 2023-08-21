import { BaseResolver, DidMethod, DocumentLoader } from '@lisk-did/lisk-decentralized-identifier';
import { MethodContext } from 'lisk-sdk';

export interface ClientOptions {
  loader?: DocumentLoader;
  resolver?: BaseResolver;
  context?: MethodContext;
  method?: DidMethod;
  ipc?: string;
  ws?: string;
}

export type DocumentLoaderParam = ClientOptions & {
  enableFetch?: boolean;
};

export type OnChainLoaderOptions = Exclude<ClientOptions, 'ipc' | 'ws'>;

export type OffChainLoaderOptions = Exclude<ClientOptions, 'context' | 'method'>;

export type BaseDocumentResolver = {
  get: ({ did, url }: { did?: string; url?: string }) => Promise<Record<string, any>>;
};
