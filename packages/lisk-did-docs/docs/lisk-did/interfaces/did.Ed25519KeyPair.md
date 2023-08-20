---
id: 'did.Ed25519KeyPair'
title: 'Interface: Ed25519KeyPair'
sidebar_label: 'did.Ed25519KeyPair'
custom_edit_url: null
---

[did](../namespaces/did.md).Ed25519KeyPair

## Hierarchy

- `Partial`<[`KeyAgreement`](../namespaces/did.md#keyagreement)\>

  ↳ **`Ed25519KeyPair`**

## Properties

### controller

• `Optional` **controller**: `string`

#### Inherited from

Partial.controller

#### Defined in

packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:12

---

### fingerprint

• `Optional` **fingerprint**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:20

---

### id

• `Optional` **id**: `string`

#### Inherited from

Partial.id

#### Defined in

packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:10

---

### privateKeyMultibase

• `Optional` **privateKeyMultibase**: `string`

#### Inherited from

Partial.privateKeyMultibase

#### Defined in

packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:16

---

### publicKeyMultibase

• `Optional` **publicKeyMultibase**: `string`

#### Inherited from

Partial.publicKeyMultibase

#### Defined in

packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:13

---

### type

• `Optional` **type**: `"Ed25519VerificationKey2020"`

#### Overrides

Partial.type

#### Defined in

packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:19
