import React from "react";
import ReactDisqusComments from "react-disqus-comments";

export default function Template({ data }) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    return (
        <div className="blogPost">
            <div className="blogTitleContainer">
                <h2>{frontmatter.title}</h2>
                <div className="pill">{frontmatter.tags}</div>
            </div>
            <h4>{frontmatter.date}</h4>
            <div className="blogPostContent" dangerouslySetInnerHTML={{ __html: html }} />
            <ReactDisqusComments
                shortname={"dcowen-co"}
                identifier={frontmatter.id}
                title={frontmatter.title}
                url={"https://dcowen.co" + frontmatter.path}
                category_id={frontmatter.tags[0]}
            />
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
                tags
                id
            }
        }
    }
`;
