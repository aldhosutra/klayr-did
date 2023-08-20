'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [4881],
  {
    876: (e, t, i) => {
      i.d(t, { Zo: () => d, kt: () => v });
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
      var c = r.createContext({}),
        s = function (e) {
          var t = r.useContext(c),
            i = t;
          return e && (i = 'function' == typeof e ? e(t) : l(l({}, t), e)), i;
        },
        d = function (e) {
          var t = s(e.components);
          return r.createElement(c.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
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
            c = e.parentName,
            d = o(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = s(i),
            u = n,
            v = p[''.concat(c, '.').concat(u)] || p[u] || f[u] || a;
          return i
            ? r.createElement(v, l(l({ ref: t }, d), {}, { components: i }))
            : r.createElement(v, l({ ref: t }, d));
        });
      function v(e, t) {
        var i = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var a = i.length,
            l = new Array(a);
          l[0] = u;
          var o = {};
          for (var c in t) hasOwnProperty.call(t, c) && (o[c] = t[c]);
          (o.originalType = e), (o[p] = 'string' == typeof e ? e : n), (l[1] = o);
          for (var s = 2; s < a; s++) l[s] = i[s];
          return r.createElement.apply(null, l);
        }
        return r.createElement.apply(null, i);
      }
      u.displayName = 'MDXCreateElement';
    },
    8279: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => c,
          contentTitle: () => l,
          default: () => f,
          frontMatter: () => a,
          metadata: () => o,
          toc: () => s,
        });
      var r = i(7896),
        n = (i(2784), i(876));
      const a = {
          id: 'vc.VCVerificationResult',
          title: 'Interface: VCVerificationResult',
          sidebar_label: 'vc.VCVerificationResult',
          custom_edit_url: null,
        },
        l = void 0,
        o = {
          unversionedId: 'lisk-did/interfaces/vc.VCVerificationResult',
          id: 'lisk-did/interfaces/vc.VCVerificationResult',
          title: 'Interface: VCVerificationResult',
          description: 'vc.VCVerificationResult',
          source: '@site/docs/lisk-did/interfaces/vc.VCVerificationResult.md',
          sourceDirName: 'lisk-did/interfaces',
          slug: '/lisk-did/interfaces/vc.VCVerificationResult',
          permalink: '/docs/lisk-did/interfaces/vc.VCVerificationResult',
          draft: !1,
          editUrl: null,
          tags: [],
          version: 'current',
          frontMatter: {
            id: 'vc.VCVerificationResult',
            title: 'Interface: VCVerificationResult',
            sidebar_label: 'vc.VCVerificationResult',
            custom_edit_url: null,
          },
          sidebar: 'tutorialSidebar',
          previous: { title: 'vc.Proof', permalink: '/docs/lisk-did/interfaces/vc.Proof' },
          next: { title: 'vc.VPVerificationResult', permalink: '/docs/lisk-did/interfaces/vc.VPVerificationResult' },
        },
        c = {},
        s = [
          { value: 'Properties', id: 'properties', level: 2 },
          { value: 'results', id: 'results', level: 3 },
          { value: 'Defined in', id: 'defined-in', level: 4 },
          { value: 'verified', id: 'verified', level: 3 },
          { value: 'Defined in', id: 'defined-in-1', level: 4 },
        ],
        d = { toc: s },
        p = 'wrapper';
      function f(e) {
        let { components: t, ...i } = e;
        return (0, n.kt)(
          p,
          (0, r.Z)({}, d, i, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)(
            'p',
            null,
            (0, n.kt)('a', { parentName: 'p', href: '/docs/lisk-did/namespaces/vc' }, 'vc'),
            '.VCVerificationResult',
          ),
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
              { parentName: 'p', href: '/docs/lisk-did/interfaces/vc.Proof' },
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
            (0, n.kt)(
              'a',
              { parentName: 'p', href: '/docs/lisk-did/interfaces/did.VerificationMethod' },
              (0, n.kt)('inlineCode', { parentName: 'a' }, 'VerificationMethod'),
            ),
            ' ; ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'verified'),
            ': ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'boolean'),
            '  }[]',
          ),
          (0, n.kt)('h4', { id: 'defined-in' }, 'Defined in'),
          (0, n.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/types.d.ts:26'),
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
          (0, n.kt)('p', null, 'packages/lisk-verifiable-credentials/dist/types.d.ts:25'),
        );
      }
      f.isMDXComponent = !0;
    },
  },
]);
