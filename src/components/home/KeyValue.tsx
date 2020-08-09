import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/color";
import { customMedia } from "../../styles/custom-media";

export type Props = {
  title: string;
  name: string[];
  // tool: {
  //   name: string;
  //   color: string;
  // }[];
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
  // width: 500px;
  margin-top: 17px;
  margin-bottom: 17px;
  margin-right: auto;
  margin-left: auto;
`;

const Title = styled.div`
  padding-right: 18px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  color: #666666;
  width: 100px;
`;

const Value = styled.div`
  // padding: 4px 12px;
  font-size: 12px;
  font-weight: 300;
  color: ${theme.colors.gray};
  margin-right: 8px;
  margin-left: 2px;
  // background-color: ${theme.colors.red};
  width: 60px;
  // width: 400px;
`;

const BorderBottom = styled.div`
  position: relative;
  display: flex;
  border-bottom: 1px solid ${theme.colors.grayLight};
  width: 80px;
`;

export default function KeyValue(props: Props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      {/* <BorderBottom> */}
      {props.name.map((name: string) => (
        <Value>{name}</Value>
      ))}
      {/* </BorderBottom> */}
    </Container>
  );
}
