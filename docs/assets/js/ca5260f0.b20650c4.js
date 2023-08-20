'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [7806],
  {
    876: (e, i, t) => {
      t.d(i, { Zo: () => s, kt: () => k });
      var r = t(2784);
      function n(e, i, t) {
        return (
          i in e
            ? Object.defineProperty(e, i, { value: t, enumerable: !0, configurable: !0, writable: !0 })
            : (e[i] = t),
          e
        );
      }
      function l(e, i) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          i &&
            (r = r.filter(function (i) {
              return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function a(e) {
        for (var i = 1; i < arguments.length; i++) {
          var t = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? l(Object(t), !0).forEach(function (i) {
                n(e, i, t[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (i) {
                Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
              });
        }
        return e;
      }
      function d(e, i) {
        if (null == e) return {};
        var t,
          r,
          n = (function (e, i) {
            if (null == e) return {};
            var t,
              r,
              n = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++) (t = l[r]), i.indexOf(t) >= 0 || (n[t] = e[t]);
            return n;
          })(e, i);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (t = l[r]), i.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]));
        }
        return n;
      }
      var o = r.createContext({}),
        p = function (e) {
          var i = r.useContext(o),
            t = i;
          return e && (t = 'function' == typeof e ? e(i) : a(a({}, i), e)), t;
        },
        s = function (e) {
          var i = p(e.components);
          return r.createElement(o.Provider, { value: i }, e.children);
        },
        c = 'mdxType',
        f = {
          inlineCode: 'code',
          wrapper: function (e) {
            var i = e.children;
            return r.createElement(r.Fragment, {}, i);
          },
        },
        u = r.forwardRef(function (e, i) {
          var t = e.components,
            n = e.mdxType,
            l = e.originalType,
            o = e.parentName,
            s = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            c = p(t),
            u = n,
            k = c[''.concat(o, '.').concat(u)] || c[u] || f[u] || l;
          return t
            ? r.createElement(k, a(a({ ref: i }, s), {}, { components: t }))
            : r.createElement(k, a({ ref: i }, s));
        });
      function k(e, i) {
        var t = arguments,
          n = i && i.mdxType;
        if ('string' == typeof e || n) {
          var l = t.length,
            a = new Array(l);
          a[0] = u;
          var d = {};
          for (var o in i) hasOwnProperty.call(i, o) && (d[o] = i[o]);
          (d.originalType = e), (d[c] = 'string' == typeof e ? e : n), (a[1] = d);
          for (var p = 2; p < l; p++) a[p] = t[p];
          return r.createElement.apply(null, a);
        }
        return r.createElement.apply(null, t);
      }
      u.displayName = 'MDXCreateElement';
    },
    7238: (e, i, t) => {
      t.r(i),
        t.d(i, {
          assets: () => o,
          contentTitle: () => a,
          default: () => f,
          frontMatter: () => l,
          metadata: () => d,
          toc: () => p,
        });
      var r = t(7896),
        n = (t(2784), t(876));
      const l = {
          id: 'VerificationKey',
          title: 'Interface: VerificationKey',
          sidebar_label: 'VerificationKey',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        a = void 0,
        d = {
          unversionedId: 'lisk-verifiable-credentials/interfaces/VerificationKey',
          id: 'lisk-verifiable-credentials/interfaces/VerificationKey',
          title: 'Interface: VerificationKey',
          description: 'Hierarchy',
          source: '@site/docs/lisk-verifiable-credentials/interfaces/VerificationKey.md',
          sourceDirName: 'lisk-verifiable-credentials/interfaces',
          slug: '/lisk-verifiable-credentials/interfaces/VerificationKey',
          permalink: '/docs/lisk-verifiable-credentials/interfaces/VerificationKey',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'VerificationKey',
            title: 'Interface: VerificationKey',
            sidebar_label: 'VerificationKey',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'VPVerificationResult',
            permalink: '/docs/lisk-verifiable-credentials/interfaces/VPVerificationResult',
          },
        },
        o = {},
        p = [
          { value: 'Hierarchy', id: 'hierarchy', level: 2 },
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'controller', id: 'controller', level: 3 },
          { value: 'Inherited from', id: 'inherited-from', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'id', id: 'id', level: 3 },
          { value: 'Inherited from', id: 'inherited-from-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'privateKeyMultibase', id: 'privatekeymultibase', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'publicKeyMultibase', id: 'publickeymultibase', level: 3 },
          { value: 'Inherited from', id: 'inherited-from-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'revoked', id: 'revoked', level: 3 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
          { value: 'type', id: 'type', level: 3 },
          { value: 'Inherited from', id: 'inherited-from-3', level: 4 },
          { value: 'Defined in', id: 'defined-in-5', level: 4 },
        ],
        s = { toc: p },
        c = 'wrapper';
      function f(e) {
        let { components: i, ...t } = e;
        return (0, n.kt)(
          c,
          (0, r.Z)({}, s, t, { components: i, mdxType: 'MDXLayout' }),
          (0, n.kt)('h2', { id: 'hierarchy' }, 'Hierarchy'),
          (0, n.kt)(
            'ul',
            null,
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)('p', { parentName: 'li' }, (0, n.kt)('inlineCode', { parentName: 'p' }, 'VerificationMethod')),
              (0, n.kt)(
                'p',
                { parentName: 'li' },
                '\u21b3 ',
                (0, n.kt)(
                  'strong',
                  { parentName: 'p' },
                  (0, n.kt)('inlineCode', { parentName: 'strong' }, 'VerificationKey'),
                ),
              ),
            ),
          ),
          (0, n.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, n.kt)('h3', { id: 'controller' }, 'controller'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'controller'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'inherited-from' }, 'Inherited from'),
          (0, n.kt)('p', null, 'VerificationMethod.controller'),
          (0, n.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, n.kt)('p', null, 'lisk-decentralized-identifier/dist/types/cryptography.d.ts:12'),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'id' }, 'id'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'id'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'inherited-from-1' }, 'Inherited from'),
          (0, n.kt)('p', null, 'VerificationMethod.id'),
          (0, n.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, n.kt)('p', null, 'lisk-decentralized-identifier/dist/types/cryptography.d.ts:10'),
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
          (0, n.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-verifiable-credentials/src/types.ts#L17',
              },
              'lisk-verifiable-credentials/src/types.ts:17',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'publickeymultibase' }, 'publicKeyMultibase'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'publicKeyMultibase'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'inherited-from-2' }, 'Inherited from'),
          (0, n.kt)('p', null, 'VerificationMethod.publicKeyMultibase'),
          (0, n.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, n.kt)('p', null, 'lisk-decentralized-identifier/dist/types/cryptography.d.ts:13'),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'revoked' }, 'revoked'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, n.kt)('strong', { parentName: 'p' }, 'revoked'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'any'),
          ),
          (0, n.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-verifiable-credentials/src/types.ts#L16',
              },
              'lisk-verifiable-credentials/src/types.ts:16',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'type' }, 'type'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'type'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'inherited-from-3' }, 'Inherited from'),
          (0, n.kt)('p', null, 'VerificationMethod.type'),
          (0, n.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, n.kt)('p', null, 'lisk-decentralized-identifier/dist/types/cryptography.d.ts:11'),
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
