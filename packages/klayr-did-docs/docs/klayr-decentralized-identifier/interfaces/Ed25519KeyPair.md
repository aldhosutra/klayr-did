---
id: "Ed25519KeyPair"
title: "Interface: Ed25519KeyPair"
sidebar_label: "Ed25519KeyPair"
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

[packages/klayr-decentralized-identifier/src/types/cryptography.ts:15](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L15)

___

### fingerprint

• `Optional` **fingerprint**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

[packages/klayr-decentralized-identifier/src/types/cryptography.ts:23](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L23)

___

### id

• `Optional` **id**: `string`

#### Inherited from

Partial.id

#### Defined in

[packages/klayr-decentralized-identifier/src/types/cryptography.ts:13](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L13)

___

### privateKeyMultibase

• `Optional` **privateKeyMultibase**: `string`

#### Inherited from

Partial.privateKeyMultibase

#### Defined in

[packages/klayr-decentralized-identifier/src/types/cryptography.ts:19](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L19)

___

### publicKeyMultibase

• `Optional` **publicKeyMultibase**: `string`

#### Inherited from

Partial.publicKeyMultibase

#### Defined in

[packages/klayr-decentralized-identifier/src/types/cryptography.ts:16](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L16)

___

### type

• `Optional` **type**: ``"Ed25519VerificationKey2020"``

#### Overrides

Partial.type

#### Defined in

[packages/klayr-decentralized-identifier/src/types/cryptography.ts:22](https://github.com/aldhosutra/klayr-did/blob/4de9da3/packages/klayr-decentralized-identifier/src/types/cryptography.ts#L22)
