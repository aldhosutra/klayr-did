---
id: 'resolver.CachedResolver'
title: 'Interface: CachedResolver'
sidebar_label: 'resolver.CachedResolver'
custom_edit_url: null
---

[resolver](../namespaces/resolver.md).CachedResolver

## Properties

### get

• **get**: (`__namedParameters`: { `did?`: `string` ; `url?`: `string` }) => `Promise`<`any`\>

#### Type declaration

▸ (`«destructured»`): `Promise`<`any`\>

##### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `«destructured»` | `Object` |
| › `did?`         | `string` |
| › `url?`         | `string` |

##### Returns

`Promise`<`any`\>

#### Defined in

[packages/lisk-decentralized-identifier/src/resolver/resolver.ts:12](https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-decentralized-identifier/src/resolver/resolver.ts#L12)

---

### method

• `Optional` **method**: `"lisk"`

#### Defined in

[packages/lisk-decentralized-identifier/src/resolver/resolver.ts:10](https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-decentralized-identifier/src/resolver/resolver.ts#L10)

---

### use

• `Optional` **use**: (`driver`: `any`) => `void`

#### Type declaration

▸ (`driver`): `void`

##### Parameters

| Name     | Type  |
| :------- | :---- |
| `driver` | `any` |

##### Returns

`void`

#### Defined in

[packages/lisk-decentralized-identifier/src/resolver/resolver.ts:11](https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-decentralized-identifier/src/resolver/resolver.ts#L11)
