'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [6058],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => s, kt: () => m });
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
        o = function (e) {
          var t = i.useContext(c),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : d(d({}, t), e)), r;
        },
        s = function (e) {
          var t = o(e.components);
          return i.createElement(c.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return i.createElement(i.Fragment, {}, t);
          },
        },
        f = i.forwardRef(function (e, t) {
          var r = e.components,
            n = e.mdxType,
            a = e.originalType,
            c = e.parentName,
            s = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = o(r),
            f = n,
            m = p[''.concat(c, '.').concat(f)] || p[f] || u[f] || a;
          return r
            ? i.createElement(m, d(d({ ref: t }, s), {}, { components: r }))
            : i.createElement(m, d({ ref: t }, s));
        });
      function m(e, t) {
        var r = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var a = r.length,
            d = new Array(a);
          d[0] = f;
          var l = {};
          for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
          (l.originalType = e), (l[p] = 'string' == typeof e ? e : n), (d[1] = l);
          for (var o = 2; o < a; o++) d[o] = r[o];
          return i.createElement.apply(null, d);
        }
        return i.createElement.apply(null, r);
      }
      f.displayName = 'MDXCreateElement';
    },
    2467: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => c,
          contentTitle: () => d,
          default: () => u,
          frontMatter: () => a,
          metadata: () => l,
          toc: () => o,
        });
      var i = r(7896),
        n = (r(2784), r(876));
      const a = {
          id: 'did.DeactivateParam',
          title: 'Interface: DeactivateParam',
          sidebar_label: 'did.DeactivateParam',
          custom_edit_url: null,
        },
        d = void 0,
        l = {
          unversionedId: 'lisk-did/interfaces/did.DeactivateParam',
          id: 'lisk-did/interfaces/did.DeactivateParam',
          title: 'Interface: DeactivateParam',
          description: 'did.DeactivateParam',
          source: '@site/docs/lisk-did/interfaces/did.DeactivateParam.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.DeactivateParam',
          permalink: '/docs/lisk-did/interfaces/did.DeactivateParam',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.DeactivateParam',
            title: 'Interface: DeactivateParam',
            sidebar_label: 'did.DeactivateParam',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.CreateParam', permalink: '/docs/lisk-did/interfaces/did.CreateParam' },
          next: { title: 'did.DidDocument', permalink: '/docs/lisk-did/interfaces/did.DidDocument' },
        },
        c = {},
        o = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'signature', id: 'signature', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'signer', id: 'signer', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'target', id: 'target', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
        ],
        s = { toc: o },
        p = 'wrapper';
      function u(e) {
        let { components: t, ...r } = e;
        return (0, n.kt)(
          p,
          (0, i.Z)({}, s, r, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.DeactivateParam',
          ),
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
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/commands/deactivate_command.d.ts:5'),
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
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/commands/deactivate_command.d.ts:4'),
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
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/commands/deactivate_command.d.ts:3'),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
