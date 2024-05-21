---
id: "AddControllersCommand"
title: "Class: AddControllersCommand"
sidebar_label: "AddControllersCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `BaseCommand`

  ↳ **`AddControllersCommand`**

## Constructors

### constructor

• **new AddControllersCommand**(`stores`, `events`)

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

• **config**: `DidModuleConfig`

#### Defined in

[packages/klayr-did-module/src/commands/add_controllers_command.ts:13](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/commands/add_controllers_command.ts#L13)

___

### events

• `Protected` **events**: `NamedRegistry`

#### Inherited from

BaseCommand.events

#### Defined in

node_modules/klayr-framework/dist-node/modules/base_command.d.ts:6

___

### schema

• **schema**: `Object` = `utils.schema.addControllersCommandSchema`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `controllers`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  } ; `signature`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `signer`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `target`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } |
| `properties.controllers` | { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  } |
| `properties.controllers.fieldNumber` | `number` |
| `properties.controllers.items` | { `dataType`: `string`  } |
| `properties.controllers.items.dataType` | `string` |
| `properties.controllers.type` | `string` |
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

[packages/klayr-did-module/src/commands/add_controllers_command.ts:12](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/commands/add_controllers_command.ts#L12)

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
| `_context` | `CommandExecuteContext`<`AddControllersParam`\> |

#### Returns

`Promise`<`void`\>

#### Overrides

BaseCommand.execute

#### Defined in

[packages/klayr-did-module/src/commands/add_controllers_command.ts:26](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/commands/add_controllers_command.ts#L26)

___

### init

▸ **init**(`_moduleConfig`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_moduleConfig` | `DidModuleConfig` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/klayr-did-module/src/commands/add_controllers_command.ts:16](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/commands/add_controllers_command.ts#L16)

___

### verify

▸ **verify**(`_context`): `Promise`<`VerificationResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_context` | `CommandVerifyContext`<`AddControllersParam`\> |

#### Returns

`Promise`<`VerificationResult`\>

#### Overrides

BaseCommand.verify

#### Defined in

[packages/klayr-did-module/src/commands/add_controllers_command.ts:22](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-did-module/src/commands/add_controllers_command.ts#L22)
