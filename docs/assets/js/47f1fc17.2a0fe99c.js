'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [7238],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => c, kt: () => k });
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
      function o(e, t) {
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
      var d = n.createContext({}),
        s = function (e) {
          var t = n.useContext(d),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : l(l({}, t), e)), i;
        },
        c = function (e) {
          var t = s(e.components);
          return n.createElement(d.Provider, { value: t }, e.children);
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
            d = e.parentName,
            c = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = s(i),
            u = r,
            k = p[''.concat(d, '.').concat(u)] || p[u] || f[u] || a;
          return i
            ? n.createElement(k, l(l({ ref: t }, c), {}, { components: i }))
            : n.createElement(k, l({ ref: t }, c));
        });
      function k(e, t) {
        var i = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var a = i.length,
            l = new Array(a);
          l[0] = u;
          var o = {};
          for (var d in t) hasOwnProperty.call(t, d) && (o[d] = t[d]);
          (o.originalType = e), (o[p] = 'string' == typeof e ? e : r), (l[1] = o);
          for (var s = 2; s < a; s++) l[s] = i[s];
          return n.createElement.apply(null, l);
        }
        return n.createElement.apply(null, i);
      }
      u.displayName = 'MDXCreateElement';
    },
    5176: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => d,
          contentTitle: () => l,
          default: () => f,
          frontMatter: () => a,
          metadata: () => o,
          toc: () => s,
        });
      var n = i(7896),
        r = (i(2784), i(876));
      const a = {
          id: 'VPVerificationResult',
          title: 'Interface: VPVerificationResult',
          sidebar_label: 'VPVerificationResult',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        l = void 0,
        o = {
          unversionedId: 'lisk-verifiable-credentials/interfaces/VPVerificationResult',
          id: 'lisk-verifiable-credentials/interfaces/VPVerificationResult',
          title: 'Interface: VPVerificationResult',
          description: 'Properties',
          source: '@site/docs/lisk-verifiable-credentials/interfaces/VPVerificationResult.md',
          sourceDirName: 'lisk-verifiable-credentials/interfaces',
          slug: '/lisk-verifiable-credentials/interfaces/VPVerificationResult',
          permalink: '/docs/lisk-verifiable-credentials/interfaces/VPVerificationResult',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'VPVerificationResult',
            title: 'Interface: VPVerificationResult',
            sidebar_label: 'VPVerificationResult',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'VCVerificationResult',
            permalink: '/docs/lisk-verifiable-credentials/interfaces/VCVerificationResult',
          },
          next: { title: 'VerificationKey', permalink: '/docs/lisk-verifiable-credentials/interfaces/VerificationKey' },
        },
        d = {},
        s = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'credentialResults', id: 'credentialresults', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'presentationResult', id: 'presentationresult', level: 3 },
          { value: 'Type declaration', id: 'type-declaration', level: 4 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
          { value: 'verified', id: 'verified', level: 3 },
          { value: 'Defined in', id: 'defined-in-2', level: 4 },
        ],
        c = { toc: s },
        p = 'wrapper';
      function f(e) {
        let { components: t, ...i } = e;
        return (0, r.kt)(
          p,
          (0, n.Z)({}, c, i, { components: t, mdxType: 'MDXLayout' }),
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
              { parentName: 'p', href: '/docs/lisk-verifiable-credentials/interfaces/VCVerificationResult' },
              (0, r.kt)('inlineCode', { parentName: 'a' }, 'VCVerificationResult'),
            ),
            '[] ; ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'verified'),
            ': ',
            (0, r.kt)('inlineCode', { parentName: 'p' }, 'boolean'),
            '  }[]',
          ),
          (0, r.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-verifiable-credentials/src/types.ts#L52',
              },
              'lisk-verifiable-credentials/src/types.ts:52',
            ),
          ),
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
                    { parentName: 'td', href: '/docs/lisk-verifiable-credentials/interfaces/Proof' },
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'DidDocument'),
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
                  (0, r.kt)('inlineCode', { parentName: 'td' }, 'VerificationMethod'),
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
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-verifiable-credentials/src/types.ts#L57',
              },
              'lisk-verifiable-credentials/src/types.ts:57',
            ),
          ),
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
          (0, r.kt)(
            'p',
            null,
            (0, r.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/e1cde64/packages/lisk-verifiable-credentials/src/types.ts#L51',
              },
              'lisk-verifiable-credentials/src/types.ts:51',
            ),
          ),
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
