import { CipherInterface } from '../types';

// eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
const dynamicImport = new Function('specifier', 'return import(specifier)');

export async function createCipher() {
  const { Cipher } = await dynamicImport('@digitalcredentials/minimal-cipher');
  const cipher = new Cipher();
  return cipher as CipherInterface;
}
