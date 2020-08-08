import React, { useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  LabelList,
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
      >
        <tspan x={x} dy="0em">
          {payload.value}
        </tspan>
      </text>
    </g>
  );
}

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

  const [ContainerWidth, setContainerWidth] = useState(0);
  const [OuterRadius, setRadiusSize] = useState(100);

  const resizeWindow = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 1080) {
      setRadiusSize(100);
      setContainerWidth(innerWidth / 2);
    } else if (320 < innerWidth && innerWidth <= 1080) {
      setRadiusSize(100);
      setContainerWidth(innerWidth);
    } else {
      setRadiusSize(60);
      setContainerWidth(innerWidth);
    }
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <Container width={`${ContainerWidth}px`}>
      <Title>Skill summary</Title>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius={OuterRadius}
        width={ContainerWidth}
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
