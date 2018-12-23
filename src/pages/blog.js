import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Layout from "../components/layout";

export default () => (
    <StaticQuery
        query={graphql`
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
                                tags
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <Layout>
                <div className="borderedContent">
                    <div>
                        <h2>Blog</h2>
                        <div>
                            {data.allMarkdownRemark.edges
                                .filter(edge => !!edge.node.frontmatter.date)
                                .map(({ node: post }) => (
                                    <div className="blogPostPreview" key={post.id}>
                                        <h4 className="previewTitle">
                                            <Link to={post.frontmatter.path}>
                                                {post.frontmatter.title}
                                            </Link>
                                        </h4>
                                        <div className="details">
                                            <div className="pill">{post.frontmatter.tags}</div>
                                            <div>{post.frontmatter.date}</div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </Layout>
        )}
    />
);
