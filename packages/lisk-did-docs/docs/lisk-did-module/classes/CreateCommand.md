---
id: 'CreateCommand'
title: 'Class: CreateCommand'
sidebar_label: 'CreateCommand'
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `BaseCommand`

  ↳ **`CreateCommand`**

## Constructors

### constructor

• **new CreateCommand**(`stores`, `events`)

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

• **config**: `DidModuleConfig`

#### Defined in

[packages/lisk-did-module/src/commands/create_command.ts:17](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-did-module/src/commands/create_command.ts#L17)

---

### events

• `Protected` **events**: `NamedRegistry`

#### Inherited from

BaseCommand.events

#### Defined in

node_modules/lisk-framework/dist-node/modules/base_command.d.ts:6

---

### schema

• **schema**: `Object` = `utils.schema.createCommandSchema`

#### Type declaration

| Name                                                           | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$id`                                                          | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `properties`                                                   | { `controllers`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string` } ; `type`: `string` } ; `did`: { `dataType`: `string` ; `fieldNumber`: `number` } ; `keys`: { `fieldNumber`: `number` ; `items`: { `properties`: { `publicKey`: { `dataType`: `string` ; `fieldNumber`: `number` } ; `relationship`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string` } ; `type`: `string` } } ; `required`: `string`[] ; `type`: `string` } ; `type`: `string` } } |
| `properties.controllers`                                       | { `fieldNumber`: `number` ; `items`: { `dataType`: `string` } ; `type`: `string` }                                                                                                                                                                                                                                                                                                                                                                                           |
| `properties.controllers.fieldNumber`                           | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `properties.controllers.items`                                 | { `dataType`: `string` }                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `properties.controllers.items.dataType`                        | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `properties.controllers.type`                                  | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `properties.did`                                               | { `dataType`: `string` ; `fieldNumber`: `number` }                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `properties.did.dataType`                                      | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `properties.did.fieldNumber`                                   | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `properties.keys`                                              | { `fieldNumber`: `number` ; `items`: { `properties`: { `publicKey`: { `dataType`: `string` ; `fieldNumber`: `number` } ; `relationship`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string` } ; `type`: `string` } } ; `required`: `string`[] ; `type`: `string` } ; `type`: `string` }                                                                                                                                                                             |
| `properties.keys.fieldNumber`                                  | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `properties.keys.items`                                        | { `properties`: { `publicKey`: { `dataType`: `string` ; `fieldNumber`: `number` } ; `relationship`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string` } ; `type`: `string` } } ; `required`: `string`[] ; `type`: `string` }                                                                                                                                                                                                                                       |
| `properties.keys.items.properties`                             | { `publicKey`: { `dataType`: `string` ; `fieldNumber`: `number` } ; `relationship`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string` } ; `type`: `string` } }                                                                                                                                                                                                                                                                                                     |
| `properties.keys.items.properties.publicKey`                   | { `dataType`: `string` ; `fieldNumber`: `number` }                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `properties.keys.items.properties.publicKey.dataType`          | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `properties.keys.items.properties.publicKey.fieldNumber`       | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `properties.keys.items.properties.relationship`                | { `fieldNumber`: `number` ; `items`: { `dataType`: `string` } ; `type`: `string` }                                                                                                                                                                                                                                                                                                                                                                                           |
| `properties.keys.items.properties.relationship.fieldNumber`    | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `properties.keys.items.properties.relationship.items`          | { `dataType`: `string` }                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `properties.keys.items.properties.relationship.items.dataType` | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `properties.keys.items.properties.relationship.type`           | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `properties.keys.items.required`                               | `string`[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `properties.keys.items.type`                                   | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `properties.keys.type`                                         | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `required`                                                     | `string`[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `type`                                                         | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

#### Overrides

BaseCommand.schema

#### Defined in

[packages/lisk-did-module/src/commands/create_command.ts:16](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-did-module/src/commands/create_command.ts#L16)

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

| Name       | Type                                    |
| :--------- | :-------------------------------------- |
| `_context` | `CommandExecuteContext`<`CreateParam`\> |

#### Returns

`Promise`<`void`\>

#### Overrides

BaseCommand.execute

#### Defined in

[packages/lisk-did-module/src/commands/create_command.ts:38](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-did-module/src/commands/create_command.ts#L38)

---

### init

▸ **init**(`_moduleConfig`): `Promise`<`void`\>

#### Parameters

| Name            | Type              |
| :-------------- | :---------------- |
| `_moduleConfig` | `DidModuleConfig` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/lisk-did-module/src/commands/create_command.ts:20](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-did-module/src/commands/create_command.ts#L20)

---

### verify

▸ **verify**(`_context`): `Promise`<`VerificationResult`\>

#### Parameters

| Name       | Type                                   |
| :--------- | :------------------------------------- |
| `_context` | `CommandVerifyContext`<`CreateParam`\> |

#### Returns

`Promise`<`VerificationResult`\>

#### Overrides

BaseCommand.verify

#### Defined in

[packages/lisk-did-module/src/commands/create_command.ts:26](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-did-module/src/commands/create_command.ts#L26)
