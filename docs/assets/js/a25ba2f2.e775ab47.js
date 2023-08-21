'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [3049],
  {
    876: (e, t, a) => {
      a.d(t, { Zo: () => o, kt: () => c });
      var i = a(2784);
      function n(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = a),
          e
        );
      }
      function r(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, i);
        }
        return a;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(a), !0).forEach(function (t) {
                n(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : r(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      function d(e, t) {
        if (null == e) return {};
        var a,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              n = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++) (a = r[i]), t.indexOf(a) >= 0 || (n[a] = e[a]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (a = r[i]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]));
        }
        return n;
      }
      var s = i.createContext({}),
        p = function (e) {
          var t = i.useContext(s),
            a = t;
          return e && (a = 'function' == typeof e ? e(t) : l(l({}, t), e)), a;
        },
        o = function (e) {
          var t = p(e.components);
          return i.createElement(s.Provider, { value: t }, e.children);
        },
        k = 'mdxType',
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return i.createElement(i.Fragment, {}, t);
          },
        },
        f = i.forwardRef(function (e, t) {
          var a = e.components,
            n = e.mdxType,
            r = e.originalType,
            s = e.parentName,
            o = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            k = p(a),
            f = n,
            c = k[''.concat(s, '.').concat(f)] || k[f] || m[f] || r;
          return a
            ? i.createElement(c, l(l({ ref: t }, o), {}, { components: a }))
            : i.createElement(c, l({ ref: t }, o));
        });
      function c(e, t) {
        var a = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var r = a.length,
            l = new Array(r);
          l[0] = f;
          var d = {};
          for (var s in t) hasOwnProperty.call(t, s) && (d[s] = t[s]);
          (d.originalType = e), (d[k] = 'string' == typeof e ? e : n), (l[1] = d);
          for (var p = 2; p < r; p++) l[p] = a[p];
          return i.createElement.apply(null, l);
        }
        return i.createElement.apply(null, a);
      }
      f.displayName = 'MDXCreateElement';
    },
    1790: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => s,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => r,
          metadata: () => d,
          toc: () => p,
        });
      var i = a(7896),
        n = (a(2784), a(876));
      const r = {
          id: 'modules',
          title: '@lisk-did/lisk-verifiable-credentials',
          sidebar_label: 'Exports',
          sidebar_position: 0.5,
          custom_edit_url: null,
        },
        l = void 0,
        d = {
          unversionedId: 'lisk-verifiable-credentials/modules',
          id: 'lisk-verifiable-credentials/modules',
          title: '@lisk-did/lisk-verifiable-credentials',
          description: 'Namespaces',
          source: '@site/docs/lisk-verifiable-credentials/modules.md',
          sourceDirName: 'lisk-verifiable-credentials',
          slug: '/lisk-verifiable-credentials/modules',
          permalink: '/docs/lisk-verifiable-credentials/modules',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0.5,
          frontMatter: {
            id: 'modules',
            title: '@lisk-did/lisk-verifiable-credentials',
            sidebar_label: 'Exports',
            sidebar_position: 0.5,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'Readme', permalink: '/docs/lisk-verifiable-credentials/' },
          next: { title: 'codec', permalink: '/docs/lisk-verifiable-credentials/namespaces/codec' },
        },
        s = {},
        p = [
          { value: 'Namespaces', id: 'namespaces', level: 2 },
          { value: 'Interfaces', id: 'interfaces', level: 2 },
          { value: 'Type Aliases', id: 'type-aliases', level: 2 },
          { value: 'DocumentLoader', id: 'documentloader', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'VerifiableCredential', id: 'verifiablecredential', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'VerifiablePresentation', id: 'verifiablepresentation', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'Functions', id: 'functions', level: 2 },
          { value: 'issueCredential', id: 'issuecredential', level: 3 },
          { value: 'Parameters', id: 'parameters', level: 4 },
          { value: 'Returns', id: 'returns', level: 4 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'issuePresentation', id: 'issuepresentation', level: 3 },
          { value: 'Parameters', id: 'parameters-1', level: 4 },
          { value: 'Returns', id: 'returns-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
          { value: 'verifyCredential', id: 'verifycredential', level: 3 },
          { value: 'Parameters', id: 'parameters-2', level: 4 },
          { value: 'Returns', id: 'returns-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-5', level: 4 },
          { value: 'verifyPresentation', id: 'verifypresentation', level: 3 },
          { value: 'Parameters', id: 'parameters-3', level: 4 },
          { value: 'Returns', id: 'returns-3', level: 4 },
          { value: 'Defined in', id: 'defined-in-6', level: 4 },
        ],
        o = { toc: p },
        k = 'wrapper';
      function m(e) {
        let { components: t, ...a } = e;
        return (0, n.kt)(
          k,
          (0, i.Z)({}, o, a, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)('h2', { id: 'namespaces' }, 'Namespaces'),
          (0, n.kt)(
            'ul',
            null,
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)('a', { parentName: 'li', href: '/docs/lisk-verifiable-credentials/namespaces/codec' }, 'codec'),
            ),
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-verifiable-credentials/namespaces/documentLoader' },
                'documentLoader',
              ),
            ),
          ),
          (0, n.kt)('h2', { id: 'interfaces' }, 'Interfaces'),
          (0, n.kt)(
            'ul',
            null,
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)('a', { parentName: 'li', href: '/docs/lisk-verifiable-credentials/interfaces/Proof' }, 'Proof'),
            ),
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-verifiable-credentials/interfaces/VCVerificationResult' },
                'VCVerificationResult',
              ),
            ),
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-verifiable-credentials/interfaces/VPVerificationResult' },
                'VPVerificationResult',
              ),
            ),
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-verifiable-credentials/interfaces/VerificationKey' },
                'VerificationKey',
              ),
            ),
          ),
          (0, n.kt)('h2', { id: 'type-aliases' }, 'Type Aliases'),
          (0, n.kt)('h3', { id: 'documentloader' }, 'DocumentLoader'),
          (0, n.kt)(
            'p',
            null,
            '\u01ac ',
            (0, n.kt)('strong', { parentName: 'p' }, 'DocumentLoader'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'IDocumentLoader'),
          ),
          (0, n.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-verifiable-credentials/src/types.ts#L13',
              },
              'lisk-verifiable-credentials/src/types.ts:13',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'verifiablecredential' }, 'VerifiableCredential'),
          (0, n.kt)(
            'p',
            null,
            '\u01ac ',
            (0, n.kt)('strong', { parentName: 'p' }, 'VerifiableCredential'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Partial'),
            '<',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'VCDIVerifiableCredential'),
            '>',
            ' & { ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, '@context'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'VCDIVerifiableCredential'),
            '[',
            (0, n.kt)('inlineCode', { parentName: 'p' }, '"@context"'),
            ']',
            ' ; ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'credentialSubject'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'VCDIVerifiableCredential'),
            '[',
            (0, n.kt)('inlineCode', { parentName: 'p' }, '"credentialSubject"'),
            ']',
            ' ; ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'type'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'VCDIVerifiableCredential'),
            '[',
            (0, n.kt)('inlineCode', { parentName: 'p' }, '"type"'),
            ']',
            '  }',
          ),
          (0, n.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-verifiable-credentials/src/types.ts#L20',
              },
              'lisk-verifiable-credentials/src/types.ts:20',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'verifiablepresentation' }, 'VerifiablePresentation'),
          (0, n.kt)(
            'p',
            null,
            '\u01ac ',
            (0, n.kt)('strong', { parentName: 'p' }, 'VerifiablePresentation'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'TVerifiablePresentation'),
            ' & { ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'verifiableCredential?'),
            ': ',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-verifiable-credentials/modules#verifiablecredential' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerifiableCredential'),
            ),
            ' ',
            '|',
            ' ',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-verifiable-credentials/modules#verifiablecredential' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerifiableCredential'),
            ),
            '[]  }',
          ),
          (0, n.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-verifiable-credentials/src/types.ts#L26',
              },
              'lisk-verifiable-credentials/src/types.ts:26',
            ),
          ),
          (0, n.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, n.kt)('h3', { id: 'issuecredential' }, 'issueCredential'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'issueCredential'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'credential'),
            ', ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'privateKey'),
            ', ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'options'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-verifiable-credentials/modules#verifiablecredential' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerifiableCredential'),
            ),
            '>',
          ),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'credential'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-verifiable-credentials/modules#verifiablecredential' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerifiableCredential'),
                  ),
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'privateKey'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'ClientOptions'),
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-verifiable-credentials/modules#verifiablecredential' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerifiableCredential'),
            ),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-verifiable-credentials/src/credentials/credentials.ts#L8',
              },
              'lisk-verifiable-credentials/src/credentials/credentials.ts:8',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'issuepresentation' }, 'issuePresentation'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'issuePresentation'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'verifiableCredentialsList'),
            ', ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'holderDid'),
            ', ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'privateKey'),
            ', ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'challenge'),
            ', ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'options'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-verifiable-credentials/modules#verifiablepresentation' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerifiablePresentation'),
            ),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'verifiableCredentialsList'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-verifiable-credentials/modules#verifiablecredential' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerifiableCredential'),
                  ),
                  '[]',
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'holderDid'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'privateKey'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'challenge'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'ClientOptions'),
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
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-verifiable-credentials/modules#verifiablepresentation' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerifiablePresentation'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-verifiable-credentials/src/credentials/presentation.ts#L8',
              },
              'lisk-verifiable-credentials/src/credentials/presentation.ts:8',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'verifycredential' }, 'verifyCredential'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'verifyCredential'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'credential'),
            ', ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'publicKey'),
            ', ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'options'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-verifiable-credentials/interfaces/VCVerificationResult' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VCVerificationResult'),
            ),
            '>',
          ),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'credential'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-verifiable-credentials/modules#verifiablecredential' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerifiableCredential'),
                  ),
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'publicKey'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'ClientOptions'),
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns-2' }, 'Returns'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-verifiable-credentials/interfaces/VCVerificationResult' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VCVerificationResult'),
            ),
            '>',
          ),
          (0, n.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-verifiable-credentials/src/credentials/credentials.ts#L47',
              },
              'lisk-verifiable-credentials/src/credentials/credentials.ts:47',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'verifypresentation' }, 'verifyPresentation'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'verifyPresentation'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'presentation'),
            ', ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'publicKey'),
            ', ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'options'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-verifiable-credentials/interfaces/VPVerificationResult' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VPVerificationResult'),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'presentation'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-verifiable-credentials/modules#verifiablepresentation' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerifiablePresentation'),
                  ),
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'publicKey'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'ClientOptions'),
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns-3' }, 'Returns'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-verifiable-credentials/interfaces/VPVerificationResult' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VPVerificationResult'),
            ),
            '>',
          ),
          (0, n.kt)('h4', { id: 'defined-in-6' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-verifiable-credentials/src/credentials/presentation.ts#L52',
              },
              'lisk-verifiable-credentials/src/credentials/presentation.ts:52',
            ),
          ),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
