'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [609],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => p, kt: () => b });
      var r = i(2784);
      function n(e, t, i) {
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
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(i), !0).forEach(function (t) {
                n(e, t, i[t]);
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
          r,
          n = (function (e, t) {
            if (null == e) return {};
            var i,
              r,
              n = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (i = a[r]), t.indexOf(i) >= 0 || (n[i] = e[i]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (i = a[r]), t.indexOf(i) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]));
        }
        return n;
      }
      var s = r.createContext({}),
        c = function (e) {
          var t = r.useContext(s),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : l(l({}, t), e)), i;
        },
        p = function (e) {
          var t = c(e.components);
          return r.createElement(s.Provider, { value: t }, e.children);
        },
        d = 'mdxType',
        f = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        u = r.forwardRef(function (e, t) {
          var i = e.components,
            n = e.mdxType,
            a = e.originalType,
            s = e.parentName,
            p = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            d = c(i),
            u = n,
            b = d[''.concat(s, '.').concat(u)] || d[u] || f[u] || a;
          return i
            ? r.createElement(b, l(l({ ref: t }, p), {}, { components: i }))
            : r.createElement(b, l({ ref: t }, p));
        });
      function b(e, t) {
        var i = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var a = i.length,
            l = new Array(a);
          l[0] = u;
          var o = {};
          for (var s in t) hasOwnProperty.call(t, s) && (o[s] = t[s]);
          (o.originalType = e), (o[d] = 'string' == typeof e ? e : n), (l[1] = o);
          for (var c = 2; c < a; c++) l[c] = i[c];
          return r.createElement.apply(null, l);
        }
        return r.createElement.apply(null, i);
      }
      u.displayName = 'MDXCreateElement';
    },
    8591: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => s,
          contentTitle: () => l,
          default: () => f,
          frontMatter: () => a,
          metadata: () => o,
          toc: () => c,
        });
      var r = i(7896),
        n = (i(2784), i(876));
      const a = {
          id: 'VCVerificationResult',
          title: 'Interface: VCVerificationResult',
          sidebar_label: 'VCVerificationResult',
          sidebar_position: 0,
          custom_edit_url: null,
        },
        l = void 0,
        o = {
          unversionedId: 'lisk-verifiable-credentials/interfaces/VCVerificationResult',
          id: 'lisk-verifiable-credentials/interfaces/VCVerificationResult',
          title: 'Interface: VCVerificationResult',
          description: 'Properties',
          source: '@site/docs/lisk-verifiable-credentials/interfaces/VCVerificationResult.md',
          sourceDirName: 'lisk-verifiable-credentials/interfaces',
          slug: '/lisk-verifiable-credentials/interfaces/VCVerificationResult',
          permalink: '/docs/lisk-verifiable-credentials/interfaces/VCVerificationResult',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          sidebarPosition: 0,
          frontMatter: {
            id: 'VCVerificationResult',
            title: 'Interface: VCVerificationResult',
            sidebar_label: 'VCVerificationResult',
            sidebar_position: 0,
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'Proof', permalink: '/docs/lisk-verifiable-credentials/interfaces/Proof' },
          next: {
            title: 'VPVerificationResult',
            permalink: '/docs/lisk-verifiable-credentials/interfaces/VPVerificationResult',
          },
        },
        s = {},
        c = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'results', id: 'results', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'verified', id: 'verified', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
        ],
        p = { toc: c },
        d = 'wrapper';
      function f(e) {
        let { components: t, ...i } = e;
        return (0, n.kt)(
          d,
          (0, r.Z)({}, p, i, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)('h2', { id: 'properties' }, 'Properties'),
          (0, n.kt)('h3', { id: 'results' }, 'results'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'results'),
            ': { ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'proof'),
            ': ',
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-verifiable-credentials/interfaces/Proof' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'Proof'),
            ),
            ' & { ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, '@context'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'string'),
            '[]  } ; ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'purposeResult'),
            ': { ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'valid'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'boolean'),
            '  } ; ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'verificationMethod'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'VerificationMethod'),
            ' ; ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'verified'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'boolean'),
            '  }[]',
          ),
          (0, n.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-verifiable-credentials/src/types.ts#L40',
              },
              'lisk-verifiable-credentials/src/types.ts:40',
            ),
          ),
          (0, n.kt)('hr', null),
          (0, n.kt)('h3', { id: 'verified' }, 'verified'),
          (0, n.kt)(
            'p',
            null,
            '\u2022 ',
            (0, n.kt)('strong', { parentName: 'p' }, 'verified'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'boolean'),
          ),
          (0, n.kt)('h4', { id: 'defined-in-1' }, 'Defined in'),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/aldhosutra/lisk-did/blob/2b84b93/packages/lisk-verifiable-credentials/src/types.ts#L39',
              },
              'lisk-verifiable-credentials/src/types.ts:39',
            ),
          ),
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
