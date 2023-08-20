'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [2672],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => p, kt: () => k });
      var a = n(2784);
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function r(e, t) {
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
            ? r(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          a,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              i = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (n = r[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      }
      var s = a.createContext({}),
        o = function (e) {
          var t = a.useContext(s),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : d(d({}, t), e)), n;
        },
        p = function (e) {
          var t = o(e.components);
          return a.createElement(s.Provider, { value: t }, e.children);
        },
        u = 'mdxType',
        c = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        m = a.forwardRef(function (e, t) {
          var n = e.components,
            i = e.mdxType,
            r = e.originalType,
            s = e.parentName,
            p = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = o(n),
            m = i,
            k = u[''.concat(s, '.').concat(m)] || u[m] || c[m] || r;
          return n
            ? a.createElement(k, d(d({ ref: t }, p), {}, { components: n }))
            : a.createElement(k, d({ ref: t }, p));
        });
      function k(e, t) {
        var n = arguments,
          i = t && t.mdxType;
        if ('string' == typeof e || i) {
          var r = n.length,
            d = new Array(r);
          d[0] = m;
          var l = {};
          for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
          (l.originalType = e), (l[u] = 'string' == typeof e ? e : i), (d[1] = l);
          for (var o = 2; o < r; o++) d[o] = n[o];
          return a.createElement.apply(null, d);
        }
        return a.createElement.apply(null, n);
      }
      m.displayName = 'MDXCreateElement';
    },
    8547: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => s,
          contentTitle: () => d,
          default: () => c,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => o,
        });
      var a = n(7896),
        i = (n(2784), n(876));
      const r = { id: 'did.utils', title: 'Namespace: utils', sidebar_label: 'did.utils', custom_edit_url: null },
        d = void 0,
        l = {
          unversionedId: 'lisk-did/namespaces/did.utils',
          id: 'lisk-did/namespaces/did.utils',
          title: 'Namespace: utils',
          description: 'did.utils',
          source: '@site/docs/lisk-did/namespaces/did.utils.md',
          sourceDirName: 'lisk-did/namespaces',
          slug: '/lisk-did/namespaces/did.utils',
          permalink: '/docs/lisk-did/namespaces/did.utils',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.utils',
            title: 'Namespace: utils',
            sidebar_label: 'did.utils',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.utils.constant', permalink: '/docs/lisk-did/namespaces/did.utils.constant' },
          next: { title: 'did.utils.object', permalink: '/docs/lisk-did/namespaces/did.utils.object' },
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
        u = 'wrapper';
      function c(e) {
        let { components: t, ...n } = e;
        return (0, i.kt)(
          u,
          (0, a.Z)({}, p, n, { components: t, mdxType: 'MDXLayout' }),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.utils',
          ),
          (0, i.kt)('h2', { id: 'namespaces' }, 'Namespaces'),
          (0, i.kt)(
            'ul',
            null,
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)('a', { parentName: 'li', href: '/docs/lisk-did/namespaces/did.utils.array' }, 'array'),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)('a', { parentName: 'li', href: '/docs/lisk-did/namespaces/did.utils.constant' }, 'constant'),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)('a', { parentName: 'li', href: '/docs/lisk-did/namespaces/did.utils.object' }, 'object'),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)('a', { parentName: 'li', href: '/docs/lisk-did/namespaces/did.utils.schema' }, 'schema'),
            ),
          ),
          (0, i.kt)('h2', { id: 'variables' }, 'Variables'),
          (0, i.kt)('h3', { id: 'contextsbysuite' }, 'contextsBySuite'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, i.kt)('strong', { parentName: 'p' }, 'contextsBySuite'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Map'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'any'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/context.d.ts:1'),
          (0, i.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, i.kt)('h3', { id: 'bootstrapaddressdiddocument' }, 'bootstrapAddressDidDocument'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'bootstrapAddressDidDocument'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'chainspace'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'publicKey?'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.DidDocument' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
            ),
            '>',
          ),
          (0, i.kt)('h4', { id: 'parameters' }, 'Parameters'),
          (0, i.kt)(
            'table',
            null,
            (0, i.kt)(
              'thead',
              { parentName: 'table' },
              (0, i.kt)(
                'tr',
                { parentName: 'thead' },
                (0, i.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, i.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, i.kt)(
              'tbody',
              { parentName: 'table' },
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'chainspace'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'publicKey?'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.DidDocument' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
            ),
            '>',
          ),
          (0, i.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/bootstrap.d.ts:4'),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'bootstrapemptydiddocument' }, 'bootstrapEmptyDidDocument'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'bootstrapEmptyDidDocument'),
            '(): ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.DidDocument' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns-1' }, 'Returns'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.DidDocument' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
            ),
          ),
          (0, i.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/bootstrap.d.ts:3'),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'validatediddocument' }, 'validateDIDDocument'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'validateDIDDocument'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'did'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'boolean'),
          ),
          (0, i.kt)('h4', { id: 'parameters-1' }, 'Parameters'),
          (0, i.kt)(
            'table',
            null,
            (0, i.kt)(
              'thead',
              { parentName: 'table' },
              (0, i.kt)(
                'tr',
                { parentName: 'thead' },
                (0, i.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, i.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, i.kt)(
              'tbody',
              { parentName: 'table' },
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'did'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/interfaces/did.DidDocument' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
                  ),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns-2' }, 'Returns'),
          (0, i.kt)('p', null, (0, i.kt)('inlineCode', { parentName: 'p' }, 'boolean')),
          (0, i.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/validator.d.ts:2'),
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
