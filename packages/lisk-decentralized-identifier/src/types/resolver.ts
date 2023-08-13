import { MethodContext } from 'lisk-sdk';
import { DidDocument } from './did';
import { DidMethod } from './method';

export declare interface DocumentLoaderResult {
  contextUrl?: string;
  documentUrl?: string;
  document: any;
}

export interface BaseResolver {
  get: ({ did, url }: { did?: string; url?: string }) => Promise<DidDocument>;
}
export type DocumentLoader = (url: string) => Promise<DocumentLoaderResult>;

export type CreateResolverParam = {
  resolver?: BaseResolver | DocumentLoader;
  ipc?: string;
  ws?: string;
  context?: MethodContext;
  method?: DidMethod;
};
