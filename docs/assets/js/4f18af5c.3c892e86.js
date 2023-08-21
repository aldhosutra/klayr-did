'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [9061],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => p, kt: () => f });
      var a = r(2784);
      function n(e, t, r) {
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
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
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
          a,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              a,
              n = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (r = i[a]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
        }
        return n;
      }
      var s = a.createContext({}),
        o = function (e) {
          var t = a.useContext(s),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : l(l({}, t), e)), r;
        },
        p = function (e) {
          var t = o(e.components);
          return a.createElement(s.Provider, { value: t }, e.children);
        },
        c = 'mdxType',
        k = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        m = a.forwardRef(function (e, t) {
          var r = e.components,
            n = e.mdxType,
            i = e.originalType,
            s = e.parentName,
            p = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            c = o(r),
            m = n,
            f = c[''.concat(s, '.').concat(m)] || c[m] || k[m] || i;
          return r
            ? a.createElement(f, l(l({ ref: t }, p), {}, { components: r }))
            : a.createElement(f, l({ ref: t }, p));
        });
      function f(e, t) {
        var r = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var i = r.length,
            l = new Array(i);
          l[0] = m;
          var d = {};
          for (var s in t) hasOwnProperty.call(t, s) && (d[s] = t[s]);
          (d.originalType = e), (d[c] = 'string' == typeof e ? e : n), (l[1] = d);
          for (var o = 2; o < i; o++) l[o] = r[o];
          return a.createElement.apply(null, l);
        }
        return a.createElement.apply(null, r);
      }
      m.displayName = 'MDXCreateElement';
    },
    2317: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => s,
          contentTitle: () => l,
          default: () => k,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => o,
        });
      var a = r(7896),
        n = (r(2784), r(876));
      const i = {
          id: 'resolver',
          title: 'Namespace: resolver',
          sidebar_label: 'resolver',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        l = void 0,
        d = {
          unversionedId: 'lisk-decentralized-identifier/namespaces/resolver',
          id: 'lisk-decentralized-identifier/namespaces/resolver',
          title: 'Namespace: resolver',
          description: 'Interfaces',
          source: '@site/docs/lisk-decentralized-identifier/namespaces/resolver.md',
          sourceDirName: 'lisk-decentralized-identifier/namespaces',
          slug: '/lisk-decentralized-identifier/namespaces/resolver',
          permalink: '/docs/lisk-decentralized-identifier/namespaces/resolver',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'resolver',
            title: 'Namespace: resolver',
            sidebar_label: 'resolver',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'cryptography', permalink: '/docs/lisk-decentralized-identifier/namespaces/cryptography' },
          next: { title: 'utils', permalink: '/docs/lisk-decentralized-identifier/namespaces/utils' },
        },
        s = {},
        o = [
          { value: 'Interfaces', id: 'interfaces', level: 2 },
          { value: 'Variables', id: 'variables', level: 2 },
          { value: 'driver', id: 'driver', level: 3 },
          { value: 'Type declaration', id: 'type-declaration', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'Functions', id: 'functions', level: 2 },
          { value: 'createChainResolver', id: 'createchainresolver', level: 3 },
          { value: 'Parameters', id: 'parameters', level: 4 },
          { value: 'Returns', id: 'returns', level: 4 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'createIPCResolver', id: 'createipcresolver', level: 3 },
          { value: 'Parameters', id: 'parameters-1', level: 4 },
          { value: 'Returns', id: 'returns-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'createResolver', id: 'createresolver', level: 3 },
          { value: 'Parameters', id: 'parameters-2', level: 4 },
          { value: 'Returns', id: 'returns-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'createWSResolver', id: 'createwsresolver', level: 3 },
          { value: 'Parameters', id: 'parameters-3', level: 4 },
          { value: 'Returns', id: 'returns-3', level: 4 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
        ],
        p = { toc: o },
        c = 'wrapper';
      function k(e) {
        let { components: t, ...r } = e;
        return (0, n.kt)(
          c,
          (0, a.Z)({}, p, r, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)('h2', { id: 'interfaces' }, 'Interfaces'),
          (0, n.kt)(
            'ul',
            null,
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/resolver.CachedResolver' },
                'CachedResolver',
              ),
            ),
          ),
          (0, n.kt)('h2', { id: 'variables' }, 'Variables'),
          (0, n.kt)('h3', { id: 'driver' }, 'driver'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, n.kt)('strong', { parentName: 'p' }, 'driver'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Object'),
          ),
          (0, n.kt)('h4', { id: 'type-declaration' }, 'Type declaration'),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'createLocalDriver'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '(',
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'chainspace'),
                  ': ',
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ') => ',
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'LiskLocalDidDriver'),
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'createOffChainDriver'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '(',
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'param'),
                  ': { ',
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'ipc?'),
                  ': ',
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'ws?'),
                  ': ',
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  '  }) => ',
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'LiskOffChainDidDriver'),
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'createOnChainDriver'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '(',
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'context'),
                  ': ',
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                  ', ',
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'method'),
                  ': ',
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/interfaces/DidMethod' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'DidMethod'),
                  ),
                  ') => ',
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'LiskOnChainDidDriver'),
                ),
              ),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/resolver/index.ts#L16',
              },
              'packages/lisk-decentralized-identifier/src/resolver/index.ts:16',
            ),
          ),
          (0, n.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, n.kt)('h3', { id: 'createchainresolver' }, 'createChainResolver'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'createChainResolver'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'context'),
            ', ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'method'),
            '): ',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/resolver.CachedResolver' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'CachedResolver'),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'context'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'method'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/interfaces/DidMethod' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'DidMethod'),
                  ),
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
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/resolver.CachedResolver' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'CachedResolver'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/resolver/resolver.ts#L54',
              },
              'packages/lisk-decentralized-identifier/src/resolver/resolver.ts:54',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'createipcresolver' }, 'createIPCResolver'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'createIPCResolver'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'ipc'),
            '): ',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/resolver.CachedResolver' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'CachedResolver'),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'ipc'),
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
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/resolver.CachedResolver' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'CachedResolver'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/resolver/resolver.ts#L46',
              },
              'packages/lisk-decentralized-identifier/src/resolver/resolver.ts:46',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'createresolver' }, 'createResolver'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'createResolver'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'options'),
            '): ',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/resolver.CachedResolver' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'CachedResolver'),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'options'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/modules#createresolverparam' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'CreateResolverParam'),
                  ),
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
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/resolver.CachedResolver' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'CachedResolver'),
            ),
          ),
          (0, n.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/resolver/resolver.ts#L61',
              },
              'packages/lisk-decentralized-identifier/src/resolver/resolver.ts:61',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'createwsresolver' }, 'createWSResolver'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'createWSResolver'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'ws'),
            '): ',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/resolver.CachedResolver' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'CachedResolver'),
            ),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'ws'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns-3' }, 'Returns'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/resolver.CachedResolver' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'CachedResolver'),
            ),
          ),
          (0, n.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/resolver/resolver.ts#L50',
              },
              'packages/lisk-decentralized-identifier/src/resolver/resolver.ts:50',
            ),
          ),
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
