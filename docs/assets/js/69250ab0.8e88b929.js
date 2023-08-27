'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [7311],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => c, kt: () => u });
      var n = i(2784);
      function r(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = i),
          e
        );
      }
      function d(e, t) {
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
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(i), !0).forEach(function (t) {
                r(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : d(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var i,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var i,
              n,
              r = {},
              d = Object.keys(e);
            for (n = 0; n < d.length; n++) (i = d[n]), t.indexOf(i) >= 0 || (r[i] = e[i]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var d = Object.getOwnPropertySymbols(e);
          for (n = 0; n < d.length; n++)
            (i = d[n]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]));
        }
        return r;
      }
      var s = n.createContext({}),
        o = function (e) {
          var t = n.useContext(s),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : a(a({}, t), e)), i;
        },
        c = function (e) {
          var t = o(e.components);
          return n.createElement(s.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        k = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        f = n.forwardRef(function (e, t) {
          var i = e.components,
            r = e.mdxType,
            d = e.originalType,
            s = e.parentName,
            c = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = o(i),
            f = r,
            u = p[''.concat(s, '.').concat(f)] || p[f] || k[f] || d;
          return i
            ? n.createElement(u, a(a({ ref: t }, c), {}, { components: i }))
            : n.createElement(u, a({ ref: t }, c));
        });
      function u(e, t) {
        var i = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var d = i.length,
            a = new Array(d);
          a[0] = f;
          var l = {};
          for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
          (l.originalType = e), (l[p] = 'string' == typeof e ? e : r), (a[1] = l);
          for (var o = 2; o < d; o++) a[o] = i[o];
          return n.createElement.apply(null, a);
        }
        return n.createElement.apply(null, i);
      }
      f.displayName = 'MDXCreateElement';
    },
    6962: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => s,
          contentTitle: () => a,
          default: () => k,
          frontMatter: () => d,
          metadata: () => l,
          toc: () => o,
        });
      var n = i(7896),
        r = (i(2784), i(876));
      const d = {
          id: 'DidDocument',
          title: 'Interface: DidDocument',
          sidebar_label: 'DidDocument',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        a = void 0,
        l = {
          unversionedId: 'lisk-decentralized-identifier/interfaces/DidDocument',
          id: 'lisk-decentralized-identifier/interfaces/DidDocument',
          title: 'Interface: DidDocument',
          description: 'Properties',
          source: '@site/docs/lisk-decentralized-identifier/interfaces/DidDocument.md',
          sourceDirName: 'lisk-decentralized-identifier/interfaces',
          slug: '/lisk-decentralized-identifier/interfaces/DidDocument',
          permalink: '/docs/lisk-decentralized-identifier/interfaces/DidDocument',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'DidDocument',
            title: 'Interface: DidDocument',
            sidebar_label: 'DidDocument',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'DeactivateParam',
            permalink: '/docs/lisk-decentralized-identifier/interfaces/DeactivateParam',
          },
          next: { title: 'DidEndpoint', permalink: '/docs/lisk-decentralized-identifier/interfaces/DidEndpoint' },
        },
        s = {},
        o = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: '@context', id: 'context', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'assertionMethod', id: 'assertionmethod', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'authentication', id: 'authentication', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
          { value: 'capabilityInvocation', id: 'capabilityinvocation', level: 3 },
          { value: 'Defined in', id: 'defined-in-3', level: 4 },
          { value: 'controller', id: 'controller', level: 3 },
          { value: 'Defined in', id: 'defined-in-4', level: 4 },
          { value: 'id', id: 'id', level: 3 },
          { value: 'Defined in', id: 'defined-in-5', level: 4 },
          { value: 'keyAgreement', id: 'keyagreement', level: 3 },
          { value: 'Defined in', id: 'defined-in-6', level: 4 },
          { value: 'service', id: 'service', level: 3 },
          { value: 'Defined in', id: 'defined-in-7', level: 4 },
          { value: 'verificationMethod', id: 'verificationmethod', level: 3 },
          { value: 'Defined in', id: 'defined-in-8', level: 4 },
        ],
        c = { toc: o },
        p = 'wrapper';
      function k(e) {
        let { components: t, ...i } = e;
        return (0, r.kt)(
          p,
          (0, n.Z)({}, c, i, { components: t, mdxType: 'MDXLayout' }),
          (0, r.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, r.kt)('h3', { id: 'context' }, '@context'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, '@context'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '[]',
          ),
          (0, r.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/types/did.ts#L4',
              },
              'packages/lisk-decentralized-identifier/src/types/did.ts:4',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'assertionmethod' }, 'assertionMethod'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'assertionMethod'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '[]',
          ),
          (0, r.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/types/did.ts#L9',
              },
              'packages/lisk-decentralized-identifier/src/types/did.ts:9',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'authentication' }, 'authentication'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'authentication'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '[]',
          ),
          (0, r.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/types/did.ts#L8',
              },
              'packages/lisk-decentralized-identifier/src/types/did.ts:8',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'capabilityinvocation' }, 'capabilityInvocation'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'capabilityInvocation'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '[]',
          ),
          (0, r.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/types/did.ts#L10',
              },
              'packages/lisk-decentralized-identifier/src/types/did.ts:10',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'controller' }, 'controller'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'controller'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '[]',
          ),
          (0, r.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/types/did.ts#L6',
              },
              'packages/lisk-decentralized-identifier/src/types/did.ts:6',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'id' }, 'id'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'id'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, r.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/types/did.ts#L5',
              },
              'packages/lisk-decentralized-identifier/src/types/did.ts:5',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'keyagreement' }, 'keyAgreement'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'keyAgreement'),
            ': ',
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/VerificationMethod' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'VerificationMethod'),
            ),
            '[]',
          ),
          (0, r.kt)('h4', { id: 'defined-in-6' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/types/did.ts#L11',
              },
              'packages/lisk-decentralized-identifier/src/types/did.ts:11',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'service' }, 'service'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'service'),
            ': ',
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/Service' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'Service'),
            ),
            '[]',
          ),
          (0, r.kt)('h4', { id: 'defined-in-7' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/types/did.ts#L12',
              },
              'packages/lisk-decentralized-identifier/src/types/did.ts:12',
            ),
          ),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'verificationmethod' }, 'verificationMethod'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'verificationMethod'),
            ': ',
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-decentralized-identifier/interfaces/VerificationMethod' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'VerificationMethod'),
            ),
            '[]',
          ),
          (0, r.kt)('h4', { id: 'defined-in-8' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/dd73109/packages/lisk-decentralized-identifier/src/types/did.ts#L7',
              },
              'packages/lisk-decentralized-identifier/src/types/did.ts:7',
            ),
          ),
        );
      }
      k.isMDXComponent = !0;
    },
  },
]);
