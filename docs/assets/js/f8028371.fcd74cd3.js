'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [3313],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => c, kt: () => h });
      var n = i(2784);
      function a(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = i),
          e
        );
      }
      function r(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(i), !0).forEach(function (t) {
                a(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : r(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      function s(e, t) {
        if (null == e) return {};
        var i,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var i,
              n,
              a = {},
              r = Object.keys(e);
            for (n = 0; n < r.length; n++) (i = r[n]), t.indexOf(i) >= 0 || (a[i] = e[i]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (n = 0; n < r.length; n++)
            (i = r[n]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (a[i] = e[i]));
        }
        return a;
      }
      var l = n.createContext({}),
        o = function (e) {
          var t = n.useContext(l),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : d(d({}, t), e)), i;
        },
        c = function (e) {
          var t = o(e.components);
          return n.createElement(l.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        m = n.forwardRef(function (e, t) {
          var i = e.components,
            a = e.mdxType,
            r = e.originalType,
            l = e.parentName,
            c = s(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = o(i),
            m = a,
            h = p[''.concat(l, '.').concat(m)] || p[m] || u[m] || r;
          return i
            ? n.createElement(h, d(d({ ref: t }, c), {}, { components: i }))
            : n.createElement(h, d({ ref: t }, c));
        });
      function h(e, t) {
        var i = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var r = i.length,
            d = new Array(r);
          d[0] = m;
          var s = {};
          for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
          (s.originalType = e), (s[p] = 'string' == typeof e ? e : a), (d[1] = s);
          for (var o = 2; o < r; o++) d[o] = i[o];
          return n.createElement.apply(null, d);
        }
        return n.createElement.apply(null, i);
      }
      m.displayName = 'MDXCreateElement';
    },
    8745: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => l,
          contentTitle: () => d,
          default: () => u,
          frontMatter: () => r,
          metadata: () => s,
          toc: () => o,
        });
      var n = i(7896),
        a = (i(2784), i(876));
      const r = {
          id: 'index',
          title: '@lisk-did/lisk-decentralized-identifier',
          sidebar_label: 'Readme',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        d = void 0,
        s = {
          unversionedId: 'lisk-decentralized-identifier/index',
          id: 'lisk-decentralized-identifier/index',
          title: '@lisk-did/lisk-decentralized-identifier',
          description: 'Header',
          source: '@site/docs/lisk-decentralized-identifier/index.md',
          sourceDirName: 'lisk-decentralized-identifier',
          slug: '/lisk-decentralized-identifier/',
          permalink: '/docs/lisk-decentralized-identifier/',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'index',
            title: '@lisk-did/lisk-decentralized-identifier',
            sidebar_label: 'Readme',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'RemoveServiceEndpointCommand',
            permalink: '/docs/lisk-did-module/classes/RemoveServiceEndpointCommand',
          },
          next: { title: 'Exports', permalink: '/docs/lisk-decentralized-identifier/modules' },
        },
        l = {},
        o = [
          { value: 'About Lisk', id: 'about-lisk', level: 2 },
          { value: 'About <code>did:lisk</code> Method', id: 'about-didlisk-method', level: 2 },
          { value: 'Getting Started', id: 'getting-started', level: 2 },
          { value: 'Sidechain Setup', id: 'sidechain-setup', level: 3 },
          { value: 'Installation', id: 'installation', level: 3 },
          { value: 'Usage', id: 'usage', level: 3 },
          { value: 'Documentation', id: 'documentation', level: 2 },
          { value: 'License', id: 'license', level: 2 },
        ],
        c = { toc: o },
        p = 'wrapper';
      function u(e) {
        let { components: t, ...i } = e;
        return (0, a.kt)(
          p,
          (0, n.Z)({}, c, i, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('img', {
              parentName: 'p',
              src: 'https://raw.githubusercontent.com/aldhosutra/lisk-did/HEAD/static/lisk-decentralized-identifier-header.jpg',
              alt: 'Header',
            }),
          ),
          (0, a.kt)('h1', { id: 'lisk-didlisk-decentralized-identifier' }, '@lisk-did/lisk-decentralized-identifier'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              { parentName: 'p', href: 'https://npmjs.com/package/@lisk-did/lisk-decentralized-identifier' },
              (0, a.kt)('img', {
                parentName: 'a',
                src: 'https://img.shields.io/npm/v/@lisk-did/lisk-decentralized-identifier',
                alt: 'npm',
              }),
            ),
            '\n',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: 'https://github.com/aldhosutra/lisk-did/actions' },
              (0, a.kt)('img', {
                parentName: 'a',
                src: 'https://img.shields.io/github/actions/workflow/status/aldhosutra/lisk-did/codecov.yml?branch=main',
                alt: 'Build status',
              }),
            ),
            '\n',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: 'https://app.codecov.io/gh/aldhosutra/lisk-did' },
              (0, a.kt)('img', {
                parentName: 'a',
                src: 'https://codecov.io/gh/aldhosutra/lisk-did/branch/main/graph/badge.svg?flag=lisk-decentralized-identifier&precision=2',
                alt: 'Coverage report',
              }),
            ),
            '\n',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: 'http://www.apache.org/licenses/LICENSE-2.0' },
              (0, a.kt)('img', {
                parentName: 'a',
                src: 'https://img.shields.io/github/license/aldhosutra/lisk-did?color=green',
                alt: 'License: Apache 2.0',
              }),
            ),
          ),
          (0, a.kt)(
            'p',
            null,
            'A library to work with ',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: 'https://www.w3.org/TR/did-core/' },
              'W3C Decentralized Identifier (DID)',
            ),
            ' for Lisk sidechains with the ',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: 'https://npmjs.com/package/@lisk-did/lisk-did-module' },
              'Lisk DID module',
            ),
          ),
          (0, a.kt)('h2', { id: 'about-lisk' }, 'About Lisk'),
          (0, a.kt)(
            'p',
            null,
            'Lisk is an open-source blockchain application platform written in Javascript, designed to bridge the gap between accessibility and web3 adoption. Learn more about Lisk from their ',
            (0, a.kt)('a', { parentName: 'p', href: 'https://lisk.com' }, 'official website'),
            ", as well as it's public ",
            (0, a.kt)('a', { parentName: 'p', href: 'https://github.com/LiskHQ' }, 'GitHub Repository'),
            '.',
          ),
          (0, a.kt)(
            'h2',
            { id: 'about-didlisk-method' },
            'About ',
            (0, a.kt)('inlineCode', { parentName: 'h2' }, 'did:lisk'),
            ' Method',
          ),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'did:lisk'),
            ' is a DID method specifically designed for Lisk sidechain, which outlines syntax, data model, and operations that adheres to W3C Decentralized Identifiers (DIDs) Specification.',
          ),
          (0, a.kt)(
            'p',
            null,
            'A ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'did:lisk'),
            ' DID consist of a method, chainspace, namespace, and unique-id that suitable for specific, tailored, self-sovereign identity use case. An example of a ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'did:lisk'),
            ' identifier, is as follows:',
          ),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)(
              'code',
              { parentName: 'pre', className: 'language-abnf' },
              'did:lisk:enevti:address:lsk9gxy8ua2n5sj7eqvtp554hvce8m39sy39sjwzu\n',
            ),
          ),
          (0, a.kt)(
            'p',
            null,
            'Please refer to the ',
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/main/packages/lisk-did-module/docs/did-method-spec.md',
              },
              'did:lisk method spec',
            ),
            ' draft for further explanation. As its still in under active development, community contribution will be much appreciated.',
          ),
          (0, a.kt)('h2', { id: 'getting-started' }, 'Getting Started'),
          (0, a.kt)('h3', { id: 'sidechain-setup' }, 'Sidechain Setup'),
          (0, a.kt)(
            'p',
            null,
            'Since this tool is tailored for Lisk-based sidechains, you need to start by setting up a blockchain client. You can find guidance on configuring your blockchain environment in the official ',
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://lisk.com/documentation/beta/build-blockchain/create-blockchain-client.html',
              },
              'Lisk Documentation',
            ),
            ', as well as in ',
            (0, a.kt)('a', { parentName: 'p', href: 'https://lisk.chat/' }, 'Lisk Discord #dev-chat channel'),
          ),
          (0, a.kt)('h3', { id: 'installation' }, 'Installation'),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)(
              'code',
              { parentName: 'pre', className: 'language-sh' },
              'npm install --save @lisk-did/lisk-decentralized-identifier\n',
            ),
          ),
          (0, a.kt)('h3', { id: 'usage' }, 'Usage'),
          (0, a.kt)(
            'p',
            null,
            'You can use this library to retrive on-chain DID Document data, and authorize whether a key is valid within DID document:',
          ),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)(
              'code',
              { parentName: 'pre', className: 'language-typescript' },
              "import did from '@lisk-did/lisk-decentralized-identifier';\nimport {cryptography} from 'lisk-sdk';\n\nasync function didExample() {\n    // get DID document from a sidechain node\n    const didDocument = await did.getDIDDocument('did:lisk:enevti:address:lsk9gxy8ua2n5sj7eqvtp554hvce8m39sy39sjwzu', {ipc: '~/.lisk/enevti-core'});\n\n    // authorize a publicKey from a DID document\n    const privateKey = <your-private-key>\n    const publicKey = cryptography.ed.getPublicKeyFromPrivateKey(privateKey);\n    const relationships = await did.cryptography.method.getVerificationRelationship(didDocument, {publicKey: myPublicKey});\n\n    if (relationships.length > 0) {\n        // key is authorized\n        // do something\n    }\n}\n",
            ),
          ),
          (0, a.kt)('h2', { id: 'documentation' }, 'Documentation'),
          (0, a.kt)(
            'p',
            null,
            'For further explanations, please refer to ',
            (0, a.kt)('a', { parentName: 'p', href: 'https://lisk-did.js.org' }, 'lisk-did documentation'),
            ' website.',
          ),
          (0, a.kt)('h2', { id: 'license' }, 'License'),
          (0, a.kt)(
            'p',
            null,
            'Licensed under the Apache License, Version 2.0 (the "License");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at',
          ),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)('code', { parentName: 'pre' }, 'http://www.apache.org/licenses/LICENSE-2.0\n'),
          ),
          (0, a.kt)(
            'p',
            null,
            'Unless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.',
          ),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
