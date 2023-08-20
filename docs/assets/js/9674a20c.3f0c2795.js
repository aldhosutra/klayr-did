'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [1880],
  {
    876: (e, t, a) => {
      a.d(t, { Zo: () => o, kt: () => f });
      var n = a(2784);
      function i(e, t, a) {
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
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(a), !0).forEach(function (t) {
                i(e, t, a[t]);
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
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              i = {},
              r = Object.keys(e);
            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (i[a] = e[a]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (n = 0; n < r.length; n++)
            (a = r[n]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a]));
        }
        return i;
      }
      var p = n.createContext({}),
        s = function (e) {
          var t = n.useContext(p),
            a = t;
          return e && (a = 'function' == typeof e ? e(t) : l(l({}, t), e)), a;
        },
        o = function (e) {
          var t = s(e.components);
          return n.createElement(p.Provider, { value: t }, e.children);
        },
        k = 'mdxType',
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        c = n.forwardRef(function (e, t) {
          var a = e.components,
            i = e.mdxType,
            r = e.originalType,
            p = e.parentName,
            o = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            k = s(a),
            c = i,
            f = k[''.concat(p, '.').concat(c)] || k[c] || m[c] || r;
          return a
            ? n.createElement(f, l(l({ ref: t }, o), {}, { components: a }))
            : n.createElement(f, l({ ref: t }, o));
        });
      function f(e, t) {
        var a = arguments,
          i = t && t.mdxType;
        if ('string' == typeof e || i) {
          var r = a.length,
            l = new Array(r);
          l[0] = c;
          var d = {};
          for (var p in t) hasOwnProperty.call(t, p) && (d[p] = t[p]);
          (d.originalType = e), (d[k] = 'string' == typeof e ? e : i), (l[1] = d);
          for (var s = 2; s < r; s++) l[s] = a[s];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, a);
      }
      c.displayName = 'MDXCreateElement';
    },
    9177: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => r,
          metadata: () => d,
          toc: () => s,
        });
      var n = a(7896),
        i = (a(2784), a(876));
      const r = { id: 'vc', title: 'Namespace: vc', sidebar_label: 'vc', sidebar_position: 0, custom_edit_url: null },
        l = void 0,
        d = {
          unversionedId: 'lisk-did/namespaces/vc',
          id: 'lisk-did/namespaces/vc',
          title: 'Namespace: vc',
          description: 'Namespaces',
          source: '@site/docs/lisk-did/namespaces/vc.md',
          sourceDirName: 'lisk-did/namespaces',
          slug: '/lisk-did/namespaces/vc',
          permalink: '/docs/lisk-did/namespaces/vc',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'vc',
            title: 'Namespace: vc',
            sidebar_label: 'vc',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did', permalink: '/docs/lisk-did/namespaces/did' },
          next: { title: 'did.client', permalink: '/docs/lisk-did/namespaces/did.client' },
        },
        p = {},
        s = [
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
        o = { toc: s },
        k = 'wrapper';
      function m(e) {
        let { components: t, ...a } = e;
        return (0, i.kt)(
          k,
          (0, n.Z)({}, o, a, { components: t, mdxType: 'MDXLayout' }),
          (0, i.kt)('h2', { id: 'namespaces' }, 'Namespaces'),
          (0, i.kt)(
            'ul',
            null,
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)('a', { parentName: 'li', href: '/docs/lisk-did/namespaces/vc.codec' }, 'codec'),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did/namespaces/vc.documentLoader' },
                'documentLoader',
              ),
            ),
          ),
          (0, i.kt)('h2', { id: 'interfaces' }, 'Interfaces'),
          (0, i.kt)(
            'ul',
            null,
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)('a', { parentName: 'li', href: '/docs/lisk-did/interfaces/vc.Proof' }, 'Proof'),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did/interfaces/vc.VCVerificationResult' },
                'VCVerificationResult',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did/interfaces/vc.VPVerificationResult' },
                'VPVerificationResult',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did/interfaces/vc.VerificationKey' },
                'VerificationKey',
              ),
            ),
          ),
          (0, i.kt)('h2', { id: 'type-aliases' }, 'Type Aliases'),
          (0, i.kt)('h3', { id: 'documentloader' }, 'DocumentLoader'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'DocumentLoader'),
            ': ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/namespaces/did#documentloader' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'DocumentLoader'),
            ),
          ),
          (0, i.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/types.d.ts:4'),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'verifiablecredential' }, 'VerifiableCredential'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'VerifiableCredential'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Partial'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'VCDIVerifiableCredential'),
            '>',
            ' & { ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '@context'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'VCDIVerifiableCredential'),
            '[',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '"@context"'),
            ']',
            ' ; ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'credentialSubject'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'VCDIVerifiableCredential'),
            '[',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '"credentialSubject"'),
            ']',
            ' ; ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'type'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'VCDIVerifiableCredential'),
            '[',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '"type"'),
            ']',
            '  }',
          ),
          (0, i.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/types.d.ts:9'),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'verifiablepresentation' }, 'VerifiablePresentation'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'VerifiablePresentation'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'TVerifiablePresentation'),
            ' & { ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'verifiableCredential?'),
            ': ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/namespaces/vc#verifiablecredential' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'VerifiableCredential'),
            ),
            ' ',
            '|',
            ' ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/namespaces/vc#verifiablecredential' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'VerifiableCredential'),
            ),
            '[]  }',
          ),
          (0, i.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/types.d.ts:14'),
          (0, i.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, i.kt)('h3', { id: 'issuecredential' }, 'issueCredential'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'issueCredential'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'credential'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'privateKey'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'options'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/namespaces/vc#verifiablecredential' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'VerifiableCredential'),
            ),
            '>',
          ),
          (0, i.kt)('h4', { id: 'parameters' }, 'Parameters'),
          (0, i.kt)(
            'table',
            null,
            (0, i.kt)(
              'thead',
              { parentName: 'table' },
              (0, i.kt)(
                'tr',
                { parentName: 'thead' },
                (0, i.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, i.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, i.kt)(
              'tbody',
              { parentName: 'table' },
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'credential'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/namespaces/vc#verifiablecredential' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'VerifiableCredential'),
                  ),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'privateKey'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'options'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'ClientOptions'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/namespaces/vc#verifiablecredential' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'VerifiableCredential'),
            ),
            '>',
          ),
          (0, i.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/credentials/credentials.d.ts:4'),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'issuepresentation' }, 'issuePresentation'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'issuePresentation'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'verifiableCredentialsList'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'holderDid'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'privateKey'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'challenge'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'options'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/namespaces/vc#verifiablepresentation' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'VerifiablePresentation'),
            ),
            '>',
          ),
          (0, i.kt)('h4', { id: 'parameters-1' }, 'Parameters'),
          (0, i.kt)(
            'table',
            null,
            (0, i.kt)(
              'thead',
              { parentName: 'table' },
              (0, i.kt)(
                'tr',
                { parentName: 'thead' },
                (0, i.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, i.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, i.kt)(
              'tbody',
              { parentName: 'table' },
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'verifiableCredentialsList'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/namespaces/vc#verifiablecredential' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'VerifiableCredential'),
                  ),
                  '[]',
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'holderDid'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'privateKey'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'challenge'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'options'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'ClientOptions'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns-1' }, 'Returns'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/namespaces/vc#verifiablepresentation' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'VerifiablePresentation'),
            ),
            '>',
          ),
          (0, i.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/credentials/presentation.d.ts:4'),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'verifycredential' }, 'verifyCredential'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'verifyCredential'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'credential'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'publicKey'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'options'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/vc.VCVerificationResult' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'VCVerificationResult'),
            ),
            '>',
          ),
          (0, i.kt)('h4', { id: 'parameters-2' }, 'Parameters'),
          (0, i.kt)(
            'table',
            null,
            (0, i.kt)(
              'thead',
              { parentName: 'table' },
              (0, i.kt)(
                'tr',
                { parentName: 'thead' },
                (0, i.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, i.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, i.kt)(
              'tbody',
              { parentName: 'table' },
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'credential'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/namespaces/vc#verifiablecredential' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'VerifiableCredential'),
                  ),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'publicKey'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'options'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'ClientOptions'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns-2' }, 'Returns'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/vc.VCVerificationResult' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'VCVerificationResult'),
            ),
            '>',
          ),
          (0, i.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/credentials/credentials.d.ts:5'),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'verifypresentation' }, 'verifyPresentation'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'verifyPresentation'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'presentation'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'publicKey'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'options'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/vc.VPVerificationResult' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'VPVerificationResult'),
            ),
            '>',
          ),
          (0, i.kt)('h4', { id: 'parameters-3' }, 'Parameters'),
          (0, i.kt)(
            'table',
            null,
            (0, i.kt)(
              'thead',
              { parentName: 'table' },
              (0, i.kt)(
                'tr',
                { parentName: 'thead' },
                (0, i.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, i.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, i.kt)(
              'tbody',
              { parentName: 'table' },
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'presentation'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/namespaces/vc#verifiablepresentation' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'VerifiablePresentation'),
                  ),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'publicKey'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'options'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'ClientOptions'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns-3' }, 'Returns'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/vc.VPVerificationResult' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'VPVerificationResult'),
            ),
            '>',
          ),
          (0, i.kt)('h4', { id: 'defined-in-6' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/credentials/presentation.d.ts:5'),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
