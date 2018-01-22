import React from "react";
import Link from "gatsby-link";

export default function Template({ data }) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    return (
        <div className="content">
            <div className="nav">
                <Link
                    activeStyle={{
                        color: "#e05d44"
                    }}
                    to="/#main"
                    exact={true}
                >
                    Home
                </Link>
                <Link
                    activeStyle={{
                        color: "#e05d44"
                    }}
                    to="/Blog"
                >
                    Blog
                </Link>
                <Link
                    activeStyle={{
                        color: "#e05d44"
                    }}
                    to="/Project"
                >
                    Project
                </Link>
            </div>
            <div className="blogPost">
                <h2>{frontmatter.title}</h2>
                <h4>{frontmatter.date}</h4>
                <div className="blogPostContent" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
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
