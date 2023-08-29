'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [1451],
  {
    876: (e, r, t) => {
      t.d(r, { Zo: () => c, kt: () => f });
      var n = t(2784);
      function i(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
            : (e[r] = t),
          e
        );
      }
      function a(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function l(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? a(Object(t), !0).forEach(function (r) {
                i(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
        }
        return e;
      }
      function o(e, r) {
        if (null == e) return {};
        var t,
          n,
          i = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              i = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++) (t = a[n]), r.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (t = a[n]), r.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]));
        }
        return i;
      }
      var s = n.createContext({}),
        d = function (e) {
          var r = n.useContext(s),
            t = r;
          return e && (t = 'function' == typeof e ? e(r) : l(l({}, r), e)), t;
        },
        c = function (e) {
          var r = d(e.components);
          return n.createElement(s.Provider, { value: r }, e.children);
        },
        m = 'mdxType',
        p = {
          inlineCode: 'code',
          wrapper: function (e) {
            var r = e.children;
            return n.createElement(n.Fragment, {}, r);
          },
        },
        u = n.forwardRef(function (e, r) {
          var t = e.components,
            i = e.mdxType,
            a = e.originalType,
            s = e.parentName,
            c = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            m = d(t),
            u = i,
            f = m[''.concat(s, '.').concat(u)] || m[u] || p[u] || a;
          return t
            ? n.createElement(f, l(l({ ref: r }, c), {}, { components: t }))
            : n.createElement(f, l({ ref: r }, c));
        });
      function f(e, r) {
        var t = arguments,
          i = r && r.mdxType;
        if ('string' == typeof e || i) {
          var a = t.length,
            l = new Array(a);
          l[0] = u;
          var o = {};
          for (var s in r) hasOwnProperty.call(r, s) && (o[s] = r[s]);
          (o.originalType = e), (o[m] = 'string' == typeof e ? e : i), (l[1] = o);
          for (var d = 2; d < a; d++) l[d] = t[d];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, t);
      }
      u.displayName = 'MDXCreateElement';
    },
    9675: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => s,
          contentTitle: () => l,
          default: () => p,
          frontMatter: () => a,
          metadata: () => o,
          toc: () => d,
        });
      var n = t(7896),
        i = (t(2784), t(876));
      const a = {
          id: 'RemoveControllersParam',
          title: 'Interface: RemoveControllersParam',
          sidebar_label: 'RemoveControllersParam',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        l = void 0,
        o = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/RemoveControllersParam',
          id: 'lisk-decentralized-identifier/interfaces/RemoveControllersParam',
          title: 'Interface: RemoveControllersParam',
          description: 'Properties',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/RemoveControllersParam.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/RemoveControllersParam',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/RemoveControllersParam',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'RemoveControllersParam',
            title: 'Interface: RemoveControllersParam',
            sidebar_label: 'RemoveControllersParam',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'NonceStoreData',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/NonceStoreData',
          },
          next: {
            title: 'RemoveKeysParam',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/RemoveKeysParam',
          },
        },
        s = {},
        d = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'controllers', id: 'controllers', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'signature', id: 'signature', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'signer', id: 'signer', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'target', id: 'target', level: 3 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
        ],
        c = { toc: d },
        m = 'wrapper';
      function p(e) {
        let { components: r, ...t } = e;
        return (0, i.kt)(
          m,
          (0, n.Z)({}, c, t, { components: r, mdxType: 'MDXLayout' }),
          (0, i.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, i.kt)('h3', { id: 'controllers' }, 'controllers'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'controllers'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/commands/remove_controllers_command.ts#L3',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/remove_controllers_command.ts:3',
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/commands/remove_controllers_command.ts#L5',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/remove_controllers_command.ts:5',
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/commands/remove_controllers_command.ts#L4',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/remove_controllers_command.ts:4',
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/commands/remove_controllers_command.ts#L2',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/remove_controllers_command.ts:2',
            ),
          ),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
