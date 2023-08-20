'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [6382],
  {
    876: (e, i, t) => {
      t.d(i, { Zo: () => p, kt: () => k });
      var r = t(2784);
      function n(e, i, t) {
        return (
          i in e
            ? Object.defineProperty(e, i, { value: t, enumerable: !0, configurable: !0, writable: !0 })
            : (e[i] = t),
          e
        );
      }
      function a(e, i) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          i &&
            (r = r.filter(function (i) {
              return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function d(e) {
        for (var i = 1; i < arguments.length; i++) {
          var t = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? a(Object(t), !0).forEach(function (i) {
                n(e, i, t[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (i) {
                Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
              });
        }
        return e;
      }
      function l(e, i) {
        if (null == e) return {};
        var t,
          r,
          n = (function (e, i) {
            if (null == e) return {};
            var t,
              r,
              n = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (t = a[r]), i.indexOf(t) >= 0 || (n[t] = e[t]);
            return n;
          })(e, i);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (t = a[r]), i.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]));
        }
        return n;
      }
      var o = r.createContext({}),
        c = function (e) {
          var i = r.useContext(o),
            t = i;
          return e && (t = 'function' == typeof e ? e(i) : d(d({}, i), e)), t;
        },
        p = function (e) {
          var i = c(e.components);
          return r.createElement(o.Provider, { value: i }, e.children);
        },
        s = 'mdxType',
        f = {
          inlineCode: 'code',
          wrapper: function (e) {
            var i = e.children;
            return r.createElement(r.Fragment, {}, i);
          },
        },
        u = r.forwardRef(function (e, i) {
          var t = e.components,
            n = e.mdxType,
            a = e.originalType,
            o = e.parentName,
            p = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = c(t),
            u = n,
            k = s[''.concat(o, '.').concat(u)] || s[u] || f[u] || a;
          return t
            ? r.createElement(k, d(d({ ref: i }, p), {}, { components: t }))
            : r.createElement(k, d({ ref: i }, p));
        });
      function k(e, i) {
        var t = arguments,
          n = i && i.mdxType;
        if ('string' == typeof e || n) {
          var a = t.length,
            d = new Array(a);
          d[0] = u;
          var l = {};
          for (var o in i) hasOwnProperty.call(i, o) && (l[o] = i[o]);
          (l.originalType = e), (l[s] = 'string' == typeof e ? e : n), (d[1] = l);
          for (var c = 2; c < a; c++) d[c] = t[c];
          return r.createElement.apply(null, d);
        }
        return r.createElement.apply(null, t);
      }
      u.displayName = 'MDXCreateElement';
    },
    629: (e, i, t) => {
      t.r(i),
        t.d(i, {
          assets: () => o,
          contentTitle: () => d,
          default: () => f,
          frontMatter: () => a,
          metadata: () => l,
          toc: () => c,
        });
      var r = t(7896),
        n = (t(2784), t(876));
      const a = {
          id: 'vc.VerificationKey',
          title: 'Interface: VerificationKey',
          sidebar_label: 'vc.VerificationKey',
          custom_edit_url: null,
        },
        d = void 0,
        l = {
          unversionedId: 'lisk-did/interfaces/vc.VerificationKey',
          id: 'lisk-did/interfaces/vc.VerificationKey',
          title: 'Interface: VerificationKey',
          description: 'vc.VerificationKey',
          source: '@site/docs/lisk-did/interfaces/vc.VerificationKey.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/vc.VerificationKey',
          permalink: '/docs/lisk-did/interfaces/vc.VerificationKey',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'vc.VerificationKey',
            title: 'Interface: VerificationKey',
            sidebar_label: 'vc.VerificationKey',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'vc.VPVerificationResult',
            permalink: '/docs/lisk-did/interfaces/vc.VPVerificationResult',
          },
          next: { title: 'Readme', permalink: '/docs/lisk-did-module/' },
        },
        o = {},
        c = [
          { value: 'Hierarchy', id: 'hierarchy', level: 2 },
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'controller', id: 'controller', level: 3 },
          { value: 'Inherited from', id: 'inherited-from', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'id', id: 'id', level: 3 },
          { value: 'Inherited from', id: 'inherited-from-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'privateKeyMultibase', id: 'privatekeymultibase', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'publicKeyMultibase', id: 'publickeymultibase', level: 3 },
          { value: 'Inherited from', id: 'inherited-from-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'revoked', id: 'revoked', level: 3 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
          { value: 'type', id: 'type', level: 3 },
          { value: 'Inherited from', id: 'inherited-from-3', level: 4 },
          { value: 'Defined in', id: 'defined-in-5', level: 4 },
        ],
        p = { toc: c },
        s = 'wrapper';
      function f(e) {
        let { components: i, ...t } = e;
        return (0, n.kt)(
          s,
          (0, r.Z)({}, p, t, { components: i, mdxType: 'MDXLayout' }),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/vc' }, 'vc'),
            '.VerificationKey',
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
                  'a',
                  { parentName: 'p', href: '/docs/lisk-did/interfaces/did.VerificationMethod' },
                  (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerificationMethod'),
                ),
              ),
              (0, n.kt)(
                'p',
                { parentName: 'li' },
                '\u21b3 ',
                (0, n.kt)(
                  'strong',
                  { parentName: 'p' },
                  (0, n.kt)('inlineCode', { parentName: 'strong' }, 'VerificationKey'),
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
          (0, n.kt)('h4', { id: 'inherited-from' }, 'Inherited from'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.VerificationMethod' },
              'VerificationMethod',
            ),
            '.',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.VerificationMethod#controller' },
              'controller',
            ),
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
          (0, n.kt)('h4', { id: 'inherited-from-1' }, 'Inherited from'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.VerificationMethod' },
              'VerificationMethod',
            ),
            '.',
            (0, n.kt)('a', { parentName: 'p', href: '/docs/lisk-did/interfaces/did.VerificationMethod#id' }, 'id'),
          ),
          (0, n.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
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
          (0, n.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, n.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/types.d.ts:7'),
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
          (0, n.kt)('h4', { id: 'inherited-from-2' }, 'Inherited from'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.VerificationMethod' },
              'VerificationMethod',
            ),
            '.',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.VerificationMethod#publickeymultibase' },
              'publicKeyMultibase',
            ),
          ),
          (0, n.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:13'),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'revoked' }, 'revoked'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, n.kt)('strong', { parentName: 'p' }, 'revoked'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'any'),
          ),
          (0, n.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, n.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/types.d.ts:6'),
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
          (0, n.kt)('h4', { id: 'inherited-from-3' }, 'Inherited from'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.VerificationMethod' },
              'VerificationMethod',
            ),
            '.',
            (0, n.kt)('a', { parentName: 'p', href: '/docs/lisk-did/interfaces/did.VerificationMethod#type' }, 'type'),
          ),
          (0, n.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:11'),
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
