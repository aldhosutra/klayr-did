---
id: 'DidMethod'
title: 'Class: DidMethod'
sidebar_label: 'DidMethod'
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `BaseMethod`

  ↳ **`DidMethod`**

## Implements

- [`DidMethod`](../interfaces/did.DidMethod.md)

## Constructors

### constructor

• **new DidMethod**(`stores`, `events`)

#### Parameters

| Name     | Type            |
| :------- | :-------------- |
| `stores` | `NamedRegistry` |
| `events` | `NamedRegistry` |

#### Inherited from

BaseMethod.constructor

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_method.d.ts:5

## Properties

### config

• **config**: [`DidModuleConfig`](../interfaces/did.DidModuleConfig.md)

#### Defined in

packages/klayr-did-module/dist/method.d.ts:5

---

### events

• `Protected` **events**: `NamedRegistry`

#### Inherited from

BaseMethod.events

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_method.d.ts:4

---

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

| Name              | Type            |
| :---------------- | :-------------- |
| `methodContext`   | `MethodContext` |
| `senderPublicKey` | `Buffer`        |
| `target`          | `string`        |
| `controllers`     | `string`[]      |
| `signer`          | `string`        |
| `signature?`      | `Buffer`        |

#### Returns

`Promise`<`void`\>

#### Implementation of

[DidMethod](../interfaces/did.DidMethod.md).[addControllers](../interfaces/did.DidMethod.md#addcontrollers)

#### Defined in

packages/klayr-did-module/dist/method.d.ts:15

---

### addKeys

▸ **addKeys**(`methodContext`, `senderPublicKey`, `target`, `keys`, `signer`, `signature?`): `Promise`<`void`\>

#### Parameters

| Name              | Type                                                |
| :---------------- | :-------------------------------------------------- |
| `methodContext`   | `MethodContext`                                     |
| `senderPublicKey` | `Buffer`                                            |
| `target`          | `string`                                            |
| `keys`            | [`KeysCommand`](../interfaces/did.KeysCommand.md)[] |
| `signer`          | `string`                                            |
| `signature?`      | `Buffer`                                            |

#### Returns

`Promise`<`void`\>

#### Implementation of

[DidMethod](../interfaces/did.DidMethod.md).[addKeys](../interfaces/did.DidMethod.md#addkeys)

#### Defined in

packages/klayr-did-module/dist/method.d.ts:13

---

### addServiceEndpoint

▸ **addServiceEndpoint**(`methodContext`, `senderPublicKey`, `target`, `endpoint`, `signer`, `signature?`): `Promise`<`void`\>

#### Parameters

| Name                       | Type            |
| :------------------------- | :-------------- |
| `methodContext`            | `MethodContext` |
| `senderPublicKey`          | `Buffer`        |
| `target`                   | `string`        |
| `endpoint`                 | `Object`        |
| `endpoint.id`              | `string`        |
| `endpoint.serviceEndpoint` | `string`        |
| `endpoint.type`            | `string`        |
| `signer`                   | `string`        |
| `signature?`               | `Buffer`        |

#### Returns

`Promise`<`void`\>

#### Implementation of

[DidMethod](../interfaces/did.DidMethod.md).[addServiceEndpoint](../interfaces/did.DidMethod.md#addserviceendpoint)

#### Defined in

packages/klayr-did-module/dist/method.d.ts:17

---

### authorize

▸ **authorize**(`methodContext`, `did`, `factors`): `Promise`<[`AuthorizationResult`](../namespaces/did.md#authorizationresult)[]\>

#### Parameters

| Name            | Type                                                                |
| :-------------- | :------------------------------------------------------------------ |
| `methodContext` | `MethodContext`                                                     |
| `did`           | `string`                                                            |
| `factors`       | [`AuthorizationFactors`](../interfaces/did.AuthorizationFactors.md) |

#### Returns

`Promise`<[`AuthorizationResult`](../namespaces/did.md#authorizationresult)[]\>

#### Implementation of

[DidMethod](../interfaces/did.DidMethod.md).[authorize](../interfaces/did.DidMethod.md#authorize)

#### Defined in

packages/klayr-did-module/dist/method.d.ts:11

---

### create

▸ **create**(`methodContext`, `senderPublicKey`, `did`, `controllers`, `keys`): `Promise`<`void`\>

#### Parameters

| Name              | Type                                                |
| :---------------- | :-------------------------------------------------- |
| `methodContext`   | `MethodContext`                                     |
| `senderPublicKey` | `Buffer`                                            |
| `did`             | `string`                                            |
| `controllers`     | `string`[]                                          |
| `keys`            | [`KeysCommand`](../interfaces/did.KeysCommand.md)[] |

#### Returns

`Promise`<`void`\>

#### Implementation of

[DidMethod](../interfaces/did.DidMethod.md).[create](../interfaces/did.DidMethod.md#create)

#### Defined in

packages/klayr-did-module/dist/method.d.ts:12

---

### deactivate

▸ **deactivate**(`methodContext`, `senderPublicKey`, `target`, `signer`, `signature?`): `Promise`<`void`\>

#### Parameters

| Name              | Type            |
| :---------------- | :-------------- |
| `methodContext`   | `MethodContext` |
| `senderPublicKey` | `Buffer`        |
| `target`          | `string`        |
| `signer`          | `string`        |
| `signature?`      | `Buffer`        |

#### Returns

`Promise`<`void`\>

#### Implementation of

[DidMethod](../interfaces/did.DidMethod.md).[deactivate](../interfaces/did.DidMethod.md#deactivate)

#### Defined in

packages/klayr-did-module/dist/method.d.ts:23

---

### getConfig

▸ **getConfig**(): [`DidModuleConfig`](../interfaces/did.DidModuleConfig.md)

#### Returns

[`DidModuleConfig`](../interfaces/did.DidModuleConfig.md)

#### Implementation of

[DidMethod](../interfaces/did.DidMethod.md).[getConfig](../interfaces/did.DidMethod.md#getconfig)

#### Defined in

packages/klayr-did-module/dist/method.d.ts:7

---

### getNonce

▸ **getNonce**(`methodContext`, `did`): `Promise`<{ `nonce`: `string` }\>

#### Parameters

| Name            | Type            |
| :-------------- | :-------------- |
| `methodContext` | `MethodContext` |
| `did`           | `string`        |

#### Returns

`Promise`<{ `nonce`: `string` }\>

#### Implementation of

[DidMethod](../interfaces/did.DidMethod.md).[getNonce](../interfaces/did.DidMethod.md#getnonce)

#### Defined in

packages/klayr-did-module/dist/method.d.ts:9

---

### incrementNonce

▸ **incrementNonce**(`methodContext`, `did`): `Promise`<`void`\>

#### Parameters

| Name            | Type            |
| :-------------- | :-------------- |
| `methodContext` | `MethodContext` |
| `did`           | `string`        |

#### Returns

`Promise`<`void`\>

#### Implementation of

[DidMethod](../interfaces/did.DidMethod.md).[incrementNonce](../interfaces/did.DidMethod.md#incrementnonce)

#### Defined in

packages/klayr-did-module/dist/method.d.ts:10

---

### init

▸ **init**(`config`): `void`

#### Parameters

| Name     | Type                                                      |
| :------- | :-------------------------------------------------------- |
| `config` | [`DidModuleConfig`](../interfaces/did.DidModuleConfig.md) |

#### Returns

`void`

#### Implementation of

[DidMethod](../interfaces/did.DidMethod.md).[init](../interfaces/did.DidMethod.md#init)

#### Defined in

packages/klayr-did-module/dist/method.d.ts:6

---

### read

▸ **read**(`methodContext`, `did`): `Promise`<[`DidDocument`](../interfaces/did.DidDocument.md)\>

#### Parameters

| Name            | Type            |
| :-------------- | :-------------- |
| `methodContext` | `MethodContext` |
| `did`           | `string`        |

#### Returns

`Promise`<[`DidDocument`](../interfaces/did.DidDocument.md)\>

#### Implementation of

[DidMethod](../interfaces/did.DidMethod.md).[read](../interfaces/did.DidMethod.md#read)

#### Defined in

packages/klayr-did-module/dist/method.d.ts:8

---

### removeControllers

▸ **removeControllers**(`methodContext`, `senderPublicKey`, `target`, `controllers`, `signer`, `signature?`): `Promise`<`void`\>

#### Parameters

| Name              | Type            |
| :---------------- | :-------------- |
| `methodContext`   | `MethodContext` |
| `senderPublicKey` | `Buffer`        |
| `target`          | `string`        |
| `controllers`     | `string`[]      |
| `signer`          | `string`        |
| `signature?`      | `Buffer`        |

#### Returns

`Promise`<`void`\>

#### Implementation of

[DidMethod](../interfaces/did.DidMethod.md).[removeControllers](../interfaces/did.DidMethod.md#removecontrollers)

#### Defined in

packages/klayr-did-module/dist/method.d.ts:16

---

### removeKeys

▸ **removeKeys**(`methodContext`, `senderPublicKey`, `target`, `publicKeys`, `signer`, `signature?`): `Promise`<`void`\>

#### Parameters

| Name              | Type            |
| :---------------- | :-------------- |
| `methodContext`   | `MethodContext` |
| `senderPublicKey` | `Buffer`        |
| `target`          | `string`        |
| `publicKeys`      | `Buffer`[]      |
| `signer`          | `string`        |
| `signature?`      | `Buffer`        |

#### Returns

`Promise`<`void`\>

#### Implementation of

[DidMethod](../interfaces/did.DidMethod.md).[removeKeys](../interfaces/did.DidMethod.md#removekeys)

#### Defined in

packages/klayr-did-module/dist/method.d.ts:14

---

### removeServiceEndpoint

▸ **removeServiceEndpoint**(`methodContext`, `senderPublicKey`, `target`, `endpointId`, `signer`, `signature?`): `Promise`<`void`\>

#### Parameters

| Name              | Type            |
| :---------------- | :-------------- |
| `methodContext`   | `MethodContext` |
| `senderPublicKey` | `Buffer`        |
| `target`          | `string`        |
| `endpointId`      | `string`        |
| `signer`          | `string`        |
| `signature?`      | `Buffer`        |

#### Returns

`Promise`<`void`\>

#### Implementation of

[DidMethod](../interfaces/did.DidMethod.md).[removeServiceEndpoint](../interfaces/did.DidMethod.md#removeserviceendpoint)

#### Defined in

packages/klayr-did-module/dist/method.d.ts:22
