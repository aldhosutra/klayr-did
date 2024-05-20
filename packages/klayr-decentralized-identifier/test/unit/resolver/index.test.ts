/* eslint-disable @typescript-eslint/no-unsafe-argument */
import * as index from '@dist/resolver/index';
import { KlayrLocalDidDriver, KlayrOffChainDidDriver, KlayrOnChainDidDriver } from '@dist/resolver/driver';
import { chainspace, ipc } from '../../setup/constant';

describe('index', () => {
  it('should export a driver package', () => {
    expect(index).toHaveProperty('driver');
  });

  it('should export createLocalDriver in a driver package', () => {
    expect(index.driver).toHaveProperty('createLocalDriver');
  });

  it('should export createOnChainDriver in a driver package', () => {
    expect(index.driver).toHaveProperty('createOnChainDriver');
  });

  it('should export createOffChainDriver in a driver package', () => {
    expect(index.driver).toHaveProperty('createOffChainDriver');
  });
});

describe('createLocalDriver', () => {
  it('should return correct local driver instance', () => {
    const driver = index.driver.createLocalDriver(chainspace);
    expect(driver).toBeInstanceOf(KlayrLocalDidDriver);
  });
});

describe('createOnChainDriver', () => {
  it('should return correct onChain driver instance', () => {
    const driver = index.driver.createOnChainDriver(undefined as any, undefined as any);
    expect(driver).toBeInstanceOf(KlayrOnChainDidDriver);
  });
});

describe('createOffChainDriver', () => {
  it('should return correct off chain driver instance', () => {
    const driver = index.driver.createOffChainDriver({ ipc });
    expect(driver).toBeInstanceOf(KlayrOffChainDidDriver);
  });
});
