export const KLAYR_PUBLIC_KEY_LENGTH = 32;
export const MULTIBASE_PUBLIC_KEY_LENGTH = 48;
export const KLAYR_PRIVATE_KEY_LENGTH = 64;
export const MULTIBASE_PRIVATE_KEY_LENGTH = 91;
export const MULTICODEC_ED25519_PUB_HEADER = new Uint8Array([0xed, 0x01]);
export const MULTICODEC_ED25519_PRIV_HEADER = new Uint8Array([0x80, 0x26]);
export const MULTIBASE_BASE58BTC_HEADER = 'z';
export const KLAYR_DID_METHOD_NAME = 'klayr';
export const KLAYR_DID_PREFIX = `did:${KLAYR_DID_METHOD_NAME}`;
export const DID_CONTEXT_URL = 'https://www.w3.org/ns/did/v1';