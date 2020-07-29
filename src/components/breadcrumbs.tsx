import React from "react";
import path from "path";
import { Link } from "gatsby";
import styled from "styled-components";

type Props = {
  currentPath: string[];
};

const BreadcrumbsBox = styled.div`
  position: relative;
  display: flex;
  background-color: #f9f9f9;
`;

const StyledLink = styled(Link)`
  box-shadow: none;
  color: #fafafa;
`;

const Box = styled.div`
  position: relative;
  text-align: center;
  height: 38px;
  padding: 10px 30px;
  background-color: ${(props: { selected: boolean }) =>
    props.selected ? "#2f80ed" : "#4F4F4F"};

  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: calc(38px);
    height: calc(38px);
    top: 0;
    right: calc(38px / 2 * -1);
    background-color: ${(props: { selected: boolean }) =>
      props.selected ? "#2f80ed" : "#4F4F4F"};
    border-top-right-radius: 5px;
    transform: scale(0.707) rotate(45deg);
    box-shadow: 1px -1px rgba(0, 0, 0, 0.25);
    z-index: 100;
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
        console.log(1111, linkPath);
        return (
          <Box selected={index + 1 === length}>
            <StyledLink to={linkPath}>{page}</StyledLink>
          </Box>
        );
      })}
    </BreadcrumbsBox>
  );
};
