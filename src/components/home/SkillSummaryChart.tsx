import React, { useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import styled from "styled-components";
import { theme } from "../../styles/color";
import { Title } from "./Title";
import { mediaType } from "../../styles/custom-media";

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

export default function SkillSummaryChart() {
  const [width, setContainerWidth] = useState(0);
  const [outerRadius, setRadiusSize] = useState(100);
  const [height, setGraphHeight] = useState(300);
  const [cy, setGraphCy] = useState("50%");

  const num = (media: string) => Number(media.slice(0, -2));

  const resizeWindow = () => {
    const innerWidth = window.innerWidth;

    if (innerWidth < num(mediaType.galaxyFold)) {
      setGraphCy("45%");
      setRadiusSize(80);
      setContainerWidth(num(mediaType.galaxyFold));
      setGraphHeight(220);
    } else if (
      innerWidth >= num(mediaType.galaxyFold) &&
      innerWidth < num(mediaType.iphone5)
    ) {
      setGraphCy("45%");
      setRadiusSize(80);
      setContainerWidth(innerWidth);
      setGraphHeight(220);
    } else if (
      innerWidth >= num(mediaType.iphone5) &&
      innerWidth < num(mediaType.ipad)
    ) {
      setGraphCy("50%");
      setRadiusSize(100);
      setContainerWidth(innerWidth);
      setGraphHeight(240);
    } else if (
      innerWidth >= num(mediaType.ipad) &&
      innerWidth < num(mediaType.medium)
    ) {
      setGraphCy("50%");
      setRadiusSize(100);
      setContainerWidth(innerWidth);
      setGraphHeight(250);
    } else {
      setRadiusSize(100);
      setContainerWidth(innerWidth / 3);
      setGraphHeight(300);
      setGraphCy("40%");
    }
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

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
      A: 50,
    },
  ];

  return (
    <Container width={width}>
      <Title>Skill Summary</Title>
      <RadarChart
        cx="50%"
        cy={cy}
        outerRadius={outerRadius}
        width={width}
        height={height}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" tick={customTick} />
        <PolarRadiusAxis domain={[0, 100]} />
        <Radar
          name="Yasuhiro"
          dataKey="A"
          stroke={theme.colors.blue}
          fill={theme.colors.blue}
          fillOpacity={0.7}
        />
      </RadarChart>
    </Container>
  );
}
