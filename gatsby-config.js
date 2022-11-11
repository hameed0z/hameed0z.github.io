module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Hameed`,
    description: `Hameed's Personal Website and Blog`,
    author: `@hameed0z`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [{
    //       resolve: `gatsby-remark-vscode`,
    //       // All options are optional. Defaults shown here.
    //       options: {
    //         colorTheme: {
    //           prefersDarkTheme: 'Monokai Dimmed', // Optional: used with `prefers-color-scheme: dark`
    //         },
    //         injectStyles: true,    // Injects (minimal) additional CSS for layout and scrolling
    //         extensions: [],        // Extensions to download from the marketplace to provide more languages and themes
    //         languageAliases: {},   // Map of custom/unknown language codes to standard/known language codes

    //       }
    //     }]
    //   }
    // },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            // All options are optional. Defaults shown here.
            options: {
              colorTheme: 'Light+ (default light)', // Read on for list of included themes. Also accepts object and function forms.
              wrapperClassName: '',  // Additional class put on 'pre' tag
              injectStyles: true,    // Injects (minimal) additional CSS for layout and scrolling
              extensions: [],        // Extensions to download from the marketplace to provide more languages and themes
              languageAliases: {},   // Map of custom/unknown language codes to standard/known language codes
              replaceColor: x => x,  // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
              getLineClassName: ({   // Function allowing dynamic setting of additional class names on individual lines
                content,             //   - the string content of the line
                index,               //   - the zero-based index of the line within the code fence
                language,            //   - the language specified for the code fence
                codeFenceOptions     //   - any options set on the code fence alongside the language (more on this later)
              }) => ''
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hameed`,
        short_name: `hameed`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/hey.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-antd`,
    `gatsby-plugin-catch-links`,
  ],
}
