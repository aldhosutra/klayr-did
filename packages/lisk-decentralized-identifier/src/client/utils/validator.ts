import * as isUri from 'is-uri';
import { LISK_PUBLIC_KEY_LENGTH, SIGNATURE_BYTES_LENGTH } from '../../utils/constant';
import { parseDIDComponent } from '../../did';
import {
  AddControllersParam,
  AddKeysParam,
  AddServiceEndpointParam,
  CreateParam,
  DIDCommands,
  DIDTransactionParam,
  RemoveControllersParam,
  RemoveKeysParam,
  RemoveServiceEndpointParam,
  TransactionPayload,
} from '../../types';

// eslint-disable-next-line @typescript-eslint/require-await
export async function validateParams(
  command: DIDCommands,
  param: TransactionPayload<any>,
  chainspace: string,
): Promise<boolean> {
  let params: DIDTransactionParam;
  let didComponent;
  if (command === 'create') {
    params = param.params as CreateParam;
    didComponent = parseDIDComponent(params.did);
    if (params.controllers.length < 1) throw new Error('at least one controller needed');
    params.controllers.forEach(did => parseDIDComponent(did));
    if (didComponent.chainspace !== chainspace)
      throw new Error(
        `this chainspace ${chainspace} can't create did document for namespace "${didComponent.chainspace}`,
      );
  }
  if (['create', 'addKeys'].includes(command)) {
    params = param.params as AddKeysParam | CreateParam;
    if ((params as AddKeysParam).keys.length < 1) throw new Error('at least one keys needed');
    for (const key of (params as AddKeysParam).keys) {
      if (key.publicKey.length !== LISK_PUBLIC_KEY_LENGTH) throw new Error('invalid public key length');
      if (key.relationship.length === 0) throw new Error('at least one relationship needed');
    }
  }
  if (command === 'removeKeys') {
    params = param.params as RemoveKeysParam;
    if ((params as RemoveKeysParam).publicKeys.length < 1) throw new Error('at least one public keys needed');
    for (const key of (params as RemoveKeysParam).publicKeys) {
      if (key.length !== LISK_PUBLIC_KEY_LENGTH) throw new Error('invalid public key length');
    }
  }
  if (['addControllers', 'removeControllers'].includes(command)) {
    params = param.params as AddControllersParam | RemoveControllersParam;
    if ((params as AddControllersParam | RemoveControllersParam).controllers.length < 1)
      throw new Error('at least one controller needed');
    (params as AddControllersParam | RemoveControllersParam).controllers.forEach(did => parseDIDComponent(did));
  }
  if (command === 'addServiceEndpoint') {
    params = param.params as AddServiceEndpointParam;
    if (!isUri((params as AddServiceEndpointParam).endpoint.id)) throw new Error('endpoint.id is not a valid URI');
  }
  if (command === 'removeServiceEndpoint') {
    params = param.params as RemoveServiceEndpointParam;
    if (!isUri((params as RemoveServiceEndpointParam).endpointId)) throw new Error('endpointId is not a valid URI');
  }
  if (command !== 'create') {
    params = param.params as Exclude<DIDTransactionParam, CreateParam>;
    if (params.target) parseDIDComponent(params.target);
    if (params.signer) parseDIDComponent(params.signer);
    if (params.signature && params.signature.length > 0 && params.signature.length !== SIGNATURE_BYTES_LENGTH)
      throw new Error('invalid signature length');
  }
  return true;
}
