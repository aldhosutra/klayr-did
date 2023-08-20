'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [6060],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => s, kt: () => f });
      var r = i(2784);
      function n(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = i),
          e
        );
      }
      function l(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(i), !0).forEach(function (t) {
                n(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : l(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      function a(e, t) {
        if (null == e) return {};
        var i,
          r,
          n = (function (e, t) {
            if (null == e) return {};
            var i,
              r,
              n = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++) (i = l[r]), t.indexOf(i) >= 0 || (n[i] = e[i]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (i = l[r]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]));
        }
        return n;
      }
      var p = r.createContext({}),
        o = function (e) {
          var t = r.useContext(p),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : d(d({}, t), e)), i;
        },
        s = function (e) {
          var t = o(e.components);
          return r.createElement(p.Provider, { value: t }, e.children);
        },
        u = 'mdxType',
        c = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        k = r.forwardRef(function (e, t) {
          var i = e.components,
            n = e.mdxType,
            l = e.originalType,
            p = e.parentName,
            s = a(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = o(i),
            k = n,
            f = u[''.concat(p, '.').concat(k)] || u[k] || c[k] || l;
          return i
            ? r.createElement(f, d(d({ ref: t }, s), {}, { components: i }))
            : r.createElement(f, d({ ref: t }, s));
        });
      function f(e, t) {
        var i = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var l = i.length,
            d = new Array(l);
          d[0] = k;
          var a = {};
          for (var p in t) hasOwnProperty.call(t, p) && (a[p] = t[p]);
          (a.originalType = e), (a[u] = 'string' == typeof e ? e : n), (d[1] = a);
          for (var o = 2; o < l; o++) d[o] = i[o];
          return r.createElement.apply(null, d);
        }
        return r.createElement.apply(null, i);
      }
      k.displayName = 'MDXCreateElement';
    },
    5564: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => p,
          contentTitle: () => d,
          default: () => c,
          frontMatter: () => l,
          metadata: () => a,
          toc: () => o,
        });
      var r = i(7896),
        n = (i(2784), i(876));
      const l = {
          id: 'did.Ed25519KeyPair',
          title: 'Interface: Ed25519KeyPair',
          sidebar_label: 'did.Ed25519KeyPair',
          custom_edit_url: null,
        },
        d = void 0,
        a = {
          unversionedId: 'lisk-did/interfaces/did.Ed25519KeyPair',
          id: 'lisk-did/interfaces/did.Ed25519KeyPair',
          title: 'Interface: Ed25519KeyPair',
          description: 'did.Ed25519KeyPair',
          source: '@site/docs/lisk-did/interfaces/did.Ed25519KeyPair.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.Ed25519KeyPair',
          permalink: '/docs/lisk-did/interfaces/did.Ed25519KeyPair',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.Ed25519KeyPair',
            title: 'Interface: Ed25519KeyPair',
            sidebar_label: 'did.Ed25519KeyPair',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'did.DocumentLoaderResult',
            permalink: '/docs/lisk-did/interfaces/did.DocumentLoaderResult',
          },
          next: { title: 'did.Ed25519Signature2020', permalink: '/docs/lisk-did/interfaces/did.Ed25519Signature2020' },
        },
        p = {},
        o = [
          { value: 'Hierarchy', id: 'hierarchy', level: 2 },
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'controller', id: 'controller', level: 3 },
          { value: 'Inherited from', id: 'inherited-from', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'fingerprint', id: 'fingerprint', level: 3 },
          { value: 'Type declaration', id: 'type-declaration', level: 4 },
          { value: 'Returns', id: 'returns', level: 5 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'id', id: 'id', level: 3 },
          { value: 'Inherited from', id: 'inherited-from-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'privateKeyMultibase', id: 'privatekeymultibase', level: 3 },
          { value: 'Inherited from', id: 'inherited-from-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'publicKeyMultibase', id: 'publickeymultibase', level: 3 },
          { value: 'Inherited from', id: 'inherited-from-3', level: 4 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
          { value: 'type', id: 'type', level: 3 },
          { value: 'Overrides', id: 'overrides', level: 4 },
          { value: 'Defined in', id: 'defined-in-5', level: 4 },
        ],
        s = { toc: o },
        u = 'wrapper';
      function c(e) {
        let { components: t, ...i } = e;
        return (0, n.kt)(
          u,
          (0, r.Z)({}, s, i, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.Ed25519KeyPair',
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
                (0, n.kt)('inlineCode', { parentName: 'p' }, 'Partial'),
                '<',
                (0, n.kt)(
                  'a',
                  { parentName: 'p', href: '/docs/lisk-did/namespaces/did#keyagreement' },
                  (0, n.kt)('inlineCode', { parentName: 'a' }, 'KeyAgreement'),
                ),
                '>',
              ),
              (0, n.kt)(
                'p',
                { parentName: 'li' },
                '\u21b3 ',
                (0, n.kt)(
                  'strong',
                  { parentName: 'p' },
                  (0, n.kt)('inlineCode', { parentName: 'strong' }, 'Ed25519KeyPair'),
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
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, n.kt)('strong', { parentName: 'p' }, 'controller'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'inherited-from' }, 'Inherited from'),
          (0, n.kt)('p', null, 'Partial.controller'),
          (0, n.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:12'),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'fingerprint' }, 'fingerprint'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, n.kt)('strong', { parentName: 'p' }, 'fingerprint'),
            ': () => ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'type-declaration' }, 'Type declaration'),
          (0, n.kt)('p', null, '\u25b8 (): ', (0, n.kt)('inlineCode', { parentName: 'p' }, 'string')),
          (0, n.kt)('h5', { id: 'returns' }, 'Returns'),
          (0, n.kt)('p', null, (0, n.kt)('inlineCode', { parentName: 'p' }, 'string')),
          (0, n.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:20'),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'id' }, 'id'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, n.kt)('strong', { parentName: 'p' }, 'id'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'inherited-from-1' }, 'Inherited from'),
          (0, n.kt)('p', null, 'Partial.id'),
          (0, n.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:10'),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'privatekeymultibase' }, 'privateKeyMultibase'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, n.kt)('strong', { parentName: 'p' }, 'privateKeyMultibase'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'inherited-from-2' }, 'Inherited from'),
          (0, n.kt)('p', null, 'Partial.privateKeyMultibase'),
          (0, n.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:16'),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'publickeymultibase' }, 'publicKeyMultibase'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, n.kt)('strong', { parentName: 'p' }, 'publicKeyMultibase'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'inherited-from-3' }, 'Inherited from'),
          (0, n.kt)('p', null, 'Partial.publicKeyMultibase'),
          (0, n.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:13'),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'type' }, 'type'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, n.kt)('strong', { parentName: 'p' }, 'type'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, '"Ed25519VerificationKey2020"'),
          ),
          (0, n.kt)('h4', { id: 'overrides' }, 'Overrides'),
          (0, n.kt)('p', null, 'Partial.type'),
          (0, n.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:19'),
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
