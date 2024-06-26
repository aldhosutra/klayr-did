---
id: "modules"
title: "klayr-did"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [did](namespaces/did.md)
- [vc](namespaces/vc.md)

## Classes

- [AddControllersCommand](classes/AddControllersCommand.md)
- [AddKeysCommand](classes/AddKeysCommand.md)
- [AddServiceEndpointCommand](classes/AddServiceEndpointCommand.md)
- [CreateCommand](classes/CreateCommand.md)
- [DeactivateCommand](classes/DeactivateCommand.md)
- [DidEndpoint](classes/DidEndpoint.md)
- [DidMethod](classes/DidMethod.md)
- [DidModule](classes/DidModule.md)
- [RemoveControllersCommand](classes/RemoveControllersCommand.md)
- [RemoveKeysCommand](classes/RemoveKeysCommand.md)
- [RemoveServiceEndpointCommand](classes/RemoveServiceEndpointCommand.md)

## Variables

### default

• **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AddControllersCommand` | typeof [`AddControllersCommand`](classes/AddControllersCommand.md) |
| `AddKeysCommand` | typeof [`AddKeysCommand`](classes/AddKeysCommand.md) |
| `AddServiceEndpointCommand` | typeof [`AddServiceEndpointCommand`](classes/AddServiceEndpointCommand.md) |
| `CreateCommand` | typeof [`CreateCommand`](classes/CreateCommand.md) |
| `DeactivateCommand` | typeof [`DeactivateCommand`](classes/DeactivateCommand.md) |
| `DidEndpoint` | typeof [`DidEndpoint`](classes/DidEndpoint.md) |
| `DidMethod` | typeof [`DidMethod`](classes/DidMethod.md) |
| `DidModule` | typeof [`DidModule`](classes/DidModule.md) |
| `RemoveControllersCommand` | typeof [`RemoveControllersCommand`](classes/RemoveControllersCommand.md) |
| `RemoveKeysCommand` | typeof [`RemoveKeysCommand`](classes/RemoveKeysCommand.md) |
| `RemoveServiceEndpointCommand` | typeof [`RemoveServiceEndpointCommand`](classes/RemoveServiceEndpointCommand.md) |
| `did` | { `client`: [`client`](namespaces/did.client.md) ; `cryptography`: [`cryptography`](namespaces/did.cryptography.md) ; `resolver`: [`resolver`](namespaces/did.resolver.md) ; `utils`: [`utils`](namespaces/did.utils.md) ; `getAddressDIDFromPublicKey`: (`chainspace`: `string`, `publicKey`: `Buffer`) => `string` ; `getDIDDocument`: (`did`: `string`, `options`: [`CreateResolverParam`](namespaces/did.md#createresolverparam)) => `Promise`<`undefined` \| [`DidDocument`](interfaces/did.DidDocument.md)\> ; `parseDIDComponent`: (`did`: `string`) => { `chainspace`: `any` ; `did`: `string` ; `fragment`: `any` ; `method`: `any` ; `namespace`: `string` ; `path`: `any` ; `query`: `any` ; `scheme`: `string` ; `uniqueId`: `string` ; `uri`: `string`  }  } |
| `did.client` | [`client`](namespaces/did.client.md) |
| `did.cryptography` | [`cryptography`](namespaces/did.cryptography.md) |
| `did.resolver` | [`resolver`](namespaces/did.resolver.md) |
| `did.utils` | [`utils`](namespaces/did.utils.md) |
| `did.getAddressDIDFromPublicKey` | [object Object] |
| `did.getDIDDocument` | [object Object] |
| `did.parseDIDComponent` | [object Object] |
| `vc` | [`vc`](namespaces/vc.md) |

#### Defined in

[packages/klayr-did/src/index.ts:9](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did/src/index.ts#L9)
