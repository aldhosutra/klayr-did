'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [7817],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => c, kt: () => f });
      var i = r(2784);
      function n(e, t, r) {
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
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
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
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              i,
              n = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++) (r = o[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (r = o[i]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
        }
        return n;
      }
      var a = i.createContext({}),
        s = function (e) {
          var t = i.useContext(a),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : l(l({}, t), e)), r;
        },
        c = function (e) {
          var t = s(e.components);
          return i.createElement(a.Provider, { value: t }, e.children);
        },
        u = 'mdxType',
        p = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return i.createElement(i.Fragment, {}, t);
          },
        },
        m = i.forwardRef(function (e, t) {
          var r = e.components,
            n = e.mdxType,
            o = e.originalType,
            a = e.parentName,
            c = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = s(r),
            m = n,
            f = u[''.concat(a, '.').concat(m)] || u[m] || p[m] || o;
          return r
            ? i.createElement(f, l(l({ ref: t }, c), {}, { components: r }))
            : i.createElement(f, l({ ref: t }, c));
        });
      function f(e, t) {
        var r = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var o = r.length,
            l = new Array(o);
          l[0] = m;
          var d = {};
          for (var a in t) hasOwnProperty.call(t, a) && (d[a] = t[a]);
          (d.originalType = e), (d[u] = 'string' == typeof e ? e : n), (l[1] = d);
          for (var s = 2; s < o; s++) l[s] = r[s];
          return i.createElement.apply(null, l);
        }
        return i.createElement.apply(null, r);
      }
      m.displayName = 'MDXCreateElement';
    },
    1927: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => a,
          contentTitle: () => l,
          default: () => p,
          frontMatter: () => o,
          metadata: () => d,
          toc: () => s,
        });
      var i = r(7896),
        n = (r(2784), r(876));
      const o = {
          id: 'index',
          title: '@lisk-did/lisk-did-module',
          sidebar_label: 'Readme',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        l = '@lisk-did/lisk-did-module',
        d = {
          unversionedId: 'lisk-did-module/index',
          id: 'lisk-did-module/index',
          title: '@lisk-did/lisk-did-module',
          description: 'TODO: description',
          source: '@site/docs/lisk-did-module/index.md',
          sourceDirName: 'lisk-did-module',
          slug: '/lisk-did-module/',
          permalink: '/docs/lisk-did-module/',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'index',
            title: '@lisk-did/lisk-did-module',
            sidebar_label: 'Readme',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'vc.VerificationKey', permalink: '/docs/lisk-did/interfaces/vc.VerificationKey' },
          next: { title: 'Exports', permalink: '/docs/lisk-did-module/modules' },
        },
        a = {},
        s = [{ value: 'Usage', id: 'usage', level: 2 }],
        c = { toc: s },
        u = 'wrapper';
      function p(e) {
        let { components: t, ...r } = e;
        return (0, n.kt)(
          u,
          (0, i.Z)({}, c, r, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)(
            'h1',
            { id: 'lisk-didlisk-did-module' },
            (0, n.kt)('inlineCode', { parentName: 'h1' }, '@lisk-did/lisk-did-module'),
          ),
          (0, n.kt)('blockquote', null, (0, n.kt)('p', { parentName: 'blockquote' }, 'TODO: description')),
          (0, n.kt)('h2', { id: 'usage' }, 'Usage'),
          (0, n.kt)(
            'pre',
            null,
            (0, n.kt)(
              'code',
              { parentName: 'pre' },
              "const liskDidModule = require('@lisk-did/lisk-did-module');\n\n// TODO: DEMONSTRATE API\n",
            ),
          ),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
