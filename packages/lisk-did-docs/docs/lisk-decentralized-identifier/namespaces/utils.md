---
id: 'utils'
title: 'Namespace: utils'
sidebar_label: 'utils'
sidebar_position: 0
custom_edit_url: null
---

## Namespaces

- [array](utils.array.md)
- [constant](utils.constant.md)
- [object](utils.object.md)
- [schema](utils.schema.md)

## Variables

### contextsBySuite

• `Const` **contextsBySuite**: `Map`<`string`, `any`\>

#### Defined in

[packages/lisk-decentralized-identifier/src/utils/context.ts:10](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/utils/context.ts#L10)

## Functions

### bootstrapAddressDidDocument

▸ **bootstrapAddressDidDocument**(`chainspace`, `publicKey?`): `Promise`<[`DidDocument`](../interfaces/DidDocument.md)\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `chainspace` | `string` |
| `publicKey?` | `Buffer` |

#### Returns

`Promise`<[`DidDocument`](../interfaces/DidDocument.md)\>

#### Defined in

[packages/lisk-decentralized-identifier/src/utils/bootstrap.ts:18](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/utils/bootstrap.ts#L18)

---

### bootstrapEmptyDidDocument

▸ **bootstrapEmptyDidDocument**(): [`DidDocument`](../interfaces/DidDocument.md)

#### Returns

[`DidDocument`](../interfaces/DidDocument.md)

#### Defined in

[packages/lisk-decentralized-identifier/src/utils/bootstrap.ts:4](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/utils/bootstrap.ts#L4)

---

### validateDIDDocument

▸ **validateDIDDocument**(`did`): `boolean`

#### Parameters

| Name  | Type                                          |
| :---- | :-------------------------------------------- |
| `did` | [`DidDocument`](../interfaces/DidDocument.md) |

#### Returns

`boolean`

#### Defined in

[packages/lisk-decentralized-identifier/src/utils/validator.ts:5](https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/utils/validator.ts#L5)
