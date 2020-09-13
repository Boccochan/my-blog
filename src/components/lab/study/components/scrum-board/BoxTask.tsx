import React from "react";
import styled from "styled-components";
import { theme } from "@src/styles/color";
import { T3 } from "@src/styles/typography";

const Wrapper = styled.div`
  width: ${(props: { width: number }) => props.width}px;
  text-align: center;
`;

const Title = styled.div`
  background-color: ${(props: { color: string }) => props.color};
  color: ${theme.colors.gray};
  padding: 2px 10px;
`;

type Props = {
  title: string;
  color: string;
  width: number;
};

export default (props: Props) => {
  return (
    <Wrapper width={props.width}>
      <Title color={props.color}>
        <T3>{props.title}</T3>
      </Title>
    </Wrapper>
  );
};
