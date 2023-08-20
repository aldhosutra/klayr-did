'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [5582],
  {
    876: (e, n, t) => {
      t.d(n, { Zo: () => c, kt: () => m });
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
      function l(e, n) {
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
      var o = i.createContext({}),
        s = function (e) {
          var n = i.useContext(o),
            t = n;
          return e && (t = 'function' == typeof e ? e(n) : a(a({}, n), e)), t;
        },
        c = function (e) {
          var n = s(e.components);
          return i.createElement(o.Provider, { value: n }, e.children);
        },
        p = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var n = e.children;
            return i.createElement(i.Fragment, {}, n);
          },
        },
        f = i.forwardRef(function (e, n) {
          var t = e.components,
            r = e.mdxType,
            d = e.originalType,
            o = e.parentName,
            c = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = s(t),
            f = r,
            m = p[''.concat(o, '.').concat(f)] || p[f] || u[f] || d;
          return t
            ? i.createElement(m, a(a({ ref: n }, c), {}, { components: t }))
            : i.createElement(m, a({ ref: n }, c));
        });
      function m(e, n) {
        var t = arguments,
          r = n && n.mdxType;
        if ('string' == typeof e || r) {
          var d = t.length,
            a = new Array(d);
          a[0] = f;
          var l = {};
          for (var o in n) hasOwnProperty.call(n, o) && (l[o] = n[o]);
          (l.originalType = e), (l[p] = 'string' == typeof e ? e : r), (a[1] = l);
          for (var s = 2; s < d; s++) a[s] = t[s];
          return i.createElement.apply(null, a);
        }
        return i.createElement.apply(null, t);
      }
      f.displayName = 'MDXCreateElement';
    },
    9053: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => o,
          contentTitle: () => a,
          default: () => u,
          frontMatter: () => d,
          metadata: () => l,
          toc: () => s,
        });
      var i = t(7896),
        r = (t(2784), t(876));
      const d = {
          id: 'did.AddServiceEndpointParam',
          title: 'Interface: AddServiceEndpointParam',
          sidebar_label: 'did.AddServiceEndpointParam',
          custom_edit_url: null,
        },
        a = void 0,
        l = {
          unversionedId: 'lisk-did/interfaces/did.AddServiceEndpointParam',
          id: 'lisk-did/interfaces/did.AddServiceEndpointParam',
          title: 'Interface: AddServiceEndpointParam',
          description: 'did.AddServiceEndpointParam',
          source: '@site/docs/lisk-did/interfaces/did.AddServiceEndpointParam.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.AddServiceEndpointParam',
          permalink: '/docs/lisk-did/interfaces/did.AddServiceEndpointParam',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.AddServiceEndpointParam',
            title: 'Interface: AddServiceEndpointParam',
            sidebar_label: 'did.AddServiceEndpointParam',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.AddKeysParam', permalink: '/docs/lisk-did/interfaces/did.AddKeysParam' },
          next: { title: 'did.BaseResolver', permalink: '/docs/lisk-did/interfaces/did.BaseResolver' },
        },
        o = {},
        s = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'endpoint', id: 'endpoint', level: 3 },
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
      function u(e) {
        let { components: n, ...t } = e;
        return (0, r.kt)(
          p,
          (0, i.Z)({}, c, t, { components: n, mdxType: 'MDXLayout' }),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.AddServiceEndpointParam',
          ),
          (0, r.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, r.kt)('h3', { id: 'endpoint' }, 'endpoint'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'endpoint'),
            ': ',
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.Service' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'Service'),
            ),
          ),
          (0, r.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            'packages/lisk-decentralized-identifier/dist/types/commands/add_service_endpoint_command.d.ts:5',
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
            'packages/lisk-decentralized-identifier/dist/types/commands/add_service_endpoint_command.d.ts:7',
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
            'packages/lisk-decentralized-identifier/dist/types/commands/add_service_endpoint_command.d.ts:6',
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
            'packages/lisk-decentralized-identifier/dist/types/commands/add_service_endpoint_command.d.ts:4',
          ),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
