import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/color";
import { customMedia } from "../../styles/custom-media";

type Props = {
  title: string;
  level: number;
};

type BarType = {
  width: number;
  level: number;
  color: string;
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

const Title = styled.div`
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
  width: 300px;
  height: 18px;
  background-color: ${theme.colors.grayDark};
  border-radius: 4px;
  &::after {
    content: "";
    position: absolute;
    width: ${(props: BarType) => props.level * 3}px;
    height: 18px;
    background-color: ${theme.colors.blue};
    border-radius: 4px;
  }
`;

export default function BarChart(props: Props) {
  const level = props.level;

  return (
    <Container>
      <Title>{props.title}</Title>
      <Bar level={level} />
    </Container>
  );
}
