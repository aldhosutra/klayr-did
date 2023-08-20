'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [5416],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => c, kt: () => m });
      var a = n(2784);
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
        }
        return r;
      }
      var p = a.createContext({}),
        o = function (e) {
          var t = a.useContext(p),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : d(d({}, t), e)), n;
        },
        c = function (e) {
          var t = o(e.components);
          return a.createElement(p.Provider, { value: t }, e.children);
        },
        s = 'mdxType',
        k = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        u = a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            i = e.originalType,
            p = e.parentName,
            c = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = o(n),
            u = r,
            m = s[''.concat(p, '.').concat(u)] || s[u] || k[u] || i;
          return n
            ? a.createElement(m, d(d({ ref: t }, c), {}, { components: n }))
            : a.createElement(m, d({ ref: t }, c));
        });
      function m(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var i = n.length,
            d = new Array(i);
          d[0] = u;
          var l = {};
          for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
          (l.originalType = e), (l[s] = 'string' == typeof e ? e : r), (d[1] = l);
          for (var o = 2; o < i; o++) d[o] = n[o];
          return a.createElement.apply(null, d);
        }
        return a.createElement.apply(null, n);
      }
      u.displayName = 'MDXCreateElement';
    },
    2924: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => d,
          default: () => k,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => o,
        });
      var a = n(7896),
        r = (n(2784), n(876));
      const i = {
          id: 'did.cryptography.codec',
          title: 'Namespace: codec',
          sidebar_label: 'did.cryptography.codec',
          custom_edit_url: null,
        },
        d = void 0,
        l = {
          unversionedId: 'lisk-did/namespaces/did.cryptography.codec',
          id: 'lisk-did/namespaces/did.cryptography.codec',
          title: 'Namespace: codec',
          description: 'did.cryptography.codec',
          source: '@site/docs/lisk-did/namespaces/did.cryptography.codec.md',
          sourceDirName: 'lisk-did/namespaces',
          slug: '/lisk-did/namespaces/did.cryptography.codec',
          permalink: '/docs/lisk-did/namespaces/did.cryptography.codec',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.cryptography.codec',
            title: 'Namespace: codec',
            sidebar_label: 'did.cryptography.codec',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.client.utils', permalink: '/docs/lisk-did/namespaces/did.client.utils' },
          next: { title: 'did.cryptography.convert', permalink: '/docs/lisk-did/namespaces/did.cryptography.convert' },
        },
        p = {},
        o = [
          { value: 'Functions', id: 'functions', level: 2 },
          { value: 'decodeJWEDocument', id: 'decodejwedocument', level: 3 },
          { value: 'Parameters', id: 'parameters', level: 4 },
          { value: 'Returns', id: 'returns', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'decodePrivateKey', id: 'decodeprivatekey', level: 3 },
          { value: 'Parameters', id: 'parameters-1', level: 4 },
          { value: 'Returns', id: 'returns-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'decodePublicKey', id: 'decodepublickey', level: 3 },
          { value: 'Parameters', id: 'parameters-2', level: 4 },
          { value: 'Returns', id: 'returns-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'encodeJWEDocument', id: 'encodejwedocument', level: 3 },
          { value: 'Parameters', id: 'parameters-3', level: 4 },
          { value: 'Returns', id: 'returns-3', level: 4 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'encodePrivateKey', id: 'encodeprivatekey', level: 3 },
          { value: 'Parameters', id: 'parameters-4', level: 4 },
          { value: 'Returns', id: 'returns-4', level: 4 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
          { value: 'encodePublicKey', id: 'encodepublickey', level: 3 },
          { value: 'Parameters', id: 'parameters-5', level: 4 },
          { value: 'Returns', id: 'returns-5', level: 4 },
          { value: 'Defined in', id: 'defined-in-5', level: 4 },
        ],
        c = { toc: o },
        s = 'wrapper';
      function k(e) {
        let { components: t, ...n } = e;
        return (0, r.kt)(
          s,
          (0, a.Z)({}, c, n, { components: t, mdxType: 'MDXLayout' }),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.',
            (0, r.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did.cryptography' }, 'cryptography'),
            '.codec',
          ),
          (0, r.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, r.kt)('h3', { id: 'decodejwedocument' }, 'decodeJWEDocument'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'decodeJWEDocument'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'buf'),
            '): ',
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.JWEDocument' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'JWEDocument'),
            ),
          ),
          (0, r.kt)('h4', { id: 'parameters' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'buf'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.JWEDocument' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'JWEDocument'),
            ),
          ),
          (0, r.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/cryptography/codec.d.ts:8'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'decodeprivatekey' }, 'decodePrivateKey'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'decodePrivateKey'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'multibasePrivateKey'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
          ),
          (0, r.kt)('h4', { id: 'parameters-1' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'multibasePrivateKey'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-1' }, 'Returns'),
          (0, r.kt)('p', null, (0, r.kt)('inlineCode', { parentName: 'p' }, 'Buffer')),
          (0, r.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/cryptography/codec.d.ts:6'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'decodepublickey' }, 'decodePublicKey'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'decodePublicKey'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'multibasePublicKey'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
          ),
          (0, r.kt)('h4', { id: 'parameters-2' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'multibasePublicKey'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-2' }, 'Returns'),
          (0, r.kt)('p', null, (0, r.kt)('inlineCode', { parentName: 'p' }, 'Buffer')),
          (0, r.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/cryptography/codec.d.ts:4'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'encodejwedocument' }, 'encodeJWEDocument'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'encodeJWEDocument'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'jwe'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
          ),
          (0, r.kt)('h4', { id: 'parameters-3' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'jwe'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/interfaces/did.JWEDocument' },
                    (0, r.kt)('inlineCode', { parentName: 'a' }, 'JWEDocument'),
                  ),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-3' }, 'Returns'),
          (0, r.kt)('p', null, (0, r.kt)('inlineCode', { parentName: 'p' }, 'Buffer')),
          (0, r.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/cryptography/codec.d.ts:7'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'encodeprivatekey' }, 'encodePrivateKey'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'encodePrivateKey'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'liskPrivateKey'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, r.kt)('h4', { id: 'parameters-4' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'liskPrivateKey'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-4' }, 'Returns'),
          (0, r.kt)('p', null, (0, r.kt)('inlineCode', { parentName: 'p' }, 'string')),
          (0, r.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/cryptography/codec.d.ts:5'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'encodepublickey' }, 'encodePublicKey'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'encodePublicKey'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'liskPublicKey'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, r.kt)('h4', { id: 'parameters-5' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'liskPublicKey'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-5' }, 'Returns'),
          (0, r.kt)('p', null, (0, r.kt)('inlineCode', { parentName: 'p' }, 'string')),
          (0, r.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/cryptography/codec.d.ts:3'),
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
