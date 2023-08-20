'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [2583],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => p, kt: () => v });
      var n = r(2784);
      function i(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
          e
        );
      }
      function o(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function a(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      var d = n.createContext({}),
        s = function (e) {
          var t = n.useContext(d),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : l(l({}, t), e)), r;
        },
        p = function (e) {
          var t = s(e.components);
          return n.createElement(d.Provider, { value: t }, e.children);
        },
        c = 'mdxType',
        f = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        u = n.forwardRef(function (e, t) {
          var r = e.components,
            i = e.mdxType,
            o = e.originalType,
            d = e.parentName,
            p = a(e, ['components', 'mdxType', 'originalType', 'parentName']),
            c = s(r),
            u = i,
            v = c[''.concat(d, '.').concat(u)] || c[u] || f[u] || o;
          return r
            ? n.createElement(v, l(l({ ref: t }, p), {}, { components: r }))
            : n.createElement(v, l({ ref: t }, p));
        });
      function v(e, t) {
        var r = arguments,
          i = t && t.mdxType;
        if ('string' == typeof e || i) {
          var o = r.length,
            l = new Array(o);
          l[0] = u;
          var a = {};
          for (var d in t) hasOwnProperty.call(t, d) && (a[d] = t[d]);
          (a.originalType = e), (a[c] = 'string' == typeof e ? e : i), (l[1] = a);
          for (var s = 2; s < o; s++) l[s] = r[s];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, r);
      }
      u.displayName = 'MDXCreateElement';
    },
    6107: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => d,
          contentTitle: () => l,
          default: () => f,
          frontMatter: () => o,
          metadata: () => a,
          toc: () => s,
        });
      var n = r(7896),
        i = (r(2784), r(876));
      const o = { id: 'vc.Proof', title: 'Interface: Proof', sidebar_label: 'vc.Proof', custom_edit_url: null },
        l = void 0,
        a = {
          unversionedId: 'lisk-did/interfaces/vc.Proof',
          id: 'lisk-did/interfaces/vc.Proof',
          title: 'Interface: Proof',
          description: 'vc.Proof',
          source: '@site/docs/lisk-did/interfaces/vc.Proof.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/vc.Proof',
          permalink: '/docs/lisk-did/interfaces/vc.Proof',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: { id: 'vc.Proof', title: 'Interface: Proof', sidebar_label: 'vc.Proof', custom_edit_url: null },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'did.resolver.CachedResolver',
            permalink: '/docs/lisk-did/interfaces/did.resolver.CachedResolver',
          },
          next: { title: 'vc.VCVerificationResult', permalink: '/docs/lisk-did/interfaces/vc.VCVerificationResult' },
        },
        d = {},
        s = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'created', id: 'created', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'proofPurpose', id: 'proofpurpose', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'proofValue', id: 'proofvalue', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'type', id: 'type', level: 3 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'verificationMethod', id: 'verificationmethod', level: 3 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
        ],
        p = { toc: s },
        c = 'wrapper';
      function f(e) {
        let { components: t, ...r } = e;
        return (0, i.kt)(
          c,
          (0, n.Z)({}, p, r, { components: t, mdxType: 'MDXLayout' }),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/vc' }, 'vc'),
            '.Proof',
          ),
          (0, i.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, i.kt)('h3', { id: 'created' }, 'created'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'created'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, i.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/types.d.ts:19'),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'proofpurpose' }, 'proofPurpose'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'proofPurpose'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, i.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/types.d.ts:21'),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'proofvalue' }, 'proofValue'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'proofValue'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, i.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/types.d.ts:22'),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'type' }, 'type'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'type'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, i.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/types.d.ts:18'),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'verificationmethod' }, 'verificationMethod'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'verificationMethod'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, i.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/types.d.ts:20'),
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
