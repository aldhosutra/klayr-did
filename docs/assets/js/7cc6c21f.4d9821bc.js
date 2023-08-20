'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [9479],
  {
    876: (e, r, t) => {
      t.d(r, { Zo: () => d, kt: () => b });
      var i = t(2784);
      function n(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
            : (e[r] = t),
          e
        );
      }
      function l(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          r &&
            (i = i.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, i);
        }
        return t;
      }
      function a(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? l(Object(t), !0).forEach(function (r) {
                n(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
        }
        return e;
      }
      function o(e, r) {
        if (null == e) return {};
        var t,
          i,
          n = (function (e, r) {
            if (null == e) return {};
            var t,
              i,
              n = {},
              l = Object.keys(e);
            for (i = 0; i < l.length; i++) (t = l[i]), r.indexOf(t) >= 0 || (n[t] = e[t]);
            return n;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (i = 0; i < l.length; i++)
            (t = l[i]), r.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]));
        }
        return n;
      }
      var s = i.createContext({}),
        c = function (e) {
          var r = i.useContext(s),
            t = r;
          return e && (t = 'function' == typeof e ? e(r) : a(a({}, r), e)), t;
        },
        d = function (e) {
          var r = c(e.components);
          return i.createElement(s.Provider, { value: r }, e.children);
        },
        u = 'mdxType',
        p = {
          inlineCode: 'code',
          wrapper: function (e) {
            var r = e.children;
            return i.createElement(i.Fragment, {}, r);
          },
        },
        f = i.forwardRef(function (e, r) {
          var t = e.components,
            n = e.mdxType,
            l = e.originalType,
            s = e.parentName,
            d = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = c(t),
            f = n,
            b = u[''.concat(s, '.').concat(f)] || u[f] || p[f] || l;
          return t
            ? i.createElement(b, a(a({ ref: r }, d), {}, { components: t }))
            : i.createElement(b, a({ ref: r }, d));
        });
      function b(e, r) {
        var t = arguments,
          n = r && r.mdxType;
        if ('string' == typeof e || n) {
          var l = t.length,
            a = new Array(l);
          a[0] = f;
          var o = {};
          for (var s in r) hasOwnProperty.call(r, s) && (o[s] = r[s]);
          (o.originalType = e), (o[u] = 'string' == typeof e ? e : n), (a[1] = o);
          for (var c = 2; c < l; c++) a[c] = t[c];
          return i.createElement.apply(null, a);
        }
        return i.createElement.apply(null, t);
      }
      f.displayName = 'MDXCreateElement';
    },
    7970: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => s,
          contentTitle: () => a,
          default: () => p,
          frontMatter: () => l,
          metadata: () => o,
          toc: () => c,
        });
      var i = t(7896),
        n = (t(2784), t(876));
      const l = {
          id: 'index',
          title: '@lisk-did/lisk-verifiable-credentials',
          sidebar_label: 'Readme',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        a = '@lisk-did/lisk-verifiable-credentials',
        o = {
          unversionedId: 'lisk-verifiable-credentials/index',
          id: 'lisk-verifiable-credentials/index',
          title: '@lisk-did/lisk-verifiable-credentials',
          description: 'TODO: description',
          source: '@site/docs/lisk-verifiable-credentials/index.md',
          sourceDirName: 'lisk-verifiable-credentials',
          slug: '/lisk-verifiable-credentials/',
          permalink: '/docs/lisk-verifiable-credentials/',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'index',
            title: '@lisk-did/lisk-verifiable-credentials',
            sidebar_label: 'Readme',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'resolver.CachedResolver',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/resolver.CachedResolver',
          },
          next: { title: 'Exports', permalink: '/docs/lisk-verifiable-credentials/modules' },
        },
        s = {},
        c = [{ value: 'Usage', id: 'usage', level: 2 }],
        d = { toc: c },
        u = 'wrapper';
      function p(e) {
        let { components: r, ...t } = e;
        return (0, n.kt)(
          u,
          (0, i.Z)({}, d, t, { components: r, mdxType: 'MDXLayout' }),
          (0, n.kt)(
            'h1',
            { id: 'lisk-didlisk-verifiable-credentials' },
            (0, n.kt)('inlineCode', { parentName: 'h1' }, '@lisk-did/lisk-verifiable-credentials'),
          ),
          (0, n.kt)('blockquote', null, (0, n.kt)('p', { parentName: 'blockquote' }, 'TODO: description')),
          (0, n.kt)('h2', { id: 'usage' }, 'Usage'),
          (0, n.kt)(
            'pre',
            null,
            (0, n.kt)(
              'code',
              { parentName: 'pre' },
              "const liskVerifiableCredentials = require('@lisk-did/lisk-verifiable-credentials');\n\n// TODO: DEMONSTRATE API\n",
            ),
          ),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
