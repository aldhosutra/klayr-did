'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [6780],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => s, kt: () => u });
      var n = r(2784);
      function a(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
          e
        );
      }
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                a(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function d(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
        }
        return a;
      }
      var o = n.createContext({}),
        p = function (e) {
          var t = n.useContext(o),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : l(l({}, t), e)), r;
        },
        s = function (e) {
          var t = p(e.components);
          return n.createElement(o.Provider, { value: t }, e.children);
        },
        c = 'mdxType',
        k = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        m = n.forwardRef(function (e, t) {
          var r = e.components,
            a = e.mdxType,
            i = e.originalType,
            o = e.parentName,
            s = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            c = p(r),
            m = a,
            u = c[''.concat(o, '.').concat(m)] || c[m] || k[m] || i;
          return r
            ? n.createElement(u, l(l({ ref: t }, s), {}, { components: r }))
            : n.createElement(u, l({ ref: t }, s));
        });
      function u(e, t) {
        var r = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var i = r.length,
            l = new Array(i);
          l[0] = m;
          var d = {};
          for (var o in t) hasOwnProperty.call(t, o) && (d[o] = t[o]);
          (d.originalType = e), (d[c] = 'string' == typeof e ? e : a), (l[1] = d);
          for (var p = 2; p < i; p++) l[p] = r[p];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, r);
      }
      m.displayName = 'MDXCreateElement';
    },
    9448: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => o,
          contentTitle: () => l,
          default: () => k,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => p,
        });
      var n = r(7896),
        a = (r(2784), r(876));
      const i = {
          id: 'resolver.CachedResolver',
          title: 'Interface: CachedResolver',
          sidebar_label: 'resolver.CachedResolver',
          custom_edit_url: null,
        },
        l = void 0,
        d = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/resolver.CachedResolver',
          id: 'lisk-decentralized-identifier/interfaces/resolver.CachedResolver',
          title: 'Interface: CachedResolver',
          description: 'resolver.CachedResolver',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/resolver.CachedResolver.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/resolver.CachedResolver',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/resolver.CachedResolver',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'resolver.CachedResolver',
            title: 'Interface: CachedResolver',
            sidebar_label: 'resolver.CachedResolver',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'VerificationMethod',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/VerificationMethod',
          },
          next: { title: 'Readme', permalink: '/docs/lisk-verifiable-credentials/' },
        },
        o = {},
        p = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'get', id: 'get', level: 3 },
          { value: 'Type declaration', id: 'type-declaration', level: 4 },
          { value: 'Parameters', id: 'parameters', level: 5 },
          { value: 'Returns', id: 'returns', level: 5 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'method', id: 'method', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'use', id: 'use', level: 3 },
          { value: 'Type declaration', id: 'type-declaration-1', level: 4 },
          { value: 'Parameters', id: 'parameters-1', level: 5 },
          { value: 'Returns', id: 'returns-1', level: 5 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
        ],
        s = { toc: p },
        c = 'wrapper';
      function k(e) {
        let { components: t, ...r } = e;
        return (0, a.kt)(
          c,
          (0, n.Z)({}, s, r, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/namespaces/resolver' },
              'resolver',
            ),
            '.CachedResolver',
          ),
          (0, a.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, a.kt)('h3', { id: 'get' }, 'get'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'get'),
            ': (',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '__namedParameters'),
            ': { ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'did?'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ' ; ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'url?'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '  }) => ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'any'),
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
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'any'),
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
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'did?'),
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
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'url?'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'string'),
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
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'any'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/resolver/resolver.ts#L12',
              },
              'packages/lisk-decentralized-identifier/src/resolver/resolver.ts:12',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'method' }, 'method'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'method'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '"lisk"'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/resolver/resolver.ts#L10',
              },
              'packages/lisk-decentralized-identifier/src/resolver/resolver.ts:10',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'use' }, 'use'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'use'),
            ': (',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'driver'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'any'),
            ') => ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'void'),
          ),
          (0, a.kt)('h4', { id: 'type-declaration-1' }, 'Type declaration'),
          (0, a.kt)(
            'p',
            null,
            '\u25b8 (',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'driver'),
            '): ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'void'),
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
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'driver'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'any'),
                ),
              ),
            ),
          ),
          (0, a.kt)('h5', { id: 'returns-1' }, 'Returns'),
          (0, a.kt)('p', null, (0, a.kt)('inlineCode', { parentName: 'p' }, 'void')),
          (0, a.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/resolver/resolver.ts#L11',
              },
              'packages/lisk-decentralized-identifier/src/resolver/resolver.ts:11',
            ),
          ),
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
