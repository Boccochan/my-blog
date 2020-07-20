import { Link } from "gatsby";
// tslint:disable-next-line:no-submodule-imports
// import AniLink from "gatsby-plugin-transition-link/AniLink";
import * as React from "react";
import { ComponentProps } from "react";
import styled from "styled-components";
import media from "styled-media-query";

const FADE_TIME = 0.5;

type Props = Partial<ComponentProps<typeof Link>>;

const StyledLink = styled(Link)`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  color: #121212;
  font-weight: bold;
  box-shadow: none;

  ${media.lessThan("small")`
    font-size: 14px;
    height: 160px;
    width: 300px;
  `}
`;

export const FadeLink = (props: Props) => {
  const { children, ...linkProps } = props;
  console.log(linkProps);
  console.log(children);

  return (
    // <AniLink fade={true} duration={FADE_TIME} {...linkProps}>
    <StyledLink to={linkProps.to!}>{children}</StyledLink>
    // <div>{children}</div>
    // </AniLink>
  );
};
