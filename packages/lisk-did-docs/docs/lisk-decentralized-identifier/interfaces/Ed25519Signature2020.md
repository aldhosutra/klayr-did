---
id: 'Ed25519Signature2020'
title: 'Interface: Ed25519Signature2020'
sidebar_label: 'Ed25519Signature2020'
sidebar_position: 0
custom_edit_url: null
---

## Properties

### LDKeyClass

• **LDKeyClass**: `Object`

#### Type declaration

| Name            | Type                                                 |
| :-------------- | :--------------------------------------------------- |
| `SUITE_CONTEXT` | `"https://w3id.org/security/suites/ed25519-2020/v1"` |
| `suite`         | `"Ed25519VerificationKey2020"`                       |

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:28](https://github.com/aldhosutra/lisk-did/blob/dbe4f6c/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L28)

---

### \_hashCache

• **\_hashCache**: `unknown`

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:46](https://github.com/aldhosutra/lisk-did/blob/dbe4f6c/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L46)

---

### canonizeOptions

• **canonizeOptions**: `unknown`

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:44](https://github.com/aldhosutra/lisk-did/blob/dbe4f6c/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L44)

---

### contextUrl

• **contextUrl**: `"https://w3id.org/security/suites/ed25519-2020/v1"`

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:32](https://github.com/aldhosutra/lisk-did/blob/dbe4f6c/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L32)

---

### key

• **key**: [`Ed25519KeyPair`](Ed25519KeyPair.md)

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:35](https://github.com/aldhosutra/lisk-did/blob/dbe4f6c/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L35)

---

### proof

• **proof**: `unknown`

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:33](https://github.com/aldhosutra/lisk-did/blob/dbe4f6c/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L33)

---

### requiredKeyType

• **requiredKeyType**: `"Ed25519VerificationKey2020"`

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:27](https://github.com/aldhosutra/lisk-did/blob/dbe4f6c/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L27)

---

### signer

• **signer**: `Object`

#### Type declaration

| Name   | Type                                                                |
| :----- | :------------------------------------------------------------------ |
| `id`   | `string`                                                            |
| `sign` | (`__namedParameters`: { `data`: `string` }) => `Promise`<`Buffer`\> |

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:36](https://github.com/aldhosutra/lisk-did/blob/dbe4f6c/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L36)

---

### type

• **type**: `"Ed25519Signature2020"`

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:26](https://github.com/aldhosutra/lisk-did/blob/dbe4f6c/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L26)

---

### useNativeCanonize

• **useNativeCanonize**: `unknown`

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:45](https://github.com/aldhosutra/lisk-did/blob/dbe4f6c/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L45)

---

### verificationMethod

• **verificationMethod**: `string`

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:34](https://github.com/aldhosutra/lisk-did/blob/dbe4f6c/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L34)

---

### verifier

• **verifier**: `Object`

#### Type declaration

| Name     | Type                                                                                         |
| :------- | :------------------------------------------------------------------------------------------- |
| `id`     | `string`                                                                                     |
| `verify` | (`__namedParameters`: { `data`: `string` ; `signature`: `Buffer` }) => `Promise`<`boolean`\> |

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:40](https://github.com/aldhosutra/lisk-did/blob/dbe4f6c/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L40)
