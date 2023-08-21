'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [8242],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => p, kt: () => k });
      var n = i(2784);
      function a(e, t, i) {
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
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(i), !0).forEach(function (t) {
                a(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : r(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      function d(e, t) {
        if (null == e) return {};
        var i,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var i,
              n,
              a = {},
              r = Object.keys(e);
            for (n = 0; n < r.length; n++) (i = r[n]), t.indexOf(i) >= 0 || (a[i] = e[i]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (n = 0; n < r.length; n++)
            (i = r[n]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (a[i] = e[i]));
        }
        return a;
      }
      var s = n.createContext({}),
        o = function (e) {
          var t = n.useContext(s),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : l(l({}, t), e)), i;
        },
        p = function (e) {
          var t = o(e.components);
          return n.createElement(s.Provider, { value: t }, e.children);
        },
        c = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        m = n.forwardRef(function (e, t) {
          var i = e.components,
            a = e.mdxType,
            r = e.originalType,
            s = e.parentName,
            p = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            c = o(i),
            m = a,
            k = c[''.concat(s, '.').concat(m)] || c[m] || u[m] || r;
          return i
            ? n.createElement(k, l(l({ ref: t }, p), {}, { components: i }))
            : n.createElement(k, l({ ref: t }, p));
        });
      function k(e, t) {
        var i = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var r = i.length,
            l = new Array(r);
          l[0] = m;
          var d = {};
          for (var s in t) hasOwnProperty.call(t, s) && (d[s] = t[s]);
          (d.originalType = e), (d[c] = 'string' == typeof e ? e : a), (l[1] = d);
          for (var o = 2; o < r; o++) l[o] = i[o];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, i);
      }
      m.displayName = 'MDXCreateElement';
    },
    2363: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => s,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => r,
          metadata: () => d,
          toc: () => o,
        });
      var n = i(7896),
        a = (i(2784), i(876));
      const r = {
          id: 'utils',
          title: 'Namespace: utils',
          sidebar_label: 'utils',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        l = void 0,
        d = {
          unversionedId: 'lisk-decentralized-identifier/namespaces/utils',
          id: 'lisk-decentralized-identifier/namespaces/utils',
          title: 'Namespace: utils',
          description: 'Namespaces',
          source: '@site/docs/lisk-decentralized-identifier/namespaces/utils.md',
          sourceDirName: 'lisk-decentralized-identifier/namespaces',
          slug: '/lisk-decentralized-identifier/namespaces/utils',
          permalink: '/docs/lisk-decentralized-identifier/namespaces/utils',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'utils',
            title: 'Namespace: utils',
            sidebar_label: 'utils',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'resolver', permalink: '/docs/lisk-decentralized-identifier/namespaces/resolver' },
          next: { title: 'client.utils', permalink: '/docs/lisk-decentralized-identifier/namespaces/client.utils' },
        },
        s = {},
        o = [
          { value: 'Namespaces', id: 'namespaces', level: 2 },
          { value: 'Variables', id: 'variables', level: 2 },
          { value: 'contextsBySuite', id: 'contextsbysuite', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'Functions', id: 'functions', level: 2 },
          { value: 'bootstrapAddressDidDocument', id: 'bootstrapaddressdiddocument', level: 3 },
          { value: 'Parameters', id: 'parameters', level: 4 },
          { value: 'Returns', id: 'returns', level: 4 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'bootstrapEmptyDidDocument', id: 'bootstrapemptydiddocument', level: 3 },
          { value: 'Returns', id: 'returns-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'validateDIDDocument', id: 'validatediddocument', level: 3 },
          { value: 'Parameters', id: 'parameters-1', level: 4 },
          { value: 'Returns', id: 'returns-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
        ],
        p = { toc: o },
        c = 'wrapper';
      function u(e) {
        let { components: t, ...i } = e;
        return (0, a.kt)(
          c,
          (0, n.Z)({}, p, i, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)('h2', { id: 'namespaces' }, 'Namespaces'),
          (0, a.kt)(
            'ul',
            null,
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              (0, a.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/namespaces/utils.array' },
                'array',
              ),
            ),
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              (0, a.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/namespaces/utils.constant' },
                'constant',
              ),
            ),
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              (0, a.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/namespaces/utils.object' },
                'object',
              ),
            ),
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              (0, a.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/namespaces/utils.schema' },
                'schema',
              ),
            ),
          ),
          (0, a.kt)('h2', { id: 'variables' }, 'Variables'),
          (0, a.kt)('h3', { id: 'contextsbysuite' }, 'contextsBySuite'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'contextsBySuite'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Map'),
            '<',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ', ',
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-decentralized-identifier/src/utils/context.ts#L10',
              },
              'packages/lisk-decentralized-identifier/src/utils/context.ts:10',
            ),
          ),
          (0, a.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, a.kt)('h3', { id: 'bootstrapaddressdiddocument' }, 'bootstrapAddressDidDocument'),
          (0, a.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'bootstrapAddressDidDocument'),
            '(',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'chainspace'),
            ', ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'publicKey?'),
            '): ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/DidDocument' },
              (0, a.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
            ),
            '>',
          ),
          (0, a.kt)('h4', { id: 'parameters' }, 'Parameters'),
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
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'chainspace'),
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
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'publicKey?'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, a.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/DidDocument' },
              (0, a.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-decentralized-identifier/src/utils/bootstrap.ts#L18',
              },
              'packages/lisk-decentralized-identifier/src/utils/bootstrap.ts:18',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'bootstrapemptydiddocument' }, 'bootstrapEmptyDidDocument'),
          (0, a.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'bootstrapEmptyDidDocument'),
            '(): ',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/DidDocument' },
              (0, a.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
            ),
          ),
          (0, a.kt)('h4', { id: 'returns-1' }, 'Returns'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/DidDocument' },
              (0, a.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
            ),
          ),
          (0, a.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-decentralized-identifier/src/utils/bootstrap.ts#L4',
              },
              'packages/lisk-decentralized-identifier/src/utils/bootstrap.ts:4',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'validatediddocument' }, 'validateDIDDocument'),
          (0, a.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'validateDIDDocument'),
            '(',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'did'),
            '): ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'boolean'),
          ),
          (0, a.kt)('h4', { id: 'parameters-1' }, 'Parameters'),
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
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'did'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/interfaces/DidDocument' },
                    (0, a.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
                  ),
                ),
              ),
            ),
          ),
          (0, a.kt)('h4', { id: 'returns-2' }, 'Returns'),
          (0, a.kt)('p', null, (0, a.kt)('inlineCode', { parentName: 'p' }, 'boolean')),
          (0, a.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-decentralized-identifier/src/utils/validator.ts#L5',
              },
              'packages/lisk-decentralized-identifier/src/utils/validator.ts:5',
            ),
          ),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
