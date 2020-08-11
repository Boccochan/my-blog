import React from "react";
import styled from "styled-components";
import BarChart from "./BarChart";
import { myMedia } from "../../styles/custom-media";
import { T2 } from "../../styles/typography";
import { Title } from "./Title";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: ${(props: { width: number }) => `${props.width}px`};
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
      {data.map((prog) => {
        return <BarChart title={prog.name} level={prog.level} />;
      })}
    </Container>
  );
}
