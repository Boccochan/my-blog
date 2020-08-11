import React from "react";
import SkillSummaryChart from "./SkillSummaryChart";
import SkillProgramming from "./SkillProgramming";
import SkillTools from "./SkillTools";
import styled from "styled-components";
import { theme } from "@src/styles/color";
import { customMedia } from "@src/styles/custom-media";

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
  return (
    <Container>
      <SkillSummaryChart />
      <SkillProgramming />
      <SkillTools />
    </Container>
  );
}
