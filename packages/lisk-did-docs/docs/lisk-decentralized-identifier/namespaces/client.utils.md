---
id: 'client.utils'
title: 'Namespace: utils'
sidebar_label: 'client.utils'
custom_edit_url: null
---

[client](client.md).utils

## Functions

### createSignatureChallenge

▸ **createSignatureChallenge**(`payload`): `string`

#### Parameters

| Name      | Type                                                         |
| :-------- | :----------------------------------------------------------- |
| `payload` | [`PayloadWithSignature`](../modules.md#payloadwithsignature) |

#### Returns

`string`

#### Defined in

[packages/lisk-decentralized-identifier/src/client/utils/index.ts:5](https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/client/utils/index.ts#L5)

---

### createTransactionSignature

▸ **createTransactionSignature**(`payload`, `privateKey`): `Buffer`

#### Parameters

| Name         | Type                                                         |
| :----------- | :----------------------------------------------------------- |
| `payload`    | [`PayloadWithSignature`](../modules.md#payloadwithsignature) |
| `privateKey` | `Buffer`                                                     |

#### Returns

`Buffer`

#### Defined in

[packages/lisk-decentralized-identifier/src/client/utils/index.ts:10](https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/client/utils/index.ts#L10)

---

### validateParams

▸ **validateParams**(`command`, `param`, `chainspace`): `Promise`<`boolean`\>

#### Parameters

| Name         | Type                                                                |
| :----------- | :------------------------------------------------------------------ |
| `command`    | [`DIDCommands`](../modules.md#didcommands)                          |
| `param`      | [`TransactionPayload`](../interfaces/TransactionPayload.md)<`any`\> |
| `chainspace` | `string`                                                            |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[packages/lisk-decentralized-identifier/src/client/utils/validator.ts:18](https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/client/utils/validator.ts#L18)

---

### verifyTransactionSignature

▸ **verifyTransactionSignature**(`payload`, `signature`, `publicKey`): `boolean`

#### Parameters

| Name        | Type                                                         |
| :---------- | :----------------------------------------------------------- |
| `payload`   | [`PayloadWithSignature`](../modules.md#payloadwithsignature) |
| `signature` | `Buffer`                                                     |
| `publicKey` | `Buffer`                                                     |

#### Returns

`boolean`

#### Defined in

[packages/lisk-decentralized-identifier/src/client/utils/index.ts:15](https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/client/utils/index.ts#L15)
