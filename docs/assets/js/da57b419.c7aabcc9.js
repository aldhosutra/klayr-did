'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [7792],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => c, kt: () => k });
      var r = i(2784);
      function n(e, t, i) {
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
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(i), !0).forEach(function (t) {
                n(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : a(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var i,
          r,
          n = (function (e, t) {
            if (null == e) return {};
            var i,
              r,
              n = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (i = a[r]), t.indexOf(i) >= 0 || (n[i] = e[i]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (i = a[r]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]));
        }
        return n;
      }
      var d = r.createContext({}),
        p = function (e) {
          var t = r.useContext(d),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : o(o({}, t), e)), i;
        },
        c = function (e) {
          var t = p(e.components);
          return r.createElement(d.Provider, { value: t }, e.children);
        },
        s = 'mdxType',
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        f = r.forwardRef(function (e, t) {
          var i = e.components,
            n = e.mdxType,
            a = e.originalType,
            d = e.parentName,
            c = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = p(i),
            f = n,
            k = s[''.concat(d, '.').concat(f)] || s[f] || m[f] || a;
          return i
            ? r.createElement(k, o(o({ ref: t }, c), {}, { components: i }))
            : r.createElement(k, o({ ref: t }, c));
        });
      function k(e, t) {
        var i = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var a = i.length,
            o = new Array(a);
          o[0] = f;
          var l = {};
          for (var d in t) hasOwnProperty.call(t, d) && (l[d] = t[d]);
          (l.originalType = e), (l[s] = 'string' == typeof e ? e : n), (o[1] = l);
          for (var p = 2; p < a; p++) o[p] = i[p];
          return r.createElement.apply(null, o);
        }
        return r.createElement.apply(null, i);
      }
      f.displayName = 'MDXCreateElement';
    },
    2610: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => d,
          contentTitle: () => o,
          default: () => m,
          frontMatter: () => a,
          metadata: () => l,
          toc: () => p,
        });
      var r = i(7896),
        n = (i(2784), i(876));
      const a = {
          id: 'cryptography.method',
          title: 'Namespace: method',
          sidebar_label: 'cryptography.method',
          custom_edit_url: null,
        },
        o = void 0,
        l = {
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
        d = {},
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
        let { components: t, ...i } = e;
        return (0, n.kt)(
          s,
          (0, r.Z)({}, c, i, { components: t, mdxType: 'MDXLayout' }),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'VerificationFilterOptions'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/cryptography/verification.ts#L31',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/verification.ts:31',
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'VerificationFilterOptions'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/cryptography/verification.ts#L131',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/verification.ts:131',
            ),
          ),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
