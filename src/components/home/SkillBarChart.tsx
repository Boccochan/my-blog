import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../styles/color";
import { T6 } from "../../styles/typography";
import { mediaType } from "../../styles/custom-media";

type Props = {
  title: string;
  level: number;
};

const Container = styled.div`
  position: relative;
  display: flex;
  width: 400px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
`;

const Title = styled(T6)`
  padding-right: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  color: #666666;
  width: 80px;
`;

const Bar = styled.div`
  position: relative;
  width: ${(props: { width: number }) => props.width}px;
  height: 18px;
  background-color: ${theme.colors.gray};
  border-radius: 4px;
`;

const Level = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props: { level: number }) => props.level}px;
  height: 18px;
  border-radius: 4px;
  transition-duration: 2s;
  background-color: ${theme.colors.green};
`;

export default function BarChart(props: Props) {
  const [BarWidth, setBarWidth] = useState(0);
  const [CalcedLevel, setCalcLevel] = useState(0);
  const level = props.level;

  const num = (media: string) => Number(media.slice(0, -2));
  const calc = (level: number, scale: number) => (level * scale) / 100;

  const resizeWindow = () => {
    const innerWidth = window.innerWidth;
    let scale = 0;

    if (innerWidth <= num(mediaType.galaxyFold)) {
      scale = 180;
    } else if (
      innerWidth > num(mediaType.galaxyFold) &&
      innerWidth <= num(mediaType.iphone5)
    ) {
      scale = 220;
    } else if (
      innerWidth > num(mediaType.iphone5) &&
      innerWidth < num(mediaType.ipad)
    ) {
      scale = 260;
    } else if (
      innerWidth >= num(mediaType.ipad) &&
      innerWidth < num(mediaType.medium)
    ) {
      scale = 300;
    } else {
      scale = 300;
    }

    setBarWidth(scale);
    setCalcLevel(calc(level, scale));
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <Container>
      <Title>{props.title}</Title>
      <Bar width={BarWidth}>
        {/* <Level level={level} /> */}
        <Level level={CalcedLevel} />
      </Bar>
    </Container>
  );
}
