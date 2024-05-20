import { DidDocument } from '@klayr-did/klayr-decentralized-identifier';

export function isTheLastControllerAndNoKeysRemains(targetDIDDocument: DidDocument, controller: string) {
  const isTheLastController =
    targetDIDDocument.controller.length === 1 && targetDIDDocument.controller[0] === controller;
  const lastKeyIsOwnedByController =
    targetDIDDocument.verificationMethod.length === 1 &&
    targetDIDDocument.verificationMethod[0].controller === controller;
  const noKeysRemains = targetDIDDocument.verificationMethod.length === 0;
  return isTheLastController && (lastKeyIsOwnedByController || noKeysRemains);
}
