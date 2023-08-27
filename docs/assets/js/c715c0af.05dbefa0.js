'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [8995],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => s, kt: () => f });
      var a = i(2784);
      function r(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = i),
          e
        );
      }
      function n(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, a);
        }
        return i;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? n(Object(i), !0).forEach(function (t) {
                r(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : n(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      function o(e, t) {
        if (null == e) return {};
        var i,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var i,
              a,
              r = {},
              n = Object.keys(e);
            for (a = 0; a < n.length; a++) (i = n[a]), t.indexOf(i) >= 0 || (r[i] = e[i]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (a = 0; a < n.length; a++)
            (i = n[a]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]));
        }
        return r;
      }
      var p = a.createContext({}),
        l = function (e) {
          var t = a.useContext(p),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : d(d({}, t), e)), i;
        },
        s = function (e) {
          var t = l(e.components);
          return a.createElement(p.Provider, { value: t }, e.children);
        },
        c = 'mdxType',
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        k = a.forwardRef(function (e, t) {
          var i = e.components,
            r = e.mdxType,
            n = e.originalType,
            p = e.parentName,
            s = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            c = l(i),
            k = r,
            f = c[''.concat(p, '.').concat(k)] || c[k] || m[k] || n;
          return i
            ? a.createElement(f, d(d({ ref: t }, s), {}, { components: i }))
            : a.createElement(f, d({ ref: t }, s));
        });
      function f(e, t) {
        var i = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var n = i.length,
            d = new Array(n);
          d[0] = k;
          var o = {};
          for (var p in t) hasOwnProperty.call(t, p) && (o[p] = t[p]);
          (o.originalType = e), (o[c] = 'string' == typeof e ? e : r), (d[1] = o);
          for (var l = 2; l < n; l++) d[l] = i[l];
          return a.createElement.apply(null, d);
        }
        return a.createElement.apply(null, i);
      }
      k.displayName = 'MDXCreateElement';
    },
    2628: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => p,
          contentTitle: () => d,
          default: () => m,
          frontMatter: () => n,
          metadata: () => o,
          toc: () => l,
        });
      var a = i(7896),
        r = (i(2784), i(876));
      const n = {
          id: 'did.cryptography.method',
          title: 'Namespace: method',
          sidebar_label: 'did.cryptography.method',
          custom_edit_url: null,
        },
        d = void 0,
        o = {
          unversionedId: 'lisk-did/namespaces/did.cryptography.method',
          id: 'lisk-did/namespaces/did.cryptography.method',
          title: 'Namespace: method',
          description: 'did.cryptography.method',
          source: '@site/docs/lisk-did/namespaces/did.cryptography.method.md',
          sourceDirName: 'lisk-did/namespaces',
          slug: '/lisk-did/namespaces/did.cryptography.method',
          permalink: '/docs/lisk-did/namespaces/did.cryptography.method',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.cryptography.method',
            title: 'Namespace: method',
            sidebar_label: 'did.cryptography.method',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.cryptography', permalink: '/docs/lisk-did/namespaces/did.cryptography' },
          next: {
            title: 'did.cryptography.operation',
            permalink: '/docs/lisk-did/namespaces/did.cryptography.operation',
          },
        },
        p = {},
        l = [
          { value: 'Functions', id: 'functions', level: 2 },
          { value: 'getVerificationMethod', id: 'getverificationmethod', level: 3 },
          { value: 'Parameters', id: 'parameters', level: 4 },
          { value: 'Returns', id: 'returns', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'getVerificationRelationship', id: 'getverificationrelationship', level: 3 },
          { value: 'Parameters', id: 'parameters-1', level: 4 },
          { value: 'Returns', id: 'returns-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
        ],
        s = { toc: l },
        c = 'wrapper';
      function m(e) {
        let { components: t, ...i } = e;
        return (0, r.kt)(
          c,
          (0, a.Z)({}, s, i, { components: t, mdxType: 'MDXLayout' }),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.',
            (0, r.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did.cryptography' }, 'cryptography'),
            '.method',
          ),
          (0, r.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, r.kt)('h3', { id: 'getverificationmethod' }, 'getVerificationMethod'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'getVerificationMethod'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'didDocument'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'options'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.VerificationMethod' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'VerificationMethod'),
            ),
            '[]',
            '>',
          ),
          (0, r.kt)('h4', { id: 'parameters' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'didDocument'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/interfaces/did.DidDocument' },
                    (0, r.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
                  ),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'options'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/interfaces/did.AuthorizationFactors' },
                    (0, r.kt)('inlineCode', { parentName: 'a' }, 'AuthorizationFactors'),
                  ),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.VerificationMethod' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'VerificationMethod'),
            ),
            '[]',
            '>',
          ),
          (0, r.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/cryptography/verification.d.ts:3'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'getverificationrelationship' }, 'getVerificationRelationship'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'getVerificationRelationship'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'didDocument'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'options'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/namespaces/did#verificationrelationship' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'VerificationRelationship'),
            ),
            '[]',
            '>',
          ),
          (0, r.kt)('h4', { id: 'parameters-1' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'didDocument'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/interfaces/did.DidDocument' },
                    (0, r.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
                  ),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'options'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/interfaces/did.AuthorizationFactors' },
                    (0, r.kt)('inlineCode', { parentName: 'a' }, 'AuthorizationFactors'),
                  ),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-1' }, 'Returns'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/namespaces/did#verificationrelationship' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'VerificationRelationship'),
            ),
            '[]',
            '>',
          ),
          (0, r.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/cryptography/verification.d.ts:4'),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
