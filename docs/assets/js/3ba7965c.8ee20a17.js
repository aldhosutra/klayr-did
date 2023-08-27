'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [6859],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => s, kt: () => f });
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
      var o = n.createContext({}),
        p = function (e) {
          var t = n.useContext(o),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : l(l({}, t), e)), i;
        },
        s = function (e) {
          var t = p(e.components);
          return n.createElement(o.Provider, { value: t }, e.children);
        },
        c = 'mdxType',
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
            o = e.parentName,
            s = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            c = p(i),
            k = r,
            f = c[''.concat(o, '.').concat(k)] || c[k] || u[k] || a;
          return i
            ? n.createElement(f, l(l({ ref: t }, s), {}, { components: i }))
            : n.createElement(f, l({ ref: t }, s));
        });
      function f(e, t) {
        var i = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var a = i.length,
            l = new Array(a);
          l[0] = k;
          var d = {};
          for (var o in t) hasOwnProperty.call(t, o) && (d[o] = t[o]);
          (d.originalType = e), (d[c] = 'string' == typeof e ? e : r), (l[1] = d);
          for (var p = 2; p < a; p++) l[p] = i[p];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, i);
      }
      k.displayName = 'MDXCreateElement';
    },
    7089: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => o,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => a,
          metadata: () => d,
          toc: () => p,
        });
      var n = i(7896),
        r = (i(2784), i(876));
      const a = {
          id: 'did.AuthorizationFactors',
          title: 'Interface: AuthorizationFactors',
          sidebar_label: 'did.AuthorizationFactors',
          custom_edit_url: null,
        },
        l = void 0,
        d = {
          unversionedId: 'lisk-did/interfaces/did.AuthorizationFactors',
          id: 'lisk-did/interfaces/did.AuthorizationFactors',
          title: 'Interface: AuthorizationFactors',
          description: 'did.AuthorizationFactors',
          source: '@site/docs/lisk-did/interfaces/did.AuthorizationFactors.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.AuthorizationFactors',
          permalink: '/docs/lisk-did/interfaces/did.AuthorizationFactors',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.AuthorizationFactors',
            title: 'Interface: AuthorizationFactors',
            sidebar_label: 'did.AuthorizationFactors',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'did.AddServiceEndpointParam',
            permalink: '/docs/lisk-did/interfaces/did.AddServiceEndpointParam',
          },
          next: { title: 'did.BaseResolver', permalink: '/docs/lisk-did/interfaces/did.BaseResolver' },
        },
        o = {},
        p = [
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
        s = { toc: p },
        c = 'wrapper';
      function u(e) {
        let { components: t, ...i } = e;
        return (0, r.kt)(
          c,
          (0, n.Z)({}, s, i, { components: t, mdxType: 'MDXLayout' }),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.AuthorizationFactors',
          ),
          (0, r.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, r.kt)('h3', { id: 'challenge' }, 'challenge'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, r.kt)('strong', { parentName: 'p' }, 'challenge'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, r.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:91'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'controller' }, 'controller'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, r.kt)('strong', { parentName: 'p' }, 'controller'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, r.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:93'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'privatekey' }, 'privateKey'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, r.kt)('strong', { parentName: 'p' }, 'privateKey'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
          ),
          (0, r.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:89'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'privatekeymultibase' }, 'privateKeyMultibase'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, r.kt)('strong', { parentName: 'p' }, 'privateKeyMultibase'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, r.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:90'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'publickey' }, 'publicKey'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, r.kt)('strong', { parentName: 'p' }, 'publicKey'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
          ),
          (0, r.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:87'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'publickeymultibase' }, 'publicKeyMultibase'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, r.kt)('strong', { parentName: 'p' }, 'publicKeyMultibase'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, r.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:88'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'relationship' }, 'relationship'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, r.kt)('strong', { parentName: 'p' }, 'relationship'),
            ': ',
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/namespaces/did#verificationrelationship' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'VerificationRelationship'),
            ),
            '[]',
          ),
          (0, r.kt)('h4', { id: 'defined-in-6' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:94'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'signature' }, 'signature'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, r.kt)('strong', { parentName: 'p' }, 'signature'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
          ),
          (0, r.kt)('h4', { id: 'defined-in-7' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/cryptography.d.ts:92'),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
