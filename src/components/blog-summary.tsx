import React from "react";
import { BlogInfo } from "../types";
import { FadeLink } from "./link";
import styled from "styled-components";
import media from "styled-media-query";

const SytledCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 2px 2px 2px 2px;
  display: block;
  height: 200px;
  width: 100%;
  padding: 20px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fffdfd;
`;

const StyledTitle = styled.div`
  height: 90px;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fffdfd;
`;

const StyledLink = styled(FadeLink)`
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

const StyledDate = styled.div`
  color: #828282;
  font-size: 10px;
`;

const StyledDesc = styled.p`
  font-size: 12px;
  color: #828282;
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
