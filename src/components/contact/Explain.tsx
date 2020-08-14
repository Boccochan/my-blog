import React from "react";
import styled, { keyframes } from "styled-components";
import { myMedia } from "@src/styles/custom-media";
import { T3 } from "@src/styles/typography";
import { theme } from "@src/styles/color";
import PurpleRobotImg from "@static/home/purple-robot-min.png";

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

const Fadein = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Ballon = styled.div`
  position: relative;
  display: inline-block;
  margin: 4em 0;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  color: #555;
  font-size: 16px;
  background: #fff;
  border: solid 3px #555;
  box-sizing: border-box;
  font-weight: 300;
  line-height: 22px;
  font-size: 16px;
  opacity: 0;
  animation: ${Fadein} 1s ease forwards 0.2s;

  &:before {
    content: "";
    position: absolute;
    bottom: -24px;
    left: 50%;
    margin-left: -15px;
    border: 12px solid transparent;
    border-top: 12px solid #fff;
    z-index: 2;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -30px;
    left: 50%;
    margin-left: -17px;
    border: 14px solid transparent;
    border-top: 14px solid #555;
    z-index: 1;
  }
`;

const Description = styled.div`
  margin-top: 30px;
  margin-left: 4px;
`;

const ImgBox = styled.div`
  position: absolute;
  bottom: 0;
  // top: 30px;
`;

const Img = styled.img`
  background-color: transparent;
`;

export default () => {
  return (
    <Container>
      <StyledT3>Contact Form</StyledT3>
      <Description>
        <Ballon>
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
