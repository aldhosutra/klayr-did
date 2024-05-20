---
id: 'vc.codec'
title: 'Namespace: codec'
sidebar_label: 'vc.codec'
custom_edit_url: null
---

[vc](vc.md).codec

## Functions

### decodeCredential

▸ **decodeCredential**(`serializedVC`): [`VerifiableCredential`](vc.md#verifiablecredential)

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `serializedVC` | `Buffer` |

#### Returns

[`VerifiableCredential`](vc.md#verifiablecredential)

#### Defined in

packages/klayr-verifiable-credentials/dist/codec/credentials.d.ts:4

---

### decodePresentation

▸ **decodePresentation**(`serializedVP`): [`VerifiablePresentation`](vc.md#verifiablepresentation)

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `serializedVP` | `Buffer` |

#### Returns

[`VerifiablePresentation`](vc.md#verifiablepresentation)

#### Defined in

packages/klayr-verifiable-credentials/dist/codec/presentation.d.ts:4

---

### decodeProof

▸ **decodeProof**(`proofBuffer`): [`Proof`](../interfaces/vc.Proof.md)

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `proofBuffer` | `Buffer` |

#### Returns

[`Proof`](../interfaces/vc.Proof.md)

#### Defined in

packages/klayr-verifiable-credentials/dist/codec/proof.d.ts:4

---

### encodeCredential

▸ **encodeCredential**(`unserializedVC`): `Buffer`

#### Parameters

| Name             | Type                                                 |
| :--------------- | :--------------------------------------------------- |
| `unserializedVC` | [`VerifiableCredential`](vc.md#verifiablecredential) |

#### Returns

`Buffer`

#### Defined in

packages/klayr-verifiable-credentials/dist/codec/credentials.d.ts:3

---

### encodePresentation

▸ **encodePresentation**(`unserializedVP`): `Buffer`

#### Parameters

| Name             | Type                                                     |
| :--------------- | :------------------------------------------------------- |
| `unserializedVP` | [`VerifiablePresentation`](vc.md#verifiablepresentation) |

#### Returns

`Buffer`

#### Defined in

packages/klayr-verifiable-credentials/dist/codec/presentation.d.ts:3

---

### encodeProof

▸ **encodeProof**(`proof`): `Buffer`

#### Parameters

| Name    | Type                                 |
| :------ | :----------------------------------- |
| `proof` | [`Proof`](../interfaces/vc.Proof.md) |

#### Returns

`Buffer`

#### Defined in

packages/klayr-verifiable-credentials/dist/codec/proof.d.ts:3
