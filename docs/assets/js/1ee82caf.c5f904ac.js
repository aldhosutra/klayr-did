'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [3305],
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
      function l(e, r) {
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
      function o(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? l(Object(t), !0).forEach(function (r) {
                i(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
        }
        return e;
      }
      function a(e, r) {
        if (null == e) return {};
        var t,
          n,
          i = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              i = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (t = l[n]), r.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (t = l[n]), r.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]));
        }
        return i;
      }
      var d = n.createContext({}),
        s = function (e) {
          var r = n.useContext(d),
            t = r;
          return e && (t = 'function' == typeof e ? e(r) : o(o({}, r), e)), t;
        },
        c = function (e) {
          var r = s(e.components);
          return n.createElement(d.Provider, { value: r }, e.children);
        },
        p = 'mdxType',
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var r = e.children;
            return n.createElement(n.Fragment, {}, r);
          },
        },
        u = n.forwardRef(function (e, r) {
          var t = e.components,
            i = e.mdxType,
            l = e.originalType,
            d = e.parentName,
            c = a(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = s(t),
            u = i,
            f = p[''.concat(d, '.').concat(u)] || p[u] || m[u] || l;
          return t
            ? n.createElement(f, o(o({ ref: r }, c), {}, { components: t }))
            : n.createElement(f, o({ ref: r }, c));
        });
      function f(e, r) {
        var t = arguments,
          i = r && r.mdxType;
        if ('string' == typeof e || i) {
          var l = t.length,
            o = new Array(l);
          o[0] = u;
          var a = {};
          for (var d in r) hasOwnProperty.call(r, d) && (a[d] = r[d]);
          (a.originalType = e), (a[p] = 'string' == typeof e ? e : i), (o[1] = a);
          for (var s = 2; s < l; s++) o[s] = t[s];
          return n.createElement.apply(null, o);
        }
        return n.createElement.apply(null, t);
      }
      u.displayName = 'MDXCreateElement';
    },
    7524: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => d,
          contentTitle: () => o,
          default: () => m,
          frontMatter: () => l,
          metadata: () => a,
          toc: () => s,
        });
      var n = t(7896),
        i = (t(2784), t(876));
      const l = {
          id: 'did.RemoveControllersParam',
          title: 'Interface: RemoveControllersParam',
          sidebar_label: 'did.RemoveControllersParam',
          custom_edit_url: null,
        },
        o = void 0,
        a = {
          unversionedId: 'lisk-did/interfaces/did.RemoveControllersParam',
          id: 'lisk-did/interfaces/did.RemoveControllersParam',
          title: 'Interface: RemoveControllersParam',
          description: 'did.RemoveControllersParam',
          source: '@site/docs/lisk-did/interfaces/did.RemoveControllersParam.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.RemoveControllersParam',
          permalink: '/docs/lisk-did/interfaces/did.RemoveControllersParam',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.RemoveControllersParam',
            title: 'Interface: RemoveControllersParam',
            sidebar_label: 'did.RemoveControllersParam',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.NonceStoreData', permalink: '/docs/lisk-did/interfaces/did.NonceStoreData' },
          next: { title: 'did.RemoveKeysParam', permalink: '/docs/lisk-did/interfaces/did.RemoveKeysParam' },
        },
        d = {},
        s = [
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
        c = { toc: s },
        p = 'wrapper';
      function m(e) {
        let { components: r, ...t } = e;
        return (0, i.kt)(
          p,
          (0, n.Z)({}, c, t, { components: r, mdxType: 'MDXLayout' }),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.RemoveControllersParam',
          ),
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
            'packages/lisk-decentralized-identifier/dist/types/commands/remove_controllers_command.d.ts:4',
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
            'packages/lisk-decentralized-identifier/dist/types/commands/remove_controllers_command.d.ts:6',
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
            'packages/lisk-decentralized-identifier/dist/types/commands/remove_controllers_command.d.ts:5',
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
            'packages/lisk-decentralized-identifier/dist/types/commands/remove_controllers_command.d.ts:3',
          ),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
