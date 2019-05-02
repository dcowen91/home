import * as React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import { css } from "@emotion/core";
import "./index.css";

export default ({ children }: React.Props<{}>) => (
    <div css={css({ background: "hsl(150, 8%, 95%)", minHeight: "100vh" })}>
        <Helmet
            title="dcowen"
            meta={[
                { name: "description", content: "Drew Owen hombepage" },
                { name: "keywords", content: "Drew Owen homepage" }
            ]}
        />
        <div
            css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "0 auto",
                maxWidth: 960,
                padding: "20px 1.0875rem 1.45rem"
            }}
        >
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
                        isPartiallyCurrent ? ({ style: { color: "#e05d44" } } as {}) : {}
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
