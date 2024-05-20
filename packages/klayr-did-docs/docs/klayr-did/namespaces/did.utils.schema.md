---
id: "did.utils.schema"
title: "Namespace: schema"
sidebar_label: "did.utils.schema"
custom_edit_url: null
---

[did](did.md).[utils](did.utils.md).schema

## Variables

### addControllersCommandSchema

• `Const` **addControllersCommandSchema**: `Object`

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

#### Defined in

packages/klayr-decentralized-identifier/dist/utils/schema/commands/add_controllers_command.d.ts:1

___

### addControllersEventSchema

• `Const` **addControllersEventSchema**: `Object`

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

#### Defined in

packages/klayr-decentralized-identifier/dist/utils/schema/events/add_controllers_event.d.ts:1

___

### addKeysCommandSchema

• `Const` **addKeysCommandSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `keys`: { `fieldNumber`: `number` ; `items`: { `properties`: { `publicKey`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `relationship`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `type`: `string`  } ; `signature`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `signer`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `target`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } |
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

#### Defined in

packages/klayr-decentralized-identifier/dist/utils/schema/commands/add_keys_command.d.ts:1

___

### addKeysEventSchema

• `Const` **addKeysEventSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `keys`: { `fieldNumber`: `number` ; `items`: { `properties`: { `publicKey`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `relationship`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `type`: `string`  } ; `signature`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `signer`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `target`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } |
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

#### Defined in

packages/klayr-decentralized-identifier/dist/utils/schema/events/add_keys_event.d.ts:1

___

### addServiceEndpointCommandSchema

• `Const` **addServiceEndpointCommandSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `endpoint`: { `fieldNumber`: `number` ; `properties`: { `id`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `serviceEndpoint`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `type`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `signature`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `signer`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `target`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } |
| `properties.endpoint` | { `fieldNumber`: `number` ; `properties`: { `id`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `serviceEndpoint`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `type`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } |
| `properties.endpoint.fieldNumber` | `number` |
| `properties.endpoint.properties` | { `id`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `serviceEndpoint`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `type`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } |
| `properties.endpoint.properties.id` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.endpoint.properties.id.dataType` | `string` |
| `properties.endpoint.properties.id.fieldNumber` | `number` |
| `properties.endpoint.properties.serviceEndpoint` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.endpoint.properties.serviceEndpoint.dataType` | `string` |
| `properties.endpoint.properties.serviceEndpoint.fieldNumber` | `number` |
| `properties.endpoint.properties.type` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.endpoint.properties.type.dataType` | `string` |
| `properties.endpoint.properties.type.fieldNumber` | `number` |
| `properties.endpoint.required` | `string`[] |
| `properties.endpoint.type` | `string` |
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

#### Defined in

packages/klayr-decentralized-identifier/dist/utils/schema/commands/add_service_endpoint_command.d.ts:1

___

### addServiceEndpointEventSchema

• `Const` **addServiceEndpointEventSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `endpoint`: { `fieldNumber`: `number` ; `properties`: { `id`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `serviceEndpoint`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `type`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `signature`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `signer`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `target`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } |
| `properties.endpoint` | { `fieldNumber`: `number` ; `properties`: { `id`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `serviceEndpoint`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `type`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } |
| `properties.endpoint.fieldNumber` | `number` |
| `properties.endpoint.properties` | { `id`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `serviceEndpoint`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `type`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } |
| `properties.endpoint.properties.id` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.endpoint.properties.id.dataType` | `string` |
| `properties.endpoint.properties.id.fieldNumber` | `number` |
| `properties.endpoint.properties.serviceEndpoint` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.endpoint.properties.serviceEndpoint.dataType` | `string` |
| `properties.endpoint.properties.serviceEndpoint.fieldNumber` | `number` |
| `properties.endpoint.properties.type` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.endpoint.properties.type.dataType` | `string` |
| `properties.endpoint.properties.type.fieldNumber` | `number` |
| `properties.endpoint.required` | `string`[] |
| `properties.endpoint.type` | `string` |
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

#### Defined in

packages/klayr-decentralized-identifier/dist/utils/schema/events/add_service_endpoint_event.d.ts:1

___

### createCommandSchema

• `Const` **createCommandSchema**: `Object`

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

#### Defined in

packages/klayr-decentralized-identifier/dist/utils/schema/commands/create_command.d.ts:1

___

### createEventSchema

• `Const` **createEventSchema**: `Object`

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

#### Defined in

packages/klayr-decentralized-identifier/dist/utils/schema/events/create_event.d.ts:1

___

### deactivateCommandSchema

• `Const` **deactivateCommandSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `signature`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `signer`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `target`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } |
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

#### Defined in

packages/klayr-decentralized-identifier/dist/utils/schema/commands/deactivate_command.d.ts:1

___

### deactivateEventSchema

• `Const` **deactivateEventSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `signature`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `signer`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `target`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } |
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

#### Defined in

packages/klayr-decentralized-identifier/dist/utils/schema/events/deactivate_event.d.ts:1

___

### documentStoreSchema

• `Const` **documentStoreSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `assertionMethod`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  } ; `authentication`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  } ; `capabilityInvocation`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  } ; `context`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  } ; `controller`: { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  } ; `id`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `keyAgreement`: { `fieldNumber`: `number` ; `items`: { `properties`: { `controller`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `id`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `publicKeyMultibase`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `type`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `type`: `string`  } ; `service`: { `fieldNumber`: `number` ; `items`: { `properties`: { `id`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `serviceEndpoint`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `type`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `type`: `string`  } ; `verificationMethod`: { `fieldNumber`: `number` ; `items`: { `properties`: { `controller`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `id`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `publicKeyMultibase`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `type`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `type`: `string`  }  } |
| `properties.assertionMethod` | { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  } |
| `properties.assertionMethod.fieldNumber` | `number` |
| `properties.assertionMethod.items` | { `dataType`: `string`  } |
| `properties.assertionMethod.items.dataType` | `string` |
| `properties.assertionMethod.type` | `string` |
| `properties.authentication` | { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  } |
| `properties.authentication.fieldNumber` | `number` |
| `properties.authentication.items` | { `dataType`: `string`  } |
| `properties.authentication.items.dataType` | `string` |
| `properties.authentication.type` | `string` |
| `properties.capabilityInvocation` | { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  } |
| `properties.capabilityInvocation.fieldNumber` | `number` |
| `properties.capabilityInvocation.items` | { `dataType`: `string`  } |
| `properties.capabilityInvocation.items.dataType` | `string` |
| `properties.capabilityInvocation.type` | `string` |
| `properties.context` | { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  } |
| `properties.context.fieldNumber` | `number` |
| `properties.context.items` | { `dataType`: `string`  } |
| `properties.context.items.dataType` | `string` |
| `properties.context.type` | `string` |
| `properties.controller` | { `fieldNumber`: `number` ; `items`: { `dataType`: `string`  } ; `type`: `string`  } |
| `properties.controller.fieldNumber` | `number` |
| `properties.controller.items` | { `dataType`: `string`  } |
| `properties.controller.items.dataType` | `string` |
| `properties.controller.type` | `string` |
| `properties.id` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.id.dataType` | `string` |
| `properties.id.fieldNumber` | `number` |
| `properties.keyAgreement` | { `fieldNumber`: `number` ; `items`: { `properties`: { `controller`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `id`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `publicKeyMultibase`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `type`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `type`: `string`  } |
| `properties.keyAgreement.fieldNumber` | `number` |
| `properties.keyAgreement.items` | { `properties`: { `controller`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `id`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `publicKeyMultibase`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `type`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } |
| `properties.keyAgreement.items.properties` | { `controller`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `id`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `publicKeyMultibase`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `type`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } |
| `properties.keyAgreement.items.properties.controller` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.keyAgreement.items.properties.controller.dataType` | `string` |
| `properties.keyAgreement.items.properties.controller.fieldNumber` | `number` |
| `properties.keyAgreement.items.properties.id` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.keyAgreement.items.properties.id.dataType` | `string` |
| `properties.keyAgreement.items.properties.id.fieldNumber` | `number` |
| `properties.keyAgreement.items.properties.publicKeyMultibase` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.keyAgreement.items.properties.publicKeyMultibase.dataType` | `string` |
| `properties.keyAgreement.items.properties.publicKeyMultibase.fieldNumber` | `number` |
| `properties.keyAgreement.items.properties.type` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.keyAgreement.items.properties.type.dataType` | `string` |
| `properties.keyAgreement.items.properties.type.fieldNumber` | `number` |
| `properties.keyAgreement.items.required` | `string`[] |
| `properties.keyAgreement.items.type` | `string` |
| `properties.keyAgreement.type` | `string` |
| `properties.service` | { `fieldNumber`: `number` ; `items`: { `properties`: { `id`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `serviceEndpoint`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `type`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `type`: `string`  } |
| `properties.service.fieldNumber` | `number` |
| `properties.service.items` | { `properties`: { `id`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `serviceEndpoint`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `type`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } |
| `properties.service.items.properties` | { `id`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `serviceEndpoint`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `type`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } |
| `properties.service.items.properties.id` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.service.items.properties.id.dataType` | `string` |
| `properties.service.items.properties.id.fieldNumber` | `number` |
| `properties.service.items.properties.serviceEndpoint` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.service.items.properties.serviceEndpoint.dataType` | `string` |
| `properties.service.items.properties.serviceEndpoint.fieldNumber` | `number` |
| `properties.service.items.properties.type` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.service.items.properties.type.dataType` | `string` |
| `properties.service.items.properties.type.fieldNumber` | `number` |
| `properties.service.items.required` | `string`[] |
| `properties.service.items.type` | `string` |
| `properties.service.type` | `string` |
| `properties.verificationMethod` | { `fieldNumber`: `number` ; `items`: { `properties`: { `controller`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `id`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `publicKeyMultibase`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `type`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `type`: `string`  } |
| `properties.verificationMethod.fieldNumber` | `number` |
| `properties.verificationMethod.items` | { `properties`: { `controller`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `id`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `publicKeyMultibase`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `type`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } |
| `properties.verificationMethod.items.properties` | { `controller`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `id`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `publicKeyMultibase`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `type`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } |
| `properties.verificationMethod.items.properties.controller` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.verificationMethod.items.properties.controller.dataType` | `string` |
| `properties.verificationMethod.items.properties.controller.fieldNumber` | `number` |
| `properties.verificationMethod.items.properties.id` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.verificationMethod.items.properties.id.dataType` | `string` |
| `properties.verificationMethod.items.properties.id.fieldNumber` | `number` |
| `properties.verificationMethod.items.properties.publicKeyMultibase` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.verificationMethod.items.properties.publicKeyMultibase.dataType` | `string` |
| `properties.verificationMethod.items.properties.publicKeyMultibase.fieldNumber` | `number` |
| `properties.verificationMethod.items.properties.type` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.verificationMethod.items.properties.type.dataType` | `string` |
| `properties.verificationMethod.items.properties.type.fieldNumber` | `number` |
| `properties.verificationMethod.items.required` | `string`[] |
| `properties.verificationMethod.items.type` | `string` |
| `properties.verificationMethod.type` | `string` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

packages/klayr-decentralized-identifier/dist/utils/schema/stores/document.d.ts:1

___

### jweDocumentSchema

• `Const` **jweDocumentSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `ciphertext`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `iv`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `protected`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `recipients`: { `fieldNumber`: `number` ; `items`: { `properties`: { `encrypted_key`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `header`: { `fieldNumber`: `number` ; `properties`: { `alg`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `apu`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `apv`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `epk`: { `fieldNumber`: `number` ; `properties`: { `crv`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `kty`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `x`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `kid`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `type`: `string`  } ; `tag`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } |
| `properties.ciphertext` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.ciphertext.dataType` | `string` |
| `properties.ciphertext.fieldNumber` | `number` |
| `properties.iv` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.iv.dataType` | `string` |
| `properties.iv.fieldNumber` | `number` |
| `properties.protected` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.protected.dataType` | `string` |
| `properties.protected.fieldNumber` | `number` |
| `properties.recipients` | { `fieldNumber`: `number` ; `items`: { `properties`: { `encrypted_key`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `header`: { `fieldNumber`: `number` ; `properties`: { `alg`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `apu`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `apv`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `epk`: { `fieldNumber`: `number` ; `properties`: { `crv`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `kty`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `x`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `kid`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `type`: `string`  } |
| `properties.recipients.fieldNumber` | `number` |
| `properties.recipients.items` | { `properties`: { `encrypted_key`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `header`: { `fieldNumber`: `number` ; `properties`: { `alg`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `apu`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `apv`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `epk`: { `fieldNumber`: `number` ; `properties`: { `crv`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `kty`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `x`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `kid`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  }  } ; `required`: `string`[] ; `type`: `string`  } |
| `properties.recipients.items.properties` | { `encrypted_key`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `header`: { `fieldNumber`: `number` ; `properties`: { `alg`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `apu`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `apv`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `epk`: { `fieldNumber`: `number` ; `properties`: { `crv`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `kty`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `x`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `kid`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  }  } |
| `properties.recipients.items.properties.encrypted_key` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.recipients.items.properties.encrypted_key.dataType` | `string` |
| `properties.recipients.items.properties.encrypted_key.fieldNumber` | `number` |
| `properties.recipients.items.properties.header` | { `fieldNumber`: `number` ; `properties`: { `alg`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `apu`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `apv`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `epk`: { `fieldNumber`: `number` ; `properties`: { `crv`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `kty`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `x`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `kid`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } |
| `properties.recipients.items.properties.header.fieldNumber` | `number` |
| `properties.recipients.items.properties.header.properties` | { `alg`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `apu`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `apv`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `epk`: { `fieldNumber`: `number` ; `properties`: { `crv`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `kty`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `x`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } ; `kid`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } |
| `properties.recipients.items.properties.header.properties.alg` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.recipients.items.properties.header.properties.alg.dataType` | `string` |
| `properties.recipients.items.properties.header.properties.alg.fieldNumber` | `number` |
| `properties.recipients.items.properties.header.properties.apu` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.recipients.items.properties.header.properties.apu.dataType` | `string` |
| `properties.recipients.items.properties.header.properties.apu.fieldNumber` | `number` |
| `properties.recipients.items.properties.header.properties.apv` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.recipients.items.properties.header.properties.apv.dataType` | `string` |
| `properties.recipients.items.properties.header.properties.apv.fieldNumber` | `number` |
| `properties.recipients.items.properties.header.properties.epk` | { `fieldNumber`: `number` ; `properties`: { `crv`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `kty`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `x`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } ; `required`: `string`[] ; `type`: `string`  } |
| `properties.recipients.items.properties.header.properties.epk.fieldNumber` | `number` |
| `properties.recipients.items.properties.header.properties.epk.properties` | { `crv`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `kty`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `x`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } |
| `properties.recipients.items.properties.header.properties.epk.properties.crv` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.recipients.items.properties.header.properties.epk.properties.crv.dataType` | `string` |
| `properties.recipients.items.properties.header.properties.epk.properties.crv.fieldNumber` | `number` |
| `properties.recipients.items.properties.header.properties.epk.properties.kty` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.recipients.items.properties.header.properties.epk.properties.kty.dataType` | `string` |
| `properties.recipients.items.properties.header.properties.epk.properties.kty.fieldNumber` | `number` |
| `properties.recipients.items.properties.header.properties.epk.properties.x` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.recipients.items.properties.header.properties.epk.properties.x.dataType` | `string` |
| `properties.recipients.items.properties.header.properties.epk.properties.x.fieldNumber` | `number` |
| `properties.recipients.items.properties.header.properties.epk.required` | `string`[] |
| `properties.recipients.items.properties.header.properties.epk.type` | `string` |
| `properties.recipients.items.properties.header.properties.kid` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.recipients.items.properties.header.properties.kid.dataType` | `string` |
| `properties.recipients.items.properties.header.properties.kid.fieldNumber` | `number` |
| `properties.recipients.items.properties.header.required` | `string`[] |
| `properties.recipients.items.properties.header.type` | `string` |
| `properties.recipients.items.required` | `string`[] |
| `properties.recipients.items.type` | `string` |
| `properties.recipients.type` | `string` |
| `properties.tag` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.tag.dataType` | `string` |
| `properties.tag.fieldNumber` | `number` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

packages/klayr-decentralized-identifier/dist/utils/schema/jwe.d.ts:1

___

### nonceStoreSchema

• `Const` **nonceStoreSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `nonce`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } |
| `properties.nonce` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.nonce.dataType` | `string` |
| `properties.nonce.fieldNumber` | `number` |
| `required` | `string`[] |
| `type` | `string` |

#### Defined in

packages/klayr-decentralized-identifier/dist/utils/schema/stores/nonce.d.ts:1

___

### removeControllersCommandSchema

• `Const` **removeControllersCommandSchema**: `Object`

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

#### Defined in

packages/klayr-decentralized-identifier/dist/utils/schema/commands/remove_controllers_command.d.ts:1

___

### removeControllersEventSchema

• `Const` **removeControllersEventSchema**: `Object`

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

#### Defined in

packages/klayr-decentralized-identifier/dist/utils/schema/events/remove_controllers_event.d.ts:1

___

### removeKeysCommandSchema

• `Const` **removeKeysCommandSchema**: `Object`

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

#### Defined in

packages/klayr-decentralized-identifier/dist/utils/schema/commands/remove_keys_command.d.ts:1

___

### removeKeysEventSchema

• `Const` **removeKeysEventSchema**: `Object`

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

#### Defined in

packages/klayr-decentralized-identifier/dist/utils/schema/events/remove_keys_event.d.ts:1

___

### removeServiceEndpointCommandSchema

• `Const` **removeServiceEndpointCommandSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `endpointId`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `signature`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `signer`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `target`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } |
| `properties.endpointId` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.endpointId.dataType` | `string` |
| `properties.endpointId.fieldNumber` | `number` |
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

#### Defined in

packages/klayr-decentralized-identifier/dist/utils/schema/commands/remove_service_endpoint_command.d.ts:1

___

### removeServiceEndpointEventSchema

• `Const` **removeServiceEndpointEventSchema**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `$id` | `string` |
| `properties` | { `endpointId`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `signature`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `signer`: { `dataType`: `string` ; `fieldNumber`: `number`  } ; `target`: { `dataType`: `string` ; `fieldNumber`: `number`  }  } |
| `properties.endpointId` | { `dataType`: `string` ; `fieldNumber`: `number`  } |
| `properties.endpointId.dataType` | `string` |
| `properties.endpointId.fieldNumber` | `number` |
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

#### Defined in

packages/klayr-decentralized-identifier/dist/utils/schema/events/remove_service_endpoint_event.d.ts:1
