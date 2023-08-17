import { OffChainLoaderOptions } from './type';
import { createBaseLoader } from './builders/base';
import { DocumentLoader } from '@lisk-did/lisk-decentralized-identifier';

export function buildOffChainDocumentLoader(options?: OffChainLoaderOptions): DocumentLoader {
  const documentLoader = createBaseLoader({ ...options, enableFetch: true });
  return documentLoader.build();
}
