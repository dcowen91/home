const path = require("path");

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    const blogPostTemplate = path.resolve("src/templates/blogTemplate.tsx");
    const tagTemplate = path.resolve("src/templates/tagTemplate.tsx");

    return new Promise((resolve, reject) => {
        graphql(`
            {
                posts: allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] }
                    limit: 1000
                ) {
                    edges {
                        node {
                            frontmatter {
                                path
                            }
                        }
                    }
                }
                tags: allMarkdownRemark {
                    group(field: frontmatter___tags) {
                        fieldValue
                    }
                }
            }
        `).then(result => {
            if (result.errors) {
                return reject(result.errors);
            }

            result.data.posts.edges.forEach(({ node }) => {
                createPage({
                    path: node.frontmatter.path,
                    component: blogPostTemplate,
                    context: {}
                });
                resolve();
            });

            result.data.tags.group.forEach(tag => {
                createPage({
                    path: `/tags/${tag.fieldValue}/`,
                    component: tagTemplate,
                    context: { tag: tag.fieldValue }
                });
            });
        });
    });
};
