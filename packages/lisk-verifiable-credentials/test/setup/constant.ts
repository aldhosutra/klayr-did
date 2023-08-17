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
  created: '2023-08-16T16:35:17Z',
  verificationMethod:
    'did:lisk:test:address:lskm9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t#z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5',
  proofPurpose: 'assertionMethod',
  proofValue: 'zEegyTnYAFdACqS11ZYfCtCHxMs4K3o3wzqSKUsSNcTvrtdDajK4xYBFJeXqqKNya4UkTDyGHR2J2vYbsyCvc7Vj',
};

export const credentialProofBytes = Buffer.from(
  '0a14456432353531395369676e6174757265323032301214323032332d30382d31365431363a33353a31375a1a706469643a6c69736b3a746573743a616464726573733a6c736b6d39747a797a63703438627133393478667a74327870616e366a6862756f737368376b6a3474237a364d6b687453416679676541385759426a6650785335656174556a36555278476642535952754845624679777a6135220f617373657274696f6e4d6574686f642a587a45656779546e594146644143715331315a596643744348784d73344b336f33777a71534b5573534e63547672746444616a4b34785942464a655871714b4e796134556b544479474852324a32765962737943766337566a',
  'hex',
);

export const credentialBytes = Buffer.from(
  '7b2240636f6e74657874223a5b2268747470733a2f2f7777772e77332e6f72672f323031382f63726564656e7469616c732f7631225d2c2274797065223a5b2256657269666961626c6543726564656e7469616c225d2c22697373756572223a226469643a6c69736b3a746573743a616464726573733a6c736b6d39747a797a63703438627133393478667a74327870616e366a6862756f737368376b6a3474222c2269737375616e636544617465223a22323032332d30382d31365431363a31383a30372e3231365a222c2263726564656e7469616c5375626a656374223a7b226964223a2275726e3a757569643a66383164346661652d376465632d313164302d613736352d303061306339316536626636227d7d',
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
  '7b2240636f6e74657874223a5b2268747470733a2f2f7777772e77332e6f72672f323031382f63726564656e7469616c732f7631225d2c2274797065223a5b2256657269666961626c6550726573656e746174696f6e225d2c2276657269666961626c6543726564656e7469616c223a5b7b2240636f6e74657874223a5b2268747470733a2f2f7777772e77332e6f72672f323031382f63726564656e7469616c732f7631225d2c2274797065223a5b2256657269666961626c6543726564656e7469616c225d2c22697373756572223a226469643a6c69736b3a746573743a616464726573733a6c736b6d39747a797a63703438627133393478667a74327870616e366a6862756f737368376b6a3474222c2269737375616e636544617465223a22323032332d30382d31365431363a31383a30372e3231365a222c2263726564656e7469616c5375626a656374223a7b226964223a2275726e3a757569643a66383164346661652d376465632d313164302d613736352d303061306339316536626636227d7d5d2c22686f6c646572223a226469643a6c69736b3a746573743a616464726573733a6c736b6d39747a797a63703438627133393478667a74327870616e366a6862756f737368376b6a3474227d',
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
