'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [5398],
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
      function a(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(i), !0).forEach(function (t) {
                n(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : a(Object(i)).forEach(function (t) {
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
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (i = a[r]), t.indexOf(i) >= 0 || (n[i] = e[i]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (i = a[r]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]));
        }
        return n;
      }
      var c = r.createContext({}),
        o = function (e) {
          var t = r.useContext(c),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : d(d({}, t), e)), i;
        },
        s = function (e) {
          var t = o(e.components);
          return r.createElement(c.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        f = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        u = r.forwardRef(function (e, t) {
          var i = e.components,
            n = e.mdxType,
            a = e.originalType,
            c = e.parentName,
            s = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = o(i),
            u = n,
            v = p[''.concat(c, '.').concat(u)] || p[u] || f[u] || a;
          return i
            ? r.createElement(v, d(d({ ref: t }, s), {}, { components: i }))
            : r.createElement(v, d({ ref: t }, s));
        });
      function v(e, t) {
        var i = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var a = i.length,
            d = new Array(a);
          d[0] = u;
          var l = {};
          for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
          (l.originalType = e), (l[p] = 'string' == typeof e ? e : n), (d[1] = l);
          for (var o = 2; o < a; o++) d[o] = i[o];
          return r.createElement.apply(null, d);
        }
        return r.createElement.apply(null, i);
      }
      u.displayName = 'MDXCreateElement';
    },
    2634: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => c,
          contentTitle: () => d,
          default: () => f,
          frontMatter: () => a,
          metadata: () => l,
          toc: () => o,
        });
      var r = i(7896),
        n = (i(2784), i(876));
      const a = {
          id: 'Service',
          title: 'Interface: Service',
          sidebar_label: 'Service',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        d = void 0,
        l = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/Service',
          id: 'lisk-decentralized-identifier/interfaces/Service',
          title: 'Interface: Service',
          description: 'Properties',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/Service.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/Service',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/Service',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'Service',
            title: 'Interface: Service',
            sidebar_label: 'Service',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'RemoveServiceEndpointParam',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/RemoveServiceEndpointParam',
          },
          next: {
            title: 'TransactionPayload',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/TransactionPayload',
          },
        },
        c = {},
        o = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'id', id: 'id', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'serviceEndpoint', id: 'serviceendpoint', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'type', id: 'type', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
        ],
        s = { toc: o },
        p = 'wrapper';
      function f(e) {
        let { components: t, ...i } = e;
        return (0, n.kt)(
          p,
          (0, r.Z)({}, s, i, { components: t, mdxType: 'MDXLayout' }),
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
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/did.ts#L16',
              },
              'packages/lisk-decentralized-identifier/src/types/did.ts:16',
            ),
          ),
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
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/did.ts#L18',
              },
              'packages/lisk-decentralized-identifier/src/types/did.ts:18',
            ),
          ),
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
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/did.ts#L17',
              },
              'packages/lisk-decentralized-identifier/src/types/did.ts:17',
            ),
          ),
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
