---
id: "Ed25519Signature2020"
title: "Interface: Ed25519Signature2020"
sidebar_label: "Ed25519Signature2020"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### LDKeyClass

• **LDKeyClass**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `SUITE_CONTEXT` | ``"https://w3id.org/security/suites/ed25519-2020/v1"`` |
| `suite` | ``"Ed25519VerificationKey2020"`` |

#### Defined in

[packages/klayr-decentralized-identifier/src/types/cryptography.ts:29](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L29)

___

### \_hashCache

• **\_hashCache**: `unknown`

#### Defined in

[packages/klayr-decentralized-identifier/src/types/cryptography.ts:47](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L47)

___

### canonizeOptions

• **canonizeOptions**: `unknown`

#### Defined in

[packages/klayr-decentralized-identifier/src/types/cryptography.ts:45](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L45)

___

### contextUrl

• **contextUrl**: ``"https://w3id.org/security/suites/ed25519-2020/v1"``

#### Defined in

[packages/klayr-decentralized-identifier/src/types/cryptography.ts:33](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L33)

___

### key

• **key**: [`Ed25519KeyPair`](Ed25519KeyPair.md)

#### Defined in

[packages/klayr-decentralized-identifier/src/types/cryptography.ts:36](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L36)

___

### proof

• **proof**: `unknown`

#### Defined in

[packages/klayr-decentralized-identifier/src/types/cryptography.ts:34](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L34)

___

### requiredKeyType

• **requiredKeyType**: ``"Ed25519VerificationKey2020"``

#### Defined in

[packages/klayr-decentralized-identifier/src/types/cryptography.ts:28](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L28)

___

### signer

• **signer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `sign` | (`__namedParameters`: { `data`: `string`  }) => `Promise`<`Buffer`\> |

#### Defined in

[packages/klayr-decentralized-identifier/src/types/cryptography.ts:37](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L37)

___

### type

• **type**: ``"Ed25519Signature2020"``

#### Defined in

[packages/klayr-decentralized-identifier/src/types/cryptography.ts:27](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L27)

___

### useNativeCanonize

• **useNativeCanonize**: `unknown`

#### Defined in

[packages/klayr-decentralized-identifier/src/types/cryptography.ts:46](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L46)

___

### verificationMethod

• **verificationMethod**: `string`

#### Defined in

[packages/klayr-decentralized-identifier/src/types/cryptography.ts:35](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L35)

___

### verifier

• **verifier**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `verify` | (`__namedParameters`: { `data`: `string` ; `signature`: `Buffer`  }) => `Promise`<`boolean`\> |

#### Defined in

[packages/klayr-decentralized-identifier/src/types/cryptography.ts:41](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L41)
