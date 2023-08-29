'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [9695],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => s, kt: () => f });
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
      function l(e) {
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
      function d(e, t) {
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
      var p = r.createContext({}),
        o = function (e) {
          var t = r.useContext(p),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : l(l({}, t), e)), i;
        },
        s = function (e) {
          var t = o(e.components);
          return r.createElement(p.Provider, { value: t }, e.children);
        },
        c = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        k = r.forwardRef(function (e, t) {
          var i = e.components,
            n = e.mdxType,
            a = e.originalType,
            p = e.parentName,
            s = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            c = o(i),
            k = n,
            f = c[''.concat(p, '.').concat(k)] || c[k] || u[k] || a;
          return i
            ? r.createElement(f, l(l({ ref: t }, s), {}, { components: i }))
            : r.createElement(f, l({ ref: t }, s));
        });
      function f(e, t) {
        var i = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var a = i.length,
            l = new Array(a);
          l[0] = k;
          var d = {};
          for (var p in t) hasOwnProperty.call(t, p) && (d[p] = t[p]);
          (d.originalType = e), (d[c] = 'string' == typeof e ? e : n), (l[1] = d);
          for (var o = 2; o < a; o++) l[o] = i[o];
          return r.createElement.apply(null, l);
        }
        return r.createElement.apply(null, i);
      }
      k.displayName = 'MDXCreateElement';
    },
    6625: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => a,
          metadata: () => d,
          toc: () => o,
        });
      var r = i(7896),
        n = (i(2784), i(876));
      const a = {
          id: 'AuthorizationFactors',
          title: 'Interface: AuthorizationFactors',
          sidebar_label: 'AuthorizationFactors',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        l = void 0,
        d = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/AuthorizationFactors',
          id: 'lisk-decentralized-identifier/interfaces/AuthorizationFactors',
          title: 'Interface: AuthorizationFactors',
          description: 'Properties',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/AuthorizationFactors.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/AuthorizationFactors',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/AuthorizationFactors',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'AuthorizationFactors',
            title: 'Interface: AuthorizationFactors',
            sidebar_label: 'AuthorizationFactors',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'AddServiceEndpointParam',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/AddServiceEndpointParam',
          },
          next: { title: 'BaseResolver', permalink: '/docs/lisk-decentralized-identifier/interfaces/BaseResolver' },
        },
        p = {},
        o = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'challenge', id: 'challenge', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'controller', id: 'controller', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'privateKey', id: 'privatekey', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'privateKeyMultibase', id: 'privatekeymultibase', level: 3 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'publicKey', id: 'publickey', level: 3 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
          { value: 'publicKeyMultibase', id: 'publickeymultibase', level: 3 },
          { value: 'Defined in', id: 'defined-in-5', level: 4 },
          { value: 'relationship', id: 'relationship', level: 3 },
          { value: 'Defined in', id: 'defined-in-6', level: 4 },
          { value: 'signature', id: 'signature', level: 3 },
          { value: 'Defined in', id: 'defined-in-7', level: 4 },
        ],
        s = { toc: o },
        c = 'wrapper';
      function u(e) {
        let { components: t, ...i } = e;
        return (0, n.kt)(
          c,
          (0, r.Z)({}, s, i, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, n.kt)('h3', { id: 'challenge' }, 'challenge'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, n.kt)('strong', { parentName: 'p' }, 'challenge'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L88',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:88',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'controller' }, 'controller'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, n.kt)('strong', { parentName: 'p' }, 'controller'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L90',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:90',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'privatekey' }, 'privateKey'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, n.kt)('strong', { parentName: 'p' }, 'privateKey'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
          ),
          (0, n.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L86',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:86',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'privatekeymultibase' }, 'privateKeyMultibase'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, n.kt)('strong', { parentName: 'p' }, 'privateKeyMultibase'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L87',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:87',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'publickey' }, 'publicKey'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, n.kt)('strong', { parentName: 'p' }, 'publicKey'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
          ),
          (0, n.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L84',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:84',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'publickeymultibase' }, 'publicKeyMultibase'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, n.kt)('strong', { parentName: 'p' }, 'publicKeyMultibase'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L85',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:85',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'relationship' }, 'relationship'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, n.kt)('strong', { parentName: 'p' }, 'relationship'),
            ': ',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/modules#verificationrelationship' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerificationRelationship'),
            ),
            '[]',
          ),
          (0, n.kt)('h4', { id: 'defined-in-6' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L91',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:91',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'signature' }, 'signature'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, n.kt)('strong', { parentName: 'p' }, 'signature'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
          ),
          (0, n.kt)('h4', { id: 'defined-in-7' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L89',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:89',
            ),
          ),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
