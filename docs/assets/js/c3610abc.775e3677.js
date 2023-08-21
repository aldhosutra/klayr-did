'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [8685],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => c, kt: () => m });
      var a = i(2784);
      function n(e, t, i) {
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
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, a);
        }
        return i;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(i), !0).forEach(function (t) {
                n(e, t, i[t]);
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
          a,
          n = (function (e, t) {
            if (null == e) return {};
            var i,
              a,
              n = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++) (i = r[a]), t.indexOf(i) >= 0 || (n[i] = e[i]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (i = r[a]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]));
        }
        return n;
      }
      var d = a.createContext({}),
        o = function (e) {
          var t = a.useContext(d),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : l(l({}, t), e)), i;
        },
        c = function (e) {
          var t = o(e.components);
          return a.createElement(d.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        k = a.forwardRef(function (e, t) {
          var i = e.components,
            n = e.mdxType,
            r = e.originalType,
            d = e.parentName,
            c = s(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = o(i),
            k = n,
            m = p[''.concat(d, '.').concat(k)] || p[k] || u[k] || r;
          return i
            ? a.createElement(m, l(l({ ref: t }, c), {}, { components: i }))
            : a.createElement(m, l({ ref: t }, c));
        });
      function m(e, t) {
        var i = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var r = i.length,
            l = new Array(r);
          l[0] = k;
          var s = {};
          for (var d in t) hasOwnProperty.call(t, d) && (s[d] = t[d]);
          (s.originalType = e), (s[p] = 'string' == typeof e ? e : n), (l[1] = s);
          for (var o = 2; o < r; o++) l[o] = i[o];
          return a.createElement.apply(null, l);
        }
        return a.createElement.apply(null, i);
      }
      k.displayName = 'MDXCreateElement';
    },
    8566: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => d,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => r,
          metadata: () => s,
          toc: () => o,
        });
      var a = i(7896),
        n = (i(2784), i(876));
      const r = { id: 'index', title: 'lisk-did', sidebar_label: 'Readme', sidebar_position: 0, custom_edit_url: null },
        l = void 0,
        s = {
          unversionedId: 'lisk-did/index',
          id: 'lisk-did/index',
          title: 'lisk-did',
          description: 'Header',
          source: '@site/docs/lisk-did/index.md',
          sourceDirName: 'lisk-did',
          slug: '/lisk-did/',
          permalink: '/docs/lisk-did/',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'index',
            title: 'lisk-did',
            sidebar_label: 'Readme',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          next: { title: 'Exports', permalink: '/docs/lisk-did/modules' },
        },
        d = {},
        o = [
          { value: 'About Lisk', id: 'about-lisk', level: 2 },
          { value: 'About <code>did:lisk</code> Method', id: 'about-didlisk-method', level: 2 },
          { value: 'Getting Started', id: 'getting-started', level: 2 },
          { value: 'Sidechain Setup', id: 'sidechain-setup', level: 3 },
          { value: 'Installation', id: 'installation', level: 3 },
          { value: 'Packages', id: 'packages', level: 2 },
          { value: 'Documentation', id: 'documentation', level: 2 },
          { value: 'License', id: 'license', level: 2 },
        ],
        c = { toc: o },
        p = 'wrapper';
      function u(e) {
        let { components: t, ...r } = e;
        return (0, n.kt)(
          p,
          (0, a.Z)({}, c, r, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)('p', null, (0, n.kt)('img', { alt: 'Header', src: i(1822).Z, width: '1507', height: '800' })),
          (0, n.kt)('h1', { id: 'lisk-did' }, 'lisk-did'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              { parentName: 'p', href: 'https://npmjs.com/package/lisk-did' },
              (0, n.kt)('img', { parentName: 'a', src: 'https://img.shields.io/npm/v/lisk-did', alt: 'npm' }),
            ),
            '\n',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: 'https://github.com/aldhosutra/lisk-did/actions' },
              (0, n.kt)('img', {
                parentName: 'a',
                src: 'https://img.shields.io/github/actions/workflow/status/aldhosutra/lisk-did/codecov.yml?branch=main',
                alt: 'Build status',
              }),
            ),
            '\n',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: 'https://app.codecov.io/gh/aldhosutra/lisk-did' },
              (0, n.kt)('img', {
                parentName: 'a',
                src: 'https://codecov.io/gh/aldhosutra/lisk-did/branch/main/graph/badge.svg?flag=lisk-did&precision=2',
                alt: 'Coverage report',
              }),
            ),
            '\n',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: 'http://www.apache.org/licenses/LICENSE-2.0' },
              (0, n.kt)('img', {
                parentName: 'a',
                src: 'https://img.shields.io/github/license/aldhosutra/lisk-did?color=green',
                alt: 'License: Apache 2.0',
              }),
            ),
          ),
          (0, n.kt)(
            'p',
            null,
            'Lisk DID/VC Development Kit. ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'lisk-did'),
            ' is an all-in-one package that provides you with tools to develop ',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: 'https://www.w3.org/TR/did-core/' },
              'W3C Decentralized Identifier (DID)',
            ),
            ' and ',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: 'https://www.w3.org/TR/vc-data-model/' },
              'Verifiable Credentials (VC)',
            ),
            ' solutions for Lisk-based sidechains.',
          ),
          (0, n.kt)('h2', { id: 'about-lisk' }, 'About Lisk'),
          (0, n.kt)(
            'p',
            null,
            'Lisk is an open-source blockchain application platform written in Javascript, designed to bridge the gap between accessibility and web3 adoption. Learn more about Lisk from their ',
            (0, n.kt)('a', { parentName: 'p', href: 'https://lisk.com' }, 'official website'),
            ", as well as it's public ",
            (0, n.kt)('a', { parentName: 'p', href: 'https://github.com/LiskHQ' }, 'GitHub Repository'),
            '.',
          ),
          (0, n.kt)(
            'h2',
            { id: 'about-didlisk-method' },
            'About ',
            (0, n.kt)('inlineCode', { parentName: 'h2' }, 'did:lisk'),
            ' Method',
          ),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'did:lisk'),
            ' is a DID method specifically designed for Lisk sidechain, which outlines syntax, data model, and operations that adheres to W3C Decentralized Identifiers (DIDs) Specification.',
          ),
          (0, n.kt)(
            'p',
            null,
            'A ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'did:lisk'),
            ' DID consist of a method, chainspace, namespace, and unique-id that suitable for specific, tailored, self-sovereign identity use case. An example of a ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'did:lisk'),
            ' identifier, is as follows:',
          ),
          (0, n.kt)(
            'pre',
            null,
            (0, n.kt)(
              'code',
              { parentName: 'pre', className: 'language-abnf' },
              'did:lisk:enevti:address:lsk9gxy8ua2n5sj7eqvtp554hvce8m39sy39sjwzu\n',
            ),
          ),
          (0, n.kt)(
            'p',
            null,
            'Please refer to the ',
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/main/packages/lisk-did-module/docs/did-method-spec.md',
              },
              'did:lisk method spec',
            ),
            ' draft for further explanation. As its still in under active development, community contribution will be much appreciated.',
          ),
          (0, n.kt)('h2', { id: 'getting-started' }, 'Getting Started'),
          (0, n.kt)('h3', { id: 'sidechain-setup' }, 'Sidechain Setup'),
          (0, n.kt)(
            'p',
            null,
            'Since this tool is tailored for Lisk-based sidechains, you need to start by setting up a blockchain client. You can find guidance on configuring your blockchain environment in the official ',
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://lisk.com/documentation/beta/build-blockchain/create-blockchain-client.html',
              },
              'Lisk Documentation',
            ),
            ', as well as in ',
            (0, n.kt)('a', { parentName: 'p', href: 'https://lisk.chat/' }, 'Lisk Discord #dev-chat channel'),
          ),
          (0, n.kt)('h3', { id: 'installation' }, 'Installation'),
          (0, n.kt)(
            'pre',
            null,
            (0, n.kt)('code', { parentName: 'pre', className: 'language-sh' }, 'npm install --save lisk-did\n'),
          ),
          (0, n.kt)('h2', { id: 'packages' }, 'Packages'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'lisk-did'),
            ' bundled with 3 packages, as follows:',
          ),
          (0, n.kt)(
            'table',
            null,
            (0, n.kt)(
              'thead',
              { parentName: 'table' },
              (0, n.kt)(
                'tr',
                { parentName: 'thead' },
                (0, n.kt)('th', { parentName: 'tr', align: null }, 'Packages'),
                (0, n.kt)('th', { parentName: 'tr', align: null }, 'Description'),
              ),
            ),
            (0, n.kt)(
              'tbody',
              { parentName: 'table' },
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: 'https://npmjs.com/package/@lisk-did/lisk-did-module' },
                    '@lisk-did/lisk-did-module',
                  ),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: null },
                  'Lisk module which implements on-chain logic for Lisk decentralized identifiers (DIDs)',
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: 'https://npmjs.com/package/@lisk-did/lisk-decentralized-identifier' },
                    '@lisk-did/lisk-decentralized-identifier',
                  ),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: null },
                  'A library to work with W3C Decentralized Identifier (DID) for Lisk sidechains with the Lisk DID module',
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: 'https://npmjs.com/package/@lisk-did/lisk-verifiable-credentials' },
                    '@lisk-did/lisk-verifiable-credentials',
                  ),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: null },
                  'A library for working with W3C verifiable credentials (VC) and verifiable presentations (VP) using Lisk DID',
                ),
              ),
            ),
          ),
          (0, n.kt)('h2', { id: 'documentation' }, 'Documentation'),
          (0, n.kt)(
            'p',
            null,
            'For further explanations, please refer to ',
            (0, n.kt)('a', { parentName: 'p', href: 'https://lisk-did.js.org' }, 'lisk-did documentation'),
            ' website.',
          ),
          (0, n.kt)('h2', { id: 'license' }, 'License'),
          (0, n.kt)(
            'p',
            null,
            'Licensed under the Apache License, Version 2.0 (the "License");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at',
          ),
          (0, n.kt)(
            'pre',
            null,
            (0, n.kt)('code', { parentName: 'pre' }, 'http://www.apache.org/licenses/LICENSE-2.0\n'),
          ),
          (0, n.kt)(
            'p',
            null,
            'Unless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.',
          ),
        );
      }
      u.isMDXComponent = !0;
    },
    1822: (e, t, i) => {
      i.d(t, { Z: () => a });
      const a = i.p + 'assets/images/lisk-did-header-792d66fc1fe34e735c9dd685450a8620.jpg';
    },
  },
]);
