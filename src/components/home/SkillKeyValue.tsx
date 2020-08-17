import React from "react";
import styled from "styled-components";
import { theme } from "@src/styles/color";
import { myMedia } from "@src/styles/custom-media";
import { T6 } from "@src/styles/typography";

export type Props = {
  title: string;
  name: string[];
};

const Container = styled.div`
  position: relative;
  display: flex;
  width: auto;
  margin-top: 17px;
  margin-bottom: 17px;
  margin-right: auto;
  margin-left: auto;
`;

const Title = styled(T6)`
  padding-right: 18px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #666666;
  width: 100px;
  ${myMedia.lessThan("iphone5")`
    width: 86px;
    padding-right: 10px;
  `}
`;

const Value = styled(T6)`
  font-weight: 300;
  color: ${theme.colors.gray};
  margin-right: 8px;
  margin-left: 2px;
  width: 60px;

  ${myMedia.lessThan("iphone5")`
    margin-right: 0px;
    margin-left: 1px;
    width: 50px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    margin-right: 0px;
    margin-left: 0px;
  `}
`;

export default function KeyValue(props: Props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      {props.name.map((name: string, index) => (
        <Value key={index}>{name}</Value>
      ))}
    </Container>
  );
}
