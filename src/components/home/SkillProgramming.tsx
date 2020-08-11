import React from "react";
import styled from "styled-components";
import BarChart from "./SkillBarChart";
import { Title } from "./Title";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: auto;
`;

export default function SkillProgramming() {
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
    <Container>
      <Title>Programming Skills</Title>
      {data.map((prog) => {
        return <BarChart title={prog.name} level={prog.level} />;
      })}
    </Container>
  );
}
