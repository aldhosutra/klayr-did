'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [9582],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => c, kt: () => v });
      var n = r(2784);
      function a(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
          e
        );
      }
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                a(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
        }
        return a;
      }
      var o = n.createContext({}),
        s = function (e) {
          var t = n.useContext(o),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : d(d({}, t), e)), r;
        },
        c = function (e) {
          var t = s(e.components);
          return n.createElement(o.Provider, { value: t }, e.children);
        },
        u = 'mdxType',
        p = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        m = n.forwardRef(function (e, t) {
          var r = e.components,
            a = e.mdxType,
            i = e.originalType,
            o = e.parentName,
            c = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = s(r),
            m = a,
            v = u[''.concat(o, '.').concat(m)] || u[m] || p[m] || i;
          return r
            ? n.createElement(v, d(d({ ref: t }, c), {}, { components: r }))
            : n.createElement(v, d({ ref: t }, c));
        });
      function v(e, t) {
        var r = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var i = r.length,
            d = new Array(i);
          d[0] = m;
          var l = {};
          for (var o in t) hasOwnProperty.call(t, o) && (l[o] = t[o]);
          (l.originalType = e), (l[u] = 'string' == typeof e ? e : a), (d[1] = l);
          for (var s = 2; s < i; s++) d[s] = r[s];
          return n.createElement.apply(null, d);
        }
        return n.createElement.apply(null, r);
      }
      m.displayName = 'MDXCreateElement';
    },
    5375: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => o,
          contentTitle: () => d,
          default: () => p,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => s,
        });
      var n = r(7896),
        a = (r(2784), r(876));
      const i = {
          id: 'vc.documentLoader.builders',
          title: 'Namespace: builders',
          sidebar_label: 'vc.documentLoader.builders',
          custom_edit_url: null,
        },
        d = void 0,
        l = {
          unversionedId: 'lisk-did/namespaces/vc.documentLoader.builders',
          id: 'lisk-did/namespaces/vc.documentLoader.builders',
          title: 'Namespace: builders',
          description: 'vc.documentLoader.builders',
          source: '@site/docs/lisk-did/namespaces/vc.documentLoader.builders.md',
          sourceDirName: 'lisk-did/namespaces',
          slug: '/lisk-did/namespaces/vc.documentLoader.builders',
          permalink: '/docs/lisk-did/namespaces/vc.documentLoader.builders',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'vc.documentLoader.builders',
            title: 'Namespace: builders',
            sidebar_label: 'vc.documentLoader.builders',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'vc.codec', permalink: '/docs/lisk-did/namespaces/vc.codec' },
          next: { title: 'vc.documentLoader', permalink: '/docs/lisk-did/namespaces/vc.documentLoader' },
        },
        o = {},
        s = [
          { value: 'Variables', id: 'variables', level: 2 },
          { value: 'httpResolver', id: 'httpresolver', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'Functions', id: 'functions', level: 2 },
          { value: 'createBaseLoader', id: 'createbaseloader', level: 3 },
          { value: 'Parameters', id: 'parameters', level: 4 },
          { value: 'Returns', id: 'returns', level: 4 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
        ],
        c = { toc: s },
        u = 'wrapper';
      function p(e) {
        let { components: t, ...r } = e;
        return (0, a.kt)(
          u,
          (0, n.Z)({}, c, r, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/vc' }, 'vc'),
            '.',
            (0, a.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/vc.documentLoader' }, 'documentLoader'),
            '.builders',
          ),
          (0, a.kt)('h2', { id: 'variables' }, 'Variables'),
          (0, a.kt)('h3', { id: 'httpresolver' }, 'httpResolver'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'httpResolver'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'BaseDocumentResolver'),
          ),
          (0, a.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/documentLoader/builders/base.d.ts:4'),
          (0, a.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, a.kt)('h3', { id: 'createbaseloader' }, 'createBaseLoader'),
          (0, a.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'createBaseLoader'),
            '(',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'param?'),
            '): ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'JsonLdDocumentLoader'),
          ),
          (0, a.kt)('h4', { id: 'parameters' }, 'Parameters'),
          (0, a.kt)(
            'table',
            null,
            (0, a.kt)(
              'thead',
              { parentName: 'table' },
              (0, a.kt)(
                'tr',
                { parentName: 'thead' },
                (0, a.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, a.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
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
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'param?'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'DocumentLoaderParam'),
                ),
              ),
            ),
          ),
          (0, a.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, a.kt)('p', null, (0, a.kt)('inlineCode', { parentName: 'p' }, 'JsonLdDocumentLoader')),
          (0, a.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, a.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/documentLoader/builders/base.d.ts:3'),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
