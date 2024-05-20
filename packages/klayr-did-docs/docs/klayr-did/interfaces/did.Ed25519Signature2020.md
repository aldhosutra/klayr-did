---
id: 'did.Ed25519Signature2020'
title: 'Interface: Ed25519Signature2020'
sidebar_label: 'did.Ed25519Signature2020'
custom_edit_url: null
---

[did](../namespaces/did.md).Ed25519Signature2020

## Properties

### LDKeyClass

• **LDKeyClass**: `Object`

#### Type declaration

| Name            | Type                                                 |
| :-------------- | :--------------------------------------------------- |
| `SUITE_CONTEXT` | `"https://w3id.org/security/suites/ed25519-2020/v1"` |
| `suite`         | `"Ed25519VerificationKey2020"`                       |

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:26

---

### \_hashCache

• **\_hashCache**: `unknown`

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:49

---

### canonizeOptions

• **canonizeOptions**: `unknown`

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:47

---

### contextUrl

• **contextUrl**: `"https://w3id.org/security/suites/ed25519-2020/v1"`

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:30

---

### key

• **key**: [`Ed25519KeyPair`](did.Ed25519KeyPair.md)

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:33

---

### proof

• **proof**: `unknown`

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:31

---

### requiredKeyType

• **requiredKeyType**: `"Ed25519VerificationKey2020"`

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:25

---

### signer

• **signer**: `Object`

#### Type declaration

| Name   | Type                                                                |
| :----- | :------------------------------------------------------------------ |
| `id`   | `string`                                                            |
| `sign` | (`__namedParameters`: { `data`: `string` }) => `Promise`<`Buffer`\> |

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:34

---

### type

• **type**: `"Ed25519Signature2020"`

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:24

---

### useNativeCanonize

• **useNativeCanonize**: `unknown`

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:48

---

### verificationMethod

• **verificationMethod**: `string`

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:32

---

### verifier

• **verifier**: `Object`

#### Type declaration

| Name     | Type                                                                                         |
| :------- | :------------------------------------------------------------------------------------------- |
| `id`     | `string`                                                                                     |
| `verify` | (`__namedParameters`: { `data`: `string` ; `signature`: `Buffer` }) => `Promise`<`boolean`\> |

#### Defined in

packages/klayr-decentralized-identifier/dist/types/cryptography.d.ts:40
