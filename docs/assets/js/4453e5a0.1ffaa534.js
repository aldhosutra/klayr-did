'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [1458],
  {
    876: (e, t, a) => {
      a.d(t, { Zo: () => p, kt: () => m });
      var r = a(2784);
      function n(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = a),
          e
        );
      }
      function i(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(a), !0).forEach(function (t) {
                n(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : i(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      function d(e, t) {
        if (null == e) return {};
        var a,
          r,
          n = (function (e, t) {
            if (null == e) return {};
            var a,
              r,
              n = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (a = i[r]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]));
        }
        return n;
      }
      var o = r.createContext({}),
        s = function (e) {
          var t = r.useContext(o),
            a = t;
          return e && (a = 'function' == typeof e ? e(t) : l(l({}, t), e)), a;
        },
        p = function (e) {
          var t = s(e.components);
          return r.createElement(o.Provider, { value: t }, e.children);
        },
        c = 'mdxType',
        f = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        k = r.forwardRef(function (e, t) {
          var a = e.components,
            n = e.mdxType,
            i = e.originalType,
            o = e.parentName,
            p = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            c = s(a),
            k = n,
            m = c[''.concat(o, '.').concat(k)] || c[k] || f[k] || i;
          return a
            ? r.createElement(m, l(l({ ref: t }, p), {}, { components: a }))
            : r.createElement(m, l({ ref: t }, p));
        });
      function m(e, t) {
        var a = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var i = a.length,
            l = new Array(i);
          l[0] = k;
          var d = {};
          for (var o in t) hasOwnProperty.call(t, o) && (d[o] = t[o]);
          (d.originalType = e), (d[c] = 'string' == typeof e ? e : n), (l[1] = d);
          for (var s = 2; s < i; s++) l[s] = a[s];
          return r.createElement.apply(null, l);
        }
        return r.createElement.apply(null, a);
      }
      k.displayName = 'MDXCreateElement';
    },
    8055: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => o,
          contentTitle: () => l,
          default: () => f,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => s,
        });
      var r = a(7896),
        n = (a(2784), a(876));
      const i = {
          id: 'codec',
          title: 'Namespace: codec',
          sidebar_label: 'codec',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        l = void 0,
        d = {
          unversionedId: 'lisk-verifiable-credentials/namespaces/codec',
          id: 'lisk-verifiable-credentials/namespaces/codec',
          title: 'Namespace: codec',
          description: 'Functions',
          source: '@site/docs/lisk-verifiable-credentials/namespaces/codec.md',
          sourceDirName: 'lisk-verifiable-credentials/namespaces',
          slug: '/lisk-verifiable-credentials/namespaces/codec',
          permalink: '/docs/lisk-verifiable-credentials/namespaces/codec',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'codec',
            title: 'Namespace: codec',
            sidebar_label: 'codec',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'Exports', permalink: '/docs/lisk-verifiable-credentials/modules' },
          next: { title: 'documentLoader', permalink: '/docs/lisk-verifiable-credentials/namespaces/documentLoader' },
        },
        o = {},
        s = [
          { value: 'Functions', id: 'functions', level: 2 },
          { value: 'decodeCredential', id: 'decodecredential', level: 3 },
          { value: 'Parameters', id: 'parameters', level: 4 },
          { value: 'Returns', id: 'returns', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'decodePresentation', id: 'decodepresentation', level: 3 },
          { value: 'Parameters', id: 'parameters-1', level: 4 },
          { value: 'Returns', id: 'returns-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'decodeProof', id: 'decodeproof', level: 3 },
          { value: 'Parameters', id: 'parameters-2', level: 4 },
          { value: 'Returns', id: 'returns-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'encodeCredential', id: 'encodecredential', level: 3 },
          { value: 'Parameters', id: 'parameters-3', level: 4 },
          { value: 'Returns', id: 'returns-3', level: 4 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'encodePresentation', id: 'encodepresentation', level: 3 },
          { value: 'Parameters', id: 'parameters-4', level: 4 },
          { value: 'Returns', id: 'returns-4', level: 4 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
          { value: 'encodeProof', id: 'encodeproof', level: 3 },
          { value: 'Parameters', id: 'parameters-5', level: 4 },
          { value: 'Returns', id: 'returns-5', level: 4 },
          { value: 'Defined in', id: 'defined-in-5', level: 4 },
        ],
        p = { toc: s },
        c = 'wrapper';
      function f(e) {
        let { components: t, ...a } = e;
        return (0, n.kt)(
          c,
          (0, r.Z)({}, p, a, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, n.kt)('h3', { id: 'decodecredential' }, 'decodeCredential'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'decodeCredential'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'serializedVC'),
            '): ',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-verifiable-credentials/modules#verifiablecredential' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerifiableCredential'),
            ),
          ),
          (0, n.kt)('h4', { id: 'parameters' }, 'Parameters'),
          (0, n.kt)(
            'table',
            null,
            (0, n.kt)(
              'thead',
              { parentName: 'table' },
              (0, n.kt)(
                'tr',
                { parentName: 'thead' },
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
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
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'serializedVC'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-verifiable-credentials/modules#verifiablecredential' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerifiableCredential'),
            ),
          ),
          (0, n.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-verifiable-credentials/src/codec/credentials.ts#L10',
              },
              'lisk-verifiable-credentials/src/codec/credentials.ts:10',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'decodepresentation' }, 'decodePresentation'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'decodePresentation'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'serializedVP'),
            '): ',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-verifiable-credentials/modules#verifiablepresentation' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerifiablePresentation'),
            ),
          ),
          (0, n.kt)('h4', { id: 'parameters-1' }, 'Parameters'),
          (0, n.kt)(
            'table',
            null,
            (0, n.kt)(
              'thead',
              { parentName: 'table' },
              (0, n.kt)(
                'tr',
                { parentName: 'thead' },
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
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
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'serializedVP'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns-1' }, 'Returns'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-verifiable-credentials/modules#verifiablepresentation' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerifiablePresentation'),
            ),
          ),
          (0, n.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-verifiable-credentials/src/codec/presentation.ts#L10',
              },
              'lisk-verifiable-credentials/src/codec/presentation.ts:10',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'decodeproof' }, 'decodeProof'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'decodeProof'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'proofBuffer'),
            '): ',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-verifiable-credentials/interfaces/Proof' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'Proof'),
            ),
          ),
          (0, n.kt)('h4', { id: 'parameters-2' }, 'Parameters'),
          (0, n.kt)(
            'table',
            null,
            (0, n.kt)(
              'thead',
              { parentName: 'table' },
              (0, n.kt)(
                'tr',
                { parentName: 'thead' },
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
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
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'proofBuffer'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns-2' }, 'Returns'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-verifiable-credentials/interfaces/Proof' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'Proof'),
            ),
          ),
          (0, n.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-verifiable-credentials/src/codec/proof.ts#L38',
              },
              'lisk-verifiable-credentials/src/codec/proof.ts:38',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'encodecredential' }, 'encodeCredential'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'encodeCredential'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'unserializedVC'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
          ),
          (0, n.kt)('h4', { id: 'parameters-3' }, 'Parameters'),
          (0, n.kt)(
            'table',
            null,
            (0, n.kt)(
              'thead',
              { parentName: 'table' },
              (0, n.kt)(
                'tr',
                { parentName: 'thead' },
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
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
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'unserializedVC'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-verifiable-credentials/modules#verifiablecredential' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerifiableCredential'),
                  ),
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns-3' }, 'Returns'),
          (0, n.kt)('p', null, (0, n.kt)('inlineCode', { parentName: 'p' }, 'Buffer')),
          (0, n.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-verifiable-credentials/src/codec/credentials.ts#L4',
              },
              'lisk-verifiable-credentials/src/codec/credentials.ts:4',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'encodepresentation' }, 'encodePresentation'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'encodePresentation'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'unserializedVP'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
          ),
          (0, n.kt)('h4', { id: 'parameters-4' }, 'Parameters'),
          (0, n.kt)(
            'table',
            null,
            (0, n.kt)(
              'thead',
              { parentName: 'table' },
              (0, n.kt)(
                'tr',
                { parentName: 'thead' },
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
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
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'unserializedVP'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-verifiable-credentials/modules#verifiablepresentation' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerifiablePresentation'),
                  ),
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns-4' }, 'Returns'),
          (0, n.kt)('p', null, (0, n.kt)('inlineCode', { parentName: 'p' }, 'Buffer')),
          (0, n.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-verifiable-credentials/src/codec/presentation.ts#L4',
              },
              'lisk-verifiable-credentials/src/codec/presentation.ts:4',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'encodeproof' }, 'encodeProof'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'encodeProof'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'proof'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
          ),
          (0, n.kt)('h4', { id: 'parameters-5' }, 'Parameters'),
          (0, n.kt)(
            'table',
            null,
            (0, n.kt)(
              'thead',
              { parentName: 'table' },
              (0, n.kt)(
                'tr',
                { parentName: 'thead' },
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
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
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'proof'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-verifiable-credentials/interfaces/Proof' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'Proof'),
                  ),
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns-5' }, 'Returns'),
          (0, n.kt)('p', null, (0, n.kt)('inlineCode', { parentName: 'p' }, 'Buffer')),
          (0, n.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-verifiable-credentials/src/codec/proof.ts#L33',
              },
              'lisk-verifiable-credentials/src/codec/proof.ts:33',
            ),
          ),
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
