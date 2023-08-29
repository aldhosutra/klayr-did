---
id: 'cryptography.method'
title: 'Namespace: method'
sidebar_label: 'cryptography.method'
custom_edit_url: null
---

[cryptography](cryptography.md).method

## Functions

### getVerificationMethod

▸ **getVerificationMethod**(`didDocument`, `options`): `Promise`<[`VerificationMethod`](../interfaces/VerificationMethod.md)[]\>

#### Parameters

| Name          | Type                                                            |
| :------------ | :-------------------------------------------------------------- |
| `didDocument` | [`DidDocument`](../interfaces/DidDocument.md)                   |
| `options`     | [`AuthorizationFactors`](../interfaces/AuthorizationFactors.md) |

#### Returns

`Promise`<[`VerificationMethod`](../interfaces/VerificationMethod.md)[]\>

#### Defined in

[packages/lisk-decentralized-identifier/src/cryptography/verification.ts:20](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/cryptography/verification.ts#L20)

---

### getVerificationRelationship

▸ **getVerificationRelationship**(`didDocument`, `options`): `Promise`<[`VerificationRelationship`](../modules.md#verificationrelationship)[]\>

#### Parameters

| Name          | Type                                                            |
| :------------ | :-------------------------------------------------------------- |
| `didDocument` | [`DidDocument`](../interfaces/DidDocument.md)                   |
| `options`     | [`AuthorizationFactors`](../interfaces/AuthorizationFactors.md) |

#### Returns

`Promise`<[`VerificationRelationship`](../modules.md#verificationrelationship)[]\>

#### Defined in

[packages/lisk-decentralized-identifier/src/cryptography/verification.ts:120](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/cryptography/verification.ts#L120)
