'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [9067],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => c, kt: () => f });
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
      function l(e) {
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
      function d(e, t) {
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
        o = function (e) {
          var t = n.useContext(p),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : l(l({}, t), e)), i;
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
        k = n.forwardRef(function (e, t) {
          var i = e.components,
            r = e.mdxType,
            a = e.originalType,
            p = e.parentName,
            c = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = o(i),
            k = r,
            f = s[''.concat(p, '.').concat(k)] || s[k] || u[k] || a;
          return i
            ? n.createElement(f, l(l({ ref: t }, c), {}, { components: i }))
            : n.createElement(f, l({ ref: t }, c));
        });
      function f(e, t) {
        var i = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var a = i.length,
            l = new Array(a);
          l[0] = k;
          var d = {};
          for (var p in t) hasOwnProperty.call(t, p) && (d[p] = t[p]);
          (d.originalType = e), (d[s] = 'string' == typeof e ? e : r), (l[1] = d);
          for (var o = 2; o < a; o++) l[o] = i[o];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, i);
      }
      k.displayName = 'MDXCreateElement';
    },
    5638: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => a,
          metadata: () => d,
          toc: () => o,
        });
      var n = i(7896),
        r = (i(2784), i(876));
      const a = {
          id: 'JWEDocument',
          title: 'Interface: JWEDocument',
          sidebar_label: 'JWEDocument',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        l = void 0,
        d = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/JWEDocument',
          id: 'lisk-decentralized-identifier/interfaces/JWEDocument',
          title: 'Interface: JWEDocument',
          description: 'Properties',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/JWEDocument.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/JWEDocument',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/JWEDocument',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'JWEDocument',
            title: 'Interface: JWEDocument',
            sidebar_label: 'JWEDocument',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'Ed25519Signature2020',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/Ed25519Signature2020',
          },
          next: { title: 'KeysCommand', permalink: '/docs/lisk-decentralized-identifier/interfaces/KeysCommand' },
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
        let { components: t, ...i } = e;
        return (0, r.kt)(
          s,
          (0, n.Z)({}, c, i, { components: t, mdxType: 'MDXLayout' }),
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
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L66',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:66',
            ),
          ),
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
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L65',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:65',
            ),
          ),
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
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L50',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:50',
            ),
          ),
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
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L51',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:51',
            ),
          ),
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
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L67',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:67',
            ),
          ),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
