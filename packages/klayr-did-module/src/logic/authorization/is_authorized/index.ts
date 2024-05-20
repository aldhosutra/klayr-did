import {
  DidModuleConfig,
  PayloadWithSignature,
  client,
  getAddressDIDFromPublicKey,
} from '@klayr-did/klayr-decentralized-identifier';
import { CommandVerifyContext, MethodContext, ModuleEndpointContext, utils } from 'klayr-sdk';
import { DocumentStore, documentStoreKey } from '../../../stores/document';
import { NonceStore, nonceStoreKey } from '../../../stores/nonce';
import {
  isSenderHaveCapabilityInvocation,
  isSenderHaveDefaultAddressDIDThatControlsTargetDID,
  isSenderTheSignerThatControlsDID,
} from './sender';
import { isSignerHaveCapabilityInvocation, isSignerTheTargetDIDController } from './signer';
import { isTheLastControllerAndNoKeysRemains } from './controller';
import { AuthorizationCode } from './code';

export async function isAuthorized(
  context: CommandVerifyContext<any> | MethodContext | ModuleEndpointContext,
  documentStore: DocumentStore,
  nonceStore: NonceStore,
  config: DidModuleConfig,
  payload: PayloadWithSignature,
  senderPublicKey: Buffer,
  withLastController = false,
): Promise<{ code: number; status: boolean }> {
  const ret = { code: AuthorizationCode.UNAUTHORIZED, status: false };
  const data = utils.objects.cloneDeep(payload);
  const chainspace = config.chainspace;

  const target = await documentStore.getOrUndefined(context, documentStoreKey(data.params.target));
  if (target === undefined) throw new Error("target DID doen't exist");

  let signer;
  if (data.params.signer) {
    signer = await documentStore.getOrUndefined(context, documentStoreKey(data.params.signer));
    if (signer === undefined) throw new Error("signer DID doen't exist");
  }

  if (data.params.signature.length > 0) {
    if (!data.params.signer) throw new Error('Invalid Param: signer cant be undefined for did challenge verification');

    let challenge = '';
    const { nonce } = await nonceStore.get(context, nonceStoreKey(data.params.signer));
    challenge = client.utils.createSignatureChallenge({ ...data, params: { ...data.params, nonce } });

    const case1 = await isSignerHaveCapabilityInvocation(target, data, challenge);
    if (case1) {
      ret.code = AuthorizationCode.SIGNER_IS_SUBJECT;
      ret.status = true;
      if (withLastController) {
        const isSafe = isTheLastControllerAndNoKeysRemains(target, data.params.signer);
        ret.status = isSafe;
        ret.code = isSafe ? ret.code : AuthorizationCode.UNSAFE_TO_DEACTIVATE;
      }
      return ret;
    }

    const case2 = await isSignerTheTargetDIDController(target, signer, data, challenge);
    if (case2) {
      ret.code = AuthorizationCode.SIGNER_IS_CONTROLLER;
      ret.status = true;
      if (withLastController) {
        const isSafe = isTheLastControllerAndNoKeysRemains(target, data.params.signer);
        ret.status = isSafe;
        ret.code = isSafe ? ret.code : AuthorizationCode.UNSAFE_TO_DEACTIVATE;
      }
      return ret;
    }

    throw new Error("Invalid Signature: did signature can't be verified");
  }

  const case3 = await isSenderHaveCapabilityInvocation(target, senderPublicKey);
  if (case3) {
    ret.code = AuthorizationCode.SENDER_IS_SUBJECT;
    ret.status = true;
    if (withLastController) {
      const isSafe = isTheLastControllerAndNoKeysRemains(
        target,
        getAddressDIDFromPublicKey(chainspace, senderPublicKey),
      );
      ret.status = isSafe;
      ret.code = isSafe ? ret.code : AuthorizationCode.UNSAFE_TO_DEACTIVATE;
    }
    return ret;
  }

  if (data.params.signer) {
    const case4 = await isSenderTheSignerThatControlsDID(target, signer, senderPublicKey);
    if (case4) {
      ret.code = AuthorizationCode.SENDER_IS_CONTROLLER;
      ret.status = true;
      if (withLastController) {
        const isSafe = isTheLastControllerAndNoKeysRemains(target, data.params.signer);
        ret.status = isSafe;
        ret.code = isSafe ? ret.code : AuthorizationCode.UNSAFE_TO_DEACTIVATE;
      }
      return ret;
    }
  }

  const case5 = await isSenderHaveDefaultAddressDIDThatControlsTargetDID(
    context,
    documentStore,
    target,
    chainspace,
    senderPublicKey,
  );
  if (case5) {
    ret.code = AuthorizationCode.ADDRESS_IS_CONTROLLER;
    ret.status = true;
    if (withLastController) {
      const isSafe = isTheLastControllerAndNoKeysRemains(
        target,
        getAddressDIDFromPublicKey(chainspace, senderPublicKey),
      );
      ret.status = isSafe;
      ret.code = isSafe ? ret.code : AuthorizationCode.UNSAFE_TO_DEACTIVATE;
    }
    return ret;
  }

  return ret;
}
