import React from "react";
import Layout from "../components/layout";

const projects = [
    {
        link: "https://github.com/dcowen91/palette-search",
        title: "Palette-search",
        description:
            "An npm package to help find a similar color in your app's theme. Given an input color and a json theme file of colors, it will find the most similar color in the theme."
    },
    {
        link: "https://github.com/dcowen91/bolamesa",
        title: "BolaMesa",
        description:
            "A command line tool to fetch soccer results for different leagues and seasons."
    },
    {
        link: "https://github.com/dcowen91/better-fpl",
        title: "Better Fpl",
        description:
            "A chrome extension that makes various quality of life improvements to the official Fantasy Premier League website. I contributed to this project, but it is no longer open source."
    },
    {
        link: "https://github.com/dcowen91/pubg-slack",
        title: "Pubg-Slack",
        description: "A slackbot for querying PLAYERUNKNOWN'S BATTLEGROUNDS stats."
    },
    {
        link: "https://github.com/dcowen91/wcbrag",
        title: "WCBrag",
        description: "An interactive stats web app for goalscorers at the 2014 World Cup."
    }
];

const ProjectPage = () => (
    <Layout>
        <div className="borderedContent">
            <h2>Project</h2>
            <p>Here are a few things I've worked on.</p>
            <div>
                {projects.map(projectBox)}
                <span className="project">
                    For more, check out my
                    <a
                        className="link"
                        href="https://github.com/dcowen91"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </span>
            </div>
        </div>
    </Layout>
);

const projectBox = ({ link, title, description }) => {
    return (
        <div key={link}>
            <div className="project">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
                <p>{description}</p>
            </div>
            <hr />
        </div>
    );
};

export default ProjectPage;
