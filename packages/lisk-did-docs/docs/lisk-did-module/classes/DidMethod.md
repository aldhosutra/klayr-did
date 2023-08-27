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

- `DidMethod`

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

node_modules/lisk-framework/dist-node/modules/base_method.d.ts:5

## Properties

### config

• **config**: `DidModuleConfig`

#### Defined in

[packages/lisk-did-module/src/method.ts:33](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-did-module/src/method.ts#L33)

---

### events

• `Protected` **events**: `NamedRegistry`

#### Inherited from

BaseMethod.events

#### Defined in

node_modules/lisk-framework/dist-node/modules/base_method.d.ts:4

---

### stores

• `Protected` **stores**: `NamedRegistry`

#### Inherited from

BaseMethod.stores

#### Defined in

node_modules/lisk-framework/dist-node/modules/base_method.d.ts:3

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

DidMethodInterface.addControllers

#### Defined in

[packages/lisk-did-module/src/method.ts:146](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-did-module/src/method.ts#L146)

---

### addKeys

▸ **addKeys**(`methodContext`, `senderPublicKey`, `target`, `keys`, `signer`, `signature?`): `Promise`<`void`\>

#### Parameters

| Name              | Type            |
| :---------------- | :-------------- |
| `methodContext`   | `MethodContext` |
| `senderPublicKey` | `Buffer`        |
| `target`          | `string`        |
| `keys`            | `KeysCommand`[] |
| `signer`          | `string`        |
| `signature?`      | `Buffer`        |

#### Returns

`Promise`<`void`\>

#### Implementation of

DidMethodInterface.addKeys

#### Defined in

[packages/lisk-did-module/src/method.ts:80](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-did-module/src/method.ts#L80)

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

DidMethodInterface.addServiceEndpoint

#### Defined in

[packages/lisk-did-module/src/method.ts:212](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-did-module/src/method.ts#L212)

---

### authorize

▸ **authorize**(`methodContext`, `did`, `factors`): `Promise`<`AuthorizationResult`[]\>

#### Parameters

| Name            | Type                   |
| :-------------- | :--------------------- |
| `methodContext` | `MethodContext`        |
| `did`           | `string`               |
| `factors`       | `AuthorizationFactors` |

#### Returns

`Promise`<`AuthorizationResult`[]\>

#### Implementation of

DidMethodInterface.authorize

#### Defined in

[packages/lisk-did-module/src/method.ts:55](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-did-module/src/method.ts#L55)

---

### create

▸ **create**(`methodContext`, `senderPublicKey`, `did`, `controllers`, `keys`): `Promise`<`void`\>

#### Parameters

| Name              | Type            |
| :---------------- | :-------------- |
| `methodContext`   | `MethodContext` |
| `senderPublicKey` | `Buffer`        |
| `did`             | `string`        |
| `controllers`     | `string`[]      |
| `keys`            | `KeysCommand`[] |

#### Returns

`Promise`<`void`\>

#### Implementation of

DidMethodInterface.create

#### Defined in

[packages/lisk-did-module/src/method.ts:64](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-did-module/src/method.ts#L64)

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

DidMethodInterface.deactivate

#### Defined in

[packages/lisk-did-module/src/method.ts:278](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-did-module/src/method.ts#L278)

---

### getConfig

▸ **getConfig**(): `DidModuleConfig`

#### Returns

`DidModuleConfig`

#### Implementation of

DidMethodInterface.getConfig

#### Defined in

[packages/lisk-did-module/src/method.ts:40](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-did-module/src/method.ts#L40)

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

DidMethodInterface.getNonce

#### Defined in

[packages/lisk-did-module/src/method.ts:49](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-did-module/src/method.ts#L49)

---

### init

▸ **init**(`config`): `void`

#### Parameters

| Name     | Type              |
| :------- | :---------------- |
| `config` | `DidModuleConfig` |

#### Returns

`void`

#### Implementation of

DidMethodInterface.init

#### Defined in

[packages/lisk-did-module/src/method.ts:35](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-did-module/src/method.ts#L35)

---

### read

▸ **read**(`methodContext`, `did`): `Promise`<`DidDocument`\>

#### Parameters

| Name            | Type            |
| :-------------- | :-------------- |
| `methodContext` | `MethodContext` |
| `did`           | `string`        |

#### Returns

`Promise`<`DidDocument`\>

#### Implementation of

DidMethodInterface.read

#### Defined in

[packages/lisk-did-module/src/method.ts:44](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-did-module/src/method.ts#L44)

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

DidMethodInterface.removeControllers

#### Defined in

[packages/lisk-did-module/src/method.ts:179](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-did-module/src/method.ts#L179)

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

DidMethodInterface.removeKeys

#### Defined in

[packages/lisk-did-module/src/method.ts:113](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-did-module/src/method.ts#L113)

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

DidMethodInterface.removeServiceEndpoint

#### Defined in

[packages/lisk-did-module/src/method.ts:245](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-did-module/src/method.ts#L245)
