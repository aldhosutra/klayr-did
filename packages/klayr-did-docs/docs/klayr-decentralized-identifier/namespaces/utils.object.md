---
id: "utils.object"
title: "Namespace: object"
sidebar_label: "utils.object"
custom_edit_url: null
---

[utils](utils.md).object

## Functions

### decodeJSON

▸ **decodeJSON**<`T`\>(`jsonByte`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonByte` | `Buffer` |

#### Returns

`T`

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/object.ts:9](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-decentralized-identifier/src/utils/object.ts#L9)

___

### encodeJSON

▸ **encodeJSON**(`json`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `Record`<`string`, `any`\> |

#### Returns

`Buffer`

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/object.ts:5](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-decentralized-identifier/src/utils/object.ts#L5)

___

### serializer

▸ **serializer**<`T`\>(`data`): `JSONObject`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`any`, `any`\> |

#### Returns

`JSONObject`<`T`\>

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/object.ts:13](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-decentralized-identifier/src/utils/object.ts#L13)
