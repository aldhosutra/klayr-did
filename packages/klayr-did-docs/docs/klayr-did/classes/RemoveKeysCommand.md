---
id: "RemoveKeysCommand"
title: "Class: RemoveKeysCommand"
sidebar_label: "RemoveKeysCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `BaseCommand`

  ↳ **`RemoveKeysCommand`**

## Constructors

### constructor

• **new RemoveKeysCommand**(`stores`, `events`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stores` | `NamedRegistry` |
| `events` | `NamedRegistry` |

#### Inherited from

BaseCommand.constructor

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_command.d.ts:9

## Properties

### config

• **config**: [`DidModuleConfig`](../interfaces/did.DidModuleConfig.md)

#### Defined in

packages/klayr-did-module/dist/commands/remove_keys_command.d.ts:30

___

### events

• `Protected` **events**: `NamedRegistry`

#### Inherited from

BaseCommand.events

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_command.d.ts:6

___

### schema

• **schema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `publicKeys`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  } ; `signature`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `signer`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `target`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } |
| `properties.publicKeys` | { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  } |
| `properties.publicKeys.fieldNumber` | `number` |
| `properties.publicKeys.items` | { `dataType`: `string`  } |
| `properties.publicKeys.items.dataType` | `string` |
| `properties.publicKeys.type` | `string` |
| `properties.signature` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.signature.dataType` | `string` |
| `properties.signature.fieldNumber` | `number` |
| `properties.signer` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.signer.dataType` | `string` |
| `properties.signer.fieldNumber` | `number` |
| `properties.target` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.target.dataType` | `string` |
| `properties.target.fieldNumber` | `number` |
| `required` | `string`[] |
| `type` | `string` |

#### Overrides

BaseCommand.schema

#### Defined in

packages/klayr-did-module/dist/commands/remove_keys_command.d.ts:4

___

### stores

• `Protected` **stores**: `NamedRegistry`

#### Inherited from

BaseCommand.stores

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_command.d.ts:5

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

BaseCommand.name

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_command.d.ts:8

## Methods

### execute

▸ **execute**(`_context`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_context` | `CommandExecuteContext`<[`RemoveKeysParam`](../interfaces/did.RemoveKeysParam.md)\> |

#### Returns

`Promise`<`void`\>

#### Overrides

BaseCommand.execute

#### Defined in

packages/klayr-did-module/dist/commands/remove_keys_command.d.ts:33

___

### init

▸ **init**(`_moduleConfig`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_moduleConfig` | [`DidModuleConfig`](../interfaces/did.DidModuleConfig.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/klayr-did-module/dist/commands/remove_keys_command.d.ts:31

___

### verify

▸ **verify**(`_context`): `Promise`<`VerificationResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_context` | `CommandVerifyContext`<[`RemoveKeysParam`](../interfaces/did.RemoveKeysParam.md)\> |

#### Returns

`Promise`<`VerificationResult`\>

#### Overrides

BaseCommand.verify

#### Defined in

packages/klayr-did-module/dist/commands/remove_keys_command.d.ts:32
