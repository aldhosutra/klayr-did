'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [4460],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => p, kt: () => c });
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
      var m = a.createContext({}),
        o = function (e) {
          var t = a.useContext(m),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : d(d({}, t), e)), n;
        },
        p = function (e) {
          var t = o(e.components);
          return a.createElement(m.Provider, { value: t }, e.children);
        },
        s = 'mdxType',
        k = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        u = a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            i = e.originalType,
            m = e.parentName,
            p = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            s = o(n),
            u = r,
            c = s[''.concat(m, '.').concat(u)] || s[u] || k[u] || i;
          return n
            ? a.createElement(c, d(d({ ref: t }, p), {}, { components: n }))
            : a.createElement(c, d({ ref: t }, p));
        });
      function c(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var i = n.length,
            d = new Array(i);
          d[0] = u;
          var l = {};
          for (var m in t) hasOwnProperty.call(t, m) && (l[m] = t[m]);
          (l.originalType = e), (l[s] = 'string' == typeof e ? e : r), (d[1] = l);
          for (var o = 2; o < i; o++) d[o] = n[o];
          return a.createElement.apply(null, d);
        }
        return a.createElement.apply(null, n);
      }
      u.displayName = 'MDXCreateElement';
    },
    6253: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => m,
          contentTitle: () => d,
          default: () => k,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => o,
        });
      var a = n(7896),
        r = (n(2784), n(876));
      const i = {
          id: 'DeactivateCommand',
          title: 'Class: DeactivateCommand',
          sidebar_label: 'DeactivateCommand',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        d = void 0,
        l = {
          unversionedId: 'lisk-did-module/classes/DeactivateCommand',
          id: 'lisk-did-module/classes/DeactivateCommand',
          title: 'Class: DeactivateCommand',
          description: 'Hierarchy',
          source: '@site/docs/lisk-did-module/classes/DeactivateCommand.md',
          sourceDirName: 'lisk-did-module/classes',
          slug: '/lisk-did-module/classes/DeactivateCommand',
          permalink: '/docs/lisk-did-module/classes/DeactivateCommand',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'DeactivateCommand',
            title: 'Class: DeactivateCommand',
            sidebar_label: 'DeactivateCommand',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'CreateCommand', permalink: '/docs/lisk-did-module/classes/CreateCommand' },
          next: { title: 'DidEndpoint', permalink: '/docs/lisk-did-module/classes/DidEndpoint' },
        },
        m = {},
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
        p = { toc: o },
        s = 'wrapper';
      function k(e) {
        let { components: t, ...n } = e;
        return (0, r.kt)(
          s,
          (0, a.Z)({}, p, n, { components: t, mdxType: 'MDXLayout' }),
          (0, r.kt)('h2', { id: 'hierarchy' }, 'Hierarchy'),
          (0, r.kt)(
            'ul',
            null,
            (0, r.kt)(
              'li',
              { parentName: 'ul' },
              (0, r.kt)('p', { parentName: 'li' }, (0, r.kt)('inlineCode', { parentName: 'p' }, 'BaseCommand')),
              (0, r.kt)(
                'p',
                { parentName: 'li' },
                '\u21b3 ',
                (0, r.kt)(
                  'strong',
                  { parentName: 'p' },
                  (0, r.kt)('inlineCode', { parentName: 'strong' }, 'DeactivateCommand'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h2', { id: 'constructors' }, 'Constructors'),
          (0, r.kt)('h3', { id: 'constructor' }, 'constructor'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'new DeactivateCommand'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'stores'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'events'),
            ')',
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'stores'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'NamedRegistry'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'events'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'NamedRegistry'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'inherited-from' }, 'Inherited from'),
          (0, r.kt)('p', null, 'BaseCommand.constructor'),
          (0, r.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, r.kt)('p', null, 'node_modules/lisk-framework/dist-node/modules/base_command.d.ts:9'),
          (0, r.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, r.kt)('h3', { id: 'config' }, 'config'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'config'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'DidModuleConfig'),
          ),
          (0, r.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-did-module/src/commands/deactivate_command.ts#L13',
              },
              'packages/lisk-did-module/src/commands/deactivate_command.ts:13',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'events' }, 'events'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Protected'),
            ' ',
            (0, r.kt)('strong', { parentName: 'p' }, 'events'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'NamedRegistry'),
          ),
          (0, r.kt)('h4', { id: 'inherited-from-1' }, 'Inherited from'),
          (0, r.kt)('p', null, 'BaseCommand.events'),
          (0, r.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, r.kt)('p', null, 'node_modules/lisk-framework/dist-node/modules/base_command.d.ts:6'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'schema' }, 'schema'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'schema'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Object'),
            ' = ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'utils.schema.deactivateCommandSchema'),
          ),
          (0, r.kt)('h4', { id: 'type-declaration' }, 'Type declaration'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, '$id'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'properties'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '{ ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'signature'),
                  ': { ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  } ; ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'signer'),
                  ': { ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  } ; ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'target'),
                  ': { ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  }  }',
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'properties.signature'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '{ ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  }',
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'properties.signature.dataType'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'properties.signature.fieldNumber'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'number'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'properties.signer'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '{ ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  }',
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'properties.signer.dataType'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'properties.signer.fieldNumber'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'number'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'properties.target'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '{ ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'dataType'),
                  ': ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'fieldNumber'),
                  ': ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'number'),
                  '  }',
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'properties.target.dataType'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'properties.target.fieldNumber'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'number'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'required'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'type'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'overrides' }, 'Overrides'),
          (0, r.kt)('p', null, 'BaseCommand.schema'),
          (0, r.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-did-module/src/commands/deactivate_command.ts#L12',
              },
              'packages/lisk-did-module/src/commands/deactivate_command.ts:12',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'stores' }, 'stores'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Protected'),
            ' ',
            (0, r.kt)('strong', { parentName: 'p' }, 'stores'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'NamedRegistry'),
          ),
          (0, r.kt)('h4', { id: 'inherited-from-2' }, 'Inherited from'),
          (0, r.kt)('p', null, 'BaseCommand.stores'),
          (0, r.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, r.kt)('p', null, 'node_modules/lisk-framework/dist-node/modules/base_command.d.ts:5'),
          (0, r.kt)('h2', { id: 'accessors' }, 'Accessors'),
          (0, r.kt)('h3', { id: 'name' }, 'name'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'get'),
            ' ',
            (0, r.kt)('strong', { parentName: 'p' }, 'name'),
            '(): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, r.kt)('h4', { id: 'returns' }, 'Returns'),
          (0, r.kt)('p', null, (0, r.kt)('inlineCode', { parentName: 'p' }, 'string')),
          (0, r.kt)('h4', { id: 'inherited-from-3' }, 'Inherited from'),
          (0, r.kt)('p', null, 'BaseCommand.name'),
          (0, r.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, r.kt)('p', null, 'node_modules/lisk-framework/dist-node/modules/base_command.d.ts:8'),
          (0, r.kt)('h2', { id: 'methods' }, 'Methods'),
          (0, r.kt)('h3', { id: 'execute' }, 'execute'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'execute'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, '_context'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, '_context'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'CommandExecuteContext'),
                  '<',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'DeactivateParam'),
                  '>',
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
          (0, r.kt)('h4', { id: 'overrides-1' }, 'Overrides'),
          (0, r.kt)('p', null, 'BaseCommand.execute'),
          (0, r.kt)('h4', { id: 'defined-in-6' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-did-module/src/commands/deactivate_command.ts#L26',
              },
              'packages/lisk-did-module/src/commands/deactivate_command.ts:26',
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
            (0, r.kt)('inlineCode', { parentName: 'p' }, '_moduleConfig'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, '_moduleConfig'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'DidModuleConfig'),
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
          (0, r.kt)('h4', { id: 'defined-in-7' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-did-module/src/commands/deactivate_command.ts#L16',
              },
              'packages/lisk-did-module/src/commands/deactivate_command.ts:16',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'verify' }, 'verify'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'verify'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, '_context'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'VerificationResult'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, '_context'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'CommandVerifyContext'),
                  '<',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'DeactivateParam'),
                  '>',
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
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'VerificationResult'),
            '>',
          ),
          (0, r.kt)('h4', { id: 'overrides-2' }, 'Overrides'),
          (0, r.kt)('p', null, 'BaseCommand.verify'),
          (0, r.kt)('h4', { id: 'defined-in-8' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e2098a6/packages/lisk-did-module/src/commands/deactivate_command.ts#L22',
              },
              'packages/lisk-did-module/src/commands/deactivate_command.ts:22',
            ),
          ),
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
