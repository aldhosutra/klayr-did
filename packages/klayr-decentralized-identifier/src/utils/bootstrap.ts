import * as resolver from '../resolver';
import { DidDocument } from '../types';

export function bootstrapEmptyDidDocument(): DidDocument {
  return {
    '@context': ['https://www.w3.org/ns/did/v1'],
    id: '',
    controller: [],
    verificationMethod: [],
    authentication: [],
    assertionMethod: [],
    capabilityInvocation: [],
    keyAgreement: [],
    service: [],
  };
}

export async function bootstrapAddressDidDocument(chainspace: string, publicKey?: Buffer) {
  const didDriver = resolver.driver.createLocalDriver(chainspace);
  const document = publicKey != null ? await didDriver.publicKeyToDidDoc({ publicKey }) : await didDriver.generate();
  return document.didDocument;
}
