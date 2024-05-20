import { utils } from '@klayr-did/klayr-decentralized-identifier';
import { cryptography } from 'klayr-sdk';

export const chainspace = 'test';
export const privateKey = Buffer.from(
  '96238e3e3e4e1c31321b4ad2cd88dcd3a6e14fc11a82c11f6c3e63272a1768ff330606ae444531582beaad5891c5733ce16ea19768be5a8a45ae10fea99f2032',
  'hex',
);
export const publicKey = cryptography.ed.getPublicKeyFromPrivateKey(privateKey);
export const issuerDID = `${
  utils.constant.KLAYR_DID_PREFIX
}:${chainspace}:address:${cryptography.address.getKlayr32AddressFromPublicKey(publicKey)}`;

export const credential = {
  '@context': ['https://www.w3.org/2018/credentials/v1'],
  type: ['VerifiableCredential'],
  issuer: issuerDID,
  issuanceDate: '2023-08-16T16:18:07.216Z',
  credentialSubject: {
    id: 'urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
  },
};

export const credentialProof = {
  type: 'Ed25519Signature2020',
  created: '2024-05-20T14:27:25Z',
  verificationMethod:
    'did:klayr:test:address:klym9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t#z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5',
  proofPurpose: 'assertionMethod',
  proofValue: 'zjWVV5nzMz69HE5aYGA6rzKuAPsHHDEtquLK3PqmAHXeSRu8sdf2oKKn9NxYDQpYRHzKGW6cqiKaDXE4CcXRUViG',
};

export const credentialProofBytes = Buffer.from(
  '0a14456432353531395369676e6174757265323032301214323032342d30352d32305431343a32373a32355a1a716469643a6b6c6179723a746573743a616464726573733a6b6c796d39747a797a63703438627133393478667a74327870616e366a6862756f737368376b6a3474237a364d6b687453416679676541385759426a6650785335656174556a36555278476642535952754845624679777a6135220f617373657274696f6e4d6574686f642a587a6a575656356e7a4d7a36394845356159474136727a4b75415073484844457471754c4b3350716d4148586553527538736466326f4b4b6e394e78594451705952487a4b4757366371694b61445845344363585255566947',
  'hex',
);

export const credentialBytes = Buffer.from(
  '5d000000021a01000000000000002018c9e70d10473a2ce63ba80690f9faa7a4ff01a967b7b0299f0453ec50fb7b5fd4f6b81fddb5006f0aaad6b3ab0bc115f9a767c05d09b9a442594c89bcfae2edd27d7eb8faa4e18acdba658e5c62efd7f87856b9cf64b4fafcf90c7f074e5735199dedf317695b27f12c998cb657f101d7a1db33b20cf8b8cba2e421222e204a464af7c817ddac8b03c1cfbbdbefe7dc6777351d44713aae7374f879455a7031d2aaff659cf039890ac7a730a1bd8eb1f38b60aea2509cccf864ec2bc7caaea5edbeac2aa7069a5dfb0725fbb34368a4764f72a46a1e62d824885997c50c495980e960287d496370a59c84cdfff343d100',
  'hex',
);

export const presentation = {
  '@context': ['https://www.w3.org/2018/credentials/v1'],
  type: ['VerifiablePresentation'],
  verifiableCredential: [
    {
      '@context': ['https://www.w3.org/2018/credentials/v1'],
      type: ['VerifiableCredential'],
      issuer: 'did:klayr:test:address:klym9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t',
      issuanceDate: '2023-08-16T16:18:07.216Z',
      credentialSubject: {
        id: 'urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
      },
    },
  ],
  holder: 'did:klayr:test:address:klym9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t',
};

export const presentationBytes = Buffer.from(
  '5d000000026301000000000000002018c9e70d10473a2ce63ba80690f9faa7a4ff01a967b7b0299f0453ec50fb7b5fd4f6b81fddb5006f0aaad6b3ab0bc115f9a767c05d09b9a442594c89fa6479fd2f435217e375d666e49be14ac7b1746abf2a95b1aa201a164722a7515b54b9cc1fa4d4bbac06b8edb34572c935869ea4fdd66188b17221e6ed2d21fed513e3e6ab82d8b4d656c9c8509d1f5db75a8fd96a31643ead1a6d95de20f1829fca7622abaa2b7af1cfd3f6234640f0ac0b5ce74fc0c2ab9ab51da3735aa94d6fd808d487c03d9aaa079f1dd3522f0d61e0d2c10caaab57b04b323978460e548ee3d63e5e008a3e6cf2bf76c178eead67d6561c2c7bdb80cff190013c8d31d1e3ef1b54241e320f82c4505522228fdcff32f38000',
  'hex',
);

export const presentationChallenge = 'challenge';

export const issuerDIDDoc = {
  '@context': [
    'https://www.w3.org/ns/did/v1',
    'https://w3id.org/security/suites/ed25519-2020/v1',
    'https://w3id.org/security/suites/x25519-2020/v1',
  ],
  id: 'did:klayr:test:address:klym9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t',
  controller: ['did:klayr:test:address:klym9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t'],
  verificationMethod: [
    {
      id: 'did:klayr:test:address:klym9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t#z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5',
      type: 'Ed25519VerificationKey2020',
      controller: 'did:klayr:test:address:klym9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t',
      publicKeyMultibase: 'z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5',
    },
  ],
  authentication: [
    'did:klayr:test:address:klym9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t#z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5',
  ],
  assertionMethod: [
    'did:klayr:test:address:klym9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t#z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5',
  ],
  capabilityInvocation: [
    'did:klayr:test:address:klym9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t#z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5',
  ],
  keyAgreement: [
    {
      id: 'did:klayr:test:address:klym9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t#z6LSgewxKK6vPH1NGjp5UpGFqU1x94VEtvQfGx4W1THZWSxe',
      type: 'X25519KeyAgreementKey2020',
      controller: 'did:klayr:test:address:klym9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t',
      publicKeyMultibase: 'z6LSgewxKK6vPH1NGjp5UpGFqU1x94VEtvQfGx4W1THZWSxe',
    },
  ],
  service: [],
};

export const jwePlain = { key: 'value' };
export const jwePlainText = JSON.stringify({ key: 'value' });

export const ipc = '~/.klayr/klayr-did';
export const ws = 'ws://localhost:7887/rpc-ws';
