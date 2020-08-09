import React from "react";
import styled from "styled-components";
import SelfSummary from "./DetailsSelfSummary";

const Title = styled.div`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 50px;
`;

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: ${(props: { width: number }) => `${props.width}px`};
  margin-bottom: 100px;
`;

const Experience = styled.div`
  position: relative;
  display: flex;
`;

const History = styled.div`
  position: relative;
  display: block;
  margin-left: 30px;
`;

export default function AboutMe() {
  return (
    <Container width={500}>
      <Title>About Me</Title>
      <SelfSummary />
    </Container>
  );
}
