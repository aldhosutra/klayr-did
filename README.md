![Header](https://raw.githubusercontent.com/aldhosutra/klayr-did/HEAD/static/klayr-did-monorepo-header.jpg)

# Klayr DID Monorepo

![Repo Size](https://img.shields.io/github/repo-size/aldhosutra/klayr-did)
[![Build status](https://img.shields.io/github/actions/workflow/status/aldhosutra/klayr-did/codecov.yml?branch=main)](https://github.com/aldhosutra/klayr-did/actions)
[![Coverage report](https://codecov.io/gh/aldhosutra/klayr-did/branch/main/graph/badge.svg?precision=2)](https://app.codecov.io/gh/aldhosutra/klayr-did)
[![Lerna Version](https://img.shields.io/github/lerna-json/v/aldhosutra/klayr-did)](https://github.com/aldhosutra/klayr-did/blob/main/lerna.json)
[![License: Apache 2.0](https://img.shields.io/github/license/aldhosutra/klayr-did?color=green)](http://www.apache.org/licenses/LICENSE-2.0)

Welcome to the Klayr DID Monorepo! This repository contains a set of powerful tools and packages that empower sidechain developers to build robust and innovative [W3C Decentralized Identifier (DID)](https://www.w3.org/TR/did-core/) and [Verifiable Credentials (VC)](https://www.w3.org/TR/vc-data-model/) solutions within the Klayr Ecosystem.

## About Klayr

Klayr is an open-source blockchain application platform written in Javascript, designed to bridge the gap between accessibility and web3 adoption. Learn more about Klayr from their [official website](https://klayr.xyz), as well as it's public [GitHub Repository](https://github.com/KlayrHQ).

## About `did:klayr` Method

`did:klayr` is a DID method specifically designed for Klayr sidechain, which outlines syntax, data model, and operations that adheres to W3C Decentralized Identifiers (DIDs) Specification.

A `did:klayr` DID consist of a method, chainspace, namespace, and unique-id that suitable for specific, tailored, self-sovereign identity use case. An example of a `did:klayr` identifier, is as follows:

```abnf
did:klayr:enevti:address:kly9gxy8ua2n5sj7eqvtp554hvce8m39sy39sjwzu
```

Please refer to the [did:klayr method spec](https://github.com/aldhosutra/klayr-did/blob/main/packages/klayr-did-module/docs/did-method-spec.md) draft for further explanation. As its still in under active development, community contribution will be much appreciated.

## Packages

This monorepo consist of 5 packages, as follows:

| Packages                                                                                                         | Description                                                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [klayr-did](https://npmjs.com/package/klayr-did)                                                                 | Klayr DID/VC Development Kit, which bundles @klayr-did/klayr-did-module, @klayr-did/klayr-decentralized-identifier, and @klayr-did/klayr-verifiable-credentials into one single package |
| [@klayr-did/klayr-did-module](https://npmjs.com/package/@klayr-did/klayr-did-module)                             | Klayr module which implements on-chain logic for Klayr decentralized identifiers (DIDs)                                                                                                 |
| [@klayr-did/klayr-decentralized-identifier](https://npmjs.com/package/@klayr-did/klayr-decentralized-identifier) | A library to work with W3C Decentralized Identifier (DID) for Klayr sidechains with the Klayr DID module                                                                                |
| [@klayr-did/klayr-verifiable-credentials](https://npmjs.com/package/@klayr-did/klayr-verifiable-credentials)     | A library for working with W3C verifiable credentials (VC) and verifiable presentations (VP) using Klayr DID                                                                            |
| [klayr-did-docs](https://klayr-did.js.org)                                                                       | Documentation website for Klayr DID packages                                                                                                                                            |

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
