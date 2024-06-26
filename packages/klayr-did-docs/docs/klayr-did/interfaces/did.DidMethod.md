---
id: "did.DidMethod"
title: "Interface: DidMethod"
sidebar_label: "did.DidMethod"
custom_edit_url: null
---

[did](../namespaces/did.md).DidMethod

## Implemented by

- [`DidMethod`](../classes/DidMethod.md)

## Methods

### addControllers

▸ **addControllers**(`methodContext`, `senderPublicKey`, `target`, `controllers`, `signer`, `signature?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodContext` | `MethodContext` |
| `senderPublicKey` | `Buffer` |
| `target` | `string` |
| `controllers` | `string`[] |
| `signer` | `string` |
| `signature?` | `Buffer` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/klayr-decentralized-identifier/dist/types/method.d.ts:21

___

### addKeys

▸ **addKeys**(`methodContext`, `senderPublicKey`, `target`, `keys`, `signer`, `signature?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodContext` | `MethodContext` |
| `senderPublicKey` | `Buffer` |
| `target` | `string` |
| `keys` | `Keys`[] |
| `signer` | `string` |
| `signature?` | `Buffer` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/klayr-decentralized-identifier/dist/types/method.d.ts:19

___

### addServiceEndpoint

▸ **addServiceEndpoint**(`methodContext`, `senderPublicKey`, `target`, `endpoint`, `signer`, `signature?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodContext` | `MethodContext` |
| `senderPublicKey` | `Buffer` |
| `target` | `string` |
| `endpoint` | `Object` |
| `endpoint.id` | `string` |
| `endpoint.serviceEndpoint` | `string` |
| `endpoint.type` | `string` |
| `signer` | `string` |
| `signature?` | `Buffer` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/klayr-decentralized-identifier/dist/types/method.d.ts:23

___

### authorize

▸ **authorize**(`methodContext`, `did`, `factors`): `Promise`<[`AuthorizationResult`](../namespaces/did.md#authorizationresult)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodContext` | `MethodContext` |
| `did` | `string` |
| `factors` | [`AuthorizationFactors`](did.AuthorizationFactors.md) |

#### Returns

`Promise`<[`AuthorizationResult`](../namespaces/did.md#authorizationresult)[]\>

#### Defined in

packages/klayr-decentralized-identifier/dist/types/method.d.ts:17

___

### create

▸ **create**(`methodContext`, `senderPublicKey`, `did`, `controllers`, `keys`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodContext` | `MethodContext` |
| `senderPublicKey` | `Buffer` |
| `did` | `string` |
| `controllers` | `string`[] |
| `keys` | `Keys`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/klayr-decentralized-identifier/dist/types/method.d.ts:18

___

### deactivate

▸ **deactivate**(`methodContext`, `senderPublicKey`, `target`, `signer`, `signature?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodContext` | `MethodContext` |
| `senderPublicKey` | `Buffer` |
| `target` | `string` |
| `signer` | `string` |
| `signature?` | `Buffer` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/klayr-decentralized-identifier/dist/types/method.d.ts:29

___

### getConfig

▸ **getConfig**(): [`DidModuleConfig`](did.DidModuleConfig.md)

#### Returns

[`DidModuleConfig`](did.DidModuleConfig.md)

#### Defined in

packages/klayr-decentralized-identifier/dist/types/method.d.ts:13

___

### getNonce

▸ **getNonce**(`methodContext`, `did`): `Promise`<{ `nonce`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodContext` | `MethodContext` |
| `did` | `string` |

#### Returns

`Promise`<{ `nonce`: `string`  }\>

#### Defined in

packages/klayr-decentralized-identifier/dist/types/method.d.ts:15

___

### incrementNonce

▸ **incrementNonce**(`methodContext`, `did`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodContext` | `MethodContext` |
| `did` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/klayr-decentralized-identifier/dist/types/method.d.ts:16

___

### init

▸ **init**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`DidModuleConfig`](did.DidModuleConfig.md) |

#### Returns

`void`

#### Defined in

packages/klayr-decentralized-identifier/dist/types/method.d.ts:12

___

### read

▸ **read**(`methodContext`, `did`): `Promise`<[`DidDocument`](did.DidDocument.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodContext` | `MethodContext` |
| `did` | `string` |

#### Returns

`Promise`<[`DidDocument`](did.DidDocument.md)\>

#### Defined in

packages/klayr-decentralized-identifier/dist/types/method.d.ts:14

___

### removeControllers

▸ **removeControllers**(`methodContext`, `senderPublicKey`, `target`, `controllers`, `signer`, `signature?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodContext` | `MethodContext` |
| `senderPublicKey` | `Buffer` |
| `target` | `string` |
| `controllers` | `string`[] |
| `signer` | `string` |
| `signature?` | `Buffer` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/klayr-decentralized-identifier/dist/types/method.d.ts:22

___

### removeKeys

▸ **removeKeys**(`methodContext`, `senderPublicKey`, `target`, `publicKeys`, `signer`, `signature?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodContext` | `MethodContext` |
| `senderPublicKey` | `Buffer` |
| `target` | `string` |
| `publicKeys` | `Buffer`[] |
| `signer` | `string` |
| `signature?` | `Buffer` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/klayr-decentralized-identifier/dist/types/method.d.ts:20

___

### removeServiceEndpoint

▸ **removeServiceEndpoint**(`methodContext`, `senderPublicKey`, `target`, `endpointId`, `signer`, `signature?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodContext` | `MethodContext` |
| `senderPublicKey` | `Buffer` |
| `target` | `string` |
| `endpointId` | `string` |
| `signer` | `string` |
| `signature?` | `Buffer` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/klayr-decentralized-identifier/dist/types/method.d.ts:28
