---
id: 'index'
title: '@klayr-did/klayr-decentralized-identifier'
sidebar_label: 'Readme'
sidebar_position: 0
custom_edit_url: null
---

![Header](https://raw.githubusercontent.com/aldhosutra/klayr-did/HEAD/static/klayr-decentralized-identifier-header.jpg)

# @klayr-did/klayr-decentralized-identifier

[![npm](https://img.shields.io/npm/v/@klayr-did/klayr-decentralized-identifier)](https://npmjs.com/package/@klayr-did/klayr-decentralized-identifier)
[![Build status](https://img.shields.io/github/actions/workflow/status/aldhosutra/klayr-did/codecov.yml?branch=main)](https://github.com/aldhosutra/klayr-did/actions)
[![Coverage report](https://codecov.io/gh/aldhosutra/klayr-did/branch/main/graph/badge.svg?flag=klayr-decentralized-identifier&precision=2)](https://app.codecov.io/gh/aldhosutra/klayr-did)
[![License: Apache 2.0](https://img.shields.io/github/license/aldhosutra/klayr-did?color=green)](http://www.apache.org/licenses/LICENSE-2.0)

A library to work with [W3C Decentralized Identifier (DID)](https://www.w3.org/TR/did-core/) for Klayr sidechains with the [Klayr DID module](https://npmjs.com/package/@klayr-did/klayr-did-module)

## About Klayr

Klayr is an open-source blockchain application platform written in Javascript, designed to bridge the gap between accessibility and web3 adoption. Learn more about Klayr from their [official website](https://klayr.xyz), as well as it's public [GitHub Repository](https://github.com/KlayrHQ).

## About `did:klayr` Method

`did:klayr` is a DID method specifically designed for Klayr sidechain, which outlines syntax, data model, and operations that adheres to W3C Decentralized Identifiers (DIDs) Specification.

A `did:klayr` DID consist of a method, chainspace, namespace, and unique-id that suitable for specific, tailored, self-sovereign identity use case. An example of a `did:klayr` identifier, is as follows:

```abnf
did:klayr:enevti:address:kly9gxy8ua2n5sj7eqvtp554hvce8m39sy39sjwzu
```

Please refer to the [did:klayr method spec](https://github.com/aldhosutra/klayr-did/blob/main/packages/klayr-did-module/docs/did-method-spec.md) draft for further explanation. As its still in under active development, community contribution will be much appreciated.

## Getting Started

### Sidechain Setup

Since this tool is tailored for Klayr-based sidechains, you need to start by setting up a blockchain client. You can find guidance on configuring your blockchain environment in the official [Klayr Documentation](https://klayr.xyz/documentation/build-blockchain/index.html), as well as in [Klayr Discord #dev-discussion channel](https://klayr.chat/)

### Installation

```sh
npm install --save @klayr-did/klayr-decentralized-identifier
```

### Usage

You can use this library to retrive on-chain DID Document data, and authorize whether a key is valid within DID document:

```typescript
import did from '@klayr-did/klayr-decentralized-identifier';
import {cryptography} from 'klayr-sdk';

async function didExample() {
    // get DID document from a sidechain node
    const didDocument = await did.getDIDDocument('did:klayr:enevti:address:kly9gxy8ua2n5sj7eqvtp554hvce8m39sy39sjwzu', {ipc: '~/.klayr/enevti-core'});

    // authorize a publicKey from a DID document
    const privateKey = <your-private-key>
    const publicKey = cryptography.ed.getPublicKeyFromPrivateKey(privateKey);
    const relationships = await did.cryptography.method.getVerificationRelationship(didDocument, {publicKey: myPublicKey});

    if (relationships.length > 0) {
        // key is authorized
        // do something
    }
}
```

## Documentation

For further explanations, please refer to [klayr-did documentation](https://klayr-did.js.org) website.

## License

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
