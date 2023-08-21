'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [7231],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => c, kt: () => m });
      var n = r(2784);
      function i(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
          e
        );
      }
      function l(e, t) {
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
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function d(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      var o = n.createContext({}),
        s = function (e) {
          var t = n.useContext(o),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : a(a({}, t), e)), r;
        },
        c = function (e) {
          var t = s(e.components);
          return n.createElement(o.Provider, { value: t }, e.children);
        },
        u = 'mdxType',
        p = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        f = n.forwardRef(function (e, t) {
          var r = e.components,
            i = e.mdxType,
            l = e.originalType,
            o = e.parentName,
            c = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = s(r),
            f = i,
            m = u[''.concat(o, '.').concat(f)] || u[f] || p[f] || l;
          return r
            ? n.createElement(m, a(a({ ref: t }, c), {}, { components: r }))
            : n.createElement(m, a({ ref: t }, c));
        });
      function m(e, t) {
        var r = arguments,
          i = t && t.mdxType;
        if ('string' == typeof e || i) {
          var l = r.length,
            a = new Array(l);
          a[0] = f;
          var d = {};
          for (var o in t) hasOwnProperty.call(t, o) && (d[o] = t[o]);
          (d.originalType = e), (d[u] = 'string' == typeof e ? e : i), (a[1] = d);
          for (var s = 2; s < l; s++) a[s] = r[s];
          return n.createElement.apply(null, a);
        }
        return n.createElement.apply(null, r);
      }
      f.displayName = 'MDXCreateElement';
    },
    3031: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => o,
          contentTitle: () => a,
          default: () => p,
          frontMatter: () => l,
          metadata: () => d,
          toc: () => s,
        });
      var n = r(7896),
        i = (r(2784), r(876));
      const l = {
          id: 'DocumentLoaderResult',
          title: 'Interface: DocumentLoaderResult',
          sidebar_label: 'DocumentLoaderResult',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        a = void 0,
        d = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/DocumentLoaderResult',
          id: 'lisk-decentralized-identifier/interfaces/DocumentLoaderResult',
          title: 'Interface: DocumentLoaderResult',
          description: 'Properties',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/DocumentLoaderResult.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/DocumentLoaderResult',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/DocumentLoaderResult',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'DocumentLoaderResult',
            title: 'Interface: DocumentLoaderResult',
            sidebar_label: 'DocumentLoaderResult',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'DidModuleConfig',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/DidModuleConfig',
          },
          next: { title: 'Ed25519KeyPair', permalink: '/docs/lisk-decentralized-identifier/interfaces/Ed25519KeyPair' },
        },
        o = {},
        s = [
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
        c = { toc: s },
        u = 'wrapper';
      function p(e) {
        let { components: t, ...r } = e;
        return (0, i.kt)(
          u,
          (0, n.Z)({}, c, r, { components: t, mdxType: 'MDXLayout' }),
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
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-decentralized-identifier/src/types/resolver.ts#L6',
              },
              'packages/lisk-decentralized-identifier/src/types/resolver.ts:6',
            ),
          ),
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
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-decentralized-identifier/src/types/resolver.ts#L7',
              },
              'packages/lisk-decentralized-identifier/src/types/resolver.ts:7',
            ),
          ),
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
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-decentralized-identifier/src/types/resolver.ts#L8',
              },
              'packages/lisk-decentralized-identifier/src/types/resolver.ts:8',
            ),
          ),
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
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-decentralized-identifier/src/types/resolver.ts#L9',
              },
              'packages/lisk-decentralized-identifier/src/types/resolver.ts:9',
            ),
          ),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
