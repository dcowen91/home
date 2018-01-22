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
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-netlify`
    ]
};
