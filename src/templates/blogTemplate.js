import React from "react";
import Disqus from "disqus-react";
import { StaticQuery, graphql } from "gatsby";

export default () => (
    <StaticQuery
        query={graphql`
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
        `}
        render={data => {
            const { frontmatter, html } = data.markdownRemark;
            const disqusShortname = "dcowen-co";
            const disqusConfig = {
                url: "https://dcowen.co" + frontmatter.path,
                identifier: frontmatter.id,
                title: frontmatter.title
            };

            return (
                <div className="blogPost">
                    <div className="blogTitleContainer">
                        <h2>{frontmatter.title}</h2>
                        <div className="pill">{frontmatter.tags}</div>
                    </div>
                    <h4>{frontmatter.date}</h4>
                    <div className="blogPostContent" dangerouslySetInnerHTML={{ __html: html }} />
                    <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                </div>
            );
        }}
    />
);
