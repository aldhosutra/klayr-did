import didIo from '@digitalcredentials/did-io';
import { cryptography } from 'lisk-sdk';
import { Ed25519VerificationKey2020 } from '@digitalcredentials/ed25519-verification-key-2020';
import {
  createEd25519KeyPair,
  createX25519KeyPair,
  decodePublicKey,
  encodePrivateKey,
  encodePublicKey,
} from '../../cryptography';
import { DidDocument, VerificationMethod } from '../../types';
import {
  DID_CONTEXT_URL,
  ED25519_VERIFICATION_KEY_2020_CONTEXT,
  ED25519_VERIFICATION_KEY_2020_TYPE,
  X25519_KEY_AGREEMENT_KEY_2020_CONTEXT,
} from '../../utils/constant';
import { LISK_DID_PREFIX } from '../../utils/constant';
import { contextsBySuite } from '../../utils';

export abstract class BaseDriver {
  public method = 'lisk';
  public verificationSuite;
  public chainspace;

  constructor(verificationSuite = Ed25519VerificationKey2020) {
    this.verificationSuite = verificationSuite;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async initChainspace() {
    throw new Error("Method 'initChainspace()' must be implemented.");
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async get(_params: { did: string; url: string }) {
    throw new Error("Method 'get()' must be implemented.");
  }

  async generate(options?: { privateKey: Buffer }): Promise<{
    didDocument: DidDocument;
    keyPairs: Map<string, any>;
    methodFor: ({ purpose }: { purpose: string }) => void;
  }> {
    await this.initChainspace();

    const verificationKeyPair =
      options != null && options.privateKey
        ? await Ed25519VerificationKey2020.from({
            id: undefined,
            controller: undefined,
            revoked: undefined,
            type: ED25519_VERIFICATION_KEY_2020_TYPE,
            publicKeyMultibase: await encodePublicKey(cryptography.ed.getPublicKeyFromPrivateKey(options.privateKey)),
            privateKeyMultibase: await encodePrivateKey(options.privateKey),
          })
        : await Ed25519VerificationKey2020.generate();

    const { didDocument, keyPairs } = await this._keyPairToDidDocument(verificationKeyPair, this.chainspace);

    const methodFor = ({ purpose }) => {
      const { id: methodId } = didIo.findVerificationMethod({
        doc: didDocument,
        purpose,
      });
      return keyPairs.get(methodId);
    };

    return { didDocument, keyPairs, methodFor };
  }

  publicMethodFor(params: { didDocument: DidDocument; purpose: string }) {
    if (!params.didDocument) {
      throw new TypeError('The "didDocument" parameter is required.');
    }
    if (!params.purpose) {
      throw new TypeError('The "purpose" parameter is required.');
    }

    const method = didIo.findVerificationMethod({
      doc: params.didDocument,
      purpose: params.purpose,
    });
    if (!method) {
      throw new Error(`No verification method found for purpose "${params.purpose}"`);
    }
    return method;
  }

  async publicKeyToDidDoc(params: { publicKey: Buffer }): Promise<{ didDocument: DidDocument }> {
    await this.initChainspace();

    const { didDocument } = await this._keyPairToDidDocument(
      { publicKeyMultibase: encodePublicKey(params.publicKey) } as Ed25519VerificationKey2020,
      this.chainspace,
    );

    return { didDocument };
  }

  async computeId(keyPair: Ed25519VerificationKey2020) {
    await this.initChainspace();

    const lisk32 = cryptography.address.getLisk32AddressFromPublicKey(
      await decodePublicKey(keyPair.publicKeyMultibase),
    );
    return `${LISK_DID_PREFIX}:${this.chainspace}:address:${lisk32}#${keyPair.fingerprint()}`;
  }

  async _keyPairToDidDocument(keyPair: Ed25519VerificationKey2020, chainspace: string) {
    const lisk32 = cryptography.address.getLisk32AddressFromPublicKey(
      await decodePublicKey(keyPair.publicKeyMultibase),
    );
    const verificationKeyPair = await createEd25519KeyPair({ ...keyPair });
    const did = `${LISK_DID_PREFIX}:${chainspace}:address:${lisk32}`;
    verificationKeyPair.controller = did;

    const contexts = [DID_CONTEXT_URL];

    let keyAgreementKeyPair;
    if (verificationKeyPair.type === ED25519_VERIFICATION_KEY_2020_TYPE) {
      keyAgreementKeyPair = await createX25519KeyPair(verificationKeyPair);
      contexts.push(ED25519_VERIFICATION_KEY_2020_CONTEXT, X25519_KEY_AGREEMENT_KEY_2020_CONTEXT);
    } else {
      throw new Error('Cannot derive key agreement key from verification key type "' + verificationKeyPair.type + '".');
    }

    verificationKeyPair.id = `${did}#${verificationKeyPair.fingerprint()}`;

    const publicEdKey = verificationKeyPair.export({ publicKey: true });
    const publicDhKey = keyAgreementKeyPair.export({ publicKey: true });

    const didDocument: DidDocument = {
      '@context': contexts,
      id: did,
      controller: [did],
      verificationMethod: [publicEdKey as VerificationMethod],
      authentication: [publicEdKey.id!],
      assertionMethod: [publicEdKey.id!],
      capabilityInvocation: [publicEdKey.id!],
      keyAgreement: [publicDhKey],
      service: [],
    };

    const keyPairs = new Map();
    keyPairs.set(verificationKeyPair.id, verificationKeyPair);
    keyPairs.set(keyAgreementKeyPair.id, keyAgreementKeyPair);

    return { didDocument, keyPairs };
  }

  _getKey(didDocument: DidDocument, keyId: string) {
    let publicKey;

    const methodIndex = didDocument.verificationMethod.findIndex(t => t.id === keyId);
    if (methodIndex > -1) {
      publicKey = didDocument.verificationMethod[methodIndex];
    }

    const keyAgreementIndex = didDocument.keyAgreement.findIndex(t => t.id === keyId);
    if (keyAgreementIndex > -1) {
      publicKey = didDocument.keyAgreement[keyAgreementIndex];
    }

    return {
      '@context': contextsBySuite.get(publicKey.type),
      ...publicKey,
    };
  }
}
