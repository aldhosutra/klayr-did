/* eslint-disable no-nested-ternary */
import { KLAYR_DID_PREFIX, KLAYR_PUBLIC_KEY_LENGTH } from './utils/constant';
import { createResolver } from './resolver';
import { DidDocument } from './types';
import { cryptography } from 'klayr-sdk';
import * as didParser from 'did-uri';
import { CreateResolverParam } from './types';

export function parseDIDComponent(did: string) {
  if (!did.startsWith('did:')) throw new Error('did string must starts with "did:"');

  const parsedDID = didParser.parse(did);
  if (parsedDID.method !== 'klayr') throw new Error('method must be "klayr"');

  const parsedIdentifier = parsedDID.identifier.split(':');
  let uniqueId: string = parsedDID.uniqueId;
  let namespace = 'address';
  if (parsedIdentifier.length < 2) {
    throw new Error('must be consist of scheme, method, chainspace, and unique-id; or with optional namespace');
  }
  if (parsedIdentifier.length === 2) {
    try {
      cryptography.address.validateKlayr32Address(parsedIdentifier[1], parsedIdentifier[1].substring(0, 3));
    } catch {
      throw new Error('unique-id needs to be a valid klayr address if namespace is absent');
    }
    uniqueId = parsedIdentifier[1];
  }
  if (parsedIdentifier.length > 2) {
    namespace = parsedIdentifier[1];
    uniqueId = parsedDID.identifier.split(`${parsedIdentifier[0]}:${parsedIdentifier[1]}:`)[1];
  }

  let suffix = '';
  if (parsedDID.path) {
    suffix += parsedDID.path;
  }
  if (parsedDID.query) {
    suffix += `?${parsedDID.query}`;
  }
  if (parsedDID.fragment) {
    suffix += `#${parsedDID.fragment}`;
  }

  return {
    did: `did:${parsedDID.method}:${parsedIdentifier[0]}:${namespace}:${uniqueId}`,
    uri: `did:${parsedDID.method}:${parsedIdentifier[0]}:${namespace}:${uniqueId}${suffix}`,
    scheme: 'did',
    method: parsedDID.method,
    chainspace: parsedIdentifier[0],
    namespace,
    uniqueId,
    path: parsedDID.path,
    fragment: parsedDID.fragment,
    query: parsedDID.query,
  };
}

export function getAddressDIDFromPublicKey(chainspace: string, publicKey: Buffer) {
  if (publicKey.length !== KLAYR_PUBLIC_KEY_LENGTH) {
    throw Error('unexpected public key length');
  }
  const Klayr32 = cryptography.address.getKlayr32AddressFromPublicKey(publicKey);
  return `${KLAYR_DID_PREFIX}:${chainspace}:address:${Klayr32}`;
}

export async function getDIDDocument(did: string, options: CreateResolverParam): Promise<DidDocument | undefined> {
  if (!did.startsWith(`${KLAYR_DID_PREFIX}:`)) {
    throw new Error(`did need to start with "${KLAYR_DID_PREFIX}:"`);
  }

  if (options !== undefined && (options.context || options.method) && !(options.context && options.method))
    throw new Error('both context and method are required for on-chain retrieval');

  if (options === undefined || !Object.values(options).some(v => v !== undefined)) {
    throw new Error('one of the options is needed');
  }

  const document = await createResolver(options).get({ did: parseDIDComponent(did).did });
  return document;
}
