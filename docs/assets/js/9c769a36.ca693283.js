'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [611],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => c, kt: () => u });
      var n = i(2784);
      function a(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = i),
          e
        );
      }
      function l(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(i), !0).forEach(function (t) {
                a(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : l(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      function r(e, t) {
        if (null == e) return {};
        var i,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var i,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (i = l[n]), t.indexOf(i) >= 0 || (a[i] = e[i]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (i = l[n]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (a[i] = e[i]));
        }
        return a;
      }
      var s = n.createContext({}),
        p = function (e) {
          var t = n.useContext(s),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : d(d({}, t), e)), i;
        },
        c = function (e) {
          var t = p(e.components);
          return n.createElement(s.Provider, { value: t }, e.children);
        },
        o = 'mdxType',
        k = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        _ = n.forwardRef(function (e, t) {
          var i = e.components,
            a = e.mdxType,
            l = e.originalType,
            s = e.parentName,
            c = r(e, ['components', 'mdxType', 'originalType', 'parentName']),
            o = p(i),
            _ = a,
            u = o[''.concat(s, '.').concat(_)] || o[_] || k[_] || l;
          return i
            ? n.createElement(u, d(d({ ref: t }, c), {}, { components: i }))
            : n.createElement(u, d({ ref: t }, c));
        });
      function u(e, t) {
        var i = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var l = i.length,
            d = new Array(l);
          d[0] = _;
          var r = {};
          for (var s in t) hasOwnProperty.call(t, s) && (r[s] = t[s]);
          (r.originalType = e), (r[o] = 'string' == typeof e ? e : a), (d[1] = r);
          for (var p = 2; p < l; p++) d[p] = i[p];
          return n.createElement.apply(null, d);
        }
        return n.createElement.apply(null, i);
      }
      _.displayName = 'MDXCreateElement';
    },
    2682: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => s,
          contentTitle: () => d,
          default: () => k,
          frontMatter: () => l,
          metadata: () => r,
          toc: () => p,
        });
      var n = i(7896),
        a = (i(2784), i(876));
      const l = {
          id: 'utils.constant',
          title: 'Namespace: constant',
          sidebar_label: 'utils.constant',
          custom_edit_url: null,
        },
        d = void 0,
        r = {
          unversionedId: 'lisk-decentralized-identifier/namespaces/utils.constant',
          id: 'lisk-decentralized-identifier/namespaces/utils.constant',
          title: 'Namespace: constant',
          description: 'utils.constant',
          source: '@site/docs/lisk-decentralized-identifier/namespaces/utils.constant.md',
          sourceDirName: 'lisk-decentralized-identifier/namespaces',
          slug: '/lisk-decentralized-identifier/namespaces/utils.constant',
          permalink: '/docs/lisk-decentralized-identifier/namespaces/utils.constant',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'utils.constant',
            title: 'Namespace: constant',
            sidebar_label: 'utils.constant',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'utils.array', permalink: '/docs/lisk-decentralized-identifier/namespaces/utils.array' },
          next: { title: 'utils.object', permalink: '/docs/lisk-decentralized-identifier/namespaces/utils.object' },
        },
        s = {},
        p = [
          { value: 'Variables', id: 'variables', level: 2 },
          { value: 'DID_CONTEXT_URL', id: 'did_context_url', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'ED25519_VERIFICATION_KEY_2020_CONTEXT', id: 'ed25519_verification_key_2020_context', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'ED25519_VERIFICATION_KEY_2020_TYPE', id: 'ed25519_verification_key_2020_type', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'LISK_DID_METHOD_NAME', id: 'lisk_did_method_name', level: 3 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'LISK_DID_PREFIX', id: 'lisk_did_prefix', level: 3 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
          { value: 'LISK_PRIVATE_KEY_LENGTH', id: 'lisk_private_key_length', level: 3 },
          { value: 'Defined in', id: 'defined-in-5', level: 4 },
          { value: 'LISK_PUBLIC_KEY_LENGTH', id: 'lisk_public_key_length', level: 3 },
          { value: 'Defined in', id: 'defined-in-6', level: 4 },
          { value: 'MULTIBASE_BASE58BTC_HEADER', id: 'multibase_base58btc_header', level: 3 },
          { value: 'Defined in', id: 'defined-in-7', level: 4 },
          { value: 'MULTIBASE_PRIVATE_KEY_LENGTH', id: 'multibase_private_key_length', level: 3 },
          { value: 'Defined in', id: 'defined-in-8', level: 4 },
          { value: 'MULTIBASE_PUBLIC_KEY_LENGTH', id: 'multibase_public_key_length', level: 3 },
          { value: 'Defined in', id: 'defined-in-9', level: 4 },
          { value: 'MULTICODEC_ED25519_PRIV_HEADER', id: 'multicodec_ed25519_priv_header', level: 3 },
          { value: 'Defined in', id: 'defined-in-10', level: 4 },
          { value: 'MULTICODEC_ED25519_PUB_HEADER', id: 'multicodec_ed25519_pub_header', level: 3 },
          { value: 'Defined in', id: 'defined-in-11', level: 4 },
          { value: 'SIGNATURE_BYTES_LENGTH', id: 'signature_bytes_length', level: 3 },
          { value: 'Defined in', id: 'defined-in-12', level: 4 },
          { value: 'SUPPORTED_RELATIONSHIP', id: 'supported_relationship', level: 3 },
          { value: 'Defined in', id: 'defined-in-13', level: 4 },
          { value: 'X25519_KEY_AGREEMENT_KEY_2020_CONTEXT', id: 'x25519_key_agreement_key_2020_context', level: 3 },
          { value: 'Defined in', id: 'defined-in-14', level: 4 },
          { value: 'X25519_KEY_AGREEMENT_KEY_2020_TYPE', id: 'x25519_key_agreement_key_2020_type', level: 3 },
          { value: 'Defined in', id: 'defined-in-15', level: 4 },
        ],
        c = { toc: p },
        o = 'wrapper';
      function k(e) {
        let { components: t, ...i } = e;
        return (0, a.kt)(
          o,
          (0, n.Z)({}, c, i, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('a', { parentName: 'p', href: '/docs/lisk-decentralized-identifier/namespaces/utils' }, 'utils'),
            '.constant',
          ),
          (0, a.kt)('h2', { id: 'variables' }, 'Variables'),
          (0, a.kt)('h3', { id: 'did_context_url' }, 'DID', '_', 'CONTEXT', '_', 'URL'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'DID', '_', 'CONTEXT', '_', 'URL'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '"https://www.w3.org/ns/did/v1"'),
          ),
          (0, a.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/utils/constant/did.ts#L10',
              },
              'packages/lisk-decentralized-identifier/src/utils/constant/did.ts:10',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)(
            'h3',
            { id: 'ed25519_verification_key_2020_context' },
            'ED25519',
            '_',
            'VERIFICATION',
            '_',
            'KEY',
            '_',
            '2020',
            '_',
            'CONTEXT',
          ),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, a.kt)(
              'strong',
              { parentName: 'p' },
              'ED25519',
              '_',
              'VERIFICATION',
              '_',
              'KEY',
              '_',
              '2020',
              '_',
              'CONTEXT',
            ),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ' = ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Ed25519VerificationKey2020.SUITE_CONTEXT'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/utils/constant/cryptography.ts#L11',
              },
              'packages/lisk-decentralized-identifier/src/utils/constant/cryptography.ts:11',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)(
            'h3',
            { id: 'ed25519_verification_key_2020_type' },
            'ED25519',
            '_',
            'VERIFICATION',
            '_',
            'KEY',
            '_',
            '2020',
            '_',
            'TYPE',
          ),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, a.kt)(
              'strong',
              { parentName: 'p' },
              'ED25519',
              '_',
              'VERIFICATION',
              '_',
              'KEY',
              '_',
              '2020',
              '_',
              'TYPE',
            ),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '"Ed25519VerificationKey2020"'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/utils/constant/cryptography.ts#L8',
              },
              'packages/lisk-decentralized-identifier/src/utils/constant/cryptography.ts:8',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'lisk_did_method_name' }, 'LISK', '_', 'DID', '_', 'METHOD', '_', 'NAME'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'LISK', '_', 'DID', '_', 'METHOD', '_', 'NAME'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '"lisk"'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/utils/constant/did.ts#L8',
              },
              'packages/lisk-decentralized-identifier/src/utils/constant/did.ts:8',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'lisk_did_prefix' }, 'LISK', '_', 'DID', '_', 'PREFIX'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'LISK', '_', 'DID', '_', 'PREFIX'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/utils/constant/did.ts#L9',
              },
              'packages/lisk-decentralized-identifier/src/utils/constant/did.ts:9',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'lisk_private_key_length' }, 'LISK', '_', 'PRIVATE', '_', 'KEY', '_', 'LENGTH'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'LISK', '_', 'PRIVATE', '_', 'KEY', '_', 'LENGTH'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '64'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/utils/constant/did.ts#L3',
              },
              'packages/lisk-decentralized-identifier/src/utils/constant/did.ts:3',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'lisk_public_key_length' }, 'LISK', '_', 'PUBLIC', '_', 'KEY', '_', 'LENGTH'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'LISK', '_', 'PUBLIC', '_', 'KEY', '_', 'LENGTH'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '32'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-6' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/utils/constant/did.ts#L1',
              },
              'packages/lisk-decentralized-identifier/src/utils/constant/did.ts:1',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'multibase_base58btc_header' }, 'MULTIBASE', '_', 'BASE58BTC', '_', 'HEADER'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'MULTIBASE', '_', 'BASE58BTC', '_', 'HEADER'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '"z"'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-7' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/utils/constant/did.ts#L7',
              },
              'packages/lisk-decentralized-identifier/src/utils/constant/did.ts:7',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)(
            'h3',
            { id: 'multibase_private_key_length' },
            'MULTIBASE',
            '_',
            'PRIVATE',
            '_',
            'KEY',
            '_',
            'LENGTH',
          ),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'MULTIBASE', '_', 'PRIVATE', '_', 'KEY', '_', 'LENGTH'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '91'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-8' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/utils/constant/did.ts#L4',
              },
              'packages/lisk-decentralized-identifier/src/utils/constant/did.ts:4',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'multibase_public_key_length' }, 'MULTIBASE', '_', 'PUBLIC', '_', 'KEY', '_', 'LENGTH'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'MULTIBASE', '_', 'PUBLIC', '_', 'KEY', '_', 'LENGTH'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '48'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-9' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/utils/constant/did.ts#L2',
              },
              'packages/lisk-decentralized-identifier/src/utils/constant/did.ts:2',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)(
            'h3',
            { id: 'multicodec_ed25519_priv_header' },
            'MULTICODEC',
            '_',
            'ED25519',
            '_',
            'PRIV',
            '_',
            'HEADER',
          ),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'MULTICODEC', '_', 'ED25519', '_', 'PRIV', '_', 'HEADER'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Uint8Array'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-10' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/utils/constant/did.ts#L6',
              },
              'packages/lisk-decentralized-identifier/src/utils/constant/did.ts:6',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)(
            'h3',
            { id: 'multicodec_ed25519_pub_header' },
            'MULTICODEC',
            '_',
            'ED25519',
            '_',
            'PUB',
            '_',
            'HEADER',
          ),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'MULTICODEC', '_', 'ED25519', '_', 'PUB', '_', 'HEADER'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Uint8Array'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-11' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/utils/constant/did.ts#L5',
              },
              'packages/lisk-decentralized-identifier/src/utils/constant/did.ts:5',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'signature_bytes_length' }, 'SIGNATURE', '_', 'BYTES', '_', 'LENGTH'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'SIGNATURE', '_', 'BYTES', '_', 'LENGTH'),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '64'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-12' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/utils/constant/cryptography.ts#L5',
              },
              'packages/lisk-decentralized-identifier/src/utils/constant/cryptography.ts:5',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)('h3', { id: 'supported_relationship' }, 'SUPPORTED', '_', 'RELATIONSHIP'),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, a.kt)('strong', { parentName: 'p' }, 'SUPPORTED', '_', 'RELATIONSHIP'),
            ': ',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/modules#verificationrelationship' },
              (0, a.kt)('inlineCode', { parentName: 'a' }, 'VerificationRelationship'),
            ),
            '[]',
          ),
          (0, a.kt)('h4', { id: 'defined-in-13' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/utils/constant/cryptography.ts#L13',
              },
              'packages/lisk-decentralized-identifier/src/utils/constant/cryptography.ts:13',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)(
            'h3',
            { id: 'x25519_key_agreement_key_2020_context' },
            'X25519',
            '_',
            'KEY',
            '_',
            'AGREEMENT',
            '_',
            'KEY',
            '_',
            '2020',
            '_',
            'CONTEXT',
          ),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, a.kt)(
              'strong',
              { parentName: 'p' },
              'X25519',
              '_',
              'KEY',
              '_',
              'AGREEMENT',
              '_',
              'KEY',
              '_',
              '2020',
              '_',
              'CONTEXT',
            ),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'any'),
            ' = ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'X25519KeyAgreementKey2020.SUITE_CONTEXT'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-14' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/utils/constant/cryptography.ts#L10',
              },
              'packages/lisk-decentralized-identifier/src/utils/constant/cryptography.ts:10',
            ),
          ),
          (0, a.kt)('hr', null),
          (0, a.kt)(
            'h3',
            { id: 'x25519_key_agreement_key_2020_type' },
            'X25519',
            '_',
            'KEY',
            '_',
            'AGREEMENT',
            '_',
            'KEY',
            '_',
            '2020',
            '_',
            'TYPE',
          ),
          (0, a.kt)(
            'p',
            null,
            '\u2022 ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, a.kt)(
              'strong',
              { parentName: 'p' },
              'X25519',
              '_',
              'KEY',
              '_',
              'AGREEMENT',
              '_',
              'KEY',
              '_',
              '2020',
              '_',
              'TYPE',
            ),
            ': ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, '"X25519KeyAgreementKey2020"'),
          ),
          (0, a.kt)('h4', { id: 'defined-in-15' }, 'Defined in'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-decentralized-identifier/src/utils/constant/cryptography.ts#L7',
              },
              'packages/lisk-decentralized-identifier/src/utils/constant/cryptography.ts:7',
            ),
          ),
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
