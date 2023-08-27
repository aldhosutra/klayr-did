'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [8267],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => s, kt: () => k });
      var r = i(2784);
      function n(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = i),
          e
        );
      }
      function a(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(i), !0).forEach(function (t) {
                n(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : a(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      function d(e, t) {
        if (null == e) return {};
        var i,
          r,
          n = (function (e, t) {
            if (null == e) return {};
            var i,
              r,
              n = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (i = a[r]), t.indexOf(i) >= 0 || (n[i] = e[i]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (i = a[r]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]));
        }
        return n;
      }
      var o = r.createContext({}),
        c = function (e) {
          var t = r.useContext(o),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : l(l({}, t), e)), i;
        },
        s = function (e) {
          var t = c(e.components);
          return r.createElement(o.Provider, { value: t }, e.children);
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
          var i = e.components,
            n = e.mdxType,
            a = e.originalType,
            o = e.parentName,
            s = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = c(i),
            u = n,
            k = p[''.concat(o, '.').concat(u)] || p[u] || f[u] || a;
          return i
            ? r.createElement(k, l(l({ ref: t }, s), {}, { components: i }))
            : r.createElement(k, l({ ref: t }, s));
        });
      function k(e, t) {
        var i = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var a = i.length,
            l = new Array(a);
          l[0] = u;
          var d = {};
          for (var o in t) hasOwnProperty.call(t, o) && (d[o] = t[o]);
          (d.originalType = e), (d[p] = 'string' == typeof e ? e : n), (l[1] = d);
          for (var c = 2; c < a; c++) l[c] = i[c];
          return r.createElement.apply(null, l);
        }
        return r.createElement.apply(null, i);
      }
      u.displayName = 'MDXCreateElement';
    },
    3578: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => o,
          contentTitle: () => l,
          default: () => f,
          frontMatter: () => a,
          metadata: () => d,
          toc: () => c,
        });
      var r = i(7896),
        n = (i(2784), i(876));
      const a = {
          id: 'VerificationMethod',
          title: 'Interface: VerificationMethod',
          sidebar_label: 'VerificationMethod',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        l = void 0,
        d = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/VerificationMethod',
          id: 'lisk-decentralized-identifier/interfaces/VerificationMethod',
          title: 'Interface: VerificationMethod',
          description: 'Properties',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/VerificationMethod.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/VerificationMethod',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/VerificationMethod',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'VerificationMethod',
            title: 'Interface: VerificationMethod',
            sidebar_label: 'VerificationMethod',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'TransactionPayloadWithoutSignature',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/TransactionPayloadWithoutSignature',
          },
          next: {
            title: 'resolver.CachedResolver',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/resolver.CachedResolver',
          },
        },
        o = {},
        c = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'controller', id: 'controller', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'id', id: 'id', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'publicKeyMultibase', id: 'publickeymultibase', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'type', id: 'type', level: 3 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
        ],
        s = { toc: c },
        p = 'wrapper';
      function f(e) {
        let { components: t, ...i } = e;
        return (0, n.kt)(
          p,
          (0, r.Z)({}, s, i, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, n.kt)('h3', { id: 'controller' }, 'controller'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'controller'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L14',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:14',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'id' }, 'id'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'id'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L12',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:12',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'publickeymultibase' }, 'publicKeyMultibase'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'publicKeyMultibase'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L15',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:15',
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L13',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:13',
            ),
          ),
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
