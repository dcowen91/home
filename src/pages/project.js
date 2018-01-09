import React from "react";
import Link from "gatsby-link";

const NotFoundPage = () => (
    <div>
        <div className="content">
            <div className="nav">
                <Link to="/#main">Home</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/Project">Project</Link>
            </div>
            <h1>PROJECT</h1>
            <p>I have projects, I promise, I just haven't written about them here yet :).</p>
        </div>
    </div>
);

export default NotFoundPage;
