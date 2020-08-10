import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/color";
import media from "styled-media-query";
import Button from "./Button";

const Title = styled.div`
  color: ${theme.colors.grayDark};
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
    font-size: 70px; 
  `}

  ${media.greaterThan("large")`
    width: 100%;
    font-size: 70px;
  `}
`;

const Introduction = styled.div`
  color: ${theme.colors.grayDark};
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
    font-size: 20px;
  `}
`;

const Container = styled.div`
  position: relative;
  display: flex;
  margin-top: 30px;
  margin-bottom: 60px;

  // ${media.lessThan("small")`
  //   margin-top: 10px;
  //   margin-bottom: 10px;
  // `}

  // ${media.between("small", "medium")`
  //   margin-top: 20px;
  //   margin-bottom: 20px;
  // `}

  // ${media.greaterThan("medium")`
  //   margin-top: 30px;
  //   margin-bottom: 30px;
  // `}
`;

export default function Intro() {
  return (
    <div>
      <Title>I love technology</Title>
      <Container>
        <Introduction>
          Hello there! I am Yasuhiro Ito who is a software engineer.
          <br /> I have been posting tech blogs and creating playground.
        </Introduction>
      </Container>
      <Container>
        <Button to="/blog" name="Blog" />
        <Button to="/playground" name="Playground" />
      </Container>
    </div>
  );
}
