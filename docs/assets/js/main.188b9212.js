/*! For license information please see main.188b9212.js.LICENSE.txt */
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [179],
  {
    108: (e, t, n) => {
      'use strict';
      n.d(t, { _: () => i, t: () => a });
      var r = n(2784);
      const i = r.createContext(!1);
      function a(e) {
        let { children: t } = e;
        const [n, a] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            a(!0);
          }, []),
          r.createElement(i.Provider, { value: n }, t)
        );
      }
    },
    2640: (e, t, n) => {
      'use strict';
      var r = n(2784),
        i = n(8316),
        a = n(7933),
        o = n(2175),
        s = n(1263);
      const l = [n(5749), n(6120), n(401), n(1964)];
      var c = n(9895),
        d = n(7267),
        u = n(9702);
      function f(e) {
        let { children: t } = e;
        return r.createElement(r.Fragment, null, t);
      }
      var p = n(7896),
        m = n(9854),
        h = n(7614),
        g = n(77),
        b = n(7683),
        v = n(328),
        y = n(5552),
        k = n(9499),
        w = n(4925),
        S = n(4390);
      function E() {
        const {
            i18n: { defaultLocale: e, localeConfigs: t },
          } = (0, h.Z)(),
          n = (0, y.l)();
        return r.createElement(
          m.Z,
          null,
          Object.entries(t).map(e => {
            let [t, { htmlLang: i }] = e;
            return r.createElement('link', {
              key: t,
              rel: 'alternate',
              href: n.createUrl({ locale: t, fullyQualified: !0 }),
              hrefLang: i,
            });
          }),
          r.createElement('link', {
            rel: 'alternate',
            href: n.createUrl({ locale: e, fullyQualified: !0 }),
            hrefLang: 'x-default',
          }),
        );
      }
      function C(e) {
        let { permalink: t } = e;
        const {
            siteConfig: { url: n },
          } = (0, h.Z)(),
          i = (function () {
            const {
                siteConfig: { url: e },
              } = (0, h.Z)(),
              { pathname: t } = (0, d.TH)();
            return e + (0, g.Z)(t);
          })(),
          a = t ? `${n}${t}` : i;
        return r.createElement(
          m.Z,
          null,
          r.createElement('meta', { property: 'og:url', content: a }),
          r.createElement('link', { rel: 'canonical', href: a }),
        );
      }
      function _() {
        const {
            i18n: { currentLocale: e },
          } = (0, h.Z)(),
          { metadata: t, image: n } = (0, b.L)();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            m.Z,
            null,
            r.createElement('meta', { name: 'twitter:card', content: 'summary_large_image' }),
            r.createElement('body', { className: k.h }),
          ),
          n && r.createElement(v.d, { image: n }),
          r.createElement(C, null),
          r.createElement(E, null),
          r.createElement(S.Z, { tag: w.HX, locale: e }),
          r.createElement(
            m.Z,
            null,
            t.map((e, t) => r.createElement('meta', (0, p.Z)({ key: t }, e))),
          ),
        );
      }
      const x = new Map();
      function T(e) {
        if (x.has(e.pathname)) return { ...e, pathname: x.get(e.pathname) };
        if (
          (0, u.f)(c.Z, e.pathname).some(e => {
            let { route: t } = e;
            return !0 === t.exact;
          })
        )
          return x.set(e.pathname, e.pathname), e;
        const t = e.pathname.trim().replace(/(?:\/index)?\.html$/, '') || '/';
        return x.set(e.pathname, t), { ...e, pathname: t };
      }
      var P = n(108),
        R = n(7509);
      function A(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        const i = l.map(t => {
          const r = t.default?.[e] ?? t[e];
          return r?.(...n);
        });
        return () => i.forEach(e => e?.());
      }
      const L = function (e) {
        let { children: t, location: n, previousLocation: i } = e;
        return (
          (0, r.useLayoutEffect)(() => {
            i !== n &&
              (!(function (e) {
                let { location: t, previousLocation: n } = e;
                if (!n) return;
                const r = t.pathname === n.pathname,
                  i = t.hash === n.hash,
                  a = t.search === n.search;
                if (r && i && !a) return;
                const { hash: o } = t;
                if (o) {
                  const e = decodeURIComponent(o.substring(1)),
                    t = document.getElementById(e);
                  t?.scrollIntoView();
                } else window.scrollTo(0, 0);
              })({ location: n, previousLocation: i }),
              A('onRouteDidUpdate', { previousLocation: i, location: n }));
          }, [i, n]),
          t
        );
      };
      function D(e) {
        const t = Array.from(new Set([e, decodeURI(e)]))
          .map(e => (0, u.f)(c.Z, e))
          .flat();
        return Promise.all(t.map(e => e.route.component.preload?.()));
      }
      class N extends r.Component {
        previousLocation;
        routeUpdateCleanupCb;
        constructor(e) {
          super(e),
            (this.previousLocation = null),
            (this.routeUpdateCleanupCb = s.Z.canUseDOM
              ? A('onRouteUpdate', { previousLocation: null, location: this.props.location })
              : () => {}),
            (this.state = { nextRouteHasLoaded: !0 });
        }
        shouldComponentUpdate(e, t) {
          if (e.location === this.props.location) return t.nextRouteHasLoaded;
          const n = e.location;
          return (
            (this.previousLocation = this.props.location),
            this.setState({ nextRouteHasLoaded: !1 }),
            (this.routeUpdateCleanupCb = A('onRouteUpdate', { previousLocation: this.previousLocation, location: n })),
            D(n.pathname)
              .then(() => {
                this.routeUpdateCleanupCb(), this.setState({ nextRouteHasLoaded: !0 });
              })
              .catch(e => {
                console.warn(e), window.location.reload();
              }),
            !1
          );
        }
        render() {
          const { children: e, location: t } = this.props;
          return r.createElement(
            L,
            { previousLocation: this.previousLocation, location: t },
            r.createElement(d.AW, { location: t, render: () => e }),
          );
        }
      }
      const O = N,
        z = '__docusaurus-base-url-issue-banner-container',
        I = '__docusaurus-base-url-issue-banner',
        M = '__docusaurus-base-url-issue-banner-suggestion-container',
        F = '__DOCUSAURUS_INSERT_BASEURL_BANNER';
      function B(e) {
        return `\nwindow['${F}'] = true;\n\ndocument.addEventListener('DOMContentLoaded', maybeInsertBanner);\n\nfunction maybeInsertBanner() {\n  var shouldInsert = window['${F}'];\n  shouldInsert && insertBanner();\n}\n\nfunction insertBanner() {\n  var bannerContainer = document.getElementById('${z}');\n  if (!bannerContainer) {\n    return;\n  }\n  var bannerHtml = ${JSON.stringify(
          (function (e) {
            return `\n<div id="${I}" style="border: thick solid red; background-color: rgb(255, 230, 179); margin: 20px; padding: 20px; font-size: 20px;">\n   <p style="font-weight: bold; font-size: 30px;">Your Docusaurus site did not load properly.</p>\n   <p>A very common reason is a wrong site <a href="https://docusaurus.io/docs/docusaurus.config.js/#baseUrl" style="font-weight: bold;">baseUrl configuration</a>.</p>\n   <p>Current configured baseUrl = <span style="font-weight: bold; color: red;">${e}</span> ${
              '/' === e ? ' (default value)' : ''
            }</p>\n   <p>We suggest trying baseUrl = <span id="${M}" style="font-weight: bold; color: green;"></span></p>\n</div>\n`;
          })(e),
        ).replace(
          /</g,
          '\\<',
        )};\n  bannerContainer.innerHTML = bannerHtml;\n  var suggestionContainer = document.getElementById('${M}');\n  var actualHomePagePath = window.location.pathname;\n  var suggestedBaseUrl = actualHomePagePath.substr(-1) === '/'\n        ? actualHomePagePath\n        : actualHomePagePath + '/';\n  suggestionContainer.innerHTML = suggestedBaseUrl;\n}\n`;
      }
      function j() {
        const {
          siteConfig: { baseUrl: e },
        } = (0, h.Z)();
        return (
          (0, r.useLayoutEffect)(() => {
            window[F] = !1;
          }, []),
          r.createElement(
            r.Fragment,
            null,
            !s.Z.canUseDOM && r.createElement(m.Z, null, r.createElement('script', null, B(e))),
            r.createElement('div', { id: z }),
          )
        );
      }
      function U() {
        const {
            siteConfig: { baseUrl: e, baseUrlIssueBanner: t },
          } = (0, h.Z)(),
          { pathname: n } = (0, d.TH)();
        return t && n === e ? r.createElement(j, null) : null;
      }
      function $() {
        const {
            siteConfig: { favicon: e, title: t, noIndex: n },
            i18n: { currentLocale: i, localeConfigs: a },
          } = (0, h.Z)(),
          o = (0, g.Z)(e),
          { htmlLang: s, direction: l } = a[i];
        return r.createElement(
          m.Z,
          null,
          r.createElement('html', { lang: s, dir: l }),
          r.createElement('title', null, t),
          r.createElement('meta', { property: 'og:title', content: t }),
          r.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
          n && r.createElement('meta', { name: 'robots', content: 'noindex, nofollow' }),
          e && r.createElement('link', { rel: 'icon', href: o }),
        );
      }
      var H = n(3951);
      function q() {
        const e = (0, u.H)(c.Z),
          t = (0, d.TH)();
        return r.createElement(
          H.Z,
          null,
          r.createElement(
            R.M,
            null,
            r.createElement(
              P.t,
              null,
              r.createElement(
                f,
                null,
                r.createElement($, null),
                r.createElement(_, null),
                r.createElement(U, null),
                r.createElement(O, { location: T(t) }, e),
              ),
            ),
          ),
        );
      }
      var V = n(6887);
      const G = (function (e) {
        try {
          return document.createElement('link').relList.supports(e);
        } catch {
          return !1;
        }
      })('prefetch')
        ? function (e) {
            return new Promise((t, n) => {
              if ('undefined' == typeof document) return void n();
              const r = document.createElement('link');
              r.setAttribute('rel', 'prefetch'),
                r.setAttribute('href', e),
                (r.onload = () => t()),
                (r.onerror = () => n());
              const i = document.getElementsByTagName('head')[0] ?? document.getElementsByName('script')[0]?.parentNode;
              i?.appendChild(r);
            });
          }
        : function (e) {
            return new Promise((t, n) => {
              const r = new XMLHttpRequest();
              r.open('GET', e, !0),
                (r.withCredentials = !0),
                (r.onload = () => {
                  200 === r.status ? t() : n();
                }),
                r.send(null);
            });
          };
      var Z = n(805);
      const W = new Set(),
        K = new Set(),
        Y = () => navigator.connection?.effectiveType.includes('2g') || navigator.connection?.saveData,
        Q = {
          prefetch(e) {
            if (!(e => !Y() && !K.has(e) && !W.has(e))(e)) return !1;
            W.add(e);
            const t = (0, u.f)(c.Z, e).flatMap(e => {
              return (
                (t = e.route.path),
                Object.entries(V)
                  .filter(e => {
                    let [n] = e;
                    return n.replace(/-[^-]+$/, '') === t;
                  })
                  .flatMap(e => {
                    let [, t] = e;
                    return Object.values((0, Z.Z)(t));
                  })
              );
              var t;
            });
            return Promise.all(
              t.map(e => {
                const t = n.gca(e);
                return t && !t.includes('undefined') ? G(t).catch(() => {}) : Promise.resolve();
              }),
            );
          },
          preload: e => !!(e => !Y() && !K.has(e))(e) && (K.add(e), D(e)),
        },
        X = Object.freeze(Q);
      if (s.Z.canUseDOM) {
        window.docusaurus = X;
        const e = i.hydrate;
        D(window.location.pathname).then(() => {
          e(
            r.createElement(o.B6, null, r.createElement(a.VK, null, r.createElement(q, null))),
            document.getElementById('__docusaurus'),
          );
        });
      }
    },
    7509: (e, t, n) => {
      'use strict';
      n.d(t, { _: () => d, M: () => u });
      var r = n(2784),
        i = n(6809);
      const a = JSON.parse(
          '{"docusaurus-plugin-content-docs":{"default":{"path":"/docs","versions":[{"name":"current","label":"Next","isLast":true,"path":"/docs","mainDocId":"lisk-did/index","docs":[{"id":"lisk-decentralized-identifier/index","path":"/docs/lisk-decentralized-identifier/","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/AddControllersParam","path":"/docs/lisk-decentralized-identifier/interfaces/AddControllersParam","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/AddKeysParam","path":"/docs/lisk-decentralized-identifier/interfaces/AddKeysParam","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/AddServiceEndpointParam","path":"/docs/lisk-decentralized-identifier/interfaces/AddServiceEndpointParam","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/BaseResolver","path":"/docs/lisk-decentralized-identifier/interfaces/BaseResolver","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/CipherInterface","path":"/docs/lisk-decentralized-identifier/interfaces/CipherInterface","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/CreateParam","path":"/docs/lisk-decentralized-identifier/interfaces/CreateParam","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/DeactivateParam","path":"/docs/lisk-decentralized-identifier/interfaces/DeactivateParam","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/DidDocument","path":"/docs/lisk-decentralized-identifier/interfaces/DidDocument","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/DidEndpoint","path":"/docs/lisk-decentralized-identifier/interfaces/DidEndpoint","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/DidMethod","path":"/docs/lisk-decentralized-identifier/interfaces/DidMethod","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/DidModuleConfig","path":"/docs/lisk-decentralized-identifier/interfaces/DidModuleConfig","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/DocumentLoaderResult","path":"/docs/lisk-decentralized-identifier/interfaces/DocumentLoaderResult","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/Ed25519KeyPair","path":"/docs/lisk-decentralized-identifier/interfaces/Ed25519KeyPair","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/Ed25519Signature2020","path":"/docs/lisk-decentralized-identifier/interfaces/Ed25519Signature2020","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/JWEDocument","path":"/docs/lisk-decentralized-identifier/interfaces/JWEDocument","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/KeysCommand","path":"/docs/lisk-decentralized-identifier/interfaces/KeysCommand","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/NonceStoreData","path":"/docs/lisk-decentralized-identifier/interfaces/NonceStoreData","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/RemoveControllersParam","path":"/docs/lisk-decentralized-identifier/interfaces/RemoveControllersParam","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/RemoveKeysParam","path":"/docs/lisk-decentralized-identifier/interfaces/RemoveKeysParam","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/RemoveServiceEndpointParam","path":"/docs/lisk-decentralized-identifier/interfaces/RemoveServiceEndpointParam","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/resolver.CachedResolver","path":"/docs/lisk-decentralized-identifier/interfaces/resolver.CachedResolver","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/Service","path":"/docs/lisk-decentralized-identifier/interfaces/Service","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/TransactionPayload","path":"/docs/lisk-decentralized-identifier/interfaces/TransactionPayload","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/TransactionPayloadWithoutSignature","path":"/docs/lisk-decentralized-identifier/interfaces/TransactionPayloadWithoutSignature","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/interfaces/VerificationMethod","path":"/docs/lisk-decentralized-identifier/interfaces/VerificationMethod","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/modules","path":"/docs/lisk-decentralized-identifier/modules","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/namespaces/client","path":"/docs/lisk-decentralized-identifier/namespaces/client","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/namespaces/client.utils","path":"/docs/lisk-decentralized-identifier/namespaces/client.utils","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/namespaces/cryptography","path":"/docs/lisk-decentralized-identifier/namespaces/cryptography","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/namespaces/cryptography.codec","path":"/docs/lisk-decentralized-identifier/namespaces/cryptography.codec","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/namespaces/cryptography.convert","path":"/docs/lisk-decentralized-identifier/namespaces/cryptography.convert","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/namespaces/cryptography.key","path":"/docs/lisk-decentralized-identifier/namespaces/cryptography.key","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/namespaces/cryptography.method","path":"/docs/lisk-decentralized-identifier/namespaces/cryptography.method","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/namespaces/cryptography.operation","path":"/docs/lisk-decentralized-identifier/namespaces/cryptography.operation","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/namespaces/resolver","path":"/docs/lisk-decentralized-identifier/namespaces/resolver","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/namespaces/utils","path":"/docs/lisk-decentralized-identifier/namespaces/utils","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/namespaces/utils.array","path":"/docs/lisk-decentralized-identifier/namespaces/utils.array","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/namespaces/utils.constant","path":"/docs/lisk-decentralized-identifier/namespaces/utils.constant","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/namespaces/utils.object","path":"/docs/lisk-decentralized-identifier/namespaces/utils.object","sidebar":"tutorialSidebar"},{"id":"lisk-decentralized-identifier/namespaces/utils.schema","path":"/docs/lisk-decentralized-identifier/namespaces/utils.schema","sidebar":"tutorialSidebar"},{"id":"lisk-did-module/classes/AddControllersCommand","path":"/docs/lisk-did-module/classes/AddControllersCommand","sidebar":"tutorialSidebar"},{"id":"lisk-did-module/classes/AddKeysCommand","path":"/docs/lisk-did-module/classes/AddKeysCommand","sidebar":"tutorialSidebar"},{"id":"lisk-did-module/classes/AddServiceEndpointCommand","path":"/docs/lisk-did-module/classes/AddServiceEndpointCommand","sidebar":"tutorialSidebar"},{"id":"lisk-did-module/classes/CreateCommand","path":"/docs/lisk-did-module/classes/CreateCommand","sidebar":"tutorialSidebar"},{"id":"lisk-did-module/classes/DeactivateCommand","path":"/docs/lisk-did-module/classes/DeactivateCommand","sidebar":"tutorialSidebar"},{"id":"lisk-did-module/classes/DidEndpoint","path":"/docs/lisk-did-module/classes/DidEndpoint","sidebar":"tutorialSidebar"},{"id":"lisk-did-module/classes/DidMethod","path":"/docs/lisk-did-module/classes/DidMethod","sidebar":"tutorialSidebar"},{"id":"lisk-did-module/classes/DidModule","path":"/docs/lisk-did-module/classes/DidModule","sidebar":"tutorialSidebar"},{"id":"lisk-did-module/classes/RemoveControllersCommand","path":"/docs/lisk-did-module/classes/RemoveControllersCommand","sidebar":"tutorialSidebar"},{"id":"lisk-did-module/classes/RemoveKeysCommand","path":"/docs/lisk-did-module/classes/RemoveKeysCommand","sidebar":"tutorialSidebar"},{"id":"lisk-did-module/classes/RemoveServiceEndpointCommand","path":"/docs/lisk-did-module/classes/RemoveServiceEndpointCommand","sidebar":"tutorialSidebar"},{"id":"lisk-did-module/index","path":"/docs/lisk-did-module/","sidebar":"tutorialSidebar"},{"id":"lisk-did-module/modules","path":"/docs/lisk-did-module/modules","sidebar":"tutorialSidebar"},{"id":"lisk-did/classes/AddControllersCommand","path":"/docs/lisk-did/classes/AddControllersCommand","sidebar":"tutorialSidebar"},{"id":"lisk-did/classes/AddKeysCommand","path":"/docs/lisk-did/classes/AddKeysCommand","sidebar":"tutorialSidebar"},{"id":"lisk-did/classes/AddServiceEndpointCommand","path":"/docs/lisk-did/classes/AddServiceEndpointCommand","sidebar":"tutorialSidebar"},{"id":"lisk-did/classes/CreateCommand","path":"/docs/lisk-did/classes/CreateCommand","sidebar":"tutorialSidebar"},{"id":"lisk-did/classes/DeactivateCommand","path":"/docs/lisk-did/classes/DeactivateCommand","sidebar":"tutorialSidebar"},{"id":"lisk-did/classes/DidEndpoint","path":"/docs/lisk-did/classes/DidEndpoint","sidebar":"tutorialSidebar"},{"id":"lisk-did/classes/DidMethod","path":"/docs/lisk-did/classes/DidMethod","sidebar":"tutorialSidebar"},{"id":"lisk-did/classes/DidModule","path":"/docs/lisk-did/classes/DidModule","sidebar":"tutorialSidebar"},{"id":"lisk-did/classes/RemoveControllersCommand","path":"/docs/lisk-did/classes/RemoveControllersCommand","sidebar":"tutorialSidebar"},{"id":"lisk-did/classes/RemoveKeysCommand","path":"/docs/lisk-did/classes/RemoveKeysCommand","sidebar":"tutorialSidebar"},{"id":"lisk-did/classes/RemoveServiceEndpointCommand","path":"/docs/lisk-did/classes/RemoveServiceEndpointCommand","sidebar":"tutorialSidebar"},{"id":"lisk-did/index","path":"/docs/lisk-did/","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.AddControllersParam","path":"/docs/lisk-did/interfaces/did.AddControllersParam","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.AddKeysParam","path":"/docs/lisk-did/interfaces/did.AddKeysParam","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.AddServiceEndpointParam","path":"/docs/lisk-did/interfaces/did.AddServiceEndpointParam","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.BaseResolver","path":"/docs/lisk-did/interfaces/did.BaseResolver","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.CipherInterface","path":"/docs/lisk-did/interfaces/did.CipherInterface","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.CreateParam","path":"/docs/lisk-did/interfaces/did.CreateParam","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.DeactivateParam","path":"/docs/lisk-did/interfaces/did.DeactivateParam","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.DidDocument","path":"/docs/lisk-did/interfaces/did.DidDocument","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.DidEndpoint","path":"/docs/lisk-did/interfaces/did.DidEndpoint","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.DidMethod","path":"/docs/lisk-did/interfaces/did.DidMethod","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.DidModuleConfig","path":"/docs/lisk-did/interfaces/did.DidModuleConfig","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.DocumentLoaderResult","path":"/docs/lisk-did/interfaces/did.DocumentLoaderResult","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.Ed25519KeyPair","path":"/docs/lisk-did/interfaces/did.Ed25519KeyPair","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.Ed25519Signature2020","path":"/docs/lisk-did/interfaces/did.Ed25519Signature2020","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.JWEDocument","path":"/docs/lisk-did/interfaces/did.JWEDocument","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.KeysCommand","path":"/docs/lisk-did/interfaces/did.KeysCommand","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.NonceStoreData","path":"/docs/lisk-did/interfaces/did.NonceStoreData","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.RemoveControllersParam","path":"/docs/lisk-did/interfaces/did.RemoveControllersParam","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.RemoveKeysParam","path":"/docs/lisk-did/interfaces/did.RemoveKeysParam","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.RemoveServiceEndpointParam","path":"/docs/lisk-did/interfaces/did.RemoveServiceEndpointParam","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.resolver.CachedResolver","path":"/docs/lisk-did/interfaces/did.resolver.CachedResolver","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.Service","path":"/docs/lisk-did/interfaces/did.Service","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.TransactionPayload","path":"/docs/lisk-did/interfaces/did.TransactionPayload","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.TransactionPayloadWithoutSignature","path":"/docs/lisk-did/interfaces/did.TransactionPayloadWithoutSignature","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/did.VerificationMethod","path":"/docs/lisk-did/interfaces/did.VerificationMethod","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/vc.Proof","path":"/docs/lisk-did/interfaces/vc.Proof","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/vc.VCVerificationResult","path":"/docs/lisk-did/interfaces/vc.VCVerificationResult","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/vc.VerificationKey","path":"/docs/lisk-did/interfaces/vc.VerificationKey","sidebar":"tutorialSidebar"},{"id":"lisk-did/interfaces/vc.VPVerificationResult","path":"/docs/lisk-did/interfaces/vc.VPVerificationResult","sidebar":"tutorialSidebar"},{"id":"lisk-did/modules","path":"/docs/lisk-did/modules","sidebar":"tutorialSidebar"},{"id":"lisk-did/namespaces/did","path":"/docs/lisk-did/namespaces/did","sidebar":"tutorialSidebar"},{"id":"lisk-did/namespaces/did.client","path":"/docs/lisk-did/namespaces/did.client","sidebar":"tutorialSidebar"},{"id":"lisk-did/namespaces/did.client.utils","path":"/docs/lisk-did/namespaces/did.client.utils","sidebar":"tutorialSidebar"},{"id":"lisk-did/namespaces/did.cryptography","path":"/docs/lisk-did/namespaces/did.cryptography","sidebar":"tutorialSidebar"},{"id":"lisk-did/namespaces/did.cryptography.codec","path":"/docs/lisk-did/namespaces/did.cryptography.codec","sidebar":"tutorialSidebar"},{"id":"lisk-did/namespaces/did.cryptography.convert","path":"/docs/lisk-did/namespaces/did.cryptography.convert","sidebar":"tutorialSidebar"},{"id":"lisk-did/namespaces/did.cryptography.key","path":"/docs/lisk-did/namespaces/did.cryptography.key","sidebar":"tutorialSidebar"},{"id":"lisk-did/namespaces/did.cryptography.method","path":"/docs/lisk-did/namespaces/did.cryptography.method","sidebar":"tutorialSidebar"},{"id":"lisk-did/namespaces/did.cryptography.operation","path":"/docs/lisk-did/namespaces/did.cryptography.operation","sidebar":"tutorialSidebar"},{"id":"lisk-did/namespaces/did.resolver","path":"/docs/lisk-did/namespaces/did.resolver","sidebar":"tutorialSidebar"},{"id":"lisk-did/namespaces/did.utils","path":"/docs/lisk-did/namespaces/did.utils","sidebar":"tutorialSidebar"},{"id":"lisk-did/namespaces/did.utils.array","path":"/docs/lisk-did/namespaces/did.utils.array","sidebar":"tutorialSidebar"},{"id":"lisk-did/namespaces/did.utils.constant","path":"/docs/lisk-did/namespaces/did.utils.constant","sidebar":"tutorialSidebar"},{"id":"lisk-did/namespaces/did.utils.object","path":"/docs/lisk-did/namespaces/did.utils.object","sidebar":"tutorialSidebar"},{"id":"lisk-did/namespaces/did.utils.schema","path":"/docs/lisk-did/namespaces/did.utils.schema","sidebar":"tutorialSidebar"},{"id":"lisk-did/namespaces/vc","path":"/docs/lisk-did/namespaces/vc","sidebar":"tutorialSidebar"},{"id":"lisk-did/namespaces/vc.codec","path":"/docs/lisk-did/namespaces/vc.codec","sidebar":"tutorialSidebar"},{"id":"lisk-did/namespaces/vc.documentLoader","path":"/docs/lisk-did/namespaces/vc.documentLoader","sidebar":"tutorialSidebar"},{"id":"lisk-did/namespaces/vc.documentLoader.builders","path":"/docs/lisk-did/namespaces/vc.documentLoader.builders","sidebar":"tutorialSidebar"},{"id":"lisk-verifiable-credentials/index","path":"/docs/lisk-verifiable-credentials/","sidebar":"tutorialSidebar"},{"id":"lisk-verifiable-credentials/interfaces/Proof","path":"/docs/lisk-verifiable-credentials/interfaces/Proof","sidebar":"tutorialSidebar"},{"id":"lisk-verifiable-credentials/interfaces/VCVerificationResult","path":"/docs/lisk-verifiable-credentials/interfaces/VCVerificationResult","sidebar":"tutorialSidebar"},{"id":"lisk-verifiable-credentials/interfaces/VerificationKey","path":"/docs/lisk-verifiable-credentials/interfaces/VerificationKey","sidebar":"tutorialSidebar"},{"id":"lisk-verifiable-credentials/interfaces/VPVerificationResult","path":"/docs/lisk-verifiable-credentials/interfaces/VPVerificationResult","sidebar":"tutorialSidebar"},{"id":"lisk-verifiable-credentials/modules","path":"/docs/lisk-verifiable-credentials/modules","sidebar":"tutorialSidebar"},{"id":"lisk-verifiable-credentials/namespaces/codec","path":"/docs/lisk-verifiable-credentials/namespaces/codec","sidebar":"tutorialSidebar"},{"id":"lisk-verifiable-credentials/namespaces/documentLoader","path":"/docs/lisk-verifiable-credentials/namespaces/documentLoader","sidebar":"tutorialSidebar"},{"id":"lisk-verifiable-credentials/namespaces/documentLoader.builders","path":"/docs/lisk-verifiable-credentials/namespaces/documentLoader.builders","sidebar":"tutorialSidebar"}],"draftIds":[],"sidebars":{"tutorialSidebar":{"link":{"path":"/docs/lisk-did/","label":"Readme"}}}}],"breadcrumbs":true}}}',
        ),
        o = JSON.parse(
          '{"defaultLocale":"en","locales":["en"],"path":"i18n","currentLocale":"en","localeConfigs":{"en":{"label":"English","direction":"ltr","htmlLang":"en","calendar":"gregory","path":"en"}}}',
        );
      var s = n(7529);
      const l = JSON.parse(
          '{"docusaurusVersion":"2.4.1","siteVersion":"0.0.0","pluginVersions":{"docusaurus-plugin-content-docs":{"type":"package","name":"@docusaurus/plugin-content-docs","version":"2.4.1"},"docusaurus-plugin-content-blog":{"type":"package","name":"@docusaurus/plugin-content-blog","version":"2.4.1"},"docusaurus-plugin-content-pages":{"type":"package","name":"@docusaurus/plugin-content-pages","version":"2.4.1"},"docusaurus-plugin-sitemap":{"type":"package","name":"@docusaurus/plugin-sitemap","version":"2.4.1"},"docusaurus-theme-classic":{"type":"package","name":"@docusaurus/theme-classic","version":"2.4.1"},"docusaurus-plugin-typedoc":{"type":"package","name":"docusaurus-plugin-typedoc","version":"0.19.2"}}}',
        ),
        c = { siteConfig: i.default, siteMetadata: l, globalData: a, i18n: o, codeTranslations: s },
        d = r.createContext(c);
      function u(e) {
        let { children: t } = e;
        return r.createElement(d.Provider, { value: c }, t);
      }
    },
    3951: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => f });
      var r = n(2784),
        i = n(1263),
        a = n(9854),
        o = n(958),
        s = n(3310);
      function l(e) {
        let { error: t, tryAgain: n } = e;
        return r.createElement(
          'div',
          {
            style: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              minHeight: '100vh',
              width: '100%',
              maxWidth: '80ch',
              fontSize: '20px',
              margin: '0 auto',
              padding: '1rem',
            },
          },
          r.createElement('h1', { style: { fontSize: '3rem' } }, 'This page crashed'),
          r.createElement(
            'button',
            {
              type: 'button',
              onClick: n,
              style: { margin: '1rem 0', fontSize: '2rem', cursor: 'pointer', borderRadius: 20, padding: '1rem' },
            },
            'Try again',
          ),
          r.createElement(c, { error: t }),
        );
      }
      function c(e) {
        let { error: t } = e;
        const n = (0, o.getErrorCausalChain)(t)
          .map(e => e.message)
          .join('\n\nCause:\n');
        return r.createElement('p', { style: { whiteSpace: 'pre-wrap' } }, n);
      }
      function d(e) {
        let { error: t, tryAgain: n } = e;
        return r.createElement(
          f,
          { fallback: () => r.createElement(l, { error: t, tryAgain: n }) },
          r.createElement(a.Z, null, r.createElement('title', null, 'Page Error')),
          r.createElement(s.Z, null, r.createElement(l, { error: t, tryAgain: n })),
        );
      }
      const u = e => r.createElement(d, e);
      class f extends r.Component {
        constructor(e) {
          super(e), (this.state = { error: null });
        }
        componentDidCatch(e) {
          i.Z.canUseDOM && this.setState({ error: e });
        }
        render() {
          const { children: e } = this.props,
            { error: t } = this.state;
          if (t) {
            const e = { error: t, tryAgain: () => this.setState({ error: null }) };
            return (this.props.fallback ?? u)(e);
          }
          return e ?? null;
        }
      }
    },
    1263: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => i });
      const r = 'undefined' != typeof window && 'document' in window && 'createElement' in window.document,
        i = {
          canUseDOM: r,
          canUseEventListeners: r && ('addEventListener' in window || 'attachEvent' in window),
          canUseIntersectionObserver: r && 'IntersectionObserver' in window,
          canUseViewport: r && 'screen' in window,
        };
    },
    9854: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => a });
      var r = n(2784),
        i = n(2175);
      function a(e) {
        return r.createElement(i.ql, e);
      }
    },
    9817: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => p });
      var r = n(7896),
        i = n(2784),
        a = n(7933),
        o = n(958),
        s = n(7614),
        l = n(1344),
        c = n(1263);
      const d = i.createContext({ collectLink: () => {} });
      var u = n(77);
      function f(e, t) {
        let {
          isNavLink: n,
          to: f,
          href: p,
          activeClassName: m,
          isActive: h,
          'data-noBrokenLinkCheck': g,
          autoAddBaseUrl: b = !0,
          ...v
        } = e;
        const {
            siteConfig: { trailingSlash: y, baseUrl: k },
          } = (0, s.Z)(),
          { withBaseUrl: w } = (0, u.C)(),
          S = (0, i.useContext)(d),
          E = (0, i.useRef)(null);
        (0, i.useImperativeHandle)(t, () => E.current);
        const C = f || p;
        const _ = (0, l.Z)(C),
          x = C?.replace('pathname://', '');
        let T = void 0 !== x ? ((P = x), b && (e => e.startsWith('/'))(P) ? w(P) : P) : void 0;
        var P;
        T && _ && (T = (0, o.applyTrailingSlash)(T, { trailingSlash: y, baseUrl: k }));
        const R = (0, i.useRef)(!1),
          A = n ? a.OL : a.rU,
          L = c.Z.canUseIntersectionObserver,
          D = (0, i.useRef)(),
          N = () => {
            R.current || null == T || (window.docusaurus.preload(T), (R.current = !0));
          };
        (0, i.useEffect)(
          () => (
            !L && _ && null != T && window.docusaurus.prefetch(T),
            () => {
              L && D.current && D.current.disconnect();
            }
          ),
          [D, T, L, _],
        );
        const O = T?.startsWith('#') ?? !1,
          z = !T || !_ || O;
        return (
          z || g || S.collectLink(T),
          z
            ? i.createElement(
                'a',
                (0, r.Z)({ ref: E, href: T }, C && !_ && { target: '_blank', rel: 'noopener noreferrer' }, v),
              )
            : i.createElement(
                A,
                (0, r.Z)(
                  {},
                  v,
                  {
                    onMouseEnter: N,
                    onTouchStart: N,
                    innerRef: e => {
                      (E.current = e),
                        L &&
                          e &&
                          _ &&
                          ((D.current = new window.IntersectionObserver(t => {
                            t.forEach(t => {
                              e === t.target &&
                                (t.isIntersecting || t.intersectionRatio > 0) &&
                                (D.current.unobserve(e),
                                D.current.disconnect(),
                                null != T && window.docusaurus.prefetch(T));
                            });
                          })),
                          D.current.observe(e));
                    },
                    to: T,
                  },
                  n && { isActive: h, activeClassName: m },
                ),
              )
        );
      }
      const p = i.forwardRef(f);
    },
    5594: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => r });
      const r = () => null;
    },
    1077: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => l, I: () => s });
      var r = n(2784);
      function i(e, t) {
        const n = e.split(/(\{\w+\})/).map((e, n) => {
          if (n % 2 == 1) {
            const n = t?.[e.slice(1, -1)];
            if (void 0 !== n) return n;
          }
          return e;
        });
        return n.some(e => (0, r.isValidElement)(e))
          ? n.map((e, t) => ((0, r.isValidElement)(e) ? r.cloneElement(e, { key: t }) : e)).filter(e => '' !== e)
          : n.join('');
      }
      var a = n(7529);
      function o(e) {
        let { id: t, message: n } = e;
        if (void 0 === t && void 0 === n)
          throw new Error(
            'Docusaurus translation declarations must have at least a translation id or a default translation message',
          );
        return a[t ?? n] ?? n ?? t;
      }
      function s(e, t) {
        let { message: n, id: r } = e;
        return i(o({ message: n, id: r }), t);
      }
      function l(e) {
        let { children: t, id: n, values: a } = e;
        if (t && 'string' != typeof t)
          throw (
            (console.warn('Illegal <Translate> children', t),
            new Error('The Docusaurus <Translate> component only accept simple string values'))
          );
        const s = o({ message: t, id: n });
        return r.createElement(r.Fragment, null, i(s, a));
      }
    },
    8183: (e, t, n) => {
      'use strict';
      n.d(t, { m: () => r });
      const r = 'default';
    },
    1344: (e, t, n) => {
      'use strict';
      function r(e) {
        return /^(?:\w*:|\/\/)/.test(e);
      }
      function i(e) {
        return void 0 !== e && !r(e);
      }
      n.d(t, { Z: () => i, b: () => r });
    },
    77: (e, t, n) => {
      'use strict';
      n.d(t, { C: () => o, Z: () => s });
      var r = n(2784),
        i = n(7614),
        a = n(1344);
      function o() {
        const {
            siteConfig: { baseUrl: e, url: t },
          } = (0, i.Z)(),
          n = (0, r.useCallback)(
            (n, r) =>
              (function (e, t, n, r) {
                let { forcePrependBaseUrl: i = !1, absolute: o = !1 } = void 0 === r ? {} : r;
                if (!n || n.startsWith('#') || (0, a.b)(n)) return n;
                if (i) return t + n.replace(/^\//, '');
                if (n === t.replace(/\/$/, '')) return t;
                const s = n.startsWith(t) ? n : t + n.replace(/^\//, '');
                return o ? e + s : s;
              })(t, e, n, r),
            [t, e],
          );
        return { withBaseUrl: n };
      }
      function s(e, t) {
        void 0 === t && (t = {});
        const { withBaseUrl: n } = o();
        return n(e, t);
      }
    },
    7614: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => a });
      var r = n(2784),
        i = n(7509);
      function a() {
        return (0, r.useContext)(i._);
      }
    },
    9741: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => a });
      var r = n(2784),
        i = n(108);
      function a() {
        return (0, r.useContext)(i._);
      }
    },
    805: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => i });
      const r = e => 'object' == typeof e && !!e && Object.keys(e).length > 0;
      function i(e) {
        const t = {};
        return (
          (function e(n, i) {
            Object.entries(n).forEach(n => {
              let [a, o] = n;
              const s = i ? `${i}.${a}` : a;
              r(o) ? e(o, s) : (t[s] = o);
            });
          })(e),
          t
        );
      }
    },
    1313: (e, t, n) => {
      'use strict';
      n.d(t, { _: () => i, z: () => a });
      var r = n(2784);
      const i = r.createContext(null);
      function a(e) {
        let { children: t, value: n } = e;
        const a = r.useContext(i),
          o = (0, r.useMemo)(
            () =>
              (function (e) {
                let { parent: t, value: n } = e;
                if (!t) {
                  if (!n) throw new Error('Unexpected: no Docusaurus route context found');
                  if (!('plugin' in n))
                    throw new Error('Unexpected: Docusaurus topmost route context has no `plugin` attribute');
                  return n;
                }
                const r = { ...t.data, ...n?.data };
                return { plugin: t.plugin, data: r };
              })({ parent: a, value: n }),
            [a, n],
          );
        return r.createElement(i.Provider, { value: o }, t);
      }
    },
    1215: (e, t, n) => {
      'use strict';
      n.d(t, { Iw: () => h, gA: () => f, _r: () => d, Jo: () => g, zh: () => u, yW: () => m, gB: () => p });
      var r = n(7267),
        i = n(7614),
        a = n(8183);
      function o(e, t) {
        void 0 === t && (t = {});
        const n = (function () {
          const { globalData: e } = (0, i.Z)();
          return e;
        })()[e];
        if (!n && t.failfast) throw new Error(`Docusaurus plugin global data not found for "${e}" plugin.`);
        return n;
      }
      const s = e => e.versions.find(e => e.isLast);
      function l(e, t) {
        const n = (function (e, t) {
            const n = s(e);
            return [...e.versions.filter(e => e !== n), n].find(
              e => !!(0, r.LX)(t, { path: e.path, exact: !1, strict: !1 }),
            );
          })(e, t),
          i = n?.docs.find(e => !!(0, r.LX)(t, { path: e.path, exact: !0, strict: !1 }));
        return {
          activeVersion: n,
          activeDoc: i,
          alternateDocVersions: i
            ? (function (t) {
                const n = {};
                return (
                  e.versions.forEach(e => {
                    e.docs.forEach(r => {
                      r.id === t && (n[e.name] = r);
                    });
                  }),
                  n
                );
              })(i.id)
            : {},
        };
      }
      const c = {},
        d = () => o('docusaurus-plugin-content-docs') ?? c,
        u = e =>
          (function (e, t, n) {
            void 0 === t && (t = a.m), void 0 === n && (n = {});
            const r = o(e),
              i = r?.[t];
            if (!i && n.failfast)
              throw new Error(`Docusaurus plugin global data not found for "${e}" plugin with id "${t}".`);
            return i;
          })('docusaurus-plugin-content-docs', e, { failfast: !0 });
      function f(e) {
        void 0 === e && (e = {});
        const t = d(),
          { pathname: n } = (0, r.TH)();
        return (function (e, t, n) {
          void 0 === n && (n = {});
          const i = Object.entries(e)
              .sort((e, t) => t[1].path.localeCompare(e[1].path))
              .find(e => {
                let [, n] = e;
                return !!(0, r.LX)(t, { path: n.path, exact: !1, strict: !1 });
              }),
            a = i ? { pluginId: i[0], pluginData: i[1] } : void 0;
          if (!a && n.failfast)
            throw new Error(
              `Can't find active docs plugin for "${t}" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(
                e,
              )
                .map(e => e.path)
                .join(', ')}`,
            );
          return a;
        })(t, n, e);
      }
      function p(e) {
        return u(e).versions;
      }
      function m(e) {
        const t = u(e);
        return s(t);
      }
      function h(e) {
        const t = u(e),
          { pathname: n } = (0, r.TH)();
        return l(t, n);
      }
      function g(e) {
        const t = u(e),
          { pathname: n } = (0, r.TH)();
        return (function (e, t) {
          const n = s(e);
          return { latestDocSuggestion: l(e, t).alternateDocVersions[n.name], latestVersionSuggestion: n };
        })(t, n);
      }
    },
    401: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => a });
      var r = n(2521),
        i = n.n(r);
      i().configure({ showSpinner: !1 });
      const a = {
        onRouteUpdate(e) {
          let { location: t, previousLocation: n } = e;
          if (n && t.pathname !== n.pathname) {
            const e = window.setTimeout(() => {
              i().start();
            }, 200);
            return () => window.clearTimeout(e);
          }
        },
        onRouteDidUpdate() {
          i().done();
        },
      };
    },
    6120: (e, t, n) => {
      'use strict';
      n.r(t);
      var r = n(7175),
        i = n(6809);
      !(function (e) {
        const {
            themeConfig: { prism: t },
          } = i.default,
          { additionalLanguages: r } = t;
        (globalThis.Prism = e),
          r.forEach(e => {
            n(4596)(`./prism-${e}`);
          }),
          delete globalThis.Prism;
      })(r.Z);
    },
    4442: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => a });
      var r = n(2784);
      const i = { iconExternalLink: 'iconExternalLink_awgD' };
      function a(e) {
        let { width: t = 13.5, height: n = 13.5 } = e;
        return r.createElement(
          'svg',
          { width: t, height: n, 'aria-hidden': 'true', viewBox: '0 0 24 24', className: i.iconExternalLink },
          r.createElement('path', {
            fill: 'currentColor',
            d: 'M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z',
          }),
        );
      }
    },
    3310: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => ut });
      var r = n(2784),
        i = n(6277),
        a = n(3951),
        o = n(328),
        s = n(7896),
        l = n(7267),
        c = n(1077),
        d = n(2105);
      const u = '__docusaurus_skipToContent_fallback';
      function f(e) {
        e.setAttribute('tabindex', '-1'), e.focus(), e.removeAttribute('tabindex');
      }
      function p() {
        const e = (0, r.useRef)(null),
          { action: t } = (0, l.k6)(),
          n = (0, r.useCallback)(e => {
            e.preventDefault();
            const t = document.querySelector('main:first-of-type') ?? document.getElementById(u);
            t && f(t);
          }, []);
        return (
          (0, d.S)(n => {
            let { location: r } = n;
            e.current && !r.hash && 'PUSH' === t && f(e.current);
          }),
          { containerRef: e, onClick: n }
        );
      }
      const m = (0, c.I)({
        id: 'theme.common.skipToMainContent',
        description:
          'The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation',
        message: 'Skip to main content',
      });
      function h(e) {
        const t = e.children ?? m,
          { containerRef: n, onClick: i } = p();
        return r.createElement(
          'div',
          { ref: n, role: 'region', 'aria-label': m },
          r.createElement('a', (0, s.Z)({}, e, { href: `#${u}`, onClick: i }), t),
        );
      }
      var g = n(211),
        b = n(9499);
      const v = { skipToContent: 'skipToContent_G6ar' };
      function y() {
        return r.createElement(h, { className: v.skipToContent });
      }
      var k = n(7683),
        w = n(3717);
      function S(e) {
        let { width: t = 21, height: n = 21, color: i = 'currentColor', strokeWidth: a = 1.2, className: o, ...l } = e;
        return r.createElement(
          'svg',
          (0, s.Z)({ viewBox: '0 0 15 15', width: t, height: n }, l),
          r.createElement(
            'g',
            { stroke: i, strokeWidth: a },
            r.createElement('path', { d: 'M.75.75l13.5 13.5M14.25.75L.75 14.25' }),
          ),
        );
      }
      const E = { closeButton: 'closeButton_rfix' };
      function C(e) {
        return r.createElement(
          'button',
          (0, s.Z)(
            {
              type: 'button',
              'aria-label': (0, c.I)({
                id: 'theme.AnnouncementBar.closeButtonAriaLabel',
                message: 'Close',
                description: 'The ARIA label for close button of announcement bar',
              }),
            },
            e,
            { className: (0, i.Z)('clean-btn close', E.closeButton, e.className) },
          ),
          r.createElement(S, { width: 14, height: 14, strokeWidth: 3.1 }),
        );
      }
      const _ = { content: 'content_L1uV' };
      function x(e) {
        const { announcementBar: t } = (0, k.L)(),
          { content: n } = t;
        return r.createElement(
          'div',
          (0, s.Z)({}, e, { className: (0, i.Z)(_.content, e.className), dangerouslySetInnerHTML: { __html: n } }),
        );
      }
      const T = {
        announcementBar: 'announcementBar_ncOr',
        announcementBarPlaceholder: 'announcementBarPlaceholder_ajMw',
        announcementBarClose: 'announcementBarClose_c9u4',
        announcementBarContent: 'announcementBarContent__57G',
      };
      function P() {
        const { announcementBar: e } = (0, k.L)(),
          { isActive: t, close: n } = (0, w.nT)();
        if (!t) return null;
        const { backgroundColor: i, textColor: a, isCloseable: o } = e;
        return r.createElement(
          'div',
          { className: T.announcementBar, style: { backgroundColor: i, color: a }, role: 'banner' },
          o && r.createElement('div', { className: T.announcementBarPlaceholder }),
          r.createElement(x, { className: T.announcementBarContent }),
          o && r.createElement(C, { onClick: n, className: T.announcementBarClose }),
        );
      }
      var R = n(7136),
        A = n(4126);
      var L = n(6335),
        D = n(7548);
      const N = r.createContext(null);
      function O(e) {
        let { children: t } = e;
        const n = (function () {
          const e = (0, R.e)(),
            t = (0, D.HY)(),
            [n, i] = (0, r.useState)(!1),
            a = null !== t.component,
            o = (0, L.D9)(a);
          return (
            (0, r.useEffect)(() => {
              a && !o && i(!0);
            }, [a, o]),
            (0, r.useEffect)(() => {
              a ? e.shown || i(!0) : i(!1);
            }, [e.shown, a]),
            (0, r.useMemo)(() => [n, i], [n])
          );
        })();
        return r.createElement(N.Provider, { value: n }, t);
      }
      function z(e) {
        if (e.component) {
          const t = e.component;
          return r.createElement(t, e.props);
        }
      }
      function I() {
        const e = (0, r.useContext)(N);
        if (!e) throw new L.i6('NavbarSecondaryMenuDisplayProvider');
        const [t, n] = e,
          i = (0, r.useCallback)(() => n(!1), [n]),
          a = (0, D.HY)();
        return (0, r.useMemo)(() => ({ shown: t, hide: i, content: z(a) }), [i, a, t]);
      }
      function M(e) {
        let { header: t, primaryMenu: n, secondaryMenu: a } = e;
        const { shown: o } = I();
        return r.createElement(
          'div',
          { className: 'navbar-sidebar' },
          t,
          r.createElement(
            'div',
            { className: (0, i.Z)('navbar-sidebar__items', { 'navbar-sidebar__items--show-secondary': o }) },
            r.createElement('div', { className: 'navbar-sidebar__item menu' }, n),
            r.createElement('div', { className: 'navbar-sidebar__item menu' }, a),
          ),
        );
      }
      var F = n(361),
        B = n(9741);
      function j(e) {
        return r.createElement(
          'svg',
          (0, s.Z)({ viewBox: '0 0 24 24', width: 24, height: 24 }, e),
          r.createElement('path', {
            fill: 'currentColor',
            d: 'M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z',
          }),
        );
      }
      function U(e) {
        return r.createElement(
          'svg',
          (0, s.Z)({ viewBox: '0 0 24 24', width: 24, height: 24 }, e),
          r.createElement('path', {
            fill: 'currentColor',
            d: 'M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z',
          }),
        );
      }
      const $ = {
        toggle: 'toggle_OLSw',
        toggleButton: 'toggleButton_wYmb',
        darkToggleIcon: 'darkToggleIcon_Yem1',
        lightToggleIcon: 'lightToggleIcon_Sxwe',
        toggleButtonDisabled: 'toggleButtonDisabled_vaDU',
      };
      function H(e) {
        let { className: t, buttonClassName: n, value: a, onChange: o } = e;
        const s = (0, B.Z)(),
          l = (0, c.I)(
            {
              message: 'Switch between dark and light mode (currently {mode})',
              id: 'theme.colorToggle.ariaLabel',
              description: 'The ARIA label for the navbar color mode toggle',
            },
            {
              mode:
                'dark' === a
                  ? (0, c.I)({
                      message: 'dark mode',
                      id: 'theme.colorToggle.ariaLabel.mode.dark',
                      description: 'The name for the dark color mode',
                    })
                  : (0, c.I)({
                      message: 'light mode',
                      id: 'theme.colorToggle.ariaLabel.mode.light',
                      description: 'The name for the light color mode',
                    }),
            },
          );
        return r.createElement(
          'div',
          { className: (0, i.Z)($.toggle, t) },
          r.createElement(
            'button',
            {
              className: (0, i.Z)('clean-btn', $.toggleButton, !s && $.toggleButtonDisabled, n),
              type: 'button',
              onClick: () => o('dark' === a ? 'light' : 'dark'),
              disabled: !s,
              title: l,
              'aria-label': l,
              'aria-live': 'polite',
            },
            r.createElement(j, { className: (0, i.Z)($.toggleIcon, $.lightToggleIcon) }),
            r.createElement(U, { className: (0, i.Z)($.toggleIcon, $.darkToggleIcon) }),
          ),
        );
      }
      const q = r.memo(H),
        V = { darkNavbarColorModeToggle: 'darkNavbarColorModeToggle_wZ1H' };
      function G(e) {
        let { className: t } = e;
        const n = (0, k.L)().navbar.style,
          i = (0, k.L)().colorMode.disableSwitch,
          { colorMode: a, setColorMode: o } = (0, F.I)();
        return i
          ? null
          : r.createElement(q, {
              className: t,
              buttonClassName: 'dark' === n ? V.darkNavbarColorModeToggle : void 0,
              value: a,
              onChange: o,
            });
      }
      var Z = n(1881);
      function W() {
        return r.createElement(Z.Z, {
          className: 'navbar__brand',
          imageClassName: 'navbar__logo',
          titleClassName: 'navbar__title text--truncate',
        });
      }
      function K() {
        const e = (0, R.e)();
        return r.createElement(
          'button',
          {
            type: 'button',
            'aria-label': (0, c.I)({
              id: 'theme.docs.sidebar.closeSidebarButtonAriaLabel',
              message: 'Close navigation bar',
              description: 'The ARIA label for close button of mobile sidebar',
            }),
            className: 'clean-btn navbar-sidebar__close',
            onClick: () => e.toggle(),
          },
          r.createElement(S, { color: 'var(--ifm-color-emphasis-600)' }),
        );
      }
      function Y() {
        return r.createElement(
          'div',
          { className: 'navbar-sidebar__brand' },
          r.createElement(W, null),
          r.createElement(G, { className: 'margin-right--md' }),
          r.createElement(K, null),
        );
      }
      var Q = n(9817),
        X = n(77),
        J = n(1344);
      function ee(e, t) {
        return void 0 !== e && void 0 !== t && new RegExp(e, 'gi').test(t);
      }
      var te = n(4442);
      function ne(e) {
        let {
          activeBasePath: t,
          activeBaseRegex: n,
          to: i,
          href: a,
          label: o,
          html: l,
          isDropdownLink: c,
          prependBaseUrlToHref: d,
          ...u
        } = e;
        const f = (0, X.Z)(i),
          p = (0, X.Z)(t),
          m = (0, X.Z)(a, { forcePrependBaseUrl: !0 }),
          h = o && a && !(0, J.Z)(a),
          g = l
            ? { dangerouslySetInnerHTML: { __html: l } }
            : {
                children: r.createElement(
                  r.Fragment,
                  null,
                  o,
                  h && r.createElement(te.Z, c && { width: 12, height: 12 }),
                ),
              };
        return a
          ? r.createElement(Q.Z, (0, s.Z)({ href: d ? m : a }, u, g))
          : r.createElement(
              Q.Z,
              (0, s.Z)(
                { to: f, isNavLink: !0 },
                (t || n) && { isActive: (e, t) => (n ? ee(n, t.pathname) : t.pathname.startsWith(p)) },
                u,
                g,
              ),
            );
      }
      function re(e) {
        let { className: t, isDropdownItem: n = !1, ...a } = e;
        const o = r.createElement(
          ne,
          (0, s.Z)(
            { className: (0, i.Z)(n ? 'dropdown__link' : 'navbar__item navbar__link', t), isDropdownLink: n },
            a,
          ),
        );
        return n ? r.createElement('li', null, o) : o;
      }
      function ie(e) {
        let { className: t, isDropdownItem: n, ...a } = e;
        return r.createElement(
          'li',
          { className: 'menu__list-item' },
          r.createElement(ne, (0, s.Z)({ className: (0, i.Z)('menu__link', t) }, a)),
        );
      }
      function ae(e) {
        let { mobile: t = !1, position: n, ...i } = e;
        const a = t ? ie : re;
        return r.createElement(
          a,
          (0, s.Z)({}, i, {
            activeClassName: i.activeClassName ?? (t ? 'menu__link--active' : 'navbar__link--active'),
          }),
        );
      }
      var oe = n(8698),
        se = n(7661),
        le = n(7614);
      function ce(e, t) {
        return e.some(e =>
          (function (e, t) {
            return (
              !!(0, se.Mg)(e.to, t) ||
              !!ee(e.activeBaseRegex, t) ||
              !(!e.activeBasePath || !t.startsWith(e.activeBasePath))
            );
          })(e, t),
        );
      }
      function de(e) {
        let { items: t, position: n, className: a, onClick: o, ...l } = e;
        const c = (0, r.useRef)(null),
          [d, u] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            const e = e => {
              c.current && !c.current.contains(e.target) && u(!1);
            };
            return (
              document.addEventListener('mousedown', e),
              document.addEventListener('touchstart', e),
              document.addEventListener('focusin', e),
              () => {
                document.removeEventListener('mousedown', e),
                  document.removeEventListener('touchstart', e),
                  document.removeEventListener('focusin', e);
              }
            );
          }, [c]),
          r.createElement(
            'div',
            {
              ref: c,
              className: (0, i.Z)('navbar__item', 'dropdown', 'dropdown--hoverable', {
                'dropdown--right': 'right' === n,
                'dropdown--show': d,
              }),
            },
            r.createElement(
              ne,
              (0, s.Z)(
                {
                  'aria-haspopup': 'true',
                  'aria-expanded': d,
                  role: 'button',
                  href: l.to ? void 0 : '#',
                  className: (0, i.Z)('navbar__link', a),
                },
                l,
                {
                  onClick: l.to ? void 0 : e => e.preventDefault(),
                  onKeyDown: e => {
                    'Enter' === e.key && (e.preventDefault(), u(!d));
                  },
                },
              ),
              l.children ?? l.label,
            ),
            r.createElement(
              'ul',
              { className: 'dropdown__menu' },
              t.map((e, t) =>
                r.createElement(
                  Ce,
                  (0, s.Z)({ isDropdownItem: !0, activeClassName: 'dropdown__link--active' }, e, { key: t }),
                ),
              ),
            ),
          )
        );
      }
      function ue(e) {
        let { items: t, className: n, position: a, onClick: o, ...c } = e;
        const d = (function () {
            const {
                siteConfig: { baseUrl: e },
              } = (0, le.Z)(),
              { pathname: t } = (0, l.TH)();
            return t.replace(e, '/');
          })(),
          u = ce(t, d),
          { collapsed: f, toggleCollapsed: p, setCollapsed: m } = (0, oe.u)({ initialState: () => !u });
        return (
          (0, r.useEffect)(() => {
            u && m(!u);
          }, [d, u, m]),
          r.createElement(
            'li',
            { className: (0, i.Z)('menu__list-item', { 'menu__list-item--collapsed': f }) },
            r.createElement(
              ne,
              (0, s.Z)(
                { role: 'button', className: (0, i.Z)('menu__link menu__link--sublist menu__link--sublist-caret', n) },
                c,
                {
                  onClick: e => {
                    e.preventDefault(), p();
                  },
                },
              ),
              c.children ?? c.label,
            ),
            r.createElement(
              oe.z,
              { lazy: !0, as: 'ul', className: 'menu__list', collapsed: f },
              t.map((e, t) =>
                r.createElement(
                  Ce,
                  (0, s.Z)({ mobile: !0, isDropdownItem: !0, onClick: o, activeClassName: 'menu__link--active' }, e, {
                    key: t,
                  }),
                ),
              ),
            ),
          )
        );
      }
      function fe(e) {
        let { mobile: t = !1, ...n } = e;
        const i = t ? ue : de;
        return r.createElement(i, n);
      }
      var pe = n(5552);
      function me(e) {
        let { width: t = 20, height: n = 20, ...i } = e;
        return r.createElement(
          'svg',
          (0, s.Z)({ viewBox: '0 0 24 24', width: t, height: n, 'aria-hidden': !0 }, i),
          r.createElement('path', {
            fill: 'currentColor',
            d: 'M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z',
          }),
        );
      }
      const he = 'iconLanguage_xrmG';
      var ge = n(5594);
      const be = { searchBox: 'searchBox_xrOJ' };
      function ve(e) {
        let { children: t, className: n } = e;
        return r.createElement('div', { className: (0, i.Z)(n, be.searchBox) }, t);
      }
      var ye = n(1215),
        ke = n(4855);
      var we = n(7949);
      const Se = e => e.docs.find(t => t.id === e.mainDocId);
      const Ee = {
        default: ae,
        localeDropdown: function (e) {
          let { mobile: t, dropdownItemsBefore: n, dropdownItemsAfter: i, ...a } = e;
          const {
              i18n: { currentLocale: o, locales: d, localeConfigs: u },
            } = (0, le.Z)(),
            f = (0, pe.l)(),
            { search: p, hash: m } = (0, l.TH)(),
            h = [
              ...n,
              ...d.map(e => {
                const n = `${`pathname://${f.createUrl({ locale: e, fullyQualified: !1 })}`}${p}${m}`;
                return {
                  label: u[e].label,
                  lang: u[e].htmlLang,
                  to: n,
                  target: '_self',
                  autoAddBaseUrl: !1,
                  className: e === o ? (t ? 'menu__link--active' : 'dropdown__link--active') : '',
                };
              }),
              ...i,
            ],
            g = t
              ? (0, c.I)({
                  message: 'Languages',
                  id: 'theme.navbar.mobileLanguageDropdown.label',
                  description: 'The label for the mobile language switcher dropdown',
                })
              : u[o].label;
          return r.createElement(
            fe,
            (0, s.Z)({}, a, {
              mobile: t,
              label: r.createElement(r.Fragment, null, r.createElement(me, { className: he }), g),
              items: h,
            }),
          );
        },
        search: function (e) {
          let { mobile: t, className: n } = e;
          return t ? null : r.createElement(ve, { className: n }, r.createElement(ge.Z, null));
        },
        dropdown: fe,
        html: function (e) {
          let { value: t, className: n, mobile: a = !1, isDropdownItem: o = !1 } = e;
          const s = o ? 'li' : 'div';
          return r.createElement(s, {
            className: (0, i.Z)({ navbar__item: !a && !o, 'menu__list-item': a }, n),
            dangerouslySetInnerHTML: { __html: t },
          });
        },
        doc: function (e) {
          let { docId: t, label: n, docsPluginId: i, ...a } = e;
          const { activeDoc: o } = (0, ye.Iw)(i),
            l = (0, ke.vY)(t, i);
          return null === l
            ? null
            : r.createElement(
                ae,
                (0, s.Z)({ exact: !0 }, a, {
                  isActive: () => o?.path === l.path || (!!o?.sidebar && o.sidebar === l.sidebar),
                  label: n ?? l.id,
                  to: l.path,
                }),
              );
        },
        docSidebar: function (e) {
          let { sidebarId: t, label: n, docsPluginId: i, ...a } = e;
          const { activeDoc: o } = (0, ye.Iw)(i),
            l = (0, ke.oz)(t, i).link;
          if (!l)
            throw new Error(`DocSidebarNavbarItem: Sidebar with ID "${t}" doesn't have anything to be linked to.`);
          return r.createElement(
            ae,
            (0, s.Z)({ exact: !0 }, a, { isActive: () => o?.sidebar === t, label: n ?? l.label, to: l.path }),
          );
        },
        docsVersion: function (e) {
          let { label: t, to: n, docsPluginId: i, ...a } = e;
          const o = (0, ke.lO)(i)[0],
            l = t ?? o.label,
            c = n ?? (e => e.docs.find(t => t.id === e.mainDocId))(o).path;
          return r.createElement(ae, (0, s.Z)({}, a, { label: l, to: c }));
        },
        docsVersionDropdown: function (e) {
          let {
            mobile: t,
            docsPluginId: n,
            dropdownActiveClassDisabled: i,
            dropdownItemsBefore: a,
            dropdownItemsAfter: o,
            ...d
          } = e;
          const { search: u, hash: f } = (0, l.TH)(),
            p = (0, ye.Iw)(n),
            m = (0, ye.gB)(n),
            { savePreferredVersionName: h } = (0, we.J)(n),
            g = [
              ...a,
              ...m.map(e => {
                const t = p.alternateDocVersions[e.name] ?? Se(e);
                return {
                  label: e.label,
                  to: `${t.path}${u}${f}`,
                  isActive: () => e === p.activeVersion,
                  onClick: () => h(e.name),
                };
              }),
              ...o,
            ],
            b = (0, ke.lO)(n)[0],
            v =
              t && g.length > 1
                ? (0, c.I)({
                    id: 'theme.navbar.mobileVersionsDropdown.label',
                    message: 'Versions',
                    description: 'The label for the navbar versions dropdown on mobile view',
                  })
                : b.label,
            y = t && g.length > 1 ? void 0 : Se(b).path;
          return g.length <= 1
            ? r.createElement(ae, (0, s.Z)({}, d, { mobile: t, label: v, to: y, isActive: i ? () => !1 : void 0 }))
            : r.createElement(
                fe,
                (0, s.Z)({}, d, { mobile: t, label: v, to: y, items: g, isActive: i ? () => !1 : void 0 }),
              );
        },
      };
      function Ce(e) {
        let { type: t, ...n } = e;
        const i = (function (e, t) {
            return e && 'default' !== e ? e : 'items' in t ? 'dropdown' : 'default';
          })(t, n),
          a = Ee[i];
        if (!a) throw new Error(`No NavbarItem component found for type "${t}".`);
        return r.createElement(a, n);
      }
      function _e() {
        const e = (0, R.e)(),
          t = (0, k.L)().navbar.items;
        return r.createElement(
          'ul',
          { className: 'menu__list' },
          t.map((t, n) => r.createElement(Ce, (0, s.Z)({ mobile: !0 }, t, { onClick: () => e.toggle(), key: n }))),
        );
      }
      function xe(e) {
        return r.createElement(
          'button',
          (0, s.Z)({}, e, { type: 'button', className: 'clean-btn navbar-sidebar__back' }),
          r.createElement(
            c.Z,
            {
              id: 'theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel',
              description:
                'The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)',
            },
            '\u2190 Back to main menu',
          ),
        );
      }
      function Te() {
        const e = 0 === (0, k.L)().navbar.items.length,
          t = I();
        return r.createElement(r.Fragment, null, !e && r.createElement(xe, { onClick: () => t.hide() }), t.content);
      }
      function Pe() {
        const e = (0, R.e)();
        var t;
        return (
          void 0 === (t = e.shown) && (t = !0),
          (0, r.useEffect)(
            () => (
              (document.body.style.overflow = t ? 'hidden' : 'visible'),
              () => {
                document.body.style.overflow = 'visible';
              }
            ),
            [t],
          ),
          e.shouldRender
            ? r.createElement(M, {
                header: r.createElement(Y, null),
                primaryMenu: r.createElement(_e, null),
                secondaryMenu: r.createElement(Te, null),
              })
            : null
        );
      }
      const Re = { navbarHideable: 'navbarHideable_bChn', navbarHidden: 'navbarHidden_zsXl' };
      function Ae(e) {
        return r.createElement(
          'div',
          (0, s.Z)({ role: 'presentation' }, e, { className: (0, i.Z)('navbar-sidebar__backdrop', e.className) }),
        );
      }
      function Le(e) {
        let { children: t } = e;
        const {
            navbar: { hideOnScroll: n, style: a },
          } = (0, k.L)(),
          o = (0, R.e)(),
          { navbarRef: s, isNavbarVisible: l } = (function (e) {
            const [t, n] = (0, r.useState)(e),
              i = (0, r.useRef)(!1),
              a = (0, r.useRef)(0),
              o = (0, r.useCallback)(e => {
                null !== e && (a.current = e.getBoundingClientRect().height);
              }, []);
            return (
              (0, A.RF)((t, r) => {
                let { scrollY: o } = t;
                if (!e) return;
                if (o < a.current) return void n(!0);
                if (i.current) return void (i.current = !1);
                const s = r?.scrollY,
                  l = document.documentElement.scrollHeight - a.current,
                  c = window.innerHeight;
                s && o >= s ? n(!1) : o + c < l && n(!0);
              }),
              (0, d.S)(t => {
                if (!e) return;
                const r = t.location.hash;
                if (r ? document.getElementById(r.substring(1)) : void 0) return (i.current = !0), void n(!1);
                n(!0);
              }),
              { navbarRef: o, isNavbarVisible: t }
            );
          })(n);
        return r.createElement(
          'nav',
          {
            ref: s,
            'aria-label': (0, c.I)({
              id: 'theme.NavBar.navAriaLabel',
              message: 'Main',
              description: 'The ARIA label for the main navigation',
            }),
            className: (0, i.Z)('navbar', 'navbar--fixed-top', n && [Re.navbarHideable, !l && Re.navbarHidden], {
              'navbar--dark': 'dark' === a,
              'navbar--primary': 'primary' === a,
              'navbar-sidebar--show': o.shown,
            }),
          },
          t,
          r.createElement(Ae, { onClick: o.toggle }),
          r.createElement(Pe, null),
        );
      }
      var De = n(958);
      const Ne = { errorBoundaryError: 'errorBoundaryError_FiLL' };
      function Oe(e) {
        return r.createElement(
          'button',
          (0, s.Z)({ type: 'button' }, e),
          r.createElement(
            c.Z,
            {
              id: 'theme.ErrorPageContent.tryAgain',
              description:
                'The label of the button to try again rendering when the React error boundary captures an error',
            },
            'Try again',
          ),
        );
      }
      function ze(e) {
        let { error: t } = e;
        const n = (0, De.getErrorCausalChain)(t)
          .map(e => e.message)
          .join('\n\nCause:\n');
        return r.createElement('p', { className: Ne.errorBoundaryError }, n);
      }
      class Ie extends r.Component {
        componentDidCatch(e, t) {
          throw this.props.onError(e, t);
        }
        render() {
          return this.props.children;
        }
      }
      const Me = 'right';
      function Fe(e) {
        let { width: t = 30, height: n = 30, className: i, ...a } = e;
        return r.createElement(
          'svg',
          (0, s.Z)({ className: i, width: t, height: n, viewBox: '0 0 30 30', 'aria-hidden': 'true' }, a),
          r.createElement('path', {
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '2',
            d: 'M4 7h22M4 15h22M4 23h22',
          }),
        );
      }
      function Be() {
        const { toggle: e, shown: t } = (0, R.e)();
        return r.createElement(
          'button',
          {
            onClick: e,
            'aria-label': (0, c.I)({
              id: 'theme.docs.sidebar.toggleSidebarButtonAriaLabel',
              message: 'Toggle navigation bar',
              description: 'The ARIA label for hamburger menu button of mobile navigation',
            }),
            'aria-expanded': t,
            className: 'navbar__toggle clean-btn',
            type: 'button',
          },
          r.createElement(Fe, null),
        );
      }
      const je = { colorModeToggle: 'colorModeToggle_Hg9V' };
      function Ue(e) {
        let { items: t } = e;
        return r.createElement(
          r.Fragment,
          null,
          t.map((e, t) =>
            r.createElement(
              Ie,
              {
                key: t,
                onError: t =>
                  new Error(
                    `A theme navbar item failed to render.\nPlease double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:\n${JSON.stringify(
                      e,
                      null,
                      2,
                    )}`,
                    { cause: t },
                  ),
              },
              r.createElement(Ce, e),
            ),
          ),
        );
      }
      function $e(e) {
        let { left: t, right: n } = e;
        return r.createElement(
          'div',
          { className: 'navbar__inner' },
          r.createElement('div', { className: 'navbar__items' }, t),
          r.createElement('div', { className: 'navbar__items navbar__items--right' }, n),
        );
      }
      function He() {
        const e = (0, R.e)(),
          t = (0, k.L)().navbar.items,
          [n, i] = (function (e) {
            function t(e) {
              return 'left' === (e.position ?? Me);
            }
            return [e.filter(t), e.filter(e => !t(e))];
          })(t),
          a = t.find(e => 'search' === e.type);
        return r.createElement($e, {
          left: r.createElement(
            r.Fragment,
            null,
            !e.disabled && r.createElement(Be, null),
            r.createElement(W, null),
            r.createElement(Ue, { items: n }),
          ),
          right: r.createElement(
            r.Fragment,
            null,
            r.createElement(Ue, { items: i }),
            r.createElement(G, { className: je.colorModeToggle }),
            !a && r.createElement(ve, null, r.createElement(ge.Z, null)),
          ),
        });
      }
      function qe() {
        return r.createElement(Le, null, r.createElement(He, null));
      }
      function Ve(e) {
        let { item: t } = e;
        const { to: n, href: i, label: a, prependBaseUrlToHref: o, ...l } = t,
          c = (0, X.Z)(n),
          d = (0, X.Z)(i, { forcePrependBaseUrl: !0 });
        return r.createElement(
          Q.Z,
          (0, s.Z)({ className: 'footer__link-item' }, i ? { href: o ? d : i } : { to: c }, l),
          a,
          i && !(0, J.Z)(i) && r.createElement(te.Z, null),
        );
      }
      function Ge(e) {
        let { item: t } = e;
        return t.html
          ? r.createElement('li', { className: 'footer__item', dangerouslySetInnerHTML: { __html: t.html } })
          : r.createElement('li', { key: t.href ?? t.to, className: 'footer__item' }, r.createElement(Ve, { item: t }));
      }
      function Ze(e) {
        let { column: t } = e;
        return r.createElement(
          'div',
          { className: 'col footer__col' },
          r.createElement('div', { className: 'footer__title' }, t.title),
          r.createElement(
            'ul',
            { className: 'footer__items clean-list' },
            t.items.map((e, t) => r.createElement(Ge, { key: t, item: e })),
          ),
        );
      }
      function We(e) {
        let { columns: t } = e;
        return r.createElement(
          'div',
          { className: 'row footer__links' },
          t.map((e, t) => r.createElement(Ze, { key: t, column: e })),
        );
      }
      function Ke() {
        return r.createElement('span', { className: 'footer__link-separator' }, '\xb7');
      }
      function Ye(e) {
        let { item: t } = e;
        return t.html
          ? r.createElement('span', { className: 'footer__link-item', dangerouslySetInnerHTML: { __html: t.html } })
          : r.createElement(Ve, { item: t });
      }
      function Qe(e) {
        let { links: t } = e;
        return r.createElement(
          'div',
          { className: 'footer__links text--center' },
          r.createElement(
            'div',
            { className: 'footer__links' },
            t.map((e, n) =>
              r.createElement(
                r.Fragment,
                { key: n },
                r.createElement(Ye, { item: e }),
                t.length !== n + 1 && r.createElement(Ke, null),
              ),
            ),
          ),
        );
      }
      function Xe(e) {
        let { links: t } = e;
        return (function (e) {
          return 'title' in e[0];
        })(t)
          ? r.createElement(We, { columns: t })
          : r.createElement(Qe, { links: t });
      }
      var Je = n(3969);
      const et = { footerLogoLink: 'footerLogoLink_zxYv' };
      function tt(e) {
        let { logo: t } = e;
        const { withBaseUrl: n } = (0, X.C)(),
          a = { light: n(t.src), dark: n(t.srcDark ?? t.src) };
        return r.createElement(Je.Z, {
          className: (0, i.Z)('footer__logo', t.className),
          alt: t.alt,
          sources: a,
          width: t.width,
          height: t.height,
          style: t.style,
        });
      }
      function nt(e) {
        let { logo: t } = e;
        return t.href
          ? r.createElement(
              Q.Z,
              { href: t.href, className: et.footerLogoLink, target: t.target },
              r.createElement(tt, { logo: t }),
            )
          : r.createElement(tt, { logo: t });
      }
      function rt(e) {
        let { copyright: t } = e;
        return r.createElement('div', { className: 'footer__copyright', dangerouslySetInnerHTML: { __html: t } });
      }
      function it(e) {
        let { style: t, links: n, logo: a, copyright: o } = e;
        return r.createElement(
          'footer',
          { className: (0, i.Z)('footer', { 'footer--dark': 'dark' === t }) },
          r.createElement(
            'div',
            { className: 'container container-fluid' },
            n,
            (a || o) &&
              r.createElement(
                'div',
                { className: 'footer__bottom text--center' },
                a && r.createElement('div', { className: 'margin-bottom--sm' }, a),
                o,
              ),
          ),
        );
      }
      function at() {
        const { footer: e } = (0, k.L)();
        if (!e) return null;
        const { copyright: t, links: n, logo: i, style: a } = e;
        return r.createElement(it, {
          style: a,
          links: n && n.length > 0 && r.createElement(Xe, { links: n }),
          logo: i && r.createElement(nt, { logo: i }),
          copyright: t && r.createElement(rt, { copyright: t }),
        });
      }
      const ot = r.memo(at),
        st = (0, L.Qc)([
          F.S,
          w.pl,
          A.OC,
          we.L5,
          o.VC,
          function (e) {
            let { children: t } = e;
            return r.createElement(D.n2, null, r.createElement(R.M, null, r.createElement(O, null, t)));
          },
        ]);
      function lt(e) {
        let { children: t } = e;
        return r.createElement(st, null, t);
      }
      function ct(e) {
        let { error: t, tryAgain: n } = e;
        return r.createElement(
          'main',
          { className: 'container margin-vert--xl' },
          r.createElement(
            'div',
            { className: 'row' },
            r.createElement(
              'div',
              { className: 'col col--6 col--offset-3' },
              r.createElement(
                'h1',
                { className: 'hero__title' },
                r.createElement(
                  c.Z,
                  {
                    id: 'theme.ErrorPageContent.title',
                    description: 'The title of the fallback page when the page crashed',
                  },
                  'This page crashed.',
                ),
              ),
              r.createElement(
                'div',
                { className: 'margin-vert--lg' },
                r.createElement(Oe, { onClick: n, className: 'button button--primary shadow--lw' }),
              ),
              r.createElement('hr', null),
              r.createElement('div', { className: 'margin-vert--md' }, r.createElement(ze, { error: t })),
            ),
          ),
        );
      }
      const dt = { mainWrapper: 'mainWrapper_UyTV' };
      function ut(e) {
        const { children: t, noFooter: n, wrapperClassName: s, title: l, description: c } = e;
        return (
          (0, b.t)(),
          r.createElement(
            lt,
            null,
            r.createElement(o.d, { title: l, description: c }),
            r.createElement(y, null),
            r.createElement(P, null),
            r.createElement(qe, null),
            r.createElement(
              'div',
              { id: u, className: (0, i.Z)(g.k.wrapper.main, dt.mainWrapper, s) },
              r.createElement(a.Z, { fallback: e => r.createElement(ct, e) }, t),
            ),
            !n && r.createElement(ot, null),
          )
        );
      }
    },
    1881: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => u });
      var r = n(7896),
        i = n(2784),
        a = n(9817),
        o = n(77),
        s = n(7614),
        l = n(7683),
        c = n(3969);
      function d(e) {
        let { logo: t, alt: n, imageClassName: r } = e;
        const a = { light: (0, o.Z)(t.src), dark: (0, o.Z)(t.srcDark || t.src) },
          s = i.createElement(c.Z, {
            className: t.className,
            sources: a,
            height: t.height,
            width: t.width,
            alt: n,
            style: t.style,
          });
        return r ? i.createElement('div', { className: r }, s) : s;
      }
      function u(e) {
        const {
            siteConfig: { title: t },
          } = (0, s.Z)(),
          {
            navbar: { title: n, logo: c },
          } = (0, l.L)(),
          { imageClassName: u, titleClassName: f, ...p } = e,
          m = (0, o.Z)(c?.href || '/'),
          h = n ? '' : t,
          g = c?.alt ?? h;
        return i.createElement(
          a.Z,
          (0, r.Z)({ to: m }, p, c?.target && { target: c.target }),
          c && i.createElement(d, { logo: c, alt: g, imageClassName: u }),
          null != n && i.createElement('b', { className: f }, n),
        );
      }
    },
    4390: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => a });
      var r = n(2784),
        i = n(9854);
      function a(e) {
        let { locale: t, version: n, tag: a } = e;
        const o = t;
        return r.createElement(
          i.Z,
          null,
          t && r.createElement('meta', { name: 'docusaurus_locale', content: t }),
          n && r.createElement('meta', { name: 'docusaurus_version', content: n }),
          a && r.createElement('meta', { name: 'docusaurus_tag', content: a }),
          o && r.createElement('meta', { name: 'docsearch:language', content: o }),
          n && r.createElement('meta', { name: 'docsearch:version', content: n }),
          a && r.createElement('meta', { name: 'docsearch:docusaurus_tag', content: a }),
        );
      }
    },
    3969: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => c });
      var r = n(7896),
        i = n(2784),
        a = n(6277),
        o = n(9741),
        s = n(361);
      const l = {
        themedImage: 'themedImage_RWGG',
        'themedImage--light': 'themedImage--light_riBm',
        'themedImage--dark': 'themedImage--dark_Dsi0',
      };
      function c(e) {
        const t = (0, o.Z)(),
          { colorMode: n } = (0, s.I)(),
          { sources: c, className: d, alt: u, ...f } = e,
          p = t ? ('dark' === n ? ['dark'] : ['light']) : ['light', 'dark'];
        return i.createElement(
          i.Fragment,
          null,
          p.map(e =>
            i.createElement(
              'img',
              (0, r.Z)({ key: e, src: c[e], alt: u, className: (0, a.Z)(l.themedImage, l[`themedImage--${e}`], d) }, f),
            ),
          ),
        );
      }
    },
    8698: (e, t, n) => {
      'use strict';
      n.d(t, { u: () => l, z: () => g });
      var r = n(7896),
        i = n(2784),
        a = n(1263),
        o = n(936);
      const s = 'ease-in-out';
      function l(e) {
        let { initialState: t } = e;
        const [n, r] = (0, i.useState)(t ?? !1),
          a = (0, i.useCallback)(() => {
            r(e => !e);
          }, []);
        return { collapsed: n, setCollapsed: r, toggleCollapsed: a };
      }
      const c = { display: 'none', overflow: 'hidden', height: '0px' },
        d = { display: 'block', overflow: 'visible', height: 'auto' };
      function u(e, t) {
        const n = t ? c : d;
        (e.style.display = n.display), (e.style.overflow = n.overflow), (e.style.height = n.height);
      }
      function f(e) {
        let { collapsibleRef: t, collapsed: n, animation: r } = e;
        const a = (0, i.useRef)(!1);
        (0, i.useEffect)(() => {
          const e = t.current;
          function i() {
            const t = e.scrollHeight,
              n =
                r?.duration ??
                (function (e) {
                  if ((0, o.n)()) return 1;
                  const t = e / 36;
                  return Math.round(10 * (4 + 15 * t ** 0.25 + t / 5));
                })(t);
            return { transition: `height ${n}ms ${r?.easing ?? s}`, height: `${t}px` };
          }
          function l() {
            const t = i();
            (e.style.transition = t.transition), (e.style.height = t.height);
          }
          if (!a.current) return u(e, n), void (a.current = !0);
          return (
            (e.style.willChange = 'height'),
            (function () {
              const t = requestAnimationFrame(() => {
                n
                  ? (l(),
                    requestAnimationFrame(() => {
                      (e.style.height = c.height), (e.style.overflow = c.overflow);
                    }))
                  : ((e.style.display = 'block'),
                    requestAnimationFrame(() => {
                      l();
                    }));
              });
              return () => cancelAnimationFrame(t);
            })()
          );
        }, [t, n, r]);
      }
      function p(e) {
        if (!a.Z.canUseDOM) return e ? c : d;
      }
      function m(e) {
        let {
          as: t = 'div',
          collapsed: n,
          children: r,
          animation: a,
          onCollapseTransitionEnd: o,
          className: s,
          disableSSRStyle: l,
        } = e;
        const c = (0, i.useRef)(null);
        return (
          f({ collapsibleRef: c, collapsed: n, animation: a }),
          i.createElement(
            t,
            {
              ref: c,
              style: l ? void 0 : p(n),
              onTransitionEnd: e => {
                'height' === e.propertyName && (u(c.current, n), o?.(n));
              },
              className: s,
            },
            r,
          )
        );
      }
      function h(e) {
        let { collapsed: t, ...n } = e;
        const [a, o] = (0, i.useState)(!t),
          [s, l] = (0, i.useState)(t);
        return (
          (0, i.useLayoutEffect)(() => {
            t || o(!0);
          }, [t]),
          (0, i.useLayoutEffect)(() => {
            a && l(t);
          }, [a, t]),
          a ? i.createElement(m, (0, r.Z)({}, n, { collapsed: s })) : null
        );
      }
      function g(e) {
        let { lazy: t, ...n } = e;
        const r = t ? h : m;
        return i.createElement(r, n);
      }
    },
    3717: (e, t, n) => {
      'use strict';
      n.d(t, { nT: () => m, pl: () => p });
      var r = n(2784),
        i = n(9741),
        a = n(4155),
        o = n(6335),
        s = n(7683);
      const l = (0, a.WA)('docusaurus.announcement.dismiss'),
        c = (0, a.WA)('docusaurus.announcement.id'),
        d = () => 'true' === l.get(),
        u = e => l.set(String(e)),
        f = r.createContext(null);
      function p(e) {
        let { children: t } = e;
        const n = (function () {
          const { announcementBar: e } = (0, s.L)(),
            t = (0, i.Z)(),
            [n, a] = (0, r.useState)(() => !!t && d());
          (0, r.useEffect)(() => {
            a(d());
          }, []);
          const o = (0, r.useCallback)(() => {
            u(!0), a(!0);
          }, []);
          return (
            (0, r.useEffect)(() => {
              if (!e) return;
              const { id: t } = e;
              let n = c.get();
              'annoucement-bar' === n && (n = 'announcement-bar');
              const r = t !== n;
              c.set(t), r && u(!1), (!r && d()) || a(!1);
            }, [e]),
            (0, r.useMemo)(() => ({ isActive: !!e && !n, close: o }), [e, n, o])
          );
        })();
        return r.createElement(f.Provider, { value: n }, t);
      }
      function m() {
        const e = (0, r.useContext)(f);
        if (!e) throw new o.i6('AnnouncementBarProvider');
        return e;
      }
    },
    361: (e, t, n) => {
      'use strict';
      n.d(t, { I: () => g, S: () => h });
      var r = n(2784),
        i = n(1263),
        a = n(6335),
        o = n(4155),
        s = n(7683);
      const l = r.createContext(void 0),
        c = 'theme',
        d = (0, o.WA)(c),
        u = { light: 'light', dark: 'dark' },
        f = e => (e === u.dark ? u.dark : u.light),
        p = e => (i.Z.canUseDOM ? f(document.documentElement.getAttribute('data-theme')) : f(e)),
        m = e => {
          d.set(f(e));
        };
      function h(e) {
        let { children: t } = e;
        const n = (function () {
          const {
              colorMode: { defaultMode: e, disableSwitch: t, respectPrefersColorScheme: n },
            } = (0, s.L)(),
            [i, a] = (0, r.useState)(p(e));
          (0, r.useEffect)(() => {
            t && d.del();
          }, [t]);
          const o = (0, r.useCallback)(
            function (t, r) {
              void 0 === r && (r = {});
              const { persist: i = !0 } = r;
              t
                ? (a(t), i && m(t))
                : (a(n ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? u.dark : u.light) : e), d.del());
            },
            [n, e],
          );
          (0, r.useEffect)(() => {
            document.documentElement.setAttribute('data-theme', f(i));
          }, [i]),
            (0, r.useEffect)(() => {
              if (t) return;
              const e = e => {
                if (e.key !== c) return;
                const t = d.get();
                null !== t && o(f(t));
              };
              return window.addEventListener('storage', e), () => window.removeEventListener('storage', e);
            }, [t, o]);
          const l = (0, r.useRef)(!1);
          return (
            (0, r.useEffect)(() => {
              if (t && !n) return;
              const e = window.matchMedia('(prefers-color-scheme: dark)'),
                r = () => {
                  window.matchMedia('print').matches || l.current
                    ? (l.current = window.matchMedia('print').matches)
                    : o(null);
                };
              return e.addListener(r), () => e.removeListener(r);
            }, [o, t, n]),
            (0, r.useMemo)(
              () => ({
                colorMode: i,
                setColorMode: o,
                get isDarkTheme() {
                  return i === u.dark;
                },
                setLightTheme() {
                  o(u.light);
                },
                setDarkTheme() {
                  o(u.dark);
                },
              }),
              [i, o],
            )
          );
        })();
        return r.createElement(l.Provider, { value: n }, t);
      }
      function g() {
        const e = (0, r.useContext)(l);
        if (null == e)
          throw new a.i6(
            'ColorModeProvider',
            'Please see https://docusaurus.io/docs/api/themes/configuration#use-color-mode.',
          );
        return e;
      }
    },
    7949: (e, t, n) => {
      'use strict';
      n.d(t, { J: () => v, L5: () => g });
      var r = n(2784),
        i = n(1215),
        a = n(8183),
        o = n(7683),
        s = n(4855),
        l = n(6335),
        c = n(4155);
      const d = e => `docs-preferred-version-${e}`,
        u = {
          save: (e, t, n) => {
            (0, c.WA)(d(e), { persistence: t }).set(n);
          },
          read: (e, t) => (0, c.WA)(d(e), { persistence: t }).get(),
          clear: (e, t) => {
            (0, c.WA)(d(e), { persistence: t }).del();
          },
        },
        f = e => Object.fromEntries(e.map(e => [e, { preferredVersionName: null }]));
      const p = r.createContext(null);
      function m() {
        const e = (0, i._r)(),
          t = (0, o.L)().docs.versionPersistence,
          n = (0, r.useMemo)(() => Object.keys(e), [e]),
          [a, s] = (0, r.useState)(() => f(n));
        (0, r.useEffect)(() => {
          s(
            (function (e) {
              let { pluginIds: t, versionPersistence: n, allDocsData: r } = e;
              function i(e) {
                const t = u.read(e, n);
                return r[e].versions.some(e => e.name === t)
                  ? { preferredVersionName: t }
                  : (u.clear(e, n), { preferredVersionName: null });
              }
              return Object.fromEntries(t.map(e => [e, i(e)]));
            })({ allDocsData: e, versionPersistence: t, pluginIds: n }),
          );
        }, [e, t, n]);
        return [
          a,
          (0, r.useMemo)(
            () => ({
              savePreferredVersion: function (e, n) {
                u.save(e, t, n), s(t => ({ ...t, [e]: { preferredVersionName: n } }));
              },
            }),
            [t],
          ),
        ];
      }
      function h(e) {
        let { children: t } = e;
        const n = m();
        return r.createElement(p.Provider, { value: n }, t);
      }
      function g(e) {
        let { children: t } = e;
        return s.cE ? r.createElement(h, null, t) : r.createElement(r.Fragment, null, t);
      }
      function b() {
        const e = (0, r.useContext)(p);
        if (!e) throw new l.i6('DocsPreferredVersionContextProvider');
        return e;
      }
      function v(e) {
        void 0 === e && (e = a.m);
        const t = (0, i.zh)(e),
          [n, o] = b(),
          { preferredVersionName: s } = n[e];
        return {
          preferredVersion: t.versions.find(e => e.name === s) ?? null,
          savePreferredVersionName: (0, r.useCallback)(
            t => {
              o.savePreferredVersion(e, t);
            },
            [o, e],
          ),
        };
      }
    },
    4228: (e, t, n) => {
      'use strict';
      n.d(t, { V: () => l, b: () => s });
      var r = n(2784),
        i = n(6335);
      const a = Symbol('EmptyContext'),
        o = r.createContext(a);
      function s(e) {
        let { children: t, name: n, items: i } = e;
        const a = (0, r.useMemo)(() => (n && i ? { name: n, items: i } : null), [n, i]);
        return r.createElement(o.Provider, { value: a }, t);
      }
      function l() {
        const e = (0, r.useContext)(o);
        if (e === a) throw new i.i6('DocsSidebarProvider');
        return e;
      }
    },
    7136: (e, t, n) => {
      'use strict';
      n.d(t, { M: () => f, e: () => p });
      var r = n(2784),
        i = n(7548),
        a = n(7963),
        o = n(7267),
        s = (n(3100), n(6335));
      function l(e) {
        !(function (e) {
          const t = (0, o.k6)(),
            n = (0, s.zX)(e);
          (0, r.useEffect)(() => t.block((e, t) => n(e, t)), [t, n]);
        })((t, n) => {
          if ('POP' === n) return e(t, n);
        });
      }
      var c = n(7683);
      const d = r.createContext(void 0);
      function u() {
        const e = (function () {
            const e = (0, i.HY)(),
              { items: t } = (0, c.L)().navbar;
            return 0 === t.length && !e.component;
          })(),
          t = (0, a.i)(),
          n = !e && 'mobile' === t,
          [o, s] = (0, r.useState)(!1);
        l(() => {
          if (o) return s(!1), !1;
        });
        const d = (0, r.useCallback)(() => {
          s(e => !e);
        }, []);
        return (
          (0, r.useEffect)(() => {
            'desktop' === t && s(!1);
          }, [t]),
          (0, r.useMemo)(() => ({ disabled: e, shouldRender: n, toggle: d, shown: o }), [e, n, d, o])
        );
      }
      function f(e) {
        let { children: t } = e;
        const n = u();
        return r.createElement(d.Provider, { value: n }, t);
      }
      function p() {
        const e = r.useContext(d);
        if (void 0 === e) throw new s.i6('NavbarMobileSidebarProvider');
        return e;
      }
    },
    7548: (e, t, n) => {
      'use strict';
      n.d(t, { HY: () => s, Zo: () => l, n2: () => o });
      var r = n(2784),
        i = n(6335);
      const a = r.createContext(null);
      function o(e) {
        let { children: t } = e;
        const n = (0, r.useState)({ component: null, props: null });
        return r.createElement(a.Provider, { value: n }, t);
      }
      function s() {
        const e = (0, r.useContext)(a);
        if (!e) throw new i.i6('NavbarSecondaryMenuContentProvider');
        return e[0];
      }
      function l(e) {
        let { component: t, props: n } = e;
        const o = (0, r.useContext)(a);
        if (!o) throw new i.i6('NavbarSecondaryMenuContentProvider');
        const [, s] = o,
          l = (0, i.Ql)(n);
        return (
          (0, r.useEffect)(() => {
            s({ component: t, props: l });
          }, [s, t, l]),
          (0, r.useEffect)(() => () => s({ component: null, props: null }), [s]),
          null
        );
      }
    },
    9499: (e, t, n) => {
      'use strict';
      n.d(t, { h: () => i, t: () => a });
      var r = n(2784);
      const i = 'navigation-with-keyboard';
      function a() {
        (0, r.useEffect)(() => {
          function e(e) {
            'keydown' === e.type && 'Tab' === e.key && document.body.classList.add(i),
              'mousedown' === e.type && document.body.classList.remove(i);
          }
          return (
            document.addEventListener('keydown', e),
            document.addEventListener('mousedown', e),
            () => {
              document.body.classList.remove(i),
                document.removeEventListener('keydown', e),
                document.removeEventListener('mousedown', e);
            }
          );
        }, []);
      }
    },
    7963: (e, t, n) => {
      'use strict';
      n.d(t, { i: () => c });
      var r = n(2784),
        i = n(1263);
      const a = { desktop: 'desktop', mobile: 'mobile', ssr: 'ssr' },
        o = 996;
      function s() {
        return i.Z.canUseDOM ? (window.innerWidth > o ? a.desktop : a.mobile) : a.ssr;
      }
      const l = !1;
      function c() {
        const [e, t] = (0, r.useState)(() => (l ? 'ssr' : s()));
        return (
          (0, r.useEffect)(() => {
            function e() {
              t(s());
            }
            const n = l ? window.setTimeout(e, 1e3) : void 0;
            return (
              window.addEventListener('resize', e),
              () => {
                window.removeEventListener('resize', e), clearTimeout(n);
              }
            );
          }, []),
          e
        );
      }
    },
    211: (e, t, n) => {
      'use strict';
      n.d(t, { k: () => r });
      const r = {
        page: {
          blogListPage: 'blog-list-page',
          blogPostPage: 'blog-post-page',
          blogTagsListPage: 'blog-tags-list-page',
          blogTagPostListPage: 'blog-tags-post-list-page',
          docsDocPage: 'docs-doc-page',
          docsTagsListPage: 'docs-tags-list-page',
          docsTagDocListPage: 'docs-tags-doc-list-page',
          mdxPage: 'mdx-page',
        },
        wrapper: {
          main: 'main-wrapper',
          blogPages: 'blog-wrapper',
          docsPages: 'docs-wrapper',
          mdxPages: 'mdx-wrapper',
        },
        common: {
          editThisPage: 'theme-edit-this-page',
          lastUpdated: 'theme-last-updated',
          backToTopButton: 'theme-back-to-top-button',
          codeBlock: 'theme-code-block',
          admonition: 'theme-admonition',
          admonitionType: e => `theme-admonition-${e}`,
        },
        layout: {},
        docs: {
          docVersionBanner: 'theme-doc-version-banner',
          docVersionBadge: 'theme-doc-version-badge',
          docBreadcrumbs: 'theme-doc-breadcrumbs',
          docMarkdown: 'theme-doc-markdown',
          docTocMobile: 'theme-doc-toc-mobile',
          docTocDesktop: 'theme-doc-toc-desktop',
          docFooter: 'theme-doc-footer',
          docFooterTagsRow: 'theme-doc-footer-tags-row',
          docFooterEditMetaRow: 'theme-doc-footer-edit-meta-row',
          docSidebarContainer: 'theme-doc-sidebar-container',
          docSidebarMenu: 'theme-doc-sidebar-menu',
          docSidebarItemCategory: 'theme-doc-sidebar-item-category',
          docSidebarItemLink: 'theme-doc-sidebar-item-link',
          docSidebarItemCategoryLevel: e => `theme-doc-sidebar-item-category-level-${e}`,
          docSidebarItemLinkLevel: e => `theme-doc-sidebar-item-link-level-${e}`,
        },
        blog: {},
      };
    },
    936: (e, t, n) => {
      'use strict';
      function r() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }
      n.d(t, { n: () => r });
    },
    4855: (e, t, n) => {
      'use strict';
      n.d(t, {
        Wl: () => f,
        _F: () => h,
        cE: () => u,
        hI: () => w,
        lO: () => v,
        vY: () => k,
        oz: () => y,
        s1: () => b,
      });
      var r = n(2784),
        i = n(7267),
        a = n(9702),
        o = n(1215),
        s = n(7949),
        l = n(4228);
      function c(e) {
        return Array.from(new Set(e));
      }
      var d = n(7661);
      const u = !!o._r;
      function f(e) {
        if (e.href) return e.href;
        for (const t of e.items) {
          if ('link' === t.type) return t.href;
          if ('category' === t.type) {
            const e = f(t);
            if (e) return e;
          }
        }
      }
      const p = (e, t) => void 0 !== e && (0, d.Mg)(e, t),
        m = (e, t) => e.some(e => h(e, t));
      function h(e, t) {
        return 'link' === e.type ? p(e.href, t) : 'category' === e.type && (p(e.href, t) || m(e.items, t));
      }
      function g(e) {
        let { sidebarItems: t, pathname: n, onlyCategories: r = !1 } = e;
        const i = [];
        return (
          (function e(t) {
            for (const a of t)
              if (
                ('category' === a.type && ((0, d.Mg)(a.href, n) || e(a.items))) ||
                ('link' === a.type && (0, d.Mg)(a.href, n))
              ) {
                return (r && 'category' !== a.type) || i.unshift(a), !0;
              }
            return !1;
          })(t),
          i
        );
      }
      function b() {
        const e = (0, l.V)(),
          { pathname: t } = (0, i.TH)(),
          n = (0, o.gA)()?.pluginData.breadcrumbs;
        return !1 !== n && e ? g({ sidebarItems: e.items, pathname: t }) : null;
      }
      function v(e) {
        const { activeVersion: t } = (0, o.Iw)(e),
          { preferredVersion: n } = (0, s.J)(e),
          i = (0, o.yW)(e);
        return (0, r.useMemo)(() => c([t, n, i].filter(Boolean)), [t, n, i]);
      }
      function y(e, t) {
        const n = v(t);
        return (0, r.useMemo)(() => {
          const t = n.flatMap(e => (e.sidebars ? Object.entries(e.sidebars) : [])),
            r = t.find(t => t[0] === e);
          if (!r)
            throw new Error(
              `Can't find any sidebar with id "${e}" in version${n.length > 1 ? 's' : ''} ${n
                .map(e => e.name)
                .join(', ')}".\nAvailable sidebar ids are:\n- ${t.map(e => e[0]).join('\n- ')}`,
            );
          return r[1];
        }, [e, n]);
      }
      function k(e, t) {
        const n = v(t);
        return (0, r.useMemo)(() => {
          const t = n.flatMap(e => e.docs),
            r = t.find(t => t.id === e);
          if (!r) {
            if (n.flatMap(e => e.draftIds).includes(e)) return null;
            throw new Error(
              `Couldn't find any doc with id "${e}" in version${n.length > 1 ? 's' : ''} "${n
                .map(e => e.name)
                .join(', ')}".\nAvailable doc ids are:\n- ${c(t.map(e => e.id)).join('\n- ')}`,
            );
          }
          return r;
        }, [e, n]);
      }
      function w(e) {
        let { route: t, versionMetadata: n } = e;
        const r = (0, i.TH)(),
          o = t.routes,
          s = o.find(e => (0, i.LX)(r.pathname, e));
        if (!s) return null;
        const l = s.sidebar,
          c = l ? n.docsSidebars[l] : void 0;
        return { docElement: (0, a.H)(o), sidebarName: l, sidebarItems: c };
      }
    },
    328: (e, t, n) => {
      'use strict';
      n.d(t, { FG: () => f, d: () => d, VC: () => p });
      var r = n(2784),
        i = n(6277),
        a = n(9854),
        o = n(1313);
      function s() {
        const e = r.useContext(o._);
        if (!e) throw new Error('Unexpected: no Docusaurus route context found');
        return e;
      }
      var l = n(77),
        c = n(7614);
      function d(e) {
        let { title: t, description: n, keywords: i, image: o, children: s } = e;
        const d = (function (e) {
            const { siteConfig: t } = (0, c.Z)(),
              { title: n, titleDelimiter: r } = t;
            return e?.trim().length ? `${e.trim()} ${r} ${n}` : n;
          })(t),
          { withBaseUrl: u } = (0, l.C)(),
          f = o ? u(o, { absolute: !0 }) : void 0;
        return r.createElement(
          a.Z,
          null,
          t && r.createElement('title', null, d),
          t && r.createElement('meta', { property: 'og:title', content: d }),
          n && r.createElement('meta', { name: 'description', content: n }),
          n && r.createElement('meta', { property: 'og:description', content: n }),
          i && r.createElement('meta', { name: 'keywords', content: Array.isArray(i) ? i.join(',') : i }),
          f && r.createElement('meta', { property: 'og:image', content: f }),
          f && r.createElement('meta', { name: 'twitter:image', content: f }),
          s,
        );
      }
      const u = r.createContext(void 0);
      function f(e) {
        let { className: t, children: n } = e;
        const o = r.useContext(u),
          s = (0, i.Z)(o, t);
        return r.createElement(
          u.Provider,
          { value: s },
          r.createElement(a.Z, null, r.createElement('html', { className: s })),
          n,
        );
      }
      function p(e) {
        let { children: t } = e;
        const n = s(),
          a = `plugin-${n.plugin.name.replace(/docusaurus-(?:plugin|theme)-(?:content-)?/gi, '')}`;
        const o = `plugin-id-${n.plugin.id}`;
        return r.createElement(f, { className: (0, i.Z)(a, o) }, t);
      }
    },
    6335: (e, t, n) => {
      'use strict';
      n.d(t, { D9: () => o, Qc: () => c, Ql: () => l, i6: () => s, zX: () => a });
      var r = n(2784);
      const i = n(1263).Z.canUseDOM ? r.useLayoutEffect : r.useEffect;
      function a(e) {
        const t = (0, r.useRef)(e);
        return (
          i(() => {
            t.current = e;
          }, [e]),
          (0, r.useCallback)(function () {
            return t.current(...arguments);
          }, [])
        );
      }
      function o(e) {
        const t = (0, r.useRef)();
        return (
          i(() => {
            t.current = e;
          }),
          t.current
        );
      }
      class s extends Error {
        constructor(e, t) {
          super(),
            (this.name = 'ReactContextError'),
            (this.message = `Hook ${
              this.stack?.split('\n')[1]?.match(/at (?:\w+\.)?(?<name>\w+)/)?.groups.name ?? ''
            } is called outside the <${e}>. ${t ?? ''}`);
        }
      }
      function l(e) {
        const t = Object.entries(e);
        return t.sort((e, t) => e[0].localeCompare(t[0])), (0, r.useMemo)(() => e, t.flat());
      }
      function c(e) {
        return t => {
          let { children: n } = t;
          return r.createElement(
            r.Fragment,
            null,
            e.reduceRight((e, t) => r.createElement(t, null, e), n),
          );
        };
      }
    },
    7661: (e, t, n) => {
      'use strict';
      n.d(t, { Mg: () => o, Ns: () => s });
      var r = n(2784),
        i = n(9895),
        a = n(7614);
      function o(e, t) {
        const n = e => (!e || e.endsWith('/') ? e : `${e}/`)?.toLowerCase();
        return n(e) === n(t);
      }
      function s() {
        const { baseUrl: e } = (0, a.Z)().siteConfig;
        return (0, r.useMemo)(
          () =>
            (function (e) {
              let { baseUrl: t, routes: n } = e;
              function r(e) {
                return e.path === t && !0 === e.exact;
              }
              function i(e) {
                return e.path === t && !e.exact;
              }
              return (function e(t) {
                if (0 === t.length) return;
                return t.find(r) || e(t.filter(i).flatMap(e => e.routes ?? []));
              })(n);
            })({ routes: i.Z, baseUrl: e }),
          [e],
        );
      }
    },
    4126: (e, t, n) => {
      'use strict';
      n.d(t, { Ct: () => f, OC: () => l, RF: () => u });
      var r = n(2784),
        i = n(1263),
        a = n(9741),
        o = n(6335);
      const s = r.createContext(void 0);
      function l(e) {
        let { children: t } = e;
        const n = (function () {
          const e = (0, r.useRef)(!0);
          return (0, r.useMemo)(
            () => ({
              scrollEventsEnabledRef: e,
              enableScrollEvents: () => {
                e.current = !0;
              },
              disableScrollEvents: () => {
                e.current = !1;
              },
            }),
            [],
          );
        })();
        return r.createElement(s.Provider, { value: n }, t);
      }
      function c() {
        const e = (0, r.useContext)(s);
        if (null == e) throw new o.i6('ScrollControllerProvider');
        return e;
      }
      const d = () => (i.Z.canUseDOM ? { scrollX: window.pageXOffset, scrollY: window.pageYOffset } : null);
      function u(e, t) {
        void 0 === t && (t = []);
        const { scrollEventsEnabledRef: n } = c(),
          i = (0, r.useRef)(d()),
          a = (0, o.zX)(e);
        (0, r.useEffect)(() => {
          const e = () => {
              if (!n.current) return;
              const e = d();
              a(e, i.current), (i.current = e);
            },
            t = { passive: !0 };
          return e(), window.addEventListener('scroll', e, t), () => window.removeEventListener('scroll', e, t);
        }, [a, n, ...t]);
      }
      function f() {
        const e = (0, r.useRef)(null),
          t = (0, a.Z)() && 'smooth' === getComputedStyle(document.documentElement).scrollBehavior;
        return {
          startScroll: n => {
            e.current = t
              ? (function (e) {
                  return window.scrollTo({ top: e, behavior: 'smooth' }), () => {};
                })(n)
              : (function (e) {
                  let t = null;
                  const n = document.documentElement.scrollTop > e;
                  return (
                    (function r() {
                      const i = document.documentElement.scrollTop;
                      ((n && i > e) || (!n && i < e)) &&
                        ((t = requestAnimationFrame(r)), window.scrollTo(0, Math.floor(0.85 * (i - e)) + e));
                    })(),
                    () => t && cancelAnimationFrame(t)
                  );
                })(n);
          },
          cancelScroll: () => e.current?.(),
        };
      }
    },
    4925: (e, t, n) => {
      'use strict';
      n.d(t, { HX: () => r, os: () => i });
      n(7614);
      const r = 'default';
      function i(e, t) {
        return `docs-${e}-${t}`;
      }
    },
    4155: (e, t, n) => {
      'use strict';
      n.d(t, { WA: () => l });
      n(2784), n(3100);
      const r = 'localStorage';
      function i(e) {
        let { key: t, oldValue: n, newValue: r, storage: i } = e;
        if (n === r) return;
        const a = document.createEvent('StorageEvent');
        a.initStorageEvent('storage', !1, !1, t, n, r, window.location.href, i), window.dispatchEvent(a);
      }
      function a(e) {
        if ((void 0 === e && (e = r), 'undefined' == typeof window))
          throw new Error('Browser storage is not available on Node.js/Docusaurus SSR process.');
        if ('none' === e) return null;
        try {
          return window[e];
        } catch (n) {
          return (
            (t = n),
            o ||
              (console.warn(
                'Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.',
                t,
              ),
              (o = !0)),
            null
          );
        }
        var t;
      }
      let o = !1;
      const s = { get: () => null, set: () => {}, del: () => {}, listen: () => () => {} };
      function l(e, t) {
        if ('undefined' == typeof window)
          return (function (e) {
            function t() {
              throw new Error(
                `Illegal storage API usage for storage key "${e}".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.`,
              );
            }
            return { get: t, set: t, del: t, listen: t };
          })(e);
        const n = a(t?.persistence);
        return null === n
          ? s
          : {
              get: () => {
                try {
                  return n.getItem(e);
                } catch (t) {
                  return console.error(`Docusaurus storage error, can't get key=${e}`, t), null;
                }
              },
              set: t => {
                try {
                  const r = n.getItem(e);
                  n.setItem(e, t), i({ key: e, oldValue: r, newValue: t, storage: n });
                } catch (r) {
                  console.error(`Docusaurus storage error, can't set ${e}=${t}`, r);
                }
              },
              del: () => {
                try {
                  const t = n.getItem(e);
                  n.removeItem(e), i({ key: e, oldValue: t, newValue: null, storage: n });
                } catch (t) {
                  console.error(`Docusaurus storage error, can't delete key=${e}`, t);
                }
              },
              listen: t => {
                try {
                  const r = r => {
                    r.storageArea === n && r.key === e && t(r);
                  };
                  return window.addEventListener('storage', r), () => window.removeEventListener('storage', r);
                } catch (r) {
                  return console.error(`Docusaurus storage error, can't listen for changes of key=${e}`, r), () => {};
                }
              },
            };
      }
    },
    5552: (e, t, n) => {
      'use strict';
      n.d(t, { l: () => a });
      var r = n(7614),
        i = n(7267);
      function a() {
        const {
            siteConfig: { baseUrl: e, url: t },
            i18n: { defaultLocale: n, currentLocale: a },
          } = (0, r.Z)(),
          { pathname: o } = (0, i.TH)(),
          s = a === n ? e : e.replace(`/${a}/`, '/'),
          l = o.replace(e, '');
        return {
          createUrl: function (e) {
            let { locale: r, fullyQualified: i } = e;
            return `${i ? t : ''}${(function (e) {
              return e === n ? `${s}` : `${s}${e}/`;
            })(r)}${l}`;
          },
        };
      }
    },
    2105: (e, t, n) => {
      'use strict';
      n.d(t, { S: () => o });
      var r = n(2784),
        i = n(7267),
        a = n(6335);
      function o(e) {
        const t = (0, i.TH)(),
          n = (0, a.D9)(t),
          o = (0, a.zX)(e);
        (0, r.useEffect)(() => {
          n && t !== n && o({ location: t, previousLocation: n });
        }, [o, t, n]);
      }
    },
    7683: (e, t, n) => {
      'use strict';
      n.d(t, { L: () => i });
      var r = n(7614);
      function i() {
        return (0, r.Z)().siteConfig.themeConfig;
      }
    },
    1025: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          const { trailingSlash: n, baseUrl: r } = t;
          if (e.startsWith('#')) return e;
          if (void 0 === n) return e;
          const [i] = e.split(/[#?]/),
            a =
              '/' === i || i === r
                ? i
                : ((o = i),
                  n
                    ? (function (e) {
                        return e.endsWith('/') ? e : `${e}/`;
                      })(o)
                    : (function (e) {
                        return e.endsWith('/') ? e.slice(0, -1) : e;
                      })(o));
          var o;
          return e.replace(i, a);
        });
    },
    415: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getErrorCausalChain = void 0),
        (t.getErrorCausalChain = function e(t) {
          return t.cause ? [t, ...e(t.cause)] : [t];
        });
    },
    958: function (e, t, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getErrorCausalChain = t.applyTrailingSlash = t.blogPostContainerID = void 0),
        (t.blogPostContainerID = '__blog-post-container');
      var i = n(1025);
      Object.defineProperty(t, 'applyTrailingSlash', {
        enumerable: !0,
        get: function () {
          return r(i).default;
        },
      });
      var a = n(415);
      Object.defineProperty(t, 'getErrorCausalChain', {
        enumerable: !0,
        get: function () {
          return a.getErrorCausalChain;
        },
      });
    },
    9895: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => p });
      var r = n(2784),
        i = n(7896),
        a = n(9028),
        o = n.n(a),
        s = n(6887);
      const l = {
        '006b5ef1': [
          () => n.e(8959).then(n.bind(n, 3781)),
          '@site/docs/lisk-decentralized-identifier/interfaces/Ed25519KeyPair.md',
          3781,
        ],
        '064985d9': [() => n.e(1990).then(n.bind(n, 2720)), '@site/docs/lisk-did/namespaces/did.utils.array.md', 2720],
        '077ed4f6': [() => n.e(2484).then(n.bind(n, 6833)), '@site/docs/lisk-did/modules.md', 6833],
        '0dc75353': [() => n.e(4150).then(n.bind(n, 5365)), '@site/docs/lisk-did/namespaces/did.client.md', 5365],
        '0f13b884': [
          () => n.e(5398).then(n.bind(n, 2634)),
          '@site/docs/lisk-decentralized-identifier/interfaces/Service.md',
          2634,
        ],
        10555422: [
          () => n.e(1399).then(n.bind(n, 6836)),
          '@site/docs/lisk-verifiable-credentials/namespaces/documentLoader.md',
          6836,
        ],
        '11e5575d': [
          () => n.e(7231).then(n.bind(n, 3031)),
          '@site/docs/lisk-decentralized-identifier/interfaces/DocumentLoaderResult.md',
          3031,
        ],
        '1314dd29': [
          () => n.e(9242).then(n.bind(n, 4416)),
          '@site/docs/lisk-did-module/classes/AddKeysCommand.md',
          4416,
        ],
        14522826: [
          () => n.e(5556).then(n.bind(n, 8711)),
          '@site/docs/lisk-decentralized-identifier/interfaces/TransactionPayload.md',
          8711,
        ],
        17896441: [() => Promise.all([n.e(532), n.e(4391), n.e(7918)]).then(n.bind(n, 7494)), '@theme/DocItem', 7494],
        '1be2af91': [
          () => n.e(5077).then(n.bind(n, 5426)),
          '@site/docs/lisk-decentralized-identifier/interfaces/RemoveServiceEndpointParam.md',
          5426,
        ],
        '1be78505': [() => Promise.all([n.e(532), n.e(9514)]).then(n.bind(n, 4959)), '@theme/DocPage', 4959],
        '1d043ce7': [
          () => n.e(5582).then(n.bind(n, 9053)),
          '@site/docs/lisk-did/interfaces/did.AddServiceEndpointParam.md',
          9053,
        ],
        '1e53cc69': [() => n.e(9542).then(n.bind(n, 2586)), '@site/docs/lisk-did/classes/DidEndpoint.md', 2586],
        '1ee82caf': [
          () => n.e(3305).then(n.bind(n, 7524)),
          '@site/docs/lisk-did/interfaces/did.RemoveControllersParam.md',
          7524,
        ],
        '1f391b9e': [() => Promise.all([n.e(532), n.e(4391), n.e(3085)]).then(n.bind(n, 8398)), '@theme/MDXPage', 8398],
        '2032905b': [
          () => n.e(2833).then(n.bind(n, 262)),
          '@site/docs/lisk-did/classes/AddServiceEndpointCommand.md',
          262,
        ],
        '2638761c': [
          () => n.e(6317).then(n.bind(n, 6909)),
          '@site/docs/lisk-did/interfaces/did.RemoveServiceEndpointParam.md',
          6909,
        ],
        '2798c384': [
          () => n.e(5841).then(n.bind(n, 4567)),
          '@site/docs/lisk-decentralized-identifier/interfaces/Ed25519Signature2020.md',
          4567,
        ],
        '2abc0038': [
          () => n.e(4460).then(n.bind(n, 6253)),
          '@site/docs/lisk-did-module/classes/DeactivateCommand.md',
          6253,
        ],
        '2aec2d79': [() => n.e(5197).then(n.bind(n, 9091)), '@site/docs/lisk-did/namespaces/did.utils.schema.md', 9091],
        '2d5f723b': [
          () => n.e(9582).then(n.bind(n, 5375)),
          '@site/docs/lisk-did/namespaces/vc.documentLoader.builders.md',
          5375,
        ],
        '2f4ec505': [
          () => n.e(2934).then(n.bind(n, 1894)),
          '@site/docs/lisk-decentralized-identifier/interfaces/AddControllersParam.md',
          1894,
        ],
        '30035efc': [
          () => n.e(4047).then(n.bind(n, 2181)),
          '@site/docs/lisk-decentralized-identifier/namespaces/utils.array.md',
          2181,
        ],
        '30869df1': [
          () => n.e(2368).then(n.bind(n, 178)),
          '@site/docs/lisk-did/interfaces/did.DidModuleConfig.md',
          178,
        ],
        32406735: [
          () => n.e(8656).then(n.bind(n, 6479)),
          '@site/docs/lisk-decentralized-identifier/interfaces/AddKeysParam.md',
          6479,
        ],
        '36f96204': [() => n.e(2164).then(n.bind(n, 5420)), '@site/docs/lisk-did/classes/DeactivateCommand.md', 5420],
        '38af9225': [
          () => n.e(8267).then(n.bind(n, 3578)),
          '@site/docs/lisk-decentralized-identifier/interfaces/VerificationMethod.md',
          3578,
        ],
        '393be207': [() => n.e(7414).then(n.bind(n, 4175)), '@site/src/pages/markdown-page.md', 4175],
        '3992530b': [
          () => n.e(2999).then(n.t.bind(n, 5745, 19)),
          '/Users/aldhosutra/Documents/Lisk/lisk-did/packages/lisk-did-docs/.docusaurus/docusaurus-plugin-content-pages/default/plugin-route-context-module-100.json',
          5745,
        ],
        '3cb32eb3': [
          () => n.e(9003).then(n.bind(n, 2073)),
          '@site/docs/lisk-did/classes/RemoveControllersCommand.md',
          2073,
        ],
        '3cdeaa8b': [
          () => n.e(4753).then(n.bind(n, 6539)),
          '@site/docs/lisk-did/namespaces/did.cryptography.key.md',
          6539,
        ],
        '3de94718': [() => n.e(7456).then(n.bind(n, 2164)), '@site/docs/lisk-did/interfaces/did.KeysCommand.md', 2164],
        '3f817765': [() => n.e(6784).then(n.bind(n, 8990)), '@site/docs/lisk-did/interfaces/did.CreateParam.md', 8990],
        '43de257c': [
          () => n.e(7865).then(n.bind(n, 3582)),
          '@site/docs/lisk-did-module/classes/RemoveServiceEndpointCommand.md',
          3582,
        ],
        '43ead82f': [
          () => n.e(8679).then(n.bind(n, 3201)),
          '@site/docs/lisk-did/classes/RemoveServiceEndpointCommand.md',
          3201,
        ],
        '4453e5a0': [
          () => n.e(1458).then(n.bind(n, 8055)),
          '@site/docs/lisk-verifiable-credentials/namespaces/codec.md',
          8055,
        ],
        '47f1fc17': [
          () => n.e(7238).then(n.bind(n, 5176)),
          '@site/docs/lisk-verifiable-credentials/interfaces/VPVerificationResult.md',
          5176,
        ],
        '49bbbc1b': [() => n.e(7082).then(n.bind(n, 7634)), '@site/docs/lisk-did/namespaces/did.cryptography.md', 7634],
        '4ea5b618': [
          () => n.e(7093).then(n.bind(n, 9200)),
          '@site/docs/lisk-did-module/classes/CreateCommand.md',
          9200,
        ],
        '4f18af5c': [
          () => n.e(9061).then(n.bind(n, 2317)),
          '@site/docs/lisk-decentralized-identifier/namespaces/resolver.md',
          2317,
        ],
        '4fef91a4': [
          () => n.e(680).then(n.bind(n, 7039)),
          '@site/docs/lisk-did-module/classes/AddServiceEndpointCommand.md',
          7039,
        ],
        '514b65e5': [
          () => n.e(2916).then(n.bind(n, 3259)),
          '@site/docs/lisk-did/interfaces/did.Ed25519Signature2020.md',
          3259,
        ],
        '51c58943': [() => n.e(2992).then(n.bind(n, 4710)), '@site/docs/lisk-did/interfaces/did.AddKeysParam.md', 4710],
        '53d0cfdb': [
          () => n.e(8899).then(n.bind(n, 7066)),
          '@site/docs/lisk-decentralized-identifier/namespaces/cryptography.convert.md',
          7066,
        ],
        '547f338f': [
          () => n.e(1385).then(n.bind(n, 6207)),
          '@site/docs/lisk-decentralized-identifier/interfaces/KeysCommand.md',
          6207,
        ],
        '54c42313': [() => n.e(1640).then(n.bind(n, 865)), '@site/docs/lisk-did/classes/CreateCommand.md', 865],
        '56c56022': [
          () => n.e(6780).then(n.bind(n, 9448)),
          '@site/docs/lisk-decentralized-identifier/interfaces/resolver.CachedResolver.md',
          9448,
        ],
        '5e9f5e1a': [() => Promise.resolve().then(n.bind(n, 6809)), '@generated/docusaurus.config', 6809],
        '66b5d29e': [() => n.e(3277).then(n.bind(n, 5479)), '@site/docs/lisk-did-module/classes/DidMethod.md', 5479],
        '6788c700': [() => n.e(7817).then(n.bind(n, 1927)), '@site/docs/lisk-did-module/index.md', 1927],
        '69250ab0': [
          () => n.e(7311).then(n.bind(n, 6962)),
          '@site/docs/lisk-decentralized-identifier/interfaces/DidDocument.md',
          6962,
        ],
        '6bd303db': [
          () => n.e(1186).then(n.bind(n, 205)),
          '@site/docs/lisk-decentralized-identifier/namespaces/client.utils.md',
          205,
        ],
        '6d6a85ce': [() => n.e(9234).then(n.bind(n, 2939)), '@site/docs/lisk-did/classes/DidMethod.md', 2939],
        '6e22ba8f': [() => n.e(8659).then(n.bind(n, 4526)), '@site/docs/lisk-did/namespaces/vc.codec.md', 4526],
        70144472: [
          () => n.e(2800).then(n.bind(n, 7449)),
          '@site/docs/lisk-decentralized-identifier/interfaces/NonceStoreData.md',
          7449,
        ],
        '704c791a': [
          () => n.e(6237).then(n.bind(n, 1832)),
          '@site/docs/lisk-did/interfaces/did.TransactionPayload.md',
          1832,
        ],
        '7446a70e': [() => n.e(1702).then(n.bind(n, 9869)), '@site/docs/lisk-did/interfaces/did.DidEndpoint.md', 9869],
        '758cfb5d': [() => n.e(6382).then(n.bind(n, 629)), '@site/docs/lisk-did/interfaces/vc.VerificationKey.md', 629],
        '790cfb73': [() => n.e(7548).then(n.bind(n, 481)), '@site/docs/lisk-did/namespaces/did.md', 481],
        '7ae82ac8': [() => n.e(200).then(n.bind(n, 8003)), '@site/docs/lisk-did/namespaces/did.resolver.md', 8003],
        '7c1c2168': [() => n.e(3912).then(n.bind(n, 5742)), '@site/docs/lisk-did/interfaces/did.JWEDocument.md', 5742],
        '7cc6c21f': [() => n.e(9479).then(n.bind(n, 7970)), '@site/docs/lisk-verifiable-credentials/index.md', 7970],
        '7e22a9a3': [() => n.e(9502).then(n.bind(n, 367)), '@site/docs/lisk-did-module/modules.md', 367],
        '829ff91d': [
          () => n.e(3328).then(n.bind(n, 6764)),
          '@site/docs/lisk-did/interfaces/did.resolver.CachedResolver.md',
          6764,
        ],
        83110983: [() => n.e(9221).then(n.bind(n, 7097)), '@site/docs/lisk-did/classes/RemoveKeysCommand.md', 7097],
        '8357b20f': [
          () => n.e(719).then(n.bind(n, 1845)),
          '@site/docs/lisk-decentralized-identifier/namespaces/utils.schema.md',
          1845,
        ],
        '87f454ca': [
          () => n.e(2041).then(n.bind(n, 656)),
          '@site/docs/lisk-did/interfaces/did.CipherInterface.md',
          656,
        ],
        '89d806d6': [
          () => n.e(1925).then(n.bind(n, 3587)),
          '@site/docs/lisk-did-module/classes/RemoveControllersCommand.md',
          3587,
        ],
        '8b0148da': [() => n.e(5978).then(n.bind(n, 9998)), '@site/docs/lisk-did/interfaces/did.Service.md', 9998],
        '8d655303': [
          () => n.e(5006).then(n.bind(n, 7062)),
          '@site/docs/lisk-did/classes/AddControllersCommand.md',
          7062,
        ],
        '8ea19ab3': [
          () => n.e(8992).then(n.bind(n, 4205)),
          '@site/docs/lisk-decentralized-identifier/namespaces/cryptography.key.md',
          4205,
        ],
        '904d2fff': [
          () => n.e(7164).then(n.bind(n, 8840)),
          '@site/docs/lisk-did/interfaces/did.TransactionPayloadWithoutSignature.md',
          8840,
        ],
        '9140efc7': [
          () => n.e(9655).then(n.bind(n, 4957)),
          '@site/docs/lisk-decentralized-identifier/interfaces/DeactivateParam.md',
          4957,
        ],
        '935f2afb': [
          () => n.e(53).then(n.t.bind(n, 1109, 19)),
          '~docs/default/version-current-metadata-prop-751.json',
          1109,
        ],
        '93eede03': [
          () => n.e(894).then(n.bind(n, 1906)),
          '@site/docs/lisk-did/namespaces/did.cryptography.operation.md',
          1906,
        ],
        '9674a20c': [() => n.e(1880).then(n.bind(n, 9177)), '@site/docs/lisk-did/namespaces/vc.md', 9177],
        '9826905d': [
          () => n.e(6779).then(n.bind(n, 6933)),
          '@site/docs/lisk-decentralized-identifier/interfaces/DidEndpoint.md',
          6933,
        ],
        '9b004fbb': [
          () => n.e(959).then(n.bind(n, 1120)),
          '@site/docs/lisk-did/interfaces/did.NonceStoreData.md',
          1120,
        ],
        '9c769a36': [
          () => n.e(611).then(n.bind(n, 2682)),
          '@site/docs/lisk-decentralized-identifier/namespaces/utils.constant.md',
          2682,
        ],
        '9e72d314': [
          () => n.e(6058).then(n.bind(n, 2467)),
          '@site/docs/lisk-did/interfaces/did.DeactivateParam.md',
          2467,
        ],
        '9ec64b7d': [() => n.e(1723).then(n.bind(n, 6605)), '@site/docs/lisk-did/interfaces/did.BaseResolver.md', 6605],
        a25ba2f2: [() => n.e(3049).then(n.bind(n, 1790)), '@site/docs/lisk-verifiable-credentials/modules.md', 1790],
        a41349e8: [
          () => n.e(1725).then(n.bind(n, 5347)),
          '@site/docs/lisk-decentralized-identifier/interfaces/CreateParam.md',
          5347,
        ],
        ae8845ce: [
          () => n.e(1136).then(n.bind(n, 166)),
          '@site/docs/lisk-decentralized-identifier/interfaces/CipherInterface.md',
          166,
        ],
        b0278a69: [
          () => n.e(1451).then(n.bind(n, 9675)),
          '@site/docs/lisk-decentralized-identifier/interfaces/RemoveControllersParam.md',
          9675,
        ],
        b03ad513: [
          () => n.e(7848).then(n.bind(n, 735)),
          '@site/docs/lisk-decentralized-identifier/interfaces/BaseResolver.md',
          735,
        ],
        b35aa954: [() => n.e(8181).then(n.bind(n, 6484)), '@site/docs/lisk-did/interfaces/did.DidMethod.md', 6484],
        b672006c: [
          () => n.e(609).then(n.bind(n, 8591)),
          '@site/docs/lisk-verifiable-credentials/interfaces/VCVerificationResult.md',
          8591,
        ],
        b6f5dda7: [
          () => n.e(3072).then(n.bind(n, 5149)),
          '@site/docs/lisk-did-module/classes/AddControllersCommand.md',
          5149,
        ],
        c09eaf2f: [
          () => n.e(2989).then(n.bind(n, 7709)),
          '@site/docs/lisk-decentralized-identifier/namespaces/client.md',
          7709,
        ],
        c254d40f: [
          () => n.e(9417).then(n.bind(n, 4397)),
          '@site/docs/lisk-decentralized-identifier/interfaces/DidModuleConfig.md',
          4397,
        ],
        c3610abc: [() => n.e(8685).then(n.bind(n, 8566)), '@site/docs/lisk-did/index.md', 8566],
        c471a213: [() => n.e(2757).then(n.bind(n, 4084)), '@site/docs/lisk-did/namespaces/did.utils.object.md', 4084],
        c4f5d8e4: [() => Promise.all([n.e(532), n.e(4195)]).then(n.bind(n, 3056)), '@site/src/pages/index.js', 3056],
        c715c0af: [
          () => n.e(8995).then(n.bind(n, 2628)),
          '@site/docs/lisk-did/namespaces/did.cryptography.method.md',
          2628,
        ],
        c773d40c: [
          () => n.e(2337).then(n.bind(n, 1493)),
          '@site/docs/lisk-decentralized-identifier/namespaces/cryptography.operation.md',
          1493,
        ],
        c7a6ae36: [
          () => n.e(1623).then(n.bind(n, 7144)),
          '@site/docs/lisk-did-module/classes/RemoveKeysCommand.md',
          7144,
        ],
        c9404f21: [() => n.e(7463).then(n.bind(n, 373)), '@site/docs/lisk-did/namespaces/did.utils.constant.md', 373],
        ca5260f0: [
          () => n.e(7806).then(n.bind(n, 7238)),
          '@site/docs/lisk-verifiable-credentials/interfaces/VerificationKey.md',
          7238,
        ],
        cb95a50b: [() => n.e(9199).then(n.bind(n, 116)), '@site/docs/lisk-did/interfaces/did.RemoveKeysParam.md', 116],
        cc026340: [() => n.e(5315).then(n.bind(n, 1132)), '@site/docs/lisk-did-module/classes/DidEndpoint.md', 1132],
        cdd145b6: [
          () => n.e(5434).then(n.bind(n, 2635)),
          '@site/docs/lisk-verifiable-credentials/namespaces/documentLoader.builders.md',
          2635,
        ],
        cdeb6dcd: [
          () => n.e(2899).then(n.bind(n, 1084)),
          '@site/docs/lisk-verifiable-credentials/interfaces/Proof.md',
          1084,
        ],
        cded6dca: [
          () => n.e(3236).then(n.bind(n, 6195)),
          '@site/docs/lisk-did/interfaces/did.DocumentLoaderResult.md',
          6195,
        ],
        cdf1d32a: [
          () => n.e(482).then(n.t.bind(n, 3769, 19)),
          '/Users/aldhosutra/Documents/Lisk/lisk-did/packages/lisk-did-docs/.docusaurus/docusaurus-plugin-content-docs/default/plugin-route-context-module-100.json',
          3769,
        ],
        d0401cc7: [
          () => n.e(4881).then(n.bind(n, 8279)),
          '@site/docs/lisk-did/interfaces/vc.VCVerificationResult.md',
          8279,
        ],
        d301beab: [
          () => n.e(8242).then(n.bind(n, 2363)),
          '@site/docs/lisk-decentralized-identifier/namespaces/utils.md',
          2363,
        ],
        d36ee2af: [
          () => n.e(3126).then(n.bind(n, 8063)),
          '@site/docs/lisk-decentralized-identifier/namespaces/utils.object.md',
          8063,
        ],
        d48bbd1f: [
          () => n.e(7639).then(n.bind(n, 3036)),
          '@site/docs/lisk-decentralized-identifier/namespaces/cryptography.md',
          3036,
        ],
        d9f1061f: [
          () => n.e(5958).then(n.bind(n, 3669)),
          '@site/docs/lisk-decentralized-identifier/namespaces/cryptography.codec.md',
          3669,
        ],
        da57b419: [
          () => n.e(7792).then(n.bind(n, 2610)),
          '@site/docs/lisk-decentralized-identifier/namespaces/cryptography.method.md',
          2610,
        ],
        da75fb34: [() => n.e(2672).then(n.bind(n, 8547)), '@site/docs/lisk-did/namespaces/did.utils.md', 8547],
        de3a0db0: [() => n.e(8857).then(n.bind(n, 2370)), '@site/docs/lisk-did/classes/DidModule.md', 2370],
        df9d7346: [
          () => n.e(5811).then(n.bind(n, 6191)),
          '@site/docs/lisk-decentralized-identifier/interfaces/TransactionPayloadWithoutSignature.md',
          6191,
        ],
        e09b8622: [() => n.e(2583).then(n.bind(n, 6107)), '@site/docs/lisk-did/interfaces/vc.Proof.md', 6107],
        e0ab7c67: [() => n.e(1566).then(n.bind(n, 4613)), '@site/docs/lisk-decentralized-identifier/modules.md', 4613],
        e1d57ac7: [
          () => n.e(7717).then(n.bind(n, 8386)),
          '@site/docs/lisk-did/namespaces/did.cryptography.convert.md',
          8386,
        ],
        e27869dd: [() => n.e(5580).then(n.bind(n, 9665)), '@site/docs/lisk-did/namespaces/did.client.utils.md', 9665],
        e2812223: [() => n.e(5904).then(n.bind(n, 5098)), '@site/docs/lisk-did-module/classes/DidModule.md', 5098],
        e32ffa57: [() => n.e(7566).then(n.bind(n, 7599)), '@site/docs/lisk-did/namespaces/vc.documentLoader.md', 7599],
        e8985b18: [
          () => n.e(9067).then(n.bind(n, 5638)),
          '@site/docs/lisk-decentralized-identifier/interfaces/JWEDocument.md',
          5638,
        ],
        e914d913: [
          () => n.e(5416).then(n.bind(n, 2924)),
          '@site/docs/lisk-did/namespaces/did.cryptography.codec.md',
          2924,
        ],
        ee471bf8: [
          () => n.e(585).then(n.bind(n, 2474)),
          '@site/docs/lisk-decentralized-identifier/interfaces/DidMethod.md',
          2474,
        ],
        f170fb76: [() => n.e(1502).then(n.bind(n, 7934)), '@site/docs/lisk-did/interfaces/did.DidDocument.md', 7934],
        f7d8cbcc: [() => n.e(6060).then(n.bind(n, 5564)), '@site/docs/lisk-did/interfaces/did.Ed25519KeyPair.md', 5564],
        f8028371: [() => n.e(3313).then(n.bind(n, 8745)), '@site/docs/lisk-decentralized-identifier/index.md', 8745],
        fc0957fe: [
          () => n.e(8356).then(n.bind(n, 5245)),
          '@site/docs/lisk-did/interfaces/vc.VPVerificationResult.md',
          5245,
        ],
        fe0cca24: [
          () => n.e(4913).then(n.bind(n, 6091)),
          '@site/docs/lisk-did/interfaces/did.AddControllersParam.md',
          6091,
        ],
        fe992c76: [
          () => n.e(1205).then(n.bind(n, 7692)),
          '@site/docs/lisk-did/interfaces/did.VerificationMethod.md',
          7692,
        ],
        fef3654c: [
          () => n.e(4254).then(n.bind(n, 8593)),
          '@site/docs/lisk-decentralized-identifier/interfaces/RemoveKeysParam.md',
          8593,
        ],
        ff787bc4: [
          () => n.e(8839).then(n.bind(n, 7686)),
          '@site/docs/lisk-decentralized-identifier/interfaces/AddServiceEndpointParam.md',
          7686,
        ],
        ffdf4e4e: [() => n.e(2123).then(n.bind(n, 2881)), '@site/docs/lisk-did/classes/AddKeysCommand.md', 2881],
      };
      function c(e) {
        let { error: t, retry: n, pastDelay: i } = e;
        return t
          ? r.createElement(
              'div',
              {
                style: {
                  textAlign: 'center',
                  color: '#fff',
                  backgroundColor: '#fa383e',
                  borderColor: '#fa383e',
                  borderStyle: 'solid',
                  borderRadius: '0.25rem',
                  borderWidth: '1px',
                  boxSizing: 'border-box',
                  display: 'block',
                  padding: '1rem',
                  flex: '0 0 50%',
                  marginLeft: '25%',
                  marginRight: '25%',
                  marginTop: '5rem',
                  maxWidth: '50%',
                  width: '100%',
                },
              },
              r.createElement('p', null, String(t)),
              r.createElement('div', null, r.createElement('button', { type: 'button', onClick: n }, 'Retry')),
            )
          : i
          ? r.createElement(
              'div',
              { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } },
              r.createElement(
                'svg',
                {
                  id: 'loader',
                  style: { width: 128, height: 110, position: 'absolute', top: 'calc(100vh - 64%)' },
                  viewBox: '0 0 45 45',
                  xmlns: 'http://www.w3.org/2000/svg',
                  stroke: '#61dafb',
                },
                r.createElement(
                  'g',
                  { fill: 'none', fillRule: 'evenodd', transform: 'translate(1 1)', strokeWidth: '2' },
                  r.createElement(
                    'circle',
                    { cx: '22', cy: '22', r: '6', strokeOpacity: '0' },
                    r.createElement('animate', {
                      attributeName: 'r',
                      begin: '1.5s',
                      dur: '3s',
                      values: '6;22',
                      calcMode: 'linear',
                      repeatCount: 'indefinite',
                    }),
                    r.createElement('animate', {
                      attributeName: 'stroke-opacity',
                      begin: '1.5s',
                      dur: '3s',
                      values: '1;0',
                      calcMode: 'linear',
                      repeatCount: 'indefinite',
                    }),
                    r.createElement('animate', {
                      attributeName: 'stroke-width',
                      begin: '1.5s',
                      dur: '3s',
                      values: '2;0',
                      calcMode: 'linear',
                      repeatCount: 'indefinite',
                    }),
                  ),
                  r.createElement(
                    'circle',
                    { cx: '22', cy: '22', r: '6', strokeOpacity: '0' },
                    r.createElement('animate', {
                      attributeName: 'r',
                      begin: '3s',
                      dur: '3s',
                      values: '6;22',
                      calcMode: 'linear',
                      repeatCount: 'indefinite',
                    }),
                    r.createElement('animate', {
                      attributeName: 'stroke-opacity',
                      begin: '3s',
                      dur: '3s',
                      values: '1;0',
                      calcMode: 'linear',
                      repeatCount: 'indefinite',
                    }),
                    r.createElement('animate', {
                      attributeName: 'stroke-width',
                      begin: '3s',
                      dur: '3s',
                      values: '2;0',
                      calcMode: 'linear',
                      repeatCount: 'indefinite',
                    }),
                  ),
                  r.createElement(
                    'circle',
                    { cx: '22', cy: '22', r: '8' },
                    r.createElement('animate', {
                      attributeName: 'r',
                      begin: '0s',
                      dur: '1.5s',
                      values: '6;1;2;3;4;5;6',
                      calcMode: 'linear',
                      repeatCount: 'indefinite',
                    }),
                  ),
                ),
              ),
            )
          : null;
      }
      var d = n(805),
        u = n(1313);
      function f(e, t) {
        if ('*' === e)
          return o()({
            loading: c,
            loader: () => n.e(2006).then(n.bind(n, 2006)),
            modules: ['@theme/NotFound'],
            webpack: () => [2006],
            render(e, t) {
              const n = e.default;
              return r.createElement(
                u.z,
                { value: { plugin: { name: 'native', id: 'default' } } },
                r.createElement(n, t),
              );
            },
          });
        const a = s[`${e}-${t}`],
          f = {},
          p = [],
          m = [],
          h = (0, d.Z)(a);
        return (
          Object.entries(h).forEach(e => {
            let [t, n] = e;
            const r = l[n];
            r && ((f[t] = r[0]), p.push(r[1]), m.push(r[2]));
          }),
          o().Map({
            loading: c,
            loader: f,
            modules: p,
            webpack: () => m,
            render(t, n) {
              const o = JSON.parse(JSON.stringify(a));
              Object.entries(t).forEach(t => {
                let [n, r] = t;
                const i = r.default;
                if (!i)
                  throw new Error(
                    `The page component at ${e} doesn't have a default export. This makes it impossible to render anything. Consider default-exporting a React component.`,
                  );
                ('object' != typeof i && 'function' != typeof i) ||
                  Object.keys(r)
                    .filter(e => 'default' !== e)
                    .forEach(e => {
                      i[e] = r[e];
                    });
                let a = o;
                const s = n.split('.');
                s.slice(0, -1).forEach(e => {
                  a = a[e];
                }),
                  (a[s[s.length - 1]] = i);
              });
              const s = o.__comp;
              delete o.__comp;
              const l = o.__context;
              return delete o.__context, r.createElement(u.z, { value: l }, r.createElement(s, (0, i.Z)({}, o, n)));
            },
          })
        );
      }
      const p = [
        { path: '/markdown-page', component: f('/markdown-page', '256'), exact: !0 },
        {
          path: '/docs',
          component: f('/docs', 'e4b'),
          routes: [
            {
              path: '/docs/lisk-decentralized-identifier/',
              component: f('/docs/lisk-decentralized-identifier/', '508'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/AddControllersParam',
              component: f('/docs/lisk-decentralized-identifier/interfaces/AddControllersParam', 'aa6'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/AddKeysParam',
              component: f('/docs/lisk-decentralized-identifier/interfaces/AddKeysParam', '4b2'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/AddServiceEndpointParam',
              component: f('/docs/lisk-decentralized-identifier/interfaces/AddServiceEndpointParam', 'b31'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/BaseResolver',
              component: f('/docs/lisk-decentralized-identifier/interfaces/BaseResolver', 'dec'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/CipherInterface',
              component: f('/docs/lisk-decentralized-identifier/interfaces/CipherInterface', '8ac'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/CreateParam',
              component: f('/docs/lisk-decentralized-identifier/interfaces/CreateParam', '1a5'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/DeactivateParam',
              component: f('/docs/lisk-decentralized-identifier/interfaces/DeactivateParam', '333'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/DidDocument',
              component: f('/docs/lisk-decentralized-identifier/interfaces/DidDocument', 'dac'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/DidEndpoint',
              component: f('/docs/lisk-decentralized-identifier/interfaces/DidEndpoint', 'aff'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/DidMethod',
              component: f('/docs/lisk-decentralized-identifier/interfaces/DidMethod', '544'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/DidModuleConfig',
              component: f('/docs/lisk-decentralized-identifier/interfaces/DidModuleConfig', '65e'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/DocumentLoaderResult',
              component: f('/docs/lisk-decentralized-identifier/interfaces/DocumentLoaderResult', '7a5'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/Ed25519KeyPair',
              component: f('/docs/lisk-decentralized-identifier/interfaces/Ed25519KeyPair', '652'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/Ed25519Signature2020',
              component: f('/docs/lisk-decentralized-identifier/interfaces/Ed25519Signature2020', '647'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/JWEDocument',
              component: f('/docs/lisk-decentralized-identifier/interfaces/JWEDocument', '2df'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/KeysCommand',
              component: f('/docs/lisk-decentralized-identifier/interfaces/KeysCommand', 'f70'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/NonceStoreData',
              component: f('/docs/lisk-decentralized-identifier/interfaces/NonceStoreData', '3c4'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/RemoveControllersParam',
              component: f('/docs/lisk-decentralized-identifier/interfaces/RemoveControllersParam', '27e'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/RemoveKeysParam',
              component: f('/docs/lisk-decentralized-identifier/interfaces/RemoveKeysParam', 'ba6'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/RemoveServiceEndpointParam',
              component: f('/docs/lisk-decentralized-identifier/interfaces/RemoveServiceEndpointParam', '2b1'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/resolver.CachedResolver',
              component: f('/docs/lisk-decentralized-identifier/interfaces/resolver.CachedResolver', 'f6f'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/Service',
              component: f('/docs/lisk-decentralized-identifier/interfaces/Service', 'c7a'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/TransactionPayload',
              component: f('/docs/lisk-decentralized-identifier/interfaces/TransactionPayload', '5ed'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/TransactionPayloadWithoutSignature',
              component: f('/docs/lisk-decentralized-identifier/interfaces/TransactionPayloadWithoutSignature', '7cc'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/interfaces/VerificationMethod',
              component: f('/docs/lisk-decentralized-identifier/interfaces/VerificationMethod', '48d'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/modules',
              component: f('/docs/lisk-decentralized-identifier/modules', '951'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/namespaces/client',
              component: f('/docs/lisk-decentralized-identifier/namespaces/client', '994'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/namespaces/client.utils',
              component: f('/docs/lisk-decentralized-identifier/namespaces/client.utils', '0ea'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/namespaces/cryptography',
              component: f('/docs/lisk-decentralized-identifier/namespaces/cryptography', 'c7c'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/namespaces/cryptography.codec',
              component: f('/docs/lisk-decentralized-identifier/namespaces/cryptography.codec', 'e41'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/namespaces/cryptography.convert',
              component: f('/docs/lisk-decentralized-identifier/namespaces/cryptography.convert', 'f77'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/namespaces/cryptography.key',
              component: f('/docs/lisk-decentralized-identifier/namespaces/cryptography.key', '4d7'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/namespaces/cryptography.method',
              component: f('/docs/lisk-decentralized-identifier/namespaces/cryptography.method', '5a3'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/namespaces/cryptography.operation',
              component: f('/docs/lisk-decentralized-identifier/namespaces/cryptography.operation', '975'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/namespaces/resolver',
              component: f('/docs/lisk-decentralized-identifier/namespaces/resolver', '9df'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/namespaces/utils',
              component: f('/docs/lisk-decentralized-identifier/namespaces/utils', 'f75'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/namespaces/utils.array',
              component: f('/docs/lisk-decentralized-identifier/namespaces/utils.array', '298'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/namespaces/utils.constant',
              component: f('/docs/lisk-decentralized-identifier/namespaces/utils.constant', '47d'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/namespaces/utils.object',
              component: f('/docs/lisk-decentralized-identifier/namespaces/utils.object', 'f8c'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-decentralized-identifier/namespaces/utils.schema',
              component: f('/docs/lisk-decentralized-identifier/namespaces/utils.schema', 'a04'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did-module/',
              component: f('/docs/lisk-did-module/', 'deb'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did-module/classes/AddControllersCommand',
              component: f('/docs/lisk-did-module/classes/AddControllersCommand', '87e'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did-module/classes/AddKeysCommand',
              component: f('/docs/lisk-did-module/classes/AddKeysCommand', '085'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did-module/classes/AddServiceEndpointCommand',
              component: f('/docs/lisk-did-module/classes/AddServiceEndpointCommand', 'bb9'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did-module/classes/CreateCommand',
              component: f('/docs/lisk-did-module/classes/CreateCommand', '254'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did-module/classes/DeactivateCommand',
              component: f('/docs/lisk-did-module/classes/DeactivateCommand', '163'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did-module/classes/DidEndpoint',
              component: f('/docs/lisk-did-module/classes/DidEndpoint', 'efe'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did-module/classes/DidMethod',
              component: f('/docs/lisk-did-module/classes/DidMethod', '5b9'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did-module/classes/DidModule',
              component: f('/docs/lisk-did-module/classes/DidModule', '2a2'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did-module/classes/RemoveControllersCommand',
              component: f('/docs/lisk-did-module/classes/RemoveControllersCommand', '4b2'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did-module/classes/RemoveKeysCommand',
              component: f('/docs/lisk-did-module/classes/RemoveKeysCommand', '023'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did-module/classes/RemoveServiceEndpointCommand',
              component: f('/docs/lisk-did-module/classes/RemoveServiceEndpointCommand', '6fb'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did-module/modules',
              component: f('/docs/lisk-did-module/modules', '41c'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            { path: '/docs/lisk-did/', component: f('/docs/lisk-did/', '647'), exact: !0, sidebar: 'tutorialSidebar' },
            {
              path: '/docs/lisk-did/classes/AddControllersCommand',
              component: f('/docs/lisk-did/classes/AddControllersCommand', '765'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/classes/AddKeysCommand',
              component: f('/docs/lisk-did/classes/AddKeysCommand', '808'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/classes/AddServiceEndpointCommand',
              component: f('/docs/lisk-did/classes/AddServiceEndpointCommand', 'dac'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/classes/CreateCommand',
              component: f('/docs/lisk-did/classes/CreateCommand', '976'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/classes/DeactivateCommand',
              component: f('/docs/lisk-did/classes/DeactivateCommand', 'cdf'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/classes/DidEndpoint',
              component: f('/docs/lisk-did/classes/DidEndpoint', '0b8'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/classes/DidMethod',
              component: f('/docs/lisk-did/classes/DidMethod', '1cb'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/classes/DidModule',
              component: f('/docs/lisk-did/classes/DidModule', '42f'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/classes/RemoveControllersCommand',
              component: f('/docs/lisk-did/classes/RemoveControllersCommand', 'aa5'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/classes/RemoveKeysCommand',
              component: f('/docs/lisk-did/classes/RemoveKeysCommand', '71c'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/classes/RemoveServiceEndpointCommand',
              component: f('/docs/lisk-did/classes/RemoveServiceEndpointCommand', 'afa'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.AddControllersParam',
              component: f('/docs/lisk-did/interfaces/did.AddControllersParam', '22a'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.AddKeysParam',
              component: f('/docs/lisk-did/interfaces/did.AddKeysParam', 'a8b'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.AddServiceEndpointParam',
              component: f('/docs/lisk-did/interfaces/did.AddServiceEndpointParam', 'e6b'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.BaseResolver',
              component: f('/docs/lisk-did/interfaces/did.BaseResolver', 'a31'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.CipherInterface',
              component: f('/docs/lisk-did/interfaces/did.CipherInterface', '2ae'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.CreateParam',
              component: f('/docs/lisk-did/interfaces/did.CreateParam', '732'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.DeactivateParam',
              component: f('/docs/lisk-did/interfaces/did.DeactivateParam', '5c2'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.DidDocument',
              component: f('/docs/lisk-did/interfaces/did.DidDocument', '4ce'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.DidEndpoint',
              component: f('/docs/lisk-did/interfaces/did.DidEndpoint', '829'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.DidMethod',
              component: f('/docs/lisk-did/interfaces/did.DidMethod', '228'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.DidModuleConfig',
              component: f('/docs/lisk-did/interfaces/did.DidModuleConfig', '69b'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.DocumentLoaderResult',
              component: f('/docs/lisk-did/interfaces/did.DocumentLoaderResult', '704'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.Ed25519KeyPair',
              component: f('/docs/lisk-did/interfaces/did.Ed25519KeyPair', 'd6c'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.Ed25519Signature2020',
              component: f('/docs/lisk-did/interfaces/did.Ed25519Signature2020', 'ad5'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.JWEDocument',
              component: f('/docs/lisk-did/interfaces/did.JWEDocument', '90a'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.KeysCommand',
              component: f('/docs/lisk-did/interfaces/did.KeysCommand', '87e'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.NonceStoreData',
              component: f('/docs/lisk-did/interfaces/did.NonceStoreData', '6f9'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.RemoveControllersParam',
              component: f('/docs/lisk-did/interfaces/did.RemoveControllersParam', 'e09'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.RemoveKeysParam',
              component: f('/docs/lisk-did/interfaces/did.RemoveKeysParam', 'c03'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.RemoveServiceEndpointParam',
              component: f('/docs/lisk-did/interfaces/did.RemoveServiceEndpointParam', '90d'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.resolver.CachedResolver',
              component: f('/docs/lisk-did/interfaces/did.resolver.CachedResolver', '40b'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.Service',
              component: f('/docs/lisk-did/interfaces/did.Service', 'e59'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.TransactionPayload',
              component: f('/docs/lisk-did/interfaces/did.TransactionPayload', '3c1'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.TransactionPayloadWithoutSignature',
              component: f('/docs/lisk-did/interfaces/did.TransactionPayloadWithoutSignature', '2c5'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/did.VerificationMethod',
              component: f('/docs/lisk-did/interfaces/did.VerificationMethod', '468'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/vc.Proof',
              component: f('/docs/lisk-did/interfaces/vc.Proof', 'f16'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/vc.VCVerificationResult',
              component: f('/docs/lisk-did/interfaces/vc.VCVerificationResult', '973'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/vc.VerificationKey',
              component: f('/docs/lisk-did/interfaces/vc.VerificationKey', '0a2'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/interfaces/vc.VPVerificationResult',
              component: f('/docs/lisk-did/interfaces/vc.VPVerificationResult', 'ef6'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/modules',
              component: f('/docs/lisk-did/modules', '3b4'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/namespaces/did',
              component: f('/docs/lisk-did/namespaces/did', '96e'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/namespaces/did.client',
              component: f('/docs/lisk-did/namespaces/did.client', '3a2'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/namespaces/did.client.utils',
              component: f('/docs/lisk-did/namespaces/did.client.utils', 'ab0'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/namespaces/did.cryptography',
              component: f('/docs/lisk-did/namespaces/did.cryptography', '887'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/namespaces/did.cryptography.codec',
              component: f('/docs/lisk-did/namespaces/did.cryptography.codec', '641'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/namespaces/did.cryptography.convert',
              component: f('/docs/lisk-did/namespaces/did.cryptography.convert', '54c'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/namespaces/did.cryptography.key',
              component: f('/docs/lisk-did/namespaces/did.cryptography.key', '8c8'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/namespaces/did.cryptography.method',
              component: f('/docs/lisk-did/namespaces/did.cryptography.method', '1fa'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/namespaces/did.cryptography.operation',
              component: f('/docs/lisk-did/namespaces/did.cryptography.operation', '0a8'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/namespaces/did.resolver',
              component: f('/docs/lisk-did/namespaces/did.resolver', '03b'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/namespaces/did.utils',
              component: f('/docs/lisk-did/namespaces/did.utils', '20d'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/namespaces/did.utils.array',
              component: f('/docs/lisk-did/namespaces/did.utils.array', 'a36'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/namespaces/did.utils.constant',
              component: f('/docs/lisk-did/namespaces/did.utils.constant', 'd82'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/namespaces/did.utils.object',
              component: f('/docs/lisk-did/namespaces/did.utils.object', '16b'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/namespaces/did.utils.schema',
              component: f('/docs/lisk-did/namespaces/did.utils.schema', 'd92'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/namespaces/vc',
              component: f('/docs/lisk-did/namespaces/vc', '7c4'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/namespaces/vc.codec',
              component: f('/docs/lisk-did/namespaces/vc.codec', '2a7'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/namespaces/vc.documentLoader',
              component: f('/docs/lisk-did/namespaces/vc.documentLoader', '8f4'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-did/namespaces/vc.documentLoader.builders',
              component: f('/docs/lisk-did/namespaces/vc.documentLoader.builders', 'f35'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-verifiable-credentials/',
              component: f('/docs/lisk-verifiable-credentials/', '4d2'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-verifiable-credentials/interfaces/Proof',
              component: f('/docs/lisk-verifiable-credentials/interfaces/Proof', '9df'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-verifiable-credentials/interfaces/VCVerificationResult',
              component: f('/docs/lisk-verifiable-credentials/interfaces/VCVerificationResult', '856'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-verifiable-credentials/interfaces/VerificationKey',
              component: f('/docs/lisk-verifiable-credentials/interfaces/VerificationKey', '130'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-verifiable-credentials/interfaces/VPVerificationResult',
              component: f('/docs/lisk-verifiable-credentials/interfaces/VPVerificationResult', 'c06'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-verifiable-credentials/modules',
              component: f('/docs/lisk-verifiable-credentials/modules', '176'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-verifiable-credentials/namespaces/codec',
              component: f('/docs/lisk-verifiable-credentials/namespaces/codec', '9cf'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-verifiable-credentials/namespaces/documentLoader',
              component: f('/docs/lisk-verifiable-credentials/namespaces/documentLoader', '747'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
            {
              path: '/docs/lisk-verifiable-credentials/namespaces/documentLoader.builders',
              component: f('/docs/lisk-verifiable-credentials/namespaces/documentLoader.builders', '9d6'),
              exact: !0,
              sidebar: 'tutorialSidebar',
            },
          ],
        },
        { path: '/', component: f('/', 'c91'), exact: !0 },
        { path: '*', component: f('*') },
      ];
    },
    6277: (e, t, n) => {
      'use strict';
      function r(e) {
        var t,
          n,
          i = '';
        if ('string' == typeof e || 'number' == typeof e) i += e;
        else if ('object' == typeof e)
          if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = r(e[t])) && (i && (i += ' '), (i += n));
          else for (t in e) e[t] && (i && (i += ' '), (i += t));
        return i;
      }
      n.d(t, { Z: () => i });
      const i = function () {
        for (var e, t, n = 0, i = ''; n < arguments.length; )
          (e = arguments[n++]) && (t = r(e)) && (i && (i += ' '), (i += t));
        return i;
      };
    },
    4410: (e, t, n) => {
      'use strict';
      n.d(t, { lX: () => k, q_: () => x, ob: () => p, PP: () => P, Ep: () => f });
      var r = n(7896);
      function i(e) {
        return '/' === e.charAt(0);
      }
      function a(e, t) {
        for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
        e.pop();
      }
      const o = function (e, t) {
        void 0 === t && (t = '');
        var n,
          r = (e && e.split('/')) || [],
          o = (t && t.split('/')) || [],
          s = e && i(e),
          l = t && i(t),
          c = s || l;
        if ((e && i(e) ? (o = r) : r.length && (o.pop(), (o = o.concat(r))), !o.length)) return '/';
        if (o.length) {
          var d = o[o.length - 1];
          n = '.' === d || '..' === d || '' === d;
        } else n = !1;
        for (var u = 0, f = o.length; f >= 0; f--) {
          var p = o[f];
          '.' === p ? a(o, f) : '..' === p ? (a(o, f), u++) : u && (a(o, f), u--);
        }
        if (!c) for (; u--; u) o.unshift('..');
        !c || '' === o[0] || (o[0] && i(o[0])) || o.unshift('');
        var m = o.join('/');
        return n && '/' !== m.substr(-1) && (m += '/'), m;
      };
      var s = n(362);
      function l(e) {
        return '/' === e.charAt(0) ? e : '/' + e;
      }
      function c(e) {
        return '/' === e.charAt(0) ? e.substr(1) : e;
      }
      function d(e, t) {
        return (function (e, t) {
          return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== '/?#'.indexOf(e.charAt(t.length));
        })(e, t)
          ? e.substr(t.length)
          : e;
      }
      function u(e) {
        return '/' === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      }
      function f(e) {
        var t = e.pathname,
          n = e.search,
          r = e.hash,
          i = t || '/';
        return (
          n && '?' !== n && (i += '?' === n.charAt(0) ? n : '?' + n),
          r && '#' !== r && (i += '#' === r.charAt(0) ? r : '#' + r),
          i
        );
      }
      function p(e, t, n, i) {
        var a;
        'string' == typeof e
          ? ((a = (function (e) {
              var t = e || '/',
                n = '',
                r = '',
                i = t.indexOf('#');
              -1 !== i && ((r = t.substr(i)), (t = t.substr(0, i)));
              var a = t.indexOf('?');
              return (
                -1 !== a && ((n = t.substr(a)), (t = t.substr(0, a))),
                { pathname: t, search: '?' === n ? '' : n, hash: '#' === r ? '' : r }
              );
            })(e)),
            (a.state = t))
          : (void 0 === (a = (0, r.Z)({}, e)).pathname && (a.pathname = ''),
            a.search ? '?' !== a.search.charAt(0) && (a.search = '?' + a.search) : (a.search = ''),
            a.hash ? '#' !== a.hash.charAt(0) && (a.hash = '#' + a.hash) : (a.hash = ''),
            void 0 !== t && void 0 === a.state && (a.state = t));
        try {
          a.pathname = decodeURI(a.pathname);
        } catch (s) {
          throw s instanceof URIError
            ? new URIError(
                'Pathname "' +
                  a.pathname +
                  '" could not be decoded. This is likely caused by an invalid percent-encoding.',
              )
            : s;
        }
        return (
          n && (a.key = n),
          i
            ? a.pathname
              ? '/' !== a.pathname.charAt(0) && (a.pathname = o(a.pathname, i.pathname))
              : (a.pathname = i.pathname)
            : a.pathname || (a.pathname = '/'),
          a
        );
      }
      function m() {
        var e = null;
        var t = [];
        return {
          setPrompt: function (t) {
            return (
              (e = t),
              function () {
                e === t && (e = null);
              }
            );
          },
          confirmTransitionTo: function (t, n, r, i) {
            if (null != e) {
              var a = 'function' == typeof e ? e(t, n) : e;
              'string' == typeof a ? ('function' == typeof r ? r(a, i) : i(!0)) : i(!1 !== a);
            } else i(!0);
          },
          appendListener: function (e) {
            var n = !0;
            function r() {
              n && e.apply(void 0, arguments);
            }
            return (
              t.push(r),
              function () {
                (n = !1),
                  (t = t.filter(function (e) {
                    return e !== r;
                  }));
              }
            );
          },
          notifyListeners: function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            t.forEach(function (e) {
              return e.apply(void 0, n);
            });
          },
        };
      }
      var h = !('undefined' == typeof window || !window.document || !window.document.createElement);
      function g(e, t) {
        t(window.confirm(e));
      }
      var b = 'popstate',
        v = 'hashchange';
      function y() {
        try {
          return window.history.state || {};
        } catch (e) {
          return {};
        }
      }
      function k(e) {
        void 0 === e && (e = {}), h || (0, s.Z)(!1);
        var t,
          n = window.history,
          i =
            ((-1 === (t = window.navigator.userAgent).indexOf('Android 2.') && -1 === t.indexOf('Android 4.0')) ||
              -1 === t.indexOf('Mobile Safari') ||
              -1 !== t.indexOf('Chrome') ||
              -1 !== t.indexOf('Windows Phone')) &&
            window.history &&
            'pushState' in window.history,
          a = !(-1 === window.navigator.userAgent.indexOf('Trident')),
          o = e,
          c = o.forceRefresh,
          k = void 0 !== c && c,
          w = o.getUserConfirmation,
          S = void 0 === w ? g : w,
          E = o.keyLength,
          C = void 0 === E ? 6 : E,
          _ = e.basename ? u(l(e.basename)) : '';
        function x(e) {
          var t = e || {},
            n = t.key,
            r = t.state,
            i = window.location,
            a = i.pathname + i.search + i.hash;
          return _ && (a = d(a, _)), p(a, r, n);
        }
        function T() {
          return Math.random().toString(36).substr(2, C);
        }
        var P = m();
        function R(e) {
          (0, r.Z)(U, e), (U.length = n.length), P.notifyListeners(U.location, U.action);
        }
        function A(e) {
          (function (e) {
            return void 0 === e.state && -1 === navigator.userAgent.indexOf('CriOS');
          })(e) || N(x(e.state));
        }
        function L() {
          N(x(y()));
        }
        var D = !1;
        function N(e) {
          if (D) (D = !1), R();
          else {
            P.confirmTransitionTo(e, 'POP', S, function (t) {
              t
                ? R({ action: 'POP', location: e })
                : (function (e) {
                    var t = U.location,
                      n = z.indexOf(t.key);
                    -1 === n && (n = 0);
                    var r = z.indexOf(e.key);
                    -1 === r && (r = 0);
                    var i = n - r;
                    i && ((D = !0), M(i));
                  })(e);
            });
          }
        }
        var O = x(y()),
          z = [O.key];
        function I(e) {
          return _ + f(e);
        }
        function M(e) {
          n.go(e);
        }
        var F = 0;
        function B(e) {
          1 === (F += e) && 1 === e
            ? (window.addEventListener(b, A), a && window.addEventListener(v, L))
            : 0 === F && (window.removeEventListener(b, A), a && window.removeEventListener(v, L));
        }
        var j = !1;
        var U = {
          length: n.length,
          action: 'POP',
          location: O,
          createHref: I,
          push: function (e, t) {
            var r = 'PUSH',
              a = p(e, t, T(), U.location);
            P.confirmTransitionTo(a, r, S, function (e) {
              if (e) {
                var t = I(a),
                  o = a.key,
                  s = a.state;
                if (i)
                  if ((n.pushState({ key: o, state: s }, null, t), k)) window.location.href = t;
                  else {
                    var l = z.indexOf(U.location.key),
                      c = z.slice(0, l + 1);
                    c.push(a.key), (z = c), R({ action: r, location: a });
                  }
                else window.location.href = t;
              }
            });
          },
          replace: function (e, t) {
            var r = 'REPLACE',
              a = p(e, t, T(), U.location);
            P.confirmTransitionTo(a, r, S, function (e) {
              if (e) {
                var t = I(a),
                  o = a.key,
                  s = a.state;
                if (i)
                  if ((n.replaceState({ key: o, state: s }, null, t), k)) window.location.replace(t);
                  else {
                    var l = z.indexOf(U.location.key);
                    -1 !== l && (z[l] = a.key), R({ action: r, location: a });
                  }
                else window.location.replace(t);
              }
            });
          },
          go: M,
          goBack: function () {
            M(-1);
          },
          goForward: function () {
            M(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = P.setPrompt(e);
            return (
              j || (B(1), (j = !0)),
              function () {
                return j && ((j = !1), B(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = P.appendListener(e);
            return (
              B(1),
              function () {
                B(-1), t();
              }
            );
          },
        };
        return U;
      }
      var w = 'hashchange',
        S = {
          hashbang: {
            encodePath: function (e) {
              return '!' === e.charAt(0) ? e : '!/' + c(e);
            },
            decodePath: function (e) {
              return '!' === e.charAt(0) ? e.substr(1) : e;
            },
          },
          noslash: { encodePath: c, decodePath: l },
          slash: { encodePath: l, decodePath: l },
        };
      function E(e) {
        var t = e.indexOf('#');
        return -1 === t ? e : e.slice(0, t);
      }
      function C() {
        var e = window.location.href,
          t = e.indexOf('#');
        return -1 === t ? '' : e.substring(t + 1);
      }
      function _(e) {
        window.location.replace(E(window.location.href) + '#' + e);
      }
      function x(e) {
        void 0 === e && (e = {}), h || (0, s.Z)(!1);
        var t = window.history,
          n = (window.navigator.userAgent.indexOf('Firefox'), e),
          i = n.getUserConfirmation,
          a = void 0 === i ? g : i,
          o = n.hashType,
          c = void 0 === o ? 'slash' : o,
          b = e.basename ? u(l(e.basename)) : '',
          v = S[c],
          y = v.encodePath,
          k = v.decodePath;
        function x() {
          var e = k(C());
          return b && (e = d(e, b)), p(e);
        }
        var T = m();
        function P(e) {
          (0, r.Z)(j, e), (j.length = t.length), T.notifyListeners(j.location, j.action);
        }
        var R = !1,
          A = null;
        function L() {
          var e,
            t,
            n = C(),
            r = y(n);
          if (n !== r) _(r);
          else {
            var i = x(),
              o = j.location;
            if (!R && ((t = i), (e = o).pathname === t.pathname && e.search === t.search && e.hash === t.hash)) return;
            if (A === f(i)) return;
            (A = null),
              (function (e) {
                if (R) (R = !1), P();
                else {
                  var t = 'POP';
                  T.confirmTransitionTo(e, t, a, function (n) {
                    n
                      ? P({ action: t, location: e })
                      : (function (e) {
                          var t = j.location,
                            n = z.lastIndexOf(f(t));
                          -1 === n && (n = 0);
                          var r = z.lastIndexOf(f(e));
                          -1 === r && (r = 0);
                          var i = n - r;
                          i && ((R = !0), I(i));
                        })(e);
                  });
                }
              })(i);
          }
        }
        var D = C(),
          N = y(D);
        D !== N && _(N);
        var O = x(),
          z = [f(O)];
        function I(e) {
          t.go(e);
        }
        var M = 0;
        function F(e) {
          1 === (M += e) && 1 === e ? window.addEventListener(w, L) : 0 === M && window.removeEventListener(w, L);
        }
        var B = !1;
        var j = {
          length: t.length,
          action: 'POP',
          location: O,
          createHref: function (e) {
            var t = document.querySelector('base'),
              n = '';
            return t && t.getAttribute('href') && (n = E(window.location.href)), n + '#' + y(b + f(e));
          },
          push: function (e, t) {
            var n = 'PUSH',
              r = p(e, void 0, void 0, j.location);
            T.confirmTransitionTo(r, n, a, function (e) {
              if (e) {
                var t = f(r),
                  i = y(b + t);
                if (C() !== i) {
                  (A = t),
                    (function (e) {
                      window.location.hash = e;
                    })(i);
                  var a = z.lastIndexOf(f(j.location)),
                    o = z.slice(0, a + 1);
                  o.push(t), (z = o), P({ action: n, location: r });
                } else P();
              }
            });
          },
          replace: function (e, t) {
            var n = 'REPLACE',
              r = p(e, void 0, void 0, j.location);
            T.confirmTransitionTo(r, n, a, function (e) {
              if (e) {
                var t = f(r),
                  i = y(b + t);
                C() !== i && ((A = t), _(i));
                var a = z.indexOf(f(j.location));
                -1 !== a && (z[a] = t), P({ action: n, location: r });
              }
            });
          },
          go: I,
          goBack: function () {
            I(-1);
          },
          goForward: function () {
            I(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = T.setPrompt(e);
            return (
              B || (F(1), (B = !0)),
              function () {
                return B && ((B = !1), F(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = T.appendListener(e);
            return (
              F(1),
              function () {
                F(-1), t();
              }
            );
          },
        };
        return j;
      }
      function T(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function P(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.getUserConfirmation,
          i = t.initialEntries,
          a = void 0 === i ? ['/'] : i,
          o = t.initialIndex,
          s = void 0 === o ? 0 : o,
          l = t.keyLength,
          c = void 0 === l ? 6 : l,
          d = m();
        function u(e) {
          (0, r.Z)(k, e), (k.length = k.entries.length), d.notifyListeners(k.location, k.action);
        }
        function h() {
          return Math.random().toString(36).substr(2, c);
        }
        var g = T(s, 0, a.length - 1),
          b = a.map(function (e) {
            return p(e, void 0, 'string' == typeof e ? h() : e.key || h());
          }),
          v = f;
        function y(e) {
          var t = T(k.index + e, 0, k.entries.length - 1),
            r = k.entries[t];
          d.confirmTransitionTo(r, 'POP', n, function (e) {
            e ? u({ action: 'POP', location: r, index: t }) : u();
          });
        }
        var k = {
          length: b.length,
          action: 'POP',
          location: b[g],
          index: g,
          entries: b,
          createHref: v,
          push: function (e, t) {
            var r = 'PUSH',
              i = p(e, t, h(), k.location);
            d.confirmTransitionTo(i, r, n, function (e) {
              if (e) {
                var t = k.index + 1,
                  n = k.entries.slice(0);
                n.length > t ? n.splice(t, n.length - t, i) : n.push(i),
                  u({ action: r, location: i, index: t, entries: n });
              }
            });
          },
          replace: function (e, t) {
            var r = 'REPLACE',
              i = p(e, t, h(), k.location);
            d.confirmTransitionTo(i, r, n, function (e) {
              e && ((k.entries[k.index] = i), u({ action: r, location: i }));
            });
          },
          go: y,
          goBack: function () {
            y(-1);
          },
          goForward: function () {
            y(1);
          },
          canGo: function (e) {
            var t = k.index + e;
            return t >= 0 && t < k.entries.length;
          },
          block: function (e) {
            return void 0 === e && (e = !1), d.setPrompt(e);
          },
          listen: function (e) {
            return d.appendListener(e);
          },
        };
        return k;
      }
    },
    3463: (e, t, n) => {
      'use strict';
      var r = n(3887),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        a = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
        o = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
        s = {};
      function l(e) {
        return r.isMemo(e) ? o : s[e.$$typeof] || i;
      }
      (s[r.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }),
        (s[r.Memo] = o);
      var c = Object.defineProperty,
        d = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        m = Object.prototype;
      e.exports = function e(t, n, r) {
        if ('string' != typeof n) {
          if (m) {
            var i = p(n);
            i && i !== m && e(t, i, r);
          }
          var o = d(n);
          u && (o = o.concat(u(n)));
          for (var s = l(t), h = l(n), g = 0; g < o.length; ++g) {
            var b = o[g];
            if (!(a[b] || (r && r[b]) || (h && h[b]) || (s && s[b]))) {
              var v = f(n, b);
              try {
                c(t, b, v);
              } catch (y) {}
            }
          }
        }
        return t;
      };
    },
    3459: (e, t) => {
      'use strict';
      var n = 'function' == typeof Symbol && Symbol.for,
        r = n ? Symbol.for('react.element') : 60103,
        i = n ? Symbol.for('react.portal') : 60106,
        a = n ? Symbol.for('react.fragment') : 60107,
        o = n ? Symbol.for('react.strict_mode') : 60108,
        s = n ? Symbol.for('react.profiler') : 60114,
        l = n ? Symbol.for('react.provider') : 60109,
        c = n ? Symbol.for('react.context') : 60110,
        d = n ? Symbol.for('react.async_mode') : 60111,
        u = n ? Symbol.for('react.concurrent_mode') : 60111,
        f = n ? Symbol.for('react.forward_ref') : 60112,
        p = n ? Symbol.for('react.suspense') : 60113,
        m = n ? Symbol.for('react.suspense_list') : 60120,
        h = n ? Symbol.for('react.memo') : 60115,
        g = n ? Symbol.for('react.lazy') : 60116,
        b = n ? Symbol.for('react.block') : 60121,
        v = n ? Symbol.for('react.fundamental') : 60117,
        y = n ? Symbol.for('react.responder') : 60118,
        k = n ? Symbol.for('react.scope') : 60119;
      function w(e) {
        if ('object' == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case d:
                case u:
                case a:
                case s:
                case o:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case f:
                    case g:
                    case h:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case i:
              return t;
          }
        }
      }
      function S(e) {
        return w(e) === u;
      }
      (t.AsyncMode = d),
        (t.ConcurrentMode = u),
        (t.ContextConsumer = c),
        (t.ContextProvider = l),
        (t.Element = r),
        (t.ForwardRef = f),
        (t.Fragment = a),
        (t.Lazy = g),
        (t.Memo = h),
        (t.Portal = i),
        (t.Profiler = s),
        (t.StrictMode = o),
        (t.Suspense = p),
        (t.isAsyncMode = function (e) {
          return S(e) || w(e) === d;
        }),
        (t.isConcurrentMode = S),
        (t.isContextConsumer = function (e) {
          return w(e) === c;
        }),
        (t.isContextProvider = function (e) {
          return w(e) === l;
        }),
        (t.isElement = function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return w(e) === f;
        }),
        (t.isFragment = function (e) {
          return w(e) === a;
        }),
        (t.isLazy = function (e) {
          return w(e) === g;
        }),
        (t.isMemo = function (e) {
          return w(e) === h;
        }),
        (t.isPortal = function (e) {
          return w(e) === i;
        }),
        (t.isProfiler = function (e) {
          return w(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return w(e) === o;
        }),
        (t.isSuspense = function (e) {
          return w(e) === p;
        }),
        (t.isValidElementType = function (e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === a ||
            e === u ||
            e === s ||
            e === o ||
            e === p ||
            e === m ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === g ||
                e.$$typeof === h ||
                e.$$typeof === l ||
                e.$$typeof === c ||
                e.$$typeof === f ||
                e.$$typeof === v ||
                e.$$typeof === y ||
                e.$$typeof === k ||
                e.$$typeof === b))
          );
        }),
        (t.typeOf = w);
    },
    3887: (e, t, n) => {
      'use strict';
      e.exports = n(3459);
    },
    7677: e => {
      'use strict';
      e.exports = function (e, t, n, r, i, a, o, s) {
        if (!e) {
          var l;
          if (void 0 === t)
            l = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
            );
          else {
            var c = [n, r, i, a, o, s],
              d = 0;
            (l = new Error(
              t.replace(/%s/g, function () {
                return c[d++];
              }),
            )).name = 'Invariant Violation';
          }
          throw ((l.framesToPop = 1), l);
        }
      };
    },
    5749: (e, t, n) => {
      'use strict';
      n.r(t);
    },
    1964: (e, t, n) => {
      'use strict';
      n.r(t);
    },
    2521: function (e, t, n) {
      var r, i;
      (r = function () {
        var e,
          t,
          n = { version: '0.2.0' },
          r = (n.settings = {
            minimum: 0.08,
            easing: 'ease',
            positionUsing: '',
            speed: 200,
            trickle: !0,
            trickleRate: 0.02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: 'body',
            template:
              '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
          });
        function i(e, t, n) {
          return e < t ? t : e > n ? n : e;
        }
        function a(e) {
          return 100 * (-1 + e);
        }
        function o(e, t, n) {
          var i;
          return (
            ((i =
              'translate3d' === r.positionUsing
                ? { transform: 'translate3d(' + a(e) + '%,0,0)' }
                : 'translate' === r.positionUsing
                ? { transform: 'translate(' + a(e) + '%,0)' }
                : { 'margin-left': a(e) + '%' }).transition = 'all ' + t + 'ms ' + n),
            i
          );
        }
        (n.configure = function (e) {
          var t, n;
          for (t in e) void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (r[t] = n);
          return this;
        }),
          (n.status = null),
          (n.set = function (e) {
            var t = n.isStarted();
            (e = i(e, r.minimum, 1)), (n.status = 1 === e ? null : e);
            var a = n.render(!t),
              c = a.querySelector(r.barSelector),
              d = r.speed,
              u = r.easing;
            return (
              a.offsetWidth,
              s(function (t) {
                '' === r.positionUsing && (r.positionUsing = n.getPositioningCSS()),
                  l(c, o(e, d, u)),
                  1 === e
                    ? (l(a, { transition: 'none', opacity: 1 }),
                      a.offsetWidth,
                      setTimeout(function () {
                        l(a, { transition: 'all ' + d + 'ms linear', opacity: 0 }),
                          setTimeout(function () {
                            n.remove(), t();
                          }, d);
                      }, d))
                    : setTimeout(t, d);
              }),
              this
            );
          }),
          (n.isStarted = function () {
            return 'number' == typeof n.status;
          }),
          (n.start = function () {
            n.status || n.set(0);
            var e = function () {
              setTimeout(function () {
                n.status && (n.trickle(), e());
              }, r.trickleSpeed);
            };
            return r.trickle && e(), this;
          }),
          (n.done = function (e) {
            return e || n.status ? n.inc(0.3 + 0.5 * Math.random()).set(1) : this;
          }),
          (n.inc = function (e) {
            var t = n.status;
            return t
              ? ('number' != typeof e && (e = (1 - t) * i(Math.random() * t, 0.1, 0.95)),
                (t = i(t + e, 0, 0.994)),
                n.set(t))
              : n.start();
          }),
          (n.trickle = function () {
            return n.inc(Math.random() * r.trickleRate);
          }),
          (e = 0),
          (t = 0),
          (n.promise = function (r) {
            return r && 'resolved' !== r.state()
              ? (0 === t && n.start(),
                e++,
                t++,
                r.always(function () {
                  0 == --t ? ((e = 0), n.done()) : n.set((e - t) / e);
                }),
                this)
              : this;
          }),
          (n.render = function (e) {
            if (n.isRendered()) return document.getElementById('nprogress');
            d(document.documentElement, 'nprogress-busy');
            var t = document.createElement('div');
            (t.id = 'nprogress'), (t.innerHTML = r.template);
            var i,
              o = t.querySelector(r.barSelector),
              s = e ? '-100' : a(n.status || 0),
              c = document.querySelector(r.parent);
            return (
              l(o, { transition: 'all 0 linear', transform: 'translate3d(' + s + '%,0,0)' }),
              r.showSpinner || ((i = t.querySelector(r.spinnerSelector)) && p(i)),
              c != document.body && d(c, 'nprogress-custom-parent'),
              c.appendChild(t),
              t
            );
          }),
          (n.remove = function () {
            u(document.documentElement, 'nprogress-busy'),
              u(document.querySelector(r.parent), 'nprogress-custom-parent');
            var e = document.getElementById('nprogress');
            e && p(e);
          }),
          (n.isRendered = function () {
            return !!document.getElementById('nprogress');
          }),
          (n.getPositioningCSS = function () {
            var e = document.body.style,
              t =
                'WebkitTransform' in e
                  ? 'Webkit'
                  : 'MozTransform' in e
                  ? 'Moz'
                  : 'msTransform' in e
                  ? 'ms'
                  : 'OTransform' in e
                  ? 'O'
                  : '';
            return t + 'Perspective' in e ? 'translate3d' : t + 'Transform' in e ? 'translate' : 'margin';
          });
        var s = (function () {
            var e = [];
            function t() {
              var n = e.shift();
              n && n(t);
            }
            return function (n) {
              e.push(n), 1 == e.length && t();
            };
          })(),
          l = (function () {
            var e = ['Webkit', 'O', 'Moz', 'ms'],
              t = {};
            function n(e) {
              return e.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (e, t) {
                return t.toUpperCase();
              });
            }
            function r(t) {
              var n = document.body.style;
              if (t in n) return t;
              for (var r, i = e.length, a = t.charAt(0).toUpperCase() + t.slice(1); i--; )
                if ((r = e[i] + a) in n) return r;
              return t;
            }
            function i(e) {
              return (e = n(e)), t[e] || (t[e] = r(e));
            }
            function a(e, t, n) {
              (t = i(t)), (e.style[t] = n);
            }
            return function (e, t) {
              var n,
                r,
                i = arguments;
              if (2 == i.length) for (n in t) void 0 !== (r = t[n]) && t.hasOwnProperty(n) && a(e, n, r);
              else a(e, i[1], i[2]);
            };
          })();
        function c(e, t) {
          return ('string' == typeof e ? e : f(e)).indexOf(' ' + t + ' ') >= 0;
        }
        function d(e, t) {
          var n = f(e),
            r = n + t;
          c(n, t) || (e.className = r.substring(1));
        }
        function u(e, t) {
          var n,
            r = f(e);
          c(e, t) && ((n = r.replace(' ' + t + ' ', ' ')), (e.className = n.substring(1, n.length - 1)));
        }
        function f(e) {
          return (' ' + (e.className || '') + ' ').replace(/\s+/gi, ' ');
        }
        function p(e) {
          e && e.parentNode && e.parentNode.removeChild(e);
        }
        return n;
      }),
        void 0 === (i = 'function' == typeof r ? r.call(t, n, t, e) : r) || (e.exports = i);
    },
    7320: e => {
      'use strict';
      var t = Object.getOwnPropertySymbols,
        n = Object.prototype.hasOwnProperty,
        r = Object.prototype.propertyIsEnumerable;
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String('abc');
          if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
          for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join('')
          )
            return !1;
          var r = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function (e) {
              r[e] = e;
            }),
            'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
          );
        } catch (i) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, i) {
            for (
              var a,
                o,
                s = (function (e) {
                  if (null == e) throw new TypeError('Object.assign cannot be called with null or undefined');
                  return Object(e);
                })(e),
                l = 1;
              l < arguments.length;
              l++
            ) {
              for (var c in (a = Object(arguments[l]))) n.call(a, c) && (s[c] = a[c]);
              if (t) {
                o = t(a);
                for (var d = 0; d < o.length; d++) r.call(a, o[d]) && (s[o[d]] = a[o[d]]);
              }
            }
            return s;
          };
    },
    99: (e, t, n) => {
      var r = n(243);
      (e.exports = p),
        (e.exports.parse = a),
        (e.exports.compile = function (e, t) {
          return s(a(e, t), t);
        }),
        (e.exports.tokensToFunction = s),
        (e.exports.tokensToRegExp = f);
      var i = new RegExp(
        [
          '(\\\\.)',
          '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
        ].join('|'),
        'g',
      );
      function a(e, t) {
        for (var n, r = [], a = 0, o = 0, s = '', d = (t && t.delimiter) || '/'; null != (n = i.exec(e)); ) {
          var u = n[0],
            f = n[1],
            p = n.index;
          if (((s += e.slice(o, p)), (o = p + u.length), f)) s += f[1];
          else {
            var m = e[o],
              h = n[2],
              g = n[3],
              b = n[4],
              v = n[5],
              y = n[6],
              k = n[7];
            s && (r.push(s), (s = ''));
            var w = null != h && null != m && m !== h,
              S = '+' === y || '*' === y,
              E = '?' === y || '*' === y,
              C = n[2] || d,
              _ = b || v;
            r.push({
              name: g || a++,
              prefix: h || '',
              delimiter: C,
              optional: E,
              repeat: S,
              partial: w,
              asterisk: !!k,
              pattern: _ ? c(_) : k ? '.*' : '[^' + l(C) + ']+?',
            });
          }
        }
        return o < e.length && (s += e.substr(o)), s && r.push(s), r;
      }
      function o(e) {
        return encodeURI(e).replace(/[\/?#]/g, function (e) {
          return '%' + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function s(e, t) {
        for (var n = new Array(e.length), i = 0; i < e.length; i++)
          'object' == typeof e[i] && (n[i] = new RegExp('^(?:' + e[i].pattern + ')$', u(t)));
        return function (t, i) {
          for (var a = '', s = t || {}, l = (i || {}).pretty ? o : encodeURIComponent, c = 0; c < e.length; c++) {
            var d = e[c];
            if ('string' != typeof d) {
              var u,
                f = s[d.name];
              if (null == f) {
                if (d.optional) {
                  d.partial && (a += d.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + d.name + '" to be defined');
              }
              if (r(f)) {
                if (!d.repeat)
                  throw new TypeError(
                    'Expected "' + d.name + '" to not repeat, but received `' + JSON.stringify(f) + '`',
                  );
                if (0 === f.length) {
                  if (d.optional) continue;
                  throw new TypeError('Expected "' + d.name + '" to not be empty');
                }
                for (var p = 0; p < f.length; p++) {
                  if (((u = l(f[p])), !n[c].test(u)))
                    throw new TypeError(
                      'Expected all "' +
                        d.name +
                        '" to match "' +
                        d.pattern +
                        '", but received `' +
                        JSON.stringify(u) +
                        '`',
                    );
                  a += (0 === p ? d.prefix : d.delimiter) + u;
                }
              } else {
                if (
                  ((u = d.asterisk
                    ? encodeURI(f).replace(/[?#]/g, function (e) {
                        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : l(f)),
                  !n[c].test(u))
                )
                  throw new TypeError(
                    'Expected "' + d.name + '" to match "' + d.pattern + '", but received "' + u + '"',
                  );
                a += d.prefix + u;
              }
            } else a += d;
          }
          return a;
        };
      }
      function l(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
      }
      function c(e) {
        return e.replace(/([=!:$\/()])/g, '\\$1');
      }
      function d(e, t) {
        return (e.keys = t), e;
      }
      function u(e) {
        return e && e.sensitive ? '' : 'i';
      }
      function f(e, t, n) {
        r(t) || ((n = t || n), (t = []));
        for (var i = (n = n || {}).strict, a = !1 !== n.end, o = '', s = 0; s < e.length; s++) {
          var c = e[s];
          if ('string' == typeof c) o += l(c);
          else {
            var f = l(c.prefix),
              p = '(?:' + c.pattern + ')';
            t.push(c),
              c.repeat && (p += '(?:' + f + p + ')*'),
              (o += p =
                c.optional ? (c.partial ? f + '(' + p + ')?' : '(?:' + f + '(' + p + '))?') : f + '(' + p + ')');
          }
        }
        var m = l(n.delimiter || '/'),
          h = o.slice(-m.length) === m;
        return (
          i || (o = (h ? o.slice(0, -m.length) : o) + '(?:' + m + '(?=$))?'),
          (o += a ? '$' : i && h ? '' : '(?=' + m + '|$)'),
          d(new RegExp('^' + o, u(n)), t)
        );
      }
      function p(e, t, n) {
        return (
          r(t) || ((n = t || n), (t = [])),
          (n = n || {}),
          e instanceof RegExp
            ? (function (e, t) {
                var n = e.source.match(/\((?!\?)/g);
                if (n)
                  for (var r = 0; r < n.length; r++)
                    t.push({
                      name: r,
                      prefix: null,
                      delimiter: null,
                      optional: !1,
                      repeat: !1,
                      partial: !1,
                      asterisk: !1,
                      pattern: null,
                    });
                return d(e, t);
              })(e, t)
            : r(e)
            ? (function (e, t, n) {
                for (var r = [], i = 0; i < e.length; i++) r.push(p(e[i], t, n).source);
                return d(new RegExp('(?:' + r.join('|') + ')', u(n)), t);
              })(e, t, n)
            : (function (e, t, n) {
                return f(a(e, n), t, n);
              })(e, t, n)
        );
      }
    },
    243: e => {
      e.exports =
        Array.isArray ||
        function (e) {
          return '[object Array]' == Object.prototype.toString.call(e);
        };
    },
    7175: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => a });
      var r = (function () {
          var e = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            t = 0,
            n = {},
            r = {
              util: {
                encode: function e(t) {
                  return t instanceof i
                    ? new i(t.type, e(t.content), t.alias)
                    : Array.isArray(t)
                    ? t.map(e)
                    : t
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/\u00a0/g, ' ');
                },
                type: function (e) {
                  return Object.prototype.toString.call(e).slice(8, -1);
                },
                objId: function (e) {
                  return e.__id || Object.defineProperty(e, '__id', { value: ++t }), e.__id;
                },
                clone: function e(t, n) {
                  var i, a;
                  switch (((n = n || {}), r.util.type(t))) {
                    case 'Object':
                      if (((a = r.util.objId(t)), n[a])) return n[a];
                      for (var o in ((i = {}), (n[a] = i), t)) t.hasOwnProperty(o) && (i[o] = e(t[o], n));
                      return i;
                    case 'Array':
                      return (
                        (a = r.util.objId(t)),
                        n[a]
                          ? n[a]
                          : ((i = []),
                            (n[a] = i),
                            t.forEach(function (t, r) {
                              i[r] = e(t, n);
                            }),
                            i)
                      );
                    default:
                      return t;
                  }
                },
                getLanguage: function (t) {
                  for (; t; ) {
                    var n = e.exec(t.className);
                    if (n) return n[1].toLowerCase();
                    t = t.parentElement;
                  }
                  return 'none';
                },
                setLanguage: function (t, n) {
                  (t.className = t.className.replace(RegExp(e, 'gi'), '')), t.classList.add('language-' + n);
                },
                isActive: function (e, t, n) {
                  for (var r = 'no-' + t; e; ) {
                    var i = e.classList;
                    if (i.contains(t)) return !0;
                    if (i.contains(r)) return !1;
                    e = e.parentElement;
                  }
                  return !!n;
                },
              },
              languages: {
                plain: n,
                plaintext: n,
                text: n,
                txt: n,
                extend: function (e, t) {
                  var n = r.util.clone(r.languages[e]);
                  for (var i in t) n[i] = t[i];
                  return n;
                },
                insertBefore: function (e, t, n, i) {
                  var a = (i = i || r.languages)[e],
                    o = {};
                  for (var s in a)
                    if (a.hasOwnProperty(s)) {
                      if (s == t) for (var l in n) n.hasOwnProperty(l) && (o[l] = n[l]);
                      n.hasOwnProperty(s) || (o[s] = a[s]);
                    }
                  var c = i[e];
                  return (
                    (i[e] = o),
                    r.languages.DFS(r.languages, function (t, n) {
                      n === c && t != e && (this[t] = o);
                    }),
                    o
                  );
                },
                DFS: function e(t, n, i, a) {
                  a = a || {};
                  var o = r.util.objId;
                  for (var s in t)
                    if (t.hasOwnProperty(s)) {
                      n.call(t, s, t[s], i || s);
                      var l = t[s],
                        c = r.util.type(l);
                      'Object' !== c || a[o(l)]
                        ? 'Array' !== c || a[o(l)] || ((a[o(l)] = !0), e(l, n, s, a))
                        : ((a[o(l)] = !0), e(l, n, null, a));
                    }
                },
              },
              plugins: {},
              highlight: function (e, t, n) {
                var a = { code: e, grammar: t, language: n };
                return (
                  r.hooks.run('before-tokenize', a),
                  (a.tokens = r.tokenize(a.code, a.grammar)),
                  r.hooks.run('after-tokenize', a),
                  i.stringify(r.util.encode(a.tokens), a.language)
                );
              },
              tokenize: function (e, t) {
                var n = t.rest;
                if (n) {
                  for (var r in n) t[r] = n[r];
                  delete t.rest;
                }
                var i = new s();
                return (
                  l(i, i.head, e),
                  o(e, i, t, i.head, 0),
                  (function (e) {
                    var t = [],
                      n = e.head.next;
                    for (; n !== e.tail; ) t.push(n.value), (n = n.next);
                    return t;
                  })(i)
                );
              },
              hooks: {
                all: {},
                add: function (e, t) {
                  var n = r.hooks.all;
                  (n[e] = n[e] || []), n[e].push(t);
                },
                run: function (e, t) {
                  var n = r.hooks.all[e];
                  if (n && n.length) for (var i, a = 0; (i = n[a++]); ) i(t);
                },
              },
              Token: i,
            };
          function i(e, t, n, r) {
            (this.type = e), (this.content = t), (this.alias = n), (this.length = 0 | (r || '').length);
          }
          function a(e, t, n, r) {
            e.lastIndex = t;
            var i = e.exec(n);
            if (i && r && i[1]) {
              var a = i[1].length;
              (i.index += a), (i[0] = i[0].slice(a));
            }
            return i;
          }
          function o(e, t, n, s, d, u) {
            for (var f in n)
              if (n.hasOwnProperty(f) && n[f]) {
                var p = n[f];
                p = Array.isArray(p) ? p : [p];
                for (var m = 0; m < p.length; ++m) {
                  if (u && u.cause == f + ',' + m) return;
                  var h = p[m],
                    g = h.inside,
                    b = !!h.lookbehind,
                    v = !!h.greedy,
                    y = h.alias;
                  if (v && !h.pattern.global) {
                    var k = h.pattern.toString().match(/[imsuy]*$/)[0];
                    h.pattern = RegExp(h.pattern.source, k + 'g');
                  }
                  for (
                    var w = h.pattern || h, S = s.next, E = d;
                    S !== t.tail && !(u && E >= u.reach);
                    E += S.value.length, S = S.next
                  ) {
                    var C = S.value;
                    if (t.length > e.length) return;
                    if (!(C instanceof i)) {
                      var _,
                        x = 1;
                      if (v) {
                        if (!(_ = a(w, E, e, b)) || _.index >= e.length) break;
                        var T = _.index,
                          P = _.index + _[0].length,
                          R = E;
                        for (R += S.value.length; T >= R; ) R += (S = S.next).value.length;
                        if (((E = R -= S.value.length), S.value instanceof i)) continue;
                        for (var A = S; A !== t.tail && (R < P || 'string' == typeof A.value); A = A.next)
                          x++, (R += A.value.length);
                        x--, (C = e.slice(E, R)), (_.index -= E);
                      } else if (!(_ = a(w, 0, C, b))) continue;
                      T = _.index;
                      var L = _[0],
                        D = C.slice(0, T),
                        N = C.slice(T + L.length),
                        O = E + C.length;
                      u && O > u.reach && (u.reach = O);
                      var z = S.prev;
                      if (
                        (D && ((z = l(t, z, D)), (E += D.length)),
                        c(t, z, x),
                        (S = l(t, z, new i(f, g ? r.tokenize(L, g) : L, y, L))),
                        N && l(t, S, N),
                        x > 1)
                      ) {
                        var I = { cause: f + ',' + m, reach: O };
                        o(e, t, n, S.prev, E, I), u && I.reach > u.reach && (u.reach = I.reach);
                      }
                    }
                  }
                }
              }
          }
          function s() {
            var e = { value: null, prev: null, next: null },
              t = { value: null, prev: e, next: null };
            (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
          }
          function l(e, t, n) {
            var r = t.next,
              i = { value: n, prev: t, next: r };
            return (t.next = i), (r.prev = i), e.length++, i;
          }
          function c(e, t, n) {
            for (var r = t.next, i = 0; i < n && r !== e.tail; i++) r = r.next;
            (t.next = r), (r.prev = t), (e.length -= i);
          }
          return (
            (i.stringify = function e(t, n) {
              if ('string' == typeof t) return t;
              if (Array.isArray(t)) {
                var i = '';
                return (
                  t.forEach(function (t) {
                    i += e(t, n);
                  }),
                  i
                );
              }
              var a = {
                  type: t.type,
                  content: e(t.content, n),
                  tag: 'span',
                  classes: ['token', t.type],
                  attributes: {},
                  language: n,
                },
                o = t.alias;
              o && (Array.isArray(o) ? Array.prototype.push.apply(a.classes, o) : a.classes.push(o)),
                r.hooks.run('wrap', a);
              var s = '';
              for (var l in a.attributes) s += ' ' + l + '="' + (a.attributes[l] || '').replace(/"/g, '&quot;') + '"';
              return '<' + a.tag + ' class="' + a.classes.join(' ') + '"' + s + '>' + a.content + '</' + a.tag + '>';
            }),
            r
          );
        })(),
        i = r;
      (r.default = r),
        (i.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              'internal-subset': { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              'doctype-tag': /^DOCTYPE/i,
              name: /[^\s<>'"]+/,
            },
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } },
              'special-attr': [],
              'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: { punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/] },
              },
              punctuation: /\/?>/,
              'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
            },
          },
          entity: [{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' }, /&#x?[\da-f]{1,8};/i],
        }),
        (i.languages.markup.tag.inside['attr-value'].inside.entity = i.languages.markup.entity),
        (i.languages.markup.doctype.inside['internal-subset'].inside = i.languages.markup),
        i.hooks.add('wrap', function (e) {
          'entity' === e.type && (e.attributes.title = e.content.replace(/&amp;/, '&'));
        }),
        Object.defineProperty(i.languages.markup.tag, 'addInlined', {
          value: function (e, t) {
            var n = {};
            (n['language-' + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: i.languages[t],
            }),
              (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var r = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n } };
            r['language-' + t] = { pattern: /[\s\S]+/, inside: i.languages[t] };
            var a = {};
            (a[e] = {
              pattern: RegExp(
                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function () {
                    return e;
                  },
                ),
                'i',
              ),
              lookbehind: !0,
              greedy: !0,
              inside: r,
            }),
              i.languages.insertBefore('markup', 'cdata', a);
          },
        }),
        Object.defineProperty(i.languages.markup.tag, 'addAttribute', {
          value: function (e, t) {
            i.languages.markup.tag.inside['special-attr'].push({
              pattern: RegExp(
                /(^|["'\s])/.source + '(?:' + e + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                'i',
              ),
              lookbehind: !0,
              inside: {
                'attr-name': /^[^\s=]+/,
                'attr-value': {
                  pattern: /=[\s\S]+/,
                  inside: {
                    value: {
                      pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                      lookbehind: !0,
                      alias: [t, 'language-' + t],
                      inside: i.languages[t],
                    },
                    punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
                  },
                },
              },
            });
          },
        }),
        (i.languages.html = i.languages.markup),
        (i.languages.mathml = i.languages.markup),
        (i.languages.svg = i.languages.markup),
        (i.languages.xml = i.languages.extend('markup', {})),
        (i.languages.ssml = i.languages.xml),
        (i.languages.atom = i.languages.xml),
        (i.languages.rss = i.languages.xml),
        (function (e) {
          var t =
              '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
            n = { pattern: /(^(["']?)\w+\2)[ \t]+\S.*/, lookbehind: !0, alias: 'punctuation', inside: null },
            r = {
              bash: n,
              environment: { pattern: RegExp('\\$' + t), alias: 'constant' },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/],
                    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                { pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, greedy: !0, inside: { variable: /^\$\(|^`|\)$|`$/ } },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: { pattern: RegExp('(\\{)' + t), lookbehind: !0, alias: 'constant' },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
            };
          (e.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            'function-name': [
              { pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/, lookbehind: !0, alias: 'function' },
              { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: 'function' },
            ],
            'for-or-select': { pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: 'variable', lookbehind: !0 },
            'assign-left': {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: { pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + t), lookbehind: !0, alias: 'constant' },
              },
              alias: 'variable',
              lookbehind: !0,
            },
            string: [
              { pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/, lookbehind: !0, greedy: !0, inside: r },
              {
                pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: n },
              },
              {
                pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
              { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
              { pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: !0, inside: { entity: r.entity } },
            ],
            environment: { pattern: RegExp('\\$?' + t), alias: 'constant' },
            variable: r.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: 'class-name',
            },
            boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/, lookbehind: !0 },
            'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
            operator: {
              pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
              inside: { 'file-descriptor': { pattern: /^\d/, alias: 'important' } },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 },
          }),
            (n.inside = e.languages.bash);
          for (
            var i = [
                'comment',
                'function-name',
                'for-or-select',
                'assign-left',
                'string',
                'environment',
                'function',
                'keyword',
                'builtin',
                'boolean',
                'file-descriptor',
                'operator',
                'punctuation',
                'number',
              ],
              a = r.variable[1].inside,
              o = 0;
            o < i.length;
            o++
          )
            a[i[o]] = e.languages.bash[i[o]];
          e.languages.shell = e.languages.bash;
        })(i),
        (i.languages.clike = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          'class-name': {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (i.languages.c = i.languages.extend('clike', {
          comment: { pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
          'class-name': {
            pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
            lookbehind: !0,
          },
          keyword:
            /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
          function: /\b[a-z_]\w*(?=\s*\()/i,
          number:
            /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
        })),
        i.languages.insertBefore('c', 'string', {
          char: { pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: !0 },
        }),
        i.languages.insertBefore('c', 'string', {
          macro: {
            pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            greedy: !0,
            alias: 'property',
            inside: {
              string: [{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 }, i.languages.c.string],
              char: i.languages.c.char,
              comment: i.languages.c.comment,
              'macro-name': [
                { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
                { pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: !0, alias: 'function' },
              ],
              directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: 'keyword' },
              'directive-hash': /^#/,
              punctuation: /##|\\(?=[\r\n])/,
              expression: { pattern: /\S[\s\S]*/, inside: i.languages.c },
            },
          },
        }),
        i.languages.insertBefore('c', 'function', {
          constant:
            /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
        }),
        delete i.languages.c.boolean,
        (function (e) {
          var t =
              /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
            n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () {
              return t.source;
            });
          (e.languages.cpp = e.languages.extend('c', {
            'class-name': [
              {
                pattern: RegExp(
                  /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
                    /<keyword>/g,
                    function () {
                      return t.source;
                    },
                  ),
                ),
                lookbehind: !0,
              },
              /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
              /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
              /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
            ],
            keyword: t,
            number: {
              pattern:
                /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
              greedy: !0,
            },
            operator:
              />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
            boolean: /\b(?:false|true)\b/,
          })),
            e.languages.insertBefore('cpp', 'string', {
              module: {
                pattern: RegExp(
                  /(\b(?:import|module)\s+)/.source +
                    '(?:' +
                    /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source +
                    '|' +
                    /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function () {
                      return n;
                    }) +
                    ')',
                ),
                lookbehind: !0,
                greedy: !0,
                inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ },
              },
              'raw-string': { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: 'string', greedy: !0 },
            }),
            e.languages.insertBefore('cpp', 'keyword', {
              'generic-function': {
                pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                inside: {
                  function: /^\w+/,
                  generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: e.languages.cpp },
                },
              },
            }),
            e.languages.insertBefore('cpp', 'operator', { 'double-colon': { pattern: /::/, alias: 'punctuation' } }),
            e.languages.insertBefore('cpp', 'class-name', {
              'base-clause': {
                pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                lookbehind: !0,
                greedy: !0,
                inside: e.languages.extend('cpp', {}),
              },
            }),
            e.languages.insertBefore(
              'inside',
              'double-colon',
              { 'class-name': /\b[a-z_]\w*\b(?!\s*::)/i },
              e.languages.cpp['base-clause'],
            );
        })(i),
        (function (e) {
          var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                'selector-function-argument': {
                  pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: 'selector',
                },
                keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 },
              },
            },
            url: {
              pattern: RegExp('\\burl\\((?:' + t.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp('^' + t.source + '$'), alias: 'url' },
              },
            },
            selector: {
              pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + t.source + ')*(?=\\s*\\{)'),
              lookbehind: !0,
            },
            string: { pattern: t, greedy: !0 },
            property: {
              pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0,
            },
            important: /!important\b/i,
            function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
            punctuation: /[(){};:,]/,
          }),
            (e.languages.css.atrule.inside.rest = e.languages.css);
          var n = e.languages.markup;
          n && (n.tag.addInlined('style', 'css'), n.tag.addAttribute('style', 'css'));
        })(i),
        (function (e) {
          var t,
            n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css.selector = {
            pattern: e.languages.css.selector.pattern,
            lookbehind: !0,
            inside: (t = {
              'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
              'pseudo-class': /:[-\w]+/,
              class: /\.[-\w]+/,
              id: /#[-\w]+/,
              attribute: {
                pattern: RegExp('\\[(?:[^[\\]"\']|' + n.source + ')*\\]'),
                greedy: !0,
                inside: {
                  punctuation: /^\[|\]$/,
                  'case-sensitivity': { pattern: /(\s)[si]$/i, lookbehind: !0, alias: 'keyword' },
                  namespace: {
                    pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                    lookbehind: !0,
                    inside: { punctuation: /\|$/ },
                  },
                  'attr-name': { pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/, lookbehind: !0 },
                  'attr-value': [n, { pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/, lookbehind: !0 }],
                  operator: /[|~*^$]?=/,
                },
              },
              'n-th': [
                {
                  pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                  lookbehind: !0,
                  inside: { number: /[\dn]+/, operator: /[+-]/ },
                },
                { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
              ],
              combinator: />|\+|~|\|\|/,
              punctuation: /[(),]/,
            }),
          }),
            (e.languages.css.atrule.inside['selector-function-argument'].inside = t),
            e.languages.insertBefore('css', 'property', {
              variable: {
                pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                lookbehind: !0,
              },
            });
          var r = { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 },
            i = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 };
          e.languages.insertBefore('css', 'function', {
            operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
            hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: 'color' },
            color: [
              {
                pattern:
                  /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                lookbehind: !0,
              },
              {
                pattern:
                  /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: { unit: r, number: i, function: /[\w-]+(?=\()/, punctuation: /[(),]/ },
              },
            ],
            entity: /\\[\da-f]{1,8}/i,
            unit: r,
            number: i,
          });
        })(i),
        (i.languages.javascript = i.languages.extend('clike', {
          'class-name': [
            i.languages.clike['class-name'],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                '(?:' +
                /NaN|Infinity/.source +
                '|' +
                /0[bB][01]+(?:_[01]+)*n?/.source +
                '|' +
                /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                '|' +
                /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                '|' +
                /\d+(?:_\d+)*n/.source +
                '|' +
                /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source +
                ')' +
                /(?![\w$])/.source,
            ),
            lookbehind: !0,
          },
          operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
        (i.languages.javascript['class-name'][0].pattern =
          /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
        i.languages.insertBefore('javascript', 'keyword', {
          regex: {
            pattern:
              /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              'regex-source': {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: 'language-regex',
                inside: i.languages.regex,
              },
              'regex-delimiter': /^\/|\/$/,
              'regex-flags': /^[a-z]+$/,
            },
          },
          'function-variable': {
            pattern:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: 'function',
          },
          parameter: [
            {
              pattern:
                /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: i.languages.javascript,
            },
            {
              pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              lookbehind: !0,
              inside: i.languages.javascript,
            },
            {
              pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: i.languages.javascript,
            },
            {
              pattern:
                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: i.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        i.languages.insertBefore('javascript', 'string', {
          hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
          'template-string': {
            pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
              'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
              interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                  'interpolation-punctuation': { pattern: /^\$\{|\}$/, alias: 'punctuation' },
                  rest: i.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
          'string-property': {
            pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: 'property',
          },
        }),
        i.languages.insertBefore('javascript', 'operator', {
          'literal-property': {
            pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: 'property',
          },
        }),
        i.languages.markup &&
          (i.languages.markup.tag.addInlined('script', 'javascript'),
          i.languages.markup.tag.addAttribute(
            /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
              .source,
            'javascript',
          )),
        (i.languages.js = i.languages.javascript),
        (function (e) {
          var t = /#(?!\{).+/,
            n = { pattern: /#\{[^}]+\}/, alias: 'variable' };
          (e.languages.coffeescript = e.languages.extend('javascript', {
            comment: t,
            string: [
              { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
              { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, inside: { interpolation: n } },
            ],
            keyword:
              /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            'class-member': { pattern: /@(?!\d)\w+/, alias: 'variable' },
          })),
            e.languages.insertBefore('coffeescript', 'comment', {
              'multiline-comment': { pattern: /###[\s\S]+?###/, alias: 'comment' },
              'block-regex': {
                pattern: /\/{3}[\s\S]*?\/{3}/,
                alias: 'regex',
                inside: { comment: t, interpolation: n },
              },
            }),
            e.languages.insertBefore('coffeescript', 'string', {
              'inline-javascript': {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: {
                  delimiter: { pattern: /^`|`$/, alias: 'punctuation' },
                  script: { pattern: /[\s\S]+/, alias: 'language-javascript', inside: e.languages.javascript },
                },
              },
              'multiline-string': [
                { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: 'string' },
                { pattern: /"""[\s\S]*?"""/, greedy: !0, alias: 'string', inside: { interpolation: n } },
              ],
            }),
            e.languages.insertBefore('coffeescript', 'keyword', { property: /(?!\d)\w+(?=\s*:(?!:))/ }),
            delete e.languages.coffeescript['template-string'],
            (e.languages.coffee = e.languages.coffeescript);
        })(i),
        (function (e) {
          var t = /[*&][^\s[\]{},]+/,
            n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            r = '(?:' + n.source + '(?:[ \t]+' + t.source + ')?|' + t.source + '(?:[ \t]+' + n.source + ')?)',
            i =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
                },
              ),
            a = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function o(e, t) {
            t = (t || '').replace(/m/g, '') + 'm';
            var n = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
              .replace(/<<prop>>/g, function () {
                return r;
              })
              .replace(/<<value>>/g, function () {
                return e;
              });
            return RegExp(n, t);
          }
          (e.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return r;
                  },
                ),
              ),
              lookbehind: !0,
              alias: 'string',
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return r;
                  })
                  .replace(/<<key>>/g, function () {
                    return '(?:' + i + '|' + a + ')';
                  }),
              ),
              lookbehind: !0,
              greedy: !0,
              alias: 'atrule',
            },
            directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: 'important' },
            datetime: {
              pattern: o(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source,
              ),
              lookbehind: !0,
              alias: 'number',
            },
            boolean: { pattern: o(/false|true/.source, 'i'), lookbehind: !0, alias: 'important' },
            null: { pattern: o(/null|~/.source, 'i'), lookbehind: !0, alias: 'important' },
            string: { pattern: o(a), lookbehind: !0, greedy: !0 },
            number: {
              pattern: o(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, 'i'),
              lookbehind: !0,
            },
            tag: n,
            important: t,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (e.languages.yml = e.languages.yaml);
        })(i),
        (function (e) {
          var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
          function n(e) {
            return (
              (e = e.replace(/<inner>/g, function () {
                return t;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + e + ')')
            );
          }
          var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
            i = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
              return r;
            }),
            a = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
          (e.languages.markdown = e.languages.extend('markup', {})),
            e.languages.insertBefore('markdown', 'prolog', {
              'front-matter-block': {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  'front-matter': {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ['yaml', 'language-yaml'],
                    inside: e.languages.yaml,
                  },
                },
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
              table: {
                pattern: RegExp('^' + i + a + '(?:' + i + ')*', 'm'),
                inside: {
                  'table-data-rows': {
                    pattern: RegExp('^(' + i + a + ')(?:' + i + ')*$'),
                    lookbehind: !0,
                    inside: { 'table-data': { pattern: RegExp(r), inside: e.languages.markdown }, punctuation: /\|/ },
                  },
                  'table-line': {
                    pattern: RegExp('^(' + i + ')' + a + '$'),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  'table-header-row': {
                    pattern: RegExp('^' + i + '$'),
                    inside: {
                      'table-header': { pattern: RegExp(r), alias: 'important', inside: e.languages.markdown },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: 'keyword',
                },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    'code-block': { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: !0 },
                    'code-language': { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: 'important',
                  inside: { punctuation: /==+$|--+$/ },
                },
                { pattern: /(^\s*)#.+/m, lookbehind: !0, alias: 'important', inside: { punctuation: /^#+|#+$/ } },
              ],
              hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: 'punctuation' },
              list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: 'punctuation' },
              'url-reference': {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: 'url',
              },
              bold: {
                pattern: n(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: n(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} }, punctuation: /[*_]/ },
              },
              strike: {
                pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} },
                  punctuation: /~~?/,
                },
              },
              'code-snippet': {
                pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                lookbehind: !0,
                greedy: !0,
                alias: ['code', 'keyword'],
              },
              url: {
                pattern: n(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} },
                  variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 },
                },
              },
            }),
            ['url', 'bold', 'italic', 'strike'].forEach(function (t) {
              ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (n) {
                t !== n && (e.languages.markdown[t].inside.content.inside[n] = e.languages.markdown[n]);
              });
            }),
            e.hooks.add('after-tokenize', function (e) {
              ('markdown' !== e.language && 'md' !== e.language) ||
                (function e(t) {
                  if (t && 'string' != typeof t)
                    for (var n = 0, r = t.length; n < r; n++) {
                      var i = t[n];
                      if ('code' === i.type) {
                        var a = i.content[1],
                          o = i.content[3];
                        if (
                          a &&
                          o &&
                          'code-language' === a.type &&
                          'code-block' === o.type &&
                          'string' == typeof a.content
                        ) {
                          var s = a.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp'),
                            l = 'language-' + (s = (/[a-z][\w-]*/i.exec(s) || [''])[0].toLowerCase());
                          o.alias
                            ? 'string' == typeof o.alias
                              ? (o.alias = [o.alias, l])
                              : o.alias.push(l)
                            : (o.alias = [l]);
                        }
                      } else e(i.content);
                    }
                })(e.tokens);
            }),
            e.hooks.add('wrap', function (t) {
              if ('code-block' === t.type) {
                for (var n = '', r = 0, i = t.classes.length; r < i; r++) {
                  var a = t.classes[r],
                    c = /language-(.+)/.exec(a);
                  if (c) {
                    n = c[1];
                    break;
                  }
                }
                var d,
                  u = e.languages[n];
                if (u)
                  t.content = e.highlight(
                    ((d = t.content),
                    d.replace(o, '').replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (e, t) {
                      var n;
                      if ('#' === (t = t.toLowerCase())[0])
                        return (n = 'x' === t[1] ? parseInt(t.slice(2), 16) : Number(t.slice(1))), l(n);
                      var r = s[t];
                      return r || e;
                    })),
                    u,
                    n,
                  );
                else if (n && 'none' !== n && e.plugins.autoloader) {
                  var f = 'md-' + new Date().valueOf() + '-' + Math.floor(1e16 * Math.random());
                  (t.attributes.id = f),
                    e.plugins.autoloader.loadLanguages(n, function () {
                      var t = document.getElementById(f);
                      t && (t.innerHTML = e.highlight(t.textContent, e.languages[n], n));
                    });
                }
              }
            });
          var o = RegExp(e.languages.markup.tag.pattern.source, 'gi'),
            s = { amp: '&', lt: '<', gt: '>', quot: '"' },
            l = String.fromCodePoint || String.fromCharCode;
          e.languages.md = e.languages.markdown;
        })(i),
        (i.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: 'string',
            inside: {
              'language-markdown': {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: i.languages.markdown,
              },
            },
          },
          string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:false|true)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
          'attr-name': { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: !0 },
          'atom-input': { pattern: /\b[A-Z]\w*Input\b/, alias: 'class-name' },
          scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
          constant: /\b[A-Z][A-Z_\d]*\b/,
          'class-name': {
            pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: !0, alias: 'function' },
          'definition-mutation': { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: 'function' },
          'definition-query': { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: 'function' },
          keyword:
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          'property-query': /\w+(?=\s*\()/,
          object: /\w+(?=\s*\{)/,
          punctuation: /[!(){}\[\]:=,]/,
          property: /\w+/,
        }),
        i.hooks.add('after-tokenize', function (e) {
          if ('graphql' === e.language)
            for (
              var t = e.tokens.filter(function (e) {
                  return 'string' != typeof e && 'comment' !== e.type && 'scalar' !== e.type;
                }),
                n = 0;
              n < t.length;

            ) {
              var r = t[n++];
              if ('keyword' === r.type && 'mutation' === r.content) {
                var i = [];
                if (u(['definition-mutation', 'punctuation']) && '(' === d(1).content) {
                  n += 2;
                  var a = f(/^\($/, /^\)$/);
                  if (-1 === a) continue;
                  for (; n < a; n++) {
                    var o = d(0);
                    'variable' === o.type && (p(o, 'variable-input'), i.push(o.content));
                  }
                  n = a + 1;
                }
                if (
                  u(['punctuation', 'property-query']) &&
                  '{' === d(0).content &&
                  (n++, p(d(0), 'property-mutation'), i.length > 0)
                ) {
                  var s = f(/^\{$/, /^\}$/);
                  if (-1 === s) continue;
                  for (var l = n; l < s; l++) {
                    var c = t[l];
                    'variable' === c.type && i.indexOf(c.content) >= 0 && p(c, 'variable-input');
                  }
                }
              }
            }
          function d(e) {
            return t[n + e];
          }
          function u(e, t) {
            t = t || 0;
            for (var n = 0; n < e.length; n++) {
              var r = d(n + t);
              if (!r || r.type !== e[n]) return !1;
            }
            return !0;
          }
          function f(e, r) {
            for (var i = 1, a = n; a < t.length; a++) {
              var o = t[a],
                s = o.content;
              if ('punctuation' === o.type && 'string' == typeof s)
                if (e.test(s)) i++;
                else if (r.test(s) && 0 === --i) return a;
            }
            return -1;
          }
          function p(e, t) {
            var n = e.alias;
            n ? Array.isArray(n) || (e.alias = n = [n]) : (e.alias = n = []), n.push(t);
          }
        }),
        (i.languages.sql = {
          comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0 },
          variable: [{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 }, /@[\w.$]+/],
          string: { pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: !0, lookbehind: !0 },
          identifier: {
            pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
            greedy: !0,
            lookbehind: !0,
            inside: { punctuation: /^`|`$/ },
          },
          function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword:
            /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
          operator:
            /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        }),
        (function (e) {
          var t = e.languages.javascript['template-string'],
            n = t.pattern.source,
            r = t.inside.interpolation,
            i = r.inside['interpolation-punctuation'],
            a = r.pattern.source;
          function o(t, r) {
            if (e.languages[t])
              return {
                pattern: RegExp('((?:' + r + ')\\s*)' + n),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
                  'embedded-code': { pattern: /[\s\S]+/, alias: t },
                },
              };
          }
          function s(e, t) {
            return '___' + t.toUpperCase() + '_' + e + '___';
          }
          function l(t, n, r) {
            var i = { code: t, grammar: n, language: r };
            return (
              e.hooks.run('before-tokenize', i),
              (i.tokens = e.tokenize(i.code, i.grammar)),
              e.hooks.run('after-tokenize', i),
              i.tokens
            );
          }
          function c(t) {
            var n = {};
            n['interpolation-punctuation'] = i;
            var a = e.tokenize(t, n);
            if (3 === a.length) {
              var o = [1, 1];
              o.push.apply(o, l(a[1], e.languages.javascript, 'javascript')), a.splice.apply(a, o);
            }
            return new e.Token('interpolation', a, r.alias, t);
          }
          function d(t, n, r) {
            var i = e.tokenize(t, { interpolation: { pattern: RegExp(a), lookbehind: !0 } }),
              o = 0,
              d = {},
              u = l(
                i
                  .map(function (e) {
                    if ('string' == typeof e) return e;
                    for (var n, i = e.content; -1 !== t.indexOf((n = s(o++, r))); );
                    return (d[n] = i), n;
                  })
                  .join(''),
                n,
                r,
              ),
              f = Object.keys(d);
            return (
              (o = 0),
              (function e(t) {
                for (var n = 0; n < t.length; n++) {
                  if (o >= f.length) return;
                  var r = t[n];
                  if ('string' == typeof r || 'string' == typeof r.content) {
                    var i = f[o],
                      a = 'string' == typeof r ? r : r.content,
                      s = a.indexOf(i);
                    if (-1 !== s) {
                      ++o;
                      var l = a.substring(0, s),
                        u = c(d[i]),
                        p = a.substring(s + i.length),
                        m = [];
                      if ((l && m.push(l), m.push(u), p)) {
                        var h = [p];
                        e(h), m.push.apply(m, h);
                      }
                      'string' == typeof r
                        ? (t.splice.apply(t, [n, 1].concat(m)), (n += m.length - 1))
                        : (r.content = m);
                    }
                  } else {
                    var g = r.content;
                    Array.isArray(g) ? e(g) : e([g]);
                  }
                }
              })(u),
              new e.Token(r, u, 'language-' + r, t)
            );
          }
          e.languages.javascript['template-string'] = [
            o(
              'css',
              /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
                .source,
            ),
            o('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
            o('svg', /\bsvg/.source),
            o('markdown', /\b(?:markdown|md)/.source),
            o('graphql', /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
            o('sql', /\bsql/.source),
            t,
          ].filter(Boolean);
          var u = { javascript: !0, js: !0, typescript: !0, ts: !0, jsx: !0, tsx: !0 };
          function f(e) {
            return 'string' == typeof e ? e : Array.isArray(e) ? e.map(f).join('') : f(e.content);
          }
          e.hooks.add('after-tokenize', function (t) {
            t.language in u &&
              (function t(n) {
                for (var r = 0, i = n.length; r < i; r++) {
                  var a = n[r];
                  if ('string' != typeof a) {
                    var o = a.content;
                    if (Array.isArray(o))
                      if ('template-string' === a.type) {
                        var s = o[1];
                        if (3 === o.length && 'string' != typeof s && 'embedded-code' === s.type) {
                          var l = f(s),
                            c = s.alias,
                            u = Array.isArray(c) ? c[0] : c,
                            p = e.languages[u];
                          if (!p) continue;
                          o[1] = d(l, p, u);
                        }
                      } else t(o);
                    else 'string' != typeof o && t([o]);
                  }
                }
              })(t.tokens);
          });
        })(i),
        (function (e) {
          (e.languages.typescript = e.languages.extend('javascript', {
            'class-name': {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
          })),
            e.languages.typescript.keyword.push(
              /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
              /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
              /\btype\b(?=\s*(?:[\{*]|$))/,
            ),
            delete e.languages.typescript.parameter,
            delete e.languages.typescript['literal-property'];
          var t = e.languages.extend('typescript', {});
          delete t['class-name'],
            (e.languages.typescript['class-name'].inside = t),
            e.languages.insertBefore('typescript', 'function', {
              decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: { at: { pattern: /^@/, alias: 'operator' }, function: /^[\s\S]+/ },
              },
              'generic-function': {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: t },
                },
              },
            }),
            (e.languages.ts = e.languages.typescript);
        })(i),
        (function (e) {
          function t(e, t) {
            return RegExp(
              e.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
              }),
              t,
            );
          }
          e.languages.insertBefore('javascript', 'function-variable', {
            'method-variable': {
              pattern: RegExp('(\\.\\s*)' + e.languages.javascript['function-variable'].pattern.source),
              lookbehind: !0,
              alias: ['function-variable', 'method', 'function', 'property-access'],
            },
          }),
            e.languages.insertBefore('javascript', 'function', {
              method: {
                pattern: RegExp('(\\.\\s*)' + e.languages.javascript.function.source),
                lookbehind: !0,
                alias: ['function', 'property-access'],
              },
            }),
            e.languages.insertBefore('javascript', 'constant', {
              'known-class-name': [
                {
                  pattern:
                    /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                  alias: 'class-name',
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' },
              ],
            }),
            e.languages.insertBefore('javascript', 'keyword', {
              imports: {
                pattern: t(
                  /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                    .source,
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              exports: {
                pattern: t(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
            }),
            e.languages.javascript.keyword.unshift(
              { pattern: /\b(?:as|default|export|from|import)\b/, alias: 'module' },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: 'control-flow',
              },
              { pattern: /\bnull\b/, alias: ['null', 'nil'] },
              { pattern: /\bundefined\b/, alias: 'nil' },
            ),
            e.languages.insertBefore('javascript', 'operator', {
              spread: { pattern: /\.{3}/, alias: 'operator' },
              arrow: { pattern: /=>/, alias: 'operator' },
            }),
            e.languages.insertBefore('javascript', 'punctuation', {
              'property-access': { pattern: t(/(\.\s*)#?<ID>/.source), lookbehind: !0 },
              'maybe-class-name': { pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: !0 },
              dom: {
                pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                alias: 'variable',
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' },
            });
          for (
            var n = ['function', 'function-variable', 'method', 'method-variable', 'property-access'], r = 0;
            r < n.length;
            r++
          ) {
            var i = n[r],
              a = e.languages.javascript[i];
            'RegExp' === e.util.type(a) && (a = e.languages.javascript[i] = { pattern: a });
            var o = a.inside || {};
            (a.inside = o), (o['maybe-class-name'] = /^[A-Z][\s\S]*/);
          }
        })(i),
        (function (e) {
          var t = e.util.clone(e.languages.javascript),
            n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            i = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
          function a(e, t) {
            return (
              (e = e
                .replace(/<S>/g, function () {
                  return n;
                })
                .replace(/<BRACES>/g, function () {
                  return r;
                })
                .replace(/<SPREAD>/g, function () {
                  return i;
                })),
              RegExp(e, t)
            );
          }
          (i = a(i).source),
            (e.languages.jsx = e.languages.extend('markup', t)),
            (e.languages.jsx.tag.pattern = a(
              /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                .source,
            )),
            (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
            (e.languages.jsx.tag.inside['attr-value'].pattern =
              /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
            (e.languages.jsx.tag.inside.tag.inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            (e.languages.jsx.tag.inside.comment = t.comment),
            e.languages.insertBefore(
              'inside',
              'attr-name',
              { spread: { pattern: a(/<SPREAD>/.source), inside: e.languages.jsx } },
              e.languages.jsx.tag,
            ),
            e.languages.insertBefore(
              'inside',
              'special-attr',
              {
                script: {
                  pattern: a(/=<BRACES>/.source),
                  alias: 'language-javascript',
                  inside: {
                    'script-punctuation': { pattern: /^=(?=\{)/, alias: 'punctuation' },
                    rest: e.languages.jsx,
                  },
                },
              },
              e.languages.jsx.tag,
            );
          var o = function (e) {
              return e
                ? 'string' == typeof e
                  ? e
                  : 'string' == typeof e.content
                  ? e.content
                  : e.content.map(o).join('')
                : '';
            },
            s = function (t) {
              for (var n = [], r = 0; r < t.length; r++) {
                var i = t[r],
                  a = !1;
                if (
                  ('string' != typeof i &&
                    ('tag' === i.type && i.content[0] && 'tag' === i.content[0].type
                      ? '</' === i.content[0].content[0].content
                        ? n.length > 0 && n[n.length - 1].tagName === o(i.content[0].content[1]) && n.pop()
                        : '/>' === i.content[i.content.length - 1].content ||
                          n.push({ tagName: o(i.content[0].content[1]), openedBraces: 0 })
                      : n.length > 0 && 'punctuation' === i.type && '{' === i.content
                      ? n[n.length - 1].openedBraces++
                      : n.length > 0 &&
                        n[n.length - 1].openedBraces > 0 &&
                        'punctuation' === i.type &&
                        '}' === i.content
                      ? n[n.length - 1].openedBraces--
                      : (a = !0)),
                  (a || 'string' == typeof i) && n.length > 0 && 0 === n[n.length - 1].openedBraces)
                ) {
                  var l = o(i);
                  r < t.length - 1 &&
                    ('string' == typeof t[r + 1] || 'plain-text' === t[r + 1].type) &&
                    ((l += o(t[r + 1])), t.splice(r + 1, 1)),
                    r > 0 &&
                      ('string' == typeof t[r - 1] || 'plain-text' === t[r - 1].type) &&
                      ((l = o(t[r - 1]) + l), t.splice(r - 1, 1), r--),
                    (t[r] = new e.Token('plain-text', l, null, l));
                }
                i.content && 'string' != typeof i.content && s(i.content);
              }
            };
          e.hooks.add('after-tokenize', function (e) {
            ('jsx' !== e.language && 'tsx' !== e.language) || s(e.tokens);
          });
        })(i),
        (function (e) {
          e.languages.diff = { coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m] };
          var t = {
            'deleted-sign': '-',
            'deleted-arrow': '<',
            'inserted-sign': '+',
            'inserted-arrow': '>',
            unchanged: ' ',
            diff: '!',
          };
          Object.keys(t).forEach(function (n) {
            var r = t[n],
              i = [];
            /^\w+$/.test(n) || i.push(/\w+/.exec(n)[0]),
              'diff' === n && i.push('bold'),
              (e.languages.diff[n] = {
                pattern: RegExp('^(?:[' + r + '].*(?:\r\n?|\n|(?![\\s\\S])))+', 'm'),
                alias: i,
                inside: {
                  line: { pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/, lookbehind: !0 },
                  prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(n)[0] },
                },
              });
          }),
            Object.defineProperty(e.languages.diff, 'PREFIXES', { value: t });
        })(i),
        (i.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-\u2013].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
          command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/ } },
          coord: /^@@.*@@$/m,
          'commit-sha1': /^commit \w{40}$/m,
        }),
        (i.languages.go = i.languages.extend('clike', {
          string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/, lookbehind: !0, greedy: !0 },
          keyword:
            /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          boolean: /\b(?:_|false|iota|nil|true)\b/,
          number: [
            /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
            /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
            /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i,
          ],
          operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          builtin:
            /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/,
        })),
        i.languages.insertBefore('go', 'string', { char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 } }),
        delete i.languages.go['class-name'],
        (function (e) {
          function t(e, t) {
            return '___' + e.toUpperCase() + t + '___';
          }
          Object.defineProperties((e.languages['markup-templating'] = {}), {
            buildPlaceholders: {
              value: function (n, r, i, a) {
                if (n.language === r) {
                  var o = (n.tokenStack = []);
                  (n.code = n.code.replace(i, function (e) {
                    if ('function' == typeof a && !a(e)) return e;
                    for (var i, s = o.length; -1 !== n.code.indexOf((i = t(r, s))); ) ++s;
                    return (o[s] = e), i;
                  })),
                    (n.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function (n, r) {
                if (n.language === r && n.tokenStack) {
                  n.grammar = e.languages[r];
                  var i = 0,
                    a = Object.keys(n.tokenStack);
                  !(function o(s) {
                    for (var l = 0; l < s.length && !(i >= a.length); l++) {
                      var c = s[l];
                      if ('string' == typeof c || (c.content && 'string' == typeof c.content)) {
                        var d = a[i],
                          u = n.tokenStack[d],
                          f = 'string' == typeof c ? c : c.content,
                          p = t(r, d),
                          m = f.indexOf(p);
                        if (m > -1) {
                          ++i;
                          var h = f.substring(0, m),
                            g = new e.Token(r, e.tokenize(u, n.grammar), 'language-' + r, u),
                            b = f.substring(m + p.length),
                            v = [];
                          h && v.push.apply(v, o([h])),
                            v.push(g),
                            b && v.push.apply(v, o([b])),
                            'string' == typeof c ? s.splice.apply(s, [l, 1].concat(v)) : (c.content = v);
                        }
                      } else c.content && o(c.content);
                    }
                    return s;
                  })(n.tokens);
                }
              },
            },
          });
        })(i),
        (function (e) {
          (e.languages.handlebars = {
            comment: /\{\{![\s\S]*?\}\}/,
            delimiter: { pattern: /^\{\{\{?|\}\}\}?$/, alias: 'punctuation' },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            boolean: /\b(?:false|true)\b/,
            block: { pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/, lookbehind: !0, alias: 'keyword' },
            brackets: { pattern: /\[[^\]]+\]/, inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ } },
            punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
            variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
          }),
            e.hooks.add('before-tokenize', function (t) {
              e.languages['markup-templating'].buildPlaceholders(
                t,
                'handlebars',
                /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g,
              );
            }),
            e.hooks.add('after-tokenize', function (t) {
              e.languages['markup-templating'].tokenizePlaceholders(t, 'handlebars');
            }),
            (e.languages.hbs = e.languages.handlebars);
        })(i),
        (i.languages.json = {
          property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 },
          string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' },
        }),
        (i.languages.webmanifest = i.languages.json),
        (i.languages.less = i.languages.extend('css', {
          comment: [/\/\*[\s\S]*?\*\//, { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 }],
          atrule: {
            pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { punctuation: /[:()]/ },
          },
          selector: {
            pattern:
              /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ },
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
          operator: /[+\-*\/]/,
        })),
        i.languages.insertBefore('less', 'property', {
          variable: [{ pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } }, /@@?[\w-]+/],
          'mixin-usage': { pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/, lookbehind: !0, alias: 'function' },
        }),
        (i.languages.makefile = {
          comment: { pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/, lookbehind: !0 },
          string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          'builtin-target': { pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/, alias: 'builtin' },
          target: {
            pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
            alias: 'symbol',
            inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ },
          },
          variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword:
            /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
          function: {
            pattern:
              /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
            lookbehind: !0,
          },
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/,
        }),
        (i.languages.objectivec = i.languages.extend('c', {
          string: { pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
          keyword:
            /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
          operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
        })),
        delete i.languages.objectivec['class-name'],
        (i.languages.objc = i.languages.objectivec),
        (i.languages.ocaml = {
          comment: { pattern: /\(\*[\s\S]*?\*\)/, greedy: !0 },
          char: { pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i, greedy: !0 },
          string: [
            { pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/, greedy: !0 },
            { pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/, greedy: !0 },
          ],
          number: [
            /\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,
            /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,
            /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i,
          ],
          directive: { pattern: /\B#\w+/, alias: 'property' },
          label: { pattern: /\B~\w+/, alias: 'property' },
          'type-variable': { pattern: /\B'\w+/, alias: 'function' },
          variant: { pattern: /`\w+/, alias: 'symbol' },
          keyword:
            /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
          boolean: /\b(?:false|true)\b/,
          'operator-like-punctuation': { pattern: /\[[<>|]|[>|]\]|\{<|>\}/, alias: 'punctuation' },
          operator:
            /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
          punctuation: /;;|::|[(){}\[\].,:;#]|\b_\b/,
        }),
        (i.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
          'string-interpolation': {
            pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                  'format-spec': { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0 },
                  'conversion-option': { pattern: /![sra](?=[:}]$)/, alias: 'punctuation' },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          'triple-quoted-string': { pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i, greedy: !0, alias: 'string' },
          string: { pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0 },
          function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0 },
          'class-name': { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
            lookbehind: !0,
            alias: ['annotation', 'punctuation'],
            inside: { punctuation: /\./ },
          },
          keyword:
            /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin:
            /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:False|None|True)\b/,
          number:
            /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
          operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (i.languages.python['string-interpolation'].inside.interpolation.inside.rest = i.languages.python),
        (i.languages.py = i.languages.python),
        (i.languages.reason = i.languages.extend('clike', {
          string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: !0 },
          'class-name': /\b[A-Z]\w*/,
          keyword:
            /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator:
            /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/,
        })),
        i.languages.insertBefore('reason', 'class-name', {
          char: { pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/, greedy: !0 },
          constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
          label: { pattern: /\b[a-z]\w*(?=::)/, alias: 'symbol' },
        }),
        delete i.languages.reason.function,
        (function (e) {
          (e.languages.sass = e.languages.extend('css', {
            comment: { pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m, lookbehind: !0, greedy: !0 },
          })),
            e.languages.insertBefore('sass', 'atrule', {
              'atrule-line': { pattern: /^(?:[ \t]*)[@+=].+/m, greedy: !0, inside: { atrule: /(?:@[\w-]+|[+=])/ } },
            }),
            delete e.languages.sass.atrule;
          var t = /\$[-\w]+|#\{\$[-\w]+\}/,
            n = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, { pattern: /(\s)-(?=\s)/, lookbehind: !0 }];
          e.languages.insertBefore('sass', 'property', {
            'variable-line': {
              pattern: /^[ \t]*\$.+/m,
              greedy: !0,
              inside: { punctuation: /:/, variable: t, operator: n },
            },
            'property-line': {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
              greedy: !0,
              inside: {
                property: [/[^:\s]+(?=\s*:)/, { pattern: /(:)[^:\s]+/, lookbehind: !0 }],
                punctuation: /:/,
                variable: t,
                operator: n,
                important: e.languages.sass.important,
              },
            },
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore('sass', 'punctuation', {
              selector: {
                pattern:
                  /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
                lookbehind: !0,
                greedy: !0,
              },
            });
        })(i),
        (i.languages.scss = i.languages.extend('css', {
          comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
          atrule: { pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/, inside: { rule: /@[\w-]+/ } },
          url: /(?:[-a-z]+-)?url(?=\()/i,
          selector: {
            pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
            inside: {
              parent: { pattern: /&/, alias: 'important' },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
          },
          property: {
            pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
          },
        })),
        i.languages.insertBefore('scss', 'atrule', {
          keyword: [
            /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
            { pattern: /( )(?:from|through)(?= )/, lookbehind: !0 },
          ],
        }),
        i.languages.insertBefore('scss', 'important', { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }),
        i.languages.insertBefore('scss', 'function', {
          'module-modifier': { pattern: /\b(?:as|hide|show|with)\b/i, alias: 'keyword' },
          placeholder: { pattern: /%[-\w]+/, alias: 'selector' },
          statement: { pattern: /\B!(?:default|optional)\b/i, alias: 'keyword' },
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' },
          operator: { pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/, lookbehind: !0 },
        }),
        (i.languages.scss.atrule.inside.rest = i.languages.scss),
        (function (e) {
          var t = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },
            n = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 },
            r = {
              comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
              url: { pattern: /\burl\((["']?).*?\1\)/i, greedy: !0 },
              string: { pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/, greedy: !0 },
              interpolation: null,
              func: null,
              important: /\B!(?:important|optional)\b/i,
              keyword: { pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/, lookbehind: !0 },
              hexcode: /#[\da-f]{3,6}/i,
              color: [
                /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                {
                  pattern:
                    /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                  inside: { unit: t, number: n, function: /[\w-]+(?=\()/, punctuation: /[(),]/ },
                },
              ],
              entity: /\\[\da-f]{1,8}/i,
              unit: t,
              boolean: /\b(?:false|true)\b/,
              operator: [
                /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
              ],
              number: n,
              punctuation: /[{}()\[\];:,]/,
            };
          (r.interpolation = {
            pattern: /\{[^\r\n}:]+\}/,
            alias: 'variable',
            inside: { delimiter: { pattern: /^\{|\}$/, alias: 'punctuation' }, rest: r },
          }),
            (r.func = { pattern: /[\w-]+\([^)]*\).*/, inside: { function: /^[^(]+/, rest: r } }),
            (e.languages.stylus = {
              'atrule-declaration': {
                pattern: /(^[ \t]*)@.+/m,
                lookbehind: !0,
                inside: { atrule: /^@[\w-]+/, rest: r },
              },
              'variable-declaration': {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
                lookbehind: !0,
                inside: { variable: /^\S+/, rest: r },
              },
              statement: {
                pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
                lookbehind: !0,
                inside: { keyword: /^\S+/, rest: r },
              },
              'property-declaration': {
                pattern:
                  /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
                lookbehind: !0,
                inside: { property: { pattern: /^[^\s:]+/, inside: { interpolation: r.interpolation } }, rest: r },
              },
              selector: {
                pattern:
                  /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
                lookbehind: !0,
                inside: { interpolation: r.interpolation, comment: r.comment, punctuation: /[{},]/ },
              },
              func: r.func,
              string: r.string,
              comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0, greedy: !0 },
              interpolation: r.interpolation,
              punctuation: /[{}()\[\];:.]/,
            });
        })(i),
        (function (e) {
          var t = e.util.clone(e.languages.typescript);
          (e.languages.tsx = e.languages.extend('jsx', t)),
            delete e.languages.tsx.parameter,
            delete e.languages.tsx['literal-property'];
          var n = e.languages.tsx.tag;
          (n.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + '(?:' + n.pattern.source + ')', n.pattern.flags)),
            (n.lookbehind = !0);
        })(i),
        (i.languages.wasm = {
          comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
          string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
          keyword: [
            { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
            {
              pattern:
                /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
              inside: { punctuation: /\./ },
            },
            /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
          ],
          variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
          number:
            /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
          punctuation: /[()]/,
        });
      const a = i;
    },
    9528: e => {
      e.exports &&
        (e.exports = {
          core: { meta: { path: 'components/prism-core.js', option: 'mandatory' }, core: 'Core' },
          themes: {
            meta: { path: 'themes/{id}.css', link: 'index.html?theme={id}', exclusive: !0 },
            prism: { title: 'Default', option: 'default' },
            'prism-dark': 'Dark',
            'prism-funky': 'Funky',
            'prism-okaidia': { title: 'Okaidia', owner: 'ocodia' },
            'prism-twilight': { title: 'Twilight', owner: 'remybach' },
            'prism-coy': { title: 'Coy', owner: 'tshedor' },
            'prism-solarizedlight': { title: 'Solarized Light', owner: 'hectormatos2011 ' },
            'prism-tomorrow': { title: 'Tomorrow Night', owner: 'Rosey' },
          },
          languages: {
            meta: { path: 'components/prism-{id}', noCSS: !0, examplesPath: 'examples/prism-{id}', addCheckAll: !0 },
            markup: {
              title: 'Markup',
              alias: ['html', 'xml', 'svg', 'mathml', 'ssml', 'atom', 'rss'],
              aliasTitles: {
                html: 'HTML',
                xml: 'XML',
                svg: 'SVG',
                mathml: 'MathML',
                ssml: 'SSML',
                atom: 'Atom',
                rss: 'RSS',
              },
              option: 'default',
            },
            css: { title: 'CSS', option: 'default', modify: 'markup' },
            clike: { title: 'C-like', option: 'default' },
            javascript: {
              title: 'JavaScript',
              require: 'clike',
              modify: 'markup',
              optional: 'regex',
              alias: 'js',
              option: 'default',
            },
            abap: { title: 'ABAP', owner: 'dellagustin' },
            abnf: { title: 'ABNF', owner: 'RunDevelopment' },
            actionscript: { title: 'ActionScript', require: 'javascript', modify: 'markup', owner: 'Golmote' },
            ada: { title: 'Ada', owner: 'Lucretia' },
            agda: { title: 'Agda', owner: 'xy-ren' },
            al: { title: 'AL', owner: 'RunDevelopment' },
            antlr4: { title: 'ANTLR4', alias: 'g4', owner: 'RunDevelopment' },
            apacheconf: { title: 'Apache Configuration', owner: 'GuiTeK' },
            apex: { title: 'Apex', require: ['clike', 'sql'], owner: 'RunDevelopment' },
            apl: { title: 'APL', owner: 'ngn' },
            applescript: { title: 'AppleScript', owner: 'Golmote' },
            aql: { title: 'AQL', owner: 'RunDevelopment' },
            arduino: { title: 'Arduino', require: 'cpp', alias: 'ino', owner: 'dkern' },
            arff: { title: 'ARFF', owner: 'Golmote' },
            armasm: { title: 'ARM Assembly', alias: 'arm-asm', owner: 'RunDevelopment' },
            arturo: {
              title: 'Arturo',
              alias: 'art',
              optional: ['bash', 'css', 'javascript', 'markup', 'markdown', 'sql'],
              owner: 'drkameleon',
            },
            asciidoc: { alias: 'adoc', title: 'AsciiDoc', owner: 'Golmote' },
            aspnet: { title: 'ASP.NET (C#)', require: ['markup', 'csharp'], owner: 'nauzilus' },
            asm6502: { title: '6502 Assembly', owner: 'kzurawel' },
            asmatmel: { title: 'Atmel AVR Assembly', owner: 'cerkit' },
            autohotkey: { title: 'AutoHotkey', owner: 'aviaryan' },
            autoit: { title: 'AutoIt', owner: 'Golmote' },
            avisynth: { title: 'AviSynth', alias: 'avs', owner: 'Zinfidel' },
            'avro-idl': { title: 'Avro IDL', alias: 'avdl', owner: 'RunDevelopment' },
            awk: { title: 'AWK', alias: 'gawk', aliasTitles: { gawk: 'GAWK' }, owner: 'RunDevelopment' },
            bash: {
              title: 'Bash',
              alias: ['sh', 'shell'],
              aliasTitles: { sh: 'Shell', shell: 'Shell' },
              owner: 'zeitgeist87',
            },
            basic: { title: 'BASIC', owner: 'Golmote' },
            batch: { title: 'Batch', owner: 'Golmote' },
            bbcode: {
              title: 'BBcode',
              alias: 'shortcode',
              aliasTitles: { shortcode: 'Shortcode' },
              owner: 'RunDevelopment',
            },
            bbj: { title: 'BBj', owner: 'hyyan' },
            bicep: { title: 'Bicep', owner: 'johnnyreilly' },
            birb: { title: 'Birb', require: 'clike', owner: 'Calamity210' },
            bison: { title: 'Bison', require: 'c', owner: 'Golmote' },
            bnf: { title: 'BNF', alias: 'rbnf', aliasTitles: { rbnf: 'RBNF' }, owner: 'RunDevelopment' },
            bqn: { title: 'BQN', owner: 'yewscion' },
            brainfuck: { title: 'Brainfuck', owner: 'Golmote' },
            brightscript: { title: 'BrightScript', owner: 'RunDevelopment' },
            bro: { title: 'Bro', owner: 'wayward710' },
            bsl: {
              title: 'BSL (1C:Enterprise)',
              alias: 'oscript',
              aliasTitles: { oscript: 'OneScript' },
              owner: 'Diversus23',
            },
            c: { title: 'C', require: 'clike', owner: 'zeitgeist87' },
            csharp: { title: 'C#', require: 'clike', alias: ['cs', 'dotnet'], owner: 'mvalipour' },
            cpp: { title: 'C++', require: 'c', owner: 'zeitgeist87' },
            cfscript: { title: 'CFScript', require: 'clike', alias: 'cfc', owner: 'mjclemente' },
            chaiscript: { title: 'ChaiScript', require: ['clike', 'cpp'], owner: 'RunDevelopment' },
            cil: { title: 'CIL', owner: 'sbrl' },
            cilkc: { title: 'Cilk/C', require: 'c', alias: 'cilk-c', owner: 'OpenCilk' },
            cilkcpp: { title: 'Cilk/C++', require: 'cpp', alias: ['cilk-cpp', 'cilk'], owner: 'OpenCilk' },
            clojure: { title: 'Clojure', owner: 'troglotit' },
            cmake: { title: 'CMake', owner: 'mjrogozinski' },
            cobol: { title: 'COBOL', owner: 'RunDevelopment' },
            coffeescript: { title: 'CoffeeScript', require: 'javascript', alias: 'coffee', owner: 'R-osey' },
            concurnas: { title: 'Concurnas', alias: 'conc', owner: 'jasontatton' },
            csp: { title: 'Content-Security-Policy', owner: 'ScottHelme' },
            cooklang: { title: 'Cooklang', owner: 'ahue' },
            coq: { title: 'Coq', owner: 'RunDevelopment' },
            crystal: { title: 'Crystal', require: 'ruby', owner: 'MakeNowJust' },
            'css-extras': { title: 'CSS Extras', require: 'css', modify: 'css', owner: 'milesj' },
            csv: { title: 'CSV', owner: 'RunDevelopment' },
            cue: { title: 'CUE', owner: 'RunDevelopment' },
            cypher: { title: 'Cypher', owner: 'RunDevelopment' },
            d: { title: 'D', require: 'clike', owner: 'Golmote' },
            dart: { title: 'Dart', require: 'clike', owner: 'Golmote' },
            dataweave: { title: 'DataWeave', owner: 'machaval' },
            dax: { title: 'DAX', owner: 'peterbud' },
            dhall: { title: 'Dhall', owner: 'RunDevelopment' },
            diff: { title: 'Diff', owner: 'uranusjr' },
            django: { title: 'Django/Jinja2', require: 'markup-templating', alias: 'jinja2', owner: 'romanvm' },
            'dns-zone-file': { title: 'DNS zone file', owner: 'RunDevelopment', alias: 'dns-zone' },
            docker: { title: 'Docker', alias: 'dockerfile', owner: 'JustinBeckwith' },
            dot: { title: 'DOT (Graphviz)', alias: 'gv', optional: 'markup', owner: 'RunDevelopment' },
            ebnf: { title: 'EBNF', owner: 'RunDevelopment' },
            editorconfig: { title: 'EditorConfig', owner: 'osipxd' },
            eiffel: { title: 'Eiffel', owner: 'Conaclos' },
            ejs: {
              title: 'EJS',
              require: ['javascript', 'markup-templating'],
              owner: 'RunDevelopment',
              alias: 'eta',
              aliasTitles: { eta: 'Eta' },
            },
            elixir: { title: 'Elixir', owner: 'Golmote' },
            elm: { title: 'Elm', owner: 'zwilias' },
            etlua: { title: 'Embedded Lua templating', require: ['lua', 'markup-templating'], owner: 'RunDevelopment' },
            erb: { title: 'ERB', require: ['ruby', 'markup-templating'], owner: 'Golmote' },
            erlang: { title: 'Erlang', owner: 'Golmote' },
            'excel-formula': { title: 'Excel Formula', alias: ['xlsx', 'xls'], owner: 'RunDevelopment' },
            fsharp: { title: 'F#', require: 'clike', owner: 'simonreynolds7' },
            factor: { title: 'Factor', owner: 'catb0t' },
            false: { title: 'False', owner: 'edukisto' },
            'firestore-security-rules': {
              title: 'Firestore security rules',
              require: 'clike',
              owner: 'RunDevelopment',
            },
            flow: { title: 'Flow', require: 'javascript', owner: 'Golmote' },
            fortran: { title: 'Fortran', owner: 'Golmote' },
            ftl: { title: 'FreeMarker Template Language', require: 'markup-templating', owner: 'RunDevelopment' },
            gml: { title: 'GameMaker Language', alias: 'gamemakerlanguage', require: 'clike', owner: 'LiarOnce' },
            gap: { title: 'GAP (CAS)', owner: 'RunDevelopment' },
            gcode: { title: 'G-code', owner: 'RunDevelopment' },
            gdscript: { title: 'GDScript', owner: 'RunDevelopment' },
            gedcom: { title: 'GEDCOM', owner: 'Golmote' },
            gettext: { title: 'gettext', alias: 'po', owner: 'RunDevelopment' },
            gherkin: { title: 'Gherkin', owner: 'hason' },
            git: { title: 'Git', owner: 'lgiraudel' },
            glsl: { title: 'GLSL', require: 'c', owner: 'Golmote' },
            gn: { title: 'GN', alias: 'gni', owner: 'RunDevelopment' },
            'linker-script': { title: 'GNU Linker Script', alias: 'ld', owner: 'RunDevelopment' },
            go: { title: 'Go', require: 'clike', owner: 'arnehormann' },
            'go-module': { title: 'Go module', alias: 'go-mod', owner: 'RunDevelopment' },
            gradle: { title: 'Gradle', require: 'clike', owner: 'zeabdelkhalek-badido18' },
            graphql: { title: 'GraphQL', optional: 'markdown', owner: 'Golmote' },
            groovy: { title: 'Groovy', require: 'clike', owner: 'robfletcher' },
            haml: {
              title: 'Haml',
              require: 'ruby',
              optional: [
                'css',
                'css-extras',
                'coffeescript',
                'erb',
                'javascript',
                'less',
                'markdown',
                'scss',
                'textile',
              ],
              owner: 'Golmote',
            },
            handlebars: {
              title: 'Handlebars',
              require: 'markup-templating',
              alias: ['hbs', 'mustache'],
              aliasTitles: { mustache: 'Mustache' },
              owner: 'Golmote',
            },
            haskell: { title: 'Haskell', alias: 'hs', owner: 'bholst' },
            haxe: { title: 'Haxe', require: 'clike', optional: 'regex', owner: 'Golmote' },
            hcl: { title: 'HCL', owner: 'outsideris' },
            hlsl: { title: 'HLSL', require: 'c', owner: 'RunDevelopment' },
            hoon: { title: 'Hoon', owner: 'matildepark' },
            http: {
              title: 'HTTP',
              optional: ['csp', 'css', 'hpkp', 'hsts', 'javascript', 'json', 'markup', 'uri'],
              owner: 'danielgtaylor',
            },
            hpkp: { title: 'HTTP Public-Key-Pins', owner: 'ScottHelme' },
            hsts: { title: 'HTTP Strict-Transport-Security', owner: 'ScottHelme' },
            ichigojam: { title: 'IchigoJam', owner: 'BlueCocoa' },
            icon: { title: 'Icon', owner: 'Golmote' },
            'icu-message-format': { title: 'ICU Message Format', owner: 'RunDevelopment' },
            idris: { title: 'Idris', alias: 'idr', owner: 'KeenS', require: 'haskell' },
            ignore: {
              title: '.ignore',
              owner: 'osipxd',
              alias: ['gitignore', 'hgignore', 'npmignore'],
              aliasTitles: { gitignore: '.gitignore', hgignore: '.hgignore', npmignore: '.npmignore' },
            },
            inform7: { title: 'Inform 7', owner: 'Golmote' },
            ini: { title: 'Ini', owner: 'aviaryan' },
            io: { title: 'Io', owner: 'AlesTsurko' },
            j: { title: 'J', owner: 'Golmote' },
            java: { title: 'Java', require: 'clike', owner: 'sherblot' },
            javadoc: {
              title: 'JavaDoc',
              require: ['markup', 'java', 'javadoclike'],
              modify: 'java',
              optional: 'scala',
              owner: 'RunDevelopment',
            },
            javadoclike: { title: 'JavaDoc-like', modify: ['java', 'javascript', 'php'], owner: 'RunDevelopment' },
            javastacktrace: { title: 'Java stack trace', owner: 'RunDevelopment' },
            jexl: { title: 'Jexl', owner: 'czosel' },
            jolie: { title: 'Jolie', require: 'clike', owner: 'thesave' },
            jq: { title: 'JQ', owner: 'RunDevelopment' },
            jsdoc: {
              title: 'JSDoc',
              require: ['javascript', 'javadoclike', 'typescript'],
              modify: 'javascript',
              optional: ['actionscript', 'coffeescript'],
              owner: 'RunDevelopment',
            },
            'js-extras': {
              title: 'JS Extras',
              require: 'javascript',
              modify: 'javascript',
              optional: ['actionscript', 'coffeescript', 'flow', 'n4js', 'typescript'],
              owner: 'RunDevelopment',
            },
            json: {
              title: 'JSON',
              alias: 'webmanifest',
              aliasTitles: { webmanifest: 'Web App Manifest' },
              owner: 'CupOfTea696',
            },
            json5: { title: 'JSON5', require: 'json', owner: 'RunDevelopment' },
            jsonp: { title: 'JSONP', require: 'json', owner: 'RunDevelopment' },
            jsstacktrace: { title: 'JS stack trace', owner: 'sbrl' },
            'js-templates': {
              title: 'JS Templates',
              require: 'javascript',
              modify: 'javascript',
              optional: ['css', 'css-extras', 'graphql', 'markdown', 'markup', 'sql'],
              owner: 'RunDevelopment',
            },
            julia: { title: 'Julia', owner: 'cdagnino' },
            keepalived: { title: 'Keepalived Configure', owner: 'dev-itsheng' },
            keyman: { title: 'Keyman', owner: 'mcdurdin' },
            kotlin: {
              title: 'Kotlin',
              alias: ['kt', 'kts'],
              aliasTitles: { kts: 'Kotlin Script' },
              require: 'clike',
              owner: 'Golmote',
            },
            kumir: { title: 'KuMir (\u041a\u0443\u041c\u0438\u0440)', alias: 'kum', owner: 'edukisto' },
            kusto: { title: 'Kusto', owner: 'RunDevelopment' },
            latex: {
              title: 'LaTeX',
              alias: ['tex', 'context'],
              aliasTitles: { tex: 'TeX', context: 'ConTeXt' },
              owner: 'japborst',
            },
            latte: { title: 'Latte', require: ['clike', 'markup-templating', 'php'], owner: 'nette' },
            less: { title: 'Less', require: 'css', optional: 'css-extras', owner: 'Golmote' },
            lilypond: { title: 'LilyPond', require: 'scheme', alias: 'ly', owner: 'RunDevelopment' },
            liquid: { title: 'Liquid', require: 'markup-templating', owner: 'cinhtau' },
            lisp: { title: 'Lisp', alias: ['emacs', 'elisp', 'emacs-lisp'], owner: 'JuanCaicedo' },
            livescript: { title: 'LiveScript', owner: 'Golmote' },
            llvm: { title: 'LLVM IR', owner: 'porglezomp' },
            log: { title: 'Log file', optional: 'javastacktrace', owner: 'RunDevelopment' },
            lolcode: { title: 'LOLCODE', owner: 'Golmote' },
            lua: { title: 'Lua', owner: 'Golmote' },
            magma: { title: 'Magma (CAS)', owner: 'RunDevelopment' },
            makefile: { title: 'Makefile', owner: 'Golmote' },
            markdown: { title: 'Markdown', require: 'markup', optional: 'yaml', alias: 'md', owner: 'Golmote' },
            'markup-templating': { title: 'Markup templating', require: 'markup', owner: 'Golmote' },
            mata: { title: 'Mata', owner: 'RunDevelopment' },
            matlab: { title: 'MATLAB', owner: 'Golmote' },
            maxscript: { title: 'MAXScript', owner: 'RunDevelopment' },
            mel: { title: 'MEL', owner: 'Golmote' },
            mermaid: { title: 'Mermaid', owner: 'RunDevelopment' },
            metafont: { title: 'METAFONT', owner: 'LaeriExNihilo' },
            mizar: { title: 'Mizar', owner: 'Golmote' },
            mongodb: { title: 'MongoDB', owner: 'airs0urce', require: 'javascript' },
            monkey: { title: 'Monkey', owner: 'Golmote' },
            moonscript: { title: 'MoonScript', alias: 'moon', owner: 'RunDevelopment' },
            n1ql: { title: 'N1QL', owner: 'TMWilds' },
            n4js: { title: 'N4JS', require: 'javascript', optional: 'jsdoc', alias: 'n4jsd', owner: 'bsmith-n4' },
            'nand2tetris-hdl': { title: 'Nand To Tetris HDL', owner: 'stephanmax' },
            naniscript: { title: 'Naninovel Script', owner: 'Elringus', alias: 'nani' },
            nasm: { title: 'NASM', owner: 'rbmj' },
            neon: { title: 'NEON', owner: 'nette' },
            nevod: { title: 'Nevod', owner: 'nezaboodka' },
            nginx: { title: 'nginx', owner: 'volado' },
            nim: { title: 'Nim', owner: 'Golmote' },
            nix: { title: 'Nix', owner: 'Golmote' },
            nsis: { title: 'NSIS', owner: 'idleberg' },
            objectivec: { title: 'Objective-C', require: 'c', alias: 'objc', owner: 'uranusjr' },
            ocaml: { title: 'OCaml', owner: 'Golmote' },
            odin: { title: 'Odin', owner: 'edukisto' },
            opencl: { title: 'OpenCL', require: 'c', modify: ['c', 'cpp'], owner: 'Milania1' },
            openqasm: { title: 'OpenQasm', alias: 'qasm', owner: 'RunDevelopment' },
            oz: { title: 'Oz', owner: 'Golmote' },
            parigp: { title: 'PARI/GP', owner: 'Golmote' },
            parser: { title: 'Parser', require: 'markup', owner: 'Golmote' },
            pascal: {
              title: 'Pascal',
              alias: 'objectpascal',
              aliasTitles: { objectpascal: 'Object Pascal' },
              owner: 'Golmote',
            },
            pascaligo: { title: 'Pascaligo', owner: 'DefinitelyNotAGoat' },
            psl: { title: 'PATROL Scripting Language', owner: 'bertysentry' },
            pcaxis: { title: 'PC-Axis', alias: 'px', owner: 'RunDevelopment' },
            peoplecode: { title: 'PeopleCode', alias: 'pcode', owner: 'RunDevelopment' },
            perl: { title: 'Perl', owner: 'Golmote' },
            php: { title: 'PHP', require: 'markup-templating', owner: 'milesj' },
            phpdoc: { title: 'PHPDoc', require: ['php', 'javadoclike'], modify: 'php', owner: 'RunDevelopment' },
            'php-extras': { title: 'PHP Extras', require: 'php', modify: 'php', owner: 'milesj' },
            'plant-uml': { title: 'PlantUML', alias: 'plantuml', owner: 'RunDevelopment' },
            plsql: { title: 'PL/SQL', require: 'sql', owner: 'Golmote' },
            powerquery: { title: 'PowerQuery', alias: ['pq', 'mscript'], owner: 'peterbud' },
            powershell: { title: 'PowerShell', owner: 'nauzilus' },
            processing: { title: 'Processing', require: 'clike', owner: 'Golmote' },
            prolog: { title: 'Prolog', owner: 'Golmote' },
            promql: { title: 'PromQL', owner: 'arendjr' },
            properties: { title: '.properties', owner: 'Golmote' },
            protobuf: { title: 'Protocol Buffers', require: 'clike', owner: 'just-boris' },
            pug: {
              title: 'Pug',
              require: ['markup', 'javascript'],
              optional: [
                'coffeescript',
                'ejs',
                'handlebars',
                'less',
                'livescript',
                'markdown',
                'scss',
                'stylus',
                'twig',
              ],
              owner: 'Golmote',
            },
            puppet: { title: 'Puppet', owner: 'Golmote' },
            pure: { title: 'Pure', optional: ['c', 'cpp', 'fortran'], owner: 'Golmote' },
            purebasic: { title: 'PureBasic', require: 'clike', alias: 'pbfasm', owner: 'HeX0R101' },
            purescript: { title: 'PureScript', require: 'haskell', alias: 'purs', owner: 'sriharshachilakapati' },
            python: { title: 'Python', alias: 'py', owner: 'multipetros' },
            qsharp: { title: 'Q#', require: 'clike', alias: 'qs', owner: 'fedonman' },
            q: { title: 'Q (kdb+ database)', owner: 'Golmote' },
            qml: { title: 'QML', require: 'javascript', owner: 'RunDevelopment' },
            qore: { title: 'Qore', require: 'clike', owner: 'temnroegg' },
            r: { title: 'R', owner: 'Golmote' },
            racket: { title: 'Racket', require: 'scheme', alias: 'rkt', owner: 'RunDevelopment' },
            cshtml: {
              title: 'Razor C#',
              alias: 'razor',
              require: ['markup', 'csharp'],
              optional: ['css', 'css-extras', 'javascript', 'js-extras'],
              owner: 'RunDevelopment',
            },
            jsx: {
              title: 'React JSX',
              require: ['markup', 'javascript'],
              optional: ['jsdoc', 'js-extras', 'js-templates'],
              owner: 'vkbansal',
            },
            tsx: { title: 'React TSX', require: ['jsx', 'typescript'] },
            reason: { title: 'Reason', require: 'clike', owner: 'Golmote' },
            regex: { title: 'Regex', owner: 'RunDevelopment' },
            rego: { title: 'Rego', owner: 'JordanSh' },
            renpy: { title: "Ren'py", alias: 'rpy', owner: 'HyuchiaDiego' },
            rescript: { title: 'ReScript', alias: 'res', owner: 'vmarcosp' },
            rest: { title: 'reST (reStructuredText)', owner: 'Golmote' },
            rip: { title: 'Rip', owner: 'ravinggenius' },
            roboconf: { title: 'Roboconf', owner: 'Golmote' },
            robotframework: { title: 'Robot Framework', alias: 'robot', owner: 'RunDevelopment' },
            ruby: { title: 'Ruby', require: 'clike', alias: 'rb', owner: 'samflores' },
            rust: { title: 'Rust', owner: 'Golmote' },
            sas: { title: 'SAS', optional: ['groovy', 'lua', 'sql'], owner: 'Golmote' },
            sass: { title: 'Sass (Sass)', require: 'css', optional: 'css-extras', owner: 'Golmote' },
            scss: { title: 'Sass (SCSS)', require: 'css', optional: 'css-extras', owner: 'MoOx' },
            scala: { title: 'Scala', require: 'java', owner: 'jozic' },
            scheme: { title: 'Scheme', owner: 'bacchus123' },
            'shell-session': {
              title: 'Shell session',
              require: 'bash',
              alias: ['sh-session', 'shellsession'],
              owner: 'RunDevelopment',
            },
            smali: { title: 'Smali', owner: 'RunDevelopment' },
            smalltalk: { title: 'Smalltalk', owner: 'Golmote' },
            smarty: { title: 'Smarty', require: 'markup-templating', optional: 'php', owner: 'Golmote' },
            sml: { title: 'SML', alias: 'smlnj', aliasTitles: { smlnj: 'SML/NJ' }, owner: 'RunDevelopment' },
            solidity: { title: 'Solidity (Ethereum)', alias: 'sol', require: 'clike', owner: 'glachaud' },
            'solution-file': { title: 'Solution file', alias: 'sln', owner: 'RunDevelopment' },
            soy: { title: 'Soy (Closure Template)', require: 'markup-templating', owner: 'Golmote' },
            sparql: { title: 'SPARQL', require: 'turtle', owner: 'Triply-Dev', alias: 'rq' },
            'splunk-spl': { title: 'Splunk SPL', owner: 'RunDevelopment' },
            sqf: { title: 'SQF: Status Quo Function (Arma 3)', require: 'clike', owner: 'RunDevelopment' },
            sql: { title: 'SQL', owner: 'multipetros' },
            squirrel: { title: 'Squirrel', require: 'clike', owner: 'RunDevelopment' },
            stan: { title: 'Stan', owner: 'RunDevelopment' },
            stata: { title: 'Stata Ado', require: ['mata', 'java', 'python'], owner: 'RunDevelopment' },
            iecst: { title: 'Structured Text (IEC 61131-3)', owner: 'serhioromano' },
            stylus: { title: 'Stylus', owner: 'vkbansal' },
            supercollider: { title: 'SuperCollider', alias: 'sclang', owner: 'RunDevelopment' },
            swift: { title: 'Swift', owner: 'chrischares' },
            systemd: { title: 'Systemd configuration file', owner: 'RunDevelopment' },
            't4-templating': { title: 'T4 templating', owner: 'RunDevelopment' },
            't4-cs': {
              title: 'T4 Text Templates (C#)',
              require: ['t4-templating', 'csharp'],
              alias: 't4',
              owner: 'RunDevelopment',
            },
            't4-vb': { title: 'T4 Text Templates (VB)', require: ['t4-templating', 'vbnet'], owner: 'RunDevelopment' },
            tap: { title: 'TAP', owner: 'isaacs', require: 'yaml' },
            tcl: { title: 'Tcl', owner: 'PeterChaplin' },
            tt2: { title: 'Template Toolkit 2', require: ['clike', 'markup-templating'], owner: 'gflohr' },
            textile: { title: 'Textile', require: 'markup', optional: 'css', owner: 'Golmote' },
            toml: { title: 'TOML', owner: 'RunDevelopment' },
            tremor: {
              title: 'Tremor',
              alias: ['trickle', 'troy'],
              owner: 'darach',
              aliasTitles: { trickle: 'trickle', troy: 'troy' },
            },
            turtle: { title: 'Turtle', alias: 'trig', aliasTitles: { trig: 'TriG' }, owner: 'jakubklimek' },
            twig: { title: 'Twig', require: 'markup-templating', owner: 'brandonkelly' },
            typescript: {
              title: 'TypeScript',
              require: 'javascript',
              optional: 'js-templates',
              alias: 'ts',
              owner: 'vkbansal',
            },
            typoscript: {
              title: 'TypoScript',
              alias: 'tsconfig',
              aliasTitles: { tsconfig: 'TSConfig' },
              owner: 'dkern',
            },
            unrealscript: { title: 'UnrealScript', alias: ['uscript', 'uc'], owner: 'RunDevelopment' },
            uorazor: { title: 'UO Razor Script', owner: 'jaseowns' },
            uri: { title: 'URI', alias: 'url', aliasTitles: { url: 'URL' }, owner: 'RunDevelopment' },
            v: { title: 'V', require: 'clike', owner: 'taggon' },
            vala: { title: 'Vala', require: 'clike', optional: 'regex', owner: 'TemplarVolk' },
            vbnet: { title: 'VB.Net', require: 'basic', owner: 'Bigsby' },
            velocity: { title: 'Velocity', require: 'markup', owner: 'Golmote' },
            verilog: { title: 'Verilog', owner: 'a-rey' },
            vhdl: { title: 'VHDL', owner: 'a-rey' },
            vim: { title: 'vim', owner: 'westonganger' },
            'visual-basic': {
              title: 'Visual Basic',
              alias: ['vb', 'vba'],
              aliasTitles: { vba: 'VBA' },
              owner: 'Golmote',
            },
            warpscript: { title: 'WarpScript', owner: 'RunDevelopment' },
            wasm: { title: 'WebAssembly', owner: 'Golmote' },
            'web-idl': { title: 'Web IDL', alias: 'webidl', owner: 'RunDevelopment' },
            wgsl: { title: 'WGSL', owner: 'Dr4gonthree' },
            wiki: { title: 'Wiki markup', require: 'markup', owner: 'Golmote' },
            wolfram: {
              title: 'Wolfram language',
              alias: ['mathematica', 'nb', 'wl'],
              aliasTitles: { mathematica: 'Mathematica', nb: 'Mathematica Notebook' },
              owner: 'msollami',
            },
            wren: { title: 'Wren', owner: 'clsource' },
            xeora: {
              title: 'Xeora',
              require: 'markup',
              alias: 'xeoracube',
              aliasTitles: { xeoracube: 'XeoraCube' },
              owner: 'freakmaxi',
            },
            'xml-doc': {
              title: 'XML doc (.net)',
              require: 'markup',
              modify: ['csharp', 'fsharp', 'vbnet'],
              owner: 'RunDevelopment',
            },
            xojo: { title: 'Xojo (REALbasic)', owner: 'Golmote' },
            xquery: { title: 'XQuery', require: 'markup', owner: 'Golmote' },
            yaml: { title: 'YAML', alias: 'yml', owner: 'hason' },
            yang: { title: 'YANG', owner: 'RunDevelopment' },
            zig: { title: 'Zig', owner: 'RunDevelopment' },
          },
          plugins: {
            meta: { path: 'plugins/{id}/prism-{id}', link: 'plugins/{id}/' },
            'line-highlight': { title: 'Line Highlight', description: 'Highlights specific lines and/or line ranges.' },
            'line-numbers': {
              title: 'Line Numbers',
              description: 'Line number at the beginning of code lines.',
              owner: 'kuba-kubula',
            },
            'show-invisibles': {
              title: 'Show Invisibles',
              description: 'Show hidden characters such as tabs and line breaks.',
              optional: ['autolinker', 'data-uri-highlight'],
            },
            autolinker: {
              title: 'Autolinker',
              description: 'Converts URLs and emails in code to clickable links. Parses Markdown links in comments.',
            },
            wpd: {
              title: 'WebPlatform Docs',
              description:
                'Makes tokens link to <a href="https://webplatform.github.io/docs/">WebPlatform.org documentation</a>. The links open in a new tab.',
            },
            'custom-class': {
              title: 'Custom Class',
              description:
                "This plugin allows you to prefix Prism's default classes (<code>.comment</code> can become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code>). You can even add new classes.",
              owner: 'dvkndn',
              noCSS: !0,
            },
            'file-highlight': {
              title: 'File Highlight',
              description: 'Fetch external files and highlight them with Prism. Used on the Prism website itself.',
              noCSS: !0,
            },
            'show-language': {
              title: 'Show Language',
              description: 'Display the highlighted language in code blocks (inline code does not show the label).',
              owner: 'nauzilus',
              noCSS: !0,
              require: 'toolbar',
            },
            'jsonp-highlight': {
              title: 'JSONP Highlight',
              description:
                'Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).',
              noCSS: !0,
              owner: 'nauzilus',
            },
            'highlight-keywords': {
              title: 'Highlight Keywords',
              description: 'Adds special CSS classes for each keyword for fine-grained highlighting.',
              owner: 'vkbansal',
              noCSS: !0,
            },
            'remove-initial-line-feed': {
              title: 'Remove initial line feed',
              description: 'Removes the initial line feed in code blocks.',
              owner: 'Golmote',
              noCSS: !0,
            },
            'inline-color': {
              title: 'Inline color',
              description: 'Adds a small inline preview for colors in style sheets.',
              require: 'css-extras',
              owner: 'RunDevelopment',
            },
            previewers: {
              title: 'Previewers',
              description: 'Previewers for angles, colors, gradients, easing and time.',
              require: 'css-extras',
              owner: 'Golmote',
            },
            autoloader: {
              title: 'Autoloader',
              description: 'Automatically loads the needed languages to highlight the code blocks.',
              owner: 'Golmote',
              noCSS: !0,
            },
            'keep-markup': {
              title: 'Keep Markup',
              description: 'Prevents custom markup from being dropped out during highlighting.',
              owner: 'Golmote',
              optional: 'normalize-whitespace',
              noCSS: !0,
            },
            'command-line': {
              title: 'Command Line',
              description:
                'Display a command line with a prompt and, optionally, the output/response from the commands.',
              owner: 'chriswells0',
            },
            'unescaped-markup': {
              title: 'Unescaped Markup',
              description: 'Write markup without having to escape anything.',
            },
            'normalize-whitespace': {
              title: 'Normalize Whitespace',
              description: 'Supports multiple operations to normalize whitespace in code blocks.',
              owner: 'zeitgeist87',
              optional: 'unescaped-markup',
              noCSS: !0,
            },
            'data-uri-highlight': {
              title: 'Data-URI Highlight',
              description: 'Highlights data-URI contents.',
              owner: 'Golmote',
              noCSS: !0,
            },
            toolbar: {
              title: 'Toolbar',
              description: 'Attach a toolbar for plugins to easily register buttons on the top of a code block.',
              owner: 'mAAdhaTTah',
            },
            'copy-to-clipboard': {
              title: 'Copy to Clipboard Button',
              description: 'Add a button that copies the code block to the clipboard when clicked.',
              owner: 'mAAdhaTTah',
              require: 'toolbar',
              noCSS: !0,
            },
            'download-button': {
              title: 'Download Button',
              description: 'A button in the toolbar of a code block adding a convenient way to download a code file.',
              owner: 'Golmote',
              require: 'toolbar',
              noCSS: !0,
            },
            'match-braces': {
              title: 'Match braces',
              description: 'Highlights matching braces.',
              owner: 'RunDevelopment',
            },
            'diff-highlight': {
              title: 'Diff Highlight',
              description: 'Highlights the code inside diff blocks.',
              owner: 'RunDevelopment',
              require: 'diff',
            },
            'filter-highlight-all': {
              title: 'Filter highlightAll',
              description:
                'Filters the elements the <code>highlightAll</code> and <code>highlightAllUnder</code> methods actually highlight.',
              owner: 'RunDevelopment',
              noCSS: !0,
            },
            treeview: {
              title: 'Treeview',
              description: 'A language with special styles to highlight file system tree structures.',
              owner: 'Golmote',
            },
          },
        });
    },
    5525: (e, t, n) => {
      const r = n(9528),
        i = n(4515),
        a = new Set();
      function o(e) {
        void 0 === e ? (e = Object.keys(r.languages).filter(e => 'meta' != e)) : Array.isArray(e) || (e = [e]);
        const t = [...a, ...Object.keys(Prism.languages)];
        i(r, e, t).load(e => {
          if (!(e in r.languages)) return void (o.silent || console.warn('Language does not exist: ' + e));
          const t = './prism-' + e;
          delete n.c[n(4596).resolve(t)], delete Prism.languages[e], n(4596)(t), a.add(e);
        });
      }
      (o.silent = !1), (e.exports = o);
    },
    4596: (e, t, n) => {
      var r = { './': 5525 };
      function i(e) {
        var t = a(e);
        return n(t);
      }
      function a(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        }
        return r[e];
      }
      (i.keys = function () {
        return Object.keys(r);
      }),
        (i.resolve = a),
        (e.exports = i),
        (i.id = 4596);
    },
    4515: e => {
      'use strict';
      var t = (function () {
        var e = function () {};
        function t(e, t) {
          Array.isArray(e) ? e.forEach(t) : null != e && t(e, 0);
        }
        function n(e) {
          for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n]] = !0;
          return t;
        }
        function r(e) {
          var n = {},
            r = [];
          function i(r, a) {
            if (!(r in n)) {
              a.push(r);
              var o = a.indexOf(r);
              if (o < a.length - 1) throw new Error('Circular dependency: ' + a.slice(o).join(' -> '));
              var s = {},
                l = e[r];
              if (l) {
                function c(t) {
                  if (!(t in e)) throw new Error(r + ' depends on an unknown component ' + t);
                  if (!(t in s)) for (var o in (i(t, a), (s[t] = !0), n[t])) s[o] = !0;
                }
                t(l.require, c), t(l.optional, c), t(l.modify, c);
              }
              (n[r] = s), a.pop();
            }
          }
          return function (e) {
            var t = n[e];
            return t || (i(e, r), (t = n[e])), t;
          };
        }
        function i(e) {
          for (var t in e) return !0;
          return !1;
        }
        return function (a, o, s) {
          var l = (function (e) {
              var t = {};
              for (var n in e) {
                var r = e[n];
                for (var i in r)
                  if ('meta' != i) {
                    var a = r[i];
                    t[i] = 'string' == typeof a ? { title: a } : a;
                  }
              }
              return t;
            })(a),
            c = (function (e) {
              var n;
              return function (r) {
                if (r in e) return r;
                if (!n)
                  for (var i in ((n = {}), e)) {
                    var a = e[i];
                    t(a && a.alias, function (t) {
                      if (t in n) throw new Error(t + ' cannot be alias for both ' + i + ' and ' + n[t]);
                      if (t in e) throw new Error(t + ' cannot be alias of ' + i + ' because it is a component.');
                      n[t] = i;
                    });
                  }
                return n[r] || r;
              };
            })(l);
          (o = o.map(c)), (s = (s || []).map(c));
          var d = n(o),
            u = n(s);
          o.forEach(function e(n) {
            var r = l[n];
            t(r && r.require, function (t) {
              t in u || ((d[t] = !0), e(t));
            });
          });
          for (var f, p = r(l), m = d; i(m); ) {
            for (var h in ((f = {}), m)) {
              var g = l[h];
              t(g && g.modify, function (e) {
                e in u && (f[e] = !0);
              });
            }
            for (var b in u)
              if (!(b in d))
                for (var v in p(b))
                  if (v in d) {
                    f[b] = !0;
                    break;
                  }
            for (var y in (m = f)) d[y] = !0;
          }
          var k = {
            getIds: function () {
              var e = [];
              return (
                k.load(function (t) {
                  e.push(t);
                }),
                e
              );
            },
            load: function (t, n) {
              return (function (t, n, r, i) {
                var a = i ? i.series : void 0,
                  o = i ? i.parallel : e,
                  s = {},
                  l = {};
                function c(e) {
                  if (e in s) return s[e];
                  l[e] = !0;
                  var i,
                    d = [];
                  for (var u in t(e)) u in n && d.push(u);
                  if (0 === d.length) i = r(e);
                  else {
                    var f = o(
                      d.map(function (e) {
                        var t = c(e);
                        return delete l[e], t;
                      }),
                    );
                    a
                      ? (i = a(f, function () {
                          return r(e);
                        }))
                      : r(e);
                  }
                  return (s[e] = i);
                }
                for (var d in n) c(d);
                var u = [];
                for (var f in l) u.push(s[f]);
                return o(u);
              })(p, d, t, n);
            },
          };
          return k;
        };
      })();
      e.exports = t;
    },
    8262: (e, t, n) => {
      'use strict';
      var r = n(3586);
      function i() {}
      function a() {}
      (a.resetWarningCache = i),
        (e.exports = function () {
          function e(e, t, n, i, a, o) {
            if (o !== r) {
              var s = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
              );
              throw ((s.name = 'Invariant Violation'), s);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: i,
          };
          return (n.PropTypes = n), n;
        });
    },
    3980: (e, t, n) => {
      e.exports = n(8262)();
    },
    3586: e => {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    2967: (e, t, n) => {
      'use strict';
      var r = n(2784),
        i = n(7320),
        a = n(4616);
      function o(e) {
        for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
          t += '&args[]=' + encodeURIComponent(arguments[n]);
        return (
          'Minified React error #' +
          e +
          '; visit ' +
          t +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      if (!r) throw Error(o(227));
      var s = new Set(),
        l = {};
      function c(e, t) {
        d(e, t), d(e + 'Capture', t);
      }
      function d(e, t) {
        for (l[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
      }
      var u = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
        f =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        p = Object.prototype.hasOwnProperty,
        m = {},
        h = {};
      function g(e, t, n, r, i, a, o) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = i),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = a),
          (this.removeEmptyString = o);
      }
      var b = {};
      'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
        .split(' ')
        .forEach(function (e) {
          b[e] = new g(e, 0, !1, e, null, !1, !1);
        }),
        [
          ['acceptCharset', 'accept-charset'],
          ['className', 'class'],
          ['htmlFor', 'for'],
          ['httpEquiv', 'http-equiv'],
        ].forEach(function (e) {
          var t = e[0];
          b[t] = new g(t, 1, !1, e[1], null, !1, !1);
        }),
        ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
          b[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1);
        }),
        ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
          b[e] = new g(e, 2, !1, e, null, !1, !1);
        }),
        'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
          .split(' ')
          .forEach(function (e) {
            b[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1);
          }),
        ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
          b[e] = new g(e, 3, !0, e, null, !1, !1);
        }),
        ['capture', 'download'].forEach(function (e) {
          b[e] = new g(e, 4, !1, e, null, !1, !1);
        }),
        ['cols', 'rows', 'size', 'span'].forEach(function (e) {
          b[e] = new g(e, 6, !1, e, null, !1, !1);
        }),
        ['rowSpan', 'start'].forEach(function (e) {
          b[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
      var v = /[\-:]([a-z])/g;
      function y(e) {
        return e[1].toUpperCase();
      }
      function k(e, t, n, r) {
        var i = b.hasOwnProperty(t) ? b[t] : null;
        (null !== i
          ? 0 === i.type
          : !r && 2 < t.length && ('o' === t[0] || 'O' === t[0]) && ('n' === t[1] || 'N' === t[1])) ||
          ((function (e, t, n, r) {
            if (
              null == t ||
              (function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case 'function':
                  case 'symbol':
                    return !0;
                  case 'boolean':
                    return (
                      !r &&
                      (null !== n ? !n.acceptsBooleans : 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, i, r) && (n = null),
          r || null === i
            ? (function (e) {
                return !!p.call(h, e) || (!p.call(m, e) && (f.test(e) ? (h[e] = !0) : ((m[e] = !0), !1)));
              })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
            : i.mustUseProperty
            ? (e[i.propertyName] = null === n ? 3 !== i.type && '' : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n = 3 === (i = i.type) || (4 === i && !0 === n) ? '' : '' + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
        .split(' ')
        .forEach(function (e) {
          var t = e.replace(v, y);
          b[t] = new g(t, 1, !1, e, null, !1, !1);
        }),
        'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
          var t = e.replace(v, y);
          b[t] = new g(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
        }),
        ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
          var t = e.replace(v, y);
          b[t] = new g(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
        }),
        ['tabIndex', 'crossOrigin'].forEach(function (e) {
          b[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (b.xlinkHref = new g('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
        ['src', 'href', 'action', 'formAction'].forEach(function (e) {
          b[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
      var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        S = 60103,
        E = 60106,
        C = 60107,
        _ = 60108,
        x = 60114,
        T = 60109,
        P = 60110,
        R = 60112,
        A = 60113,
        L = 60120,
        D = 60115,
        N = 60116,
        O = 60121,
        z = 60128,
        I = 60129,
        M = 60130,
        F = 60131;
      if ('function' == typeof Symbol && Symbol.for) {
        var B = Symbol.for;
        (S = B('react.element')),
          (E = B('react.portal')),
          (C = B('react.fragment')),
          (_ = B('react.strict_mode')),
          (x = B('react.profiler')),
          (T = B('react.provider')),
          (P = B('react.context')),
          (R = B('react.forward_ref')),
          (A = B('react.suspense')),
          (L = B('react.suspense_list')),
          (D = B('react.memo')),
          (N = B('react.lazy')),
          (O = B('react.block')),
          B('react.scope'),
          (z = B('react.opaque.id')),
          (I = B('react.debug_trace_mode')),
          (M = B('react.offscreen')),
          (F = B('react.legacy_hidden'));
      }
      var j,
        U = 'function' == typeof Symbol && Symbol.iterator;
      function $(e) {
        return null === e || 'object' != typeof e
          ? null
          : 'function' == typeof (e = (U && e[U]) || e['@@iterator'])
          ? e
          : null;
      }
      function H(e) {
        if (void 0 === j)
          try {
            throw Error();
          } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            j = (t && t[1]) || '';
          }
        return '\n' + j + e;
      }
      var q = !1;
      function V(e, t) {
        if (!e || q) return '';
        q = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t)
            if (
              ((t = function () {
                throw Error();
              }),
              Object.defineProperty(t.prototype, 'props', {
                set: function () {
                  throw Error();
                },
              }),
              'object' == typeof Reflect && Reflect.construct)
            ) {
              try {
                Reflect.construct(t, []);
              } catch (l) {
                var r = l;
              }
              Reflect.construct(e, [], t);
            } else {
              try {
                t.call();
              } catch (l) {
                r = l;
              }
              e.call(t.prototype);
            }
          else {
            try {
              throw Error();
            } catch (l) {
              r = l;
            }
            e();
          }
        } catch (l) {
          if (l && r && 'string' == typeof l.stack) {
            for (
              var i = l.stack.split('\n'), a = r.stack.split('\n'), o = i.length - 1, s = a.length - 1;
              1 <= o && 0 <= s && i[o] !== a[s];

            )
              s--;
            for (; 1 <= o && 0 <= s; o--, s--)
              if (i[o] !== a[s]) {
                if (1 !== o || 1 !== s)
                  do {
                    if ((o--, 0 > --s || i[o] !== a[s])) return '\n' + i[o].replace(' at new ', ' at ');
                  } while (1 <= o && 0 <= s);
                break;
              }
          }
        } finally {
          (q = !1), (Error.prepareStackTrace = n);
        }
        return (e = e ? e.displayName || e.name : '') ? H(e) : '';
      }
      function G(e) {
        switch (e.tag) {
          case 5:
            return H(e.type);
          case 16:
            return H('Lazy');
          case 13:
            return H('Suspense');
          case 19:
            return H('SuspenseList');
          case 0:
          case 2:
          case 15:
            return (e = V(e.type, !1));
          case 11:
            return (e = V(e.type.render, !1));
          case 22:
            return (e = V(e.type._render, !1));
          case 1:
            return (e = V(e.type, !0));
          default:
            return '';
        }
      }
      function Z(e) {
        if (null == e) return null;
        if ('function' == typeof e) return e.displayName || e.name || null;
        if ('string' == typeof e) return e;
        switch (e) {
          case C:
            return 'Fragment';
          case E:
            return 'Portal';
          case x:
            return 'Profiler';
          case _:
            return 'StrictMode';
          case A:
            return 'Suspense';
          case L:
            return 'SuspenseList';
        }
        if ('object' == typeof e)
          switch (e.$$typeof) {
            case P:
              return (e.displayName || 'Context') + '.Consumer';
            case T:
              return (e._context.displayName || 'Context') + '.Provider';
            case R:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ''),
                e.displayName || ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
              );
            case D:
              return Z(e.type);
            case O:
              return Z(e._render);
            case N:
              (t = e._payload), (e = e._init);
              try {
                return Z(e(t));
              } catch (n) {}
          }
        return null;
      }
      function W(e) {
        switch (typeof e) {
          case 'boolean':
          case 'number':
          case 'object':
          case 'string':
          case 'undefined':
            return e;
          default:
            return '';
        }
      }
      function K(e) {
        var t = e.type;
        return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
      }
      function Y(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = K(e) ? 'checked' : 'value',
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = '' + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && 'function' == typeof n.get && 'function' == typeof n.set) {
              var i = n.get,
                a = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return i.call(this);
                  },
                  set: function (e) {
                    (r = '' + e), a.call(this, e);
                  },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = '' + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
            }
          })(e));
      }
      function Q(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = '';
        return e && (r = K(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0);
      }
      function X(e) {
        if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      function J(e, t) {
        var n = t.checked;
        return i({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked,
        });
      }
      function ee(e, t) {
        var n = null == t.defaultValue ? '' : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        (n = W(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
          });
      }
      function te(e, t) {
        null != (t = t.checked) && k(e, 'checked', t, !1);
      }
      function ne(e, t) {
        te(e, t);
        var n = W(t.value),
          r = t.type;
        if (null != n)
          'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
        else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
        t.hasOwnProperty('value')
          ? ie(e, t.type, n)
          : t.hasOwnProperty('defaultValue') && ie(e, t.type, W(t.defaultValue)),
          null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
      }
      function re(e, t, n) {
        if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
          var r = t.type;
          if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
          (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
        }
        '' !== (n = e.name) && (e.name = ''),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          '' !== n && (e.name = n);
      }
      function ie(e, t, n) {
        ('number' === t && X(e.ownerDocument) === e) ||
          (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
      }
      function ae(e, t) {
        return (
          (e = i({ children: void 0 }, t)),
          (t = (function (e) {
            var t = '';
            return (
              r.Children.forEach(e, function (e) {
                null != e && (t += e);
              }),
              t
            );
          })(t.children)) && (e.children = t),
          e
        );
      }
      function oe(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
          for (n = 0; n < e.length; n++)
            (i = t.hasOwnProperty('$' + e[n].value)),
              e[n].selected !== i && (e[n].selected = i),
              i && r && (e[n].defaultSelected = !0);
        } else {
          for (n = '' + W(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) return (e[i].selected = !0), void (r && (e[i].defaultSelected = !0));
            null !== t || e[i].disabled || (t = e[i]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function se(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
        return i({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
      }
      function le(e, t) {
        var n = t.value;
        if (null == n) {
          if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(o(92));
            if (Array.isArray(n)) {
              if (!(1 >= n.length)) throw Error(o(93));
              n = n[0];
            }
            t = n;
          }
          null == t && (t = ''), (n = t);
        }
        e._wrapperState = { initialValue: W(n) };
      }
      function ce(e, t) {
        var n = W(t.value),
          r = W(t.defaultValue);
        null != n &&
          ((n = '' + n) !== e.value && (e.value = n),
          null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
          null != r && (e.defaultValue = '' + r);
      }
      function de(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
      }
      var ue = {
        html: 'http://www.w3.org/1999/xhtml',
        mathml: 'http://www.w3.org/1998/Math/MathML',
        svg: 'http://www.w3.org/2000/svg',
      };
      function fe(e) {
        switch (e) {
          case 'svg':
            return 'http://www.w3.org/2000/svg';
          case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
          default:
            return 'http://www.w3.org/1999/xhtml';
        }
      }
      function pe(e, t) {
        return null == e || 'http://www.w3.org/1999/xhtml' === e
          ? fe(t)
          : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
      }
      var me,
        he,
        ge =
          ((he = function (e, t) {
            if (e.namespaceURI !== ue.svg || 'innerHTML' in e) e.innerHTML = t;
            else {
              for (
                (me = me || document.createElement('div')).innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                  t = me.firstChild;
                e.firstChild;

              )
                e.removeChild(e.firstChild);
              for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
          }),
          'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                  return he(e, t);
                });
              }
            : he);
      function be(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      var ve = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        ye = ['Webkit', 'ms', 'Moz', 'O'];
      function ke(e, t, n) {
        return null == t || 'boolean' == typeof t || '' === t
          ? ''
          : n || 'number' != typeof t || 0 === t || (ve.hasOwnProperty(e) && ve[e])
          ? ('' + t).trim()
          : t + 'px';
      }
      function we(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
              i = ke(n, t[n], r);
            'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
          }
      }
      Object.keys(ve).forEach(function (e) {
        ye.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ve[t] = ve[e]);
        });
      });
      var Se = i(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        },
      );
      function Ee(e, t) {
        if (t) {
          if (Se[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(o(60));
            if ('object' != typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
              throw Error(o(61));
          }
          if (null != t.style && 'object' != typeof t.style) throw Error(o(62));
        }
      }
      function Ce(e, t) {
        if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
        switch (e) {
          case 'annotation-xml':
          case 'color-profile':
          case 'font-face':
          case 'font-face-src':
          case 'font-face-uri':
          case 'font-face-format':
          case 'font-face-name':
          case 'missing-glyph':
            return !1;
          default:
            return !0;
        }
      }
      function _e(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      var xe = null,
        Te = null,
        Pe = null;
      function Re(e) {
        if ((e = ni(e))) {
          if ('function' != typeof xe) throw Error(o(280));
          var t = e.stateNode;
          t && ((t = ii(t)), xe(e.stateNode, e.type, t));
        }
      }
      function Ae(e) {
        Te ? (Pe ? Pe.push(e) : (Pe = [e])) : (Te = e);
      }
      function Le() {
        if (Te) {
          var e = Te,
            t = Pe;
          if (((Pe = Te = null), Re(e), t)) for (e = 0; e < t.length; e++) Re(t[e]);
        }
      }
      function De(e, t) {
        return e(t);
      }
      function Ne(e, t, n, r, i) {
        return e(t, n, r, i);
      }
      function Oe() {}
      var ze = De,
        Ie = !1,
        Me = !1;
      function Fe() {
        (null === Te && null === Pe) || (Oe(), Le());
      }
      function Be(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = ii(n);
        if (null === r) return null;
        n = r[t];
        e: switch (t) {
          case 'onClick':
          case 'onClickCapture':
          case 'onDoubleClick':
          case 'onDoubleClickCapture':
          case 'onMouseDown':
          case 'onMouseDownCapture':
          case 'onMouseMove':
          case 'onMouseMoveCapture':
          case 'onMouseUp':
          case 'onMouseUpCapture':
          case 'onMouseEnter':
            (r = !r.disabled) ||
              (r = !('button' === (e = e.type) || 'input' === e || 'select' === e || 'textarea' === e)),
              (e = !r);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && 'function' != typeof n) throw Error(o(231, t, typeof n));
        return n;
      }
      var je = !1;
      if (u)
        try {
          var Ue = {};
          Object.defineProperty(Ue, 'passive', {
            get: function () {
              je = !0;
            },
          }),
            window.addEventListener('test', Ue, Ue),
            window.removeEventListener('test', Ue, Ue);
        } catch (he) {
          je = !1;
        }
      function $e(e, t, n, r, i, a, o, s, l) {
        var c = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, c);
        } catch (d) {
          this.onError(d);
        }
      }
      var He = !1,
        qe = null,
        Ve = !1,
        Ge = null,
        Ze = {
          onError: function (e) {
            (He = !0), (qe = e);
          },
        };
      function We(e, t, n, r, i, a, o, s, l) {
        (He = !1), (qe = null), $e.apply(Ze, arguments);
      }
      function Ke(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            0 != (1026 & (t = e).flags) && (n = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function Ye(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
        }
        return null;
      }
      function Qe(e) {
        if (Ke(e) !== e) throw Error(o(188));
      }
      function Xe(e) {
        if (
          ((e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = Ke(e))) throw Error(o(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var i = n.return;
              if (null === i) break;
              var a = i.alternate;
              if (null === a) {
                if (null !== (r = i.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (i.child === a.child) {
                for (a = i.child; a; ) {
                  if (a === n) return Qe(i), e;
                  if (a === r) return Qe(i), t;
                  a = a.sibling;
                }
                throw Error(o(188));
              }
              if (n.return !== r.return) (n = i), (r = a);
              else {
                for (var s = !1, l = i.child; l; ) {
                  if (l === n) {
                    (s = !0), (n = i), (r = a);
                    break;
                  }
                  if (l === r) {
                    (s = !0), (r = i), (n = a);
                    break;
                  }
                  l = l.sibling;
                }
                if (!s) {
                  for (l = a.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = a), (r = i);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = a), (n = i);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) throw Error(o(189));
                }
              }
              if (n.alternate !== r) throw Error(o(190));
            }
            if (3 !== n.tag) throw Error(o(188));
            return n.stateNode.current === n ? e : t;
          })(e)),
          !e)
        )
          return null;
        for (var t = e; ; ) {
          if (5 === t.tag || 6 === t.tag) return t;
          if (t.child) (t.child.return = t), (t = t.child);
          else {
            if (t === e) break;
            for (; !t.sibling; ) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      }
      function Je(e, t) {
        for (var n = e.alternate; null !== t; ) {
          if (t === e || t === n) return !0;
          t = t.return;
        }
        return !1;
      }
      var et,
        tt,
        nt,
        rt,
        it = !1,
        at = [],
        ot = null,
        st = null,
        lt = null,
        ct = new Map(),
        dt = new Map(),
        ut = [],
        ft =
          'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' ',
          );
      function pt(e, t, n, r, i) {
        return { blockedOn: e, domEventName: t, eventSystemFlags: 16 | n, nativeEvent: i, targetContainers: [r] };
      }
      function mt(e, t) {
        switch (e) {
          case 'focusin':
          case 'focusout':
            ot = null;
            break;
          case 'dragenter':
          case 'dragleave':
            st = null;
            break;
          case 'mouseover':
          case 'mouseout':
            lt = null;
            break;
          case 'pointerover':
          case 'pointerout':
            ct.delete(t.pointerId);
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
            dt.delete(t.pointerId);
        }
      }
      function ht(e, t, n, r, i, a) {
        return null === e || e.nativeEvent !== a
          ? ((e = pt(t, n, r, i, a)), null !== t && null !== (t = ni(t)) && tt(t), e)
          : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== i && -1 === t.indexOf(i) && t.push(i), e);
      }
      function gt(e) {
        var t = ti(e.target);
        if (null !== t) {
          var n = Ke(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = Ye(n)))
                return (
                  (e.blockedOn = t),
                  void rt(e.lanePriority, function () {
                    a.unstable_runWithPriority(e.priority, function () {
                      nt(n);
                    });
                  })
                );
            } else if (3 === t && n.stateNode.hydrate)
              return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function bt(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n) return null !== (t = ni(n)) && tt(t), (e.blockedOn = n), !1;
          t.shift();
        }
        return !0;
      }
      function vt(e, t, n) {
        bt(e) && n.delete(t);
      }
      function yt() {
        for (it = !1; 0 < at.length; ) {
          var e = at[0];
          if (null !== e.blockedOn) {
            null !== (e = ni(e.blockedOn)) && et(e);
            break;
          }
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) {
              e.blockedOn = n;
              break;
            }
            t.shift();
          }
          null === e.blockedOn && at.shift();
        }
        null !== ot && bt(ot) && (ot = null),
          null !== st && bt(st) && (st = null),
          null !== lt && bt(lt) && (lt = null),
          ct.forEach(vt),
          dt.forEach(vt);
      }
      function kt(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null), it || ((it = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, yt)));
      }
      function wt(e) {
        function t(t) {
          return kt(t, e);
        }
        if (0 < at.length) {
          kt(at[0], e);
          for (var n = 1; n < at.length; n++) {
            var r = at[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (
          null !== ot && kt(ot, e),
            null !== st && kt(st, e),
            null !== lt && kt(lt, e),
            ct.forEach(t),
            dt.forEach(t),
            n = 0;
          n < ut.length;
          n++
        )
          (r = ut[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < ut.length && null === (n = ut[0]).blockedOn; ) gt(n), null === n.blockedOn && ut.shift();
      }
      function St(e, t) {
        var n = {};
        return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
      }
      var Et = {
          animationend: St('Animation', 'AnimationEnd'),
          animationiteration: St('Animation', 'AnimationIteration'),
          animationstart: St('Animation', 'AnimationStart'),
          transitionend: St('Transition', 'TransitionEnd'),
        },
        Ct = {},
        _t = {};
      function xt(e) {
        if (Ct[e]) return Ct[e];
        if (!Et[e]) return e;
        var t,
          n = Et[e];
        for (t in n) if (n.hasOwnProperty(t) && t in _t) return (Ct[e] = n[t]);
        return e;
      }
      u &&
        ((_t = document.createElement('div').style),
        'AnimationEvent' in window ||
          (delete Et.animationend.animation,
          delete Et.animationiteration.animation,
          delete Et.animationstart.animation),
        'TransitionEvent' in window || delete Et.transitionend.transition);
      var Tt = xt('animationend'),
        Pt = xt('animationiteration'),
        Rt = xt('animationstart'),
        At = xt('transitionend'),
        Lt = new Map(),
        Dt = new Map(),
        Nt = [
          'abort',
          'abort',
          Tt,
          'animationEnd',
          Pt,
          'animationIteration',
          Rt,
          'animationStart',
          'canplay',
          'canPlay',
          'canplaythrough',
          'canPlayThrough',
          'durationchange',
          'durationChange',
          'emptied',
          'emptied',
          'encrypted',
          'encrypted',
          'ended',
          'ended',
          'error',
          'error',
          'gotpointercapture',
          'gotPointerCapture',
          'load',
          'load',
          'loadeddata',
          'loadedData',
          'loadedmetadata',
          'loadedMetadata',
          'loadstart',
          'loadStart',
          'lostpointercapture',
          'lostPointerCapture',
          'playing',
          'playing',
          'progress',
          'progress',
          'seeking',
          'seeking',
          'stalled',
          'stalled',
          'suspend',
          'suspend',
          'timeupdate',
          'timeUpdate',
          At,
          'transitionEnd',
          'waiting',
          'waiting',
        ];
      function Ot(e, t) {
        for (var n = 0; n < e.length; n += 2) {
          var r = e[n],
            i = e[n + 1];
          (i = 'on' + (i[0].toUpperCase() + i.slice(1))), Dt.set(r, t), Lt.set(r, i), c(i, [r]);
        }
      }
      (0, a.unstable_now)();
      var zt = 8;
      function It(e) {
        if (0 != (1 & e)) return (zt = 15), 1;
        if (0 != (2 & e)) return (zt = 14), 2;
        if (0 != (4 & e)) return (zt = 13), 4;
        var t = 24 & e;
        return 0 !== t
          ? ((zt = 12), t)
          : 0 != (32 & e)
          ? ((zt = 11), 32)
          : 0 !== (t = 192 & e)
          ? ((zt = 10), t)
          : 0 != (256 & e)
          ? ((zt = 9), 256)
          : 0 !== (t = 3584 & e)
          ? ((zt = 8), t)
          : 0 != (4096 & e)
          ? ((zt = 7), 4096)
          : 0 !== (t = 4186112 & e)
          ? ((zt = 6), t)
          : 0 !== (t = 62914560 & e)
          ? ((zt = 5), t)
          : 67108864 & e
          ? ((zt = 4), 67108864)
          : 0 != (134217728 & e)
          ? ((zt = 3), 134217728)
          : 0 !== (t = 805306368 & e)
          ? ((zt = 2), t)
          : 0 != (1073741824 & e)
          ? ((zt = 1), 1073741824)
          : ((zt = 8), e);
      }
      function Mt(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return (zt = 0);
        var r = 0,
          i = 0,
          a = e.expiredLanes,
          o = e.suspendedLanes,
          s = e.pingedLanes;
        if (0 !== a) (r = a), (i = zt = 15);
        else if (0 !== (a = 134217727 & n)) {
          var l = a & ~o;
          0 !== l ? ((r = It(l)), (i = zt)) : 0 !== (s &= a) && ((r = It(s)), (i = zt));
        } else 0 !== (a = n & ~o) ? ((r = It(a)), (i = zt)) : 0 !== s && ((r = It(s)), (i = zt));
        if (0 === r) return 0;
        if (((r = n & (((0 > (r = 31 - Ht(r)) ? 0 : 1 << r) << 1) - 1)), 0 !== t && t !== r && 0 == (t & o))) {
          if ((It(t), i <= zt)) return t;
          zt = i;
        }
        if (0 !== (t = e.entangledLanes))
          for (e = e.entanglements, t &= r; 0 < t; ) (i = 1 << (n = 31 - Ht(t))), (r |= e[n]), (t &= ~i);
        return r;
      }
      function Ft(e) {
        return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
      }
      function Bt(e, t) {
        switch (e) {
          case 15:
            return 1;
          case 14:
            return 2;
          case 12:
            return 0 === (e = jt(24 & ~t)) ? Bt(10, t) : e;
          case 10:
            return 0 === (e = jt(192 & ~t)) ? Bt(8, t) : e;
          case 8:
            return 0 === (e = jt(3584 & ~t)) && 0 === (e = jt(4186112 & ~t)) && (e = 512), e;
          case 2:
            return 0 === (t = jt(805306368 & ~t)) && (t = 268435456), t;
        }
        throw Error(o(358, e));
      }
      function jt(e) {
        return e & -e;
      }
      function Ut(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function $t(e, t, n) {
        e.pendingLanes |= t;
        var r = t - 1;
        (e.suspendedLanes &= r), (e.pingedLanes &= r), ((e = e.eventTimes)[(t = 31 - Ht(t))] = n);
      }
      var Ht = Math.clz32
          ? Math.clz32
          : function (e) {
              return 0 === e ? 32 : (31 - ((qt(e) / Vt) | 0)) | 0;
            },
        qt = Math.log,
        Vt = Math.LN2;
      var Gt = a.unstable_UserBlockingPriority,
        Zt = a.unstable_runWithPriority,
        Wt = !0;
      function Kt(e, t, n, r) {
        Ie || Oe();
        var i = Qt,
          a = Ie;
        Ie = !0;
        try {
          Ne(i, e, t, n, r);
        } finally {
          (Ie = a) || Fe();
        }
      }
      function Yt(e, t, n, r) {
        Zt(Gt, Qt.bind(null, e, t, n, r));
      }
      function Qt(e, t, n, r) {
        var i;
        if (Wt)
          if ((i = 0 == (4 & t)) && 0 < at.length && -1 < ft.indexOf(e)) (e = pt(null, e, t, n, r)), at.push(e);
          else {
            var a = Xt(e, t, n, r);
            if (null === a) i && mt(e, r);
            else {
              if (i) {
                if (-1 < ft.indexOf(e)) return (e = pt(a, e, t, n, r)), void at.push(e);
                if (
                  (function (e, t, n, r, i) {
                    switch (t) {
                      case 'focusin':
                        return (ot = ht(ot, e, t, n, r, i)), !0;
                      case 'dragenter':
                        return (st = ht(st, e, t, n, r, i)), !0;
                      case 'mouseover':
                        return (lt = ht(lt, e, t, n, r, i)), !0;
                      case 'pointerover':
                        var a = i.pointerId;
                        return ct.set(a, ht(ct.get(a) || null, e, t, n, r, i)), !0;
                      case 'gotpointercapture':
                        return (a = i.pointerId), dt.set(a, ht(dt.get(a) || null, e, t, n, r, i)), !0;
                    }
                    return !1;
                  })(a, e, t, n, r)
                )
                  return;
                mt(e, r);
              }
              Or(e, t, r, null, n);
            }
          }
      }
      function Xt(e, t, n, r) {
        var i = _e(r);
        if (null !== (i = ti(i))) {
          var a = Ke(i);
          if (null === a) i = null;
          else {
            var o = a.tag;
            if (13 === o) {
              if (null !== (i = Ye(a))) return i;
              i = null;
            } else if (3 === o) {
              if (a.stateNode.hydrate) return 3 === a.tag ? a.stateNode.containerInfo : null;
              i = null;
            } else a !== i && (i = null);
          }
        }
        return Or(e, t, r, i, n), null;
      }
      var Jt = null,
        en = null,
        tn = null;
      function nn() {
        if (tn) return tn;
        var e,
          t,
          n = en,
          r = n.length,
          i = 'value' in Jt ? Jt.value : Jt.textContent,
          a = i.length;
        for (e = 0; e < r && n[e] === i[e]; e++);
        var o = r - e;
        for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
        return (tn = i.slice(e, 1 < t ? 1 - t : void 0));
      }
      function rn(e) {
        var t = e.keyCode;
        return (
          'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      function an() {
        return !0;
      }
      function on() {
        return !1;
      }
      function sn(e) {
        function t(t, n, r, i, a) {
          for (var o in ((this._reactName = t),
          (this._targetInst = r),
          (this.type = n),
          (this.nativeEvent = i),
          (this.target = a),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
          return (
            (this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue)
              ? an
              : on),
            (this.isPropagationStopped = on),
            this
          );
        }
        return (
          i(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e &&
                (e.preventDefault ? e.preventDefault() : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
                (this.isDefaultPrevented = an));
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e &&
                (e.stopPropagation ? e.stopPropagation() : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                (this.isPropagationStopped = an));
            },
            persist: function () {},
            isPersistent: an,
          }),
          t
        );
      }
      var ln,
        cn,
        dn,
        un = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        fn = sn(un),
        pn = i({}, un, { view: 0, detail: 0 }),
        mn = sn(pn),
        hn = i({}, pn, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: Tn,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return 'movementX' in e
              ? e.movementX
              : (e !== dn &&
                  (dn && 'mousemove' === e.type
                    ? ((ln = e.screenX - dn.screenX), (cn = e.screenY - dn.screenY))
                    : (cn = ln = 0),
                  (dn = e)),
                ln);
          },
          movementY: function (e) {
            return 'movementY' in e ? e.movementY : cn;
          },
        }),
        gn = sn(hn),
        bn = sn(i({}, hn, { dataTransfer: 0 })),
        vn = sn(i({}, pn, { relatedTarget: 0 })),
        yn = sn(i({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
        kn = i({}, un, {
          clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
          },
        }),
        wn = sn(kn),
        Sn = sn(i({}, un, { data: 0 })),
        En = {
          Esc: 'Escape',
          Spacebar: ' ',
          Left: 'ArrowLeft',
          Up: 'ArrowUp',
          Right: 'ArrowRight',
          Down: 'ArrowDown',
          Del: 'Delete',
          Win: 'OS',
          Menu: 'ContextMenu',
          Apps: 'ContextMenu',
          Scroll: 'ScrollLock',
          MozPrintableKey: 'Unidentified',
        },
        Cn = {
          8: 'Backspace',
          9: 'Tab',
          12: 'Clear',
          13: 'Enter',
          16: 'Shift',
          17: 'Control',
          18: 'Alt',
          19: 'Pause',
          20: 'CapsLock',
          27: 'Escape',
          32: ' ',
          33: 'PageUp',
          34: 'PageDown',
          35: 'End',
          36: 'Home',
          37: 'ArrowLeft',
          38: 'ArrowUp',
          39: 'ArrowRight',
          40: 'ArrowDown',
          45: 'Insert',
          46: 'Delete',
          112: 'F1',
          113: 'F2',
          114: 'F3',
          115: 'F4',
          116: 'F5',
          117: 'F6',
          118: 'F7',
          119: 'F8',
          120: 'F9',
          121: 'F10',
          122: 'F11',
          123: 'F12',
          144: 'NumLock',
          145: 'ScrollLock',
          224: 'Meta',
        },
        _n = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
      function xn(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = _n[e]) && !!t[e];
      }
      function Tn() {
        return xn;
      }
      var Pn = i({}, pn, {
          key: function (e) {
            if (e.key) {
              var t = En[e.key] || e.key;
              if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
              ? 13 === (e = rn(e))
                ? 'Enter'
                : String.fromCharCode(e)
              : 'keydown' === e.type || 'keyup' === e.type
              ? Cn[e.keyCode] || 'Unidentified'
              : '';
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Tn,
          charCode: function (e) {
            return 'keypress' === e.type ? rn(e) : 0;
          },
          keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return 'keypress' === e.type ? rn(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
          },
        }),
        Rn = sn(Pn),
        An = sn(
          i({}, hn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          }),
        ),
        Ln = sn(
          i({}, pn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Tn,
          }),
        ),
        Dn = sn(i({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
        Nn = i({}, hn, {
          deltaX: function (e) {
            return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
          },
          deltaY: function (e) {
            return 'deltaY' in e
              ? e.deltaY
              : 'wheelDeltaY' in e
              ? -e.wheelDeltaY
              : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
        On = sn(Nn),
        zn = [9, 13, 27, 32],
        In = u && 'CompositionEvent' in window,
        Mn = null;
      u && 'documentMode' in document && (Mn = document.documentMode);
      var Fn = u && 'TextEvent' in window && !Mn,
        Bn = u && (!In || (Mn && 8 < Mn && 11 >= Mn)),
        jn = String.fromCharCode(32),
        Un = !1;
      function $n(e, t) {
        switch (e) {
          case 'keyup':
            return -1 !== zn.indexOf(t.keyCode);
          case 'keydown':
            return 229 !== t.keyCode;
          case 'keypress':
          case 'mousedown':
          case 'focusout':
            return !0;
          default:
            return !1;
        }
      }
      function Hn(e) {
        return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
      }
      var qn = !1;
      var Vn = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
      function Gn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return 'input' === t ? !!Vn[e.type] : 'textarea' === t;
      }
      function Zn(e, t, n, r) {
        Ae(r),
          0 < (t = Ir(t, 'onChange')).length &&
            ((n = new fn('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
      }
      var Wn = null,
        Kn = null;
      function Yn(e) {
        Pr(e, 0);
      }
      function Qn(e) {
        if (Q(ri(e))) return e;
      }
      function Xn(e, t) {
        if ('change' === e) return t;
      }
      var Jn = !1;
      if (u) {
        var er;
        if (u) {
          var tr = 'oninput' in document;
          if (!tr) {
            var nr = document.createElement('div');
            nr.setAttribute('oninput', 'return;'), (tr = 'function' == typeof nr.oninput);
          }
          er = tr;
        } else er = !1;
        Jn = er && (!document.documentMode || 9 < document.documentMode);
      }
      function rr() {
        Wn && (Wn.detachEvent('onpropertychange', ir), (Kn = Wn = null));
      }
      function ir(e) {
        if ('value' === e.propertyName && Qn(Kn)) {
          var t = [];
          if ((Zn(t, Kn, e, _e(e)), (e = Yn), Ie)) e(t);
          else {
            Ie = !0;
            try {
              De(e, t);
            } finally {
              (Ie = !1), Fe();
            }
          }
        }
      }
      function ar(e, t, n) {
        'focusin' === e ? (rr(), (Kn = n), (Wn = t).attachEvent('onpropertychange', ir)) : 'focusout' === e && rr();
      }
      function or(e) {
        if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Qn(Kn);
      }
      function sr(e, t) {
        if ('click' === e) return Qn(t);
      }
      function lr(e, t) {
        if ('input' === e || 'change' === e) return Qn(t);
      }
      var cr =
          'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
        dr = Object.prototype.hasOwnProperty;
      function ur(e, t) {
        if (cr(e, t)) return !0;
        if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) if (!dr.call(t, n[r]) || !cr(e[n[r]], t[n[r]])) return !1;
        return !0;
      }
      function fr(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function pr(e, t) {
        var n,
          r = fr(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = fr(r);
        }
      }
      function mr(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? mr(e, t.parentNode)
                : 'contains' in e
                ? e.contains(t)
                : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function hr() {
        for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = 'string' == typeof t.contentWindow.location.href;
          } catch (r) {
            n = !1;
          }
          if (!n) break;
          t = X((e = t.contentWindow).document);
        }
        return t;
      }
      function gr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (('input' === t &&
            ('text' === e.type ||
              'search' === e.type ||
              'tel' === e.type ||
              'url' === e.type ||
              'password' === e.type)) ||
            'textarea' === t ||
            'true' === e.contentEditable)
        );
      }
      var br = u && 'documentMode' in document && 11 >= document.documentMode,
        vr = null,
        yr = null,
        kr = null,
        wr = !1;
      function Sr(e, t, n) {
        var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        wr ||
          null == vr ||
          vr !== X(r) ||
          ('selectionStart' in (r = vr) && gr(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                  .anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              }),
          (kr && ur(kr, r)) ||
            ((kr = r),
            0 < (r = Ir(yr, 'onSelect')).length &&
              ((t = new fn('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = vr))));
      }
      Ot(
        'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
          ' ',
        ),
        0,
      ),
        Ot(
          'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
            ' ',
          ),
          1,
        ),
        Ot(Nt, 2);
      for (
        var Er = 'change selectionchange textInput compositionstart compositionend compositionupdate'.split(' '),
          Cr = 0;
        Cr < Er.length;
        Cr++
      )
        Dt.set(Er[Cr], 0);
      d('onMouseEnter', ['mouseout', 'mouseover']),
        d('onMouseLeave', ['mouseout', 'mouseover']),
        d('onPointerEnter', ['pointerout', 'pointerover']),
        d('onPointerLeave', ['pointerout', 'pointerover']),
        c('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
        c(
          'onSelect',
          'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '),
        ),
        c('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
        c('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
        c('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
        c('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
      var _r =
          'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' ',
          ),
        xr = new Set('cancel close invalid load scroll toggle'.split(' ').concat(_r));
      function Tr(e, t, n) {
        var r = e.type || 'unknown-event';
        (e.currentTarget = n),
          (function (e, t, n, r, i, a, s, l, c) {
            if ((We.apply(this, arguments), He)) {
              if (!He) throw Error(o(198));
              var d = qe;
              (He = !1), (qe = null), Ve || ((Ve = !0), (Ge = d));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      function Pr(e, t) {
        t = 0 != (4 & t);
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            i = r.event;
          r = r.listeners;
          e: {
            var a = void 0;
            if (t)
              for (var o = r.length - 1; 0 <= o; o--) {
                var s = r[o],
                  l = s.instance,
                  c = s.currentTarget;
                if (((s = s.listener), l !== a && i.isPropagationStopped())) break e;
                Tr(i, s, c), (a = l);
              }
            else
              for (o = 0; o < r.length; o++) {
                if (
                  ((l = (s = r[o]).instance),
                  (c = s.currentTarget),
                  (s = s.listener),
                  l !== a && i.isPropagationStopped())
                )
                  break e;
                Tr(i, s, c), (a = l);
              }
          }
        }
        if (Ve) throw ((e = Ge), (Ve = !1), (Ge = null), e);
      }
      function Rr(e, t) {
        var n = ai(t),
          r = e + '__bubble';
        n.has(r) || (Nr(t, e, 2, !1), n.add(r));
      }
      var Ar = '_reactListening' + Math.random().toString(36).slice(2);
      function Lr(e) {
        e[Ar] ||
          ((e[Ar] = !0),
          s.forEach(function (t) {
            xr.has(t) || Dr(t, !1, e, null), Dr(t, !0, e, null);
          }));
      }
      function Dr(e, t, n, r) {
        var i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
          a = n;
        if (('selectionchange' === e && 9 !== n.nodeType && (a = n.ownerDocument), null !== r && !t && xr.has(e))) {
          if ('scroll' !== e) return;
          (i |= 2), (a = r);
        }
        var o = ai(a),
          s = e + '__' + (t ? 'capture' : 'bubble');
        o.has(s) || (t && (i |= 4), Nr(a, e, i, t), o.add(s));
      }
      function Nr(e, t, n, r) {
        var i = Dt.get(t);
        switch (void 0 === i ? 2 : i) {
          case 0:
            i = Kt;
            break;
          case 1:
            i = Yt;
            break;
          default:
            i = Qt;
        }
        (n = i.bind(null, t, n, e)),
          (i = void 0),
          !je || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (i = !0),
          r
            ? void 0 !== i
              ? e.addEventListener(t, n, { capture: !0, passive: i })
              : e.addEventListener(t, n, !0)
            : void 0 !== i
            ? e.addEventListener(t, n, { passive: i })
            : e.addEventListener(t, n, !1);
      }
      function Or(e, t, n, r, i) {
        var a = r;
        if (0 == (1 & t) && 0 == (2 & t) && null !== r)
          e: for (;;) {
            if (null === r) return;
            var o = r.tag;
            if (3 === o || 4 === o) {
              var s = r.stateNode.containerInfo;
              if (s === i || (8 === s.nodeType && s.parentNode === i)) break;
              if (4 === o)
                for (o = r.return; null !== o; ) {
                  var l = o.tag;
                  if (
                    (3 === l || 4 === l) &&
                    ((l = o.stateNode.containerInfo) === i || (8 === l.nodeType && l.parentNode === i))
                  )
                    return;
                  o = o.return;
                }
              for (; null !== s; ) {
                if (null === (o = ti(s))) return;
                if (5 === (l = o.tag) || 6 === l) {
                  r = a = o;
                  continue e;
                }
                s = s.parentNode;
              }
            }
            r = r.return;
          }
        !(function (e, t, n) {
          if (Me) return e(t, n);
          Me = !0;
          try {
            return ze(e, t, n);
          } finally {
            (Me = !1), Fe();
          }
        })(function () {
          var r = a,
            i = _e(n),
            o = [];
          e: {
            var s = Lt.get(e);
            if (void 0 !== s) {
              var l = fn,
                c = e;
              switch (e) {
                case 'keypress':
                  if (0 === rn(n)) break e;
                case 'keydown':
                case 'keyup':
                  l = Rn;
                  break;
                case 'focusin':
                  (c = 'focus'), (l = vn);
                  break;
                case 'focusout':
                  (c = 'blur'), (l = vn);
                  break;
                case 'beforeblur':
                case 'afterblur':
                  l = vn;
                  break;
                case 'click':
                  if (2 === n.button) break e;
                case 'auxclick':
                case 'dblclick':
                case 'mousedown':
                case 'mousemove':
                case 'mouseup':
                case 'mouseout':
                case 'mouseover':
                case 'contextmenu':
                  l = gn;
                  break;
                case 'drag':
                case 'dragend':
                case 'dragenter':
                case 'dragexit':
                case 'dragleave':
                case 'dragover':
                case 'dragstart':
                case 'drop':
                  l = bn;
                  break;
                case 'touchcancel':
                case 'touchend':
                case 'touchmove':
                case 'touchstart':
                  l = Ln;
                  break;
                case Tt:
                case Pt:
                case Rt:
                  l = yn;
                  break;
                case At:
                  l = Dn;
                  break;
                case 'scroll':
                  l = mn;
                  break;
                case 'wheel':
                  l = On;
                  break;
                case 'copy':
                case 'cut':
                case 'paste':
                  l = wn;
                  break;
                case 'gotpointercapture':
                case 'lostpointercapture':
                case 'pointercancel':
                case 'pointerdown':
                case 'pointermove':
                case 'pointerout':
                case 'pointerover':
                case 'pointerup':
                  l = An;
              }
              var d = 0 != (4 & t),
                u = !d && 'scroll' === e,
                f = d ? (null !== s ? s + 'Capture' : null) : s;
              d = [];
              for (var p, m = r; null !== m; ) {
                var h = (p = m).stateNode;
                if (
                  (5 === p.tag && null !== h && ((p = h), null !== f && null != (h = Be(m, f)) && d.push(zr(m, h, p))),
                  u)
                )
                  break;
                m = m.return;
              }
              0 < d.length && ((s = new l(s, c, null, n, i)), o.push({ event: s, listeners: d }));
            }
          }
          if (0 == (7 & t)) {
            if (
              ((l = 'mouseout' === e || 'pointerout' === e),
              (!(s = 'mouseover' === e || 'pointerover' === e) ||
                0 != (16 & t) ||
                !(c = n.relatedTarget || n.fromElement) ||
                (!ti(c) && !c[Jr])) &&
                (l || s) &&
                ((s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window),
                l
                  ? ((l = r),
                    null !== (c = (c = n.relatedTarget || n.toElement) ? ti(c) : null) &&
                      (c !== (u = Ke(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                      (c = null))
                  : ((l = null), (c = r)),
                l !== c))
            ) {
              if (
                ((d = gn),
                (h = 'onMouseLeave'),
                (f = 'onMouseEnter'),
                (m = 'mouse'),
                ('pointerout' !== e && 'pointerover' !== e) ||
                  ((d = An), (h = 'onPointerLeave'), (f = 'onPointerEnter'), (m = 'pointer')),
                (u = null == l ? s : ri(l)),
                (p = null == c ? s : ri(c)),
                ((s = new d(h, m + 'leave', l, n, i)).target = u),
                (s.relatedTarget = p),
                (h = null),
                ti(i) === r && (((d = new d(f, m + 'enter', c, n, i)).target = p), (d.relatedTarget = u), (h = d)),
                (u = h),
                l && c)
              )
                e: {
                  for (f = c, m = 0, p = d = l; p; p = Mr(p)) m++;
                  for (p = 0, h = f; h; h = Mr(h)) p++;
                  for (; 0 < m - p; ) (d = Mr(d)), m--;
                  for (; 0 < p - m; ) (f = Mr(f)), p--;
                  for (; m--; ) {
                    if (d === f || (null !== f && d === f.alternate)) break e;
                    (d = Mr(d)), (f = Mr(f));
                  }
                  d = null;
                }
              else d = null;
              null !== l && Fr(o, s, l, d, !1), null !== c && null !== u && Fr(o, u, c, d, !0);
            }
            if (
              'select' === (l = (s = r ? ri(r) : window).nodeName && s.nodeName.toLowerCase()) ||
              ('input' === l && 'file' === s.type)
            )
              var g = Xn;
            else if (Gn(s))
              if (Jn) g = lr;
              else {
                g = or;
                var b = ar;
              }
            else
              (l = s.nodeName) &&
                'input' === l.toLowerCase() &&
                ('checkbox' === s.type || 'radio' === s.type) &&
                (g = sr);
            switch (
              (g && (g = g(e, r))
                ? Zn(o, g, n, i)
                : (b && b(e, s, r),
                  'focusout' === e &&
                    (b = s._wrapperState) &&
                    b.controlled &&
                    'number' === s.type &&
                    ie(s, 'number', s.value)),
              (b = r ? ri(r) : window),
              e)
            ) {
              case 'focusin':
                (Gn(b) || 'true' === b.contentEditable) && ((vr = b), (yr = r), (kr = null));
                break;
              case 'focusout':
                kr = yr = vr = null;
                break;
              case 'mousedown':
                wr = !0;
                break;
              case 'contextmenu':
              case 'mouseup':
              case 'dragend':
                (wr = !1), Sr(o, n, i);
                break;
              case 'selectionchange':
                if (br) break;
              case 'keydown':
              case 'keyup':
                Sr(o, n, i);
            }
            var v;
            if (In)
              e: {
                switch (e) {
                  case 'compositionstart':
                    var y = 'onCompositionStart';
                    break e;
                  case 'compositionend':
                    y = 'onCompositionEnd';
                    break e;
                  case 'compositionupdate':
                    y = 'onCompositionUpdate';
                    break e;
                }
                y = void 0;
              }
            else
              qn
                ? $n(e, n) && (y = 'onCompositionEnd')
                : 'keydown' === e && 229 === n.keyCode && (y = 'onCompositionStart');
            y &&
              (Bn &&
                'ko' !== n.locale &&
                (qn || 'onCompositionStart' !== y
                  ? 'onCompositionEnd' === y && qn && (v = nn())
                  : ((en = 'value' in (Jt = i) ? Jt.value : Jt.textContent), (qn = !0))),
              0 < (b = Ir(r, y)).length &&
                ((y = new Sn(y, e, null, n, i)),
                o.push({ event: y, listeners: b }),
                v ? (y.data = v) : null !== (v = Hn(n)) && (y.data = v))),
              (v = Fn
                ? (function (e, t) {
                    switch (e) {
                      case 'compositionend':
                        return Hn(t);
                      case 'keypress':
                        return 32 !== t.which ? null : ((Un = !0), jn);
                      case 'textInput':
                        return (e = t.data) === jn && Un ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if (qn)
                      return 'compositionend' === e || (!In && $n(e, t))
                        ? ((e = nn()), (tn = en = Jt = null), (qn = !1), e)
                        : null;
                    switch (e) {
                      case 'paste':
                      default:
                        return null;
                      case 'keypress':
                        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case 'compositionend':
                        return Bn && 'ko' !== t.locale ? null : t.data;
                    }
                  })(e, n)) &&
                0 < (r = Ir(r, 'onBeforeInput')).length &&
                ((i = new Sn('onBeforeInput', 'beforeinput', null, n, i)),
                o.push({ event: i, listeners: r }),
                (i.data = v));
          }
          Pr(o, t);
        });
      }
      function zr(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function Ir(e, t) {
        for (var n = t + 'Capture', r = []; null !== e; ) {
          var i = e,
            a = i.stateNode;
          5 === i.tag &&
            null !== a &&
            ((i = a), null != (a = Be(e, n)) && r.unshift(zr(e, a, i)), null != (a = Be(e, t)) && r.push(zr(e, a, i))),
            (e = e.return);
        }
        return r;
      }
      function Mr(e) {
        if (null === e) return null;
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function Fr(e, t, n, r, i) {
        for (var a = t._reactName, o = []; null !== n && n !== r; ) {
          var s = n,
            l = s.alternate,
            c = s.stateNode;
          if (null !== l && l === r) break;
          5 === s.tag &&
            null !== c &&
            ((s = c),
            i
              ? null != (l = Be(n, a)) && o.unshift(zr(n, l, s))
              : i || (null != (l = Be(n, a)) && o.push(zr(n, l, s)))),
            (n = n.return);
        }
        0 !== o.length && e.push({ event: t, listeners: o });
      }
      function Br() {}
      var jr = null,
        Ur = null;
      function $r(e, t) {
        switch (e) {
          case 'button':
          case 'input':
          case 'select':
          case 'textarea':
            return !!t.autoFocus;
        }
        return !1;
      }
      function Hr(e, t) {
        return (
          'textarea' === e ||
          'option' === e ||
          'noscript' === e ||
          'string' == typeof t.children ||
          'number' == typeof t.children ||
          ('object' == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var qr = 'function' == typeof setTimeout ? setTimeout : void 0,
        Vr = 'function' == typeof clearTimeout ? clearTimeout : void 0;
      function Gr(e) {
        1 === e.nodeType ? (e.textContent = '') : 9 === e.nodeType && null != (e = e.body) && (e.textContent = '');
      }
      function Zr(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
        }
        return e;
      }
      function Wr(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ('$' === n || '$!' === n || '$?' === n) {
              if (0 === t) return e;
              t--;
            } else '/$' === n && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var Kr = 0;
      var Yr = Math.random().toString(36).slice(2),
        Qr = '__reactFiber$' + Yr,
        Xr = '__reactProps$' + Yr,
        Jr = '__reactContainer$' + Yr,
        ei = '__reactEvents$' + Yr;
      function ti(e) {
        var t = e[Qr];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[Jr] || n[Qr])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
              for (e = Wr(e); null !== e; ) {
                if ((n = e[Qr])) return n;
                e = Wr(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function ni(e) {
        return !(e = e[Qr] || e[Jr]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
      }
      function ri(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(o(33));
      }
      function ii(e) {
        return e[Xr] || null;
      }
      function ai(e) {
        var t = e[ei];
        return void 0 === t && (t = e[ei] = new Set()), t;
      }
      var oi = [],
        si = -1;
      function li(e) {
        return { current: e };
      }
      function ci(e) {
        0 > si || ((e.current = oi[si]), (oi[si] = null), si--);
      }
      function di(e, t) {
        si++, (oi[si] = e.current), (e.current = t);
      }
      var ui = {},
        fi = li(ui),
        pi = li(!1),
        mi = ui;
      function hi(e, t) {
        var n = e.type.contextTypes;
        if (!n) return ui;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var i,
          a = {};
        for (i in n) a[i] = t[i];
        return (
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = a)),
          a
        );
      }
      function gi(e) {
        return null != (e = e.childContextTypes);
      }
      function bi() {
        ci(pi), ci(fi);
      }
      function vi(e, t, n) {
        if (fi.current !== ui) throw Error(o(168));
        di(fi, t), di(pi, n);
      }
      function yi(e, t, n) {
        var r = e.stateNode;
        if (((e = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
        for (var a in (r = r.getChildContext())) if (!(a in e)) throw Error(o(108, Z(t) || 'Unknown', a));
        return i({}, n, r);
      }
      function ki(e) {
        return (
          (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ui),
          (mi = fi.current),
          di(fi, e),
          di(pi, pi.current),
          !0
        );
      }
      function wi(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(o(169));
        n ? ((e = yi(e, t, mi)), (r.__reactInternalMemoizedMergedChildContext = e), ci(pi), ci(fi), di(fi, e)) : ci(pi),
          di(pi, n);
      }
      var Si = null,
        Ei = null,
        Ci = a.unstable_runWithPriority,
        _i = a.unstable_scheduleCallback,
        xi = a.unstable_cancelCallback,
        Ti = a.unstable_shouldYield,
        Pi = a.unstable_requestPaint,
        Ri = a.unstable_now,
        Ai = a.unstable_getCurrentPriorityLevel,
        Li = a.unstable_ImmediatePriority,
        Di = a.unstable_UserBlockingPriority,
        Ni = a.unstable_NormalPriority,
        Oi = a.unstable_LowPriority,
        zi = a.unstable_IdlePriority,
        Ii = {},
        Mi = void 0 !== Pi ? Pi : function () {},
        Fi = null,
        Bi = null,
        ji = !1,
        Ui = Ri(),
        $i =
          1e4 > Ui
            ? Ri
            : function () {
                return Ri() - Ui;
              };
      function Hi() {
        switch (Ai()) {
          case Li:
            return 99;
          case Di:
            return 98;
          case Ni:
            return 97;
          case Oi:
            return 96;
          case zi:
            return 95;
          default:
            throw Error(o(332));
        }
      }
      function qi(e) {
        switch (e) {
          case 99:
            return Li;
          case 98:
            return Di;
          case 97:
            return Ni;
          case 96:
            return Oi;
          case 95:
            return zi;
          default:
            throw Error(o(332));
        }
      }
      function Vi(e, t) {
        return (e = qi(e)), Ci(e, t);
      }
      function Gi(e, t, n) {
        return (e = qi(e)), _i(e, t, n);
      }
      function Zi() {
        if (null !== Bi) {
          var e = Bi;
          (Bi = null), xi(e);
        }
        Wi();
      }
      function Wi() {
        if (!ji && null !== Fi) {
          ji = !0;
          var e = 0;
          try {
            var t = Fi;
            Vi(99, function () {
              for (; e < t.length; e++) {
                var n = t[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
            }),
              (Fi = null);
          } catch (n) {
            throw (null !== Fi && (Fi = Fi.slice(e + 1)), _i(Li, Zi), n);
          } finally {
            ji = !1;
          }
        }
      }
      var Ki = w.ReactCurrentBatchConfig;
      function Yi(e, t) {
        if (e && e.defaultProps) {
          for (var n in ((t = i({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      var Qi = li(null),
        Xi = null,
        Ji = null,
        ea = null;
      function ta() {
        ea = Ji = Xi = null;
      }
      function na(e) {
        var t = Qi.current;
        ci(Qi), (e.type._context._currentValue = t);
      }
      function ra(e, t) {
        for (; null !== e; ) {
          var n = e.alternate;
          if ((e.childLanes & t) === t) {
            if (null === n || (n.childLanes & t) === t) break;
            n.childLanes |= t;
          } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
          e = e.return;
        }
      }
      function ia(e, t) {
        (Xi = e),
          (ea = Ji = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (Io = !0), (e.firstContext = null));
      }
      function aa(e, t) {
        if (ea !== e && !1 !== t && 0 !== t)
          if (
            (('number' == typeof t && 1073741823 !== t) || ((ea = e), (t = 1073741823)),
            (t = { context: e, observedBits: t, next: null }),
            null === Ji)
          ) {
            if (null === Xi) throw Error(o(308));
            (Ji = t), (Xi.dependencies = { lanes: 0, firstContext: t, responders: null });
          } else Ji = Ji.next = t;
        return e._currentValue;
      }
      var oa = !1;
      function sa(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null },
          effects: null,
        };
      }
      function la(e, t) {
        (e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              effects: e.effects,
            });
      }
      function ca(e, t) {
        return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
      }
      function da(e, t) {
        if (null !== (e = e.updateQueue)) {
          var n = (e = e.shared).pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
        }
      }
      function ua(e, t) {
        var n = e.updateQueue,
          r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var i = null,
            a = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var o = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null,
              };
              null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
            } while (null !== n);
            null === a ? (i = a = t) : (a = a.next = t);
          } else i = a = t;
          return (
            (n = {
              baseState: r.baseState,
              firstBaseUpdate: i,
              lastBaseUpdate: a,
              shared: r.shared,
              effects: r.effects,
            }),
            void (e.updateQueue = n)
          );
        }
        null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
      }
      function fa(e, t, n, r) {
        var a = e.updateQueue;
        oa = !1;
        var o = a.firstBaseUpdate,
          s = a.lastBaseUpdate,
          l = a.shared.pending;
        if (null !== l) {
          a.shared.pending = null;
          var c = l,
            d = c.next;
          (c.next = null), null === s ? (o = d) : (s.next = d), (s = c);
          var u = e.alternate;
          if (null !== u) {
            var f = (u = u.updateQueue).lastBaseUpdate;
            f !== s && (null === f ? (u.firstBaseUpdate = d) : (f.next = d), (u.lastBaseUpdate = c));
          }
        }
        if (null !== o) {
          for (f = a.baseState, s = 0, u = d = c = null; ; ) {
            l = o.lane;
            var p = o.eventTime;
            if ((r & l) === l) {
              null !== u &&
                (u = u.next =
                  { eventTime: p, lane: 0, tag: o.tag, payload: o.payload, callback: o.callback, next: null });
              e: {
                var m = e,
                  h = o;
                switch (((l = t), (p = n), h.tag)) {
                  case 1:
                    if ('function' == typeof (m = h.payload)) {
                      f = m.call(p, f, l);
                      break e;
                    }
                    f = m;
                    break e;
                  case 3:
                    m.flags = (-4097 & m.flags) | 64;
                  case 0:
                    if (null == (l = 'function' == typeof (m = h.payload) ? m.call(p, f, l) : m)) break e;
                    f = i({}, f, l);
                    break e;
                  case 2:
                    oa = !0;
                }
              }
              null !== o.callback && ((e.flags |= 32), null === (l = a.effects) ? (a.effects = [o]) : l.push(o));
            } else
              (p = { eventTime: p, lane: l, tag: o.tag, payload: o.payload, callback: o.callback, next: null }),
                null === u ? ((d = u = p), (c = f)) : (u = u.next = p),
                (s |= l);
            if (null === (o = o.next)) {
              if (null === (l = a.shared.pending)) break;
              (o = l.next), (l.next = null), (a.lastBaseUpdate = l), (a.shared.pending = null);
            }
          }
          null === u && (c = f),
            (a.baseState = c),
            (a.firstBaseUpdate = d),
            (a.lastBaseUpdate = u),
            (Us |= s),
            (e.lanes = s),
            (e.memoizedState = f);
        }
      }
      function pa(e, t, n) {
        if (((e = t.effects), (t.effects = null), null !== e))
          for (t = 0; t < e.length; t++) {
            var r = e[t],
              i = r.callback;
            if (null !== i) {
              if (((r.callback = null), (r = n), 'function' != typeof i)) throw Error(o(191, i));
              i.call(r);
            }
          }
      }
      var ma = new r.Component().refs;
      function ha(e, t, n, r) {
        (n = null == (n = n(r, (t = e.memoizedState))) ? t : i({}, t, n)),
          (e.memoizedState = n),
          0 === e.lanes && (e.updateQueue.baseState = n);
      }
      var ga = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && Ke(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var r = fl(),
            i = pl(e),
            a = ca(r, i);
          (a.payload = t), null != n && (a.callback = n), da(e, a), ml(e, i, r);
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var r = fl(),
            i = pl(e),
            a = ca(r, i);
          (a.tag = 1), (a.payload = t), null != n && (a.callback = n), da(e, a), ml(e, i, r);
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = fl(),
            r = pl(e),
            i = ca(n, r);
          (i.tag = 2), null != t && (i.callback = t), da(e, i), ml(e, r, n);
        },
      };
      function ba(e, t, n, r, i, a, o) {
        return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, a, o)
          : !t.prototype || !t.prototype.isPureReactComponent || !ur(n, r) || !ur(i, a);
      }
      function va(e, t, n) {
        var r = !1,
          i = ui,
          a = t.contextType;
        return (
          'object' == typeof a && null !== a
            ? (a = aa(a))
            : ((i = gi(t) ? mi : fi.current), (a = (r = null != (r = t.contextTypes)) ? hi(e, i) : ui)),
          (t = new t(n, a)),
          (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = ga),
          (e.stateNode = t),
          (t._reactInternals = e),
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
            (e.__reactInternalMemoizedMaskedChildContext = a)),
          t
        );
      }
      function ya(e, t, n, r) {
        (e = t.state),
          'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
          'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && ga.enqueueReplaceState(t, t.state, null);
      }
      function ka(e, t, n, r) {
        var i = e.stateNode;
        (i.props = n), (i.state = e.memoizedState), (i.refs = ma), sa(e);
        var a = t.contextType;
        'object' == typeof a && null !== a
          ? (i.context = aa(a))
          : ((a = gi(t) ? mi : fi.current), (i.context = hi(e, a))),
          fa(e, n, i, r),
          (i.state = e.memoizedState),
          'function' == typeof (a = t.getDerivedStateFromProps) && (ha(e, t, a, n), (i.state = e.memoizedState)),
          'function' == typeof t.getDerivedStateFromProps ||
            'function' == typeof i.getSnapshotBeforeUpdate ||
            ('function' != typeof i.UNSAFE_componentWillMount && 'function' != typeof i.componentWillMount) ||
            ((t = i.state),
            'function' == typeof i.componentWillMount && i.componentWillMount(),
            'function' == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(),
            t !== i.state && ga.enqueueReplaceState(i, i.state, null),
            fa(e, n, i, r),
            (i.state = e.memoizedState)),
          'function' == typeof i.componentDidMount && (e.flags |= 4);
      }
      var wa = Array.isArray;
      function Sa(e, t, n) {
        if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(o(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(o(147, e));
            var i = '' + e;
            return null !== t && null !== t.ref && 'function' == typeof t.ref && t.ref._stringRef === i
              ? t.ref
              : ((t = function (e) {
                  var t = r.refs;
                  t === ma && (t = r.refs = {}), null === e ? delete t[i] : (t[i] = e);
                }),
                (t._stringRef = i),
                t);
          }
          if ('string' != typeof e) throw Error(o(284));
          if (!n._owner) throw Error(o(290, e));
        }
        return e;
      }
      function Ea(e, t) {
        if ('textarea' !== e.type)
          throw Error(
            o(
              31,
              '[object Object]' === Object.prototype.toString.call(t)
                ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                : t,
            ),
          );
      }
      function Ca(e) {
        function t(t, n) {
          if (e) {
            var r = t.lastEffect;
            null !== r ? ((r.nextEffect = n), (t.lastEffect = n)) : (t.firstEffect = t.lastEffect = n),
              (n.nextEffect = null),
              (n.flags = 8);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) t(n, r), (r = r.sibling);
          return null;
        }
        function r(e, t) {
          for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
          return e;
        }
        function i(e, t) {
          return ((e = Gl(e, t)).index = 0), (e.sibling = null), e;
        }
        function a(t, n, r) {
          return (
            (t.index = r),
            e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.flags = 2), n) : r) : ((t.flags = 2), n)) : n
          );
        }
        function s(t) {
          return e && null === t.alternate && (t.flags = 2), t;
        }
        function l(e, t, n, r) {
          return null === t || 6 !== t.tag ? (((t = Yl(n, e.mode, r)).return = e), t) : (((t = i(t, n)).return = e), t);
        }
        function c(e, t, n, r) {
          return null !== t && t.elementType === n.type
            ? (((r = i(t, n.props)).ref = Sa(e, t, n)), (r.return = e), r)
            : (((r = Zl(n.type, n.key, n.props, null, e.mode, r)).ref = Sa(e, t, n)), (r.return = e), r);
        }
        function d(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Ql(n, e.mode, r)).return = e), t)
            : (((t = i(t, n.children || [])).return = e), t);
        }
        function u(e, t, n, r, a) {
          return null === t || 7 !== t.tag
            ? (((t = Wl(n, e.mode, r, a)).return = e), t)
            : (((t = i(t, n)).return = e), t);
        }
        function f(e, t, n) {
          if ('string' == typeof t || 'number' == typeof t) return ((t = Yl('' + t, e.mode, n)).return = e), t;
          if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
              case S:
                return ((n = Zl(t.type, t.key, t.props, null, e.mode, n)).ref = Sa(e, null, t)), (n.return = e), n;
              case E:
                return ((t = Ql(t, e.mode, n)).return = e), t;
            }
            if (wa(t) || $(t)) return ((t = Wl(t, e.mode, n, null)).return = e), t;
            Ea(e, t);
          }
          return null;
        }
        function p(e, t, n, r) {
          var i = null !== t ? t.key : null;
          if ('string' == typeof n || 'number' == typeof n) return null !== i ? null : l(e, t, '' + n, r);
          if ('object' == typeof n && null !== n) {
            switch (n.$$typeof) {
              case S:
                return n.key === i ? (n.type === C ? u(e, t, n.props.children, r, i) : c(e, t, n, r)) : null;
              case E:
                return n.key === i ? d(e, t, n, r) : null;
            }
            if (wa(n) || $(n)) return null !== i ? null : u(e, t, n, r, null);
            Ea(e, n);
          }
          return null;
        }
        function m(e, t, n, r, i) {
          if ('string' == typeof r || 'number' == typeof r) return l(t, (e = e.get(n) || null), '' + r, i);
          if ('object' == typeof r && null !== r) {
            switch (r.$$typeof) {
              case S:
                return (
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r.type === C ? u(t, e, r.props.children, i, r.key) : c(t, e, r, i)
                );
              case E:
                return d(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
            }
            if (wa(r) || $(r)) return u(t, (e = e.get(n) || null), r, i, null);
            Ea(t, r);
          }
          return null;
        }
        function h(i, o, s, l) {
          for (var c = null, d = null, u = o, h = (o = 0), g = null; null !== u && h < s.length; h++) {
            u.index > h ? ((g = u), (u = null)) : (g = u.sibling);
            var b = p(i, u, s[h], l);
            if (null === b) {
              null === u && (u = g);
              break;
            }
            e && u && null === b.alternate && t(i, u),
              (o = a(b, o, h)),
              null === d ? (c = b) : (d.sibling = b),
              (d = b),
              (u = g);
          }
          if (h === s.length) return n(i, u), c;
          if (null === u) {
            for (; h < s.length; h++)
              null !== (u = f(i, s[h], l)) && ((o = a(u, o, h)), null === d ? (c = u) : (d.sibling = u), (d = u));
            return c;
          }
          for (u = r(i, u); h < s.length; h++)
            null !== (g = m(u, i, h, s[h], l)) &&
              (e && null !== g.alternate && u.delete(null === g.key ? h : g.key),
              (o = a(g, o, h)),
              null === d ? (c = g) : (d.sibling = g),
              (d = g));
          return (
            e &&
              u.forEach(function (e) {
                return t(i, e);
              }),
            c
          );
        }
        function g(i, s, l, c) {
          var d = $(l);
          if ('function' != typeof d) throw Error(o(150));
          if (null == (l = d.call(l))) throw Error(o(151));
          for (
            var u = (d = null), h = s, g = (s = 0), b = null, v = l.next();
            null !== h && !v.done;
            g++, v = l.next()
          ) {
            h.index > g ? ((b = h), (h = null)) : (b = h.sibling);
            var y = p(i, h, v.value, c);
            if (null === y) {
              null === h && (h = b);
              break;
            }
            e && h && null === y.alternate && t(i, h),
              (s = a(y, s, g)),
              null === u ? (d = y) : (u.sibling = y),
              (u = y),
              (h = b);
          }
          if (v.done) return n(i, h), d;
          if (null === h) {
            for (; !v.done; g++, v = l.next())
              null !== (v = f(i, v.value, c)) && ((s = a(v, s, g)), null === u ? (d = v) : (u.sibling = v), (u = v));
            return d;
          }
          for (h = r(i, h); !v.done; g++, v = l.next())
            null !== (v = m(h, i, g, v.value, c)) &&
              (e && null !== v.alternate && h.delete(null === v.key ? g : v.key),
              (s = a(v, s, g)),
              null === u ? (d = v) : (u.sibling = v),
              (u = v));
          return (
            e &&
              h.forEach(function (e) {
                return t(i, e);
              }),
            d
          );
        }
        return function (e, r, a, l) {
          var c = 'object' == typeof a && null !== a && a.type === C && null === a.key;
          c && (a = a.props.children);
          var d = 'object' == typeof a && null !== a;
          if (d)
            switch (a.$$typeof) {
              case S:
                e: {
                  for (d = a.key, c = r; null !== c; ) {
                    if (c.key === d) {
                      if (7 === c.tag) {
                        if (a.type === C) {
                          n(e, c.sibling), ((r = i(c, a.props.children)).return = e), (e = r);
                          break e;
                        }
                      } else if (c.elementType === a.type) {
                        n(e, c.sibling), ((r = i(c, a.props)).ref = Sa(e, c, a)), (r.return = e), (e = r);
                        break e;
                      }
                      n(e, c);
                      break;
                    }
                    t(e, c), (c = c.sibling);
                  }
                  a.type === C
                    ? (((r = Wl(a.props.children, e.mode, l, a.key)).return = e), (e = r))
                    : (((l = Zl(a.type, a.key, a.props, null, e.mode, l)).ref = Sa(e, r, a)), (l.return = e), (e = l));
                }
                return s(e);
              case E:
                e: {
                  for (c = a.key; null !== r; ) {
                    if (r.key === c) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === a.containerInfo &&
                        r.stateNode.implementation === a.implementation
                      ) {
                        n(e, r.sibling), ((r = i(r, a.children || [])).return = e), (e = r);
                        break e;
                      }
                      n(e, r);
                      break;
                    }
                    t(e, r), (r = r.sibling);
                  }
                  ((r = Ql(a, e.mode, l)).return = e), (e = r);
                }
                return s(e);
            }
          if ('string' == typeof a || 'number' == typeof a)
            return (
              (a = '' + a),
              null !== r && 6 === r.tag
                ? (n(e, r.sibling), ((r = i(r, a)).return = e), (e = r))
                : (n(e, r), ((r = Yl(a, e.mode, l)).return = e), (e = r)),
              s(e)
            );
          if (wa(a)) return h(e, r, a, l);
          if ($(a)) return g(e, r, a, l);
          if ((d && Ea(e, a), void 0 === a && !c))
            switch (e.tag) {
              case 1:
              case 22:
              case 0:
              case 11:
              case 15:
                throw Error(o(152, Z(e.type) || 'Component'));
            }
          return n(e, r);
        };
      }
      var _a = Ca(!0),
        xa = Ca(!1),
        Ta = {},
        Pa = li(Ta),
        Ra = li(Ta),
        Aa = li(Ta);
      function La(e) {
        if (e === Ta) throw Error(o(174));
        return e;
      }
      function Da(e, t) {
        switch ((di(Aa, t), di(Ra, e), di(Pa, Ta), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : pe(null, '');
            break;
          default:
            t = pe((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
        }
        ci(Pa), di(Pa, t);
      }
      function Na() {
        ci(Pa), ci(Ra), ci(Aa);
      }
      function Oa(e) {
        La(Aa.current);
        var t = La(Pa.current),
          n = pe(t, e.type);
        t !== n && (di(Ra, e), di(Pa, n));
      }
      function za(e) {
        Ra.current === e && (ci(Pa), ci(Ra));
      }
      var Ia = li(0);
      function Ma(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)) return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (64 & t.flags)) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      var Fa = null,
        Ba = null,
        ja = !1;
      function Ua(e, t) {
        var n = ql(5, null, null, 0);
        (n.elementType = 'DELETED'),
          (n.type = 'DELETED'),
          (n.stateNode = t),
          (n.return = e),
          (n.flags = 8),
          null !== e.lastEffect
            ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n);
      }
      function $a(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
              ((e.stateNode = t), !0)
            );
          case 6:
            return null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) && ((e.stateNode = t), !0);
          default:
            return !1;
        }
      }
      function Ha(e) {
        if (ja) {
          var t = Ba;
          if (t) {
            var n = t;
            if (!$a(e, t)) {
              if (!(t = Zr(n.nextSibling)) || !$a(e, t))
                return (e.flags = (-1025 & e.flags) | 2), (ja = !1), void (Fa = e);
              Ua(Fa, n);
            }
            (Fa = e), (Ba = Zr(t.firstChild));
          } else (e.flags = (-1025 & e.flags) | 2), (ja = !1), (Fa = e);
        }
      }
      function qa(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
        Fa = e;
      }
      function Va(e) {
        if (e !== Fa) return !1;
        if (!ja) return qa(e), (ja = !0), !1;
        var t = e.type;
        if (5 !== e.tag || ('head' !== t && 'body' !== t && !Hr(t, e.memoizedProps)))
          for (t = Ba; t; ) Ua(e, t), (t = Zr(t.nextSibling));
        if ((qa(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ('/$' === n) {
                  if (0 === t) {
                    Ba = Zr(e.nextSibling);
                    break e;
                  }
                  t--;
                } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
              }
              e = e.nextSibling;
            }
            Ba = null;
          }
        } else Ba = Fa ? Zr(e.stateNode.nextSibling) : null;
        return !0;
      }
      function Ga() {
        (Ba = Fa = null), (ja = !1);
      }
      var Za = [];
      function Wa() {
        for (var e = 0; e < Za.length; e++) Za[e]._workInProgressVersionPrimary = null;
        Za.length = 0;
      }
      var Ka = w.ReactCurrentDispatcher,
        Ya = w.ReactCurrentBatchConfig,
        Qa = 0,
        Xa = null,
        Ja = null,
        eo = null,
        to = !1,
        no = !1;
      function ro() {
        throw Error(o(321));
      }
      function io(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++) if (!cr(e[n], t[n])) return !1;
        return !0;
      }
      function ao(e, t, n, r, i, a) {
        if (
          ((Qa = a),
          (Xa = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (Ka.current = null === e || null === e.memoizedState ? Do : No),
          (e = n(r, i)),
          no)
        ) {
          a = 0;
          do {
            if (((no = !1), !(25 > a))) throw Error(o(301));
            (a += 1), (eo = Ja = null), (t.updateQueue = null), (Ka.current = Oo), (e = n(r, i));
          } while (no);
        }
        if (((Ka.current = Lo), (t = null !== Ja && null !== Ja.next), (Qa = 0), (eo = Ja = Xa = null), (to = !1), t))
          throw Error(o(300));
        return e;
      }
      function oo() {
        var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return null === eo ? (Xa.memoizedState = eo = e) : (eo = eo.next = e), eo;
      }
      function so() {
        if (null === Ja) {
          var e = Xa.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = Ja.next;
        var t = null === eo ? Xa.memoizedState : eo.next;
        if (null !== t) (eo = t), (Ja = e);
        else {
          if (null === e) throw Error(o(310));
          (e = {
            memoizedState: (Ja = e).memoizedState,
            baseState: Ja.baseState,
            baseQueue: Ja.baseQueue,
            queue: Ja.queue,
            next: null,
          }),
            null === eo ? (Xa.memoizedState = eo = e) : (eo = eo.next = e);
        }
        return eo;
      }
      function lo(e, t) {
        return 'function' == typeof t ? t(e) : t;
      }
      function co(e) {
        var t = so(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = Ja,
          i = r.baseQueue,
          a = n.pending;
        if (null !== a) {
          if (null !== i) {
            var s = i.next;
            (i.next = a.next), (a.next = s);
          }
          (r.baseQueue = i = a), (n.pending = null);
        }
        if (null !== i) {
          (i = i.next), (r = r.baseState);
          var l = (s = a = null),
            c = i;
          do {
            var d = c.lane;
            if ((Qa & d) === d)
              null !== l &&
                (l = l.next =
                  { lane: 0, action: c.action, eagerReducer: c.eagerReducer, eagerState: c.eagerState, next: null }),
                (r = c.eagerReducer === e ? c.eagerState : e(r, c.action));
            else {
              var u = { lane: d, action: c.action, eagerReducer: c.eagerReducer, eagerState: c.eagerState, next: null };
              null === l ? ((s = l = u), (a = r)) : (l = l.next = u), (Xa.lanes |= d), (Us |= d);
            }
            c = c.next;
          } while (null !== c && c !== i);
          null === l ? (a = r) : (l.next = s),
            cr(r, t.memoizedState) || (Io = !0),
            (t.memoizedState = r),
            (t.baseState = a),
            (t.baseQueue = l),
            (n.lastRenderedState = r);
        }
        return [t.memoizedState, n.dispatch];
      }
      function uo(e) {
        var t = so(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          i = n.pending,
          a = t.memoizedState;
        if (null !== i) {
          n.pending = null;
          var s = (i = i.next);
          do {
            (a = e(a, s.action)), (s = s.next);
          } while (s !== i);
          cr(a, t.memoizedState) || (Io = !0),
            (t.memoizedState = a),
            null === t.baseQueue && (t.baseState = a),
            (n.lastRenderedState = a);
        }
        return [a, r];
      }
      function fo(e, t, n) {
        var r = t._getVersion;
        r = r(t._source);
        var i = t._workInProgressVersionPrimary;
        if (
          (null !== i
            ? (e = i === r)
            : ((e = e.mutableReadLanes), (e = (Qa & e) === e) && ((t._workInProgressVersionPrimary = r), Za.push(t))),
          e)
        )
          return n(t._source);
        throw (Za.push(t), Error(o(350)));
      }
      function po(e, t, n, r) {
        var i = Ns;
        if (null === i) throw Error(o(349));
        var a = t._getVersion,
          s = a(t._source),
          l = Ka.current,
          c = l.useState(function () {
            return fo(i, t, n);
          }),
          d = c[1],
          u = c[0];
        c = eo;
        var f = e.memoizedState,
          p = f.refs,
          m = p.getSnapshot,
          h = f.source;
        f = f.subscribe;
        var g = Xa;
        return (
          (e.memoizedState = { refs: p, source: t, subscribe: r }),
          l.useEffect(
            function () {
              (p.getSnapshot = n), (p.setSnapshot = d);
              var e = a(t._source);
              if (!cr(s, e)) {
                (e = n(t._source)),
                  cr(u, e) || (d(e), (e = pl(g)), (i.mutableReadLanes |= e & i.pendingLanes)),
                  (e = i.mutableReadLanes),
                  (i.entangledLanes |= e);
                for (var r = i.entanglements, o = e; 0 < o; ) {
                  var l = 31 - Ht(o),
                    c = 1 << l;
                  (r[l] |= e), (o &= ~c);
                }
              }
            },
            [n, t, r],
          ),
          l.useEffect(
            function () {
              return r(t._source, function () {
                var e = p.getSnapshot,
                  n = p.setSnapshot;
                try {
                  n(e(t._source));
                  var r = pl(g);
                  i.mutableReadLanes |= r & i.pendingLanes;
                } catch (a) {
                  n(function () {
                    throw a;
                  });
                }
              });
            },
            [t, r],
          ),
          (cr(m, n) && cr(h, t) && cr(f, r)) ||
            (((e = { pending: null, dispatch: null, lastRenderedReducer: lo, lastRenderedState: u }).dispatch = d =
              Ao.bind(null, Xa, e)),
            (c.queue = e),
            (c.baseQueue = null),
            (u = fo(i, t, n)),
            (c.memoizedState = c.baseState = u)),
          u
        );
      }
      function mo(e, t, n) {
        return po(so(), e, t, n);
      }
      function ho(e) {
        var t = oo();
        return (
          'function' == typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = (e = t.queue =
            { pending: null, dispatch: null, lastRenderedReducer: lo, lastRenderedState: e }).dispatch =
            Ao.bind(null, Xa, e)),
          [t.memoizedState, e]
        );
      }
      function go(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === (t = Xa.updateQueue)
            ? ((t = { lastEffect: null }), (Xa.updateQueue = t), (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }
      function bo(e) {
        return (e = { current: e }), (oo().memoizedState = e);
      }
      function vo() {
        return so().memoizedState;
      }
      function yo(e, t, n, r) {
        var i = oo();
        (Xa.flags |= e), (i.memoizedState = go(1 | t, n, void 0, void 0 === r ? null : r));
      }
      function ko(e, t, n, r) {
        var i = so();
        r = void 0 === r ? null : r;
        var a = void 0;
        if (null !== Ja) {
          var o = Ja.memoizedState;
          if (((a = o.destroy), null !== r && io(r, o.deps))) return void go(t, n, a, r);
        }
        (Xa.flags |= e), (i.memoizedState = go(1 | t, n, a, r));
      }
      function wo(e, t) {
        return yo(516, 4, e, t);
      }
      function So(e, t) {
        return ko(516, 4, e, t);
      }
      function Eo(e, t) {
        return ko(4, 2, e, t);
      }
      function Co(e, t) {
        return 'function' == typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null != t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }
      function _o(e, t, n) {
        return (n = null != n ? n.concat([e]) : null), ko(4, 2, Co.bind(null, t, e), n);
      }
      function xo() {}
      function To(e, t) {
        var n = so();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && io(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
      }
      function Po(e, t) {
        var n = so();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && io(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
      }
      function Ro(e, t) {
        var n = Hi();
        Vi(98 > n ? 98 : n, function () {
          e(!0);
        }),
          Vi(97 < n ? 97 : n, function () {
            var n = Ya.transition;
            Ya.transition = 1;
            try {
              e(!1), t();
            } finally {
              Ya.transition = n;
            }
          });
      }
      function Ao(e, t, n) {
        var r = fl(),
          i = pl(e),
          a = { lane: i, action: n, eagerReducer: null, eagerState: null, next: null },
          o = t.pending;
        if (
          (null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
          (t.pending = a),
          (o = e.alternate),
          e === Xa || (null !== o && o === Xa))
        )
          no = to = !0;
        else {
          if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer))
            try {
              var s = t.lastRenderedState,
                l = o(s, n);
              if (((a.eagerReducer = o), (a.eagerState = l), cr(l, s))) return;
            } catch (c) {}
          ml(e, i, r);
        }
      }
      var Lo = {
          readContext: aa,
          useCallback: ro,
          useContext: ro,
          useEffect: ro,
          useImperativeHandle: ro,
          useLayoutEffect: ro,
          useMemo: ro,
          useReducer: ro,
          useRef: ro,
          useState: ro,
          useDebugValue: ro,
          useDeferredValue: ro,
          useTransition: ro,
          useMutableSource: ro,
          useOpaqueIdentifier: ro,
          unstable_isNewReconciler: !1,
        },
        Do = {
          readContext: aa,
          useCallback: function (e, t) {
            return (oo().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: aa,
          useEffect: wo,
          useImperativeHandle: function (e, t, n) {
            return (n = null != n ? n.concat([e]) : null), yo(4, 2, Co.bind(null, t, e), n);
          },
          useLayoutEffect: function (e, t) {
            return yo(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = oo();
            return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
          },
          useReducer: function (e, t, n) {
            var r = oo();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = (e = r.queue =
                { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }).dispatch =
                Ao.bind(null, Xa, e)),
              [r.memoizedState, e]
            );
          },
          useRef: bo,
          useState: ho,
          useDebugValue: xo,
          useDeferredValue: function (e) {
            var t = ho(e),
              n = t[0],
              r = t[1];
            return (
              wo(
                function () {
                  var t = Ya.transition;
                  Ya.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Ya.transition = t;
                  }
                },
                [e],
              ),
              n
            );
          },
          useTransition: function () {
            var e = ho(!1),
              t = e[0];
            return bo((e = Ro.bind(null, e[1]))), [e, t];
          },
          useMutableSource: function (e, t, n) {
            var r = oo();
            return (
              (r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }),
              po(r, e, t, n)
            );
          },
          useOpaqueIdentifier: function () {
            if (ja) {
              var e = !1,
                t = (function (e) {
                  return { $$typeof: z, toString: e, valueOf: e };
                })(function () {
                  throw (e || ((e = !0), n('r:' + (Kr++).toString(36))), Error(o(355)));
                }),
                n = ho(t)[1];
              return (
                0 == (2 & Xa.mode) &&
                  ((Xa.flags |= 516),
                  go(
                    5,
                    function () {
                      n('r:' + (Kr++).toString(36));
                    },
                    void 0,
                    null,
                  )),
                t
              );
            }
            return ho((t = 'r:' + (Kr++).toString(36))), t;
          },
          unstable_isNewReconciler: !1,
        },
        No = {
          readContext: aa,
          useCallback: To,
          useContext: aa,
          useEffect: So,
          useImperativeHandle: _o,
          useLayoutEffect: Eo,
          useMemo: Po,
          useReducer: co,
          useRef: vo,
          useState: function () {
            return co(lo);
          },
          useDebugValue: xo,
          useDeferredValue: function (e) {
            var t = co(lo),
              n = t[0],
              r = t[1];
            return (
              So(
                function () {
                  var t = Ya.transition;
                  Ya.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Ya.transition = t;
                  }
                },
                [e],
              ),
              n
            );
          },
          useTransition: function () {
            var e = co(lo)[0];
            return [vo().current, e];
          },
          useMutableSource: mo,
          useOpaqueIdentifier: function () {
            return co(lo)[0];
          },
          unstable_isNewReconciler: !1,
        },
        Oo = {
          readContext: aa,
          useCallback: To,
          useContext: aa,
          useEffect: So,
          useImperativeHandle: _o,
          useLayoutEffect: Eo,
          useMemo: Po,
          useReducer: uo,
          useRef: vo,
          useState: function () {
            return uo(lo);
          },
          useDebugValue: xo,
          useDeferredValue: function (e) {
            var t = uo(lo),
              n = t[0],
              r = t[1];
            return (
              So(
                function () {
                  var t = Ya.transition;
                  Ya.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Ya.transition = t;
                  }
                },
                [e],
              ),
              n
            );
          },
          useTransition: function () {
            var e = uo(lo)[0];
            return [vo().current, e];
          },
          useMutableSource: mo,
          useOpaqueIdentifier: function () {
            return uo(lo)[0];
          },
          unstable_isNewReconciler: !1,
        },
        zo = w.ReactCurrentOwner,
        Io = !1;
      function Mo(e, t, n, r) {
        t.child = null === e ? xa(t, null, n, r) : _a(t, e.child, n, r);
      }
      function Fo(e, t, n, r, i) {
        n = n.render;
        var a = t.ref;
        return (
          ia(t, i),
          (r = ao(e, t, n, r, a, i)),
          null === e || Io
            ? ((t.flags |= 1), Mo(e, t, r, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~i), as(e, t, i))
        );
      }
      function Bo(e, t, n, r, i, a) {
        if (null === e) {
          var o = n.type;
          return 'function' != typeof o ||
            Vl(o) ||
            void 0 !== o.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Zl(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = o), jo(e, t, o, r, i, a));
        }
        return (
          (o = e.child),
          0 == (i & a) && ((i = o.memoizedProps), (n = null !== (n = n.compare) ? n : ur)(i, r) && e.ref === t.ref)
            ? as(e, t, a)
            : ((t.flags |= 1), ((e = Gl(o, r)).ref = t.ref), (e.return = t), (t.child = e))
        );
      }
      function jo(e, t, n, r, i, a) {
        if (null !== e && ur(e.memoizedProps, r) && e.ref === t.ref) {
          if (((Io = !1), 0 == (a & i))) return (t.lanes = e.lanes), as(e, t, a);
          0 != (16384 & e.flags) && (Io = !0);
        }
        return Ho(e, t, n, r, a);
      }
      function Uo(e, t, n) {
        var r = t.pendingProps,
          i = r.children,
          a = null !== e ? e.memoizedState : null;
        if ('hidden' === r.mode || 'unstable-defer-without-hiding' === r.mode)
          if (0 == (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), Sl(t, n);
          else {
            if (0 == (1073741824 & n))
              return (
                (e = null !== a ? a.baseLanes | n : n),
                (t.lanes = t.childLanes = 1073741824),
                (t.memoizedState = { baseLanes: e }),
                Sl(t, e),
                null
              );
            (t.memoizedState = { baseLanes: 0 }), Sl(t, null !== a ? a.baseLanes : n);
          }
        else null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n), Sl(t, r);
        return Mo(e, t, i, n), t.child;
      }
      function $o(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) && (t.flags |= 128);
      }
      function Ho(e, t, n, r, i) {
        var a = gi(n) ? mi : fi.current;
        return (
          (a = hi(t, a)),
          ia(t, i),
          (n = ao(e, t, n, r, a, i)),
          null === e || Io
            ? ((t.flags |= 1), Mo(e, t, n, i), t.child)
            : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~i), as(e, t, i))
        );
      }
      function qo(e, t, n, r, i) {
        if (gi(n)) {
          var a = !0;
          ki(t);
        } else a = !1;
        if ((ia(t, i), null === t.stateNode))
          null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            va(t, n, r),
            ka(t, n, r, i),
            (r = !0);
        else if (null === e) {
          var o = t.stateNode,
            s = t.memoizedProps;
          o.props = s;
          var l = o.context,
            c = n.contextType;
          'object' == typeof c && null !== c ? (c = aa(c)) : (c = hi(t, (c = gi(n) ? mi : fi.current)));
          var d = n.getDerivedStateFromProps,
            u = 'function' == typeof d || 'function' == typeof o.getSnapshotBeforeUpdate;
          u ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
              'function' != typeof o.componentWillReceiveProps) ||
            ((s !== r || l !== c) && ya(t, o, r, c)),
            (oa = !1);
          var f = t.memoizedState;
          (o.state = f),
            fa(t, r, o, i),
            (l = t.memoizedState),
            s !== r || f !== l || pi.current || oa
              ? ('function' == typeof d && (ha(t, n, d, r), (l = t.memoizedState)),
                (s = oa || ba(t, n, s, r, f, l, c))
                  ? (u ||
                      ('function' != typeof o.UNSAFE_componentWillMount && 'function' != typeof o.componentWillMount) ||
                      ('function' == typeof o.componentWillMount && o.componentWillMount(),
                      'function' == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()),
                    'function' == typeof o.componentDidMount && (t.flags |= 4))
                  : ('function' == typeof o.componentDidMount && (t.flags |= 4),
                    (t.memoizedProps = r),
                    (t.memoizedState = l)),
                (o.props = r),
                (o.state = l),
                (o.context = c),
                (r = s))
              : ('function' == typeof o.componentDidMount && (t.flags |= 4), (r = !1));
        } else {
          (o = t.stateNode),
            la(e, t),
            (s = t.memoizedProps),
            (c = t.type === t.elementType ? s : Yi(t.type, s)),
            (o.props = c),
            (u = t.pendingProps),
            (f = o.context),
            'object' == typeof (l = n.contextType) && null !== l
              ? (l = aa(l))
              : (l = hi(t, (l = gi(n) ? mi : fi.current)));
          var p = n.getDerivedStateFromProps;
          (d = 'function' == typeof p || 'function' == typeof o.getSnapshotBeforeUpdate) ||
            ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
              'function' != typeof o.componentWillReceiveProps) ||
            ((s !== u || f !== l) && ya(t, o, r, l)),
            (oa = !1),
            (f = t.memoizedState),
            (o.state = f),
            fa(t, r, o, i);
          var m = t.memoizedState;
          s !== u || f !== m || pi.current || oa
            ? ('function' == typeof p && (ha(t, n, p, r), (m = t.memoizedState)),
              (c = oa || ba(t, n, c, r, f, m, l))
                ? (d ||
                    ('function' != typeof o.UNSAFE_componentWillUpdate && 'function' != typeof o.componentWillUpdate) ||
                    ('function' == typeof o.componentWillUpdate && o.componentWillUpdate(r, m, l),
                    'function' == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, m, l)),
                  'function' == typeof o.componentDidUpdate && (t.flags |= 4),
                  'function' == typeof o.getSnapshotBeforeUpdate && (t.flags |= 256))
                : ('function' != typeof o.componentDidUpdate ||
                    (s === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 4),
                  'function' != typeof o.getSnapshotBeforeUpdate ||
                    (s === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 256),
                  (t.memoizedProps = r),
                  (t.memoizedState = m)),
              (o.props = r),
              (o.state = m),
              (o.context = l),
              (r = c))
            : ('function' != typeof o.componentDidUpdate ||
                (s === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 4),
              'function' != typeof o.getSnapshotBeforeUpdate ||
                (s === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 256),
              (r = !1));
        }
        return Vo(e, t, n, r, a, i);
      }
      function Vo(e, t, n, r, i, a) {
        $o(e, t);
        var o = 0 != (64 & t.flags);
        if (!r && !o) return i && wi(t, n, !1), as(e, t, a);
        (r = t.stateNode), (zo.current = t);
        var s = o && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
        return (
          (t.flags |= 1),
          null !== e && o ? ((t.child = _a(t, e.child, null, a)), (t.child = _a(t, null, s, a))) : Mo(e, t, s, a),
          (t.memoizedState = r.state),
          i && wi(t, n, !0),
          t.child
        );
      }
      function Go(e) {
        var t = e.stateNode;
        t.pendingContext ? vi(0, t.pendingContext, t.pendingContext !== t.context) : t.context && vi(0, t.context, !1),
          Da(e, t.containerInfo);
      }
      var Zo,
        Wo,
        Ko,
        Yo,
        Qo = { dehydrated: null, retryLane: 0 };
      function Xo(e, t, n) {
        var r,
          i = t.pendingProps,
          a = Ia.current,
          o = !1;
        return (
          (r = 0 != (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
          r
            ? ((o = !0), (t.flags &= -65))
            : (null !== e && null === e.memoizedState) ||
              void 0 === i.fallback ||
              !0 === i.unstable_avoidThisFallback ||
              (a |= 1),
          di(Ia, 1 & a),
          null === e
            ? (void 0 !== i.fallback && Ha(t),
              (e = i.children),
              (a = i.fallback),
              o
                ? ((e = Jo(t, e, a, n)), (t.child.memoizedState = { baseLanes: n }), (t.memoizedState = Qo), e)
                : 'number' == typeof i.unstable_expectedLoadTime
                ? ((e = Jo(t, e, a, n)),
                  (t.child.memoizedState = { baseLanes: n }),
                  (t.memoizedState = Qo),
                  (t.lanes = 33554432),
                  e)
                : (((n = Kl({ mode: 'visible', children: e }, t.mode, n, null)).return = t), (t.child = n)))
            : (e.memoizedState,
              o
                ? ((i = ts(e, t, i.children, i.fallback, n)),
                  (o = t.child),
                  (a = e.child.memoizedState),
                  (o.memoizedState = null === a ? { baseLanes: n } : { baseLanes: a.baseLanes | n }),
                  (o.childLanes = e.childLanes & ~n),
                  (t.memoizedState = Qo),
                  i)
                : ((n = es(e, t, i.children, n)), (t.memoizedState = null), n))
        );
      }
      function Jo(e, t, n, r) {
        var i = e.mode,
          a = e.child;
        return (
          (t = { mode: 'hidden', children: t }),
          0 == (2 & i) && null !== a ? ((a.childLanes = 0), (a.pendingProps = t)) : (a = Kl(t, i, 0, null)),
          (n = Wl(n, i, r, null)),
          (a.return = e),
          (n.return = e),
          (a.sibling = n),
          (e.child = a),
          n
        );
      }
      function es(e, t, n, r) {
        var i = e.child;
        return (
          (e = i.sibling),
          (n = Gl(i, { mode: 'visible', children: n })),
          0 == (2 & t.mode) && (n.lanes = r),
          (n.return = t),
          (n.sibling = null),
          null !== e && ((e.nextEffect = null), (e.flags = 8), (t.firstEffect = t.lastEffect = e)),
          (t.child = n)
        );
      }
      function ts(e, t, n, r, i) {
        var a = t.mode,
          o = e.child;
        e = o.sibling;
        var s = { mode: 'hidden', children: n };
        return (
          0 == (2 & a) && t.child !== o
            ? (((n = t.child).childLanes = 0),
              (n.pendingProps = s),
              null !== (o = n.lastEffect)
                ? ((t.firstEffect = n.firstEffect), (t.lastEffect = o), (o.nextEffect = null))
                : (t.firstEffect = t.lastEffect = null))
            : (n = Gl(o, s)),
          null !== e ? (r = Gl(e, r)) : ((r = Wl(r, a, i, null)).flags |= 2),
          (r.return = t),
          (n.return = t),
          (n.sibling = r),
          (t.child = n),
          r
        );
      }
      function ns(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        null !== n && (n.lanes |= t), ra(e.return, t);
      }
      function rs(e, t, n, r, i, a) {
        var o = e.memoizedState;
        null === o
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: i,
              lastEffect: a,
            })
          : ((o.isBackwards = t),
            (o.rendering = null),
            (o.renderingStartTime = 0),
            (o.last = r),
            (o.tail = n),
            (o.tailMode = i),
            (o.lastEffect = a));
      }
      function is(e, t, n) {
        var r = t.pendingProps,
          i = r.revealOrder,
          a = r.tail;
        if ((Mo(e, t, r.children, n), 0 != (2 & (r = Ia.current)))) (r = (1 & r) | 2), (t.flags |= 64);
        else {
          if (null !== e && 0 != (64 & e.flags))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && ns(e, n);
              else if (19 === e.tag) ns(e, n);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          r &= 1;
        }
        if ((di(Ia, r), 0 == (2 & t.mode))) t.memoizedState = null;
        else
          switch (i) {
            case 'forwards':
              for (n = t.child, i = null; null !== n; )
                null !== (e = n.alternate) && null === Ma(e) && (i = n), (n = n.sibling);
              null === (n = i) ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
                rs(t, !1, i, n, a, t.lastEffect);
              break;
            case 'backwards':
              for (n = null, i = t.child, t.child = null; null !== i; ) {
                if (null !== (e = i.alternate) && null === Ma(e)) {
                  t.child = i;
                  break;
                }
                (e = i.sibling), (i.sibling = n), (n = i), (i = e);
              }
              rs(t, !0, n, null, a, t.lastEffect);
              break;
            case 'together':
              rs(t, !1, null, null, void 0, t.lastEffect);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function as(e, t, n) {
        if ((null !== e && (t.dependencies = e.dependencies), (Us |= t.lanes), 0 != (n & t.childLanes))) {
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (n = Gl((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
              (e = e.sibling), ((n = n.sibling = Gl(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        return null;
      }
      function os(e, t) {
        if (!ja)
          switch (e.tailMode) {
            case 'hidden':
              t = e.tail;
              for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
              null === n ? (e.tail = null) : (n.sibling = null);
              break;
            case 'collapsed':
              n = e.tail;
              for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
              null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
          }
      }
      function ss(e, t, n) {
        var r = t.pendingProps;
        switch (t.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return null;
          case 1:
          case 17:
            return gi(t.type) && bi(), null;
          case 3:
            return (
              Na(),
              ci(pi),
              ci(fi),
              Wa(),
              (r = t.stateNode).pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
              (null !== e && null !== e.child) || (Va(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
              Wo(t),
              null
            );
          case 5:
            za(t);
            var a = La(Aa.current);
            if (((n = t.type), null !== e && null != t.stateNode))
              Ko(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 128);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(o(166));
                return null;
              }
              if (((e = La(Pa.current)), Va(t))) {
                (r = t.stateNode), (n = t.type);
                var s = t.memoizedProps;
                switch (((r[Qr] = t), (r[Xr] = s), n)) {
                  case 'dialog':
                    Rr('cancel', r), Rr('close', r);
                    break;
                  case 'iframe':
                  case 'object':
                  case 'embed':
                    Rr('load', r);
                    break;
                  case 'video':
                  case 'audio':
                    for (e = 0; e < _r.length; e++) Rr(_r[e], r);
                    break;
                  case 'source':
                    Rr('error', r);
                    break;
                  case 'img':
                  case 'image':
                  case 'link':
                    Rr('error', r), Rr('load', r);
                    break;
                  case 'details':
                    Rr('toggle', r);
                    break;
                  case 'input':
                    ee(r, s), Rr('invalid', r);
                    break;
                  case 'select':
                    (r._wrapperState = { wasMultiple: !!s.multiple }), Rr('invalid', r);
                    break;
                  case 'textarea':
                    le(r, s), Rr('invalid', r);
                }
                for (var c in (Ee(n, s), (e = null), s))
                  s.hasOwnProperty(c) &&
                    ((a = s[c]),
                    'children' === c
                      ? 'string' == typeof a
                        ? r.textContent !== a && (e = ['children', a])
                        : 'number' == typeof a && r.textContent !== '' + a && (e = ['children', '' + a])
                      : l.hasOwnProperty(c) && null != a && 'onScroll' === c && Rr('scroll', r));
                switch (n) {
                  case 'input':
                    Y(r), re(r, s, !0);
                    break;
                  case 'textarea':
                    Y(r), de(r);
                    break;
                  case 'select':
                  case 'option':
                    break;
                  default:
                    'function' == typeof s.onClick && (r.onclick = Br);
                }
                (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
              } else {
                switch (
                  ((c = 9 === a.nodeType ? a : a.ownerDocument),
                  e === ue.html && (e = fe(n)),
                  e === ue.html
                    ? 'script' === n
                      ? (((e = c.createElement('div')).innerHTML = '<script></script>'),
                        (e = e.removeChild(e.firstChild)))
                      : 'string' == typeof r.is
                      ? (e = c.createElement(n, { is: r.is }))
                      : ((e = c.createElement(n)),
                        'select' === n && ((c = e), r.multiple ? (c.multiple = !0) : r.size && (c.size = r.size)))
                    : (e = c.createElementNS(e, n)),
                  (e[Qr] = t),
                  (e[Xr] = r),
                  Zo(e, t, !1, !1),
                  (t.stateNode = e),
                  (c = Ce(n, r)),
                  n)
                ) {
                  case 'dialog':
                    Rr('cancel', e), Rr('close', e), (a = r);
                    break;
                  case 'iframe':
                  case 'object':
                  case 'embed':
                    Rr('load', e), (a = r);
                    break;
                  case 'video':
                  case 'audio':
                    for (a = 0; a < _r.length; a++) Rr(_r[a], e);
                    a = r;
                    break;
                  case 'source':
                    Rr('error', e), (a = r);
                    break;
                  case 'img':
                  case 'image':
                  case 'link':
                    Rr('error', e), Rr('load', e), (a = r);
                    break;
                  case 'details':
                    Rr('toggle', e), (a = r);
                    break;
                  case 'input':
                    ee(e, r), (a = J(e, r)), Rr('invalid', e);
                    break;
                  case 'option':
                    a = ae(e, r);
                    break;
                  case 'select':
                    (e._wrapperState = { wasMultiple: !!r.multiple }),
                      (a = i({}, r, { value: void 0 })),
                      Rr('invalid', e);
                    break;
                  case 'textarea':
                    le(e, r), (a = se(e, r)), Rr('invalid', e);
                    break;
                  default:
                    a = r;
                }
                Ee(n, a);
                var d = a;
                for (s in d)
                  if (d.hasOwnProperty(s)) {
                    var u = d[s];
                    'style' === s
                      ? we(e, u)
                      : 'dangerouslySetInnerHTML' === s
                      ? null != (u = u ? u.__html : void 0) && ge(e, u)
                      : 'children' === s
                      ? 'string' == typeof u
                        ? ('textarea' !== n || '' !== u) && be(e, u)
                        : 'number' == typeof u && be(e, '' + u)
                      : 'suppressContentEditableWarning' !== s &&
                        'suppressHydrationWarning' !== s &&
                        'autoFocus' !== s &&
                        (l.hasOwnProperty(s)
                          ? null != u && 'onScroll' === s && Rr('scroll', e)
                          : null != u && k(e, s, u, c));
                  }
                switch (n) {
                  case 'input':
                    Y(e), re(e, r, !1);
                    break;
                  case 'textarea':
                    Y(e), de(e);
                    break;
                  case 'option':
                    null != r.value && e.setAttribute('value', '' + W(r.value));
                    break;
                  case 'select':
                    (e.multiple = !!r.multiple),
                      null != (s = r.value)
                        ? oe(e, !!r.multiple, s, !1)
                        : null != r.defaultValue && oe(e, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    'function' == typeof a.onClick && (e.onclick = Br);
                }
                $r(n, r) && (t.flags |= 4);
              }
              null !== t.ref && (t.flags |= 128);
            }
            return null;
          case 6:
            if (e && null != t.stateNode) Yo(e, t, e.memoizedProps, r);
            else {
              if ('string' != typeof r && null === t.stateNode) throw Error(o(166));
              (n = La(Aa.current)),
                La(Pa.current),
                Va(t)
                  ? ((r = t.stateNode), (n = t.memoizedProps), (r[Qr] = t), r.nodeValue !== n && (t.flags |= 4))
                  : (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Qr] = t), (t.stateNode = r));
            }
            return null;
          case 13:
            return (
              ci(Ia),
              (r = t.memoizedState),
              0 != (64 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r),
                  (n = !1),
                  null === e ? void 0 !== t.memoizedProps.fallback && Va(t) : (n = null !== e.memoizedState),
                  r &&
                    !n &&
                    0 != (2 & t.mode) &&
                    ((null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback) || 0 != (1 & Ia.current)
                      ? 0 === Fs && (Fs = 3)
                      : ((0 !== Fs && 3 !== Fs) || (Fs = 4),
                        null === Ns || (0 == (134217727 & Us) && 0 == (134217727 & $s)) || vl(Ns, zs))),
                  (r || n) && (t.flags |= 4),
                  null)
            );
          case 4:
            return Na(), Wo(t), null === e && Lr(t.stateNode.containerInfo), null;
          case 10:
            return na(t), null;
          case 19:
            if ((ci(Ia), null === (r = t.memoizedState))) return null;
            if (((s = 0 != (64 & t.flags)), null === (c = r.rendering)))
              if (s) os(r, !1);
              else {
                if (0 !== Fs || (null !== e && 0 != (64 & e.flags)))
                  for (e = t.child; null !== e; ) {
                    if (null !== (c = Ma(e))) {
                      for (
                        t.flags |= 64,
                          os(r, !1),
                          null !== (s = c.updateQueue) && ((t.updateQueue = s), (t.flags |= 4)),
                          null === r.lastEffect && (t.firstEffect = null),
                          t.lastEffect = r.lastEffect,
                          r = n,
                          n = t.child;
                        null !== n;

                      )
                        (e = r),
                          ((s = n).flags &= 2),
                          (s.nextEffect = null),
                          (s.firstEffect = null),
                          (s.lastEffect = null),
                          null === (c = s.alternate)
                            ? ((s.childLanes = 0),
                              (s.lanes = e),
                              (s.child = null),
                              (s.memoizedProps = null),
                              (s.memoizedState = null),
                              (s.updateQueue = null),
                              (s.dependencies = null),
                              (s.stateNode = null))
                            : ((s.childLanes = c.childLanes),
                              (s.lanes = c.lanes),
                              (s.child = c.child),
                              (s.memoizedProps = c.memoizedProps),
                              (s.memoizedState = c.memoizedState),
                              (s.updateQueue = c.updateQueue),
                              (s.type = c.type),
                              (e = c.dependencies),
                              (s.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                          (n = n.sibling);
                      return di(Ia, (1 & Ia.current) | 2), t.child;
                    }
                    e = e.sibling;
                  }
                null !== r.tail && $i() > Gs && ((t.flags |= 64), (s = !0), os(r, !1), (t.lanes = 33554432));
              }
            else {
              if (!s)
                if (null !== (e = Ma(c))) {
                  if (
                    ((t.flags |= 64),
                    (s = !0),
                    null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                    os(r, !0),
                    null === r.tail && 'hidden' === r.tailMode && !c.alternate && !ja)
                  )
                    return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null;
                } else
                  2 * $i() - r.renderingStartTime > Gs &&
                    1073741824 !== n &&
                    ((t.flags |= 64), (s = !0), os(r, !1), (t.lanes = 33554432));
              r.isBackwards
                ? ((c.sibling = t.child), (t.child = c))
                : (null !== (n = r.last) ? (n.sibling = c) : (t.child = c), (r.last = c));
            }
            return null !== r.tail
              ? ((n = r.tail),
                (r.rendering = n),
                (r.tail = n.sibling),
                (r.lastEffect = t.lastEffect),
                (r.renderingStartTime = $i()),
                (n.sibling = null),
                (t = Ia.current),
                di(Ia, s ? (1 & t) | 2 : 1 & t),
                n)
              : null;
          case 23:
          case 24:
            return (
              El(),
              null !== e &&
                (null !== e.memoizedState) != (null !== t.memoizedState) &&
                'unstable-defer-without-hiding' !== r.mode &&
                (t.flags |= 4),
              null
            );
        }
        throw Error(o(156, t.tag));
      }
      function ls(e) {
        switch (e.tag) {
          case 1:
            gi(e.type) && bi();
            var t = e.flags;
            return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
          case 3:
            if ((Na(), ci(pi), ci(fi), Wa(), 0 != (64 & (t = e.flags)))) throw Error(o(285));
            return (e.flags = (-4097 & t) | 64), e;
          case 5:
            return za(e), null;
          case 13:
            return ci(Ia), 4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null;
          case 19:
            return ci(Ia), null;
          case 4:
            return Na(), null;
          case 10:
            return na(e), null;
          case 23:
          case 24:
            return El(), null;
          default:
            return null;
        }
      }
      function cs(e, t) {
        try {
          var n = '',
            r = t;
          do {
            (n += G(r)), (r = r.return);
          } while (r);
          var i = n;
        } catch (a) {
          i = '\nError generating stack: ' + a.message + '\n' + a.stack;
        }
        return { value: e, source: t, stack: i };
      }
      function ds(e, t) {
        try {
          console.error(t.value);
        } catch (n) {
          setTimeout(function () {
            throw n;
          });
        }
      }
      (Zo = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        (Wo = function () {}),
        (Ko = function (e, t, n, r) {
          var a = e.memoizedProps;
          if (a !== r) {
            (e = t.stateNode), La(Pa.current);
            var o,
              s = null;
            switch (n) {
              case 'input':
                (a = J(e, a)), (r = J(e, r)), (s = []);
                break;
              case 'option':
                (a = ae(e, a)), (r = ae(e, r)), (s = []);
                break;
              case 'select':
                (a = i({}, a, { value: void 0 })), (r = i({}, r, { value: void 0 })), (s = []);
                break;
              case 'textarea':
                (a = se(e, a)), (r = se(e, r)), (s = []);
                break;
              default:
                'function' != typeof a.onClick && 'function' == typeof r.onClick && (e.onclick = Br);
            }
            for (u in (Ee(n, r), (n = null), a))
              if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
                if ('style' === u) {
                  var c = a[u];
                  for (o in c) c.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
                } else
                  'dangerouslySetInnerHTML' !== u &&
                    'children' !== u &&
                    'suppressContentEditableWarning' !== u &&
                    'suppressHydrationWarning' !== u &&
                    'autoFocus' !== u &&
                    (l.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
            for (u in r) {
              var d = r[u];
              if (((c = null != a ? a[u] : void 0), r.hasOwnProperty(u) && d !== c && (null != d || null != c)))
                if ('style' === u)
                  if (c) {
                    for (o in c) !c.hasOwnProperty(o) || (d && d.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ''));
                    for (o in d) d.hasOwnProperty(o) && c[o] !== d[o] && (n || (n = {}), (n[o] = d[o]));
                  } else n || (s || (s = []), s.push(u, n)), (n = d);
                else
                  'dangerouslySetInnerHTML' === u
                    ? ((d = d ? d.__html : void 0),
                      (c = c ? c.__html : void 0),
                      null != d && c !== d && (s = s || []).push(u, d))
                    : 'children' === u
                    ? ('string' != typeof d && 'number' != typeof d) || (s = s || []).push(u, '' + d)
                    : 'suppressContentEditableWarning' !== u &&
                      'suppressHydrationWarning' !== u &&
                      (l.hasOwnProperty(u)
                        ? (null != d && 'onScroll' === u && Rr('scroll', e), s || c === d || (s = []))
                        : 'object' == typeof d && null !== d && d.$$typeof === z
                        ? d.toString()
                        : (s = s || []).push(u, d));
            }
            n && (s = s || []).push('style', n);
            var u = s;
            (t.updateQueue = u) && (t.flags |= 4);
          }
        }),
        (Yo = function (e, t, n, r) {
          n !== r && (t.flags |= 4);
        });
      var us = 'function' == typeof WeakMap ? WeakMap : Map;
      function fs(e, t, n) {
        ((n = ca(-1, n)).tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
          (n.callback = function () {
            Ys || ((Ys = !0), (Qs = r)), ds(0, t);
          }),
          n
        );
      }
      function ps(e, t, n) {
        (n = ca(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ('function' == typeof r) {
          var i = t.value;
          n.payload = function () {
            return ds(0, t), r(i);
          };
        }
        var a = e.stateNode;
        return (
          null !== a &&
            'function' == typeof a.componentDidCatch &&
            (n.callback = function () {
              'function' != typeof r && (null === Xs ? (Xs = new Set([this])) : Xs.add(this), ds(0, t));
              var e = t.stack;
              this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
            }),
          n
        );
      }
      var ms = 'function' == typeof WeakSet ? WeakSet : Set;
      function hs(e) {
        var t = e.ref;
        if (null !== t)
          if ('function' == typeof t)
            try {
              t(null);
            } catch (n) {
              jl(e, n);
            }
          else t.current = null;
      }
      function gs(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
          case 5:
          case 6:
          case 4:
          case 17:
            return;
          case 1:
            if (256 & t.flags && null !== e) {
              var n = e.memoizedProps,
                r = e.memoizedState;
              (t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Yi(t.type, n), r)),
                (e.__reactInternalSnapshotBeforeUpdate = t);
            }
            return;
          case 3:
            return void (256 & t.flags && Gr(t.stateNode.containerInfo));
        }
        throw Error(o(163));
      }
      function bs(e, t, n) {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
              e = t = t.next;
              do {
                if (3 == (3 & e.tag)) {
                  var r = e.create;
                  e.destroy = r();
                }
                e = e.next;
              } while (e !== t);
            }
            if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
              e = t = t.next;
              do {
                var i = e;
                (r = i.next), 0 != (4 & (i = i.tag)) && 0 != (1 & i) && (Ml(n, e), Il(n, e)), (e = r);
              } while (e !== t);
            }
            return;
          case 1:
            return (
              (e = n.stateNode),
              4 & n.flags &&
                (null === t
                  ? e.componentDidMount()
                  : ((r = n.elementType === n.type ? t.memoizedProps : Yi(n.type, t.memoizedProps)),
                    e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
              void (null !== (t = n.updateQueue) && pa(n, t, e))
            );
          case 3:
            if (null !== (t = n.updateQueue)) {
              if (((e = null), null !== n.child))
                switch (n.child.tag) {
                  case 5:
                  case 1:
                    e = n.child.stateNode;
                }
              pa(n, t, e);
            }
            return;
          case 5:
            return (e = n.stateNode), void (null === t && 4 & n.flags && $r(n.type, n.memoizedProps) && e.focus());
          case 6:
          case 4:
          case 12:
          case 19:
          case 17:
          case 20:
          case 21:
          case 23:
          case 24:
            return;
          case 13:
            return void (
              null === n.memoizedState &&
              ((n = n.alternate),
              null !== n && ((n = n.memoizedState), null !== n && ((n = n.dehydrated), null !== n && wt(n))))
            );
        }
        throw Error(o(163));
      }
      function vs(e, t) {
        for (var n = e; ; ) {
          if (5 === n.tag) {
            var r = n.stateNode;
            if (t)
              'function' == typeof (r = r.style).setProperty
                ? r.setProperty('display', 'none', 'important')
                : (r.display = 'none');
            else {
              r = n.stateNode;
              var i = n.memoizedProps.style;
              (i = null != i && i.hasOwnProperty('display') ? i.display : null), (r.style.display = ke('display', i));
            }
          } else if (6 === n.tag) n.stateNode.nodeValue = t ? '' : n.memoizedProps;
          else if (((23 !== n.tag && 24 !== n.tag) || null === n.memoizedState || n === e) && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === e) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === e) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }
      function ys(e, t) {
        if (Ei && 'function' == typeof Ei.onCommitFiberUnmount)
          try {
            Ei.onCommitFiberUnmount(Si, t);
          } catch (a) {}
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
              var n = (e = e.next);
              do {
                var r = n,
                  i = r.destroy;
                if (((r = r.tag), void 0 !== i))
                  if (0 != (4 & r)) Ml(t, n);
                  else {
                    r = t;
                    try {
                      i();
                    } catch (a) {
                      jl(r, a);
                    }
                  }
                n = n.next;
              } while (n !== e);
            }
            break;
          case 1:
            if ((hs(t), 'function' == typeof (e = t.stateNode).componentWillUnmount))
              try {
                (e.props = t.memoizedProps), (e.state = t.memoizedState), e.componentWillUnmount();
              } catch (a) {
                jl(t, a);
              }
            break;
          case 5:
            hs(t);
            break;
          case 4:
            _s(e, t);
        }
      }
      function ks(e) {
        (e.alternate = null),
          (e.child = null),
          (e.dependencies = null),
          (e.firstEffect = null),
          (e.lastEffect = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.return = null),
          (e.updateQueue = null);
      }
      function ws(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function Ss(e) {
        e: {
          for (var t = e.return; null !== t; ) {
            if (ws(t)) break e;
            t = t.return;
          }
          throw Error(o(160));
        }
        var n = t;
        switch (((t = n.stateNode), n.tag)) {
          case 5:
            var r = !1;
            break;
          case 3:
          case 4:
            (t = t.containerInfo), (r = !0);
            break;
          default:
            throw Error(o(161));
        }
        16 & n.flags && (be(t, ''), (n.flags &= -17));
        e: t: for (n = e; ; ) {
          for (; null === n.sibling; ) {
            if (null === n.return || ws(n.return)) {
              n = null;
              break e;
            }
            n = n.return;
          }
          for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
            if (2 & n.flags) continue t;
            if (null === n.child || 4 === n.tag) continue t;
            (n.child.return = n), (n = n.child);
          }
          if (!(2 & n.flags)) {
            n = n.stateNode;
            break e;
          }
        }
        r ? Es(e, n, t) : Cs(e, n, t);
      }
      function Es(e, t, n) {
        var r = e.tag,
          i = 5 === r || 6 === r;
        if (i)
          (e = i ? e.stateNode : e.stateNode.instance),
            t
              ? 8 === n.nodeType
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
              : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Br));
        else if (4 !== r && null !== (e = e.child))
          for (Es(e, t, n), e = e.sibling; null !== e; ) Es(e, t, n), (e = e.sibling);
      }
      function Cs(e, t, n) {
        var r = e.tag,
          i = 5 === r || 6 === r;
        if (i) (e = i ? e.stateNode : e.stateNode.instance), t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
          for (Cs(e, t, n), e = e.sibling; null !== e; ) Cs(e, t, n), (e = e.sibling);
      }
      function _s(e, t) {
        for (var n, r, i = t, a = !1; ; ) {
          if (!a) {
            a = i.return;
            e: for (;;) {
              if (null === a) throw Error(o(160));
              switch (((n = a.stateNode), a.tag)) {
                case 5:
                  r = !1;
                  break e;
                case 3:
                case 4:
                  (n = n.containerInfo), (r = !0);
                  break e;
              }
              a = a.return;
            }
            a = !0;
          }
          if (5 === i.tag || 6 === i.tag) {
            e: for (var s = e, l = i, c = l; ; )
              if ((ys(s, c), null !== c.child && 4 !== c.tag)) (c.child.return = c), (c = c.child);
              else {
                if (c === l) break e;
                for (; null === c.sibling; ) {
                  if (null === c.return || c.return === l) break e;
                  c = c.return;
                }
                (c.sibling.return = c.return), (c = c.sibling);
              }
            r
              ? ((s = n), (l = i.stateNode), 8 === s.nodeType ? s.parentNode.removeChild(l) : s.removeChild(l))
              : n.removeChild(i.stateNode);
          } else if (4 === i.tag) {
            if (null !== i.child) {
              (n = i.stateNode.containerInfo), (r = !0), (i.child.return = i), (i = i.child);
              continue;
            }
          } else if ((ys(e, i), null !== i.child)) {
            (i.child.return = i), (i = i.child);
            continue;
          }
          if (i === t) break;
          for (; null === i.sibling; ) {
            if (null === i.return || i.return === t) return;
            4 === (i = i.return).tag && (a = !1);
          }
          (i.sibling.return = i.return), (i = i.sibling);
        }
      }
      function xs(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            var n = t.updateQueue;
            if (null !== (n = null !== n ? n.lastEffect : null)) {
              var r = (n = n.next);
              do {
                3 == (3 & r.tag) && ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()), (r = r.next);
              } while (r !== n);
            }
            return;
          case 1:
          case 12:
          case 17:
            return;
          case 5:
            if (null != (n = t.stateNode)) {
              r = t.memoizedProps;
              var i = null !== e ? e.memoizedProps : r;
              e = t.type;
              var a = t.updateQueue;
              if (((t.updateQueue = null), null !== a)) {
                for (
                  n[Xr] = r,
                    'input' === e && 'radio' === r.type && null != r.name && te(n, r),
                    Ce(e, i),
                    t = Ce(e, r),
                    i = 0;
                  i < a.length;
                  i += 2
                ) {
                  var s = a[i],
                    l = a[i + 1];
                  'style' === s
                    ? we(n, l)
                    : 'dangerouslySetInnerHTML' === s
                    ? ge(n, l)
                    : 'children' === s
                    ? be(n, l)
                    : k(n, s, l, t);
                }
                switch (e) {
                  case 'input':
                    ne(n, r);
                    break;
                  case 'textarea':
                    ce(n, r);
                    break;
                  case 'select':
                    (e = n._wrapperState.wasMultiple),
                      (n._wrapperState.wasMultiple = !!r.multiple),
                      null != (a = r.value)
                        ? oe(n, !!r.multiple, a, !1)
                        : e !== !!r.multiple &&
                          (null != r.defaultValue
                            ? oe(n, !!r.multiple, r.defaultValue, !0)
                            : oe(n, !!r.multiple, r.multiple ? [] : '', !1));
                }
              }
            }
            return;
          case 6:
            if (null === t.stateNode) throw Error(o(162));
            return void (t.stateNode.nodeValue = t.memoizedProps);
          case 3:
            return void ((n = t.stateNode).hydrate && ((n.hydrate = !1), wt(n.containerInfo)));
          case 13:
            return null !== t.memoizedState && ((Vs = $i()), vs(t.child, !0)), void Ts(t);
          case 19:
            return void Ts(t);
          case 23:
          case 24:
            return void vs(t, null !== t.memoizedState);
        }
        throw Error(o(163));
      }
      function Ts(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new ms()),
            t.forEach(function (t) {
              var r = $l.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            });
        }
      }
      function Ps(e, t) {
        return (
          null !== e &&
          (null === (e = e.memoizedState) || null !== e.dehydrated) &&
          null !== (t = t.memoizedState) &&
          null === t.dehydrated
        );
      }
      var Rs = Math.ceil,
        As = w.ReactCurrentDispatcher,
        Ls = w.ReactCurrentOwner,
        Ds = 0,
        Ns = null,
        Os = null,
        zs = 0,
        Is = 0,
        Ms = li(0),
        Fs = 0,
        Bs = null,
        js = 0,
        Us = 0,
        $s = 0,
        Hs = 0,
        qs = null,
        Vs = 0,
        Gs = 1 / 0;
      function Zs() {
        Gs = $i() + 500;
      }
      var Ws,
        Ks = null,
        Ys = !1,
        Qs = null,
        Xs = null,
        Js = !1,
        el = null,
        tl = 90,
        nl = [],
        rl = [],
        il = null,
        al = 0,
        ol = null,
        sl = -1,
        ll = 0,
        cl = 0,
        dl = null,
        ul = !1;
      function fl() {
        return 0 != (48 & Ds) ? $i() : -1 !== sl ? sl : (sl = $i());
      }
      function pl(e) {
        if (0 == (2 & (e = e.mode))) return 1;
        if (0 == (4 & e)) return 99 === Hi() ? 1 : 2;
        if ((0 === ll && (ll = js), 0 !== Ki.transition)) {
          0 !== cl && (cl = null !== qs ? qs.pendingLanes : 0), (e = ll);
          var t = 4186112 & ~cl;
          return 0 === (t &= -t) && 0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192), t;
        }
        return (
          (e = Hi()),
          0 != (4 & Ds) && 98 === e
            ? (e = Bt(12, ll))
            : (e = Bt(
                (e = (function (e) {
                  switch (e) {
                    case 99:
                      return 15;
                    case 98:
                      return 10;
                    case 97:
                    case 96:
                      return 8;
                    case 95:
                      return 2;
                    default:
                      return 0;
                  }
                })(e)),
                ll,
              )),
          e
        );
      }
      function ml(e, t, n) {
        if (50 < al) throw ((al = 0), (ol = null), Error(o(185)));
        if (null === (e = hl(e, t))) return null;
        $t(e, t, n), e === Ns && (($s |= t), 4 === Fs && vl(e, zs));
        var r = Hi();
        1 === t
          ? 0 != (8 & Ds) && 0 == (48 & Ds)
            ? yl(e)
            : (gl(e, n), 0 === Ds && (Zs(), Zi()))
          : (0 == (4 & Ds) || (98 !== r && 99 !== r) || (null === il ? (il = new Set([e])) : il.add(e)), gl(e, n)),
          (qs = e);
      }
      function hl(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
          (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
        return 3 === n.tag ? n.stateNode : null;
      }
      function gl(e, t) {
        for (
          var n = e.callbackNode, r = e.suspendedLanes, i = e.pingedLanes, a = e.expirationTimes, s = e.pendingLanes;
          0 < s;

        ) {
          var l = 31 - Ht(s),
            c = 1 << l,
            d = a[l];
          if (-1 === d) {
            if (0 == (c & r) || 0 != (c & i)) {
              (d = t), It(c);
              var u = zt;
              a[l] = 10 <= u ? d + 250 : 6 <= u ? d + 5e3 : -1;
            }
          } else d <= t && (e.expiredLanes |= c);
          s &= ~c;
        }
        if (((r = Mt(e, e === Ns ? zs : 0)), (t = zt), 0 === r))
          null !== n && (n !== Ii && xi(n), (e.callbackNode = null), (e.callbackPriority = 0));
        else {
          if (null !== n) {
            if (e.callbackPriority === t) return;
            n !== Ii && xi(n);
          }
          15 === t
            ? ((n = yl.bind(null, e)), null === Fi ? ((Fi = [n]), (Bi = _i(Li, Wi))) : Fi.push(n), (n = Ii))
            : 14 === t
            ? (n = Gi(99, yl.bind(null, e)))
            : ((n = (function (e) {
                switch (e) {
                  case 15:
                  case 14:
                    return 99;
                  case 13:
                  case 12:
                  case 11:
                  case 10:
                    return 98;
                  case 9:
                  case 8:
                  case 7:
                  case 6:
                  case 4:
                  case 5:
                    return 97;
                  case 3:
                  case 2:
                  case 1:
                    return 95;
                  case 0:
                    return 90;
                  default:
                    throw Error(o(358, e));
                }
              })(t)),
              (n = Gi(n, bl.bind(null, e)))),
            (e.callbackPriority = t),
            (e.callbackNode = n);
        }
      }
      function bl(e) {
        if (((sl = -1), (cl = ll = 0), 0 != (48 & Ds))) throw Error(o(327));
        var t = e.callbackNode;
        if (zl() && e.callbackNode !== t) return null;
        var n = Mt(e, e === Ns ? zs : 0);
        if (0 === n) return null;
        var r = n,
          i = Ds;
        Ds |= 16;
        var a = xl();
        for ((Ns === e && zs === r) || (Zs(), Cl(e, r)); ; )
          try {
            Rl();
            break;
          } catch (l) {
            _l(e, l);
          }
        if (
          (ta(), (As.current = a), (Ds = i), null !== Os ? (r = 0) : ((Ns = null), (zs = 0), (r = Fs)), 0 != (js & $s))
        )
          Cl(e, 0);
        else if (0 !== r) {
          if (
            (2 === r &&
              ((Ds |= 64), e.hydrate && ((e.hydrate = !1), Gr(e.containerInfo)), 0 !== (n = Ft(e)) && (r = Tl(e, n))),
            1 === r)
          )
            throw ((t = Bs), Cl(e, 0), vl(e, n), gl(e, $i()), t);
          switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 2:
            case 5:
              Dl(e);
              break;
            case 3:
              if ((vl(e, n), (62914560 & n) === n && 10 < (r = Vs + 500 - $i()))) {
                if (0 !== Mt(e, 0)) break;
                if (((i = e.suspendedLanes) & n) !== n) {
                  fl(), (e.pingedLanes |= e.suspendedLanes & i);
                  break;
                }
                e.timeoutHandle = qr(Dl.bind(null, e), r);
                break;
              }
              Dl(e);
              break;
            case 4:
              if ((vl(e, n), (4186112 & n) === n)) break;
              for (r = e.eventTimes, i = -1; 0 < n; ) {
                var s = 31 - Ht(n);
                (a = 1 << s), (s = r[s]) > i && (i = s), (n &= ~a);
              }
              if (
                ((n = i),
                10 <
                  (n =
                    (120 > (n = $i() - n)
                      ? 120
                      : 480 > n
                      ? 480
                      : 1080 > n
                      ? 1080
                      : 1920 > n
                      ? 1920
                      : 3e3 > n
                      ? 3e3
                      : 4320 > n
                      ? 4320
                      : 1960 * Rs(n / 1960)) - n))
              ) {
                e.timeoutHandle = qr(Dl.bind(null, e), n);
                break;
              }
              Dl(e);
              break;
            default:
              throw Error(o(329));
          }
        }
        return gl(e, $i()), e.callbackNode === t ? bl.bind(null, e) : null;
      }
      function vl(e, t) {
        for (t &= ~Hs, t &= ~$s, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
          var n = 31 - Ht(t),
            r = 1 << n;
          (e[n] = -1), (t &= ~r);
        }
      }
      function yl(e) {
        if (0 != (48 & Ds)) throw Error(o(327));
        if ((zl(), e === Ns && 0 != (e.expiredLanes & zs))) {
          var t = zs,
            n = Tl(e, t);
          0 != (js & $s) && (n = Tl(e, (t = Mt(e, t))));
        } else n = Tl(e, (t = Mt(e, 0)));
        if (
          (0 !== e.tag &&
            2 === n &&
            ((Ds |= 64), e.hydrate && ((e.hydrate = !1), Gr(e.containerInfo)), 0 !== (t = Ft(e)) && (n = Tl(e, t))),
          1 === n)
        )
          throw ((n = Bs), Cl(e, 0), vl(e, t), gl(e, $i()), n);
        return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Dl(e), gl(e, $i()), null;
      }
      function kl(e, t) {
        var n = Ds;
        Ds |= 1;
        try {
          return e(t);
        } finally {
          0 === (Ds = n) && (Zs(), Zi());
        }
      }
      function wl(e, t) {
        var n = Ds;
        (Ds &= -2), (Ds |= 8);
        try {
          return e(t);
        } finally {
          0 === (Ds = n) && (Zs(), Zi());
        }
      }
      function Sl(e, t) {
        di(Ms, Is), (Is |= t), (js |= t);
      }
      function El() {
        (Is = Ms.current), ci(Ms);
      }
      function Cl(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var n = e.timeoutHandle;
        if ((-1 !== n && ((e.timeoutHandle = -1), Vr(n)), null !== Os))
          for (n = Os.return; null !== n; ) {
            var r = n;
            switch (r.tag) {
              case 1:
                null != (r = r.type.childContextTypes) && bi();
                break;
              case 3:
                Na(), ci(pi), ci(fi), Wa();
                break;
              case 5:
                za(r);
                break;
              case 4:
                Na();
                break;
              case 13:
              case 19:
                ci(Ia);
                break;
              case 10:
                na(r);
                break;
              case 23:
              case 24:
                El();
            }
            n = n.return;
          }
        (Ns = e), (Os = Gl(e.current, null)), (zs = Is = js = t), (Fs = 0), (Bs = null), (Hs = $s = Us = 0);
      }
      function _l(e, t) {
        for (;;) {
          var n = Os;
          try {
            if ((ta(), (Ka.current = Lo), to)) {
              for (var r = Xa.memoizedState; null !== r; ) {
                var i = r.queue;
                null !== i && (i.pending = null), (r = r.next);
              }
              to = !1;
            }
            if (((Qa = 0), (eo = Ja = Xa = null), (no = !1), (Ls.current = null), null === n || null === n.return)) {
              (Fs = 1), (Bs = t), (Os = null);
              break;
            }
            e: {
              var a = e,
                o = n.return,
                s = n,
                l = t;
              if (
                ((t = zs),
                (s.flags |= 2048),
                (s.firstEffect = s.lastEffect = null),
                null !== l && 'object' == typeof l && 'function' == typeof l.then)
              ) {
                var c = l;
                if (0 == (2 & s.mode)) {
                  var d = s.alternate;
                  d
                    ? ((s.updateQueue = d.updateQueue), (s.memoizedState = d.memoizedState), (s.lanes = d.lanes))
                    : ((s.updateQueue = null), (s.memoizedState = null));
                }
                var u = 0 != (1 & Ia.current),
                  f = o;
                do {
                  var p;
                  if ((p = 13 === f.tag)) {
                    var m = f.memoizedState;
                    if (null !== m) p = null !== m.dehydrated;
                    else {
                      var h = f.memoizedProps;
                      p = void 0 !== h.fallback && (!0 !== h.unstable_avoidThisFallback || !u);
                    }
                  }
                  if (p) {
                    var g = f.updateQueue;
                    if (null === g) {
                      var b = new Set();
                      b.add(c), (f.updateQueue = b);
                    } else g.add(c);
                    if (0 == (2 & f.mode)) {
                      if (((f.flags |= 64), (s.flags |= 16384), (s.flags &= -2981), 1 === s.tag))
                        if (null === s.alternate) s.tag = 17;
                        else {
                          var v = ca(-1, 1);
                          (v.tag = 2), da(s, v);
                        }
                      s.lanes |= 1;
                      break e;
                    }
                    (l = void 0), (s = t);
                    var y = a.pingCache;
                    if (
                      (null === y
                        ? ((y = a.pingCache = new us()), (l = new Set()), y.set(c, l))
                        : void 0 === (l = y.get(c)) && ((l = new Set()), y.set(c, l)),
                      !l.has(s))
                    ) {
                      l.add(s);
                      var k = Ul.bind(null, a, c, s);
                      c.then(k, k);
                    }
                    (f.flags |= 4096), (f.lanes = t);
                    break e;
                  }
                  f = f.return;
                } while (null !== f);
                l = Error(
                  (Z(s.type) || 'A React component') +
                    ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.',
                );
              }
              5 !== Fs && (Fs = 2), (l = cs(l, s)), (f = o);
              do {
                switch (f.tag) {
                  case 3:
                    (a = l), (f.flags |= 4096), (t &= -t), (f.lanes |= t), ua(f, fs(0, a, t));
                    break e;
                  case 1:
                    a = l;
                    var w = f.type,
                      S = f.stateNode;
                    if (
                      0 == (64 & f.flags) &&
                      ('function' == typeof w.getDerivedStateFromError ||
                        (null !== S && 'function' == typeof S.componentDidCatch && (null === Xs || !Xs.has(S))))
                    ) {
                      (f.flags |= 4096), (t &= -t), (f.lanes |= t), ua(f, ps(f, a, t));
                      break e;
                    }
                }
                f = f.return;
              } while (null !== f);
            }
            Ll(n);
          } catch (E) {
            (t = E), Os === n && null !== n && (Os = n = n.return);
            continue;
          }
          break;
        }
      }
      function xl() {
        var e = As.current;
        return (As.current = Lo), null === e ? Lo : e;
      }
      function Tl(e, t) {
        var n = Ds;
        Ds |= 16;
        var r = xl();
        for ((Ns === e && zs === t) || Cl(e, t); ; )
          try {
            Pl();
            break;
          } catch (i) {
            _l(e, i);
          }
        if ((ta(), (Ds = n), (As.current = r), null !== Os)) throw Error(o(261));
        return (Ns = null), (zs = 0), Fs;
      }
      function Pl() {
        for (; null !== Os; ) Al(Os);
      }
      function Rl() {
        for (; null !== Os && !Ti(); ) Al(Os);
      }
      function Al(e) {
        var t = Ws(e.alternate, e, Is);
        (e.memoizedProps = e.pendingProps), null === t ? Ll(e) : (Os = t), (Ls.current = null);
      }
      function Ll(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (((e = t.return), 0 == (2048 & t.flags))) {
            if (null !== (n = ss(n, t, Is))) return void (Os = n);
            if (
              (24 !== (n = t).tag && 23 !== n.tag) ||
              null === n.memoizedState ||
              0 != (1073741824 & Is) ||
              0 == (4 & n.mode)
            ) {
              for (var r = 0, i = n.child; null !== i; ) (r |= i.lanes | i.childLanes), (i = i.sibling);
              n.childLanes = r;
            }
            null !== e &&
              0 == (2048 & e.flags) &&
              (null === e.firstEffect && (e.firstEffect = t.firstEffect),
              null !== t.lastEffect &&
                (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), (e.lastEffect = t.lastEffect)),
              1 < t.flags &&
                (null !== e.lastEffect ? (e.lastEffect.nextEffect = t) : (e.firstEffect = t), (e.lastEffect = t)));
          } else {
            if (null !== (n = ls(t))) return (n.flags &= 2047), void (Os = n);
            null !== e && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
          }
          if (null !== (t = t.sibling)) return void (Os = t);
          Os = t = e;
        } while (null !== t);
        0 === Fs && (Fs = 5);
      }
      function Dl(e) {
        var t = Hi();
        return Vi(99, Nl.bind(null, e, t)), null;
      }
      function Nl(e, t) {
        do {
          zl();
        } while (null !== el);
        if (0 != (48 & Ds)) throw Error(o(327));
        var n = e.finishedWork;
        if (null === n) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(o(177));
        e.callbackNode = null;
        var r = n.lanes | n.childLanes,
          i = r,
          a = e.pendingLanes & ~i;
        (e.pendingLanes = i),
          (e.suspendedLanes = 0),
          (e.pingedLanes = 0),
          (e.expiredLanes &= i),
          (e.mutableReadLanes &= i),
          (e.entangledLanes &= i),
          (i = e.entanglements);
        for (var s = e.eventTimes, l = e.expirationTimes; 0 < a; ) {
          var c = 31 - Ht(a),
            d = 1 << c;
          (i[c] = 0), (s[c] = -1), (l[c] = -1), (a &= ~d);
        }
        if (
          (null !== il && 0 == (24 & r) && il.has(e) && il.delete(e),
          e === Ns && ((Os = Ns = null), (zs = 0)),
          1 < n.flags
            ? null !== n.lastEffect
              ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
              : (r = n)
            : (r = n.firstEffect),
          null !== r)
        ) {
          if (((i = Ds), (Ds |= 32), (Ls.current = null), (jr = Wt), gr((s = hr())))) {
            if ('selectionStart' in s) l = { start: s.selectionStart, end: s.selectionEnd };
            else
              e: if (
                ((l = ((l = s.ownerDocument) && l.defaultView) || window),
                (d = l.getSelection && l.getSelection()) && 0 !== d.rangeCount)
              ) {
                (l = d.anchorNode), (a = d.anchorOffset), (c = d.focusNode), (d = d.focusOffset);
                try {
                  l.nodeType, c.nodeType;
                } catch (x) {
                  l = null;
                  break e;
                }
                var u = 0,
                  f = -1,
                  p = -1,
                  m = 0,
                  h = 0,
                  g = s,
                  b = null;
                t: for (;;) {
                  for (
                    var v;
                    g !== l || (0 !== a && 3 !== g.nodeType) || (f = u + a),
                      g !== c || (0 !== d && 3 !== g.nodeType) || (p = u + d),
                      3 === g.nodeType && (u += g.nodeValue.length),
                      null !== (v = g.firstChild);

                  )
                    (b = g), (g = v);
                  for (;;) {
                    if (g === s) break t;
                    if (
                      (b === l && ++m === a && (f = u), b === c && ++h === d && (p = u), null !== (v = g.nextSibling))
                    )
                      break;
                    b = (g = b).parentNode;
                  }
                  g = v;
                }
                l = -1 === f || -1 === p ? null : { start: f, end: p };
              } else l = null;
            l = l || { start: 0, end: 0 };
          } else l = null;
          (Ur = { focusedElem: s, selectionRange: l }), (Wt = !1), (dl = null), (ul = !1), (Ks = r);
          do {
            try {
              Ol();
            } catch (x) {
              if (null === Ks) throw Error(o(330));
              jl(Ks, x), (Ks = Ks.nextEffect);
            }
          } while (null !== Ks);
          (dl = null), (Ks = r);
          do {
            try {
              for (s = e; null !== Ks; ) {
                var y = Ks.flags;
                if ((16 & y && be(Ks.stateNode, ''), 128 & y)) {
                  var k = Ks.alternate;
                  if (null !== k) {
                    var w = k.ref;
                    null !== w && ('function' == typeof w ? w(null) : (w.current = null));
                  }
                }
                switch (1038 & y) {
                  case 2:
                    Ss(Ks), (Ks.flags &= -3);
                    break;
                  case 6:
                    Ss(Ks), (Ks.flags &= -3), xs(Ks.alternate, Ks);
                    break;
                  case 1024:
                    Ks.flags &= -1025;
                    break;
                  case 1028:
                    (Ks.flags &= -1025), xs(Ks.alternate, Ks);
                    break;
                  case 4:
                    xs(Ks.alternate, Ks);
                    break;
                  case 8:
                    _s(s, (l = Ks));
                    var S = l.alternate;
                    ks(l), null !== S && ks(S);
                }
                Ks = Ks.nextEffect;
              }
            } catch (x) {
              if (null === Ks) throw Error(o(330));
              jl(Ks, x), (Ks = Ks.nextEffect);
            }
          } while (null !== Ks);
          if (
            ((w = Ur),
            (k = hr()),
            (y = w.focusedElem),
            (s = w.selectionRange),
            k !== y && y && y.ownerDocument && mr(y.ownerDocument.documentElement, y))
          ) {
            null !== s &&
              gr(y) &&
              ((k = s.start),
              void 0 === (w = s.end) && (w = k),
              'selectionStart' in y
                ? ((y.selectionStart = k), (y.selectionEnd = Math.min(w, y.value.length)))
                : (w = ((k = y.ownerDocument || document) && k.defaultView) || window).getSelection &&
                  ((w = w.getSelection()),
                  (l = y.textContent.length),
                  (S = Math.min(s.start, l)),
                  (s = void 0 === s.end ? S : Math.min(s.end, l)),
                  !w.extend && S > s && ((l = s), (s = S), (S = l)),
                  (l = pr(y, S)),
                  (a = pr(y, s)),
                  l &&
                    a &&
                    (1 !== w.rangeCount ||
                      w.anchorNode !== l.node ||
                      w.anchorOffset !== l.offset ||
                      w.focusNode !== a.node ||
                      w.focusOffset !== a.offset) &&
                    ((k = k.createRange()).setStart(l.node, l.offset),
                    w.removeAllRanges(),
                    S > s
                      ? (w.addRange(k), w.extend(a.node, a.offset))
                      : (k.setEnd(a.node, a.offset), w.addRange(k))))),
              (k = []);
            for (w = y; (w = w.parentNode); )
              1 === w.nodeType && k.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
            for ('function' == typeof y.focus && y.focus(), y = 0; y < k.length; y++)
              ((w = k[y]).element.scrollLeft = w.left), (w.element.scrollTop = w.top);
          }
          (Wt = !!jr), (Ur = jr = null), (e.current = n), (Ks = r);
          do {
            try {
              for (y = e; null !== Ks; ) {
                var E = Ks.flags;
                if ((36 & E && bs(y, Ks.alternate, Ks), 128 & E)) {
                  k = void 0;
                  var C = Ks.ref;
                  if (null !== C) {
                    var _ = Ks.stateNode;
                    Ks.tag, (k = _), 'function' == typeof C ? C(k) : (C.current = k);
                  }
                }
                Ks = Ks.nextEffect;
              }
            } catch (x) {
              if (null === Ks) throw Error(o(330));
              jl(Ks, x), (Ks = Ks.nextEffect);
            }
          } while (null !== Ks);
          (Ks = null), Mi(), (Ds = i);
        } else e.current = n;
        if (Js) (Js = !1), (el = e), (tl = t);
        else
          for (Ks = r; null !== Ks; )
            (t = Ks.nextEffect),
              (Ks.nextEffect = null),
              8 & Ks.flags && (((E = Ks).sibling = null), (E.stateNode = null)),
              (Ks = t);
        if (
          (0 === (r = e.pendingLanes) && (Xs = null),
          1 === r ? (e === ol ? al++ : ((al = 0), (ol = e))) : (al = 0),
          (n = n.stateNode),
          Ei && 'function' == typeof Ei.onCommitFiberRoot)
        )
          try {
            Ei.onCommitFiberRoot(Si, n, void 0, 64 == (64 & n.current.flags));
          } catch (x) {}
        if ((gl(e, $i()), Ys)) throw ((Ys = !1), (e = Qs), (Qs = null), e);
        return 0 != (8 & Ds) || Zi(), null;
      }
      function Ol() {
        for (; null !== Ks; ) {
          var e = Ks.alternate;
          ul ||
            null === dl ||
            (0 != (8 & Ks.flags) ? Je(Ks, dl) && (ul = !0) : 13 === Ks.tag && Ps(e, Ks) && Je(Ks, dl) && (ul = !0));
          var t = Ks.flags;
          0 != (256 & t) && gs(e, Ks),
            0 == (512 & t) ||
              Js ||
              ((Js = !0),
              Gi(97, function () {
                return zl(), null;
              })),
            (Ks = Ks.nextEffect);
        }
      }
      function zl() {
        if (90 !== tl) {
          var e = 97 < tl ? 97 : tl;
          return (tl = 90), Vi(e, Fl);
        }
        return !1;
      }
      function Il(e, t) {
        nl.push(t, e),
          Js ||
            ((Js = !0),
            Gi(97, function () {
              return zl(), null;
            }));
      }
      function Ml(e, t) {
        rl.push(t, e),
          Js ||
            ((Js = !0),
            Gi(97, function () {
              return zl(), null;
            }));
      }
      function Fl() {
        if (null === el) return !1;
        var e = el;
        if (((el = null), 0 != (48 & Ds))) throw Error(o(331));
        var t = Ds;
        Ds |= 32;
        var n = rl;
        rl = [];
        for (var r = 0; r < n.length; r += 2) {
          var i = n[r],
            a = n[r + 1],
            s = i.destroy;
          if (((i.destroy = void 0), 'function' == typeof s))
            try {
              s();
            } catch (c) {
              if (null === a) throw Error(o(330));
              jl(a, c);
            }
        }
        for (n = nl, nl = [], r = 0; r < n.length; r += 2) {
          (i = n[r]), (a = n[r + 1]);
          try {
            var l = i.create;
            i.destroy = l();
          } catch (c) {
            if (null === a) throw Error(o(330));
            jl(a, c);
          }
        }
        for (l = e.current.firstEffect; null !== l; )
          (e = l.nextEffect), (l.nextEffect = null), 8 & l.flags && ((l.sibling = null), (l.stateNode = null)), (l = e);
        return (Ds = t), Zi(), !0;
      }
      function Bl(e, t, n) {
        da(e, (t = fs(0, (t = cs(n, t)), 1))), (t = fl()), null !== (e = hl(e, 1)) && ($t(e, 1, t), gl(e, t));
      }
      function jl(e, t) {
        if (3 === e.tag) Bl(e, e, t);
        else
          for (var n = e.return; null !== n; ) {
            if (3 === n.tag) {
              Bl(n, e, t);
              break;
            }
            if (1 === n.tag) {
              var r = n.stateNode;
              if (
                'function' == typeof n.type.getDerivedStateFromError ||
                ('function' == typeof r.componentDidCatch && (null === Xs || !Xs.has(r)))
              ) {
                var i = ps(n, (e = cs(t, e)), 1);
                if ((da(n, i), (i = fl()), null !== (n = hl(n, 1)))) $t(n, 1, i), gl(n, i);
                else if ('function' == typeof r.componentDidCatch && (null === Xs || !Xs.has(r)))
                  try {
                    r.componentDidCatch(t, e);
                  } catch (a) {}
                break;
              }
            }
            n = n.return;
          }
      }
      function Ul(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          (t = fl()),
          (e.pingedLanes |= e.suspendedLanes & n),
          Ns === e &&
            (zs & n) === n &&
            (4 === Fs || (3 === Fs && (62914560 & zs) === zs && 500 > $i() - Vs) ? Cl(e, 0) : (Hs |= n)),
          gl(e, t);
      }
      function $l(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t),
          0 === (t = 0) &&
            (0 == (2 & (t = e.mode))
              ? (t = 1)
              : 0 == (4 & t)
              ? (t = 99 === Hi() ? 1 : 2)
              : (0 === ll && (ll = js), 0 === (t = jt(62914560 & ~ll)) && (t = 4194304))),
          (n = fl()),
          null !== (e = hl(e, t)) && ($t(e, t, n), gl(e, n));
      }
      function Hl(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
          (this.mode = r),
          (this.flags = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null);
      }
      function ql(e, t, n, r) {
        return new Hl(e, t, n, r);
      }
      function Vl(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function Gl(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = ql(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function Zl(e, t, n, r, i, a) {
        var s = 2;
        if (((r = e), 'function' == typeof e)) Vl(e) && (s = 1);
        else if ('string' == typeof e) s = 5;
        else
          e: switch (e) {
            case C:
              return Wl(n.children, i, a, t);
            case I:
              (s = 8), (i |= 16);
              break;
            case _:
              (s = 8), (i |= 1);
              break;
            case x:
              return ((e = ql(12, n, t, 8 | i)).elementType = x), (e.type = x), (e.lanes = a), e;
            case A:
              return ((e = ql(13, n, t, i)).type = A), (e.elementType = A), (e.lanes = a), e;
            case L:
              return ((e = ql(19, n, t, i)).elementType = L), (e.lanes = a), e;
            case M:
              return Kl(n, i, a, t);
            case F:
              return ((e = ql(24, n, t, i)).elementType = F), (e.lanes = a), e;
            default:
              if ('object' == typeof e && null !== e)
                switch (e.$$typeof) {
                  case T:
                    s = 10;
                    break e;
                  case P:
                    s = 9;
                    break e;
                  case R:
                    s = 11;
                    break e;
                  case D:
                    s = 14;
                    break e;
                  case N:
                    (s = 16), (r = null);
                    break e;
                  case O:
                    s = 22;
                    break e;
                }
              throw Error(o(130, null == e ? e : typeof e, ''));
          }
        return ((t = ql(s, n, t, i)).elementType = e), (t.type = r), (t.lanes = a), t;
      }
      function Wl(e, t, n, r) {
        return ((e = ql(7, e, r, t)).lanes = n), e;
      }
      function Kl(e, t, n, r) {
        return ((e = ql(23, e, r, t)).elementType = M), (e.lanes = n), e;
      }
      function Yl(e, t, n) {
        return ((e = ql(6, e, null, t)).lanes = n), e;
      }
      function Ql(e, t, n) {
        return (
          ((t = ql(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
          (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
          t
        );
      }
      function Xl(e, t, n) {
        (this.tag = t),
          (this.containerInfo = e),
          (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
          (this.timeoutHandle = -1),
          (this.pendingContext = this.context = null),
          (this.hydrate = n),
          (this.callbackNode = null),
          (this.callbackPriority = 0),
          (this.eventTimes = Ut(0)),
          (this.expirationTimes = Ut(-1)),
          (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
              0),
          (this.entanglements = Ut(0)),
          (this.mutableSourceEagerHydrationData = null);
      }
      function Jl(e, t, n, r) {
        var i = t.current,
          a = fl(),
          s = pl(i);
        e: if (n) {
          t: {
            if (Ke((n = n._reactInternals)) !== n || 1 !== n.tag) throw Error(o(170));
            var l = n;
            do {
              switch (l.tag) {
                case 3:
                  l = l.stateNode.context;
                  break t;
                case 1:
                  if (gi(l.type)) {
                    l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              l = l.return;
            } while (null !== l);
            throw Error(o(171));
          }
          if (1 === n.tag) {
            var c = n.type;
            if (gi(c)) {
              n = yi(n, c, l);
              break e;
            }
          }
          n = l;
        } else n = ui;
        return (
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = ca(a, s)).payload = { element: e }),
          null !== (r = void 0 === r ? null : r) && (t.callback = r),
          da(i, t),
          ml(i, s, a),
          s
        );
      }
      function ec(e) {
        return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
      }
      function tc(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t;
        }
      }
      function nc(e, t) {
        tc(e, t), (e = e.alternate) && tc(e, t);
      }
      function rc(e, t, n) {
        var r = (null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources) || null;
        if (
          ((n = new Xl(e, t, null != n && !0 === n.hydrate)),
          (t = ql(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
          (n.current = t),
          (t.stateNode = n),
          sa(t),
          (e[Jr] = n.current),
          Lr(8 === e.nodeType ? e.parentNode : e),
          r)
        )
          for (e = 0; e < r.length; e++) {
            var i = (t = r[e])._getVersion;
            (i = i(t._source)),
              null == n.mutableSourceEagerHydrationData
                ? (n.mutableSourceEagerHydrationData = [t, i])
                : n.mutableSourceEagerHydrationData.push(t, i);
          }
        this._internalRoot = n;
      }
      function ic(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
        );
      }
      function ac(e, t, n, r, i) {
        var a = n._reactRootContainer;
        if (a) {
          var o = a._internalRoot;
          if ('function' == typeof i) {
            var s = i;
            i = function () {
              var e = ec(o);
              s.call(e);
            };
          }
          Jl(t, o, e, i);
        } else {
          if (
            ((a = n._reactRootContainer =
              (function (e, t) {
                if (
                  (t ||
                    (t = !(
                      !(t = e ? (9 === e.nodeType ? e.documentElement : e.firstChild) : null) ||
                      1 !== t.nodeType ||
                      !t.hasAttribute('data-reactroot')
                    )),
                  !t)
                )
                  for (var n; (n = e.lastChild); ) e.removeChild(n);
                return new rc(e, 0, t ? { hydrate: !0 } : void 0);
              })(n, r)),
            (o = a._internalRoot),
            'function' == typeof i)
          ) {
            var l = i;
            i = function () {
              var e = ec(o);
              l.call(e);
            };
          }
          wl(function () {
            Jl(t, o, e, i);
          });
        }
        return ec(o);
      }
      function oc(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!ic(t)) throw Error(o(200));
        return (function (e, t, n) {
          var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          return { $$typeof: E, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
        })(e, t, null, n);
      }
      (Ws = function (e, t, n) {
        var r = t.lanes;
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || pi.current) Io = !0;
          else {
            if (0 == (n & r)) {
              switch (((Io = !1), t.tag)) {
                case 3:
                  Go(t), Ga();
                  break;
                case 5:
                  Oa(t);
                  break;
                case 1:
                  gi(t.type) && ki(t);
                  break;
                case 4:
                  Da(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  r = t.memoizedProps.value;
                  var i = t.type._context;
                  di(Qi, i._currentValue), (i._currentValue = r);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 != (n & t.child.childLanes)
                      ? Xo(e, t, n)
                      : (di(Ia, 1 & Ia.current), null !== (t = as(e, t, n)) ? t.sibling : null);
                  di(Ia, 1 & Ia.current);
                  break;
                case 19:
                  if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
                    if (r) return is(e, t, n);
                    t.flags |= 64;
                  }
                  if (
                    (null !== (i = t.memoizedState) && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                    di(Ia, Ia.current),
                    r)
                  )
                    break;
                  return null;
                case 23:
                case 24:
                  return (t.lanes = 0), Uo(e, t, n);
              }
              return as(e, t, n);
            }
            Io = 0 != (16384 & e.flags);
          }
        else Io = !1;
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            if (
              ((r = t.type),
              null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (e = t.pendingProps),
              (i = hi(t, fi.current)),
              ia(t, n),
              (i = ao(null, t, r, e, i, n)),
              (t.flags |= 1),
              'object' == typeof i && null !== i && 'function' == typeof i.render && void 0 === i.$$typeof)
            ) {
              if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), gi(r))) {
                var a = !0;
                ki(t);
              } else a = !1;
              (t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null), sa(t);
              var s = r.getDerivedStateFromProps;
              'function' == typeof s && ha(t, r, s, e),
                (i.updater = ga),
                (t.stateNode = i),
                (i._reactInternals = t),
                ka(t, r, e, n),
                (t = Vo(null, t, r, !0, a, n));
            } else (t.tag = 0), Mo(null, t, i, n), (t = t.child);
            return t;
          case 16:
            i = t.elementType;
            e: {
              switch (
                (null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (i = (a = i._init)(i._payload)),
                (t.type = i),
                (a = t.tag =
                  (function (e) {
                    if ('function' == typeof e) return Vl(e) ? 1 : 0;
                    if (null != e) {
                      if ((e = e.$$typeof) === R) return 11;
                      if (e === D) return 14;
                    }
                    return 2;
                  })(i)),
                (e = Yi(i, e)),
                a)
              ) {
                case 0:
                  t = Ho(null, t, i, e, n);
                  break e;
                case 1:
                  t = qo(null, t, i, e, n);
                  break e;
                case 11:
                  t = Fo(null, t, i, e, n);
                  break e;
                case 14:
                  t = Bo(null, t, i, Yi(i.type, e), r, n);
                  break e;
              }
              throw Error(o(306, i, ''));
            }
            return t;
          case 0:
            return (r = t.type), (i = t.pendingProps), Ho(e, t, r, (i = t.elementType === r ? i : Yi(r, i)), n);
          case 1:
            return (r = t.type), (i = t.pendingProps), qo(e, t, r, (i = t.elementType === r ? i : Yi(r, i)), n);
          case 3:
            if ((Go(t), (r = t.updateQueue), null === e || null === r)) throw Error(o(282));
            if (
              ((r = t.pendingProps),
              (i = null !== (i = t.memoizedState) ? i.element : null),
              la(e, t),
              fa(t, r, null, n),
              (r = t.memoizedState.element) === i)
            )
              Ga(), (t = as(e, t, n));
            else {
              if (
                ((a = (i = t.stateNode).hydrate) &&
                  ((Ba = Zr(t.stateNode.containerInfo.firstChild)), (Fa = t), (a = ja = !0)),
                a)
              ) {
                if (null != (e = i.mutableSourceEagerHydrationData))
                  for (i = 0; i < e.length; i += 2) ((a = e[i])._workInProgressVersionPrimary = e[i + 1]), Za.push(a);
                for (n = xa(t, null, r, n), t.child = n; n; ) (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
              } else Mo(e, t, r, n), Ga();
              t = t.child;
            }
            return t;
          case 5:
            return (
              Oa(t),
              null === e && Ha(t),
              (r = t.type),
              (i = t.pendingProps),
              (a = null !== e ? e.memoizedProps : null),
              (s = i.children),
              Hr(r, i) ? (s = null) : null !== a && Hr(r, a) && (t.flags |= 16),
              $o(e, t),
              Mo(e, t, s, n),
              t.child
            );
          case 6:
            return null === e && Ha(t), null;
          case 13:
            return Xo(e, t, n);
          case 4:
            return (
              Da(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = _a(t, null, r, n)) : Mo(e, t, r, n),
              t.child
            );
          case 11:
            return (r = t.type), (i = t.pendingProps), Fo(e, t, r, (i = t.elementType === r ? i : Yi(r, i)), n);
          case 7:
            return Mo(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return Mo(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              (r = t.type._context), (i = t.pendingProps), (s = t.memoizedProps), (a = i.value);
              var l = t.type._context;
              if ((di(Qi, l._currentValue), (l._currentValue = a), null !== s))
                if (
                  ((l = s.value),
                  0 ===
                    (a = cr(l, a)
                      ? 0
                      : 0 |
                        ('function' == typeof r._calculateChangedBits ? r._calculateChangedBits(l, a) : 1073741823)))
                ) {
                  if (s.children === i.children && !pi.current) {
                    t = as(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (l = t.child) && (l.return = t); null !== l; ) {
                    var c = l.dependencies;
                    if (null !== c) {
                      s = l.child;
                      for (var d = c.firstContext; null !== d; ) {
                        if (d.context === r && 0 != (d.observedBits & a)) {
                          1 === l.tag && (((d = ca(-1, n & -n)).tag = 2), da(l, d)),
                            (l.lanes |= n),
                            null !== (d = l.alternate) && (d.lanes |= n),
                            ra(l.return, n),
                            (c.lanes |= n);
                          break;
                        }
                        d = d.next;
                      }
                    } else s = 10 === l.tag && l.type === t.type ? null : l.child;
                    if (null !== s) s.return = l;
                    else
                      for (s = l; null !== s; ) {
                        if (s === t) {
                          s = null;
                          break;
                        }
                        if (null !== (l = s.sibling)) {
                          (l.return = s.return), (s = l);
                          break;
                        }
                        s = s.return;
                      }
                    l = s;
                  }
              Mo(e, t, i.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (i = t.type),
              (r = (a = t.pendingProps).children),
              ia(t, n),
              (r = r((i = aa(i, a.unstable_observedBits)))),
              (t.flags |= 1),
              Mo(e, t, r, n),
              t.child
            );
          case 14:
            return (a = Yi((i = t.type), t.pendingProps)), Bo(e, t, i, (a = Yi(i.type, a)), r, n);
          case 15:
            return jo(e, t, t.type, t.pendingProps, r, n);
          case 17:
            return (
              (r = t.type),
              (i = t.pendingProps),
              (i = t.elementType === r ? i : Yi(r, i)),
              null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (t.tag = 1),
              gi(r) ? ((e = !0), ki(t)) : (e = !1),
              ia(t, n),
              va(t, r, i),
              ka(t, r, i, n),
              Vo(null, t, r, !0, e, n)
            );
          case 19:
            return is(e, t, n);
          case 23:
          case 24:
            return Uo(e, t, n);
        }
        throw Error(o(156, t.tag));
      }),
        (rc.prototype.render = function (e) {
          Jl(e, this._internalRoot, null, null);
        }),
        (rc.prototype.unmount = function () {
          var e = this._internalRoot,
            t = e.containerInfo;
          Jl(null, e, null, function () {
            t[Jr] = null;
          });
        }),
        (et = function (e) {
          13 === e.tag && (ml(e, 4, fl()), nc(e, 4));
        }),
        (tt = function (e) {
          13 === e.tag && (ml(e, 67108864, fl()), nc(e, 67108864));
        }),
        (nt = function (e) {
          if (13 === e.tag) {
            var t = fl(),
              n = pl(e);
            ml(e, n, t), nc(e, n);
          }
        }),
        (rt = function (e, t) {
          return t();
        }),
        (xe = function (e, t, n) {
          switch (t) {
            case 'input':
              if ((ne(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var i = ii(r);
                    if (!i) throw Error(o(90));
                    Q(r), ne(r, i);
                  }
                }
              }
              break;
            case 'textarea':
              ce(e, n);
              break;
            case 'select':
              null != (t = n.value) && oe(e, !!n.multiple, t, !1);
          }
        }),
        (De = kl),
        (Ne = function (e, t, n, r, i) {
          var a = Ds;
          Ds |= 4;
          try {
            return Vi(98, e.bind(null, t, n, r, i));
          } finally {
            0 === (Ds = a) && (Zs(), Zi());
          }
        }),
        (Oe = function () {
          0 == (49 & Ds) &&
            ((function () {
              if (null !== il) {
                var e = il;
                (il = null),
                  e.forEach(function (e) {
                    (e.expiredLanes |= 24 & e.pendingLanes), gl(e, $i());
                  });
              }
              Zi();
            })(),
            zl());
        }),
        (ze = function (e, t) {
          var n = Ds;
          Ds |= 2;
          try {
            return e(t);
          } finally {
            0 === (Ds = n) && (Zs(), Zi());
          }
        });
      var sc = { Events: [ni, ri, ii, Ae, Le, zl, { current: !1 }] },
        lc = { findFiberByHostInstance: ti, bundleType: 0, version: '17.0.2', rendererPackageName: 'react-dom' },
        cc = {
          bundleType: lc.bundleType,
          version: lc.version,
          rendererPackageName: lc.rendererPackageName,
          rendererConfig: lc.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: w.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = Xe(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance:
            lc.findFiberByHostInstance ||
            function () {
              return null;
            },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
        };
      if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var dc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!dc.isDisabled && dc.supportsFiber)
          try {
            (Si = dc.inject(cc)), (Ei = dc);
          } catch (he) {}
      }
      t.hydrate = function (e, t, n) {
        if (!ic(t)) throw Error(o(200));
        return ac(null, e, t, !0, n);
      };
    },
    8316: (e, t, n) => {
      'use strict';
      !(function e() {
        if (
          'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {
            console.error(t);
          }
      })(),
        (e.exports = n(2967));
    },
    8435: e => {
      var t = 'undefined' != typeof Element,
        n = 'function' == typeof Map,
        r = 'function' == typeof Set,
        i = 'function' == typeof ArrayBuffer && !!ArrayBuffer.isView;
      function a(e, o) {
        if (e === o) return !0;
        if (e && o && 'object' == typeof e && 'object' == typeof o) {
          if (e.constructor !== o.constructor) return !1;
          var s, l, c, d;
          if (Array.isArray(e)) {
            if ((s = e.length) != o.length) return !1;
            for (l = s; 0 != l--; ) if (!a(e[l], o[l])) return !1;
            return !0;
          }
          if (n && e instanceof Map && o instanceof Map) {
            if (e.size !== o.size) return !1;
            for (d = e.entries(); !(l = d.next()).done; ) if (!o.has(l.value[0])) return !1;
            for (d = e.entries(); !(l = d.next()).done; ) if (!a(l.value[1], o.get(l.value[0]))) return !1;
            return !0;
          }
          if (r && e instanceof Set && o instanceof Set) {
            if (e.size !== o.size) return !1;
            for (d = e.entries(); !(l = d.next()).done; ) if (!o.has(l.value[0])) return !1;
            return !0;
          }
          if (i && ArrayBuffer.isView(e) && ArrayBuffer.isView(o)) {
            if ((s = e.length) != o.length) return !1;
            for (l = s; 0 != l--; ) if (e[l] !== o[l]) return !1;
            return !0;
          }
          if (e.constructor === RegExp) return e.source === o.source && e.flags === o.flags;
          if (
            e.valueOf !== Object.prototype.valueOf &&
            'function' == typeof e.valueOf &&
            'function' == typeof o.valueOf
          )
            return e.valueOf() === o.valueOf();
          if (
            e.toString !== Object.prototype.toString &&
            'function' == typeof e.toString &&
            'function' == typeof o.toString
          )
            return e.toString() === o.toString();
          if ((s = (c = Object.keys(e)).length) !== Object.keys(o).length) return !1;
          for (l = s; 0 != l--; ) if (!Object.prototype.hasOwnProperty.call(o, c[l])) return !1;
          if (t && e instanceof Element) return !1;
          for (l = s; 0 != l--; )
            if ((('_owner' !== c[l] && '__v' !== c[l] && '__o' !== c[l]) || !e.$$typeof) && !a(e[c[l]], o[c[l]]))
              return !1;
          return !0;
        }
        return e != e && o != o;
      }
      e.exports = function (e, t) {
        try {
          return a(e, t);
        } catch (n) {
          if ((n.message || '').match(/stack|recursion/i))
            return console.warn('react-fast-compare cannot handle circular refs'), !1;
          throw n;
        }
      };
    },
    2175: (e, t, n) => {
      'use strict';
      n.d(t, { B6: () => V, ql: () => J });
      var r = n(2784),
        i = n(3980),
        a = n.n(i),
        o = n(8435),
        s = n.n(o),
        l = n(7677),
        c = n.n(l),
        d = n(8665),
        u = n.n(d);
      function f() {
        return (
          (f =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          f.apply(this, arguments)
        );
      }
      function p(e, t) {
        (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), m(e, t);
      }
      function m(e, t) {
        return (
          (m =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          m(e, t)
        );
      }
      function h(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) t.indexOf((n = a[r])) >= 0 || (i[n] = e[n]);
        return i;
      }
      var g = {
          BASE: 'base',
          BODY: 'body',
          HEAD: 'head',
          HTML: 'html',
          LINK: 'link',
          META: 'meta',
          NOSCRIPT: 'noscript',
          SCRIPT: 'script',
          STYLE: 'style',
          TITLE: 'title',
          FRAGMENT: 'Symbol(react.fragment)',
        },
        b = { rel: ['amphtml', 'canonical', 'alternate'] },
        v = { type: ['application/ld+json'] },
        y = {
          charset: '',
          name: ['robots', 'description'],
          property: [
            'og:type',
            'og:title',
            'og:url',
            'og:image',
            'og:image:alt',
            'og:description',
            'twitter:url',
            'twitter:title',
            'twitter:description',
            'twitter:image',
            'twitter:image:alt',
            'twitter:card',
            'twitter:site',
          ],
        },
        k = Object.keys(g).map(function (e) {
          return g[e];
        }),
        w = {
          accesskey: 'accessKey',
          charset: 'charSet',
          class: 'className',
          contenteditable: 'contentEditable',
          contextmenu: 'contextMenu',
          'http-equiv': 'httpEquiv',
          itemprop: 'itemProp',
          tabindex: 'tabIndex',
        },
        S = Object.keys(w).reduce(function (e, t) {
          return (e[w[t]] = t), e;
        }, {}),
        E = function (e, t) {
          for (var n = e.length - 1; n >= 0; n -= 1) {
            var r = e[n];
            if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
          }
          return null;
        },
        C = function (e) {
          var t = E(e, g.TITLE),
            n = E(e, 'titleTemplate');
          if ((Array.isArray(t) && (t = t.join('')), n && t))
            return n.replace(/%s/g, function () {
              return t;
            });
          var r = E(e, 'defaultTitle');
          return t || r || void 0;
        },
        _ = function (e) {
          return E(e, 'onChangeClientState') || function () {};
        },
        x = function (e, t) {
          return t
            .filter(function (t) {
              return void 0 !== t[e];
            })
            .map(function (t) {
              return t[e];
            })
            .reduce(function (e, t) {
              return f({}, e, t);
            }, {});
        },
        T = function (e, t) {
          return t
            .filter(function (e) {
              return void 0 !== e[g.BASE];
            })
            .map(function (e) {
              return e[g.BASE];
            })
            .reverse()
            .reduce(function (t, n) {
              if (!t.length)
                for (var r = Object.keys(n), i = 0; i < r.length; i += 1) {
                  var a = r[i].toLowerCase();
                  if (-1 !== e.indexOf(a) && n[a]) return t.concat(n);
                }
              return t;
            }, []);
        },
        P = function (e, t, n) {
          var r = {};
          return n
            .filter(function (t) {
              return (
                !!Array.isArray(t[e]) ||
                (void 0 !== t[e] &&
                  console &&
                  'function' == typeof console.warn &&
                  console.warn('Helmet: ' + e + ' should be of type "Array". Instead found type "' + typeof t[e] + '"'),
                !1)
              );
            })
            .map(function (t) {
              return t[e];
            })
            .reverse()
            .reduce(function (e, n) {
              var i = {};
              n.filter(function (e) {
                for (var n, a = Object.keys(e), o = 0; o < a.length; o += 1) {
                  var s = a[o],
                    l = s.toLowerCase();
                  -1 === t.indexOf(l) ||
                    ('rel' === n && 'canonical' === e[n].toLowerCase()) ||
                    ('rel' === l && 'stylesheet' === e[l].toLowerCase()) ||
                    (n = l),
                    -1 === t.indexOf(s) || ('innerHTML' !== s && 'cssText' !== s && 'itemprop' !== s) || (n = s);
                }
                if (!n || !e[n]) return !1;
                var c = e[n].toLowerCase();
                return r[n] || (r[n] = {}), i[n] || (i[n] = {}), !r[n][c] && ((i[n][c] = !0), !0);
              })
                .reverse()
                .forEach(function (t) {
                  return e.push(t);
                });
              for (var a = Object.keys(i), o = 0; o < a.length; o += 1) {
                var s = a[o],
                  l = f({}, r[s], i[s]);
                r[s] = l;
              }
              return e;
            }, [])
            .reverse();
        },
        R = function (e, t) {
          if (Array.isArray(e) && e.length) for (var n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
          return !1;
        },
        A = function (e) {
          return Array.isArray(e) ? e.join('') : e;
        },
        L = function (e, t) {
          return Array.isArray(e)
            ? e.reduce(
                function (e, n) {
                  return (
                    (function (e, t) {
                      for (var n = Object.keys(e), r = 0; r < n.length; r += 1)
                        if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
                      return !1;
                    })(n, t)
                      ? e.priority.push(n)
                      : e.default.push(n),
                    e
                  );
                },
                { priority: [], default: [] },
              )
            : { default: e };
        },
        D = function (e, t) {
          var n;
          return f({}, e, (((n = {})[t] = void 0), n));
        },
        N = [g.NOSCRIPT, g.SCRIPT, g.STYLE],
        O = function (e, t) {
          return (
            void 0 === t && (t = !0),
            !1 === t
              ? String(e)
              : String(e)
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#x27;')
          );
        },
        z = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : '' + n;
            return t ? t + ' ' + r : r;
          }, '');
        },
        I = function (e, t) {
          return (
            void 0 === t && (t = {}),
            Object.keys(e).reduce(function (t, n) {
              return (t[w[n] || n] = e[n]), t;
            }, t)
          );
        },
        M = function (e, t) {
          return t.map(function (t, n) {
            var i,
              a = (((i = { key: n })['data-rh'] = !0), i);
            return (
              Object.keys(t).forEach(function (e) {
                var n = w[e] || e;
                'innerHTML' === n || 'cssText' === n
                  ? (a.dangerouslySetInnerHTML = { __html: t.innerHTML || t.cssText })
                  : (a[n] = t[e]);
              }),
              r.createElement(e, a)
            );
          });
        },
        F = function (e, t, n) {
          switch (e) {
            case g.TITLE:
              return {
                toComponent: function () {
                  return (
                    (n = t.titleAttributes),
                    ((i = { key: (e = t.title) })['data-rh'] = !0),
                    (a = I(n, i)),
                    [r.createElement(g.TITLE, a, e)]
                  );
                  var e, n, i, a;
                },
                toString: function () {
                  return (function (e, t, n, r) {
                    var i = z(n),
                      a = A(t);
                    return i
                      ? '<' + e + ' data-rh="true" ' + i + '>' + O(a, r) + '</' + e + '>'
                      : '<' + e + ' data-rh="true">' + O(a, r) + '</' + e + '>';
                  })(e, t.title, t.titleAttributes, n);
                },
              };
            case 'bodyAttributes':
            case 'htmlAttributes':
              return {
                toComponent: function () {
                  return I(t);
                },
                toString: function () {
                  return z(t);
                },
              };
            default:
              return {
                toComponent: function () {
                  return M(e, t);
                },
                toString: function () {
                  return (function (e, t, n) {
                    return t.reduce(function (t, r) {
                      var i = Object.keys(r)
                          .filter(function (e) {
                            return !('innerHTML' === e || 'cssText' === e);
                          })
                          .reduce(function (e, t) {
                            var i = void 0 === r[t] ? t : t + '="' + O(r[t], n) + '"';
                            return e ? e + ' ' + i : i;
                          }, ''),
                        a = r.innerHTML || r.cssText || '',
                        o = -1 === N.indexOf(e);
                      return t + '<' + e + ' data-rh="true" ' + i + (o ? '/>' : '>' + a + '</' + e + '>');
                    }, '');
                  })(e, t, n);
                },
              };
          }
        },
        B = function (e) {
          var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            i = e.htmlAttributes,
            a = e.noscriptTags,
            o = e.styleTags,
            s = e.title,
            l = void 0 === s ? '' : s,
            c = e.titleAttributes,
            d = e.linkTags,
            u = e.metaTags,
            f = e.scriptTags,
            p = {
              toComponent: function () {},
              toString: function () {
                return '';
              },
            };
          if (e.prioritizeSeoTags) {
            var m = (function (e) {
              var t = e.linkTags,
                n = e.scriptTags,
                r = e.encode,
                i = L(e.metaTags, y),
                a = L(t, b),
                o = L(n, v);
              return {
                priorityMethods: {
                  toComponent: function () {
                    return [].concat(M(g.META, i.priority), M(g.LINK, a.priority), M(g.SCRIPT, o.priority));
                  },
                  toString: function () {
                    return F(g.META, i.priority, r) + ' ' + F(g.LINK, a.priority, r) + ' ' + F(g.SCRIPT, o.priority, r);
                  },
                },
                metaTags: i.default,
                linkTags: a.default,
                scriptTags: o.default,
              };
            })(e);
            (p = m.priorityMethods), (d = m.linkTags), (u = m.metaTags), (f = m.scriptTags);
          }
          return {
            priority: p,
            base: F(g.BASE, t, r),
            bodyAttributes: F('bodyAttributes', n, r),
            htmlAttributes: F('htmlAttributes', i, r),
            link: F(g.LINK, d, r),
            meta: F(g.META, u, r),
            noscript: F(g.NOSCRIPT, a, r),
            script: F(g.SCRIPT, f, r),
            style: F(g.STYLE, o, r),
            title: F(g.TITLE, { title: l, titleAttributes: c }, r),
          };
        },
        j = [],
        U = function (e, t) {
          var n = this;
          void 0 === t && (t = 'undefined' != typeof document),
            (this.instances = []),
            (this.value = {
              setHelmet: function (e) {
                n.context.helmet = e;
              },
              helmetInstances: {
                get: function () {
                  return n.canUseDOM ? j : n.instances;
                },
                add: function (e) {
                  (n.canUseDOM ? j : n.instances).push(e);
                },
                remove: function (e) {
                  var t = (n.canUseDOM ? j : n.instances).indexOf(e);
                  (n.canUseDOM ? j : n.instances).splice(t, 1);
                },
              },
            }),
            (this.context = e),
            (this.canUseDOM = t),
            t ||
              (e.helmet = B({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: !0,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: '',
                titleAttributes: {},
              }));
        },
        $ = r.createContext({}),
        H = a().shape({
          setHelmet: a().func,
          helmetInstances: a().shape({ get: a().func, add: a().func, remove: a().func }),
        }),
        q = 'undefined' != typeof document,
        V = (function (e) {
          function t(n) {
            var r;
            return ((r = e.call(this, n) || this).helmetData = new U(r.props.context, t.canUseDOM)), r;
          }
          return (
            p(t, e),
            (t.prototype.render = function () {
              return r.createElement($.Provider, { value: this.helmetData.value }, this.props.children);
            }),
            t
          );
        })(r.Component);
      (V.canUseDOM = q),
        (V.propTypes = { context: a().shape({ helmet: a().shape() }), children: a().node.isRequired }),
        (V.defaultProps = { context: {} }),
        (V.displayName = 'HelmetProvider');
      var G = function (e, t) {
          var n,
            r = document.head || document.querySelector(g.HEAD),
            i = r.querySelectorAll(e + '[data-rh]'),
            a = [].slice.call(i),
            o = [];
          return (
            t &&
              t.length &&
              t.forEach(function (t) {
                var r = document.createElement(e);
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) &&
                    ('innerHTML' === i
                      ? (r.innerHTML = t.innerHTML)
                      : 'cssText' === i
                      ? r.styleSheet
                        ? (r.styleSheet.cssText = t.cssText)
                        : r.appendChild(document.createTextNode(t.cssText))
                      : r.setAttribute(i, void 0 === t[i] ? '' : t[i]));
                r.setAttribute('data-rh', 'true'),
                  a.some(function (e, t) {
                    return (n = t), r.isEqualNode(e);
                  })
                    ? a.splice(n, 1)
                    : o.push(r);
              }),
            a.forEach(function (e) {
              return e.parentNode.removeChild(e);
            }),
            o.forEach(function (e) {
              return r.appendChild(e);
            }),
            { oldTags: a, newTags: o }
          );
        },
        Z = function (e, t) {
          var n = document.getElementsByTagName(e)[0];
          if (n) {
            for (
              var r = n.getAttribute('data-rh'), i = r ? r.split(',') : [], a = [].concat(i), o = Object.keys(t), s = 0;
              s < o.length;
              s += 1
            ) {
              var l = o[s],
                c = t[l] || '';
              n.getAttribute(l) !== c && n.setAttribute(l, c), -1 === i.indexOf(l) && i.push(l);
              var d = a.indexOf(l);
              -1 !== d && a.splice(d, 1);
            }
            for (var u = a.length - 1; u >= 0; u -= 1) n.removeAttribute(a[u]);
            i.length === a.length
              ? n.removeAttribute('data-rh')
              : n.getAttribute('data-rh') !== o.join(',') && n.setAttribute('data-rh', o.join(','));
          }
        },
        W = function (e, t) {
          var n = e.baseTag,
            r = e.htmlAttributes,
            i = e.linkTags,
            a = e.metaTags,
            o = e.noscriptTags,
            s = e.onChangeClientState,
            l = e.scriptTags,
            c = e.styleTags,
            d = e.title,
            u = e.titleAttributes;
          Z(g.BODY, e.bodyAttributes),
            Z(g.HTML, r),
            (function (e, t) {
              void 0 !== e && document.title !== e && (document.title = A(e)), Z(g.TITLE, t);
            })(d, u);
          var f = {
              baseTag: G(g.BASE, n),
              linkTags: G(g.LINK, i),
              metaTags: G(g.META, a),
              noscriptTags: G(g.NOSCRIPT, o),
              scriptTags: G(g.SCRIPT, l),
              styleTags: G(g.STYLE, c),
            },
            p = {},
            m = {};
          Object.keys(f).forEach(function (e) {
            var t = f[e],
              n = t.newTags,
              r = t.oldTags;
            n.length && (p[e] = n), r.length && (m[e] = f[e].oldTags);
          }),
            t && t(),
            s(e, p, m);
        },
        K = null,
        Y = (function (e) {
          function t() {
            for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return ((t = e.call.apply(e, [this].concat(r)) || this).rendered = !1), t;
          }
          p(t, e);
          var n = t.prototype;
          return (
            (n.shouldComponentUpdate = function (e) {
              return !u()(e, this.props);
            }),
            (n.componentDidUpdate = function () {
              this.emitChange();
            }),
            (n.componentWillUnmount = function () {
              this.props.context.helmetInstances.remove(this), this.emitChange();
            }),
            (n.emitChange = function () {
              var e,
                t,
                n = this.props.context,
                r = n.setHelmet,
                i = null,
                a =
                  ((e = n.helmetInstances.get().map(function (e) {
                    var t = f({}, e.props);
                    return delete t.context, t;
                  })),
                  {
                    baseTag: T(['href'], e),
                    bodyAttributes: x('bodyAttributes', e),
                    defer: E(e, 'defer'),
                    encode: E(e, 'encodeSpecialCharacters'),
                    htmlAttributes: x('htmlAttributes', e),
                    linkTags: P(g.LINK, ['rel', 'href'], e),
                    metaTags: P(g.META, ['name', 'charset', 'http-equiv', 'property', 'itemprop'], e),
                    noscriptTags: P(g.NOSCRIPT, ['innerHTML'], e),
                    onChangeClientState: _(e),
                    scriptTags: P(g.SCRIPT, ['src', 'innerHTML'], e),
                    styleTags: P(g.STYLE, ['cssText'], e),
                    title: C(e),
                    titleAttributes: x('titleAttributes', e),
                    prioritizeSeoTags: R(e, 'prioritizeSeoTags'),
                  });
              V.canUseDOM
                ? ((t = a),
                  K && cancelAnimationFrame(K),
                  t.defer
                    ? (K = requestAnimationFrame(function () {
                        W(t, function () {
                          K = null;
                        });
                      }))
                    : (W(t), (K = null)))
                : B && (i = B(a)),
                r(i);
            }),
            (n.init = function () {
              this.rendered || ((this.rendered = !0), this.props.context.helmetInstances.add(this), this.emitChange());
            }),
            (n.render = function () {
              return this.init(), null;
            }),
            t
          );
        })(r.Component);
      (Y.propTypes = { context: H.isRequired }), (Y.displayName = 'HelmetDispatcher');
      var Q = ['children'],
        X = ['children'],
        J = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          p(t, e);
          var n = t.prototype;
          return (
            (n.shouldComponentUpdate = function (e) {
              return !s()(D(this.props, 'helmetData'), D(e, 'helmetData'));
            }),
            (n.mapNestedChildrenToProps = function (e, t) {
              if (!t) return null;
              switch (e.type) {
                case g.SCRIPT:
                case g.NOSCRIPT:
                  return { innerHTML: t };
                case g.STYLE:
                  return { cssText: t };
                default:
                  throw new Error(
                    '<' +
                      e.type +
                      ' /> elements are self-closing and can not contain children. Refer to our API for more information.',
                  );
              }
            }),
            (n.flattenArrayTypeChildren = function (e) {
              var t,
                n = e.child,
                r = e.arrayTypeChildren;
              return f(
                {},
                r,
                (((t = {})[n.type] = [].concat(r[n.type] || [], [
                  f({}, e.newChildProps, this.mapNestedChildrenToProps(n, e.nestedChildren)),
                ])),
                t),
              );
            }),
            (n.mapObjectTypeChildren = function (e) {
              var t,
                n,
                r = e.child,
                i = e.newProps,
                a = e.newChildProps,
                o = e.nestedChildren;
              switch (r.type) {
                case g.TITLE:
                  return f({}, i, (((t = {})[r.type] = o), (t.titleAttributes = f({}, a)), t));
                case g.BODY:
                  return f({}, i, { bodyAttributes: f({}, a) });
                case g.HTML:
                  return f({}, i, { htmlAttributes: f({}, a) });
                default:
                  return f({}, i, (((n = {})[r.type] = f({}, a)), n));
              }
            }),
            (n.mapArrayTypeChildrenToProps = function (e, t) {
              var n = f({}, t);
              return (
                Object.keys(e).forEach(function (t) {
                  var r;
                  n = f({}, n, (((r = {})[t] = e[t]), r));
                }),
                n
              );
            }),
            (n.warnOnInvalidChildren = function (e, t) {
              return (
                c()(
                  k.some(function (t) {
                    return e.type === t;
                  }),
                  'function' == typeof e.type
                    ? 'You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.'
                    : 'Only elements types ' +
                        k.join(', ') +
                        ' are allowed. Helmet does not support rendering <' +
                        e.type +
                        '> elements. Refer to our API for more information.',
                ),
                c()(
                  !t ||
                    'string' == typeof t ||
                    (Array.isArray(t) &&
                      !t.some(function (e) {
                        return 'string' != typeof e;
                      })),
                  'Helmet expects a string as a child of <' +
                    e.type +
                    '>. Did you forget to wrap your children in braces? ( <' +
                    e.type +
                    '>{``}</' +
                    e.type +
                    '> ) Refer to our API for more information.',
                ),
                !0
              );
            }),
            (n.mapChildrenToProps = function (e, t) {
              var n = this,
                i = {};
              return (
                r.Children.forEach(e, function (e) {
                  if (e && e.props) {
                    var r = e.props,
                      a = r.children,
                      o = h(r, Q),
                      s = Object.keys(o).reduce(function (e, t) {
                        return (e[S[t] || t] = o[t]), e;
                      }, {}),
                      l = e.type;
                    switch (('symbol' == typeof l ? (l = l.toString()) : n.warnOnInvalidChildren(e, a), l)) {
                      case g.FRAGMENT:
                        t = n.mapChildrenToProps(a, t);
                        break;
                      case g.LINK:
                      case g.META:
                      case g.NOSCRIPT:
                      case g.SCRIPT:
                      case g.STYLE:
                        i = n.flattenArrayTypeChildren({
                          child: e,
                          arrayTypeChildren: i,
                          newChildProps: s,
                          nestedChildren: a,
                        });
                        break;
                      default:
                        t = n.mapObjectTypeChildren({ child: e, newProps: t, newChildProps: s, nestedChildren: a });
                    }
                  }
                }),
                this.mapArrayTypeChildrenToProps(i, t)
              );
            }),
            (n.render = function () {
              var e = this.props,
                t = e.children,
                n = h(e, X),
                i = f({}, n),
                a = n.helmetData;
              return (
                t && (i = this.mapChildrenToProps(t, i)),
                !a || a instanceof U || (a = new U(a.context, a.instances)),
                a
                  ? r.createElement(Y, f({}, i, { context: a.value, helmetData: void 0 }))
                  : r.createElement($.Consumer, null, function (e) {
                      return r.createElement(Y, f({}, i, { context: e }));
                    })
              );
            }),
            t
          );
        })(r.Component);
      (J.propTypes = {
        base: a().object,
        bodyAttributes: a().object,
        children: a().oneOfType([a().arrayOf(a().node), a().node]),
        defaultTitle: a().string,
        defer: a().bool,
        encodeSpecialCharacters: a().bool,
        htmlAttributes: a().object,
        link: a().arrayOf(a().object),
        meta: a().arrayOf(a().object),
        noscript: a().arrayOf(a().object),
        onChangeClientState: a().func,
        script: a().arrayOf(a().object),
        style: a().arrayOf(a().object),
        title: a().string,
        titleAttributes: a().object,
        titleTemplate: a().string,
        prioritizeSeoTags: a().bool,
        helmetData: a().object,
      }),
        (J.defaultProps = { defer: !0, encodeSpecialCharacters: !0, prioritizeSeoTags: !1 }),
        (J.displayName = 'Helmet');
    },
    9028: (e, t, n) => {
      'use strict';
      function r(e, t) {
        (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
      }
      function i(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function a(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function o() {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          o.apply(this, arguments)
        );
      }
      var s = n(2784),
        l = n(3980),
        c = [],
        d = [];
      function u(e) {
        var t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then(function (e) {
              return (n.loading = !1), (n.loaded = e), e;
            })
            .catch(function (e) {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      function f(e) {
        var t = { loading: !1, loaded: {}, error: null },
          n = [];
        try {
          Object.keys(e).forEach(function (r) {
            var i = u(e[r]);
            i.loading ? (t.loading = !0) : ((t.loaded[r] = i.loaded), (t.error = i.error)),
              n.push(i.promise),
              i.promise
                .then(function (e) {
                  t.loaded[r] = e;
                })
                .catch(function (e) {
                  t.error = e;
                });
          });
        } catch (r) {
          t.error = r;
        }
        return (
          (t.promise = Promise.all(n)
            .then(function (e) {
              return (t.loading = !1), e;
            })
            .catch(function (e) {
              throw ((t.loading = !1), e);
            })),
          t
        );
      }
      function p(e, t) {
        return s.createElement((n = e) && n.__esModule ? n.default : n, t);
        var n;
      }
      function m(e, t) {
        var u, f;
        if (!t.loading) throw new Error('react-loadable requires a `loading` component');
        var m = o(
            { loader: null, loading: null, delay: 200, timeout: null, render: p, webpack: null, modules: null },
            t,
          ),
          h = null;
        function g() {
          return h || (h = e(m.loader)), h.promise;
        }
        return (
          c.push(g),
          'function' == typeof m.webpack &&
            d.push(function () {
              if (
                (0, m.webpack)().every(function (e) {
                  return void 0 !== e && void 0 !== n.m[e];
                })
              )
                return g();
            }),
          (f = u =
            (function (t) {
              function n(n) {
                var r;
                return (
                  a(i(i((r = t.call(this, n) || this))), 'retry', function () {
                    r.setState({ error: null, loading: !0, timedOut: !1 }), (h = e(m.loader)), r._loadModule();
                  }),
                  g(),
                  (r.state = { error: h.error, pastDelay: !1, timedOut: !1, loading: h.loading, loaded: h.loaded }),
                  r
                );
              }
              r(n, t),
                (n.preload = function () {
                  return g();
                });
              var o = n.prototype;
              return (
                (o.UNSAFE_componentWillMount = function () {
                  this._loadModule();
                }),
                (o.componentDidMount = function () {
                  this._mounted = !0;
                }),
                (o._loadModule = function () {
                  var e = this;
                  if (
                    (this.context.loadable &&
                      Array.isArray(m.modules) &&
                      m.modules.forEach(function (t) {
                        e.context.loadable.report(t);
                      }),
                    h.loading)
                  ) {
                    var t = function (t) {
                      e._mounted && e.setState(t);
                    };
                    'number' == typeof m.delay &&
                      (0 === m.delay
                        ? this.setState({ pastDelay: !0 })
                        : (this._delay = setTimeout(function () {
                            t({ pastDelay: !0 });
                          }, m.delay))),
                      'number' == typeof m.timeout &&
                        (this._timeout = setTimeout(function () {
                          t({ timedOut: !0 });
                        }, m.timeout));
                    var n = function () {
                      t({ error: h.error, loaded: h.loaded, loading: h.loading }), e._clearTimeouts();
                    };
                    h.promise
                      .then(function () {
                        return n(), null;
                      })
                      .catch(function (e) {
                        return n(), null;
                      });
                  }
                }),
                (o.componentWillUnmount = function () {
                  (this._mounted = !1), this._clearTimeouts();
                }),
                (o._clearTimeouts = function () {
                  clearTimeout(this._delay), clearTimeout(this._timeout);
                }),
                (o.render = function () {
                  return this.state.loading || this.state.error
                    ? s.createElement(m.loading, {
                        isLoading: this.state.loading,
                        pastDelay: this.state.pastDelay,
                        timedOut: this.state.timedOut,
                        error: this.state.error,
                        retry: this.retry,
                      })
                    : this.state.loaded
                    ? m.render(this.state.loaded, this.props)
                    : null;
                }),
                n
              );
            })(s.Component)),
          a(u, 'contextTypes', { loadable: l.shape({ report: l.func.isRequired }) }),
          f
        );
      }
      function h(e) {
        return m(u, e);
      }
      h.Map = function (e) {
        if ('function' != typeof e.render) throw new Error('LoadableMap requires a `render(loaded, props)` function');
        return m(f, e);
      };
      var g = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        r(t, e);
        var n = t.prototype;
        return (
          (n.getChildContext = function () {
            return { loadable: { report: this.props.report } };
          }),
          (n.render = function () {
            return s.Children.only(this.props.children);
          }),
          t
        );
      })(s.Component);
      function b(e) {
        for (var t = []; e.length; ) {
          var n = e.pop();
          t.push(n());
        }
        return Promise.all(t).then(function () {
          if (e.length) return b(e);
        });
      }
      a(g, 'propTypes', { report: l.func.isRequired }),
        a(g, 'childContextTypes', { loadable: l.shape({ report: l.func.isRequired }).isRequired }),
        (h.Capture = g),
        (h.preloadAll = function () {
          return new Promise(function (e, t) {
            b(c).then(e, t);
          });
        }),
        (h.preloadReady = function () {
          return new Promise(function (e, t) {
            b(d).then(e, e);
          });
        }),
        (e.exports = h);
    },
    9702: (e, t, n) => {
      'use strict';
      n.d(t, { H: () => s, f: () => o });
      var r = n(7267),
        i = n(7896),
        a = n(2784);
      function o(e, t, n) {
        return (
          void 0 === n && (n = []),
          e.some(function (e) {
            var i = e.path ? (0, r.LX)(t, e) : n.length ? n[n.length - 1].match : r.F0.computeRootMatch(t);
            return i && (n.push({ route: e, match: i }), e.routes && o(e.routes, t, n)), i;
          }),
          n
        );
      }
      function s(e, t, n) {
        return (
          void 0 === t && (t = {}),
          void 0 === n && (n = {}),
          e
            ? a.createElement(
                r.rs,
                n,
                e.map(function (e, n) {
                  return a.createElement(r.AW, {
                    key: e.key || n,
                    path: e.path,
                    exact: e.exact,
                    strict: e.strict,
                    render: function (n) {
                      return e.render
                        ? e.render((0, i.Z)({}, n, {}, t, { route: e }))
                        : a.createElement(e.component, (0, i.Z)({}, n, t, { route: e }));
                    },
                  });
                }),
              )
            : null
        );
      }
    },
    7933: (e, t, n) => {
      'use strict';
      n.d(t, { OL: () => y, VK: () => d, rU: () => g });
      var r = n(7267),
        i = n(2222),
        a = n(2784),
        o = n(4410),
        s = n(7896),
        l = n(1461),
        c = n(362),
        d = (function (e) {
          function t() {
            for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return ((t = e.call.apply(e, [this].concat(r)) || this).history = (0, o.lX)(t.props)), t;
          }
          return (
            (0, i.Z)(t, e),
            (t.prototype.render = function () {
              return a.createElement(r.F0, { history: this.history, children: this.props.children });
            }),
            t
          );
        })(a.Component);
      a.Component;
      var u = function (e, t) {
          return 'function' == typeof e ? e(t) : e;
        },
        f = function (e, t) {
          return 'string' == typeof e ? (0, o.ob)(e, null, null, t) : e;
        },
        p = function (e) {
          return e;
        },
        m = a.forwardRef;
      void 0 === m && (m = p);
      var h = m(function (e, t) {
        var n = e.innerRef,
          r = e.navigate,
          i = e.onClick,
          o = (0, l.Z)(e, ['innerRef', 'navigate', 'onClick']),
          c = o.target,
          d = (0, s.Z)({}, o, {
            onClick: function (e) {
              try {
                i && i(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (c && '_self' !== c) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), r());
            },
          });
        return (d.ref = (p !== m && t) || n), a.createElement('a', d);
      });
      var g = m(function (e, t) {
          var n = e.component,
            i = void 0 === n ? h : n,
            d = e.replace,
            g = e.to,
            b = e.innerRef,
            v = (0, l.Z)(e, ['component', 'replace', 'to', 'innerRef']);
          return a.createElement(r.s6.Consumer, null, function (e) {
            e || (0, c.Z)(!1);
            var n = e.history,
              r = f(u(g, e.location), e.location),
              l = r ? n.createHref(r) : '',
              h = (0, s.Z)({}, v, {
                href: l,
                navigate: function () {
                  var t = u(g, e.location),
                    r = (0, o.Ep)(e.location) === (0, o.Ep)(f(t));
                  (d || r ? n.replace : n.push)(t);
                },
              });
            return p !== m ? (h.ref = t || b) : (h.innerRef = b), a.createElement(i, h);
          });
        }),
        b = function (e) {
          return e;
        },
        v = a.forwardRef;
      void 0 === v && (v = b);
      var y = v(function (e, t) {
        var n = e['aria-current'],
          i = void 0 === n ? 'page' : n,
          o = e.activeClassName,
          d = void 0 === o ? 'active' : o,
          p = e.activeStyle,
          m = e.className,
          h = e.exact,
          y = e.isActive,
          k = e.location,
          w = e.sensitive,
          S = e.strict,
          E = e.style,
          C = e.to,
          _ = e.innerRef,
          x = (0, l.Z)(e, [
            'aria-current',
            'activeClassName',
            'activeStyle',
            'className',
            'exact',
            'isActive',
            'location',
            'sensitive',
            'strict',
            'style',
            'to',
            'innerRef',
          ]);
        return a.createElement(r.s6.Consumer, null, function (e) {
          e || (0, c.Z)(!1);
          var n = k || e.location,
            o = f(u(C, n), n),
            l = o.pathname,
            T = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
            P = T ? (0, r.LX)(n.pathname, { path: T, exact: h, sensitive: w, strict: S }) : null,
            R = !!(y ? y(P, n) : P),
            A = 'function' == typeof m ? m(R) : m,
            L = 'function' == typeof E ? E(R) : E;
          R &&
            ((A = (function () {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return t
                .filter(function (e) {
                  return e;
                })
                .join(' ');
            })(A, d)),
            (L = (0, s.Z)({}, L, p)));
          var D = (0, s.Z)({ 'aria-current': (R && i) || null, className: A, style: L, to: o }, x);
          return b !== v ? (D.ref = t || _) : (D.innerRef = _), a.createElement(g, D);
        });
      });
    },
    7267: (e, t, n) => {
      'use strict';
      n.d(t, { AW: () => C, F0: () => y, LX: () => E, TH: () => N, k6: () => D, rs: () => A, s6: () => v });
      var r = n(2222),
        i = n(2784),
        a = n(3980),
        o = n.n(a),
        s = n(4410),
        l = n(362),
        c = n(7896),
        d = n(99),
        u = n.n(d),
        f = (n(9744), n(1461)),
        p = (n(3463), 1073741823),
        m =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
            ? window
            : void 0 !== n.g
            ? n.g
            : {};
      var h =
          i.createContext ||
          function (e, t) {
            var n,
              a,
              s =
                '__create-react-context-' +
                (function () {
                  var e = '__global_unique_id__';
                  return (m[e] = (m[e] || 0) + 1);
                })() +
                '__',
              l = (function (e) {
                function n() {
                  for (var t, n, r, i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                  return (
                    ((t = e.call.apply(e, [this].concat(a)) || this).emitter =
                      ((n = t.props.value),
                      (r = []),
                      {
                        on: function (e) {
                          r.push(e);
                        },
                        off: function (e) {
                          r = r.filter(function (t) {
                            return t !== e;
                          });
                        },
                        get: function () {
                          return n;
                        },
                        set: function (e, t) {
                          (n = e),
                            r.forEach(function (e) {
                              return e(n, t);
                            });
                        },
                      })),
                    t
                  );
                }
                (0, r.Z)(n, e);
                var i = n.prototype;
                return (
                  (i.getChildContext = function () {
                    var e;
                    return ((e = {})[s] = this.emitter), e;
                  }),
                  (i.componentWillReceiveProps = function (e) {
                    if (this.props.value !== e.value) {
                      var n,
                        r = this.props.value,
                        i = e.value;
                      ((a = r) === (o = i) ? 0 !== a || 1 / a == 1 / o : a != a && o != o)
                        ? (n = 0)
                        : ((n = 'function' == typeof t ? t(r, i) : p), 0 !== (n |= 0) && this.emitter.set(e.value, n));
                    }
                    var a, o;
                  }),
                  (i.render = function () {
                    return this.props.children;
                  }),
                  n
                );
              })(i.Component);
            l.childContextTypes = (((n = {})[s] = o().object.isRequired), n);
            var c = (function (t) {
              function n() {
                for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                return (
                  ((e = t.call.apply(t, [this].concat(r)) || this).observedBits = void 0),
                  (e.state = { value: e.getValue() }),
                  (e.onUpdate = function (t, n) {
                    0 != ((0 | e.observedBits) & n) && e.setState({ value: e.getValue() });
                  }),
                  e
                );
              }
              (0, r.Z)(n, t);
              var i = n.prototype;
              return (
                (i.componentWillReceiveProps = function (e) {
                  var t = e.observedBits;
                  this.observedBits = null == t ? p : t;
                }),
                (i.componentDidMount = function () {
                  this.context[s] && this.context[s].on(this.onUpdate);
                  var e = this.props.observedBits;
                  this.observedBits = null == e ? p : e;
                }),
                (i.componentWillUnmount = function () {
                  this.context[s] && this.context[s].off(this.onUpdate);
                }),
                (i.getValue = function () {
                  return this.context[s] ? this.context[s].get() : e;
                }),
                (i.render = function () {
                  return ((e = this.props.children), Array.isArray(e) ? e[0] : e)(this.state.value);
                  var e;
                }),
                n
              );
            })(i.Component);
            return (c.contextTypes = (((a = {})[s] = o().object), a)), { Provider: l, Consumer: c };
          },
        g = function (e) {
          var t = h();
          return (t.displayName = e), t;
        },
        b = g('Router-History'),
        v = g('Router'),
        y = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).state = { location: t.history.location }),
              (n._isMounted = !1),
              (n._pendingLocation = null),
              t.staticContext ||
                (n.unlisten = t.history.listen(function (e) {
                  n._pendingLocation = e;
                })),
              n
            );
          }
          (0, r.Z)(t, e),
            (t.computeRootMatch = function (e) {
              return { path: '/', url: '/', params: {}, isExact: '/' === e };
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              var e = this;
              (this._isMounted = !0),
                this.unlisten && this.unlisten(),
                this.props.staticContext ||
                  (this.unlisten = this.props.history.listen(function (t) {
                    e._isMounted && e.setState({ location: t });
                  })),
                this._pendingLocation && this.setState({ location: this._pendingLocation });
            }),
            (n.componentWillUnmount = function () {
              this.unlisten && (this.unlisten(), (this._isMounted = !1), (this._pendingLocation = null));
            }),
            (n.render = function () {
              return i.createElement(
                v.Provider,
                {
                  value: {
                    history: this.props.history,
                    location: this.state.location,
                    match: t.computeRootMatch(this.state.location.pathname),
                    staticContext: this.props.staticContext,
                  },
                },
                i.createElement(b.Provider, { children: this.props.children || null, value: this.props.history }),
              );
            }),
            t
          );
        })(i.Component);
      i.Component;
      i.Component;
      var k = {},
        w = 1e4,
        S = 0;
      function E(e, t) {
        void 0 === t && (t = {}), ('string' == typeof t || Array.isArray(t)) && (t = { path: t });
        var n = t,
          r = n.path,
          i = n.exact,
          a = void 0 !== i && i,
          o = n.strict,
          s = void 0 !== o && o,
          l = n.sensitive,
          c = void 0 !== l && l;
        return [].concat(r).reduce(function (t, n) {
          if (!n && '' !== n) return null;
          if (t) return t;
          var r = (function (e, t) {
              var n = '' + t.end + t.strict + t.sensitive,
                r = k[n] || (k[n] = {});
              if (r[e]) return r[e];
              var i = [],
                a = { regexp: u()(e, i, t), keys: i };
              return S < w && ((r[e] = a), S++), a;
            })(n, { end: a, strict: s, sensitive: c }),
            i = r.regexp,
            o = r.keys,
            l = i.exec(e);
          if (!l) return null;
          var d = l[0],
            f = l.slice(1),
            p = e === d;
          return a && !p
            ? null
            : {
                path: n,
                url: '/' === n && '' === d ? '/' : d,
                isExact: p,
                params: o.reduce(function (e, t, n) {
                  return (e[t.name] = f[n]), e;
                }, {}),
              };
        }, null);
      }
      var C = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          (0, r.Z)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return i.createElement(v.Consumer, null, function (t) {
              t || (0, l.Z)(!1);
              var n = e.props.location || t.location,
                r = e.props.computedMatch ? e.props.computedMatch : e.props.path ? E(n.pathname, e.props) : t.match,
                a = (0, c.Z)({}, t, { location: n, match: r }),
                o = e.props,
                s = o.children,
                d = o.component,
                u = o.render;
              return (
                Array.isArray(s) &&
                  (function (e) {
                    return 0 === i.Children.count(e);
                  })(s) &&
                  (s = null),
                i.createElement(
                  v.Provider,
                  { value: a },
                  a.match
                    ? s
                      ? 'function' == typeof s
                        ? s(a)
                        : s
                      : d
                      ? i.createElement(d, a)
                      : u
                      ? u(a)
                      : null
                    : 'function' == typeof s
                    ? s(a)
                    : null,
                )
              );
            });
          }),
          t
        );
      })(i.Component);
      function _(e) {
        return '/' === e.charAt(0) ? e : '/' + e;
      }
      function x(e, t) {
        if (!e) return t;
        var n = _(e);
        return 0 !== t.pathname.indexOf(n) ? t : (0, c.Z)({}, t, { pathname: t.pathname.substr(n.length) });
      }
      function T(e) {
        return 'string' == typeof e ? e : (0, s.Ep)(e);
      }
      function P(e) {
        return function () {
          (0, l.Z)(!1);
        };
      }
      function R() {}
      i.Component;
      var A = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          (0, r.Z)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return i.createElement(v.Consumer, null, function (t) {
              t || (0, l.Z)(!1);
              var n,
                r,
                a = e.props.location || t.location;
              return (
                i.Children.forEach(e.props.children, function (e) {
                  if (null == r && i.isValidElement(e)) {
                    n = e;
                    var o = e.props.path || e.props.from;
                    r = o ? E(a.pathname, (0, c.Z)({}, e.props, { path: o })) : t.match;
                  }
                }),
                r ? i.cloneElement(n, { location: a, computedMatch: r }) : null
              );
            });
          }),
          t
        );
      })(i.Component);
      var L = i.useContext;
      function D() {
        return L(b);
      }
      function N() {
        return L(v).location;
      }
    },
    1897: (e, t) => {
      'use strict';
      var n = 'function' == typeof Symbol && Symbol.for,
        r = n ? Symbol.for('react.element') : 60103,
        i = n ? Symbol.for('react.portal') : 60106,
        a = n ? Symbol.for('react.fragment') : 60107,
        o = n ? Symbol.for('react.strict_mode') : 60108,
        s = n ? Symbol.for('react.profiler') : 60114,
        l = n ? Symbol.for('react.provider') : 60109,
        c = n ? Symbol.for('react.context') : 60110,
        d = n ? Symbol.for('react.async_mode') : 60111,
        u = n ? Symbol.for('react.concurrent_mode') : 60111,
        f = n ? Symbol.for('react.forward_ref') : 60112,
        p = n ? Symbol.for('react.suspense') : 60113,
        m = n ? Symbol.for('react.suspense_list') : 60120,
        h = n ? Symbol.for('react.memo') : 60115,
        g = n ? Symbol.for('react.lazy') : 60116,
        b = n ? Symbol.for('react.block') : 60121,
        v = n ? Symbol.for('react.fundamental') : 60117,
        y = n ? Symbol.for('react.responder') : 60118,
        k = n ? Symbol.for('react.scope') : 60119;
      function w(e) {
        if ('object' == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case d:
                case u:
                case a:
                case s:
                case o:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case f:
                    case g:
                    case h:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case i:
              return t;
          }
        }
      }
      function S(e) {
        return w(e) === u;
      }
    },
    9744: (e, t, n) => {
      'use strict';
      n(1897);
    },
    3426: (e, t, n) => {
      'use strict';
      var r = n(7320),
        i = 60103,
        a = 60106;
      (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
      var o = 60109,
        s = 60110,
        l = 60112;
      t.Suspense = 60113;
      var c = 60115,
        d = 60116;
      if ('function' == typeof Symbol && Symbol.for) {
        var u = Symbol.for;
        (i = u('react.element')),
          (a = u('react.portal')),
          (t.Fragment = u('react.fragment')),
          (t.StrictMode = u('react.strict_mode')),
          (t.Profiler = u('react.profiler')),
          (o = u('react.provider')),
          (s = u('react.context')),
          (l = u('react.forward_ref')),
          (t.Suspense = u('react.suspense')),
          (c = u('react.memo')),
          (d = u('react.lazy'));
      }
      var f = 'function' == typeof Symbol && Symbol.iterator;
      function p(e) {
        for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
          t += '&args[]=' + encodeURIComponent(arguments[n]);
        return (
          'Minified React error #' +
          e +
          '; visit ' +
          t +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      var m = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        h = {};
      function g(e, t, n) {
        (this.props = e), (this.context = t), (this.refs = h), (this.updater = n || m);
      }
      function b() {}
      function v(e, t, n) {
        (this.props = e), (this.context = t), (this.refs = h), (this.updater = n || m);
      }
      (g.prototype.isReactComponent = {}),
        (g.prototype.setState = function (e, t) {
          if ('object' != typeof e && 'function' != typeof e && null != e) throw Error(p(85));
          this.updater.enqueueSetState(this, e, t, 'setState');
        }),
        (g.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
        }),
        (b.prototype = g.prototype);
      var y = (v.prototype = new b());
      (y.constructor = v), r(y, g.prototype), (y.isPureReactComponent = !0);
      var k = { current: null },
        w = Object.prototype.hasOwnProperty,
        S = { key: !0, ref: !0, __self: !0, __source: !0 };
      function E(e, t, n) {
        var r,
          a = {},
          o = null,
          s = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (o = '' + t.key), t))
            w.call(t, r) && !S.hasOwnProperty(r) && (a[r] = t[r]);
        var l = arguments.length - 2;
        if (1 === l) a.children = n;
        else if (1 < l) {
          for (var c = Array(l), d = 0; d < l; d++) c[d] = arguments[d + 2];
          a.children = c;
        }
        if (e && e.defaultProps) for (r in (l = e.defaultProps)) void 0 === a[r] && (a[r] = l[r]);
        return { $$typeof: i, type: e, key: o, ref: s, props: a, _owner: k.current };
      }
      function C(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === i;
      }
      var _ = /\/+/g;
      function x(e, t) {
        return 'object' == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { '=': '=0', ':': '=2' };
              return (
                '$' +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })('' + e.key)
          : t.toString(36);
      }
      function T(e, t, n, r, o) {
        var s = typeof e;
        ('undefined' !== s && 'boolean' !== s) || (e = null);
        var l = !1;
        if (null === e) l = !0;
        else
          switch (s) {
            case 'string':
            case 'number':
              l = !0;
              break;
            case 'object':
              switch (e.$$typeof) {
                case i:
                case a:
                  l = !0;
              }
          }
        if (l)
          return (
            (o = o((l = e))),
            (e = '' === r ? '.' + x(l, 0) : r),
            Array.isArray(o)
              ? ((n = ''),
                null != e && (n = e.replace(_, '$&/') + '/'),
                T(o, t, n, '', function (e) {
                  return e;
                }))
              : null != o &&
                (C(o) &&
                  (o = (function (e, t) {
                    return { $$typeof: i, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                  })(o, n + (!o.key || (l && l.key === o.key) ? '' : ('' + o.key).replace(_, '$&/') + '/') + e)),
                t.push(o)),
            1
          );
        if (((l = 0), (r = '' === r ? '.' : r + ':'), Array.isArray(e)))
          for (var c = 0; c < e.length; c++) {
            var d = r + x((s = e[c]), c);
            l += T(s, t, n, d, o);
          }
        else if (
          ((d = (function (e) {
            return null === e || 'object' != typeof e
              ? null
              : 'function' == typeof (e = (f && e[f]) || e['@@iterator'])
              ? e
              : null;
          })(e)),
          'function' == typeof d)
        )
          for (e = d.call(e), c = 0; !(s = e.next()).done; ) l += T((s = s.value), t, n, (d = r + x(s, c++)), o);
        else if ('object' === s)
          throw (
            ((t = '' + e),
            Error(p(31, '[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t)))
          );
        return l;
      }
      function P(e, t, n) {
        if (null == e) return e;
        var r = [],
          i = 0;
        return (
          T(e, r, '', '', function (e) {
            return t.call(n, e, i++);
          }),
          r
        );
      }
      function R(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()),
            (e._status = 0),
            (e._result = t),
            t.then(
              function (t) {
                0 === e._status && ((t = t.default), (e._status = 1), (e._result = t));
              },
              function (t) {
                0 === e._status && ((e._status = 2), (e._result = t));
              },
            );
        }
        if (1 === e._status) return e._result;
        throw e._result;
      }
      var A = { current: null };
      function L() {
        var e = A.current;
        if (null === e) throw Error(p(321));
        return e;
      }
      var D = {
        ReactCurrentDispatcher: A,
        ReactCurrentBatchConfig: { transition: 0 },
        ReactCurrentOwner: k,
        IsSomeRendererActing: { current: !1 },
        assign: r,
      };
      (t.Children = {
        map: P,
        forEach: function (e, t, n) {
          P(
            e,
            function () {
              t.apply(this, arguments);
            },
            n,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            P(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            P(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!C(e)) throw Error(p(143));
          return e;
        },
      }),
        (t.Component = g),
        (t.PureComponent = v),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
        (t.cloneElement = function (e, t, n) {
          if (null == e) throw Error(p(267, e));
          var a = r({}, e.props),
            o = e.key,
            s = e.ref,
            l = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((s = t.ref), (l = k.current)),
              void 0 !== t.key && (o = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var c = e.type.defaultProps;
            for (d in t) w.call(t, d) && !S.hasOwnProperty(d) && (a[d] = void 0 === t[d] && void 0 !== c ? c[d] : t[d]);
          }
          var d = arguments.length - 2;
          if (1 === d) a.children = n;
          else if (1 < d) {
            c = Array(d);
            for (var u = 0; u < d; u++) c[u] = arguments[u + 2];
            a.children = c;
          }
          return { $$typeof: i, type: e.type, key: o, ref: s, props: a, _owner: l };
        }),
        (t.createContext = function (e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: s,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: o, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = E),
        (t.createFactory = function (e) {
          var t = E.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: l, render: e };
        }),
        (t.isValidElement = C),
        (t.lazy = function (e) {
          return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: R };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: c, type: e, compare: void 0 === t ? null : t };
        }),
        (t.useCallback = function (e, t) {
          return L().useCallback(e, t);
        }),
        (t.useContext = function (e, t) {
          return L().useContext(e, t);
        }),
        (t.useDebugValue = function () {}),
        (t.useEffect = function (e, t) {
          return L().useEffect(e, t);
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return L().useImperativeHandle(e, t, n);
        }),
        (t.useLayoutEffect = function (e, t) {
          return L().useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return L().useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return L().useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return L().useRef(e);
        }),
        (t.useState = function (e) {
          return L().useState(e);
        }),
        (t.version = '17.0.2');
    },
    2784: (e, t, n) => {
      'use strict';
      e.exports = n(3426);
    },
    6475: (e, t) => {
      'use strict';
      var n, r, i, a;
      if ('object' == typeof performance && 'function' == typeof performance.now) {
        var o = performance;
        t.unstable_now = function () {
          return o.now();
        };
      } else {
        var s = Date,
          l = s.now();
        t.unstable_now = function () {
          return s.now() - l;
        };
      }
      if ('undefined' == typeof window || 'function' != typeof MessageChannel) {
        var c = null,
          d = null,
          u = function () {
            if (null !== c)
              try {
                var e = t.unstable_now();
                c(!0, e), (c = null);
              } catch (n) {
                throw (setTimeout(u, 0), n);
              }
          };
        (n = function (e) {
          null !== c ? setTimeout(n, 0, e) : ((c = e), setTimeout(u, 0));
        }),
          (r = function (e, t) {
            d = setTimeout(e, t);
          }),
          (i = function () {
            clearTimeout(d);
          }),
          (t.unstable_shouldYield = function () {
            return !1;
          }),
          (a = t.unstable_forceFrameRate = function () {});
      } else {
        var f = window.setTimeout,
          p = window.clearTimeout;
        if ('undefined' != typeof console) {
          var m = window.cancelAnimationFrame;
          'function' != typeof window.requestAnimationFrame &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
            ),
            'function' != typeof m &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
              );
        }
        var h = !1,
          g = null,
          b = -1,
          v = 5,
          y = 0;
        (t.unstable_shouldYield = function () {
          return t.unstable_now() >= y;
        }),
          (a = function () {}),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (v = 0 < e ? Math.floor(1e3 / e) : 5);
          });
        var k = new MessageChannel(),
          w = k.port2;
        (k.port1.onmessage = function () {
          if (null !== g) {
            var e = t.unstable_now();
            y = e + v;
            try {
              g(!0, e) ? w.postMessage(null) : ((h = !1), (g = null));
            } catch (n) {
              throw (w.postMessage(null), n);
            }
          } else h = !1;
        }),
          (n = function (e) {
            (g = e), h || ((h = !0), w.postMessage(null));
          }),
          (r = function (e, n) {
            b = f(function () {
              e(t.unstable_now());
            }, n);
          }),
          (i = function () {
            p(b), (b = -1);
          });
      }
      function S(e, t) {
        var n = e.length;
        e.push(t);
        e: for (;;) {
          var r = (n - 1) >>> 1,
            i = e[r];
          if (!(void 0 !== i && 0 < _(i, t))) break e;
          (e[r] = t), (e[n] = i), (n = r);
        }
      }
      function E(e) {
        return void 0 === (e = e[0]) ? null : e;
      }
      function C(e) {
        var t = e[0];
        if (void 0 !== t) {
          var n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length; r < i; ) {
              var a = 2 * (r + 1) - 1,
                o = e[a],
                s = a + 1,
                l = e[s];
              if (void 0 !== o && 0 > _(o, n))
                void 0 !== l && 0 > _(l, o) ? ((e[r] = l), (e[s] = n), (r = s)) : ((e[r] = o), (e[a] = n), (r = a));
              else {
                if (!(void 0 !== l && 0 > _(l, n))) break e;
                (e[r] = l), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        return null;
      }
      function _(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      var x = [],
        T = [],
        P = 1,
        R = null,
        A = 3,
        L = !1,
        D = !1,
        N = !1;
      function O(e) {
        for (var t = E(T); null !== t; ) {
          if (null === t.callback) C(T);
          else {
            if (!(t.startTime <= e)) break;
            C(T), (t.sortIndex = t.expirationTime), S(x, t);
          }
          t = E(T);
        }
      }
      function z(e) {
        if (((N = !1), O(e), !D))
          if (null !== E(x)) (D = !0), n(I);
          else {
            var t = E(T);
            null !== t && r(z, t.startTime - e);
          }
      }
      function I(e, n) {
        (D = !1), N && ((N = !1), i()), (L = !0);
        var a = A;
        try {
          for (O(n), R = E(x); null !== R && (!(R.expirationTime > n) || (e && !t.unstable_shouldYield())); ) {
            var o = R.callback;
            if ('function' == typeof o) {
              (R.callback = null), (A = R.priorityLevel);
              var s = o(R.expirationTime <= n);
              (n = t.unstable_now()), 'function' == typeof s ? (R.callback = s) : R === E(x) && C(x), O(n);
            } else C(x);
            R = E(x);
          }
          if (null !== R) var l = !0;
          else {
            var c = E(T);
            null !== c && r(z, c.startTime - n), (l = !1);
          }
          return l;
        } finally {
          (R = null), (A = a), (L = !1);
        }
      }
      var M = a;
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          D || L || ((D = !0), n(I));
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return A;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return E(x);
        }),
        (t.unstable_next = function (e) {
          switch (A) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = A;
          }
          var n = A;
          A = t;
          try {
            return e();
          } finally {
            A = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = M),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = A;
          A = e;
          try {
            return t();
          } finally {
            A = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, a, o) {
          var s = t.unstable_now();
          switch (
            ('object' == typeof o && null !== o ? (o = 'number' == typeof (o = o.delay) && 0 < o ? s + o : s) : (o = s),
            e)
          ) {
            case 1:
              var l = -1;
              break;
            case 2:
              l = 250;
              break;
            case 5:
              l = 1073741823;
              break;
            case 4:
              l = 1e4;
              break;
            default:
              l = 5e3;
          }
          return (
            (e = { id: P++, callback: a, priorityLevel: e, startTime: o, expirationTime: (l = o + l), sortIndex: -1 }),
            o > s
              ? ((e.sortIndex = o), S(T, e), null === E(x) && e === E(T) && (N ? i() : (N = !0), r(z, o - s)))
              : ((e.sortIndex = l), S(x, e), D || L || ((D = !0), n(I))),
            e
          );
        }),
        (t.unstable_wrapCallback = function (e) {
          var t = A;
          return function () {
            var n = A;
            A = t;
            try {
              return e.apply(this, arguments);
            } finally {
              A = n;
            }
          };
        });
    },
    4616: (e, t, n) => {
      'use strict';
      e.exports = n(6475);
    },
    8665: e => {
      e.exports = function (e, t, n, r) {
        var i = n ? n.call(r, e, t) : void 0;
        if (void 0 !== i) return !!i;
        if (e === t) return !0;
        if ('object' != typeof e || !e || 'object' != typeof t || !t) return !1;
        var a = Object.keys(e),
          o = Object.keys(t);
        if (a.length !== o.length) return !1;
        for (var s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < a.length; l++) {
          var c = a[l];
          if (!s(c)) return !1;
          var d = e[c],
            u = t[c];
          if (!1 === (i = n ? n.call(r, d, u, c) : void 0) || (void 0 === i && d !== u)) return !1;
        }
        return !0;
      };
    },
    452: (e, t, n) => {
      'use strict';
      var r = n(2784);
      var i =
          'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
        a = r.useState,
        o = r.useEffect,
        s = r.useLayoutEffect,
        l = r.useDebugValue;
      function c(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !i(e, n);
        } catch (r) {
          return !0;
        }
      }
      var d =
        'undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                r = a({ inst: { value: n, getSnapshot: t } }),
                i = r[0].inst,
                d = r[1];
              return (
                s(
                  function () {
                    (i.value = n), (i.getSnapshot = t), c(i) && d({ inst: i });
                  },
                  [e, n, t],
                ),
                o(
                  function () {
                    return (
                      c(i) && d({ inst: i }),
                      e(function () {
                        c(i) && d({ inst: i });
                      })
                    );
                  },
                  [e],
                ),
                l(n),
                n
              );
            };
      void 0 !== r.useSyncExternalStore && r.useSyncExternalStore;
    },
    3100: (e, t, n) => {
      'use strict';
      n(452);
    },
    7896: (e, t, n) => {
      'use strict';
      function r() {
        return (
          (r = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          r.apply(this, arguments)
        );
      }
      n.d(t, { Z: () => r });
    },
    2222: (e, t, n) => {
      'use strict';
      function r(e, t) {
        return (
          (r = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          r(e, t)
        );
      }
      function i(e, t) {
        (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), r(e, t);
      }
      n.d(t, { Z: () => i });
    },
    1461: (e, t, n) => {
      'use strict';
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i;
      }
      n.d(t, { Z: () => r });
    },
    362: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => a });
      var r = !0,
        i = 'Invariant failed';
      function a(e, t) {
        if (!e) {
          if (r) throw new Error(i);
          var n = 'function' == typeof t ? t() : t,
            a = n ? ''.concat(i, ': ').concat(n) : i;
          throw new Error(a);
        }
      }
    },
    6809: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => r });
      const r = {
        title: 'lisk-did',
        tagline: 'W3C Decentralized Identifier (DID) and Verifiable Credentials (VC) for Lisk Sidechain',
        favicon: 'img/favicon.ico',
        url: 'https://lisk-did.js.org',
        baseUrl: '/',
        organizationName: 'aldhosutra',
        projectName: 'lisk-did',
        onBrokenLinks: 'throw',
        onBrokenMarkdownLinks: 'warn',
        i18n: { defaultLocale: 'en', locales: ['en'], path: 'i18n', localeConfigs: {} },
        presets: [
          [
            'classic',
            {
              docs: {
                sidebarPath: '/Users/aldhosutra/Documents/Lisk/lisk-did/packages/lisk-did-docs/sidebars.js',
                editUrl: 'https://github.com/aldhosutra/lisk-did/tree/main/packages/lisk-did-docs/',
              },
              theme: {
                customCss: '/Users/aldhosutra/Documents/Lisk/lisk-did/packages/lisk-did-docs/src/css/custom.css',
              },
            },
          ],
        ],
        themeConfig: {
          image: 'img/docusaurus-social-card.jpg',
          navbar: {
            title: 'My Site',
            logo: { alt: 'My Site Logo', src: 'img/logo.svg' },
            items: [
              { to: 'docs/lisk-did', activeBasePath: 'docs', label: 'Documentation', position: 'left' },
              { href: 'https://github.com/aldhosutra/lisk-did', label: 'GitHub', position: 'right' },
            ],
            hideOnScroll: !1,
          },
          footer: {
            style: 'light',
            links: [
              {
                title: 'npm',
                items: [
                  { label: 'lisk-did', href: 'https://www.npmjs.com/package/lisk-did' },
                  { label: '@lisk-did/lisk-did-module', href: 'https://www.npmjs.com/package/lisk-did-module' },
                  {
                    label: '@lisk-did/lisk-decentralized-identifier',
                    href: 'https://www.npmjs.com/package/lisk-decentralized-identifier',
                  },
                  {
                    label: '@lisk-did/lisk-verifiable-credentials',
                    href: 'https://www.npmjs.com/package/lisk-verifiable-credentials',
                  },
                ],
              },
              {
                title: 'Community',
                items: [
                  { label: 'Lisk Discord', href: 'https://lisk.chat' },
                  { label: 'Lisk Twitter / X', href: 'https://twitter.com/LiskHQ' },
                  { label: 'Lisk Telegram', href: 'https://t.me/Lisk_HQ' },
                  { label: 'Lisk Reddit', href: 'https://www.reddit.com/r/Lisk' },
                ],
              },
              {
                title: 'More',
                items: [
                  { label: 'Lisk Official Website', href: 'https://lisk.com' },
                  { label: 'Lisk GitHub', href: 'https://github.com/LiskHQ' },
                ],
              },
            ],
            copyright:
              'Copyright \xa9 2023 <a href="mailto:aldhosutra@gmail.com">Aldo Suhartono Putra</a>. Built with Docusaurus.',
          },
          prism: {
            theme: {
              plain: { color: '#393A34', backgroundColor: '#f6f8fa' },
              styles: [
                { types: ['comment', 'prolog', 'doctype', 'cdata'], style: { color: '#999988', fontStyle: 'italic' } },
                { types: ['namespace'], style: { opacity: 0.7 } },
                { types: ['string', 'attr-value'], style: { color: '#e3116c' } },
                { types: ['punctuation', 'operator'], style: { color: '#393A34' } },
                {
                  types: [
                    'entity',
                    'url',
                    'symbol',
                    'number',
                    'boolean',
                    'variable',
                    'constant',
                    'property',
                    'regex',
                    'inserted',
                  ],
                  style: { color: '#36acaa' },
                },
                { types: ['atrule', 'keyword', 'attr-name', 'selector'], style: { color: '#00a4db' } },
                { types: ['function', 'deleted', 'tag'], style: { color: '#d73a49' } },
                { types: ['function-variable'], style: { color: '#6f42c1' } },
                { types: ['tag', 'selector', 'keyword'], style: { color: '#00009f' } },
              ],
            },
            darkTheme: {
              plain: { color: '#F8F8F2', backgroundColor: '#282A36' },
              styles: [
                { types: ['prolog', 'constant', 'builtin'], style: { color: 'rgb(189, 147, 249)' } },
                { types: ['inserted', 'function'], style: { color: 'rgb(80, 250, 123)' } },
                { types: ['deleted'], style: { color: 'rgb(255, 85, 85)' } },
                { types: ['changed'], style: { color: 'rgb(255, 184, 108)' } },
                { types: ['punctuation', 'symbol'], style: { color: 'rgb(248, 248, 242)' } },
                { types: ['string', 'char', 'tag', 'selector'], style: { color: 'rgb(255, 121, 198)' } },
                { types: ['keyword', 'variable'], style: { color: 'rgb(189, 147, 249)', fontStyle: 'italic' } },
                { types: ['comment'], style: { color: 'rgb(98, 114, 164)' } },
                { types: ['attr-name'], style: { color: 'rgb(241, 250, 140)' } },
              ],
            },
            additionalLanguages: [],
            magicComments: [
              {
                className: 'theme-code-block-highlighted-line',
                line: 'highlight-next-line',
                block: { start: 'highlight-start', end: 'highlight-end' },
              },
            ],
          },
          colorMode: { defaultMode: 'light', disableSwitch: !1, respectPrefersColorScheme: !1 },
          docs: { versionPersistence: 'localStorage', sidebar: { hideable: !1, autoCollapseCategories: !1 } },
          metadata: [],
          tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
        },
        plugins: [
          [
            'docusaurus-plugin-typedoc',
            {
              id: 'lisk-did',
              entryPoints: ['../lisk-did/src/index.ts'],
              tsconfig: '../lisk-did/tsconfig.json',
              out: 'lisk-did',
              sidebar: { fullNames: !0, categoryLabel: 'lisk-did', position: 0, collapsed: !1 },
            },
          ],
          [
            'docusaurus-plugin-typedoc',
            {
              id: 'lisk-did-module',
              entryPoints: ['../lisk-did-module/src/index.ts'],
              tsconfig: '../lisk-did-module/tsconfig.json',
              out: 'lisk-did-module',
              sidebar: { fullNames: !0, categoryLabel: '@lisk-did/lisk-did-module', position: 1, collapsed: !1 },
            },
          ],
          [
            'docusaurus-plugin-typedoc',
            {
              id: 'lisk-decentralized-identifier',
              entryPoints: ['../lisk-decentralized-identifier/src/index.ts'],
              tsconfig: '../lisk-decentralized-identifier/tsconfig.json',
              out: 'lisk-decentralized-identifier',
              sidebar: {
                fullNames: !0,
                categoryLabel: '@lisk-did/lisk-decentralized-identifier',
                position: 2,
                collapsed: !1,
              },
            },
          ],
          [
            'docusaurus-plugin-typedoc',
            {
              id: 'lisk-verifiable-credentials',
              entryPoints: ['../lisk-verifiable-credentials/src/index.ts'],
              tsconfig: '../lisk-verifiable-credentials/tsconfig.json',
              out: 'lisk-verifiable-credentials',
              sidebar: {
                fullNames: !0,
                categoryLabel: '@lisk-did/lisk-verifiable-credentials',
                position: 3,
                collapsed: !1,
              },
            },
          ],
        ],
        baseUrlIssueBanner: !0,
        onDuplicateRoutes: 'warn',
        staticDirectories: ['static'],
        customFields: {},
        themes: [],
        scripts: [],
        headTags: [],
        stylesheets: [],
        clientModules: [],
        titleDelimiter: '|',
        noIndex: !1,
        markdown: { mermaid: !1 },
      };
    },
    7529: e => {
      'use strict';
      e.exports = {};
    },
    6887: e => {
      'use strict';
      e.exports = JSON.parse(
        '{"/markdown-page-256":{"__comp":"1f391b9e","__context":{"plugin":"3992530b"},"content":"393be207"},"/docs-e4b":{"__comp":"1be78505","__context":{"plugin":"cdf1d32a"},"versionMetadata":"935f2afb"},"/docs/lisk-decentralized-identifier/-508":{"__comp":"17896441","content":"f8028371"},"/docs/lisk-decentralized-identifier/interfaces/AddControllersParam-aa6":{"__comp":"17896441","content":"2f4ec505"},"/docs/lisk-decentralized-identifier/interfaces/AddKeysParam-4b2":{"__comp":"17896441","content":"32406735"},"/docs/lisk-decentralized-identifier/interfaces/AddServiceEndpointParam-b31":{"__comp":"17896441","content":"ff787bc4"},"/docs/lisk-decentralized-identifier/interfaces/BaseResolver-dec":{"__comp":"17896441","content":"b03ad513"},"/docs/lisk-decentralized-identifier/interfaces/CipherInterface-8ac":{"__comp":"17896441","content":"ae8845ce"},"/docs/lisk-decentralized-identifier/interfaces/CreateParam-1a5":{"__comp":"17896441","content":"a41349e8"},"/docs/lisk-decentralized-identifier/interfaces/DeactivateParam-333":{"__comp":"17896441","content":"9140efc7"},"/docs/lisk-decentralized-identifier/interfaces/DidDocument-dac":{"__comp":"17896441","content":"69250ab0"},"/docs/lisk-decentralized-identifier/interfaces/DidEndpoint-aff":{"__comp":"17896441","content":"9826905d"},"/docs/lisk-decentralized-identifier/interfaces/DidMethod-544":{"__comp":"17896441","content":"ee471bf8"},"/docs/lisk-decentralized-identifier/interfaces/DidModuleConfig-65e":{"__comp":"17896441","content":"c254d40f"},"/docs/lisk-decentralized-identifier/interfaces/DocumentLoaderResult-7a5":{"__comp":"17896441","content":"11e5575d"},"/docs/lisk-decentralized-identifier/interfaces/Ed25519KeyPair-652":{"__comp":"17896441","content":"006b5ef1"},"/docs/lisk-decentralized-identifier/interfaces/Ed25519Signature2020-647":{"__comp":"17896441","content":"2798c384"},"/docs/lisk-decentralized-identifier/interfaces/JWEDocument-2df":{"__comp":"17896441","content":"e8985b18"},"/docs/lisk-decentralized-identifier/interfaces/KeysCommand-f70":{"__comp":"17896441","content":"547f338f"},"/docs/lisk-decentralized-identifier/interfaces/NonceStoreData-3c4":{"__comp":"17896441","content":"70144472"},"/docs/lisk-decentralized-identifier/interfaces/RemoveControllersParam-27e":{"__comp":"17896441","content":"b0278a69"},"/docs/lisk-decentralized-identifier/interfaces/RemoveKeysParam-ba6":{"__comp":"17896441","content":"fef3654c"},"/docs/lisk-decentralized-identifier/interfaces/RemoveServiceEndpointParam-2b1":{"__comp":"17896441","content":"1be2af91"},"/docs/lisk-decentralized-identifier/interfaces/resolver.CachedResolver-f6f":{"__comp":"17896441","content":"56c56022"},"/docs/lisk-decentralized-identifier/interfaces/Service-c7a":{"__comp":"17896441","content":"0f13b884"},"/docs/lisk-decentralized-identifier/interfaces/TransactionPayload-5ed":{"__comp":"17896441","content":"14522826"},"/docs/lisk-decentralized-identifier/interfaces/TransactionPayloadWithoutSignature-7cc":{"__comp":"17896441","content":"df9d7346"},"/docs/lisk-decentralized-identifier/interfaces/VerificationMethod-48d":{"__comp":"17896441","content":"38af9225"},"/docs/lisk-decentralized-identifier/modules-951":{"__comp":"17896441","content":"e0ab7c67"},"/docs/lisk-decentralized-identifier/namespaces/client-994":{"__comp":"17896441","content":"c09eaf2f"},"/docs/lisk-decentralized-identifier/namespaces/client.utils-0ea":{"__comp":"17896441","content":"6bd303db"},"/docs/lisk-decentralized-identifier/namespaces/cryptography-c7c":{"__comp":"17896441","content":"d48bbd1f"},"/docs/lisk-decentralized-identifier/namespaces/cryptography.codec-e41":{"__comp":"17896441","content":"d9f1061f"},"/docs/lisk-decentralized-identifier/namespaces/cryptography.convert-f77":{"__comp":"17896441","content":"53d0cfdb"},"/docs/lisk-decentralized-identifier/namespaces/cryptography.key-4d7":{"__comp":"17896441","content":"8ea19ab3"},"/docs/lisk-decentralized-identifier/namespaces/cryptography.method-5a3":{"__comp":"17896441","content":"da57b419"},"/docs/lisk-decentralized-identifier/namespaces/cryptography.operation-975":{"__comp":"17896441","content":"c773d40c"},"/docs/lisk-decentralized-identifier/namespaces/resolver-9df":{"__comp":"17896441","content":"4f18af5c"},"/docs/lisk-decentralized-identifier/namespaces/utils-f75":{"__comp":"17896441","content":"d301beab"},"/docs/lisk-decentralized-identifier/namespaces/utils.array-298":{"__comp":"17896441","content":"30035efc"},"/docs/lisk-decentralized-identifier/namespaces/utils.constant-47d":{"__comp":"17896441","content":"9c769a36"},"/docs/lisk-decentralized-identifier/namespaces/utils.object-f8c":{"__comp":"17896441","content":"d36ee2af"},"/docs/lisk-decentralized-identifier/namespaces/utils.schema-a04":{"__comp":"17896441","content":"8357b20f"},"/docs/lisk-did-module/-deb":{"__comp":"17896441","content":"6788c700"},"/docs/lisk-did-module/classes/AddControllersCommand-87e":{"__comp":"17896441","content":"b6f5dda7"},"/docs/lisk-did-module/classes/AddKeysCommand-085":{"__comp":"17896441","content":"1314dd29"},"/docs/lisk-did-module/classes/AddServiceEndpointCommand-bb9":{"__comp":"17896441","content":"4fef91a4"},"/docs/lisk-did-module/classes/CreateCommand-254":{"__comp":"17896441","content":"4ea5b618"},"/docs/lisk-did-module/classes/DeactivateCommand-163":{"__comp":"17896441","content":"2abc0038"},"/docs/lisk-did-module/classes/DidEndpoint-efe":{"__comp":"17896441","content":"cc026340"},"/docs/lisk-did-module/classes/DidMethod-5b9":{"__comp":"17896441","content":"66b5d29e"},"/docs/lisk-did-module/classes/DidModule-2a2":{"__comp":"17896441","content":"e2812223"},"/docs/lisk-did-module/classes/RemoveControllersCommand-4b2":{"__comp":"17896441","content":"89d806d6"},"/docs/lisk-did-module/classes/RemoveKeysCommand-023":{"__comp":"17896441","content":"c7a6ae36"},"/docs/lisk-did-module/classes/RemoveServiceEndpointCommand-6fb":{"__comp":"17896441","content":"43de257c"},"/docs/lisk-did-module/modules-41c":{"__comp":"17896441","content":"7e22a9a3"},"/docs/lisk-did/-647":{"__comp":"17896441","content":"c3610abc"},"/docs/lisk-did/classes/AddControllersCommand-765":{"__comp":"17896441","content":"8d655303"},"/docs/lisk-did/classes/AddKeysCommand-808":{"__comp":"17896441","content":"ffdf4e4e"},"/docs/lisk-did/classes/AddServiceEndpointCommand-dac":{"__comp":"17896441","content":"2032905b"},"/docs/lisk-did/classes/CreateCommand-976":{"__comp":"17896441","content":"54c42313"},"/docs/lisk-did/classes/DeactivateCommand-cdf":{"__comp":"17896441","content":"36f96204"},"/docs/lisk-did/classes/DidEndpoint-0b8":{"__comp":"17896441","content":"1e53cc69"},"/docs/lisk-did/classes/DidMethod-1cb":{"__comp":"17896441","content":"6d6a85ce"},"/docs/lisk-did/classes/DidModule-42f":{"__comp":"17896441","content":"de3a0db0"},"/docs/lisk-did/classes/RemoveControllersCommand-aa5":{"__comp":"17896441","content":"3cb32eb3"},"/docs/lisk-did/classes/RemoveKeysCommand-71c":{"__comp":"17896441","content":"83110983"},"/docs/lisk-did/classes/RemoveServiceEndpointCommand-afa":{"__comp":"17896441","content":"43ead82f"},"/docs/lisk-did/interfaces/did.AddControllersParam-22a":{"__comp":"17896441","content":"fe0cca24"},"/docs/lisk-did/interfaces/did.AddKeysParam-a8b":{"__comp":"17896441","content":"51c58943"},"/docs/lisk-did/interfaces/did.AddServiceEndpointParam-e6b":{"__comp":"17896441","content":"1d043ce7"},"/docs/lisk-did/interfaces/did.BaseResolver-a31":{"__comp":"17896441","content":"9ec64b7d"},"/docs/lisk-did/interfaces/did.CipherInterface-2ae":{"__comp":"17896441","content":"87f454ca"},"/docs/lisk-did/interfaces/did.CreateParam-732":{"__comp":"17896441","content":"3f817765"},"/docs/lisk-did/interfaces/did.DeactivateParam-5c2":{"__comp":"17896441","content":"9e72d314"},"/docs/lisk-did/interfaces/did.DidDocument-4ce":{"__comp":"17896441","content":"f170fb76"},"/docs/lisk-did/interfaces/did.DidEndpoint-829":{"__comp":"17896441","content":"7446a70e"},"/docs/lisk-did/interfaces/did.DidMethod-228":{"__comp":"17896441","content":"b35aa954"},"/docs/lisk-did/interfaces/did.DidModuleConfig-69b":{"__comp":"17896441","content":"30869df1"},"/docs/lisk-did/interfaces/did.DocumentLoaderResult-704":{"__comp":"17896441","content":"cded6dca"},"/docs/lisk-did/interfaces/did.Ed25519KeyPair-d6c":{"__comp":"17896441","content":"f7d8cbcc"},"/docs/lisk-did/interfaces/did.Ed25519Signature2020-ad5":{"__comp":"17896441","content":"514b65e5"},"/docs/lisk-did/interfaces/did.JWEDocument-90a":{"__comp":"17896441","content":"7c1c2168"},"/docs/lisk-did/interfaces/did.KeysCommand-87e":{"__comp":"17896441","content":"3de94718"},"/docs/lisk-did/interfaces/did.NonceStoreData-6f9":{"__comp":"17896441","content":"9b004fbb"},"/docs/lisk-did/interfaces/did.RemoveControllersParam-e09":{"__comp":"17896441","content":"1ee82caf"},"/docs/lisk-did/interfaces/did.RemoveKeysParam-c03":{"__comp":"17896441","content":"cb95a50b"},"/docs/lisk-did/interfaces/did.RemoveServiceEndpointParam-90d":{"__comp":"17896441","content":"2638761c"},"/docs/lisk-did/interfaces/did.resolver.CachedResolver-40b":{"__comp":"17896441","content":"829ff91d"},"/docs/lisk-did/interfaces/did.Service-e59":{"__comp":"17896441","content":"8b0148da"},"/docs/lisk-did/interfaces/did.TransactionPayload-3c1":{"__comp":"17896441","content":"704c791a"},"/docs/lisk-did/interfaces/did.TransactionPayloadWithoutSignature-2c5":{"__comp":"17896441","content":"904d2fff"},"/docs/lisk-did/interfaces/did.VerificationMethod-468":{"__comp":"17896441","content":"fe992c76"},"/docs/lisk-did/interfaces/vc.Proof-f16":{"__comp":"17896441","content":"e09b8622"},"/docs/lisk-did/interfaces/vc.VCVerificationResult-973":{"__comp":"17896441","content":"d0401cc7"},"/docs/lisk-did/interfaces/vc.VerificationKey-0a2":{"__comp":"17896441","content":"758cfb5d"},"/docs/lisk-did/interfaces/vc.VPVerificationResult-ef6":{"__comp":"17896441","content":"fc0957fe"},"/docs/lisk-did/modules-3b4":{"__comp":"17896441","content":"077ed4f6"},"/docs/lisk-did/namespaces/did-96e":{"__comp":"17896441","content":"790cfb73"},"/docs/lisk-did/namespaces/did.client-3a2":{"__comp":"17896441","content":"0dc75353"},"/docs/lisk-did/namespaces/did.client.utils-ab0":{"__comp":"17896441","content":"e27869dd"},"/docs/lisk-did/namespaces/did.cryptography-887":{"__comp":"17896441","content":"49bbbc1b"},"/docs/lisk-did/namespaces/did.cryptography.codec-641":{"__comp":"17896441","content":"e914d913"},"/docs/lisk-did/namespaces/did.cryptography.convert-54c":{"__comp":"17896441","content":"e1d57ac7"},"/docs/lisk-did/namespaces/did.cryptography.key-8c8":{"__comp":"17896441","content":"3cdeaa8b"},"/docs/lisk-did/namespaces/did.cryptography.method-1fa":{"__comp":"17896441","content":"c715c0af"},"/docs/lisk-did/namespaces/did.cryptography.operation-0a8":{"__comp":"17896441","content":"93eede03"},"/docs/lisk-did/namespaces/did.resolver-03b":{"__comp":"17896441","content":"7ae82ac8"},"/docs/lisk-did/namespaces/did.utils-20d":{"__comp":"17896441","content":"da75fb34"},"/docs/lisk-did/namespaces/did.utils.array-a36":{"__comp":"17896441","content":"064985d9"},"/docs/lisk-did/namespaces/did.utils.constant-d82":{"__comp":"17896441","content":"c9404f21"},"/docs/lisk-did/namespaces/did.utils.object-16b":{"__comp":"17896441","content":"c471a213"},"/docs/lisk-did/namespaces/did.utils.schema-d92":{"__comp":"17896441","content":"2aec2d79"},"/docs/lisk-did/namespaces/vc-7c4":{"__comp":"17896441","content":"9674a20c"},"/docs/lisk-did/namespaces/vc.codec-2a7":{"__comp":"17896441","content":"6e22ba8f"},"/docs/lisk-did/namespaces/vc.documentLoader-8f4":{"__comp":"17896441","content":"e32ffa57"},"/docs/lisk-did/namespaces/vc.documentLoader.builders-f35":{"__comp":"17896441","content":"2d5f723b"},"/docs/lisk-verifiable-credentials/-4d2":{"__comp":"17896441","content":"7cc6c21f"},"/docs/lisk-verifiable-credentials/interfaces/Proof-9df":{"__comp":"17896441","content":"cdeb6dcd"},"/docs/lisk-verifiable-credentials/interfaces/VCVerificationResult-856":{"__comp":"17896441","content":"b672006c"},"/docs/lisk-verifiable-credentials/interfaces/VerificationKey-130":{"__comp":"17896441","content":"ca5260f0"},"/docs/lisk-verifiable-credentials/interfaces/VPVerificationResult-c06":{"__comp":"17896441","content":"47f1fc17"},"/docs/lisk-verifiable-credentials/modules-176":{"__comp":"17896441","content":"a25ba2f2"},"/docs/lisk-verifiable-credentials/namespaces/codec-9cf":{"__comp":"17896441","content":"4453e5a0"},"/docs/lisk-verifiable-credentials/namespaces/documentLoader-747":{"__comp":"17896441","content":"10555422"},"/docs/lisk-verifiable-credentials/namespaces/documentLoader.builders-9d6":{"__comp":"17896441","content":"cdd145b6"},"/-c91":{"__comp":"c4f5d8e4","__context":{"plugin":"3992530b"},"config":"5e9f5e1a"}}',
      );
    },
  },
  e => {
    e.O(0, [532], () => {
      return (t = 2640), e((e.s = t));
      var t;
    });
    e.O();
  },
]);
