---
id: 'codec'
title: 'Namespace: codec'
sidebar_label: 'codec'
sidebar_position: 0
custom_edit_url: null
---

## Functions

### decodeCredential

▸ **decodeCredential**(`serializedVC`): [`VerifiableCredential`](../modules.md#verifiablecredential)

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `serializedVC` | `Buffer` |

#### Returns

[`VerifiableCredential`](../modules.md#verifiablecredential)

#### Defined in

[klayr-verifiable-credentials/src/codec/credentials.ts:12](https://github.com/aldhosutra/klayr-did/blob/8db4b95/packages/klayr-verifiable-credentials/src/codec/credentials.ts#L12)

---

### decodePresentation

▸ **decodePresentation**(`serializedVP`): [`VerifiablePresentation`](../modules.md#verifiablepresentation)

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `serializedVP` | `Buffer` |

#### Returns

[`VerifiablePresentation`](../modules.md#verifiablepresentation)

#### Defined in

[klayr-verifiable-credentials/src/codec/presentation.ts:12](https://github.com/aldhosutra/klayr-did/blob/8db4b95/packages/klayr-verifiable-credentials/src/codec/presentation.ts#L12)

---

### decodeProof

▸ **decodeProof**(`proofBuffer`): [`Proof`](../interfaces/Proof.md)

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `proofBuffer` | `Buffer` |

#### Returns

[`Proof`](../interfaces/Proof.md)

#### Defined in

[klayr-verifiable-credentials/src/codec/proof.ts:38](https://github.com/aldhosutra/klayr-did/blob/8db4b95/packages/klayr-verifiable-credentials/src/codec/proof.ts#L38)

---

### encodeCredential

▸ **encodeCredential**(`unserializedVC`): `Buffer`

#### Parameters

| Name             | Type                                                         |
| :--------------- | :----------------------------------------------------------- |
| `unserializedVC` | [`VerifiableCredential`](../modules.md#verifiablecredential) |

#### Returns

`Buffer`

#### Defined in

[klayr-verifiable-credentials/src/codec/credentials.ts:6](https://github.com/aldhosutra/klayr-did/blob/8db4b95/packages/klayr-verifiable-credentials/src/codec/credentials.ts#L6)

---

### encodePresentation

▸ **encodePresentation**(`unserializedVP`): `Buffer`

#### Parameters

| Name             | Type                                                             |
| :--------------- | :--------------------------------------------------------------- |
| `unserializedVP` | [`VerifiablePresentation`](../modules.md#verifiablepresentation) |

#### Returns

`Buffer`

#### Defined in

[klayr-verifiable-credentials/src/codec/presentation.ts:6](https://github.com/aldhosutra/klayr-did/blob/8db4b95/packages/klayr-verifiable-credentials/src/codec/presentation.ts#L6)

---

### encodeProof

▸ **encodeProof**(`proof`): `Buffer`

#### Parameters

| Name    | Type                              |
| :------ | :-------------------------------- |
| `proof` | [`Proof`](../interfaces/Proof.md) |

#### Returns

`Buffer`

#### Defined in

[klayr-verifiable-credentials/src/codec/proof.ts:33](https://github.com/aldhosutra/klayr-did/blob/8db4b95/packages/klayr-verifiable-credentials/src/codec/proof.ts#L33)
