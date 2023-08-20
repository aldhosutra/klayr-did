'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [7639],
  {
    876: (e, r, t) => {
      t.d(r, { Zo: () => s, kt: () => u });
      var n = t(2784);
      function a(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
            : (e[r] = t),
          e
        );
      }
      function i(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function c(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? i(Object(t), !0).forEach(function (r) {
                a(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : i(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
        }
        return e;
      }
      function o(e, r) {
        if (null == e) return {};
        var t,
          n,
          a = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              a = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++) (t = i[n]), r.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (t = i[n]), r.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
        }
        return a;
      }
      var p = n.createContext({}),
        l = function (e) {
          var r = n.useContext(p),
            t = r;
          return e && (t = 'function' == typeof e ? e(r) : c(c({}, r), e)), t;
        },
        s = function (e) {
          var r = l(e.components);
          return n.createElement(p.Provider, { value: r }, e.children);
        },
        d = 'mdxType',
        y = {
          inlineCode: 'code',
          wrapper: function (e) {
            var r = e.children;
            return n.createElement(n.Fragment, {}, r);
          },
        },
        m = n.forwardRef(function (e, r) {
          var t = e.components,
            a = e.mdxType,
            i = e.originalType,
            p = e.parentName,
            s = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            d = l(t),
            m = a,
            u = d[''.concat(p, '.').concat(m)] || d[m] || y[m] || i;
          return t
            ? n.createElement(u, c(c({ ref: r }, s), {}, { components: t }))
            : n.createElement(u, c({ ref: r }, s));
        });
      function u(e, r) {
        var t = arguments,
          a = r && r.mdxType;
        if ('string' == typeof e || a) {
          var i = t.length,
            c = new Array(i);
          c[0] = m;
          var o = {};
          for (var p in r) hasOwnProperty.call(r, p) && (o[p] = r[p]);
          (o.originalType = e), (o[d] = 'string' == typeof e ? e : a), (c[1] = o);
          for (var l = 2; l < i; l++) c[l] = t[l];
          return n.createElement.apply(null, c);
        }
        return n.createElement.apply(null, t);
      }
      m.displayName = 'MDXCreateElement';
    },
    3036: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => p,
          contentTitle: () => c,
          default: () => y,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => l,
        });
      var n = t(7896),
        a = (t(2784), t(876));
      const i = {
          id: 'cryptography',
          title: 'Namespace: cryptography',
          sidebar_label: 'cryptography',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        c = void 0,
        o = {
          unversionedId: 'lisk-decentralized-identifier/namespaces/cryptography',
          id: 'lisk-decentralized-identifier/namespaces/cryptography',
          title: 'Namespace: cryptography',
          description: 'Namespaces',
          source: '@site/docs/lisk-decentralized-identifier/namespaces/cryptography.md',
          sourceDirName: 'lisk-decentralized-identifier/namespaces',
          slug: '/lisk-decentralized-identifier/namespaces/cryptography',
          permalink: '/docs/lisk-decentralized-identifier/namespaces/cryptography',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'cryptography',
            title: 'Namespace: cryptography',
            sidebar_label: 'cryptography',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'client', permalink: '/docs/lisk-decentralized-identifier/namespaces/client' },
          next: { title: 'resolver', permalink: '/docs/lisk-decentralized-identifier/namespaces/resolver' },
        },
        p = {},
        l = [{ value: 'Namespaces', id: 'namespaces', level: 2 }],
        s = { toc: l },
        d = 'wrapper';
      function y(e) {
        let { components: r, ...t } = e;
        return (0, a.kt)(
          d,
          (0, n.Z)({}, s, t, { components: r, mdxType: 'MDXLayout' }),
          (0, a.kt)('h2', { id: 'namespaces' }, 'Namespaces'),
          (0, a.kt)(
            'ul',
            null,
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              (0, a.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/namespaces/cryptography.codec' },
                'codec',
              ),
            ),
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              (0, a.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/namespaces/cryptography.convert' },
                'convert',
              ),
            ),
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              (0, a.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/namespaces/cryptography.key' },
                'key',
              ),
            ),
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              (0, a.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/namespaces/cryptography.method' },
                'method',
              ),
            ),
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              (0, a.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/namespaces/cryptography.operation' },
                'operation',
              ),
            ),
          ),
        );
      }
      y.isMDXComponent = !0;
    },
  },
]);
