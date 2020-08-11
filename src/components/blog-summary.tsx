import React from "react";
import { BlogInfo } from "../types";
import { FadeLink } from "./link";
import styled from "styled-components";
import { theme } from "@src/styles/color";

const SytledCard = styled.div`
  border: 1px solid ${theme.colors.graySuperLight};
  border-radius: 2px 2px 2px 2px;
  display: block;
  height: 200px;
  width: 100%;
  padding: 20px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${theme.colors.whiteSuperLight};
`;

const StyledTitle = styled.div`
  height: 90px;
  border-bottom: 1px solid ${theme.colors.graySuperLight};
  background-color: ${theme.colors.whiteSuperLight};
`;

const StyledDate = styled.div`
  padding-top: 4px;
  color: ${theme.colors.gray};
  font-weight: 300;
  font-size: 10px;
`;

const StyledDesc = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: ${theme.colors.gray};
  height: 60px;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const BlogSummary = (props: BlogInfo) => {
  const { slug, title, date, description, excerpt } = props;

  return (
    <SytledCard>
      <StyledTitle>
        <FadeLink to={slug}>{title}</FadeLink>
      </StyledTitle>
      <StyledDate>{date}</StyledDate>
      <StyledDesc
        dangerouslySetInnerHTML={{
          __html: description || excerpt,
        }}
      />
    </SytledCard>
  );
};

export default BlogSummary;
