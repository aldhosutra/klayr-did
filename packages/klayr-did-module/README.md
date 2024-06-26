![Header](https://raw.githubusercontent.com/aldhosutra/klayr-did/HEAD/static/klayr-did-module-header.jpg)

# @klayr-did/klayr-did-module

[![npm](https://img.shields.io/npm/v/@klayr-did/klayr-did-module)](https://npmjs.com/package/@klayr-did/klayr-did-module)
[![Build status](https://img.shields.io/github/actions/workflow/status/aldhosutra/klayr-did/codecov.yml?branch=main)](https://github.com/aldhosutra/klayr-did/actions)
[![Coverage report](https://codecov.io/gh/aldhosutra/klayr-did/branch/main/graph/badge.svg?flag=klayr-did-module&precision=2)](https://app.codecov.io/gh/aldhosutra/klayr-did)
[![License: Apache 2.0](https://img.shields.io/github/license/aldhosutra/klayr-did?color=green)](http://www.apache.org/licenses/LICENSE-2.0)

Klayr module which implements on-chain logic for Klayr decentralized identifiers (DIDs)

## About Klayr

Klayr is an open-source blockchain application platform written in Javascript, designed to bridge the gap between accessibility and web3 adoption. Learn more about Klayr from their [official website](https://klayr.xyz), as well as it's public [GitHub Repository](https://github.com/KlayrHQ).

## About `did:klayr` Method

`did:klayr` is a DID method specifically designed for Klayr sidechain, which outlines syntax, data model, and operations that adheres to W3C Decentralized Identifiers (DIDs) Specification.

A `did:klayr` DID consist of a method, chainspace, namespace, and unique-id that suitable for specific, tailored, self-sovereign identity use case. An example of a `did:klayr` identifier, is as follows:

```abnf
did:klayr:enevti:address:kly9gxy8ua2n5sj7eqvtp554hvce8m39sy39sjwzu
```

Please refer to the [did:klayr method spec](https://github.com/aldhosutra/klayr-did/blob/main/packages/klayr-did-module/docs/did-method-spec.md) draft for further explanation. As its still in under active development, community contribution will be much appreciated.

## Module Architecture

![Module Architecture](https://raw.githubusercontent.com/aldhosutra/klayr-did/HEAD/static/did-module.jpg)

## Getting Started

### Sidechain Setup

Since this tool is tailored for Klayr-based sidechains, you need to start by setting up a blockchain client. You can find guidance on configuring your blockchain environment in the official [Klayr Documentation](https://klayr.xyz/documentation/build-blockchain/index.html), as well as in [Klayr Discord #dev-discussion channel](https://klayr.chat/)

### Installation

```sh
npm install --save @klayr-did/klayr-did-module
```

### Module Configurations

Under your blockchain config folder, please specify required configurations for did module:

```json
{
  "<...other_config>": "",
  "modules": {
    "did": {
      "chainspace": "enevti",
      "autoCreateAddressDID": true
    },
    "<...other_modules>": ""
  }
}
```

Those configuration can be explained as follows:

1. **chainspace**: (REQUIRED) chainspace to be used by your chain's DID. `did:klayr` require a chainspace to be defined, as it's format is as follows: `did:klayr:{chainspace}:{namespace}:{unique-id}`
2. **autoCreateAddressDID**: (default to true) whether you want to enable auto address DID creation. If this option is enabled, an address DID will be automatically created when the address sends any transaction.

### Register Module

Last step is to register did module to your blockchain app. Add this code to `./src/app/modules.ts` as follows:

```typescript
import { DidModule } from '@klayr-did/klayr-did-module';

export const registerModules = (app: Application, method: KlayrMethod): void => {
  // your other module registration
  app.registerModule(new DidModule()); // add this
};
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
