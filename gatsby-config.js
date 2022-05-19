/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Portfolio",
    description:
      "A curriculum vitae for Martin Dwyer, Founder and CEO of MD Web Technologies",
    titleTemplate: `%s | Portfolio`,
    url: `https://mdbytes.us`,
    twitterUsername: `@mdbytes`,
    image: `/main-image.png`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/assets/images/favicon_io/android-chrome-256x256.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-W905VBE0HS"],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
}
