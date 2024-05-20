---
id: "cryptography.codec"
title: "Namespace: codec"
sidebar_label: "cryptography.codec"
custom_edit_url: null
---

[cryptography](cryptography.md).codec

## Functions

### decodeJWEDocument

▸ **decodeJWEDocument**(`buf`): [`JWEDocument`](../interfaces/JWEDocument.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Buffer` |

#### Returns

[`JWEDocument`](../interfaces/JWEDocument.md)

#### Defined in

[packages/klayr-decentralized-identifier/src/cryptography/codec.ts:59](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-decentralized-identifier/src/cryptography/codec.ts#L59)

___

### decodePrivateKey

▸ **decodePrivateKey**(`multibasePrivateKey`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `multibasePrivateKey` | `string` |

#### Returns

`Buffer`

#### Defined in

[packages/klayr-decentralized-identifier/src/cryptography/codec.ts:48](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-decentralized-identifier/src/cryptography/codec.ts#L48)

___

### decodePublicKey

▸ **decodePublicKey**(`multibasePublicKey`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `multibasePublicKey` | `string` |

#### Returns

`Buffer`

#### Defined in

[packages/klayr-decentralized-identifier/src/cryptography/codec.ts:34](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-decentralized-identifier/src/cryptography/codec.ts#L34)

___

### encodeJWEDocument

▸ **encodeJWEDocument**(`jwe`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `jwe` | [`JWEDocument`](../interfaces/JWEDocument.md) |

#### Returns

`Buffer`

#### Defined in

[packages/klayr-decentralized-identifier/src/cryptography/codec.ts:55](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-decentralized-identifier/src/cryptography/codec.ts#L55)

___

### encodePrivateKey

▸ **encodePrivateKey**(`klayrPrivateKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `klayrPrivateKey` | `Buffer` |

#### Returns

`string`

#### Defined in

[packages/klayr-decentralized-identifier/src/cryptography/codec.ts:41](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-decentralized-identifier/src/cryptography/codec.ts#L41)

___

### encodePublicKey

▸ **encodePublicKey**(`klayrPublicKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `klayrPublicKey` | `Buffer` |

#### Returns

`string`

#### Defined in

[packages/klayr-decentralized-identifier/src/cryptography/codec.ts:27](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-decentralized-identifier/src/cryptography/codec.ts#L27)
