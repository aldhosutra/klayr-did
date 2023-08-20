'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [7164],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => c, kt: () => m });
      var i = n(2784);
      function a(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function r(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function o(e, t) {
        if (null == e) return {};
        var n,
          i,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              a = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (n = r[i]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var l = i.createContext({}),
        s = function (e) {
          var t = i.useContext(l),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : d(d({}, t), e)), n;
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
        f = i.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            r = e.originalType,
            l = e.parentName,
            c = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = s(n),
            f = a,
            m = p[''.concat(l, '.').concat(f)] || p[f] || u[f] || r;
          return n
            ? i.createElement(m, d(d({ ref: t }, c), {}, { components: n }))
            : i.createElement(m, d({ ref: t }, c));
        });
      function m(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var r = n.length,
            d = new Array(r);
          d[0] = f;
          var o = {};
          for (var l in t) hasOwnProperty.call(t, l) && (o[l] = t[l]);
          (o.originalType = e), (o[p] = 'string' == typeof e ? e : a), (d[1] = o);
          for (var s = 2; s < r; s++) d[s] = n[s];
          return i.createElement.apply(null, d);
        }
        return i.createElement.apply(null, n);
      }
      f.displayName = 'MDXCreateElement';
    },
    8840: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => l,
          contentTitle: () => d,
          default: () => u,
          frontMatter: () => r,
          metadata: () => o,
          toc: () => s,
        });
      var i = n(7896),
        a = (n(2784), n(876));
      const r = {
          id: 'did.TransactionPayloadWithoutSignature',
          title: 'Interface: TransactionPayloadWithoutSignature<T>',
          sidebar_label: 'did.TransactionPayloadWithoutSignature',
          custom_edit_url: null,
        },
        d = void 0,
        o = {
          unversionedId: 'lisk-did/interfaces/did.TransactionPayloadWithoutSignature',
          id: 'lisk-did/interfaces/did.TransactionPayloadWithoutSignature',
          title: 'Interface: TransactionPayloadWithoutSignature<T>',
          description: 'did.TransactionPayloadWithoutSignature',
          source: '@site/docs/lisk-did/interfaces/did.TransactionPayloadWithoutSignature.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.TransactionPayloadWithoutSignature',
          permalink: '/docs/lisk-did/interfaces/did.TransactionPayloadWithoutSignature',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.TransactionPayloadWithoutSignature',
            title: 'Interface: TransactionPayloadWithoutSignature<T>',
            sidebar_label: 'did.TransactionPayloadWithoutSignature',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.TransactionPayload', permalink: '/docs/lisk-did/interfaces/did.TransactionPayload' },
          next: { title: 'did.VerificationMethod', permalink: '/docs/lisk-did/interfaces/did.VerificationMethod' },
        },
        l = {},
        s = [
          { value: 'Type parameters', id: 'type-parameters', level: 2 },
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'fee', id: 'fee', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'nonce', id: 'nonce', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'params', id: 'params', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
        ],
        c = { toc: s },
        p = 'wrapper';
      function u(e) {
        let { components: t, ...n } = e;
        return (0, a.kt)(
          p,
          (0, i.Z)({}, c, n, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.TransactionPayloadWithoutSignature',
          ),
          (0, a.kt)('h2', { id: 'type-parameters' }, 'Type parameters'),
          (0, a.kt)(
            'table',
            null,
            (0, a.kt)(
              'thead',
              { parentName: 'table' },
              (0, a.kt)('tr', { parentName: 'thead' }, (0, a.kt)('th', { parentName: 'tr', align: 'left' }, 'Name')),
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
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'T'),
                ),
              ),
            ),
          ),
          (0, a.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, a.kt)('h3', { id: 'fee' }, 'fee'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'fee'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'bigint'),
          ),
          (0, a.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/client.d.ts:34'),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'nonce' }, 'nonce'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'nonce'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'bigint'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/client.d.ts:35'),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'params' }, 'params'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'params'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'T'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/client.d.ts:36'),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
