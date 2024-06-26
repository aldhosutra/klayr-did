---
id: "utils.schema"
title: "Namespace: schema"
sidebar_label: "utils.schema"
custom_edit_url: null
---

[utils](utils.md).schema

## Variables

### addControllersCommandSchema

• `Const` **addControllersCommandSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `controllers`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } ; `signature`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } ; `signer`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `target`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } |
| `properties.controllers` | { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } |
| `properties.controllers.fieldNumber` | `number` |
| `properties.controllers.items` | { `dataType`: `string` = 'string' } |
| `properties.controllers.items.dataType` | `string` |
| `properties.controllers.type` | `string` |
| `properties.signature` | { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } |
| `properties.signature.dataType` | `string` |
| `properties.signature.fieldNumber` | `number` |
| `properties.signer` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } |
| `properties.signer.dataType` | `string` |
| `properties.signer.fieldNumber` | `number` |
| `properties.target` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.target.dataType` | `string` |
| `properties.target.fieldNumber` | `number` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/schema/commands/add_controllers_command.ts:1](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/utils/schema/commands/add_controllers_command.ts#L1)

___

### addControllersEventSchema

• `Const` **addControllersEventSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `controllers`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } ; `signature`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } ; `signer`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `target`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } |
| `properties.controllers` | { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } |
| `properties.controllers.fieldNumber` | `number` |
| `properties.controllers.items` | { `dataType`: `string` = 'string' } |
| `properties.controllers.items.dataType` | `string` |
| `properties.controllers.type` | `string` |
| `properties.signature` | { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } |
| `properties.signature.dataType` | `string` |
| `properties.signature.fieldNumber` | `number` |
| `properties.signer` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } |
| `properties.signer.dataType` | `string` |
| `properties.signer.fieldNumber` | `number` |
| `properties.target` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.target.dataType` | `string` |
| `properties.target.fieldNumber` | `number` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/schema/events/add_controllers_event.ts:1](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/utils/schema/events/add_controllers_event.ts#L1)

___

### addKeysCommandSchema

• `Const` **addKeysCommandSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `keys`: { `fieldNumber`: `number` = 2; `items`: { `properties`: { `publicKey`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } ; `relationship`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `type`: `string` = 'array' } ; `signature`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } ; `signer`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `target`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } |
| `properties.keys` | { `fieldNumber`: `number` = 2; `items`: { `properties`: { `publicKey`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } ; `relationship`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `type`: `string` = 'array' } |
| `properties.keys.fieldNumber` | `number` |
| `properties.keys.items` | { `properties`: { `publicKey`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } ; `relationship`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' }  } ; `required`: `string`[] ; `type`: `string` = 'object' } |
| `properties.keys.items.properties` | { `publicKey`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } ; `relationship`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' }  } |
| `properties.keys.items.properties.publicKey` | { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } |
| `properties.keys.items.properties.publicKey.dataType` | `string` |
| `properties.keys.items.properties.publicKey.fieldNumber` | `number` |
| `properties.keys.items.properties.relationship` | { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } |
| `properties.keys.items.properties.relationship.fieldNumber` | `number` |
| `properties.keys.items.properties.relationship.items` | { `dataType`: `string` = 'string' } |
| `properties.keys.items.properties.relationship.items.dataType` | `string` |
| `properties.keys.items.properties.relationship.type` | `string` |
| `properties.keys.items.required` | `string`[] |
| `properties.keys.items.type` | `string` |
| `properties.keys.type` | `string` |
| `properties.signature` | { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } |
| `properties.signature.dataType` | `string` |
| `properties.signature.fieldNumber` | `number` |
| `properties.signer` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } |
| `properties.signer.dataType` | `string` |
| `properties.signer.fieldNumber` | `number` |
| `properties.target` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.target.dataType` | `string` |
| `properties.target.fieldNumber` | `number` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/schema/commands/add_keys_command.ts:1](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/utils/schema/commands/add_keys_command.ts#L1)

___

### addKeysEventSchema

• `Const` **addKeysEventSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `keys`: { `fieldNumber`: `number` = 2; `items`: { `properties`: { `publicKey`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } ; `relationship`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `type`: `string` = 'array' } ; `signature`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } ; `signer`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `target`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } |
| `properties.keys` | { `fieldNumber`: `number` = 2; `items`: { `properties`: { `publicKey`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } ; `relationship`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `type`: `string` = 'array' } |
| `properties.keys.fieldNumber` | `number` |
| `properties.keys.items` | { `properties`: { `publicKey`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } ; `relationship`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' }  } ; `required`: `string`[] ; `type`: `string` = 'object' } |
| `properties.keys.items.properties` | { `publicKey`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } ; `relationship`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' }  } |
| `properties.keys.items.properties.publicKey` | { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } |
| `properties.keys.items.properties.publicKey.dataType` | `string` |
| `properties.keys.items.properties.publicKey.fieldNumber` | `number` |
| `properties.keys.items.properties.relationship` | { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } |
| `properties.keys.items.properties.relationship.fieldNumber` | `number` |
| `properties.keys.items.properties.relationship.items` | { `dataType`: `string` = 'string' } |
| `properties.keys.items.properties.relationship.items.dataType` | `string` |
| `properties.keys.items.properties.relationship.type` | `string` |
| `properties.keys.items.required` | `string`[] |
| `properties.keys.items.type` | `string` |
| `properties.keys.type` | `string` |
| `properties.signature` | { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } |
| `properties.signature.dataType` | `string` |
| `properties.signature.fieldNumber` | `number` |
| `properties.signer` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } |
| `properties.signer.dataType` | `string` |
| `properties.signer.fieldNumber` | `number` |
| `properties.target` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.target.dataType` | `string` |
| `properties.target.fieldNumber` | `number` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/schema/events/add_keys_event.ts:1](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/utils/schema/events/add_keys_event.ts#L1)

___

### addServiceEndpointCommandSchema

• `Const` **addServiceEndpointCommandSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `endpoint`: { `fieldNumber`: `number` = 2; `properties`: { `id`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `serviceEndpoint`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `type`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `signature`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } ; `signer`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `target`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } |
| `properties.endpoint` | { `fieldNumber`: `number` = 2; `properties`: { `id`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `serviceEndpoint`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `type`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } |
| `properties.endpoint.fieldNumber` | `number` |
| `properties.endpoint.properties` | { `id`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `serviceEndpoint`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `type`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 }  } |
| `properties.endpoint.properties.id` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.endpoint.properties.id.dataType` | `string` |
| `properties.endpoint.properties.id.fieldNumber` | `number` |
| `properties.endpoint.properties.serviceEndpoint` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } |
| `properties.endpoint.properties.serviceEndpoint.dataType` | `string` |
| `properties.endpoint.properties.serviceEndpoint.fieldNumber` | `number` |
| `properties.endpoint.properties.type` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } |
| `properties.endpoint.properties.type.dataType` | `string` |
| `properties.endpoint.properties.type.fieldNumber` | `number` |
| `properties.endpoint.required` | `string`[] |
| `properties.endpoint.type` | `string` |
| `properties.signature` | { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } |
| `properties.signature.dataType` | `string` |
| `properties.signature.fieldNumber` | `number` |
| `properties.signer` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } |
| `properties.signer.dataType` | `string` |
| `properties.signer.fieldNumber` | `number` |
| `properties.target` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.target.dataType` | `string` |
| `properties.target.fieldNumber` | `number` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/schema/commands/add_service_endpoint_command.ts:1](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/utils/schema/commands/add_service_endpoint_command.ts#L1)

___

### addServiceEndpointEventSchema

• `Const` **addServiceEndpointEventSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `endpoint`: { `fieldNumber`: `number` = 2; `properties`: { `id`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `serviceEndpoint`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `type`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `signature`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } ; `signer`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `target`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } |
| `properties.endpoint` | { `fieldNumber`: `number` = 2; `properties`: { `id`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `serviceEndpoint`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `type`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } |
| `properties.endpoint.fieldNumber` | `number` |
| `properties.endpoint.properties` | { `id`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `serviceEndpoint`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `type`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 }  } |
| `properties.endpoint.properties.id` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.endpoint.properties.id.dataType` | `string` |
| `properties.endpoint.properties.id.fieldNumber` | `number` |
| `properties.endpoint.properties.serviceEndpoint` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } |
| `properties.endpoint.properties.serviceEndpoint.dataType` | `string` |
| `properties.endpoint.properties.serviceEndpoint.fieldNumber` | `number` |
| `properties.endpoint.properties.type` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } |
| `properties.endpoint.properties.type.dataType` | `string` |
| `properties.endpoint.properties.type.fieldNumber` | `number` |
| `properties.endpoint.required` | `string`[] |
| `properties.endpoint.type` | `string` |
| `properties.signature` | { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } |
| `properties.signature.dataType` | `string` |
| `properties.signature.fieldNumber` | `number` |
| `properties.signer` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } |
| `properties.signer.dataType` | `string` |
| `properties.signer.fieldNumber` | `number` |
| `properties.target` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.target.dataType` | `string` |
| `properties.target.fieldNumber` | `number` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/schema/events/add_service_endpoint_event.ts:1](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/utils/schema/events/add_service_endpoint_event.ts#L1)

___

### createCommandSchema

• `Const` **createCommandSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `controllers`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } ; `did`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `keys`: { `fieldNumber`: `number` = 3; `items`: { `properties`: { `publicKey`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } ; `relationship`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `type`: `string` = 'array' }  } |
| `properties.controllers` | { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } |
| `properties.controllers.fieldNumber` | `number` |
| `properties.controllers.items` | { `dataType`: `string` = 'string' } |
| `properties.controllers.items.dataType` | `string` |
| `properties.controllers.type` | `string` |
| `properties.did` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.did.dataType` | `string` |
| `properties.did.fieldNumber` | `number` |
| `properties.keys` | { `fieldNumber`: `number` = 3; `items`: { `properties`: { `publicKey`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } ; `relationship`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `type`: `string` = 'array' } |
| `properties.keys.fieldNumber` | `number` |
| `properties.keys.items` | { `properties`: { `publicKey`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } ; `relationship`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' }  } ; `required`: `string`[] ; `type`: `string` = 'object' } |
| `properties.keys.items.properties` | { `publicKey`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } ; `relationship`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' }  } |
| `properties.keys.items.properties.publicKey` | { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } |
| `properties.keys.items.properties.publicKey.dataType` | `string` |
| `properties.keys.items.properties.publicKey.fieldNumber` | `number` |
| `properties.keys.items.properties.relationship` | { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } |
| `properties.keys.items.properties.relationship.fieldNumber` | `number` |
| `properties.keys.items.properties.relationship.items` | { `dataType`: `string` = 'string' } |
| `properties.keys.items.properties.relationship.items.dataType` | `string` |
| `properties.keys.items.properties.relationship.type` | `string` |
| `properties.keys.items.required` | `string`[] |
| `properties.keys.items.type` | `string` |
| `properties.keys.type` | `string` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/schema/commands/create_command.ts:1](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/utils/schema/commands/create_command.ts#L1)

___

### createEventSchema

• `Const` **createEventSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `controllers`: { `fieldNumber`: `number` = 3; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } ; `did`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `keys`: { `fieldNumber`: `number` = 2; `items`: { `properties`: { `publicKey`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } ; `relationship`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `type`: `string` = 'array' }  } |
| `properties.controllers` | { `fieldNumber`: `number` = 3; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } |
| `properties.controllers.fieldNumber` | `number` |
| `properties.controllers.items` | { `dataType`: `string` = 'string' } |
| `properties.controllers.items.dataType` | `string` |
| `properties.controllers.type` | `string` |
| `properties.did` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.did.dataType` | `string` |
| `properties.did.fieldNumber` | `number` |
| `properties.keys` | { `fieldNumber`: `number` = 2; `items`: { `properties`: { `publicKey`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } ; `relationship`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `type`: `string` = 'array' } |
| `properties.keys.fieldNumber` | `number` |
| `properties.keys.items` | { `properties`: { `publicKey`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } ; `relationship`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' }  } ; `required`: `string`[] ; `type`: `string` = 'object' } |
| `properties.keys.items.properties` | { `publicKey`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } ; `relationship`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' }  } |
| `properties.keys.items.properties.publicKey` | { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 1 } |
| `properties.keys.items.properties.publicKey.dataType` | `string` |
| `properties.keys.items.properties.publicKey.fieldNumber` | `number` |
| `properties.keys.items.properties.relationship` | { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } |
| `properties.keys.items.properties.relationship.fieldNumber` | `number` |
| `properties.keys.items.properties.relationship.items` | { `dataType`: `string` = 'string' } |
| `properties.keys.items.properties.relationship.items.dataType` | `string` |
| `properties.keys.items.properties.relationship.type` | `string` |
| `properties.keys.items.required` | `string`[] |
| `properties.keys.items.type` | `string` |
| `properties.keys.type` | `string` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/schema/events/create_event.ts:1](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/utils/schema/events/create_event.ts#L1)

___

### deactivateCommandSchema

• `Const` **deactivateCommandSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `signature`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 3 } ; `signer`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `target`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } |
| `properties.signature` | { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 3 } |
| `properties.signature.dataType` | `string` |
| `properties.signature.fieldNumber` | `number` |
| `properties.signer` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } |
| `properties.signer.dataType` | `string` |
| `properties.signer.fieldNumber` | `number` |
| `properties.target` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.target.dataType` | `string` |
| `properties.target.fieldNumber` | `number` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/schema/commands/deactivate_command.ts:1](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/utils/schema/commands/deactivate_command.ts#L1)

___

### deactivateEventSchema

• `Const` **deactivateEventSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `signature`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 3 } ; `signer`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `target`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } |
| `properties.signature` | { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 3 } |
| `properties.signature.dataType` | `string` |
| `properties.signature.fieldNumber` | `number` |
| `properties.signer` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } |
| `properties.signer.dataType` | `string` |
| `properties.signer.fieldNumber` | `number` |
| `properties.target` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.target.dataType` | `string` |
| `properties.target.fieldNumber` | `number` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/schema/events/deactivate_event.ts:1](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/utils/schema/events/deactivate_event.ts#L1)

___

### documentStoreSchema

• `Const` **documentStoreSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `assertionMethod`: { `fieldNumber`: `number` = 6; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } ; `authentication`: { `fieldNumber`: `number` = 5; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } ; `capabilityInvocation`: { `fieldNumber`: `number` = 7; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } ; `context`: { `fieldNumber`: `number` = 1; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } ; `controller`: { `fieldNumber`: `number` = 3; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } ; `id`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `keyAgreement`: { `fieldNumber`: `number` = 8; `items`: { `properties`: { `controller`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `id`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `publicKeyMultibase`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 4 } ; `type`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `type`: `string` = 'array' } ; `service`: { `fieldNumber`: `number` = 9; `items`: { `properties`: { `id`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `serviceEndpoint`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `type`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `type`: `string` = 'array' } ; `verificationMethod`: { `fieldNumber`: `number` = 4; `items`: { `properties`: { `controller`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `id`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `publicKeyMultibase`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 4 } ; `type`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `type`: `string` = 'array' }  } |
| `properties.assertionMethod` | { `fieldNumber`: `number` = 6; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } |
| `properties.assertionMethod.fieldNumber` | `number` |
| `properties.assertionMethod.items` | { `dataType`: `string` = 'string' } |
| `properties.assertionMethod.items.dataType` | `string` |
| `properties.assertionMethod.type` | `string` |
| `properties.authentication` | { `fieldNumber`: `number` = 5; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } |
| `properties.authentication.fieldNumber` | `number` |
| `properties.authentication.items` | { `dataType`: `string` = 'string' } |
| `properties.authentication.items.dataType` | `string` |
| `properties.authentication.type` | `string` |
| `properties.capabilityInvocation` | { `fieldNumber`: `number` = 7; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } |
| `properties.capabilityInvocation.fieldNumber` | `number` |
| `properties.capabilityInvocation.items` | { `dataType`: `string` = 'string' } |
| `properties.capabilityInvocation.items.dataType` | `string` |
| `properties.capabilityInvocation.type` | `string` |
| `properties.context` | { `fieldNumber`: `number` = 1; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } |
| `properties.context.fieldNumber` | `number` |
| `properties.context.items` | { `dataType`: `string` = 'string' } |
| `properties.context.items.dataType` | `string` |
| `properties.context.type` | `string` |
| `properties.controller` | { `fieldNumber`: `number` = 3; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } |
| `properties.controller.fieldNumber` | `number` |
| `properties.controller.items` | { `dataType`: `string` = 'string' } |
| `properties.controller.items.dataType` | `string` |
| `properties.controller.type` | `string` |
| `properties.id` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } |
| `properties.id.dataType` | `string` |
| `properties.id.fieldNumber` | `number` |
| `properties.keyAgreement` | { `fieldNumber`: `number` = 8; `items`: { `properties`: { `controller`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `id`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `publicKeyMultibase`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 4 } ; `type`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `type`: `string` = 'array' } |
| `properties.keyAgreement.fieldNumber` | `number` |
| `properties.keyAgreement.items` | { `properties`: { `controller`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `id`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `publicKeyMultibase`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 4 } ; `type`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } |
| `properties.keyAgreement.items.properties` | { `controller`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `id`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `publicKeyMultibase`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 4 } ; `type`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 }  } |
| `properties.keyAgreement.items.properties.controller` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } |
| `properties.keyAgreement.items.properties.controller.dataType` | `string` |
| `properties.keyAgreement.items.properties.controller.fieldNumber` | `number` |
| `properties.keyAgreement.items.properties.id` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.keyAgreement.items.properties.id.dataType` | `string` |
| `properties.keyAgreement.items.properties.id.fieldNumber` | `number` |
| `properties.keyAgreement.items.properties.publicKeyMultibase` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 4 } |
| `properties.keyAgreement.items.properties.publicKeyMultibase.dataType` | `string` |
| `properties.keyAgreement.items.properties.publicKeyMultibase.fieldNumber` | `number` |
| `properties.keyAgreement.items.properties.type` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } |
| `properties.keyAgreement.items.properties.type.dataType` | `string` |
| `properties.keyAgreement.items.properties.type.fieldNumber` | `number` |
| `properties.keyAgreement.items.required` | `string`[] |
| `properties.keyAgreement.items.type` | `string` |
| `properties.keyAgreement.type` | `string` |
| `properties.service` | { `fieldNumber`: `number` = 9; `items`: { `properties`: { `id`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `serviceEndpoint`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `type`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `type`: `string` = 'array' } |
| `properties.service.fieldNumber` | `number` |
| `properties.service.items` | { `properties`: { `id`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `serviceEndpoint`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `type`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } |
| `properties.service.items.properties` | { `id`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `serviceEndpoint`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `type`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 }  } |
| `properties.service.items.properties.id` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.service.items.properties.id.dataType` | `string` |
| `properties.service.items.properties.id.fieldNumber` | `number` |
| `properties.service.items.properties.serviceEndpoint` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } |
| `properties.service.items.properties.serviceEndpoint.dataType` | `string` |
| `properties.service.items.properties.serviceEndpoint.fieldNumber` | `number` |
| `properties.service.items.properties.type` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } |
| `properties.service.items.properties.type.dataType` | `string` |
| `properties.service.items.properties.type.fieldNumber` | `number` |
| `properties.service.items.required` | `string`[] |
| `properties.service.items.type` | `string` |
| `properties.service.type` | `string` |
| `properties.verificationMethod` | { `fieldNumber`: `number` = 4; `items`: { `properties`: { `controller`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `id`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `publicKeyMultibase`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 4 } ; `type`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `type`: `string` = 'array' } |
| `properties.verificationMethod.fieldNumber` | `number` |
| `properties.verificationMethod.items` | { `properties`: { `controller`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `id`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `publicKeyMultibase`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 4 } ; `type`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } |
| `properties.verificationMethod.items.properties` | { `controller`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `id`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `publicKeyMultibase`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 4 } ; `type`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 }  } |
| `properties.verificationMethod.items.properties.controller` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } |
| `properties.verificationMethod.items.properties.controller.dataType` | `string` |
| `properties.verificationMethod.items.properties.controller.fieldNumber` | `number` |
| `properties.verificationMethod.items.properties.id` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.verificationMethod.items.properties.id.dataType` | `string` |
| `properties.verificationMethod.items.properties.id.fieldNumber` | `number` |
| `properties.verificationMethod.items.properties.publicKeyMultibase` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 4 } |
| `properties.verificationMethod.items.properties.publicKeyMultibase.dataType` | `string` |
| `properties.verificationMethod.items.properties.publicKeyMultibase.fieldNumber` | `number` |
| `properties.verificationMethod.items.properties.type` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } |
| `properties.verificationMethod.items.properties.type.dataType` | `string` |
| `properties.verificationMethod.items.properties.type.fieldNumber` | `number` |
| `properties.verificationMethod.items.required` | `string`[] |
| `properties.verificationMethod.items.type` | `string` |
| `properties.verificationMethod.type` | `string` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/schema/stores/document.ts:1](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/utils/schema/stores/document.ts#L1)

___

### jweDocumentSchema

• `Const` **jweDocumentSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `ciphertext`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 4 } ; `iv`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `protected`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `recipients`: { `fieldNumber`: `number` = 2; `items`: { `properties`: { `encrypted_key`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `header`: { `fieldNumber`: `number` = 1; `properties`: { `alg`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `apu`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 4 } ; `apv`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 5 } ; `epk`: { `fieldNumber`: `number` = 3; `properties`: { `crv`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `kty`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `x`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `kid`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } ; `required`: `string`[] ; `type`: `string` = 'object' }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `type`: `string` = 'array' } ; `tag`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 5 }  } |
| `properties.ciphertext` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 4 } |
| `properties.ciphertext.dataType` | `string` |
| `properties.ciphertext.fieldNumber` | `number` |
| `properties.iv` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } |
| `properties.iv.dataType` | `string` |
| `properties.iv.fieldNumber` | `number` |
| `properties.protected` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.protected.dataType` | `string` |
| `properties.protected.fieldNumber` | `number` |
| `properties.recipients` | { `fieldNumber`: `number` = 2; `items`: { `properties`: { `encrypted_key`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `header`: { `fieldNumber`: `number` = 1; `properties`: { `alg`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `apu`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 4 } ; `apv`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 5 } ; `epk`: { `fieldNumber`: `number` = 3; `properties`: { `crv`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `kty`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `x`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `kid`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } ; `required`: `string`[] ; `type`: `string` = 'object' }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `type`: `string` = 'array' } |
| `properties.recipients.fieldNumber` | `number` |
| `properties.recipients.items` | { `properties`: { `encrypted_key`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `header`: { `fieldNumber`: `number` = 1; `properties`: { `alg`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `apu`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 4 } ; `apv`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 5 } ; `epk`: { `fieldNumber`: `number` = 3; `properties`: { `crv`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `kty`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `x`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `kid`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } ; `required`: `string`[] ; `type`: `string` = 'object' }  } ; `required`: `string`[] ; `type`: `string` = 'object' } |
| `properties.recipients.items.properties` | { `encrypted_key`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `header`: { `fieldNumber`: `number` = 1; `properties`: { `alg`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `apu`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 4 } ; `apv`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 5 } ; `epk`: { `fieldNumber`: `number` = 3; `properties`: { `crv`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `kty`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `x`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `kid`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } ; `required`: `string`[] ; `type`: `string` = 'object' }  } |
| `properties.recipients.items.properties.encrypted_key` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } |
| `properties.recipients.items.properties.encrypted_key.dataType` | `string` |
| `properties.recipients.items.properties.encrypted_key.fieldNumber` | `number` |
| `properties.recipients.items.properties.header` | { `fieldNumber`: `number` = 1; `properties`: { `alg`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `apu`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 4 } ; `apv`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 5 } ; `epk`: { `fieldNumber`: `number` = 3; `properties`: { `crv`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `kty`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `x`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `kid`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } |
| `properties.recipients.items.properties.header.fieldNumber` | `number` |
| `properties.recipients.items.properties.header.properties` | { `alg`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `apu`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 4 } ; `apv`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 5 } ; `epk`: { `fieldNumber`: `number` = 3; `properties`: { `crv`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `kty`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `x`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } ; `kid`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } |
| `properties.recipients.items.properties.header.properties.alg` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } |
| `properties.recipients.items.properties.header.properties.alg.dataType` | `string` |
| `properties.recipients.items.properties.header.properties.alg.fieldNumber` | `number` |
| `properties.recipients.items.properties.header.properties.apu` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 4 } |
| `properties.recipients.items.properties.header.properties.apu.dataType` | `string` |
| `properties.recipients.items.properties.header.properties.apu.fieldNumber` | `number` |
| `properties.recipients.items.properties.header.properties.apv` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 5 } |
| `properties.recipients.items.properties.header.properties.apv.dataType` | `string` |
| `properties.recipients.items.properties.header.properties.apv.fieldNumber` | `number` |
| `properties.recipients.items.properties.header.properties.epk` | { `fieldNumber`: `number` = 3; `properties`: { `crv`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `kty`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `x`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 }  } ; `required`: `string`[] ; `type`: `string` = 'object' } |
| `properties.recipients.items.properties.header.properties.epk.fieldNumber` | `number` |
| `properties.recipients.items.properties.header.properties.epk.properties` | { `crv`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `kty`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } ; `x`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 }  } |
| `properties.recipients.items.properties.header.properties.epk.properties.crv` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } |
| `properties.recipients.items.properties.header.properties.epk.properties.crv.dataType` | `string` |
| `properties.recipients.items.properties.header.properties.epk.properties.crv.fieldNumber` | `number` |
| `properties.recipients.items.properties.header.properties.epk.properties.kty` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.recipients.items.properties.header.properties.epk.properties.kty.dataType` | `string` |
| `properties.recipients.items.properties.header.properties.epk.properties.kty.fieldNumber` | `number` |
| `properties.recipients.items.properties.header.properties.epk.properties.x` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } |
| `properties.recipients.items.properties.header.properties.epk.properties.x.dataType` | `string` |
| `properties.recipients.items.properties.header.properties.epk.properties.x.fieldNumber` | `number` |
| `properties.recipients.items.properties.header.properties.epk.required` | `string`[] |
| `properties.recipients.items.properties.header.properties.epk.type` | `string` |
| `properties.recipients.items.properties.header.properties.kid` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.recipients.items.properties.header.properties.kid.dataType` | `string` |
| `properties.recipients.items.properties.header.properties.kid.fieldNumber` | `number` |
| `properties.recipients.items.properties.header.required` | `string`[] |
| `properties.recipients.items.properties.header.type` | `string` |
| `properties.recipients.items.required` | `string`[] |
| `properties.recipients.items.type` | `string` |
| `properties.recipients.type` | `string` |
| `properties.tag` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 5 } |
| `properties.tag.dataType` | `string` |
| `properties.tag.fieldNumber` | `number` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/schema/jwe.ts:1](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/utils/schema/jwe.ts#L1)

___

### nonceStoreSchema

• `Const` **nonceStoreSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `nonce`: { `dataType`: `string` = 'uint64'; `fieldNumber`: `number` = 1 }  } |
| `properties.nonce` | { `dataType`: `string` = 'uint64'; `fieldNumber`: `number` = 1 } |
| `properties.nonce.dataType` | `string` |
| `properties.nonce.fieldNumber` | `number` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/schema/stores/nonce.ts:1](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/utils/schema/stores/nonce.ts#L1)

___

### removeControllersCommandSchema

• `Const` **removeControllersCommandSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `controllers`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } ; `signature`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } ; `signer`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `target`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } |
| `properties.controllers` | { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } |
| `properties.controllers.fieldNumber` | `number` |
| `properties.controllers.items` | { `dataType`: `string` = 'string' } |
| `properties.controllers.items.dataType` | `string` |
| `properties.controllers.type` | `string` |
| `properties.signature` | { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } |
| `properties.signature.dataType` | `string` |
| `properties.signature.fieldNumber` | `number` |
| `properties.signer` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } |
| `properties.signer.dataType` | `string` |
| `properties.signer.fieldNumber` | `number` |
| `properties.target` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.target.dataType` | `string` |
| `properties.target.fieldNumber` | `number` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/schema/commands/remove_controllers_command.ts:1](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/utils/schema/commands/remove_controllers_command.ts#L1)

___

### removeControllersEventSchema

• `Const` **removeControllersEventSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `controllers`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } ; `signature`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } ; `signer`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `target`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } |
| `properties.controllers` | { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'string' } ; `type`: `string` = 'array' } |
| `properties.controllers.fieldNumber` | `number` |
| `properties.controllers.items` | { `dataType`: `string` = 'string' } |
| `properties.controllers.items.dataType` | `string` |
| `properties.controllers.type` | `string` |
| `properties.signature` | { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } |
| `properties.signature.dataType` | `string` |
| `properties.signature.fieldNumber` | `number` |
| `properties.signer` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } |
| `properties.signer.dataType` | `string` |
| `properties.signer.fieldNumber` | `number` |
| `properties.target` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.target.dataType` | `string` |
| `properties.target.fieldNumber` | `number` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/schema/events/remove_controllers_event.ts:1](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/utils/schema/events/remove_controllers_event.ts#L1)

___

### removeKeysCommandSchema

• `Const` **removeKeysCommandSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `publicKeys`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'bytes' } ; `type`: `string` = 'array' } ; `signature`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } ; `signer`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `target`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } |
| `properties.publicKeys` | { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'bytes' } ; `type`: `string` = 'array' } |
| `properties.publicKeys.fieldNumber` | `number` |
| `properties.publicKeys.items` | { `dataType`: `string` = 'bytes' } |
| `properties.publicKeys.items.dataType` | `string` |
| `properties.publicKeys.type` | `string` |
| `properties.signature` | { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } |
| `properties.signature.dataType` | `string` |
| `properties.signature.fieldNumber` | `number` |
| `properties.signer` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } |
| `properties.signer.dataType` | `string` |
| `properties.signer.fieldNumber` | `number` |
| `properties.target` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.target.dataType` | `string` |
| `properties.target.fieldNumber` | `number` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/schema/commands/remove_keys_command.ts:1](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/utils/schema/commands/remove_keys_command.ts#L1)

___

### removeKeysEventSchema

• `Const` **removeKeysEventSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `publicKeys`: { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'bytes' } ; `type`: `string` = 'array' } ; `signature`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } ; `signer`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `target`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } |
| `properties.publicKeys` | { `fieldNumber`: `number` = 2; `items`: { `dataType`: `string` = 'bytes' } ; `type`: `string` = 'array' } |
| `properties.publicKeys.fieldNumber` | `number` |
| `properties.publicKeys.items` | { `dataType`: `string` = 'bytes' } |
| `properties.publicKeys.items.dataType` | `string` |
| `properties.publicKeys.type` | `string` |
| `properties.signature` | { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } |
| `properties.signature.dataType` | `string` |
| `properties.signature.fieldNumber` | `number` |
| `properties.signer` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } |
| `properties.signer.dataType` | `string` |
| `properties.signer.fieldNumber` | `number` |
| `properties.target` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.target.dataType` | `string` |
| `properties.target.fieldNumber` | `number` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/schema/events/remove_keys_event.ts:1](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/utils/schema/events/remove_keys_event.ts#L1)

___

### removeServiceEndpointCommandSchema

• `Const` **removeServiceEndpointCommandSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `endpointId`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `signature`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } ; `signer`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `target`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } |
| `properties.endpointId` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } |
| `properties.endpointId.dataType` | `string` |
| `properties.endpointId.fieldNumber` | `number` |
| `properties.signature` | { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } |
| `properties.signature.dataType` | `string` |
| `properties.signature.fieldNumber` | `number` |
| `properties.signer` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } |
| `properties.signer.dataType` | `string` |
| `properties.signer.fieldNumber` | `number` |
| `properties.target` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.target.dataType` | `string` |
| `properties.target.fieldNumber` | `number` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/schema/commands/remove_service_endpoint_command.ts:1](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/utils/schema/commands/remove_service_endpoint_command.ts#L1)

___

### removeServiceEndpointEventSchema

• `Const` **removeServiceEndpointEventSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `endpointId`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } ; `signature`: { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } ; `signer`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } ; `target`: { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 }  } |
| `properties.endpointId` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 2 } |
| `properties.endpointId.dataType` | `string` |
| `properties.endpointId.fieldNumber` | `number` |
| `properties.signature` | { `dataType`: `string` = 'bytes'; `fieldNumber`: `number` = 4 } |
| `properties.signature.dataType` | `string` |
| `properties.signature.fieldNumber` | `number` |
| `properties.signer` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 3 } |
| `properties.signer.dataType` | `string` |
| `properties.signer.fieldNumber` | `number` |
| `properties.target` | { `dataType`: `string` = 'string'; `fieldNumber`: `number` = 1 } |
| `properties.target.dataType` | `string` |
| `properties.target.fieldNumber` | `number` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

[packages/klayr-decentralized-identifier/src/utils/schema/events/remove_service_endpoint_event.ts:1](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/utils/schema/events/remove_service_endpoint_event.ts#L1)
