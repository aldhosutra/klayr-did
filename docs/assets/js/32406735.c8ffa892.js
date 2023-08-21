'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [8656],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => c, kt: () => u });
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
      function d(e) {
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
      function s(e, t) {
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
      var l = n.createContext({}),
        o = function (e) {
          var t = n.useContext(l),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : d(d({}, t), e)), r;
        },
        c = function (e) {
          var t = o(e.components);
          return n.createElement(l.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        f = n.forwardRef(function (e, t) {
          var r = e.components,
            i = e.mdxType,
            a = e.originalType,
            l = e.parentName,
            c = s(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = o(r),
            f = i,
            u = p[''.concat(l, '.').concat(f)] || p[f] || m[f] || a;
          return r
            ? n.createElement(u, d(d({ ref: t }, c), {}, { components: r }))
            : n.createElement(u, d({ ref: t }, c));
        });
      function u(e, t) {
        var r = arguments,
          i = t && t.mdxType;
        if ('string' == typeof e || i) {
          var a = r.length,
            d = new Array(a);
          d[0] = f;
          var s = {};
          for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
          (s.originalType = e), (s[p] = 'string' == typeof e ? e : i), (d[1] = s);
          for (var o = 2; o < a; o++) d[o] = r[o];
          return n.createElement.apply(null, d);
        }
        return n.createElement.apply(null, r);
      }
      f.displayName = 'MDXCreateElement';
    },
    6479: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => l,
          contentTitle: () => d,
          default: () => m,
          frontMatter: () => a,
          metadata: () => s,
          toc: () => o,
        });
      var n = r(7896),
        i = (r(2784), r(876));
      const a = {
          id: 'AddKeysParam',
          title: 'Interface: AddKeysParam',
          sidebar_label: 'AddKeysParam',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        d = void 0,
        s = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/AddKeysParam',
          id: 'lisk-decentralized-identifier/interfaces/AddKeysParam',
          title: 'Interface: AddKeysParam',
          description: 'Properties',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/AddKeysParam.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/AddKeysParam',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/AddKeysParam',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'AddKeysParam',
            title: 'Interface: AddKeysParam',
            sidebar_label: 'AddKeysParam',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'AddControllersParam',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/AddControllersParam',
          },
          next: {
            title: 'AddServiceEndpointParam',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/AddServiceEndpointParam',
          },
        },
        l = {},
        o = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'keys', id: 'keys', level: 3 },
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
          (0, i.kt)('h3', { id: 'keys' }, 'keys'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'keys'),
            ': ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/KeysCommand' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'KeysCommand'),
            ),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-decentralized-identifier/src/types/commands/add_keys_command.ts#L5',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/add_keys_command.ts:5',
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-decentralized-identifier/src/types/commands/add_keys_command.ts#L7',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/add_keys_command.ts:7',
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-decentralized-identifier/src/types/commands/add_keys_command.ts#L6',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/add_keys_command.ts:6',
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-decentralized-identifier/src/types/commands/add_keys_command.ts#L4',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/add_keys_command.ts:4',
            ),
          ),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
