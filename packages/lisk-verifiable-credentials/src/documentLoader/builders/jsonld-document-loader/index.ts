import { DocumentLoader } from '@lisk-did/lisk-decentralized-identifier';

type BaseDocumentResolver = { get: ({ did, url }: { did?: string; url?: string }) => Promise<Record<string, any>> };

interface JsonLdDocument {
  contextUrl: string | null;
  document: Record<string, any>;
  documentUrl: string;
  tag?: string;
}

export class JsonLdDocumentLoader {
  private _customLoader: DocumentLoader | undefined;
  private _customResolver: BaseDocumentResolver | undefined;
  private documents: Map<string, any>;
  private protocolHandlers: Map<string, any>;

  constructor() {
    this.documents = new Map();
    this.protocolHandlers = new Map();
  }

  build() {
    return this.documentLoader.bind(this);
  }

  addStatic(url: string, document: Record<string, any>) {
    if (!_isString(url)) throw new TypeError('The first parameter (url) must be a string.');
    if (!_isObject(document)) throw new TypeError('The second parameter (document) must be an object.');
    this.documents.set(url, document);
  }

  setProtocolHandler({ protocol, handler }: { protocol: string; handler: BaseDocumentResolver }) {
    this.protocolHandlers.set(protocol, handler);
  }

  setDidResolver(didResolver: BaseDocumentResolver) {
    this.setProtocolHandler({ protocol: 'did', handler: didResolver });
  }

  setCustomLoader(documentLoader: DocumentLoader) {
    this._customLoader = documentLoader;
  }

  setCustomResolver(resolver: BaseDocumentResolver) {
    this._customResolver = resolver;
  }

  async documentLoader(url: string): Promise<JsonLdDocument> {
    if (!_isString(url)) {
      throw new TypeError('The "url" parameter must be a string.');
    }

    const result: JsonLdDocument = {
      contextUrl: null,
      document: this.documents.get(url),
      documentUrl: url,
      tag: undefined,
    };

    if (result.document) result.tag = 'static';

    const [protocol] = url.split(':');
    if (!result.document && this.protocolHandlers.has(protocol)) {
      result.document = await this.protocolHandlers.get(protocol).get({ url });
    }

    if (!result.document && this._customResolver !== undefined) {
      result.document = await this._customResolver.get({ url });
    }

    if (!result.document && this._customLoader !== undefined) {
      result.document = await this._customLoader(url);
    }

    if (result.document) {
      return result;
    }

    throw new Error(`Document not found in document loader: ${url}`);
  }
}

function _isString(arg) {
  return typeof arg === 'string';
}

function _isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
