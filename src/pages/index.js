import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import {
    FaTwitterSquare,
    FaGithubSquare,
    FaLinkedinSquare,
    FaEnvelopeSquare,
    FaAdjust
} from "react-icons/lib/fa";

const IndexPage = ({ data }) => (
    <div>
        <div className="hero">
            <Img css={{ top: 0, left: 0, right: 0, zIndex: -1 }} sizes={data.background.sizes} />
            <div className="headerContainer">
                <h1>
                    <span className="prefix">dc</span>
                    <span>owen</span>
                </h1>
            </div>
        </div>
        <div className="content">
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/Project">Project</Link>
            </div>
            <div id="main" className="bio">
                <div className="imageContainer">
                    <Img
                        className="image"
                        resolutions={data.headshot.childImageSharp.resolutions}
                    />
                </div>
                <div className="bodyContainer">
                    <h2 className="name">Drew Owen</h2>
                    <p>
                        I'm a Seattle based Software Engineer.
                        <br />
                        I work on cool things on the web.
                        <br />
                        I write about code, sports, esports, tech, and various what-have-you's.
                    </p>
                    <div className="social">
                        <a
                            className="iconContainer"
                            href="https://www.linkedin.com/in/drew-owen-47a6ba45/"
                        >
                            <FaLinkedinSquare />
                        </a>
                        <a
                            href="https://github.com/dcowen91"
                            target="_blank"
                            className="iconContainer"
                        >
                            <FaGithubSquare />
                        </a>
                        <a
                            href="https://twitter.com/drewdacity"
                            target="_blank"
                            className="iconContainer"
                        >
                            <FaTwitterSquare />
                        </a>
                        <a
                            href="mailto:dcowen91@gmail.com"
                            target="_blank"
                            className="iconContainer"
                        >
                            <FaEnvelopeSquare />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default IndexPage;

export const query = graphql`
    query GatsbyImageQuery {
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
