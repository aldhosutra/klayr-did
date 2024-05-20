import {
  ED25519_VERIFICATION_KEY_2020_TYPE,
  SUPPORTED_RELATIONSHIP,
  X25519_KEY_AGREEMENT_KEY_2020_TYPE,
} from '../utils/constant';
import { DidDocument } from '../types';
import { asyncFilter, findIntersection } from '../utils/array';
import { decodePrivateKey, decodePublicKey, encodePrivateKey, encodePublicKey } from './codec';
import { verifyLocal } from './operation';
import { AuthorizationFactors, VerificationMethod, VerificationRelationship } from '../types/cryptography';
import { cryptography } from 'klayr-sdk';
import { ed25519ToX25519PublicKeyMultibase } from './convert';

const predicatePublicKeyMultibase = (ed25519Key, x25519Key) => (key: VerificationMethod) => {
  const ed25519Match = key.type === ED25519_VERIFICATION_KEY_2020_TYPE ? key.publicKeyMultibase === ed25519Key : false;
  const x25519Match = key.type === X25519_KEY_AGREEMENT_KEY_2020_TYPE ? key.publicKeyMultibase === x25519Key : false;
  return ed25519Match || x25519Match;
};

export async function getVerificationMethod(
  didDocument: DidDocument,
  options: AuthorizationFactors,
): Promise<VerificationMethod[]> {
  if (options === undefined || !Object.values(options).some(v => v !== undefined)) return [];
  let matchedKey = didDocument.verificationMethod.concat(didDocument.keyAgreement);

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

    matchedKey = matchedKey.filter(
      predicatePublicKeyMultibase(publicKeyMultibase, ed25519ToX25519PublicKeyMultibase(publicKey)),
    );
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

    matchedKey = matchedKey.filter(
      predicatePublicKeyMultibase(publicKeyMultibase, ed25519ToX25519PublicKeyMultibase(publicKey)),
    );
  }

  if (options.publicKey != undefined) {
    const publicKeyMultibase = encodePublicKey(options.publicKey);
    matchedKey = matchedKey.filter(
      predicatePublicKeyMultibase(publicKeyMultibase, ed25519ToX25519PublicKeyMultibase(options.publicKey)),
    );
  }

  if (options.publicKeyMultibase !== undefined) {
    const publicKey = decodePublicKey(options.publicKeyMultibase);
    matchedKey = matchedKey.filter(
      predicatePublicKeyMultibase(options.publicKeyMultibase, ed25519ToX25519PublicKeyMultibase(publicKey)),
    );
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

    if (options.relationship.includes('keyAgreement')) {
      const keyList = matchedKey.length > 0 ? matchedKey : didDocument.verificationMethod;
      const keyAgreementPublicKeyMultibase = didDocument.keyAgreement.map(key => key.publicKeyMultibase);
      const matchedKeyPublicKeyMultibase = keyList.map(key =>
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
  options: AuthorizationFactors,
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
