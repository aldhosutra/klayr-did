import {
  CreateParam,
  utils,
  cryptography as didCryptography,
  VerificationMethod,
  parseDIDComponent,
  DidModuleConfig,
  getAddressDIDFromPublicKey,
} from '@lisk-did/lisk-decentralized-identifier';
import { MethodContext, cryptography } from 'lisk-sdk';
import { DocumentStore, documentStoreKey } from '../stores/document';

export async function executeCreateCommand(
  _context: MethodContext,
  config: DidModuleConfig,
  senderPublicKey: Buffer,
  documentSubstore: DocumentStore,
  params: CreateParam,
): Promise<boolean> {
  const didComponent = parseDIDComponent(params.did);
  if (
    config.autoCreateAddressDID &&
    didComponent.namespace === 'address' &&
    didComponent.uniqueId === cryptography.address.getLisk32AddressFromPublicKey(senderPublicKey)
  ) {
    await initializeAddressDID(_context, documentSubstore, config.chainspace, senderPublicKey);
    return false;
  }

  if (await documentSubstore.has(_context, documentStoreKey(params.did))) {
    throw new Error('did already exist');
  }

  const didDocument = utils.bootstrapEmptyDidDocument();

  didDocument.id = params.did;
  didDocument.controller = params.controllers;

  for (const key of params.keys) {
    const keyPair = {
      controller: didDocument.id,
      publicKeyMultibase: didCryptography.codec.encodePublicKey(key.publicKey),
    };

    const { id, controller, type, publicKeyMultibase } = didCryptography.key.createEd25519KeyPair(
      keyPair,
    ) as VerificationMethod;

    didDocument.verificationMethod.push({ id, controller, type, publicKeyMultibase });
    const contextIndex = didDocument['@context'].findIndex(
      t => t === utils.constant.ED25519_VERIFICATION_KEY_2020_CONTEXT,
    );
    if (contextIndex === -1) didDocument['@context'].push(utils.contextsBySuite.get(type));

    for (const relationship of key.relationship) {
      if (relationship === 'keyAgreement') {
        const keyAgreement = didCryptography.key.createX25519KeyPair(keyPair);
        didDocument.keyAgreement.push({
          id: keyAgreement.id!,
          controller: keyAgreement.controller!,
          type: keyAgreement.type!,
          publicKeyMultibase: keyAgreement.publicKeyMultibase,
        });
        const contextKeyIndex = didDocument['@context'].findIndex(
          t => t === utils.constant.X25519_KEY_AGREEMENT_KEY_2020_CONTEXT,
        );
        if (contextKeyIndex === -1) didDocument['@context'].push(utils.contextsBySuite.get(keyAgreement.type!));
      } else {
        didDocument[relationship].push(id);
      }
    }
  }

  await documentSubstore.set(_context, documentStoreKey(params.did), didDocument);

  return true;
}

export async function initializeAddressDID(
  _context: MethodContext,
  documentStore: DocumentStore,
  chainspace: string,
  publicKey: Buffer,
) {
  const did = getAddressDIDFromPublicKey(chainspace, publicKey);
  if (!(await documentStore.has(_context, documentStoreKey(did)))) {
    await documentStore.set(
      _context,
      documentStoreKey(did),
      await utils.bootstrapAddressDidDocument(chainspace, publicKey),
    );
  }
}
