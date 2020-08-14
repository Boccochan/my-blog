import React from "react";
import styled from "styled-components";
import SelfSummary from "./DetailsSelfSummary";
import { Title } from "@src/components/lib/Title";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: auto;
  margin-bottom: 100px;
`;

export default function AboutMe() {
  return (
    <Container>
      <Title>About Me</Title>
      <SelfSummary />
    </Container>
  );
}
