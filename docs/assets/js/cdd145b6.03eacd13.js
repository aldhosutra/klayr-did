'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [5434],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => c, kt: () => b });
      var a = r(2784);
      function n(e, t, r) {
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
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function o(e, t) {
        if (null == e) return {};
        var r,
          a,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              a,
              n = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (r = i[a]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
        }
        return n;
      }
      var d = a.createContext({}),
        s = function (e) {
          var t = a.useContext(d),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : l(l({}, t), e)), r;
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
          var r = e.components,
            n = e.mdxType,
            i = e.originalType,
            d = e.parentName,
            c = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = s(r),
            m = n,
            b = u[''.concat(d, '.').concat(m)] || u[m] || p[m] || i;
          return r
            ? a.createElement(b, l(l({ ref: t }, c), {}, { components: r }))
            : a.createElement(b, l({ ref: t }, c));
        });
      function b(e, t) {
        var r = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var i = r.length,
            l = new Array(i);
          l[0] = m;
          var o = {};
          for (var d in t) hasOwnProperty.call(t, d) && (o[d] = t[d]);
          (o.originalType = e), (o[u] = 'string' == typeof e ? e : n), (l[1] = o);
          for (var s = 2; s < i; s++) l[s] = r[s];
          return a.createElement.apply(null, l);
        }
        return a.createElement.apply(null, r);
      }
      m.displayName = 'MDXCreateElement';
    },
    2635: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => d,
          contentTitle: () => l,
          default: () => p,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => s,
        });
      var a = r(7896),
        n = (r(2784), r(876));
      const i = {
          id: 'documentLoader.builders',
          title: 'Namespace: builders',
          sidebar_label: 'documentLoader.builders',
          custom_edit_url: null,
        },
        l = void 0,
        o = {
          unversionedId: 'lisk-verifiable-credentials/namespaces/documentLoader.builders',
          id: 'lisk-verifiable-credentials/namespaces/documentLoader.builders',
          title: 'Namespace: builders',
          description: 'documentLoader.builders',
          source: '@site/docs/lisk-verifiable-credentials/namespaces/documentLoader.builders.md',
          sourceDirName: 'lisk-verifiable-credentials/namespaces',
          slug: '/lisk-verifiable-credentials/namespaces/documentLoader.builders',
          permalink: '/docs/lisk-verifiable-credentials/namespaces/documentLoader.builders',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'documentLoader.builders',
            title: 'Namespace: builders',
            sidebar_label: 'documentLoader.builders',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'documentLoader',
            permalink: '/docs/lisk-verifiable-credentials/namespaces/documentLoader',
          },
          next: { title: 'Proof', permalink: '/docs/lisk-verifiable-credentials/interfaces/Proof' },
        },
        d = {},
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
        return (0, n.kt)(
          u,
          (0, a.Z)({}, c, r, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-verifiable-credentials/namespaces/documentLoader' },
              'documentLoader',
            ),
            '.builders',
          ),
          (0, n.kt)('h2', { id: 'variables' }, 'Variables'),
          (0, n.kt)('h3', { id: 'httpresolver' }, 'httpResolver'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, n.kt)('strong', { parentName: 'p' }, 'httpResolver'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'BaseDocumentResolver'),
          ),
          (0, n.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-verifiable-credentials/src/documentLoader/builders/base.ts#L59',
              },
              'lisk-verifiable-credentials/src/documentLoader/builders/base.ts:59',
            ),
          ),
          (0, n.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, n.kt)('h3', { id: 'createbaseloader' }, 'createBaseLoader'),
          (0, n.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'createBaseLoader'),
            '(',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'param?'),
            '): ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'JsonLdDocumentLoader'),
          ),
          (0, n.kt)('h4', { id: 'parameters' }, 'Parameters'),
          (0, n.kt)(
            'table',
            null,
            (0, n.kt)(
              'thead',
              { parentName: 'table' },
              (0, n.kt)(
                'tr',
                { parentName: 'thead' },
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, n.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, n.kt)(
              'tbody',
              { parentName: 'table' },
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'param'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'DocumentLoaderParam'),
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, n.kt)('p', null, (0, n.kt)('inlineCode', { parentName: 'p' }, 'JsonLdDocumentLoader')),
          (0, n.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-verifiable-credentials/src/documentLoader/builders/base.ts#L17',
              },
              'lisk-verifiable-credentials/src/documentLoader/builders/base.ts:17',
            ),
          ),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
