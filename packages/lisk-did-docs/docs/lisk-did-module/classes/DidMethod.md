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

[packages/lisk-did-module/src/method.ts:32](https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-did-module/src/method.ts#L32)

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

[packages/lisk-did-module/src/method.ts:141](https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-did-module/src/method.ts#L141)

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

[packages/lisk-did-module/src/method.ts:75](https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-did-module/src/method.ts#L75)

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

[packages/lisk-did-module/src/method.ts:207](https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-did-module/src/method.ts#L207)

---

### authorize

▸ **authorize**(`methodContext`, `did`, `publicKey`): `Promise`<`AuthorizationResult`[]\>

#### Parameters

| Name            | Type            |
| :-------------- | :-------------- |
| `methodContext` | `MethodContext` |
| `did`           | `string`        |
| `publicKey`     | `Buffer`        |

#### Returns

`Promise`<`AuthorizationResult`[]\>

#### Implementation of

DidMethodInterface.authorize

#### Defined in

[packages/lisk-did-module/src/method.ts:54](https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-did-module/src/method.ts#L54)

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

[packages/lisk-did-module/src/method.ts:59](https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-did-module/src/method.ts#L59)

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

[packages/lisk-did-module/src/method.ts:273](https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-did-module/src/method.ts#L273)

---

### getConfig

▸ **getConfig**(): `DidModuleConfig`

#### Returns

`DidModuleConfig`

#### Implementation of

DidMethodInterface.getConfig

#### Defined in

[packages/lisk-did-module/src/method.ts:39](https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-did-module/src/method.ts#L39)

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

[packages/lisk-did-module/src/method.ts:48](https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-did-module/src/method.ts#L48)

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

[packages/lisk-did-module/src/method.ts:34](https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-did-module/src/method.ts#L34)

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

[packages/lisk-did-module/src/method.ts:43](https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-did-module/src/method.ts#L43)

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

[packages/lisk-did-module/src/method.ts:174](https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-did-module/src/method.ts#L174)

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

[packages/lisk-did-module/src/method.ts:108](https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-did-module/src/method.ts#L108)

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

[packages/lisk-did-module/src/method.ts:240](https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-did-module/src/method.ts#L240)
