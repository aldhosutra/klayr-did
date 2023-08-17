import { CREDENTIALS_EXAMPLE_CONTEXT_V1_URL, ODRL_URL, OPEN_BADGES_V2_URL } from './constants';
import credentialsExampleContext from './contexts/vc-examples-v1';
import odrlContext from './contexts/odrl';
import openBadgesv2Context from './contexts/open-badges-v2p0';
import * as dccContext from '@digitalcredentials/dcc-context';
import * as didContext from 'did-context';
import * as ed25519 from 'ed25519-signature-2020-context';
import * as x25519 from 'x25519-key-agreement-2020-context';
import * as credentialsContext from 'credentials-context';
import * as vcStatusListContext from '@digitalbazaar/vc-status-list-context';
import * as obContext from '@digitalcredentials/open-badges-context';
import { JsonLdDocumentLoader } from './jsonld-document-loader';
import * as HtmlEntities from 'html-entities';
import { DocumentLoaderParam } from '../type';
import { resolver } from '@lisk-did/lisk-decentralized-identifier';

export function createBaseLoader(param: DocumentLoaderParam = {}): JsonLdDocumentLoader {
  const loader = new JsonLdDocumentLoader();
  const enableFetch = param.enableFetch ?? true;

  loader.addStatic(
    credentialsContext.CREDENTIALS_CONTEXT_V1_URL,
    credentialsContext.contexts.get(credentialsContext.CREDENTIALS_CONTEXT_V1_URL),
  );

  loader.addStatic(CREDENTIALS_EXAMPLE_CONTEXT_V1_URL, credentialsExampleContext);
  loader.addStatic(ODRL_URL, odrlContext);
  loader.addStatic(OPEN_BADGES_V2_URL, openBadgesv2Context);
  loader.addStatic(ed25519.constants.CONTEXT_URL, ed25519.contexts.get(ed25519.constants.CONTEXT_URL));
  loader.addStatic(x25519.constants.CONTEXT_URL, x25519.contexts.get(x25519.constants.CONTEXT_URL));
  loader.addStatic(didContext.constants.DID_CONTEXT_URL, didContext.contexts.get(didContext.constants.DID_CONTEXT_URL));
  loader.addStatic(dccContext.CONTEXT_URL_V1, dccContext.CONTEXT_V1);
  loader.addStatic(vcStatusListContext.CONTEXT_URL_V1, vcStatusListContext.CONTEXT_V1);

  for (const [url, contextBody] of obContext.contexts) {
    loader.addStatic(url, contextBody);
  }

  if (param.ipc || param.ws || (param.context && param.method)) {
    loader.setDidResolver(resolver.createResolver(param));
  }

  if (enableFetch) {
    loader.setProtocolHandler({ protocol: 'http', handler: httpClientHandler });
    loader.setProtocolHandler({ protocol: 'https', handler: httpClientHandler });
  }

  if (param.loader) {
    loader.setCustomLoader(param.loader);
  }

  if (param.resolver) {
    loader.setCustomResolver(param.resolver);
  }

  return loader;
}

const httpClientHandler = {
  async get(params: Record<string, string>): Promise<Record<string, any>> {
    if (!params.url.startsWith('http')) {
      throw new Error('NotFoundError');
    }
    let result;
    try {
      const headers: Record<string, string> = {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      };
      result = await fetch(params.url, { headers });
    } catch (e) {
      throw new Error('NotFoundError');
    }

    return parseResponseBody(result);
  },
};

async function parseResponseBody(response: Response): Promise<Record<string, unknown>> {
  const responseText = await response.text();
  const responseTextDecoded = HtmlEntities.decode(responseText);
  return JSON.parse(responseTextDecoded);
}
