import React from "react";
import styled from "styled-components";
import GreenRobotImg from "../../../static/home/green-robot.png";
import YellowRobotImg from "../../../static/home/small-yellow-robot.png";
import OrangeRobotImg from "../../../static/home/orange-robot.png";

const Img = styled.img`
  background-color: transparent;
`;

export const MascotIntro = () => {
  return (
    <div>
      <Img src={GreenRobotImg} alt="green robot img" />
      <Img src={YellowRobotImg} alt="green robot img" />
      <Img src={OrangeRobotImg} alt="green robot img" />
    </div>
  );
};
