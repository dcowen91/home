import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { BorderedContent } from "../components/borderedContent";
import { css } from "@emotion/core";

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
                <h2>
                    {data.allMarkdownRemark.totalCount} posts with {pageContext.tag} tag
                </h2>
                {data.allMarkdownRemark.edges.map(({ node }, index) => {
                    return (
                        <div key={index}>
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
