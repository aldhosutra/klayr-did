---
id: "did"
title: "Namespace: did"
sidebar_label: "did"
sidebar_position: 0
custom_edit_url: null
---

## Namespaces

- [client](did.client.md)
- [cryptography](did.cryptography.md)
- [resolver](did.resolver.md)
- [utils](did.utils.md)

## Interfaces

- [AddControllersParam](../interfaces/did.AddControllersParam.md)
- [AddKeysParam](../interfaces/did.AddKeysParam.md)
- [AddServiceEndpointParam](../interfaces/did.AddServiceEndpointParam.md)
- [AuthorizationFactors](../interfaces/did.AuthorizationFactors.md)
- [BaseResolver](../interfaces/did.BaseResolver.md)
- [CipherInterface](../interfaces/did.CipherInterface.md)
- [CreateParam](../interfaces/did.CreateParam.md)
- [DeactivateParam](../interfaces/did.DeactivateParam.md)
- [DidDocument](../interfaces/did.DidDocument.md)
- [DidEndpoint](../interfaces/did.DidEndpoint.md)
- [DidMethod](../interfaces/did.DidMethod.md)
- [DidModuleConfig](../interfaces/did.DidModuleConfig.md)
- [DocumentLoaderResult](../interfaces/did.DocumentLoaderResult.md)
- [Ed25519KeyPair](../interfaces/did.Ed25519KeyPair.md)
- [Ed25519Signature2020](../interfaces/did.Ed25519Signature2020.md)
- [JWEDocument](../interfaces/did.JWEDocument.md)
- [KeysCommand](../interfaces/did.KeysCommand.md)
- [NonceStoreData](../interfaces/did.NonceStoreData.md)
- [RemoveControllersParam](../interfaces/did.RemoveControllersParam.md)
- [RemoveKeysParam](../interfaces/did.RemoveKeysParam.md)
- [RemoveServiceEndpointParam](../interfaces/did.RemoveServiceEndpointParam.md)
- [Service](../interfaces/did.Service.md)
- [TransactionPayload](../interfaces/did.TransactionPayload.md)
- [TransactionPayloadWithoutSignature](../interfaces/did.TransactionPayloadWithoutSignature.md)
- [VerificationMethod](../interfaces/did.VerificationMethod.md)

## Type Aliases

### AddControllersEventData

Ƭ **AddControllersEventData**: [`AddControllersParam`](../interfaces/did.AddControllersParam.md)

#### Defined in

packages/klayr-decentralized-identifier/dist/types/events/add_controllers_event.d.ts:2

___

### AddKeysEventData

Ƭ **AddKeysEventData**: [`AddKeysParam`](../interfaces/did.AddKeysParam.md)

#### Defined in

packages/klayr-decentralized-identifier/dist/types/events/add_keys_event.d.ts:2

___

### AddServiceEndpointEventData

Ƭ **AddServiceEndpointEventData**: [`AddServiceEndpointParam`](../interfaces/did.AddServiceEndpointParam.md)

#### Defined in

packages/klayr-decentralized-identifier/dist/types/events/add_service_endpoint_event.d.ts:2

___

### AuthorizationResult

Ƭ **AuthorizationResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `method` | [`VerificationMethod`](../interfaces/did.VerificationMethod.md)[] |
| `relationship` | [`VerificationRelationship`](did.md#verificationrelationship)[] |
| `type` | ``"subject"`` \| ``"controller"`` |

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:3

___

### BaseLoader

Ƭ **BaseLoader**: (`url`: `string`) => `Promise`<`Record`<`string`, `any`\>\>

#### Type declaration

▸ (`url`): `Promise`<`Record`<`string`, `any`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

##### Returns

`Promise`<`Record`<`string`, `any`\>\>

#### Defined in

packages/klayr-decentralized-identifier/dist/types/resolver.d.ts:17

___

### CommandPayload

Ƭ **CommandPayload**: `CreatePayload` \| [`PayloadWithSignature`](did.md#payloadwithsignature)

#### Defined in

packages/klayr-decentralized-identifier/dist/types/client.d.ts:27

___

### CreateEventData

Ƭ **CreateEventData**: [`CreateParam`](../interfaces/did.CreateParam.md)

#### Defined in

packages/klayr-decentralized-identifier/dist/types/events/create_event.d.ts:2

___

### CreateResolverParam

Ƭ **CreateResolverParam**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `context?` | `MethodContext` |
| `ipc?` | `string` |
| `loader?` | [`BaseLoader`](did.md#baseloader) \| [`DocumentLoader`](did.md#documentloader) |
| `method?` | [`DidMethod`](../interfaces/did.DidMethod.md) |
| `resolver?` | [`BaseResolver`](../interfaces/did.BaseResolver.md) |
| `ws?` | `string` |

#### Defined in

packages/klayr-decentralized-identifier/dist/types/resolver.d.ts:18

___

### DIDCommands

Ƭ **DIDCommands**: ``"addControllers"`` \| ``"addKeys"`` \| ``"addServiceEndpoint"`` \| ``"create"`` \| ``"deactivate"`` \| ``"removeControllers"`` \| ``"removeKeys"`` \| ``"removeServiceEndpoint"``

#### Defined in

packages/klayr-decentralized-identifier/dist/types/client.d.ts:25

___

### DIDTransactionParam

Ƭ **DIDTransactionParam**: [`AddControllersParam`](../interfaces/did.AddControllersParam.md) \| [`AddKeysParam`](../interfaces/did.AddKeysParam.md) \| [`AddServiceEndpointParam`](../interfaces/did.AddServiceEndpointParam.md) \| [`CreateParam`](../interfaces/did.CreateParam.md) \| [`DeactivateParam`](../interfaces/did.DeactivateParam.md) \| [`RemoveControllersParam`](../interfaces/did.RemoveControllersParam.md) \| [`RemoveKeysParam`](../interfaces/did.RemoveKeysParam.md) \| [`RemoveServiceEndpointParam`](../interfaces/did.RemoveServiceEndpointParam.md)

#### Defined in

packages/klayr-decentralized-identifier/dist/types/client.d.ts:23

___

### DeactivateEventData

Ƭ **DeactivateEventData**: [`DeactivateParam`](../interfaces/did.DeactivateParam.md)

#### Defined in

packages/klayr-decentralized-identifier/dist/types/events/deactivate_event.d.ts:2

___

### DecodedTransactionJSON

Ƭ **DecodedTransactionJSON**<`T`\>: `Omit`<`TransactionJSON`, ``"params"``\> & { `params`: `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Record`<`string`, `unknown`\> |

#### Defined in

packages/klayr-decentralized-identifier/dist/types/client.d.ts:38

___

### DocumentLoader

Ƭ **DocumentLoader**: (`url`: `string`) => `Promise`<[`DocumentLoaderResult`](../interfaces/did.DocumentLoaderResult.md)\>

#### Type declaration

▸ (`url`): `Promise`<[`DocumentLoaderResult`](../interfaces/did.DocumentLoaderResult.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

##### Returns

`Promise`<[`DocumentLoaderResult`](../interfaces/did.DocumentLoaderResult.md)\>

#### Defined in

packages/klayr-decentralized-identifier/dist/types/resolver.d.ts:16

___

### DocumentStoreData

Ƭ **DocumentStoreData**: [`DidDocument`](../interfaces/did.DidDocument.md)

#### Defined in

packages/klayr-decentralized-identifier/dist/types/stores/document.d.ts:2

___

### KeyAgreement

Ƭ **KeyAgreement**: [`VerificationMethod`](../interfaces/did.VerificationMethod.md) & { `privateKeyMultibase?`: `string`  }

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:16

___

### PayloadWithSignature

Ƭ **PayloadWithSignature**: `AddControllersSignaturePayload` \| `AddKeysSignaturePayload` \| `AddServiceEndpointSignaturePayload` \| `DeactivateSignaturePayload` \| `RemoveControllersSignaturePayload` \| `RemoveKeysSignaturePayload` \| `RemoveServiceEndpointSignaturePayload`

#### Defined in

packages/klayr-decentralized-identifier/dist/types/client.d.ts:26

___

### RemoveControllersEventData

Ƭ **RemoveControllersEventData**: [`RemoveControllersParam`](../interfaces/did.RemoveControllersParam.md)

#### Defined in

packages/klayr-decentralized-identifier/dist/types/events/remove_controllers_event.d.ts:2

___

### RemoveKeysEventData

Ƭ **RemoveKeysEventData**: [`RemoveKeysParam`](../interfaces/did.RemoveKeysParam.md)

#### Defined in

packages/klayr-decentralized-identifier/dist/types/events/remove_keys_event.d.ts:2

___

### RemoveServiceEndpointEventData

Ƭ **RemoveServiceEndpointEventData**: [`RemoveServiceEndpointParam`](../interfaces/did.RemoveServiceEndpointParam.md)

#### Defined in

packages/klayr-decentralized-identifier/dist/types/events/remove_service_endpoint_event.d.ts:2

___

### VerificationRelationship

Ƭ **VerificationRelationship**: ``"authentication"`` \| ``"assertionMethod"`` \| ``"capabilityInvocation"`` \| ``"keyAgreement"``

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:9

___

### WriteableSchema

Ƭ **WriteableSchema**: `Writeable`<`Schema`\>

#### Defined in

packages/klayr-decentralized-identifier/dist/types/client.d.ts:24

## Variables

### default

• `Const` **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `client` | typeof [`client`](did.client.md) |
| `cryptography` | typeof [`cryptography`](did.cryptography.md) |
| `resolver` | typeof [`resolver`](did.resolver.md) |
| `utils` | typeof [`utils`](did.utils.md) |
| `getAddressDIDFromPublicKey` | (`chainspace`: `string`, `publicKey`: `Buffer`) => `string` |
| `getDIDDocument` | (`did`: `string`, `options`: [`CreateResolverParam`](did.md#createresolverparam)) => `Promise`<`undefined` \| [`DidDocument`](../interfaces/did.DidDocument.md)\> |
| `parseDIDComponent` | (`did`: `string`) => { `chainspace`: `any` ; `did`: `string` ; `fragment`: `any` ; `method`: `any` ; `namespace`: `string` ; `path`: `any` ; `query`: `any` ; `scheme`: `string` ; `uniqueId`: `string` ; `uri`: `string`  } |

#### Defined in

packages/klayr-decentralized-identifier/dist/index.d.ts:12

## Functions

### getAddressDIDFromPublicKey

▸ **getAddressDIDFromPublicKey**(`chainspace`, `publicKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainspace` | `string` |
| `publicKey` | `Buffer` |

#### Returns

`string`

#### Defined in

packages/klayr-decentralized-identifier/dist/did.d.ts:16

___

### getDIDDocument

▸ **getDIDDocument**(`did`, `options`): `Promise`<[`DidDocument`](../interfaces/did.DidDocument.md) \| `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `options` | [`CreateResolverParam`](did.md#createresolverparam) |

#### Returns

`Promise`<[`DidDocument`](../interfaces/did.DidDocument.md) \| `undefined`\>

#### Defined in

packages/klayr-decentralized-identifier/dist/did.d.ts:17

___

### parseDIDComponent

▸ **parseDIDComponent**(`did`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `chainspace` | `any` |
| `did` | `string` |
| `fragment` | `any` |
| `method` | `any` |
| `namespace` | `string` |
| `path` | `any` |
| `query` | `any` |
| `scheme` | `string` |
| `uniqueId` | `string` |
| `uri` | `string` |

#### Defined in

packages/klayr-decentralized-identifier/dist/did.d.ts:4
