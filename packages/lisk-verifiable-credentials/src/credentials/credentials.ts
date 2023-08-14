import * as vc from '@digitalcredentials/vc';
import { Ed25519VerificationKey2020 } from '@digitalcredentials/ed25519-verification-key-2020';
import { Ed25519Signature2020 } from '@digitalcredentials/ed25519-signature-2020';
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
  const didDocument = await getDIDDocument(issuer, {
    resolver: options?.loader,
    ipc: options?.ipc,
    ws: options?.ws,
  });

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

  const key = await Ed25519VerificationKey2020.from({ ...matchedKey[0], privateKeyMultibase });
  const suite = new Ed25519Signature2020({ key });

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

  const key = await Ed25519VerificationKey2020.from({
    id: credential.proof.verificationMethod,
    type: utils.constant.ED25519_VERIFICATION_KEY_2020_TYPE,
    controller: issuer,
    publicKeyMultibase: didCryptography.codec.encodePublicKey(publicKey),
  });

  const suite = new Ed25519Signature2020({ key });
  const result: VCVerificationResult = await vc.verifyCredential({
    credential,
    suite,
    documentLoader,
  });

  return result;
}
