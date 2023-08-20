'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [8839],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => c, kt: () => u });
      var i = n(2784);
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          i,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              r = {},
              d = Object.keys(e);
            for (i = 0; i < d.length; i++) (n = d[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(e);
          for (i = 0; i < d.length; i++)
            (n = d[i]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
        }
        return r;
      }
      var s = i.createContext({}),
        o = function (e) {
          var t = i.useContext(s),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : a(a({}, t), e)), n;
        },
        c = function (e) {
          var t = o(e.components);
          return i.createElement(s.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        f = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return i.createElement(i.Fragment, {}, t);
          },
        },
        m = i.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            d = e.originalType,
            s = e.parentName,
            c = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = o(n),
            m = r,
            u = p[''.concat(s, '.').concat(m)] || p[m] || f[m] || d;
          return n
            ? i.createElement(u, a(a({ ref: t }, c), {}, { components: n }))
            : i.createElement(u, a({ ref: t }, c));
        });
      function u(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var d = n.length,
            a = new Array(d);
          a[0] = m;
          var l = {};
          for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
          (l.originalType = e), (l[p] = 'string' == typeof e ? e : r), (a[1] = l);
          for (var o = 2; o < d; o++) a[o] = n[o];
          return i.createElement.apply(null, a);
        }
        return i.createElement.apply(null, n);
      }
      m.displayName = 'MDXCreateElement';
    },
    7686: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => s,
          contentTitle: () => a,
          default: () => f,
          frontMatter: () => d,
          metadata: () => l,
          toc: () => o,
        });
      var i = n(7896),
        r = (n(2784), n(876));
      const d = {
          id: 'AddServiceEndpointParam',
          title: 'Interface: AddServiceEndpointParam',
          sidebar_label: 'AddServiceEndpointParam',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        a = void 0,
        l = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/AddServiceEndpointParam',
          id: 'lisk-decentralized-identifier/interfaces/AddServiceEndpointParam',
          title: 'Interface: AddServiceEndpointParam',
          description: 'Properties',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/AddServiceEndpointParam.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/AddServiceEndpointParam',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/AddServiceEndpointParam',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'AddServiceEndpointParam',
            title: 'Interface: AddServiceEndpointParam',
            sidebar_label: 'AddServiceEndpointParam',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'AddKeysParam', permalink: '/docs/lisk-decentralized-identifier/interfaces/AddKeysParam' },
          next: { title: 'BaseResolver', permalink: '/docs/lisk-decentralized-identifier/interfaces/BaseResolver' },
        },
        s = {},
        o = [
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
        c = { toc: o },
        p = 'wrapper';
      function f(e) {
        let { components: t, ...n } = e;
        return (0, r.kt)(
          p,
          (0, i.Z)({}, c, n, { components: t, mdxType: 'MDXLayout' }),
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
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/Service' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'Service'),
            ),
          ),
          (0, r.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/commands/add_service_endpoint_command.ts#L5',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/add_service_endpoint_command.ts:5',
            ),
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
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/commands/add_service_endpoint_command.ts#L7',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/add_service_endpoint_command.ts:7',
            ),
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
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/commands/add_service_endpoint_command.ts#L6',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/add_service_endpoint_command.ts:6',
            ),
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
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/commands/add_service_endpoint_command.ts#L4',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/add_service_endpoint_command.ts:4',
            ),
          ),
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
