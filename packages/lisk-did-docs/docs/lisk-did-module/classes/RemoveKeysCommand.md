---
id: 'RemoveKeysCommand'
title: 'Class: RemoveKeysCommand'
sidebar_label: 'RemoveKeysCommand'
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

[packages/lisk-did-module/src/commands/remove_keys_command.ts:13](https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-did-module/src/commands/remove_keys_command.ts#L13)

---

### events

• `Protected` **events**: `NamedRegistry`

#### Inherited from

BaseCommand.events

#### Defined in

node_modules/lisk-framework/dist-node/modules/base_command.d.ts:6

---

### schema

• **schema**: `Object` = `utils.schema.removeKeysCommandSchema`

#### Type declaration

| Name                                   | Type                                                                                                                                                                                                                                                                                                 |
| :------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$id`                                  | `string`                                                                                                                                                                                                                                                                                             |
| `properties`                           | { `publicKeys`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string` } ; `type`: `string` } ; `signature`: { `dataType`: `string` ; `fieldNumber`: `number` } ; `signer`: { `dataType`: `string` ; `fieldNumber`: `number` } ; `target`: { `dataType`: `string` ; `fieldNumber`: `number` } } |
| `properties.publicKeys`                | { `fieldNumber`: `number` ; `items`: { `dataType`: `string` } ; `type`: `string` }                                                                                                                                                                                                                   |
| `properties.publicKeys.fieldNumber`    | `number`                                                                                                                                                                                                                                                                                             |
| `properties.publicKeys.items`          | { `dataType`: `string` }                                                                                                                                                                                                                                                                             |
| `properties.publicKeys.items.dataType` | `string`                                                                                                                                                                                                                                                                                             |
| `properties.publicKeys.type`           | `string`                                                                                                                                                                                                                                                                                             |
| `properties.signature`                 | { `dataType`: `string` ; `fieldNumber`: `number` }                                                                                                                                                                                                                                                   |
| `properties.signature.dataType`        | `string`                                                                                                                                                                                                                                                                                             |
| `properties.signature.fieldNumber`     | `number`                                                                                                                                                                                                                                                                                             |
| `properties.signer`                    | { `dataType`: `string` ; `fieldNumber`: `number` }                                                                                                                                                                                                                                                   |
| `properties.signer.dataType`           | `string`                                                                                                                                                                                                                                                                                             |
| `properties.signer.fieldNumber`        | `number`                                                                                                                                                                                                                                                                                             |
| `properties.target`                    | { `dataType`: `string` ; `fieldNumber`: `number` }                                                                                                                                                                                                                                                   |
| `properties.target.dataType`           | `string`                                                                                                                                                                                                                                                                                             |
| `properties.target.fieldNumber`        | `number`                                                                                                                                                                                                                                                                                             |
| `required`                             | `string`[]                                                                                                                                                                                                                                                                                           |
| `type`                                 | `string`                                                                                                                                                                                                                                                                                             |

#### Overrides

BaseCommand.schema

#### Defined in

[packages/lisk-did-module/src/commands/remove_keys_command.ts:12](https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-did-module/src/commands/remove_keys_command.ts#L12)

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

| Name       | Type                                        |
| :--------- | :------------------------------------------ |
| `_context` | `CommandExecuteContext`<`RemoveKeysParam`\> |

#### Returns

`Promise`<`void`\>

#### Overrides

BaseCommand.execute

#### Defined in

[packages/lisk-did-module/src/commands/remove_keys_command.ts:26](https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-did-module/src/commands/remove_keys_command.ts#L26)

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

[packages/lisk-did-module/src/commands/remove_keys_command.ts:16](https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-did-module/src/commands/remove_keys_command.ts#L16)

---

### verify

▸ **verify**(`_context`): `Promise`<`VerificationResult`\>

#### Parameters

| Name       | Type                                       |
| :--------- | :----------------------------------------- |
| `_context` | `CommandVerifyContext`<`RemoveKeysParam`\> |

#### Returns

`Promise`<`VerificationResult`\>

#### Overrides

BaseCommand.verify

#### Defined in

[packages/lisk-did-module/src/commands/remove_keys_command.ts:22](https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-did-module/src/commands/remove_keys_command.ts#L22)
