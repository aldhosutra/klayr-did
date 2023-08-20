'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [3912],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => c, kt: () => m });
      var i = n(2784);
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          i,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              r = {},
              d = Object.keys(e);
            for (i = 0; i < d.length; i++) (n = d[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(e);
          for (i = 0; i < d.length; i++)
            (n = d[i]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
        }
        return r;
      }
      var p = i.createContext({}),
        o = function (e) {
          var t = i.useContext(p),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : a(a({}, t), e)), n;
        },
        c = function (e) {
          var t = o(e.components);
          return i.createElement(p.Provider, { value: t }, e.children);
        },
        s = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return i.createElement(i.Fragment, {}, t);
          },
        },
        k = i.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            d = e.originalType,
            p = e.parentName,
            c = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = o(n),
            k = r,
            m = s[''.concat(p, '.').concat(k)] || s[k] || u[k] || d;
          return n
            ? i.createElement(m, a(a({ ref: t }, c), {}, { components: n }))
            : i.createElement(m, a({ ref: t }, c));
        });
      function m(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var d = n.length,
            a = new Array(d);
          a[0] = k;
          var l = {};
          for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
          (l.originalType = e), (l[s] = 'string' == typeof e ? e : r), (a[1] = l);
          for (var o = 2; o < d; o++) a[o] = n[o];
          return i.createElement.apply(null, a);
        }
        return i.createElement.apply(null, n);
      }
      k.displayName = 'MDXCreateElement';
    },
    5742: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => a,
          default: () => u,
          frontMatter: () => d,
          metadata: () => l,
          toc: () => o,
        });
      var i = n(7896),
        r = (n(2784), n(876));
      const d = {
          id: 'did.JWEDocument',
          title: 'Interface: JWEDocument',
          sidebar_label: 'did.JWEDocument',
          custom_edit_url: null,
        },
        a = void 0,
        l = {
          unversionedId: 'lisk-did/interfaces/did.JWEDocument',
          id: 'lisk-did/interfaces/did.JWEDocument',
          title: 'Interface: JWEDocument',
          description: 'did.JWEDocument',
          source: '@site/docs/lisk-did/interfaces/did.JWEDocument.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.JWEDocument',
          permalink: '/docs/lisk-did/interfaces/did.JWEDocument',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.JWEDocument',
            title: 'Interface: JWEDocument',
            sidebar_label: 'did.JWEDocument',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'did.Ed25519Signature2020',
            permalink: '/docs/lisk-did/interfaces/did.Ed25519Signature2020',
          },
          next: { title: 'did.KeysCommand', permalink: '/docs/lisk-did/interfaces/did.KeysCommand' },
        },
        p = {},
        o = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'ciphertext', id: 'ciphertext', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'iv', id: 'iv', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'protected', id: 'protected', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'recipients', id: 'recipients', level: 3 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'tag', id: 'tag', level: 3 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
        ],
        c = { toc: o },
        s = 'wrapper';
      function u(e) {
        let { components: t, ...n } = e;
        return (0, r.kt)(
          s,
          (0, i.Z)({}, c, n, { components: t, mdxType: 'MDXLayout' }),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.JWEDocument',
          ),
          (0, r.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, r.kt)('h3', { id: 'ciphertext' }, 'ciphertext'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'ciphertext'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, r.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:67'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'iv' }, 'iv'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'iv'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, r.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:66'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'protected' }, 'protected'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'protected'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, r.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:51'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'recipients' }, 'recipients'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'recipients'),
            ': { ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'encrypted_key'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ' ; ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'header'),
            ': { ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'alg'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ' ; ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'apu'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ' ; ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'apv'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ' ; ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'epk'),
            ': { ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'crv'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ' ; ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'kty'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ' ; ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'x'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '  } ; ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'kid'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '  }  }[]',
          ),
          (0, r.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:52'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'tag' }, 'tag'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'tag'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, r.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:68'),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
