'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [5978],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => s, kt: () => v });
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
      function a(e) {
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
      function l(e, t) {
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
      var o = r.createContext({}),
        c = function (e) {
          var t = r.useContext(o),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : a(a({}, t), e)), i;
        },
        s = function (e) {
          var t = c(e.components);
          return r.createElement(o.Provider, { value: t }, e.children);
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
            o = e.parentName,
            s = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = c(i),
            f = n,
            v = p[''.concat(o, '.').concat(f)] || p[f] || u[f] || d;
          return i
            ? r.createElement(v, a(a({ ref: t }, s), {}, { components: i }))
            : r.createElement(v, a({ ref: t }, s));
        });
      function v(e, t) {
        var i = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var d = i.length,
            a = new Array(d);
          a[0] = f;
          var l = {};
          for (var o in t) hasOwnProperty.call(t, o) && (l[o] = t[o]);
          (l.originalType = e), (l[p] = 'string' == typeof e ? e : n), (a[1] = l);
          for (var c = 2; c < d; c++) a[c] = i[c];
          return r.createElement.apply(null, a);
        }
        return r.createElement.apply(null, i);
      }
      f.displayName = 'MDXCreateElement';
    },
    9998: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => o,
          contentTitle: () => a,
          default: () => u,
          frontMatter: () => d,
          metadata: () => l,
          toc: () => c,
        });
      var r = i(7896),
        n = (i(2784), i(876));
      const d = { id: 'did.Service', title: 'Interface: Service', sidebar_label: 'did.Service', custom_edit_url: null },
        a = void 0,
        l = {
          unversionedId: 'lisk-did/interfaces/did.Service',
          id: 'lisk-did/interfaces/did.Service',
          title: 'Interface: Service',
          description: 'did.Service',
          source: '@site/docs/lisk-did/interfaces/did.Service.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.Service',
          permalink: '/docs/lisk-did/interfaces/did.Service',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.Service',
            title: 'Interface: Service',
            sidebar_label: 'did.Service',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'did.RemoveServiceEndpointParam',
            permalink: '/docs/lisk-did/interfaces/did.RemoveServiceEndpointParam',
          },
          next: { title: 'did.TransactionPayload', permalink: '/docs/lisk-did/interfaces/did.TransactionPayload' },
        },
        o = {},
        c = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'id', id: 'id', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'serviceEndpoint', id: 'serviceendpoint', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'type', id: 'type', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
        ],
        s = { toc: c },
        p = 'wrapper';
      function u(e) {
        let { components: t, ...i } = e;
        return (0, n.kt)(
          p,
          (0, r.Z)({}, s, i, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.Service',
          ),
          (0, n.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, n.kt)('h3', { id: 'id' }, 'id'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'id'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/did.d.ts:14'),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'serviceendpoint' }, 'serviceEndpoint'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'serviceEndpoint'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/did.d.ts:16'),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'type' }, 'type'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'type'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/did.d.ts:15'),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
