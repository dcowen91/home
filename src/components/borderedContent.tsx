import * as React from "react";
import { css } from "@emotion/core";

export const BorderedContent: React.FC<React.Props<{}>> = (props: React.Props<{}>) => {
    const borderedStyle = css({
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 10px",
        padding: 25,
        borderRadius: 10
    });
    return <div css={borderedStyle}>{props.children}</div>;
};
