import React from "react";
import styled from "styled-components";
import MySummary from "./AboutMeSummary";
import SittingRobotImg from "../../../static/home/sitting-robot.png";
import StarImg from "../../../static/home/star.png";
// import { theme } from "../../styles/color";
// import media from "styled-media-query";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;

const Block = styled.div`
  width: 400px;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
`;

const BlockSittingRobot = styled.div`
  position: absolute;
  top: 0;
  left: 300px;
`;

const BlockStar = styled.div`
  position: absolute;
  top: 80px;
  right: 300px;
`;

const Img = styled.img`
  background-color: transparent;
`;

export default function AboutMe() {
  return (
    <Container>
      <BlockSittingRobot>
        <Img src={SittingRobotImg} />
      </BlockSittingRobot>
      <Block>
        <MySummary />
      </Block>
      <BlockStar>
        <Img src={StarImg} />
      </BlockStar>
    </Container>
  );
}
