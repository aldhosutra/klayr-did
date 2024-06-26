![Header](https://raw.githubusercontent.com/aldhosutra/klayr-did/HEAD/static/klayr-verifiable-credentials-header.jpg)

# @klayr-did/klayr-verifiable-credentials

[![npm](https://img.shields.io/npm/v/@klayr-did/klayr-verifiable-credentials)](https://npmjs.com/package/@klayr-did/klayr-verifiable-credentials)
[![Build status](https://img.shields.io/github/actions/workflow/status/aldhosutra/klayr-did/codecov.yml?branch=main)](https://github.com/aldhosutra/klayr-did/actions)
[![Coverage report](https://codecov.io/gh/aldhosutra/klayr-did/branch/main/graph/badge.svg?flag=klayr-verifiable-credentials&precision=2)](https://app.codecov.io/gh/aldhosutra/klayr-did)
[![License: Apache 2.0](https://img.shields.io/github/license/aldhosutra/klayr-did?color=green)](http://www.apache.org/licenses/LICENSE-2.0)

A library for working with [Verifiable Credentials (VC)](https://www.w3.org/TR/vc-data-model/) and verifiable presentations (VP) using [Klayr DID method](https://github.com/aldhosutra/klayr-did/blob/main/packages/klayr-did-module/docs/did-method-spec.md)

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
npm install --save @klayr-did/klayr-verifiable-credentials
```

### Usage

You can use this library to issue and verify a Verifiable Credentials (VC) using Klayr cryptography and Klayr DID, which use Ed25519 keys:

```typescript
import vc from '@klayr-did/klayr-verifiable-credentials';

async function vcExample() {
    // you can also use did.getAddressDIDFromPublicKey from @klayr-did/klayr-decentralized-identifier
    const issuer = 'did:klayr:enevti:address:kly9gxy8ua2n5sj7eqvtp554hvce8m39sy39sjwzu';

    // the credentials needs to adheres to W3C Verifiable Credentials Data Model
    const credential = {
		'@context': [
			'https://www.w3.org/2018/credentials/v1',
			'https://www.w3.org/2018/credentials/examples/v1',
		],
		type: ['VerifiableCredential', 'UniversityDegreeCredential'],
		issuer: issuer,
		credentialSubject: {
			id: 'urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6', // => needs to be in URI format
			alumniOf: 'Harvard University'
		},
	};

    const privateKey = <your-private-key>;
    const signedVC = await vc.issueCredential(credential, privateKey, {ipc: '~/.klayr/enevti-core'});

    // later you can verify a signedVC as follows
    const verifyVC = await vc.verifyCredential(signedVC, publicKey, {ipc: '~/.klayr/enevti-core'});
    if (verifyVC.verified === true) {
        // vc is verified
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
