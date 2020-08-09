import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/color";
import { customMedia } from "../../styles/custom-media";

const Container = styled.div`
  text-align: center;
  min-width: 280px;
  max-width: 400px;
`;

const Name = styled.div`
  color: ${theme.colors.grayDark};
  font-size: 48px;
  ${customMedia.lessThan("medium")`
    font-size: 40px;
  `}
`;

const Job = styled.div`
  margin-top: 30px;
`;

const Summary = styled.div`
  color: ${theme.colors.gray};
  line-height: 22px;
  font-size: ${(props: { fontSize: number }) => props.fontSize}px;
  font-weight: 300;
  ${customMedia.lessThan("medium")`
    font-size: 12px;
  `}
`;

export default function AboutMeSummary() {
  return (
    <Container>
      <Name>Yasuhiro Ito</Name>
      <Job>
        <Summary fontSize={20}>Software Engineer</Summary>
        <Summary fontSize={20}>Over 14 years professional experience</Summary>
      </Job>
    </Container>
  );
}
