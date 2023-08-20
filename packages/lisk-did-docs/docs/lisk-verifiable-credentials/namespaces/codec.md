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

[lisk-verifiable-credentials/src/codec/credentials.ts:10](https://github.com/aldhosutra/lisk-did/blob/0afbaf5/packages/lisk-verifiable-credentials/src/codec/credentials.ts#L10)

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

[lisk-verifiable-credentials/src/codec/presentation.ts:10](https://github.com/aldhosutra/lisk-did/blob/0afbaf5/packages/lisk-verifiable-credentials/src/codec/presentation.ts#L10)

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

[lisk-verifiable-credentials/src/codec/proof.ts:38](https://github.com/aldhosutra/lisk-did/blob/0afbaf5/packages/lisk-verifiable-credentials/src/codec/proof.ts#L38)

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

[lisk-verifiable-credentials/src/codec/credentials.ts:4](https://github.com/aldhosutra/lisk-did/blob/0afbaf5/packages/lisk-verifiable-credentials/src/codec/credentials.ts#L4)

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

[lisk-verifiable-credentials/src/codec/presentation.ts:4](https://github.com/aldhosutra/lisk-did/blob/0afbaf5/packages/lisk-verifiable-credentials/src/codec/presentation.ts#L4)

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

[lisk-verifiable-credentials/src/codec/proof.ts:33](https://github.com/aldhosutra/lisk-did/blob/0afbaf5/packages/lisk-verifiable-credentials/src/codec/proof.ts#L33)
