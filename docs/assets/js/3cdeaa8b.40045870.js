'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [4753],
  {
    876: (e, t, a) => {
      a.d(t, { Zo: () => s, kt: () => u });
      var r = a(2784);
      function n(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = a),
          e
        );
      }
      function i(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(a), !0).forEach(function (t) {
                n(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : i(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var a,
          r,
          n = (function (e, t) {
            if (null == e) return {};
            var a,
              r,
              n = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (a = i[r]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]));
        }
        return n;
      }
      var p = r.createContext({}),
        o = function (e) {
          var t = r.useContext(p),
            a = t;
          return e && (a = 'function' == typeof e ? e(t) : d(d({}, t), e)), a;
        },
        s = function (e) {
          var t = o(e.components);
          return r.createElement(p.Provider, { value: t }, e.children);
        },
        k = 'mdxType',
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        c = r.forwardRef(function (e, t) {
          var a = e.components,
            n = e.mdxType,
            i = e.originalType,
            p = e.parentName,
            s = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            k = o(a),
            c = n,
            u = k[''.concat(p, '.').concat(c)] || k[c] || m[c] || i;
          return a
            ? r.createElement(u, d(d({ ref: t }, s), {}, { components: a }))
            : r.createElement(u, d({ ref: t }, s));
        });
      function u(e, t) {
        var a = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var i = a.length,
            d = new Array(i);
          d[0] = c;
          var l = {};
          for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
          (l.originalType = e), (l[k] = 'string' == typeof e ? e : n), (d[1] = l);
          for (var o = 2; o < i; o++) d[o] = a[o];
          return r.createElement.apply(null, d);
        }
        return r.createElement.apply(null, a);
      }
      c.displayName = 'MDXCreateElement';
    },
    6539: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => p,
          contentTitle: () => d,
          default: () => m,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => o,
        });
      var r = a(7896),
        n = (a(2784), a(876));
      const i = {
          id: 'did.cryptography.key',
          title: 'Namespace: key',
          sidebar_label: 'did.cryptography.key',
          custom_edit_url: null,
        },
        d = void 0,
        l = {
          unversionedId: 'lisk-did/namespaces/did.cryptography.key',
          id: 'lisk-did/namespaces/did.cryptography.key',
          title: 'Namespace: key',
          description: 'did.cryptography.key',
          source: '@site/docs/lisk-did/namespaces/did.cryptography.key.md',
          sourceDirName: 'lisk-did/namespaces',
          slug: '/lisk-did/namespaces/did.cryptography.key',
          permalink: '/docs/lisk-did/namespaces/did.cryptography.key',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.cryptography.key',
            title: 'Namespace: key',
            sidebar_label: 'did.cryptography.key',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'did.cryptography.convert',
            permalink: '/docs/lisk-did/namespaces/did.cryptography.convert',
          },
          next: { title: 'did.cryptography', permalink: '/docs/lisk-did/namespaces/did.cryptography' },
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
      function m(e) {
        let { components: t, ...a } = e;
        return (0, n.kt)(
          k,
          (0, r.Z)({}, s, a, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.',
            (0, n.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did.cryptography' }, 'cryptography'),
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
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/cryptography/suite.d.ts:14'),
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
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/cryptography/suite.d.ts:16'),
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
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.Ed25519Signature2020' },
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
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.Ed25519Signature2020' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'Ed25519Signature2020'),
            ),
            '>',
          ),
          (0, n.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, n.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/cryptography/suite.d.ts:17'),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
