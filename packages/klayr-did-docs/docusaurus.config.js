// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'klayr-did',
  tagline: 'W3C Decentralized Identifier (DID) and Verifiable Credentials (VC) for Klayr Sidechain',
  favicon: 'img/klayr-did.ico',

  // Set the production url of your site here
  url: 'https://klayr-did.js.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aldhosutra', // Usually your GitHub org/user name.
  projectName: 'klayr-did', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/aldhosutra/klayr-did/tree/main/packages/klayr-did-docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/klayr-did-monorepo-header.jpg',
      navbar: {
        title: 'klayr-did',
        logo: {
          alt: 'klayr-did',
          src: 'img/klayr-did-logo.jpg',
        },
        items: [
          {
            to: 'docs/klayr-did',
            activeBasePath: 'docs',
            label: 'Documentation',
            position: 'left',
          },
          {
            href: 'https://github.com/aldhosutra/klayr-did',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'npm',
            items: [
              {
                label: 'klayr-did',
                href: 'https://www.npmjs.com/package/klayr-did',
              },
              {
                label: '@klayr-did/klayr-did-module',
                href: 'https://www.npmjs.com/package/@klayr-did/klayr-did-module',
              },
              {
                label: '@klayr-did/klayr-decentralized-identifier',
                href: 'https://www.npmjs.com/package/@klayr-did/klayr-decentralized-identifier',
              },
              {
                label: '@klayr-did/klayr-verifiable-credentials',
                href: 'https://www.npmjs.com/package/@klayr-did/klayr-verifiable-credentials',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Klayr Discord',
                href: 'https://klayr.chat',
              },
              {
                label: 'Klayr Twitter / X',
                href: 'https://twitter.com/KlayrHQ',
              },
              {
                label: 'Klayr Telegram',
                href: 'https://t.me/Klayr_HQ',
              },
              {
                label: 'Klayr Reddit',
                href: 'https://www.reddit.com/r/Klayr',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Klayr Official Website',
                href: 'https://klayr.xyz',
              },
              {
                label: 'Klayr GitHub',
                href: 'https://github.com/KlayrHQ',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="mailto:aldhosutra@gmail.com">Aldo Suhartono Putra</a>. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'klayr-did',
        entryPoints: ['../klayr-did/src/index.ts'],
        tsconfig: '../klayr-did/tsconfig.json',
        out: 'klayr-did',
        sidebar: {
          fullNames: true,
          categoryLabel: 'klayr-did',
          position: 0,
          collapsed: false,
        },
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'klayr-did-module',
        entryPoints: ['../klayr-did-module/src/index.ts'],
        tsconfig: '../klayr-did-module/tsconfig.json',
        out: 'klayr-did-module',
        sidebar: {
          fullNames: true,
          categoryLabel: '@klayr-did/klayr-did-module',
          position: 1,
          collapsed: false,
        },
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'klayr-decentralized-identifier',
        entryPoints: ['../klayr-decentralized-identifier/src/index.ts'],
        tsconfig: '../klayr-decentralized-identifier/tsconfig.json',
        out: 'klayr-decentralized-identifier',
        sidebar: {
          fullNames: true,
          categoryLabel: '@klayr-did/klayr-decentralized-identifier',
          position: 2,
          collapsed: false,
        },
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'klayr-verifiable-credentials',
        entryPoints: ['../klayr-verifiable-credentials/src/index.ts'],
        tsconfig: '../klayr-verifiable-credentials/tsconfig.json',
        out: 'klayr-verifiable-credentials',
        sidebar: {
          fullNames: true,
          categoryLabel: '@klayr-did/klayr-verifiable-credentials',
          position: 3,
          collapsed: false,
        },
      },
    ],
  ],
};

module.exports = config;
