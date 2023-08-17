import { MethodContext } from 'lisk-sdk';
import { DidDocument } from './did';
import { DidMethod } from './method';

export declare interface DocumentLoaderResult {
  contextUrl: string | null;
  document: Record<string, any>;
  documentUrl: string;
  tag?: string;
}

export interface BaseResolver {
  get: ({ did, url }: { did?: string; url?: string }) => Promise<DidDocument>;
}

export type DocumentLoader = (url: string) => Promise<DocumentLoaderResult>;

export type BaseLoader = (url: string) => Promise<Record<string, any>>;

export type CreateResolverParam = {
  loader?: BaseLoader | DocumentLoader;
  resolver?: BaseResolver;
  ipc?: string;
  ws?: string;
  context?: MethodContext;
  method?: DidMethod;
};
