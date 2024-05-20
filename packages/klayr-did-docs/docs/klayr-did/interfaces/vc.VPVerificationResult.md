---
id: 'vc.VPVerificationResult'
title: 'Interface: VPVerificationResult'
sidebar_label: 'vc.VPVerificationResult'
custom_edit_url: null
---

[vc](../namespaces/vc.md).VPVerificationResult

## Properties

### credentialResults

• **credentialResults**: { `credentialId`: `string` ; `results`: [`VCVerificationResult`](vc.VCVerificationResult.md)[] ; `verified`: `boolean` }[]

#### Defined in

packages/klayr-verifiable-credentials/dist/types.d.ts:39

---

### presentationResult

• **presentationResult**: `Object`

#### Type declaration

| Name       | Type                                                                                                                                                                                                                                                                                                       |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `results`  | { `proof`: [`Proof`](vc.Proof.md) & { `@context`: `string`[] } ; `purposeResult`: { `controller`: `Omit`<[`DidDocument`](did.DidDocument.md), `"controller"` \| `"service"`\> ; `valid`: `boolean` } ; `verificationMethod`: [`VerificationMethod`](did.VerificationMethod.md) ; `verified`: `boolean` }[] |
| `verified` | `boolean`                                                                                                                                                                                                                                                                                                  |

#### Defined in

packages/klayr-verifiable-credentials/dist/types.d.ts:44

---

### verified

• **verified**: `boolean`

#### Defined in

packages/klayr-verifiable-credentials/dist/types.d.ts:38
