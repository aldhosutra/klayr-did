import { extendContextLoader } from 'jsonld-signatures';
import { ClientOptions, IJsonLdDocumentLoader } from './type';
import { baseLoader } from './base';

export function createLocalDocumentLoader(param?: ClientOptions): IJsonLdDocumentLoader {
  const documentLoader = extendContextLoader(async (url: string) => {
    if (param !== undefined && param.loader !== undefined) {
      let context;
      context = 'get' in param.loader ? param.loader.get({ url }) : param.loader(url);
      if (context !== undefined) {
        return {
          contextUrl: undefined,
          documentUrl: url,
          document: context,
        };
      }
    }
    return await baseLoader(url, { ...param, enableFetch: false });
  });
  return documentLoader;
}
