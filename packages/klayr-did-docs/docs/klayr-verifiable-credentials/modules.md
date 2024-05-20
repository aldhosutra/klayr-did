---
id: "modules"
title: "@klayr-did/klayr-verifiable-credentials"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [codec](namespaces/codec.md)
- [documentLoader](namespaces/documentLoader.md)

## Interfaces

- [Proof](interfaces/Proof.md)
- [VCVerificationResult](interfaces/VCVerificationResult.md)
- [VPVerificationResult](interfaces/VPVerificationResult.md)
- [VerificationKey](interfaces/VerificationKey.md)

## Type Aliases

### DocumentLoader

Ƭ **DocumentLoader**: `IDocumentLoader`

#### Defined in

[klayr-verifiable-credentials/src/types.ts:13](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-verifiable-credentials/src/types.ts#L13)

___

### VerifiableCredential

Ƭ **VerifiableCredential**: `Partial`<`VCDIVerifiableCredential`\> & { `@context`: `VCDIVerifiableCredential`[``"@context"``] ; `credentialSubject`: `VCDIVerifiableCredential`[``"credentialSubject"``] ; `type`: `VCDIVerifiableCredential`[``"type"``]  }

#### Defined in

[klayr-verifiable-credentials/src/types.ts:20](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-verifiable-credentials/src/types.ts#L20)

___

### VerifiablePresentation

Ƭ **VerifiablePresentation**: `TVerifiablePresentation` & { `verifiableCredential?`: [`VerifiableCredential`](modules.md#verifiablecredential) \| [`VerifiableCredential`](modules.md#verifiablecredential)[]  }

#### Defined in

[klayr-verifiable-credentials/src/types.ts:26](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-verifiable-credentials/src/types.ts#L26)

## Functions

### issueCredential

▸ **issueCredential**(`credential`, `privateKey`, `options`): `Promise`<[`VerifiableCredential`](modules.md#verifiablecredential)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`VerifiableCredential`](modules.md#verifiablecredential) |
| `privateKey` | `Buffer` |
| `options` | `ClientOptions` |

#### Returns

`Promise`<[`VerifiableCredential`](modules.md#verifiablecredential)\>

#### Defined in

[klayr-verifiable-credentials/src/credentials/credentials.ts:8](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-verifiable-credentials/src/credentials/credentials.ts#L8)

___

### issuePresentation

▸ **issuePresentation**(`verifiableCredentialsList`, `holderDid`, `privateKey`, `challenge`, `options`): `Promise`<[`VerifiablePresentation`](modules.md#verifiablepresentation)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `verifiableCredentialsList` | [`VerifiableCredential`](modules.md#verifiablecredential)[] |
| `holderDid` | `string` |
| `privateKey` | `Buffer` |
| `challenge` | `string` |
| `options` | `ClientOptions` |

#### Returns

`Promise`<[`VerifiablePresentation`](modules.md#verifiablepresentation)\>

#### Defined in

[klayr-verifiable-credentials/src/credentials/presentation.ts:8](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-verifiable-credentials/src/credentials/presentation.ts#L8)

___

### verifyCredential

▸ **verifyCredential**(`credential`, `publicKey`, `options`): `Promise`<[`VCVerificationResult`](interfaces/VCVerificationResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`VerifiableCredential`](modules.md#verifiablecredential) |
| `publicKey` | `Buffer` |
| `options` | `ClientOptions` |

#### Returns

`Promise`<[`VCVerificationResult`](interfaces/VCVerificationResult.md)\>

#### Defined in

[klayr-verifiable-credentials/src/credentials/credentials.ts:47](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-verifiable-credentials/src/credentials/credentials.ts#L47)

___

### verifyPresentation

▸ **verifyPresentation**(`presentation`, `publicKey`, `options`): `Promise`<[`VPVerificationResult`](interfaces/VPVerificationResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presentation` | [`VerifiablePresentation`](modules.md#verifiablepresentation) |
| `publicKey` | `Buffer` |
| `options` | `ClientOptions` |

#### Returns

`Promise`<[`VPVerificationResult`](interfaces/VPVerificationResult.md)\>

#### Defined in

[klayr-verifiable-credentials/src/credentials/presentation.ts:52](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-verifiable-credentials/src/credentials/presentation.ts#L52)
