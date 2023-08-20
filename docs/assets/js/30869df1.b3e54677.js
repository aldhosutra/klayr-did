'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [2368],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => s, kt: () => m });
      var n = i(2784);
      function r(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = i),
          e
        );
      }
      function d(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(i), !0).forEach(function (t) {
                r(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : d(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      function a(e, t) {
        if (null == e) return {};
        var i,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var i,
              n,
              r = {},
              d = Object.keys(e);
            for (n = 0; n < d.length; n++) (i = d[n]), t.indexOf(i) >= 0 || (r[i] = e[i]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(e);
          for (n = 0; n < d.length; n++)
            (i = d[n]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]));
        }
        return r;
      }
      var l = n.createContext({}),
        c = function (e) {
          var t = n.useContext(l),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : o(o({}, t), e)), i;
        },
        s = function (e) {
          var t = c(e.components);
          return n.createElement(l.Provider, { value: t }, e.children);
        },
        u = 'mdxType',
        p = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        f = n.forwardRef(function (e, t) {
          var i = e.components,
            r = e.mdxType,
            d = e.originalType,
            l = e.parentName,
            s = a(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = c(i),
            f = r,
            m = u[''.concat(l, '.').concat(f)] || u[f] || p[f] || d;
          return i
            ? n.createElement(m, o(o({ ref: t }, s), {}, { components: i }))
            : n.createElement(m, o({ ref: t }, s));
        });
      function m(e, t) {
        var i = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var d = i.length,
            o = new Array(d);
          o[0] = f;
          var a = {};
          for (var l in t) hasOwnProperty.call(t, l) && (a[l] = t[l]);
          (a.originalType = e), (a[u] = 'string' == typeof e ? e : r), (o[1] = a);
          for (var c = 2; c < d; c++) o[c] = i[c];
          return n.createElement.apply(null, o);
        }
        return n.createElement.apply(null, i);
      }
      f.displayName = 'MDXCreateElement';
    },
    178: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => l,
          contentTitle: () => o,
          default: () => p,
          frontMatter: () => d,
          metadata: () => a,
          toc: () => c,
        });
      var n = i(7896),
        r = (i(2784), i(876));
      const d = {
          id: 'did.DidModuleConfig',
          title: 'Interface: DidModuleConfig',
          sidebar_label: 'did.DidModuleConfig',
          custom_edit_url: null,
        },
        o = void 0,
        a = {
          unversionedId: 'lisk-did/interfaces/did.DidModuleConfig',
          id: 'lisk-did/interfaces/did.DidModuleConfig',
          title: 'Interface: DidModuleConfig',
          description: 'did.DidModuleConfig',
          source: '@site/docs/lisk-did/interfaces/did.DidModuleConfig.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.DidModuleConfig',
          permalink: '/docs/lisk-did/interfaces/did.DidModuleConfig',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.DidModuleConfig',
            title: 'Interface: DidModuleConfig',
            sidebar_label: 'did.DidModuleConfig',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.DidMethod', permalink: '/docs/lisk-did/interfaces/did.DidMethod' },
          next: { title: 'did.DocumentLoaderResult', permalink: '/docs/lisk-did/interfaces/did.DocumentLoaderResult' },
        },
        l = {},
        c = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'autoCreateAddressDID', id: 'autocreateaddressdid', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'chainspace', id: 'chainspace', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
        ],
        s = { toc: c },
        u = 'wrapper';
      function p(e) {
        let { components: t, ...i } = e;
        return (0, r.kt)(
          u,
          (0, n.Z)({}, s, i, { components: t, mdxType: 'MDXLayout' }),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.DidModuleConfig',
          ),
          (0, r.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, r.kt)('h3', { id: 'autocreateaddressdid' }, 'autoCreateAddressDID'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'autoCreateAddressDID'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'boolean'),
          ),
          (0, r.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/config.d.ts:3'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'chainspace' }, 'chainspace'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'chainspace'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, r.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/config.d.ts:2'),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
