'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [7848],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => p, kt: () => u });
      var n = r(2784);
      function i(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
          e
        );
      }
      function a(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function d(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      var o = n.createContext({}),
        s = function (e) {
          var t = n.useContext(o),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : l(l({}, t), e)), r;
        },
        p = function (e) {
          var t = s(e.components);
          return n.createElement(o.Provider, { value: t }, e.children);
        },
        c = 'mdxType',
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        f = n.forwardRef(function (e, t) {
          var r = e.components,
            i = e.mdxType,
            a = e.originalType,
            o = e.parentName,
            p = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            c = s(r),
            f = i,
            u = c[''.concat(o, '.').concat(f)] || c[f] || m[f] || a;
          return r
            ? n.createElement(u, l(l({ ref: t }, p), {}, { components: r }))
            : n.createElement(u, l({ ref: t }, p));
        });
      function u(e, t) {
        var r = arguments,
          i = t && t.mdxType;
        if ('string' == typeof e || i) {
          var a = r.length,
            l = new Array(a);
          l[0] = f;
          var d = {};
          for (var o in t) hasOwnProperty.call(t, o) && (d[o] = t[o]);
          (d.originalType = e), (d[c] = 'string' == typeof e ? e : i), (l[1] = d);
          for (var s = 2; s < a; s++) l[s] = r[s];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, r);
      }
      f.displayName = 'MDXCreateElement';
    },
    735: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => o,
          contentTitle: () => l,
          default: () => m,
          frontMatter: () => a,
          metadata: () => d,
          toc: () => s,
        });
      var n = r(7896),
        i = (r(2784), r(876));
      const a = {
          id: 'BaseResolver',
          title: 'Interface: BaseResolver',
          sidebar_label: 'BaseResolver',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        l = void 0,
        d = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/BaseResolver',
          id: 'lisk-decentralized-identifier/interfaces/BaseResolver',
          title: 'Interface: BaseResolver',
          description: 'Properties',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/BaseResolver.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/BaseResolver',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/BaseResolver',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'BaseResolver',
            title: 'Interface: BaseResolver',
            sidebar_label: 'BaseResolver',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'AddServiceEndpointParam',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/AddServiceEndpointParam',
          },
          next: {
            title: 'CipherInterface',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/CipherInterface',
          },
        },
        o = {},
        s = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'get', id: 'get', level: 3 },
          { value: 'Type declaration', id: 'type-declaration', level: 4 },
          { value: 'Parameters', id: 'parameters', level: 5 },
          { value: 'Returns', id: 'returns', level: 5 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
        ],
        p = { toc: s },
        c = 'wrapper';
      function m(e) {
        let { components: t, ...r } = e;
        return (0, i.kt)(
          c,
          (0, n.Z)({}, p, r, { components: t, mdxType: 'MDXLayout' }),
          (0, i.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, i.kt)('h3', { id: 'get' }, 'get'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'get'),
            ': (',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '__namedParameters'),
            ': { ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'did?'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ' ; ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'url?'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '  }) => ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/DidDocument' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
            ),
            '>',
          ),
          (0, i.kt)('h4', { id: 'type-declaration' }, 'Type declaration'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 (',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '\xabdestructured\xbb'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/DidDocument' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
            ),
            '>',
          ),
          (0, i.kt)('h5', { id: 'parameters' }, 'Parameters'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, '\xabdestructured\xbb'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Object'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '\u203a\xa0',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'did?'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '\u203a\xa0',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'url?'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h5', { id: 'returns' }, 'Returns'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/DidDocument' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
            ),
            '>',
          ),
          (0, i.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/types/resolver.ts#L13',
              },
              'packages/lisk-decentralized-identifier/src/types/resolver.ts:13',
            ),
          ),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
