import { VerificationRelationship } from '../cryptography';

export interface KeysCommand {
  publicKey: Buffer;
  relationship: VerificationRelationship[];
}
