/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { getVerificationMethod, getVerificationRelationship } from '@dist/cryptography/method';
import { encodePrivateKey, encodePublicKey } from '@dist/cryptography/codec';
import { ed25519ToX25519PublicKeyMultibase } from '@dist/cryptography/convert';
import { signLocal } from '@dist/cryptography/operation';
import { privateKey, publicKey, senderDID, senderDIDDoc } from '../../setup/constant';

describe('getVerificationMethod', () => {
  it('should return empty array if no options provided', async () => {
    const method = await getVerificationMethod(senderDIDDoc, undefined as any);
    expect(method).toHaveLength(0);
  });

  it('should return empty array if options is an empty object', async () => {
    const method = await getVerificationMethod(senderDIDDoc, {});
    expect(method).toHaveLength(0);
  });

  it('should return correct verification method based on privateKey', async () => {
    const method = await getVerificationMethod(senderDIDDoc, { privateKey });
    expect(method).toHaveLength(2);
    expect(method.map(t => t.publicKeyMultibase)).toContain(encodePublicKey(publicKey));
  });

  it('should return correct verification method based on publicKey', async () => {
    const method = await getVerificationMethod(senderDIDDoc, { publicKey });
    expect(method).toHaveLength(2);
    expect(method.map(t => t.publicKeyMultibase)).toContain(encodePublicKey(publicKey));
  });

  it('should return correct verification method based on privateKeyMultibase', async () => {
    const method = await getVerificationMethod(senderDIDDoc, { privateKeyMultibase: encodePrivateKey(privateKey) });
    expect(method).toHaveLength(2);
    expect(method.map(t => t.publicKeyMultibase)).toContain(encodePublicKey(publicKey));
  });

  it('should return correct verification method based on publicKeyMutibase', async () => {
    const method = await getVerificationMethod(senderDIDDoc, { publicKeyMultibase: encodePublicKey(publicKey) });
    expect(method).toHaveLength(2);
    expect(method.map(t => t.publicKeyMultibase)).toContain(encodePublicKey(publicKey));
  });

  it('should return correct verification method based on controller', async () => {
    const method = await getVerificationMethod(senderDIDDoc, { controller: senderDID });
    expect(method).toHaveLength(2);
    expect(method.map(t => t.publicKeyMultibase)).toContain(encodePublicKey(publicKey));
  });

  it('should return correct verification method based on relationship', async () => {
    const method = await getVerificationMethod(senderDIDDoc, { relationship: ['assertionMethod'] });
    expect(method).toHaveLength(1);
    expect(method.map(t => t.publicKeyMultibase)).toContain(encodePublicKey(publicKey));
  });

  it('should return correct verification method based on signature/challenge', async () => {
    const challenge = 'challenge';
    const signature = await signLocal(challenge, privateKey);
    const method = await getVerificationMethod(senderDIDDoc, { signature, challenge });
    expect(method).toHaveLength(1);
    expect(method.map(t => t.publicKeyMultibase)).toContain(encodePublicKey(publicKey));
  });

  it('should return correct verification method for keyAgreement relationship', async () => {
    const method = await getVerificationMethod(senderDIDDoc, {
      relationship: ['keyAgreement'],
    });
    expect(method).toHaveLength(1);
    expect(method.map(t => t.publicKeyMultibase)).toContain(ed25519ToX25519PublicKeyMultibase(publicKey));
  });

  it('should return correct verification method for keyAgreement and combined with other relationship', async () => {
    const method = await getVerificationMethod(senderDIDDoc, {
      relationship: ['assertionMethod', 'authentication', 'keyAgreement'],
    });
    expect(method).toHaveLength(2);
    expect(method.map(t => t.publicKeyMultibase)).toContain(encodePublicKey(publicKey));
  });

  it('should throw an error if provided publicKey and privateKey doesnt match', async () => {
    const func = async () => {
      await getVerificationMethod(senderDIDDoc, { privateKey, publicKey: Buffer.alloc(32) });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if provided publicKeyMultibase and privateKey doesnt match', async () => {
    const func = async () => {
      await getVerificationMethod(senderDIDDoc, { privateKey, publicKeyMultibase: '' });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if provided privateKeyMultibase and privateKey doesnt match', async () => {
    const func = async () => {
      await getVerificationMethod(senderDIDDoc, { privateKey, privateKeyMultibase: '' });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if provided privateKeyMultibase and publicKey doesnt match', async () => {
    const func = async () => {
      const privateKeyMultibase = encodePrivateKey(privateKey);
      await getVerificationMethod(senderDIDDoc, { privateKeyMultibase, publicKey: Buffer.alloc(32) });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if provided privateKeyMultibase and publicKeyMultibase doesnt match', async () => {
    const func = async () => {
      const privateKeyMultibase = encodePrivateKey(privateKey);
      await getVerificationMethod(senderDIDDoc, { privateKeyMultibase, publicKeyMultibase: '' });
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('getVerificationRelationship', () => {
  it('should return all available verification relationship', async () => {
    const relationship = await getVerificationRelationship(senderDIDDoc, { publicKey });
    expect(relationship).toHaveLength(4);
  });

  it('should return correct authentication relationship', async () => {
    const relationship = await getVerificationRelationship(senderDIDDoc, { relationship: ['authentication'] });
    expect(relationship).toHaveLength(3);
    expect(relationship).toContain('authentication');
  });

  it('should return correct assertionMethod relationship', async () => {
    const relationship = await getVerificationRelationship(senderDIDDoc, { relationship: ['assertionMethod'] });
    expect(relationship).toHaveLength(3);
    expect(relationship).toContain('assertionMethod');
  });

  it('should return correct capabilityInvocation relationship', async () => {
    const relationship = await getVerificationRelationship(senderDIDDoc, { relationship: ['capabilityInvocation'] });
    expect(relationship).toHaveLength(3);
    expect(relationship).toContain('capabilityInvocation');
  });

  it('should return correct verification relationship based on privateKey', async () => {
    const relationship = await getVerificationRelationship(senderDIDDoc, { privateKey });
    expect(relationship).toHaveLength(4);
  });

  it('should return correct verification relationship based on privateKeyMultibase', async () => {
    const relationship = await getVerificationRelationship(senderDIDDoc, {
      privateKeyMultibase: encodePrivateKey(privateKey),
    });
    expect(relationship).toHaveLength(4);
  });

  it('should return correct verification relationship based on publicKey', async () => {
    const relationship = await getVerificationRelationship(senderDIDDoc, { publicKey });
    expect(relationship).toHaveLength(4);
  });

  it('should return correct verification relationship based on publicKeyMultibase', async () => {
    const relationship = await getVerificationRelationship(senderDIDDoc, {
      publicKeyMultibase: encodePublicKey(publicKey),
    });
    expect(relationship).toHaveLength(4);
  });

  it('should return correct verification relationship based on signature/challenge', async () => {
    const challenge = 'challenge';
    const signature = await signLocal(challenge, privateKey);
    const method = await getVerificationRelationship(senderDIDDoc, { signature, challenge });
    expect(method).toHaveLength(3);
  });

  it('should return correct verification relationship based on controller', async () => {
    const relationship = await getVerificationRelationship(senderDIDDoc, {
      controller: senderDID,
    });
    expect(relationship).toHaveLength(4);
  });
});
