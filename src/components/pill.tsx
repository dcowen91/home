import * as React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import Chip from "@material-ui/core/Chip";

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
    const CustomLink = React.useMemo(
        () =>
            React.forwardRef((linkProps, ref) => (
                <Link ref={ref as any} to={props.to} {...linkProps} />
            )),
        [props.to]
    );
    return <Chip component={CustomLink} label={props.label} />;
    // return (
    //     <Link
    //         to={props.to}
    //         css={css({
    //             color: "unset",
    //             textDecoration: "unset"
    //         })}
    //     >
    //         <Chip label={props.label} />
    //     </Link>
    // );
};
