---
id: 'did.resolver'
title: 'Namespace: resolver'
sidebar_label: 'did.resolver'
custom_edit_url: null
---

[did](did.md).resolver

## Interfaces

- [CachedResolver](../interfaces/did.resolver.CachedResolver.md)

## Variables

### driver

• `Const` **driver**: `Object`

#### Type declaration

| Name                   | Type                          |
| :--------------------- | :---------------------------- |
| `createLocalDriver`    | typeof `createLocalDriver`    |
| `createOffChainDriver` | typeof `createOffChainDriver` |
| `createOnChainDriver`  | typeof `createOnChainDriver`  |

#### Defined in

packages/lisk-decentralized-identifier/dist/resolver/index.d.ts:11

## Functions

### createChainResolver

▸ **createChainResolver**(`context`, `method`): [`CachedResolver`](../interfaces/did.resolver.CachedResolver.md)

#### Parameters

| Name      | Type                                          |
| :-------- | :-------------------------------------------- |
| `context` | `MethodContext`                               |
| `method`  | [`DidMethod`](../interfaces/did.DidMethod.md) |

#### Returns

[`CachedResolver`](../interfaces/did.resolver.CachedResolver.md)

#### Defined in

packages/lisk-decentralized-identifier/dist/resolver/resolver.d.ts:16

---

### createIPCResolver

▸ **createIPCResolver**(`ipc`): [`CachedResolver`](../interfaces/did.resolver.CachedResolver.md)

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `ipc` | `string` |

#### Returns

[`CachedResolver`](../interfaces/did.resolver.CachedResolver.md)

#### Defined in

packages/lisk-decentralized-identifier/dist/resolver/resolver.d.ts:14

---

### createResolver

▸ **createResolver**(`options`): [`CachedResolver`](../interfaces/did.resolver.CachedResolver.md)

#### Parameters

| Name      | Type                                                |
| :-------- | :-------------------------------------------------- |
| `options` | [`CreateResolverParam`](did.md#createresolverparam) |

#### Returns

[`CachedResolver`](../interfaces/did.resolver.CachedResolver.md)

#### Defined in

packages/lisk-decentralized-identifier/dist/resolver/resolver.d.ts:17

---

### createWSResolver

▸ **createWSResolver**(`ws`): [`CachedResolver`](../interfaces/did.resolver.CachedResolver.md)

#### Parameters

| Name | Type     |
| :--- | :------- |
| `ws` | `string` |

#### Returns

[`CachedResolver`](../interfaces/did.resolver.CachedResolver.md)

#### Defined in

packages/lisk-decentralized-identifier/dist/resolver/resolver.d.ts:15
