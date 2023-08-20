'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [9655],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => o, kt: () => m });
      var i = r(2784);
      function n(e, t, r) {
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
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
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
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              i,
              n = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++) (r = a[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (r = a[i]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
        }
        return n;
      }
      var c = i.createContext({}),
        s = function (e) {
          var t = i.useContext(c),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : d(d({}, t), e)), r;
        },
        o = function (e) {
          var t = s(e.components);
          return i.createElement(c.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        f = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return i.createElement(i.Fragment, {}, t);
          },
        },
        u = i.forwardRef(function (e, t) {
          var r = e.components,
            n = e.mdxType,
            a = e.originalType,
            c = e.parentName,
            o = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = s(r),
            u = n,
            m = p[''.concat(c, '.').concat(u)] || p[u] || f[u] || a;
          return r
            ? i.createElement(m, d(d({ ref: t }, o), {}, { components: r }))
            : i.createElement(m, d({ ref: t }, o));
        });
      function m(e, t) {
        var r = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var a = r.length,
            d = new Array(a);
          d[0] = u;
          var l = {};
          for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
          (l.originalType = e), (l[p] = 'string' == typeof e ? e : n), (d[1] = l);
          for (var s = 2; s < a; s++) d[s] = r[s];
          return i.createElement.apply(null, d);
        }
        return i.createElement.apply(null, r);
      }
      u.displayName = 'MDXCreateElement';
    },
    4957: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => c,
          contentTitle: () => d,
          default: () => f,
          frontMatter: () => a,
          metadata: () => l,
          toc: () => s,
        });
      var i = r(7896),
        n = (r(2784), r(876));
      const a = {
          id: 'DeactivateParam',
          title: 'Interface: DeactivateParam',
          sidebar_label: 'DeactivateParam',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        d = void 0,
        l = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/DeactivateParam',
          id: 'lisk-decentralized-identifier/interfaces/DeactivateParam',
          title: 'Interface: DeactivateParam',
          description: 'Properties',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/DeactivateParam.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/DeactivateParam',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/DeactivateParam',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'DeactivateParam',
            title: 'Interface: DeactivateParam',
            sidebar_label: 'DeactivateParam',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'CreateParam', permalink: '/docs/lisk-decentralized-identifier/interfaces/CreateParam' },
          next: { title: 'DidDocument', permalink: '/docs/lisk-decentralized-identifier/interfaces/DidDocument' },
        },
        c = {},
        s = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'signature', id: 'signature', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'signer', id: 'signer', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'target', id: 'target', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
        ],
        o = { toc: s },
        p = 'wrapper';
      function f(e) {
        let { components: t, ...r } = e;
        return (0, n.kt)(
          p,
          (0, i.Z)({}, o, r, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, n.kt)('h3', { id: 'signature' }, 'signature'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'signature'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
          ),
          (0, n.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/commands/deactivate_command.ts#L4',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/deactivate_command.ts:4',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'signer' }, 'signer'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'signer'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/commands/deactivate_command.ts#L3',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/deactivate_command.ts:3',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'target' }, 'target'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'target'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/commands/deactivate_command.ts#L2',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/deactivate_command.ts:2',
            ),
          ),
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
