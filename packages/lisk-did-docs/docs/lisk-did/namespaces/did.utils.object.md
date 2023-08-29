---
id: 'did.utils.object'
title: 'Namespace: object'
sidebar_label: 'did.utils.object'
custom_edit_url: null
---

[did](did.md).[utils](did.utils.md).object

## Functions

### decodeJSON

▸ **decodeJSON**<`T`\>(`jsonByte`): `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `jsonByte` | `Buffer` |

#### Returns

`T`

#### Defined in

packages/lisk-decentralized-identifier/dist/utils/object.d.ts:4

---

### encodeJSON

▸ **encodeJSON**(`json`): `Buffer`

#### Parameters

| Name   | Type                       |
| :----- | :------------------------- |
| `json` | `Record`<`string`, `any`\> |

#### Returns

`Buffer`

#### Defined in

packages/lisk-decentralized-identifier/dist/utils/object.d.ts:3

---

### serializer

▸ **serializer**<`T`\>(`data`): `JSONObject`<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name   | Type                    |
| :----- | :---------------------- |
| `data` | `Record`<`any`, `any`\> |

#### Returns

`JSONObject`<`T`\>

#### Defined in

packages/lisk-decentralized-identifier/dist/utils/object.d.ts:5
