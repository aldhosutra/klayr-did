'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [2337],
  {
    876: (e, t, a) => {
      a.d(t, { Zo: () => m, kt: () => N });
      var n = a(2784);
      function r(e, t, a) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(a), !0).forEach(function (t) {
                r(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : i(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      function d(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++) (a = i[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (a = i[n]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]));
        }
        return r;
      }
      var p = n.createContext({}),
        o = function (e) {
          var t = n.useContext(p),
            a = t;
          return e && (a = 'function' == typeof e ? e(t) : l(l({}, t), e)), a;
        },
        m = function (e) {
          var t = o(e.components);
          return n.createElement(p.Provider, { value: t }, e.children);
        },
        k = 'mdxType',
        s = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        c = n.forwardRef(function (e, t) {
          var a = e.components,
            r = e.mdxType,
            i = e.originalType,
            p = e.parentName,
            m = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            k = o(a),
            c = r,
            N = k[''.concat(p, '.').concat(c)] || k[c] || s[c] || i;
          return a
            ? n.createElement(N, l(l({ ref: t }, m), {}, { components: a }))
            : n.createElement(N, l({ ref: t }, m));
        });
      function N(e, t) {
        var a = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var i = a.length,
            l = new Array(i);
          l[0] = c;
          var d = {};
          for (var p in t) hasOwnProperty.call(t, p) && (d[p] = t[p]);
          (d.originalType = e), (d[k] = 'string' == typeof e ? e : r), (l[1] = d);
          for (var o = 2; o < i; o++) l[o] = a[o];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, a);
      }
      c.displayName = 'MDXCreateElement';
    },
    1493: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => p,
          contentTitle: () => l,
          default: () => s,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => o,
        });
      var n = a(7896),
        r = (a(2784), a(876));
      const i = {
          id: 'cryptography.operation',
          title: 'Namespace: operation',
          sidebar_label: 'cryptography.operation',
          custom_edit_url: null,
        },
        l = void 0,
        d = {
          unversionedId: 'lisk-decentralized-identifier/namespaces/cryptography.operation',
          id: 'lisk-decentralized-identifier/namespaces/cryptography.operation',
          title: 'Namespace: operation',
          description: 'cryptography.operation',
          source: '@site/docs/lisk-decentralized-identifier/namespaces/cryptography.operation.md',
          sourceDirName: 'lisk-decentralized-identifier/namespaces',
          slug: '/lisk-decentralized-identifier/namespaces/cryptography.operation',
          permalink: '/docs/lisk-decentralized-identifier/namespaces/cryptography.operation',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'cryptography.operation',
            title: 'Namespace: operation',
            sidebar_label: 'cryptography.operation',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'cryptography.method',
            permalink: '/docs/lisk-decentralized-identifier/namespaces/cryptography.method',
          },
          next: { title: 'utils.array', permalink: '/docs/lisk-decentralized-identifier/namespaces/utils.array' },
        },
        p = {},
        o = [
          { value: 'Functions', id: 'functions', level: 2 },
          { value: 'decrypt', id: 'decrypt', level: 3 },
          { value: 'Parameters', id: 'parameters', level: 4 },
          { value: 'Returns', id: 'returns', level: 4 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'encrypt', id: 'encrypt', level: 3 },
          { value: 'Parameters', id: 'parameters-1', level: 4 },
          { value: 'Returns', id: 'returns-1', level: 4 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'sign', id: 'sign', level: 3 },
          { value: 'Parameters', id: 'parameters-2', level: 4 },
          { value: 'Returns', id: 'returns-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'signLocal', id: 'signlocal', level: 3 },
          { value: 'Parameters', id: 'parameters-3', level: 4 },
          { value: 'Returns', id: 'returns-3', level: 4 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'verify', id: 'verify', level: 3 },
          { value: 'Parameters', id: 'parameters-4', level: 4 },
          { value: 'Returns', id: 'returns-4', level: 4 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
          { value: 'verifyLocal', id: 'verifylocal', level: 3 },
          { value: 'Parameters', id: 'parameters-5', level: 4 },
          { value: 'Returns', id: 'returns-5', level: 4 },
          { value: 'Defined in', id: 'defined-in-5', level: 4 },
        ],
        m = { toc: o },
        k = 'wrapper';
      function s(e) {
        let { components: t, ...a } = e;
        return (0, r.kt)(
          k,
          (0, n.Z)({}, m, a, { components: t, mdxType: 'MDXLayout' }),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/namespaces/cryptography' },
              'cryptography',
            ),
            '.operation',
          ),
          (0, r.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, r.kt)('h3', { id: 'decrypt' }, 'decrypt'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'decrypt'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'jwe'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'recipientKeyId'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'privateKey'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'options'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'jwe'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/interfaces/JWEDocument' },
                    (0, r.kt)('inlineCode', { parentName: 'a' }, 'JWEDocument'),
                  ),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'recipientKeyId'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'privateKey'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'options'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/modules#createresolverparam' },
                    (0, r.kt)('inlineCode', { parentName: 'a' }, 'CreateResolverParam'),
                  ),
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
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/cryptography/operation.ts#L26',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/operation.ts:26',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'encrypt' }, 'encrypt'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'encrypt'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'data'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'recipientKeyId'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'options'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/JWEDocument' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'JWEDocument'),
            ),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'data'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'recipientKeyId'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'options'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/modules#createresolverparam' },
                    (0, r.kt)('inlineCode', { parentName: 'a' }, 'CreateResolverParam'),
                  ),
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
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/JWEDocument' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'JWEDocument'),
            ),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/cryptography/operation.ts#L11',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/operation.ts:11',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'sign' }, 'sign'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'sign'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'data'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'did'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'privateKey'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'options'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'data'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'privateKey'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'options'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/modules#createresolverparam' },
                    (0, r.kt)('inlineCode', { parentName: 'a' }, 'CreateResolverParam'),
                  ),
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
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/cryptography/operation.ts#L45',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/operation.ts:45',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'signlocal' }, 'signLocal'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'signLocal'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'data'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'privateKey'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'data'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'privateKey'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
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
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Buffer'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/cryptography/operation.ts#L93',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/operation.ts:93',
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
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'data'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'did'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'signature'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'publicKey'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'options'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'boolean'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'data'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'signature'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'publicKey'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'options'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/modules#createresolverparam' },
                    (0, r.kt)('inlineCode', { parentName: 'a' }, 'CreateResolverParam'),
                  ),
                  ' & { ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'withDigest?'),
                  ': ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'boolean'),
                  '  }',
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
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'boolean'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/cryptography/operation.ts#L63',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/operation.ts:63',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'verifylocal' }, 'verifyLocal'),
          (0, r.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'verifyLocal'),
            '(',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'data'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'signature'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'publicKey'),
            ', ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'withDigest?'),
            '): ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'boolean'),
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
                (0, r.kt)('th', { parentName: 'tr', align: 'left' }, 'Default value'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'data'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'undefined'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'signature'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'undefined'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'publicKey'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'undefined'),
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'withDigest'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'boolean'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'false'),
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
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'boolean'),
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
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-decentralized-identifier/src/cryptography/operation.ts#L99',
              },
              'packages/lisk-decentralized-identifier/src/cryptography/operation.ts:99',
            ),
          ),
        );
      }
      s.isMDXComponent = !0;
    },
  },
]);
