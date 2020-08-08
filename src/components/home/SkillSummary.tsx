import React, { useState, useEffect } from "react";
import SkillSummaryChart from "./SkillSummaryChart";
import SkillProgramming from "./SkillProgramming";
import styled from "styled-components";
import { theme } from "../../styles/color";

const Container = styled.div`
  position: relative;
  display: grid;
  z-index: 100;
  padding-top: 20px;
  background-color: ${theme.colors.blogBackground};
  gap: 25px;
  grid-template-columns: repeat(
    ${(props: { repeat: number }) => props.repeat},
    minmax(200px, 1fr)
  );
`;

export default function SkillSummary() {
  const [ContainerWidth, setContainerWidth] = useState(0);
  const [OuterRadius, setRadiusSize] = useState(100);
  const [Repeat, setRepeat] = useState(2);
  const [GraphWidh, setGraphWidth] = useState(0);

  const resizeWindow = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 1080) {
      setRepeat(2);
      setRadiusSize(100);
      setContainerWidth(innerWidth / 2);
      setGraphWidth(innerWidth / 2 - 200);
    } else if (innerWidth > 700 && innerWidth <= 1080) {
      setRepeat(1);
      setRadiusSize(60);
      setContainerWidth(innerWidth);
      setGraphWidth(innerWidth - 200);
    } else {
      setRepeat(1);
      setRadiusSize(60);
      setContainerWidth(innerWidth);
      setGraphWidth(innerWidth);
    }
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <Container repeat={Repeat}>
      <SkillSummaryChart width={ContainerWidth} outerRadius={OuterRadius} />
      {/* <SkillProgramming width={ContainerWidth} graphWidth={GraphWidh} /> */}
      <SkillProgramming graphWidth={GraphWidh} />
    </Container>
  );
}
