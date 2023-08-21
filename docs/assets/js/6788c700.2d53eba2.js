'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [7817],
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
      function l(e, t) {
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
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(i), !0).forEach(function (t) {
                a(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : l(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      function r(e, t) {
        if (null == e) return {};
        var i,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var i,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (i = l[n]), t.indexOf(i) >= 0 || (a[i] = e[i]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (i = l[n]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (a[i] = e[i]));
        }
        return a;
      }
      var d = n.createContext({}),
        s = function (e) {
          var t = n.useContext(d),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : o(o({}, t), e)), i;
        },
        c = function (e) {
          var t = s(e.components);
          return n.createElement(d.Provider, { value: t }, e.children);
        },
        u = 'mdxType',
        p = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        m = n.forwardRef(function (e, t) {
          var i = e.components,
            a = e.mdxType,
            l = e.originalType,
            d = e.parentName,
            c = r(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = s(i),
            m = a,
            h = u[''.concat(d, '.').concat(m)] || u[m] || p[m] || l;
          return i
            ? n.createElement(h, o(o({ ref: t }, c), {}, { components: i }))
            : n.createElement(h, o({ ref: t }, c));
        });
      function h(e, t) {
        var i = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var l = i.length,
            o = new Array(l);
          o[0] = m;
          var r = {};
          for (var d in t) hasOwnProperty.call(t, d) && (r[d] = t[d]);
          (r.originalType = e), (r[u] = 'string' == typeof e ? e : a), (o[1] = r);
          for (var s = 2; s < l; s++) o[s] = i[s];
          return n.createElement.apply(null, o);
        }
        return n.createElement.apply(null, i);
      }
      m.displayName = 'MDXCreateElement';
    },
    1927: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => d,
          contentTitle: () => o,
          default: () => p,
          frontMatter: () => l,
          metadata: () => r,
          toc: () => s,
        });
      var n = i(7896),
        a = (i(2784), i(876));
      const l = {
          id: 'index',
          title: '@lisk-did/lisk-did-module',
          sidebar_label: 'Readme',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        o = void 0,
        r = {
          unversionedId: 'lisk-did-module/index',
          id: 'lisk-did-module/index',
          title: '@lisk-did/lisk-did-module',
          description: 'Header',
          source: '@site/docs/lisk-did-module/index.md',
          sourceDirName: 'lisk-did-module',
          slug: '/lisk-did-module/',
          permalink: '/docs/lisk-did-module/',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'index',
            title: '@lisk-did/lisk-did-module',
            sidebar_label: 'Readme',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'vc.VerificationKey', permalink: '/docs/lisk-did/interfaces/vc.VerificationKey' },
          next: { title: 'Exports', permalink: '/docs/lisk-did-module/modules' },
        },
        d = {},
        s = [
          { value: 'About Lisk', id: 'about-lisk', level: 2 },
          { value: 'About <code>did:lisk</code> Method', id: 'about-didlisk-method', level: 2 },
          { value: 'Module Architecture', id: 'module-architecture', level: 2 },
          { value: 'Getting Started', id: 'getting-started', level: 2 },
          { value: 'Sidechain Setup', id: 'sidechain-setup', level: 3 },
          { value: 'Installation', id: 'installation', level: 3 },
          { value: 'Module Configurations', id: 'module-configurations', level: 3 },
          { value: 'Register Module', id: 'register-module', level: 3 },
          { value: 'Documentation', id: 'documentation', level: 2 },
          { value: 'License', id: 'license', level: 2 },
        ],
        c = { toc: s },
        u = 'wrapper';
      function p(e) {
        let { components: t, ...l } = e;
        return (0, a.kt)(
          u,
          (0, n.Z)({}, c, l, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)('p', null, (0, a.kt)('img', { alt: 'Header', src: i(7352).Z, width: '1507', height: '800' })),
          (0, a.kt)('h1', { id: 'lisk-didlisk-did-module' }, '@lisk-did/lisk-did-module'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              { parentName: 'p', href: 'https://npmjs.com/package/@lisk-did/lisk-did-module' },
              (0, a.kt)('img', {
                parentName: 'a',
                src: 'https://img.shields.io/npm/v/@lisk-did/lisk-did-module',
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
                src: 'https://codecov.io/gh/aldhosutra/lisk-did/branch/main/graph/badge.svg?flag=lisk-did-module&precision=2',
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
          (0, a.kt)('p', null, 'Lisk module which implements on-chain logic for Lisk decentralized identifiers (DIDs)'),
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
          (0, a.kt)('h2', { id: 'module-architecture' }, 'Module Architecture'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('img', { alt: 'Module Architecture', src: i(9670).Z, width: '1002', height: '925' }),
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
              'npm install --save @lisk-did/lisk-did-module\n',
            ),
          ),
          (0, a.kt)('h3', { id: 'module-configurations' }, 'Module Configurations'),
          (0, a.kt)(
            'p',
            null,
            'Under your blockchain config folder, please specify required configurations for did module:',
          ),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)(
              'code',
              { parentName: 'pre', className: 'language-json' },
              '{\n  "<...other_config>": "",\n  "modules": {\n    "did": {\n      "chainspace": "enevti",\n      "autoCreateAddressDID": true\n    },\n    "<...other_modules>": ""\n  }\n}\n',
            ),
          ),
          (0, a.kt)('p', null, 'Those configuration can be explained as follows:'),
          (0, a.kt)(
            'ol',
            null,
            (0, a.kt)(
              'li',
              { parentName: 'ol' },
              (0, a.kt)('strong', { parentName: 'li' }, 'chainspace'),
              ": (REQUIRED) chainspace to be used by your chain's DID. ",
              (0, a.kt)('inlineCode', { parentName: 'li' }, 'did:lisk'),
              " require a chainspace to be defined, as it's format is as follows: ",
              (0, a.kt)('inlineCode', { parentName: 'li' }, 'did:lisk:{chainspace}:{namespace}:{unique-id}'),
            ),
            (0, a.kt)(
              'li',
              { parentName: 'ol' },
              (0, a.kt)('strong', { parentName: 'li' }, 'autoCreateAddressDID'),
              ': (default to true) whether you want to enable auto address DID creation. If this option is enabled, an address DID will be automatically created when the address sends any transaction.',
            ),
          ),
          (0, a.kt)('h3', { id: 'register-module' }, 'Register Module'),
          (0, a.kt)(
            'p',
            null,
            'Last step is to register did module to your blockchain app. Add this code to ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, './src/app/modules.ts'),
            ' as follows:',
          ),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)(
              'code',
              { parentName: 'pre', className: 'language-typescript' },
              "import { DidModule } from '@lisk-did/lisk-did-module';\n\nexport const registerModules = (app: Application, method: LiskMethod): void => {\n  // your other module registration\n  app.registerModule(new DidModule()); // add this\n};\n",
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
      p.isMDXComponent = !0;
    },
    9670: (e, t, i) => {
      i.d(t, { Z: () => n });
      const n = i.p + 'assets/images/did-module-429bc08e8105b89be42de64ebd22a7d0.jpg';
    },
    7352: (e, t, i) => {
      i.d(t, { Z: () => n });
      const n = i.p + 'assets/images/lisk-did-module-header-18407b3fa5234ac8a57cc6fb1629fa3f.jpg';
    },
  },
]);
