'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [2833],
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
      var p = a.createContext({}),
        o = function (e) {
          var t = a.useContext(p),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : d(d({}, t), e)), n;
        },
        m = function (e) {
          var t = o(e.components);
          return a.createElement(p.Provider, { value: t }, e.children);
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
            p = e.parentName,
            m = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            k = o(n),
            N = i,
            u = k[''.concat(p, '.').concat(N)] || k[N] || s[N] || r;
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
          for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
          (l.originalType = e), (l[k] = 'string' == typeof e ? e : i), (d[1] = l);
          for (var o = 2; o < r; o++) d[o] = n[o];
          return a.createElement.apply(null, d);
        }
        return a.createElement.apply(null, n);
      }
      N.displayName = 'MDXCreateElement';
    },
    262: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => p,
          contentTitle: () => d,
          default: () => s,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => o,
        });
      var a = n(7896),
        i = (n(2784), n(876));
      const r = {
          id: 'AddServiceEndpointCommand',
          title: 'Class: AddServiceEndpointCommand',
          sidebar_label: 'AddServiceEndpointCommand',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        d = void 0,
        l = {
          unversionedId: 'lisk-did/classes/AddServiceEndpointCommand',
          id: 'lisk-did/classes/AddServiceEndpointCommand',
          title: 'Class: AddServiceEndpointCommand',
          description: 'Hierarchy',
          source: '@site/docs/lisk-did/classes/AddServiceEndpointCommand.md',
          sourceDirName: 'lisk-did/classes',
          slug: '/lisk-did/classes/AddServiceEndpointCommand',
          permalink: '/docs/lisk-did/classes/AddServiceEndpointCommand',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'AddServiceEndpointCommand',
            title: 'Class: AddServiceEndpointCommand',
            sidebar_label: 'AddServiceEndpointCommand',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'AddKeysCommand', permalink: '/docs/lisk-did/classes/AddKeysCommand' },
          next: { title: 'CreateCommand', permalink: '/docs/lisk-did/classes/CreateCommand' },
        },
        p = {},
        o = [
          { value: 'Hierarchy', id: 'hierarchy', level: 2 },
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
          { value: 'schema', id: 'schema', level: 3 },
          { value: 'Type declaration', id: 'type-declaration', level: 4 },
          { value: 'Overrides', id: 'overrides', level: 4 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'stores', id: 'stores', level: 3 },
          { value: 'Inherited from', id: 'inherited-from-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
          { value: 'Accessors', id: 'accessors', level: 2 },
          { value: 'name', id: 'name', level: 3 },
          { value: 'Returns', id: 'returns', level: 4 },
          { value: 'Inherited from', id: 'inherited-from-3', level: 4 },
          { value: 'Defined in', id: 'defined-in-5', level: 4 },
          { value: 'Methods', id: 'methods', level: 2 },
          { value: 'execute', id: 'execute', level: 3 },
          { value: 'Parameters', id: 'parameters-1', level: 4 },
          { value: 'Returns', id: 'returns-1', level: 4 },
          { value: 'Overrides', id: 'overrides-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-6', level: 4 },
          { value: 'init', id: 'init', level: 3 },
          { value: 'Parameters', id: 'parameters-2', level: 4 },
          { value: 'Returns', id: 'returns-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-7', level: 4 },
          { value: 'verify', id: 'verify', level: 3 },
          { value: 'Parameters', id: 'parameters-3', level: 4 },
          { value: 'Returns', id: 'returns-3', level: 4 },
          { value: 'Overrides', id: 'overrides-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-8', level: 4 },
        ],
        m = { toc: o },
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
              (0, i.kt)('p', { parentName: 'li' }, (0, i.kt)('inlineCode', { parentName: 'p' }, 'BaseCommand')),
              (0, i.kt)(
                'p',
                { parentName: 'li' },
                '\u21b3 ',
                (0, i.kt)(
                  'strong',
                  { parentName: 'p' },
                  (0, i.kt)('inlineCode', { parentName: 'strong' }, 'AddServiceEndpointCommand'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h2', { id: 'constructors' }, 'Constructors'),
          (0, i.kt)('h3', { id: 'constructor' }, 'constructor'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'new AddServiceEndpointCommand'),
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
          (0, i.kt)('p', null, 'BaseCommand.constructor'),
          (0, i.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, i.kt)('p', null, 'node_modules/lisk-framework/dist-node/modules/base_command.d.ts:9'),
          (0, i.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, i.kt)('h3', { id: 'config' }, 'config'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'config'),
            ': ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.DidModuleConfig' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'DidModuleConfig'),
            ),
          ),
          (0, i.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-did-module/dist/commands/add_service_endpoints_command.d.ts:42'),
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
          (0, i.kt)('p', null, 'BaseCommand.events'),
          (0, i.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, i.kt)('p', null, 'node_modules/lisk-framework/dist-node/modules/base_command.d.ts:6'),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'schema' }, 'schema'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'schema'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Object'),
          ),
          (0, i.kt)('h4', { id: 'type-declaration' }, 'Type declaration'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, '$id'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '{ ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'endpoint'),
                  ': { ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties'),
                  ': { ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'id'),
                  ': { ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  } ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'serviceEndpoint'),
                  ': { ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  } ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'type'),
                  ': { ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  }  } ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'required'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  '[] ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'type'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  '  } ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'signature'),
                  ': { ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  } ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'signer'),
                  ': { ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  } ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'target'),
                  ': { ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  }  }',
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.endpoint'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '{ ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties'),
                  ': { ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'id'),
                  ': { ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  } ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'serviceEndpoint'),
                  ': { ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  } ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'type'),
                  ': { ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  }  } ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'required'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  '[] ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'type'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  '  }',
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.endpoint.fieldNumber'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.endpoint.properties'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '{ ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'id'),
                  ': { ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  } ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'serviceEndpoint'),
                  ': { ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  } ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'type'),
                  ': { ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  }  }',
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.endpoint.properties.id'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '{ ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  }',
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.endpoint.properties.id.dataType'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.endpoint.properties.id.fieldNumber'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.endpoint.properties.serviceEndpoint'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '{ ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  }',
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)(
                    'inlineCode',
                    { parentName: 'td' },
                    'properties.endpoint.properties.serviceEndpoint.dataType',
                  ),
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
                  (0, i.kt)(
                    'inlineCode',
                    { parentName: 'td' },
                    'properties.endpoint.properties.serviceEndpoint.fieldNumber',
                  ),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.endpoint.properties.type'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '{ ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  }',
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.endpoint.properties.type.dataType'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.endpoint.properties.type.fieldNumber'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.endpoint.required'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.endpoint.type'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.signature'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '{ ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  }',
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.signature.dataType'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.signature.fieldNumber'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.signer'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '{ ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  }',
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.signer.dataType'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.signer.fieldNumber'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.target'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '{ ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  }',
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.target.dataType'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'properties.target.fieldNumber'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'number'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'required'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'type'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'overrides' }, 'Overrides'),
          (0, i.kt)('p', null, 'BaseCommand.schema'),
          (0, i.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-did-module/dist/commands/add_service_endpoints_command.d.ts:4'),
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
          (0, i.kt)('p', null, 'BaseCommand.stores'),
          (0, i.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, i.kt)('p', null, 'node_modules/lisk-framework/dist-node/modules/base_command.d.ts:5'),
          (0, i.kt)('h2', { id: 'accessors' }, 'Accessors'),
          (0, i.kt)('h3', { id: 'name' }, 'name'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'get'),
            ' ',
            (0, i.kt)('strong', { parentName: 'p' }, 'name'),
            '(): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, i.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, i.kt)('p', null, (0, i.kt)('inlineCode', { parentName: 'p' }, 'string')),
          (0, i.kt)('h4', { id: 'inherited-from-3' }, 'Inherited from'),
          (0, i.kt)('p', null, 'BaseCommand.name'),
          (0, i.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, i.kt)('p', null, 'node_modules/lisk-framework/dist-node/modules/base_command.d.ts:8'),
          (0, i.kt)('h2', { id: 'methods' }, 'Methods'),
          (0, i.kt)('h3', { id: 'execute' }, 'execute'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'execute'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '_context'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, '_context'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'CommandExecuteContext'),
                  '<',
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/interfaces/did.AddServiceEndpointParam' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'AddServiceEndpointParam'),
                  ),
                  '>',
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
          (0, i.kt)('h4', { id: 'overrides-1' }, 'Overrides'),
          (0, i.kt)('p', null, 'BaseCommand.execute'),
          (0, i.kt)('h4', { id: 'defined-in-6' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-did-module/dist/commands/add_service_endpoints_command.d.ts:45'),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'init' }, 'init'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'init'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '_moduleConfig'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, '_moduleConfig'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/interfaces/did.DidModuleConfig' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'DidModuleConfig'),
                  ),
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
          (0, i.kt)('h4', { id: 'defined-in-7' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-did-module/dist/commands/add_service_endpoints_command.d.ts:43'),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'verify' }, 'verify'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'verify'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '_context'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'VerificationResult'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, '_context'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'CommandVerifyContext'),
                  '<',
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/interfaces/did.AddServiceEndpointParam' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'AddServiceEndpointParam'),
                  ),
                  '>',
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
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'VerificationResult'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'overrides-2' }, 'Overrides'),
          (0, i.kt)('p', null, 'BaseCommand.verify'),
          (0, i.kt)('h4', { id: 'defined-in-8' }, 'Defined in'),
          (0, i.kt)('p', null, 'packages/lisk-did-module/dist/commands/add_service_endpoints_command.d.ts:44'),
        );
      }
      s.isMDXComponent = !0;
    },
  },
]);
