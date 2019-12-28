import * as React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Layout from "../components/layout";
import { IBlogPost } from "../models/IBlogPost";
import { Pill, Pills } from "../components/pill";
import { css } from "@emotion/core";
import { BorderedContent } from "../components/borderedContent";

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
                <BorderedContent>
                    <div>
                        <div
                            css={css({
                                display: "flex",
                                justifyContent: "space-between"
                            })}
                        >
                            <h2>Blog</h2>
                            <Pill to={"/tags"} label="All tags" />
                        </div>
                        <div>
                            {data.allMarkdownRemark.edges
                                .filter(edge => !!edge.node.frontmatter.date)
                                .map(({ node: post }) => (
                                    <div css={css({ marginBottom: 15 })} key={post.id}>
                                        <h4 css={css({ marginBottom: 10 })}>
                                            <Link
                                                css={css({
                                                    color: "#000",
                                                    "&:hover": {
                                                        color: "#e05d44"
                                                    }
                                                })}
                                                to={post.frontmatter.path}
                                            >
                                                {post.frontmatter.title}
                                            </Link>
                                        </h4>
                                        <div css={css({ display: "flex" })}>
                                            <Pills tags={post.frontmatter.tags} />
                                            <div>{post.frontmatter.date}</div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </BorderedContent>
            </Layout>
        )}
    />
);
