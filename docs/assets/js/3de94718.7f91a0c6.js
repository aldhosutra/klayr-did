'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [7456],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => c, kt: () => f });
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
      function o(e, t) {
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
      var l = i.createContext({}),
        s = function (e) {
          var t = i.useContext(l),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : a(a({}, t), e)), n;
        },
        c = function (e) {
          var t = s(e.components);
          return i.createElement(l.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return i.createElement(i.Fragment, {}, t);
          },
        },
        m = i.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            d = e.originalType,
            l = e.parentName,
            c = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = s(n),
            m = r,
            f = p[''.concat(l, '.').concat(m)] || p[m] || u[m] || d;
          return n
            ? i.createElement(f, a(a({ ref: t }, c), {}, { components: n }))
            : i.createElement(f, a({ ref: t }, c));
        });
      function f(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var d = n.length,
            a = new Array(d);
          a[0] = m;
          var o = {};
          for (var l in t) hasOwnProperty.call(t, l) && (o[l] = t[l]);
          (o.originalType = e), (o[p] = 'string' == typeof e ? e : r), (a[1] = o);
          for (var s = 2; s < d; s++) a[s] = n[s];
          return i.createElement.apply(null, a);
        }
        return i.createElement.apply(null, n);
      }
      m.displayName = 'MDXCreateElement';
    },
    2164: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => l,
          contentTitle: () => a,
          default: () => u,
          frontMatter: () => d,
          metadata: () => o,
          toc: () => s,
        });
      var i = n(7896),
        r = (n(2784), n(876));
      const d = {
          id: 'did.KeysCommand',
          title: 'Interface: KeysCommand',
          sidebar_label: 'did.KeysCommand',
          custom_edit_url: null,
        },
        a = void 0,
        o = {
          unversionedId: 'lisk-did/interfaces/did.KeysCommand',
          id: 'lisk-did/interfaces/did.KeysCommand',
          title: 'Interface: KeysCommand',
          description: 'did.KeysCommand',
          source: '@site/docs/lisk-did/interfaces/did.KeysCommand.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.KeysCommand',
          permalink: '/docs/lisk-did/interfaces/did.KeysCommand',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.KeysCommand',
            title: 'Interface: KeysCommand',
            sidebar_label: 'did.KeysCommand',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.JWEDocument', permalink: '/docs/lisk-did/interfaces/did.JWEDocument' },
          next: { title: 'did.NonceStoreData', permalink: '/docs/lisk-did/interfaces/did.NonceStoreData' },
        },
        l = {},
        s = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'publicKey', id: 'publickey', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'relationship', id: 'relationship', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
        ],
        c = { toc: s },
        p = 'wrapper';
      function u(e) {
        let { components: t, ...n } = e;
        return (0, r.kt)(
          p,
          (0, i.Z)({}, c, n, { components: t, mdxType: 'MDXLayout' }),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.KeysCommand',
          ),
          (0, r.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, r.kt)('h3', { id: 'publickey' }, 'publicKey'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'publicKey'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
          ),
          (0, r.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/commands/keys.d.ts:4'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'relationship' }, 'relationship'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'relationship'),
            ': ',
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/namespaces/did#verificationrelationship' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'VerificationRelationship'),
            ),
            '[]',
          ),
          (0, r.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/commands/keys.d.ts:5'),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
