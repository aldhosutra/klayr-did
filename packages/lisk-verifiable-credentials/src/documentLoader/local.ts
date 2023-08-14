import { extendContextLoader } from 'jsonld-signatures';
import { ClientOptions, IJsonLdDocumentLoader } from './type';
import { baseLoader } from './base';
import { DocumentLoaderResult } from '@lisk-did/lisk-decentralized-identifier';

export function createLocalDocumentLoader(param?: ClientOptions): IJsonLdDocumentLoader {
  const documentLoader = extendContextLoader(async (url: string) => {
    if (param !== undefined && param.resolver !== undefined) {
      let context;
      context = await param.resolver.get({ url });
      if (context !== undefined) {
        return {
          contextUrl: undefined,
          documentUrl: url,
          document: context,
        };
      }
    }

    if (param !== undefined && param.loader !== undefined) {
      let context: DocumentLoaderResult;
      context = await param.loader(url);
      if (context !== undefined) {
        return context;
      }
    }

    return await baseLoader(url, { ...param, enableFetch: false });
  });
  return documentLoader;
}
