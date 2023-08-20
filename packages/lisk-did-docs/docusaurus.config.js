// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'docs/lisk-did',
            activeBasePath: 'docs',
            label: 'Documentation',
            position: 'left',
          },
          {
            href: 'https://github.com/aldhosutra/lisk-did',
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
                label: 'lisk-did',
                href: 'https://www.npmjs.com/package/lisk-did',
              },
              {
                label: '@lisk-did/lisk-did-module',
                href: 'https://www.npmjs.com/package/lisk-did-module',
              },
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
              {
                label: 'Lisk Discord',
                href: 'https://lisk.chat',
              },
              {
                label: 'Lisk Twitter / X',
                href: 'https://twitter.com/LiskHQ',
              },
              {
                label: 'Lisk Telegram',
                href: 'https://t.me/Lisk_HQ',
              },
              {
                label: 'Lisk Reddit',
                href: 'https://www.reddit.com/r/Lisk',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Lisk Official Website',
                href: 'https://lisk.com',
              },
              {
                label: 'Lisk GitHub',
                href: 'https://github.com/LiskHQ',
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
        id: 'lisk-did',
        entryPoints: ['../lisk-did/src/index.ts'],
        tsconfig: '../lisk-did/tsconfig.json',
        out: 'lisk-did',
        sidebar: {
          fullNames: true,
          categoryLabel: 'lisk-did',
          position: 0,
          collapsed: false,
        },
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'lisk-did-module',
        entryPoints: ['../lisk-did-module/src/index.ts'],
        tsconfig: '../lisk-did-module/tsconfig.json',
        out: 'lisk-did-module',
        sidebar: {
          fullNames: true,
          categoryLabel: '@lisk-did/lisk-did-module',
          position: 1,
          collapsed: false,
        },
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
          fullNames: true,
          categoryLabel: '@lisk-did/lisk-decentralized-identifier',
          position: 2,
          collapsed: false,
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
          fullNames: true,
          categoryLabel: '@lisk-did/lisk-verifiable-credentials',
          position: 3,
          collapsed: false,
        },
      },
    ],
  ],
};

module.exports = config;
