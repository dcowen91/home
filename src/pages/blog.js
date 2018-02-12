import React from "react";
import Link from "gatsby-link";

const BlogPage = ({ data: { allMarkdownRemark: { edges } } }) => {
    const posts = edges.filter(edge => !!edge.node.frontmatter.date).map(({ node: post }) => (
        <div className="blogPostPreview" key={post.id}>
            <h4 className="previewTitle">
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </h4>
            <h7>{post.frontmatter.date}</h7>
        </div>
    ));
    return (
        <div>
            <div className="borderedContent">
                <h2>Blog</h2>
                <div>{posts}</div>
            </div>
        </div>
    );
};

export default BlogPage;

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                    }
                }
            }
        }
    }
`;
