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
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-netlify`
    ]
};
