import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/color";
import WorkTimeline from "./DetailsWorkTimeline";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: ${(props: { width: number }) => `${props.width}px`};
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
  width: 400px;
  line-height: 20px;
  border-bottom: 1px solid ${theme.colors.gray};
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 10px;
`;

const Company = styled.div`
  display: inline-block;
  font-size: 20px;
`;

const Term = styled.div`
  margin-top: 3px;
  display: inline-block;
  float: right;
  font-size: 12px;
  vertical-align: bottom;
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 300;
`;

export default function WorkExperience(props: Props) {
  return (
    <Container width={400}>
      <Summary>
        <Company>{props.company}</Company>
        <Term>{props.term}</Term>
      </Summary>
      <Title>{props.title}</Title>
      <Description>{props.details}</Description>
    </Container>
  );
}
