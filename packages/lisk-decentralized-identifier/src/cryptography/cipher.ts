import { JWEDocument, KeyAgreement } from '../types';

// eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
const dynamicImport = new Function('specifier', 'return import(specifier)');

interface CipherInterface {
  encrypt: ({
    data,
    recipients,
    keyResolver,
  }: {
    data: string;
    recipients: { header: { kid: string; alg: string | 'ECDH-ES+A256KW' } }[];
    keyResolver: (url: string) => Promise<any>;
  }) => Promise<JWEDocument>;
  decrypt: ({ jwe, keyAgreementKey }: { jwe: JWEDocument; keyAgreementKey: KeyAgreement }) => Promise<string>;
}

export async function createCipher() {
  const { Cipher } = await dynamicImport('@digitalcredentials/minimal-cipher');
  const cipher = new Cipher();
  return cipher as CipherInterface;
}
