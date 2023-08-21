---
id: 'Ed25519KeyPair'
title: 'Interface: Ed25519KeyPair'
sidebar_label: 'Ed25519KeyPair'
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Partial`<[`KeyAgreement`](../modules.md#keyagreement)\>

  ↳ **`Ed25519KeyPair`**

## Properties

### controller

• `Optional` **controller**: `string`

#### Inherited from

Partial.controller

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:14](https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L14)

---

### fingerprint

• `Optional` **fingerprint**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:22](https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L22)

---

### id

• `Optional` **id**: `string`

#### Inherited from

Partial.id

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:12](https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L12)

---

### privateKeyMultibase

• `Optional` **privateKeyMultibase**: `string`

#### Inherited from

Partial.privateKeyMultibase

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:18](https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L18)

---

### publicKeyMultibase

• `Optional` **publicKeyMultibase**: `string`

#### Inherited from

Partial.publicKeyMultibase

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:15](https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L15)

---

### type

• `Optional` **type**: `"Ed25519VerificationKey2020"`

#### Overrides

Partial.type

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:21](https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L21)
