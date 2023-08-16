import {
  ED25519_VERIFICATION_KEY_2020_TYPE,
  SUPPORTED_RELATIONSHIP,
  X25519_KEY_AGREEMENT_KEY_2020_TYPE,
} from '../utils/constant';
import { DidDocument } from '../types';
import { asyncFilter, findIntersection } from '../utils/array';
import { decodePrivateKey, decodePublicKey, encodePrivateKey, encodePublicKey } from './codec';
import { verifyLocal } from './operation';
import { VerificationMethod, VerificationRelationship } from '../types/cryptography';
import { cryptography } from 'lisk-sdk';
import { ed25519ToX25519PublicKeyMultibase } from './convert';

interface VerificationFilterOptions {
  publicKey?: Buffer;
  publicKeyMultibase?: string;
  privateKey?: Buffer;
  privateKeyMultibase?: string;
  challenge?: string;
  signature?: Buffer;
  controller?: string;
  relationship?: VerificationRelationship[];
}

export async function getVerificationMethod(
  didDocument: DidDocument,
  options: VerificationFilterOptions,
): Promise<VerificationMethod[]> {
  let matchedKey = didDocument.verificationMethod;

  if (options.privateKey !== undefined) {
    const publicKey = cryptography.ed.getPublicKeyFromPrivateKey(options.privateKey);
    const publicKeyMultibase = encodePublicKey(publicKey);

    if (options.publicKey !== undefined && Buffer.compare(publicKey, options.publicKey) !== 0) {
      throw new Error('provided publicKey and privateKey does not match');
    }
    if (options.publicKeyMultibase !== undefined && options.publicKeyMultibase !== publicKeyMultibase) {
      throw new Error('provided privateKey and publicKeyMultibase does not match');
    }
    if (
      options.privateKeyMultibase !== undefined &&
      encodePrivateKey(options.privateKey) !== options.privateKeyMultibase
    ) {
      throw new Error('provided privateKey and privateKeyMultibase does not match');
    }

    matchedKey = matchedKey.filter(key => key.publicKeyMultibase === publicKeyMultibase);
  }

  if (options.privateKeyMultibase !== undefined) {
    const privateKey = decodePrivateKey(options.privateKeyMultibase);
    const publicKey = cryptography.ed.getPublicKeyFromPrivateKey(privateKey);
    const publicKeyMultibase = encodePublicKey(publicKey);

    if (options.publicKey !== undefined && Buffer.compare(publicKey, options.publicKey) !== 0) {
      throw new Error('provided publicKey and privateKey does not match');
    }
    if (options.publicKeyMultibase !== undefined && options.publicKeyMultibase !== publicKeyMultibase) {
      throw new Error('provided privateKey and publicKeyMultibase does not match');
    }
    if (options.privateKey !== undefined && Buffer.compare(options.privateKey, privateKey) !== 0) {
      throw new Error('provided privateKey and privateKeyMultibase does not match');
    }

    matchedKey = matchedKey.filter(key => key.publicKeyMultibase === publicKeyMultibase);
  }

  if (options.publicKey != undefined) {
    const publicKeyMultibase = encodePublicKey(options.publicKey);
    matchedKey = matchedKey.filter(key => key.publicKeyMultibase === publicKeyMultibase);
  }

  if (options.publicKeyMultibase !== undefined) {
    matchedKey = matchedKey.filter(key => key.publicKeyMultibase === options.publicKeyMultibase);
  }

  if (options.controller !== undefined) {
    matchedKey = matchedKey.filter(key => key.controller === options.controller);
  }

  if (options.signature !== undefined || options.challenge !== undefined) {
    matchedKey = await asyncFilter(
      matchedKey,
      async key =>
        await verifyLocal(options.challenge!, options.signature!, decodePublicKey(key.publicKeyMultibase), true),
    );
  }

  if (options.relationship !== undefined && options.relationship.length > 0) {
    let keyRelationship: string[][] = [];
    if (options.relationship.includes('authentication')) keyRelationship.push(didDocument.authentication);
    if (options.relationship.includes('assertionMethod')) keyRelationship.push(didDocument.assertionMethod);
    if (options.relationship.includes('capabilityInvocation')) keyRelationship.push(didDocument.capabilityInvocation);

    const keyIntersectionWithoutKeyAgreement = findIntersection(keyRelationship).map(
      t => didDocument.verificationMethod.find(v => v.id === t) as VerificationMethod,
    );

    matchedKey = matchedKey.filter(key => keyIntersectionWithoutKeyAgreement.map(t => t.id).includes(key.id));

    if (options.relationship.includes('keyAgreement') && matchedKey.length > 0) {
      const keyAgreementPublicKeyMultibase = didDocument.keyAgreement.map(key => key.publicKeyMultibase);
      const matchedKeyPublicKeyMultibase = matchedKey.map(key =>
        ed25519ToX25519PublicKeyMultibase(decodePublicKey(key.publicKeyMultibase)),
      );
      const intersection = findIntersection([keyAgreementPublicKeyMultibase, matchedKeyPublicKeyMultibase]).map(
        key => didDocument.keyAgreement.find(t => t.publicKeyMultibase === key)!,
      );
      matchedKey = matchedKey.concat(intersection);
    }
  }

  return [...new Set(matchedKey)];
}

export async function getVerificationRelationship(
  didDocument: DidDocument,
  options: VerificationFilterOptions,
): Promise<VerificationRelationship[]> {
  const matchedRelationship = new Set<VerificationRelationship>();
  const matchedKey = await getVerificationMethod(didDocument, options);

  for (const key of matchedKey) {
    if (key.type === X25519_KEY_AGREEMENT_KEY_2020_TYPE) {
      matchedRelationship.add('keyAgreement');
    }
    if (key.type === ED25519_VERIFICATION_KEY_2020_TYPE) {
      SUPPORTED_RELATIONSHIP.forEach(relationship => {
        if ((didDocument[relationship] as string[]).includes(key.id)) matchedRelationship.add(relationship);
      });
    }
  }

  return Array.from(matchedRelationship);
}
