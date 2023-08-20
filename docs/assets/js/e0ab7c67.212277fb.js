'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [1566],
  {
    876: (e, t, a) => {
      a.d(t, { Zo: () => o, kt: () => f });
      var n = a(2784);
      function i(e, t, a) {
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
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(a), !0).forEach(function (t) {
                i(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : r(Object(a)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var a,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              i = {},
              r = Object.keys(e);
            for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (i[a] = e[a]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (n = 0; n < r.length; n++)
            (a = r[n]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a]));
        }
        return i;
      }
      var p = n.createContext({}),
        s = function (e) {
          var t = n.useContext(p),
            a = t;
          return e && (a = 'function' == typeof e ? e(t) : d(d({}, t), e)), a;
        },
        o = function (e) {
          var t = s(e.components);
          return n.createElement(p.Provider, { value: t }, e.children);
        },
        k = 'mdxType',
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        c = n.forwardRef(function (e, t) {
          var a = e.components,
            i = e.mdxType,
            r = e.originalType,
            p = e.parentName,
            o = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            k = s(a),
            c = i,
            f = k[''.concat(p, '.').concat(c)] || k[c] || m[c] || r;
          return a
            ? n.createElement(f, d(d({ ref: t }, o), {}, { components: a }))
            : n.createElement(f, d({ ref: t }, o));
        });
      function f(e, t) {
        var a = arguments,
          i = t && t.mdxType;
        if ('string' == typeof e || i) {
          var r = a.length,
            d = new Array(r);
          d[0] = c;
          var l = {};
          for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
          (l.originalType = e), (l[k] = 'string' == typeof e ? e : i), (d[1] = l);
          for (var s = 2; s < r; s++) d[s] = a[s];
          return n.createElement.apply(null, d);
        }
        return n.createElement.apply(null, a);
      }
      c.displayName = 'MDXCreateElement';
    },
    4613: (e, t, a) => {
      a.r(t),
        a.d(t, {
          assets: () => p,
          contentTitle: () => d,
          default: () => m,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => s,
        });
      var n = a(7896),
        i = (a(2784), a(876));
      const r = {
          id: 'modules',
          title: '@lisk-did/lisk-decentralized-identifier',
          sidebar_label: 'Exports',
          sidebar_position: 0.5,
          custom_edit_url: null,
        },
        d = void 0,
        l = {
          unversionedId: 'lisk-decentralized-identifier/modules',
          id: 'lisk-decentralized-identifier/modules',
          title: '@lisk-did/lisk-decentralized-identifier',
          description: 'Namespaces',
          source: '@site/docs/lisk-decentralized-identifier/modules.md',
          sourceDirName: 'lisk-decentralized-identifier',
          slug: '/lisk-decentralized-identifier/modules',
          permalink: '/docs/lisk-decentralized-identifier/modules',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0.5,
          frontMatter: {
            id: 'modules',
            title: '@lisk-did/lisk-decentralized-identifier',
            sidebar_label: 'Exports',
            sidebar_position: 0.5,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'Readme', permalink: '/docs/lisk-decentralized-identifier/' },
          next: { title: 'client', permalink: '/docs/lisk-decentralized-identifier/namespaces/client' },
        },
        p = {},
        s = [
          { value: 'Namespaces', id: 'namespaces', level: 2 },
          { value: 'Interfaces', id: 'interfaces', level: 2 },
          { value: 'Type Aliases', id: 'type-aliases', level: 2 },
          { value: 'AddControllersEventData', id: 'addcontrollerseventdata', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'AddKeysEventData', id: 'addkeyseventdata', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'AddServiceEndpointEventData', id: 'addserviceendpointeventdata', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'AuthorizationResult', id: 'authorizationresult', level: 3 },
          { value: 'Type declaration', id: 'type-declaration', level: 4 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'BaseLoader', id: 'baseloader', level: 3 },
          { value: 'Type declaration', id: 'type-declaration-1', level: 4 },
          { value: 'Parameters', id: 'parameters', level: 5 },
          { value: 'Returns', id: 'returns', level: 5 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
          { value: 'CommandPayload', id: 'commandpayload', level: 3 },
          { value: 'Defined in', id: 'defined-in-5', level: 4 },
          { value: 'CreateEventData', id: 'createeventdata', level: 3 },
          { value: 'Defined in', id: 'defined-in-6', level: 4 },
          { value: 'CreateResolverParam', id: 'createresolverparam', level: 3 },
          { value: 'Type declaration', id: 'type-declaration-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-7', level: 4 },
          { value: 'DIDCommands', id: 'didcommands', level: 3 },
          { value: 'Defined in', id: 'defined-in-8', level: 4 },
          { value: 'DIDTransactionParam', id: 'didtransactionparam', level: 3 },
          { value: 'Defined in', id: 'defined-in-9', level: 4 },
          { value: 'DeactivateEventData', id: 'deactivateeventdata', level: 3 },
          { value: 'Defined in', id: 'defined-in-10', level: 4 },
          { value: 'DecodedTransactionJSON', id: 'decodedtransactionjson', level: 3 },
          { value: 'Type parameters', id: 'type-parameters', level: 4 },
          { value: 'Defined in', id: 'defined-in-11', level: 4 },
          { value: 'DocumentLoader', id: 'documentloader', level: 3 },
          { value: 'Type declaration', id: 'type-declaration-3', level: 4 },
          { value: 'Parameters', id: 'parameters-1', level: 5 },
          { value: 'Returns', id: 'returns-1', level: 5 },
          { value: 'Defined in', id: 'defined-in-12', level: 4 },
          { value: 'DocumentStoreData', id: 'documentstoredata', level: 3 },
          { value: 'Defined in', id: 'defined-in-13', level: 4 },
          { value: 'KeyAgreement', id: 'keyagreement', level: 3 },
          { value: 'Defined in', id: 'defined-in-14', level: 4 },
          { value: 'PayloadWithSignature', id: 'payloadwithsignature', level: 3 },
          { value: 'Defined in', id: 'defined-in-15', level: 4 },
          { value: 'RemoveControllersEventData', id: 'removecontrollerseventdata', level: 3 },
          { value: 'Defined in', id: 'defined-in-16', level: 4 },
          { value: 'RemoveKeysEventData', id: 'removekeyseventdata', level: 3 },
          { value: 'Defined in', id: 'defined-in-17', level: 4 },
          { value: 'RemoveServiceEndpointEventData', id: 'removeserviceendpointeventdata', level: 3 },
          { value: 'Defined in', id: 'defined-in-18', level: 4 },
          { value: 'VerificationRelationship', id: 'verificationrelationship', level: 3 },
          { value: 'Defined in', id: 'defined-in-19', level: 4 },
          { value: 'WriteableSchema', id: 'writeableschema', level: 3 },
          { value: 'Defined in', id: 'defined-in-20', level: 4 },
          { value: 'Variables', id: 'variables', level: 2 },
          { value: 'default', id: 'default', level: 3 },
          { value: 'Type declaration', id: 'type-declaration-4', level: 4 },
          { value: 'Defined in', id: 'defined-in-21', level: 4 },
          { value: 'Functions', id: 'functions', level: 2 },
          { value: 'getAddressDIDFromPublicKey', id: 'getaddressdidfrompublickey', level: 3 },
          { value: 'Parameters', id: 'parameters-2', level: 4 },
          { value: 'Returns', id: 'returns-2', level: 4 },
          { value: 'Defined in', id: 'defined-in-22', level: 4 },
          { value: 'getDIDDocument', id: 'getdiddocument', level: 3 },
          { value: 'Parameters', id: 'parameters-3', level: 4 },
          { value: 'Returns', id: 'returns-3', level: 4 },
          { value: 'Defined in', id: 'defined-in-23', level: 4 },
          { value: 'parseDIDComponent', id: 'parsedidcomponent', level: 3 },
          { value: 'Parameters', id: 'parameters-4', level: 4 },
          { value: 'Returns', id: 'returns-4', level: 4 },
          { value: 'Defined in', id: 'defined-in-24', level: 4 },
        ],
        o = { toc: s },
        k = 'wrapper';
      function m(e) {
        let { components: t, ...a } = e;
        return (0, i.kt)(
          k,
          (0, n.Z)({}, o, a, { components: t, mdxType: 'MDXLayout' }),
          (0, i.kt)('h2', { id: 'namespaces' }, 'Namespaces'),
          (0, i.kt)(
            'ul',
            null,
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/namespaces/client' },
                'client',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/namespaces/cryptography' },
                'cryptography',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/namespaces/resolver' },
                'resolver',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/namespaces/utils' },
                'utils',
              ),
            ),
          ),
          (0, i.kt)('h2', { id: 'interfaces' }, 'Interfaces'),
          (0, i.kt)(
            'ul',
            null,
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/AddControllersParam' },
                'AddControllersParam',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/AddKeysParam' },
                'AddKeysParam',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/AddServiceEndpointParam' },
                'AddServiceEndpointParam',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/BaseResolver' },
                'BaseResolver',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/CipherInterface' },
                'CipherInterface',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/CreateParam' },
                'CreateParam',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/DeactivateParam' },
                'DeactivateParam',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/DidDocument' },
                'DidDocument',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/DidEndpoint' },
                'DidEndpoint',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/DidMethod' },
                'DidMethod',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/DidModuleConfig' },
                'DidModuleConfig',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/DocumentLoaderResult' },
                'DocumentLoaderResult',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/Ed25519KeyPair' },
                'Ed25519KeyPair',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/Ed25519Signature2020' },
                'Ed25519Signature2020',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/JWEDocument' },
                'JWEDocument',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/KeysCommand' },
                'KeysCommand',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/NonceStoreData' },
                'NonceStoreData',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/RemoveControllersParam' },
                'RemoveControllersParam',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/RemoveKeysParam' },
                'RemoveKeysParam',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/RemoveServiceEndpointParam' },
                'RemoveServiceEndpointParam',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/Service' },
                'Service',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/TransactionPayload' },
                'TransactionPayload',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                {
                  parentName: 'li',
                  href: '/docs/lisk-decentralized-identifier/interfaces/TransactionPayloadWithoutSignature',
                },
                'TransactionPayloadWithoutSignature',
              ),
            ),
            (0, i.kt)(
              'li',
              { parentName: 'ul' },
              (0, i.kt)(
                'a',
                { parentName: 'li', href: '/docs/lisk-decentralized-identifier/interfaces/VerificationMethod' },
                'VerificationMethod',
              ),
            ),
          ),
          (0, i.kt)('h2', { id: 'type-aliases' }, 'Type Aliases'),
          (0, i.kt)('h3', { id: 'addcontrollerseventdata' }, 'AddControllersEventData'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'AddControllersEventData'),
            ': ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/AddControllersParam' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'AddControllersParam'),
            ),
          ),
          (0, i.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/events/add_controllers_event.ts#L3',
              },
              'packages/lisk-decentralized-identifier/src/types/events/add_controllers_event.ts:3',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'addkeyseventdata' }, 'AddKeysEventData'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'AddKeysEventData'),
            ': ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/AddKeysParam' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'AddKeysParam'),
            ),
          ),
          (0, i.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/events/add_keys_event.ts#L3',
              },
              'packages/lisk-decentralized-identifier/src/types/events/add_keys_event.ts:3',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'addserviceendpointeventdata' }, 'AddServiceEndpointEventData'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'AddServiceEndpointEventData'),
            ': ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/AddServiceEndpointParam' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'AddServiceEndpointParam'),
            ),
          ),
          (0, i.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/events/add_service_endpoint_event.ts#L3',
              },
              'packages/lisk-decentralized-identifier/src/types/events/add_service_endpoint_event.ts:3',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'authorizationresult' }, 'AuthorizationResult'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'AuthorizationResult'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'relationship'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/modules#verificationrelationship' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'VerificationRelationship'),
                  ),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, '"subject"'),
                  ' ',
                  '|',
                  ' ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, '"controller"'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L3',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:3',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'baseloader' }, 'BaseLoader'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'BaseLoader'),
            ': (',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'url'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ') => ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Record'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'any'),
            '>',
            '>',
          ),
          (0, i.kt)('h4', { id: 'type-declaration-1' }, 'Type declaration'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 (',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'url'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Record'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'any'),
            '>',
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'url'),
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
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Record'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'any'),
            '>',
            '>',
          ),
          (0, i.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/resolver.ts#L18',
              },
              'packages/lisk-decentralized-identifier/src/types/resolver.ts:18',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'commandpayload' }, 'CommandPayload'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'CommandPayload'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'CreatePayload'),
            ' ',
            '|',
            ' ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/modules#payloadwithsignature' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'PayloadWithSignature'),
            ),
          ),
          (0, i.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/client.ts#L62',
              },
              'packages/lisk-decentralized-identifier/src/types/client.ts:62',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'createeventdata' }, 'CreateEventData'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'CreateEventData'),
            ': ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/CreateParam' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'CreateParam'),
            ),
          ),
          (0, i.kt)('h4', { id: 'defined-in-6' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/events/create_event.ts#L3',
              },
              'packages/lisk-decentralized-identifier/src/types/events/create_event.ts:3',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'createresolverparam' }, 'CreateResolverParam'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'CreateResolverParam'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Object'),
          ),
          (0, i.kt)('h4', { id: 'type-declaration-2' }, 'Type declaration'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'context?'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'ipc?'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'loader?'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/modules#baseloader' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'BaseLoader'),
                  ),
                  ' ',
                  '|',
                  ' ',
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/modules#documentloader' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'DocumentLoader'),
                  ),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'method?'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/interfaces/DidMethod' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'DidMethod'),
                  ),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'resolver?'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/interfaces/BaseResolver' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'BaseResolver'),
                  ),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'ws?'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'defined-in-7' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/resolver.ts#L20',
              },
              'packages/lisk-decentralized-identifier/src/types/resolver.ts:20',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'didcommands' }, 'DIDCommands'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'DIDCommands'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '"addControllers"'),
            ' ',
            '|',
            ' ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '"addKeys"'),
            ' ',
            '|',
            ' ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '"addServiceEndpoint"'),
            ' ',
            '|',
            ' ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '"create"'),
            ' ',
            '|',
            ' ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '"deactivate"'),
            ' ',
            '|',
            ' ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '"removeControllers"'),
            ' ',
            '|',
            ' ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '"removeKeys"'),
            ' ',
            '|',
            ' ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '"removeServiceEndpoint"'),
          ),
          (0, i.kt)('h4', { id: 'defined-in-8' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/client.ts#L43',
              },
              'packages/lisk-decentralized-identifier/src/types/client.ts:43',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'didtransactionparam' }, 'DIDTransactionParam'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'DIDTransactionParam'),
            ': ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/AddControllersParam' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'AddControllersParam'),
            ),
            ' ',
            '|',
            ' ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/AddKeysParam' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'AddKeysParam'),
            ),
            ' ',
            '|',
            ' ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/AddServiceEndpointParam' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'AddServiceEndpointParam'),
            ),
            ' ',
            '|',
            ' ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/CreateParam' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'CreateParam'),
            ),
            ' ',
            '|',
            ' ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/DeactivateParam' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'DeactivateParam'),
            ),
            ' ',
            '|',
            ' ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/RemoveControllersParam' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'RemoveControllersParam'),
            ),
            ' ',
            '|',
            ' ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/RemoveKeysParam' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'RemoveKeysParam'),
            ),
            ' ',
            '|',
            ' ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/RemoveServiceEndpointParam' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'RemoveServiceEndpointParam'),
            ),
          ),
          (0, i.kt)('h4', { id: 'defined-in-9' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/client.ts#L31',
              },
              'packages/lisk-decentralized-identifier/src/types/client.ts:31',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'deactivateeventdata' }, 'DeactivateEventData'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'DeactivateEventData'),
            ': ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/DeactivateParam' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'DeactivateParam'),
            ),
          ),
          (0, i.kt)('h4', { id: 'defined-in-10' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/events/deactivate_event.ts#L3',
              },
              'packages/lisk-decentralized-identifier/src/types/events/deactivate_event.ts:3',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'decodedtransactionjson' }, 'DecodedTransactionJSON'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'DecodedTransactionJSON'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'T'),
            '>',
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Omit'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'TransactionJSON'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '"params"'),
            '>',
            ' & { ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'params'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'T'),
            '  }',
          ),
          (0, i.kt)('h4', { id: 'type-parameters' }, 'Type parameters'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'T'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Record'),
                  '<',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ', ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'unknown'),
                  '>',
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'defined-in-11' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/client.ts#L76',
              },
              'packages/lisk-decentralized-identifier/src/types/client.ts:76',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'documentloader' }, 'DocumentLoader'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'DocumentLoader'),
            ': (',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'url'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ') => ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/DocumentLoaderResult' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'DocumentLoaderResult'),
            ),
            '>',
          ),
          (0, i.kt)('h4', { id: 'type-declaration-3' }, 'Type declaration'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 (',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'url'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/DocumentLoaderResult' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'DocumentLoaderResult'),
            ),
            '>',
          ),
          (0, i.kt)('h5', { id: 'parameters-1' }, 'Parameters'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'url'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h5', { id: 'returns-1' }, 'Returns'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/DocumentLoaderResult' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'DocumentLoaderResult'),
            ),
            '>',
          ),
          (0, i.kt)('h4', { id: 'defined-in-12' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/resolver.ts#L16',
              },
              'packages/lisk-decentralized-identifier/src/types/resolver.ts:16',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'documentstoredata' }, 'DocumentStoreData'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'DocumentStoreData'),
            ': ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/DidDocument' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
            ),
          ),
          (0, i.kt)('h4', { id: 'defined-in-13' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/stores/document.ts#L3',
              },
              'packages/lisk-decentralized-identifier/src/types/stores/document.ts:3',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'keyagreement' }, 'KeyAgreement'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'KeyAgreement'),
            ': ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/VerificationMethod' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'VerificationMethod'),
            ),
            ' & { ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'privateKeyMultibase?'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '  }',
          ),
          (0, i.kt)('h4', { id: 'defined-in-14' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L18',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:18',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'payloadwithsignature' }, 'PayloadWithSignature'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'PayloadWithSignature'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'AddControllersSignaturePayload'),
            ' ',
            '|',
            ' ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'AddKeysSignaturePayload'),
            ' ',
            '|',
            ' ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'AddServiceEndpointSignaturePayload'),
            ' ',
            '|',
            ' ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'DeactivateSignaturePayload'),
            ' ',
            '|',
            ' ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'RemoveControllersSignaturePayload'),
            ' ',
            '|',
            ' ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'RemoveKeysSignaturePayload'),
            ' ',
            '|',
            ' ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'RemoveServiceEndpointSignaturePayload'),
          ),
          (0, i.kt)('h4', { id: 'defined-in-15' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/client.ts#L53',
              },
              'packages/lisk-decentralized-identifier/src/types/client.ts:53',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'removecontrollerseventdata' }, 'RemoveControllersEventData'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'RemoveControllersEventData'),
            ': ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/RemoveControllersParam' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'RemoveControllersParam'),
            ),
          ),
          (0, i.kt)('h4', { id: 'defined-in-16' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/events/remove_controllers_event.ts#L3',
              },
              'packages/lisk-decentralized-identifier/src/types/events/remove_controllers_event.ts:3',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'removekeyseventdata' }, 'RemoveKeysEventData'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'RemoveKeysEventData'),
            ': ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/RemoveKeysParam' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'RemoveKeysParam'),
            ),
          ),
          (0, i.kt)('h4', { id: 'defined-in-17' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/events/remove_keys_event.ts#L3',
              },
              'packages/lisk-decentralized-identifier/src/types/events/remove_keys_event.ts:3',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'removeserviceendpointeventdata' }, 'RemoveServiceEndpointEventData'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'RemoveServiceEndpointEventData'),
            ': ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/RemoveServiceEndpointParam' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'RemoveServiceEndpointParam'),
            ),
          ),
          (0, i.kt)('h4', { id: 'defined-in-18' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/events/remove_service_endpoint_event.ts#L3',
              },
              'packages/lisk-decentralized-identifier/src/types/events/remove_service_endpoint_event.ts:3',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'verificationrelationship' }, 'VerificationRelationship'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'VerificationRelationship'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '"authentication"'),
            ' ',
            '|',
            ' ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '"assertionMethod"'),
            ' ',
            '|',
            ' ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '"capabilityInvocation"'),
            ' ',
            '|',
            ' ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, '"keyAgreement"'),
          ),
          (0, i.kt)('h4', { id: 'defined-in-19' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/cryptography.ts#L9',
              },
              'packages/lisk-decentralized-identifier/src/types/cryptography.ts:9',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'writeableschema' }, 'WriteableSchema'),
          (0, i.kt)(
            'p',
            null,
            '\u01ac ',
            (0, i.kt)('strong', { parentName: 'p' }, 'WriteableSchema'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Writeable'),
            '<',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Schema'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'defined-in-20' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/types/client.ts#L41',
              },
              'packages/lisk-decentralized-identifier/src/types/client.ts:41',
            ),
          ),
          (0, i.kt)('h2', { id: 'variables' }, 'Variables'),
          (0, i.kt)('h3', { id: 'default' }, 'default'),
          (0, i.kt)(
            'p',
            null,
            '\u2022 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'default'),
            ': ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Object'),
          ),
          (0, i.kt)('h4', { id: 'type-declaration-4' }, 'Type declaration'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'client'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/namespaces/client' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'client'),
                  ),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'cryptography'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/namespaces/cryptography' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'cryptography'),
                  ),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'resolver'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/namespaces/resolver' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'resolver'),
                  ),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'utils'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/namespaces/utils' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'utils'),
                  ),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'getAddressDIDFromPublicKey'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '(',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'chainspace'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ', ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'publicKey'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Buffer'),
                  ') => ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'getDIDDocument'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '(',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'did'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ', ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'options'),
                  ': ',
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/modules#createresolverparam' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'CreateResolverParam'),
                  ),
                  ') => ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'Promise'),
                  '<',
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/interfaces/DidDocument' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
                  ),
                  ' ',
                  '|',
                  ' ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'undefined'),
                  '>',
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'parseDIDComponent'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '(',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'did'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ') => { ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'chainspace'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'any'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'did'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fragment'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'any'),
                  ' = parsedDID.fragment; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'method'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'any'),
                  ' = parsedDID.method; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'namespace'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'path'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'any'),
                  ' = parsedDID.path; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'query'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'any'),
                  ' = parsedDID.query; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'scheme'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  " = 'did'; ",
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'uniqueId'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  ' ; ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'uri'),
                  ': ',
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  '  }',
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'defined-in-21' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/index.ts#L15',
              },
              'packages/lisk-decentralized-identifier/src/index.ts:15',
            ),
          ),
          (0, i.kt)('h2', { id: 'functions' }, 'Functions'),
          (0, i.kt)('h3', { id: 'getaddressdidfrompublickey' }, 'getAddressDIDFromPublicKey'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'getAddressDIDFromPublicKey'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'chainspace'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'publicKey'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'string'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'chainspace'),
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
          (0, i.kt)('h4', { id: 'returns-2' }, 'Returns'),
          (0, i.kt)('p', null, (0, i.kt)('inlineCode', { parentName: 'p' }, 'string')),
          (0, i.kt)('h4', { id: 'defined-in-22' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/did.ts#L59',
              },
              'packages/lisk-decentralized-identifier/src/did.ts:59',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'getdiddocument' }, 'getDIDDocument'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'getDIDDocument'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'did'),
            ', ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'options'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Promise'),
            '<',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/DidDocument' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
            ),
            ' ',
            '|',
            ' ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'undefined'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'options'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-decentralized-identifier/modules#createresolverparam' },
                    (0, i.kt)('inlineCode', { parentName: 'a' }, 'CreateResolverParam'),
                  ),
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
            (0, i.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/DidDocument' },
              (0, i.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
            ),
            ' ',
            '|',
            ' ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'undefined'),
            '>',
          ),
          (0, i.kt)('h4', { id: 'defined-in-23' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/did.ts#L67',
              },
              'packages/lisk-decentralized-identifier/src/did.ts:67',
            ),
          ),
          (0, i.kt)('hr', null),
          (0, i.kt)('h3', { id: 'parsedidcomponent' }, 'parseDIDComponent'),
          (0, i.kt)(
            'p',
            null,
            '\u25b8 ',
            (0, i.kt)('strong', { parentName: 'p' }, 'parseDIDComponent'),
            '(',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'did'),
            '): ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'Object'),
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
          (0, i.kt)('h4', { id: 'returns-4' }, 'Returns'),
          (0, i.kt)('p', null, (0, i.kt)('inlineCode', { parentName: 'p' }, 'Object')),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'chainspace'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'any'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'fragment'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'any'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'method'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'any'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'namespace'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'path'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'any'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'query'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'any'),
                ),
              ),
              (0, i.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'scheme'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'uniqueId'),
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
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'uri'),
                ),
                (0, i.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, i.kt)('inlineCode', { parentName: 'td' }, 'string'),
                ),
              ),
            ),
          ),
          (0, i.kt)('h4', { id: 'defined-in-24' }, 'Defined in'),
          (0, i.kt)(
            'p',
            null,
            (0, i.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/f053e54/packages/lisk-decentralized-identifier/src/did.ts#L9',
              },
              'packages/lisk-decentralized-identifier/src/did.ts:9',
            ),
          ),
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
