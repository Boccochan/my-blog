import React from "react";
import styled from "styled-components";
import { myMedia } from "@src/styles/custom-media";
import { T3 } from "@src/styles/typography";
import { theme } from "@src/styles/color";
import PurpleRobotImg from "@static/home/purple-robot-min.png";
import { Ballon } from "./Ballon";

const Container = styled.div`
  position: relative;
  width: 50%;
  padding: 20px;

  background-color: ${theme.colors.yellow};
  color: ${theme.colors.grayDark};
  ${myMedia.lessThan("ipadpro")`
    display: none;
  `}
`;

const StyledT3 = styled(T3)`
  padding: 4px;
  border-bottom: 1px solid ${theme.colors.graySuperLight};
`;

const Description = styled.div`
  margin-top: 30px;
  margin-left: 4px;
`;

const ImgBox = styled.div`
  position: absolute;
  bottom: 0;
`;

const Img = styled.img`
  background-color: transparent;
`;

export default () => {
  return (
    <Container>
      <StyledT3>Contact Form</StyledT3>
      <Description>
        <Ballon time="0.2s" margin="4em 0">
          IF YOU HAVE QUESTIONS, PLEASE LET ME KNOW. YOU DON'T NEED TO HESITATE
          TO SEND ME MESSAGES.
        </Ballon>
        <ImgBox>
          <Img src={PurpleRobotImg} />
        </ImgBox>
      </Description>
    </Container>
  );
};
