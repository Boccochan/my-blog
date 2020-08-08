import React from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts";
import styled from "styled-components";

const Title = styled.div`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
`;

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: ${(props: { width: number }) => `${props.width}px`};
`;

type Props = {
  // width: number;
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
      level: 60,
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
      level: 30,
    },
    {
      name: "Bash",
      level: 40,
    },
  ];
  return (
    <Container width={props.graphWidth}>
      <Title>Programming Skills</Title>
      <BarChart
        width={props.graphWidth}
        height={300}
        data={data}
        layout="vertical"
        margin={{ top: 35, right: 10, left: 10, bottom: 5 }}
      >
        <XAxis type="number" tick={{ fontWeight: 30 }} />
        <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Bar dataKey="level" fill="#82ca9d" />
      </BarChart>
    </Container>
  );
}
