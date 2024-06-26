---
id: "cryptography.operation"
title: "Namespace: operation"
sidebar_label: "cryptography.operation"
custom_edit_url: null
---

[cryptography](cryptography.md).operation

## Functions

### decrypt

▸ **decrypt**(`jwe`, `recipientKeyId`, `privateKey`, `options`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `jwe` | [`JWEDocument`](../interfaces/JWEDocument.md) |
| `recipientKeyId` | `string` |
| `privateKey` | `Buffer` |
| `options` | [`CreateResolverParam`](../modules.md#createresolverparam) |

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/klayr-decentralized-identifier/src/cryptography/operation.ts:26](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/cryptography/operation.ts#L26)

___

### encrypt

▸ **encrypt**(`data`, `recipientKeyId`, `options`): `Promise`<[`JWEDocument`](../interfaces/JWEDocument.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `recipientKeyId` | `string`[] |
| `options` | [`CreateResolverParam`](../modules.md#createresolverparam) |

#### Returns

`Promise`<[`JWEDocument`](../interfaces/JWEDocument.md)\>

#### Defined in

[packages/klayr-decentralized-identifier/src/cryptography/operation.ts:11](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/cryptography/operation.ts#L11)

___

### sign

▸ **sign**(`data`, `did`, `privateKey`, `options`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `did` | `string` |
| `privateKey` | `Buffer` |
| `options` | [`CreateResolverParam`](../modules.md#createresolverparam) |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

[packages/klayr-decentralized-identifier/src/cryptography/operation.ts:45](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/cryptography/operation.ts#L45)

___

### signLocal

▸ **signLocal**(`data`, `privateKey`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `privateKey` | `Buffer` |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

[packages/klayr-decentralized-identifier/src/cryptography/operation.ts:93](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/cryptography/operation.ts#L93)

___

### verify

▸ **verify**(`data`, `did`, `signature`, `publicKey`, `options`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `did` | `string` |
| `signature` | `Buffer` |
| `publicKey` | `Buffer` |
| `options` | [`CreateResolverParam`](../modules.md#createresolverparam) & { `withDigest?`: `boolean`  } |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/klayr-decentralized-identifier/src/cryptography/operation.ts:63](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/cryptography/operation.ts#L63)

___

### verifyLocal

▸ **verifyLocal**(`data`, `signature`, `publicKey`, `withDigest?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` | `undefined` |
| `signature` | `Buffer` | `undefined` |
| `publicKey` | `Buffer` | `undefined` |
| `withDigest` | `boolean` | `false` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/klayr-decentralized-identifier/src/cryptography/operation.ts:99](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/cryptography/operation.ts#L99)
