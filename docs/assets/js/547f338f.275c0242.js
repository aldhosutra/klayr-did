'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [1385],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => c, kt: () => m });
      var r = n(2784);
      function i(e, t, n) {
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
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      }
      var s = r.createContext({}),
        d = function (e) {
          var t = r.useContext(s),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : o(o({}, t), e)), n;
        },
        c = function (e) {
          var t = d(e.components);
          return r.createElement(s.Provider, { value: t }, e.children);
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
          var n = e.components,
            i = e.mdxType,
            a = e.originalType,
            s = e.parentName,
            c = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = d(n),
            u = i,
            m = p[''.concat(s, '.').concat(u)] || p[u] || f[u] || a;
          return n
            ? r.createElement(m, o(o({ ref: t }, c), {}, { components: n }))
            : r.createElement(m, o({ ref: t }, c));
        });
      function m(e, t) {
        var n = arguments,
          i = t && t.mdxType;
        if ('string' == typeof e || i) {
          var a = n.length,
            o = new Array(a);
          o[0] = u;
          var l = {};
          for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
          (l.originalType = e), (l[p] = 'string' == typeof e ? e : i), (o[1] = l);
          for (var d = 2; d < a; d++) o[d] = n[d];
          return r.createElement.apply(null, o);
        }
        return r.createElement.apply(null, n);
      }
      u.displayName = 'MDXCreateElement';
    },
    6207: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => s,
          contentTitle: () => o,
          default: () => f,
          frontMatter: () => a,
          metadata: () => l,
          toc: () => d,
        });
      var r = n(7896),
        i = (n(2784), n(876));
      const a = {
          id: 'KeysCommand',
          title: 'Interface: KeysCommand',
          sidebar_label: 'KeysCommand',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        o = void 0,
        l = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/KeysCommand',
          id: 'lisk-decentralized-identifier/interfaces/KeysCommand',
          title: 'Interface: KeysCommand',
          description: 'Properties',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/KeysCommand.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/KeysCommand',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/KeysCommand',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'KeysCommand',
            title: 'Interface: KeysCommand',
            sidebar_label: 'KeysCommand',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'JWEDocument', permalink: '/docs/lisk-decentralized-identifier/interfaces/JWEDocument' },
          next: { title: 'NonceStoreData', permalink: '/docs/lisk-decentralized-identifier/interfaces/NonceStoreData' },
        },
        s = {},
        d = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'publicKey', id: 'publickey', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'relationship', id: 'relationship', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
        ],
        c = { toc: d },
        p = 'wrapper';
      function f(e) {
        let { components: t, ...n } = e;
        return (0, i.kt)(
          p,
          (0, r.Z)({}, c, n, { components: t, mdxType: 'MDXLayout' }),
          (0, i.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, i.kt)('h3', { id: 'publickey' }, 'publicKey'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'publicKey'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
          ),
          (0, i.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-decentralized-identifier/src/types/commands/keys.ts#L4',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/keys.ts:4',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'relationship' }, 'relationship'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'relationship'),
            ': ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/modules#verificationrelationship' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'VerificationRelationship'),
            ),
            '[]',
          ),
          (0, i.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-decentralized-identifier/src/types/commands/keys.ts#L5',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/keys.ts:5',
            ),
          ),
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
