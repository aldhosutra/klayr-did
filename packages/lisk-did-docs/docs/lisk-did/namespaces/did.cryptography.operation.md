---
id: 'did.cryptography.operation'
title: 'Namespace: operation'
sidebar_label: 'did.cryptography.operation'
custom_edit_url: null
---

[did](did.md).[cryptography](did.cryptography.md).operation

## Functions

### decrypt

▸ **decrypt**(`jwe`, `recipientKeyId`, `privateKey`, `options`): `Promise`<`string`\>

#### Parameters

| Name             | Type                                                |
| :--------------- | :-------------------------------------------------- |
| `jwe`            | [`JWEDocument`](../interfaces/did.JWEDocument.md)   |
| `recipientKeyId` | `string`                                            |
| `privateKey`     | `Buffer`                                            |
| `options`        | [`CreateResolverParam`](did.md#createresolverparam) |

#### Returns

`Promise`<`string`\>

#### Defined in

packages/lisk-decentralized-identifier/dist/cryptography/operation.d.ts:5

---

### encrypt

▸ **encrypt**(`data`, `recipientKeyId`, `options`): `Promise`<[`JWEDocument`](../interfaces/did.JWEDocument.md)\>

#### Parameters

| Name             | Type                                                |
| :--------------- | :-------------------------------------------------- |
| `data`           | `string`                                            |
| `recipientKeyId` | `string`[]                                          |
| `options`        | [`CreateResolverParam`](did.md#createresolverparam) |

#### Returns

`Promise`<[`JWEDocument`](../interfaces/did.JWEDocument.md)\>

#### Defined in

packages/lisk-decentralized-identifier/dist/cryptography/operation.d.ts:4

---

### sign

▸ **sign**(`data`, `did`, `privateKey`, `options`): `Promise`<`Buffer`\>

#### Parameters

| Name         | Type                                                |
| :----------- | :-------------------------------------------------- |
| `data`       | `string`                                            |
| `did`        | `string`                                            |
| `privateKey` | `Buffer`                                            |
| `options`    | [`CreateResolverParam`](did.md#createresolverparam) |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

packages/lisk-decentralized-identifier/dist/cryptography/operation.d.ts:6

---

### signLocal

▸ **signLocal**(`data`, `privateKey`): `Promise`<`Buffer`\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `data`       | `string` |
| `privateKey` | `Buffer` |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

packages/lisk-decentralized-identifier/dist/cryptography/operation.d.ts:10

---

### verify

▸ **verify**(`data`, `did`, `signature`, `publicKey`, `options`): `Promise`<`boolean`\>

#### Parameters

| Name        | Type                                                                               |
| :---------- | :--------------------------------------------------------------------------------- |
| `data`      | `string`                                                                           |
| `did`       | `string`                                                                           |
| `signature` | `Buffer`                                                                           |
| `publicKey` | `Buffer`                                                                           |
| `options`   | [`CreateResolverParam`](did.md#createresolverparam) & { `withDigest?`: `boolean` } |

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/lisk-decentralized-identifier/dist/cryptography/operation.d.ts:7

---

### verifyLocal

▸ **verifyLocal**(`data`, `signature`, `publicKey`, `withDigest?`): `Promise`<`boolean`\>

#### Parameters

| Name          | Type      |
| :------------ | :-------- |
| `data`        | `string`  |
| `signature`   | `Buffer`  |
| `publicKey`   | `Buffer`  |
| `withDigest?` | `boolean` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/lisk-decentralized-identifier/dist/cryptography/operation.d.ts:11
