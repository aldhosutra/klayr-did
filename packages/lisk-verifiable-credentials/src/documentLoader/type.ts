import { BaseResolver, DidMethod, DocumentLoader } from '@lisk-did/lisk-decentralized-identifier';
import { MethodContext } from 'lisk-sdk';

export declare class IJsonLdDocumentLoader {
  addStatic: (contextUrl: string, context: any) => void;
  setDidResolver: any;
  setProtocolHandler: any;
  documentLoader: any;
  build: () => DocumentLoader;
}

export interface DocumentLoaderParam {
  ipc?: string;
  ws?: string;
  context?: MethodContext;
  method?: DidMethod;
  enableFetch: boolean;
}

export interface ClientOptions {
  loader?: DocumentLoader;
  resolver?: BaseResolver;
  context?: MethodContext;
  method?: DidMethod;
  ipc?: string;
  ws?: string;
}
