import * as React from "react";
import Disqus from "disqus-react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import { IBlogPost } from "../models/IBlogPost";
import Layout from "../components/layout";
import { Pills } from "../components/pill";
import { BorderedContent } from "../components/borderedContent";

interface IProps {
    data: {
        markdownRemark: IBlogPost;
    };
}

export default ({ data }: IProps) => {
    const { frontmatter, html } = data.markdownRemark;
    const disqusShortname = "dcowen-co";
    const disqusConfig = {
        url: "https://dcowen.co" + frontmatter.path,
        identifier: frontmatter.id,
        title: frontmatter.title
    };

    const blogTitleStyle = css({
        display: "flex",
        justifyContent: "space-between"
    });

    const blogContainerStyle = css({
        img: { width: "300px", display: "flex", margin: "auto" }
    });

    return (
        <Layout>
            <BorderedContent>
                <div css={blogContainerStyle}>
                    <div css={blogTitleStyle}>
                        <h2>{frontmatter.title}</h2>
                        <Pills tags={frontmatter.tags} />
                    </div>
                    <h4>{frontmatter.date}</h4>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                    <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                </div>
            </BorderedContent>
        </Layout>
    );
};

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                tags
                id
            }
        }
    }
`;
