import React from "react";
import Link from "gatsby-link";

export default function Template({ data }) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    return (
        <div className="blogPost">
            <h2>{frontmatter.title}</h2>
            <h4>{frontmatter.date}</h4>
            <div className="blogPostContent" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`;
