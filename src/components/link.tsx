import { Link } from "gatsby";
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
  console.log(children);

  const path = `/blog${linkProps.to!}`;

  return (
    <StyledLink to={path}>{children}</StyledLink>
  );
};
