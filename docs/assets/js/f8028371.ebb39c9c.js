'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [3313],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => s, kt: () => m });
      var r = i(2784);
      function n(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = i),
          e
        );
      }
      function d(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(i), !0).forEach(function (t) {
                n(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : d(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      function o(e, t) {
        if (null == e) return {};
        var i,
          r,
          n = (function (e, t) {
            if (null == e) return {};
            var i,
              r,
              n = {},
              d = Object.keys(e);
            for (r = 0; r < d.length; r++) (i = d[r]), t.indexOf(i) >= 0 || (n[i] = e[i]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(e);
          for (r = 0; r < d.length; r++)
            (i = d[r]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]));
        }
        return n;
      }
      var a = r.createContext({}),
        c = function (e) {
          var t = r.useContext(a),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : l(l({}, t), e)), i;
        },
        s = function (e) {
          var t = c(e.components);
          return r.createElement(a.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        f = r.forwardRef(function (e, t) {
          var i = e.components,
            n = e.mdxType,
            d = e.originalType,
            a = e.parentName,
            s = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = c(i),
            f = n,
            m = p[''.concat(a, '.').concat(f)] || p[f] || u[f] || d;
          return i
            ? r.createElement(m, l(l({ ref: t }, s), {}, { components: i }))
            : r.createElement(m, l({ ref: t }, s));
        });
      function m(e, t) {
        var i = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var d = i.length,
            l = new Array(d);
          l[0] = f;
          var o = {};
          for (var a in t) hasOwnProperty.call(t, a) && (o[a] = t[a]);
          (o.originalType = e), (o[p] = 'string' == typeof e ? e : n), (l[1] = o);
          for (var c = 2; c < d; c++) l[c] = i[c];
          return r.createElement.apply(null, l);
        }
        return r.createElement.apply(null, i);
      }
      f.displayName = 'MDXCreateElement';
    },
    8745: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => a,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => d,
          metadata: () => o,
          toc: () => c,
        });
      var r = i(7896),
        n = (i(2784), i(876));
      const d = {
          id: 'index',
          title: '@lisk-did/lisk-decentralized-identifier',
          sidebar_label: 'Readme',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        l = '@lisk-did/lisk-decentralized-identifier',
        o = {
          unversionedId: 'lisk-decentralized-identifier/index',
          id: 'lisk-decentralized-identifier/index',
          title: '@lisk-did/lisk-decentralized-identifier',
          description: 'TODO: description',
          source: '@site/docs/lisk-decentralized-identifier/index.md',
          sourceDirName: 'lisk-decentralized-identifier',
          slug: '/lisk-decentralized-identifier/',
          permalink: '/docs/lisk-decentralized-identifier/',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'index',
            title: '@lisk-did/lisk-decentralized-identifier',
            sidebar_label: 'Readme',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'RemoveServiceEndpointCommand',
            permalink: '/docs/lisk-did-module/classes/RemoveServiceEndpointCommand',
          },
          next: { title: 'Exports', permalink: '/docs/lisk-decentralized-identifier/modules' },
        },
        a = {},
        c = [{ value: 'Usage', id: 'usage', level: 2 }],
        s = { toc: c },
        p = 'wrapper';
      function u(e) {
        let { components: t, ...i } = e;
        return (0, n.kt)(
          p,
          (0, r.Z)({}, s, i, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)(
            'h1',
            { id: 'lisk-didlisk-decentralized-identifier' },
            (0, n.kt)('inlineCode', { parentName: 'h1' }, '@lisk-did/lisk-decentralized-identifier'),
          ),
          (0, n.kt)('blockquote', null, (0, n.kt)('p', { parentName: 'blockquote' }, 'TODO: description')),
          (0, n.kt)('h2', { id: 'usage' }, 'Usage'),
          (0, n.kt)(
            'pre',
            null,
            (0, n.kt)(
              'code',
              { parentName: 'pre' },
              "const liskDecentralizedIdentifier = require('@lisk-did/lisk-decentralized-identifier');\n\n// TODO: DEMONSTRATE API\n",
            ),
          ),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
