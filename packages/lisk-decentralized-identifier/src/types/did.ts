import { VerificationMethod } from './cryptography';

export interface DidDocument {
  '@context': string[];
  id: string;
  controller: string[];
  verificationMethod: VerificationMethod[];
  authentication: string[];
  assertionMethod: string[];
  capabilityInvocation: string[];
  keyAgreement: VerificationMethod[];
  service: Service[];
}

export interface Service {
  id: string;
  type: string;
  serviceEndpoint: string;
}
