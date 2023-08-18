import {
  DidModuleConfig,
  PayloadWithSignature,
  client,
  getAddressDIDFromPublicKey,
} from '@lisk-did/lisk-decentralized-identifier';
import { CommandVerifyContext, MethodContext, ModuleEndpointContext, utils } from 'lisk-sdk';
import { DocumentStore, documentStoreKey } from '../../../stores/document';
import { NonceStore, nonceStoreKey } from '../../../stores/nonce';
import {
  isSenderHaveCapabilityInvocation,
  isSenderHaveDefaultAddressDIDThatControlsTargetDID,
  isSenderTheSignerThatControlsDID,
} from './sender';
import { isSignerHaveCapabilityInvocation, isSignerTheTargetDIDController } from './signer';
import { isTheLastControllerAndNoKeysRemains } from './controller';

export async function isAuthorized(
  context: CommandVerifyContext<any> | MethodContext | ModuleEndpointContext,
  documentStore: DocumentStore,
  nonceStore: NonceStore,
  config: DidModuleConfig,
  payload: PayloadWithSignature,
  senderPublicKey: Buffer,
  withLastController = false,
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
  if (case1) {
    if (withLastController) return isTheLastControllerAndNoKeysRemains(target, data.params.signer);
    return true;
  }

  const case2 = await isSignerTheTargetDIDController(target, signer, data, challenge);
  if (case2) {
    if (withLastController) return isTheLastControllerAndNoKeysRemains(target, data.params.signer);
    return true;
  }

  const case3 = await isSenderHaveCapabilityInvocation(target, senderPublicKey);
  if (case3) {
    if (withLastController)
      return isTheLastControllerAndNoKeysRemains(target, getAddressDIDFromPublicKey(chainspace, senderPublicKey));
    return true;
  }

  const case4 = await isSenderTheSignerThatControlsDID(target, signer, senderPublicKey);
  if (case4) {
    if (withLastController) return isTheLastControllerAndNoKeysRemains(target, data.params.signer);
    return true;
  }

  const case5 = await isSenderHaveDefaultAddressDIDThatControlsTargetDID(
    context,
    documentStore,
    target,
    chainspace,
    senderPublicKey,
  );
  if (case5) {
    if (withLastController)
      return isTheLastControllerAndNoKeysRemains(target, getAddressDIDFromPublicKey(chainspace, senderPublicKey));
    return true;
  }

  return false;
}
