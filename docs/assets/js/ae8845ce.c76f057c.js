'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [1136],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => c, kt: () => f });
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
      function l(e) {
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
      function d(e, t) {
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
          return e && (n = 'function' == typeof e ? e(t) : l(l({}, t), e)), n;
        },
        c = function (e) {
          var t = o(e.components);
          return r.createElement(p.Provider, { value: t }, e.children);
        },
        s = 'mdxType',
        m = {
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
            c = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = o(n),
            k = a,
            f = s[''.concat(p, '.').concat(k)] || s[k] || m[k] || i;
          return n
            ? r.createElement(f, l(l({ ref: t }, c), {}, { components: n }))
            : r.createElement(f, l({ ref: t }, c));
        });
      function f(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var i = n.length,
            l = new Array(i);
          l[0] = k;
          var d = {};
          for (var p in t) hasOwnProperty.call(t, p) && (d[p] = t[p]);
          (d.originalType = e), (d[s] = 'string' == typeof e ? e : a), (l[1] = d);
          for (var o = 2; o < i; o++) l[o] = n[o];
          return r.createElement.apply(null, l);
        }
        return r.createElement.apply(null, n);
      }
      k.displayName = 'MDXCreateElement';
    },
    166: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => o,
        });
      var r = n(7896),
        a = (n(2784), n(876));
      const i = {
          id: 'CipherInterface',
          title: 'Interface: CipherInterface',
          sidebar_label: 'CipherInterface',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        l = void 0,
        d = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/CipherInterface',
          id: 'lisk-decentralized-identifier/interfaces/CipherInterface',
          title: 'Interface: CipherInterface',
          description: 'Properties',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/CipherInterface.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/CipherInterface',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/CipherInterface',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'CipherInterface',
            title: 'Interface: CipherInterface',
            sidebar_label: 'CipherInterface',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'BaseResolver', permalink: '/docs/lisk-decentralized-identifier/interfaces/BaseResolver' },
          next: { title: 'CreateParam', permalink: '/docs/lisk-decentralized-identifier/interfaces/CreateParam' },
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
        c = { toc: o },
        s = 'wrapper';
      function m(e) {
        let { components: t, ...n } = e;
        return (0, a.kt)(
          s,
          (0, r.Z)({}, c, n, { components: t, mdxType: 'MDXLayout' }),
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
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/JWEDocument' },
              (0, a.kt)('inlineCode', { parentName: 'a' }, 'JWEDocument'),
            ),
            ' ; ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'keyAgreementKey'),
            ': ',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/modules#keyagreement' },
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
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/interfaces/JWEDocument' },
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
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/modules#keyagreement' },
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
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L80',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:80',
            ),
          ),
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
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/JWEDocument' },
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
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/JWEDocument' },
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
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/JWEDocument' },
              (0, a.kt)('inlineCode', { parentName: 'a' }, 'JWEDocument'),
            ),
            '>',
          ),
          (0, a.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L71',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:71',
            ),
          ),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
