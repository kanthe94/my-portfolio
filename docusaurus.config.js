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
      title: 'Ganesh Kanthe Portfolio',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ganesh.svg',
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
          title: 'Contact Information',
          items: [
            {
              label: 'Phone Number: (+91) 9619160088',
              href:"#"
            },
            {
              label: 'Email: ganeshkanthe94@gmail.com',
              href: 'mailto:ganeshkanthe94@gmail.com',
            }
          ],
        },
        {
          title: 'Connect With Me',
          items: [
            {
              label: "LinkedIn",
              href: 'https://www.linkedin.com/in/ganesh-kanthe',
            },
            {
              label: "Facebook",
              href: 'https://www.facebook.com/people/Ganesh-Kanthe/100008409331712',
            },
            {
              label: "Instagram",
              href: 'https://www.instagram.com/ganeshkanthe?igsh=MWp1aDNzZHR4b3FiYg==',
            },
            
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} - Built by Ganesh Kanthe`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Set docs as the homepage
          sidebarPath: undefined,
          // sidebarCollapsible: false,
          // sidebarContainer: false,
        },
        blog: false, // Disable blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};