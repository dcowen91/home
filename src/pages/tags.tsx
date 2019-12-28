import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { css } from "@emotion/core";
import { BorderedContent } from "../components/borderedContent";

interface ITagProps {
    data: {
        allMarkdownRemark: { group: { fieldValue: string; totalCount: number }[] };
        site: {
            siteMetadata: { title: string };
        };
    };
}

export default ({ data }: ITagProps) => (
    <Layout>
        <BorderedContent>
            <div>
                <h2>Tags</h2>
                <div>
                    <ul>
                        {data.allMarkdownRemark.group.map(tag => (
                            <li key={tag.fieldValue}>
                                <Link
                                    to={`/tags/${tag.fieldValue}/`}
                                    css={css({
                                        color: "#000",
                                        textDecoration: "unset",
                                        "&:hover": {
                                            color: "#e05d44"
                                        }
                                    })}
                                >
                                    {tag.fieldValue} ({tag.totalCount})
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </BorderedContent>
    </Layout>
);

export const pageQuery = graphql`
    query {
        allMarkdownRemark {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`;
