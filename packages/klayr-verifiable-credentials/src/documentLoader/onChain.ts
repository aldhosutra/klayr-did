import { OnChainLoaderOptions } from './type';
import { createBaseLoader } from './builders/base';
import { DocumentLoader } from '@klayr-did/klayr-decentralized-identifier';

export function buildOnChainDocumentLoader(options?: OnChainLoaderOptions): DocumentLoader {
  const documentLoader = createBaseLoader({ ...options, enableFetch: false });
  return documentLoader.build();
}
