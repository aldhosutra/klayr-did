import {
  cryptography as didCryptography,
  DidDocument,
  getAddressDIDFromPublicKey,
} from '@klayr-did/klayr-decentralized-identifier';
import { CommandVerifyContext, MethodContext, ModuleEndpointContext } from 'klayr-sdk';
import { DocumentStore, documentStoreKey } from '../../../../stores/document';

export async function isSenderHaveDefaultAddressDIDThatControlsTargetDID(
  context: CommandVerifyContext<any> | MethodContext | ModuleEndpointContext,
  documentStore: DocumentStore,
  targetDIDDocument: DidDocument,
  chainspace: string,
  senderPublicKey: Buffer,
) {
  const publicKeyAddressDID = getAddressDIDFromPublicKey(chainspace, senderPublicKey);
  if (targetDIDDocument.controller.includes(publicKeyAddressDID)) {
    const senderDIDDocument = await documentStore.getOrUndefined(context, documentStoreKey(publicKeyAddressDID));
    if (senderDIDDocument === undefined) throw new Error("sender DID doesn't exist");
    const senderRelationshipWithTargetController = await didCryptography.method.getVerificationRelationship(
      senderDIDDocument,
      {
        publicKey: senderPublicKey,
        relationship: ['authentication'],
      },
    );
    if (senderRelationshipWithTargetController.length > 0) {
      return true;
    }
  }
  return false;
}
