import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/color";
import Button from "./IntroNavButton";
import { myMedia, mediaType } from "../../styles/custom-media";

const Box = styled.div`
  ${myMedia.lessThan("iphone5")`
    width: ${mediaType.iphone5};
  `}
`;

const Title = styled.div`
  color: ${theme.colors.grayDark};
  font-family: "Roboto", sans-serif;

  ${myMedia.lessThan("iphone5")`
    font-size: 30px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    font-size: 36px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    font-size: 40px;
  `}

  ${myMedia.between("ipad", "medium")`
    font-size: 60px;
  `}

  ${myMedia.greaterThan("medium")`
    font-size: 80px;
  `}
`;

const Introduction = styled.div`
  color: ${theme.colors.grayDark};
  font-weight: 300;
  font-family: "Roboto", sans-serif;

  ${myMedia.lessThan("iphone5")`
    font-size: 10px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    font-size: 12px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    font-size: 14px;
  `}

  ${myMedia.between("ipad", "medium")`
    font-size: 20px;
  `}

  ${myMedia.greaterThan("medium")`
    font-size: 24px;
  `}
`;

const Container = styled.div`
  position: relative;
  display: flex;
  margin-top: 30px;
  margin-bottom: 60px;

  ${myMedia.lessThan("iphone5")`
    margin-bottom: 30px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`

    margin-bottom: 30px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    margin-bottom: 30px;
  `}

  ${myMedia.between("ipad", "medium")`
    margin-bottom: 30px;
  `}

  ${myMedia.greaterThan("medium")`
    margin-bottom: 60px;
  `}
`;

export default function IntroNav() {
  return (
    <Box>
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
    </Box>
  );
}
