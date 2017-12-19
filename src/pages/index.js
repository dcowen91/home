import React from "react";
import Link from "gatsby-link";
import {FaTwitterSquare, FaGithubSquare, FaLinkedinSquare, FaEnvelopeSquare} from "react-icons/lib/fa";


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
    <h2>Drew Owen</h2>
    <p>coding</p>
    <p>sports</p>
    <p>esports</p>
    <p>etc</p>
    <div className="social">
        <FaLinkedinSquare />
        <FaGithubSquare />
        <FaTwitterSquare />
        <FaEnvelopeSquare />
    </div>
    </div>
  </div>
);

export default IndexPage;
