'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [2041],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => m, kt: () => u });
      var r = n(2784);
      function a(e, t, n) {
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
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
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
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var p = r.createContext({}),
        o = function (e) {
          var t = r.useContext(p),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : d(d({}, t), e)), n;
        },
        m = function (e) {
          var t = o(e.components);
          return r.createElement(p.Provider, { value: t }, e.children);
        },
        s = 'mdxType',
        c = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        k = r.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            i = e.originalType,
            p = e.parentName,
            m = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = o(n),
            k = a,
            u = s[''.concat(p, '.').concat(k)] || s[k] || c[k] || i;
          return n
            ? r.createElement(u, d(d({ ref: t }, m), {}, { components: n }))
            : r.createElement(u, d({ ref: t }, m));
        });
      function u(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var i = n.length,
            d = new Array(i);
          d[0] = k;
          var l = {};
          for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
          (l.originalType = e), (l[s] = 'string' == typeof e ? e : a), (d[1] = l);
          for (var o = 2; o < i; o++) d[o] = n[o];
          return r.createElement.apply(null, d);
        }
        return r.createElement.apply(null, n);
      }
      k.displayName = 'MDXCreateElement';
    },
    656: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => d,
          default: () => c,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => o,
        });
      var r = n(7896),
        a = (n(2784), n(876));
      const i = {
          id: 'did.CipherInterface',
          title: 'Interface: CipherInterface',
          sidebar_label: 'did.CipherInterface',
          custom_edit_url: null,
        },
        d = void 0,
        l = {
          unversionedId: 'lisk-did/interfaces/did.CipherInterface',
          id: 'lisk-did/interfaces/did.CipherInterface',
          title: 'Interface: CipherInterface',
          description: 'did.CipherInterface',
          source: '@site/docs/lisk-did/interfaces/did.CipherInterface.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.CipherInterface',
          permalink: '/docs/lisk-did/interfaces/did.CipherInterface',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.CipherInterface',
            title: 'Interface: CipherInterface',
            sidebar_label: 'did.CipherInterface',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.BaseResolver', permalink: '/docs/lisk-did/interfaces/did.BaseResolver' },
          next: { title: 'did.CreateParam', permalink: '/docs/lisk-did/interfaces/did.CreateParam' },
        },
        p = {},
        o = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'decrypt', id: 'decrypt', level: 3 },
          { value: 'Type declaration', id: 'type-declaration', level: 4 },
          { value: 'Parameters', id: 'parameters', level: 5 },
          { value: 'Returns', id: 'returns', level: 5 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'encrypt', id: 'encrypt', level: 3 },
          { value: 'Type declaration', id: 'type-declaration-1', level: 4 },
          { value: 'Parameters', id: 'parameters-1', level: 5 },
          { value: 'Returns', id: 'returns-1', level: 5 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
        ],
        m = { toc: o },
        s = 'wrapper';
      function c(e) {
        let { components: t, ...n } = e;
        return (0, a.kt)(
          s,
          (0, r.Z)({}, m, n, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.CipherInterface',
          ),
          (0, a.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, a.kt)('h3', { id: 'decrypt' }, 'decrypt'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'decrypt'),
            ': (',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '__namedParameters'),
            ': { ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'jwe'),
            ': ',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.JWEDocument' },
              (0, a.kt)('inlineCode', { parentName: 'a' }, 'JWEDocument'),
            ),
            ' ; ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'keyAgreementKey'),
            ': ',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/namespaces/did#keyagreement' },
              (0, a.kt)('inlineCode', { parentName: 'a' }, 'KeyAgreement'),
            ),
            '  }) => ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '>',
          ),
          (0, a.kt)('h4', { id: 'type-declaration' }, 'Type declaration'),
          (0, a.kt)(
            'p',
            null,
            '\u25b8 (',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '\xabdestructured\xbb'),
            '): ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '>',
          ),
          (0, a.kt)('h5', { id: 'parameters' }, 'Parameters'),
          (0, a.kt)(
            'table',
            null,
            (0, a.kt)(
              'thead',
              { parentName: 'table' },
              (0, a.kt)(
                'tr',
                { parentName: 'thead' },
                (0, a.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, a.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, a.kt)(
              'tbody',
              { parentName: 'table' },
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, '\xabdestructured\xbb'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'Object'),
                ),
              ),
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '\u203a\xa0',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'jwe'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/interfaces/did.JWEDocument' },
                    (0, a.kt)('inlineCode', { parentName: 'a' }, 'JWEDocument'),
                  ),
                ),
              ),
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '\u203a\xa0',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'keyAgreementKey'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/namespaces/did#keyagreement' },
                    (0, a.kt)('inlineCode', { parentName: 'a' }, 'KeyAgreement'),
                  ),
                ),
              ),
            ),
          ),
          (0, a.kt)('h5', { id: 'returns' }, 'Returns'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '>',
          ),
          (0, a.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:81'),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'encrypt' }, 'encrypt'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'encrypt'),
            ': (',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '__namedParameters'),
            ': { ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'data'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ' ; ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'keyResolver'),
            ': (',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'url'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ') => ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'any'),
            '>',
            ' ; ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'recipients'),
            ': { ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'header'),
            ': { ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'alg'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ' ; ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'kid'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '  }  }[]  }) => ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.JWEDocument' },
              (0, a.kt)('inlineCode', { parentName: 'a' }, 'JWEDocument'),
            ),
            '>',
          ),
          (0, a.kt)('h4', { id: 'type-declaration-1' }, 'Type declaration'),
          (0, a.kt)(
            'p',
            null,
            '\u25b8 (',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '\xabdestructured\xbb'),
            '): ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.JWEDocument' },
              (0, a.kt)('inlineCode', { parentName: 'a' }, 'JWEDocument'),
            ),
            '>',
          ),
          (0, a.kt)('h5', { id: 'parameters-1' }, 'Parameters'),
          (0, a.kt)(
            'table',
            null,
            (0, a.kt)(
              'thead',
              { parentName: 'table' },
              (0, a.kt)(
                'tr',
                { parentName: 'thead' },
                (0, a.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, a.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, a.kt)(
              'tbody',
              { parentName: 'table' },
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, '\xabdestructured\xbb'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'Object'),
                ),
              ),
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '\u203a\xa0',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'data'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '\u203a\xa0',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'keyResolver'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '(',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'url'),
                  ': ',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ') => ',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'Promise'),
                  '<',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'any'),
                  '>',
                ),
              ),
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '\u203a\xa0',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'recipients'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '{ ',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'header'),
                  ': { ',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'alg'),
                  ': ',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'kid'),
                  ': ',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  '  }  }[]',
                ),
              ),
            ),
          ),
          (0, a.kt)('h5', { id: 'returns-1' }, 'Returns'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.JWEDocument' },
              (0, a.kt)('inlineCode', { parentName: 'a' }, 'JWEDocument'),
            ),
            '>',
          ),
          (0, a.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:71'),
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
