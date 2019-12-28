import * as React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

interface IPillsProps {
    tags: string[];
}

interface IPillProps {
    to: string;
    label: string;
}

export const Pills = (props: IPillsProps) => {
    return (
        <>
            {props.tags.map((tag, index) => (
                <Pill to={`/tags/${tag}/`} label={tag} key={index} />
            ))}
        </>
    );
};

export const Pill: React.FC<IPillProps> = (props: IPillProps) => {
    const pillStyle = css({
        height: 30,
        border: "2px solid hsl(150, 8%, 95%)",
        backgroundColor: "hsl(150, 8%, 95%)",
        borderRadius: 100,
        marginRight: 10,
        padding: "0 8px"
    });

    return (
        <Link to={props.to} css={css({ color: "unset", textDecoration: "unset" })}>
            <div css={pillStyle}>{props.label}</div>
        </Link>
    );
};
