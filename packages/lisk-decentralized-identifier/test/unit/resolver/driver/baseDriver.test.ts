/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { createResolver, driver } from '@dist/resolver';
import { encodePublicKey } from '@dist/cryptography/codec';
import * as suite from '@dist/cryptography/key';
import { validateDIDDocument } from '@dist/utils';
import { BaseDriver } from '@dist/resolver/driver/baseDriver';
import { chainspace, fingerprint, ipc, privateKey, publicKey, senderDID, senderDIDDoc } from '../../../setup/constant';

class DummyBaseDriver extends BaseDriver {}

describe('_getKey', () => {
  it('should return specified key fragment', async () => {
    const did = await createResolver({ ipc }).get({ did: senderDIDDoc.assertionMethod[0] });
    delete did['@context'];
    expect(did).toStrictEqual(senderDIDDoc.verificationMethod[0]);
  });
});

describe('_keyPairToDidDocument', () => {
  afterEach(jest.clearAllMocks);

  it('should throw an error for unknown key type', async () => {
    jest.spyOn(suite, 'createEd25519KeyPair').mockImplementation(async (_options: any) => {
      return Promise.resolve({
        type: 'unknown',
      } as any);
    });
    const func = async () => {
      const localDriver = driver.createLocalDriver(chainspace);
      await localDriver._keyPairToDidDocument({ publicKeyMultibase: encodePublicKey(publicKey) } as any, 'chainspace');
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('computeId', () => {
  it('should be able to compute valid id', async () => {
    const localDriver = driver.createLocalDriver(chainspace);
    const id = await localDriver.computeId({
      publicKeyMultibase: encodePublicKey(publicKey),
      fingerprint: () => fingerprint,
    } as any);
    expect(id).toBe(`${senderDID}#${fingerprint}`);
  });
});

describe('publicMethodFor', () => {
  it('should be able to return valid public method as specified', () => {
    const localDriver = driver.createLocalDriver(chainspace);
    const publicMethod = localDriver.publicMethodFor({ didDocument: senderDIDDoc, purpose: 'assertionMethod' });
    expect(publicMethod).toStrictEqual(senderDIDDoc.verificationMethod[0]);
  });

  it('should throw an error for unknown public method', async () => {
    const func = async () => {
      const localDriver = driver.createLocalDriver(chainspace);
      localDriver.publicMethodFor({ didDocument: senderDIDDoc, purpose: 'unknown' });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if purpose is undefined', async () => {
    const func = async () => {
      const localDriver = driver.createLocalDriver(chainspace);
      localDriver.publicMethodFor({ didDocument: senderDIDDoc, purpose: undefined as any });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if didDocument is undefined', async () => {
    const func = async () => {
      const localDriver = driver.createLocalDriver(chainspace);
      localDriver.publicMethodFor({ didDocument: undefined as any, purpose: 'assertionMethod' });
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('generate', () => {
  it('should generate a valid didDocument', async () => {
    const func = async () => {
      const localDriver = driver.createLocalDriver(chainspace);
      const generated = await localDriver.generate();
      validateDIDDocument(generated.didDocument);
    };
    await expect(func()).resolves.not.toThrow();
  });

  it('should generate a valid document based on privateKey', async () => {
    const localDriver = driver.createLocalDriver(chainspace);
    const generated = await localDriver.generate({ privateKey });
    expect(generated.didDocument.id).toBe(senderDID);
  });

  it('should generate a valid keypair', async () => {
    const localDriver = driver.createLocalDriver(chainspace);
    const generated = await localDriver.generate();
    expect(generated.keyPairs.get(generated.didDocument.verificationMethod[0].id)).toHaveProperty('id');
    expect(generated.keyPairs.get(generated.didDocument.verificationMethod[0].id)).toHaveProperty('controller');
    expect(generated.keyPairs.get(generated.didDocument.verificationMethod[0].id)).toHaveProperty('publicKeyMultibase');
    expect(generated.keyPairs.get(generated.didDocument.verificationMethod[0].id)).toHaveProperty(
      'privateKeyMultibase',
    );
    expect(generated.keyPairs.get(generated.didDocument.verificationMethod[0].id)).toHaveProperty('type');
  });

  it('should generate a valid methodFor', async () => {
    const localDriver = driver.createLocalDriver(chainspace);
    const generated = await localDriver.generate();
    const assertion = generated.methodFor({ purpose: 'assertionMethod' });
    expect(assertion.id).toBe(generated.didDocument.assertionMethod[0]);
  });
});

describe('initChainspace', () => {
  it('should throw an error for not implemented class member', async () => {
    const func = async () => {
      const base = new DummyBaseDriver();
      await base.initChainspace();
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('get', () => {
  it('should throw an error for not implemented class member', async () => {
    const func = async () => {
      const base = new DummyBaseDriver();
      await base.get({ did: senderDID });
    };
    await expect(func()).rejects.toThrow();
  });
});
