"use strict";(self.webpackChunkklayr_did_docs=self.webpackChunkklayr_did_docs||[]).push([[2762],{876:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var i=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),o=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=o(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=o(a),y=r,h=p["".concat(s,".").concat(y)]||p[y]||u[y]||n;return a?i.createElement(h,l(l({ref:t},c),{},{components:a})):i.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=y;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[p]="string"==typeof e?e:r,l[1]=d;for(var o=2;o<n;o++)l[o]=a[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}y.displayName="MDXCreateElement"},192:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>d,toc:()=>o});var i=a(7896),r=(a(2784),a(876));const n={id:"index",title:"@klayr-did/klayr-verifiable-credentials",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},l=void 0,d={unversionedId:"klayr-verifiable-credentials/index",id:"klayr-verifiable-credentials/index",title:"@klayr-did/klayr-verifiable-credentials",description:"Header",source:"@site/docs/klayr-verifiable-credentials/index.md",sourceDirName:"klayr-verifiable-credentials",slug:"/klayr-verifiable-credentials/",permalink:"/docs/klayr-verifiable-credentials/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@klayr-did/klayr-verifiable-credentials",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"resolver.CachedResolver",permalink:"/docs/klayr-decentralized-identifier/interfaces/resolver.CachedResolver"},next:{title:"Exports",permalink:"/docs/klayr-verifiable-credentials/modules"}},s={},o=[{value:"About Klayr",id:"about-klayr",level:2},{value:"About <code>did:klayr</code> Method",id:"about-didklayr-method",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Sidechain Setup",id:"sidechain-setup",level:3},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3},{value:"Documentation",id:"documentation",level:2},{value:"License",id:"license",level:2}],c={toc:o},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/aldhosutra/klayr-did/HEAD/static/klayr-verifiable-credentials-header.jpg",alt:"Header"})),(0,r.kt)("h1",{id:"klayr-didklayr-verifiable-credentials"},"@klayr-did/klayr-verifiable-credentials"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://npmjs.com/package/@klayr-did/klayr-verifiable-credentials"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@klayr-did/klayr-verifiable-credentials",alt:"npm"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aldhosutra/klayr-did/actions"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/actions/workflow/status/aldhosutra/klayr-did/codecov.yml?branch=main",alt:"Build status"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://app.codecov.io/gh/aldhosutra/klayr-did"},(0,r.kt)("img",{parentName:"a",src:"https://codecov.io/gh/aldhosutra/klayr-did/branch/main/graph/badge.svg?flag=klayr-verifiable-credentials&precision=2",alt:"Coverage report"})),"\n",(0,r.kt)("a",{parentName:"p",href:"http://www.apache.org/licenses/LICENSE-2.0"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/license/aldhosutra/klayr-did?color=green",alt:"License: Apache 2.0"}))),(0,r.kt)("p",null,"A library for working with ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/"},"Verifiable Credentials (VC)")," and verifiable presentations (VP) using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aldhosutra/klayr-did/blob/main/packages/klayr-did-module/docs/did-method-spec.md"},"Klayr DID method")),(0,r.kt)("h2",{id:"about-klayr"},"About Klayr"),(0,r.kt)("p",null,"Klayr is an open-source blockchain application platform written in Javascript, designed to bridge the gap between accessibility and web3 adoption. Learn more about Klayr from their ",(0,r.kt)("a",{parentName:"p",href:"https://klayr.xyz"},"official website"),", as well as it's public ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KlayrHQ"},"GitHub Repository"),"."),(0,r.kt)("h2",{id:"about-didklayr-method"},"About ",(0,r.kt)("inlineCode",{parentName:"h2"},"did:klayr")," Method"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"did:klayr")," is a DID method specifically designed for Klayr sidechain, which outlines syntax, data model, and operations that adheres to W3C Decentralized Identifiers (DIDs) Specification."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"did:klayr")," DID consist of a method, chainspace, namespace, and unique-id that suitable for specific, tailored, self-sovereign identity use case. An example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"did:klayr")," identifier, is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abnf"},"did:klayr:enevti:address:kly9gxy8ua2n5sj7eqvtp554hvce8m39sy39sjwzu\n")),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aldhosutra/klayr-did/blob/main/packages/klayr-did-module/docs/did-method-spec.md"},"did:klayr method spec")," draft for further explanation. As its still in under active development, community contribution will be much appreciated."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"sidechain-setup"},"Sidechain Setup"),(0,r.kt)("p",null,"Since this tool is tailored for Klayr-based sidechains, you need to start by setting up a blockchain client. You can find guidance on configuring your blockchain environment in the official ",(0,r.kt)("a",{parentName:"p",href:"https://klayr.xyz/documentation/build-blockchain/index.html"},"Klayr Documentation"),", as well as in ",(0,r.kt)("a",{parentName:"p",href:"https://klayr.chat/"},"Klayr Discord #dev-discussion channel")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save @klayr-did/klayr-verifiable-credentials\n")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"You can use this library to issue and verify a Verifiable Credentials (VC) using Klayr cryptography and Klayr DID, which use Ed25519 keys:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import vc from '@klayr-did/klayr-verifiable-credentials';\n\nasync function vcExample() {\n    // you can also use did.getAddressDIDFromPublicKey from @klayr-did/klayr-decentralized-identifier\n    const issuer = 'did:klayr:enevti:address:kly9gxy8ua2n5sj7eqvtp554hvce8m39sy39sjwzu';\n\n    // the credentials needs to adheres to W3C Verifiable Credentials Data Model\n    const credential = {\n        '@context': [\n            'https://www.w3.org/2018/credentials/v1',\n            'https://www.w3.org/2018/credentials/examples/v1',\n        ],\n        type: ['VerifiableCredential', 'UniversityDegreeCredential'],\n        issuer: issuer,\n        credentialSubject: {\n            id: 'urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6', // => needs to be in URI format\n            alumniOf: 'Harvard University'\n        },\n    };\n\n    const privateKey = <your-private-key>;\n    const signedVC = await vc.issueCredential(credential, privateKey, {ipc: '~/.klayr/enevti-core'});\n\n    // later you can verify a signedVC as follows\n    const verifyVC = await vc.verifyCredential(signedVC, publicKey, {ipc: '~/.klayr/enevti-core'});\n    if (verifyVC.verified === true) {\n        // vc is verified\n        // do something\n    }\n}\n")),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"For further explanations, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://klayr-did.js.org"},"klayr-did documentation")," website."),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,'Licensed under the Apache License, Version 2.0 (the "License");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://www.apache.org/licenses/LICENSE-2.0\n")),(0,r.kt)("p",null,'Unless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.'))}u.isMDXComponent=!0}}]);