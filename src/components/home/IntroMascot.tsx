import React from "react";
import styled from "styled-components";
import GreenRobotImg from "@static/home/green-robot-min.png";
import YellowRobotImg from "@static/home/small-yellow-robot-min.png";
import OrangeRobotImg from "@static/home/orange-robot-min.png";
import { myMedia } from "@src/styles/custom-media";

const Img = styled.img`
  background-color: transparent;
  ${myMedia.between("ipad", "max")`
    width: 180px;
    height: auto;
  `}
`;

export const MascotIntro = () => {
  return (
    <div>
      <Img src={GreenRobotImg} alt="green robot img" />
      <Img src={YellowRobotImg} alt="yellow robot img" />
      <Img src={OrangeRobotImg} alt="orange robot img" />
    </div>
  );
};
