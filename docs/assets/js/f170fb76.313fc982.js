'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [1502],
  {
    876: (e, i, t) => {
      t.d(i, { Zo: () => s, kt: () => k });
      var n = t(2784);
      function d(e, i, t) {
        return (
          i in e
            ? Object.defineProperty(e, i, { value: t, enumerable: !0, configurable: !0, writable: !0 })
            : (e[i] = t),
          e
        );
      }
      function r(e, i) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          i &&
            (n = n.filter(function (i) {
              return Object.getOwnPropertyDescriptor(e, i).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function a(e) {
        for (var i = 1; i < arguments.length; i++) {
          var t = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? r(Object(t), !0).forEach(function (i) {
                d(e, i, t[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : r(Object(t)).forEach(function (i) {
                Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
              });
        }
        return e;
      }
      function l(e, i) {
        if (null == e) return {};
        var t,
          n,
          d = (function (e, i) {
            if (null == e) return {};
            var t,
              n,
              d = {},
              r = Object.keys(e);
            for (n = 0; n < r.length; n++) (t = r[n]), i.indexOf(t) >= 0 || (d[t] = e[t]);
            return d;
          })(e, i);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (n = 0; n < r.length; n++)
            (t = r[n]), i.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (d[t] = e[t]));
        }
        return d;
      }
      var o = n.createContext({}),
        c = function (e) {
          var i = n.useContext(o),
            t = i;
          return e && (t = 'function' == typeof e ? e(i) : a(a({}, i), e)), t;
        },
        s = function (e) {
          var i = c(e.components);
          return n.createElement(o.Provider, { value: i }, e.children);
        },
        p = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var i = e.children;
            return n.createElement(n.Fragment, {}, i);
          },
        },
        f = n.forwardRef(function (e, i) {
          var t = e.components,
            d = e.mdxType,
            r = e.originalType,
            o = e.parentName,
            s = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = c(t),
            f = d,
            k = p[''.concat(o, '.').concat(f)] || p[f] || u[f] || r;
          return t
            ? n.createElement(k, a(a({ ref: i }, s), {}, { components: t }))
            : n.createElement(k, a({ ref: i }, s));
        });
      function k(e, i) {
        var t = arguments,
          d = i && i.mdxType;
        if ('string' == typeof e || d) {
          var r = t.length,
            a = new Array(r);
          a[0] = f;
          var l = {};
          for (var o in i) hasOwnProperty.call(i, o) && (l[o] = i[o]);
          (l.originalType = e), (l[p] = 'string' == typeof e ? e : d), (a[1] = l);
          for (var c = 2; c < r; c++) a[c] = t[c];
          return n.createElement.apply(null, a);
        }
        return n.createElement.apply(null, t);
      }
      f.displayName = 'MDXCreateElement';
    },
    7934: (e, i, t) => {
      t.r(i),
        t.d(i, {
          assets: () => o,
          contentTitle: () => a,
          default: () => u,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => c,
        });
      var n = t(7896),
        d = (t(2784), t(876));
      const r = {
          id: 'did.DidDocument',
          title: 'Interface: DidDocument',
          sidebar_label: 'did.DidDocument',
          custom_edit_url: null,
        },
        a = void 0,
        l = {
          unversionedId: 'lisk-did/interfaces/did.DidDocument',
          id: 'lisk-did/interfaces/did.DidDocument',
          title: 'Interface: DidDocument',
          description: 'did.DidDocument',
          source: '@site/docs/lisk-did/interfaces/did.DidDocument.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/did.DidDocument',
          permalink: '/docs/lisk-did/interfaces/did.DidDocument',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'did.DidDocument',
            title: 'Interface: DidDocument',
            sidebar_label: 'did.DidDocument',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'did.DeactivateParam', permalink: '/docs/lisk-did/interfaces/did.DeactivateParam' },
          next: { title: 'did.DidEndpoint', permalink: '/docs/lisk-did/interfaces/did.DidEndpoint' },
        },
        o = {},
        c = [
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
        s = { toc: c },
        p = 'wrapper';
      function u(e) {
        let { components: i, ...t } = e;
        return (0, d.kt)(
          p,
          (0, n.Z)({}, s, t, { components: i, mdxType: 'MDXLayout' }),
          (0, d.kt)(
            'p',
            null,
            (0, d.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/did' }, 'did'),
            '.DidDocument',
          ),
          (0, d.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, d.kt)('h3', { id: 'context' }, '@context'),
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('strong', { parentName: 'p' }, '@context'),
            ': ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '[]',
          ),
          (0, d.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/did.d.ts:3'),
          (0, d.kt)('hr', null),
          (0, d.kt)('h3', { id: 'assertionmethod' }, 'assertionMethod'),
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('strong', { parentName: 'p' }, 'assertionMethod'),
            ': ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '[]',
          ),
          (0, d.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/did.d.ts:8'),
          (0, d.kt)('hr', null),
          (0, d.kt)('h3', { id: 'authentication' }, 'authentication'),
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('strong', { parentName: 'p' }, 'authentication'),
            ': ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '[]',
          ),
          (0, d.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/did.d.ts:7'),
          (0, d.kt)('hr', null),
          (0, d.kt)('h3', { id: 'capabilityinvocation' }, 'capabilityInvocation'),
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('strong', { parentName: 'p' }, 'capabilityInvocation'),
            ': ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '[]',
          ),
          (0, d.kt)('h4', { id: 'defined-in-3' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/did.d.ts:9'),
          (0, d.kt)('hr', null),
          (0, d.kt)('h3', { id: 'controller' }, 'controller'),
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('strong', { parentName: 'p' }, 'controller'),
            ': ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '[]',
          ),
          (0, d.kt)('h4', { id: 'defined-in-4' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/did.d.ts:5'),
          (0, d.kt)('hr', null),
          (0, d.kt)('h3', { id: 'id' }, 'id'),
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('strong', { parentName: 'p' }, 'id'),
            ': ',
            (0, d.kt)('inlineCode', { parentName: 'p' }, 'string'),
          ),
          (0, d.kt)('h4', { id: 'defined-in-5' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/did.d.ts:4'),
          (0, d.kt)('hr', null),
          (0, d.kt)('h3', { id: 'keyagreement' }, 'keyAgreement'),
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('strong', { parentName: 'p' }, 'keyAgreement'),
            ': ',
            (0, d.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.VerificationMethod' },
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'VerificationMethod'),
            ),
            '[]',
          ),
          (0, d.kt)('h4', { id: 'defined-in-6' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/did.d.ts:10'),
          (0, d.kt)('hr', null),
          (0, d.kt)('h3', { id: 'service' }, 'service'),
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('strong', { parentName: 'p' }, 'service'),
            ': ',
            (0, d.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.Service' },
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'Service'),
            ),
            '[]',
          ),
          (0, d.kt)('h4', { id: 'defined-in-7' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/did.d.ts:11'),
          (0, d.kt)('hr', null),
          (0, d.kt)('h3', { id: 'verificationmethod' }, 'verificationMethod'),
          (0, d.kt)(
            'p',
            null,
            '\u2022 ',
            (0, d.kt)('strong', { parentName: 'p' }, 'verificationMethod'),
            ': ',
            (0, d.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.VerificationMethod' },
              (0, d.kt)('inlineCode', { parentName: 'a' }, 'VerificationMethod'),
            ),
            '[]',
          ),
          (0, d.kt)('h4', { id: 'defined-in-8' }, 'Defined in'),
          (0, d.kt)('p', null, 'packages/lisk-decentralized-identifier/dist/types/did.d.ts:6'),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
