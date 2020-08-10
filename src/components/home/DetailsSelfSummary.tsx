import React from "react";
import styled from "styled-components";
import WorkTimeline from "./DetailsWorkTimeline";
import WorkHistory from "./DetailsWorkHistory";
import { theme } from "../../styles/color";

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

const Summary = styled.div`
  position: relative;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
  width: 400px;
  line-height: 20px;
`;

const Details = styled.div`
  position: relative;
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 40px;
`;

export default function SelfSummary() {
  return (
    <Container width={500}>
      <Summary>Self Summary</Summary>
      <Details>
        Experienced software engineer with wide range of technologies. Skills
        includes solving problems and excellent communication. Self-starter who
        suggested and launched a couple of projects, then contributed improved
        qualitiy of productions.
      </Details>
      <Summary>Education</Summary>
      <Details>
        <ul>
          <li>Aichi Institute of Technology 2001-2005</li>
          <li>London Language Institute in Canada 2016-2017</li>
        </ul>
      </Details>
      <Summary>Language</Summary>
      <Details>
        <ul>
          <li>Japanese - Native</li>
          <li>English - Fluent</li>
        </ul>
      </Details>
      <Summary>Location</Summary>
      <Details>Tokyo, Japan. I am willing to work anywhere.</Details>
    </Container>
  );
}
