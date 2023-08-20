'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [7463],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => _, kt: () => c });
      var i = n(2784);
      function d(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function l(e, t) {
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
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                d(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function r(e, t) {
        if (null == e) return {};
        var n,
          i,
          d = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              d = {},
              l = Object.keys(e);
            for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (d[n] = e[n]);
            return d;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (i = 0; i < l.length; i++)
            (n = l[i]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (d[n] = e[n]));
        }
        return d;
      }
      var s = i.createContext({}),
        p = function (e) {
          var t = i.useContext(s),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : a(a({}, t), e)), n;
        },
        _ = function (e) {
          var t = p(e.components);
          return i.createElement(s.Provider, { value: t }, e.children);
        },
        o = 'mdxType',
        k = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return i.createElement(i.Fragment, {}, t);
          },
        },
        u = i.forwardRef(function (e, t) {
          var n = e.components,
            d = e.mdxType,
            l = e.originalType,
            s = e.parentName,
            _ = r(e, ['components', 'mdxType', 'originalType', 'parentName']),
            o = p(n),
            u = d,
            c = o[''.concat(s, '.').concat(u)] || o[u] || k[u] || l;
          return n
            ? i.createElement(c, a(a({ ref: t }, _), {}, { components: n }))
            : i.createElement(c, a({ ref: t }, _));
        });
      function c(e, t) {
        var n = arguments,
          d = t && t.mdxType;
        if ('string' == typeof e || d) {
          var l = n.length,
            a = new Array(l);
          a[0] = u;
          var r = {};
          for (var s in t) hasOwnProperty.call(t, s) && (r[s] = t[s]);
          (r.originalType = e), (r[o] = 'string' == typeof e ? e : d), (a[1] = r);
          for (var p = 2; p < l; p++) a[p] = n[p];
          return i.createElement.apply(null, a);
        }
        return i.createElement.apply(null, n);
      }
      u.displayName = 'MDXCreateElement';
    },
    373: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => s,
          contentTitle: () => a,
          default: () => k,
          frontMatter: () => l,
          metadata: () => r,
          toc: () => p,
        });
      var i = n(7896),
        d = (n(2784), n(876));
      const l = {
          id: 'did.utils.constant',
          title: 'Namespace: constant',
          sidebar_label: 'did.utils.constant',
          custom_edit_url: null,
        },
        a = void 0,
        r = {
          unversionedId: 'lisk-did/namespaces/did.utils.constant',
          id: 'lisk-did/namespaces/did.utils.constant',
          title: 'Namespace: constant',
          description: 'did.utils.constant',
          source: '@site/docs/lisk-did/namespaces/did.utils.constant.md',
          sourceDirName: 'lisk-did/namespaces',
          slug: '/lisk-did/namespaces/did.utils.constant',
          permalink: '/docs/lisk-did/namespaces/did.utils.constant',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.utils.constant',
            title: 'Namespace: constant',
            sidebar_label: 'did.utils.constant',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.utils.array', permalink: '/docs/lisk-did/namespaces/did.utils.array' },
          next: { title: 'did.utils', permalink: '/docs/lisk-did/namespaces/did.utils' },
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
        _ = { toc: p },
        o = 'wrapper';
      function k(e) {
        let { components: t, ...n } = e;
        return (0, d.kt)(
          o,
          (0, i.Z)({}, _, n, { components: t, mdxType: 'MDXLayout' }),
          (0, d.kt)(
            'p',
            null,
            (0, d.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.',
            (0, d.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did.utils' }, 'utils'),
            '.constant',
          ),
          (0, d.kt)('h2', { id: 'variables' }, 'Variables'),
          (0, d.kt)('h3', { id: 'did_context_url' }, 'DID', '_', 'CONTEXT', '_', 'URL'),
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, d.kt)('strong', { parentName: 'p' }, 'DID', '_', 'CONTEXT', '_', 'URL'),
            ': ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '"https://www.w3.org/ns/did/v1"'),
          ),
          (0, d.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/constant/did.d.ts:10'),
          (0, d.kt)('hr', null),
          (0, d.kt)(
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
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, d.kt)(
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
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, d.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/constant/cryptography.d.ts:6'),
          (0, d.kt)('hr', null),
          (0, d.kt)(
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
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, d.kt)(
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
            (0, d.kt)('inlineCode', { parentName: 'p' }, '"Ed25519VerificationKey2020"'),
          ),
          (0, d.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/constant/cryptography.d.ts:4'),
          (0, d.kt)('hr', null),
          (0, d.kt)('h3', { id: 'lisk_did_method_name' }, 'LISK', '_', 'DID', '_', 'METHOD', '_', 'NAME'),
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, d.kt)('strong', { parentName: 'p' }, 'LISK', '_', 'DID', '_', 'METHOD', '_', 'NAME'),
            ': ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '"lisk"'),
          ),
          (0, d.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/constant/did.d.ts:8'),
          (0, d.kt)('hr', null),
          (0, d.kt)('h3', { id: 'lisk_did_prefix' }, 'LISK', '_', 'DID', '_', 'PREFIX'),
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, d.kt)('strong', { parentName: 'p' }, 'LISK', '_', 'DID', '_', 'PREFIX'),
            ': ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, d.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/constant/did.d.ts:9'),
          (0, d.kt)('hr', null),
          (0, d.kt)('h3', { id: 'lisk_private_key_length' }, 'LISK', '_', 'PRIVATE', '_', 'KEY', '_', 'LENGTH'),
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, d.kt)('strong', { parentName: 'p' }, 'LISK', '_', 'PRIVATE', '_', 'KEY', '_', 'LENGTH'),
            ': ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '64'),
          ),
          (0, d.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/constant/did.d.ts:3'),
          (0, d.kt)('hr', null),
          (0, d.kt)('h3', { id: 'lisk_public_key_length' }, 'LISK', '_', 'PUBLIC', '_', 'KEY', '_', 'LENGTH'),
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, d.kt)('strong', { parentName: 'p' }, 'LISK', '_', 'PUBLIC', '_', 'KEY', '_', 'LENGTH'),
            ': ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '32'),
          ),
          (0, d.kt)('h4', { id: 'defined-in-6' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/constant/did.d.ts:1'),
          (0, d.kt)('hr', null),
          (0, d.kt)('h3', { id: 'multibase_base58btc_header' }, 'MULTIBASE', '_', 'BASE58BTC', '_', 'HEADER'),
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, d.kt)('strong', { parentName: 'p' }, 'MULTIBASE', '_', 'BASE58BTC', '_', 'HEADER'),
            ': ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '"z"'),
          ),
          (0, d.kt)('h4', { id: 'defined-in-7' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/constant/did.d.ts:7'),
          (0, d.kt)('hr', null),
          (0, d.kt)(
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
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, d.kt)('strong', { parentName: 'p' }, 'MULTIBASE', '_', 'PRIVATE', '_', 'KEY', '_', 'LENGTH'),
            ': ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '91'),
          ),
          (0, d.kt)('h4', { id: 'defined-in-8' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/constant/did.d.ts:4'),
          (0, d.kt)('hr', null),
          (0, d.kt)('h3', { id: 'multibase_public_key_length' }, 'MULTIBASE', '_', 'PUBLIC', '_', 'KEY', '_', 'LENGTH'),
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, d.kt)('strong', { parentName: 'p' }, 'MULTIBASE', '_', 'PUBLIC', '_', 'KEY', '_', 'LENGTH'),
            ': ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '48'),
          ),
          (0, d.kt)('h4', { id: 'defined-in-9' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/constant/did.d.ts:2'),
          (0, d.kt)('hr', null),
          (0, d.kt)(
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
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, d.kt)('strong', { parentName: 'p' }, 'MULTICODEC', '_', 'ED25519', '_', 'PRIV', '_', 'HEADER'),
            ': ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Uint8Array'),
          ),
          (0, d.kt)('h4', { id: 'defined-in-10' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/constant/did.d.ts:6'),
          (0, d.kt)('hr', null),
          (0, d.kt)(
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
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, d.kt)('strong', { parentName: 'p' }, 'MULTICODEC', '_', 'ED25519', '_', 'PUB', '_', 'HEADER'),
            ': ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Uint8Array'),
          ),
          (0, d.kt)('h4', { id: 'defined-in-11' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/constant/did.d.ts:5'),
          (0, d.kt)('hr', null),
          (0, d.kt)('h3', { id: 'signature_bytes_length' }, 'SIGNATURE', '_', 'BYTES', '_', 'LENGTH'),
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, d.kt)('strong', { parentName: 'p' }, 'SIGNATURE', '_', 'BYTES', '_', 'LENGTH'),
            ': ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, '64'),
          ),
          (0, d.kt)('h4', { id: 'defined-in-12' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/constant/cryptography.d.ts:2'),
          (0, d.kt)('hr', null),
          (0, d.kt)('h3', { id: 'supported_relationship' }, 'SUPPORTED', '_', 'RELATIONSHIP'),
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, d.kt)('strong', { parentName: 'p' }, 'SUPPORTED', '_', 'RELATIONSHIP'),
            ': ',
            (0, d.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/namespaces/did#verificationrelationship' },
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'VerificationRelationship'),
            ),
            '[]',
          ),
          (0, d.kt)('h4', { id: 'defined-in-13' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/constant/cryptography.d.ts:7'),
          (0, d.kt)('hr', null),
          (0, d.kt)(
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
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, d.kt)(
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
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'any'),
          ),
          (0, d.kt)('h4', { id: 'defined-in-14' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/constant/cryptography.d.ts:5'),
          (0, d.kt)('hr', null),
          (0, d.kt)(
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
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'Const'),
            ' ',
            (0, d.kt)(
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
            (0, d.kt)('inlineCode', { parentName: 'p' }, '"X25519KeyAgreementKey2020"'),
          ),
          (0, d.kt)('h4', { id: 'defined-in-15' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/utils/constant/cryptography.d.ts:3'),
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
