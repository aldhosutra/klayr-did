import { getVerificationRelationship } from '@lisk-did/lisk-decentralized-identifier/dist/cryptography';
import { BaseCommand, CommandVerifyContext, VerifyStatus, utils } from 'lisk-sdk';
import { DocumentStore, documentStoreKey } from '../stores/document';
import {
  DidDocument,
  DidModuleConfig,
  client,
  getAddressDIDFromPublicKey,
} from '@lisk-did/lisk-decentralized-identifier';
import { PayloadWithSignature } from '@lisk-did/lisk-decentralized-identifier/dist/client/utils/types';
import { NonceStore, nonceStoreKey } from '../stores/nonce';

export async function verifyAuthorization(this: BaseCommand, context: CommandVerifyContext<any>) {
  const documentSubstore = this.stores.get(DocumentStore);
  const nonceSubstore = this.stores.get(NonceStore);
  const payload: PayloadWithSignature = { command: this.name as any, params: context.params };

  if (!documentSubstore.has(context, documentStoreKey(context.params.target))) {
    return {
      status: VerifyStatus.FAIL,
      error: new Error(`target DID doesn't exists`),
    };
  }

  try {
    const authorized = await isAuthorized(
      context,
      documentSubstore,
      nonceSubstore,
      (this as any).config,
      payload,
      context.transaction.senderPublicKey,
    );
    if (!authorized) {
      return {
        status: VerifyStatus.FAIL,
        error: new Error(`DID operation authorization failed`),
      };
    }
  } catch (err: any) {
    return {
      status: VerifyStatus.FAIL,
      error: new Error(err),
    };
  }

  return { status: VerifyStatus.OK };
}

async function isAuthorized(
  context: CommandVerifyContext<any>,
  documentStore: DocumentStore,
  nonceStore: NonceStore,
  config: DidModuleConfig,
  payload: PayloadWithSignature,
  senderPublicKey: Buffer,
) {
  const data = utils.objects.cloneDeep(payload);
  const chainspace = config.chainspace;

  const target = await documentStore.getOrUndefined(context, documentStoreKey(data.params.target));
  if (target === undefined) throw new Error("target DID doen't exist");

  let signer;
  if (data.params.signer) {
    signer = await documentStore.getOrUndefined(context, documentStoreKey(data.params.signer));
    if (signer === undefined) throw new Error("signer DID doen't exist");
  }

  let challenge;
  if (data.params.nonce && data.params.signature) {
    const { nonce } = await nonceStore.get(context, nonceStoreKey(data.params.signer));
    challenge = client.utils.createSignatureChallenge({ ...data, params: { ...data.params, nonce } });
  }

  const case1 = await isSignerHaveCapabilityInvocation(target, data, challenge);
  if (case1) return true;

  const case2 = await isSignerTheTargetDIDController(target, signer, data, challenge);
  if (case2) return true;

  const case3 = await isSenderHaveCapabilityInvocation(target, senderPublicKey);
  if (case3) return true;

  const case4 = await isSenderTheSignerThatControlsDID(target, signer, senderPublicKey);
  if (case4) return true;

  const case5 = await isSenderHaveDefaultAddressDIDThatControlsTargetDID(
    context,
    documentStore,
    target,
    chainspace,
    senderPublicKey,
  );
  if (case5) return true;

  return false;
}

async function isSignerHaveCapabilityInvocation(
  targetDIDDocument: DidDocument,
  data: PayloadWithSignature,
  challenge: string,
) {
  const signerRelationshipWithTarget = await getVerificationRelationship(targetDIDDocument, {
    signature: data.params.signature,
    challenge,
    relationship: ['capabilityInvocation'],
  });
  if (signerRelationshipWithTarget.length > 0) {
    return true;
  }
  return false;
}

async function isSignerTheTargetDIDController(
  targetDIDDocument: DidDocument,
  signerDIDDocument: DidDocument,
  data: PayloadWithSignature,
  challenge: string,
) {
  if (targetDIDDocument.controller.includes(data.params.signer)) {
    const signerRelationshipWithSigner = await getVerificationRelationship(signerDIDDocument, {
      signature: data.params.signature,
      challenge,
      relationship: ['authentication'],
    });
    if (signerRelationshipWithSigner.length > 0) {
      return true;
    }
  }
  return false;
}

async function isSenderHaveCapabilityInvocation(targetDIDDocument: DidDocument, senderPublicKey: Buffer) {
  const senderRelationshipWithTarget = await getVerificationRelationship(targetDIDDocument, {
    publicKey: senderPublicKey,
    relationship: ['capabilityInvocation'],
  });
  if (senderRelationshipWithTarget.length > 0) {
    return true;
  }
  return false;
}

async function isSenderTheSignerThatControlsDID(
  targetDIDDocument: DidDocument,
  signerDIDDocument: DidDocument,
  senderPublicKey: Buffer,
) {
  if (targetDIDDocument.controller.includes(signerDIDDocument.id)) {
    const senderRelationshipWithSigner = await getVerificationRelationship(signerDIDDocument, {
      publicKey: senderPublicKey,
      relationship: ['authentication'],
    });
    if (senderRelationshipWithSigner.length > 0) {
      return true;
    }
  }
  return false;
}

// eslint-disable-next-line @typescript-eslint/require-await
async function isSenderHaveDefaultAddressDIDThatControlsTargetDID(
  context: CommandVerifyContext,
  documentStore: DocumentStore,
  targetDIDDocument: DidDocument,
  chainspace: string,
  senderPublicKey: Buffer,
) {
  const privateKeyAddressDID = getAddressDIDFromPublicKey(chainspace, senderPublicKey);
  if (targetDIDDocument.controller.includes(privateKeyAddressDID)) {
    const senderDIDDocument = await documentStore.getOrUndefined(context, documentStoreKey(privateKeyAddressDID));
    if (senderDIDDocument === undefined) throw new Error("sender DID doesn't exist");
    const senderRelationshipWithTargetController = await getVerificationRelationship(senderDIDDocument, {
      publicKey: senderPublicKey,
      relationship: ['authentication'],
    });
    if (senderRelationshipWithTargetController.length > 0) {
      return true;
    }
  }
  return false;
}
