module.exports = {
  title: 'My Portfolio',
  tagline: 'Simple User Guides for Everyday Products',
  url: 'https://kanthe94.github.io',
  baseUrl: '/my-portfolio/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kanthe94', // GitHub username
  projectName: 'my-portfolio', // GitHub repo name
  themeConfig: {
    navbar: {
      title: 'My Portfolio',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Guides',
        //   position: 'left',
        // },
        {
          href: 'https://github.com/kanthe94/my-portfolio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Wireless Mouse',
              to: '/wireless-mouse',
            },
            {
              label: 'Extension Cord',
              to: '/extension-cord',
            },
            {
              label: 'Doorbell',
              to: '/doorbell',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/kanthe94/my-portfolio',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Portfolio. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Set docs as the homepage
        },
        blog: false, // Disable blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};