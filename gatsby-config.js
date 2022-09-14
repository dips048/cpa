/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "CPA Solutions",
    description: "CPA solutions for people",
    siteUrl: `https://www.cpa-solution.com`,
    menuLinks: [
      {
        name: "Home",
        url: "/",
        subLinks: [],
      },
      {
        name: "About",
        url: "/about",
        subLinks: [
          {
            name: "Our Values",
            url: "/our-values",
            subLinks: [],
          },
          {
            name: "client Reviews",
            url: "/client-reviews",
            subLinks: [],
          },
          {
            name: "Employment Opportunities",
            url: "/employment-opportunities",
            subLinks: [],
          },
          {
            name: "Blog",
            url: "/blog",
            subLinks: [],
          },
        ],
      },
      {
        name: "Services",
        url: "/services",
        subLinks: [
          {
            name: "Services For Inividuals",
            url: "/services-for-individuals",
            subLinks: [
              {
                name: "Personal Financial Planning",
                url: "/personal-financial-planning",
                subLinks: [],
              },
              {
                name: "Retirement Planning",
                url: "/retirement-planning",
                subLinks: [],
              },
              {
                name: "Estate Planning",
                url: "/estate-planning",
                subLinks: [],
              },
              {
                name: "Elder Care",
                url: "/elder-care",
                subLinks: [],
              },
              {
                name: "Wealth Management",
                url: "/wealth-management",
                subLinks: [],
              },
            ],
          },
          {
            name: "Business Services",
            url: "/business-services",
            subLinks: [
              {
                name: "Small Business Accounting",
                url: "/small-business-accounting",
                subLinks: [],
              },
              {
                name: "Book Keeping Services",
                url: "/book-keeping-services",
                subLinks: [],
              },
              {
                name: "Payroll",
                url: "/payroll",
                subLinks: [],
              },
              {
                name: "Part-Time CFO Services",
                url: "/part-time-cfo-services",
                subLinks: [],
              },
              {
                name: "Audits-Reviews-Compilations",
                url: "/audits-reviews-compilations",
                subLinks: [],
              },
              {
                name: "Forensic Accounting",
                url: "/forensic-accounting",
                subLinks: [],
              },
              {
                name: "Cash Flow Management",
                url: "/cash-flow-management",
                subLinks: [],
              },
              {
                name: "Bank Financing",
                url: "/bank-financing",
                subLinks: [],
              },
              {
                name: "Business Valuation",
                url: "/business-valuation",
                subLinks: [],
              },
              {
                name: "Business Advisory Services",
                url: "/business-advisory-services",
                subLinks: [],
              },
              {
                name: "Financial Planning for Businesses",
                url: "/financial-planning-for-businesses",
                subLinks: [],
              },
              {
                name: "Succession Planning",
                url: "/succession-planning",
                subLinks: [],
              },
              {
                name: "New Business Formation",
                url: "/new-business-formation",
                subLinks: [],
              },
              {
                name: "Non-Profit Organizations",
                url: "/non-profit-organizations",
                subLinks: [],
              },
              {
                name: "Internal Controls",
                url: "/internal-controls",
                subLinks: [],
              },
              {
                name: "Litigation Support",
                url: "/litigation-support",
                subLinks: [],
              },
            ],
          },
          {
            name: "Tax Services",
            url: "/tax-services",
            subLinks: [
              {
                name: "Individual Tax Preparation",
                url: "/individual-tax-preparation",
                subLinks: [],
              },
              {
                name: "Tax Preparation For Business",
                url: "/tax-preparation-for-business",
                subLinks: [],
              },
              {
                name: "Tax Planning",
                url: "/tax-planning",
                subLinks: [],
              },
              {
                name: "Estate & Trust Tax Services",
                url: "/estate-trust-tax-services",
                subLinks: [],
              },
              {
                name: "Tax Relief",
                url: "/tax-relief",
                subLinks: [
                  {
                    name: "IRS Audit Representation",
                    url: "/irs-audit-representation",
                    subLinks: [],
                  },
                  {
                    name: "Non-Filed Tax Returns",
                    url: "/non-filed-tax-returns",
                    subLinks: [],
                  },
                  {
                    name: "Back Taxes Owed",
                    url: "/back-taxes-owed",
                    subLinks: [],
                  },
                  {
                    name: "Payroll Tax Problems",
                    url: "/payroll-tax-problems",
                    subLinks: [],
                  },
                  {
                    name: "IRS Liens",
                    url: "/irs-liens",
                    subLinks: [],
                  },
                  {
                    name: "IRS Levies",
                    url: "/irs-levies",
                    subLinks: [],
                  },
                  {
                    name: "IRS Wage Garnishment",
                    url: "/irs-wage-garnishment",
                    subLinks: [],
                  },
                  {
                    name: "IRS Seizures",
                    url: "/irs-seizures",
                    subLinks: [],
                  },
                  {
                    name: "IRS Payment Plan",
                    url: "/irs-payment-plan",
                    subLinks: [],
                  },
                  {
                    name: "Offer In Compromise",
                    url: "/offer-in-compromise",
                    subLinks: [],
                  },
                  {
                    name: "Bankruptcy",
                    url: "/bankruptcy",
                    subLinks: [],
                  },
                  {
                    name: "Innocent Spouse Relief",
                    url: "/innocent-spouse-relief",
                    subLinks: [],
                  },
                  {
                    name: "Get Your IRS File",
                    url: "/get-your-irs-file",
                    subLinks: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Services For QuickBooks",
            url: "/services-for-quick-books",
            subLinks: [
              {
                name: "Why QuickBooks",
                url: "/why-quick-books",
                subLinks: [],
              },
              {
                name: "Setup for QuickBooks",
                url: "/setup-quick-books",
                subLinks: [],
              },
              {
                name: "Training For QuickBooks",
                url: "/training-quick-books",
                subLinks: [],
              },
              {
                name: "Answers To QuickBooks",
                url: "/answers-to-quick-books",
                subLinks: [],
              },
              {
                name: "Tune-up For QuickBooks",
                url: "/tune-up-quick-books",
                subLinks: [],
              },
              {
                name: "Tips For QuickBooks Users",
                url: "/tips-quick-books",
                subLinks: [],
              },
            ],
          },
          {
            name: "Industries",
            url: "/industries",
            subLinks: [
              {
                name: "Construction",
                url: "/construction",
                subLinks: [],
              },
              {
                name: "Dentists",
                url: "/dentists",
                subLinks: [],
              },
              {
                name: "Healthcare",
                url: "/healthcare",
                subLinks: [],
              },
              {
                name: "Hospitality",
                url: "/hospitality",
                subLinks: [],
              },
              {
                name: "Law Firms",
                url: "/law-firms",
                subLinks: [],
              },
              {
                name: "Manufacturers",
                url: "/manufacturers",
                subLinks: [],
              },
              {
                name: "Real Estate",
                url: "/real-estate",
                subLinks: [],
              },
            ],
          },
        ],
      },
      {
        name: "Tax Center",
        url: "/tax-center",
        subLinks: [
          {
            name: "Track Your Refund",
            url: "/track-your-refund",
            subLinks: [],
          },
          {
            name: "Tax Due Dates",
            url: "/tax-due-dates",
            subLinks: [],
          },
          {
            name: "Tax Rates",
            url: "/tax-rates",
            subLinks: [],
          },
          {
            name: "IRS Tax Forms and Publications",
            url: "/irs-tax-forms-publications",
            subLinks: [],
          },
          {
            name: "Record Retention Guide",
            url: "/record-retention-guide",
            subLinks: [],
          },
          {
            name: "State Tax Forms",
            url: "/state-tax-forms",
            subLinks: [],
          },
        ],
      },
      {
        name: "Resources",
        url: "/resources",
        subLinks: [
          {
            name: "Newsletter",
            url: "/newsletter",
            subLinks: [
              {
                name: "This Months Newsletter",
                url: "/newsletter",
                subLinks: [],
              },
              {
                name: "Previous Newsletter",
                url: "/previous-newsletter",
                subLinks: [],
              },
            ],
          },
          {
            name: "Guides",
            url: "/guides",
            subLinks: [
              {
                name: "Life Events",
                url: "/life-events",
                subLinks: [],
              },
              {
                name: "Business Strategies",
                url: "/business-strategies",
                subLinks: [],
              },
              {
                name: "Investment Strategies",
                url: "/investment-strategies",
                subLinks: [],
              },
              {
                name: "Tax Strategies for Business Owners",
                url: "/tax-strategies-business-owners",
                subLinks: [],
              },
              {
                name: "Tax Strategies for Individuals",
                url: "/tax-strategies-individuals",
                subLinks: [],
              },
              {
                name: "Frequently Asked Questions",
                url: "/frequently-asked-questions",
                subLinks: [],
              },
            ],
          },
          {
            name: "Financial Calculators",
            url: "/financial-calculators",
            subLinks: [],
          },
          {
            name: "Client Portal",
            url: "/client-portal",
            subLinks: [],
          },
          {
            name: "Secure Send",
            url: "/secure-send",
            subLinks: [],
          },
          {
            name: "Internet Links",
            url: "/internet-links",
            subLinks: [],
          },
        ],
      },
      {
        name: "Contact",
        url: "/contact",
        subLinks: [],
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-YGC7Q4KTZC", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    `gatsby-plugin-sass`,
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
      },
    },
    "gatsby-plugin-netlify",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i`,
          `Rubik:300,300i,400,400i,500,500i,700,700i,900,900i`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    },
    // {
    //   resolve: 'gatsby-plugin-html-attributes',
    //   options: {
    //     lang: 'en'
    //   }
    // }
  ],
}
