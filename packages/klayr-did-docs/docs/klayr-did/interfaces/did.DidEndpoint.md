---
id: 'did.DidEndpoint'
title: 'Interface: DidEndpoint'
sidebar_label: 'did.DidEndpoint'
custom_edit_url: null
---

[did](../namespaces/did.md).DidEndpoint

## Implemented by

- [`DidEndpoint`](../classes/DidEndpoint.md)

## Methods

### authorize

▸ **authorize**(`context`): `Promise`<[`AuthorizationResult`](../namespaces/did.md#authorizationresult)[]\>

#### Parameters

| Name      | Type                    |
| :-------- | :---------------------- |
| `context` | `ModuleEndpointContext` |

#### Returns

`Promise`<[`AuthorizationResult`](../namespaces/did.md#authorizationresult)[]\>

#### Defined in

packages/klayr-decentralized-identifier/dist/types/endpoint.d.ts:10

---

### getConfig

▸ **getConfig**(`context`): `Promise`<[`DidModuleConfig`](did.DidModuleConfig.md)\>

#### Parameters

| Name      | Type                    |
| :-------- | :---------------------- |
| `context` | `ModuleEndpointContext` |

#### Returns

`Promise`<[`DidModuleConfig`](did.DidModuleConfig.md)\>

#### Defined in

packages/klayr-decentralized-identifier/dist/types/endpoint.d.ts:7

---

### getNonce

▸ **getNonce**(`context`): `Promise`<{ `nonce`: `string` }\>

#### Parameters

| Name      | Type                    |
| :-------- | :---------------------- |
| `context` | `ModuleEndpointContext` |

#### Returns

`Promise`<{ `nonce`: `string` }\>

#### Defined in

packages/klayr-decentralized-identifier/dist/types/endpoint.d.ts:9

---

### init

▸ **init**(`config`): `void`

#### Parameters

| Name     | Type                                        |
| :------- | :------------------------------------------ |
| `config` | [`DidModuleConfig`](did.DidModuleConfig.md) |

#### Returns

`void`

#### Defined in

packages/klayr-decentralized-identifier/dist/types/endpoint.d.ts:6

---

### read

▸ **read**(`context`): `Promise`<`undefined` \| [`DidDocument`](did.DidDocument.md)\>

#### Parameters

| Name      | Type                    |
| :-------- | :---------------------- |
| `context` | `ModuleEndpointContext` |

#### Returns

`Promise`<`undefined` \| [`DidDocument`](did.DidDocument.md)\>

#### Defined in

packages/klayr-decentralized-identifier/dist/types/endpoint.d.ts:8
