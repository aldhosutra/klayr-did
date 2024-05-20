import { cryptography } from 'klayr-sdk';
import { KLAYR_DID_PREFIX } from '../../src/utils/constant';

export const chainspace = 'test';
export const privateKey = Buffer.from(
  '96238e3e3e4e1c31321b4ad2cd88dcd3a6e14fc11a82c11f6c3e63272a1768ff330606ae444531582beaad5891c5733ce16ea19768be5a8a45ae10fea99f2032',
  'hex',
);
export const publicKey = cryptography.ed.getPublicKeyFromPrivateKey(privateKey);
export const senderDID = `${KLAYR_DID_PREFIX}:${chainspace}:address:${cryptography.address.getKlayr32AddressFromPublicKey(
  publicKey,
)}`;
export const fingerprint = 'z6LSgewxKK6vPH1NGjp5UpGFqU1x94VEtvQfGx4W1THZWSxe';
export const senderKAKey =
  'did:klayr:test:address:klym9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t#z6LSgewxKK6vPH1NGjp5UpGFqU1x94VEtvQfGx4W1THZWSxe';
export const senderVMKey =
  'did:klayr:test:address:klym9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4t#z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5';

export const publicKeyMultiBase = 'z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5';
export const privateKeyMultiBase =
  'zrv3dzvgBDRdciUVEX3XYbPvB9yM9pwC5a15kV9W3xJ5nxWvxpzQWK8Hvp9pzmih5NLQifMNEy6PAyLwzopbRsX8pLH';

export const x25519PublicKeyMultibase = 'z6LSgewxKK6vPH1NGjp5UpGFqU1x94VEtvQfGx4W1THZWSxe';
export const x25519PrivateKeyMultibase = 'z3weoVSXQALiHEz2mqVSF5yzBCShMEM8hP1Vos71nn6QArXP';

export const ipc = '~/.klayr/klayr-did';
export const ws = 'ws://localhost:7887/rpc-ws';

export const signatureMessage = 'message';
export const signature = Buffer.from(
  '5f59c3f2e10e54d112b36efa7f9d07da7f80c7185bcd72e264267171db6ceb71aa19e0e8dd19233b02caffb50d91cebf852051c34a1badbe2ee96a681ae60b0c',
  'hex',
);

export const signaturePayload = Buffer.from(
  '3f196ef773bbf56e655020cb27338bfd4aa5341acb14609459fee7f65b8139685a8ead92a747749c9a31c71f76a447ca7f4a7e61374db0b5e5680a7140847d0f',
  'hex',
);

export const jwePlain = { key: 'value' };
export const jwePlainText = JSON.stringify({ key: 'value' });
export const encryptedJwe = {
  protected: 'eyJlbmMiOiJYQzIwUCJ9',
  recipients: [
    {
      header: {
        kid: 'did:klayr:test:address:klym9tzyzcp48bq394xfzt2xpan6jhbuossh7kj4tundefined#z6LSgewxKK6vPH1NGjp5UpGFqU1x94VEtvQfGx4W1THZWSxe',
        alg: 'ECDH-ES+A256KW',
        epk: {
          kty: 'OKP',
          crv: 'X25519',
          x: '4QYRl-ZGAGIQf8VnEMgDkOLpvUkUWDXg4aRK9uDMmB8',
        },
        apu: '4QYRl-ZGAGIQf8VnEMgDkOLpvUkUWDXg4aRK9uDMmB8',
        apv: 'ZGlkOmxpc2s6dGVzdDphZGRyZXNzOmxza205dHp5emNwNDhicTM5NHhmenQyeHBhbjZqaGJ1b3NzaDdrajR0I3o2TFNnZXd4S0s2dlBIMU5HanA1VXBHRnFVMXg5NFZFdHZRZkd4NFcxVEhaV1N4ZQ',
      },
      encrypted_key: '2NKhqgOjBTSqz21FXYKoGRMYEJfLQMDXkggOpyeruoXgdkGn3QBXMQ',
    },
  ],
  iv: 'CIlcF38NRuzna96X9M8vBMQGLvPqMzJh',
  ciphertext: 'rQ1xqUhBOsZQ5AeTrTJI',
  tag: 'Y0jylsIsv6yNM_oSAUPUtQ',
};
export const encryptedJweBytes = Buffer.from(
  '0a1465794a6c626d4d694f694a59517a497755434a3912c9030a8e030a7a6469643a6b6c6179723a746573743a616464726573733a6b6c796d39747a797a63703438627133393478667a74327870616e366a6862756f737368376b6a3474756e646566696e6564237a364c53676577784b4b36765048314e476a703555704746715531783934564574765166477834573154485a57537865120e454344482d45532b413235364b571a3a0a034f4b5012065832353531391a2b345159526c2d5a47414749516638566e454d67446b4f4c7076556b55574458673461524b3975444d6d4238222b345159526c2d5a47414749516638566e454d67446b4f4c7076556b55574458673461524b3975444d6d42382a96015a476c6b4f6d7870633273366447567a644470685a4752795a584e7a4f6d787a6132303564487035656d4e774e44686963544d354e48686d656e517965484268626a5a7161474a3162334e7a61446472616a523049336f3254464e6e5a58643453307332646c42494d553548616e413156584248526e46564d5867354e465a4664485a525a6b64344e4663785645686156314e345a511236324e4b6871674f6a425453717a32314658594b6f47524d59454a664c514d44586b67674f70796572756f5867646b476e335142584d511a2043496c634633384e52757a6e61393658394d3876424d51474c7650714d7a4a68221472513178715568424f735a513541655472544a492a1659306a796c7349737636794e4d5f6f53415550557451',
  'hex',
);

export const signData = 'data';
export const signatureForSignData = Buffer.from(
  'b4db62fefb0409fd1811523d2d08d8119af6424fe239aa9c6a81b65bc03ca44bbc058c1aeeed96bad190bce850b662c8a3a8e0337f1e8b0bf230aff19509370c',
  'hex',
);

export const senderDIDDoc = {
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
