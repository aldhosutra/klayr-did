---
id: 'DidMethod'
title: 'Interface: DidMethod'
sidebar_label: 'DidMethod'
sidebar_position: 0
custom_edit_url: null
---

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

#### Defined in

[packages/lisk-decentralized-identifier/src/types/method.ts:39](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L39)

---

### addKeys

▸ **addKeys**(`methodContext`, `senderPublicKey`, `target`, `keys`, `signer`, `signature?`): `Promise`<`void`\>

#### Parameters

| Name              | Type            |
| :---------------- | :-------------- |
| `methodContext`   | `MethodContext` |
| `senderPublicKey` | `Buffer`        |
| `target`          | `string`        |
| `keys`            | `Keys`[]        |
| `signer`          | `string`        |
| `signature?`      | `Buffer`        |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/lisk-decentralized-identifier/src/types/method.ts:23](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L23)

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

#### Defined in

[packages/lisk-decentralized-identifier/src/types/method.ts:55](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L55)

---

### authorize

▸ **authorize**(`methodContext`, `did`, `factors`): `Promise`<[`AuthorizationResult`](../modules.md#authorizationresult)[]\>

#### Parameters

| Name            | Type                                              |
| :-------------- | :------------------------------------------------ |
| `methodContext` | `MethodContext`                                   |
| `did`           | `string`                                          |
| `factors`       | [`AuthorizationFactors`](AuthorizationFactors.md) |

#### Returns

`Promise`<[`AuthorizationResult`](../modules.md#authorizationresult)[]\>

#### Defined in

[packages/lisk-decentralized-identifier/src/types/method.ts:15](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L15)

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
| `keys`            | `Keys`[]        |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/lisk-decentralized-identifier/src/types/method.ts:16](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L16)

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

#### Defined in

[packages/lisk-decentralized-identifier/src/types/method.ts:75](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L75)

---

### getConfig

▸ **getConfig**(): [`DidModuleConfig`](DidModuleConfig.md)

#### Returns

[`DidModuleConfig`](DidModuleConfig.md)

#### Defined in

[packages/lisk-decentralized-identifier/src/types/method.ts:11](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L11)

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

#### Defined in

[packages/lisk-decentralized-identifier/src/types/method.ts:13](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L13)

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

#### Defined in

[packages/lisk-decentralized-identifier/src/types/method.ts:14](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L14)

---

### init

▸ **init**(`config`): `void`

#### Parameters

| Name     | Type                                    |
| :------- | :-------------------------------------- |
| `config` | [`DidModuleConfig`](DidModuleConfig.md) |

#### Returns

`void`

#### Defined in

[packages/lisk-decentralized-identifier/src/types/method.ts:10](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L10)

---

### read

▸ **read**(`methodContext`, `did`): `Promise`<[`DidDocument`](DidDocument.md)\>

#### Parameters

| Name            | Type            |
| :-------------- | :-------------- |
| `methodContext` | `MethodContext` |
| `did`           | `string`        |

#### Returns

`Promise`<[`DidDocument`](DidDocument.md)\>

#### Defined in

[packages/lisk-decentralized-identifier/src/types/method.ts:12](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L12)

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

#### Defined in

[packages/lisk-decentralized-identifier/src/types/method.ts:47](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L47)

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

#### Defined in

[packages/lisk-decentralized-identifier/src/types/method.ts:31](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L31)

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

#### Defined in

[packages/lisk-decentralized-identifier/src/types/method.ts:67](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L67)
