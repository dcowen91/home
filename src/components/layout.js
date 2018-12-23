import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import "./index.css";

export default ({ children }) => (
    <div className="root">
        <Helmet
            title="dcowen"
            meta={[
                { name: "description", content: "Drew Owen hombepage" },
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
                >
                    Home
                </Link>
                <Link
                    getProps={({ isPartiallyCurrent }) =>
                        isPartiallyCurrent ? { style: { color: "#e05d44" } } : null
                    }
                    to="/blog"
                >
                    Blog
                </Link>
                <Link
                    activeStyle={{
                        color: "#e05d44"
                    }}
                    to="/project"
                >
                    Project
                </Link>
            </div>
            {children}
        </div>
    </div>
);
