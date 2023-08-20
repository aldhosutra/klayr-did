---
id: 'DeactivateCommand'
title: 'Class: DeactivateCommand'
sidebar_label: 'DeactivateCommand'
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `BaseCommand`

  ↳ **`DeactivateCommand`**

## Constructors

### constructor

• **new DeactivateCommand**(`stores`, `events`)

#### Parameters

| Name     | Type            |
| :------- | :-------------- |
| `stores` | `NamedRegistry` |
| `events` | `NamedRegistry` |

#### Inherited from

BaseCommand.constructor

#### Defined in

node_modules/lisk-framework/dist-node/modules/base_command.d.ts:9

## Properties

### config

• **config**: [`DidModuleConfig`](../interfaces/did.DidModuleConfig.md)

#### Defined in

packages/lisk-did-module/dist/commands/deactivate_command.d.ts:23

---

### events

• `Protected` **events**: `NamedRegistry`

#### Inherited from

BaseCommand.events

#### Defined in

node_modules/lisk-framework/dist-node/modules/base_command.d.ts:6

---

### schema

• **schema**: `Object`

#### Type declaration

| Name                               | Type                                                                                                                                                                                              |
| :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `$id`                              | `string`                                                                                                                                                                                          |
| `properties`                       | { `signature`: { `dataType`: `string` ; `fieldNumber`: `number` } ; `signer`: { `dataType`: `string` ; `fieldNumber`: `number` } ; `target`: { `dataType`: `string` ; `fieldNumber`: `number` } } |
| `properties.signature`             | { `dataType`: `string` ; `fieldNumber`: `number` }                                                                                                                                                |
| `properties.signature.dataType`    | `string`                                                                                                                                                                                          |
| `properties.signature.fieldNumber` | `number`                                                                                                                                                                                          |
| `properties.signer`                | { `dataType`: `string` ; `fieldNumber`: `number` }                                                                                                                                                |
| `properties.signer.dataType`       | `string`                                                                                                                                                                                          |
| `properties.signer.fieldNumber`    | `number`                                                                                                                                                                                          |
| `properties.target`                | { `dataType`: `string` ; `fieldNumber`: `number` }                                                                                                                                                |
| `properties.target.dataType`       | `string`                                                                                                                                                                                          |
| `properties.target.fieldNumber`    | `number`                                                                                                                                                                                          |
| `required`                         | `string`[]                                                                                                                                                                                        |
| `type`                             | `string`                                                                                                                                                                                          |

#### Overrides

BaseCommand.schema

#### Defined in

packages/lisk-did-module/dist/commands/deactivate_command.d.ts:4

---

### stores

• `Protected` **stores**: `NamedRegistry`

#### Inherited from

BaseCommand.stores

#### Defined in

node_modules/lisk-framework/dist-node/modules/base_command.d.ts:5

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

BaseCommand.name

#### Defined in

node_modules/lisk-framework/dist-node/modules/base_command.d.ts:8

## Methods

### execute

▸ **execute**(`_context`): `Promise`<`void`\>

#### Parameters

| Name       | Type                                                                                |
| :--------- | :---------------------------------------------------------------------------------- |
| `_context` | `CommandExecuteContext`<[`DeactivateParam`](../interfaces/did.DeactivateParam.md)\> |

#### Returns

`Promise`<`void`\>

#### Overrides

BaseCommand.execute

#### Defined in

packages/lisk-did-module/dist/commands/deactivate_command.d.ts:26

---

### init

▸ **init**(`_moduleConfig`): `Promise`<`void`\>

#### Parameters

| Name            | Type                                                      |
| :-------------- | :-------------------------------------------------------- |
| `_moduleConfig` | [`DidModuleConfig`](../interfaces/did.DidModuleConfig.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/lisk-did-module/dist/commands/deactivate_command.d.ts:24

---

### verify

▸ **verify**(`_context`): `Promise`<`VerificationResult`\>

#### Parameters

| Name       | Type                                                                               |
| :--------- | :--------------------------------------------------------------------------------- |
| `_context` | `CommandVerifyContext`<[`DeactivateParam`](../interfaces/did.DeactivateParam.md)\> |

#### Returns

`Promise`<`VerificationResult`\>

#### Overrides

BaseCommand.verify

#### Defined in

packages/lisk-did-module/dist/commands/deactivate_command.d.ts:25
