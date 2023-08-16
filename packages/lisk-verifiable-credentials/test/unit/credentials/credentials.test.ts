/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { issueCredential, verifyCredential } from '@dist/credentials';
import { utils } from 'lisk-sdk';
import { credential, credentialProof, ipc, privateKey, publicKey } from '../../setup/constant';
import { documentLoader, mockedDocumentLoader, mockedReadDID } from '../../setup/mocks';

describe('issueCredential', () => {
  afterEach(jest.clearAllMocks);

  it('should issue credential with valid proof', async () => {
    const signedVC = await issueCredential(credential, privateKey, { ipc });
    expect(signedVC.proof).toBeDefined();
    expect(signedVC.proof).toHaveProperty('type');
    expect(signedVC.proof).toHaveProperty('created');
    expect(signedVC.proof).toHaveProperty('verificationMethod');
    expect(signedVC.proof).toHaveProperty('proofPurpose');
    expect(signedVC.proof).toHaveProperty('proofValue');
  });

  it('should throw an error if credential.issuer is not present', async () => {
    const func = async () => {
      const newCredential = utils.objects.cloneDeep(credential);
      newCredential.issuer = undefined;
      await issueCredential(newCredential, privateKey, { ipc });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if credential.issuer is not available on chain', async () => {
    const func = async () => {
      const newCredential = utils.objects.cloneDeep(credential);
      newCredential.issuer = 'did:lisk:not:inthe:chain';
      await issueCredential(newCredential, privateKey, { ipc });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if private key doesnt have assertionMethod capability', async () => {
    const func = async () => {
      const newCredential = utils.objects.cloneDeep(credential);
      await issueCredential(newCredential, Buffer.alloc(64), { ipc });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should use provided document loader', async () => {
    const func = async () => {
      const newCredential = utils.objects.cloneDeep(credential);
      await issueCredential(newCredential, privateKey, { loader: documentLoader });
    };
    await expect(func()).rejects.toThrow();
    expect(mockedDocumentLoader).toHaveBeenCalled();
  });

  it('should retrieve issuer id in case its provided that way', async () => {
    const func = async () => {
      const newCredential = utils.objects.cloneDeep(credential);
      newCredential.issuer = { id: credential.issuer };
      await issueCredential(newCredential, privateKey, { ipc });
    };
    await expect(func()).resolves.not.toThrow();
    expect(mockedReadDID).toHaveBeenCalledWith({ did: credential.issuer });
  });
});

describe('verifyCredential', () => {
  afterEach(jest.clearAllMocks);

  it('should verify credential with valid proof', async () => {
    const signedVC = await issueCredential(credential, privateKey, { ipc });
    const signedCredential = utils.objects.cloneDeep(signedVC);
    signedCredential.proof = credentialProof;
    const verifyVC = await verifyCredential(signedCredential, publicKey, { ipc });
    expect(verifyVC.verified).toBe(true);
  });

  it('should throw an error if credential.proof is not present', async () => {
    const func = async () => {
      const newCredential = utils.objects.cloneDeep(credential);
      newCredential.proof = undefined;
      await verifyCredential(newCredential, publicKey, { ipc });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if credential.issuer is not present', async () => {
    const func = async () => {
      const newCredential = utils.objects.cloneDeep(credential);
      newCredential.proof = credentialProof;
      newCredential.issuer = undefined;
      await verifyCredential(newCredential, publicKey, { ipc });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should use provided document loader', async () => {
    const func = async () => {
      const signedVC = await issueCredential(credential, privateKey, { ipc });
      const signedCredential = utils.objects.cloneDeep(signedVC);
      signedCredential.proof = credentialProof;
      await verifyCredential(signedCredential, publicKey, { loader: documentLoader });
    };
    await expect(func()).resolves.not.toThrow();
    expect(mockedDocumentLoader).toHaveBeenCalled();
  });

  it('should retrieve issuer id in case its provided that way', async () => {
    const func = async () => {
      const signedVC = await issueCredential(credential, privateKey, { ipc });
      const signedCredential = utils.objects.cloneDeep(signedVC);
      signedCredential.proof = credentialProof;
      signedCredential.issuer = { id: credential.issuer };
      await verifyCredential(signedCredential, publicKey, { ipc });
    };
    await expect(func()).resolves.not.toThrow();
    expect(mockedReadDID).toHaveBeenCalledWith({ did: credential.issuer });
  });
});
