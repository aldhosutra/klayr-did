import { VerificationRelationship } from '../../types/cryptography';
import { Ed25519VerificationKey2020 } from '@digitalcredentials/ed25519-verification-key-2020';
import { X25519KeyAgreementKey2020 } from '@digitalcredentials/x25519-key-agreement-key-2020';

export const SIGNATURE_BYTES_LENGTH = 64;

export const X25519_KEY_AGREEMENT_KEY_2020_TYPE = 'X25519KeyAgreementKey2020';
export const ED25519_VERIFICATION_KEY_2020_TYPE = 'Ed25519VerificationKey2020';

export const X25519_KEY_AGREEMENT_KEY_2020_CONTEXT = X25519KeyAgreementKey2020.SUITE_CONTEXT;
export const ED25519_VERIFICATION_KEY_2020_CONTEXT = Ed25519VerificationKey2020.SUITE_CONTEXT;

export const SUPPORTED_RELATIONSHIP: VerificationRelationship[] = [
  'authentication',
  'assertionMethod',
  'capabilityInvocation',
  'keyAgreement',
];
