'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [1990],
  {
    876: (e, t, a) => {
      a.d(t, { Zo: () => o, kt: () => k });
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
        s = function (e) {
          var t = r.useContext(p),
            a = t;
          return e && (a = 'function' == typeof e ? e(t) : l(l({}, t), e)), a;
        },
        o = function (e) {
          var t = s(e.components);
          return r.createElement(p.Provider, { value: t }, e.children);
        },
        m = 'mdxType',
        c = {
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
            m = s(a),
            u = n,
            k = m[''.concat(p, '.').concat(u)] || m[u] || c[u] || i;
          return a
            ? r.createElement(k, l(l({ ref: t }, o), {}, { components: a }))
            : r.createElement(k, l({ ref: t }, o));
        });
      function k(e, t) {
        var a = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var i = a.length,
            l = new Array(i);
          l[0] = u;
          var d = {};
          for (var p in t) hasOwnProperty.call(t, p) && (d[p] = t[p]);
          (d.originalType = e), (d[m] = 'string' == typeof e ? e : n), (l[1] = d);
          for (var s = 2; s < i; s++) l[s] = a[s];
          return r.createElement.apply(null, l);
        }
        return r.createElement.apply(null, a);
      }
      u.displayName = 'MDXCreateElement';
    },
    2720: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => c,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => s,
        });
      var r = a(7896),
        n = (a(2784), a(876));
      const i = {
          id: 'did.utils.array',
          title: 'Namespace: array',
          sidebar_label: 'did.utils.array',
          custom_edit_url: null,
        },
        l = void 0,
        d = {
          unversionedId: 'lisk-did/namespaces/did.utils.array',
          id: 'lisk-did/namespaces/did.utils.array',
          title: 'Namespace: array',
          description: 'did.utils.array',
          source: '@site/docs/lisk-did/namespaces/did.utils.array.md',
          sourceDirName: 'lisk-did/namespaces',
          slug: '/lisk-did/namespaces/did.utils.array',
          permalink: '/docs/lisk-did/namespaces/did.utils.array',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.utils.array',
            title: 'Namespace: array',
            sidebar_label: 'did.utils.array',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.resolver', permalink: '/docs/lisk-did/namespaces/did.resolver' },
          next: { title: 'did.utils.constant', permalink: '/docs/lisk-did/namespaces/did.utils.constant' },
        },
        p = {},
        s = [
          { value: 'Functions', id: 'functions', level: 2 },
          { value: 'asyncFilter', id: 'asyncfilter', level: 3 },
          { value: 'Type parameters', id: 'type-parameters', level: 4 },
          { value: 'Parameters', id: 'parameters', level: 4 },
          { value: 'Returns', id: 'returns', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'findIntersection', id: 'findintersection', level: 3 },
          { value: 'Type parameters', id: 'type-parameters-1', level: 4 },
          { value: 'Parameters', id: 'parameters-1', level: 4 },
          { value: 'Returns', id: 'returns-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
        ],
        o = { toc: s },
        m = 'wrapper';
      function c(e) {
        let { components: t, ...a } = e;
        return (0, n.kt)(
          m,
          (0, r.Z)({}, o, a, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.',
            (0, n.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did.utils' }, 'utils'),
            '.array',
          ),
          (0, n.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, n.kt)('h3', { id: 'asyncfilter' }, 'asyncFilter'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'asyncFilter'),
            '<',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'T'),
            '>',
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'arr'),
            ', ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'predicate'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'T'),
            '[]',
            '>',
          ),
          (0, n.kt)('h4', { id: 'type-parameters' }, 'Type parameters'),
          (0, n.kt)(
            'table',
            null,
            (0, n.kt)(
              'thead',
              { parentName: 'table' },
              (0, n.kt)('tr', { parentName: 'thead' }, (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Name')),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'T'),
                ),
              ),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'arr'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'T'),
                  '[]',
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'predicate'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '(',
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'data'),
                  ': ',
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'T'),
                  ') => ',
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'Promise'),
                  '<',
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'boolean'),
                  '>',
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'T'),
            '[]',
            '>',
          ),
          (0, n.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/array.d.ts:2'),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'findintersection' }, 'findIntersection'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'findIntersection'),
            '<',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'T'),
            '>',
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'arr'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'T'),
            '[]',
          ),
          (0, n.kt)('h4', { id: 'type-parameters-1' }, 'Type parameters'),
          (0, n.kt)(
            'table',
            null,
            (0, n.kt)(
              'thead',
              { parentName: 'table' },
              (0, n.kt)('tr', { parentName: 'thead' }, (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Name')),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'T'),
                ),
              ),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'arr'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'T'),
                  '[][]',
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns-1' }, 'Returns'),
          (0, n.kt)('p', null, (0, n.kt)('inlineCode', { parentName: 'p' }, 'T'), '[]'),
          (0, n.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/array.d.ts:1'),
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
