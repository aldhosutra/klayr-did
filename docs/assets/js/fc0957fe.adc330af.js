'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [8356],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => s, kt: () => k });
      var n = i(2784);
      function r(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = i),
          e
        );
      }
      function a(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(i), !0).forEach(function (t) {
                r(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : a(Object(i)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
              });
        }
        return e;
      }
      function d(e, t) {
        if (null == e) return {};
        var i,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var i,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++) (i = a[n]), t.indexOf(i) >= 0 || (r[i] = e[i]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (i = a[n]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]));
        }
        return r;
      }
      var o = n.createContext({}),
        c = function (e) {
          var t = n.useContext(o),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : l(l({}, t), e)), i;
        },
        s = function (e) {
          var t = c(e.components);
          return n.createElement(o.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        f = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        u = n.forwardRef(function (e, t) {
          var i = e.components,
            r = e.mdxType,
            a = e.originalType,
            o = e.parentName,
            s = d(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = c(i),
            u = r,
            k = p[''.concat(o, '.').concat(u)] || p[u] || f[u] || a;
          return i
            ? n.createElement(k, l(l({ ref: t }, s), {}, { components: i }))
            : n.createElement(k, l({ ref: t }, s));
        });
      function k(e, t) {
        var i = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var a = i.length,
            l = new Array(a);
          l[0] = u;
          var d = {};
          for (var o in t) hasOwnProperty.call(t, o) && (d[o] = t[o]);
          (d.originalType = e), (d[p] = 'string' == typeof e ? e : r), (l[1] = d);
          for (var c = 2; c < a; c++) l[c] = i[c];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, i);
      }
      u.displayName = 'MDXCreateElement';
    },
    5245: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => o,
          contentTitle: () => l,
          default: () => f,
          frontMatter: () => a,
          metadata: () => d,
          toc: () => c,
        });
      var n = i(7896),
        r = (i(2784), i(876));
      const a = {
          id: 'vc.VPVerificationResult',
          title: 'Interface: VPVerificationResult',
          sidebar_label: 'vc.VPVerificationResult',
          custom_edit_url: null,
        },
        l = void 0,
        d = {
          unversionedId: 'lisk-did/interfaces/vc.VPVerificationResult',
          id: 'lisk-did/interfaces/vc.VPVerificationResult',
          title: 'Interface: VPVerificationResult',
          description: 'vc.VPVerificationResult',
          source: '@site/docs/lisk-did/interfaces/vc.VPVerificationResult.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/vc.VPVerificationResult',
          permalink: '/docs/lisk-did/interfaces/vc.VPVerificationResult',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'vc.VPVerificationResult',
            title: 'Interface: VPVerificationResult',
            sidebar_label: 'vc.VPVerificationResult',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'vc.VCVerificationResult',
            permalink: '/docs/lisk-did/interfaces/vc.VCVerificationResult',
          },
          next: { title: 'vc.VerificationKey', permalink: '/docs/lisk-did/interfaces/vc.VerificationKey' },
        },
        o = {},
        c = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'credentialResults', id: 'credentialresults', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'presentationResult', id: 'presentationresult', level: 3 },
          { value: 'Type declaration', id: 'type-declaration', level: 4 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'verified', id: 'verified', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
        ],
        s = { toc: c },
        p = 'wrapper';
      function f(e) {
        let { components: t, ...i } = e;
        return (0, r.kt)(
          p,
          (0, n.Z)({}, s, i, { components: t, mdxType: 'MDXLayout' }),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/vc' }, 'vc'),
            '.VPVerificationResult',
          ),
          (0, r.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, r.kt)('h3', { id: 'credentialresults' }, 'credentialResults'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'credentialResults'),
            ': { ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'credentialId'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'string'),
            ' ; ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'results'),
            ': ',
            (0, r.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/vc.VCVerificationResult' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'VCVerificationResult'),
            ),
            '[] ; ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'verified'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'boolean'),
            '  }[]',
          ),
          (0, r.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/types.d.ts:39'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'presentationresult' }, 'presentationResult'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'presentationResult'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'Object'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'results'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  '{ ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'proof'),
                  ': ',
                  (0, r.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/interfaces/vc.Proof' },
                    (0, r.kt)('inlineCode', { parentName: 'a' }, 'Proof'),
                  ),
                  ' & { ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, '@context'),
                  ': ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'string'),
                  '[]  } ; ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'purposeResult'),
                  ': { ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'controller'),
                  ': ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'Omit'),
                  '<',
                  (0, r.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/interfaces/did.DidDocument' },
                    (0, r.kt)('inlineCode', { parentName: 'a' }, 'DidDocument'),
                  ),
                  ', ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, '"controller"'),
                  ' ',
                  '|',
                  ' ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, '"service"'),
                  '>',
                  ' ; ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'valid'),
                  ': ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'boolean'),
                  '  } ; ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'verificationMethod'),
                  ': ',
                  (0, r.kt)(
                    'a',
                    { parentName: 'td', href: '/docs/lisk-did/interfaces/did.VerificationMethod' },
                    (0, r.kt)('inlineCode', { parentName: 'a' }, 'VerificationMethod'),
                  ),
                  ' ; ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'verified'),
                  ': ',
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'boolean'),
                  '  }[]',
                ),
              ),
              (0, r.kt)(
                'tr',
                { parentName: 'tbody' },
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'verified'),
                ),
                (0, r.kt)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'boolean'),
                ),
              ),
            ),
          ),
          (0, r.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/types.d.ts:44'),
          (0, r.kt)('hr', null),
          (0, r.kt)('h3', { id: 'verified' }, 'verified'),
          (0, r.kt)(
            'p',
            null,
            '\u2022 ',
            (0, r.kt)('strong', { parentName: 'p' }, 'verified'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'boolean'),
          ),
          (0, r.kt)('h4', { id: 'defined-in-2' }, 'Defined in'),
          (0, r.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/types.d.ts:38'),
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
