module.exports = {
  siteMetadata: {
    title: `Yasuhiro Lab`,
    author: `Yas Ito`,
    description: `Introducing technology, porfolio.`,
    siteUrl: `https://www.yas-ito.com/`,
    // siteUrl: `http://localhost:8000`,
    social: {
      twitter: `itoq`,
    },
    self: {
      email: "yasuhiro0312q@gmail.com",
      skillSummary: [
        { subject: "Front-end", level: 60 },
        { subject: "Back-End", level: 78 },
        { subject: "Cloud", level: 68 },
        { subject: "DB", level: 60 },
        { subject: "Network", level: 40 },
        { subject: "Security", level: 50 },
      ],
      programmingLevels: [
        {
          name: "Typescript",
          level: 70,
        },
        {
          name: "Javascript",
          level: 40,
        },
        {
          name: "Python3",
          level: 65,
        },
        {
          name: "Rust",
          level: 40,
        },
        {
          name: "HTML/CSS",
          level: 53,
        },
        {
          name: "C",
          level: 84,
        },
        {
          name: "SQL",
          level: 50,
        },
        {
          name: "Bash",
          level: 34,
        },
      ],
      others: [
        {
          title: "Framework",
          name: ["Vue", "Nuxt", "React", "Gatsby"],
        },
        {
          title: "DB",
          name: ["MariaDB", "DynamoDB", "Redis", "MySQL"],
        },
        {
          title: "DevTools",
          name: ["VScode", "Github", "Actions", "Circle CI"],
        },
        {
          title: "Environment",
          name: ["Linux", "Docker", "AWS", "Sentry"],
        },
        {
          title: "Unit Test",
          name: ["jest", "pytest"],
        },
        {
          title: "Architecture",
          name: ["Serverless", "SPA"],
        },
        {
          title: "API",
          name: ["REST", "GraphQL"],
        },
        {
          title: "Communication",
          name: ["Slack", "MS Teams"],
        },
      ],
      history: [
        {
          company: "Qualitia.co.ltd.,",
          term: "1.5 years",
          title: "Software Engineer",
          details:
            "Developing managed DNS service and new services from scratch. Researching and building automated deploying and testing systems on a cloud infrastructure.",
        },
        {
          company: "deBit.co.ltd.,",
          term: "9 months",
          title: "Software Engineer",
          details:
            "Developed a core part of a trading virtual currency system.",
        },
        {
          company: "B.U.G.co.ltd.,",
          term: "6 months",
          title: "Software Engineer",
          details: "Developed a mail monitoring system and supported customers",
        },
        {
          company: "Hagiwara Solutions.co.ltd.,",
          term: "10 years",
          title: "Software / Firmware Engineer",
          details:
            "Developed a part of SSD firmware. Builded SSD and NAND flash memory testing system.",
        },
      ],
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@static": "static",
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-code-titles`,
          {
            resolve: "gatsby-remark-code-buttons",
            options: {
              // Optional svg icon class name. Defaults to 'gatsby-code-button-icon'.
              // svgIconClass: `customSvgIconClass`,
              // // Optional svg icon. Defaults to svg string and can be
              // // replaced with any other valid svg. Use custom classes
              // // in the svg string and skip `iconClass` option.
              // svgIcon: `customSvgIcon`,
              tooltipText: `Copy to clipboard`,
              toasterText: "Copied to clipboard",
              // Optional toaster duration. Defaults to 3500.
              toasterDuration: 5000,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1500,
              withWebp: true,
              showCaptions: false,
              quality: 100,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-transition-link`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            subsets: [`latin`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
          {
            family: `Roboto`,
            variants: [`100`, `300`, `500`],
          },
        ],
      },
    },
  ],
};
