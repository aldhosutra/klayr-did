import { cryptography } from 'lisk-sdk';
import { LISK_DID_PREFIX } from '../../src/utils/constant';

export const chainspace = 'test';
export const privateKey = Buffer.from(
  '96238e3e3e4e1c31321b4ad2cd88dcd3a6e14fc11a82c11f6c3e63272a1768ff330606ae444531582beaad5891c5733ce16ea19768be5a8a45ae10fea99f2032',
  'hex',
);
export const publicKey = cryptography.ed.getPublicKeyFromPrivateKey(privateKey);
export const senderDID = `${LISK_DID_PREFIX}:${chainspace}:address:${cryptography.address.getLisk32AddressFromPublicKey(
  publicKey,
)}`;

export const ipc = '~/.lisk/lisk-did';
export const ws = 'ws://localhost:7887/rpc-ws';

export const signatureMessage = 'message';
export const signature = Buffer.from(
  '5f59c3f2e10e54d112b36efa7f9d07da7f80c7185bcd72e264267171db6ceb71aa19e0e8dd19233b02caffb50d91cebf852051c34a1badbe2ee96a681ae60b0c',
  'hex',
);
