import React from "react";
import Img from "gatsby-image";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { FaTwitterSquare, FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";

const IndexPage = ({ data }) => (
    <Layout>
        <div id="main" className="bio borderedContent">
            <div className="imageContainer">
                <Img className="image" resolutions={data.headshot.childImageSharp.resolutions} />
            </div>
            <div className="bodyContainer">
                <h2>Drew Owen</h2>
                <p>
                    I'm a Seattle based Software Engineer.
                    <br />I work on cool things on the web.
                    <br />I write about code, sports, esports, tech, and various what-have-you's.
                </p>
                <div className="social">
                    <a
                        className="iconContainer"
                        href="https://www.linkedin.com/in/drew-owen-47a6ba45/"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/dcowen91"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="iconContainer"
                    >
                        <FaGithubSquare />
                    </a>
                    <a
                        href="https://twitter.com/drewdacity"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="iconContainer"
                    >
                        <FaTwitterSquare />
                    </a>
                    <a
                        href="mailto:dcowen91@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="iconContainer"
                    >
                        <FaEnvelopeSquare />
                    </a>
                </div>
            </div>
        </div>
    </Layout>
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
