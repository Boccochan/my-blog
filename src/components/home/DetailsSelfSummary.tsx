import React from "react";
import styled from "styled-components";
import { myMedia } from "../../styles/custom-media";

const Container = styled.div`
  margin-bottom: 100px;
  ${myMedia.lessThan("iphone5")`
    padding-right: 8px;
    padding-left: 8px;
    width: auto;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    padding-right: 10px;
    padding-left: 10px;
    width: auto;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    padding-right: 10px;
    padding-left: 10px;
    width: auto;
  `}

  ${myMedia.between("ipad", "medium")`
    width: 500px;
    margin-right: auto;
    margin-left: auto;
  `}

  ${myMedia.greaterThan("medium")`
    width: 500px;
    margin-right: auto;
    margin-left: auto;
  `}
`;

const Summary = styled.div`
  position: relative;
  font-size: 20px;
  font-weight: 300;
  width: auto;
  line-height: 20px;

  ${myMedia.lessThan("iphone5")`
    margin-bottom: 12px;
    font-size: 14px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    margin-bottom: 16px;
    font-size: 16px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    margin-bottom: 18px;
    font-size: 16px;
  `}

  ${myMedia.between("ipad", "medium")`
    margin-bottom: 20px;
    font-size: 18px;
  `}

  ${myMedia.greaterThan("medium")`
    margin-bottom: 20px;
    font-size: 20px;
  `}
`;

const Details = styled.div`
  position: relative;
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 40px;
  width: auto;

  ${myMedia.lessThan("iphone5")`
    font-size: 10px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    font-size: 12px;
    width: auto;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    font-size: 12px;
    width: auto;
  `}

  ${myMedia.between("ipad", "medium")`
    font-size: 14px;
    width: 500px;
    margin-right: auto;
    margin-left: auto;
  `}

  ${myMedia.greaterThan("medium")`
    font-size: 14px;
    width: 500px;
    margin-right: auto;
    margin-left: auto;
  `}
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
