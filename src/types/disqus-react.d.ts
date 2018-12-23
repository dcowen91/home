import * as React from "react";

interface EmbedProps {
    shortname: string;
    config: {
        url: string;
        identifier: string;
        title: string;
    };
}

export default _default;
export namespace _default {
    class DiscussionEmbed extends React.Component<EmbedProps> {}
}
