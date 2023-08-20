'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [6317],
  {
    876: (e, n, t) => {
      t.d(n, { Zo: () => c, kt: () => v });
      var i = t(2784);
      function r(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 })
            : (e[n] = t),
          e
        );
      }
      function d(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i);
        }
        return t;
      }
      function a(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? d(Object(t), !0).forEach(function (n) {
                r(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              });
        }
        return e;
      }
      function o(e, n) {
        if (null == e) return {};
        var t,
          i,
          r = (function (e, n) {
            if (null == e) return {};
            var t,
              i,
              r = {},
              d = Object.keys(e);
            for (i = 0; i < d.length; i++) (t = d[i]), n.indexOf(t) >= 0 || (r[t] = e[t]);
            return r;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(e);
          for (i = 0; i < d.length; i++)
            (t = d[i]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
        }
        return r;
      }
      var l = i.createContext({}),
        s = function (e) {
          var n = i.useContext(l),
            t = n;
          return e && (t = 'function' == typeof e ? e(n) : a(a({}, n), e)), t;
        },
        c = function (e) {
          var n = s(e.components);
          return i.createElement(l.Provider, { value: n }, e.children);
        },
        p = 'mdxType',
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var n = e.children;
            return i.createElement(i.Fragment, {}, n);
          },
        },
        u = i.forwardRef(function (e, n) {
          var t = e.components,
            r = e.mdxType,
            d = e.originalType,
            l = e.parentName,
            c = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = s(t),
            u = r,
            v = p[''.concat(l, '.').concat(u)] || p[u] || m[u] || d;
          return t
            ? i.createElement(v, a(a({ ref: n }, c), {}, { components: t }))
            : i.createElement(v, a({ ref: n }, c));
        });
      function v(e, n) {
        var t = arguments,
          r = n && n.mdxType;
        if ('string' == typeof e || r) {
          var d = t.length,
            a = new Array(d);
          a[0] = u;
          var o = {};
          for (var l in n) hasOwnProperty.call(n, l) && (o[l] = n[l]);
          (o.originalType = e), (o[p] = 'string' == typeof e ? e : r), (a[1] = o);
          for (var s = 2; s < d; s++) a[s] = t[s];
          return i.createElement.apply(null, a);
        }
        return i.createElement.apply(null, t);
      }
      u.displayName = 'MDXCreateElement';
    },
    6909: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => l,
          contentTitle: () => a,
          default: () => m,
          frontMatter: () => d,
          metadata: () => o,
          toc: () => s,
        });
      var i = t(7896),
        r = (t(2784), t(876));
      const d = {
          id: 'did.RemoveServiceEndpointParam',
          title: 'Interface: RemoveServiceEndpointParam',
          sidebar_label: 'did.RemoveServiceEndpointParam',
          custom_edit_url: null,
        },
        a = void 0,
        o = {
          unversionedId: 'lisk-did/interfaces/did.RemoveServiceEndpointParam',
          id: 'lisk-did/interfaces/did.RemoveServiceEndpointParam',
          title: 'Interface: RemoveServiceEndpointParam',
          description: 'did.RemoveServiceEndpointParam',
          source: '@site/docs/lisk-did/interfaces/did.RemoveServiceEndpointParam.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.RemoveServiceEndpointParam',
          permalink: '/docs/lisk-did/interfaces/did.RemoveServiceEndpointParam',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.RemoveServiceEndpointParam',
            title: 'Interface: RemoveServiceEndpointParam',
            sidebar_label: 'did.RemoveServiceEndpointParam',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.RemoveKeysParam', permalink: '/docs/lisk-did/interfaces/did.RemoveKeysParam' },
          next: { title: 'did.Service', permalink: '/docs/lisk-did/interfaces/did.Service' },
        },
        l = {},
        s = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'endpointId', id: 'endpointid', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'signature', id: 'signature', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'signer', id: 'signer', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'target', id: 'target', level: 3 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
        ],
        c = { toc: s },
        p = 'wrapper';
      function m(e) {
        let { components: n, ...t } = e;
        return (0, r.kt)(
          p,
          (0, i.Z)({}, c, t, { components: n, mdxType: 'MDXLayout' }),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.RemoveServiceEndpointParam',
          ),
          (0, r.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, r.kt)('h3', { id: 'endpointid' }, 'endpointId'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'endpointId'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, r.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            'packages/lisk-decentralized-identifier/dist/types/commands/remove_service_endpoint_command.d.ts:4',
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'signature' }, 'signature'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'signature'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
          ),
          (0, r.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            'packages/lisk-decentralized-identifier/dist/types/commands/remove_service_endpoint_command.d.ts:6',
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'signer' }, 'signer'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'signer'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, r.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            'packages/lisk-decentralized-identifier/dist/types/commands/remove_service_endpoint_command.d.ts:5',
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'target' }, 'target'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'target'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, r.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            'packages/lisk-decentralized-identifier/dist/types/commands/remove_service_endpoint_command.d.ts:3',
          ),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
