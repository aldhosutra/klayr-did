'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [585],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => k, kt: () => f });
      var a = n(2784);
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function i(e, t) {
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
            ? i(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
        }
        return r;
      }
      var p = a.createContext({}),
        o = function (e) {
          var t = a.useContext(p),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : d(d({}, t), e)), n;
        },
        k = function (e) {
          var t = o(e.components);
          return a.createElement(p.Provider, { value: t }, e.children);
        },
        m = 'mdxType',
        s = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        N = a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            i = e.originalType,
            p = e.parentName,
            k = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            m = o(n),
            N = r,
            f = m[''.concat(p, '.').concat(N)] || m[N] || s[N] || i;
          return n
            ? a.createElement(f, d(d({ ref: t }, k), {}, { components: n }))
            : a.createElement(f, d({ ref: t }, k));
        });
      function f(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var i = n.length,
            d = new Array(i);
          d[0] = N;
          var l = {};
          for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
          (l.originalType = e), (l[m] = 'string' == typeof e ? e : r), (d[1] = l);
          for (var o = 2; o < i; o++) d[o] = n[o];
          return a.createElement.apply(null, d);
        }
        return a.createElement.apply(null, n);
      }
      N.displayName = 'MDXCreateElement';
    },
    2474: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => d,
          default: () => s,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => o,
        });
      var a = n(7896),
        r = (n(2784), n(876));
      const i = {
          id: 'DidMethod',
          title: 'Interface: DidMethod',
          sidebar_label: 'DidMethod',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        d = void 0,
        l = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/DidMethod',
          id: 'lisk-decentralized-identifier/interfaces/DidMethod',
          title: 'Interface: DidMethod',
          description: 'Methods',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/DidMethod.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/DidMethod',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/DidMethod',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'DidMethod',
            title: 'Interface: DidMethod',
            sidebar_label: 'DidMethod',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'DidEndpoint', permalink: '/docs/lisk-decentralized-identifier/interfaces/DidEndpoint' },
          next: {
            title: 'DidModuleConfig',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/DidModuleConfig',
          },
        },
        p = {},
        o = [
          { value: 'Methods', id: 'methods', level: 2 },
          { value: 'addControllers', id: 'addcontrollers', level: 3 },
          { value: 'Parameters', id: 'parameters', level: 4 },
          { value: 'Returns', id: 'returns', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'addKeys', id: 'addkeys', level: 3 },
          { value: 'Parameters', id: 'parameters-1', level: 4 },
          { value: 'Returns', id: 'returns-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'addServiceEndpoint', id: 'addserviceendpoint', level: 3 },
          { value: 'Parameters', id: 'parameters-2', level: 4 },
          { value: 'Returns', id: 'returns-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'authorize', id: 'authorize', level: 3 },
          { value: 'Parameters', id: 'parameters-3', level: 4 },
          { value: 'Returns', id: 'returns-3', level: 4 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'create', id: 'create', level: 3 },
          { value: 'Parameters', id: 'parameters-4', level: 4 },
          { value: 'Returns', id: 'returns-4', level: 4 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
          { value: 'deactivate', id: 'deactivate', level: 3 },
          { value: 'Parameters', id: 'parameters-5', level: 4 },
          { value: 'Returns', id: 'returns-5', level: 4 },
          { value: 'Defined in', id: 'defined-in-5', level: 4 },
          { value: 'getConfig', id: 'getconfig', level: 3 },
          { value: 'Returns', id: 'returns-6', level: 4 },
          { value: 'Defined in', id: 'defined-in-6', level: 4 },
          { value: 'getNonce', id: 'getnonce', level: 3 },
          { value: 'Parameters', id: 'parameters-6', level: 4 },
          { value: 'Returns', id: 'returns-7', level: 4 },
          { value: 'Defined in', id: 'defined-in-7', level: 4 },
          { value: 'incrementNonce', id: 'incrementnonce', level: 3 },
          { value: 'Parameters', id: 'parameters-7', level: 4 },
          { value: 'Returns', id: 'returns-8', level: 4 },
          { value: 'Defined in', id: 'defined-in-8', level: 4 },
          { value: 'init', id: 'init', level: 3 },
          { value: 'Parameters', id: 'parameters-8', level: 4 },
          { value: 'Returns', id: 'returns-9', level: 4 },
          { value: 'Defined in', id: 'defined-in-9', level: 4 },
          { value: 'read', id: 'read', level: 3 },
          { value: 'Parameters', id: 'parameters-9', level: 4 },
          { value: 'Returns', id: 'returns-10', level: 4 },
          { value: 'Defined in', id: 'defined-in-10', level: 4 },
          { value: 'removeControllers', id: 'removecontrollers', level: 3 },
          { value: 'Parameters', id: 'parameters-10', level: 4 },
          { value: 'Returns', id: 'returns-11', level: 4 },
          { value: 'Defined in', id: 'defined-in-11', level: 4 },
          { value: 'removeKeys', id: 'removekeys', level: 3 },
          { value: 'Parameters', id: 'parameters-11', level: 4 },
          { value: 'Returns', id: 'returns-12', level: 4 },
          { value: 'Defined in', id: 'defined-in-12', level: 4 },
          { value: 'removeServiceEndpoint', id: 'removeserviceendpoint', level: 3 },
          { value: 'Parameters', id: 'parameters-12', level: 4 },
          { value: 'Returns', id: 'returns-13', level: 4 },
          { value: 'Defined in', id: 'defined-in-13', level: 4 },
        ],
        k = { toc: o },
        m = 'wrapper';
      function s(e) {
        let { components: t, ...n } = e;
        return (0, r.kt)(
          m,
          (0, a.Z)({}, k, n, { components: t, mdxType: 'MDXLayout' }),
          (0, r.kt)('h2', { id: 'methods' }, 'Methods'),
          (0, r.kt)('h3', { id: 'addcontrollers' }, 'addControllers'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'addControllers'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'senderPublicKey'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'target'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'controllers'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'signer'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'signature?'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'parameters' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'senderPublicKey'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'target'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'controllers'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  '[]',
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'signer'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'signature?'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L39',
              },
              'packages/lisk-decentralized-identifier/src/types/method.ts:39',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'addkeys' }, 'addKeys'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'addKeys'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'senderPublicKey'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'target'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'keys'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'signer'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'signature?'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'parameters-1' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'senderPublicKey'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'target'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'keys'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Keys'),
                  '[]',
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'signer'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'signature?'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-1' }, 'Returns'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L23',
              },
              'packages/lisk-decentralized-identifier/src/types/method.ts:23',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'addserviceendpoint' }, 'addServiceEndpoint'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'addServiceEndpoint'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'senderPublicKey'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'target'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'endpoint'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'signer'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'signature?'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'parameters-2' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'senderPublicKey'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'target'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'endpoint'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Object'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'endpoint.id'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'endpoint.serviceEndpoint'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'endpoint.type'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'signer'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'signature?'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-2' }, 'Returns'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L55',
              },
              'packages/lisk-decentralized-identifier/src/types/method.ts:55',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'authorize' }, 'authorize'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'authorize'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'did'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'factors'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/modules#authorizationresult' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'AuthorizationResult'),
            ),
            '[]',
            '>',
          ),
          (0, r.kt)('h4', { id: 'parameters-3' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'did'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'factors'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/interfaces/AuthorizationFactors' },
                    (0, r.kt)('inlineCode', { parentName: 'a' }, 'AuthorizationFactors'),
                  ),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-3' }, 'Returns'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/modules#authorizationresult' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'AuthorizationResult'),
            ),
            '[]',
            '>',
          ),
          (0, r.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L15',
              },
              'packages/lisk-decentralized-identifier/src/types/method.ts:15',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'create' }, 'create'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'create'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'senderPublicKey'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'did'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'controllers'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'keys'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'parameters-4' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'senderPublicKey'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'did'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'controllers'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  '[]',
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'keys'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Keys'),
                  '[]',
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-4' }, 'Returns'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L16',
              },
              'packages/lisk-decentralized-identifier/src/types/method.ts:16',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'deactivate' }, 'deactivate'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'deactivate'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'senderPublicKey'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'target'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'signer'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'signature?'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'parameters-5' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'senderPublicKey'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'target'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'signer'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'signature?'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-5' }, 'Returns'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L75',
              },
              'packages/lisk-decentralized-identifier/src/types/method.ts:75',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'getconfig' }, 'getConfig'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'getConfig'),
            '(): ',
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/DidModuleConfig' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'DidModuleConfig'),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-6' }, 'Returns'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/DidModuleConfig' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'DidModuleConfig'),
            ),
          ),
          (0, r.kt)('h4', { id: 'defined-in-6' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L11',
              },
              'packages/lisk-decentralized-identifier/src/types/method.ts:11',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'getnonce' }, 'getNonce'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'getNonce'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'did'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<{ ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'nonce'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '  }',
            '>',
          ),
          (0, r.kt)('h4', { id: 'parameters-6' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'did'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-7' }, 'Returns'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<{ ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'nonce'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '  }',
            '>',
          ),
          (0, r.kt)('h4', { id: 'defined-in-7' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L13',
              },
              'packages/lisk-decentralized-identifier/src/types/method.ts:13',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'incrementnonce' }, 'incrementNonce'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'incrementNonce'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'did'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'parameters-7' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'did'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-8' }, 'Returns'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'defined-in-8' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L14',
              },
              'packages/lisk-decentralized-identifier/src/types/method.ts:14',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'init' }, 'init'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'init'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'config'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'void'),
          ),
          (0, r.kt)('h4', { id: 'parameters-8' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'config'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/interfaces/DidModuleConfig' },
                    (0, r.kt)('inlineCode', { parentName: 'a' }, 'DidModuleConfig'),
                  ),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-9' }, 'Returns'),
          (0, r.kt)('p', null, (0, r.kt)('inlineCode', { parentName: 'p' }, 'void')),
          (0, r.kt)('h4', { id: 'defined-in-9' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L10',
              },
              'packages/lisk-decentralized-identifier/src/types/method.ts:10',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'read' }, 'read'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'read'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'did'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/DidDocument' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
            ),
            '>',
          ),
          (0, r.kt)('h4', { id: 'parameters-9' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'did'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-10' }, 'Returns'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/DidDocument' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
            ),
            '>',
          ),
          (0, r.kt)('h4', { id: 'defined-in-10' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L12',
              },
              'packages/lisk-decentralized-identifier/src/types/method.ts:12',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'removecontrollers' }, 'removeControllers'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'removeControllers'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'senderPublicKey'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'target'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'controllers'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'signer'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'signature?'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'parameters-10' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'senderPublicKey'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'target'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'controllers'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  '[]',
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'signer'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'signature?'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-11' }, 'Returns'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'defined-in-11' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L47',
              },
              'packages/lisk-decentralized-identifier/src/types/method.ts:47',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'removekeys' }, 'removeKeys'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'removeKeys'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'senderPublicKey'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'target'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'publicKeys'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'signer'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'signature?'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'parameters-11' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'senderPublicKey'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'target'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'publicKeys'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                  '[]',
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'signer'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'signature?'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-12' }, 'Returns'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'defined-in-12' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L31',
              },
              'packages/lisk-decentralized-identifier/src/types/method.ts:31',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'removeserviceendpoint' }, 'removeServiceEndpoint'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'removeServiceEndpoint'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'methodContext'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'senderPublicKey'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'target'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'endpointId'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'signer'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'signature?'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'parameters-12' }, 'Parameters'),
          (0, r.kt)(
            'table',
            null,
            (0, r.kt)(
              'thead',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'thead' },
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Name'),
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Type'),
              ),
            ),
            (0, r.kt)(
              'tbody',
              { parentName: 'table' },
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'methodContext'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'MethodContext'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'senderPublicKey'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'target'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'endpointId'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'signer'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'signature?'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'returns-13' }, 'Returns'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'void'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'defined-in-13' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/types/method.ts#L67',
              },
              'packages/lisk-decentralized-identifier/src/types/method.ts:67',
            ),
          ),
        );
      }
      s.isMDXComponent = !0;
    },
  },
]);
