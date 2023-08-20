'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [7566],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => s, kt: () => k });
      var a = n(2784);
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
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function i(e) {
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
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              d = Object.keys(e);
            for (a = 0; a < d.length; a++) (n = d[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(e);
          for (a = 0; a < d.length; a++)
            (n = d[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
        }
        return r;
      }
      var l = a.createContext({}),
        c = function (e) {
          var t = a.useContext(l),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : i(i({}, t), e)), n;
        },
        s = function (e) {
          var t = c(e.components);
          return a.createElement(l.Provider, { value: t }, e.children);
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
            d = e.originalType,
            l = e.parentName,
            s = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = c(n),
            m = r,
            k = u[''.concat(l, '.').concat(m)] || u[m] || p[m] || d;
          return n
            ? a.createElement(k, i(i({ ref: t }, s), {}, { components: n }))
            : a.createElement(k, i({ ref: t }, s));
        });
      function k(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var d = n.length,
            i = new Array(d);
          i[0] = m;
          var o = {};
          for (var l in t) hasOwnProperty.call(t, l) && (o[l] = t[l]);
          (o.originalType = e), (o[u] = 'string' == typeof e ? e : r), (i[1] = o);
          for (var c = 2; c < d; c++) i[c] = n[c];
          return a.createElement.apply(null, i);
        }
        return a.createElement.apply(null, n);
      }
      m.displayName = 'MDXCreateElement';
    },
    7599: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => l,
          contentTitle: () => i,
          default: () => p,
          frontMatter: () => d,
          metadata: () => o,
          toc: () => c,
        });
      var a = n(7896),
        r = (n(2784), n(876));
      const d = {
          id: 'vc.documentLoader',
          title: 'Namespace: documentLoader',
          sidebar_label: 'vc.documentLoader',
          custom_edit_url: null,
        },
        i = void 0,
        o = {
          unversionedId: 'lisk-did/namespaces/vc.documentLoader',
          id: 'lisk-did/namespaces/vc.documentLoader',
          title: 'Namespace: documentLoader',
          description: 'vc.documentLoader',
          source: '@site/docs/lisk-did/namespaces/vc.documentLoader.md',
          sourceDirName: 'lisk-did/namespaces',
          slug: '/lisk-did/namespaces/vc.documentLoader',
          permalink: '/docs/lisk-did/namespaces/vc.documentLoader',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'vc.documentLoader',
            title: 'Namespace: documentLoader',
            sidebar_label: 'vc.documentLoader',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'vc.documentLoader.builders',
            permalink: '/docs/lisk-did/namespaces/vc.documentLoader.builders',
          },
          next: { title: 'AddControllersCommand', permalink: '/docs/lisk-did/classes/AddControllersCommand' },
        },
        l = {},
        c = [
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
        s = { toc: c },
        u = 'wrapper';
      function p(e) {
        let { components: t, ...n } = e;
        return (0, r.kt)(
          u,
          (0, a.Z)({}, s, n, { components: t, mdxType: 'MDXLayout' }),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/vc' }, 'vc'),
            '.documentLoader',
          ),
          (0, r.kt)('h2', { id: 'namespaces' }, 'Namespaces'),
          (0, r.kt)(
            'ul',
            null,
            (0, r.kt)(
              'li',
              { parentName: 'ul' },
              (0, r.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did/namespaces/vc.documentLoader.builders' },
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
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/namespaces/did#documentloader' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'DocumentLoader'),
            ),
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
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/namespaces/did#documentloader' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'DocumentLoader'),
            ),
          ),
          (0, r.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/documentLoader/offChain.d.ts:3'),
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
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/namespaces/did#documentloader' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'DocumentLoader'),
            ),
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
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/namespaces/did#documentloader' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'DocumentLoader'),
            ),
          ),
          (0, r.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/documentLoader/onChain.d.ts:3'),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
