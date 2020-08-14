import React from "react";
import styled from "styled-components";
import MySummary from "./AboutMeSummary";
import SittingRobotImg from "@static/home/sitting-robot-min.png";
import StarImg from "@static/home/star.png";
import { myMedia } from "@src/styles/custom-media";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  ${myMedia.lessThan("medium")`
    height: auto;
  `}
  ${myMedia.greaterThan("medium")`
    height: 350px;
  `}
`;

const Block = styled.div`
  width: 400px;
  margin-right: auto;
  margin-left: auto;
  ${myMedia.greaterThan("medium")`
    margin-top: 100px;
  `}
  ${myMedia.lessThan("medium")`
    margin-top: 50px;
    margin-bottom: 50px;
  `}
`;

const BlockSittingRobot = styled.div`
  position: absolute;
  top: 0;
  left: 300px;

  ${myMedia.lessThan("medium")`
    opacity: 0;
  `}

  ${myMedia.between("medium", "veryHuge")`
    left: 200px;
  `}
`;

const BlockStar = styled.div`
  position: absolute;

  top: 80px;
  right: 300px;

  ${myMedia.lessThan("medium")`
    opacity: 0;
  `}
`;

const Img = styled.img`
  background-color: transparent;
`;

export default function AboutMe(props: { ready: () => void }) {
  const images = [SittingRobotImg, StarImg];
  let srcList = [] as any[];

  const load = (src: any) => {
    srcList.push(src);

    if (srcList.length === images.length) {
      props.ready();
    }
  };

  return (
    <Container>
      <BlockSittingRobot>
        <Img src={images[0]} onLoad={() => load(images[0])} />
      </BlockSittingRobot>
      <Block>
        <MySummary />
      </Block>
      <BlockStar>
        <Img src={images[1]} onLoad={() => load(images[1])} />
      </BlockStar>
    </Container>
  );
}
