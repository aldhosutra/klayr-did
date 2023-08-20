---
id: 'did.client.utils'
title: 'Namespace: utils'
sidebar_label: 'did.client.utils'
custom_edit_url: null
---

[did](did.md).[client](did.client.md).utils

## Functions

### createSignatureChallenge

▸ **createSignatureChallenge**(`payload`): `string`

#### Parameters

| Name      | Type                                                  |
| :-------- | :---------------------------------------------------- |
| `payload` | [`PayloadWithSignature`](did.md#payloadwithsignature) |

#### Returns

`string`

#### Defined in

packages/lisk-decentralized-identifier/dist/client/utils/index.d.ts:3

---

### createTransactionSignature

▸ **createTransactionSignature**(`payload`, `privateKey`): `Buffer`

#### Parameters

| Name         | Type                                                  |
| :----------- | :---------------------------------------------------- |
| `payload`    | [`PayloadWithSignature`](did.md#payloadwithsignature) |
| `privateKey` | `Buffer`                                              |

#### Returns

`Buffer`

#### Defined in

packages/lisk-decentralized-identifier/dist/client/utils/index.d.ts:4

---

### validateParams

▸ **validateParams**(`command`, `param`, `chainspace`): `Promise`<`boolean`\>

#### Parameters

| Name         | Type                                                                    |
| :----------- | :---------------------------------------------------------------------- |
| `command`    | [`DIDCommands`](did.md#didcommands)                                     |
| `param`      | [`TransactionPayload`](../interfaces/did.TransactionPayload.md)<`any`\> |
| `chainspace` | `string`                                                                |

#### Returns

`Promise`<`boolean`\>

#### Defined in

packages/lisk-decentralized-identifier/dist/client/utils/validator.d.ts:2

---

### verifyTransactionSignature

▸ **verifyTransactionSignature**(`payload`, `signature`, `publicKey`): `boolean`

#### Parameters

| Name        | Type                                                  |
| :---------- | :---------------------------------------------------- |
| `payload`   | [`PayloadWithSignature`](did.md#payloadwithsignature) |
| `signature` | `Buffer`                                              |
| `publicKey` | `Buffer`                                              |

#### Returns

`boolean`

#### Defined in

packages/lisk-decentralized-identifier/dist/client/utils/index.d.ts:5
