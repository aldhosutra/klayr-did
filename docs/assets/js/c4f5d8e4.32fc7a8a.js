'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [4195],
  {
    3056: (e, t, i) => {
      i.r(t), i.d(t, { default: () => p });
      var s = i(2784),
        a = i(6277),
        n = i(9817),
        l = i(7614),
        c = i(3310),
        r = i(7896);
      const d = { features: 'features_t9lD', featureSvg: 'featureSvg_GfXr' },
        o = [
          {
            title: 'lisk-did',
            src: i(3332).Z,
            description: s.createElement(
              s.Fragment,
              null,
              'Lisk DID/VC Development Kit, which bundles other Lisk DID packages into one single package.',
            ),
          },
          {
            title: '@lisk-did/lisk-did-module',
            src: i(1949).Z,
            description: s.createElement(
              s.Fragment,
              null,
              'Lisk module which implements on-chain logic for Lisk decentralized identifiers (DIDs)',
            ),
          },
          {
            title: '@lisk-did/lisk-decentralized-identifier',
            src: i(9920).Z,
            description: s.createElement(
              s.Fragment,
              null,
              'A library to work with W3C Decentralized Identifier (DID) for Lisk sidechains with the Lisk DID module.',
            ),
          },
          {
            title: '@lisk-did/lisk-verifiable-credentials',
            src: i(8713).Z,
            description: s.createElement(
              s.Fragment,
              null,
              'A library for working with W3C verifiable credentials (VC) and verifiable presentations (VP) using Lisk DID.',
            ),
          },
        ];
      function m(e) {
        let { src: t, title: i, description: n } = e;
        return s.createElement(
          'div',
          { className: (0, a.Z)('col col--3') },
          s.createElement(
            'div',
            { className: 'text--center' },
            s.createElement('img', { src: t, className: d.featureSvg }),
          ),
          s.createElement(
            'div',
            { className: 'text--center padding-horiz--md' },
            s.createElement('h3', null, i),
            s.createElement('p', null, n),
          ),
        );
      }
      function u() {
        return s.createElement(
          'section',
          { className: d.features },
          s.createElement(
            'div',
            { className: 'container' },
            s.createElement(
              'div',
              { className: 'row' },
              o.map((e, t) => s.createElement(m, (0, r.Z)({ key: t }, e))),
            ),
          ),
        );
      }
      const k = { heroBanner: 'heroBanner_qdFl', buttons: 'buttons_AeoN' };
      function h() {
        const { siteConfig: e } = (0, l.Z)();
        return s.createElement(
          'header',
          { className: (0, a.Z)('hero hero--primary', k.heroBanner) },
          s.createElement(
            'div',
            { className: 'container' },
            s.createElement('h1', { className: 'hero__title' }, e.title),
            s.createElement('p', { className: 'hero__subtitle' }, e.tagline),
            s.createElement(
              'div',
              { className: k.buttons },
              s.createElement(
                n.Z,
                { className: 'button button--secondary button--lg', to: '/docs/lisk-did' },
                'Get Started',
              ),
              s.createElement('div', { style: { width: '1%' } }),
              s.createElement(
                n.Z,
                {
                  className: 'button button--secondary button--lg',
                  to: 'https://github.com/aldhosutra/lisk-did/blob/main/packages/lisk-did-module/docs/did-method-spec.md',
                },
                'Read DID Method Specs',
              ),
            ),
          ),
        );
      }
      function p() {
        const { siteConfig: e } = (0, l.Z)();
        return s.createElement(
          c.Z,
          { title: 'DID/VC For Lisk Sidechain', description: 'lisk-did Documentation' },
          s.createElement(h, null),
          s.createElement('main', null, s.createElement(u, null)),
        );
      }
    },
    9920: (e, t, i) => {
      i.d(t, { Z: () => s });
      const s = i.p + 'assets/images/did-0b8209806f7ba8976d1f8a45147a639c.png';
    },
    1949: (e, t, i) => {
      i.d(t, { Z: () => s });
      const s = i.p + 'assets/images/lisk-did-module-7adcabe54cacc32d6a91163dabd36d7c.png';
    },
    3332: (e, t, i) => {
      i.d(t, { Z: () => s });
      const s = i.p + 'assets/images/lisk-did-sdk-1cd1e97fa224e2eb3c337f4994e40318.png';
    },
    8713: (e, t, i) => {
      i.d(t, { Z: () => s });
      const s = i.p + 'assets/images/vc-90b06406b15938dbf04d2a9d727ae007.png';
    },
  },
]);
