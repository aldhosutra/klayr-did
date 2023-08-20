'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [2992],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => c, kt: () => f });
      var r = n(2784);
      function i(e, t, n) {
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
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
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
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              d = Object.keys(e);
            for (r = 0; r < d.length; r++) (n = d[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(e);
          for (r = 0; r < d.length; r++)
            (n = d[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      }
      var s = r.createContext({}),
        o = function (e) {
          var t = r.useContext(s),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : a(a({}, t), e)), n;
        },
        c = function (e) {
          var t = o(e.components);
          return r.createElement(s.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        m = r.forwardRef(function (e, t) {
          var n = e.components,
            i = e.mdxType,
            d = e.originalType,
            s = e.parentName,
            c = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = o(n),
            m = i,
            f = p[''.concat(s, '.').concat(m)] || p[m] || u[m] || d;
          return n
            ? r.createElement(f, a(a({ ref: t }, c), {}, { components: n }))
            : r.createElement(f, a({ ref: t }, c));
        });
      function f(e, t) {
        var n = arguments,
          i = t && t.mdxType;
        if ('string' == typeof e || i) {
          var d = n.length,
            a = new Array(d);
          a[0] = m;
          var l = {};
          for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
          (l.originalType = e), (l[p] = 'string' == typeof e ? e : i), (a[1] = l);
          for (var o = 2; o < d; o++) a[o] = n[o];
          return r.createElement.apply(null, a);
        }
        return r.createElement.apply(null, n);
      }
      m.displayName = 'MDXCreateElement';
    },
    4710: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => s,
          contentTitle: () => a,
          default: () => u,
          frontMatter: () => d,
          metadata: () => l,
          toc: () => o,
        });
      var r = n(7896),
        i = (n(2784), n(876));
      const d = {
          id: 'did.AddKeysParam',
          title: 'Interface: AddKeysParam',
          sidebar_label: 'did.AddKeysParam',
          custom_edit_url: null,
        },
        a = void 0,
        l = {
          unversionedId: 'lisk-did/interfaces/did.AddKeysParam',
          id: 'lisk-did/interfaces/did.AddKeysParam',
          title: 'Interface: AddKeysParam',
          description: 'did.AddKeysParam',
          source: '@site/docs/lisk-did/interfaces/did.AddKeysParam.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.AddKeysParam',
          permalink: '/docs/lisk-did/interfaces/did.AddKeysParam',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.AddKeysParam',
            title: 'Interface: AddKeysParam',
            sidebar_label: 'did.AddKeysParam',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'did.AddControllersParam',
            permalink: '/docs/lisk-did/interfaces/did.AddControllersParam',
          },
          next: {
            title: 'did.AddServiceEndpointParam',
            permalink: '/docs/lisk-did/interfaces/did.AddServiceEndpointParam',
          },
        },
        s = {},
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
      function u(e) {
        let { components: t, ...n } = e;
        return (0, i.kt)(
          p,
          (0, r.Z)({}, c, n, { components: t, mdxType: 'MDXLayout' }),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.AddKeysParam',
          ),
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
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.KeysCommand' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'KeysCommand'),
            ),
            '[]',
          ),
          (0, i.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/commands/add_keys_command.d.ts:5'),
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
          (0, i.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/commands/add_keys_command.d.ts:7'),
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
          (0, i.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/commands/add_keys_command.d.ts:6'),
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
          (0, i.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/commands/add_keys_command.d.ts:4'),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
