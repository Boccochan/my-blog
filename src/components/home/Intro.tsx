import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/color";
import media from "styled-media-query";
import Button from "./Button";

const Title = styled.div`
  color: ${theme.colors.white};
  font-family: "Roboto", sans-serif;

  ${media.lessThan("small")`
    width: 340px;
    font-size: 30px;
  `}

  ${media.between("small", "medium")`
    width: 100%;
    font-size: 50px;
  `}

  ${media.between("medium", "large")`
    width: 100%;
    font-size: 80px; 
  `}

  ${media.greaterThan("large")`
    width: 100%;
    font-size: 80px;
  `}
`;

const Introduction = styled.div`
  color: ${theme.colors.gray};
  font-weight: 300;
  font-family: "Roboto", sans-serif;

  ${media.lessThan("small")`
    min-width: 340px;
    font-size: 10px;
  `}

  ${media.between("small", "medium")`
    width: 100%;
    font-size: 12px;
  `}

  ${media.between("medium", "large")`
    width: 100%;
    font-size: 20px;
  `}

  ${media.greaterThan("large")`
    width: 100%;
    font-size: 30px;
  `}
`;

const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export default function Intro() {
  return (
    <div>
      <Title>
        Technology makes
        <br />
        our future better!!
      </Title>
      <Container>
        <Introduction>
          Hello there! I am Yasuhiro Ito who is a software engineer.
          <br /> I have been posting tech blogs almost everyday to solve
          <br /> our problems.
        </Introduction>
      </Container>
      <Container>
        <Button to="/blog" name="See blog" />
      </Container>
    </div>
  );
}
