import { utils } from '@lisk-did/lisk-decentralized-identifier';
import { cryptography } from 'lisk-sdk';

export const chainspace = 'test';
export const privateKey = Buffer.from(
  '96238e3e3e4e1c31321b4ad2cd88dcd3a6e14fc11a82c11f6c3e63272a1768ff330606ae444531582beaad5891c5733ce16ea19768be5a8a45ae10fea99f2032',
  'hex',
);
export const publicKey = cryptography.ed.getPublicKeyFromPrivateKey(privateKey);
export const issuerDID = `${
  utils.constant.LISK_DID_PREFIX
}:${chainspace}:address:${cryptography.address.getLisk32AddressFromPublicKey(publicKey)}`;

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
  created: '2023-08-27T13:17:26Z',
  verificationMethod:
    'did:lisk:test:address:lskm9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t#z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5',
  proofPurpose: 'assertionMethod',
  proofValue: 'z5szpzfFfV1zHxrYnbZmR19P1ziVg16VyXMWkFNRWR1BrRxnRyTLU3TsQcrctDqCRMwKAVW95s18UzNR6iiKweQ3h',
};

export const credentialProofBytes = Buffer.from(
  '0a14456432353531395369676e6174757265323032301214323032332d30382d32375431333a31373a32365a1a706469643a6c69736b3a746573743a616464726573733a6c736b6d39747a797a63703438627133393478667a74327870616e366a6862756f737368376b6a3474237a364d6b687453416679676541385759426a6650785335656174556a36555278476642535952754845624679777a6135220f617373657274696f6e4d6574686f642a597a35737a707a66466656317a487872596e625a6d52313950317a69566731365679584d576b464e52575231427252786e5279544c553354735163726374447143524d774b4156573935733138557a4e523669694b7765513368',
  'hex',
);

export const credentialBytes = Buffer.from(
  '5d000000021901000000000000002018c9e70d10473a2ce63ba80690f9faa7a4ff01a967b7b0299f0453ec50fb7b5fd4f6b81fddb5006f0aaad6b3ab0bc115f9a767c05d09b9a442594c89bcfae2edd27d7eb8faa4e18acdc42cfcbabf4a418203c2f2f9a004ca6eb45b164184ff289421fe497a0709e7a8952b5311b21896ad7d4b187dc185c987a79edcea88a70afe1b6bf4d4336987985d32f6cf985bccac3e76c0df65373ae91e394ae244bc421919330695a4fefc32e270a3a544b96e99a37c2e9ad3afd8aa0b40cf61d35b6abd949ef011a826a396892aeae49bf4dfe5bebba9c42aad47fbe23f6b810cfdc12821ac6e17ae7526af6a10b094ff8e5ab000',
  'hex',
);

export const presentation = {
  '@context': ['https://www.w3.org/2018/credentials/v1'],
  type: ['VerifiablePresentation'],
  verifiableCredential: [
    {
      '@context': ['https://www.w3.org/2018/credentials/v1'],
      type: ['VerifiableCredential'],
      issuer: 'did:lisk:test:address:lskm9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t',
      issuanceDate: '2023-08-16T16:18:07.216Z',
      credentialSubject: {
        id: 'urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6',
      },
    },
  ],
  holder: 'did:lisk:test:address:lskm9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t',
};

export const presentationBytes = Buffer.from(
  '5d000000026201000000000000002018c9e70d10473a2ce63ba80690f9faa7a4ff01a967b7b0299f0453ec50fb7b5fd4f6b81fddb5006f0aaad6b3ab0bc115f9a767c05d09b9a442594c89fa6479fd2f435217e375d666e49be14ac7b1746abf2a95b1aa201a1647230f8ddc3287be17165533ebe70773aa864e924192e0402452544148c8fc809e369724d7c03c105a16ebd44a0fb5c6b1e3c526b330bd876dd7f33368401c99041ca2fe35164489b00b608dda2a0db5fb5e8b480207e05dbb6756bb3bbf211617854bf448a58a1d374bf2d3049989b017d847e658c2be344bc7d5468085508324cac80acb41a10e030f40edfeca73032dc0fb09bf4909021bb245e3378c44b78a94209fdb509788bccf1119978e1458b2b5602d04ffe00ea800',
  'hex',
);

export const presentationChallenge = 'challenge';

export const issuerDIDDoc = {
  '@context': [
    'https://www.w3.org/ns/did/v1',
    'https://w3id.org/security/suites/ed25519-2020/v1',
    'https://w3id.org/security/suites/x25519-2020/v1',
  ],
  id: 'did:lisk:test:address:lskm9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t',
  controller: ['did:lisk:test:address:lskm9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t'],
  verificationMethod: [
    {
      id: 'did:lisk:test:address:lskm9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t#z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5',
      type: 'Ed25519VerificationKey2020',
      controller: 'did:lisk:test:address:lskm9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t',
      publicKeyMultibase: 'z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5',
    },
  ],
  authentication: [
    'did:lisk:test:address:lskm9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t#z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5',
  ],
  assertionMethod: [
    'did:lisk:test:address:lskm9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t#z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5',
  ],
  capabilityInvocation: [
    'did:lisk:test:address:lskm9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t#z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5',
  ],
  keyAgreement: [
    {
      id: 'did:lisk:test:address:lskm9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t#z6LSgewxKK6vPH1NGjp5UpGFqU1x94VEtvQfGx4W1THZWSxe',
      type: 'X25519KeyAgreementKey2020',
      controller: 'did:lisk:test:address:lskm9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t',
      publicKeyMultibase: 'z6LSgewxKK6vPH1NGjp5UpGFqU1x94VEtvQfGx4W1THZWSxe',
    },
  ],
  service: [],
};

export const jwePlain = { key: 'value' };
export const jwePlainText = JSON.stringify({ key: 'value' });

export const ipc = '~/.lisk/lisk-did';
export const ws = 'ws://localhost:7887/rpc-ws';
