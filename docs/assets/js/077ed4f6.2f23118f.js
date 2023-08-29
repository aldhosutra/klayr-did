'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [2484],
  {
    876: (e, t, a) => {
      a.d(t, { Zo: () => p, kt: () => N });
      var n = a(2784);
      function d(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = a),
          e
        );
      }
      function i(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(a), !0).forEach(function (t) {
                d(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : i(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var a,
          n,
          d = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              d = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++) (a = i[n]), t.indexOf(a) >= 0 || (d[a] = e[a]);
            return d;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (a = i[n]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (d[a] = e[a]));
        }
        return d;
      }
      var o = n.createContext({}),
        m = function (e) {
          var t = n.useContext(o),
            a = t;
          return e && (a = 'function' == typeof e ? e(t) : r(r({}, t), e)), a;
        },
        p = function (e) {
          var t = m(e.components);
          return n.createElement(o.Provider, { value: t }, e.children);
        },
        s = 'mdxType',
        k = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        c = n.forwardRef(function (e, t) {
          var a = e.components,
            d = e.mdxType,
            i = e.originalType,
            o = e.parentName,
            p = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = m(a),
            c = d,
            N = s[''.concat(o, '.').concat(c)] || s[c] || k[c] || i;
          return a
            ? n.createElement(N, r(r({ ref: t }, p), {}, { components: a }))
            : n.createElement(N, r({ ref: t }, p));
        });
      function N(e, t) {
        var a = arguments,
          d = t && t.mdxType;
        if ('string' == typeof e || d) {
          var i = a.length,
            r = new Array(i);
          r[0] = c;
          var l = {};
          for (var o in t) hasOwnProperty.call(t, o) && (l[o] = t[o]);
          (l.originalType = e), (l[s] = 'string' == typeof e ? e : d), (r[1] = l);
          for (var m = 2; m < i; m++) r[m] = a[m];
          return n.createElement.apply(null, r);
        }
        return n.createElement.apply(null, a);
      }
      c.displayName = 'MDXCreateElement';
    },
    6833: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => o,
          contentTitle: () => r,
          default: () => k,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => m,
        });
      var n = a(7896),
        d = (a(2784), a(876));
      const i = {
          id: 'modules',
          title: 'lisk-did',
          sidebar_label: 'Exports',
          sidebar_position: 0.5,
          custom_edit_url: null,
        },
        r = void 0,
        l = {
          unversionedId: 'lisk-did/modules',
          id: 'lisk-did/modules',
          title: 'lisk-did',
          description: 'Namespaces',
          source: '@site/docs/lisk-did/modules.md',
          sourceDirName: 'lisk-did',
          slug: '/lisk-did/modules',
          permalink: '/docs/lisk-did/modules',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0.5,
          frontMatter: {
            id: 'modules',
            title: 'lisk-did',
            sidebar_label: 'Exports',
            sidebar_position: 0.5,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'Readme', permalink: '/docs/lisk-did/' },
          next: { title: 'did', permalink: '/docs/lisk-did/namespaces/did' },
        },
        o = {},
        m = [
          { value: 'Namespaces', id: 'namespaces', level: 2 },
          { value: 'Classes', id: 'classes', level: 2 },
          { value: 'Variables', id: 'variables', level: 2 },
          { value: 'default', id: 'default', level: 3 },
          { value: 'Type declaration', id: 'type-declaration', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
        ],
        p = { toc: m },
        s = 'wrapper';
      function k(e) {
        let { components: t, ...a } = e;
        return (0, d.kt)(
          s,
          (0, n.Z)({}, p, a, { components: t, mdxType: 'MDXLayout' }),
          (0, d.kt)('h2', { id: 'namespaces' }, 'Namespaces'),
          (0, d.kt)(
            'ul',
            null,
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)('a', { parentName: 'li', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)('a', { parentName: 'li', href: '/docs/lisk-did/namespaces/vc' }, 'vc'),
            ),
          ),
          (0, d.kt)('h2', { id: 'classes' }, 'Classes'),
          (0, d.kt)(
            'ul',
            null,
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did/classes/AddControllersCommand' },
                'AddControllersCommand',
              ),
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)('a', { parentName: 'li', href: '/docs/lisk-did/classes/AddKeysCommand' }, 'AddKeysCommand'),
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did/classes/AddServiceEndpointCommand' },
                'AddServiceEndpointCommand',
              ),
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)('a', { parentName: 'li', href: '/docs/lisk-did/classes/CreateCommand' }, 'CreateCommand'),
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did/classes/DeactivateCommand' },
                'DeactivateCommand',
              ),
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)('a', { parentName: 'li', href: '/docs/lisk-did/classes/DidEndpoint' }, 'DidEndpoint'),
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)('a', { parentName: 'li', href: '/docs/lisk-did/classes/DidMethod' }, 'DidMethod'),
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)('a', { parentName: 'li', href: '/docs/lisk-did/classes/DidModule' }, 'DidModule'),
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did/classes/RemoveControllersCommand' },
                'RemoveControllersCommand',
              ),
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did/classes/RemoveKeysCommand' },
                'RemoveKeysCommand',
              ),
            ),
            (0, d.kt)(
              'li',
              { parentName: 'ul' },
              (0, d.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-did/classes/RemoveServiceEndpointCommand' },
                'RemoveServiceEndpointCommand',
              ),
            ),
          ),
          (0, d.kt)('h2', { id: 'variables' }, 'Variables'),
          (0, d.kt)('h3', { id: 'default' }, 'default'),
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('strong', { parentName: 'p' }, 'default'),
            ': ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Object'),
          ),
          (0, d.kt)('h4', { id: 'type-declaration' }, 'Type declaration'),
          (0, d.kt)(
            'table',
            null,
            (0, d.kt)(
              'thead',
              { parentName: 'table' },
              (0, d.kt)(
                'tr',
                { parentName: 'thead' },
                (0, d.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, d.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, d.kt)(
              'tbody',
              { parentName: 'table' },
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'AddControllersCommand'),
                ),
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/classes/AddControllersCommand' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'AddControllersCommand'),
                  ),
                ),
              ),
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'AddKeysCommand'),
                ),
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/classes/AddKeysCommand' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'AddKeysCommand'),
                  ),
                ),
              ),
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'AddServiceEndpointCommand'),
                ),
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/classes/AddServiceEndpointCommand' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'AddServiceEndpointCommand'),
                  ),
                ),
              ),
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'CreateCommand'),
                ),
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/classes/CreateCommand' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'CreateCommand'),
                  ),
                ),
              ),
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'DeactivateCommand'),
                ),
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/classes/DeactivateCommand' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'DeactivateCommand'),
                  ),
                ),
              ),
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'DidEndpoint'),
                ),
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/classes/DidEndpoint' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'DidEndpoint'),
                  ),
                ),
              ),
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'DidMethod'),
                ),
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/classes/DidMethod' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'DidMethod'),
                  ),
                ),
              ),
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'DidModule'),
                ),
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/classes/DidModule' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'DidModule'),
                  ),
                ),
              ),
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'RemoveControllersCommand'),
                ),
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/classes/RemoveControllersCommand' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'RemoveControllersCommand'),
                  ),
                ),
              ),
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'RemoveKeysCommand'),
                ),
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/classes/RemoveKeysCommand' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'RemoveKeysCommand'),
                  ),
                ),
              ),
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'RemoveServiceEndpointCommand'),
                ),
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'typeof ',
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/classes/RemoveServiceEndpointCommand' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'RemoveServiceEndpointCommand'),
                  ),
                ),
              ),
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'did'),
                ),
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '{ ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'client'),
                  ': ',
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/namespaces/did.client' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'client'),
                  ),
                  ' ; ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'cryptography'),
                  ': ',
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/namespaces/did.cryptography' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'cryptography'),
                  ),
                  ' ; ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'resolver'),
                  ': ',
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/namespaces/did.resolver' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'resolver'),
                  ),
                  ' ; ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'utils'),
                  ': ',
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/namespaces/did.utils' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'utils'),
                  ),
                  ' ; ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'getAddressDIDFromPublicKey'),
                  ': (',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'chainspace'),
                  ': ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ', ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'publicKey'),
                  ': ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                  ') => ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'getDIDDocument'),
                  ': (',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'did'),
                  ': ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ', ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'options'),
                  ': ',
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/namespaces/did#createresolverparam' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'CreateResolverParam'),
                  ),
                  ') => ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'Promise'),
                  '<',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'undefined'),
                  ' ',
                  '|',
                  ' ',
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/interfaces/did.DidDocument' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
                  ),
                  '>',
                  ' ; ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'parseDIDComponent'),
                  ': (',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'did'),
                  ': ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ') => { ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'chainspace'),
                  ': ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'any'),
                  ' ; ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'did'),
                  ': ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'fragment'),
                  ': ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'any'),
                  ' ; ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'method'),
                  ': ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'any'),
                  ' ; ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'namespace'),
                  ': ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'path'),
                  ': ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'any'),
                  ' ; ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'query'),
                  ': ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'any'),
                  ' ; ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'scheme'),
                  ': ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'uniqueId'),
                  ': ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'uri'),
                  ': ',
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  '  }  }',
                ),
              ),
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'did.client'),
                ),
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/namespaces/did.client' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'client'),
                  ),
                ),
              ),
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'did.cryptography'),
                ),
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/namespaces/did.cryptography' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'cryptography'),
                  ),
                ),
              ),
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'did.resolver'),
                ),
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/namespaces/did.resolver' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'resolver'),
                  ),
                ),
              ),
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'did.utils'),
                ),
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/namespaces/did.utils' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'utils'),
                  ),
                ),
              ),
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'did.getAddressDIDFromPublicKey'),
                ),
                (0, d.kt)('td', { parentName: 'tr', align: 'left' }, '[object Object]'),
              ),
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'did.getDIDDocument'),
                ),
                (0, d.kt)('td', { parentName: 'tr', align: 'left' }, '[object Object]'),
              ),
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'did.parseDIDComponent'),
                ),
                (0, d.kt)('td', { parentName: 'tr', align: 'left' }, '[object Object]'),
              ),
              (0, d.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)('inlineCode', { parentName: 'td' }, 'vc'),
                ),
                (0, d.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, d.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/namespaces/vc' },
                    (0, d.kt)('inlineCode', { parentName: 'a' }, 'vc'),
                  ),
                ),
              ),
            ),
          ),
          (0, d.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, d.kt)(
            'p',
            null,
            (0, d.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-did/src/index.ts#L9',
              },
              'packages/lisk-did/src/index.ts:9',
            ),
          ),
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
