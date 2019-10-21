module.exports = {
  siteMetadata: {
    title: `Is Dan Quinn fired yet?`,
    description: `Your official home of Dan Quinn's employment status.`,
    siteUrl: `https://isdanquinnfiredyet.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/site-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
          google: {
            families: ['Poppins:500,700']
          }
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-142404881-2",
      },
    },
    {
        resolve: "gatsby-source-custom-api",
        options: {
            url: "https://newsapi.org/v2/everything?q=dan+quinn&from=2019-09-21&sortBy=publishedAt&apiKey=baf11e36fc3949328b335beb5e088129",
            rootKey: "articles",
            imageKeys: ["urlToImage"],
            schemas: {
                articles: `
                    source: source
                    author: String
                    title: String
                    description: String
                    url: String
                    urlToImage: String
                    publishedAt: String
                    content: String
                `,
                source: `
                    id: String
                    name: String
                `
            }
        }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
