---
id: 'did.CipherInterface'
title: 'Interface: CipherInterface'
sidebar_label: 'did.CipherInterface'
custom_edit_url: null
---

[did](../namespaces/did.md).CipherInterface

## Properties

### decrypt

• **decrypt**: (`__namedParameters`: { `jwe`: [`JWEDocument`](did.JWEDocument.md) ; `keyAgreementKey`: [`KeyAgreement`](../namespaces/did.md#keyagreement) }) => `Promise`<`string`\>

#### Type declaration

▸ (`«destructured»`): `Promise`<`string`\>

##### Parameters

| Name                | Type                                                |
| :------------------ | :-------------------------------------------------- |
| `«destructured»`    | `Object`                                            |
| › `jwe`             | [`JWEDocument`](did.JWEDocument.md)                 |
| › `keyAgreementKey` | [`KeyAgreement`](../namespaces/did.md#keyagreement) |

##### Returns

`Promise`<`string`\>

#### Defined in

packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:81

---

### encrypt

• **encrypt**: (`__namedParameters`: { `data`: `string` ; `keyResolver`: (`url`: `string`) => `Promise`<`any`\> ; `recipients`: { `header`: { `alg`: `string` ; `kid`: `string` } }[] }) => `Promise`<[`JWEDocument`](did.JWEDocument.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`JWEDocument`](did.JWEDocument.md)\>

##### Parameters

| Name             | Type                                                  |
| :--------------- | :---------------------------------------------------- |
| `«destructured»` | `Object`                                              |
| › `data`         | `string`                                              |
| › `keyResolver`  | (`url`: `string`) => `Promise`<`any`\>                |
| › `recipients`   | { `header`: { `alg`: `string` ; `kid`: `string` } }[] |

##### Returns

`Promise`<[`JWEDocument`](did.JWEDocument.md)\>

#### Defined in

packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:71
