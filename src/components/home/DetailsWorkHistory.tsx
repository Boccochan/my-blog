import React from "react";
import styled from "styled-components";
import { theme } from "@src/styles/color";
import { T3, T5, D1 } from "@src/styles/typography";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: auto;
  margin-bottom: 40px;
`;

type Props = {
  company: string;
  term: string;
  title: string;
  details: string;
};

const Summary = styled.div`
  position: relative;
  font-weight: 300;
  margin-bottom: 20px;
  width: auto;
  line-height: 20px;
  border-bottom: 1px solid ${theme.colors.gray};
`;

const Title = styled(T5)`
  font-weight: 300;
  margin-bottom: 10px;
`;

const Company = styled(T3)`
  display: inline-block;
`;

const Term = styled(T5)`
  margin-top: 3px;
  display: inline-block;
  float: right;
  vertical-align: bottom;
`;

export default function WorkExperience(props: Props) {
  return (
    <Container>
      <Summary>
        <Company>{props.company}</Company>
        <Term>{props.term}</Term>
      </Summary>
      <Title>{props.title}</Title>
      <D1>{props.details}</D1>
    </Container>
  );
}
