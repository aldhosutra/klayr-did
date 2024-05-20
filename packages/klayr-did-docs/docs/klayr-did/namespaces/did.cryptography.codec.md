---
id: 'did.cryptography.codec'
title: 'Namespace: codec'
sidebar_label: 'did.cryptography.codec'
custom_edit_url: null
---

[did](did.md).[cryptography](did.cryptography.md).codec

## Functions

### decodeJWEDocument

▸ **decodeJWEDocument**(`buf`): [`JWEDocument`](../interfaces/did.JWEDocument.md)

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `buf` | `Buffer` |

#### Returns

[`JWEDocument`](../interfaces/did.JWEDocument.md)

#### Defined in

packages/klayr-decentralized-identifier/dist/cryptography/codec.d.ts:8

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

packages/klayr-decentralized-identifier/dist/cryptography/codec.d.ts:6

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

packages/klayr-decentralized-identifier/dist/cryptography/codec.d.ts:4

---

### encodeJWEDocument

▸ **encodeJWEDocument**(`jwe`): `Buffer`

#### Parameters

| Name  | Type                                              |
| :---- | :------------------------------------------------ |
| `jwe` | [`JWEDocument`](../interfaces/did.JWEDocument.md) |

#### Returns

`Buffer`

#### Defined in

packages/klayr-decentralized-identifier/dist/cryptography/codec.d.ts:7

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

packages/klayr-decentralized-identifier/dist/cryptography/codec.d.ts:5

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

packages/klayr-decentralized-identifier/dist/cryptography/codec.d.ts:3
