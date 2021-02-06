import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { BorderedContent } from "../components/borderedContent";
import { css } from "@emotion/core";
import { Pill } from "../components/pill";

interface IProps {
    data: {
        allMarkdownRemark: {
            totalCount: number;
            edges: {
                node: {
                    frontmatter: {
                        title: string;
                        path: string;
                        date: string;
                    };
                };
            }[];
        };
    };
    pageContext: {
        tag: string;
    };
}

export default ({ data, pageContext }: IProps) => {
    return (
        <Layout>
            <BorderedContent>
                <div
                    css={css({
                        display: "flex",
                        justifyContent: "space-between"
                    })}
                >
                    <h2>
                        {data.allMarkdownRemark.totalCount} posts with {pageContext.tag} tag
                    </h2>
                    <Pill to={"/tags"} label="All tags" />
                </div>
                {data.allMarkdownRemark.edges.map(({ node }, index) => {
                    return (
                        <div css={css({ marginBottom: 15 })} key={index}>
                            <h4 css={css({ marginBottom: 2 })}>
                                <Link
                                    to={node.frontmatter.path}
                                    css={css({
                                        color: "#000",
                                        "&:hover": {
                                            color: "#e05d44"
                                        }
                                    })}
                                >
                                    {node.frontmatter.title}
                                </Link>
                            </h4>
                            <div>{node.frontmatter.date}</div>
                        </div>
                    );
                })}
            </BorderedContent>
        </Layout>
    );
};

export const pageQuery = graphql`
    query blogPostByTag($tag: String) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    frontmatter {
                        title
                        path
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    }
`;
