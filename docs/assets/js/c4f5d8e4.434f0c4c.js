'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [4195],
  {
    3056: (e, t, i) => {
      i.r(t), i.d(t, { default: () => h });
      var n = i(2784),
        s = i(6277),
        a = i(9817),
        l = i(7614),
        c = i(3310),
        r = i(7896);
      const d = { features: 'features_t9lD', featureSvg: 'featureSvg_GfXr' },
        o = [
          {
            title: 'lisk-did',
            src: i(3332).Z,
            description: n.createElement(
              n.Fragment,
              null,
              'Lisk DID/VC Development Kit, which bundles other Lisk DID packages into one single package.',
            ),
          },
          {
            title: '@lisk-did/lisk-did-module',
            src: i(1949).Z,
            description: n.createElement(
              n.Fragment,
              null,
              'Lisk module which implements on-chain logic for Lisk decentralized identifiers (DIDs)',
            ),
          },
          {
            title: '@lisk-did/lisk-decentralized-identifier',
            src: i(9920).Z,
            description: n.createElement(
              n.Fragment,
              null,
              'A library to work with W3C Decentralized Identifier (DID) for Lisk sidechains with the Lisk DID module.',
            ),
          },
          {
            title: '@lisk-did/lisk-verifiable-credentials',
            src: i(8713).Z,
            description: n.createElement(
              n.Fragment,
              null,
              'A library for working with W3C verifiable credentials (VC) and verifiable presentations (VP) using Lisk DID.',
            ),
          },
        ];
      function m(e) {
        let { src: t, title: i, description: a } = e;
        return n.createElement(
          'div',
          { className: (0, s.Z)('col col--3') },
          n.createElement(
            'div',
            { className: 'text--center' },
            n.createElement('img', { src: t, className: d.featureSvg }),
          ),
          n.createElement(
            'div',
            { className: 'text--center padding-horiz--md' },
            n.createElement('h3', null, i),
            n.createElement('p', null, a),
          ),
        );
      }
      function u() {
        return n.createElement(
          'section',
          { className: d.features },
          n.createElement(
            'div',
            { className: 'container' },
            n.createElement(
              'div',
              { className: 'row' },
              o.map((e, t) => n.createElement(m, (0, r.Z)({ key: t }, e))),
            ),
          ),
        );
      }
      const k = { heroBanner: 'heroBanner_qdFl', button: 'button_JGCe', buttons: 'buttons_AeoN' };
      function b() {
        const { siteConfig: e } = (0, l.Z)();
        return n.createElement(
          'header',
          { className: (0, s.Z)('hero hero--primary', k.heroBanner) },
          n.createElement(
            'div',
            { className: 'container' },
            n.createElement('h1', { className: 'hero__title' }, e.title),
            n.createElement('p', { className: 'hero__subtitle' }, e.tagline),
            n.createElement(
              'div',
              { className: k.buttons },
              n.createElement(
                a.Z,
                { className: (0, s.Z)('button button--secondary button--lg', k.button), to: '/docs/lisk-did' },
                'Get Started',
              ),
              n.createElement('div', { style: { width: '20px' } }),
              n.createElement(
                a.Z,
                {
                  className: (0, s.Z)('button button--secondary button--lg', k.button),
                  to: 'https://github.com/aldhosutra/lisk-did/blob/main/packages/lisk-did-module/docs/did-method-spec.md',
                },
                'DID Method Specs',
              ),
            ),
          ),
        );
      }
      function h() {
        const { siteConfig: e } = (0, l.Z)();
        return n.createElement(
          c.Z,
          { title: 'DID/VC For Lisk Sidechain', description: 'lisk-did Documentation' },
          n.createElement(b, null),
          n.createElement('main', null, n.createElement(u, null)),
        );
      }
    },
    9920: (e, t, i) => {
      i.d(t, { Z: () => n });
      const n = i.p + 'assets/images/did-0b8209806f7ba8976d1f8a45147a639c.png';
    },
    1949: (e, t, i) => {
      i.d(t, { Z: () => n });
      const n = i.p + 'assets/images/lisk-did-module-7adcabe54cacc32d6a91163dabd36d7c.png';
    },
    3332: (e, t, i) => {
      i.d(t, { Z: () => n });
      const n = i.p + 'assets/images/lisk-did-sdk-1cd1e97fa224e2eb3c337f4994e40318.png';
    },
    8713: (e, t, i) => {
      i.d(t, { Z: () => n });
      const n = i.p + 'assets/images/vc-90b06406b15938dbf04d2a9d727ae007.png';
    },
  },
]);
