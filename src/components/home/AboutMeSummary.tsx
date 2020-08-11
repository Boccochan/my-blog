import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/color";
import { customMedia } from "../../styles/custom-media";
import { myMedia } from "../../styles/custom-media";

const Container = styled.div`
  text-align: center;
  min-width: 280px;
  max-width: 400px;
`;

const Name = styled.div`
  color: ${theme.colors.grayDark};
  font-size: 48px;
  font-weight: 300;
  
  ${myMedia.lessThan("iphone5")`
    font-size: 30px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    font-size: 36px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    font-size: 40px;
  `}

  ${myMedia.between("ipad", "medium")`
    font-size: 48px;
  `}

  ${myMedia.greaterThan("medium")`
    font-size: 48px;
  `}

`;

const Job = styled.div`
  margin-top: 30px;

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

const Summary = styled.div`
  color: ${theme.colors.gray};
  line-height: 22px;
  font-size: ${(props: { fontSize: number }) => props.fontSize}px;
  font-weight: 300;
  // ${customMedia.lessThan("medium")`
  //   font-size: 12px;
  // `}

  ${myMedia.lessThan("iphone5")`
    font-size: 12px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    font-size: 12px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    font-size: 14px;
  `}

  ${myMedia.between("ipad", "medium")`
    font-size: 14px;
  `}

  ${myMedia.greaterThan("medium")`
    font-size: 16px;
  `}
`;

export default function AboutMeSummary() {
  return (
    <Container>
      <Name>Yasuhiro Ito</Name>
      <Summary fontSize={14}>yasuhiro0312q@gamil.com</Summary>
      <Job>
        <Summary fontSize={20}>Software Engineer</Summary>
        <Summary fontSize={20}>Over 14 years professional experience</Summary>
      </Job>
    </Container>
  );
}
