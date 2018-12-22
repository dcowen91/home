import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./index.css";

const TemplateWrapper = ({ children }) => (
    <div className="root">
        <Helmet
            title="dcowen"
            meta={[
                { name: "description", content: "Drew Owen homepage" },
                { name: "keywords", content: "Drew Owen homepage" }
            ]}
        />

        <div className="content">
            <div className="nav">
                <Link
                    activeStyle={{
                        color: "#e05d44"
                    }}
                    to="/"
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
            {children}
        </div>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;

export const homePageQuery = graphql`
    query ImageQuery {
        headshot: file(relativePath: { eq: "layouts/me.jpg" }) {
            childImageSharp {
                resolutions(width: 175, height: 175) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        background: imageSharp(id: { regex: "/bg2/" }) {
            sizes(maxWidth: 3000) {
                ...GatsbyImageSharpSizes
            }
        }
    }
`;
