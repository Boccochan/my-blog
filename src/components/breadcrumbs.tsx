import React from "react";
import path from "path";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import media from "styled-media-query";

type Props = {
  currentPath: string[];
};

const BreadcrumbsBox = styled.div`
  position: relative;
  display: flex;
  background-color: #f9f9f9;
  padding-top: 20px;
  padding-bottom: 20px;
  max-width: 950px;
  margin-right: auto;
  margin-left: auto;
`;

const StyledLink = styled(Link)`
  box-shadow: none;
  color: #2f80ed;
`;

const Current = styled.div`
  box-shadow: none;
  color: #333;
`;

const Box = styled.div`
  position: relative;
  text-align: center;
  height: 20px;
  padding: 0px 30px;
  ${(props: { index: number }) =>
    props.index === 0
      ? css`
          padding: 0;
          padding-left: 0;
          padding-right: 30px;
        `
      : css`
          padding: 0px 30px;
        `}

  ${media.lessThan("medium")`
    padding: 0px 30px;
    font-size: 12px;
    height: 16px;
  `}

  background-color: #f9f9f9;
  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: calc(20px);
    height: calc(20px);
    top: 0;
    right: calc(20px / 2 * -1);
    background-color: #f9f9f9;
    border-top-right-radius: 5px;
    transform: scale(0.707) rotate(45deg);
    box-shadow: 1px -1px rgba(0, 0, 0, 0.25);
    z-index: 100;

    ${media.lessThan("medium")`
      width: calc(16px);
      height: calc(16px);
      right: calc(16px / 2 * -1);
  `}
  }
`;

export const Breadcrumbs = (props: Props) => {
  let linkPath = "/";
  const length = props.currentPath.length;

  return (
    <BreadcrumbsBox>
      {props.currentPath.map((page, index) => {
        if (page !== "home") {
          linkPath = path.join(linkPath, page);
        }

        return (
          <Box index={index}>
            {index + 1 === length ? (
              <Current>{page}</Current>
            ) : (
              <StyledLink to={linkPath}>{page}</StyledLink>
            )}
          </Box>
        );
      })}
    </BreadcrumbsBox>
  );
};
