'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [4254],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => c, kt: () => f });
      var n = r(2784);
      function i(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
          e
        );
      }
      function a(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      var d = n.createContext({}),
        o = function (e) {
          var t = n.useContext(d),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : s(s({}, t), e)), r;
        },
        c = function (e) {
          var t = o(e.components);
          return n.createElement(d.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        u = n.forwardRef(function (e, t) {
          var r = e.components,
            i = e.mdxType,
            a = e.originalType,
            d = e.parentName,
            c = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = o(r),
            u = i,
            f = p[''.concat(d, '.').concat(u)] || p[u] || m[u] || a;
          return r
            ? n.createElement(f, s(s({ ref: t }, c), {}, { components: r }))
            : n.createElement(f, s({ ref: t }, c));
        });
      function f(e, t) {
        var r = arguments,
          i = t && t.mdxType;
        if ('string' == typeof e || i) {
          var a = r.length,
            s = new Array(a);
          s[0] = u;
          var l = {};
          for (var d in t) hasOwnProperty.call(t, d) && (l[d] = t[d]);
          (l.originalType = e), (l[p] = 'string' == typeof e ? e : i), (s[1] = l);
          for (var o = 2; o < a; o++) s[o] = r[o];
          return n.createElement.apply(null, s);
        }
        return n.createElement.apply(null, r);
      }
      u.displayName = 'MDXCreateElement';
    },
    8593: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => d,
          contentTitle: () => s,
          default: () => m,
          frontMatter: () => a,
          metadata: () => l,
          toc: () => o,
        });
      var n = r(7896),
        i = (r(2784), r(876));
      const a = {
          id: 'RemoveKeysParam',
          title: 'Interface: RemoveKeysParam',
          sidebar_label: 'RemoveKeysParam',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        s = void 0,
        l = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/RemoveKeysParam',
          id: 'lisk-decentralized-identifier/interfaces/RemoveKeysParam',
          title: 'Interface: RemoveKeysParam',
          description: 'Properties',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/RemoveKeysParam.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/RemoveKeysParam',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/RemoveKeysParam',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'RemoveKeysParam',
            title: 'Interface: RemoveKeysParam',
            sidebar_label: 'RemoveKeysParam',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'RemoveControllersParam',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/RemoveControllersParam',
          },
          next: {
            title: 'RemoveServiceEndpointParam',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/RemoveServiceEndpointParam',
          },
        },
        d = {},
        o = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'publicKeys', id: 'publickeys', level: 3 },
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
      function m(e) {
        let { components: t, ...r } = e;
        return (0, i.kt)(
          p,
          (0, n.Z)({}, c, r, { components: t, mdxType: 'MDXLayout' }),
          (0, i.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, i.kt)('h3', { id: 'publickeys' }, 'publicKeys'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'publicKeys'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
            '[]',
          ),
          (0, i.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/commands/remove_keys_command.ts#L3',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/remove_keys_command.ts:3',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'signature' }, 'signature'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'signature'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
          ),
          (0, i.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/commands/remove_keys_command.ts#L5',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/remove_keys_command.ts:5',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'signer' }, 'signer'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'signer'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, i.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/commands/remove_keys_command.ts#L4',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/remove_keys_command.ts:4',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'target' }, 'target'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'target'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, i.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/commands/remove_keys_command.ts#L2',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/remove_keys_command.ts:2',
            ),
          ),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
