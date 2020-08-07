import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import styled from "styled-components";

const Title = styled.div`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
`;

const Container = styled.div`
  width: ${(props: { width: string }) => props.width};
`;

export default function Skills() {
  const data = [
    {
      subject: "Front-End",
      A: 60,
    },
    {
      subject: "Back-End",
      A: 78,
    },
    {
      subject: "AWS",
      A: 68,
    },
    {
      subject: "DB",
      A: 60,
    },
    {
      subject: "Network",
      A: 40,
    },
    {
      subject: "Security",
      A: 30,
    },
  ];
  return (
    <Container width="540px">
      <Title>Skill summary</Title>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius={100}
        width={540}
        height={300}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis domain={[0, 100]} />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </Container>
  );
}
