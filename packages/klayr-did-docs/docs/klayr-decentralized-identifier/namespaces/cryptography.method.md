---
id: "cryptography.method"
title: "Namespace: method"
sidebar_label: "cryptography.method"
custom_edit_url: null
---

[cryptography](cryptography.md).method

## Functions

### getVerificationMethod

▸ **getVerificationMethod**(`didDocument`, `options`): `Promise`<[`VerificationMethod`](../interfaces/VerificationMethod.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didDocument` | [`DidDocument`](../interfaces/DidDocument.md) |
| `options` | [`AuthorizationFactors`](../interfaces/AuthorizationFactors.md) |

#### Returns

`Promise`<[`VerificationMethod`](../interfaces/VerificationMethod.md)[]\>

#### Defined in

[packages/klayr-decentralized-identifier/src/cryptography/method.ts:20](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-decentralized-identifier/src/cryptography/method.ts#L20)

___

### getVerificationRelationship

▸ **getVerificationRelationship**(`didDocument`, `options`): `Promise`<[`VerificationRelationship`](../modules.md#verificationrelationship)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `didDocument` | [`DidDocument`](../interfaces/DidDocument.md) |
| `options` | [`AuthorizationFactors`](../interfaces/AuthorizationFactors.md) |

#### Returns

`Promise`<[`VerificationRelationship`](../modules.md#verificationrelationship)[]\>

#### Defined in

[packages/klayr-decentralized-identifier/src/cryptography/method.ts:120](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-decentralized-identifier/src/cryptography/method.ts#L120)
