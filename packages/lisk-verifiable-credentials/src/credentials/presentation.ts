import { VPVerificationResult, VerifiableCredential, VerifiablePresentation } from '../types';
import * as vc from '@digitalcredentials/vc';
import { Ed25519VerificationKey2020 } from '@digitalcredentials/ed25519-verification-key-2020';
import { Ed25519Signature2020 } from '@digitalcredentials/ed25519-signature-2020';
import { createRemoteDocumentLoader } from '../documentLoader';
import { preprocessPresentation } from '../util';
import { ClientOptions } from '../documentLoader/type';
import { utils, getDIDDocument, cryptography as didCryptography } from '@lisk-did/lisk-decentralized-identifier';

export async function issuePresentation(
  verifiableCredentialsList: VerifiableCredential[],
  holderDid: string,
  privateKey: Buffer,
  challenge: string,
  options?: ClientOptions,
): Promise<VerifiablePresentation> {
  if (verifiableCredentialsList.map(t => t.proof !== undefined).includes(false)) {
    throw new Error('all verifiable credentials needs to have a proof');
  }

  const documentLoader = (options != null && options.loader) ?? createRemoteDocumentLoader(options);
  const didDocument = await getDIDDocument(holderDid, {
    resolver: options?.loader,
    ipc: options?.ipc,
    ws: options?.ws,
  });

  if (didDocument == null) {
    throw new Error('holder DID not registered yet on the chain');
  }

  const privateKeyMultibase = await didCryptography.codec.encodePrivateKey(privateKey);
  const matchedKey = await didCryptography.method.getVerificationMethod(didDocument, {
    relationship: ['authentication'],
    privateKey,
  });
  if (matchedKey.length === 0) {
    throw new Error("specified private key doesn't have neccessary permission to authenticate a presentation");
  }

  const key = await Ed25519VerificationKey2020.from({ ...matchedKey[0], privateKeyMultibase });
  const suite = new Ed25519Signature2020({ key });

  const presentation: VerifiablePresentation = vc.createPresentation({
    verifiableCredential: verifiableCredentialsList,
    holder: holderDid,
  });
  await preprocessPresentation(presentation);
  const signedVP = await vc.signPresentation({
    presentation,
    suite,
    challenge,
    documentLoader,
  });
  return signedVP;
}

export async function verifyPresentation(
  presentation: VerifiablePresentation,
  publicKey: Buffer,
  options?: ClientOptions,
): Promise<VPVerificationResult> {
  if (presentation.proof === undefined) {
    throw new Error('presentation.proof must be defined');
  }
  if (presentation.holder === undefined) {
    throw new Error('presentation.holder must be defined');
  }

  const documentLoader = (options != null && options.loader) ?? createRemoteDocumentLoader(options);

  const key = await Ed25519VerificationKey2020.from({
    id: presentation.proof.verificationMethod,
    type: utils.constant.ED25519_VERIFICATION_KEY_2020_TYPE,
    controller: presentation.holder,
    publicKeyMultibase: await didCryptography.codec.encodePublicKey(publicKey),
  });

  const suite = new Ed25519Signature2020({ key });

  const verificationResult = await vc.verify({
    presentation,
    challenge: presentation.proof.challenge,
    suite,
    documentLoader,
  });
  return verificationResult;
}
