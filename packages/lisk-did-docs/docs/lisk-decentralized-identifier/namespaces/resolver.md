---
id: 'resolver'
title: 'Namespace: resolver'
sidebar_label: 'resolver'
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [CachedResolver](../interfaces/resolver.CachedResolver.md)

## Variables

### driver

• `Const` **driver**: `Object`

#### Type declaration

| Name                   | Type                                                                                                        |
| :--------------------- | :---------------------------------------------------------------------------------------------------------- |
| `createLocalDriver`    | (`chainspace`: `string`) => `LiskLocalDidDriver`                                                            |
| `createOffChainDriver` | (`param`: { `ipc?`: `string` ; `ws?`: `string` }) => `LiskOffChainDidDriver`                                |
| `createOnChainDriver`  | (`context`: `MethodContext`, `method`: [`DidMethod`](../interfaces/DidMethod.md)) => `LiskOnChainDidDriver` |

#### Defined in

[packages/lisk-decentralized-identifier/src/resolver/index.ts:16](https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/resolver/index.ts#L16)

## Functions

### createChainResolver

▸ **createChainResolver**(`context`, `method`): [`CachedResolver`](../interfaces/resolver.CachedResolver.md)

#### Parameters

| Name      | Type                                      |
| :-------- | :---------------------------------------- |
| `context` | `MethodContext`                           |
| `method`  | [`DidMethod`](../interfaces/DidMethod.md) |

#### Returns

[`CachedResolver`](../interfaces/resolver.CachedResolver.md)

#### Defined in

[packages/lisk-decentralized-identifier/src/resolver/resolver.ts:54](https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/resolver/resolver.ts#L54)

---

### createIPCResolver

▸ **createIPCResolver**(`ipc`): [`CachedResolver`](../interfaces/resolver.CachedResolver.md)

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `ipc` | `string` |

#### Returns

[`CachedResolver`](../interfaces/resolver.CachedResolver.md)

#### Defined in

[packages/lisk-decentralized-identifier/src/resolver/resolver.ts:46](https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/resolver/resolver.ts#L46)

---

### createResolver

▸ **createResolver**(`options`): [`CachedResolver`](../interfaces/resolver.CachedResolver.md)

#### Parameters

| Name      | Type                                                       |
| :-------- | :--------------------------------------------------------- |
| `options` | [`CreateResolverParam`](../modules.md#createresolverparam) |

#### Returns

[`CachedResolver`](../interfaces/resolver.CachedResolver.md)

#### Defined in

[packages/lisk-decentralized-identifier/src/resolver/resolver.ts:61](https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/resolver/resolver.ts#L61)

---

### createWSResolver

▸ **createWSResolver**(`ws`): [`CachedResolver`](../interfaces/resolver.CachedResolver.md)

#### Parameters

| Name | Type     |
| :--- | :------- |
| `ws` | `string` |

#### Returns

[`CachedResolver`](../interfaces/resolver.CachedResolver.md)

#### Defined in

[packages/lisk-decentralized-identifier/src/resolver/resolver.ts:50](https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/resolver/resolver.ts#L50)
