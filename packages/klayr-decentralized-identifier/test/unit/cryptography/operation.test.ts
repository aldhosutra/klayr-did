import { decrypt, encrypt, sign, signLocal, verify, verifyLocal } from '@dist/cryptography/operation';
import { cryptography } from 'klayr-sdk';
import {
  encryptedJwe,
  ipc,
  jwePlainText,
  privateKey,
  publicKey,
  senderDID,
  senderKAKey,
  signData,
  signatureForSignData,
} from '../../setup/constant';
import { mockedCreateIPCClient, mockedDecrypt, mockedEncrypt, mockedKeyResolver } from '../../setup/mocks';

describe('encrypt', () => {
  afterEach(jest.clearAllMocks);

  it('should encrypt data to a valid jwe document', async () => {
    const encrypted = await encrypt(jwePlainText, [senderKAKey], { resolver: mockedKeyResolver });
    expect(encrypted).toStrictEqual(encryptedJwe);
    expect(mockedEncrypt).toHaveBeenCalled();
    expect(mockedKeyResolver.get).toHaveBeenCalled();
  });
});

describe('decrypt', () => {
  afterEach(jest.clearAllMocks);

  it('should decrypt data to a valid plain text', async () => {
    const decrypted = await decrypt(encryptedJwe, senderKAKey, privateKey, { ipc });
    expect(decrypted).toStrictEqual(jwePlainText);
    expect(mockedDecrypt).toHaveBeenCalled();
    expect(mockedCreateIPCClient).toHaveBeenCalled();
  });

  it('should throw an error if provided senderKAKey and privateKey doesnt match', async () => {
    const func = async () => {
      await decrypt(encryptedJwe, senderKAKey, Buffer.alloc(64), { ipc });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if keyid is not exists on chain', async () => {
    const func = async () => {
      await decrypt(encryptedJwe, 'did:klayr:notexist:on:chain', Buffer.alloc(64), { ipc });
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('sign', () => {
  it('should sign message successfully', async () => {
    const signed = await sign(signData, senderDID, privateKey, { ipc });
    expect(mockedCreateIPCClient).toHaveBeenCalled();
    expect(signed).toStrictEqual(signatureForSignData);
  });

  it('should throw an error if provided privateKey doesnt have correct permission', async () => {
    const func = async () => {
      await sign(signData, senderDID, Buffer.alloc(64), { ipc });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if provided senderDID doesnt exists', async () => {
    const func = async () => {
      await sign(signData, 'did:klayr:notexist:on:chain', Buffer.alloc(64), { ipc });
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('verify', () => {
  it('should verify message successfully', async () => {
    const ver = await verify(signData, senderDID, signatureForSignData, publicKey, { ipc });
    expect(mockedCreateIPCClient).toHaveBeenCalled();
    expect(ver).toBe(true);
  });

  it('should verify message using klayr cryptography if digest is turned on', async () => {
    const signatureKlayr = cryptography.ed.signMessageWithPrivateKey(signData, privateKey);
    const ver = await verify(signData, senderDID, signatureKlayr.signature, publicKey, { ipc, withDigest: true });
    expect(mockedCreateIPCClient).toHaveBeenCalled();
    expect(ver).toBe(true);
  });

  it('should throw an error if provided privateKey doesnt have correct permission', async () => {
    const func = async () => {
      await verify(signData, senderDID, signatureForSignData, Buffer.alloc(32), { ipc });
    };
    await expect(func()).rejects.toThrow();
  });

  it('should throw an error if provided senderDID doesnt exists', async () => {
    const func = async () => {
      await verify(signData, 'did:klayr:notexist:on:chain', signatureForSignData, Buffer.alloc(32), { ipc });
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('signLocal', () => {
  it('should sign message successfully and no call to client IPC', async () => {
    const signed = await signLocal(signData, privateKey);
    expect(mockedCreateIPCClient).toHaveBeenCalledTimes(0);
    expect(signed).toStrictEqual(signatureForSignData);
  });
});

describe('verifyLocal', () => {
  it('should verify message successfully and no call to ipc client', async () => {
    const ver = await verifyLocal(signData, signatureForSignData, publicKey);
    expect(mockedCreateIPCClient).toHaveBeenCalledTimes(0);
    expect(ver).toBe(true);
  });

  it('should verify message using klayr cryptography if digest is turned on', async () => {
    const signatureKlayr = cryptography.ed.signMessageWithPrivateKey(signData, privateKey);
    const ver = await verifyLocal(signData, signatureKlayr.signature, publicKey, true);
    expect(mockedCreateIPCClient).toHaveBeenCalledTimes(0);
    expect(ver).toBe(true);
  });
});
