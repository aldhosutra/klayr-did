import {
  type VerifiableCredential as TVerifiableCredential,
  type VerifiablePresentation as TVerifiablePresentation,
} from '@digitalcredentials/vc-data-model';
import {
  type DocumentLoader as IDocumentLoader,
  type DidDocument,
  type VerificationMethod,
} from '@lisk-did/lisk-decentralized-identifier';

type VCDIVerifiableCredential = Exclude<TVerifiableCredential, string>;

export type DocumentLoader = IDocumentLoader;

export interface VerificationKey extends VerificationMethod {
  revoked?: any;
  privateKeyMultibase?: string;
}

export type VerifiableCredential = Partial<VCDIVerifiableCredential> & {
  '@context': VCDIVerifiableCredential['@context'];
  type: VCDIVerifiableCredential['type'];
  credentialSubject: VCDIVerifiableCredential['credentialSubject'];
};

export type VerifiablePresentation = TVerifiablePresentation & {
  verifiableCredential?: VerifiableCredential | VerifiableCredential[];
};

export interface Proof {
  type: string;
  created: string;
  verificationMethod: string;
  proofPurpose: string;
  proofValue: string;
}

export interface VCVerificationResult {
  verified: boolean;
  results: Array<{
    proof: Proof & { '@context': string[] };
    verified: boolean;
    verificationMethod: VerificationMethod;
    purposeResult: {
      valid: boolean;
    };
  }>;
}

export interface VPVerificationResult {
  verified: boolean;
  credentialResults: Array<{
    verified: boolean;
    results: VCVerificationResult[];
    credentialId: string;
  }>;
  presentationResult: {
    verified: boolean;
    results: Array<{
      proof: Proof & { '@context': string[] };
      verified: boolean;
      verificationMethod: VerificationMethod;
      purposeResult: {
        valid: boolean;
        controller: Omit<DidDocument, 'controller' | 'service'>;
      };
    }>;
  };
}
