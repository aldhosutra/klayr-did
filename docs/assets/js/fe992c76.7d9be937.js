'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [1205],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => p, kt: () => k });
      var r = i(2784);
      function n(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = i),
          e
        );
      }
      function d(e, t) {
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
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(i), !0).forEach(function (t) {
                n(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : d(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var i,
          r,
          n = (function (e, t) {
            if (null == e) return {};
            var i,
              r,
              n = {},
              d = Object.keys(e);
            for (r = 0; r < d.length; r++) (i = d[r]), t.indexOf(i) >= 0 || (n[i] = e[i]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(e);
          for (r = 0; r < d.length; r++)
            (i = d[r]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]));
        }
        return n;
      }
      var o = r.createContext({}),
        c = function (e) {
          var t = r.useContext(o),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : a(a({}, t), e)), i;
        },
        p = function (e) {
          var t = c(e.components);
          return r.createElement(o.Provider, { value: t }, e.children);
        },
        s = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        f = r.forwardRef(function (e, t) {
          var i = e.components,
            n = e.mdxType,
            d = e.originalType,
            o = e.parentName,
            p = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = c(i),
            f = n,
            k = s[''.concat(o, '.').concat(f)] || s[f] || u[f] || d;
          return i
            ? r.createElement(k, a(a({ ref: t }, p), {}, { components: i }))
            : r.createElement(k, a({ ref: t }, p));
        });
      function k(e, t) {
        var i = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var d = i.length,
            a = new Array(d);
          a[0] = f;
          var l = {};
          for (var o in t) hasOwnProperty.call(t, o) && (l[o] = t[o]);
          (l.originalType = e), (l[s] = 'string' == typeof e ? e : n), (a[1] = l);
          for (var c = 2; c < d; c++) a[c] = i[c];
          return r.createElement.apply(null, a);
        }
        return r.createElement.apply(null, i);
      }
      f.displayName = 'MDXCreateElement';
    },
    7692: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => o,
          contentTitle: () => a,
          default: () => u,
          frontMatter: () => d,
          metadata: () => l,
          toc: () => c,
        });
      var r = i(7896),
        n = (i(2784), i(876));
      const d = {
          id: 'did.VerificationMethod',
          title: 'Interface: VerificationMethod',
          sidebar_label: 'did.VerificationMethod',
          custom_edit_url: null,
        },
        a = void 0,
        l = {
          unversionedId: 'lisk-did/interfaces/did.VerificationMethod',
          id: 'lisk-did/interfaces/did.VerificationMethod',
          title: 'Interface: VerificationMethod',
          description: 'did.VerificationMethod',
          source: '@site/docs/lisk-did/interfaces/did.VerificationMethod.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.VerificationMethod',
          permalink: '/docs/lisk-did/interfaces/did.VerificationMethod',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.VerificationMethod',
            title: 'Interface: VerificationMethod',
            sidebar_label: 'did.VerificationMethod',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'did.TransactionPayloadWithoutSignature',
            permalink: '/docs/lisk-did/interfaces/did.TransactionPayloadWithoutSignature',
          },
          next: {
            title: 'did.resolver.CachedResolver',
            permalink: '/docs/lisk-did/interfaces/did.resolver.CachedResolver',
          },
        },
        o = {},
        c = [
          { value: 'Hierarchy', id: 'hierarchy', level: 2 },
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
        p = { toc: c },
        s = 'wrapper';
      function u(e) {
        let { components: t, ...i } = e;
        return (0, n.kt)(
          s,
          (0, r.Z)({}, p, i, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.VerificationMethod',
          ),
          (0, n.kt)('h2', { id: 'hierarchy' }, 'Hierarchy'),
          (0, n.kt)(
            'ul',
            null,
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)(
                'p',
                { parentName: 'li' },
                (0, n.kt)(
                  'strong',
                  { parentName: 'p' },
                  (0, n.kt)('inlineCode', { parentName: 'strong' }, 'VerificationMethod'),
                ),
              ),
              (0, n.kt)(
                'p',
                { parentName: 'li' },
                '\u21b3 ',
                (0, n.kt)(
                  'a',
                  { parentName: 'p', href: '/docs/lisk-did/interfaces/vc.VerificationKey' },
                  (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerificationKey'),
                ),
              ),
            ),
          ),
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
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:12'),
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
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:10'),
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
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:13'),
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
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:11'),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
