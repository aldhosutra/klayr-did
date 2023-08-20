'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [5556],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => c, kt: () => k });
      var r = n(2784);
      function i(e, t, n) {
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
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
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
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      }
      var d = r.createContext({}),
        s = function (e) {
          var t = r.useContext(d),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : l(l({}, t), e)), n;
        },
        c = function (e) {
          var t = s(e.components);
          return r.createElement(d.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        f = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        u = r.forwardRef(function (e, t) {
          var n = e.components,
            i = e.mdxType,
            a = e.originalType,
            d = e.parentName,
            c = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = s(n),
            u = i,
            k = p[''.concat(d, '.').concat(u)] || p[u] || f[u] || a;
          return n
            ? r.createElement(k, l(l({ ref: t }, c), {}, { components: n }))
            : r.createElement(k, l({ ref: t }, c));
        });
      function k(e, t) {
        var n = arguments,
          i = t && t.mdxType;
        if ('string' == typeof e || i) {
          var a = n.length,
            l = new Array(a);
          l[0] = u;
          var o = {};
          for (var d in t) hasOwnProperty.call(t, d) && (o[d] = t[d]);
          (o.originalType = e), (o[p] = 'string' == typeof e ? e : i), (l[1] = o);
          for (var s = 2; s < a; s++) l[s] = n[s];
          return r.createElement.apply(null, l);
        }
        return r.createElement.apply(null, n);
      }
      u.displayName = 'MDXCreateElement';
    },
    8711: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => l,
          default: () => f,
          frontMatter: () => a,
          metadata: () => o,
          toc: () => s,
        });
      var r = n(7896),
        i = (n(2784), n(876));
      const a = {
          id: 'TransactionPayload',
          title: 'Interface: TransactionPayload<T>',
          sidebar_label: 'TransactionPayload',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        l = void 0,
        o = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/TransactionPayload',
          id: 'lisk-decentralized-identifier/interfaces/TransactionPayload',
          title: 'Interface: TransactionPayload<T>',
          description: 'Type parameters',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/TransactionPayload.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/TransactionPayload',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/TransactionPayload',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'TransactionPayload',
            title: 'Interface: TransactionPayload<T>',
            sidebar_label: 'TransactionPayload',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'Service', permalink: '/docs/lisk-decentralized-identifier/interfaces/Service' },
          next: {
            title: 'TransactionPayloadWithoutSignature',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/TransactionPayloadWithoutSignature',
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
      function f(e) {
        let { components: t, ...n } = e;
        return (0, i.kt)(
          p,
          (0, r.Z)({}, c, n, { components: t, mdxType: 'MDXLayout' }),
          (0, i.kt)('h2', { id: 'type-parameters' }, 'Type parameters'),
          (0, i.kt)(
            'table',
            null,
            (0, i.kt)(
              'thead',
              { parentName: 'table' },
              (0, i.kt)('tr', { parentName: 'thead' }, (0, i.kt)('th', { parentName: 'tr', align: 'left' }, 'Name')),
            ),
            (0, i.kt)(
              'tbody',
              { parentName: 'table' },
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'T'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, i.kt)('h3', { id: 'fee' }, 'fee'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, i.kt)('strong', { parentName: 'p' }, 'fee'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'bigint'),
          ),
          (0, i.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/client.ts#L65',
              },
              'packages/lisk-decentralized-identifier/src/types/client.ts:65',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'nonce' }, 'nonce'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Optional'),
            ' ',
            (0, i.kt)('strong', { parentName: 'p' }, 'nonce'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'bigint'),
          ),
          (0, i.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/client.ts#L66',
              },
              'packages/lisk-decentralized-identifier/src/types/client.ts:66',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'params' }, 'params'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'params'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'SignatureMessage'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'T'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/client.ts#L67',
              },
              'packages/lisk-decentralized-identifier/src/types/client.ts:67',
            ),
          ),
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
