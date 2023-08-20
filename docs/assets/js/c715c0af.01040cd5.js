'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [8995],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => c, kt: () => k });
      var n = i(2784);
      function r(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = i),
          e
        );
      }
      function a(e, t) {
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
            ? a(Object(i), !0).forEach(function (t) {
                r(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : a(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      function o(e, t) {
        if (null == e) return {};
        var i,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var i,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++) (i = a[n]), t.indexOf(i) >= 0 || (r[i] = e[i]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (i = a[n]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]));
        }
        return r;
      }
      var p = n.createContext({}),
        l = function (e) {
          var t = n.useContext(p),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : d(d({}, t), e)), i;
        },
        c = function (e) {
          var t = l(e.components);
          return n.createElement(p.Provider, { value: t }, e.children);
        },
        s = 'mdxType',
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        f = n.forwardRef(function (e, t) {
          var i = e.components,
            r = e.mdxType,
            a = e.originalType,
            p = e.parentName,
            c = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = l(i),
            f = r,
            k = s[''.concat(p, '.').concat(f)] || s[f] || m[f] || a;
          return i
            ? n.createElement(k, d(d({ ref: t }, c), {}, { components: i }))
            : n.createElement(k, d({ ref: t }, c));
        });
      function k(e, t) {
        var i = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var a = i.length,
            d = new Array(a);
          d[0] = f;
          var o = {};
          for (var p in t) hasOwnProperty.call(t, p) && (o[p] = t[p]);
          (o.originalType = e), (o[s] = 'string' == typeof e ? e : r), (d[1] = o);
          for (var l = 2; l < a; l++) d[l] = i[l];
          return n.createElement.apply(null, d);
        }
        return n.createElement.apply(null, i);
      }
      f.displayName = 'MDXCreateElement';
    },
    2628: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => p,
          contentTitle: () => d,
          default: () => m,
          frontMatter: () => a,
          metadata: () => o,
          toc: () => l,
        });
      var n = i(7896),
        r = (i(2784), i(876));
      const a = {
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
        c = { toc: l },
        s = 'wrapper';
      function m(e) {
        let { components: t, ...i } = e;
        return (0, r.kt)(
          s,
          (0, n.Z)({}, c, i, { components: t, mdxType: 'MDXLayout' }),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'VerificationFilterOptions'),
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
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/cryptography/verification.d.ts:14'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'VerificationFilterOptions'),
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
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/cryptography/verification.d.ts:15'),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
