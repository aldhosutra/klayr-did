'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [5077],
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
      function a(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function o(e, t) {
        if (null == e) return {};
        var n,
          i,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              r = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (n = a[i]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
        }
        return r;
      }
      var l = i.createContext({}),
        s = function (e) {
          var t = i.useContext(l),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : d(d({}, t), e)), n;
        },
        c = function (e) {
          var t = s(e.components);
          return i.createElement(l.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return i.createElement(i.Fragment, {}, t);
          },
        },
        f = i.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            a = e.originalType,
            l = e.parentName,
            c = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = s(n),
            f = r,
            u = p[''.concat(l, '.').concat(f)] || p[f] || m[f] || a;
          return n
            ? i.createElement(u, d(d({ ref: t }, c), {}, { components: n }))
            : i.createElement(u, d({ ref: t }, c));
        });
      function u(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var a = n.length,
            d = new Array(a);
          d[0] = f;
          var o = {};
          for (var l in t) hasOwnProperty.call(t, l) && (o[l] = t[l]);
          (o.originalType = e), (o[p] = 'string' == typeof e ? e : r), (d[1] = o);
          for (var s = 2; s < a; s++) d[s] = n[s];
          return i.createElement.apply(null, d);
        }
        return i.createElement.apply(null, n);
      }
      f.displayName = 'MDXCreateElement';
    },
    5426: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => l,
          contentTitle: () => d,
          default: () => m,
          frontMatter: () => a,
          metadata: () => o,
          toc: () => s,
        });
      var i = n(7896),
        r = (n(2784), n(876));
      const a = {
          id: 'RemoveServiceEndpointParam',
          title: 'Interface: RemoveServiceEndpointParam',
          sidebar_label: 'RemoveServiceEndpointParam',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        d = void 0,
        o = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/RemoveServiceEndpointParam',
          id: 'lisk-decentralized-identifier/interfaces/RemoveServiceEndpointParam',
          title: 'Interface: RemoveServiceEndpointParam',
          description: 'Properties',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/RemoveServiceEndpointParam.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/RemoveServiceEndpointParam',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/RemoveServiceEndpointParam',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'RemoveServiceEndpointParam',
            title: 'Interface: RemoveServiceEndpointParam',
            sidebar_label: 'RemoveServiceEndpointParam',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'RemoveKeysParam',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/RemoveKeysParam',
          },
          next: { title: 'Service', permalink: '/docs/lisk-decentralized-identifier/interfaces/Service' },
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
        let { components: t, ...n } = e;
        return (0, r.kt)(
          p,
          (0, i.Z)({}, c, n, { components: t, mdxType: 'MDXLayout' }),
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
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/commands/remove_service_endpoint_command.ts#L3',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/remove_service_endpoint_command.ts:3',
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/commands/remove_service_endpoint_command.ts#L5',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/remove_service_endpoint_command.ts:5',
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/commands/remove_service_endpoint_command.ts#L4',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/remove_service_endpoint_command.ts:4',
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/commands/remove_service_endpoint_command.ts#L2',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/remove_service_endpoint_command.ts:2',
            ),
          ),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
