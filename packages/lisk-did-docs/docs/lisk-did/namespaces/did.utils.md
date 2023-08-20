---
id: 'did.utils'
title: 'Namespace: utils'
sidebar_label: 'did.utils'
custom_edit_url: null
---

[did](did.md).utils

## Namespaces

- [array](did.utils.array.md)
- [constant](did.utils.constant.md)
- [object](did.utils.object.md)
- [schema](did.utils.schema.md)

## Variables

### contextsBySuite

• `Const` **contextsBySuite**: `Map`<`string`, `any`\>

#### Defined in

packages/lisk-decentralized-identifier/dist/utils/context.d.ts:1

## Functions

### bootstrapAddressDidDocument

▸ **bootstrapAddressDidDocument**(`chainspace`, `publicKey?`): `Promise`<[`DidDocument`](../interfaces/did.DidDocument.md)\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `chainspace` | `string` |
| `publicKey?` | `Buffer` |

#### Returns

`Promise`<[`DidDocument`](../interfaces/did.DidDocument.md)\>

#### Defined in

packages/lisk-decentralized-identifier/dist/utils/bootstrap.d.ts:4

---

### bootstrapEmptyDidDocument

▸ **bootstrapEmptyDidDocument**(): [`DidDocument`](../interfaces/did.DidDocument.md)

#### Returns

[`DidDocument`](../interfaces/did.DidDocument.md)

#### Defined in

packages/lisk-decentralized-identifier/dist/utils/bootstrap.d.ts:3

---

### validateDIDDocument

▸ **validateDIDDocument**(`did`): `boolean`

#### Parameters

| Name  | Type                                              |
| :---- | :------------------------------------------------ |
| `did` | [`DidDocument`](../interfaces/did.DidDocument.md) |

#### Returns

`boolean`

#### Defined in

packages/lisk-decentralized-identifier/dist/utils/validator.d.ts:2
