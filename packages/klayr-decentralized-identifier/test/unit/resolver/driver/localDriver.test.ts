/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable jest/expect-expect */
import { driver } from '@dist/resolver';
import { chainspace } from '../../../setup/constant';

describe('constructor', () => {
  it('should have undefined chainspace if not assigned', () => {
    const localDriver = driver.createLocalDriver(undefined as any);
    expect(localDriver.chainspace).toBeUndefined();
  });

  it('should have correct chainspace if assigned', () => {
    const localDriver = driver.createLocalDriver(chainspace);
    expect(localDriver.chainspace).toBe(chainspace);
  });
});

describe('initChainspace', () => {
  it('should throw an error when initialize chainspace without constructing chainspace', async () => {
    const func = async () => {
      const localDriver = driver.createLocalDriver(undefined as any);
      await localDriver.initChainspace();
    };
    await expect(func()).rejects.toThrow();
  });
});

describe('get', () => {
  it('should throw an error, because local driver cant retrieve a did', async () => {
    const func = async () => {
      const localDriver = driver.createLocalDriver(undefined as any);
      await localDriver.get({});
    };
    await expect(func()).rejects.toThrow();
  });
});
