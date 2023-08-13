import * as HtmlEntities from 'html-entities';
import { DocumentLoaderParam } from './type';
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
import { resolver, DocumentLoaderResult, utils } from '@lisk-did/lisk-decentralized-identifier';

const contextsMap = {
  [credentialsContext.CREDENTIALS_CONTEXT_V1_URL]: credentialsContext.CONTEXT,
  [CREDENTIALS_EXAMPLE_CONTEXT_V1_URL]: credentialsExampleContext,
  [ODRL_URL]: odrlContext,
  [OPEN_BADGES_V2_URL]: openBadgesv2Context,
  [obContext.CONTEXT_URL_V3_0_0]: obContext.contexts.get(obContext.CONTEXT_URL_V3_0_0),
  [obContext.CONTEXT_URL_V3_0_1]: obContext.contexts.get(obContext.CONTEXT_URL_V3_0_1),
  [obContext.CONTEXT_URL_V3_0_2]: obContext.contexts.get(obContext.CONTEXT_URL_V3_0_2),
  [ed25519.constants.CONTEXT_URL]: ed25519.contexts.get(ed25519.constants.CONTEXT_URL),
  [x25519.constants.CONTEXT_URL]: x25519.contexts.get(x25519.constants.CONTEXT_URL),
  [didContext.constants.DID_CONTEXT_URL]: didContext.contexts.get(didContext.constants.DID_CONTEXT_URL),
  [dccContext.CONTEXT_URL_V1]: dccContext.CONTEXT_V1,
  [vcStatusListContext.CONTEXT_URL_V1]: vcStatusListContext.CONTEXT_V1,
};

export async function baseLoader(
  url: string,
  { ipc, ws, context, method, enableFetch = true }: DocumentLoaderParam,
): Promise<DocumentLoaderResult> {
  const documentContext = contextsMap[url];
  if (documentContext !== undefined) {
    return {
      contextUrl: undefined,
      documentUrl: url,
      document: documentContext,
    };
  }
  if (url.startsWith(`${utils.constant.LISK_DID_PREFIX}:`)) {
    if (!(ipc || ws)) throw new Error('either ipc or ws needs to be configured, or specify custom loader yourself');

    let document;
    if (ipc) {
      const liskResolver = resolver.createIPCResolver(ipc);
      document = await liskResolver.get({ url });
    }
    if (ws) {
      const liskResolver = resolver.createWSResolver(ws);
      document = await liskResolver.get({ url });
    }
    if (context && method) {
      const liskResolver = resolver.createChainResolver(context, method);
      document = await liskResolver.get({ url });
    }
    if (document) {
      return {
        contextUrl: undefined,
        documentUrl: url,
        document,
      };
    }

    throw new Error(`Lisk DID on specified node doesn't exists: "${url}".`);
  }
  if (enableFetch) {
    const document = await fetchDocument({ url });
    if (document !== undefined) {
      return {
        contextUrl: undefined,
        documentUrl: url,
        document,
      };
    }
  }
  throw new Error(`Document loader unable to load URL "${url}".`);
}

async function fetchDocument(params: Record<string, string>): Promise<unknown> {
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

  const responseText = await result.text();
  const responseTextDecoded = HtmlEntities.decode(responseText);
  return JSON.parse(responseTextDecoded);
}
