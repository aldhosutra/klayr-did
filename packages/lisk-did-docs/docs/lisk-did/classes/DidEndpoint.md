---
id: 'DidEndpoint'
title: 'Class: DidEndpoint'
sidebar_label: 'DidEndpoint'
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `BaseEndpoint`

  ↳ **`DidEndpoint`**

## Implements

- [`DidEndpoint`](../interfaces/did.DidEndpoint.md)

## Constructors

### constructor

• **new DidEndpoint**(`stores`, `offchainStores`)

#### Parameters

| Name             | Type            |
| :--------------- | :-------------- |
| `stores`         | `NamedRegistry` |
| `offchainStores` | `NamedRegistry` |

#### Inherited from

BaseEndpoint.constructor

#### Defined in

node_modules/lisk-framework/dist-node/modules/base_endpoint.d.ts:6

## Properties

### autoCreateAddressDID

• `Private` **autoCreateAddressDID**: `any`

#### Defined in

packages/lisk-did-module/dist/endpoint.d.ts:5

---

### chainspace

• `Private` **chainspace**: `any`

#### Defined in

packages/lisk-did-module/dist/endpoint.d.ts:4

---

### offchainStores

• `Protected` **offchainStores**: `NamedRegistry`

#### Inherited from

BaseEndpoint.offchainStores

#### Defined in

node_modules/lisk-framework/dist-node/modules/base_endpoint.d.ts:4

---

### stores

• `Protected` **stores**: `NamedRegistry`

#### Inherited from

BaseEndpoint.stores

#### Defined in

node_modules/lisk-framework/dist-node/modules/base_endpoint.d.ts:3

## Methods

### authorize

▸ **authorize**(`ctx`): `Promise`<[`AuthorizationResult`](../namespaces/did.md#authorizationresult)[]\>

#### Parameters

| Name  | Type                    |
| :---- | :---------------------- |
| `ctx` | `ModuleEndpointContext` |

#### Returns

`Promise`<[`AuthorizationResult`](../namespaces/did.md#authorizationresult)[]\>

#### Implementation of

[DidEndpoint](../interfaces/did.DidEndpoint.md).[authorize](../interfaces/did.DidEndpoint.md#authorize)

#### Defined in

packages/lisk-did-module/dist/endpoint.d.ts:7

---

### getConfig

▸ **getConfig**(`_ctx`): `Promise`<[`DidModuleConfig`](../interfaces/did.DidModuleConfig.md)\>

#### Parameters

| Name   | Type                    |
| :----- | :---------------------- |
| `_ctx` | `ModuleEndpointContext` |

#### Returns

`Promise`<[`DidModuleConfig`](../interfaces/did.DidModuleConfig.md)\>

#### Implementation of

[DidEndpoint](../interfaces/did.DidEndpoint.md).[getConfig](../interfaces/did.DidEndpoint.md#getconfig)

#### Defined in

packages/lisk-did-module/dist/endpoint.d.ts:10

---

### getNonce

▸ **getNonce**(`ctx`): `Promise`<{ `nonce`: `string` }\>

#### Parameters

| Name  | Type                    |
| :---- | :---------------------- |
| `ctx` | `ModuleEndpointContext` |

#### Returns

`Promise`<{ `nonce`: `string` }\>

#### Implementation of

[DidEndpoint](../interfaces/did.DidEndpoint.md).[getNonce](../interfaces/did.DidEndpoint.md#getnonce)

#### Defined in

packages/lisk-did-module/dist/endpoint.d.ts:9

---

### init

▸ **init**(`config`): `void`

#### Parameters

| Name     | Type                                                      |
| :------- | :-------------------------------------------------------- |
| `config` | [`DidModuleConfig`](../interfaces/did.DidModuleConfig.md) |

#### Returns

`void`

#### Implementation of

[DidEndpoint](../interfaces/did.DidEndpoint.md).[init](../interfaces/did.DidEndpoint.md#init)

#### Defined in

packages/lisk-did-module/dist/endpoint.d.ts:6

---

### read

▸ **read**(`ctx`): `Promise`<`undefined` \| [`DidDocument`](../interfaces/did.DidDocument.md)\>

#### Parameters

| Name  | Type                    |
| :---- | :---------------------- |
| `ctx` | `ModuleEndpointContext` |

#### Returns

`Promise`<`undefined` \| [`DidDocument`](../interfaces/did.DidDocument.md)\>

#### Implementation of

[DidEndpoint](../interfaces/did.DidEndpoint.md).[read](../interfaces/did.DidEndpoint.md#read)

#### Defined in

packages/lisk-did-module/dist/endpoint.d.ts:8
