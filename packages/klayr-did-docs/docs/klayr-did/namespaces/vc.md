---
id: "vc"
title: "Namespace: vc"
sidebar_label: "vc"
sidebar_position: 0
custom_edit_url: null
---

## Namespaces

- [codec](vc.codec.md)
- [documentLoader](vc.documentLoader.md)

## Interfaces

- [Proof](../interfaces/vc.Proof.md)
- [VCVerificationResult](../interfaces/vc.VCVerificationResult.md)
- [VPVerificationResult](../interfaces/vc.VPVerificationResult.md)
- [VerificationKey](../interfaces/vc.VerificationKey.md)

## Type Aliases

### DocumentLoader

Ƭ **DocumentLoader**: [`DocumentLoader`](did.md#documentloader)

#### Defined in

packages/klayr-verifiable-credentials/dist/types.d.ts:4

___

### VerifiableCredential

Ƭ **VerifiableCredential**: `Partial`<`VCDIVerifiableCredential`\> & { `@context`: `VCDIVerifiableCredential`[``"@context"``] ; `credentialSubject`: `VCDIVerifiableCredential`[``"credentialSubject"``] ; `type`: `VCDIVerifiableCredential`[``"type"``]  }

#### Defined in

packages/klayr-verifiable-credentials/dist/types.d.ts:9

___

### VerifiablePresentation

Ƭ **VerifiablePresentation**: `TVerifiablePresentation` & { `verifiableCredential?`: [`VerifiableCredential`](vc.md#verifiablecredential) \| [`VerifiableCredential`](vc.md#verifiablecredential)[]  }

#### Defined in

packages/klayr-verifiable-credentials/dist/types.d.ts:14

## Functions

### issueCredential

▸ **issueCredential**(`credential`, `privateKey`, `options`): `Promise`<[`VerifiableCredential`](vc.md#verifiablecredential)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`VerifiableCredential`](vc.md#verifiablecredential) |
| `privateKey` | `Buffer` |
| `options` | `ClientOptions` |

#### Returns

`Promise`<[`VerifiableCredential`](vc.md#verifiablecredential)\>

#### Defined in

packages/klayr-verifiable-credentials/dist/credentials/credentials.d.ts:4

___

### issuePresentation

▸ **issuePresentation**(`verifiableCredentialsList`, `holderDid`, `privateKey`, `challenge`, `options`): `Promise`<[`VerifiablePresentation`](vc.md#verifiablepresentation)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `verifiableCredentialsList` | [`VerifiableCredential`](vc.md#verifiablecredential)[] |
| `holderDid` | `string` |
| `privateKey` | `Buffer` |
| `challenge` | `string` |
| `options` | `ClientOptions` |

#### Returns

`Promise`<[`VerifiablePresentation`](vc.md#verifiablepresentation)\>

#### Defined in

packages/klayr-verifiable-credentials/dist/credentials/presentation.d.ts:4

___

### verifyCredential

▸ **verifyCredential**(`credential`, `publicKey`, `options`): `Promise`<[`VCVerificationResult`](../interfaces/vc.VCVerificationResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`VerifiableCredential`](vc.md#verifiablecredential) |
| `publicKey` | `Buffer` |
| `options` | `ClientOptions` |

#### Returns

`Promise`<[`VCVerificationResult`](../interfaces/vc.VCVerificationResult.md)\>

#### Defined in

packages/klayr-verifiable-credentials/dist/credentials/credentials.d.ts:5

___

### verifyPresentation

▸ **verifyPresentation**(`presentation`, `publicKey`, `options`): `Promise`<[`VPVerificationResult`](../interfaces/vc.VPVerificationResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentation` | [`VerifiablePresentation`](vc.md#verifiablepresentation) |
| `publicKey` | `Buffer` |
| `options` | `ClientOptions` |

#### Returns

`Promise`<[`VPVerificationResult`](../interfaces/vc.VPVerificationResult.md)\>

#### Defined in

packages/klayr-verifiable-credentials/dist/credentials/presentation.d.ts:5
