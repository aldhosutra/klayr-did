'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [5958],
  {
    876: (e, t, a) => {
      a.d(t, { Zo: () => o, kt: () => m });
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
      var p = r.createContext({}),
        c = function (e) {
          var t = r.useContext(p),
            a = t;
          return e && (a = 'function' == typeof e ? e(t) : l(l({}, t), e)), a;
        },
        o = function (e) {
          var t = c(e.components);
          return r.createElement(p.Provider, { value: t }, e.children);
        },
        s = 'mdxType',
        k = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        u = r.forwardRef(function (e, t) {
          var a = e.components,
            n = e.mdxType,
            i = e.originalType,
            p = e.parentName,
            o = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = c(a),
            u = n,
            m = s[''.concat(p, '.').concat(u)] || s[u] || k[u] || i;
          return a
            ? r.createElement(m, l(l({ ref: t }, o), {}, { components: a }))
            : r.createElement(m, l({ ref: t }, o));
        });
      function m(e, t) {
        var a = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var i = a.length,
            l = new Array(i);
          l[0] = u;
          var d = {};
          for (var p in t) hasOwnProperty.call(t, p) && (d[p] = t[p]);
          (d.originalType = e), (d[s] = 'string' == typeof e ? e : n), (l[1] = d);
          for (var c = 2; c < i; c++) l[c] = a[c];
          return r.createElement.apply(null, l);
        }
        return r.createElement.apply(null, a);
      }
      u.displayName = 'MDXCreateElement';
    },
    3669: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => k,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => c,
        });
      var r = a(7896),
        n = (a(2784), a(876));
      const i = {
          id: 'cryptography.codec',
          title: 'Namespace: codec',
          sidebar_label: 'cryptography.codec',
          custom_edit_url: null,
        },
        l = void 0,
        d = {
          unversionedId: 'lisk-decentralized-identifier/namespaces/cryptography.codec',
          id: 'lisk-decentralized-identifier/namespaces/cryptography.codec',
          title: 'Namespace: codec',
          description: 'cryptography.codec',
          source: '@site/docs/lisk-decentralized-identifier/namespaces/cryptography.codec.md',
          sourceDirName: 'lisk-decentralized-identifier/namespaces',
          slug: '/lisk-decentralized-identifier/namespaces/cryptography.codec',
          permalink: '/docs/lisk-decentralized-identifier/namespaces/cryptography.codec',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'cryptography.codec',
            title: 'Namespace: codec',
            sidebar_label: 'cryptography.codec',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'client.utils', permalink: '/docs/lisk-decentralized-identifier/namespaces/client.utils' },
          next: {
            title: 'cryptography.convert',
            permalink: '/docs/lisk-decentralized-identifier/namespaces/cryptography.convert',
          },
        },
        p = {},
        c = [
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
        o = { toc: c },
        s = 'wrapper';
      function k(e) {
        let { components: t, ...a } = e;
        return (0, n.kt)(
          s,
          (0, r.Z)({}, o, a, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/namespaces/cryptography' },
              'cryptography',
            ),
            '.codec',
          ),
          (0, n.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, n.kt)('h3', { id: 'decodejwedocument' }, 'decodeJWEDocument'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'decodeJWEDocument'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'buf'),
            '): ',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/JWEDocument' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'JWEDocument'),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'buf'),
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
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/JWEDocument' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'JWEDocument'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/cryptography/codec.ts#L59',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/codec.ts:59',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'decodeprivatekey' }, 'decodePrivateKey'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'decodePrivateKey'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'multibasePrivateKey'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'multibasePrivateKey'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns-1' }, 'Returns'),
          (0, n.kt)('p', null, (0, n.kt)('inlineCode', { parentName: 'p' }, 'Buffer')),
          (0, n.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/cryptography/codec.ts#L48',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/codec.ts:48',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'decodepublickey' }, 'decodePublicKey'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'decodePublicKey'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'multibasePublicKey'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'multibasePublicKey'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns-2' }, 'Returns'),
          (0, n.kt)('p', null, (0, n.kt)('inlineCode', { parentName: 'p' }, 'Buffer')),
          (0, n.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/cryptography/codec.ts#L34',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/codec.ts:34',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'encodejwedocument' }, 'encodeJWEDocument'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'encodeJWEDocument'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'jwe'),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'jwe'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/interfaces/JWEDocument' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'JWEDocument'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/cryptography/codec.ts#L55',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/codec.ts:55',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'encodeprivatekey' }, 'encodePrivateKey'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'encodePrivateKey'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'liskPrivateKey'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'liskPrivateKey'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns-4' }, 'Returns'),
          (0, n.kt)('p', null, (0, n.kt)('inlineCode', { parentName: 'p' }, 'string')),
          (0, n.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/cryptography/codec.ts#L41',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/codec.ts:41',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'encodepublickey' }, 'encodePublicKey'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'encodePublicKey'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'liskPublicKey'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'liskPublicKey'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns-5' }, 'Returns'),
          (0, n.kt)('p', null, (0, n.kt)('inlineCode', { parentName: 'p' }, 'string')),
          (0, n.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/cryptography/codec.ts#L27',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/codec.ts:27',
            ),
          ),
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
