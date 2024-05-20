---
id: "cryptography.key"
title: "Namespace: key"
sidebar_label: "cryptography.key"
custom_edit_url: null
---

[cryptography](cryptography.md).key

## Functions

### createEd25519KeyPair

▸ **createEd25519KeyPair**(`options`): `Promise`<`Ed25519VerificationKey2020`\>

Creates an Ed25519 Key Pair from an existing serialized key pair.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `SerializedKeyPair` | Key pair options (see constructor). |

#### Returns

`Promise`<`Ed25519VerificationKey2020`\>

An Ed25519 Key Pair.

**`Example`**

```ts
> const keyPair = await Ed25519VerificationKey2020.from({
controller: 'did:ex:1234',
type: 'Ed25519VerificationKey2020',
publicKeyMultibase,
privateKeyMultibase
});
```

#### Defined in

node_modules/@digitalcredentials/ed25519-verification-key-2020/dist/Ed25519VerificationKey2020.d.ts:52

___

### createX25519KeyPair

▸ **createX25519KeyPair**(`keyPair`): `Promise`<`Ed25519VerificationKey2020`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPair` | `SerializedKeyPair` |

#### Returns

`Promise`<`Ed25519VerificationKey2020`\>

#### Defined in

[packages/klayr-decentralized-identifier/src/cryptography/key.ts:22](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-decentralized-identifier/src/cryptography/key.ts#L22)

___

### generateEd25519KeyPair

▸ **generateEd25519KeyPair**(`options?`): `Promise`<`Ed25519VerificationKey2020`\>

Generates a KeyPair with an optional deterministic seed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `GenerateKeyPairOptions` | Options hashmap. |

#### Returns

`Promise`<`Ed25519VerificationKey2020`\>

Resolves with generated
  public/private key pair.

#### Defined in

node_modules/@digitalcredentials/ed25519-verification-key-2020/dist/Ed25519VerificationKey2020.d.ts:91

___

### generateX25519KeyPair

▸ **generateX25519KeyPair**(): `Promise`<`Ed25519VerificationKey2020`\>

#### Returns

`Promise`<`Ed25519VerificationKey2020`\>

#### Defined in

[packages/klayr-decentralized-identifier/src/cryptography/key.ts:27](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-decentralized-identifier/src/cryptography/key.ts#L27)

___

### getEd25519SignatureSuite

▸ **getEd25519SignatureSuite**(`param`): `Promise`<[`Ed25519Signature2020`](../interfaces/Ed25519Signature2020.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `GetSuiteParam` |

#### Returns

`Promise`<[`Ed25519Signature2020`](../interfaces/Ed25519Signature2020.md)\>

#### Defined in

[packages/klayr-decentralized-identifier/src/cryptography/key.ts:32](https://github.com/aldhosutra/klayr-did/blob/515766d/packages/klayr-decentralized-identifier/src/cryptography/key.ts#L32)
