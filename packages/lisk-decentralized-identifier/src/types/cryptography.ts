import { ED25519_VERIFICATION_KEY_2020_TYPE } from '../utils/constant';

export type VerificationRelationship = 'authentication' | 'assertionMethod' | 'capabilityInvocation' | 'keyAgreement';

export interface VerificationMethod {
  id: string;
  type: string;
  controller: string;
  publicKeyMultibase: string;
}

export type KeyAgreement = VerificationMethod & { privateKeyMultibase?: string };

export interface Ed25519KeyPair extends Partial<KeyAgreement> {
  type?: typeof ED25519_VERIFICATION_KEY_2020_TYPE;
  fingerprint?: () => string;
}

export interface Ed25519Signature2020 {
  type: 'Ed25519Signature2020';
  requiredKeyType: typeof ED25519_VERIFICATION_KEY_2020_TYPE;
  LDKeyClass: {
    suite: typeof ED25519_VERIFICATION_KEY_2020_TYPE;
    SUITE_CONTEXT: 'https://w3id.org/security/suites/ed25519-2020/v1';
  };
  contextUrl: 'https://w3id.org/security/suites/ed25519-2020/v1';
  proof: unknown;
  verificationMethod: string;
  key: Ed25519KeyPair;
  signer: {
    id: string;
    sign: ({ data }: { data: string }) => Promise<Buffer>;
  };
  verifier: {
    id: string;
    verify: ({ data, signature }: { data: string; signature: Buffer }) => Promise<boolean>;
  };
  canonizeOptions: unknown;
  useNativeCanonize: unknown;
  _hashCache: unknown;
}

export interface JWEDocument {
  protected: string;
  recipients: {
    header: {
      kid: string;
      alg: string;
      epk: {
        kty: string;
        crv: string;
        x: string;
      };
      apu: string;
      apv: string;
    };
    encrypted_key: string;
  }[];
  iv: string;
  ciphertext: string;
  tag: string;
}
