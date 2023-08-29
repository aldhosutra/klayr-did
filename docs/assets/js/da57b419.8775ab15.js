'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [7792],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => c, kt: () => k });
      var i = r(2784);
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
          e
        );
      }
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function d(e, t) {
        if (null == e) return {};
        var r,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              i,
              n = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++) (r = a[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (r = a[i]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
        }
        return n;
      }
      var l = i.createContext({}),
        p = function (e) {
          var t = i.useContext(l),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : o(o({}, t), e)), r;
        },
        c = function (e) {
          var t = p(e.components);
          return i.createElement(l.Provider, { value: t }, e.children);
        },
        s = 'mdxType',
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return i.createElement(i.Fragment, {}, t);
          },
        },
        f = i.forwardRef(function (e, t) {
          var r = e.components,
            n = e.mdxType,
            a = e.originalType,
            l = e.parentName,
            c = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = p(r),
            f = n,
            k = s[''.concat(l, '.').concat(f)] || s[f] || m[f] || a;
          return r
            ? i.createElement(k, o(o({ ref: t }, c), {}, { components: r }))
            : i.createElement(k, o({ ref: t }, c));
        });
      function k(e, t) {
        var r = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var a = r.length,
            o = new Array(a);
          o[0] = f;
          var d = {};
          for (var l in t) hasOwnProperty.call(t, l) && (d[l] = t[l]);
          (d.originalType = e), (d[s] = 'string' == typeof e ? e : n), (o[1] = d);
          for (var p = 2; p < a; p++) o[p] = r[p];
          return i.createElement.apply(null, o);
        }
        return i.createElement.apply(null, r);
      }
      f.displayName = 'MDXCreateElement';
    },
    2610: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => l,
          contentTitle: () => o,
          default: () => m,
          frontMatter: () => a,
          metadata: () => d,
          toc: () => p,
        });
      var i = r(7896),
        n = (r(2784), r(876));
      const a = {
          id: 'cryptography.method',
          title: 'Namespace: method',
          sidebar_label: 'cryptography.method',
          custom_edit_url: null,
        },
        o = void 0,
        d = {
          unversionedId: 'lisk-decentralized-identifier/namespaces/cryptography.method',
          id: 'lisk-decentralized-identifier/namespaces/cryptography.method',
          title: 'Namespace: method',
          description: 'cryptography.method',
          source: '@site/docs/lisk-decentralized-identifier/namespaces/cryptography.method.md',
          sourceDirName: 'lisk-decentralized-identifier/namespaces',
          slug: '/lisk-decentralized-identifier/namespaces/cryptography.method',
          permalink: '/docs/lisk-decentralized-identifier/namespaces/cryptography.method',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'cryptography.method',
            title: 'Namespace: method',
            sidebar_label: 'cryptography.method',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'cryptography.key',
            permalink: '/docs/lisk-decentralized-identifier/namespaces/cryptography.key',
          },
          next: {
            title: 'cryptography.operation',
            permalink: '/docs/lisk-decentralized-identifier/namespaces/cryptography.operation',
          },
        },
        l = {},
        p = [
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
        c = { toc: p },
        s = 'wrapper';
      function m(e) {
        let { components: t, ...r } = e;
        return (0, n.kt)(
          s,
          (0, i.Z)({}, c, r, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/namespaces/cryptography' },
              'cryptography',
            ),
            '.method',
          ),
          (0, n.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, n.kt)('h3', { id: 'getverificationmethod' }, 'getVerificationMethod'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'getVerificationMethod'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'didDocument'),
            ', ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'options'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/VerificationMethod' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerificationMethod'),
            ),
            '[]',
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'didDocument'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/interfaces/DidDocument' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
                  ),
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
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/interfaces/AuthorizationFactors' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'AuthorizationFactors'),
                  ),
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
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/VerificationMethod' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerificationMethod'),
            ),
            '[]',
            '>',
          ),
          (0, n.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/cryptography/verification.ts#L20',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/verification.ts:20',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'getverificationrelationship' }, 'getVerificationRelationship'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'getVerificationRelationship'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'didDocument'),
            ', ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'options'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/modules#verificationrelationship' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerificationRelationship'),
            ),
            '[]',
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'didDocument'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/interfaces/DidDocument' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
                  ),
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
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/interfaces/AuthorizationFactors' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'AuthorizationFactors'),
                  ),
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
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/modules#verificationrelationship' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerificationRelationship'),
            ),
            '[]',
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/cryptography/verification.ts#L120',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/verification.ts:120',
            ),
          ),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
