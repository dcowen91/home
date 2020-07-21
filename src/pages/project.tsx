import * as React from "react";
import { css } from "@emotion/core";
import Layout from "../components/layout";
import { BorderedContent } from "../components/borderedContent";

interface IProject {
    link: string;
    title: string;
    description: string;
}

const projects: IProject[] = [
    {
        link: "https://minitables.now.sh",
        title: "Minitables",
        description:
            "A simple web app that lets you build a custom mini league table for the Premier League. Built in React using the wikipedia API."
    },
    {
        link: "https://dont-sleep-92c89.web.app",
        title: "Don't sleep",
        description:
            "A web app to help power up your fantasy football season! A react project that uses firebase functions, firestore, and hosting. Pulls in aggregated player ranking data, then merges it with sleeper league settings and roster info to display the best available players in your league."
    },
    {
        link: "https://dcowen91.github.io/nearme",
        title: "Nearme",
        description:
            "A webapp that displays wikipedia articles near you. I made this after being wanting to learn more about local landmarks while on a roadtrip! This makes it easy to find articles nearby. Made with React, combines the wikipedia API and browser geolocation API."
    },
    {
        link: "https://github.com/dcowen91/essentials",
        title: "Essentials",
        description:
            "A project template for web apps. This is my personalised opinionated starter kit that makes it super easy for me to create a new web app without having to spend time configuring over and over again."
    },
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

const linkStyle = css({
    textDecoration: "underline",
    color: "#000",
    "&:hover": {
        color: "#e05d44"
    }
});

const ProjectPage = () => (
    <Layout>
        <BorderedContent>
            <h2>Project</h2>
            <p>Here are a few things I've worked on.</p>
            <div>
                {projects.map(projectBox)}
                <span>
                    For more, check out my
                    <a
                        css={css(linkStyle, { paddingLeft: 8 })}
                        href="https://github.com/dcowen91"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </span>
            </div>
        </BorderedContent>
    </Layout>
);

const projectBox = ({ link, title, description }: IProject) => {
    return (
        <div key={link}>
            <div>
                <a css={linkStyle} href={link} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
                <p>{description}</p>
            </div>
            <hr />
        </div>
    );
};

export default ProjectPage;
