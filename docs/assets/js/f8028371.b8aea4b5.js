'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [3313],
  {
    876: (e, i, t) => {
      t.d(i, { Zo: () => c, kt: () => h });
      var n = t(2784);
      function a(e, i, t) {
        return (
          i in e
            ? Object.defineProperty(e, i, { value: t, enumerable: !0, configurable: !0, writable: !0 })
            : (e[i] = t),
          e
        );
      }
      function r(e, i) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          i &&
            (n = n.filter(function (i) {
              return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function d(e) {
        for (var i = 1; i < arguments.length; i++) {
          var t = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? r(Object(t), !0).forEach(function (i) {
                a(e, i, t[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : r(Object(t)).forEach(function (i) {
                Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
              });
        }
        return e;
      }
      function s(e, i) {
        if (null == e) return {};
        var t,
          n,
          a = (function (e, i) {
            if (null == e) return {};
            var t,
              n,
              a = {},
              r = Object.keys(e);
            for (n = 0; n < r.length; n++) (t = r[n]), i.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, i);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (n = 0; n < r.length; n++)
            (t = r[n]), i.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
        }
        return a;
      }
      var l = n.createContext({}),
        o = function (e) {
          var i = n.useContext(l),
            t = i;
          return e && (t = 'function' == typeof e ? e(i) : d(d({}, i), e)), t;
        },
        c = function (e) {
          var i = o(e.components);
          return n.createElement(l.Provider, { value: i }, e.children);
        },
        p = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var i = e.children;
            return n.createElement(n.Fragment, {}, i);
          },
        },
        m = n.forwardRef(function (e, i) {
          var t = e.components,
            a = e.mdxType,
            r = e.originalType,
            l = e.parentName,
            c = s(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = o(t),
            m = a,
            h = p[''.concat(l, '.').concat(m)] || p[m] || u[m] || r;
          return t
            ? n.createElement(h, d(d({ ref: i }, c), {}, { components: t }))
            : n.createElement(h, d({ ref: i }, c));
        });
      function h(e, i) {
        var t = arguments,
          a = i && i.mdxType;
        if ('string' == typeof e || a) {
          var r = t.length,
            d = new Array(r);
          d[0] = m;
          var s = {};
          for (var l in i) hasOwnProperty.call(i, l) && (s[l] = i[l]);
          (s.originalType = e), (s[p] = 'string' == typeof e ? e : a), (d[1] = s);
          for (var o = 2; o < r; o++) d[o] = t[o];
          return n.createElement.apply(null, d);
        }
        return n.createElement.apply(null, t);
      }
      m.displayName = 'MDXCreateElement';
    },
    8745: (e, i, t) => {
      t.r(i),
        t.d(i, {
          assets: () => l,
          contentTitle: () => d,
          default: () => u,
          frontMatter: () => r,
          metadata: () => s,
          toc: () => o,
        });
      var n = t(7896),
        a = (t(2784), t(876));
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
        let { components: i, ...r } = e;
        return (0, a.kt)(
          p,
          (0, n.Z)({}, c, r, { components: i, mdxType: 'MDXLayout' }),
          (0, a.kt)('p', null, (0, a.kt)('img', { alt: 'Header', src: t(2432).Z, width: '1507', height: '800' })),
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
            (0, a.kt)(
              'a',
              { parentName: 'p', href: 'https://aldhosutra.github.io/lisk-did' },
              'lisk-did documentation',
            ),
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
    2432: (e, i, t) => {
      t.d(i, { Z: () => n });
      const n = t.p + 'assets/images/lisk-decentralized-identifier-header-23ac0ca9b66695df3d4b6c61927edd5c.jpg';
    },
  },
]);
