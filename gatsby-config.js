module.exports = {
    siteMetadata: {
        title: `Drew Owen`
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-115643400-1",
                head: false
            }
        },
        {
            resolve: "gatsby-plugin-no-sourcemaps"
        },
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true,
                allExtensions: true
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-netlify`
    ]
};
