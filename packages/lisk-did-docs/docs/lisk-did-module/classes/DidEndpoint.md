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

- `DidEndpoint`

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

• `Private` **autoCreateAddressDID**: `boolean` = `false`

#### Defined in

[packages/lisk-did-module/src/endpoint.ts:16](https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-did-module/src/endpoint.ts#L16)

---

### chainspace

• `Private` **chainspace**: `string` = `''`

#### Defined in

[packages/lisk-did-module/src/endpoint.ts:15](https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-did-module/src/endpoint.ts#L15)

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

▸ **authorize**(`ctx`): `Promise`<`AuthorizationResult`[]\>

#### Parameters

| Name  | Type                    |
| :---- | :---------------------- |
| `ctx` | `ModuleEndpointContext` |

#### Returns

`Promise`<`AuthorizationResult`[]\>

#### Implementation of

DidEndpointInterface.authorize

#### Defined in

[packages/lisk-did-module/src/endpoint.ts:23](https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-did-module/src/endpoint.ts#L23)

---

### getConfig

▸ **getConfig**(`_ctx`): `Promise`<`DidModuleConfig`\>

#### Parameters

| Name   | Type                    |
| :----- | :---------------------- |
| `_ctx` | `ModuleEndpointContext` |

#### Returns

`Promise`<`DidModuleConfig`\>

#### Implementation of

DidEndpointInterface.getConfig

#### Defined in

[packages/lisk-did-module/src/endpoint.ts:50](https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-did-module/src/endpoint.ts#L50)

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

DidEndpointInterface.getNonce

#### Defined in

[packages/lisk-did-module/src/endpoint.ts:40](https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-did-module/src/endpoint.ts#L40)

---

### init

▸ **init**(`config`): `void`

#### Parameters

| Name     | Type              |
| :------- | :---------------- |
| `config` | `DidModuleConfig` |

#### Returns

`void`

#### Implementation of

DidEndpointInterface.init

#### Defined in

[packages/lisk-did-module/src/endpoint.ts:18](https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-did-module/src/endpoint.ts#L18)

---

### read

▸ **read**(`ctx`): `Promise`<`undefined` \| `DidDocument`\>

#### Parameters

| Name  | Type                    |
| :---- | :---------------------- |
| `ctx` | `ModuleEndpointContext` |

#### Returns

`Promise`<`undefined` \| `DidDocument`\>

#### Implementation of

DidEndpointInterface.read

#### Defined in

[packages/lisk-did-module/src/endpoint.ts:31](https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-did-module/src/endpoint.ts#L31)