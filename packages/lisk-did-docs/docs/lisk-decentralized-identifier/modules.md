---
id: 'modules'
title: '@lisk-did/lisk-decentralized-identifier'
sidebar_label: 'Exports'
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [client](namespaces/client.md)
- [cryptography](namespaces/cryptography.md)
- [resolver](namespaces/resolver.md)
- [utils](namespaces/utils.md)

## Interfaces

- [AddControllersParam](interfaces/AddControllersParam.md)
- [AddKeysParam](interfaces/AddKeysParam.md)
- [AddServiceEndpointParam](interfaces/AddServiceEndpointParam.md)
- [AuthorizationFactors](interfaces/AuthorizationFactors.md)
- [BaseResolver](interfaces/BaseResolver.md)
- [CipherInterface](interfaces/CipherInterface.md)
- [CreateParam](interfaces/CreateParam.md)
- [DeactivateParam](interfaces/DeactivateParam.md)
- [DidDocument](interfaces/DidDocument.md)
- [DidEndpoint](interfaces/DidEndpoint.md)
- [DidMethod](interfaces/DidMethod.md)
- [DidModuleConfig](interfaces/DidModuleConfig.md)
- [DocumentLoaderResult](interfaces/DocumentLoaderResult.md)
- [Ed25519KeyPair](interfaces/Ed25519KeyPair.md)
- [Ed25519Signature2020](interfaces/Ed25519Signature2020.md)
- [JWEDocument](interfaces/JWEDocument.md)
- [KeysCommand](interfaces/KeysCommand.md)
- [NonceStoreData](interfaces/NonceStoreData.md)
- [RemoveControllersParam](interfaces/RemoveControllersParam.md)
- [RemoveKeysParam](interfaces/RemoveKeysParam.md)
- [RemoveServiceEndpointParam](interfaces/RemoveServiceEndpointParam.md)
- [Service](interfaces/Service.md)
- [TransactionPayload](interfaces/TransactionPayload.md)
- [TransactionPayloadWithoutSignature](interfaces/TransactionPayloadWithoutSignature.md)
- [VerificationMethod](interfaces/VerificationMethod.md)

## Type Aliases

### AddControllersEventData

Ƭ **AddControllersEventData**: [`AddControllersParam`](interfaces/AddControllersParam.md)

#### Defined in

[packages/lisk-decentralized-identifier/src/types/events/add_controllers_event.ts:3](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/events/add_controllers_event.ts#L3)

---

### AddKeysEventData

Ƭ **AddKeysEventData**: [`AddKeysParam`](interfaces/AddKeysParam.md)

#### Defined in

[packages/lisk-decentralized-identifier/src/types/events/add_keys_event.ts:3](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/events/add_keys_event.ts#L3)

---

### AddServiceEndpointEventData

Ƭ **AddServiceEndpointEventData**: [`AddServiceEndpointParam`](interfaces/AddServiceEndpointParam.md)

#### Defined in

[packages/lisk-decentralized-identifier/src/types/events/add_service_endpoint_event.ts:3](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/events/add_service_endpoint_event.ts#L3)

---

### AuthorizationResult

Ƭ **AuthorizationResult**: `Object`

#### Type declaration

| Name           | Type                                                                |
| :------------- | :------------------------------------------------------------------ |
| `did`          | `string`                                                            |
| `relationship` | [`VerificationRelationship`](modules.md#verificationrelationship)[] |
| `type`         | `"subject"` \| `"controller"`                                       |

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:3](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L3)

---

### BaseLoader

Ƭ **BaseLoader**: (`url`: `string`) => `Promise`<`Record`<`string`, `any`\>\>

#### Type declaration

▸ (`url`): `Promise`<`Record`<`string`, `any`\>\>

##### Parameters

| Name  | Type     |
| :---- | :------- |
| `url` | `string` |

##### Returns

`Promise`<`Record`<`string`, `any`\>\>

#### Defined in

[packages/lisk-decentralized-identifier/src/types/resolver.ts:18](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/resolver.ts#L18)

---

### CommandPayload

Ƭ **CommandPayload**: `CreatePayload` \| [`PayloadWithSignature`](modules.md#payloadwithsignature)

#### Defined in

[packages/lisk-decentralized-identifier/src/types/client.ts:62](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/client.ts#L62)

---

### CreateEventData

Ƭ **CreateEventData**: [`CreateParam`](interfaces/CreateParam.md)

#### Defined in

[packages/lisk-decentralized-identifier/src/types/events/create_event.ts:3](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/events/create_event.ts#L3)

---

### CreateResolverParam

Ƭ **CreateResolverParam**: `Object`

#### Type declaration

| Name        | Type                                                                                   |
| :---------- | :------------------------------------------------------------------------------------- |
| `context?`  | `MethodContext`                                                                        |
| `ipc?`      | `string`                                                                               |
| `loader?`   | [`BaseLoader`](modules.md#baseloader) \| [`DocumentLoader`](modules.md#documentloader) |
| `method?`   | [`DidMethod`](interfaces/DidMethod.md)                                                 |
| `resolver?` | [`BaseResolver`](interfaces/BaseResolver.md)                                           |
| `ws?`       | `string`                                                                               |

#### Defined in

[packages/lisk-decentralized-identifier/src/types/resolver.ts:20](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/resolver.ts#L20)

---

### DIDCommands

Ƭ **DIDCommands**: `"addControllers"` \| `"addKeys"` \| `"addServiceEndpoint"` \| `"create"` \| `"deactivate"` \| `"removeControllers"` \| `"removeKeys"` \| `"removeServiceEndpoint"`

#### Defined in

[packages/lisk-decentralized-identifier/src/types/client.ts:43](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/client.ts#L43)

---

### DIDTransactionParam

Ƭ **DIDTransactionParam**: [`AddControllersParam`](interfaces/AddControllersParam.md) \| [`AddKeysParam`](interfaces/AddKeysParam.md) \| [`AddServiceEndpointParam`](interfaces/AddServiceEndpointParam.md) \| [`CreateParam`](interfaces/CreateParam.md) \| [`DeactivateParam`](interfaces/DeactivateParam.md) \| [`RemoveControllersParam`](interfaces/RemoveControllersParam.md) \| [`RemoveKeysParam`](interfaces/RemoveKeysParam.md) \| [`RemoveServiceEndpointParam`](interfaces/RemoveServiceEndpointParam.md)

#### Defined in

[packages/lisk-decentralized-identifier/src/types/client.ts:31](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/client.ts#L31)

---

### DeactivateEventData

Ƭ **DeactivateEventData**: [`DeactivateParam`](interfaces/DeactivateParam.md)

#### Defined in

[packages/lisk-decentralized-identifier/src/types/events/deactivate_event.ts:3](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/events/deactivate_event.ts#L3)

---

### DecodedTransactionJSON

Ƭ **DecodedTransactionJSON**<`T`\>: `Omit`<`TransactionJSON`, `"params"`\> & { `params`: `T` }

#### Type parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `T`  | `Record`<`string`, `unknown`\> |

#### Defined in

[packages/lisk-decentralized-identifier/src/types/client.ts:76](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/client.ts#L76)

---

### DocumentLoader

Ƭ **DocumentLoader**: (`url`: `string`) => `Promise`<[`DocumentLoaderResult`](interfaces/DocumentLoaderResult.md)\>

#### Type declaration

▸ (`url`): `Promise`<[`DocumentLoaderResult`](interfaces/DocumentLoaderResult.md)\>

##### Parameters

| Name  | Type     |
| :---- | :------- |
| `url` | `string` |

##### Returns

`Promise`<[`DocumentLoaderResult`](interfaces/DocumentLoaderResult.md)\>

#### Defined in

[packages/lisk-decentralized-identifier/src/types/resolver.ts:16](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/resolver.ts#L16)

---

### DocumentStoreData

Ƭ **DocumentStoreData**: [`DidDocument`](interfaces/DidDocument.md)

#### Defined in

[packages/lisk-decentralized-identifier/src/types/stores/document.ts:3](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/stores/document.ts#L3)

---

### KeyAgreement

Ƭ **KeyAgreement**: [`VerificationMethod`](interfaces/VerificationMethod.md) & { `privateKeyMultibase?`: `string` }

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:18](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L18)

---

### PayloadWithSignature

Ƭ **PayloadWithSignature**: `AddControllersSignaturePayload` \| `AddKeysSignaturePayload` \| `AddServiceEndpointSignaturePayload` \| `DeactivateSignaturePayload` \| `RemoveControllersSignaturePayload` \| `RemoveKeysSignaturePayload` \| `RemoveServiceEndpointSignaturePayload`

#### Defined in

[packages/lisk-decentralized-identifier/src/types/client.ts:53](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/client.ts#L53)

---

### RemoveControllersEventData

Ƭ **RemoveControllersEventData**: [`RemoveControllersParam`](interfaces/RemoveControllersParam.md)

#### Defined in

[packages/lisk-decentralized-identifier/src/types/events/remove_controllers_event.ts:3](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/events/remove_controllers_event.ts#L3)

---

### RemoveKeysEventData

Ƭ **RemoveKeysEventData**: [`RemoveKeysParam`](interfaces/RemoveKeysParam.md)

#### Defined in

[packages/lisk-decentralized-identifier/src/types/events/remove_keys_event.ts:3](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/events/remove_keys_event.ts#L3)

---

### RemoveServiceEndpointEventData

Ƭ **RemoveServiceEndpointEventData**: [`RemoveServiceEndpointParam`](interfaces/RemoveServiceEndpointParam.md)

#### Defined in

[packages/lisk-decentralized-identifier/src/types/events/remove_service_endpoint_event.ts:3](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/events/remove_service_endpoint_event.ts#L3)

---

### VerificationRelationship

Ƭ **VerificationRelationship**: `"authentication"` \| `"assertionMethod"` \| `"capabilityInvocation"` \| `"keyAgreement"`

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:9](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L9)

---

### WriteableSchema

Ƭ **WriteableSchema**: `Writeable`<`Schema`\>

#### Defined in

[packages/lisk-decentralized-identifier/src/types/client.ts:41](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/types/client.ts#L41)

## Variables

### default

• **default**: `Object`

#### Type declaration

| Name                         | Type                                                                                                                                                                                                                                                                                                      |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client`                     | [`client`](namespaces/client.md)                                                                                                                                                                                                                                                                          |
| `cryptography`               | [`cryptography`](namespaces/cryptography.md)                                                                                                                                                                                                                                                              |
| `resolver`                   | [`resolver`](namespaces/resolver.md)                                                                                                                                                                                                                                                                      |
| `utils`                      | [`utils`](namespaces/utils.md)                                                                                                                                                                                                                                                                            |
| `getAddressDIDFromPublicKey` | (`chainspace`: `string`, `publicKey`: `Buffer`) => `string`                                                                                                                                                                                                                                               |
| `getDIDDocument`             | (`did`: `string`, `options`: [`CreateResolverParam`](modules.md#createresolverparam)) => `Promise`<[`DidDocument`](interfaces/DidDocument.md) \| `undefined`\>                                                                                                                                            |
| `parseDIDComponent`          | (`did`: `string`) => { `chainspace`: `any` ; `did`: `string` ; `fragment`: `any` = parsedDID.fragment; `method`: `any` = parsedDID.method; `namespace`: `string` ; `path`: `any` = parsedDID.path; `query`: `any` = parsedDID.query; `scheme`: `string` = 'did'; `uniqueId`: `string` ; `uri`: `string` } |

#### Defined in

[packages/lisk-decentralized-identifier/src/index.ts:15](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/index.ts#L15)

## Functions

### getAddressDIDFromPublicKey

▸ **getAddressDIDFromPublicKey**(`chainspace`, `publicKey`): `string`

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `chainspace` | `string` |
| `publicKey`  | `Buffer` |

#### Returns

`string`

#### Defined in

[packages/lisk-decentralized-identifier/src/did.ts:59](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/did.ts#L59)

---

### getDIDDocument

▸ **getDIDDocument**(`did`, `options`): `Promise`<[`DidDocument`](interfaces/DidDocument.md) \| `undefined`\>

#### Parameters

| Name      | Type                                                    |
| :-------- | :------------------------------------------------------ |
| `did`     | `string`                                                |
| `options` | [`CreateResolverParam`](modules.md#createresolverparam) |

#### Returns

`Promise`<[`DidDocument`](interfaces/DidDocument.md) \| `undefined`\>

#### Defined in

[packages/lisk-decentralized-identifier/src/did.ts:67](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/did.ts#L67)

---

### parseDIDComponent

▸ **parseDIDComponent**(`did`): `Object`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `did` | `string` |

#### Returns

`Object`

| Name         | Type     |
| :----------- | :------- |
| `chainspace` | `any`    |
| `did`        | `string` |
| `fragment`   | `any`    |
| `method`     | `any`    |
| `namespace`  | `string` |
| `path`       | `any`    |
| `query`      | `any`    |
| `scheme`     | `string` |
| `uniqueId`   | `string` |
| `uri`        | `string` |

#### Defined in

[packages/lisk-decentralized-identifier/src/did.ts:9](https://github.com/aldhosutra/lisk-did/blob/37c055c/packages/lisk-decentralized-identifier/src/did.ts#L9)
