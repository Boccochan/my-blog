import React from "react";
import styled from "styled-components";
import SelfSummary from "./DetailsSelfSummary";
import { Title } from "./DetailsTitle";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  // width: ${(props: { width: number }) => `${props.width}px`};
  width: auto;
  margin-bottom: 100px;
`;

export default function AboutMe() {
  return (
    <Container width={500}>
      <Title>About Me</Title>
      <SelfSummary />
    </Container>
  );
}
