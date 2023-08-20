'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [3236],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => u, kt: () => m });
      var r = n(2784);
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function d(e, t) {
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
            ? d(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function o(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              d = Object.keys(e);
            for (r = 0; r < d.length; r++) (n = d[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(e);
          for (r = 0; r < d.length; r++)
            (n = d[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      }
      var a = r.createContext({}),
        c = function (e) {
          var t = r.useContext(a),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : l(l({}, t), e)), n;
        },
        u = function (e) {
          var t = c(e.components);
          return r.createElement(a.Provider, { value: t }, e.children);
        },
        s = 'mdxType',
        p = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        f = r.forwardRef(function (e, t) {
          var n = e.components,
            i = e.mdxType,
            d = e.originalType,
            a = e.parentName,
            u = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = c(n),
            f = i,
            m = s[''.concat(a, '.').concat(f)] || s[f] || p[f] || d;
          return n
            ? r.createElement(m, l(l({ ref: t }, u), {}, { components: n }))
            : r.createElement(m, l({ ref: t }, u));
        });
      function m(e, t) {
        var n = arguments,
          i = t && t.mdxType;
        if ('string' == typeof e || i) {
          var d = n.length,
            l = new Array(d);
          l[0] = f;
          var o = {};
          for (var a in t) hasOwnProperty.call(t, a) && (o[a] = t[a]);
          (o.originalType = e), (o[s] = 'string' == typeof e ? e : i), (l[1] = o);
          for (var c = 2; c < d; c++) l[c] = n[c];
          return r.createElement.apply(null, l);
        }
        return r.createElement.apply(null, n);
      }
      f.displayName = 'MDXCreateElement';
    },
    6195: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => l,
          default: () => p,
          frontMatter: () => d,
          metadata: () => o,
          toc: () => c,
        });
      var r = n(7896),
        i = (n(2784), n(876));
      const d = {
          id: 'did.DocumentLoaderResult',
          title: 'Interface: DocumentLoaderResult',
          sidebar_label: 'did.DocumentLoaderResult',
          custom_edit_url: null,
        },
        l = void 0,
        o = {
          unversionedId: 'lisk-did/interfaces/did.DocumentLoaderResult',
          id: 'lisk-did/interfaces/did.DocumentLoaderResult',
          title: 'Interface: DocumentLoaderResult',
          description: 'did.DocumentLoaderResult',
          source: '@site/docs/lisk-did/interfaces/did.DocumentLoaderResult.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.DocumentLoaderResult',
          permalink: '/docs/lisk-did/interfaces/did.DocumentLoaderResult',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.DocumentLoaderResult',
            title: 'Interface: DocumentLoaderResult',
            sidebar_label: 'did.DocumentLoaderResult',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.DidModuleConfig', permalink: '/docs/lisk-did/interfaces/did.DidModuleConfig' },
          next: { title: 'did.Ed25519KeyPair', permalink: '/docs/lisk-did/interfaces/did.Ed25519KeyPair' },
        },
        a = {},
        c = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'contextUrl', id: 'contexturl', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'document', id: 'document', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'documentUrl', id: 'documenturl', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'tag', id: 'tag', level: 3 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
        ],
        u = { toc: c },
        s = 'wrapper';
      function p(e) {
        let { components: t, ...n } = e;
        return (0, i.kt)(
          s,
          (0, r.Z)({}, u, n, { components: t, mdxType: 'MDXLayout' }),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.DocumentLoaderResult',
          ),
          (0, i.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, i.kt)('h3', { id: 'contexturl' }, 'contextUrl'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'contextUrl'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'null'),
            ' ',
            '|',
            ' ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, i.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/resolver.d.ts:5'),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'document' }, 'document'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'document'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Record'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'any'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/resolver.d.ts:6'),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'documenturl' }, 'documentUrl'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'documentUrl'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, i.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/resolver.d.ts:7'),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'tag' }, 'tag'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, i.kt)('strong', { parentName: 'p' }, 'tag'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, i.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/resolver.d.ts:8'),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
