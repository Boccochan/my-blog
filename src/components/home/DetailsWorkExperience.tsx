import React from "react";
import styled from "styled-components";
import WorkTimeline from "./DetailsWorkTimeline";
import WorkHistory from "./DetailsWorkHistory";

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
