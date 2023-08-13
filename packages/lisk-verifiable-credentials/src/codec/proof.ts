import { codec } from '@liskhq/lisk-codec';
import { Proof } from '../types';

const proofSchema = {
  $id: 'lisk-verifiable-credentials/proofSchema',
  type: 'object',
  required: ['type', 'created', 'verificationMethod', 'proofPurpose', 'proofValue'],
  properties: {
    type: {
      dataType: 'string',
      fieldNumber: 1,
    },
    created: {
      dataType: 'string',
      fieldNumber: 2,
    },
    verificationMethod: {
      dataType: 'string',
      fieldNumber: 3,
    },
    proofPurpose: {
      dataType: 'string',
      fieldNumber: 4,
    },
    proofValue: {
      dataType: 'string',
      fieldNumber: 5,
    },
  },
};

export function encodeProof(proof: Proof): Buffer {
  return codec.encode(proofSchema, proof);
}

export function decodeProof(proofBuffer: Buffer): Proof {
  return codec.decode(proofSchema, proofBuffer);
}
