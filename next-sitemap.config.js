/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://31degreesnorth.in',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/private-page'], // optional
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      // optional: add more sitemaps here
    ],
  },
};
