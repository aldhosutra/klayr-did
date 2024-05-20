---
id: "VPVerificationResult"
title: "Interface: VPVerificationResult"
sidebar_label: "VPVerificationResult"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### credentialResults

• **credentialResults**: { `credentialId`: `string` ; `results`: [`VCVerificationResult`](VCVerificationResult.md)[] ; `verified`: `boolean`  }[]

#### Defined in

[klayr-verifiable-credentials/src/types.ts:52](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-verifiable-credentials/src/types.ts#L52)

___

### presentationResult

• **presentationResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `results` | { `proof`: [`Proof`](Proof.md) & { `@context`: `string`[]  } ; `purposeResult`: { `controller`: `Omit`<`DidDocument`, ``"controller"`` \| ``"service"``\> ; `valid`: `boolean`  } ; `verificationMethod`: `VerificationMethod` ; `verified`: `boolean`  }[] |
| `verified` | `boolean` |

#### Defined in

[klayr-verifiable-credentials/src/types.ts:57](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-verifiable-credentials/src/types.ts#L57)

___

### verified

• **verified**: `boolean`

#### Defined in

[klayr-verifiable-credentials/src/types.ts:51](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-verifiable-credentials/src/types.ts#L51)
