import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/color";
import { myMedia } from "../../styles/custom-media";

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

const Title = styled.div`
  font-weight: 300;
  margin-bottom: 10px;
  ${myMedia.lessThan("iphone5")`
    font-size: 8px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    font-size: 10px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    font-size: 10px;
  `}

  ${myMedia.between("ipad", "medium")`
    font-size: 12px;
  `}

  ${myMedia.greaterThan("medium")`
    font-size: 12px;
  `}
`;

const Company = styled.div`
  display: inline-block;
  ${myMedia.lessThan("iphone5")`
    font-size: 14px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    font-size: 16px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    font-size: 16px;
  `}

  ${myMedia.between("ipad", "medium")`
    font-size: 18px;
  `}

  ${myMedia.greaterThan("medium")`
    font-size: 20px;
  `}
`;

const Term = styled.div`
  margin-top: 3px;
  display: inline-block;
  float: right;
  font-size: 12px;
  vertical-align: bottom;
  ${myMedia.lessThan("iphone5")`
    font-size: 8px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    font-size: 10px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    font-size: 10px;
  `}

  ${myMedia.between("ipad", "medium")`
    font-size: 12px;
  `}

  ${myMedia.greaterThan("medium")`
    font-size: 12px;
  `}

`;

const Description = styled.div`
  font-weight: 300;
  ${myMedia.lessThan("iphone5")`
    font-size: 10px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    font-size: 12px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    font-size: 12px;
  `}

  ${myMedia.between("ipad", "medium")`
    font-size: 14px;
  `}

  ${myMedia.greaterThan("medium")`
    font-size: 14px;
  `}
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
