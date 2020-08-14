import React from "react";
import styled from "styled-components";
import WorkTimeline from "./DetailsWorkTimeline";
import WorkHistory from "./DetailsWorkHistory";
import { myMedia } from "@src/styles/custom-media";
import { Title } from "@src/components/lib/Title";
import { graphql, useStaticQuery } from "gatsby";

const Container = styled.div`
  width: auto;

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
  const result = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          self {
            history {
              company
              term
              title
              details
            }
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Title>Work Experience</Title>
      <Experience>
        <WorkTimeline />
        <History>
          {result.site.siteMetadata.self.history.map(
            (data: {
              company: string;
              term: string;
              title: string;
              details: string;
            }) => (
              <WorkHistory
                company={data.company}
                term={data.term}
                title={data.title}
                details={data.details}
              />
            )
          )}
        </History>
      </Experience>
    </Container>
  );
}
