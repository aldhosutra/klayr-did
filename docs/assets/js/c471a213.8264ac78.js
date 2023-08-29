'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [2757],
  {
    876: (e, t, a) => {
      a.d(t, { Zo: () => s, kt: () => k });
      var n = a(2784);
      function r(e, t, a) {
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
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(a), !0).forEach(function (t) {
                r(e, t, a[t]);
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
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++) (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (a = i[n]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]));
        }
        return r;
      }
      var p = n.createContext({}),
        o = function (e) {
          var t = n.useContext(p),
            a = t;
          return e && (a = 'function' == typeof e ? e(t) : l(l({}, t), e)), a;
        },
        s = function (e) {
          var t = o(e.components);
          return n.createElement(p.Provider, { value: t }, e.children);
        },
        m = 'mdxType',
        c = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        u = n.forwardRef(function (e, t) {
          var a = e.components,
            r = e.mdxType,
            i = e.originalType,
            p = e.parentName,
            s = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            m = o(a),
            u = r,
            k = m[''.concat(p, '.').concat(u)] || m[u] || c[u] || i;
          return a
            ? n.createElement(k, l(l({ ref: t }, s), {}, { components: a }))
            : n.createElement(k, l({ ref: t }, s));
        });
      function k(e, t) {
        var a = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var i = a.length,
            l = new Array(i);
          l[0] = u;
          var d = {};
          for (var p in t) hasOwnProperty.call(t, p) && (d[p] = t[p]);
          (d.originalType = e), (d[m] = 'string' == typeof e ? e : r), (l[1] = d);
          for (var o = 2; o < i; o++) l[o] = a[o];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, a);
      }
      u.displayName = 'MDXCreateElement';
    },
    4084: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => c,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => o,
        });
      var n = a(7896),
        r = (a(2784), a(876));
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
        p = {},
        o = [
          { value: 'Functions', id: 'functions', level: 2 },
          { value: 'decodeJSON', id: 'decodejson', level: 3 },
          { value: 'Type parameters', id: 'type-parameters', level: 4 },
          { value: 'Parameters', id: 'parameters', level: 4 },
          { value: 'Returns', id: 'returns', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'encodeJSON', id: 'encodejson', level: 3 },
          { value: 'Parameters', id: 'parameters-1', level: 4 },
          { value: 'Returns', id: 'returns-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'serializer', id: 'serializer', level: 3 },
          { value: 'Type parameters', id: 'type-parameters-1', level: 4 },
          { value: 'Parameters', id: 'parameters-2', level: 4 },
          { value: 'Returns', id: 'returns-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
        ],
        s = { toc: o },
        m = 'wrapper';
      function c(e) {
        let { components: t, ...a } = e;
        return (0, r.kt)(
          m,
          (0, n.Z)({}, s, a, { components: t, mdxType: 'MDXLayout' }),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.',
            (0, r.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did.utils' }, 'utils'),
            '.object',
          ),
          (0, r.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, r.kt)('h3', { id: 'decodejson' }, 'decodeJSON'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'decodeJSON'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'T'),
            '>',
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'jsonByte'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'T'),
          ),
          (0, r.kt)('h4', { id: 'type-parameters' }, 'Type parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)('tr', { parentName: 'thead' }, (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name')),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'T'),
                ),
              ),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'jsonByte'),
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
          (0, r.kt)('p', null, (0, r.kt)('inlineCode', { parentName: 'p' }, 'T')),
          (0, r.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/object.d.ts:4'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'encodejson' }, 'encodeJSON'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'encodeJSON'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'json'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'json'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Record'),
                  '<',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ', ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'any'),
                  '>',
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-1' }, 'Returns'),
          (0, r.kt)('p', null, (0, r.kt)('inlineCode', { parentName: 'p' }, 'Buffer')),
          (0, r.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/object.d.ts:3'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'serializer' }, 'serializer'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'serializer'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'T'),
            '>',
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'data'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'JSONObject'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'T'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'type-parameters-1' }, 'Type parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)('tr', { parentName: 'thead' }, (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name')),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'T'),
                ),
              ),
            ),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'data'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Record'),
                  '<',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'any'),
                  ', ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'any'),
                  '>',
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-2' }, 'Returns'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'JSONObject'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'T'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/object.d.ts:5'),
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
