'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [5841],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => o, kt: () => u });
      var n = i(2784);
      function a(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = i),
          e
        );
      }
      function r(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(i), !0).forEach(function (t) {
                a(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : r(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var i,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var i,
              n,
              a = {},
              r = Object.keys(e);
            for (n = 0; n < r.length; n++) (i = r[n]), t.indexOf(i) >= 0 || (a[i] = e[i]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (n = 0; n < r.length; n++)
            (i = r[n]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (a[i] = e[i]));
        }
        return a;
      }
      var p = n.createContext({}),
        s = function (e) {
          var t = n.useContext(p),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : d(d({}, t), e)), i;
        },
        o = function (e) {
          var t = s(e.components);
          return n.createElement(p.Provider, { value: t }, e.children);
        },
        c = 'mdxType',
        k = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        f = n.forwardRef(function (e, t) {
          var i = e.components,
            a = e.mdxType,
            r = e.originalType,
            p = e.parentName,
            o = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            c = s(i),
            f = a,
            u = c[''.concat(p, '.').concat(f)] || c[f] || k[f] || r;
          return i
            ? n.createElement(u, d(d({ ref: t }, o), {}, { components: i }))
            : n.createElement(u, d({ ref: t }, o));
        });
      function u(e, t) {
        var i = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var r = i.length,
            d = new Array(r);
          d[0] = f;
          var l = {};
          for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
          (l.originalType = e), (l[c] = 'string' == typeof e ? e : a), (d[1] = l);
          for (var s = 2; s < r; s++) d[s] = i[s];
          return n.createElement.apply(null, d);
        }
        return n.createElement.apply(null, i);
      }
      f.displayName = 'MDXCreateElement';
    },
    4567: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => p,
          contentTitle: () => d,
          default: () => k,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => s,
        });
      var n = i(7896),
        a = (i(2784), i(876));
      const r = {
          id: 'Ed25519Signature2020',
          title: 'Interface: Ed25519Signature2020',
          sidebar_label: 'Ed25519Signature2020',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        d = void 0,
        l = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/Ed25519Signature2020',
          id: 'lisk-decentralized-identifier/interfaces/Ed25519Signature2020',
          title: 'Interface: Ed25519Signature2020',
          description: 'Properties',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/Ed25519Signature2020.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/Ed25519Signature2020',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/Ed25519Signature2020',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'Ed25519Signature2020',
            title: 'Interface: Ed25519Signature2020',
            sidebar_label: 'Ed25519Signature2020',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'Ed25519KeyPair',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/Ed25519KeyPair',
          },
          next: { title: 'JWEDocument', permalink: '/docs/lisk-decentralized-identifier/interfaces/JWEDocument' },
        },
        p = {},
        s = [
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
        o = { toc: s },
        c = 'wrapper';
      function k(e) {
        let { components: t, ...i } = e;
        return (0, a.kt)(
          c,
          (0, n.Z)({}, o, i, { components: t, mdxType: 'MDXLayout' }),
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
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L28',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:28',
            ),
          ),
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
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L46',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:46',
            ),
          ),
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
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L44',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:44',
            ),
          ),
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
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L32',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:32',
            ),
          ),
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
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/Ed25519KeyPair' },
              (0, a.kt)('inlineCode', { parentName: 'a' }, 'Ed25519KeyPair'),
            ),
          ),
          (0, a.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L35',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:35',
            ),
          ),
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
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L33',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:33',
            ),
          ),
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
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L27',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:27',
            ),
          ),
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
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L36',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:36',
            ),
          ),
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
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L26',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:26',
            ),
          ),
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
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L45',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:45',
            ),
          ),
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
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L34',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:34',
            ),
          ),
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
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L40',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:40',
            ),
          ),
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
