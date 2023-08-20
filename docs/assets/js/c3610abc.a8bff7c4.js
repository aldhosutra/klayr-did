'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [8685],
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
      function l(e) {
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
      function a(e, t) {
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
      var d = n.createContext({}),
        s = function (e) {
          var t = n.useContext(d),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : l(l({}, t), e)), r;
        },
        c = function (e) {
          var t = s(e.components);
          return n.createElement(d.Provider, { value: t }, e.children);
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
            o = e.originalType,
            d = e.parentName,
            c = a(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = s(r),
            f = i,
            m = u[''.concat(d, '.').concat(f)] || u[f] || p[f] || o;
          return r
            ? n.createElement(m, l(l({ ref: t }, c), {}, { components: r }))
            : n.createElement(m, l({ ref: t }, c));
        });
      function m(e, t) {
        var r = arguments,
          i = t && t.mdxType;
        if ('string' == typeof e || i) {
          var o = r.length,
            l = new Array(o);
          l[0] = f;
          var a = {};
          for (var d in t) hasOwnProperty.call(t, d) && (a[d] = t[d]);
          (a.originalType = e), (a[u] = 'string' == typeof e ? e : i), (l[1] = a);
          for (var s = 2; s < o; s++) l[s] = r[s];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, r);
      }
      f.displayName = 'MDXCreateElement';
    },
    8566: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => d,
          contentTitle: () => l,
          default: () => p,
          frontMatter: () => o,
          metadata: () => a,
          toc: () => s,
        });
      var n = r(7896),
        i = (r(2784), r(876));
      const o = { id: 'index', title: 'lisk-did', sidebar_label: 'Readme', sidebar_position: 0, custom_edit_url: null },
        l = 'lisk-did',
        a = {
          unversionedId: 'lisk-did/index',
          id: 'lisk-did/index',
          title: 'lisk-did',
          description: 'TODO: description',
          source: '@site/docs/lisk-did/index.md',
          sourceDirName: 'lisk-did',
          slug: '/lisk-did/',
          permalink: '/docs/lisk-did/',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'index',
            title: 'lisk-did',
            sidebar_label: 'Readme',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          next: { title: 'Exports', permalink: '/docs/lisk-did/modules' },
        },
        d = {},
        s = [{ value: 'Usage', id: 'usage', level: 2 }],
        c = { toc: s },
        u = 'wrapper';
      function p(e) {
        let { components: t, ...r } = e;
        return (0, i.kt)(
          u,
          (0, n.Z)({}, c, r, { components: t, mdxType: 'MDXLayout' }),
          (0, i.kt)('h1', { id: 'lisk-did' }, (0, i.kt)('inlineCode', { parentName: 'h1' }, 'lisk-did')),
          (0, i.kt)('blockquote', null, (0, i.kt)('p', { parentName: 'blockquote' }, 'TODO: description')),
          (0, i.kt)('h2', { id: 'usage' }, 'Usage'),
          (0, i.kt)(
            'pre',
            null,
            (0, i.kt)(
              'code',
              { parentName: 'pre' },
              "const liskDid = require('lisk-did');\n\n// TODO: DEMONSTRATE API\n",
            ),
          ),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
