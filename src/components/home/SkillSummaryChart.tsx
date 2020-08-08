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
  width: ${(props: { width: number }) => `${props.width}px`};
`;

function customTick({
  payload,
  x,
  y,
  textAnchor,
  stroke,
  radius,
}: {
  payload: { value: string };
  x: number;
  y: number;
  textAnchor: string;
  stroke: string;
  radius: string;
}) {
  return (
    <g>
      <text
        radius={radius}
        stroke={stroke}
        x={x}
        y={y}
        text-anchor={textAnchor}
        fontSize="12px"
        fill="#666666"
      >
        <tspan x={x} dy="0em">
          {payload.value}
        </tspan>
      </text>
    </g>
  );
}

type Props = {
  width: number;
  outerRadius: number;
};

export default function SkillSummaryChart(props: Props) {
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
    <Container width={props.width}>
      <Title>Skill Summary</Title>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius={props.outerRadius}
        width={props.width}
        height={300}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" tick={customTick} />
        <PolarRadiusAxis domain={[0, 100]} />
        <Radar
          name="Yasuhiro"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </Container>
  );
}
