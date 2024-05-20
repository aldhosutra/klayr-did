import { driver } from '@dist/resolver';
import { ipc } from '../../../setup/constant';
import { mockedGetConfig } from '../../../setup/mocks';

describe('_initClient', () => {
  it('should throw an error if not configured with ipc or wd on construction', async () => {
    const func = async () => {
      const offDriver = driver.createOffChainDriver({});
      await offDriver['_initClient']();
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('initChainspace', () => {
  it('should get chainspace automatically from ipc', async () => {
    const offDriver = driver.createOffChainDriver({ ipc });
    await offDriver.initChainspace();
    expect(mockedGetConfig).toHaveBeenCalled();
  });

  it('should throw an error if not configured with ipc or ws', async () => {
    const func = async () => {
      const offDriver = driver.createOffChainDriver({});
      await offDriver.initChainspace();
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('get', () => {
  it('should throw an error if did or url is not provided', async () => {
    const func = async () => {
      const offDriver = driver.createOffChainDriver({ ipc });
      await offDriver.get({});
    };
    await expect(func()).rejects.toThrow();
  });
});
