import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { BorderedContent } from "../components/borderedContent";
import { Pill } from "../components/pill";

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
                                <Pill
                                    to={`/tags/${tag.fieldValue}/`}
                                    label={`${tag.fieldValue} (${tag.totalCount} posts)`}
                                />
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
