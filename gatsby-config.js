/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
import { siteConfig } from './site-config';

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
        isHidden: false,
        subLinks: [],
      },
      {
        name: "About",
        url: "/about",
        isHidden: false,
        subLinks: [
          {
            name: "Our Values",
            url: "/our-values",
            isHidden: false,
            subLinks: [],
          },
          {
            name: "client Reviews",
            url: "/client-reviews",
            isHidden: false,
            subLinks: [],
          },
          {
            name: "Employment Opportunities",
            url: "/employment-opportunities",
            isHidden: false,
            subLinks: [],
          },
          {
            name: "Blog",
            url: "/blog",
            isHidden: false,
            subLinks: [],
          },
        ],
      },
      {
        name: "Services",
        url: "/services",
        isHidden: false,
        subLinks: [
          {
            name: "Services For Inividuals",
            url: "/services-for-individuals",
            isHidden: false,
            subLinks: [
              {
                name: "Personal Financial Planning",
                url: "/personal-financial-planning",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Retirement Planning",
                url: "/retirement-planning",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Estate Planning",
                url: "/estate-planning",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Elder Care",
                url: "/elder-care",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Wealth Management",
                url: "/wealth-management",
                isHidden: false,
                subLinks: [],
              },
            ],
          },
          {
            name: "Business Services",
            url: "/business-services",
            isHidden: false,
            subLinks: [
              {
                name: "Small Business Accounting",
                url: "/small-business-accounting",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Book Keeping Services",
                url: "/book-keeping-services",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Payroll",
                url: "/payroll",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Part-Time CFO Services",
                url: "/part-time-cfo-services",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Audits-Reviews-Compilations",
                url: "/audits-reviews-compilations",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Forensic Accounting",
                url: "/forensic-accounting",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Cash Flow Management",
                url: "/cash-flow-management",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Bank Financing",
                url: "/bank-financing",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Business Valuation",
                url: "/business-valuation",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Business Advisory Services",
                url: "/business-advisory-services",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Financial Planning for Businesses",
                url: "/financial-planning-for-businesses",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Succession Planning",
                url: "/succession-planning",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "New Business Formation",
                url: "/new-business-formation",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Non-Profit Organizations",
                url: "/non-profit-organizations",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Internal Controls",
                url: "/internal-controls",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Litigation Support",
                url: "/litigation-support",
                isHidden: false,
                subLinks: [],
              },
            ],
          },
          {
            name: "Tax Services",
            url: "/tax-services",
            isHidden: false,
            subLinks: [
              {
                name: "Individual Tax Preparation",
                url: "/individual-tax-preparation",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Tax Preparation For Business",
                url: "/tax-preparation-for-business",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Tax Planning",
                url: "/tax-planning",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Estate & Trust Tax Services",
                url: "/estate-trust-tax-services",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Tax Relief",
                url: "/tax-relief",
                isHidden: false,
                subLinks: [
                  {
                    name: "IRS Audit Representation",
                    url: "/irs-audit-representation",
                    isHidden: false,
                    subLinks: [],
                  },
                  {
                    name: "Non-Filed Tax Returns",
                    url: "/non-filed-tax-returns",
                    isHidden: false,
                    subLinks: [],
                  },
                  {
                    name: "Back Taxes Owed",
                    url: "/back-taxes-owed",
                    isHidden: false,
                    subLinks: [],
                  },
                  {
                    name: "Payroll Tax Problems",
                    url: "/payroll-tax-problems",
                    isHidden: false,
                    subLinks: [],
                  },
                  {
                    name: "IRS Liens",
                    url: "/irs-liens",
                    isHidden: false,
                    subLinks: [],
                  },
                  {
                    name: "IRS Levies",
                    url: "/irs-levies",
                    isHidden: false,
                    subLinks: [],
                  },
                  {
                    name: "IRS Wage Garnishment",
                    url: "/irs-wage-garnishment",
                    isHidden: false,
                    subLinks: [],
                  },
                  {
                    name: "IRS Seizures",
                    url: "/irs-seizures",
                    isHidden: false,
                    subLinks: [],
                  },
                  {
                    name: "IRS Payment Plan",
                    url: "/irs-payment-plan",
                    isHidden: false,
                    subLinks: [],
                  },
                  {
                    name: "Offer In Compromise",
                    url: "/offer-in-compromise",
                    isHidden: false,
                    subLinks: [],
                  },
                  {
                    name: "Bankruptcy",
                    url: "/bankruptcy",
                    isHidden: false,
                    subLinks: [],
                  },
                  {
                    name: "Innocent Spouse Relief",
                    url: "/innocent-spouse-relief",
                    isHidden: false,
                    subLinks: [],
                  },
                  {
                    name: "Get Your IRS File",
                    url: "/get-your-irs-file",
                    isHidden: false,
                    subLinks: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Services For QuickBooks",
            url: "/services-for-quick-books",
            isHidden: false,
            subLinks: [
              {
                name: "Why QuickBooks",
                url: "/why-quick-books",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Setup for QuickBooks",
                url: "/setup-quick-books",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Training For QuickBooks",
                url: "/training-quick-books",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Answers To QuickBooks",
                url: "/answers-to-quick-books",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Tune-up For QuickBooks",
                url: "/tune-up-quick-books",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Tips For QuickBooks Users",
                url: "/tips-quick-books",
                isHidden: false,
                subLinks: [],
              },
            ],
          },
          {
            name: "Industries",
            url: "/industries",
            isHidden: false,
            subLinks: [
              {
                name: "Construction",
                url: "/construction",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Dentists",
                url: "/dentists",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Healthcare",
                url: "/healthcare",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Hospitality",
                url: "/hospitality",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Law Firms",
                url: "/law-firms",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Manufacturers",
                url: "/manufacturers",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Real Estate",
                url: "/real-estate",
                isHidden: false,
                subLinks: [],
              },
            ],
          },
        ],
      },
      {
        name: "Tax Center",
        url: "/tax-center",
        isHidden: false,
        subLinks: [
          {
            name: "Track Your Refund",
            url: "/track-your-refund",
            isHidden: false,
            subLinks: [],
          },
          {
            name: "Tax Due Dates",
            url: "/tax-due-dates",
            isHidden: false,
            subLinks: [],
          },
          {
            name: "Tax Rates",
            url: "/tax-rates",
            isHidden: false,
            subLinks: [],
          },
          {
            name: "IRS Tax Forms and Publications",
            url: "/irs-tax-forms-publications",
            isHidden: false,
            subLinks: [],
          },
          {
            name: "Record Retention Guide",
            url: "/record-retention-guide",
            isHidden: false,
            subLinks: [],
          },
          {
            name: "State Tax Forms",
            url: "/state-tax-forms",
            isHidden: false,
            subLinks: [],
          },
        ],
      },
      {
        name: "Resources",
        url: "/resources",
        isHidden: false,
        subLinks: [
          {
            name: "Newsletter",
            url: "/newsletter",
            isHidden: siteConfig.newsletterFeatureToggle,
            subLinks: [
              {
                name: "This Months Newsletter",
                url: "/newsletter",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Previous Newsletter",
                url: "/previous-newsletter",
                isHidden: false,
                subLinks: [],
              },
            ],
          },
          {
            name: "Guides",
            url: "/guides",
            isHidden: false,
            subLinks: [
              {
                name: "Life Events",
                url: "/life-events",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Business Strategies",
                url: "/business-strategies",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Investment Strategies",
                url: "/investment-strategies",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Tax Strategies for Business Owners",
                url: "/tax-strategies-business-owners",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Tax Strategies for Individuals",
                url: "/tax-strategies-individuals",
                isHidden: false,
                subLinks: [],
              },
              {
                name: "Frequently Asked Questions",
                url: "/frequently-asked-questions",
                isHidden: false,
                subLinks: [],
              },
            ],
          },
          {
            name: "Financial Calculators",
            url: "/financial-calculators",
            isHidden: false,
            subLinks: [],
          },
          {
            name: "Client Portal",
            url: "/client-portal",
            isHidden: false,
            subLinks: [],
          },
          {
            name: "Secure Send",
            url: "/secure-send",
            isHidden: false,
            subLinks: [],
          },
          {
            name: "Internet Links",
            url: "/internet-links",
            isHidden: false,
            subLinks: [],
          },
        ],
      },
      {
        name: "Contact",
        url: "/contact",
        isHidden: false,
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
    // },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "cpaaws",
        protocol: "https",
        hostname: "www.example.com",
    },
    },
  ],
}
