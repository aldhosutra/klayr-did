'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [959],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => s, kt: () => m });
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
      function d(e, t) {
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
      var c = n.createContext({}),
        l = function (e) {
          var t = n.useContext(c),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : a(a({}, t), e)), r;
        },
        s = function (e) {
          var t = l(e.components);
          return n.createElement(c.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        f = n.forwardRef(function (e, t) {
          var r = e.components,
            i = e.mdxType,
            o = e.originalType,
            c = e.parentName,
            s = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = l(r),
            f = i,
            m = p[''.concat(c, '.').concat(f)] || p[f] || u[f] || o;
          return r
            ? n.createElement(m, a(a({ ref: t }, s), {}, { components: r }))
            : n.createElement(m, a({ ref: t }, s));
        });
      function m(e, t) {
        var r = arguments,
          i = t && t.mdxType;
        if ('string' == typeof e || i) {
          var o = r.length,
            a = new Array(o);
          a[0] = f;
          var d = {};
          for (var c in t) hasOwnProperty.call(t, c) && (d[c] = t[c]);
          (d.originalType = e), (d[p] = 'string' == typeof e ? e : i), (a[1] = d);
          for (var l = 2; l < o; l++) a[l] = r[l];
          return n.createElement.apply(null, a);
        }
        return n.createElement.apply(null, r);
      }
      f.displayName = 'MDXCreateElement';
    },
    1120: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => c,
          contentTitle: () => a,
          default: () => u,
          frontMatter: () => o,
          metadata: () => d,
          toc: () => l,
        });
      var n = r(7896),
        i = (r(2784), r(876));
      const o = {
          id: 'did.NonceStoreData',
          title: 'Interface: NonceStoreData',
          sidebar_label: 'did.NonceStoreData',
          custom_edit_url: null,
        },
        a = void 0,
        d = {
          unversionedId: 'lisk-did/interfaces/did.NonceStoreData',
          id: 'lisk-did/interfaces/did.NonceStoreData',
          title: 'Interface: NonceStoreData',
          description: 'did.NonceStoreData',
          source: '@site/docs/lisk-did/interfaces/did.NonceStoreData.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.NonceStoreData',
          permalink: '/docs/lisk-did/interfaces/did.NonceStoreData',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.NonceStoreData',
            title: 'Interface: NonceStoreData',
            sidebar_label: 'did.NonceStoreData',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.KeysCommand', permalink: '/docs/lisk-did/interfaces/did.KeysCommand' },
          next: {
            title: 'did.RemoveControllersParam',
            permalink: '/docs/lisk-did/interfaces/did.RemoveControllersParam',
          },
        },
        c = {},
        l = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'nonce', id: 'nonce', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
        ],
        s = { toc: l },
        p = 'wrapper';
      function u(e) {
        let { components: t, ...r } = e;
        return (0, i.kt)(
          p,
          (0, n.Z)({}, s, r, { components: t, mdxType: 'MDXLayout' }),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.NonceStoreData',
          ),
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
          (0, i.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/stores/nonce.d.ts:2'),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
