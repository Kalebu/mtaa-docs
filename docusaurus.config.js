/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Mtaa Documentation',
  tagline: 'easy retrieve locations in Tanzania',
  url: 'https://kalebu.github.io',
  baseUrl: '/mtaa-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/4-2-python-logo-picture_64x64.ico',
  organizationName: 'kalebu', // Usually your GitHub org/user name.
  projectName: 'mtaa-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Mtaa',
      logo: {
        alt: 'My Site Logo',
        src: 'img/4-2-python-logo-picture.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/kalebu/mtaa',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/mtaa',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/mtaa',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/j_kalebu',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kalebu/mtaa',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mtaa, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
