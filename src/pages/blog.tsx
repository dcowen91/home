import * as React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Layout from "../components/layout";
import { IBlogPost } from "../models/IBlogPost";
import { Pill } from "../components/pill";

interface IProps {
    allMarkdownRemark: {
        edges: {
            node: IBlogPost;
        }[];
    };
}

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
        render={(data: IProps) => (
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
                                            <Pill tags={post.frontmatter.tags} />
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
