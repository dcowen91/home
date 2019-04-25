import * as React from "react";
import { css } from "@emotion/core";

interface IPillProps {
    tags: string[];
}

export const Pill: React.FC<IPillProps> = (props: IPillProps) => {
    const pillStyle = css({
        height: 30,
        border: "2px solid hsl(150, 8%, 95%)",
        backgroundColor: "hsl(150, 8%, 95%)",
        borderRadius: 100,
        marginRight: 10,
        padding: "0 8px"
    });

    return <div css={pillStyle}>{props.tags}</div>;
};
