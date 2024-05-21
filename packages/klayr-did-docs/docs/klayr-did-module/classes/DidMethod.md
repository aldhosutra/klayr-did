---
id: "DidMethod"
title: "Class: DidMethod"
sidebar_label: "DidMethod"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `BaseMethod`

  ↳ **`DidMethod`**

## Implements

- `DidMethod`

## Constructors

### constructor

• **new DidMethod**(`stores`, `events`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stores` | `NamedRegistry` |
| `events` | `NamedRegistry` |

#### Inherited from

BaseMethod.constructor

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_method.d.ts:5

## Properties

### config

• **config**: `DidModuleConfig`

#### Defined in

[packages/klayr-did-module/src/method.ts:33](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/method.ts#L33)

___

### events

• `Protected` **events**: `NamedRegistry`

#### Inherited from

BaseMethod.events

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_method.d.ts:4

___

### stores

• `Protected` **stores**: `NamedRegistry`

#### Inherited from

BaseMethod.stores

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_method.d.ts:3

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

#### Implementation of

DidMethodInterface.addControllers

#### Defined in

[packages/klayr-did-module/src/method.ts:153](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/method.ts#L153)

___

### addKeys

▸ **addKeys**(`methodContext`, `senderPublicKey`, `target`, `keys`, `signer`, `signature?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodContext` | `MethodContext` |
| `senderPublicKey` | `Buffer` |
| `target` | `string` |
| `keys` | `KeysCommand`[] |
| `signer` | `string` |
| `signature?` | `Buffer` |

#### Returns

`Promise`<`void`\>

#### Implementation of

DidMethodInterface.addKeys

#### Defined in

[packages/klayr-did-module/src/method.ts:87](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/method.ts#L87)

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

#### Implementation of

DidMethodInterface.addServiceEndpoint

#### Defined in

[packages/klayr-did-module/src/method.ts:219](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/method.ts#L219)

___

### authorize

▸ **authorize**(`methodContext`, `did`, `factors`): `Promise`<`AuthorizationResult`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodContext` | `MethodContext` |
| `did` | `string` |
| `factors` | `AuthorizationFactors` |

#### Returns

`Promise`<`AuthorizationResult`[]\>

#### Implementation of

DidMethodInterface.authorize

#### Defined in

[packages/klayr-did-module/src/method.ts:62](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/method.ts#L62)

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
| `keys` | `KeysCommand`[] |

#### Returns

`Promise`<`void`\>

#### Implementation of

DidMethodInterface.create

#### Defined in

[packages/klayr-did-module/src/method.ts:71](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/method.ts#L71)

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

#### Implementation of

DidMethodInterface.deactivate

#### Defined in

[packages/klayr-did-module/src/method.ts:285](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/method.ts#L285)

___

### getConfig

▸ **getConfig**(): `DidModuleConfig`

#### Returns

`DidModuleConfig`

#### Implementation of

DidMethodInterface.getConfig

#### Defined in

[packages/klayr-did-module/src/method.ts:40](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/method.ts#L40)

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

#### Implementation of

DidMethodInterface.getNonce

#### Defined in

[packages/klayr-did-module/src/method.ts:49](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/method.ts#L49)

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

#### Implementation of

DidMethodInterface.incrementNonce

#### Defined in

[packages/klayr-did-module/src/method.ts:55](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/method.ts#L55)

___

### init

▸ **init**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `DidModuleConfig` |

#### Returns

`void`

#### Implementation of

DidMethodInterface.init

#### Defined in

[packages/klayr-did-module/src/method.ts:35](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/method.ts#L35)

___

### read

▸ **read**(`methodContext`, `did`): `Promise`<`DidDocument`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodContext` | `MethodContext` |
| `did` | `string` |

#### Returns

`Promise`<`DidDocument`\>

#### Implementation of

DidMethodInterface.read

#### Defined in

[packages/klayr-did-module/src/method.ts:44](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/method.ts#L44)

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

#### Implementation of

DidMethodInterface.removeControllers

#### Defined in

[packages/klayr-did-module/src/method.ts:186](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/method.ts#L186)

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

#### Implementation of

DidMethodInterface.removeKeys

#### Defined in

[packages/klayr-did-module/src/method.ts:120](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/method.ts#L120)

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

#### Implementation of

DidMethodInterface.removeServiceEndpoint

#### Defined in

[packages/klayr-did-module/src/method.ts:252](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/method.ts#L252)
