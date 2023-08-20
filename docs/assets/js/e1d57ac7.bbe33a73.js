'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [7717],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => c, kt: () => y });
      var n = r(2784);
      function a(e, t, r) {
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
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                a(e, t, r[t]);
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
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
        }
        return a;
      }
      var p = n.createContext({}),
        o = function (e) {
          var t = n.useContext(p),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : l(l({}, t), e)), r;
        },
        c = function (e) {
          var t = o(e.components);
          return n.createElement(p.Provider, { value: t }, e.children);
        },
        s = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        m = n.forwardRef(function (e, t) {
          var r = e.components,
            a = e.mdxType,
            i = e.originalType,
            p = e.parentName,
            c = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = o(r),
            m = a,
            y = s[''.concat(p, '.').concat(m)] || s[m] || u[m] || i;
          return r
            ? n.createElement(y, l(l({ ref: t }, c), {}, { components: r }))
            : n.createElement(y, l({ ref: t }, c));
        });
      function y(e, t) {
        var r = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var i = r.length,
            l = new Array(i);
          l[0] = m;
          var d = {};
          for (var p in t) hasOwnProperty.call(t, p) && (d[p] = t[p]);
          (d.originalType = e), (d[s] = 'string' == typeof e ? e : a), (l[1] = d);
          for (var o = 2; o < i; o++) l[o] = r[o];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, r);
      }
      m.displayName = 'MDXCreateElement';
    },
    8386: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => o,
        });
      var n = r(7896),
        a = (r(2784), r(876));
      const i = {
          id: 'did.cryptography.convert',
          title: 'Namespace: convert',
          sidebar_label: 'did.cryptography.convert',
          custom_edit_url: null,
        },
        l = void 0,
        d = {
          unversionedId: 'lisk-did/namespaces/did.cryptography.convert',
          id: 'lisk-did/namespaces/did.cryptography.convert',
          title: 'Namespace: convert',
          description: 'did.cryptography.convert',
          source: '@site/docs/lisk-did/namespaces/did.cryptography.convert.md',
          sourceDirName: 'lisk-did/namespaces',
          slug: '/lisk-did/namespaces/did.cryptography.convert',
          permalink: '/docs/lisk-did/namespaces/did.cryptography.convert',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.cryptography.convert',
            title: 'Namespace: convert',
            sidebar_label: 'did.cryptography.convert',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.cryptography.codec', permalink: '/docs/lisk-did/namespaces/did.cryptography.codec' },
          next: { title: 'did.cryptography.key', permalink: '/docs/lisk-did/namespaces/did.cryptography.key' },
        },
        p = {},
        o = [
          { value: 'Functions', id: 'functions', level: 2 },
          { value: 'ed25519ToX25519PrivateKeyMultibase', id: 'ed25519tox25519privatekeymultibase', level: 3 },
          { value: 'Parameters', id: 'parameters', level: 4 },
          { value: 'Returns', id: 'returns', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'ed25519ToX25519PublicKeyMultibase', id: 'ed25519tox25519publickeymultibase', level: 3 },
          { value: 'Parameters', id: 'parameters-1', level: 4 },
          { value: 'Returns', id: 'returns-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
        ],
        c = { toc: o },
        s = 'wrapper';
      function u(e) {
        let { components: t, ...r } = e;
        return (0, a.kt)(
          s,
          (0, n.Z)({}, c, r, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.',
            (0, a.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did.cryptography' }, 'cryptography'),
            '.convert',
          ),
          (0, a.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, a.kt)('h3', { id: 'ed25519tox25519privatekeymultibase' }, 'ed25519ToX25519PrivateKeyMultibase'),
          (0, a.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'ed25519ToX25519PrivateKeyMultibase'),
            '(',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'privateKey'),
            '): ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, a.kt)('h4', { id: 'parameters' }, 'Parameters'),
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
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'privateKey'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, a.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, a.kt)('p', null, (0, a.kt)('inlineCode', { parentName: 'p' }, 'string')),
          (0, a.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/cryptography/convert.d.ts:3'),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'ed25519tox25519publickeymultibase' }, 'ed25519ToX25519PublicKeyMultibase'),
          (0, a.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'ed25519ToX25519PublicKeyMultibase'),
            '(',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'publicKey'),
            '): ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, a.kt)('h4', { id: 'parameters-1' }, 'Parameters'),
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
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'publicKey'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, a.kt)('h4', { id: 'returns-1' }, 'Returns'),
          (0, a.kt)('p', null, (0, a.kt)('inlineCode', { parentName: 'p' }, 'string')),
          (0, a.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/cryptography/convert.d.ts:2'),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
