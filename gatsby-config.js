/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "CPA Solutions",
    menuLinks: [
      {
        name: `Home`,
        url: `/`,
      },
      {
        name: `About`,
        url: `/about`,
      },
      {
        name: `Services`,
        url: `/services`,
      },
      {
        name: `Tax Center`,
        url: `/tax-center`,
      },
      {
        name: `Resources`,
        url: `/resources`,
      },
      {
        name: `Contact`,
        url: `/contact`,
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "files",
        path: `${__dirname}/src/markdown`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      }
    }
  ],
}
