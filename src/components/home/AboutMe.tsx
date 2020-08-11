import React from "react";
import styled from "styled-components";
import MySummary from "./AboutMeSummary";
import SittingRobotImg from "../../../static/home/sitting-robot.png";
import StarImg from "../../../static/home/star.png";
import { customMedia } from "../../styles/custom-media";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;

const Block = styled.div`
  width: 400px;
  margin-right: auto;
  margin-left: auto;
  ${customMedia.greaterThan("large")`
    margin-top: 100px;
  `}
  ${customMedia.lessThan("large")`
    margin-top: 50px;
    margin-bottom: 50px;
  `}
`;

const BlockSittingRobot = styled.div`
  position: absolute;
  top: 0;
  left: 300px;

  ${customMedia.lessThan("large")`
    opacity: 0;
  `}

  ${customMedia.between("large", "huge")`
    left: 200px;
  `}
`;

const BlockStar = styled.div`
  position: absolute;

  top: 80px;
  right: 300px;

  ${customMedia.lessThan("large")`
    opacity: 0;
  `}
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
