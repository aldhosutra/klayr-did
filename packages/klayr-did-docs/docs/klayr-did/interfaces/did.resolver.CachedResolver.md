---
id: "did.resolver.CachedResolver"
title: "Interface: CachedResolver"
sidebar_label: "did.resolver.CachedResolver"
custom_edit_url: null
---

[did](../namespaces/did.md).[resolver](../namespaces/did.resolver.md).CachedResolver

## Properties

### get

• **get**: (`__namedParameters`: { `did?`: `string` ; `url?`: `string`  }) => `Promise`<`any`\>

#### Type declaration

▸ (`«destructured»`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `did?` | `string` |
| › `url?` | `string` |

##### Returns

`Promise`<`any`\>

#### Defined in

packages/klayr-decentralized-identifier/dist/resolver/resolver.d.ts:9

___

### method

• `Optional` **method**: ``"klayr"``

#### Defined in

packages/klayr-decentralized-identifier/dist/resolver/resolver.d.ts:7

___

### use

• `Optional` **use**: (`driver`: `any`) => `void`

#### Type declaration

▸ (`driver`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `driver` | `any` |

##### Returns

`void`

#### Defined in

packages/klayr-decentralized-identifier/dist/resolver/resolver.d.ts:8
