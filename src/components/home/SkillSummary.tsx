import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

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
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={540}
      height={500}
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
  );
}
