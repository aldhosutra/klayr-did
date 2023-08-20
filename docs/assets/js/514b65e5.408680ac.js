'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [2916],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => k, kt: () => f });
      var i = n(2784);
      function a(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          i,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              a = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (n = r[i]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var p = i.createContext({}),
        o = function (e) {
          var t = i.useContext(p),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : d(d({}, t), e)), n;
        },
        k = function (e) {
          var t = o(e.components);
          return i.createElement(p.Provider, { value: t }, e.children);
        },
        s = 'mdxType',
        c = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return i.createElement(i.Fragment, {}, t);
          },
        },
        u = i.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            r = e.originalType,
            p = e.parentName,
            k = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = o(n),
            u = a,
            f = s[''.concat(p, '.').concat(u)] || s[u] || c[u] || r;
          return n
            ? i.createElement(f, d(d({ ref: t }, k), {}, { components: n }))
            : i.createElement(f, d({ ref: t }, k));
        });
      function f(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var r = n.length,
            d = new Array(r);
          d[0] = u;
          var l = {};
          for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
          (l.originalType = e), (l[s] = 'string' == typeof e ? e : a), (d[1] = l);
          for (var o = 2; o < r; o++) d[o] = n[o];
          return i.createElement.apply(null, d);
        }
        return i.createElement.apply(null, n);
      }
      u.displayName = 'MDXCreateElement';
    },
    3259: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => d,
          default: () => c,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => o,
        });
      var i = n(7896),
        a = (n(2784), n(876));
      const r = {
          id: 'did.Ed25519Signature2020',
          title: 'Interface: Ed25519Signature2020',
          sidebar_label: 'did.Ed25519Signature2020',
          custom_edit_url: null,
        },
        d = void 0,
        l = {
          unversionedId: 'lisk-did/interfaces/did.Ed25519Signature2020',
          id: 'lisk-did/interfaces/did.Ed25519Signature2020',
          title: 'Interface: Ed25519Signature2020',
          description: 'did.Ed25519Signature2020',
          source: '@site/docs/lisk-did/interfaces/did.Ed25519Signature2020.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.Ed25519Signature2020',
          permalink: '/docs/lisk-did/interfaces/did.Ed25519Signature2020',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.Ed25519Signature2020',
            title: 'Interface: Ed25519Signature2020',
            sidebar_label: 'did.Ed25519Signature2020',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.Ed25519KeyPair', permalink: '/docs/lisk-did/interfaces/did.Ed25519KeyPair' },
          next: { title: 'did.JWEDocument', permalink: '/docs/lisk-did/interfaces/did.JWEDocument' },
        },
        p = {},
        o = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'LDKeyClass', id: 'ldkeyclass', level: 3 },
          { value: 'Type declaration', id: 'type-declaration', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: '_hashCache', id: '_hashcache', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'canonizeOptions', id: 'canonizeoptions', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'contextUrl', id: 'contexturl', level: 3 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'key', id: 'key', level: 3 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
          { value: 'proof', id: 'proof', level: 3 },
          { value: 'Defined in', id: 'defined-in-5', level: 4 },
          { value: 'requiredKeyType', id: 'requiredkeytype', level: 3 },
          { value: 'Defined in', id: 'defined-in-6', level: 4 },
          { value: 'signer', id: 'signer', level: 3 },
          { value: 'Type declaration', id: 'type-declaration-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-7', level: 4 },
          { value: 'type', id: 'type', level: 3 },
          { value: 'Defined in', id: 'defined-in-8', level: 4 },
          { value: 'useNativeCanonize', id: 'usenativecanonize', level: 3 },
          { value: 'Defined in', id: 'defined-in-9', level: 4 },
          { value: 'verificationMethod', id: 'verificationmethod', level: 3 },
          { value: 'Defined in', id: 'defined-in-10', level: 4 },
          { value: 'verifier', id: 'verifier', level: 3 },
          { value: 'Type declaration', id: 'type-declaration-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-11', level: 4 },
        ],
        k = { toc: o },
        s = 'wrapper';
      function c(e) {
        let { components: t, ...n } = e;
        return (0, a.kt)(
          s,
          (0, i.Z)({}, k, n, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.Ed25519Signature2020',
          ),
          (0, a.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, a.kt)('h3', { id: 'ldkeyclass' }, 'LDKeyClass'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'LDKeyClass'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Object'),
          ),
          (0, a.kt)('h4', { id: 'type-declaration' }, 'Type declaration'),
          (0, a.kt)(
            'table',
            null,
            (0, a.kt)(
              'thead',
              { parentName: 'table' },
              (0, a.kt)(
                'tr',
                { parentName: 'thead' },
                (0, a.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, a.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, a.kt)(
              'tbody',
              { parentName: 'table' },
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'SUITE_CONTEXT'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, '"https://w3id.org/security/suites/ed25519-2020/v1"'),
                ),
              ),
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'suite'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, '"Ed25519VerificationKey2020"'),
                ),
              ),
            ),
          ),
          (0, a.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:25'),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: '_hashcache' }, '_', 'hashCache'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('strong', { parentName: 'p' }, '_', 'hashCache'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'unknown'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:48'),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'canonizeoptions' }, 'canonizeOptions'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'canonizeOptions'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'unknown'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:46'),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'contexturl' }, 'contextUrl'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'contextUrl'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '"https://w3id.org/security/suites/ed25519-2020/v1"'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:29'),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'key' }, 'key'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'key'),
            ': ',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.Ed25519KeyPair' },
              (0, a.kt)('inlineCode', { parentName: 'a' }, 'Ed25519KeyPair'),
            ),
          ),
          (0, a.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:32'),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'proof' }, 'proof'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'proof'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'unknown'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:30'),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'requiredkeytype' }, 'requiredKeyType'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'requiredKeyType'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '"Ed25519VerificationKey2020"'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-6' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:24'),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'signer' }, 'signer'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'signer'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Object'),
          ),
          (0, a.kt)('h4', { id: 'type-declaration-1' }, 'Type declaration'),
          (0, a.kt)(
            'table',
            null,
            (0, a.kt)(
              'thead',
              { parentName: 'table' },
              (0, a.kt)(
                'tr',
                { parentName: 'thead' },
                (0, a.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, a.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, a.kt)(
              'tbody',
              { parentName: 'table' },
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'id'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'sign'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '(',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, '__namedParameters'),
                  ': { ',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'data'),
                  ': ',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  '  }) => ',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'Promise'),
                  '<',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                  '>',
                ),
              ),
            ),
          ),
          (0, a.kt)('h4', { id: 'defined-in-7' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:33'),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'type' }, 'type'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'type'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '"Ed25519Signature2020"'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-8' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:23'),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'usenativecanonize' }, 'useNativeCanonize'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'useNativeCanonize'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'unknown'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-9' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:47'),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'verificationmethod' }, 'verificationMethod'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'verificationMethod'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-10' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:31'),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'verifier' }, 'verifier'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'verifier'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Object'),
          ),
          (0, a.kt)('h4', { id: 'type-declaration-2' }, 'Type declaration'),
          (0, a.kt)(
            'table',
            null,
            (0, a.kt)(
              'thead',
              { parentName: 'table' },
              (0, a.kt)(
                'tr',
                { parentName: 'thead' },
                (0, a.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, a.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, a.kt)(
              'tbody',
              { parentName: 'table' },
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'id'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'verify'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '(',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, '__namedParameters'),
                  ': { ',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'data'),
                  ': ',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'signature'),
                  ': ',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                  '  }) => ',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'Promise'),
                  '<',
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'boolean'),
                  '>',
                ),
              ),
            ),
          ),
          (0, a.kt)('h4', { id: 'defined-in-11' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:39'),
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
