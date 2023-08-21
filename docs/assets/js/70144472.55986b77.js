'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [2800],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => d, kt: () => m });
      var n = r(2784);
      function i(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
          e
        );
      }
      function o(e, t) {
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
            ? o(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function c(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      var l = n.createContext({}),
        s = function (e) {
          var t = n.useContext(l),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : a(a({}, t), e)), r;
        },
        d = function (e) {
          var t = s(e.components);
          return n.createElement(l.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        f = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        u = n.forwardRef(function (e, t) {
          var r = e.components,
            i = e.mdxType,
            o = e.originalType,
            l = e.parentName,
            d = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = s(r),
            u = i,
            m = p[''.concat(l, '.').concat(u)] || p[u] || f[u] || o;
          return r
            ? n.createElement(m, a(a({ ref: t }, d), {}, { components: r }))
            : n.createElement(m, a({ ref: t }, d));
        });
      function m(e, t) {
        var r = arguments,
          i = t && t.mdxType;
        if ('string' == typeof e || i) {
          var o = r.length,
            a = new Array(o);
          a[0] = u;
          var c = {};
          for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
          (c.originalType = e), (c[p] = 'string' == typeof e ? e : i), (a[1] = c);
          for (var s = 2; s < o; s++) a[s] = r[s];
          return n.createElement.apply(null, a);
        }
        return n.createElement.apply(null, r);
      }
      u.displayName = 'MDXCreateElement';
    },
    7449: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => l,
          contentTitle: () => a,
          default: () => f,
          frontMatter: () => o,
          metadata: () => c,
          toc: () => s,
        });
      var n = r(7896),
        i = (r(2784), r(876));
      const o = {
          id: 'NonceStoreData',
          title: 'Interface: NonceStoreData',
          sidebar_label: 'NonceStoreData',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        a = void 0,
        c = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/NonceStoreData',
          id: 'lisk-decentralized-identifier/interfaces/NonceStoreData',
          title: 'Interface: NonceStoreData',
          description: 'Properties',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/NonceStoreData.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/NonceStoreData',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/NonceStoreData',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'NonceStoreData',
            title: 'Interface: NonceStoreData',
            sidebar_label: 'NonceStoreData',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'KeysCommand', permalink: '/docs/lisk-decentralized-identifier/interfaces/KeysCommand' },
          next: {
            title: 'RemoveControllersParam',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/RemoveControllersParam',
          },
        },
        l = {},
        s = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'nonce', id: 'nonce', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
        ],
        d = { toc: s },
        p = 'wrapper';
      function f(e) {
        let { components: t, ...r } = e;
        return (0, i.kt)(
          p,
          (0, n.Z)({}, d, r, { components: t, mdxType: 'MDXLayout' }),
          (0, i.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, i.kt)('h3', { id: 'nonce' }, 'nonce'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'nonce'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'bigint'),
          ),
          (0, i.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-decentralized-identifier/src/types/stores/nonce.ts#L2',
              },
              'packages/lisk-decentralized-identifier/src/types/stores/nonce.ts:2',
            ),
          ),
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
