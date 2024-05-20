/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { issuePresentation, verifyPresentation } from '@dist/credentials/presentation';
import { issueCredential } from '@dist/credentials';
import { utils } from 'klayr-sdk';
import {
  credential,
  credentialProof,
  ipc,
  issuerDID,
  presentationChallenge,
  privateKey,
  publicKey,
  ws,
} from '../../setup/constant';
import {
  documentLoader,
  mockedContext,
  mockedCreateIPCClient,
  mockedCreateWSClient,
  mockedDocumentLoader,
  mockedMethod,
  mockedMethodRead,
} from '../../setup/mocks';

describe('issuePresentation', () => {
  afterEach(jest.clearAllMocks);

  it('should issue a valid presentation', async () => {
    const signedVC = await issueCredential(credential, privateKey, { ipc });
    const issuedVP = await issuePresentation([signedVC], issuerDID, privateKey, presentationChallenge, { ipc });
    expect(issuedVP.proof).toBeDefined();
    expect(issuedVP.proof).toHaveProperty('type');
    expect(issuedVP.proof).toHaveProperty('created');
    expect(issuedVP.proof).toHaveProperty('verificationMethod');
    expect(issuedVP.proof).toHaveProperty('proofPurpose');
    expect(issuedVP.proof).toHaveProperty('proofValue');
  });

  it('should throw an error if one of credential.proof is not present', async () => {
    const func = async () => {
      await issuePresentation([credential], issuerDID, privateKey, presentationChallenge, { ipc });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if holderDID is not available on chain', async () => {
    const func = async () => {
      const signedVC = await issueCredential(credential, privateKey, { ipc });
      const holderDID = 'did:klayr:not:inthe:chain';
      await issuePresentation([signedVC], holderDID, privateKey, presentationChallenge, { ipc });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if private key doesnt have assertionMethod capability', async () => {
    const func = async () => {
      const signedVC = await issueCredential(credential, privateKey, { ipc });
      await issuePresentation([signedVC], issuerDID, Buffer.alloc(64), presentationChallenge, { ipc });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should use provided document loader', async () => {
    const func = async () => {
      const signedVC = await issueCredential(credential, privateKey, { ipc });
      await issuePresentation([signedVC], issuerDID, privateKey, presentationChallenge, { loader: documentLoader });
    };
    await expect(func()).rejects.toThrow();
    expect(mockedDocumentLoader).toHaveBeenCalled();
  });

  it('should use provided ipc', async () => {
    const func = async () => {
      const signedVC = await issueCredential(credential, privateKey, { ipc });
      await issuePresentation([signedVC], issuerDID, privateKey, presentationChallenge, { ipc });
    };
    await expect(func()).resolves.not.toThrow();
    expect(mockedCreateIPCClient).toHaveBeenCalled();
  });

  it('should use provided ws', async () => {
    const func = async () => {
      const signedVC = await issueCredential(credential, privateKey, { ipc });
      await issuePresentation([signedVC], issuerDID, privateKey, presentationChallenge, { ws });
    };
    await expect(func()).resolves.not.toThrow();
    expect(mockedCreateWSClient).toHaveBeenCalled();
  });

  it('should use provided chain loader', async () => {
    const func = async () => {
      const signedVC = await issueCredential(credential, privateKey, { ipc });
      await issuePresentation([signedVC], issuerDID, privateKey, presentationChallenge, {
        context: mockedContext as any,
        method: mockedMethod as any,
      });
    };
    await expect(func()).resolves.not.toThrow();
    expect(mockedMethodRead).toHaveBeenCalled();
  });
});

describe('verifyPresentation', () => {
  afterEach(jest.clearAllMocks);

  it('should verify a presentation with valid proof', async () => {
    const signedVC = await issueCredential(credential, privateKey, { ipc });
    const signedCredential = utils.objects.cloneDeep(signedVC);
    signedCredential.proof = credentialProof;
    const issuedVP = await issuePresentation([signedCredential as any], issuerDID, privateKey, presentationChallenge, {
      ipc,
    });
    const verifyVP = await verifyPresentation(issuedVP, publicKey, { ipc });
    expect(verifyVP.verified).toBe(true);
  });

  it('should throw an error if presentation.proof is not present', async () => {
    const func = async () => {
      const signedVC = await issueCredential(credential, privateKey, { ipc });
      const signedCredential = utils.objects.cloneDeep(signedVC);
      const issuedVP = await issuePresentation(
        [signedCredential as any],
        issuerDID,
        privateKey,
        presentationChallenge,
        { ipc },
      );
      const signedPresentation = utils.objects.cloneDeep(issuedVP);
      signedPresentation.proof = undefined;
      await verifyPresentation(signedPresentation, publicKey, { ipc });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if presentation.holder is not present', async () => {
    const func = async () => {
      const signedVC = await issueCredential(credential, privateKey, { ipc });
      const signedCredential = utils.objects.cloneDeep(signedVC);
      const issuedVP = await issuePresentation(
        [signedCredential as any],
        issuerDID,
        privateKey,
        presentationChallenge,
        { ipc },
      );
      const signedPresentation = utils.objects.cloneDeep(issuedVP);
      signedPresentation.holder = undefined;
      await verifyPresentation(signedPresentation, publicKey, { ipc });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should use provided document loader', async () => {
    const func = async () => {
      const signedVC = await issueCredential(credential, privateKey, { ipc });
      const signedCredential = utils.objects.cloneDeep(signedVC);
      const issuedVP = await issuePresentation(
        [signedCredential as any],
        issuerDID,
        privateKey,
        presentationChallenge,
        { ipc },
      );
      const signedPresentation = utils.objects.cloneDeep(issuedVP);
      await verifyPresentation(signedPresentation, publicKey, { loader: documentLoader });
    };
    await expect(func()).resolves.not.toThrow();
    expect(mockedDocumentLoader).toHaveBeenCalled();
  });

  it('should use provided ipc', async () => {
    const func = async () => {
      const signedVC = await issueCredential(credential, privateKey, { ipc });
      const signedCredential = utils.objects.cloneDeep(signedVC);
      const issuedVP = await issuePresentation(
        [signedCredential as any],
        issuerDID,
        privateKey,
        presentationChallenge,
        { ipc },
      );
      const signedPresentation = utils.objects.cloneDeep(issuedVP);
      await verifyPresentation(signedPresentation, publicKey, { ipc });
    };
    await expect(func()).resolves.not.toThrow();
    expect(mockedCreateIPCClient).toHaveBeenCalled();
  });

  it('should use provided ws', async () => {
    const func = async () => {
      const signedVC = await issueCredential(credential, privateKey, { ipc });
      const signedCredential = utils.objects.cloneDeep(signedVC);
      const issuedVP = await issuePresentation(
        [signedCredential as any],
        issuerDID,
        privateKey,
        presentationChallenge,
        { ipc },
      );
      const signedPresentation = utils.objects.cloneDeep(issuedVP);
      await verifyPresentation(signedPresentation, publicKey, { ws });
    };
    await expect(func()).resolves.not.toThrow();
    expect(mockedCreateWSClient).toHaveBeenCalled();
  });

  it('should use provided chain loader', async () => {
    const func = async () => {
      const signedVC = await issueCredential(credential, privateKey, { ipc });
      const signedCredential = utils.objects.cloneDeep(signedVC);
      const issuedVP = await issuePresentation(
        [signedCredential as any],
        issuerDID,
        privateKey,
        presentationChallenge,
        { context: mockedContext as any, method: mockedMethod as any },
      );
      const signedPresentation = utils.objects.cloneDeep(issuedVP);
      await verifyPresentation(signedPresentation, publicKey, { ws });
    };
    await expect(func()).resolves.not.toThrow();
    expect(mockedMethodRead).toHaveBeenCalled();
  });
});
