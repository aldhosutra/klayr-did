'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [9502],
  {
    876: (e, t, a) => {
      a.d(t, { Zo: () => s, kt: () => u });
      var d = a(2784);
      function n(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = a),
          e
        );
      }
      function r(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(e);
          t &&
            (d = d.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, d);
        }
        return a;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(a), !0).forEach(function (t) {
                n(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : r(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      function i(e, t) {
        if (null == e) return {};
        var a,
          d,
          n = (function (e, t) {
            if (null == e) return {};
            var a,
              d,
              n = {},
              r = Object.keys(e);
            for (d = 0; d < r.length; d++) (a = r[d]), t.indexOf(a) >= 0 || (n[a] = e[a]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (d = 0; d < r.length; d++)
            (a = r[d]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]));
        }
        return n;
      }
      var o = d.createContext({}),
        m = function (e) {
          var t = d.useContext(o),
            a = t;
          return e && (a = 'function' == typeof e ? e(t) : l(l({}, t), e)), a;
        },
        s = function (e) {
          var t = m(e.components);
          return d.createElement(o.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        k = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return d.createElement(d.Fragment, {}, t);
          },
        },
        c = d.forwardRef(function (e, t) {
          var a = e.components,
            n = e.mdxType,
            r = e.originalType,
            o = e.parentName,
            s = i(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = m(a),
            c = n,
            u = p[''.concat(o, '.').concat(c)] || p[c] || k[c] || r;
          return a
            ? d.createElement(u, l(l({ ref: t }, s), {}, { components: a }))
            : d.createElement(u, l({ ref: t }, s));
        });
      function u(e, t) {
        var a = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var r = a.length,
            l = new Array(r);
          l[0] = c;
          var i = {};
          for (var o in t) hasOwnProperty.call(t, o) && (i[o] = t[o]);
          (i.originalType = e), (i[p] = 'string' == typeof e ? e : n), (l[1] = i);
          for (var m = 2; m < r; m++) l[m] = a[m];
          return d.createElement.apply(null, l);
        }
        return d.createElement.apply(null, a);
      }
      c.displayName = 'MDXCreateElement';
    },
    367: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => o,
          contentTitle: () => l,
          default: () => k,
          frontMatter: () => r,
          metadata: () => i,
          toc: () => m,
        });
      var d = a(7896),
        n = (a(2784), a(876));
      const r = {
          id: 'modules',
          title: '@lisk-did/lisk-did-module',
          sidebar_label: 'Exports',
          sidebar_position: 0.5,
          custom_edit_url: null,
        },
        l = void 0,
        i = {
          unversionedId: 'lisk-did-module/modules',
          id: 'lisk-did-module/modules',
          title: '@lisk-did/lisk-did-module',
          description: 'Classes',
          source: '@site/docs/lisk-did-module/modules.md',
          sourceDirName: 'lisk-did-module',
          slug: '/lisk-did-module/modules',
          permalink: '/docs/lisk-did-module/modules',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0.5,
          frontMatter: {
            id: 'modules',
            title: '@lisk-did/lisk-did-module',
            sidebar_label: 'Exports',
            sidebar_position: 0.5,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'Readme', permalink: '/docs/lisk-did-module/' },
          next: { title: 'AddControllersCommand', permalink: '/docs/lisk-did-module/classes/AddControllersCommand' },
        },
        o = {},
        m = [
          { value: 'Classes', id: 'classes', level: 2 },
          { value: 'Variables', id: 'variables', level: 2 },
          { value: 'default', id: 'default', level: 3 },
          { value: 'Type declaration', id: 'type-declaration', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
        ],
        s = { toc: m },
        p = 'wrapper';
      function k(e) {
        let { components: t, ...a } = e;
        return (0, n.kt)(
          p,
          (0, d.Z)({}, s, a, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)('h2', { id: 'classes' }, 'Classes'),
          (0, n.kt)(
            'ul',
            null,
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did-module/classes/AddControllersCommand' },
                'AddControllersCommand',
              ),
            ),
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did-module/classes/AddKeysCommand' },
                'AddKeysCommand',
              ),
            ),
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did-module/classes/AddServiceEndpointCommand' },
                'AddServiceEndpointCommand',
              ),
            ),
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did-module/classes/CreateCommand' },
                'CreateCommand',
              ),
            ),
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did-module/classes/DeactivateCommand' },
                'DeactivateCommand',
              ),
            ),
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)('a', { parentName: 'li', href: '/docs/lisk-did-module/classes/DidEndpoint' }, 'DidEndpoint'),
            ),
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)('a', { parentName: 'li', href: '/docs/lisk-did-module/classes/DidMethod' }, 'DidMethod'),
            ),
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)('a', { parentName: 'li', href: '/docs/lisk-did-module/classes/DidModule' }, 'DidModule'),
            ),
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did-module/classes/RemoveControllersCommand' },
                'RemoveControllersCommand',
              ),
            ),
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did-module/classes/RemoveKeysCommand' },
                'RemoveKeysCommand',
              ),
            ),
            (0, n.kt)(
              'li',
              { parentName: 'ul' },
              (0, n.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did-module/classes/RemoveServiceEndpointCommand' },
                'RemoveServiceEndpointCommand',
              ),
            ),
          ),
          (0, n.kt)('h2', { id: 'variables' }, 'Variables'),
          (0, n.kt)('h3', { id: 'default' }, 'default'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'default'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'Object'),
          ),
          (0, n.kt)('h4', { id: 'type-declaration' }, 'Type declaration'),
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
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'AddControllersCommand'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did-module/classes/AddControllersCommand' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'AddControllersCommand'),
                  ),
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'AddKeysCommand'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did-module/classes/AddKeysCommand' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'AddKeysCommand'),
                  ),
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'AddServiceEndpointCommand'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did-module/classes/AddServiceEndpointCommand' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'AddServiceEndpointCommand'),
                  ),
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'CreateCommand'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did-module/classes/CreateCommand' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'CreateCommand'),
                  ),
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'DeactivateCommand'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did-module/classes/DeactivateCommand' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'DeactivateCommand'),
                  ),
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'DidEndpoint'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did-module/classes/DidEndpoint' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'DidEndpoint'),
                  ),
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'DidMethod'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did-module/classes/DidMethod' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'DidMethod'),
                  ),
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'DidModule'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did-module/classes/DidModule' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'DidModule'),
                  ),
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'RemoveControllersCommand'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did-module/classes/RemoveControllersCommand' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'RemoveControllersCommand'),
                  ),
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'RemoveKeysCommand'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did-module/classes/RemoveKeysCommand' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'RemoveKeysCommand'),
                  ),
                ),
              ),
              (0, n.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, n.kt)('inlineCode', { parentName: 'td' }, 'RemoveServiceEndpointCommand'),
                ),
                (0, n.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, n.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did-module/classes/RemoveServiceEndpointCommand' },
                    (0, n.kt)('inlineCode', { parentName: 'a' }, 'RemoveServiceEndpointCommand'),
                  ),
                ),
              ),
            ),
          ),
          (0, n.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-did-module/src/index.ts#L25',
              },
              'packages/lisk-did-module/src/index.ts:25',
            ),
          ),
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
