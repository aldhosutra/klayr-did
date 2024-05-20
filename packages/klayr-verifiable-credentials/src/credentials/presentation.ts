import { VPVerificationResult, VerifiableCredential, VerifiablePresentation } from '../types';
import * as vc from '@digitalcredentials/vc';
import { buildOffChainDocumentLoader } from '../documentLoader';
import { preprocessPresentation } from '../util';
import { ClientOptions } from '../documentLoader/type';
import { utils, getDIDDocument, cryptography as didCryptography } from '@klayr-did/klayr-decentralized-identifier';

export async function issuePresentation(
  verifiableCredentialsList: VerifiableCredential[],
  holderDid: string,
  privateKey: Buffer,
  challenge: string,
  options: ClientOptions,
): Promise<VerifiablePresentation> {
  if (verifiableCredentialsList.map(t => t.proof !== undefined).includes(false)) {
    throw new Error('all verifiable credentials needs to have a proof');
  }

  const documentLoader = buildOffChainDocumentLoader(options);
  const didDocument = await getDIDDocument(holderDid, options);

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

  const key = await didCryptography.key.createEd25519KeyPair({ ...matchedKey[0], privateKeyMultibase });
  const suite = await didCryptography.key.getEd25519SignatureSuite(key);

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
  options: ClientOptions,
): Promise<VPVerificationResult> {
  if (presentation.proof === undefined) {
    throw new Error('presentation.proof must be defined');
  }
  if (presentation.holder === undefined) {
    throw new Error('presentation.holder must be defined');
  }

  const documentLoader = buildOffChainDocumentLoader(options);

  const key = await didCryptography.key.createEd25519KeyPair({
    id: presentation.proof.verificationMethod,
    type: utils.constant.ED25519_VERIFICATION_KEY_2020_TYPE,
    controller: presentation.holder,
    publicKeyMultibase: await didCryptography.codec.encodePublicKey(publicKey),
  });

  const suite = await didCryptography.key.getEd25519SignatureSuite(key);

  const verificationResult = await vc.verify({
    presentation,
    challenge: presentation.proof.challenge,
    suite,
    documentLoader,
  });
  return verificationResult;
}
