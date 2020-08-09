import * as React from "react";
import Img from "gatsby-image";
import Layout from "../components/layout";
import { graphql, StaticQuery } from "gatsby";
import { css } from "@emotion/core";
import { FaTwitterSquare, FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";
import { BorderedContent } from "../components/borderedContent";

const containerStyle = css({ flex: 1, padding: 5 });
const anchorStyle = css({
    fontSize: 30,
    paddingRight: 10,
    color: "inherit",
    "&:hover": {
        color: "#e05d44"
    }
});

export default () => (
    <StaticQuery
        query={graphql`
            query GatsbyImageQuery {
                headshot: file(relativePath: { eq: "images/me.jpg" }) {
                    childImageSharp {
                        fixed(width: 175, height: 175) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => (
            <Layout>
                <BorderedContent
                    styles={css({
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        "@media (min-width: 760px)": {
                            width: "75%",
                            margin: "auto"
                        }
                    })}
                >
                    <div css={containerStyle}>
                        <Img
                            css={css({ borderRadius: "50%" })}
                            fixed={data.headshot.childImageSharp.fixed}
                        />
                    </div>
                    <div css={containerStyle}>
                        <h2>Drew Owen</h2>
                        <p>
                            I'm a Seattle based Software Engineer.
                            <br />I work on cool things on the web.
                            <br />I write about code, sports, esports, tech, and various
                            what-have-you's.
                        </p>
                        <div css={css({ display: "flex", justifyContent: "flex-start" })}>
                            <a
                                css={anchorStyle}
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/drew-owen-47a6ba45/"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                css={anchorStyle}
                                href="https://github.com/dcowen91"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithubSquare />
                            </a>
                            <a
                                css={anchorStyle}
                                href="https://twitter.com/drewdacity"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTwitterSquare />
                            </a>
                            <a
                                css={anchorStyle}
                                href="mailto:dcowen91@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaEnvelopeSquare />
                            </a>
                        </div>
                    </div>
                </BorderedContent>
            </Layout>
        )}
    />
);

// TODO apply to all
// import { createMuiTheme } from '@material-ui/core/styles';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });
