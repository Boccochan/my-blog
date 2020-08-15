import React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "@src/styles/color";
import { T2 } from "@src/styles/typography";
import { myMedia } from "@src/styles/custom-media";
import GrayDogRobot from "@static/home/gray-dog-robot-min.png";

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${theme.colors.grayDark};
  z-index: 10000;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  text-align: center;
`;

const Open = keyframes`
  from {
    height: 80px;
  }
  to {
    height: 300px;
  }
`;

const Dialog = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  text-aling: center;
  margin-top: auto;
  margin: auto;
  z-index: 10010;
  width: 100%;
  heigth: 200px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 5px;
  animation: ${Open} 1s ease forwards 0.8s;
  padding: 20px 20px;

  ${myMedia.greaterThan("ipad")`
    width: 400px;
  `}
`;

const Greeting = styled(T2)`
  margin-bottom: 10px;
  text-align: center;
`;

const ShowImg = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ImgBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;

  animation: ${ShowImg} 1s ease forwards 2s;
`;

const Img = styled.img`
  background-color: transparent;
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
  margin: 2em 0;
  padding: 7px 10px;
  min-width: 100px;
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
  animation: ${Fadein} 1s ease forwards 2.2s;

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

export default class Thanks extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Cover />
        <Dialog>
          <Greeting>Thank you!!</Greeting>
          {/* <Telling>I am going to reply you as soon as possible.</Telling> */}
          <Ballon>I AM GOING TO REPLY YOU AS SOON AS POSSIBLE. Bow Bow!</Ballon>
          <ImgBox>
            <Img src={GrayDogRobot} />
          </ImgBox>
        </Dialog>
      </React.Fragment>
    );
  }
}
