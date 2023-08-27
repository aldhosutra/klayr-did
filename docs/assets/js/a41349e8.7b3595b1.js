'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [1725],
  {
    876: (e, t, r) => {
      r.d(t, { Zo: () => o, kt: () => u });
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
      function d(e) {
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
      function l(e, t) {
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
      var s = n.createContext({}),
        c = function (e) {
          var t = n.useContext(s),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : d(d({}, t), e)), r;
        },
        o = function (e) {
          var t = c(e.components);
          return n.createElement(s.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
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
            s = e.parentName,
            o = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = c(r),
            f = i,
            u = p[''.concat(s, '.').concat(f)] || p[f] || m[f] || a;
          return r
            ? n.createElement(u, d(d({ ref: t }, o), {}, { components: r }))
            : n.createElement(u, d({ ref: t }, o));
        });
      function u(e, t) {
        var r = arguments,
          i = t && t.mdxType;
        if ('string' == typeof e || i) {
          var a = r.length,
            d = new Array(a);
          d[0] = f;
          var l = {};
          for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
          (l.originalType = e), (l[p] = 'string' == typeof e ? e : i), (d[1] = l);
          for (var c = 2; c < a; c++) d[c] = r[c];
          return n.createElement.apply(null, d);
        }
        return n.createElement.apply(null, r);
      }
      f.displayName = 'MDXCreateElement';
    },
    5347: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => s,
          contentTitle: () => d,
          default: () => m,
          frontMatter: () => a,
          metadata: () => l,
          toc: () => c,
        });
      var n = r(7896),
        i = (r(2784), r(876));
      const a = {
          id: 'CreateParam',
          title: 'Interface: CreateParam',
          sidebar_label: 'CreateParam',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        d = void 0,
        l = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/CreateParam',
          id: 'lisk-decentralized-identifier/interfaces/CreateParam',
          title: 'Interface: CreateParam',
          description: 'Properties',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/CreateParam.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/CreateParam',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/CreateParam',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'CreateParam',
            title: 'Interface: CreateParam',
            sidebar_label: 'CreateParam',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'CipherInterface',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/CipherInterface',
          },
          next: {
            title: 'DeactivateParam',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/DeactivateParam',
          },
        },
        s = {},
        c = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'controllers', id: 'controllers', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'did', id: 'did', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'keys', id: 'keys', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
        ],
        o = { toc: c },
        p = 'wrapper';
      function m(e) {
        let { components: t, ...r } = e;
        return (0, i.kt)(
          p,
          (0, n.Z)({}, o, r, { components: t, mdxType: 'MDXLayout' }),
          (0, i.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, i.kt)('h3', { id: 'controllers' }, 'controllers'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'controllers'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '[]',
          ),
          (0, i.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/types/commands/create_command.ts#L6',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/create_command.ts:6',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'did' }, 'did'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'did'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, i.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/types/commands/create_command.ts#L4',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/create_command.ts:4',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'keys' }, 'keys'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'keys'),
            ': ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/KeysCommand' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'KeysCommand'),
            ),
            '[]',
          ),
          (0, i.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/types/commands/create_command.ts#L5',
              },
              'packages/lisk-decentralized-identifier/src/types/commands/create_command.ts:5',
            ),
          ),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
