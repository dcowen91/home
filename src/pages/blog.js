import React from "react";
import Link from "gatsby-link";

const BlogPage = () => (
    <div>
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
            <h2>Blog</h2>
            <p>I have blog posts, I promise, I just haven't written them here yet :).</p>
        </div>
    </div>
);

export default BlogPage;
