import * as React from "react";
import { css, SerializedStyles } from "@emotion/core";

interface IBorderedContentProps extends React.Props<{}> {
    styles?: SerializedStyles;
}

export const BorderedContent: React.FC<IBorderedContentProps> = (props: IBorderedContentProps) => {
    const borderedStyle = css(props.styles, {
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 10px",
        padding: 25,
        borderRadius: 10
    });
    return <div css={borderedStyle}>{props.children}</div>;
};
