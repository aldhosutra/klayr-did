import { decodePublicKey, encodePrivateKey, encodePublicKey } from '@dist/cryptography/codec';
import {
  createEd25519KeyPair,
  createX25519KeyPair,
  generateEd25519KeyPair,
  generateX25519KeyPair,
  getEd25519SignatureSuite,
} from '@dist/cryptography/suite';
import { ed25519ToX25519PublicKeyMultibase } from '@dist/cryptography/convert';
import { ED25519_VERIFICATION_KEY_2020_CONTEXT } from '@dist/utils/constant';
import { privateKey, publicKey } from '../../setup/constant';

describe('createEd25519KeyPair', () => {
  it('should create valid ed25519 key pair', async () => {
    const publicKeyMultibase = encodePublicKey(publicKey);
    const keypair = await createEd25519KeyPair({ publicKeyMultibase });
    expect(keypair.publicKeyMultibase).toBe(publicKeyMultibase);
  });

  it('should throw an error if no publicKeyMultibase option provided', async () => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const func = async () => {
      await createEd25519KeyPair({});
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('createX25519KeyPair', () => {
  it('should create valid x25519 key pair', async () => {
    const publicKeyMultibase = encodePublicKey(publicKey);
    const keypair = await createX25519KeyPair({ publicKeyMultibase });
    expect(keypair.publicKeyMultibase).toBe(ed25519ToX25519PublicKeyMultibase(publicKey));
  });

  it('should throw an error if no options provided', async () => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const func = async () => {
      await createX25519KeyPair({});
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('generateEd25519KeyPair', () => {
  it('should generate new keypair', async () => {
    const keypair = await generateEd25519KeyPair();
    expect(keypair).toHaveProperty('publicKeyMultibase');
  });

  it('should generate new keypair with valid publicKey', async () => {
    const func = async () => {
      const keypair = await generateEd25519KeyPair();
      decodePublicKey(keypair.publicKeyMultibase);
    };
    await expect(func()).resolves.not.toThrow();
  });
});

describe('generateX25519KeyPair', () => {
  it('should generate new keypair', async () => {
    const keypair = await generateX25519KeyPair();
    expect(keypair).toHaveProperty('publicKeyMultibase');
  });

  it('should generate new keypair with valid publicKey', async () => {
    const func = async () => {
      const keypair = await generateX25519KeyPair();
      decodePublicKey(keypair.publicKeyMultibase);
    };
    await expect(func()).resolves.not.toThrow();
  });
});

describe('getEd25519SignatureSuite', () => {
  it('should return valid ed25519 signature suite with signer', async () => {
    const suite = await getEd25519SignatureSuite({ publicKey });
    expect(suite).toHaveProperty('signer');
    expect(suite.signer).toHaveProperty('sign');
  });

  it('should return valid ed25519 signature suite with verifier', async () => {
    const suite = await getEd25519SignatureSuite({ publicKey });
    expect(suite).toHaveProperty('verifier');
    expect(suite.verifier).toHaveProperty('verify');
  });

  it('should return valid ed25519 signature suite with valid type', async () => {
    const suite = await getEd25519SignatureSuite({ publicKey });
    expect(suite).toHaveProperty('type');
    expect(suite.type).toBe('Ed25519Signature2020');
  });

  it('should return valid ed25519 signature suite with valid context', async () => {
    const suite = await getEd25519SignatureSuite({ publicKey });
    expect(suite).toHaveProperty('contextUrl');
    expect(suite.contextUrl).toBe(ED25519_VERIFICATION_KEY_2020_CONTEXT);
  });

  it('should return valid ed25519 signature suite with only publicKeyMultibase', async () => {
    const publicKeyMultibase = encodePublicKey(publicKey);
    const suite = await getEd25519SignatureSuite({ publicKeyMultibase });
    expect(suite.key.publicKeyMultibase).toBe(publicKeyMultibase);
  });

  it('should return valid ed25519 signature suite with only privateKeyMultibase', async () => {
    const privateKeyMultibase = encodePrivateKey(privateKey);
    const suite = await getEd25519SignatureSuite({ privateKeyMultibase });
    expect(suite.key.privateKeyMultibase).toBe(privateKeyMultibase);
  });

  it('should return valid ed25519 signature suite with only privateKey', async () => {
    const publicKeyMultibase = encodePublicKey(publicKey);
    const suite = await getEd25519SignatureSuite({ privateKey });
    expect(suite.key.publicKeyMultibase).toBe(publicKeyMultibase);
  });

  it('should return valid ed25519 signature suite with only publicKey', async () => {
    const publicKeyMultibase = encodePublicKey(publicKey);
    const suite = await getEd25519SignatureSuite({ publicKey });
    expect(suite.key.publicKeyMultibase).toBe(publicKeyMultibase);
  });

  it('should return valid ed25519 signature suite with provided id', async () => {
    const suite = await getEd25519SignatureSuite({ privateKey, id: 'keyid' });
    expect(suite.key.id).toBe('keyid');
  });

  it('should return valid ed25519 signature suite with provided controller', async () => {
    const suite = await getEd25519SignatureSuite({ privateKey, controller: 'keycontroller' });
    expect(suite.key.controller).toBe('keycontroller');
  });
});
