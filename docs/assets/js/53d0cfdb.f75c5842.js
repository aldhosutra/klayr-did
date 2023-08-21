'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [8899],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => d, kt: () => m });
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
      function p(e, t) {
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
      var o = n.createContext({}),
        c = function (e) {
          var t = n.useContext(o),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : l(l({}, t), e)), r;
        },
        d = function (e) {
          var t = c(e.components);
          return n.createElement(o.Provider, { value: t }, e.children);
        },
        s = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        y = n.forwardRef(function (e, t) {
          var r = e.components,
            a = e.mdxType,
            i = e.originalType,
            o = e.parentName,
            d = p(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = c(r),
            y = a,
            m = s[''.concat(o, '.').concat(y)] || s[y] || u[y] || i;
          return r
            ? n.createElement(m, l(l({ ref: t }, d), {}, { components: r }))
            : n.createElement(m, l({ ref: t }, d));
        });
      function m(e, t) {
        var r = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var i = r.length,
            l = new Array(i);
          l[0] = y;
          var p = {};
          for (var o in t) hasOwnProperty.call(t, o) && (p[o] = t[o]);
          (p.originalType = e), (p[s] = 'string' == typeof e ? e : a), (l[1] = p);
          for (var c = 2; c < i; c++) l[c] = r[c];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, r);
      }
      y.displayName = 'MDXCreateElement';
    },
    7066: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => o,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => i,
          metadata: () => p,
          toc: () => c,
        });
      var n = r(7896),
        a = (r(2784), r(876));
      const i = {
          id: 'cryptography.convert',
          title: 'Namespace: convert',
          sidebar_label: 'cryptography.convert',
          custom_edit_url: null,
        },
        l = void 0,
        p = {
          unversionedId: 'lisk-decentralized-identifier/namespaces/cryptography.convert',
          id: 'lisk-decentralized-identifier/namespaces/cryptography.convert',
          title: 'Namespace: convert',
          description: 'cryptography.convert',
          source: '@site/docs/lisk-decentralized-identifier/namespaces/cryptography.convert.md',
          sourceDirName: 'lisk-decentralized-identifier/namespaces',
          slug: '/lisk-decentralized-identifier/namespaces/cryptography.convert',
          permalink: '/docs/lisk-decentralized-identifier/namespaces/cryptography.convert',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'cryptography.convert',
            title: 'Namespace: convert',
            sidebar_label: 'cryptography.convert',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'cryptography.codec',
            permalink: '/docs/lisk-decentralized-identifier/namespaces/cryptography.codec',
          },
          next: {
            title: 'cryptography.key',
            permalink: '/docs/lisk-decentralized-identifier/namespaces/cryptography.key',
          },
        },
        o = {},
        c = [
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
        d = { toc: c },
        s = 'wrapper';
      function u(e) {
        let { components: t, ...r } = e;
        return (0, a.kt)(
          s,
          (0, n.Z)({}, d, r, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/namespaces/cryptography' },
              'cryptography',
            ),
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
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-decentralized-identifier/src/cryptography/convert.ts#L13',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/convert.ts:13',
            ),
          ),
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
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/6db44d1/packages/lisk-decentralized-identifier/src/cryptography/convert.ts#L5',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/convert.ts:5',
            ),
          ),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
