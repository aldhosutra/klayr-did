import * as vc from '@digitalcredentials/vc';
import { VCVerificationResult, VerifiableCredential } from '../types';
import { createRemoteDocumentLoader } from '../documentLoader';
import { preprocessCredentials } from '../util';
import { ClientOptions } from '../documentLoader/type';
import { utils, getDIDDocument, cryptography as didCryptography } from '@lisk-did/lisk-decentralized-identifier';

export async function issueCredential(
  credential: VerifiableCredential,
  privateKey: Buffer,
  options?: ClientOptions,
): Promise<VerifiableCredential> {
  if (credential.issuer === undefined) {
    throw new Error('credential.issuer must be defined');
  }
  const documentLoader = (options != null && options.loader) ?? createRemoteDocumentLoader(options);
  const issuer = typeof credential.issuer === 'string' ? credential.issuer : credential.issuer.id;
  const didDocument = await getDIDDocument(issuer, options!);

  if (didDocument == null) {
    throw new Error('issuer DID not registered yet on the chain');
  }

  const privateKeyMultibase = didCryptography.codec.encodePrivateKey(privateKey);
  const matchedKey = await didCryptography.method.getVerificationMethod(didDocument, {
    relationship: ['assertionMethod'],
    privateKey,
  });
  if (matchedKey.length === 0) {
    throw new Error("specified private key doesn't have neccessary permission to act as issuer");
  }

  const key = await didCryptography.key.createEd25519KeyPair({ ...matchedKey[0], privateKeyMultibase });
  const suite = await didCryptography.key.getEd25519SignatureSuite(key);

  const issuedCredential: VerifiableCredential = { ...credential };
  preprocessCredentials(issuedCredential);

  const signedVC = await vc.issue({
    credential: issuedCredential,
    suite,
    documentLoader,
  });
  return signedVC;
}

export async function verifyCredential(
  credential: VerifiableCredential,
  publicKey: Buffer,
  options?: ClientOptions,
): Promise<VCVerificationResult> {
  if (credential.proof === undefined) {
    throw new Error('credential.proof must be defined');
  }
  if (credential.issuer === undefined) {
    throw new Error('credential.issuer must be defined');
  }

  const documentLoader = (options != null && options.loader) ?? createRemoteDocumentLoader(options);
  const issuer = typeof credential.issuer === 'string' ? credential.issuer : credential.issuer.id;

  const key = await didCryptography.key.createEd25519KeyPair({
    id: credential.proof.verificationMethod,
    type: utils.constant.ED25519_VERIFICATION_KEY_2020_TYPE,
    controller: issuer,
    publicKeyMultibase: didCryptography.codec.encodePublicKey(publicKey),
  });

  const suite = await didCryptography.key.getEd25519SignatureSuite(key);
  const result: VCVerificationResult = await vc.verifyCredential({
    credential,
    suite,
    documentLoader,
  });

  return result;
}
