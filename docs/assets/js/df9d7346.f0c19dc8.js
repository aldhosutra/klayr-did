'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [5811],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => c, kt: () => k });
      var i = n(2784);
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function a(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
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
              a = Object.keys(e);
            for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (n = a[i]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
        }
        return r;
      }
      var d = i.createContext({}),
        s = function (e) {
          var t = i.useContext(d),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : l(l({}, t), e)), n;
        },
        c = function (e) {
          var t = s(e.components);
          return i.createElement(d.Provider, { value: t }, e.children);
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
            r = e.mdxType,
            a = e.originalType,
            d = e.parentName,
            c = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = s(n),
            f = r,
            k = p[''.concat(d, '.').concat(f)] || p[f] || u[f] || a;
          return n
            ? i.createElement(k, l(l({ ref: t }, c), {}, { components: n }))
            : i.createElement(k, l({ ref: t }, c));
        });
      function k(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var a = n.length,
            l = new Array(a);
          l[0] = f;
          var o = {};
          for (var d in t) hasOwnProperty.call(t, d) && (o[d] = t[d]);
          (o.originalType = e), (o[p] = 'string' == typeof e ? e : r), (l[1] = o);
          for (var s = 2; s < a; s++) l[s] = n[s];
          return i.createElement.apply(null, l);
        }
        return i.createElement.apply(null, n);
      }
      f.displayName = 'MDXCreateElement';
    },
    6191: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => a,
          metadata: () => o,
          toc: () => s,
        });
      var i = n(7896),
        r = (n(2784), n(876));
      const a = {
          id: 'TransactionPayloadWithoutSignature',
          title: 'Interface: TransactionPayloadWithoutSignature<T>',
          sidebar_label: 'TransactionPayloadWithoutSignature',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        l = void 0,
        o = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/TransactionPayloadWithoutSignature',
          id: 'lisk-decentralized-identifier/interfaces/TransactionPayloadWithoutSignature',
          title: 'Interface: TransactionPayloadWithoutSignature<T>',
          description: 'Type parameters',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/TransactionPayloadWithoutSignature.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/TransactionPayloadWithoutSignature',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/TransactionPayloadWithoutSignature',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'TransactionPayloadWithoutSignature',
            title: 'Interface: TransactionPayloadWithoutSignature<T>',
            sidebar_label: 'TransactionPayloadWithoutSignature',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'TransactionPayload',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/TransactionPayload',
          },
          next: {
            title: 'VerificationMethod',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/VerificationMethod',
          },
        },
        d = {},
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
        return (0, r.kt)(
          p,
          (0, i.Z)({}, c, n, { components: t, mdxType: 'MDXLayout' }),
          (0, r.kt)('h2', { id: 'type-parameters' }, 'Type parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)('tr', { parentName: 'thead' }, (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name')),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'T'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, r.kt)('h3', { id: 'fee' }, 'fee'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, r.kt)('strong', { parentName: 'p' }, 'fee'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'bigint'),
          ),
          (0, r.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/client.ts#L71',
              },
              'packages/lisk-decentralized-identifier/src/types/client.ts:71',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'nonce' }, 'nonce'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, r.kt)('strong', { parentName: 'p' }, 'nonce'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'bigint'),
          ),
          (0, r.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/client.ts#L72',
              },
              'packages/lisk-decentralized-identifier/src/types/client.ts:72',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'params' }, 'params'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'params'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'T'),
          ),
          (0, r.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/client.ts#L73',
              },
              'packages/lisk-decentralized-identifier/src/types/client.ts:73',
            ),
          ),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
