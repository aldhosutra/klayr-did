'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [2757],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => p, kt: () => k });
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
      var s = n.createContext({}),
        o = function (e) {
          var t = n.useContext(s),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : l(l({}, t), e)), r;
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
          var r = e.components,
            a = e.mdxType,
            i = e.originalType,
            s = e.parentName,
            p = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            c = o(r),
            m = a,
            k = c[''.concat(s, '.').concat(m)] || c[m] || u[m] || i;
          return r
            ? n.createElement(k, l(l({ ref: t }, p), {}, { components: r }))
            : n.createElement(k, l({ ref: t }, p));
        });
      function k(e, t) {
        var r = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var i = r.length,
            l = new Array(i);
          l[0] = m;
          var d = {};
          for (var s in t) hasOwnProperty.call(t, s) && (d[s] = t[s]);
          (d.originalType = e), (d[c] = 'string' == typeof e ? e : a), (l[1] = d);
          for (var o = 2; o < i; o++) l[o] = r[o];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, r);
      }
      m.displayName = 'MDXCreateElement';
    },
    4084: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => s,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => o,
        });
      var n = r(7896),
        a = (r(2784), r(876));
      const i = {
          id: 'did.utils.object',
          title: 'Namespace: object',
          sidebar_label: 'did.utils.object',
          custom_edit_url: null,
        },
        l = void 0,
        d = {
          unversionedId: 'lisk-did/namespaces/did.utils.object',
          id: 'lisk-did/namespaces/did.utils.object',
          title: 'Namespace: object',
          description: 'did.utils.object',
          source: '@site/docs/lisk-did/namespaces/did.utils.object.md',
          sourceDirName: 'lisk-did/namespaces',
          slug: '/lisk-did/namespaces/did.utils.object',
          permalink: '/docs/lisk-did/namespaces/did.utils.object',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.utils.object',
            title: 'Namespace: object',
            sidebar_label: 'did.utils.object',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.utils', permalink: '/docs/lisk-did/namespaces/did.utils' },
          next: { title: 'did.utils.schema', permalink: '/docs/lisk-did/namespaces/did.utils.schema' },
        },
        s = {},
        o = [
          { value: 'Functions', id: 'functions', level: 2 },
          { value: 'serializer', id: 'serializer', level: 3 },
          { value: 'Type parameters', id: 'type-parameters', level: 4 },
          { value: 'Parameters', id: 'parameters', level: 4 },
          { value: 'Returns', id: 'returns', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
        ],
        p = { toc: o },
        c = 'wrapper';
      function u(e) {
        let { components: t, ...r } = e;
        return (0, a.kt)(
          c,
          (0, n.Z)({}, p, r, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.',
            (0, a.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did.utils' }, 'utils'),
            '.object',
          ),
          (0, a.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, a.kt)('h3', { id: 'serializer' }, 'serializer'),
          (0, a.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'serializer'),
            '<',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'T'),
            '>',
            '(',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'data'),
            '): ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'JSONObject'),
            '<',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'T'),
            '>',
          ),
          (0, a.kt)('h4', { id: 'type-parameters' }, 'Type parameters'),
          (0, a.kt)(
            'table',
            null,
            (0, a.kt)(
              'thead',
              { parentName: 'table' },
              (0, a.kt)('tr', { parentName: 'thead' }, (0, a.kt)('th', { parentName: 'tr', align: 'left' }, 'Name')),
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
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'T'),
                ),
              ),
            ),
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
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'data'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'Record'),
                  '<',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'any'),
                  ', ',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'any'),
                  '>',
                ),
              ),
            ),
          ),
          (0, a.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'JSONObject'),
            '<',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'T'),
            '>',
          ),
          (0, a.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/object.d.ts:2'),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
