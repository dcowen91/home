import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Img from "gatsby-image";

import "./index.css";

const TemplateWrapper = ({ data, location, children }) => (
    <div className="root">
        <Helmet
            title="dcowen"
            meta={[
                { name: "description", content: "Drew Owen homepage" },
                { name: "keywords", content: "Drew Owen homepage" }
            ]}
        />
        {location.pathname === "/" && (
            <div className="hero">
                <Img
                    css={{ top: 0, left: 0, right: 0, zIndex: -1 }}
                    sizes={data.background.sizes}
                />
                <div className="headerContainer">
                    <h1>
                        <span className="prefix">dc</span>
                        <span>owen</span>
                    </h1>
                </div>
            </div>
        )}

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
            {location.pathname === "/" ? (
                children()
            ) : (
                <div className="borderedContent">{children()}</div>
            )}
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
