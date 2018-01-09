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
            <h1>BLOG</h1>
            <p>I have blog posts, I promise, I just haven't written them here yet :).</p>
        </div>
    </div>
);

export default NotFoundPage;
