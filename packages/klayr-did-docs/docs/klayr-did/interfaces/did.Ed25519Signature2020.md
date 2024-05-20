---
id: "did.Ed25519Signature2020"
title: "Interface: Ed25519Signature2020"
sidebar_label: "did.Ed25519Signature2020"
custom_edit_url: null
---

[did](../namespaces/did.md).Ed25519Signature2020

## Properties

### LDKeyClass

• **LDKeyClass**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `SUITE_CONTEXT` | ``"https://w3id.org/security/suites/ed25519-2020/v1"`` |
| `suite` | ``"Ed25519VerificationKey2020"`` |

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:26

___

### \_hashCache

• **\_hashCache**: `unknown`

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:49

___

### canonizeOptions

• **canonizeOptions**: `unknown`

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:47

___

### contextUrl

• **contextUrl**: ``"https://w3id.org/security/suites/ed25519-2020/v1"``

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:30

___

### key

• **key**: [`Ed25519KeyPair`](did.Ed25519KeyPair.md)

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:33

___

### proof

• **proof**: `unknown`

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:31

___

### requiredKeyType

• **requiredKeyType**: ``"Ed25519VerificationKey2020"``

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:25

___

### signer

• **signer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `sign` | (`__namedParameters`: { `data`: `string`  }) => `Promise`<`Buffer`\> |

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:34

___

### type

• **type**: ``"Ed25519Signature2020"``

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:24

___

### useNativeCanonize

• **useNativeCanonize**: `unknown`

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:48

___

### verificationMethod

• **verificationMethod**: `string`

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:32

___

### verifier

• **verifier**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `verify` | (`__namedParameters`: { `data`: `string` ; `signature`: `Buffer`  }) => `Promise`<`boolean`\> |

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:40
