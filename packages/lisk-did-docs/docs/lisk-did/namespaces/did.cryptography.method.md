---
id: 'did.cryptography.method'
title: 'Namespace: method'
sidebar_label: 'did.cryptography.method'
custom_edit_url: null
---

[did](did.md).[cryptography](did.cryptography.md).method

## Functions

### getVerificationMethod

▸ **getVerificationMethod**(`didDocument`, `options`): `Promise`<[`VerificationMethod`](../interfaces/did.VerificationMethod.md)[]\>

#### Parameters

| Name          | Type                                                                |
| :------------ | :------------------------------------------------------------------ |
| `didDocument` | [`DidDocument`](../interfaces/did.DidDocument.md)                   |
| `options`     | [`AuthorizationFactors`](../interfaces/did.AuthorizationFactors.md) |

#### Returns

`Promise`<[`VerificationMethod`](../interfaces/did.VerificationMethod.md)[]\>

#### Defined in

packages/lisk-decentralized-identifier/dist/cryptography/verification.d.ts:3

---

### getVerificationRelationship

▸ **getVerificationRelationship**(`didDocument`, `options`): `Promise`<[`VerificationRelationship`](did.md#verificationrelationship)[]\>

#### Parameters

| Name          | Type                                                                |
| :------------ | :------------------------------------------------------------------ |
| `didDocument` | [`DidDocument`](../interfaces/did.DidDocument.md)                   |
| `options`     | [`AuthorizationFactors`](../interfaces/did.AuthorizationFactors.md) |

#### Returns

`Promise`<[`VerificationRelationship`](did.md#verificationrelationship)[]\>

#### Defined in

packages/lisk-decentralized-identifier/dist/cryptography/verification.d.ts:4
