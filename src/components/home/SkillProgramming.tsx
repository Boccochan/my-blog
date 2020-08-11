import React from "react";
import styled from "styled-components";
import BarChart from "./BarChart";
import { Title } from "./SkillTitle";
import { myMedia } from "../../styles/custom-media";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: ${(props: { width: number }) => `${props.width}px`};
`;

const BarChartBox = styled.div`
  ${myMedia.lessThan("iphone5")`
    margin-top: 20px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    margin-top: 16px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    margin-top: 18px;
  `}

  ${myMedia.between("ipad", "medium")`
    margin-top: 20px;
  `}

  ${myMedia.greaterThan("medium")`
    margin-top: 40px;
  `}

`;

type Props = {
  graphWidth: number;
};

export default function SkillProgramming(props: Props) {
  const data = [
    {
      name: "Typescript",
      level: 70,
    },
    {
      name: "Javascript",
      level: 40,
    },
    {
      name: "Python3",
      level: 65,
    },
    {
      name: "Rust",
      level: 40,
    },
    {
      name: "HTML/CSS",
      level: 50,
    },
    {
      name: "C",
      level: 84,
    },
    {
      name: "SQL",
      level: 28,
    },
    {
      name: "Bash",
      level: 34,
    },
  ];
  return (
    <Container width={props.graphWidth}>
      <Title>Programming Skills</Title>
      <BarChartBox>
        {data.map((prog) => {
          return <BarChart title={prog.name} level={prog.level} />;
        })}
      </BarChartBox>
    </Container>
  );
}
