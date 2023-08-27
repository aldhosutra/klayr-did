'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [9417],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => c, kt: () => m });
      var r = i(2784);
      function n(e, t, i) {
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
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(i), !0).forEach(function (t) {
                n(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : d(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      function o(e, t) {
        if (null == e) return {};
        var i,
          r,
          n = (function (e, t) {
            if (null == e) return {};
            var i,
              r,
              n = {},
              d = Object.keys(e);
            for (r = 0; r < d.length; r++) (i = d[r]), t.indexOf(i) >= 0 || (n[i] = e[i]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(e);
          for (r = 0; r < d.length; r++)
            (i = d[r]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]));
        }
        return n;
      }
      var l = r.createContext({}),
        s = function (e) {
          var t = r.useContext(l),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : a(a({}, t), e)), i;
        },
        c = function (e) {
          var t = s(e.components);
          return r.createElement(l.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        f = r.forwardRef(function (e, t) {
          var i = e.components,
            n = e.mdxType,
            d = e.originalType,
            l = e.parentName,
            c = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = s(i),
            f = n,
            m = p[''.concat(l, '.').concat(f)] || p[f] || u[f] || d;
          return i
            ? r.createElement(m, a(a({ ref: t }, c), {}, { components: i }))
            : r.createElement(m, a({ ref: t }, c));
        });
      function m(e, t) {
        var i = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var d = i.length,
            a = new Array(d);
          a[0] = f;
          var o = {};
          for (var l in t) hasOwnProperty.call(t, l) && (o[l] = t[l]);
          (o.originalType = e), (o[p] = 'string' == typeof e ? e : n), (a[1] = o);
          for (var s = 2; s < d; s++) a[s] = i[s];
          return r.createElement.apply(null, a);
        }
        return r.createElement.apply(null, i);
      }
      f.displayName = 'MDXCreateElement';
    },
    4397: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => l,
          contentTitle: () => a,
          default: () => u,
          frontMatter: () => d,
          metadata: () => o,
          toc: () => s,
        });
      var r = i(7896),
        n = (i(2784), i(876));
      const d = {
          id: 'DidModuleConfig',
          title: 'Interface: DidModuleConfig',
          sidebar_label: 'DidModuleConfig',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        a = void 0,
        o = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/DidModuleConfig',
          id: 'lisk-decentralized-identifier/interfaces/DidModuleConfig',
          title: 'Interface: DidModuleConfig',
          description: 'Properties',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/DidModuleConfig.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/DidModuleConfig',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/DidModuleConfig',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'DidModuleConfig',
            title: 'Interface: DidModuleConfig',
            sidebar_label: 'DidModuleConfig',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'DidMethod', permalink: '/docs/lisk-decentralized-identifier/interfaces/DidMethod' },
          next: {
            title: 'DocumentLoaderResult',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/DocumentLoaderResult',
          },
        },
        l = {},
        s = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'autoCreateAddressDID', id: 'autocreateaddressdid', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'chainspace', id: 'chainspace', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
        ],
        c = { toc: s },
        p = 'wrapper';
      function u(e) {
        let { components: t, ...i } = e;
        return (0, n.kt)(
          p,
          (0, r.Z)({}, c, i, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, n.kt)('h3', { id: 'autocreateaddressdid' }, 'autoCreateAddressDID'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'autoCreateAddressDID'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'boolean'),
          ),
          (0, n.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/types/config.ts#L3',
              },
              'packages/lisk-decentralized-identifier/src/types/config.ts:3',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'chainspace' }, 'chainspace'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'chainspace'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, n.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/types/config.ts#L2',
              },
              'packages/lisk-decentralized-identifier/src/types/config.ts:2',
            ),
          ),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
