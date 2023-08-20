'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [4913],
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
      function d(e, r) {
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
            ? d(Object(t), !0).forEach(function (r) {
                i(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (r) {
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
              d = Object.keys(e);
            for (n = 0; n < d.length; n++) (t = d[n]), r.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(e);
          for (n = 0; n < d.length; n++)
            (t = d[n]), r.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]));
        }
        return i;
      }
      var o = n.createContext({}),
        s = function (e) {
          var r = n.useContext(o),
            t = r;
          return e && (t = 'function' == typeof e ? e(r) : l(l({}, r), e)), t;
        },
        c = function (e) {
          var r = s(e.components);
          return n.createElement(o.Provider, { value: r }, e.children);
        },
        p = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var r = e.children;
            return n.createElement(n.Fragment, {}, r);
          },
        },
        m = n.forwardRef(function (e, r) {
          var t = e.components,
            i = e.mdxType,
            d = e.originalType,
            o = e.parentName,
            c = a(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = s(t),
            m = i,
            f = p[''.concat(o, '.').concat(m)] || p[m] || u[m] || d;
          return t
            ? n.createElement(f, l(l({ ref: r }, c), {}, { components: t }))
            : n.createElement(f, l({ ref: r }, c));
        });
      function f(e, r) {
        var t = arguments,
          i = r && r.mdxType;
        if ('string' == typeof e || i) {
          var d = t.length,
            l = new Array(d);
          l[0] = m;
          var a = {};
          for (var o in r) hasOwnProperty.call(r, o) && (a[o] = r[o]);
          (a.originalType = e), (a[p] = 'string' == typeof e ? e : i), (l[1] = a);
          for (var s = 2; s < d; s++) l[s] = t[s];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, t);
      }
      m.displayName = 'MDXCreateElement';
    },
    6091: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => o,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => d,
          metadata: () => a,
          toc: () => s,
        });
      var n = t(7896),
        i = (t(2784), t(876));
      const d = {
          id: 'did.AddControllersParam',
          title: 'Interface: AddControllersParam',
          sidebar_label: 'did.AddControllersParam',
          custom_edit_url: null,
        },
        l = void 0,
        a = {
          unversionedId: 'lisk-did/interfaces/did.AddControllersParam',
          id: 'lisk-did/interfaces/did.AddControllersParam',
          title: 'Interface: AddControllersParam',
          description: 'did.AddControllersParam',
          source: '@site/docs/lisk-did/interfaces/did.AddControllersParam.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.AddControllersParam',
          permalink: '/docs/lisk-did/interfaces/did.AddControllersParam',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.AddControllersParam',
            title: 'Interface: AddControllersParam',
            sidebar_label: 'did.AddControllersParam',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'RemoveServiceEndpointCommand',
            permalink: '/docs/lisk-did/classes/RemoveServiceEndpointCommand',
          },
          next: { title: 'did.AddKeysParam', permalink: '/docs/lisk-did/interfaces/did.AddKeysParam' },
        },
        o = {},
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
      function u(e) {
        let { components: r, ...t } = e;
        return (0, i.kt)(
          p,
          (0, n.Z)({}, c, t, { components: r, mdxType: 'MDXLayout' }),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.AddControllersParam',
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
            'packages/lisk-decentralized-identifier/dist/types/commands/add_controllers_command.d.ts:4',
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
            'packages/lisk-decentralized-identifier/dist/types/commands/add_controllers_command.d.ts:6',
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
            'packages/lisk-decentralized-identifier/dist/types/commands/add_controllers_command.d.ts:5',
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
            'packages/lisk-decentralized-identifier/dist/types/commands/add_controllers_command.d.ts:3',
          ),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
