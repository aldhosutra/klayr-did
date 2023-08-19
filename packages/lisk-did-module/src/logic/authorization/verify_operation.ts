import { DidModuleConfig, PayloadWithSignature, client } from '@lisk-did/lisk-decentralized-identifier';
import { MethodContext, CommandVerifyContext, VerifyStatus } from 'lisk-sdk';
import { DocumentStore, documentStoreKey } from '../../stores/document';
import { NonceStore } from '../../stores/nonce';
import { isAuthorized } from './is_authorized';

export async function verifyOperation(
  context: MethodContext | CommandVerifyContext<any>,
  documentSubstore: DocumentStore,
  nonceSubstore: NonceStore,
  config: DidModuleConfig,
  payload: PayloadWithSignature,
  senderPublicKey: Buffer,
  withLastController = false,
) {
  if (!(await documentSubstore.has(context, documentStoreKey(payload.params.target)))) {
    return {
      status: VerifyStatus.FAIL,
      error: new Error(`target DID doesn't exists`),
    };
  }

  try {
    const verifyParam = await client.utils.validateParams(
      payload.command,
      { params: payload.params },
      config.chainspace,
    );
    const authorized = await isAuthorized(
      context,
      documentSubstore,
      nonceSubstore,
      config,
      payload,
      senderPublicKey,
      withLastController,
    );
    if (!authorized.status || !verifyParam) {
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
