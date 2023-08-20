'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [7082],
  {
    876: (e, r, t) => {
      t.d(r, { Zo: () => s, kt: () => u });
      var a = t(2784);
      function n(e, r, t) {
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
          var a = Object.getOwnPropertySymbols(e);
          r &&
            (a = a.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, a);
        }
        return t;
      }
      function p(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? i(Object(t), !0).forEach(function (r) {
                n(e, r, t[r]);
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
          a,
          n = (function (e, r) {
            if (null == e) return {};
            var t,
              a,
              n = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++) (t = i[a]), r.indexOf(t) >= 0 || (n[t] = e[t]);
            return n;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (t = i[a]), r.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]));
        }
        return n;
      }
      var c = a.createContext({}),
        d = function (e) {
          var r = a.useContext(c),
            t = r;
          return e && (t = 'function' == typeof e ? e(r) : p(p({}, r), e)), t;
        },
        s = function (e) {
          var r = d(e.components);
          return a.createElement(c.Provider, { value: r }, e.children);
        },
        l = 'mdxType',
        y = {
          inlineCode: 'code',
          wrapper: function (e) {
            var r = e.children;
            return a.createElement(a.Fragment, {}, r);
          },
        },
        m = a.forwardRef(function (e, r) {
          var t = e.components,
            n = e.mdxType,
            i = e.originalType,
            c = e.parentName,
            s = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            l = d(t),
            m = n,
            u = l[''.concat(c, '.').concat(m)] || l[m] || y[m] || i;
          return t
            ? a.createElement(u, p(p({ ref: r }, s), {}, { components: t }))
            : a.createElement(u, p({ ref: r }, s));
        });
      function u(e, r) {
        var t = arguments,
          n = r && r.mdxType;
        if ('string' == typeof e || n) {
          var i = t.length,
            p = new Array(i);
          p[0] = m;
          var o = {};
          for (var c in r) hasOwnProperty.call(r, c) && (o[c] = r[c]);
          (o.originalType = e), (o[l] = 'string' == typeof e ? e : n), (p[1] = o);
          for (var d = 2; d < i; d++) p[d] = t[d];
          return a.createElement.apply(null, p);
        }
        return a.createElement.apply(null, t);
      }
      m.displayName = 'MDXCreateElement';
    },
    7634: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => c,
          contentTitle: () => p,
          default: () => y,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => d,
        });
      var a = t(7896),
        n = (t(2784), t(876));
      const i = {
          id: 'did.cryptography',
          title: 'Namespace: cryptography',
          sidebar_label: 'did.cryptography',
          custom_edit_url: null,
        },
        p = void 0,
        o = {
          unversionedId: 'lisk-did/namespaces/did.cryptography',
          id: 'lisk-did/namespaces/did.cryptography',
          title: 'Namespace: cryptography',
          description: 'did.cryptography',
          source: '@site/docs/lisk-did/namespaces/did.cryptography.md',
          sourceDirName: 'lisk-did/namespaces',
          slug: '/lisk-did/namespaces/did.cryptography',
          permalink: '/docs/lisk-did/namespaces/did.cryptography',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.cryptography',
            title: 'Namespace: cryptography',
            sidebar_label: 'did.cryptography',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.cryptography.key', permalink: '/docs/lisk-did/namespaces/did.cryptography.key' },
          next: { title: 'did.cryptography.method', permalink: '/docs/lisk-did/namespaces/did.cryptography.method' },
        },
        c = {},
        d = [{ value: 'Namespaces', id: 'namespaces', level: 2 }],
        s = { toc: d },
        l = 'wrapper';
      function y(e) {
        let { components: r, ...t } = e;
        return (0, n.kt)(
          l,
          (0, a.Z)({}, s, t, { components: r, mdxType: 'MDXLayout' }),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.cryptography',
          ),
          (0, n.kt)('h2', { id: 'namespaces' }, 'Namespaces'),
          (0, n.kt)(
            'ul',
            null,
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)('a', { parentName: 'li', href: '/docs/lisk-did/namespaces/did.cryptography.codec' }, 'codec'),
            ),
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did/namespaces/did.cryptography.convert' },
                'convert',
              ),
            ),
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)('a', { parentName: 'li', href: '/docs/lisk-did/namespaces/did.cryptography.key' }, 'key'),
            ),
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)('a', { parentName: 'li', href: '/docs/lisk-did/namespaces/did.cryptography.method' }, 'method'),
            ),
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did/namespaces/did.cryptography.operation' },
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
