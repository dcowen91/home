import React from "react";
import Link from "gatsby-link";

const ProjectPage = () => (
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
            <h2>Project</h2>
            <p>Here are a few things I've worked on.</p>
            <div>
                <div className="project">
                    <a href="https://github.com/dcowen91/bolamesa" target="_blank">
                        BolaMesa
                    </a>
                    <p>
                        A command line tool to fetch soccer results for differrent leagues and
                        seasons.
                    </p>
                </div>
                <hr />
                <div className="project">
                    <a href="https://github.com/dcowen91/better-fpl" target="_blank">
                        Better Fpl
                    </a>
                    <p>
                        A chrome extension for Quality of Life improvements to the official Fantasy
                        Premier League website. I contributed to this project; it is no longer open
                        source.
                    </p>
                </div>
                <hr />
                <div className="project">
                    <a href="https://github.com/dcowen91/pubg-slack" target="_blank">
                        Pubg-Slack
                    </a>
                    <p>A slackbot for querying PLAYERUNKNOWN"S BATTLEGROUNDS stats.</p>
                </div>
                <hr />
                <div className="project">
                    <a href="https://github.com/dcowen91/wcbrag" target="_blank">
                        WCBrag
                    </a>
                    <p>An interactive stats website for goalscorers at the 2014 World Cup. </p>
                </div>
                <hr />
                <span>
                    For more, check out my
                    <a className="link" href="https://github.com/dcowen91" target="_blank">
                        GitHub
                    </a>
                </span>
            </div>
        </div>
    </div>
);

export default ProjectPage;
