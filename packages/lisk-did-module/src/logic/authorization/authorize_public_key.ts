import { AuthorizationResult, cryptography } from '@lisk-did/lisk-decentralized-identifier';
import { MethodContext, ModuleEndpointContext } from 'lisk-sdk';
import { DocumentStore, documentStoreKey } from '../../stores/document';

export async function authorizePublicKey(
  context: ModuleEndpointContext | MethodContext,
  documentSubstore: DocumentStore,
  did: string,
  publicKey: Buffer,
): Promise<AuthorizationResult[]> {
  const result: AuthorizationResult[] = [];
  const didDocument = await documentSubstore.get(context, documentStoreKey(did));

  const publicKeyRelationshipWithTargetDID = await cryptography.method.getVerificationRelationship(didDocument, {
    publicKey,
  });
  if (publicKeyRelationshipWithTargetDID.length > 0) {
    result.push({
      type: 'subject',
      did: didDocument.id,
      relationship: publicKeyRelationshipWithTargetDID,
    });
  }

  for (const controller of didDocument.controller) {
    const controllerDidDocument = await documentSubstore.get(context, documentStoreKey(controller));
    const publicKeyRelationshipWithControllerDID = await cryptography.method.getVerificationRelationship(
      controllerDidDocument,
      {
        publicKey,
      },
    );
    if (publicKeyRelationshipWithControllerDID.length > 0) {
      result.push({
        type: 'controller',
        did: controllerDidDocument.id,
        relationship: publicKeyRelationshipWithControllerDID,
      });
    }
  }

  return result;
}
