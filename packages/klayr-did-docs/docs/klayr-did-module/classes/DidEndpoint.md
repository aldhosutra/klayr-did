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

node_modules/klayr-framework/dist-node/modules/base_endpoint.d.ts:6

## Properties

### autoCreateAddressDID

• `Private` **autoCreateAddressDID**: `boolean` = `false`

#### Defined in

[packages/klayr-did-module/src/endpoint.ts:17](https://github.com/aldhosutra/klayr-did/blob/8db4b95/packages/klayr-did-module/src/endpoint.ts#L17)

---

### chainspace

• `Private` **chainspace**: `string` = `''`

#### Defined in

[packages/klayr-did-module/src/endpoint.ts:16](https://github.com/aldhosutra/klayr-did/blob/8db4b95/packages/klayr-did-module/src/endpoint.ts#L16)

---

### offchainStores

• `Protected` **offchainStores**: `NamedRegistry`

#### Inherited from

BaseEndpoint.offchainStores

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_endpoint.d.ts:4

---

### stores

• `Protected` **stores**: `NamedRegistry`

#### Inherited from

BaseEndpoint.stores

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_endpoint.d.ts:3

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

[packages/klayr-did-module/src/endpoint.ts:24](https://github.com/aldhosutra/klayr-did/blob/8db4b95/packages/klayr-did-module/src/endpoint.ts#L24)

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

[packages/klayr-did-module/src/endpoint.ts:90](https://github.com/aldhosutra/klayr-did/blob/8db4b95/packages/klayr-did-module/src/endpoint.ts#L90)

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

[packages/klayr-did-module/src/endpoint.ts:80](https://github.com/aldhosutra/klayr-did/blob/8db4b95/packages/klayr-did-module/src/endpoint.ts#L80)

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

[packages/klayr-did-module/src/endpoint.ts:19](https://github.com/aldhosutra/klayr-did/blob/8db4b95/packages/klayr-did-module/src/endpoint.ts#L19)

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

[packages/klayr-did-module/src/endpoint.ts:71](https://github.com/aldhosutra/klayr-did/blob/8db4b95/packages/klayr-did-module/src/endpoint.ts#L71)
