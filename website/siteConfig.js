/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'USThing',
    image: '/img/usthing.png',
    infoLink: 'https://www.usthing.xyz',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Clipped' /* title for your website */,
  tagline: 'Make configuration hurt once only',
  url: 'https://clippedjs.github.io' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  headerLinks: [
    {doc: 'setup', label: 'Docs'},
    // {doc: 'api', label: 'API'},
    // {page: 'faq', label: 'FAQ'},
    { href: "https://github.com/clippedjs/clipped", label: "GitHub" },
    {blog: true, label: 'Blog'},
    { search: true },
  ],
  algolia: {
    apiKey: '6d429185a8fcd88b6b11844c76536b64',
    indexName: 'prod_clipped',
    algoliaOptions: { 
      facetFilters: [ "tags:VERSION" ], 
      hitsPerPage: 5 
    }
  },
  gaTrackingId: 'UA-108887459-2',
  users,
  /* path to images for header/footer */
  headerIcon: 'img/icon-inverted.png',
  footerIcon: 'img/icon-inverted.png',
  favicon: 'img/icon.png',
  /* colors for website */
  colors: {
    primaryColor: '#555555',
    secondaryColor: '#ddd',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' ClippedJs',
  organizationName: 'clippedjs', // or set an env variable ORGANIZATION_NAME
  projectName: 'clippedjs.github.io', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'monokai',
  },
  noIndex: false,
  editUrl: "https://github.com/clippedjs/clippedjs.github.io/edit/develop/docs/",
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/clippedjs/clipped',
  useEnglishUrl: true
};

module.exports = siteConfig;
