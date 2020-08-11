import React from "react";
import styled from "styled-components";
import WorkTimeline from "./DetailsWorkTimeline";
import WorkHistory from "./DetailsWorkHistory";
import { myMedia } from "../../styles/custom-media";
import { Title } from "./DetailsTitle";

const Container = styled.div`
  width: auto;
  // margin-bottom: 100px;

  ${myMedia.lessThan("iphone5")`
    padding-right: 8px;
    padding-left: 8px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    padding-right: 12px;
    padding-left: 12px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    padding-right: 12px;
    padding-left: 12px;
  `}

  // ${myMedia.between("ipad", "medium")`
  //   font-size: 30px;
  //   margin-bottom: 40px;
  // `}

  // ${myMedia.greaterThan("medium")`
  //   font-size: 30px;
  //   margin-bottom: 50px;
  // `}

`;

const Experience = styled.div`
  position: relative;
  display: flex;
  ${myMedia.lessThan("iphone5")`
    width: auto;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    width: auto;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
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

const History = styled.div`
  position: relative;
  display: block;
  ${myMedia.lessThan("iphone5")`
    width: auto;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    width: auto;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    margin-left: 0px;
  `}

  ${myMedia.between("ipad", "medium")`
    margin-left: 30px;
  `}

  ${myMedia.greaterThan("medium")`
    margin-left: 30px;
  `}

`;

export default function WorkExperience() {
  const history = [
    {
      company: "Qualitia.co.ltd.,",
      term: "1.5 years",
      title: "Software Engineer",
      details:
        "Developing managed DNS service and new services from scratch. Researching and building automated deploying and testing systems on a cloud infrastructure.",
    },
    {
      company: "deBit.co.ltd.,",
      term: "9 months",
      title: "Software Engineer",
      details: "Developed a core part of a trading virtual currency system.",
    },
    {
      company: "B.U.G.co.ltd.,",
      term: "6 months",
      title: "Software Engineer",
      details: "Developed a mail monitoring system and supported customers",
    },
    {
      company: "Hagiwara Solutions.co.ltd.,",
      term: "10 years",
      title: "Software / Firmware Engineer",
      details:
        "Developed a part of SSD firmware. Builded SSD and NAND flash memory testing system.",
    },
  ];
  return (
    <Container width={500}>
      <Title>Work Experience</Title>
      <Experience>
        <WorkTimeline />
        <History>
          {history.map((data) => (
            <WorkHistory
              company={data.company}
              term={data.term}
              title={data.title}
              details={data.details}
            />
          ))}
        </History>
      </Experience>
    </Container>
  );
}
