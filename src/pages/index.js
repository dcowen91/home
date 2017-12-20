import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import {
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedinSquare,
  FaEnvelopeSquare,
  FaAdjust,
} from "react-icons/lib/fa"

const IndexPage = ({ data }) => (
  <div>
    <div className="hero">
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
        <Link to="/">Blog</Link>
        <Link to="/">Project</Link>
      </div>
      <div className="bio">
        <div className="imageContainer">
          <Img
            className="image"
            resolutions={data.file.childImageSharp.resolutions}
          />
        </div>
        <h2 className="name">Drew Owen</h2>
        <p>
          I'm a Seattle based Software Engineer.
          <br />
          I work on cool things on the web.
          <br />
          I write about code, sports, esports, tech, and various
          what-have-you's.
        </p>
        <div className="social">
          <span className="iconContainer">
            <FaLinkedinSquare />
          </span>
          <span className="iconContainer">
            <FaGithubSquare />
          </span>
          <span className="iconContainer">
            <FaTwitterSquare />
          </span>
          <span className="iconContainer">
            <FaEnvelopeSquare />
          </span>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage

export const query = graphql`
  query GatsbyImageQuery {
    file(relativePath: { eq: "layouts/me.jpg" }) {
      childImageSharp {
        resolutions(width: 175, height: 175) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`
