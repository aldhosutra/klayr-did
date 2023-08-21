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

| Name          | Type                                          |
| :------------ | :-------------------------------------------- |
| `didDocument` | [`DidDocument`](../interfaces/DidDocument.md) |
| `options`     | `VerificationFilterOptions`                   |

#### Returns

`Promise`<[`VerificationMethod`](../interfaces/VerificationMethod.md)[]\>

#### Defined in

[packages/lisk-decentralized-identifier/src/cryptography/verification.ts:31](https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-decentralized-identifier/src/cryptography/verification.ts#L31)

---

### getVerificationRelationship

▸ **getVerificationRelationship**(`didDocument`, `options`): `Promise`<[`VerificationRelationship`](../modules.md#verificationrelationship)[]\>

#### Parameters

| Name          | Type                                          |
| :------------ | :-------------------------------------------- |
| `didDocument` | [`DidDocument`](../interfaces/DidDocument.md) |
| `options`     | `VerificationFilterOptions`                   |

#### Returns

`Promise`<[`VerificationRelationship`](../modules.md#verificationrelationship)[]\>

#### Defined in

[packages/lisk-decentralized-identifier/src/cryptography/verification.ts:131](https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-decentralized-identifier/src/cryptography/verification.ts#L131)
