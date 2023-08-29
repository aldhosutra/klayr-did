---
id: 'CipherInterface'
title: 'Interface: CipherInterface'
sidebar_label: 'CipherInterface'
sidebar_position: 0
custom_edit_url: null
---

## Properties

### decrypt

• **decrypt**: (`__namedParameters`: { `jwe`: [`JWEDocument`](JWEDocument.md) ; `keyAgreementKey`: [`KeyAgreement`](../modules.md#keyagreement) }) => `Promise`<`string`\>

#### Type declaration

▸ (`«destructured»`): `Promise`<`string`\>

##### Parameters

| Name                | Type                                         |
| :------------------ | :------------------------------------------- |
| `«destructured»`    | `Object`                                     |
| › `jwe`             | [`JWEDocument`](JWEDocument.md)              |
| › `keyAgreementKey` | [`KeyAgreement`](../modules.md#keyagreement) |

##### Returns

`Promise`<`string`\>

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:80](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L80)

---

### encrypt

• **encrypt**: (`__namedParameters`: { `data`: `string` ; `keyResolver`: (`url`: `string`) => `Promise`<`any`\> ; `recipients`: { `header`: { `alg`: `string` ; `kid`: `string` } }[] }) => `Promise`<[`JWEDocument`](JWEDocument.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`JWEDocument`](JWEDocument.md)\>

##### Parameters

| Name             | Type                                                  |
| :--------------- | :---------------------------------------------------- |
| `«destructured»` | `Object`                                              |
| › `data`         | `string`                                              |
| › `keyResolver`  | (`url`: `string`) => `Promise`<`any`\>                |
| › `recipients`   | { `header`: { `alg`: `string` ; `kid`: `string` } }[] |

##### Returns

`Promise`<[`JWEDocument`](JWEDocument.md)\>

#### Defined in

[packages/lisk-decentralized-identifier/src/types/cryptography.ts:71](https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L71)
