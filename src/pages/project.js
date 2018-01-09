import React from "react";

const NotFoundPage = () => (
    <div>
        <div className="content">
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/Project">Project</Link>
            </div>
            <h1>PROJECT</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
    </div>
);

export default NotFoundPage;
