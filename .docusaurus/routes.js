
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/mtaa-docs/',
  component: ComponentCreator('/mtaa-docs/','d92'),
  exact: true,
},
{
  path: '/mtaa-docs/__docusaurus/debug',
  component: ComponentCreator('/mtaa-docs/__docusaurus/debug','3f2'),
  exact: true,
},
{
  path: '/mtaa-docs/__docusaurus/debug/config',
  component: ComponentCreator('/mtaa-docs/__docusaurus/debug/config','281'),
  exact: true,
},
{
  path: '/mtaa-docs/__docusaurus/debug/content',
  component: ComponentCreator('/mtaa-docs/__docusaurus/debug/content','a52'),
  exact: true,
},
{
  path: '/mtaa-docs/__docusaurus/debug/globalData',
  component: ComponentCreator('/mtaa-docs/__docusaurus/debug/globalData','b35'),
  exact: true,
},
{
  path: '/mtaa-docs/__docusaurus/debug/metadata',
  component: ComponentCreator('/mtaa-docs/__docusaurus/debug/metadata','55e'),
  exact: true,
},
{
  path: '/mtaa-docs/__docusaurus/debug/registry',
  component: ComponentCreator('/mtaa-docs/__docusaurus/debug/registry','d93'),
  exact: true,
},
{
  path: '/mtaa-docs/__docusaurus/debug/routes',
  component: ComponentCreator('/mtaa-docs/__docusaurus/debug/routes','f63'),
  exact: true,
},
{
  path: '/mtaa-docs/api/0',
  component: ComponentCreator('/mtaa-docs/api/0','62a'),
  exact: true,
},
{
  path: '/mtaa-docs/blog',
  component: ComponentCreator('/mtaa-docs/blog','16f'),
  exact: true,
},
{
  path: '/mtaa-docs/blog/mtaa with flask',
  component: ComponentCreator('/mtaa-docs/blog/mtaa with flask','901'),
  exact: true,
},
{
  path: '/mtaa-docs/blog/tags',
  component: ComponentCreator('/mtaa-docs/blog/tags','456'),
  exact: true,
},
{
  path: '/mtaa-docs/blog/tags/flask',
  component: ComponentCreator('/mtaa-docs/blog/tags/flask','3c5'),
  exact: true,
},
{
  path: '/mtaa-docs/blog/tags/jquery',
  component: ComponentCreator('/mtaa-docs/blog/tags/jquery','658'),
  exact: true,
},
{
  path: '/mtaa-docs/blog/tags/mtaa',
  component: ComponentCreator('/mtaa-docs/blog/tags/mtaa','9cf'),
  exact: true,
},
{
  path: '/mtaa-docs/markdown-page',
  component: ComponentCreator('/mtaa-docs/markdown-page','968'),
  exact: true,
},
{
  path: '/mtaa-docs/docs',
  component: ComponentCreator('/mtaa-docs/docs','bcf'),
  
  routes: [
{
  path: '/mtaa-docs/docs/intro',
  component: ComponentCreator('/mtaa-docs/docs/intro','6ea'),
  exact: true,
},
{
  path: '/mtaa-docs/docs/mtaa-api/graphl',
  component: ComponentCreator('/mtaa-docs/docs/mtaa-api/graphl','7e2'),
  exact: true,
},
{
  path: '/mtaa-docs/docs/mtaa-api/intro',
  component: ComponentCreator('/mtaa-docs/docs/mtaa-api/intro','9d5'),
  exact: true,
},
{
  path: '/mtaa-docs/docs/mtaa-api/rest',
  component: ComponentCreator('/mtaa-docs/docs/mtaa-api/rest','e6e'),
  exact: true,
},
{
  path: '/mtaa-docs/docs/mtaa/getting_started',
  component: ComponentCreator('/mtaa-docs/docs/mtaa/getting_started','0ce'),
  exact: true,
},
{
  path: '/mtaa-docs/docs/mtaa/grouped_location',
  component: ComponentCreator('/mtaa-docs/docs/mtaa/grouped_location','b4c'),
  exact: true,
},
{
  path: '/mtaa-docs/docs/mtaa/installation',
  component: ComponentCreator('/mtaa-docs/docs/mtaa/installation','710'),
  exact: true,
},
{
  path: '/mtaa-docs/docs/mtaa/more_examples',
  component: ComponentCreator('/mtaa-docs/docs/mtaa/more_examples','f6c'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
