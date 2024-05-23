import {
  ED25519_VERIFICATION_KEY_2020_CONTEXT,
  ED25519_VERIFICATION_KEY_2020_TYPE,
  X25519_KEY_AGREEMENT_KEY_2020_CONTEXT,
  X25519_KEY_AGREEMENT_KEY_2020_TYPE,
} from './constant';

const COMPAT_ED25519_KEY_2018_CONTEXT_URL = 'https://w3id.org/security/suites/ed25519-2018/v1';

export const contextsBySuite = new Map([
  [ED25519_VERIFICATION_KEY_2020_TYPE, ED25519_VERIFICATION_KEY_2020_CONTEXT],
  ['Ed25519VerificationKey2018', COMPAT_ED25519_KEY_2018_CONTEXT_URL],
  [X25519_KEY_AGREEMENT_KEY_2020_TYPE, X25519_KEY_AGREEMENT_KEY_2020_CONTEXT],
]);