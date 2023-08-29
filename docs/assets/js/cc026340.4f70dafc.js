'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [5315],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => s, kt: () => c });
      var i = n(2784);
      function a(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function d(e, t) {
        if (null == e) return {};
        var n,
          i,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              a = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (n = r[i]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var o = i.createContext({}),
        p = function (e) {
          var t = i.useContext(o),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : l(l({}, t), e)), n;
        },
        s = function (e) {
          var t = p(e.components);
          return i.createElement(o.Provider, { value: t }, e.children);
        },
        m = 'mdxType',
        k = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return i.createElement(i.Fragment, {}, t);
          },
        },
        u = i.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            r = e.originalType,
            o = e.parentName,
            s = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            m = p(n),
            u = a,
            c = m[''.concat(o, '.').concat(u)] || m[u] || k[u] || r;
          return n
            ? i.createElement(c, l(l({ ref: t }, s), {}, { components: n }))
            : i.createElement(c, l({ ref: t }, s));
        });
      function c(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var r = n.length,
            l = new Array(r);
          l[0] = u;
          var d = {};
          for (var o in t) hasOwnProperty.call(t, o) && (d[o] = t[o]);
          (d.originalType = e), (d[m] = 'string' == typeof e ? e : a), (l[1] = d);
          for (var p = 2; p < r; p++) l[p] = n[p];
          return i.createElement.apply(null, l);
        }
        return i.createElement.apply(null, n);
      }
      u.displayName = 'MDXCreateElement';
    },
    1132: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => o,
          contentTitle: () => l,
          default: () => k,
          frontMatter: () => r,
          metadata: () => d,
          toc: () => p,
        });
      var i = n(7896),
        a = (n(2784), n(876));
      const r = {
          id: 'DidEndpoint',
          title: 'Class: DidEndpoint',
          sidebar_label: 'DidEndpoint',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        l = void 0,
        d = {
          unversionedId: 'lisk-did-module/classes/DidEndpoint',
          id: 'lisk-did-module/classes/DidEndpoint',
          title: 'Class: DidEndpoint',
          description: 'Hierarchy',
          source: '@site/docs/lisk-did-module/classes/DidEndpoint.md',
          sourceDirName: 'lisk-did-module/classes',
          slug: '/lisk-did-module/classes/DidEndpoint',
          permalink: '/docs/lisk-did-module/classes/DidEndpoint',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'DidEndpoint',
            title: 'Class: DidEndpoint',
            sidebar_label: 'DidEndpoint',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'DeactivateCommand', permalink: '/docs/lisk-did-module/classes/DeactivateCommand' },
          next: { title: 'DidMethod', permalink: '/docs/lisk-did-module/classes/DidMethod' },
        },
        o = {},
        p = [
          { value: 'Hierarchy', id: 'hierarchy', level: 2 },
          { value: 'Implements', id: 'implements', level: 2 },
          { value: 'Constructors', id: 'constructors', level: 2 },
          { value: 'constructor', id: 'constructor', level: 3 },
          { value: 'Parameters', id: 'parameters', level: 4 },
          { value: 'Inherited from', id: 'inherited-from', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'autoCreateAddressDID', id: 'autocreateaddressdid', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'chainspace', id: 'chainspace', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'offchainStores', id: 'offchainstores', level: 3 },
          { value: 'Inherited from', id: 'inherited-from-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'stores', id: 'stores', level: 3 },
          { value: 'Inherited from', id: 'inherited-from-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
          { value: 'Methods', id: 'methods', level: 2 },
          { value: 'authorize', id: 'authorize', level: 3 },
          { value: 'Parameters', id: 'parameters-1', level: 4 },
          { value: 'Returns', id: 'returns', level: 4 },
          { value: 'Implementation of', id: 'implementation-of', level: 4 },
          { value: 'Defined in', id: 'defined-in-5', level: 4 },
          { value: 'getConfig', id: 'getconfig', level: 3 },
          { value: 'Parameters', id: 'parameters-2', level: 4 },
          { value: 'Returns', id: 'returns-1', level: 4 },
          { value: 'Implementation of', id: 'implementation-of-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-6', level: 4 },
          { value: 'getNonce', id: 'getnonce', level: 3 },
          { value: 'Parameters', id: 'parameters-3', level: 4 },
          { value: 'Returns', id: 'returns-2', level: 4 },
          { value: 'Implementation of', id: 'implementation-of-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-7', level: 4 },
          { value: 'init', id: 'init', level: 3 },
          { value: 'Parameters', id: 'parameters-4', level: 4 },
          { value: 'Returns', id: 'returns-3', level: 4 },
          { value: 'Implementation of', id: 'implementation-of-3', level: 4 },
          { value: 'Defined in', id: 'defined-in-8', level: 4 },
          { value: 'read', id: 'read', level: 3 },
          { value: 'Parameters', id: 'parameters-5', level: 4 },
          { value: 'Returns', id: 'returns-4', level: 4 },
          { value: 'Implementation of', id: 'implementation-of-4', level: 4 },
          { value: 'Defined in', id: 'defined-in-9', level: 4 },
        ],
        s = { toc: p },
        m = 'wrapper';
      function k(e) {
        let { components: t, ...n } = e;
        return (0, a.kt)(
          m,
          (0, i.Z)({}, s, n, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)('h2', { id: 'hierarchy' }, 'Hierarchy'),
          (0, a.kt)(
            'ul',
            null,
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              (0, a.kt)('p', { parentName: 'li' }, (0, a.kt)('inlineCode', { parentName: 'p' }, 'BaseEndpoint')),
              (0, a.kt)(
                'p',
                { parentName: 'li' },
                '\u21b3 ',
                (0, a.kt)(
                  'strong',
                  { parentName: 'p' },
                  (0, a.kt)('inlineCode', { parentName: 'strong' }, 'DidEndpoint'),
                ),
              ),
            ),
          ),
          (0, a.kt)('h2', { id: 'implements' }, 'Implements'),
          (0, a.kt)(
            'ul',
            null,
            (0, a.kt)('li', { parentName: 'ul' }, (0, a.kt)('inlineCode', { parentName: 'li' }, 'DidEndpoint')),
          ),
          (0, a.kt)('h2', { id: 'constructors' }, 'Constructors'),
          (0, a.kt)('h3', { id: 'constructor' }, 'constructor'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'new DidEndpoint'),
            '(',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'stores'),
            ', ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'offchainStores'),
            ')',
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
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'stores'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'NamedRegistry'),
                ),
              ),
              (0, a.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'offchainStores'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'NamedRegistry'),
                ),
              ),
            ),
          ),
          (0, a.kt)('h4', { id: 'inherited-from' }, 'Inherited from'),
          (0, a.kt)('p', null, 'BaseEndpoint.constructor'),
          (0, a.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, a.kt)('p', null, 'node_modules/lisk-framework/dist-node/modules/base_endpoint.d.ts:6'),
          (0, a.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, a.kt)('h3', { id: 'autocreateaddressdid' }, 'autoCreateAddressDID'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Private'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'autoCreateAddressDID'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'boolean'),
            ' = ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'false'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-did-module/src/endpoint.ts#L17',
              },
              'packages/lisk-did-module/src/endpoint.ts:17',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'chainspace' }, 'chainspace'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Private'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'chainspace'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ' = ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, "''"),
          ),
          (0, a.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-did-module/src/endpoint.ts#L16',
              },
              'packages/lisk-did-module/src/endpoint.ts:16',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'offchainstores' }, 'offchainStores'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Protected'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'offchainStores'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'NamedRegistry'),
          ),
          (0, a.kt)('h4', { id: 'inherited-from-1' }, 'Inherited from'),
          (0, a.kt)('p', null, 'BaseEndpoint.offchainStores'),
          (0, a.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, a.kt)('p', null, 'node_modules/lisk-framework/dist-node/modules/base_endpoint.d.ts:4'),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'stores' }, 'stores'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Protected'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'stores'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'NamedRegistry'),
          ),
          (0, a.kt)('h4', { id: 'inherited-from-2' }, 'Inherited from'),
          (0, a.kt)('p', null, 'BaseEndpoint.stores'),
          (0, a.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, a.kt)('p', null, 'node_modules/lisk-framework/dist-node/modules/base_endpoint.d.ts:3'),
          (0, a.kt)('h2', { id: 'methods' }, 'Methods'),
          (0, a.kt)('h3', { id: 'authorize' }, 'authorize'),
          (0, a.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'authorize'),
            '(',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'ctx'),
            '): ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'AuthorizationResult'),
            '[]',
            '>',
          ),
          (0, a.kt)('h4', { id: 'parameters-1' }, 'Parameters'),
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
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'ctx'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'ModuleEndpointContext'),
                ),
              ),
            ),
          ),
          (0, a.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'AuthorizationResult'),
            '[]',
            '>',
          ),
          (0, a.kt)('h4', { id: 'implementation-of' }, 'Implementation of'),
          (0, a.kt)('p', null, 'DidEndpointInterface.authorize'),
          (0, a.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-did-module/src/endpoint.ts#L24',
              },
              'packages/lisk-did-module/src/endpoint.ts:24',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'getconfig' }, 'getConfig'),
          (0, a.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'getConfig'),
            '(',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '_ctx'),
            '): ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'DidModuleConfig'),
            '>',
          ),
          (0, a.kt)('h4', { id: 'parameters-2' }, 'Parameters'),
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
                  (0, a.kt)('inlineCode', { parentName: 'td' }, '_ctx'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'ModuleEndpointContext'),
                ),
              ),
            ),
          ),
          (0, a.kt)('h4', { id: 'returns-1' }, 'Returns'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'DidModuleConfig'),
            '>',
          ),
          (0, a.kt)('h4', { id: 'implementation-of-1' }, 'Implementation of'),
          (0, a.kt)('p', null, 'DidEndpointInterface.getConfig'),
          (0, a.kt)('h4', { id: 'defined-in-6' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-did-module/src/endpoint.ts#L90',
              },
              'packages/lisk-did-module/src/endpoint.ts:90',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'getnonce' }, 'getNonce'),
          (0, a.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'getNonce'),
            '(',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'ctx'),
            '): ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<{ ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'nonce'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '  }',
            '>',
          ),
          (0, a.kt)('h4', { id: 'parameters-3' }, 'Parameters'),
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
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'ctx'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'ModuleEndpointContext'),
                ),
              ),
            ),
          ),
          (0, a.kt)('h4', { id: 'returns-2' }, 'Returns'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<{ ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'nonce'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '  }',
            '>',
          ),
          (0, a.kt)('h4', { id: 'implementation-of-2' }, 'Implementation of'),
          (0, a.kt)('p', null, 'DidEndpointInterface.getNonce'),
          (0, a.kt)('h4', { id: 'defined-in-7' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-did-module/src/endpoint.ts#L80',
              },
              'packages/lisk-did-module/src/endpoint.ts:80',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'init' }, 'init'),
          (0, a.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'init'),
            '(',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'config'),
            '): ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'void'),
          ),
          (0, a.kt)('h4', { id: 'parameters-4' }, 'Parameters'),
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
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'config'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'DidModuleConfig'),
                ),
              ),
            ),
          ),
          (0, a.kt)('h4', { id: 'returns-3' }, 'Returns'),
          (0, a.kt)('p', null, (0, a.kt)('inlineCode', { parentName: 'p' }, 'void')),
          (0, a.kt)('h4', { id: 'implementation-of-3' }, 'Implementation of'),
          (0, a.kt)('p', null, 'DidEndpointInterface.init'),
          (0, a.kt)('h4', { id: 'defined-in-8' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-did-module/src/endpoint.ts#L19',
              },
              'packages/lisk-did-module/src/endpoint.ts:19',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'read' }, 'read'),
          (0, a.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, a.kt)('strong', { parentName: 'p' }, 'read'),
            '(',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'ctx'),
            '): ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'undefined'),
            ' ',
            '|',
            ' ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'DidDocument'),
            '>',
          ),
          (0, a.kt)('h4', { id: 'parameters-5' }, 'Parameters'),
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
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'ctx'),
                ),
                (0, a.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, a.kt)('inlineCode', { parentName: 'td' }, 'ModuleEndpointContext'),
                ),
              ),
            ),
          ),
          (0, a.kt)('h4', { id: 'returns-4' }, 'Returns'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'undefined'),
            ' ',
            '|',
            ' ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'DidDocument'),
            '>',
          ),
          (0, a.kt)('h4', { id: 'implementation-of-4' }, 'Implementation of'),
          (0, a.kt)('p', null, 'DidEndpointInterface.read'),
          (0, a.kt)('h4', { id: 'defined-in-9' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-did-module/src/endpoint.ts#L71',
              },
              'packages/lisk-did-module/src/endpoint.ts:71',
            ),
          ),
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
