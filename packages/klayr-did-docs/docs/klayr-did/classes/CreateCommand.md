---
id: "CreateCommand"
title: "Class: CreateCommand"
sidebar_label: "CreateCommand"
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

packages/klayr-did-module/dist/commands/create_command.d.ts:43

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
| `properties` | { `controllers`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  } ; `did`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `keys`: { `fieldNumber`: `number` ; `items`: { `properties`: { `publicKey`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `relationship`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `type`: `string`  }  } |
| `properties.controllers` | { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  } |
| `properties.controllers.fieldNumber` | `number` |
| `properties.controllers.items` | { `dataType`: `string`  } |
| `properties.controllers.items.dataType` | `string` |
| `properties.controllers.type` | `string` |
| `properties.did` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.did.dataType` | `string` |
| `properties.did.fieldNumber` | `number` |
| `properties.keys` | { `fieldNumber`: `number` ; `items`: { `properties`: { `publicKey`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `relationship`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `type`: `string`  } |
| `properties.keys.fieldNumber` | `number` |
| `properties.keys.items` | { `properties`: { `publicKey`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `relationship`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  }  } ; `required`: `string`[] ; `type`: `string`  } |
| `properties.keys.items.properties` | { `publicKey`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `relationship`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  }  } |
| `properties.keys.items.properties.publicKey` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.keys.items.properties.publicKey.dataType` | `string` |
| `properties.keys.items.properties.publicKey.fieldNumber` | `number` |
| `properties.keys.items.properties.relationship` | { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  } |
| `properties.keys.items.properties.relationship.fieldNumber` | `number` |
| `properties.keys.items.properties.relationship.items` | { `dataType`: `string`  } |
| `properties.keys.items.properties.relationship.items.dataType` | `string` |
| `properties.keys.items.properties.relationship.type` | `string` |
| `properties.keys.items.required` | `string`[] |
| `properties.keys.items.type` | `string` |
| `properties.keys.type` | `string` |
| `required` | `string`[] |
| `type` | `string` |

#### Overrides

BaseCommand.schema

#### Defined in

packages/klayr-did-module/dist/commands/create_command.d.ts:4

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
| `_context` | `CommandExecuteContext`<[`CreateParam`](../interfaces/did.CreateParam.md)\> |

#### Returns

`Promise`<`void`\>

#### Overrides

BaseCommand.execute

#### Defined in

packages/klayr-did-module/dist/commands/create_command.d.ts:46

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

packages/klayr-did-module/dist/commands/create_command.d.ts:44

___

### verify

▸ **verify**(`_context`): `Promise`<`VerificationResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_context` | `CommandVerifyContext`<[`CreateParam`](../interfaces/did.CreateParam.md)\> |

#### Returns

`Promise`<`VerificationResult`\>

#### Overrides

BaseCommand.verify

#### Defined in

packages/klayr-did-module/dist/commands/create_command.d.ts:45
