---
id: "DidModule"
title: "Class: DidModule"
sidebar_label: "DidModule"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `BaseModule`

  ↳ **`DidModule`**

## Constructors

### constructor

• **new DidModule**()

#### Overrides

BaseModule.constructor

#### Defined in

packages/klayr-did-module/dist/module.d.ts:20

## Properties

### \_didEndpoint

• `Private` **\_didEndpoint**: `any`

#### Defined in

packages/klayr-did-module/dist/module.d.ts:15

___

### \_didMethod

• `Private` **\_didMethod**: `any`

#### Defined in

packages/klayr-did-module/dist/module.d.ts:16

___

### autoCreateAddressDID

• `Private` **autoCreateAddressDID**: `any`

#### Defined in

packages/klayr-did-module/dist/module.d.ts:14

___

### chainspace

• `Private` **chainspace**: `any`

#### Defined in

packages/klayr-did-module/dist/module.d.ts:13

___

### commands

• **commands**: ([`AddControllersCommand`](AddControllersCommand.md) \| [`AddKeysCommand`](AddKeysCommand.md) \| [`AddServiceEndpointCommand`](AddServiceEndpointCommand.md) \| [`CreateCommand`](CreateCommand.md) \| [`DeactivateCommand`](DeactivateCommand.md) \| [`RemoveControllersCommand`](RemoveControllersCommand.md) \| [`RemoveKeysCommand`](RemoveKeysCommand.md) \| [`RemoveServiceEndpointCommand`](RemoveServiceEndpointCommand.md))[]

#### Overrides

BaseModule.commands

#### Defined in

packages/klayr-did-module/dist/module.d.ts:19

___

### endpoint

• **endpoint**: [`DidEndpoint`](DidEndpoint.md)

#### Overrides

BaseModule.endpoint

#### Defined in

packages/klayr-did-module/dist/module.d.ts:17

___

### events

• **events**: `NamedRegistry`

#### Inherited from

BaseModule.events

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_module.d.ts:41

___

### method

• **method**: [`DidMethod`](DidMethod.md)

#### Overrides

BaseModule.method

#### Defined in

packages/klayr-did-module/dist/module.d.ts:18

___

### offchainStores

• **offchainStores**: `NamedRegistry`

#### Inherited from

BaseModule.offchainStores

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_module.d.ts:43

___

### stores

• **stores**: `NamedRegistry`

#### Inherited from

BaseModule.stores

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_module.d.ts:42

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

BaseModule.name

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_module.d.ts:44

## Methods

### afterCommandExecute

▸ `Optional` **afterCommandExecute**(`context`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `TransactionExecuteContext` |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseModule.afterCommandExecute

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_module.d.ts:52

___

### afterTransactionsExecute

▸ `Optional` **afterTransactionsExecute**(`context`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `BlockAfterExecuteContext` |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseModule.afterTransactionsExecute

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_module.d.ts:56

___

### baseMetadata

▸ `Protected` **baseMetadata**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `assets` | `never`[] |
| `commands` | { `name`: `string` ; `params`: `Schema`  }[] |
| `endpoints` | `never`[] |
| `events` | { `data`: `Schema` ; `name`: `string`  }[] |
| `stores` | { `data`: `Schema` ; `key`: `string`  }[] |

#### Inherited from

BaseModule.baseMetadata

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_module.d.ts:58

___

### beforeCommandExecute

▸ **beforeCommandExecute**(`_context`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_context` | `TransactionExecuteContext` |

#### Returns

`Promise`<`void`\>

#### Overrides

BaseModule.beforeCommandExecute

#### Defined in

packages/klayr-did-module/dist/module.d.ts:23

___

### beforeTransactionsExecute

▸ `Optional` **beforeTransactionsExecute**(`context`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `BlockExecuteContext` |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseModule.beforeTransactionsExecute

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_module.d.ts:55

___

### finalizeGenesisState

▸ `Optional` **finalizeGenesisState**(`context`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `GenesisBlockExecuteContext` |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseModule.finalizeGenesisState

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_module.d.ts:54

___

### init

▸ **init**(`args`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `ModuleInitArgs` |

#### Returns

`Promise`<`void`\>

#### Overrides

BaseModule.init

#### Defined in

packages/klayr-did-module/dist/module.d.ts:22

___

### initGenesisState

▸ `Optional` **initGenesisState**(`context`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `GenesisBlockExecuteContext` |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseModule.initGenesisState

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_module.d.ts:53

___

### insertAssets

▸ `Optional` **insertAssets**(`context`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `InsertAssetContext` |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseModule.insertAssets

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_module.d.ts:48

___

### metadata

▸ **metadata**(): `ModuleMetadata`

#### Returns

`ModuleMetadata`

#### Overrides

BaseModule.metadata

#### Defined in

packages/klayr-did-module/dist/module.d.ts:21

___

### verifyAssets

▸ `Optional` **verifyAssets**(`context`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `BlockVerifyContext` |

#### Returns

`Promise`<`void`\>

#### Inherited from

BaseModule.verifyAssets

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_module.d.ts:49

___

### verifyTransaction

▸ `Optional` **verifyTransaction**(`context`): `Promise`<`VerificationResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `TransactionVerifyContext` |

#### Returns

`Promise`<`VerificationResult`\>

#### Inherited from

BaseModule.verifyTransaction

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_module.d.ts:50
