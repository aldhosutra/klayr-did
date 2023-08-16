/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { driver } from '@dist/resolver';
import { senderDIDDoc } from '../../../setup/constant';
import { mockedContext, mockedMethod, mockedMethodGetConfig, mockedMethodRead } from '../../../setup/mocks';

describe('initChainspace', () => {
  it('should automatically retrieve chainspace from method', async () => {
    const chainDriver = driver.createOnChainDriver(mockedContext as any, mockedMethod as any);
    await chainDriver.initChainspace();
    expect(mockedMethodGetConfig).toHaveBeenCalled();
  });
});

describe('get', () => {
  it('should get key fragment accordingly', async () => {
    const chainDriver = driver.createOnChainDriver(mockedContext as any, mockedMethod as any);
    const key = await chainDriver.get({ url: senderDIDDoc.verificationMethod[0].id });
    delete key['@context'];
    expect(mockedMethodRead).toHaveBeenCalled();
    expect(key).toStrictEqual(senderDIDDoc.verificationMethod[0]);
  });

  it('should return undefined if did not exist', async () => {
    const chainDriver = driver.createOnChainDriver(mockedContext as any, mockedMethod as any);
    const key = await chainDriver.get({ url: 'did:lisk:not:exist' });
    expect(mockedMethodRead).toHaveBeenCalled();
    expect(key).toBeUndefined();
  });

  it('should throw an error if did or url is not provided', async () => {
    const func = async () => {
      const chainDriver = driver.createOnChainDriver(mockedContext as any, mockedMethod as any);
      await chainDriver.get({});
    };
    await expect(func()).rejects.toThrow();
  });
});
