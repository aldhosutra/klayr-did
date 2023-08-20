'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [2899],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => p, kt: () => k });
      var i = r(2784);
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
          e
        );
      }
      function l(e, t) {
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
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function o(e, t) {
        if (null == e) return {};
        var r,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              i,
              n = {},
              l = Object.keys(e);
            for (i = 0; i < l.length; i++) (r = l[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (i = 0; i < l.length; i++)
            (r = l[i]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
        }
        return n;
      }
      var s = i.createContext({}),
        d = function (e) {
          var t = i.useContext(s),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : a(a({}, t), e)), r;
        },
        p = function (e) {
          var t = d(e.components);
          return i.createElement(s.Provider, { value: t }, e.children);
        },
        c = 'mdxType',
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
            l = e.originalType,
            s = e.parentName,
            p = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            c = d(r),
            u = n,
            k = c[''.concat(s, '.').concat(u)] || c[u] || f[u] || l;
          return r
            ? i.createElement(k, a(a({ ref: t }, p), {}, { components: r }))
            : i.createElement(k, a({ ref: t }, p));
        });
      function k(e, t) {
        var r = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var l = r.length,
            a = new Array(l);
          a[0] = u;
          var o = {};
          for (var s in t) hasOwnProperty.call(t, s) && (o[s] = t[s]);
          (o.originalType = e), (o[c] = 'string' == typeof e ? e : n), (a[1] = o);
          for (var d = 2; d < l; d++) a[d] = r[d];
          return i.createElement.apply(null, a);
        }
        return i.createElement.apply(null, r);
      }
      u.displayName = 'MDXCreateElement';
    },
    1084: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => s,
          contentTitle: () => a,
          default: () => f,
          frontMatter: () => l,
          metadata: () => o,
          toc: () => d,
        });
      var i = r(7896),
        n = (r(2784), r(876));
      const l = {
          id: 'Proof',
          title: 'Interface: Proof',
          sidebar_label: 'Proof',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        a = void 0,
        o = {
          unversionedId: 'lisk-verifiable-credentials/interfaces/Proof',
          id: 'lisk-verifiable-credentials/interfaces/Proof',
          title: 'Interface: Proof',
          description: 'Properties',
          source: '@site/docs/lisk-verifiable-credentials/interfaces/Proof.md',
          sourceDirName: 'lisk-verifiable-credentials/interfaces',
          slug: '/lisk-verifiable-credentials/interfaces/Proof',
          permalink: '/docs/lisk-verifiable-credentials/interfaces/Proof',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'Proof',
            title: 'Interface: Proof',
            sidebar_label: 'Proof',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'documentLoader.builders',
            permalink: '/docs/lisk-verifiable-credentials/namespaces/documentLoader.builders',
          },
          next: {
            title: 'VCVerificationResult',
            permalink: '/docs/lisk-verifiable-credentials/interfaces/VCVerificationResult',
          },
        },
        s = {},
        d = [
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
        p = { toc: d },
        c = 'wrapper';
      function f(e) {
        let { components: t, ...r } = e;
        return (0, n.kt)(
          c,
          (0, i.Z)({}, p, r, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, n.kt)('h3', { id: 'created' }, 'created'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'created'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-verifiable-credentials/src/types.ts#L32',
              },
              'lisk-verifiable-credentials/src/types.ts:32',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'proofpurpose' }, 'proofPurpose'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'proofPurpose'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-verifiable-credentials/src/types.ts#L34',
              },
              'lisk-verifiable-credentials/src/types.ts:34',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'proofvalue' }, 'proofValue'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'proofValue'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-verifiable-credentials/src/types.ts#L35',
              },
              'lisk-verifiable-credentials/src/types.ts:35',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'type' }, 'type'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'type'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-verifiable-credentials/src/types.ts#L31',
              },
              'lisk-verifiable-credentials/src/types.ts:31',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'verificationmethod' }, 'verificationMethod'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'verificationMethod'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-verifiable-credentials/src/types.ts#L33',
              },
              'lisk-verifiable-credentials/src/types.ts:33',
            ),
          ),
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
