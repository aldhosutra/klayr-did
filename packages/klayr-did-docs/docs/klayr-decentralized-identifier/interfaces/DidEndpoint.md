---
id: "DidEndpoint"
title: "Interface: DidEndpoint"
sidebar_label: "DidEndpoint"
sidebar_position: 0
custom_edit_url: null
---

## Methods

### authorize

▸ **authorize**(`context`): `Promise`<[`AuthorizationResult`](../modules.md#authorizationresult)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `ModuleEndpointContext` |

#### Returns

`Promise`<[`AuthorizationResult`](../modules.md#authorizationresult)[]\>

#### Defined in

[packages/klayr-decentralized-identifier/src/types/endpoint.ts:11](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-decentralized-identifier/src/types/endpoint.ts#L11)

___

### getConfig

▸ **getConfig**(`context`): `Promise`<[`DidModuleConfig`](DidModuleConfig.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `ModuleEndpointContext` |

#### Returns

`Promise`<[`DidModuleConfig`](DidModuleConfig.md)\>

#### Defined in

[packages/klayr-decentralized-identifier/src/types/endpoint.ts:8](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-decentralized-identifier/src/types/endpoint.ts#L8)

___

### getNonce

▸ **getNonce**(`context`): `Promise`<{ `nonce`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `ModuleEndpointContext` |

#### Returns

`Promise`<{ `nonce`: `string`  }\>

#### Defined in

[packages/klayr-decentralized-identifier/src/types/endpoint.ts:10](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-decentralized-identifier/src/types/endpoint.ts#L10)

___

### init

▸ **init**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`DidModuleConfig`](DidModuleConfig.md) |

#### Returns

`void`

#### Defined in

[packages/klayr-decentralized-identifier/src/types/endpoint.ts:7](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-decentralized-identifier/src/types/endpoint.ts#L7)

___

### read

▸ **read**(`context`): `Promise`<`undefined` \| [`DidDocument`](DidDocument.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `ModuleEndpointContext` |

#### Returns

`Promise`<`undefined` \| [`DidDocument`](DidDocument.md)\>

#### Defined in

[packages/klayr-decentralized-identifier/src/types/endpoint.ts:9](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-decentralized-identifier/src/types/endpoint.ts#L9)
