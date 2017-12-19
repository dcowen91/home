import React from "react";
import Link from "gatsby-link";
import {FaTwitterSquare, FaGithubSquare, FaLinkedinSquare, FaEnvelopeSquare, FaAdjust
} from "react-icons/lib/fa";


const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="headerContainer">
        <h1>
          <span className="prefix">
            dc
          </span>
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
      <div className="imageContainer"> <FaAdjust /> </div>
      <h2 className="name">Drew Owen</h2>
      <p>
      I'm a Seattle based Software Engineer.
      <br />
      I work on cool things on the web.
      <br />
      I write about code, sports, esports, tech, and various what-have-you's.</p>
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
);

export default IndexPage;
