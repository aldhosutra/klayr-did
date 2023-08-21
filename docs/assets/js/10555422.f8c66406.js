'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [1399],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => c, kt: () => f });
      var a = n(2784);
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function o(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
        }
        return r;
      }
      var d = a.createContext({}),
        s = function (e) {
          var t = a.useContext(d),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : l(l({}, t), e)), n;
        },
        c = function (e) {
          var t = s(e.components);
          return a.createElement(d.Provider, { value: t }, e.children);
        },
        u = 'mdxType',
        p = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        m = a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            i = e.originalType,
            d = e.parentName,
            c = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = s(n),
            m = r,
            f = u[''.concat(d, '.').concat(m)] || u[m] || p[m] || i;
          return n
            ? a.createElement(f, l(l({ ref: t }, c), {}, { components: n }))
            : a.createElement(f, l({ ref: t }, c));
        });
      function f(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var i = n.length,
            l = new Array(i);
          l[0] = m;
          var o = {};
          for (var d in t) hasOwnProperty.call(t, d) && (o[d] = t[d]);
          (o.originalType = e), (o[u] = 'string' == typeof e ? e : r), (l[1] = o);
          for (var s = 2; s < i; s++) l[s] = n[s];
          return a.createElement.apply(null, l);
        }
        return a.createElement.apply(null, n);
      }
      m.displayName = 'MDXCreateElement';
    },
    6836: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => l,
          default: () => p,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => s,
        });
      var a = n(7896),
        r = (n(2784), n(876));
      const i = {
          id: 'documentLoader',
          title: 'Namespace: documentLoader',
          sidebar_label: 'documentLoader',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        l = void 0,
        o = {
          unversionedId: 'lisk-verifiable-credentials/namespaces/documentLoader',
          id: 'lisk-verifiable-credentials/namespaces/documentLoader',
          title: 'Namespace: documentLoader',
          description: 'Namespaces',
          source: '@site/docs/lisk-verifiable-credentials/namespaces/documentLoader.md',
          sourceDirName: 'lisk-verifiable-credentials/namespaces',
          slug: '/lisk-verifiable-credentials/namespaces/documentLoader',
          permalink: '/docs/lisk-verifiable-credentials/namespaces/documentLoader',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'documentLoader',
            title: 'Namespace: documentLoader',
            sidebar_label: 'documentLoader',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'codec', permalink: '/docs/lisk-verifiable-credentials/namespaces/codec' },
          next: {
            title: 'documentLoader.builders',
            permalink: '/docs/lisk-verifiable-credentials/namespaces/documentLoader.builders',
          },
        },
        d = {},
        s = [
          { value: 'Namespaces', id: 'namespaces', level: 2 },
          { value: 'Functions', id: 'functions', level: 2 },
          { value: 'buildOffChainDocumentLoader', id: 'buildoffchaindocumentloader', level: 3 },
          { value: 'Parameters', id: 'parameters', level: 4 },
          { value: 'Returns', id: 'returns', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'buildOnChainDocumentLoader', id: 'buildonchaindocumentloader', level: 3 },
          { value: 'Parameters', id: 'parameters-1', level: 4 },
          { value: 'Returns', id: 'returns-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
        ],
        c = { toc: s },
        u = 'wrapper';
      function p(e) {
        let { components: t, ...n } = e;
        return (0, r.kt)(
          u,
          (0, a.Z)({}, c, n, { components: t, mdxType: 'MDXLayout' }),
          (0, r.kt)('h2', { id: 'namespaces' }, 'Namespaces'),
          (0, r.kt)(
            'ul',
            null,
            (0, r.kt)(
              'li',
              { parentName: 'ul' },
              (0, r.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-verifiable-credentials/namespaces/documentLoader.builders' },
                'builders',
              ),
            ),
          ),
          (0, r.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, r.kt)('h3', { id: 'buildoffchaindocumentloader' }, 'buildOffChainDocumentLoader'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'buildOffChainDocumentLoader'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'options?'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'DocumentLoader'),
          ),
          (0, r.kt)('h4', { id: 'parameters' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'options?'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'ClientOptions'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, r.kt)('p', null, (0, r.kt)('inlineCode', { parentName: 'p' }, 'DocumentLoader')),
          (0, r.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-verifiable-credentials/src/documentLoader/offChain.ts#L5',
              },
              'lisk-verifiable-credentials/src/documentLoader/offChain.ts:5',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'buildonchaindocumentloader' }, 'buildOnChainDocumentLoader'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'buildOnChainDocumentLoader'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'options?'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'DocumentLoader'),
          ),
          (0, r.kt)('h4', { id: 'parameters-1' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'options?'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'ClientOptions'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-1' }, 'Returns'),
          (0, r.kt)('p', null, (0, r.kt)('inlineCode', { parentName: 'p' }, 'DocumentLoader')),
          (0, r.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-verifiable-credentials/src/documentLoader/onChain.ts#L5',
              },
              'lisk-verifiable-credentials/src/documentLoader/onChain.ts:5',
            ),
          ),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
