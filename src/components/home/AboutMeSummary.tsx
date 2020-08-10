import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/color";
import { customMedia } from "../../styles/custom-media";
import EmailIcon from "@material-ui/icons/Email";

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

// const IconText = styled.div`
//   position: relative;
//   display: flex;
//   width: 200px;
//   margin-right: auto;
//   margin-left: auto;
// `;

export default function AboutMeSummary() {
  return (
    <Container>
      <Name>Yasuhiro Ito</Name>
      <Summary fontSize={14}>boccochan@gamil.com</Summary>
      <Job>
        <Summary fontSize={20}>Software Engineer</Summary>
        <Summary fontSize={20}>Over 14 years professional experience</Summary>
      </Job>
    </Container>
  );
}
