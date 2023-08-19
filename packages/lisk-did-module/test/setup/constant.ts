import { cryptography } from 'lisk-sdk';
import { utils } from '@lisk-did/lisk-decentralized-identifier';

export const chainID = Buffer.from('00000000', 'hex');
export const chainspace = 'test';

export const privateKey = Buffer.from(
  '96238e3e3e4e1c31321b4ad2cd88dcd3a6e14fc11a82c11f6c3e63272a1768ff330606ae444531582beaad5891c5733ce16ea19768be5a8a45ae10fea99f2032',
  'hex',
);
export const publicKey = cryptography.ed.getPublicKeyFromPrivateKey(privateKey);

export const privateKey2 = Buffer.from(
  '6c5544797a91115dc3330ebd003851d239a706ff2aa2ab70039c5510ddf06420a78983c418f5c15a773c5a4d6273898e80dbf9db4df65d2308b90aa2bd7d7e64',
  'hex',
);
export const publicKey2 = cryptography.ed.getPublicKeyFromPrivateKey(privateKey2);

export const customDID = `${utils.constant.LISK_DID_PREFIX}:${chainspace}:namespace:custom`;

export const noDocumentDID = `${utils.constant.LISK_DID_PREFIX}:${chainspace}:namespace:no-document`;

export const emptyDID = `${utils.constant.LISK_DID_PREFIX}:${chainspace}:test:empty`;

export const senderDID = `${
  utils.constant.LISK_DID_PREFIX
}:${chainspace}:address:${cryptography.address.getLisk32AddressFromPublicKey(publicKey)}`;

export const publicKeyMultiBase = 'z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5';
export const privateKeyMultiBase =
  'zrv3dzvgBDRdciUVEX3XYbPvB9yM9pwC5a15kV9W3xJ5nxWvxpzQWK8Hvp9pzmih5NLQifMNEy6PAyLwzopbRsX8pLH';

export const publicKeyMultiBase2 = 'z6MkqjFkSHgLY8qC3WrDmCjCm7Jbenf5818dqvTWzhPHH6c3';
export const x25519PublicKeyMultibase2 = 'z6LSjaTfwzRgAXUbJHh9xocvCpSP4KfHXDGHmjkbFyTgQmuk';
export const x25519PublicKeyMultibase = 'z6LSgewxKK6vPH1NGjp5UpGFqU1x94VEtvQfGx4W1THZWSxe';
export const x25519PrivateKeyMultibase = 'z3weoVSXQALiHEz2mqVSF5yzBCShMEM8hP1Vos71nn6QArXP';

export const ipc = '~/.lisk/lisk-did';
export const ws = 'ws://localhost:7887/rpc-ws';

export const signature = Buffer.from(
  '5f59c3f2e10e54d112b36efa7f9d07da7f80c7185bcd72e264267171db6ceb71aa19e0e8dd19233b02caffb50d91cebf852051c34a1badbe2ee96a681ae60b0c',
  'hex',
);

const createDIDDoc = (did: string) => ({
  '@context': [
    'https://www.w3.org/ns/did/v1',
    'https://w3id.org/security/suites/ed25519-2020/v1',
    'https://w3id.org/security/suites/x25519-2020/v1',
  ],
  id: did,
  controller: [did],
  verificationMethod: [
    {
      id: `${did}#z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5`,
      type: 'Ed25519VerificationKey2020',
      controller: did,
      publicKeyMultibase: 'z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5',
    },
  ],
  authentication: [`${did}#z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5`],
  assertionMethod: [`${did}#z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5`],
  capabilityInvocation: [`${did}#z6MkhtSAfygeA8WYBjfPxS5eatUj6URxGfBSYRuHEbFywza5`],
  keyAgreement: [
    {
      id: `${did}#z6LSgewxKK6vPH1NGjp5UpGFqU1x94VEtvQfGx4W1THZWSxe`,
      type: 'X25519KeyAgreementKey2020',
      controller: did,
      publicKeyMultibase: 'z6LSgewxKK6vPH1NGjp5UpGFqU1x94VEtvQfGx4W1THZWSxe',
    },
  ],
  service: [],
});

export const senderDIDDoc = createDIDDoc(senderDID);

export const customDIDDoc = createDIDDoc(customDID);

export const emptyDIDDoc = utils.bootstrapEmptyDidDocument();

export const config = { chainspace, autoCreateAddressDID: true };
export const nonce = { nonce: BigInt(1) };

export const endpoint = {
  id: 'urn:sha256:be5c8e26a60b911370b30dcef6a9f497de0805efc30827c51fb354f766be2261',
  type: 'SocialMedia',
  serviceEndpoint: 'https://instagram.com',
};
