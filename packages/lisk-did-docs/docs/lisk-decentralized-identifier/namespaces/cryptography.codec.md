---
id: 'cryptography.codec'
title: 'Namespace: codec'
sidebar_label: 'cryptography.codec'
custom_edit_url: null
---

[cryptography](cryptography.md).codec

## Functions

### decodeJWEDocument

▸ **decodeJWEDocument**(`buf`): [`JWEDocument`](../interfaces/JWEDocument.md)

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `buf` | `Buffer` |

#### Returns

[`JWEDocument`](../interfaces/JWEDocument.md)

#### Defined in

[packages/lisk-decentralized-identifier/src/cryptography/codec.ts:59](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/cryptography/codec.ts#L59)

---

### decodePrivateKey

▸ **decodePrivateKey**(`multibasePrivateKey`): `Buffer`

#### Parameters

| Name                  | Type     |
| :-------------------- | :------- |
| `multibasePrivateKey` | `string` |

#### Returns

`Buffer`

#### Defined in

[packages/lisk-decentralized-identifier/src/cryptography/codec.ts:48](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/cryptography/codec.ts#L48)

---

### decodePublicKey

▸ **decodePublicKey**(`multibasePublicKey`): `Buffer`

#### Parameters

| Name                 | Type     |
| :------------------- | :------- |
| `multibasePublicKey` | `string` |

#### Returns

`Buffer`

#### Defined in

[packages/lisk-decentralized-identifier/src/cryptography/codec.ts:34](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/cryptography/codec.ts#L34)

---

### encodeJWEDocument

▸ **encodeJWEDocument**(`jwe`): `Buffer`

#### Parameters

| Name  | Type                                          |
| :---- | :-------------------------------------------- |
| `jwe` | [`JWEDocument`](../interfaces/JWEDocument.md) |

#### Returns

`Buffer`

#### Defined in

[packages/lisk-decentralized-identifier/src/cryptography/codec.ts:55](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/cryptography/codec.ts#L55)

---

### encodePrivateKey

▸ **encodePrivateKey**(`liskPrivateKey`): `string`

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `liskPrivateKey` | `Buffer` |

#### Returns

`string`

#### Defined in

[packages/lisk-decentralized-identifier/src/cryptography/codec.ts:41](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/cryptography/codec.ts#L41)

---

### encodePublicKey

▸ **encodePublicKey**(`liskPublicKey`): `string`

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `liskPublicKey` | `Buffer` |

#### Returns

`string`

#### Defined in

[packages/lisk-decentralized-identifier/src/cryptography/codec.ts:27](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/cryptography/codec.ts#L27)
