import React from "react";
import styled from "styled-components";
import { theme } from "@src/styles/color";
import { myMedia } from "@src/styles/custom-media";
import { T1, T4 } from "@src/styles/typography";

const Container = styled.div`
  text-align: center;
  min-width: 280px;
  max-width: 400px;
`;

const Name = styled(T1)`
  color: ${theme.colors.grayDark};
`;

const Job = styled.div`
  ${myMedia.lessThan("iphone5")`
    margin-top: 12px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    margin-top: 18px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    margin-top: 20px;
  `}

  ${myMedia.between("ipad", "medium")`
    margin-top: 22px;
  `}

  ${myMedia.greaterThan("medium")`
    margin-top: 30px;
  `}
`;

const Summary = styled(T4)`
  color: ${theme.colors.gray};
  line-height: 22px;
`;

export default function AboutMeSummary() {
  return (
    <Container>
      <Name>Yasuhiro Ito</Name>
      <Summary>yasuhiro0312q@gamil.com</Summary>
      <Job>
        <Summary>Software Engineer</Summary>
        <Summary>Over 14 years professional experience</Summary>
      </Job>
    </Container>
  );
}
