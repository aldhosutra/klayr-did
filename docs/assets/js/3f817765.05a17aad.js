'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [6784],
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
      var o = n.createContext({}),
        s = function (e) {
          var t = n.useContext(o),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : d(d({}, t), e)), r;
        },
        c = function (e) {
          var t = s(e.components);
          return n.createElement(o.Provider, { value: t }, e.children);
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
            o = e.parentName,
            c = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = s(r),
            u = i,
            f = p[''.concat(o, '.').concat(u)] || p[u] || m[u] || a;
          return r
            ? n.createElement(f, d(d({ ref: t }, c), {}, { components: r }))
            : n.createElement(f, d({ ref: t }, c));
        });
      function f(e, t) {
        var r = arguments,
          i = t && t.mdxType;
        if ('string' == typeof e || i) {
          var a = r.length,
            d = new Array(a);
          d[0] = u;
          var l = {};
          for (var o in t) hasOwnProperty.call(t, o) && (l[o] = t[o]);
          (l.originalType = e), (l[p] = 'string' == typeof e ? e : i), (d[1] = l);
          for (var s = 2; s < a; s++) d[s] = r[s];
          return n.createElement.apply(null, d);
        }
        return n.createElement.apply(null, r);
      }
      u.displayName = 'MDXCreateElement';
    },
    8990: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => o,
          contentTitle: () => d,
          default: () => m,
          frontMatter: () => a,
          metadata: () => l,
          toc: () => s,
        });
      var n = r(7896),
        i = (r(2784), r(876));
      const a = {
          id: 'did.CreateParam',
          title: 'Interface: CreateParam',
          sidebar_label: 'did.CreateParam',
          custom_edit_url: null,
        },
        d = void 0,
        l = {
          unversionedId: 'lisk-did/interfaces/did.CreateParam',
          id: 'lisk-did/interfaces/did.CreateParam',
          title: 'Interface: CreateParam',
          description: 'did.CreateParam',
          source: '@site/docs/lisk-did/interfaces/did.CreateParam.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.CreateParam',
          permalink: '/docs/lisk-did/interfaces/did.CreateParam',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.CreateParam',
            title: 'Interface: CreateParam',
            sidebar_label: 'did.CreateParam',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.CipherInterface', permalink: '/docs/lisk-did/interfaces/did.CipherInterface' },
          next: { title: 'did.DeactivateParam', permalink: '/docs/lisk-did/interfaces/did.DeactivateParam' },
        },
        o = {},
        s = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'controllers', id: 'controllers', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'did', id: 'did', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'keys', id: 'keys', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
        ],
        c = { toc: s },
        p = 'wrapper';
      function m(e) {
        let { components: t, ...r } = e;
        return (0, i.kt)(
          p,
          (0, n.Z)({}, c, r, { components: t, mdxType: 'MDXLayout' }),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.CreateParam',
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
          (0, i.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/commands/create_command.d.ts:5'),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'did' }, 'did'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'did'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, i.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/commands/create_command.d.ts:3'),
          (0, i.kt)('hr', null),
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
          (0, i.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/commands/create_command.d.ts:4'),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
