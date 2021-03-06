import * as React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import { css } from "@emotion/core";
import "./index.css";

const linkStyle = css({
    padding: 8,
    textDecoration: "none",
    color: "#000",
    "&:hover": {
        color: "#e05d44"
    }
});

export default ({ children }: React.Props<{}>) => (
    <div css={css({ background: "hsl(150, 8%, 95%)", minHeight: "100vh" })}>
        <Helmet
            title="Drew Owen"
            meta={[
                { name: "description", content: "Drew Owen's blog and personal site" },
                { name: "keywords", content: "Drew,Owen,blog,soccer,tottenham,csgo,cs:go" }
            ]}
        />
        <div
            css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "0 auto",
                maxWidth: 900,
                padding: "20px 1.0875rem 1.45rem"
            }}
        >
            <div
                css={css({
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    float: "right",
                    paddingBottom: 15
                })}
            >
                <Link
                    css={linkStyle}
                    activeStyle={{
                        color: "#e05d44",
                        textDecoration: "underline"
                    }}
                    to="/"
                >
                    Home
                </Link>
                <Link
                    css={linkStyle}
                    getProps={({ isPartiallyCurrent }) =>
                        isPartiallyCurrent
                            ? ({ style: { color: "#e05d44", textDecoration: "underline" } } as {})
                            : {}
                    }
                    to="/blog"
                >
                    Blog
                </Link>
                <Link
                    css={linkStyle}
                    activeStyle={{
                        color: "#e05d44",
                        textDecoration: "underline"
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
