'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [2989],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => p, kt: () => k });
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
      function c(e, t) {
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
        p = function (e) {
          var t = s(e.components);
          return r.createElement(d.Provider, { value: t }, e.children);
        },
        o = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        m = r.forwardRef(function (e, t) {
          var n = e.components,
            i = e.mdxType,
            a = e.originalType,
            d = e.parentName,
            p = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
            o = s(n),
            m = i,
            k = o[''.concat(d, '.').concat(m)] || o[m] || u[m] || a;
          return n
            ? r.createElement(k, l(l({ ref: t }, p), {}, { components: n }))
            : r.createElement(k, l({ ref: t }, p));
        });
      function k(e, t) {
        var n = arguments,
          i = t && t.mdxType;
        if ('string' == typeof e || i) {
          var a = n.length,
            l = new Array(a);
          l[0] = m;
          var c = {};
          for (var d in t) hasOwnProperty.call(t, d) && (c[d] = t[d]);
          (c.originalType = e), (c[o] = 'string' == typeof e ? e : i), (l[1] = c);
          for (var s = 2; s < a; s++) l[s] = n[s];
          return r.createElement.apply(null, l);
        }
        return r.createElement.apply(null, n);
      }
      m.displayName = 'MDXCreateElement';
    },
    7709: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => l,
          default: () => u,
          frontMatter: () => a,
          metadata: () => c,
          toc: () => s,
        });
      var r = n(7896),
        i = (n(2784), n(876));
      const a = {
          id: 'client',
          title: 'Namespace: client',
          sidebar_label: 'client',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        l = void 0,
        c = {
          unversionedId: 'lisk-decentralized-identifier/namespaces/client',
          id: 'lisk-decentralized-identifier/namespaces/client',
          title: 'Namespace: client',
          description: 'Namespaces',
          source: '@site/docs/lisk-decentralized-identifier/namespaces/client.md',
          sourceDirName: 'lisk-decentralized-identifier/namespaces',
          slug: '/lisk-decentralized-identifier/namespaces/client',
          permalink: '/docs/lisk-decentralized-identifier/namespaces/client',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'client',
            title: 'Namespace: client',
            sidebar_label: 'client',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'Exports', permalink: '/docs/lisk-decentralized-identifier/modules' },
          next: { title: 'cryptography', permalink: '/docs/lisk-decentralized-identifier/namespaces/cryptography' },
        },
        d = {},
        s = [
          { value: 'Namespaces', id: 'namespaces', level: 2 },
          { value: 'Functions', id: 'functions', level: 2 },
          { value: 'createIPCClient', id: 'createipcclient', level: 3 },
          { value: 'Parameters', id: 'parameters', level: 4 },
          { value: 'Returns', id: 'returns', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'createWSClient', id: 'createwsclient', level: 3 },
          { value: 'Parameters', id: 'parameters-1', level: 4 },
          { value: 'Returns', id: 'returns-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
        ],
        p = { toc: s },
        o = 'wrapper';
      function u(e) {
        let { components: t, ...n } = e;
        return (0, i.kt)(
          o,
          (0, r.Z)({}, p, n, { components: t, mdxType: 'MDXLayout' }),
          (0, i.kt)('h2', { id: 'namespaces' }, 'Namespaces'),
          (0, i.kt)(
            'ul',
            null,
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/namespaces/client.utils' },
                'utils',
              ),
            ),
          ),
          (0, i.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, i.kt)('h3', { id: 'createipcclient' }, 'createIPCClient'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'createIPCClient'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'ipc'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'DIDClient'),
          ),
          (0, i.kt)('h4', { id: 'parameters' }, 'Parameters'),
          (0, i.kt)(
            'table',
            null,
            (0, i.kt)(
              'thead',
              { parentName: 'table' },
              (0, i.kt)(
                'tr',
                { parentName: 'thead' },
                (0, i.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, i.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'ipc'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, i.kt)('p', null, (0, i.kt)('inlineCode', { parentName: 'p' }, 'DIDClient')),
          (0, i.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/client/creator.ts#L3',
              },
              'packages/lisk-decentralized-identifier/src/client/creator.ts:3',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'createwsclient' }, 'createWSClient'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'createWSClient'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'ws'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'DIDClient'),
          ),
          (0, i.kt)('h4', { id: 'parameters-1' }, 'Parameters'),
          (0, i.kt)(
            'table',
            null,
            (0, i.kt)(
              'thead',
              { parentName: 'table' },
              (0, i.kt)(
                'tr',
                { parentName: 'thead' },
                (0, i.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, i.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'ws'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns-1' }, 'Returns'),
          (0, i.kt)('p', null, (0, i.kt)('inlineCode', { parentName: 'p' }, 'DIDClient')),
          (0, i.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/client/creator.ts#L7',
              },
              'packages/lisk-decentralized-identifier/src/client/creator.ts:7',
            ),
          ),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
