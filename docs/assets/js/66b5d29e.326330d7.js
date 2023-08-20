'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [3277],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => m, kt: () => u });
      var a = n(2784);
      function i(e, t, n) {
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
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          a,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              i = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (n = r[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      }
      var o = a.createContext({}),
        p = function (e) {
          var t = a.useContext(o),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : d(d({}, t), e)), n;
        },
        m = function (e) {
          var t = p(e.components);
          return a.createElement(o.Provider, { value: t }, e.children);
        },
        k = 'mdxType',
        s = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        N = a.forwardRef(function (e, t) {
          var n = e.components,
            i = e.mdxType,
            r = e.originalType,
            o = e.parentName,
            m = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            k = p(n),
            N = i,
            u = k[''.concat(o, '.').concat(N)] || k[N] || s[N] || r;
          return n
            ? a.createElement(u, d(d({ ref: t }, m), {}, { components: n }))
            : a.createElement(u, d({ ref: t }, m));
        });
      function u(e, t) {
        var n = arguments,
          i = t && t.mdxType;
        if ('string' == typeof e || i) {
          var r = n.length,
            d = new Array(r);
          d[0] = N;
          var l = {};
          for (var o in t) hasOwnProperty.call(t, o) && (l[o] = t[o]);
          (l.originalType = e), (l[k] = 'string' == typeof e ? e : i), (d[1] = l);
          for (var p = 2; p < r; p++) d[p] = n[p];
          return a.createElement.apply(null, d);
        }
        return a.createElement.apply(null, n);
      }
      N.displayName = 'MDXCreateElement';
    },
    5479: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => o,
          contentTitle: () => d,
          default: () => s,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => p,
        });
      var a = n(7896),
        i = (n(2784), n(876));
      const r = {
          id: 'DidMethod',
          title: 'Class: DidMethod',
          sidebar_label: 'DidMethod',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        d = void 0,
        l = {
          unversionedId: 'lisk-did-module/classes/DidMethod',
          id: 'lisk-did-module/classes/DidMethod',
          title: 'Class: DidMethod',
          description: 'Hierarchy',
          source: '@site/docs/lisk-did-module/classes/DidMethod.md',
          sourceDirName: 'lisk-did-module/classes',
          slug: '/lisk-did-module/classes/DidMethod',
          permalink: '/docs/lisk-did-module/classes/DidMethod',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'DidMethod',
            title: 'Class: DidMethod',
            sidebar_label: 'DidMethod',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'DidEndpoint', permalink: '/docs/lisk-did-module/classes/DidEndpoint' },
          next: { title: 'DidModule', permalink: '/docs/lisk-did-module/classes/DidModule' },
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
          { value: 'config', id: 'config', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'events', id: 'events', level: 3 },
          { value: 'Inherited from', id: 'inherited-from-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'stores', id: 'stores', level: 3 },
          { value: 'Inherited from', id: 'inherited-from-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'Methods', id: 'methods', level: 2 },
          { value: 'addControllers', id: 'addcontrollers', level: 3 },
          { value: 'Parameters', id: 'parameters-1', level: 4 },
          { value: 'Returns', id: 'returns', level: 4 },
          { value: 'Implementation of', id: 'implementation-of', level: 4 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
          { value: 'addKeys', id: 'addkeys', level: 3 },
          { value: 'Parameters', id: 'parameters-2', level: 4 },
          { value: 'Returns', id: 'returns-1', level: 4 },
          { value: 'Implementation of', id: 'implementation-of-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-5', level: 4 },
          { value: 'addServiceEndpoint', id: 'addserviceendpoint', level: 3 },
          { value: 'Parameters', id: 'parameters-3', level: 4 },
          { value: 'Returns', id: 'returns-2', level: 4 },
          { value: 'Implementation of', id: 'implementation-of-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-6', level: 4 },
          { value: 'authorize', id: 'authorize', level: 3 },
          { value: 'Parameters', id: 'parameters-4', level: 4 },
          { value: 'Returns', id: 'returns-3', level: 4 },
          { value: 'Implementation of', id: 'implementation-of-3', level: 4 },
          { value: 'Defined in', id: 'defined-in-7', level: 4 },
          { value: 'create', id: 'create', level: 3 },
          { value: 'Parameters', id: 'parameters-5', level: 4 },
          { value: 'Returns', id: 'returns-4', level: 4 },
          { value: 'Implementation of', id: 'implementation-of-4', level: 4 },
          { value: 'Defined in', id: 'defined-in-8', level: 4 },
          { value: 'deactivate', id: 'deactivate', level: 3 },
          { value: 'Parameters', id: 'parameters-6', level: 4 },
          { value: 'Returns', id: 'returns-5', level: 4 },
          { value: 'Implementation of', id: 'implementation-of-5', level: 4 },
          { value: 'Defined in', id: 'defined-in-9', level: 4 },
          { value: 'getConfig', id: 'getconfig', level: 3 },
          { value: 'Returns', id: 'returns-6', level: 4 },
          { value: 'Implementation of', id: 'implementation-of-6', level: 4 },
          { value: 'Defined in', id: 'defined-in-10', level: 4 },
          { value: 'getNonce', id: 'getnonce', level: 3 },
          { value: 'Parameters', id: 'parameters-7', level: 4 },
          { value: 'Returns', id: 'returns-7', level: 4 },
          { value: 'Implementation of', id: 'implementation-of-7', level: 4 },
          { value: 'Defined in', id: 'defined-in-11', level: 4 },
          { value: 'init', id: 'init', level: 3 },
          { value: 'Parameters', id: 'parameters-8', level: 4 },
          { value: 'Returns', id: 'returns-8', level: 4 },
          { value: 'Implementation of', id: 'implementation-of-8', level: 4 },
          { value: 'Defined in', id: 'defined-in-12', level: 4 },
          { value: 'read', id: 'read', level: 3 },
          { value: 'Parameters', id: 'parameters-9', level: 4 },
          { value: 'Returns', id: 'returns-9', level: 4 },
          { value: 'Implementation of', id: 'implementation-of-9', level: 4 },
          { value: 'Defined in', id: 'defined-in-13', level: 4 },
          { value: 'removeControllers', id: 'removecontrollers', level: 3 },
          { value: 'Parameters', id: 'parameters-10', level: 4 },
          { value: 'Returns', id: 'returns-10', level: 4 },
          { value: 'Implementation of', id: 'implementation-of-10', level: 4 },
          { value: 'Defined in', id: 'defined-in-14', level: 4 },
          { value: 'removeKeys', id: 'removekeys', level: 3 },
          { value: 'Parameters', id: 'parameters-11', level: 4 },
          { value: 'Returns', id: 'returns-11', level: 4 },
          { value: 'Implementation of', id: 'implementation-of-11', level: 4 },
          { value: 'Defined in', id: 'defined-in-15', level: 4 },
          { value: 'removeServiceEndpoint', id: 'removeserviceendpoint', level: 3 },
          { value: 'Parameters', id: 'parameters-12', level: 4 },
          { value: 'Returns', id: 'returns-12', level: 4 },
          { value: 'Implementation of', id: 'implementation-of-12', level: 4 },
          { value: 'Defined in', id: 'defined-in-16', level: 4 },
        ],
        m = { toc: p },
        k = 'wrapper';
      function s(e) {
        let { components: t, ...n } = e;
        return (0, i.kt)(
          k,
          (0, a.Z)({}, m, n, { components: t, mdxType: 'MDXLayout' }),
          (0, i.kt)('h2', { id: 'hierarchy' }, 'Hierarchy'),
          (0, i.kt)(
            'ul',
            null,
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)('p', { parentName: 'li' }, (0, i.kt)('inlineCode', { parentName: 'p' }, 'BaseMethod')),
              (0, i.kt)(
                'p',
                { parentName: 'li' },
                '\u21b3 ',
                (0, i.kt)(
                  'strong',
                  { parentName: 'p' },
                  (0, i.kt)('inlineCode', { parentName: 'strong' }, 'DidMethod'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h2', { id: 'implements' }, 'Implements'),
          (0, i.kt)(
            'ul',
            null,
            (0, i.kt)('li', { parentName: 'ul' }, (0, i.kt)('inlineCode', { parentName: 'li' }, 'DidMethod')),
          ),
          (0, i.kt)('h2', { id: 'constructors' }, 'Constructors'),
          (0, i.kt)('h3', { id: 'constructor' }, 'constructor'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'new DidMethod'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'stores'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'events'),
            ')',
          ),
          (0, i.kt)('h4', { id: 'parameters' }, 'Parameters'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'stores'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'NamedRegistry'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'events'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'NamedRegistry'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'inherited-from' }, 'Inherited from'),
          (0, i.kt)('p', null, 'BaseMethod.constructor'),
          (0, i.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, i.kt)('p', null, 'node_modules/lisk-framework/dist-node/modules/base_method.d.ts:5'),
          (0, i.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, i.kt)('h3', { id: 'config' }, 'config'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'config'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'DidModuleConfig'),
          ),
          (0, i.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-did-module/src/method.ts#L32',
              },
              'packages/lisk-did-module/src/method.ts:32',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'events' }, 'events'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Protected'),
            ' ',
            (0, i.kt)('strong', { parentName: 'p' }, 'events'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'NamedRegistry'),
          ),
          (0, i.kt)('h4', { id: 'inherited-from-1' }, 'Inherited from'),
          (0, i.kt)('p', null, 'BaseMethod.events'),
          (0, i.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, i.kt)('p', null, 'node_modules/lisk-framework/dist-node/modules/base_method.d.ts:4'),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'stores' }, 'stores'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Protected'),
            ' ',
            (0, i.kt)('strong', { parentName: 'p' }, 'stores'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'NamedRegistry'),
          ),
          (0, i.kt)('h4', { id: 'inherited-from-2' }, 'Inherited from'),
          (0, i.kt)('p', null, 'BaseMethod.stores'),
          (0, i.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, i.kt)('p', null, 'node_modules/lisk-framework/dist-node/modules/base_method.d.ts:3'),
          (0, i.kt)('h2', { id: 'methods' }, 'Methods'),
          (0, i.kt)('h3', { id: 'addcontrollers' }, 'addControllers'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'addControllers'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'senderPublicKey'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'target'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'controllers'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'signer'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'signature?'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'parameters-1' }, 'Parameters'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'senderPublicKey'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'target'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'controllers'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  '[]',
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'signer'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'signature?'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'implementation-of' }, 'Implementation of'),
          (0, i.kt)('p', null, 'DidMethodInterface.addControllers'),
          (0, i.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-did-module/src/method.ts#L141',
              },
              'packages/lisk-did-module/src/method.ts:141',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'addkeys' }, 'addKeys'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'addKeys'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'senderPublicKey'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'target'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'keys'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'signer'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'signature?'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'parameters-2' }, 'Parameters'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'senderPublicKey'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'target'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'keys'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'KeysCommand'),
                  '[]',
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'signer'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'signature?'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns-1' }, 'Returns'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'implementation-of-1' }, 'Implementation of'),
          (0, i.kt)('p', null, 'DidMethodInterface.addKeys'),
          (0, i.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-did-module/src/method.ts#L75',
              },
              'packages/lisk-did-module/src/method.ts:75',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'addserviceendpoint' }, 'addServiceEndpoint'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'addServiceEndpoint'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'senderPublicKey'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'target'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'endpoint'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'signer'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'signature?'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'parameters-3' }, 'Parameters'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'senderPublicKey'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'target'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'endpoint'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'endpoint.id'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'endpoint.serviceEndpoint'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'endpoint.type'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'signer'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'signature?'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns-2' }, 'Returns'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'implementation-of-2' }, 'Implementation of'),
          (0, i.kt)('p', null, 'DidMethodInterface.addServiceEndpoint'),
          (0, i.kt)('h4', { id: 'defined-in-6' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-did-module/src/method.ts#L207',
              },
              'packages/lisk-did-module/src/method.ts:207',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'authorize' }, 'authorize'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'authorize'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'did'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'publicKey'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'AuthorizationResult'),
            '[]',
            '>',
          ),
          (0, i.kt)('h4', { id: 'parameters-4' }, 'Parameters'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'did'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'publicKey'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns-3' }, 'Returns'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'AuthorizationResult'),
            '[]',
            '>',
          ),
          (0, i.kt)('h4', { id: 'implementation-of-3' }, 'Implementation of'),
          (0, i.kt)('p', null, 'DidMethodInterface.authorize'),
          (0, i.kt)('h4', { id: 'defined-in-7' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-did-module/src/method.ts#L54',
              },
              'packages/lisk-did-module/src/method.ts:54',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'create' }, 'create'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'create'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'senderPublicKey'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'did'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'controllers'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'keys'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'parameters-5' }, 'Parameters'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'senderPublicKey'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'did'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'controllers'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  '[]',
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'keys'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'KeysCommand'),
                  '[]',
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns-4' }, 'Returns'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'implementation-of-4' }, 'Implementation of'),
          (0, i.kt)('p', null, 'DidMethodInterface.create'),
          (0, i.kt)('h4', { id: 'defined-in-8' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-did-module/src/method.ts#L59',
              },
              'packages/lisk-did-module/src/method.ts:59',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'deactivate' }, 'deactivate'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'deactivate'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'senderPublicKey'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'target'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'signer'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'signature?'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'parameters-6' }, 'Parameters'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'senderPublicKey'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'target'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'signer'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'signature?'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns-5' }, 'Returns'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'implementation-of-5' }, 'Implementation of'),
          (0, i.kt)('p', null, 'DidMethodInterface.deactivate'),
          (0, i.kt)('h4', { id: 'defined-in-9' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-did-module/src/method.ts#L273',
              },
              'packages/lisk-did-module/src/method.ts:273',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'getconfig' }, 'getConfig'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'getConfig'),
            '(): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'DidModuleConfig'),
          ),
          (0, i.kt)('h4', { id: 'returns-6' }, 'Returns'),
          (0, i.kt)('p', null, (0, i.kt)('inlineCode', { parentName: 'p' }, 'DidModuleConfig')),
          (0, i.kt)('h4', { id: 'implementation-of-6' }, 'Implementation of'),
          (0, i.kt)('p', null, 'DidMethodInterface.getConfig'),
          (0, i.kt)('h4', { id: 'defined-in-10' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-did-module/src/method.ts#L39',
              },
              'packages/lisk-did-module/src/method.ts:39',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'getnonce' }, 'getNonce'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'getNonce'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'did'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<{ ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'nonce'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '  }',
            '>',
          ),
          (0, i.kt)('h4', { id: 'parameters-7' }, 'Parameters'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'did'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns-7' }, 'Returns'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<{ ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'nonce'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '  }',
            '>',
          ),
          (0, i.kt)('h4', { id: 'implementation-of-7' }, 'Implementation of'),
          (0, i.kt)('p', null, 'DidMethodInterface.getNonce'),
          (0, i.kt)('h4', { id: 'defined-in-11' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-did-module/src/method.ts#L48',
              },
              'packages/lisk-did-module/src/method.ts:48',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'init' }, 'init'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'init'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'config'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'void'),
          ),
          (0, i.kt)('h4', { id: 'parameters-8' }, 'Parameters'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'config'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'DidModuleConfig'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns-8' }, 'Returns'),
          (0, i.kt)('p', null, (0, i.kt)('inlineCode', { parentName: 'p' }, 'void')),
          (0, i.kt)('h4', { id: 'implementation-of-8' }, 'Implementation of'),
          (0, i.kt)('p', null, 'DidMethodInterface.init'),
          (0, i.kt)('h4', { id: 'defined-in-12' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-did-module/src/method.ts#L34',
              },
              'packages/lisk-did-module/src/method.ts:34',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'read' }, 'read'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'read'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'did'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'DidDocument'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'parameters-9' }, 'Parameters'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'did'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns-9' }, 'Returns'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'DidDocument'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'implementation-of-9' }, 'Implementation of'),
          (0, i.kt)('p', null, 'DidMethodInterface.read'),
          (0, i.kt)('h4', { id: 'defined-in-13' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-did-module/src/method.ts#L43',
              },
              'packages/lisk-did-module/src/method.ts:43',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'removecontrollers' }, 'removeControllers'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'removeControllers'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'senderPublicKey'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'target'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'controllers'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'signer'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'signature?'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'parameters-10' }, 'Parameters'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'senderPublicKey'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'target'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'controllers'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  '[]',
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'signer'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'signature?'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns-10' }, 'Returns'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'implementation-of-10' }, 'Implementation of'),
          (0, i.kt)('p', null, 'DidMethodInterface.removeControllers'),
          (0, i.kt)('h4', { id: 'defined-in-14' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-did-module/src/method.ts#L174',
              },
              'packages/lisk-did-module/src/method.ts:174',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'removekeys' }, 'removeKeys'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'removeKeys'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'senderPublicKey'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'target'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'publicKeys'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'signer'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'signature?'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'parameters-11' }, 'Parameters'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'senderPublicKey'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'target'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'publicKeys'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                  '[]',
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'signer'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'signature?'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns-11' }, 'Returns'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'implementation-of-11' }, 'Implementation of'),
          (0, i.kt)('p', null, 'DidMethodInterface.removeKeys'),
          (0, i.kt)('h4', { id: 'defined-in-15' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-did-module/src/method.ts#L108',
              },
              'packages/lisk-did-module/src/method.ts:108',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'removeserviceendpoint' }, 'removeServiceEndpoint'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'removeServiceEndpoint'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'senderPublicKey'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'target'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'endpointId'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'signer'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'signature?'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'parameters-12' }, 'Parameters'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'senderPublicKey'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'target'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'endpointId'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'signer'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'signature?'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'returns-12' }, 'Returns'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'implementation-of-12' }, 'Implementation of'),
          (0, i.kt)('p', null, 'DidMethodInterface.removeServiceEndpoint'),
          (0, i.kt)('h4', { id: 'defined-in-16' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-did-module/src/method.ts#L240',
              },
              'packages/lisk-did-module/src/method.ts:240',
            ),
          ),
        );
      }
      s.isMDXComponent = !0;
    },
  },
]);
