'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [8992],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => s, kt: () => u });
      var a = r(2784);
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
          e
        );
      }
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function d(e, t) {
        if (null == e) return {};
        var r,
          a,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              a,
              n = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (r = i[a]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
        }
        return n;
      }
      var p = a.createContext({}),
        o = function (e) {
          var t = a.useContext(p),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : l(l({}, t), e)), r;
        },
        s = function (e) {
          var t = o(e.components);
          return a.createElement(p.Provider, { value: t }, e.children);
        },
        k = 'mdxType',
        c = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        m = a.forwardRef(function (e, t) {
          var r = e.components,
            n = e.mdxType,
            i = e.originalType,
            p = e.parentName,
            s = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            k = o(r),
            m = n,
            u = k[''.concat(p, '.').concat(m)] || k[m] || c[m] || i;
          return r
            ? a.createElement(u, l(l({ ref: t }, s), {}, { components: r }))
            : a.createElement(u, l({ ref: t }, s));
        });
      function u(e, t) {
        var r = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var i = r.length,
            l = new Array(i);
          l[0] = m;
          var d = {};
          for (var p in t) hasOwnProperty.call(t, p) && (d[p] = t[p]);
          (d.originalType = e), (d[k] = 'string' == typeof e ? e : n), (l[1] = d);
          for (var o = 2; o < i; o++) l[o] = r[o];
          return a.createElement.apply(null, l);
        }
        return a.createElement.apply(null, r);
      }
      m.displayName = 'MDXCreateElement';
    },
    4205: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => c,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => o,
        });
      var a = r(7896),
        n = (r(2784), r(876));
      const i = {
          id: 'cryptography.key',
          title: 'Namespace: key',
          sidebar_label: 'cryptography.key',
          custom_edit_url: null,
        },
        l = void 0,
        d = {
          unversionedId: 'lisk-decentralized-identifier/namespaces/cryptography.key',
          id: 'lisk-decentralized-identifier/namespaces/cryptography.key',
          title: 'Namespace: key',
          description: 'cryptography.key',
          source: '@site/docs/lisk-decentralized-identifier/namespaces/cryptography.key.md',
          sourceDirName: 'lisk-decentralized-identifier/namespaces',
          slug: '/lisk-decentralized-identifier/namespaces/cryptography.key',
          permalink: '/docs/lisk-decentralized-identifier/namespaces/cryptography.key',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'cryptography.key',
            title: 'Namespace: key',
            sidebar_label: 'cryptography.key',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'cryptography.convert',
            permalink: '/docs/lisk-decentralized-identifier/namespaces/cryptography.convert',
          },
          next: {
            title: 'cryptography.method',
            permalink: '/docs/lisk-decentralized-identifier/namespaces/cryptography.method',
          },
        },
        p = {},
        o = [
          { value: 'Functions', id: 'functions', level: 2 },
          { value: 'createEd25519KeyPair', id: 'createed25519keypair', level: 3 },
          { value: 'Parameters', id: 'parameters', level: 4 },
          { value: 'Returns', id: 'returns', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'createX25519KeyPair', id: 'createx25519keypair', level: 3 },
          { value: 'Parameters', id: 'parameters-1', level: 4 },
          { value: 'Returns', id: 'returns-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'generateEd25519KeyPair', id: 'generateed25519keypair', level: 3 },
          { value: 'Parameters', id: 'parameters-2', level: 4 },
          { value: 'Returns', id: 'returns-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'generateX25519KeyPair', id: 'generatex25519keypair', level: 3 },
          { value: 'Returns', id: 'returns-3', level: 4 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'getEd25519SignatureSuite', id: 'geted25519signaturesuite', level: 3 },
          { value: 'Parameters', id: 'parameters-3', level: 4 },
          { value: 'Returns', id: 'returns-4', level: 4 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
        ],
        s = { toc: o },
        k = 'wrapper';
      function c(e) {
        let { components: t, ...r } = e;
        return (0, n.kt)(
          k,
          (0, a.Z)({}, s, r, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/namespaces/cryptography' },
              'cryptography',
            ),
            '.key',
          ),
          (0, n.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, n.kt)('h3', { id: 'createed25519keypair' }, 'createEd25519KeyPair'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'createEd25519KeyPair'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'options'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Ed25519VerificationKey2020'),
            '>',
          ),
          (0, n.kt)('p', null, 'Creates an Ed25519 Key Pair from an existing serialized key pair.'),
          (0, n.kt)('h4', { id: 'parameters' }, 'Parameters'),
          (0, n.kt)(
            'table',
            null,
            (0, n.kt)(
              'thead',
              { parentName: 'table' },
              (0, n.kt)(
                'tr',
                { parentName: 'thead' },
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Description'),
              ),
            ),
            (0, n.kt)(
              'tbody',
              { parentName: 'table' },
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'options'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'SerializedKeyPair'),
                ),
                (0, n.kt)('td', { parentName: 'tr', align: 'left' }, 'Key pair options (see constructor).'),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Ed25519VerificationKey2020'),
            '>',
          ),
          (0, n.kt)('p', null, 'An Ed25519 Key Pair.'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('strong', { parentName: 'p' }, (0, n.kt)('inlineCode', { parentName: 'strong' }, 'Example')),
          ),
          (0, n.kt)(
            'pre',
            null,
            (0, n.kt)(
              'code',
              { parentName: 'pre', className: 'language-ts' },
              "> const keyPair = await Ed25519VerificationKey2020.from({\ncontroller: 'did:ex:1234',\ntype: 'Ed25519VerificationKey2020',\npublicKeyMultibase,\nprivateKeyMultibase\n});\n",
            ),
          ),
          (0, n.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            'node_modules/@digitalcredentials/ed25519-verification-key-2020/dist/Ed25519VerificationKey2020.d.ts:52',
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'createx25519keypair' }, 'createX25519KeyPair'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'createX25519KeyPair'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'keyPair'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Ed25519VerificationKey2020'),
            '>',
          ),
          (0, n.kt)('h4', { id: 'parameters-1' }, 'Parameters'),
          (0, n.kt)(
            'table',
            null,
            (0, n.kt)(
              'thead',
              { parentName: 'table' },
              (0, n.kt)(
                'tr',
                { parentName: 'thead' },
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, n.kt)(
              'tbody',
              { parentName: 'table' },
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'keyPair'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'SerializedKeyPair'),
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns-1' }, 'Returns'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Ed25519VerificationKey2020'),
            '>',
          ),
          (0, n.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/cryptography/suite.ts#L22',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/suite.ts:22',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'generateed25519keypair' }, 'generateEd25519KeyPair'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'generateEd25519KeyPair'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'options?'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Ed25519VerificationKey2020'),
            '>',
          ),
          (0, n.kt)('p', null, 'Generates a KeyPair with an optional deterministic seed.'),
          (0, n.kt)('h4', { id: 'parameters-2' }, 'Parameters'),
          (0, n.kt)(
            'table',
            null,
            (0, n.kt)(
              'thead',
              { parentName: 'table' },
              (0, n.kt)(
                'tr',
                { parentName: 'thead' },
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Description'),
              ),
            ),
            (0, n.kt)(
              'tbody',
              { parentName: 'table' },
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'options?'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'GenerateKeyPairOptions'),
                ),
                (0, n.kt)('td', { parentName: 'tr', align: 'left' }, 'Options hashmap.'),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns-2' }, 'Returns'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Ed25519VerificationKey2020'),
            '>',
          ),
          (0, n.kt)('p', null, 'Resolves with generated\npublic/private key pair.'),
          (0, n.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            'node_modules/@digitalcredentials/ed25519-verification-key-2020/dist/Ed25519VerificationKey2020.d.ts:91',
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'generatex25519keypair' }, 'generateX25519KeyPair'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'generateX25519KeyPair'),
            '(): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Ed25519VerificationKey2020'),
            '>',
          ),
          (0, n.kt)('h4', { id: 'returns-3' }, 'Returns'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Ed25519VerificationKey2020'),
            '>',
          ),
          (0, n.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/cryptography/suite.ts#L27',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/suite.ts:27',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'geted25519signaturesuite' }, 'getEd25519SignatureSuite'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'getEd25519SignatureSuite'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'param'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/Ed25519Signature2020' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'Ed25519Signature2020'),
            ),
            '>',
          ),
          (0, n.kt)('h4', { id: 'parameters-3' }, 'Parameters'),
          (0, n.kt)(
            'table',
            null,
            (0, n.kt)(
              'thead',
              { parentName: 'table' },
              (0, n.kt)(
                'tr',
                { parentName: 'thead' },
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, n.kt)(
              'tbody',
              { parentName: 'table' },
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'param'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'GetSuiteParam'),
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns-4' }, 'Returns'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/Ed25519Signature2020' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'Ed25519Signature2020'),
            ),
            '>',
          ),
          (0, n.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/cryptography/suite.ts#L32',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/suite.ts:32',
            ),
          ),
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
