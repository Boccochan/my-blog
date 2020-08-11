import React, { useState, useEffect } from "react";
import SkillSummaryChart from "./SkillSummaryChart";
import SkillProgramming from "./SkillProgramming";
import SkillTools from "./SkillTools";
import styled from "styled-components";
import { theme } from "../../styles/color";
import { customMedia, mediaType } from "../../styles/custom-media";

const Container = styled.div`
  position: relative;
  display: grid;
  z-index: 100;
  padding-top: 20px;
  margin-bottom: 40px;
  background-color: ${theme.colors.blogBackground};
  gap: 25px;
  grid-template-columns: repeat(3, minmax(200px, 1fr));

  ${customMedia.lessThan("large")`
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  `}
`;

export default function SkillSummary() {
  const [ContainerWidth, setContainerWidth] = useState(0);
  const [OuterRadius, setRadiusSize] = useState(100);
  const [GraphWidh, setGraphWidth] = useState(0);
  const [GraphHeight, setGraphHeight] = useState(300);
  const [GraphCy, setGraphCy] = useState("50%");

  const num = (media: string) => Number(media.slice(0, -2));

  const resizeWindow = () => {
    const innerWidth = window.innerWidth;

    if (innerWidth < num(mediaType.galaxyFold)) {
      setGraphCy("45%");
      setRadiusSize(80);
      setContainerWidth(num(mediaType.galaxyFold));
      setGraphWidth(innerWidth);
      setGraphHeight(220);
    } else if (
      innerWidth >= num(mediaType.galaxyFold) &&
      innerWidth < num(mediaType.iphone5)
    ) {
      setGraphCy("45%");
      setRadiusSize(80);
      setContainerWidth(innerWidth);
      setGraphWidth(innerWidth);
      setGraphHeight(220);
    } else if (
      innerWidth >= num(mediaType.iphone5) &&
      innerWidth < num(mediaType.ipad)
    ) {
      setGraphCy("50%");
      setRadiusSize(100);
      setContainerWidth(innerWidth);
      setGraphWidth(innerWidth);
      setGraphHeight(240);
    } else if (
      innerWidth >= num(mediaType.ipad) &&
      innerWidth < num(mediaType.medium)
    ) {
      setGraphCy("50%");
      setRadiusSize(100);
      setContainerWidth(innerWidth);
      setGraphWidth(innerWidth);
      setGraphHeight(250);
    } else {
      setRadiusSize(100);
      setContainerWidth(innerWidth / 3);
      setGraphWidth(innerWidth / 3);
      setGraphHeight(300);
      setGraphCy("40%");
    }
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <Container>
      <SkillSummaryChart
        width={ContainerWidth}
        outerRadius={OuterRadius}
        height={GraphHeight}
        cy={GraphCy}
      />
      <SkillProgramming graphWidth={GraphWidh} />
      <SkillTools />
    </Container>
  );
}
