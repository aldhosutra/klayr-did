'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [1723],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => p, kt: () => f });
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
      function d(e) {
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
      function l(e, t) {
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
        s = function (e) {
          var t = n.useContext(o),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : d(d({}, t), e)), r;
        },
        p = function (e) {
          var t = s(e.components);
          return n.createElement(o.Provider, { value: t }, e.children);
        },
        c = 'mdxType',
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        u = n.forwardRef(function (e, t) {
          var r = e.components,
            a = e.mdxType,
            i = e.originalType,
            o = e.parentName,
            p = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            c = s(r),
            u = a,
            f = c[''.concat(o, '.').concat(u)] || c[u] || m[u] || i;
          return r
            ? n.createElement(f, d(d({ ref: t }, p), {}, { components: r }))
            : n.createElement(f, d({ ref: t }, p));
        });
      function f(e, t) {
        var r = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var i = r.length,
            d = new Array(i);
          d[0] = u;
          var l = {};
          for (var o in t) hasOwnProperty.call(t, o) && (l[o] = t[o]);
          (l.originalType = e), (l[c] = 'string' == typeof e ? e : a), (d[1] = l);
          for (var s = 2; s < i; s++) d[s] = r[s];
          return n.createElement.apply(null, d);
        }
        return n.createElement.apply(null, r);
      }
      u.displayName = 'MDXCreateElement';
    },
    6605: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => o,
          contentTitle: () => d,
          default: () => m,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => s,
        });
      var n = r(7896),
        a = (r(2784), r(876));
      const i = {
          id: 'did.BaseResolver',
          title: 'Interface: BaseResolver',
          sidebar_label: 'did.BaseResolver',
          custom_edit_url: null,
        },
        d = void 0,
        l = {
          unversionedId: 'lisk-did/interfaces/did.BaseResolver',
          id: 'lisk-did/interfaces/did.BaseResolver',
          title: 'Interface: BaseResolver',
          description: 'did.BaseResolver',
          source: '@site/docs/lisk-did/interfaces/did.BaseResolver.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.BaseResolver',
          permalink: '/docs/lisk-did/interfaces/did.BaseResolver',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.BaseResolver',
            title: 'Interface: BaseResolver',
            sidebar_label: 'did.BaseResolver',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'did.AddServiceEndpointParam',
            permalink: '/docs/lisk-did/interfaces/did.AddServiceEndpointParam',
          },
          next: { title: 'did.CipherInterface', permalink: '/docs/lisk-did/interfaces/did.CipherInterface' },
        },
        o = {},
        s = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'get', id: 'get', level: 3 },
          { value: 'Type declaration', id: 'type-declaration', level: 4 },
          { value: 'Parameters', id: 'parameters', level: 5 },
          { value: 'Returns', id: 'returns', level: 5 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
        ],
        p = { toc: s },
        c = 'wrapper';
      function m(e) {
        let { components: t, ...r } = e;
        return (0, a.kt)(
          c,
          (0, n.Z)({}, p, r, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.BaseResolver',
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
            (0, a.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.DidDocument' },
              (0, a.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
            ),
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
            (0, a.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.DidDocument' },
              (0, a.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
            ),
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
            (0, a.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.DidDocument' },
              (0, a.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
            ),
            '>',
          ),
          (0, a.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/resolver.d.ts:11'),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
